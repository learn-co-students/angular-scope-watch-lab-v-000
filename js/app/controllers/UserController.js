function UserController($scope) {
  var ctrl = this;
	ctrl.username = '';

  $scope.$watch(function () {
    return ctrl.username;
  }, function (newVal, oldVal) {
    console.log('username updated!');
  });

	ctrl.country = {
		name: {

		}
	};

  $scope.$watchCollection(function () {
    return ctrl.country;
  }, function (newVal, oldVal) {
    console.log('countries updated!');
  }, true);

  $scope.$watchCollection(function () {
    return ctrl.country;
  }, function (newVal, oldVal) {
    console.log('country updated');
  });

}

angular
	.module('app')
	.controller('UserController', UserController);
