function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watch(function(){
    return this.username;
  }, function (newValue, oldValue){
    console.log('username updated');
  }

  );

  $scope.$watch(function () {
    return ctrl.country;
  }, function (newValue, oldValue) {
    console.log('value updated');
  }, true);



  $scope.$watchCollection(function () {
      return this.country.name;
  }, function (newValue, oldValue) {
      console.log('value updated!');
  });


}

angular
	.module('app')
	.controller('UserController', UserController);

