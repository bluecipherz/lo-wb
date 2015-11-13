'use strict';

describe('Controller: SearchFoundCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var SearchFoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchFoundCtrl = $controller('SearchFoundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchFoundCtrl.awesomeThings.length).toBe(3);
  });
});
