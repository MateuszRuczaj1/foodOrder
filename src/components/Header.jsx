import React from 'react'
import logo from '../assets/logo.jpg'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useCart } from '../contexts/CartContext'
import { useModal } from '../contexts/ModalContext'
import Cart from './Cart'
export default function Header() {
    const cart = useCart()
    const modalCtx = useModal()
    function handleShowCart() {
        modalCtx.showCart()
    }
    return (
        <>
            <div id="main-header">
                <div id='title'>
                    <img src={logo} alt="Burger image" />
                    <h1>REACTFOOD</h1>
                </div>
                <IconButton size='large' onClick={handleShowCart}>
                    <Badge badgeContent={cart.length} color='primary' >
                        <ShoppingCartIcon fontSize='large' />
                    </Badge>
                </IconButton>
            </div>
            <Cart >

            </Cart>
        </>

    )
}
