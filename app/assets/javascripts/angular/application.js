var app = angular.module('OerMapper',['ui.router',"oerMapperServices","oerMapperControllers","pageslide-directive"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('root', {
            url: '',
            template: '',
            controller: 'OrganizationCtrl'
        });

});