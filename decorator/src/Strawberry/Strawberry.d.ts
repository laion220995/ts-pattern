import { SupplementDecorator } from "../SupplementDecorator/SupplementDecorator";
import { Waffel } from "../Waffel/Waffel";
export declare class Strawberry extends SupplementDecorator {
    waffel: Waffel;
    constructor(waffel: Waffel);
    getDescription(): string;
    cost(): number;
}
