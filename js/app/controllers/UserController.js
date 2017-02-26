function UserController($scope) {
  var ctrl = this

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

  $scope.$watch(function () {
    return ctrl.username
  }, function (newValue, oldValue) {
    console.log('username updated!', newValue);
  });

  $scope.$watch(function () {
    return ctrl.country
  }, function (newValue, oldValue) {
    console.log('value updated!');
  }, true);

  $scope.$watchCollection(function () {
    return ctrl.country.name
  }, function (newValue, oldValue) {
    console.log('value updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);