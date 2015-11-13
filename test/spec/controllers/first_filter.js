'use strict';

describe('Controller: FirstFilterCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var FirstFilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirstFilterCtrl = $controller('FirstFilterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FirstFilterCtrl.awesomeThings.length).toBe(3);
  });
});
