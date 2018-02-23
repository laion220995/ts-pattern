import Observer from "../Observer/Observer";

export interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
}