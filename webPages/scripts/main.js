var app = angular.module("GheeApp", []); 

app.controller('mainController', ['$http','$scope', function($http,$scope){

	$http.get("http://192.168.0.103:8000/")
    .then(function(response) {
    		console.log(response.data);
    	});

	$scope.OrdPlacedSuccessfully = false;
	$scope.OrdPlacedFailure = false;
	$scope.placeOrder = false;
	$scope.orderQty = 1;
	$scope.pricePerKG = 500;
	$scope.language = "english";
	$scope.errMsg = "";
	$scope.OrdName = "";
	$scope.OrdEmail = "";
	$scope.OrdPhone = "";
	$scope.OrdAddress = "";
	$scope.OrdMessage = "";

	$scope.PlaceOrder = function () {
		if($scope.orderQty == ""){
			$scope.errMsg = 'Order Quantity is Mandatory!'
			return;
		}
		if(isNaN($scope.orderQty)){
			$scope.errMsg = 'Please Enter a Valid Order Quantity!';
			return;
		}
		if($scope.orderQty<1 || $scope.orderQty >5){
			$scope.errMsg = 'Ghar Ka Ghee is Limited Edition. Please Order between 1 - 5 Kg Only.';
			return;
		}
		if($scope.OrdName==""){
			$scope.errMsg = 'Please Enter Your Name!'
			return;
		};
		if($scope.OrdPhone==""){
			$scope.errMsg = 'Please Enter Your Phone Number!'
			return;
		};
		if(isNaN($scope.OrdPhone) || $scope.OrdPhone.length != 10){
			$scope.errMsg = 'Phone Number Should be 10 digit Numeric!'
			return;
		};
		if($scope.OrdAddress==""){
			$scope.errMsg = 'Delivery Address is Mandatory!'
			return;
		};
		if(confirm("Are you sure you want to proceed with this booking?")){
			$http({
		        url: 'http://localhost:8000/',
		        method: "POST",
		        data: { 'Name':$scope.OrdName, 'Phone':$scope.OrdPhone, 'Email':$scope.OrdEmail, 'Address':$scope.OrdAddress, 'Message': $scope.OrdMessage}
		    })
		    .then(function(response) {
		            // success
					$scope.OrdPlacedSuccessfully = true;
		            $scope.placeOrder = false;
					$scope.orderQty = 1;
					$scope.errMsg = "";
					$scope.OrdName = "";
					$scope.OrdEmail = "";
					$scope.OrdPhone = "";
					$scope.OrdAddress = "";
					$scope.OrdMessage = "";
					window.scrollTo(0,0);
		    }).catch(function(response) { 
		    		// failure
		    		console.log(response);
		            $scope.OrdPlacedFailure = true;
		            window.scrollTo(0,0);
		    });
		};
	}
 }]);