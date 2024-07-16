import React from 'react'
import { formatNumber } from '../../utils/formatter'
import { useCartDispatch } from '../contexts/CartContext'
export default function MealItem({ meal: { id, name, price, description, image } }) {
    const formattedPrice = formatNumber(price)
    const dispatch = useCartDispatch()


    return (

        <div className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${image}`}></img>
                <div>
                    <h3>{name}</h3>
                    <h1 className='meal-item-price'>{formattedPrice}</h1>


                    <p className='meal-item-description'>
                        {description}

                    </p>
                </div>
                <div className='meal-item-actions'>
                    <button className='button' onClick={
                        () => {
                            dispatch({
                                id: id,
                                type: "ADD",
                                name: name,
                                price: price
                            })
                        }
                    }>Add to Cart</button>
                </div>


            </article>

        </div>
    )
}
