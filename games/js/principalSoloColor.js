var juego = new Phaser.Game(200,300, Phaser.Auto, 'bloque_juego');

var estadoPrincipal= {

	preload: function () {
		// Carga todos los recursos
		juego.stage.backgroundColor="#000";
		console.log('Hola');
	},

	create: function () {
		// Muestra en pantalla los recursos
		
	},


	update: function () {
		// Animacion del  juego
		
	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
