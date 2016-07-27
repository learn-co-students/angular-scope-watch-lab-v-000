function UserController($scope) {
  var ctrl = this;
	this.username = '';

	this.country = {
		name: {

		}
	};
      $scope.$watch(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('Username updated', newValue);
    });
      $scope.$watch(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('value updated!', newValue);
    }, true);
      $scope.$watchCollection(function () {
        return ctrl.country.name;
    }, function (newValue, oldValue) {
        console.log('value updated!', newValue);
    });
}

angular
	.module('app')
	.controller('UserController', UserController);