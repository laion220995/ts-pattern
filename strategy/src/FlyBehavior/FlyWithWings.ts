import { FlyBehavior } from "./FlyBehavoir";

export class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log('Duck flying with wings');
    }
}