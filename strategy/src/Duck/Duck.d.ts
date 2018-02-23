import { FlyBehavior } from "../FlyBehavior/FlyBehavoir";
export declare abstract class Duck {
    flyBehavior: FlyBehavior;
    abstract display(): void;
    performFly(): void;
    quack(): void;
    swim(): void;
}
