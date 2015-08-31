'use strict';

describe('Controller: FunzoneCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var FunzoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FunzoneCtrl = $controller('FunzoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FunzoneCtrl.awesomeThings.length).toBe(3);
  });
});
