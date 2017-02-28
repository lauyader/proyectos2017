// Para mover la escena declaramos variable

var fondojuego;
var camina;
var teclaDerecha;
var cursores;

var juego = new Phaser.Game(370,550, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal= {

	preload: function (){
		// Carga todos los recursos
		juego.load.image('fondo','img/escena.png');

		juego.load.spritesheet('indio','img/indio.png',94, 141)
		console.log('Caciquitos');
	},

	create: function () {
		// Muestra en pantalla los recursos
		fondojuego=juego.add.tileSprite(0,0,370,550, 'fondo');
		camina=juego.add.sprite(100,250,'indio');
		camina.frame = 0;
		camina.animations.add('andar', [0,1,2,3,4,5], 10,true);
		//teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		cursores= juego.input.keyboard.createCursorKeys();
	},


	update: function () {
		// Animacion del  juego
		// Generamo la corrida del escenario 
		fondojuego.tilePosition.x -= 1;  
		camina.animations.play('andar');
		/*
		if(teclaDerecha.isDown)
			{
			camina.position.x += 1;
			}
		 */
		
		if (cursores.right.isDown) {
			camina.position.x +=1;
		}
		if (cursores.left.isDown) {
			camina.position.x -=1;
		}
	}
		
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
