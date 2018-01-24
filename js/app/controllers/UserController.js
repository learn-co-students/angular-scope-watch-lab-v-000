function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return this.username;
	}, function() {
		console.log('name changed');
	});

	$scope.$watch(function() {
		return this.country;
	}, function() {
		console.log('Country changed');
	}, true);
}

angular
	.module('app')
	.controller('UserController', UserController);
