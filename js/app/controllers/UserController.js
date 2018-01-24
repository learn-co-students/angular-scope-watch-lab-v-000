function UserController($scope) {
	var ctrl = this
	ctrl.username = '';

	$scope.$watch(function () {
		return ctrl.username;
	}, function(newValue, oldValue){
		console.log("Username updated!")
	});

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function(){
		return ctrl.country;
	}, function(newValue){
		console.log('Country information updated!')
	});

	$scope.$watchCollection(function(){
		return ctrl.country.name;
	}, function(newValue){
		console.log("Country name updated!")
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
