angular.module('starter.controllers')
  .controller('FilestoreCtrl', function (hasura, $scope, $ionicPopup) {
		var input = document.getElementById('file-upload');
		var fileId;
		$scope.uploadFile = function() {
			hasura.file.upload(
				input,
				function (successResponse) {
					fileId = successResponse.file_id;
					$scope.file = fileId;
					console.log('Uploaded file: ' + fileId);
					$scope.$apply();
				},
				function (errorResponse) {
					console.log('Error uploading file');
					console.log(errorResponse);
				});
		};

		$scope.downloadFile = function(file) {
      console.log('download', file);
	    hasura.file.download(file, function(success){
				$ionicPopup.alert({title: 'file downloaded'});
			}, function(error){
				$ionicPopup.alert({title: 'download failed'});
			}); // This will use the HTML5 download attribute to start downloading the file
		};

		$scope.deleteFile = function(file) {
	    hasura.file.delete(file, function(success){
				$ionicPopup.alert({title: 'file deleted'});
				$scope.file = undefined;
				$scope.$apply();
			}, function(error){
				$ionicPopup.alert({title: 'file delete failed'});
			});
		};
  });
