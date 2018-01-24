function UserController($scope) {
	var ctrl = this
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log('username updated to ' + newValue);
});

	$scope.$watch(function () {
		return ctrl.country;
	 }, function (newValue, oldValue) {
			 console.log('Country object updated');
	 }, true);

	$scope.$watchCollection(function () {
		return ctrl.country.name;
	}, function (newValue, oldValue) {
		console.log('country name has been updated')
	});

}

angular
	.module('app')
	.controller('UserController', UserController);
