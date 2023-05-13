let hora = 4
let minutos = 15
loops.everyInterval(60000, function () {
    minutos += 1
})
basic.forever(function () {
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
    } else if (false) {
    	
    } else {
        minutos = 0
        hora += 1
    }
    led.plot(2, 1)
    led.plot(2, 3)
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
        hora = 1
    }
})
