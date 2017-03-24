var five = require('johnny-five');
var board = new five.Board({ port: "/dev/ttyACM0" });
var button, led;
board.on('ready', function(){
	button = new five.Button(5);
	led = new five.Led(9)
	// 'down' es el evento ejecutado en el boton
	button.on('down', function(){
		led.toggle();
	});

});

