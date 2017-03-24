var five = require('johnny-five');
var board = new five.Board({ port: "/dev/ttyACM0" });
var photoresistor, led;
board.on('ready', function(){
	photoresistor = new five.Sensor({
		pin: "A0",
		freq: 250
	});
	led = new five.Led(9);
	// "data" get the current reading from the photoresistor
	photoresistor.on("data", function() {
		//console.log(this.value);
		if(this.value<=20){ //value es el valor del fotoresistor
			led.on();	
		}else{
			led.off();
		}
		//console.log(this.value);
		
	});
});