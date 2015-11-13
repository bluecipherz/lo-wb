'use strict';

describe('Controller: ExamDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var ExamDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamDetailsCtrl = $controller('ExamDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
