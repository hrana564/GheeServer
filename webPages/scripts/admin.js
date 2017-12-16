var app = angular.module("GheeAdminApp", []); 

app.controller('mainController', ['$http','$scope','UtilityObject', function($http,$scope,Utility){

	$scope.PageToShow="";
	$scope.username = "";
	$scope.password = "";
	$scope.accessToken = "";
	$scope.invalidUsername = false;
	$scope.invalidPassword = false;
	$scope.invalidUP = false;

	$scope.currentGheePrice = 0;

	if(1!=1){
		$scope.PageToShow = "main";
		$scope.accessToken = "abcedfghijklmnopqrstuvwxyz";
	}else{
		$scope.PageToShow = "login";
	}


$scope.ValidateAndLogin = function () {
	$scope.invalidUsername = false;
	$scope.invalidPassword = false;
	$scope.invalidUP = false;
	if($scope.username==""){
		$scope.invalidUsername = true;
		if($scope.password==""){
			$scope.invalidPassword = true;
		}
		$scope.username = "";
		$scope.password = "";
		return;
	}	
	if($scope.password==""){
		$scope.invalidPassword = true;
		$scope.username = "";
		$scope.password = "";
		return;
	}
  $http({
            url: '/Admin',
            method: "POST",
            data: { 'userName':$scope.username, 'password':$scope.password}
        })
  .then(function(response) {
            // success
            $scope.PageToShow = "main";
            $scope.accessToken = "abcedfghijklmnopqrstuvwxyz";
    $scope.loadGrid(1);
          
        }).catch(function(response) { 
            // failure
            console.log(response);
            $scope.invalidUP = true;
            $scope.username = "";
            $scope.password = "";
        });
};

$scope.GetActiveGheePrice = function()	{
	$scope.currentGheePrice = 500;
};

$scope.UpdateGheePrice = function(){
	alert('Ghee price successfully update to '+ $scope.currentGheePrice +' Rs.!');
};


  // {
  //   "Name": "Weber Livingston",
  //   "Email": "weberlivingston@olympix.com",
  //   "Phone": "+1 (965) 435-2926",
  //   "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
  //   "Message": "Vada Pav",
  //   "isDelivered": false,
  //   "Registered": "2016-08-03T06:17:55 -06:-30"
  // }

 //declaring the variable
    $scope.AngularGrid = new GheeOrder();
    $scope.BindGrid = [];
    $scope.Utility = Utility;
    $scope.PageSize = 10;
    $scope.currentPage = 1;
    $scope.PagingMessage = "";

    function Error(Message) {
        alert(Message);
    }


    // //declaring the variable for defer and promise
    // var defer = null;

    // //Initializing for defer and promise
    // function initPromises() {
    //     defer = $q.defer();
    //     var promise = defer.promise;
    //     promise.then('', Error);
    // }

    //Function to bind Angular Grid
    $scope.loadGrid = function (Index) {

    	$http({
            url: '/Admin/Order',
            method: "GET",
        })
      .then(function(response) {
                // success
                $scope.BindGrid = response.data;
                $scope.VirtualItemCount = response.data.length;
                $scope.PagingMessage = $scope.Utility.Paging(10, $scope.PageSize, Index);
                $scope.currentPage = Index;
              
            }).catch(function(response) { 
                // failure
                console.log(response);
            });

        // initPromises();
        // $http({
        //     method: "GET",
        //     url: "/Api/EmployeeApi?PageIndex=" + Index + "&PageSize=" + $scope.PageSize
        // }).success(function (data, status, header, config) {

        //     $scope.BindGrid = data;
        //     $scope.VirtualItemCount = $scope.BindGrid[0].VirtualItemCount;
        //     $scope.PagingMessage = $scope.Utility.Paging($scope.BindGrid[0].VirtualItemCount, $scope.PageSize, Index);

        //     $scope.currentPage = Index;
        // })
        // .error(function (data, status, header, config) {
        //     defer.reject("Error while getting the data");
        // });

    }

    $scope.sortBy = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    $scope.prevPage = function () {
        $scope.loadGrid($scope.Utility.prevPage($scope.currentPage));
    };

    $scope.nextPage = function () {
        $scope.loadGrid($scope.Utility.nextPage($scope.currentPage, $scope.VirtualItemCount, $scope.PageSize, 10));
    }

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

}]);
app.service("UtilityObject", Utility);