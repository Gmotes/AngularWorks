var angularWork = angular.module('angularWork',["ngStorage"]);


angularWork.controller('angularWorkCtrl',function($scope,$http,$localStorage) {

    $scope.TestMenu = MenuArray;
	
	$scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
	}; 
	 

    $scope.caption = "Spor Haberleri";
	 
	$http.get('http://localhost:8080/RESTfulExample/rest/json/metallica/get').
        success(function (data) {
		$scope.jsonSinger = data.singer;
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




var MenuArray = [ {
    No : 1,
	Menu : [ {
	Caption: "Beşiktaş Haberleri",
	Path :"index.html",
	Paragraf : "Beşiktaş yönetimi üçüncü transfer bombasını geceyarısı patlattı ve Dinamo Moskova'nın Brezilyalı stoperi Douglas Teixeira ile anlaştı."
	
	} ]
   }
   , {
	No: 2,
	Menu : [ {
	Caption: "Fenerbahçe Haberleri",
	Path :"ourwork.html",
	Paragraf : "Fenerbahçe, dün akşam İstanbul'a getirdiği Luis Nani'nin imza töreniyle ilgili bir açıklama yaptı."
	} ]
  }
  ,
  {
	No: 3,
	Menu : [ {
	Caption: "Galatasaray Haberleri",
	Path :"testimonials.html",
	Paragraf : "Aurelien Chedjou, Nani'nin İstanbul'a inmesi sonrası arkadaşından gelen bir iletiyi takipçileriyle paylaştı."
	} ]
  }
  ,{
	No: 4,
	Menu : [ {
	Caption: "Projects",
	Path :"projects.html",
	Paragraf : ""
	} ]
  }
  ];
	

 