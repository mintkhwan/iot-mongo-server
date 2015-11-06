angular.module('todoApp', [])

  .controller('TodoListController', function($http) {
    var todoList = this;
    
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
    
    /*todoList.start = function(){
      todoList.limit = 10;
    }

    todoList.loadmore = function(){
      todoList.limit +=10;
    }

    todoList.loadplus = function(){
      todoList.limit +=100;
    }

    todoList.loadplusplus = function(){
      todoList.limit +=1000;
    }*/

    function getiot () {
      $http.get('/api/iot')
        .then(function success (response) {
          todoList.iot = response.data
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }

    todoList.time = function(time){
      return moment(time).format("MMM Do YY")
      //return moment(time).format('MMMM Do YYYY, h:mm:ss a')
    }

    todoList.deleteiot = function(id,index){
        console.log(id);
        $http.delete('/api/iot/'+id)
          .success(function(data) {
            alert('delete')
            todoList.iot.splice(index,1)
            //window.location='index.html'
            
          })
          .error(function(data) {
            alert('error')
            console.log('Error: ' + data)
          })
    }

  })