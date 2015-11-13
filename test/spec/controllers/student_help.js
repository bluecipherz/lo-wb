'use strict';

describe('Controller: StudentHelpCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var StudentHelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentHelpCtrl = $controller('StudentHelpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentHelpCtrl.awesomeThings.length).toBe(3);
  });
});
