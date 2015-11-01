angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;
    var chart
    
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

    getchart ()
    function getchart () {
      $http.get('/api/iot')
        .then(function success (response) {
                            var data = {
                              labels: ["test"],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(220,220,220,0.2)",
                                      strokeColor: "rgba(220,220,220,1)",
                                      pointColor: "rgba(220,220,220,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: [10]
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(151,187,205,0.2)",
                                      strokeColor: "rgba(151,187,205,1)",
                                      pointColor: "rgba(151,187,205,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: [20]
                                  }
                              ]
                          };

               var ctx = document.getElementById("c").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

        }, function error (response) {
          alert(response.data.message)
        })
    }

    /*todoList.deleteiot = function(id){
        console.log(id);
        $http.delete('/api/iot/'+id)
          .success(function(data) {
            getiot()
          })
          .error(function(data) {
            console.log('Error: ' + data)
          })
    }*/


  });