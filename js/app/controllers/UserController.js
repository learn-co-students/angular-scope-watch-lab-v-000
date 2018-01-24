function UserController($scope) {
	this.username = '';

	this.country = {
		name: {
			full: '',
			short: '',
		}
	};

	$scope.$watch(function() {
		return this.username;
	}, function (newValue, oldValue) {
		console.log('updated!');
	});

	$scope.$watch(function() {
		return this.country;
	}, function(newValue, oldValue) {
		console.log('deep sea watching');
	}, true);

	$scope.$watchCollection(function() {
		return this.country.name;
	}, function (newValue, oldValue) {
		console.log('watching a collection');
	});


}

angular
	.module('app')
	.controller('UserController', UserController);
