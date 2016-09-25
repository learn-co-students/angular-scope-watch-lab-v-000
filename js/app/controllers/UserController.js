function UserController($scope) {
  var ctrl = this
	this.username = '';

  $scope.$watch(function(){
    return ctrl.username
  }, function(newValue, oldValue){
    console.log("value changed")
  })

	this.country = {
		name: {
      short: '',
      full: ''
		},
    population: ''
	}

  $scope.$watch(function(){
    return ctrl.country
  }, function(newValue, oldValue) {
    console.log('value changed')
  }, true)
}

angular
	.module('app')
	.controller('UserController', UserController);