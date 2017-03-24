var five = require('johnny-five');
var dgram = require('dgram') //para el datagram
var server = dgram.createSocket('udp4'); //con el datagram se crea un servidor
var board = five.Board({ port: "/dev/ttyACM0" });
var piezo;
board.on('ready', function(){

	piezo = new five.Piezo(8);
	// Injects the piezo into the repl
	  board.repl.inject({
	    piezo: piezo
	  });

	//si se presenta error con el servidor
	server.on('error', (err) => {
	  //console.log(`server error:\n${err.stack}`);
	  server.close();
	});


	//Enviar mensaje
	server.on('message', (msg, rinfo) => {
	  //console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
	  piezo.play({
	    // song is composed by a string of notes
	    // a default beat is set, and the default octave is used
	    // any invalid note is read as "no note"
	    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
	    beats: 1 / 4,
	    tempo: 100
	  });
	});

	//Escuchar servidor
	server.on('listening', () => {
	  //var address = server.address();
	  //console.log(`server listening ${address.address}:${address.port}`);
	});

	server.bind(1337); //enlazar servidor a puerto 1337



});