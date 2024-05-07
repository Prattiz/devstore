import Image from "next/image";
import Link from "next/link";

export default function Home(){
    return( 
        <div className="grid max-h-[850px] grid-cols-9 grid-rows-6 gap-6">

            <Link 
                href='/' 
                className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
            >
                <Image
                    className="group-hover:scale-105 transition-transform duration-500" 
                    src='/moletom-ai-side.png' 
                    width={600} height={600} 
                    quality={100} alt=""
                />

                <div 
                    className="absolute bottom-10 right-10 h-12 flex items-center 
                    gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >

                    <span className="text-sm truncate">AI Side Sweatshirt</span>

                    <span 
                        className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                    >
                        R$129
                    </span>

                </div>

            </Link>
            
            <Link 
                href='/' 
                className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
            >
                <Image
                    className="group-hover:scale-105 transition-transform duration-500" 
                    src='/camiseta-dowhile-2022.png' 
                    width={300} height={300} 
                    quality={100} alt=""
                />

                <div 
                    className="absolute bottom-6 h-12 flex items-center 
                    gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >

                    <span className="text-sm truncate">Dowhile T-shirt</span>

                    <span 
                        className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                    >
                        R$49
                    </span>
                    
                </div>

            </Link>

            <Link 
                href='/' 
                className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
            >
                <Image
                    className="group-hover:scale-105 transition-transform duration-500" 
                    src='/moletom-never-stop-learning.png' 
                    width={300} height={300} 
                    quality={100} alt=""
                />

                <div 
                    className="absolute bottom-6 h-12 flex items-center 
                    gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >

                    <span className="text-sm truncate">Never Stop Learning Sweatshirt</span>

                    <span 
                        className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                    >
                        R$129
                    </span>
                    
                </div>

            </Link>

        </div>
    )
}