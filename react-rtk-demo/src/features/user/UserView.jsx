import React from "react";

import { fetchUserDetailsActions } from "./userSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserView = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserDetailsActions())
    }, [])
    return (
        <div>
            <h2>List of Users - </h2>
            {user.loading && <div>Loading ...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null }
            {!user.loading && user.userDetails.length ? (
                <ul>
                    {user.userDetails.map(each => <li key={each.id}>{each.name}</li>)}
                </ul>
            ): null}
        </div>
    )
}