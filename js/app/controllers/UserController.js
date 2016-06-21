function UserController() {
  var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};
  $scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log(newValue, oldValue);
  });

  $scope.$watchCollection(function () {
    return ctrl.country;
  }, function (newValue, oldValue) {
    console.log(oldValue, newValue);
  }, true);
}

angular
	.module('app')
	.controller('UserController', UserController);