function UserController() {
	var ctrl.this;
	this.username = '';

	this.country = {
		name: {

		}
	};
	$scope.$watch(function() {
		return ctrl.username;
	}, function(oldValue, newValue) {
		console.log("Username updated!")
	});

	$scope.$watch(function() {
		return ctrl.country;
	}, function(oldValue, newValue) {
		console.log("Country updated!")
	});

	$scope.$watchCollection(function(){
		return ctrl.country.name;
	}, function(oldValue, newValue) {
		console.log("country name updated")
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
