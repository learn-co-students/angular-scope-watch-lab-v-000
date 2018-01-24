function UserController($scope) {
  var vm = this;
	vm.username;

	vm.country = {
		name: {
      short: '',
      full: '',
		},
    population: '',
	};

  $scope.$watch(function(){
    return vm.username;
  }, function(oldValue, newValue){
    console.log('Username updated!')
  });

  $scope.$watchCollection(function(){
    return vm.country.name;
  }, function(oldValue, newValue) {
    console.log('Shallow watch. Country updated!')
  });

  $scope.$watch(function(){
    return vm.country;
  }, function(){
    console.log('Deep watch. Country updated!')
  }, true)
}

angular
	.module('app')
	.controller('UserController', UserController);