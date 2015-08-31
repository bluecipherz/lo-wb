'use strict';

describe('Controller: ExamsCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var ExamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamsCtrl = $controller('ExamsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamsCtrl.awesomeThings.length).toBe(3);
  });
});
