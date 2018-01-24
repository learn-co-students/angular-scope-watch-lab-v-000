function UserController() {
  var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}

    $scope.$watch( function () {
      return ctrl.name;
    }, function (newValue, oldValue) {
      return console.log('Username updated!');
    });

    $scope.$watch( function () {
      return ctrl.country;
    }, function (newValue) {
      return console.log('Country info updated!');
    }, true);

    $scope.$watchCollection( function () {
      return ctrl.country.name;
    }, function (newValue) {
      return console.log('Country name updated!');
    });
	};
}

angular
	.module('app')
	.controller('UserController', UserController);