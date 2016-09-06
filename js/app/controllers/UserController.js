function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return this.username
	},
	function (newValue, oldValue) {
		alert('username updated!')
	});

	$scope.$watch(function () {
		return this.country;
	}, function (newValue, oldValue) {
		alert('country name object updated')
	}, true);

	$scope.$watchCollection(function () {
		return this.county;
	}, function (newValue, oldValue) {
		alert('County object updated')
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
