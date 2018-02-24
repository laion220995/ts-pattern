import { Waffel } from "./Waffel/Waffel";
import { VienneseWaffel } from "./VienneseWaffel/VienneseWaffel";
import { Strawberry } from "./Strawberry/Strawberry";
import { Nuts } from "./Nuts/Nuts";

export default class Main {
    public waffel: Waffel = new VienneseWaffel();

    constructor() {

    }
}

let printer: Element = document.getElementById('printer');


let start = new Main();

start.waffel = new Strawberry(start.waffel);
start.waffel = new Nuts(start.waffel);

printer.innerHTML = start.waffel.getDescription() + '; cost: ' + start.waffel.cost();
