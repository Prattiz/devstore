import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";


export function Header(){


    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

                <Link href='/' className="text-2xl font-extrabold text-white">
                    devstore                
                </Link>

                <Suspense fallback={null}>
                    <SearchForm/>
                </Suspense>

            </div>

            <div className="flex items-center gap-4">

                <CartWidget/>

                <div className="w-px h-4 bg-zinc-700"/>

                <Link href='/' className="flex items-center gap-2 hover:underline">
                    <Image 
                        src='/user.svg' 
                        className='w-9 h-9 rounded-full' 
                        width={24} height={24} 
                        alt=""
                    />
                </Link>
            </div>
        </div>
    )
}