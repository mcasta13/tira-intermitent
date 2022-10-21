basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index <= 4; index++) {
                led.toggle(index, 2)
            }
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 4; index++) {
            basic.pause(1000)
            led.toggle(index, 2)
        }
        basic.pause(1000)
    }
})
