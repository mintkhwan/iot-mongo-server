angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;
    
    todoList.name = 'mint'
    getiot()

    todoList.polarData = []; // create variable in array
    
    todoList.addiot = function (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          //console.log(response)
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
          	for(var i =0;i<response.data.length;i++) // loop for length array
          	{
          	// push data in todoList.polarData
          		todoList.polarData.push({
						value: response.data[i].temperature, 
						color: "#46BFBD",
        				highlight: "#5AD3D1",
						label: "temperature"
					},
					{
						value: response.data[i].relative_humidity,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "relative_humidity"
					})
          	}
          	console.log(todoList.polarData) // log
          	var ctx = document.getElementById("chart-area").getContext("2d"); // create graph
			window.myPolarArea = new Chart(ctx).PolarArea(todoList.polarData, {
				responsive:true
			});
        }, function error (response) {
          alert(response.data.message)
        })
    }

  });