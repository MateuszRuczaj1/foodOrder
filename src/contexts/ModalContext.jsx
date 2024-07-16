import { createContext, useContext, useState } from "react";
const ModalContext = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})
export function ModalContextProvider({ children }) {
    const [modalProgress, setModalProgress] = useState('')
    function showCart() {
        setModalProgress('cart')
    }
    function hideCart() {
        setModalProgress('')
    }
    function showCheckout() {
        setModalProgress('checkout')
    }
    function hideCheckout() {
        setModalProgress('')
    }
    const modalCtx = {
        progress: modalProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return (
        <ModalContext.Provider value={modalCtx}>
            {children}
        </ModalContext.Provider>
    )
}
export function useModal() {
    return useContext(ModalContext)
}