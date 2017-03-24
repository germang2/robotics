var five = require('johnny-five');  
var board = new five.Board();
board.on('ready', function () {  
	servo = new five.Servo(9);
	servo.sweep(0);
	board.wait(3000, function(){
		servo.stop();
		servo.center();	
	});
	
});
