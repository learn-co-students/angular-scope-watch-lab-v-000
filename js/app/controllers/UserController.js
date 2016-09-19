function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
  }


    $scope.$watch(function(){
      return this.username}, function(newValue, oldValue){
   console.log('value updated!')   }
    )

    $scope.$watch(function(){

      return this.country}, function(newValue, oldValue) {
        console.log('updated!')}, true
      
    )
	
}

angular
	.module('app')
	.controller('UserController', UserController);