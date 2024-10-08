import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
        builder.addCase(cakeOrdered, state => { state.noOfIcecreams -= 1 })
    }
})


export default iceccreamSlice.reducer
export const { ordered, restocked } = iceccreamSlice.actions
