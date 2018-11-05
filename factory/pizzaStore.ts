import {
    Pizza,
    CheesePizza,
    VeggiePizza,
    ClamPizza,
    PepperoniPizza,
} from './pizza';

import {
    ChicagoPizzaIngredientFactory,
    NYPizzaIngredientFactory,
} from './ingredientFactory';

export abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        const ingredientFactory = new NYPizzaIngredientFactory();
        let pizza: Pizza;

        if (item === 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName('New York Style Cheese Pizza');
        } else if (item === 'veggie') {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName('New York Style Veggie Pizza');
        } else if (item === 'clam') {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName('New York Style Clam Pizza');
        } else if (item === 'pepperoni') {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName('New York Style Pepperoni Pizza');
        }

        return pizza;
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        const ingredientFactory = new ChicagoPizzaIngredientFactory();
        let pizza: Pizza;

        if (item === 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName('Chicago Style Cheese Pizza');
        } else if (item === 'veggie') {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName('Chicago Style Veggie Pizza');
        } else if (item === 'clam') {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName('Chicago Style Clam Pizza');
        } else if (item === 'pepperoni') {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName('Chicago Style Pepperoni Pizza');
        }

        return pizza;
    }
}
