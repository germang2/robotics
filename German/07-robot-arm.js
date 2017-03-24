var five = require('johnny-five');
var board = new five.Board({ port: "/dev/ttyACM0" });
var servo, potentiometer;
board.on('ready', function(){
	servo = new five.Servo(9);
	// Create a new `potentiometer` hardware instance.
	potentiometer = new five.Sensor({
		pin: "A2",
		freq: 250
	});

	// Inject the `sensor` hardware into
	// the Repl instance's context;
	// allows direct command line access
	board.repl.inject({
		pot: potentiometer
	});

	// "data" get the current reading from the potentiometer
	potentiometer.on("data", function() {
		
		if(this.value!=null){
			//console.log(this.value, this.raw);	
			servo.to(potentiometer.scaleTo(0,179));
		}
		
	});
});