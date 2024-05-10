import data from './database.json';

export async function GET(){

    return  Response.json(data.products)
}