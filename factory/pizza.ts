import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from './ingredient';
import { PizzaIngredientFactory } from './ingredientFactory';

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    veggies: Array<Veggies> = [];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clams;

    abstract prepare(): void;

    bake(): void {
        console.log('Bake for 25 minutes at 350');
    }

    cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }

    box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        let result: string = '';
        result += `---- ${this.name} ----\n`;
        if (this.dough) {
            result += this.dough;
            result += '\n';
        }
        if (this.sauce) {
            result += this.sauce;
            result += '\n';
        }
        if (this.cheese) {
            result += this.cheese;
            result += '\n';
        }
        if (this.veggies.length) {
            result += this.veggies.join(', ');
            result += '\n';
        }
        if (this.clam) {
            result += this.clam;
            result += '\n';
        }
        if (this.pepperoni) {
            result += this.pepperoni;
            result += '\n';
        }
        return result;
    }
}

export class CheesePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

export class VeggiePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}

export class ClamPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    }
}

export class PepperoniPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.pepperoni = this.ingredientFactory.createPepperoni();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}
