export interface Dough {
    toString(): string;
}

export class ThinCrustDough implements Dough {
    toString() {
        return 'Thin Crust Dough';
    }
}

export class ThickCrustDough implements Dough {
    toString() {
        return 'Thick Crust Dough';
    }
}

export interface Sauce {
    toString(): string;
}

export class MarinaraSauce implements Sauce {
    toString() {
        return 'Marinara Sauce';
    }
}

export class PlumTomatoSauce implements Sauce {
    toString() {
        return 'Plum Tomato Sauce';
    }
}

export interface Cheese {
    toString(): string;
}

export class ReggianoCheese implements Cheese {
    toString() {
        return 'Reggiano Cheese';
    }
}

export class MozzarellaCheese implements Cheese {
    toString() {
        return 'Mozzarella Cheese';
    }
}

export interface Veggies {
    toString(): string;
}

export class Garlic implements Veggies {
    toString() {
        return 'Garlic';
    }
}

export class Onion implements Veggies {
    toString() {
        return 'Onion';
    }
}

export class Mushroom implements Veggies {
    toString() {
        return 'Garlic';
    }
}

export class RedPepper implements Veggies {
    toString() {
        return 'Onion';
    }
}

export class BlackOlives implements Veggies {
    toString() {
        return 'Black Olives';
    }
}

export class EggPlant implements Veggies {
    toString() {
        return 'Egg Plant';
    }
}

export class Spinach implements Veggies {
    toString() {
        return 'Spinach';
    }
}

export interface Pepperoni {
    toString(): string;
}

export class SlicedPepperoni implements Pepperoni {
    toString() {
        return 'Sliced Pepperoni';
    }
}

export interface Clams {
    toString(): string;
}

export class FreshClams implements Clams {
    toString() {
        return 'Fresh Clams';
    }
}

export class FrozenClams implements Clams {
    toString() {
        return 'Frozen Clams';
    }
}
