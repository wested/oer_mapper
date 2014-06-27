oerMapperServices.factory('organizationsResource', ['$resource',
    function($resource) {
        return $resource("/organizations.json", { id: "@id" },
            {
                'create':  { method: 'POST' },
                'index':   { method: 'GET', isArray: true },
                'show':    { method: 'GET', isArray: false },
                'update':  { method: 'PUT' },
                'destroy': { method: 'DELETE' }
            }
        );
    }
]);
