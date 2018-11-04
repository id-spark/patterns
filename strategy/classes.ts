import {Quack, FlyWithWings, FlyNoWay, IFlyBehavior, IQuackBehavior} from './behaviors';

abstract class Duck {
    protected flyBehavior: IFlyBehavior;
    protected quackBehavior: IQuackBehavior;

    abstract display(): void;

    setFlyBehavior(fb: IFlyBehavior) {
        this.flyBehavior = fb;
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    setQuackBehavior(qb: IQuackBehavior) {
        this.quackBehavior = qb;
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log('All ducks float, even decoys!');
    }
}

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display() {
        console.log('I\'m a real Mallard duck');
    }
}

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display() {
        console.log('I\'m a model duck');
    }
}
