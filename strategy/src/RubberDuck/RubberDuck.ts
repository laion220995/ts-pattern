import { Duck } from "../Duck/Duck";
import { FlyNoWay } from "../FlyBehavior/FlyNoWay";

export class RubberDuck extends Duck {

    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
    }

    public display(): void {
      console.log('RubberDuck skin');
    }
}