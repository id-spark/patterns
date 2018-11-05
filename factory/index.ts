import {
    PizzaStore,
    NYPizzaStore,
    ChicagoPizzaStore,
} from './pizzaStore';

import {
    Pizza,
} from './pizza';

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza: Pizza = nyStore.orderPizza('cheese');
console.log(`Ethan ordered a ${pizza.getName()}\n`);
console.log(pizza.toString());

pizza = chicagoStore.orderPizza('cheese');
console.log(`Joel ordered a ${pizza.getName()}\n`);
console.log(pizza.toString());
