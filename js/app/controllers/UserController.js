function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function () {
  	return ctrl.username;
  }, function (newValue, oldValue) {
    console.log('username has been updated!');
  });

	$scope.$watch(function () {
    return ctrl.country.name;
  }, function (newValue, oldValue) {
    console.log('country object has been updated!');
  }, true);

	$scope.$watchCollection(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('country full or short name has been updated');
    });
}


angular
	.module('app')
	.controller('UserController', UserController);
