const { log } = console

interface Human {
    health: number
    stamina: number
    isHero: boolean
}

let human1: Human = {
    health: 100,
    stamina: 120,
    isHero: false,
}

const do_damage = function (entity: Human) {
    entity.health -= 1
}

const human: Human = {
    health: 100,
    stamina: 150,
    isHero: false,
}

do_damage(human)

log(human)
