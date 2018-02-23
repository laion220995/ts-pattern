import { FlyBehavior } from "../FlyBehavior/FlyBehavoir";

export abstract class Duck {
    public flyBehavior: FlyBehavior;
    public abstract display(): void;


    public performFly(): void {
       this.flyBehavior.fly();
    }

    public quack(): void {
      console.log('Duck quack');
    }

    public swim(): void {
      console.log('Duck swim');
    }
}