function UserController($scope) {
  var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

  $scope.$watch(function(){
    return ctrl.username;
  }, function(){
    console.log('username changed.')
  });

  $scope.$watch(function(){
    return ctrl.country;
  }, function(){
    console.log('country data changed.')
  }, true);

}

angular
	.module('app')
	.controller('UserController', UserController);