function UserController($scope) {
	var ctrl = this;

  ctrl.username = '';

	ctrl.country = {
		name:
    { full: '', short: '',}, 
    population: ''
	};

  $scope.$watch(function (){
    return ctrl.username;
  }, function (newValue, oldValue) {

    console.log('value updated', newValue)
  })

$scope.$watch(function (){
    return ctrl.country;
  }, function (newValue) {

    console.log('info updated')
  })

$scope.$watchCollection(function () {
    return ctrl.country.name;
  }, function (newValue) {
    console.log('Country name updated', newValue);
  });

$scope.$watchCollection(function () {
    return ctrl.country.name.full;
  }, function (newValue) {
    console.log('Country full name updated', newValue);
  });

$scope.$watchCollection(function () {
    return ctrl.country.name.short;
  }, function (newValue) {
    console.log('Country short name updated', newValue);
  });

$scope.$watchCollection(function () {
    return ctrl.country.population;
  }, function (newValue) {
    console.log('Country population updated', newValue);
  });
}

angular
	.module('app')
	.controller('UserController', UserController);