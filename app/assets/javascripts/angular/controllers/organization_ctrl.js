
oerMapperControllers.controller("OrganizationCtrl", ['$scope', 'Organization', function($scope, Organization) {
    var mapper = new Mapper('map',39.2979,-76.5908,3);
    $scope.organizations = null;

    $scope.getOrgs = function() {
        $scope.organizations = Organization.query(function () {
            $scope.organizations.forEach(function (org) {
                var markerHTML = $("#marker_tmpl").jqote(org,"*");
                mapper.addMarker(org.lat, org.long).bindPopup(markerHTML);
            })
        });
    }
}]);
