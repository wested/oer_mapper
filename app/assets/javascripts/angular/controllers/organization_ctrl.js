
oerMapperControllers.controller("OrganizationCtrl", ['$state','$scope', 'organizations', function($state,$scope, organizations) {

//    PRIVATE VARIABLES
    var mapper = new Mapper('map',39.2979,-76.5908,3);

    

//    PUBLIC PROPERTIES
    $scope.currentSubject = "arts";  // default subject is arts  - used for lookup cause it's got blanks, etc. stripped out
    $scope.displaySubject = "Arts";  // used to display the subject name in original format

    $scope.searchSubject = "all";    // when we search we're dealing with all subjects
    
    $scope.organizations = organizations;
    $scope.instructionControl = {show: true};

    $scope.setSubject = function(newSubject, newDisplaySubject) {
        if (newSubject !== $scope.currentSubject) {
            $scope.searchTerms = ""; // clear out any search terms since we are now mapping by subject area
            $scope.currentSubject = newSubject;
            $scope.displaySubject = newDisplaySubject;

            setOrgsBySubject();
        }

    };
    $scope.search = function() {
        if ($scope.searchTerms == undefined) { return }
        var terms = $scope.searchTerms.toLowerCase().split(' ');

        $scope.currentSubject = $scope.searchSubject;

        // would change this to do the search on the server so it scales......
        var filteredOrg = $.grep($scope.organizations, function( org, i ) {
            for (i = 0; i < terms.length; i++) {
                if (org.name.toLowerCase().indexOf(terms[i]) > -1 || org.description.toLowerCase().indexOf(terms[i]) > -1 || (org.languages !== undefined && $.grep(org.languages, function(lang,i){ return lang.toLowerCase().indexOf(terms[i]) > -1}).length > 0) ) { return org;}


            }
        });

        setMarkers(filteredOrg);

    };


//    PRIVATE FUNCTIONS

    var setOrgsBySubject = function() {
        $scope.organizationsBySubject = $.grep($scope.organizations,
            function( org, i ) {
                if (org.subjects !== undefined && org.subjects.indexOf($scope.currentSubject) >= 0) {
                    return org;
                }
            });
        setMarkers();
    };

    var setMarkers = function(/*optional*/ orgs) {
        mapper.removeMarkers();
        var filteredOrgs = orgs === undefined ? $scope.organizationsBySubject : orgs ;

        filteredOrgs.forEach(function (org) {mapper.addMarker(org.lat, org.long,$scope.currentSubject,org)});

    };

//    INIT

    setOrgsBySubject();

}]);
