function UserController() {
	this.username = '';

	this.country = {
		name: {
      short:'',
      full: ''
		},
    population: ''
	};

  $scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log('Username updated', newValue);
  });

  $scope.$watch(function () {
    return ctrl.country;
  }, function (newValue) {
    console.log('Country info updated');
  }, true);

  $scope.$watchCollection(function () {
    return ctrl.country.name;
  }, function (newValue) {
    console.log('Country name updated');
  });

angular
	.module('app')
	.controller('UserController', UserController);