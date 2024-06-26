import { ButtonAddToCart } from '@/components/button-add-to-cart';
import { api } from '@/data/api';
import { ProductProps } from '@/data/types/product';
import { PriceFormater } from '@/utils/price-formater';
import Image from 'next/image'
import { Metadata } from 'next/types';


interface ProductPageProps{
    params:{
        slug: string
    }
}


export async function getSlugProduct(slug: string): Promise<ProductProps> { 
    
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 60 * 60 * 24 // 1 day
        }
    });

    const product = await response.json()

    return product;
}


export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {

  const product = await getSlugProduct(params.slug);

  return {
    title: product.title,
  }
}


export async function generateStaticParams() {

  const response = await api('/products/featured');
  const products: ProductProps[] = await response.json();

  return products.map((product) => {
    return { slug: product.slug }
  })
  
}


export default async function ProductPage({ params }: ProductPageProps) {

    const product = await getSlugProduct(params.slug);

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={800}
          height={800}
          quality={100}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center px-12 ">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {PriceFormater(product.price)}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border
               border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border
               border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border
               border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border
               border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <ButtonAddToCart productId={product.id}/>
      </div>
    </div>
  )
}