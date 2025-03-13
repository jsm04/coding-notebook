/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
    notify(sender: object, event: string): void
}

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
class ConcreteMediator implements Mediator {
    constructor(
        private component1: Component1,
        private component2: Component2
    ) {
        this.component1.setMediator(this)
        this.component2.setMediator(this)
    }

    public notify(_sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:')
            this.component2.doC()
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:')
            this.component1.doB()
            this.component2.doC()
        }
    }
}

/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
class BaseComponent {
    protected mediator!: Mediator

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }
}

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Component1 extends BaseComponent {
    public doA(): void {}

    public doB(): void {}
}

class Component2 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.')
        this.mediator.notify(this, 'C')
    }

    public doD(): void {
        console.log('Component 2 does D.')
        this.mediator.notify(this, 'D')
    }
}

/**
 * The client code.
 */
const c1 = new Component1()

const c2 = new Component2()
const mediator = new ConcreteMediator(c1, c2)

console.log('Client triggers operation A.')
c1.doA()

console.log('Client triggers operation D.')
c2.doD()
