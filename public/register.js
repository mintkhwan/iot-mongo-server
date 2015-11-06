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

    function getlogin () {
      //console.log('yes')
      $http.get('/api/login')
        .then(function success (response) { 
          todoList.login = response.data
          //console.log(todoList.login)
          //console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }

    todoList.adduser = function  (input) {
      console.log('yes')
      $http.get('/api/login', { username : input.username , password : input.password})
        .then(function success (response) {
            console.log(response.data[0].username)
            if((input.username== response.data[0].username)&&(input.password == response.data[0].password)){
              console.log("have user ");
              
              window.location= "report.html"
            }else{
              window.location="login.html"
            }

            //app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })
    }

    /*app.login = function(input){
       //$http.post('/api/login', input)
       $http.post('/login' , { username : input.username , password : input.password})
       .then(function success (response) {
            console.log(response.data[0].username)
            if((input.username== response.data[0].username)&&(input.password == response.data[0].password)){
              console.log("have user ");
              
              window.location= "report.html"
            }else{
              window.location="login.html"
            }

            //app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })


    }*/
    
  })