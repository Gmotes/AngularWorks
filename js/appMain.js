var app = angular.module('main',[]);


app.controller('mainController',function($scope,$http) {

   $scope.caption = "Namaz vakitleri";
   
    $scope.vakit = null;
    $scope.ilceId = null;
	
   	$http.get('http://namazvakitleri.ahmeti.net/index.php?islem=getSehirList&ulke_id=2').
        success(function (data) {
		$scope.sehirler = data;
	}).error(function(data, status, headers, config) {
	    console.log(status+":"+data);

    });
  
    $scope.fillIlceler = function (data) {
    $http.get('http://namazvakitleri.ahmeti.net/index.php?islem=getIlceList&sehir_id='+data).
        success(function (result) {
		$scope.ilceId = data;
		$scope.ilceler = result;
		$scope.webAdres = 'http://namazvakitleri.ahmeti.net/index.php?islem=getNamazVakitleri&ulke_id=2&sehir_id='+data;
	}).error(function(result, status, headers, config) {
	    console.log(status+":"+result); 
    });		  
    };
	

   
  
   
   
   	$scope.vakitleriGoster = function(data) {
	
	console.log($scope.webAdres+''+'&ilce_id='+data);
	
	$http.get($scope.webAdres+''+'&ilce_id='+data).
        success(function (result) {
		$scope.vakit = result;
	}).error(function(result, status, headers, config) {
	    console.log(status+":"+result); 
    });
	
	};
   
   
   
   
});
