import data from '../database.json';

export async function GET() {
  
  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts)
}