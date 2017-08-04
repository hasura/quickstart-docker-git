angular.module('starter.controllers')
  .controller('QueryCtrl', function (hasura, $scope) {
    $scope.todos = [];
    $scope.getTodos = function() {
      hasura.data.query({
        type: 'select',
        args: {
          table: 'todo',
          columns: ['id', 'user_id', 'title', 'completed'],
          order_by: ['+completed', '+id']
        }},
        function(data){
          $scope.todos = data;
          $scope.$apply(); // Need to do this since angular wouldn't know when to re-render the scope
        },
        function(error){
          console.log(error);
        }
      );
    };

    // Insert query
    $scope.addTodo = function(title) {
      hasura.data.query({
        type: 'insert',
        args: {
          table: 'todo',
          objects: [{
            user_id: hasura.user.id,
            title: title,
            completed: false
          }]
        }},
        function(data){
          $scope.getTodos();
        },
        function(error){
          console.log(error);
        }
      );
    };

    // Update query
    $scope.toggleCompleted = function(id, status) {
      hasura.data.query({
        type: 'update',
        args: {
          table: 'todo',
          where: { id: id },
          $set: { completed: !status }
        }},
        function(data){
          $scope.getTodos();
        },
        function(error){
          console.log(error);
        }
      );
    };

    // Delete query
    $scope.deleteTodo = function(id) {
      hasura.data.query({
        type: 'delete',
        args: {
          table: 'todo',
          where: { id: id }
        }},
        function(data){
          $scope.getTodos();
        },
        function(error){
          console.log(error);
        }
      );
    };
  });
