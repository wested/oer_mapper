var app = angular.module('OerMapper',['ui.router',"oerMapperServices","oerMapperControllers","pageslide-directive"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('organizations', {
            abstract: true,
            url: '/',
            templateUrl: 'templates/organizations-index'
        })
        .state('organizations.map', {
            url: 'organizations/map',
            templateUrl: 'templates/organizations-map',
            controller: 'OrganizationCtrl'
        })
        .state('organizations.new', {
            url: 'organizations/new',
            templateUrl: 'templates/organizations-new',
            controller: 'OrganizationNewCtrl'
        })

});