'use client'

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";


interface ButtonAddToCartProps{
    productId: number
}


export function ButtonAddToCart({ productId }: ButtonAddToCartProps){
    
    const { addToCart } = useCart();
    const router = useRouter();
    

    function handleAddToCart(){

        addToCart(productId)
        router.push('/') 
    }
    return(
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
    )
}