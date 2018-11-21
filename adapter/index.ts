import {
    Duck,
    Turkey,
} from './interfaces';

import {
    DuckAdapter,
    TurkeyAdapter,
} from './classes';

import {
    MallardDuck,
    WildTurkey
} from './classes';

function testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
}

function testTurkey(turkey: Turkey) {
    turkey.gobble();
    for (let i = 0; i < 10; i++) {
        turkey.fly();
    }
}

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);
const duckAdapter = new DuckAdapter(duck);

console.log('The Turkey says...');
turkey.gobble();
turkey.fly();

console.log('The Duck says...');
duck.quack();
duck.fly();

console.log('The TurkeyAdapter says...');
testDuck(turkeyAdapter);

console.log('The DuckAdapter says...');
testTurkey(duckAdapter);

