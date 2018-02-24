export abstract class Waffel {
    public description: string = 'Just wafel';

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}