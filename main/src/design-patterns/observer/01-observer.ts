interface IObserver {
	update(event: string): void
}

class Observer implements IObserver {
	private handlers: Record<string, () => void> = {
		sendEmail: function () {
			console.log('sending Email')
		},
		sendWhatsapp: function sendWhatsapp() {
			console.log('sending Whatsapp')
		},
		sendPushNotification: function () {
			console.log('sending PushNotification')
		},
	}

	update(event: string): void {
		const handler = this.handlers[event]
		handler()
	}
}

class EventSource {
	private observers: IObserver[] = []

	public notifyObservers(event: string) {
		this.observers.forEach((o) => o.update(event))
	}

	public addObserver(observer: IObserver): void {
		if (this.isPresent(observer)) {
			return
		}
		this.observers.push(observer)
	}

	private isPresent(observer: IObserver) {
		return this.observers.find((arrayObserver) => observer === arrayObserver)
	}
}

const eventSource = new EventSource()
const Observer1 = new Observer()

eventSource.addObserver(Observer1)
eventSource.notifyObservers('sendWhatsapp')
