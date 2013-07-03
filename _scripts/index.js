angular.module("fartukoff", ['ui.bootstrap.dialog'], function ($routeProvider, $locationProvider, $dialogProvider) {
    $routeProvider.when('/galery', {
        templateUrl: 'galery.html',
        controller: GaleryCntrl
    });
    $routeProvider.when('/catalog', {
        templateUrl: 'catalog.html',
        controller: CatalogCntrl
    });
    $routeProvider.when('/technology', {
        templateUrl: 'technology.html',
        controller: TechnologyCntrl
    });
    $routeProvider.when('/contacts', {
        templateUrl: 'contacts.html',
        controller: ContactsCntrl
    });
    $routeProvider.when('/index.html', {
        templateUrl: 'home.html',
        controller: HomeCntrl
    });
    $routeProvider.when('/index', {
        templateUrl: 'home.html',
        controller: HomeCntrl
    });
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: HomeCntrl
    });
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

function MainCntrl($scope, $route, $routeParams, $location, $http) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.test = function () {
        alert(GetFakeData($http,$scope));
        //$http({ method: 'GET', url: 'http://freegeoip.net/rest/fartuk54.ru' }).
        //  success(function (data, status, headers, config) {
        //      //$scope.orders = data;
        //      alert(data);
        //  }).
        //  error(function (data, status, headers, config) {
        //      alert(status);
        //      alert(data);
        //  });
    }
}

function HomeCntrl($scope, $routeParams, $location) {
    $scope.name = "HomeCntrl";
    $scope.params = $routeParams;
    if ($location.$$search["catalog"]) $location.url("/catalog");
    if ($location.$$search["contacts"]) $location.url("/contacts");
    if ($location.$$search["galery"]) $location.url("/galery");
    if ($location.$$search["technology"]) $location.url("/technology");

    $("#myCarousel").carousel();
    $scope.prev = function () {
        $("#myCarousel").carousel('prev');
    }
    $scope.next = function () {
        $("#myCarousel").carousel('next');
    }
}

function GaleryCntrl($scope, $routeParams, $dialog) {
    $scope.name = "GaleryCntrl";
    $scope.params = $routeParams;
    $scope.model = {
        showGaleryOpts: {
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl: '_views/showbox.html',
            controller: 'ShowGaleryController'
        }
    };

    $scope.showCatalog = function (src, cnt, offset) {
        var currentitem = function () {
            return { count: cnt, src: src, offset: offset };
        };
        $dialog.dialog(
            angular.extend($scope.model.showGaleryOpts,
            { resolve: { item: angular.copy(currentitem) } }))
          .open()
          .then(function (result) {
              if (result) {
                  angular.copy(result, currentitem);
                  alert(result.name)
              }
              currentitem = undefined;
          });
    };
}

function CatalogCntrl($scope, $routeParams, $dialog) {
    $scope.name = "CatalogCntrl";
    $scope.params = $routeParams;
    $scope.model = {
        showCatalogOpts: {
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl: '_views/showbox.html',
            controller: 'ShowCatalogController'
        }
    };

    $scope.showCatalog = function (src,cnt,offset) {
        var currentitem = function () {
            return { count: cnt, src: src, offset: offset };
        };
        $dialog.dialog(
            angular.extend($scope.model.showCatalogOpts,
            { resolve: { item: angular.copy(currentitem) } }))
          .open()
          .then(function (result) {
              if (result) {
                  angular.copy(result, currentitem);
                  alert(result.name)
              }
              currentitem = undefined;
          });
    };
}

function ShowGaleryController($scope, $http, item, dialog) {
    var items = [];
    for (var i = 1; i <= item.count; i++) {
        var indx = item.offset + i;
        var index = (indx > 99 ? "" + indx : (indx > 9 ? "0" + indx : "00" + indx));
        items.push(
            {
                src: "../content/galery/" + item.src + "/" + index + ".png",
                index: index
            });
    }
    
    $scope.model = {
        item: item,
        images: items,
        src: item.src,
        isShowIndex: false
    };

    $scope.save = function () {
        var item = $scope.model;
    };

    $scope.close = function () {
        dialog.close(undefined);
    };

    $("#showBoxCarousel").carousel();
    $scope.prev = function () {
        $("#showBoxCarousel").carousel('prev');
    }
    $scope.next = function () {
        $("#showBoxCarousel").carousel('next');
    }
}

function ShowCatalogController($scope, $http, item, dialog) {
    var items = [];
    for (var i = 1; i <= item.count; i++) {
        var indx = item.offset + i;
        var index = (indx > 99 ? "" + indx : (indx > 9 ? "0" + indx : "00" + indx));
        items.push(
            {
                src: "../content/catalog/" + item.src + "/" + index + ".jpg",
                index: index
            });
    }

    $scope.model = {
        item: item,
        images: items,
        src: item.src,
        isShowIndex:true
    };

    $scope.save = function () {
        var item = $scope.model;
    };

    $scope.close = function () {
        dialog.close(undefined);
    };

    $("#showBoxCarousel").carousel();
    $scope.prev = function () {
        $("#showBoxCarousel").carousel('prev');
    }
    $scope.next = function () {
        $("#showBoxCarousel").carousel('next');
    }
}

function TechnologyCntrl($scope, $routeParams) {
    $scope.name = "TechologyCntrl";
    $scope.params = $routeParams;
}

function ContactsCntrl($scope, $routeParams) {
    $scope.name = "ContactsCntrl";
    $scope.params = $routeParams;
}