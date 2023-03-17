import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { order, restock } from "./icecreamSlice";

export const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(order())} >Order Icecream</button>
            <button onClick={() => dispatch(restock(2))} >Restock Icecream</button>
        </div>
    )
}