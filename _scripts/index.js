angular.module("fartukoff", [], function ($routeProvider, $locationProvider) {
    $routeProvider.when('/index.html', {
        templateUrl: 'home.html',
        controller: HomeCntrl
    });
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

function MainCntrl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
}

function HomeCntrl($scope, $routeParams) {
    $scope.name = "HomeCntrl";
    $scope.params = $routeParams;
    $scope.mode = {
        test: "test123"
    };
    $("#myCarousel").carousel();
    $scope.prev = function () {
        $("#myCarousel").carousel('prev');
    }
    $scope.next = function () {
        $("#myCarousel").carousel('next');
    }
}

function GaleryCntrl($scope, $routeParams) {
    $scope.name = "GaleryCntrl";
    $scope.params = $routeParams;
}

function CatalogCntrl($scope, $routeParams) {
    $scope.name = "CatalogCntrl";
    $scope.params = $routeParams;
}

function TechnologyCntrl($scope, $routeParams) {
    $scope.name = "TechologyCntrl";
    $scope.params = $routeParams;
}

function ContactsCntrl($scope, $routeParams) {
    $scope.name = "ContactsCntrl";
    $scope.params = $routeParams;
}