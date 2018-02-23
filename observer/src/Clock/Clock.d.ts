import Observer from "../Observer/Observer";
import { DisplayElement } from "../DisplayElement/DisplayElement";
import { TimeData } from "../TimeData/TimeData";
export declare class Clock implements Observer, DisplayElement {
    timeData: TimeData;
    time: string;
    clock: Element;
    constructor(timeData: TimeData);
    update(time: string): void;
    display(): void;
}
