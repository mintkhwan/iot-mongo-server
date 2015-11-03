angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

  
    todoList.register = function (input) {
      //alert('success Acount:'+input.name)
      saveRegister(input)
    }

    function saveRegister (data){
      $http.post('/api/login', data) //insert object
        .then(function success (response) {
          console.log(response)
          alert('Success')
          //window.location = "thankyou.html"
          
        }, function error (response) {
          alert(response.data.message)
        })

    }
    
  })