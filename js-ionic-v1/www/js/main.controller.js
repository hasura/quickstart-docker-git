angular.module('starter.controllers', [])


  .controller('MainCtrl', function($scope, hasura, $ionicPopup) {
    $scope.user = hasura.user.username;
    $scope.doLogout = function() {
      hasura.auth.logout(function(success){
        console.log('logout success');
        $ionicPopup.alert({
          title: 'Success',
          template: 'Logout success'
        });
        $scope.user = hasura.user.username;
        $scope.$apply();
      }, function(error) {
        console.log('logout failed');
        $ionicPopup.alert({
          title: 'Error',
          template: 'Logout failed '
        });
      });
    };
  });
