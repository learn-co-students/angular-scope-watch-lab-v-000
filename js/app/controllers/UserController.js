function UserController($scope) {
  var ctrl = this
	ctrl.username = '';

	ctrl.country = {
		name: {
      short: '',
      full: ''
		}
	};

  $scope.$watch(function(){
    return ctrl.username
  }, function(newValue, oldValue){
    console.log("username updated!")
  })

  $scope.$watch(function(){
    return ctrl.country
  }, function(newValue, oldValue){
    console.log("country attr(s) updated!")
  }, true)

  $scope.$watchCollection(function(){
    return ctrl.country.name
  }, function(newValue, oldValue){
    console.log("country name updated!")
  })
}

angular
	.module('app')
	.controller('UserController', UserController);