import { MallardDuck } from "./MallardDuck/MallardDuck";
import { RubberDuck } from "./RubberDuck/RubberDuck";

export default class Main {
    public mallardDuck: MallardDuck = new MallardDuck();
    public rubberDuck: RubberDuck = new RubberDuck();

    constructor() {
    }
}

let start = new Main();

start.rubberDuck.display();
start.rubberDuck.performFly();

start.mallardDuck.display();
start.mallardDuck.performFly();