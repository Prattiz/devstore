import { api } from "@/data/api";
import { ProductProps } from "@/data/types/product";
import { PriceFormater } from "@/utils/price-formater";
import Image from "next/image";
import Link from "next/link";

export async function getFeaturedProducts(): Promise<ProductProps[]>{
    
    const response = await api('/products/featured', {
        next: {
            revalidate: 60 * 60 * 24 // 1 day
        }
    });

    const products = await response.json()

    return products
}


export default async function Home(){

    const [ highLightedProduct, ...otherProduct ] = await getFeaturedProducts();

    return( 
        <div className="grid max-h-[850px] grid-cols-9 grid-rows-6 gap-6">

            <Link 
                href={`/product/${highLightedProduct.slug}`} 
                className="group relative col-span-6 row-span-6 rounded-lg
                bg-zinc-900 overflow-hidden flex justify-center"
            >
                <Image
                    className="group-hover:scale-105 transition-transform duration-500" 
                    src={highLightedProduct.image}
                    width={600} height={600} 
                    quality={100} alt=""
                />

                <div 
                    className="absolute bottom-10 right-10 h-12 flex items-center 
                    gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >

                    <span className="text-sm truncate">{highLightedProduct.title}</span>

                    <span 
                        className="flex h-full items-center justify-center rounded-full 
                        bg-violet-500 px-4 font-semibold"
                    >
                        { PriceFormater(highLightedProduct.price) }
                    </span>

                </div>

            </Link>
            
            {...otherProduct.map(item => {
                return(
                    <Link 
                        href={`/product/${item.slug}`} 
                        className="group relative col-span-3 row-span-3 rounded-lg
                         bg-zinc-900 overflow-hidden flex justify-center"
                    >
                        <Image
                            className="group-hover:scale-105 transition-transform duration-500" 
                            src={item.image} 
                            width={300} height={300} 
                            quality={100} alt=""
                        />

                        <div 
                            className="absolute bottom-6 h-12 flex items-center 
                            gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                        >

                            <span className="text-sm truncate">{item.title}</span>

                            <span 
                                className="flex h-full items-center justify-center rounded-full 
                                bg-violet-500 px-4 font-semibold"
                            >
                                { PriceFormater(item.price) }
                            </span>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}