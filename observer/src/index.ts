import { TimeData } from "./TimeData/TimeData";
import { Clock } from "./Clock/Clock";

export default class Main {

    public timeData: TimeData = new TimeData;
    public clock: Clock = new Clock(this.timeData);

    constructor() {
    }
}

let start = new Main();

setInterval(() => {
    start.timeData.setTime();
}, 1000)
