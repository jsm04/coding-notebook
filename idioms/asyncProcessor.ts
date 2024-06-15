import * as tonal from 'tonal'
const { log } = console

const chroma = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0]

const msInMinute = 60_000,
    bpm = 130,
    beatDurationInMs = msInMinute / bpm

const whole = beatDurationInMs,
    half = whole / 2,
    quarter = half / 2,
    eighth = quarter / 2,
    sixteenth = eighth / 2,
    thirty = sixteenth / 2

const durations = [whole, half, quarter, eighth, sixteenth, thirty]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

class Note {
    note: string
    constructor(note: string) {
        this.note = note
    }
}

type LoopLength = 8 | 16 | 32 | 64

class AsyncProcessor<T> {
    list: T[][] = []

    currentBeat: number = 0
    beatDuration: number

    loopLenght: number
    isLooping: boolean = false

    bars: number

    constructor(bpm: number, loopLength: LoopLength = 32) {
        this.beatDuration = msInMinute / bpm
        this.loopLenght = loopLength
        this.bars = loopLength / 4

        const fillList = () =>
            Array.from({ length: this.loopLenght }).forEach((_) =>
                this.list.push([] as T[])
            )

        fillList()
    }

    addToBeat(note: T) {
        this.list[this.currentBeat].push(note)
    }

    startNextBeat() {
        if (this.currentBeat <= this.list.length) this.currentBeat++
        else this.currentBeat = 0
    }

    stop() {
        this.isLooping = false
    }

    async start() {
        if (!this.isLooping) this.isLooping = true

        while (this.isLooping) {
            if (this.currentBeat >= this.list.length) this.currentBeat = 0

            setImmediate(() => {
                const currNotes = this.list[this.currentBeat]
                for (const member of currNotes) {
                    // mock play function
                    log(member)
                }
                log('a beat has passed')
            })

            await sleep(this.beatDuration)
            this.currentBeat++
        }
    }
}

const randomBoolean = (): boolean => Math.random() < 0.5
const randomInteger = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min

const notesList = [
    new Note('c'),
    new Note('d'),
    new Note('e'),
    new Note('f'),
    new Note('g'),
    new Note('a'),
    new Note('b'),
]

const asyncProcessor = new AsyncProcessor(120, 32)

const randomizeNotes = (limit: number) => {
    let i = 0
    while (i < limit) {
        if (randomBoolean()) continue
        const notesToAdd = randomInteger(1, 4)
        for (let j = 0; j < notesToAdd; j++) {
            asyncProcessor.addToBeat(notesList[randomInteger(0, 6)])
        }
        asyncProcessor.startNextBeat()
        i++
    }
}

randomizeNotes(32)
;(async () => {
    setTimeout(() => asyncProcessor.stop(), 10_000)
    await asyncProcessor.start()
})()

