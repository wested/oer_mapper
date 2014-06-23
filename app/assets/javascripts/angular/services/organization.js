oerMapperServices.factory('Organization', ['$resource',
    function($resource) {
        return $resource('/organizations/:id.json', {id: "@id"}, {update: {method: "PUT", params: {id: '@id'}}});
    }
]);
