'use strict';

describe('Controller: CourseDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var CourseDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseDetailsCtrl = $controller('CourseDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourseDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
