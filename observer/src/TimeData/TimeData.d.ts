import { Subject } from "../Subject/Subject";
import Observer from "../Observer/Observer";
export declare class TimeData implements Subject {
    private observers;
    private time;
    constructor();
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
    private changeTime();
    setTime(): void;
}
