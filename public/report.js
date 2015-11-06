angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {

    var todoList = this;

    getChart0()
    getChart1()
    getChart2()
    getChart3()
    getChart4()
    getChart5()
    getChart6()
    getChart7()
    getChart8()
    getChart9()

      function getChart0() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==0){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart0").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

      function getChart1() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){
              if (response.data[i].iot_id==1){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart1").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            console.log('co : '+averagetemp)

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  

          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart2() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==2){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart2").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }


    function getChart3() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==3){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart3").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart4() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==4){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart4").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }


    function getChart5() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==5){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart5").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart6() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==6){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart6").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart7() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==7){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart7").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart8() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==8){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart8").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }

    function getChart9() { 
        $http.get('/api/iot')
          .then(function success (response) {
         
            var data = []

            var temp = 0
            var relative = 0
            var count = 1
              
            for(var i =0;i<response.data.length;i++){

              if (response.data[i].iot_id==9){
                  count++
                  temp  += response.data[i].temperature
                  console.log('response.data[i].temperature : '+response.data[i].temperature)
                  relative = relative + response.data[i].relative_humidity
              }
                   
            }

            var ctx = document.getElementById("Chart9").getContext("2d")
            var myPieChart = new Chart(ctx).Pie(data[0]);
             
            var averagetemp = temp / count
            var averagerela = relative / count

            myPieChart.addData({
              value: averagetemp,
              color: "#FF9999",
              highlight: "#FF9999",
              label: "temperature"
            });

            myPieChart.addData({
              value: averagerela,
              color: "#33CCFF",
              highlight: "#33CCFF",
              label: "relative_humidity"
            })     
                  
          }, function error (response) {
              alert(response.data.message)
          })
    }


  })