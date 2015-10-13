'use strict';

describe('Directive: nestedMenu', function () {

  // load the directive's module
  beforeEach(module('loWbApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nested-menu></nested-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nestedMenu directive');
  }));
});
