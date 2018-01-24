function UserController($scope) {

	var user = this

	user.username = '';

	user.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return user.username;
	}, function(newValue, oldValue) {
		console.log('value updated!', newValue);
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
