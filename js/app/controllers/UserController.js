 function UserController($scope) {
	 var ctrl = this;

	 $scope.$watch(function(){
		 return ctrl.username;
	 }, function(newValue, oldValue){
		 console.log('Username updated!');
	 });

	 $scope.$watchCollection(function(){
		 return ctrl.country;
	 }, function(newValue, oldValue){
		 console.log('Country updated!');
	 }, true);

	 $scope.$watchCollection(function(){
		 return ctrl.country.name;
	 }, function(newValue, oldValue){
		 console.log('Country name updated!')
	 });

	this.username = '';

	this.country = {
		name: {

		}
	};
}

angular
	.module('app')
	.controller('UserController', UserController);
