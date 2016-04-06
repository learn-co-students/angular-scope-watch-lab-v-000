function UserController() {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			fullName: 'United States',
			shortName: 'US'
		}
	};


	$scope.$watch(function () {
      return ctrl.username;
  }, function (newValue, oldValue) {
      console.log('username updated from '+oldValue+' to '+newValue);
  });

	$scope.$watch(function () {
      return ctrl.country;
  }, function (newValue, oldValue) {
      console.log('country updated!');
  });

	$scope.$watchCollection(function () {
      return [ctrl.country.fullName, ctrl.country.shortName];
  }, function (newValue, oldValue) {
      console.log('country name updated!');
  });

}

angular
	.module('app')
	.controller('UserController', UserController);
