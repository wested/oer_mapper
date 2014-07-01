var app = angular.module('OerMapper',['ui.router',"oerMapperServices","oerMapperControllers","pageslide-directive"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/organizations/map');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('organizations', {
            abstract: true,
            url: '/',
            templateUrl: 'templates/organizations-index',
            resolve: {
                // A string value resolves to a service
                organizationsResource: 'organizationsResource',

                // A function value resolves to the return
                // value of the function
                organizations: function(organizationsResource) {
                    return organizationsResource.query().$promise;
                }
            },
            controller: 'RootCtrl'
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
        .state('organizations.edit', {
            url: 'organizations/edit/:id',
            templateUrl: 'templates/organizations-edit',
            controller: 'OrganizationEditCtrl'
        })
});