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
      //console.log('yes')
      $http.get('/api/login')
        .then(function success (response) { 

          todoList.login = response.data

            var userpass = false
            for(var i =0;i<response.data.length;i++){
              console.log(response.data[i].username)

              if(response.data[i].username==input.username && response.data[i].password==input.password){
                window.alert('ยินดีต้อนรับคุณ ' + response.data[i].name + ' เข้าสู่ระบบ')
                window.location = "report.html"
                userpass = true
                    break;
              }
            }

            if (userpass == false){
                  //console.log ('Error')
                  window.alert('คุณกรอก username หรือ password ไม่ถูกต้อง กรอกใหม่อีกครั้ง')
            } 
            else if (userpass==true) {
                  window.location = "report.html"
            }

        }, function error (response) {
          alert(response.data.message)
        })
    }
    
  })