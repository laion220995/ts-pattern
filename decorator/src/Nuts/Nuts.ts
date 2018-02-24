import { SupplementDecorator } from "../SupplementDecorator/SupplementDecorator";
import { Waffel } from "../Waffel/Waffel";

export class Nuts extends SupplementDecorator {
    public waffel: Waffel

    constructor(waffel: Waffel) {
        super();
        this.waffel = waffel;
    }

    public getDescription(): string {
        return this.waffel.getDescription() + ', nuts';
    }

    public cost(): number {
        return this.waffel.cost() + 0.1;
    }
}