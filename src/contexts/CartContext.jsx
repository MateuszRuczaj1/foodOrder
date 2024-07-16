import { createContext, useContext, useReducer } from "react"
const INTIAL_STATE = []
function reducer(state, action) {
    switch (action.type) {

        case "ADD": {
            const newPrice = parseFloat(action.price)
            const updatedItems = [...state]
            const existingItemIdx = state.findIndex((item) => (item.id === action.id))
            const existingItem = updatedItems[existingItemIdx]
            console.log(existingItem)
            if (!existingItem) {
                return [...state, {
                    id: action.id,
                    name: action.name,
                    price: newPrice,
                    qty: 1
                }]
            }
            else {
                const updatedItem = { ...existingItem, qty: existingItem.qty + 1 }
                updatedItems[existingItemIdx] = updatedItem
                return [...updatedItems]

            }

        }
        case "INCREASE": {
            const updatedItems = [...state]
            const existingItemIdx = state.findIndex((item) => (item.id === action.id))
            const existingItem = updatedItems[existingItemIdx]

            const updatedItem = { ...existingItem, qty: existingItem.qty + 1 }
            updatedItems[existingItemIdx] = updatedItem
            return [...updatedItems]

        }
        case "DECREASE": {
            const updatedItems = [...state]
            const existingItemIdx = state.findIndex((item) => (item.id === action.id))
            const existingItem = updatedItems[existingItemIdx]

            if (existingItem.qty > 1) {
                const updatedItem = { ...existingItem, qty: existingItem.qty - 1 }
                updatedItems[existingItemIdx] = updatedItem
                return [...updatedItems]
            }
            else {
                updatedItems.splice(existingItemIdx, 1)
                return [...updatedItems]
            }
        }
        default: {
            throw Error("Unknown action: " + action.type)
        }
    }
}
const CartContext = createContext(null)
const CartDispatchContext = createContext(null)
export function CartProvider({ children }) {
    const [cartState, dispatch] = useReducer(reducer, INTIAL_STATE)
    return (
        <CartContext.Provider value={cartState}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}
export function useCart() {
    return useContext(CartContext)
}
export function useCartDispatch() {
    return useContext(CartDispatchContext)
}