import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";


export function Header(){


    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

                <Link href='/' className="text-2xl font-extrabold text-white">
                    devstore                
                </Link>

                <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">

                    <Search className="w-5 h-5 text-zinc-500" />

                    <input 
                        placeholder="Search Products" 
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
                    />

                </form> 

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