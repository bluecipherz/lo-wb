'use strict';

describe('Controller: SaveAndCompareCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var SaveAndCompareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaveAndCompareCtrl = $controller('SaveAndCompareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SaveAndCompareCtrl.awesomeThings.length).toBe(3);
  });
});
