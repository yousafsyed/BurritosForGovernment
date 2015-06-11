angular.module('jsCodingTest', ["cpLib"]);
angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function($scope, $http, PackagesFactory,Utest) {
    $scope.response = ""
    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
    PackagesFactory.searchPackages('Burritos', 'SW1A 0AA').success(function(data) {
        $scope.response = data;
        Utest.run(data);
    });
});
angular.module('jsCodingTest').service('Utest', function() {
    return {
        run: function(data) {
           console.log(data);
            QUnit.test('Data is object', function(assert) {
                assert.ok(typeof data == "object", "Passed!");
            });
            QUnit.test('Burritos Found', function(assert) {
                assert.ok(data.packages.length > 0, "Passed!");
            });
            QUnit.test('Vendors Found', function(assert) {
                assert.ok(data.packages.vendors != null, "Passed!");
            });
        }
    }
})

