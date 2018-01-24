function UserController($scope) {
  var user = this

  this.username = '';

  this.country = {
    name: {
      short: '',
      full: '',
      population: ''
    }
  };

  $scope.$watch(function (){
    return user.user
  }, function (oldValue, newValue){
    console.log('Username Changed!')
  })

  $scope.$watch(function (){
    return user.country
  }, function(oldValue, newValue){
    console.log('Country Changed!')
  }, true)

}

angular
  .module('app')
  .controller('UserController', UserController);