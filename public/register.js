angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this

    getlogin()
    
    
    todoList.register = function (input) {
      alert('success Acount:'+input.name)
      saveRegister(input)
    }

    function saveRegister (data){
      $http.post('/api/login', data) //insert object
        .then(function success (response) {
          console.log(response)
          alert('Success')
          window.location = "thankyou.html"
          
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function getlogin () {
      console.log('yes')
      $http.get('/api/login')
        .then(function success (response) { 
          todoList.login = response.data
           
          console.log(todoList.login)
          //console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }



    todoList.adduser = function  (input) {
      console.log('yes')
      $http.get('/api/login')
        .then(function success (response) { 
          todoList.login = response.data
           
            for(var i =0;i<response.data.length;i++){
              
              if(response.data[i].username==input.username && response.data[i].password==input.password){
                console.log(' success : '+response.data[i].username)
                break;
              }
              else if(response.data[i].username!=input.username && response.data[i].password!=input.password){
                console.log('err')
              }
            }

          console.log(todoList.login)
          //console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }

    





    
  })