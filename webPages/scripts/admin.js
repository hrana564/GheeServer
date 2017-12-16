var app = angular.module("GheeAdminApp", []); 

app.controller('mainController', ['$http','$scope','UtilityObject', function($http,$scope,Utility){

	$scope.PageToShow="";
	$scope.username = "";
	$scope.password = "";
	$scope.accessToken = "";
	$scope.invalidUsername = false;
	$scope.invalidPassword = false;
	$scope.invalidUP = false;

	$scope.deliveredOrders = [];
	$scope.unDeliveredOrders = [];

	$scope.currentGheePrice = 0;

	if(1==1){
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
	if($scope.username!="a" || $scope.password!="a"){
		$scope.invalidUP = true;
		$scope.username = "";
		$scope.password = "";
		return;
	}
	$scope.PageToShow = "main";
	$scope.accessToken = "abcedfghijklmnopqrstuvwxyz";
};

$scope.GetActiveGheePrice = function()	{
	$scope.currentGheePrice = 500;
};

$scope.UpdateGheePrice = function(){
	alert('Ghee price successfully update to '+ $scope.currentGheePrice +' Rs.!');
};

$scope.UpdateDeliveredOrders = function () {
	$scope.deliveredOrders = [
  {
    "Name": "Nancy Sloan",
    "Email": "nancysloan@olympix.com",
    "Phone": "+1 (820) 585-3418",
    "Address": "481 Bayview Place, Juntura, Tennessee, 6124",
    "Message": "Esse ex proident ullamco fugiat enim. Tempor anim consectetur cupidatat pariatur eiusmod veniam incididunt adipisicing deserunt aute ad. Ex irure adipisicing amet commodo non nulla adipisicing. Aliqua id eu anim ex labore qui adipisicing laboris nulla cillum. In et incididunt nulla consectetur anim minim do ea. Et proident duis consectetur voluptate.\r\n",
    "isDelivered": true,
    "Registered": "2015-03-13T02:50:02 -06:-30"
  },
  {
    "Name": "Brooks Barlow",
    "Email": "brooksbarlow@olympix.com",
    "Phone": "+1 (955) 436-2441",
    "Address": "533 Colonial Road, Sperryville, North Carolina, 200",
    "Message": "Adipisicing Lorem cillum magna exercitation ullamco in culpa proident. Elit sunt eu velit officia sunt ut. Reprehenderit nisi magna Lorem officia ea ex. Duis non sint incididunt labore sunt nostrud non ad minim do occaecat magna. Aliqua enim ullamco nisi aliquip. Cupidatat dolor duis id nisi commodo consequat Lorem elit. Id ullamco anim aute voluptate non nostrud veniam est ad dolore cillum eiusmod eu magna.\r\n",
    "isDelivered": true,
    "Registered": "2015-05-22T04:18:17 -06:-30"
  },
  {
    "Name": "Fernandez Washington",
    "Email": "fernandezwashington@olympix.com",
    "Phone": "+1 (919) 550-2433",
    "Address": "962 Main Street, Smeltertown, Florida, 5872",
    "Message": "Ex commodo do consequat exercitation et dolor. Exercitation commodo irure ad mollit aute ex mollit sit. Laboris Lorem Lorem amet aute irure nulla. Mollit ea dolore veniam labore tempor est duis dolore Lorem minim mollit sint proident. Non sunt sint nisi labore nostrud cillum.\r\n",
    "isDelivered": true,
    "Registered": "2014-09-26T03:59:26 -06:-30"
  },
  {
    "Name": "Cheryl Molina",
    "Email": "cherylmolina@olympix.com",
    "Phone": "+1 (820) 466-3513",
    "Address": "565 Hart Street, Taft, Alabama, 7811",
    "Message": "Culpa eu pariatur commodo velit occaecat ad ad ut et et incididunt. Eu excepteur cillum sint ex id fugiat cillum pariatur ex id ipsum incididunt laborum consequat. Ad est pariatur ullamco excepteur nulla cillum nulla. Ullamco id et fugiat incididunt esse deserunt consequat id. Eu et ex commodo sint enim eu do aute tempor mollit irure non.\r\n",
    "isDelivered": true,
    "Registered": "2017-01-12T12:30:35 -06:-30"
  },
  {
    "Name": "Fowler Walls",
    "Email": "fowlerwalls@olympix.com",
    "Phone": "+1 (804) 516-3931",
    "Address": "474 Livonia Avenue, Harmon, New York, 9975",
    "Message": "Occaecat magna quis sit irure amet nulla incididunt commodo duis duis. In occaecat ex deserunt laborum sunt Lorem cupidatat nostrud aute cillum sit aliquip minim duis. Consectetur minim eu exercitation incididunt aliqua est veniam ut deserunt eu nostrud pariatur. Irure adipisicing qui exercitation et.\r\n",
    "isDelivered": true,
    "Registered": "2015-06-06T11:50:49 -06:-30"
  },
  {
    "Name": "Vivian House",
    "Email": "vivianhouse@olympix.com",
    "Phone": "+1 (948) 429-3045",
    "Address": "369 Lake Place, Gorham, Rhode Island, 3718",
    "Message": "Voluptate ad proident ea voluptate. Dolor velit proident ipsum magna non tempor eu. Incididunt amet et Lorem esse proident. Mollit laborum esse magna reprehenderit proident magna mollit labore sit laboris pariatur ut. Nisi officia anim labore deserunt.\r\n",
    "isDelivered": true,
    "Registered": "2017-06-27T02:12:27 -06:-30"
  },
  {
    "Name": "Salinas Bishop",
    "Email": "salinasbishop@olympix.com",
    "Phone": "+1 (980) 520-3383",
    "Address": "964 Strong Place, Crown, South Carolina, 9528",
    "Message": "Incididunt culpa velit anim veniam consequat exercitation irure. Nulla consectetur tempor nisi labore magna id veniam est non consectetur eu quis dolore. Reprehenderit ex enim ut sint exercitation officia nisi irure qui incididunt excepteur amet excepteur. Duis sint qui quis nostrud exercitation et nulla Lorem in enim elit non ad.\r\n",
    "isDelivered": true,
    "Registered": "2015-03-02T09:31:22 -06:-30"
  },
  {
    "Name": "Sharlene Gibson",
    "Email": "sharlenegibson@olympix.com",
    "Phone": "+1 (935) 446-2560",
    "Address": "651 Kay Court, Aberdeen, Indiana, 7725",
    "Message": "Sunt veniam labore et sit voluptate ex laboris sit consequat ut esse amet eu duis. Aliquip nisi laboris amet non fugiat dolor eiusmod id eiusmod sunt commodo. Irure mollit deserunt proident eu consectetur pariatur consectetur. Eu fugiat officia culpa sit. Quis irure eiusmod ullamco aute cillum.\r\n",
    "isDelivered": true,
    "Registered": "2017-05-01T12:55:13 -06:-30"
  }
];
};

$scope.UpdateUnDeliveredOrders = function () {
	$scope.unDeliveredOrders = [
  {
    "Name": "Weber Livingston",
    "Email": "weberlivingston@olympix.com",
    "Phone": "+1 (965) 435-2926",
    "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
    "Message": "Vada Pav",
    "isDelivered": false,
    "Registered": "2016-08-03T06:17:55 -06:-30"
  },
  {
    "Name": "Bridgett Potter",
    "Email": "bridgettpotter@olympix.com",
    "Phone": "+1 (801) 437-2049",
    "Address": "209 Commercial Street, Calverton, Arkansas, 3404",
    "Message": "RajaRaa",
    "isDelivered": false,
    "Registered": "2016-11-12T12:08:28 -06:-30"
  },
  {
    "Name": "Betty Forbes",
    "Email": "bettyforbes@olympix.com",
    "Phone": "+1 (823) 422-3328",
    "Address": "784 Creamer Street, Gardners, Tennessee, 8357",
    "Message": "Wahh Wahh",
    "isDelivered": false,
    "Registered": "2016-07-20T02:31:43 -06:-30"
  },
  {
    "Name": "Bethany Wise",
    "Email": "bethanywise@olympix.com",
    "Phone": "+1 (804) 453-2505",
    "Address": "718 Herkimer Street, Brady, Wyoming, 2721",
    "Message": "Golluuu",
    "isDelivered": false,
    "Registered": "2014-12-23T03:57:48 -06:-30"
  },
  {
    "Name": "Whitehead Suarez",
    "Email": "whiteheadsuarez@olympix.com",
    "Phone": "+1 (891) 526-2216",
    "Address": "579 Fenimore Street, Masthope, New Mexico, 1023",
    "Message": "Test",
    "isDelivered": false,
    "Registered": "2014-07-26T10:16:39 -06:-30"
  },
  {
    "Name": "Mona Melendez",
    "Email": "monamelendez@olympix.com",
    "Phone": "+1 (834) 458-3827",
    "Address": "608 Caton Place, Temperanceville, Utah, 6019",
    "Message": "Low Fat",
    "isDelivered": false,
    "Registered": "2015-05-07T02:46:47 -06:-30"
  },
  {
    "Name": "Wheeler Whitaker",
    "Email": "wheelerwhitaker@olympix.com",
    "Phone": "+1 (990) 528-3178",
    "Address": "727 Calder Place, Cavalero, Oklahoma, 9456",
    "Message": "Make it sweet",
    "isDelivered": false,
    "Registered": "2016-08-12T01:49:17 -06:-30"
  },
  {
    "Name": "Dena Cunningham",
    "Email": "denacunningham@olympix.com",
    "Phone": "+1 (872) 491-3168",
    "Address": "313 Ebony Court, Hiko, Iowa, 8350",
    "Message": "make it spicy",
    "isDelivered": false,
    "Registered": "2017-09-09T02:22:35 -06:-30"
  },
  {
    "Name": "Weber Livingston",
    "Email": "weberlivingston@olympix.com",
    "Phone": "+1 (965) 435-2926",
    "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
    "Message": "Vada Pav",
    "isDelivered": false,
    "Registered": "2016-08-03T06:17:55 -06:-30"
  },
  {
    "Name": "Bridgett Potter",
    "Email": "bridgettpotter@olympix.com",
    "Phone": "+1 (801) 437-2049",
    "Address": "209 Commercial Street, Calverton, Arkansas, 3404",
    "Message": "RajaRaa",
    "isDelivered": false,
    "Registered": "2016-11-12T12:08:28 -06:-30"
  },
  {
    "Name": "Betty Forbes",
    "Email": "bettyforbes@olympix.com",
    "Phone": "+1 (823) 422-3328",
    "Address": "784 Creamer Street, Gardners, Tennessee, 8357",
    "Message": "Wahh Wahh",
    "isDelivered": false,
    "Registered": "2016-07-20T02:31:43 -06:-30"
  },
  {
    "Name": "Bethany Wise",
    "Email": "bethanywise@olympix.com",
    "Phone": "+1 (804) 453-2505",
    "Address": "718 Herkimer Street, Brady, Wyoming, 2721",
    "Message": "Golluuu",
    "isDelivered": false,
    "Registered": "2014-12-23T03:57:48 -06:-30"
  },
  {
    "Name": "Whitehead Suarez",
    "Email": "whiteheadsuarez@olympix.com",
    "Phone": "+1 (891) 526-2216",
    "Address": "579 Fenimore Street, Masthope, New Mexico, 1023",
    "Message": "Test",
    "isDelivered": false,
    "Registered": "2014-07-26T10:16:39 -06:-30"
  },
  {
    "Name": "Mona Melendez",
    "Email": "monamelendez@olympix.com",
    "Phone": "+1 (834) 458-3827",
    "Address": "608 Caton Place, Temperanceville, Utah, 6019",
    "Message": "Low Fat",
    "isDelivered": false,
    "Registered": "2015-05-07T02:46:47 -06:-30"
  },
  {
    "Name": "Wheeler Whitaker",
    "Email": "wheelerwhitaker@olympix.com",
    "Phone": "+1 (990) 528-3178",
    "Address": "727 Calder Place, Cavalero, Oklahoma, 9456",
    "Message": "Make it sweet",
    "isDelivered": false,
    "Registered": "2016-08-12T01:49:17 -06:-30"
  },
  {
    "Name": "Dena Cunningham",
    "Email": "denacunningham@olympix.com",
    "Phone": "+1 (872) 491-3168",
    "Address": "313 Ebony Court, Hiko, Iowa, 8350",
    "Message": "make it spicy",
    "isDelivered": false,
    "Registered": "2017-09-09T02:22:35 -06:-30"
  },
  {
    "Name": "Weber Livingston",
    "Email": "weberlivingston@olympix.com",
    "Phone": "+1 (965) 435-2926",
    "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
    "Message": "Vada Pav",
    "isDelivered": false,
    "Registered": "2016-08-03T06:17:55 -06:-30"
  },
  {
    "Name": "Bridgett Potter",
    "Email": "bridgettpotter@olympix.com",
    "Phone": "+1 (801) 437-2049",
    "Address": "209 Commercial Street, Calverton, Arkansas, 3404",
    "Message": "RajaRaa",
    "isDelivered": false,
    "Registered": "2016-11-12T12:08:28 -06:-30"
  },
  {
    "Name": "Betty Forbes",
    "Email": "bettyforbes@olympix.com",
    "Phone": "+1 (823) 422-3328",
    "Address": "784 Creamer Street, Gardners, Tennessee, 8357",
    "Message": "Wahh Wahh",
    "isDelivered": false,
    "Registered": "2016-07-20T02:31:43 -06:-30"
  },
  {
    "Name": "Bethany Wise",
    "Email": "bethanywise@olympix.com",
    "Phone": "+1 (804) 453-2505",
    "Address": "718 Herkimer Street, Brady, Wyoming, 2721",
    "Message": "Golluuu",
    "isDelivered": false,
    "Registered": "2014-12-23T03:57:48 -06:-30"
  },
  {
    "Name": "Whitehead Suarez",
    "Email": "whiteheadsuarez@olympix.com",
    "Phone": "+1 (891) 526-2216",
    "Address": "579 Fenimore Street, Masthope, New Mexico, 1023",
    "Message": "Test",
    "isDelivered": false,
    "Registered": "2014-07-26T10:16:39 -06:-30"
  },
  {
    "Name": "Mona Melendez",
    "Email": "monamelendez@olympix.com",
    "Phone": "+1 (834) 458-3827",
    "Address": "608 Caton Place, Temperanceville, Utah, 6019",
    "Message": "Low Fat",
    "isDelivered": false,
    "Registered": "2015-05-07T02:46:47 -06:-30"
  },
  {
    "Name": "Wheeler Whitaker",
    "Email": "wheelerwhitaker@olympix.com",
    "Phone": "+1 (990) 528-3178",
    "Address": "727 Calder Place, Cavalero, Oklahoma, 9456",
    "Message": "Make it sweet",
    "isDelivered": false,
    "Registered": "2016-08-12T01:49:17 -06:-30"
  },
  {
    "Name": "Dena Cunningham",
    "Email": "denacunningham@olympix.com",
    "Phone": "+1 (872) 491-3168",
    "Address": "313 Ebony Court, Hiko, Iowa, 8350",
    "Message": "make it spicy",
    "isDelivered": false,
    "Registered": "2017-09-09T02:22:35 -06:-30"
  },
  {
    "Name": "Weber Livingston",
    "Email": "weberlivingston@olympix.com",
    "Phone": "+1 (965) 435-2926",
    "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
    "Message": "Vada Pav",
    "isDelivered": false,
    "Registered": "2016-08-03T06:17:55 -06:-30"
  },
  {
    "Name": "Bridgett Potter",
    "Email": "bridgettpotter@olympix.com",
    "Phone": "+1 (801) 437-2049",
    "Address": "209 Commercial Street, Calverton, Arkansas, 3404",
    "Message": "RajaRaa",
    "isDelivered": false,
    "Registered": "2016-11-12T12:08:28 -06:-30"
  },
  {
    "Name": "Betty Forbes",
    "Email": "bettyforbes@olympix.com",
    "Phone": "+1 (823) 422-3328",
    "Address": "784 Creamer Street, Gardners, Tennessee, 8357",
    "Message": "Wahh Wahh",
    "isDelivered": false,
    "Registered": "2016-07-20T02:31:43 -06:-30"
  },
  {
    "Name": "Bethany Wise",
    "Email": "bethanywise@olympix.com",
    "Phone": "+1 (804) 453-2505",
    "Address": "718 Herkimer Street, Brady, Wyoming, 2721",
    "Message": "Golluuu",
    "isDelivered": false,
    "Registered": "2014-12-23T03:57:48 -06:-30"
  },
  {
    "Name": "Whitehead Suarez",
    "Email": "whiteheadsuarez@olympix.com",
    "Phone": "+1 (891) 526-2216",
    "Address": "579 Fenimore Street, Masthope, New Mexico, 1023",
    "Message": "Test",
    "isDelivered": false,
    "Registered": "2014-07-26T10:16:39 -06:-30"
  },
  {
    "Name": "Mona Melendez",
    "Email": "monamelendez@olympix.com",
    "Phone": "+1 (834) 458-3827",
    "Address": "608 Caton Place, Temperanceville, Utah, 6019",
    "Message": "Low Fat",
    "isDelivered": false,
    "Registered": "2015-05-07T02:46:47 -06:-30"
  },
  {
    "Name": "Wheeler Whitaker",
    "Email": "wheelerwhitaker@olympix.com",
    "Phone": "+1 (990) 528-3178",
    "Address": "727 Calder Place, Cavalero, Oklahoma, 9456",
    "Message": "Make it sweet",
    "isDelivered": false,
    "Registered": "2016-08-12T01:49:17 -06:-30"
  },
  {
    "Name": "Dena Cunningham",
    "Email": "denacunningham@olympix.com",
    "Phone": "+1 (872) 491-3168",
    "Address": "313 Ebony Court, Hiko, Iowa, 8350",
    "Message": "make it spicy",
    "isDelivered": false,
    "Registered": "2017-09-09T02:22:35 -06:-30"
  },
  {
    "Name": "Weber Livingston",
    "Email": "weberlivingston@olympix.com",
    "Phone": "+1 (965) 435-2926",
    "Address": "116 Bayview Avenue, Topanga, Wisconsin, 1159",
    "Message": "Vada Pav",
    "isDelivered": false,
    "Registered": "2016-08-03T06:17:55 -06:-30"
  },
  {
    "Name": "Bridgett Potter",
    "Email": "bridgettpotter@olympix.com",
    "Phone": "+1 (801) 437-2049",
    "Address": "209 Commercial Street, Calverton, Arkansas, 3404",
    "Message": "RajaRaa",
    "isDelivered": false,
    "Registered": "2016-11-12T12:08:28 -06:-30"
  },
  {
    "Name": "Betty Forbes",
    "Email": "bettyforbes@olympix.com",
    "Phone": "+1 (823) 422-3328",
    "Address": "784 Creamer Street, Gardners, Tennessee, 8357",
    "Message": "Wahh Wahh",
    "isDelivered": false,
    "Registered": "2016-07-20T02:31:43 -06:-30"
  },
  {
    "Name": "Bethany Wise",
    "Email": "bethanywise@olympix.com",
    "Phone": "+1 (804) 453-2505",
    "Address": "718 Herkimer Street, Brady, Wyoming, 2721",
    "Message": "Golluuu",
    "isDelivered": false,
    "Registered": "2014-12-23T03:57:48 -06:-30"
  },
  {
    "Name": "Whitehead Suarez",
    "Email": "whiteheadsuarez@olympix.com",
    "Phone": "+1 (891) 526-2216",
    "Address": "579 Fenimore Street, Masthope, New Mexico, 1023",
    "Message": "Test",
    "isDelivered": false,
    "Registered": "2014-07-26T10:16:39 -06:-30"
  },
  {
    "Name": "Mona Melendez",
    "Email": "monamelendez@olympix.com",
    "Phone": "+1 (834) 458-3827",
    "Address": "608 Caton Place, Temperanceville, Utah, 6019",
    "Message": "Low Fat",
    "isDelivered": false,
    "Registered": "2015-05-07T02:46:47 -06:-30"
  },
  {
    "Name": "Wheeler Whitaker",
    "Email": "wheelerwhitaker@olympix.com",
    "Phone": "+1 (990) 528-3178",
    "Address": "727 Calder Place, Cavalero, Oklahoma, 9456",
    "Message": "Make it sweet",
    "isDelivered": false,
    "Registered": "2016-08-12T01:49:17 -06:-30"
  },
  {
    "Name": "Dena Cunningham",
    "Email": "denacunningham@olympix.com",
    "Phone": "+1 (872) 491-3168",
    "Address": "313 Ebony Court, Hiko, Iowa, 8350",
    "Message": "make it spicy",
    "isDelivered": false,
    "Registered": "2017-09-09T02:22:35 -06:-30"
  }
];
}

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

    	$scope.UpdateUnDeliveredOrders();
    	$scope.BindGrid = $scope.unDeliveredOrders;
    	$scope.VirtualItemCount = $scope.unDeliveredOrders.length;
    	$scope.PagingMessage = $scope.Utility.Paging(40, $scope.PageSize, Index);
    	$scope.currentPage = Index;

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

    $scope.loadGrid(1);

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