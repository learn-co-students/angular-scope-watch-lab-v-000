function UserController($scope) {
  var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {
      short: '',
      full: ''
		},
    population: ''
	};

  $scope.$watch(function() {
    return ctrl.username;
  }, function(newValue, oldValue) {
    console.log('username has been updated');
  });

  $scope.$watch(function() {
    return ctrl.country;
  }, function(newValue, oldValue) {
    console.log('country object has been updated');
  }, true);

  $scope.$watchCollection(function() {
    return ctrl.country.name;
  }, function(newValue, oldValue) {
    console.log('country name short or full has been updated');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);
