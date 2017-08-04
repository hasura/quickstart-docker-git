angular.module('starter.controllers')

  .controller('RegisterCtrl', function($scope, hasura, $ionicPopup) {
    $scope.loginData = {
      username: '',
      password: '',
      repassword: '',
      email: ''
    };
    $scope.doRegister= function() {
      if($scope.loginData.password !== $scope.loginData.repassword) {
        $ionicPopup.alert({
          title: 'Error',
          template: 'Passwords do not match'
        });
      } else {
        hasura.setUsername($scope.loginData.username);
        hasura.auth.signup($scope.loginData.password, {}, function(){
          console.log('signup success');
          $ionicPopup.alert({
            title: 'Success',
            template: 'Register success'
          });
          $scope.$apply();
        }, function(error){
          console.log('signup error');
          $ionicPopup.alert({
            title: 'Error',
            template: 'Register failed'
          });
        });
      }
    };
  });
