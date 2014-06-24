var app = angular.module('OerMapper',['ui.router',"oerMapperServices","oerMapperControllers","pageslide-directive"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('organizations', {
            url: '/organizations?subject_area',
            template: $("#subject_stats_tmpl").jqote(),
            controller: 'OrganizationSubjectCtrl'
        })


});