(function(){

	// Accedemos al módulo myApp
	var app = angular.module("myApp");

	// Servicio RestApi
	// Le inyectamos el servicio $resource
	app.controller("myController", ["$scope", "RestApi", function($scope, RestApi){

		// Obtener la lista de usuarios
		$scope.users = RestApi.query();

		// Declarar la variable edit en el controlador
		$scope.edit = {};

		// Añadir un usuario
		$scope.addUser = function(user){

			// Ejecutar el método save para guardar el usuario
			RestApi.save(user)

				// Al guardar el usuario correctamente
				.$promise.then(

					function(response){

						// Añadir los datos del usuario al array de users
						$scope.users.push({

							id		: response.id,
							name	: response.name,
							age		: response.age

						});

						// Reemplazar la variable user del scope
						// por un objeto vacío para que el formulario
						// quede limpio
						$scope.user = {};

					}

				);

		};

		// Editar un usuario
		$scope.editUser = function(user){

			// Llamar al método update (PUT)
			RestApi.update({id: user.id}, user)

				.$promise.then(

					// Eliminar la variable respectiva al id del usuario del objeto edit
					function(response){

						delete $scope.edit[user.id];

					}

				);

		};

		// Eliminar usuario
		$scope.deleteUser = function(user){

			RestApi.delete(user)

				// Cuando se haya borrado correctamente el usuario del servidor
				.$promise.then(

					function(){

						$scope.users.splice( $scope.users.indexOf(user), 1 );

					}
				);

		};

		// Mostrar la edición
		$scope.showEdition = function($event, id){			

			// Asignar valor true la variable representada por el id del usuario
			// Esto provocará que se muestren los elementos respectivos a la edición
			// y se oculten los spans y el botón de eliminar usuario
			$scope.edit[id] = true;

			// Con $event.currentTarget accedemos al elemento que ha lanzado el evento
			// Guiándonos por este elemento accedemos mediante jQuery al input que está debajo del mismo
			var input = angular.element($event.currentTarget).parent().find("input")[0];		

			// Después de 50 milisegundos hacemos que el input tome el foco
			// Y que el texto que contiene se seleccione
			setTimeout(function(){

				input.focus();
				input.select();

			}, 50);

		};

	}]);

})();