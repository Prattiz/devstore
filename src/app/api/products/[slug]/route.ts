import { z } from 'zod';
import data from '../database.json';

export async function GET( _: Request, { params }: { params: { slug: string } } ) {
  
  const slug = z.string().parse(params.slug);
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}