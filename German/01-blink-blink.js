var five = require('johnny-five')
var board = new five.Board({ port: "/dev/ttyACM0" });
board.on('ready', function(){
	var led = new five.Led(13) //nueva instancia de led en pin 13
	led.strobe(1000) //strobe 1 seg
})