(function(){

	// Accedemos al módulo myApp
	var app = angular.module("myApp");

	// Servicio RestApi
	// Le hemos inyectado el servicio $resource
	app.factory("RestApi", ["$resource", function RestApiFactory($resource){

		// Retornamos el servicio $resource apuntando a la dirección de la REST API
		// Los parámetros deben ir precedidos de ":"
		// Como tercer parámetro pasamos un objeto que contendrá las acciones personalizadas
		// Como acción personalizada hemos colocado una llamada update que corresponderá al método PUT
		return $resource("http://localhost:3000/users/:id", {}, {

			update: {method: "PUT"}

		});

	}]);

})();