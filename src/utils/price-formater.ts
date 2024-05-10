export function PriceFormater(item: any){

    const response = item.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    
    return response;
}