import {
    Duck,
    Turkey,
} from './interfaces';

function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

export class MallardDuck implements Duck {
    quack(): void {
        console.log('Quack');
    }

    fly(): void {
        console.log('I am flying');
    }
}

export class WildTurkey implements Turkey {
    gobble(): void {
        console.log('Gobble gobble');
    }

    fly(): void {
        console.log('I am flying a short distance');
    }
}

export class DuckAdapter implements Turkey {
    duck: Duck;

    constructor(duck: Duck) {
        this.duck = duck;
    }

    gobble(): void {
        this.duck.quack();
    }

    fly(): void {
        if (randomInteger(0, 5) === 0) {
            this.duck.fly();
        }
    }
}

export class TurkeyAdapter implements Duck {
    turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
