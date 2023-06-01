import {IProducts, taxCalculation} from './06-function-destructuring'
const shoppingCard: IProducts[] =[
    {
        description: "Nokia",
        price: 1500
    },
    {
        description: "Ipad",
        price: 15000
    }
];

const [total, tax] = taxCalculation({tax: 0.15, products:shoppingCard});

console.log('Total: ' + total);
console.log('Tax: '+ tax);