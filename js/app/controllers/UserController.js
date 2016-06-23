function UserController($scope) {
	var user = this

	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log('value updated!');
	});

		$scope.$watch(function() {
		return user.country;
	}, function(newValue) {
		console.log('Country has been updated');
	}, true);

	$scope.$watchCollection(function() {
		return user.country.name;
	}, function(newValue) {
		console.log('Countries name is updated!');
	});

}

angular
	.module('app')
	.controller('UserController', UserController);