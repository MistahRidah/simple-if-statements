let counter = 0
basic.forever(function () {
    basic.pause(500)
    led.plotBarGraph(
    counter,
    4
    )
    counter += 1
    if (counter > 4) {
        counter = 0
    }
})
