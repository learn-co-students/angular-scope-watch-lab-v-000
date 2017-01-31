function UserController($scope) {
  var ctrl = this

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

  $scope.$watch(function () {
    return ctrl.username
  }, function (newVal, oldVal) {
    console.log('Username updated', newVal)
  })

  $scope.$watch(function () {
    return ctrl.country
  }, function (newVal) {
    console.log('Country info updated')
  }, true)

  $scope.$watchCollection(function () {
    return ctrl.country.name
  }, function (newVal) {
    console.log('Country name updated')
  })
}

angular
	.module('app')
	.controller('UserController', UserController);