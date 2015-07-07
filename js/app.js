var angularWork = angular.module('angularWork',[]);


angularWork.controller('angularWorkCtrl',function($scope,$http) {

	$scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
	}; 
	 

    $scope.caption = "Spor Haberleri";
	 
	$http.get('http://localhost:8080/angularTest/menu.json').
        success(function (data) {
		$scope.TestMenu = data;
	}).error(function(data, status, headers, config) {
	    console.log(status+":"+data);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
	
     $scope.menuClicked = function(menu){
	   this.menu = menu;
	   $scope.caption  = menu.Caption;
	   $scope.No = menu.No;
	   $scope.paragraf = menu.Paragraf;
	}	
}).directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});




	

 