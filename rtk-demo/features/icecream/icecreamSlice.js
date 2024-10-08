const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    noOfIcecreams: 20
}
const iceccreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.noOfIcecreams -= 1
        },
        restocked: (state, action) => {
            state.noOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.noOfIcecreams -= 1
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => { state.noOfIcecreams -= 1 })
    } 
})


module.exports = iceccreamSlice.reducer
module.exports.iceccreamActions = iceccreamSlice.actions