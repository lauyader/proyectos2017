// Para mover la escena declaramos variable

var fondojuego;
var camina;
var teclaDerecha;
var cursores;
var caminaRegresa;

var juego = new Phaser.Game(370,550, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal= {

	preload: function (){
		// Carga todos los recursos
		juego.load.image('fondo','img/escena.png');
   // Cargamos el archivo del personaje
		juego.load.spritesheet('indio','img/indioDef.png',88, 152);
		//juego.load.spritesheet('indioRegresa','img/IndioDefder.png',88, 152);
		console.log('Caciquitos');
	},

	create: function () {
		// Muestra en pantalla los recursos
		fondojuego=juego.add.tileSprite(0,0,370,550, 'fondo');
		//Posicion del personaje en pantalla
		camina=juego.add.sprite(-88, 352,'indio');
		//caminaRegresa=juego.add.sprite(88,152,'indioRegresa');
		// Inicia desde el cuadro?
		camina.frame = 14;
		// Muestra los segmentos que necesitamos del archivo spritesheet
		camina.animations.add('andar', [14,15,16,17,18,19], 10,true);
		camina.animations.add('regresa', [9,8,7,5,4], 10,true);
		//camina.animations.add('atras', [12,13,14,15, 16,17], 10,true);
		camina.animations.add('sentado', [0,1,2,3], 10,true);
		camina.animations.add('sentadoder', [10,11,12,13], 10,true);

		//Enmarcamos al personaje para que no salga del recuadro
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(camina);
		camina.body.collideWorldBounds = true;

		//teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		cursores= juego.input.keyboard.createCursorKeys();
	},


	update: function () {
		// Animacion del  juego
		// Generamo la corrida del escenario
		fondojuego.tilePosition.x = 1;
		//camina.animations.play('andar');
		//camina.animations.play('atras');
		/*
		if(teclaDerecha.isDown)
			{
			camina.position.x += 1;
			}
		 */

		if (cursores.right.isDown) {
			camina.position.x +=1;
			camina.animations.play('andar');
		}

		if (cursores.left.isDown) {
			camina.position.x -=1;
			camina.animations.play('regresa');
		}



		if (cursores.right.isUp) {
			camina.animations.stop('andar');

		}

		if (cursores.left.isUp) {

			camina.animations.stop('regresa');
		}





		if (cursores.down.isDown && cursores.left.isDown ) {
			//camina.position.x =1;
			camina.animations.play('sentado');
		}

		if (cursores.down.isDown && cursores.right.isDown ) {
			//camina.position.x =1;
			camina.animations.play('sentadoder');
		}
	}

};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
