function UserController() {
  var ctrl = this;
  ctrl.username = '';

  ctrl.country = {
    name: {
      full: '',
      short: ''
    },
    population: ''
  };

  $scope.$watch(function(){
    return ctrl.username;
  }, function(new, old){
    console.log('value updated!');
  });

  $scope.$watch(function(){
    return ctrl.country;
  }, function(new, old){
    console.log('value updated!');
  }, true);

  $scope.$watchCollection(function(){
    return ctrl.country.name;
  }, function(new, old){
    console.log('value updated!');
  });
}

angular
  .module('app')
  .controller('UserController', UserController);