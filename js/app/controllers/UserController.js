function UserController($scope) {
  var ctrl = this;

	this.username = 'username';

	this.country = {
		name: {
      shortName: 'USA',
      fullName: 'United States of America'
		},
    population: 1
	};

  $scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log("username updated");
  });

  $scope.$watch(function () {
    return ctrl.country;
  }, function (newValue, oldValue){
    console.log("country updated");
  }, true);

  $scope.$watchCollection(function (){
    return ctrl.country.name;
  }, function (newValue, oldValue) {
    console.log("country name updated");
  });
}

angular
	.module('app')
	.controller('UserController', UserController);