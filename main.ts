input.onPinPressed(TouchPin.P0, function () {
    setup()
    music.play(music.stringPlayable("G - G - G - C5 - ", 100), music.PlaybackMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    setup()
})
input.onPinPressed(TouchPin.P2, function () {
    strip_20.rotate(5)
    strip_20.show()
})
input.onPinPressed(TouchPin.P1, function () {
    strip_10.rotate(5)
    strip_10.show()
})
function setup () {
    strip_10 = neopixel.create(DigitalPin.P14, 450, NeoPixelMode.RGB)
    strip_20 = neopixel.create(DigitalPin.P14, 450, NeoPixelMode.RGB)
    strip_20.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip_20.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip_20.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip_20.setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
    strip_20.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip_20.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    strip_20.show()
    strip_10.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip_10.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip_10.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip_10.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip_10.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip_10.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip_10.show()
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showIcon(IconNames.Asleep)
}
let strip_10: neopixel.Strip = null
let strip_20: neopixel.Strip = null
setup()
basic.forever(function () {
    strip_10.show()
    basic.pause(1)
    strip_20.show()
    basic.pause(1)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(1000)
})
