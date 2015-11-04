angular.module('todoApp', [])
  .controller('TodoListController', function($http ,$interval) {
    var todoList = this;
    
    getchart ()
    //todoList.name = 'mint'
    getiot()
    
    /*var count = 0
    $interval(function () {
      getchart ()
      getiot()
      count++
      console.log("run :"+count)
    }, 5000)*/

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

    todoList.time = function(time){
      return moment(time).format('MMMM Do YYYY, h:mm:ss a')
    }

    //getchart ()
    function getchart () {
    	//console.log("functionchatsucess")
      $http.get('/api/iot')
        .then(function success (response) {
        	//console.log("waiting forloop")
                            var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(220,220,220,0.2)",
                                      strokeColor: "rgba(220,220,220,1)",
                                      pointColor: "rgba(220,220,220,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(151,187,205,0.2)",
                                      strokeColor: "rgba(151,187,205,1)",
                                      pointColor: "rgba(151,187,205,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("c").getContext("2d")

               var myLineChart = new Chart(ctx).Line(data);

               for(var i =0;i<response.data.length;i++){
               		if(response.data[i].iot_id==1){
               			console.log(response.data[i].iot_id)
               			myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,"IOT_ID : 1");
               		}
               }

        }, function error (response) {
        	console.log("error")
          alert(response.data.message)
        })
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

  });