angular.module('todoApp', [])

  .controller('TodoListController', function($http ,$interval) {
    var todoList = this;
    
    getchartOne()
    getchartTwo()

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

    //getchart ()
    function getchartOne () {
    	//console.log("functionchatsucess")
      $http.get('/api/iot')
        .then(function success (response) {
        	//console.log("waiting forloop")
          var data = {
            labels: [],
            datasets: [
            {
                label: "temperature",
                fillColor: "rgba(135,206,235,0.2)",
                strokeColor: "rgba(135,206,235,1)",
                pointColor: "rgba(135,206,235,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(135,206,235,1)",
                data: []
              },
              {
                label: "relative_humidity",
                fillColor: "rgba(255,182,193,0.2)",
                strokeColor: "rgba(255,182,193,1)",
                pointColor: "rgba(255,182,193,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(255,182,193,1)",
                data: []
              }
            ]
        };
               var ctx = document.getElementById("one").getContext("2d")

               var myLineChart = new Chart(ctx).Line(data);

               for(var i =0;i<response.data.length;i++){
               		if(response.data[i].iot_id==1){
               			console.log(response.data[i].iot_id)
               			myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,response.data[i].timestamp);
               		}
               }

        }, function error (response) {
        	console.log("error")
          alert(response.data.message)
        })
    }

    function getchartTwo () {
      //console.log("functionchatsucess")
      $http.get('/api/iot')
        .then(function success (response) {
          //console.log("waiting forloop")
          var data = {
            labels: [],
            datasets: [
            {
                label: "temperature",
                fillColor: "rgba(135,206,235,0.2)",
                strokeColor: "rgba(135,206,235,1)",
                pointColor: "rgba(135,206,235,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(135,206,235,1)",
                data: []
              },
              {
                label: "relative_humidity",
                fillColor: "rgba(255,182,193,0.2)",
                strokeColor: "rgba(255,182,193,1)",
                pointColor: "rgba(255,182,193,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(255,182,193,1)",
                data: []
              }
            ]
        };
               var ctx = document.getElementById("two").getContext("2d")

               var myLineChart = new Chart(ctx).Line(data);

               for(var i =0;i<response.data.length;i++){
                  if(response.data[i].iot_id==2){
                    console.log(response.data[i].iot_id)
                    myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,response.data[i].timestamp);
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