import { Waffel } from "../Waffel/Waffel";

export class VienneseWaffel extends Waffel {

    constructor() {
        super();
        this.description = 'Viennese Waffel';
    }

    public cost(): number {
        return 0.5;
    }
}