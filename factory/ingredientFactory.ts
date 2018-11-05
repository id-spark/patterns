import {
    Cheese,
    ReggianoCheese,
    MozzarellaCheese,
    Clams,
    FreshClams,
    FrozenClams,
    Dough,
    ThinCrustDough,
    ThickCrustDough,
    Pepperoni,
    SlicedPepperoni,
    Sauce,
    MarinaraSauce,
    PlumTomatoSauce,
    Veggies,
    Garlic,
    Mushroom,
    Onion,
    Spinach,
    BlackOlives,
    EggPlant,
    RedPepper,
} from './ingredient';

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough() {
        return new ThinCrustDough();
    }

    createSauce() {
        return new MarinaraSauce();
    }

    createCheese() {
        return new ReggianoCheese();
    }

    createVeggies() {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    createPepperoni() {
        return new SlicedPepperoni();
    }

    createClam() {
        return new FreshClams();
    }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough() {
        return new ThickCrustDough();
    }

    createSauce() {
        return new PlumTomatoSauce();
    }

    createCheese() {
        return new MozzarellaCheese();
    }

    createVeggies() {
        return [new Spinach(), new BlackOlives(), new EggPlant()];
    }

    createPepperoni() {
        return new SlicedPepperoni();
    }

    createClam() {
        return new FrozenClams();
    }
}
