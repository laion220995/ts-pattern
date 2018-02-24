import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { sample } from 'rxjs/operators';

export default class Main {
    public source: any;
    public subscribe: any;
    public one: Element;

    constructor() {
        this.one = document.getElementById('one');

        this.source = interval(1000);
        this.subscribe = this.source.subscribe((val: string) => { this.one.innerHTML = val });
    }
}

let start = new Main();