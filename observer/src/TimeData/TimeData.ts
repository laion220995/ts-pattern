import { Subject } from "../Subject/Subject";
import Observer from "../Observer/Observer";

export class TimeData implements Subject {

    private observers: Array<Observer> = [];
    private time: string;

    constructor() {
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        let index: number = this.observers.indexOf(o);
        if ( index >= 0 ) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObserver(): void {
        this.observers.forEach((observer) => {
            observer.update(this.time);
        });
    }

    private changeTime(): void {
        this.notifyObserver();
    }

    public setTime(): void {
        const date: Date = new Date();
        const seconds: string = date.getSeconds().toString();
        this.time = seconds;
        this.changeTime();
    }

}