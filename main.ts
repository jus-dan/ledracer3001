input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.play(music.stringPlayable("C5 C5 B E E B C B ", 400), music.PlaybackMode.UntilDone)
    lauflichtAn = 0
    basic.showIcon(IconNames.Chessboard)
    strip.showRainbow(1, 360)
    strip.show()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    lauflichtAn = 1
})
let lauflichtAn = 0
let strip: neopixel.Strip = null
music.setVolume(255)
music.play(music.stringPlayable("C5 C5 B E E B C B ", 400), music.PlaybackMode.UntilDone)
strip = neopixel.create(DigitalPin.P14, 450, NeoPixelMode.RGB)
basic.showIcon(IconNames.Ghost)
lauflichtAn = 0
basic.forever(function () {
    if (lauflichtAn == 1) {
        strip.rotate(1)
        strip.show()
    }
})
