
oerMapperControllers.controller("OrganizationCtrl", ['$state','$scope', 'Organization', function($state,$scope, Organization) {

//    PRIVATE VARIABLES
    var mapper = new Mapper('map',39.2979,-76.5908,3);

    var searchSubject = "all";    // when we search we're dealing with all subjects

//    PUBLIC PROPERTIES
    $scope.currentSubject = "arts";  // default subject is arts  - used for lookup cause it's got blanks, etc. stripped out
    $scope.displaySubject = "Arts";  // used to display the subject name in original format

    $scope.organizations = null;
    $scope.instructionControl = {show: true};

    $scope.setSubject = function(newSubject, newDisplaySubject) {
        if (newSubject !== $scope.currentSubject) {
            $scope.searchTerms = ""; // clear out any search terms since we are now mapping by subject area
            $scope.currentSubject = newSubject;
            $scope.displaySubject = newDisplaySubject;

            getOrgsBySubject();
            setMarkers();
        }

    };
    $scope.search = function() {
        if ($scope.searchTerms == undefined) { return }
        var terms = $scope.searchTerms.toLowerCase().split(' ');

        $scope.currentSubject = searchSubject;

        // would change this to do the search on the server so it scales......
        var filteredOrg = $.grep($scope.organizations, function( org, i ) {
            for (i = 0; i < terms.length; i++) {
                if (org.name.toLowerCase().indexOf(terms[i]) > -1 || org.description.toLowerCase().indexOf(terms[i]) > -1 || $.grep(org.languages, function(lang,i){ return lang.toLowerCase().indexOf(terms[i]) > -1}).length > 0) { return org;}


            }
        });

        setMarkers(filteredOrg);

    };



//    PRIVATE FUNCTIONS
    var getOrgs = function() {
//        $scope.organizations = Organization.query(function () { setMarkers(); });
        $scope.organizations = Organization.query();
    };

    var getOrgsBySubject = function() {
        $scope.organizationsBySubject = Organization.query({subject:$scope.currentSubject},function () { setMarkers(); });
    };

    var setMarkers = function(/*optional*/ orgs) {
        mapper.removeMarkers();
        var filteredOrgs = orgs === undefined ? $scope.organizations : orgs ;
        filteredOrgs.forEach(function (org) {
            if ($scope.currentSubject === searchSubject) {
                mapper.addMarker(org.lat, org.long,$scope.currentSubject,org);
            } else { if (org.subjects.indexOf($scope.currentSubject) >= 0) { mapper.addMarker(org.lat, org.long,$scope.currentSubject,org);} }
        })
    };

//    INIT
    getOrgs();
    getOrgsBySubject();
    console.log($state.current.name)
    $state.transitionTo('organizations');

}]);
