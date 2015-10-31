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
          chart = response.data
          console.log(chart[0].iot_id)
          var polarData = [
					{
						value: chart[0].temperature,
						color: "#46BFBD",
        				highlight: "#5AD3D1",
						label: "temperature"
					},
					{
						value: chart[0].relative_humidity,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "relative_humidity"
					}
				];

				window.onload = function(){
					var ctx = document.getElementById("chart-area").getContext("2d");
					window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
						responsive:true
					});
				};
          /*console.log(response)*/
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