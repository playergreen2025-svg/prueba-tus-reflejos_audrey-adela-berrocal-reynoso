function OK () {
    basic.showIcon(IconNames.Heart)
    t_respuesta = input.runningTime()
    basic.showString("Has tardado" + (t_respuesta - t_inicio) + " ms")
    Barra()
}
function Barra () {
    Lado = randint(1, 2)
    if (Lado == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    t_inicio = input.runningTime()
}
let t_respuesta = 0
let t_inicio = 0
let Lado = 0
Lado = 0
t_inicio = 0
t_respuesta = 0
let index = 3
for (let index2 = 0; index2 < 3; index2++) {
    basic.showNumber(index)
    basic.pause(100)
    index += -1
}
basic.clearScreen()
basic.showString("GO!")
Barra()
basic.forever(function () {
    if (Lado == 1 && input.buttonIsPressed(Button.A)) {
        OK()
    }
    if (Lado == 2 && input.buttonIsPressed(Button.B)) {
        OK()
    }
})
basic.forever(function () {
    if (Lado == 1 && input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        t_respuesta = input.runningTime()
        basic.showString("Has tardado:" + (t_respuesta - t_inicio) + " ms")
    }
    Barra()
})
basic.forever(function () {
    if (Lado == 2 && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
        t_respuesta = input.runningTime()
        basic.showString("Has tardado:" + (t_respuesta - t_inicio) + " ms")
    }
    Barra()
})
