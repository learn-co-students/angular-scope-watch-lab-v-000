function UserController($scope) {
	var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function (){
		return ctrl.username;
	}, function(newVal,prev) {
		//do somthing
	});

	$scope.$watch(function (){
		return ctrl.country;
	}, function(newVal) {
		//do somthing else
	}, true);

	$scope.$watchCollection(function (){
		return ctrl.country.name;
	}, function(newVal) {
		//do somthing more!!!
	});

}

angular
	.module('app')
	.controller('UserController', UserController);
