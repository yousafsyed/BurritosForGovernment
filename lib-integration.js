angular.module('cpLibIntegration', [])
    .constant('API_BASE', 'https://api.citypantry.com')
    .service('ApiAuthService', function() {
        return function() {
            // This app is not expected to use authentication.
            return {
                userId: undefined,
                authToken: undefined
            };
        };
    });
