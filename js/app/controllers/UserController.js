function UserController($scope) {
  var ctrl = this
  ctrl.username = '';

  ctrl.country = {
    id: 5,
    name: {
      short: 'USA',
      full: 'United States'
    },
    population: 312000000
  };

  $scope.$watch(function(){
    return ctrl.username;
  }, function(newValue, oldValue){
    ctrl.newUsername = ('The username has been updated to: ' + newValue);
  });

  $scope.$watch(function(){
    return ctrl.country.name.full;
  }, function(newValue, oldValue){
    ctrl.newCountry = newValue;
  }, true);

  $scope.$watchCollection(function(){
    return ctrl.country.name;
  }, function(newValue){
    console.log(newValue);
  })
}

angular
  .module('app')
  .controller('UserController', UserController);
