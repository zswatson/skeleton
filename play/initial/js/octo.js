(function(exports) {
  var octo = exports.octo = exports.octo || {};

  octo.octo = function(selector, params) {
    var defaults = {};

    var root = d3.select(selector),
        options = extend({}, defaults, params);
        
  }

  var extend = octo.extend = function() {
    for(var i=1; i<arguments.length; i++) {
      for(var key in arguments[i]) {
        if(arguments[i].hasOwnProperty(key)) {
          arguments[0][key] = arguments[i][key];
        }
      }
    }
    return arguments[0];
  }

})()
