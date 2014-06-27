var oerMapperServices = angular.module('oerMapperServices', ['ngResource']);
oerMapperServices.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content');
});