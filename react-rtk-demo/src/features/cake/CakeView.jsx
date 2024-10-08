import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
export const CakeView = () => {

    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>No of cakes - {noOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(1))}>Restock Cakes</button>
        </div>
    )
}
