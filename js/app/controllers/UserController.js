function UserController($scope) {
	var ctrl = this;
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return ctrl.username;
	}, function(newVal, oldVal) {
		console.log('username change?')
	});

	$scope.$watch(function(){
		return ctrl.country;
	}, function(newVal, oldVal){
		console.log('object deep change? damn last lab?')
	}, true);

	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function(newVal, oldVal){
		console.log('it"s the end' + oldVal + newVal)
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
