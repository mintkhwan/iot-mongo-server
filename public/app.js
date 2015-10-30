angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;
    
    todoList.name = 'mint'
    getiot()

    todoList.addiot = function (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getiot()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function getiot () {
      $http.get('/api/iot')
        .then(function success (response) {
          todoList.iot = response.data
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }

  });