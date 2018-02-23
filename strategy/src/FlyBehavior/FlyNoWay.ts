import { FlyBehavior } from "./FlyBehavoir";

export class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log('Duck no flying');
    }
}