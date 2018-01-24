function UserController() {
	var username = this.username = '';

	var country = this.country = {
		name: {

		}
	};

	$scope.$watch(function () {
			return username;
	}, function (newValue, oldValue) {
			console.log('value updated!');
	});


	$scope.$watch(function () {
		return country;
	}, function (newValue) {
		console.log('Country info updated');
	}, true);

	$scope.$watchCollection(function () {
			return country;
	}, function (newValue, oldValue) {
			console.log('value updated!');
	});

}

angular
	.module('app')
	.controller('UserController', UserController);
