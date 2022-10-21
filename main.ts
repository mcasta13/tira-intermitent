basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 8; index++) {
            for (let index = 0; index <= 4; index++) {
                led.toggle(index, 2)
            }
            basic.pause(1000)
        }
    }
})
