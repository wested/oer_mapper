oerMapperControllers.controller("OrganizationNewCtrl", ['$state','$scope', 'organizationsResource', function($state,$scope, Organization) {

//    PRIVATE VARIABLES

//    PUBLIC PROPERTIES

    $scope.errorMessage = function(name) {
        result = [];
        _.each($scope.form[name].$error, function(key, value) {
            result.push(value);
        });
        return result.join(", ");
    };

    $scope.errorClass = function(name) {
        var s = $scope.form[name];
        return s.$invalid && s.$dirty ? "error" : "";
    };

    $scope.save = function() {
        organizationsResource.create($scope.organization, success, failure);
    };
    $scope.cancel = function() {
        success();
    };

//    PRIVATE FUNCTIONS

    var success = function() {
        $state.go('organizations.map');
    };

    var failure = function(response) {
        _.each(response.data, function(errors, key) {
            _.each(errors, function(e) {
                $scope.form[key].$dirty = true;
                $scope.form[key].$setValidity(e, false);
            });
        });
    };

//    INIT
    console.log($state.current.name)
}]);