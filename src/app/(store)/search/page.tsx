import { api } from '@/data/api'
import { ProductProps } from '@/data/types/product'
import { PriceFormater } from '@/utils/price-formater'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'


interface SearchProps{
  searchParams: {
    q: string
  }
}


export async function SearchProducts(query: string): Promise<ProductProps[]>{
    
  const response = await api(`/products/search?q=${query}`, {
      next: {
          revalidate: 60 * 60 * 24 // 1 day
      }
  });

  const products = await response.json()

  return products
}


export default async function Search({ searchParams }: SearchProps) {

  if (!searchParams.q){
    redirect("/")
  }

  const products = await SearchProducts(searchParams.q);

  

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{searchParams.q}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">

        {
          products.map((item) => {
            return (
              <Link
                href={item.slug}
                className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
              >
                <Image
                  src={item.image}
                  className="group-hover:scale-105 transition-transform duration-500"
                  width={480}
                  height={480}
                  quality={100}
                  alt={item.title}
                />

                <div 
                  className="absolute bottom-10 right-10 h-12 flex items-center
                  gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >

                  <span className="text-sm truncate">
                    {item.title}
                  </span>

                  <span 
                    className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                  >
                    {
                    PriceFormater(item.price)
                    }
                  </span>

                </div>
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}