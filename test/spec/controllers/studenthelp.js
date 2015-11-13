'use strict';

describe('Controller: StudenthelpCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var StudenthelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudenthelpCtrl = $controller('StudenthelpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudenthelpCtrl.awesomeThings.length).toBe(3);
  });
});
