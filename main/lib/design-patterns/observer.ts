interface Listener<T> {
	emit(value: T): void
}

abstract class EventEmmiter<T> implements Listener<T> {
	private _listeners: Listener<T>[] = []

	public attach(listener: Listener<T>) {
		if (!this._listeners.some((x) => x === listener)) {
			this._listeners.push(listener)
		} else {
			throw new Error('Observer already present')
		}

		return this.detach(listener)
	}

	protected detach(listener: Listener<T>): void {
		this._listeners.filter((x) => x !== listener)
	}

	public emit(value: T): void {
		this._listeners.forEach((o) => o.emit(value))
	}
}

export class CartItem {
	constructor(
		public id: number,
		public name: string,
		public quantity: number,
		public unitPrice: number
	) {}
}

let orderNumber = 1

class Order {
	public readonly id: string

	constructor(
		public readonly userId: number,
		public readonly userFirstName: string,
		public readonly items: CartItem[]
	) {
		const now = new Date()
		this.id = `${now.getFullYear()}-${(now.getMonth() + 1)
			.toString()
			.padStart(2, '0')}
			${now.getDate().toString().padStart(2, '0')}
			${orderNumber.toString().padStart(4, '0')}`
		orderNumber++
	}
}

class EmailObserver implements Listener<Order> {
	emit(message: Order): void {
		console.log(`EMAIL: Your order #${message.id} has been approved.`)
	}
}

class SmsObserver implements Listener<Order> {
	emit(message: Order): void {
		const total = message.items
			.map((x) => x.quantity * x.unitPrice)
			.reduce((a, b) => a + b)
		console.log(
			`SMS: ${message.userFirstName}, your order ${message.id} by the amount of $${total} has been approved.`
		)
	}
}

class ShoppingCart extends EventEmmiter<Order> {
	constructor(
		private userId: number,
		private userFirstName: string
	) {
		super()
	}

	private readonly items: CartItem[] = []

	add(item: CartItem) {
		const CartItem = this.items.find((x) => x.id === item.id)

		if (CartItem) {
			throw new Error(
				'The product has already been added to the shopping cart.'
			)
		} else {
			this.items.push(item)
		}
	}

	purchase() {
		const order = new Order(this.userId, this.userFirstName, this.items)
		this.emit(order)
	}
}

const smsObserver = new SmsObserver()
const emailObserver = new EmailObserver()
const shoppingCart = new ShoppingCart(1, 'Eduardo')

shoppingCart.attach(smsObserver)
shoppingCart.attach(emailObserver)

shoppingCart.add(new CartItem(1, 'Electric Guitar Shur', 1, 2800))
shoppingCart.add(new CartItem(2, 'Amp 60w Fender Twin Reverb', 1, 1400))
shoppingCart.add(new CartItem(3, 'Addario 009 Guitar Strings', 10, 7.5))

shoppingCart.purchase()
