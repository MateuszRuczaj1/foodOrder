import React from 'react'
import Modal from './Modal'
import { useCart } from '../contexts/CartContext'
import { useModal } from '../contexts/ModalContext'
import CartItem from './CartItem'
export default function Cart() {
    const cart = useCart()
    const modalCtx = useModal()
    function handleCloseCart() {
        modalCtx.hideCart()
    }
    function handleOpenCheckout() {
        modalCtx.showCheckout()
    }
    return (
        <Modal open={modalCtx.progress === 'cart'}>
            <div className='cart'>
                <h2>Your Cart</h2>
                <ul>
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />
                    })}
                </ul>
                <p className='modal-actions'>
                    <button className='button' onClick={handleOpenCheckout}>Go to checkout</button>
                    <button className='text-button' onClick={handleCloseCart}>Close cart</button>
                </p>
            </div>
        </Modal>
    )
}
