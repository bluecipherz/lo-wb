'use strict';

/**
 * @ngdoc service
 * @name loWbApp.nestedSet
 * @description
 * # nestedSet
 * Factory in the loWbApp.
 */
angular.module('loWbApp')
  .factory('nestedSet', function ($resource) {
    // Service logic
    // ...

    var callbacks = [];

    var courseList = [];

    $resource('data/courses-nested.json').query().$promise.then(function(results) {
        courseList = results;
        notifyObservers();
    });

    function notifyObservers() {
      angular.forEach(callbacks, function(callback) {
        callback();
      });
    }

    var _find = function(id, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].id == id) return array[i];
        if(array[i].children.length > 0) {
          var a = _find(id, array[i].children);
          if(a != null) return a;
        }
      }
      return null;
    }

    var _descendant = function(parent, target, array) {
      var link = false
      for(var i=0;i<array.length;i++) {
        if(parent.id === target.parent_id) link = true;
        else link = _descendant(array[i], target, array[i].children);
        if(link === true) return link;
      }
      return link;
    }

    var _ancestor = function(ancestor, descendant) {
      var isAncestor = false;
      if(ancestor.id === descendant.parent_id) {
        isAncestor = true;
      } else {
        if(descendant.depth > 1) {
          isAncestor = _ancestor(ancestor, _find(descendant.parent_id, courseList));
        }
      }
      return isAncestor;
    }

    var pivot;

    // Public API here
    return {
      find: function (id) {
        pivot = _find(id, courseList);
        return this;
      },
      isParent: function(id) {
        var child = _find(id, courseList);
        return child.parent_id === pivot.id;
      },
      isDescendant: function(id) {
        return _descendant(_find(id, courseList), pivot, courseList);
      },
      isAncestor: function(id) {
        return _ancestor(pivot, _find(id, courseList));
      },
      getPath: function(id) {
        var patharr = [pivot.id];
        var curnode = pivot;
        for(var i=pivot.depth;i>0;i--) {
          patharr.push(curnode.parent_id)
          curnode = _find(curnode.parent_id, courseList);
        }
        return patharr;
      },
      get: function() {
        return pivot;
      },
      getNestedSet: function() {
        return courseList;
      },
      onFetch: function(callback) {
        callbacks.push(callback);
      }
    };
  });
