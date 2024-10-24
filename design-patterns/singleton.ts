class Singleton {
    static #instance: Singleton

    private constructor() {}

    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton()
        }

        return Singleton.#instance
    }

    public someBusinessLogic() {
        // ...
    }
}
