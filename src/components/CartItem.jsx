import React from 'react'
import { useCartDispatch } from '../contexts/CartContext'
export default function CartItem({ item: { id, name, qty, price } }) {
    const dispatch = useCartDispatch()
    return (
        <li className='cart-item'>
            <h2>
                {name} x {qty}
            </h2>
            <h3>
                ${price * qty}
            </h3>
            <div className='cart-item-actions'>
                <button onClick={() => {
                    dispatch({ id, type: "INCREASE" })
                }}>+</button>
                {qty}
                <button onClick={() => {
                    dispatch({ id, type: "DECREASE" })
                }}>-</button>
            </div>
        </li>
    )
}
