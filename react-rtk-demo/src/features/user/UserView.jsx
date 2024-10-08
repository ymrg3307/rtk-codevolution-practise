import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const getView = () => {
        if (user.loading) {
            return <h2>Loading...</h2>
        }
        else if (user.error) {
            return <h2>error.message</h2>
        }
        else {
            return (
                <>
                    <h2>List of users</h2>
                    <ul>
                        {user.users.map(obj => <li key={obj.id}>{obj.name}</li>)}
                    </ul>
                </>
            )
        }
    }
    return (
        <div>
            {
                getView()
            }
        </div>
    )
}
