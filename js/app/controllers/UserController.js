function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

  var ctrl = this;

  $scope.$watch(
    function() { return ctrl.username; },
    function(newValue, oldValue) {
      alert('update!!! username')
    } 
  );

  $scope.$watch(
    function() { return ctrl.country; },
    function(newValue, oldValue) {
      alert('update!!! country')
    }, true
  );

    $scope.$watchCollection(
    function() { return ctrl.country; },
    function(newValue, oldValue) {
      alert('update!!! country collection')
    }
  );
}

angular
	.module('app')
	.controller('UserController', UserController);