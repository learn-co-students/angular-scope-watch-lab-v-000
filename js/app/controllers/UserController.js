function UserController($scope) {
	var user=this
  user.username = '';

	this.country = {
		name: {
        short: 'deez',
        full: 'nuts',
        },
    population: 5000000
	};

  user.country=this.country
  
  $scope.$watch (function(){
      return user.username
  }, function(newValue, oldValue){
      console.log("changed from " + oldValue + " to " + newValue)
  })

  $scope.$watch (function(){
      return user.country
  }, function(newValue, oldValue){
    // debugger;
      var nv=JSON.stringify(newValue) 
      var ov=JSON.stringify(oldValue)
      console.log("changed from " + ov + " to " + nv)
  }, true)

}

angular
	.module('app')
	.controller('UserController', UserController);