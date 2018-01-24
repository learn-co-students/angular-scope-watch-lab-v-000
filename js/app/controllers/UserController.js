function UserController($scope) {
	var ctrl = this;

  ctrl.username = '';

	ctrl.country = {
		name: {
      short: '',
      full: ''
		},
    population: ''
	};

  $scope.$watch(
    function(){
      return ctrl.username;
    },
    function() {
      console.log("Username was updated!");
    }
  );

  $scope.$watch(
    function(){
      return ctrl.country;
    },
    function(){
      console.log("Country was deep updated!");
    },
    true
  );

  $scope.$watchCollection(
    function() {
      return ctrl.country.name;
    },
    function() {
      console.log("Country name was updated!");
    }
  );
}

angular
	.module('app')
	.controller('UserController', UserController);