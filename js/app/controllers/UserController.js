function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watchCollection(function(){
    return this.country.name;
  }, function(newVal, oldVal){
    console.log('you just changed ' + oldVal + ' to ' + newVal)
  });

  $scope.$watch(function(){
    return this.country;
  }, function(newVal, oldVal){
    console.log('you just changed ' + oldVal + ' to ' + newVal)
  }, true);
}

angular
	.module('app')
	.controller('UserController', UserController);