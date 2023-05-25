basic.forever(function () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 180))
})
