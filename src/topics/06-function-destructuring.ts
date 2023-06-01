
export interface IProducts {
    description: string;
    price: number;

}

const phone: IProducts = {
    description: "Nokia",
    price: 1500
}

const tablet: IProducts = {
    description: "Ipad",
    price: 15000
}

const shoppingCard = [phone, tablet];
const tax = 0.15;

interface taxCalculationOptions {
    tax: number;
    products: IProducts[]

}

//function taxCalculation (options:taxCalculationOptions ): [number, number] {
export function taxCalculation({ tax, products }: taxCalculationOptions): [number, number] {
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });


    return [total, total * tax];
}

//const [total, totalTax] = taxCalculation({
  //  products: shoppingCard, tax: tax
//});

//console.log('total = ' + total);
//console.log('total con tx = ' + totalTax);



