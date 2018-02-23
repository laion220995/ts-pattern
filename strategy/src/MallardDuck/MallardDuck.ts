import { Duck } from "../Duck/Duck";
import { FlyWithWings } from "../FlyBehavior/FlyWithWings";

export class MallardDuck extends Duck {

    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
    }

    public display(): void {
        console.log("MallardDuck skin");
    }
}
