oerMapperControllers.controller("OrganizationNewCtrl", ['$state','$scope', 'organizationsResource', function($state,$scope, organizationsResource) {

//    PRIVATE VARIABLES

//    PUBLIC PROPERTIES

//    PUBLIC FUNCTIONS

    // concats the validation errors returned from Rails
    $scope.errorMessage = function(name) {
        result = [];
        $.each($scope.form[name].$error, function(message, value) {
            result.push(message);
        });
        return result.join(", ");
    };

    // add this to input controls to style when there's an error
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
        $.each(response.data, function(key,errors ) {
            $.each(errors, function(i,e) {
                var fullKey = 'organization['+key+']';
                $scope.form[fullKey].$dirty = true;
                $scope.form[fullKey].$setValidity(key+" "+e, false);
            });
        });
    };

//    INIT

}]);