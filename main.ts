input.onButtonPressed(Button.A, function () {
    Rock = 0
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Scissor = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    Paper = 2
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # . .
        # # # . .
        `)
})
let Paper = 0
let Scissor = 0
let Rock = 0
basic.showString("Start")
basic.forever(function () {
	
})
