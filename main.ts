let hora = 6
let minutos = 5
loops.everyInterval(60000, function () {
    minutos += 1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(hora)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(minutos)
    }
    basic.clearScreen()
    if (minutos == 0) {
    	
    } else if (minutos == 1) {
        led.plot(4, 4)
    } else if (minutos == 2) {
        led.plot(4, 3)
    } else if (minutos == 3) {
        led.plot(4, 3)
        led.plot(3, 4)
    } else if (minutos == 4) {
        led.plot(4, 2)
    } else if (minutos == 5) {
        led.plot(4, 2)
        led.plot(3, 4)
    } else if (minutos == 6) {
        led.plot(4, 2)
        led.plot(3, 3)
    } else if (minutos == 7) {
        led.plot(4, 2)
        led.plot(3, 4)
        led.plot(3, 3)
    } else if (minutos == 8) {
        led.plot(4, 1)
    } else if (minutos == 9) {
        led.plot(4, 1)
        led.plot(3, 4)
    } else if (minutos == 10) {
        led.plot(4, 1)
        led.plot(3, 3)
    } else if (minutos == 11) {
        led.plot(4, 1)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 12) {
        led.plot(4, 1)
        led.plot(3, 2)
    } else if (minutos == 13) {
        led.plot(4, 1)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 14) {
        led.plot(4, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 15) {
        led.plot(4, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 16) {
        led.plot(4, 0)
    } else if (minutos == 17) {
        led.plot(4, 0)
        led.plot(3, 4)
    } else if (minutos == 18) {
        led.plot(4, 0)
        led.plot(3, 3)
    } else if (minutos == 19) {
        led.plot(4, 0)
        led.plot(3, 4)
        led.plot(3, 3)
    } else if (minutos == 20) {
        led.plot(4, 0)
        led.plot(3, 2)
    } else if (minutos == 21) {
        led.plot(4, 0)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 22) {
        led.plot(4, 0)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 23) {
        led.plot(4, 0)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 24) {
        led.plot(4, 0)
        led.plot(3, 1)
    } else if (minutos == 25) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 4)
    } else if (minutos == 26) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 3)
    } else if (minutos == 27) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 28) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 2)
    } else if (minutos == 29) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 30) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 31) {
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 32) {
        led.plot(4, 0)
        led.plot(3, 0)
    } else if (minutos == 33) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 4)
    } else if (minutos == 34) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 3)
    } else if (minutos == 35) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 36) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 2)
    } else if (minutos == 37) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 38) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 39) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 40) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
    } else if (minutos == 41) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 4)
    } else if (minutos == 42) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 3)
    } else if (minutos == 43) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 44) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
    } else if (minutos == 45) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 46) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 47) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 48) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
    } else if (minutos == 49) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 4)
    } else if (minutos == 50) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 3)
    } else if (minutos == 51) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 52) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 2)
    } else if (minutos == 53) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 54) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 55) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else if (minutos == 56) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(4, 2)
        led.plot(3, 2)
    } else if (minutos == 57) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(3, 4)
    } else if (minutos == 58) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(3, 3)
    } else if (minutos == 59) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(4, 1)
        led.plot(3, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
    } else {
        basic.clearScreen()
        minutos = 0
        hora += 1
    }
    led.plotBrightness(2, 1, 40)
    led.plotBrightness(2, 3, 40)
    if (hora == 1) {
        led.plot(1, 4)
    } else if (hora == 2) {
        led.plot(1, 3)
    } else if (hora == 3) {
        led.plot(1, 3)
        led.plot(0, 4)
    } else if (hora == 4) {
        led.plot(1, 2)
    } else if (hora == 5) {
        led.plot(1, 2)
        led.plot(0, 4)
    } else if (hora == 6) {
        led.plot(1, 2)
        led.plot(0, 3)
    } else if (hora == 7) {
        led.plot(1, 2)
        led.plot(0, 4)
        led.plot(0, 3)
    } else if (hora == 8) {
        led.plot(1, 1)
    } else if (hora == 9) {
        led.plot(1, 1)
        led.plot(0, 4)
    } else if (hora == 10) {
        led.plot(1, 1)
        led.plot(0, 3)
    } else if (hora == 11) {
        led.plot(1, 1)
        led.plot(0, 3)
        led.plot(0, 4)
    } else if (hora == 12) {
        led.plot(1, 1)
        led.plot(0, 2)
    } else {
        basic.clearScreen()
        hora = 1
    }
})
