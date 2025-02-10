input.onButtonPressed(Button.A, function () {
    lauflichtAn = 0
    basic.showIcon(IconNames.Duck)
    strip.showRainbow(1, 360)
    strip.show()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    lauflichtAn = 1
})
let lauflichtAn = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P14, 450, NeoPixelMode.RGB)
basic.showIcon(IconNames.Skull)
lauflichtAn = 0
basic.forever(function () {
    if (lauflichtAn == 1) {
        strip.rotate(1)
        strip.show()
    }
})
