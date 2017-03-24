var five = require('johnny-five');
var board = new five.Board({ port: "/dev/ttyACM0" });
board.on('ready', function(){
	var motor = new five.Motor(9);
	/*el parametro "start indica el estao actual del motor"
	  en este caso cuando el motor tenga el estado start o encendido se detiene 
	  despues de 2 segundos*/
	motor.on("start", function(err, timestamp){
		board.wait(2000, function(){
			motor.stop();
		});
	});
	/* el parametro "stop" indica el estado actual del motor, cuando esta "detenido"
	   se espera 1 seg para hacerlo mover
	*/
	motor.on("stop", function(err, timestamp) {
	    board.wait(1000, function() {
	      	motor.forward(200);
	    });
  	});	
	motor.start(200);	
});