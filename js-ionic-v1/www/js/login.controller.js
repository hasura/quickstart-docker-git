angular.module('starter.controllers')

  .controller('LoginCtrl', function($scope, hasura, $ionicPopup) {
    $scope.loginData = {
      username: '',
      password: ''
    };
    $scope.doLogin = function() {
      hasura.setUsername($scope.loginData.username);
      hasura.auth.login($scope.loginData.password, function(success) {
        console.log('login success');
        console.log(hasura.user);
        $ionicPopup.alert({
          title: 'Success',
          template: 'Login success'
        });
        $scope.$apply();
        // execute code after login
      }, function(error){
        console.log('login failed');
        console.log(error);
        $ionicPopup.alert({
          title: 'Error',
          template: 'Login failed'
        });
        // handle login error
      });
    };
  });
