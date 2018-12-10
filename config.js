app.config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', function ($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('signUp', {
            url: '/signUp',
            templateUrl: 'views/signUp.html'
            
        })
}]);
