export interface IFlyBehavior {
    fly(): void,
}

export interface IQuackBehavior {
    quack(): void,
}

export class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log('I am flying!!');
    }
}

export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log('A can\'t fly');
    }
}

export class FlyRocketPowered implements IFlyBehavior {
    fly() {
        console.log('I\'m flying with a rocket!');
    }
}

export class Quack implements IQuackBehavior {
    quack() {
        console.log('Quack');
    }
}

export class MuteQuack implements IQuackBehavior {
    quack() {
        console.log('<< Silence >>');
    }
}

export class Squeak implements IQuackBehavior {
    quack() {
        console.log('Squeak');
    }
}
