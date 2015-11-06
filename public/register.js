angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this

    getlogin()
    
    todoList.register = function (input) {
      alert('Your Acount :'+input.username)
      saveRegister(input)
    }

    function saveRegister (data){
      $http.post('/api/login', data) //insert object
        .then(function success (response) {
          console.log(response)
          alert('คุณได้สมัครเป็นสมาชิกของระแล้ว')
          window.location = "register.html"
        }, function error (response) {
          alert(response.data.message)
        })
    }
    
  })