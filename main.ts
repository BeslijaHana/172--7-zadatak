input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    music.changeTempoBy(20)
})
music.setTempo(120)
basic.forever(function () {
    if (music.tempo() == 240) {
        music.setTempo(120)
    }
})
