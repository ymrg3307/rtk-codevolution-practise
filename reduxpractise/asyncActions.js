const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')
const { thunk: thunkMiddleWare } = require('redux-thunk')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequested())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                res => {
                    const users = res.data.map(user => user.id)
                    dispatch(fetchUserSuccess(users))
                }
            )
            .catch(err => {
                console.log(err)
                dispatch(fetchUserFailure(err.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleWare))

store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())