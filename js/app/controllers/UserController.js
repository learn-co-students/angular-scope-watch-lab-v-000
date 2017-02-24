function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

	var ctrl = this;

	$scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log('username updated!');
  });

	$scope.$watch(function () {
    return ctrl.country;
  }, function (newValue, oldValue) {
    console.log('country updated!');
  }, true);

	$scope.$watchCollection(function () {
    return ctrl.country.name;
  }, function (newValue, oldValue) {
    console.log('country name updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);
