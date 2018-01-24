function UserController($scope) {
	var ctrl = this;
  ctrl.username = '';

	ctrl.country = {
		name: { 
      short: ''
      full: ''
      population: ''
		}
	};

  $scope.$watch(function(){
    return ctr.username;
  }, function(newVal, oldVal){    
  });

  $scope.$watch(function(){
    return ctrl.country;
  }, function(newVal){

  }, true);

  $scope.$watchCollection(function(){
    return ctrl.country.name;
  }, function(newVal){
    
  })
}

angular
	.module('app')
	.controller('UserController', UserController);