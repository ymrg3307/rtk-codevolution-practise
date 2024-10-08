const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const applyMiddleware = redux.applyMiddleware
//Generally use constants to avoid mistakes in type value
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

//action creator
function orderCake() {
    return {
        type: CAKE_ORDERED
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,//needed as usually state might have other properties
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,//needed as usually state might have other properties
                numOfIceCreams: state.numOfIceCreams - 1
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//1-create store by passing the reducer
const store = createStore(rootReducer,applyMiddleware(logger))
//2-should be able to access state
console.log('Initial State', store.getState())

//3-subscribe to state changes, also a unsubribe method is returned
const unsubscribe = store.subscribe(()=>{})

//4-dispatch an action using action creator
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(5))

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(3)


//unsubscribe to store using the returrned functioin in step 3
unsubscribe()