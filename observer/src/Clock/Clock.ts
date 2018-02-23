import Observer from "../Observer/Observer";
import { DisplayElement } from "../DisplayElement/DisplayElement";
import { TimeData } from "../TimeData/TimeData";

export class Clock implements Observer, DisplayElement {
    public timeData: TimeData;
    public time: string;
    public clock: Element;

    constructor(timeData: TimeData) {
        this.timeData = timeData;
        this.clock = document.getElementById('clock');
        timeData.registerObserver(this);
    }

    public update(time: string): void {
        this.time = time;
        this.display();
    }

    public display(): void {
        this.clock.innerHTML = this.time;
    }
}