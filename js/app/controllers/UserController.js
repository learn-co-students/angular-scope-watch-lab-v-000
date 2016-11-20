function UserController($scope) {
	var ctrl  = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	};

	$scope.$watch(function() {
		return ctrl.username;
	}, function(newValue, oldValue){
		console.log('username value updated!');
	});

	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function(newValue, oldValue) {
		console.log('country short/full updated');
	});

	$scope.$watch(function(){
		return ctrl.country;
	}, function(newValue, oldValue) {
		console.log('country deep watch update');
	}, true);
}
angular
	.module('app')
	.controller('UserController', UserController);
