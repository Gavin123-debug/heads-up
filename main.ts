input.onButtonPressed(Button.A, function () {
    basic.showString("Start!!! shake!")
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . # .
        # # # # .
        # # . # .
        . # . # .
        `)
})
