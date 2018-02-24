import { Waffel } from "../Waffel/Waffel";

export abstract class SupplementDecorator extends Waffel {
    public abstract getDescription(): string;
}