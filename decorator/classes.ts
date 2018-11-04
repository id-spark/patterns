enum BeverageSize {
    TALL,
    GRANDE,
    VENTI,
}

export abstract class Beverage {
    protected size: BeverageSize = BeverageSize.TALL;
    protected description: string = 'Unknown beverage';

    getDescription(): string {
        return this.description;
    }

    setSize(size: BeverageSize) {
        this.size = size;
    }

    getSize(): BeverageSize {
        return this.size;
    }

    abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
    protected beverage: Beverage;
    abstract getDescription(): string;

    getSize() {
        return this.beverage.getSize();
    }
}

export class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso';
    }

    cost() {
        return 1.99;
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend Coffee';
    }

    cost() {
        return .89;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast Coffee';
    }

    cost() {
        return .99;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost() {
        return .20 + this.beverage.cost();
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ', Soy';
    }

    cost() {
        const size = this.beverage.getSize();
        let cost = this.beverage.cost();

        if (size === BeverageSize.TALL) {
            cost += .10;
        } else if (size === BeverageSize.GRANDE) {
            cost += .15;
        } else if (size === BeverageSize.VENTI) {
            cost += .20;
        }

        return cost;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ', Whip';
    }

    cost() {
        return .10 + this.beverage.cost();
    }
}
