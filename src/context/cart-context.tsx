'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface CartItems {
    productId: string,
    indexQuantity: number
}

interface CartContextProps {
    items: CartItems[],
    addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextProps);

export async function CartContextProvider({ children }: { children: ReactNode }){

    const [ cartItems, setCartItems] = useState<CartItems[]>([]);

    function addToCart(productId: string){

        setCartItems((state) => {

            const productInCart = state.some((item) => item.productId === productId)

            if (productInCart) {
                
                return state.map((item) => {
                    if(item.productId === productId){
                        return{ ...item, indexQuantity: item.indexQuantity + 1}
                    }else{
                        return item
                    }
                })

            } else {
                return [...state, { productId, indexQuantity: 1}]
            }
        });  
    }

    
    return (
        <CartContext.Provider value={{ items: cartItems, addToCart }}>
            { children }
        </CartContext.Provider>
    )

}

export const useCart = useContext(CartContext)