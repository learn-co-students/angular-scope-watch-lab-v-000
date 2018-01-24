function UserController($scope) {

  var userCtrl = this;
	this.username = '';

  $scope.$watch(function(){
    return userCtrl.username;
  }, function(nV, oV){
    console.log('The username was updated from' + oV + ' to ' + nV);
  });

	this.country = {
		name: {

		}
	};

  $scope.$watch(function(){
    return userCtrl.country
  }, function(oV, nV){
    console.log('The country was changed.');
  }, true);

  $scope.$watchCollection(function(){
    return userCtrl.country.name;
  },
    function(oV, nV){
      console.log('Country name was changed.');
    });
}

angular
	.module('app')
	.controller('UserController', UserController);
