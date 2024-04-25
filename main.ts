let minutes = 0
input.onButtonPressed(Button.A, function () {
    minutes += 5
    basic.showNumber(minutes)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    while (minutes > 0) {
        // 1 minute = 60,000 milliseconds
        basic.pause(60000)
        minutes += -1
    }
    while (1 == 1) {
        music.setVolume(255)
        music.playTone(1000, music.beat(BeatFraction.Whole))
        music.playTone(1500, music.beat(BeatFraction.Whole))
        music.playTone(2000, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    minutes += -5
    basic.showNumber(minutes)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(minutes)
})
