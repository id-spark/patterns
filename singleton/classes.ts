export class Singleton {
    private static uniqueInstance: Singleton = null;

    private constructor() {}

    static getInstance(): Singleton {
        // 'this' is Singleton (see https://clck.ru/EiotR)
        if (this.uniqueInstance === null) {
            this.uniqueInstance = new Singleton();
        }
        return this.uniqueInstance;
    }
}
