import {MallardDuck, ModelDuck} from './classes';
import {FlyRocketPowered} from './behaviors';

const mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

const model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
