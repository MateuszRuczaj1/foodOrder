import React, { useState, useRef } from 'react'
import Modal from './Modal'
import { useModal } from '../contexts/ModalContext'
import Input from './Input'
import { useCart } from '../contexts/CartContext'
export default function Checkout() {

  const modalCtx = useModal()
  const cart = useCart()
  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator += item.price * item.qty
  }, 0)
  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const formData = Object.fromEntries(fd.entries())


    console.log(formData)
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify({
        order: {
          items: cart,
          customer: formData
        }
      }),
      headers: {
        "Content-type": 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error("Failed to send data...")
    }
  }
  return (
    <Modal open={modalCtx.progress === 'checkout'}>
      <div>
        <h2>Checkout</h2>
        <h4>Total amount: ${totalAmount} </h4>
        <form action="#" onSubmit={handleSubmit}>
          <Input label="Full Name" id="fullname" name="name" />
          <Input label="Email" id="email" type="email" name="email" />
          <Input label="Street" id="street" name="street" />
          <div className='control-row'>
            <Input label="Postal Code" id="postalcode" name="postal-code" />
            <Input label="City" id="city" name="city" />
          </div>
          <p className='modal-actions'>
            <button className='text-button' onClick={modalCtx.hideCheckout} type='button'>
              Close
            </button>
            <button className='button' type='submit'>
              Finish Order
            </button>
          </p>
        </form>
      </div>
    </Modal>
  )
}
