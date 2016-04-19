function UserController($scope) {
	var ctrl = this;
  ctrl.username = '';

  $scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log('value updated');
  });

	ctrl.country = {
		name: {
      short: '',
      full: '',
      population: ''
		}
	};

  $scope.$watch (function () {
    return ctrl.country; 
  }, function (newValue, oldValue) {
    console.log('value updated');
  }, true);

  $scope.$watchCollection(function () {
    return [ctrl.country.name.short, ctrl.country.name.full];
  }, function (newValue, oldValue) {
    console.log('value updated!')
  }, true );
}

angular
	.module('app')
	.controller('UserController', UserController);
