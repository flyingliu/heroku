define(function(require,exports,module){
  var $ = require('jquery');
  var Doit = require('./seamoda');
  var ma = new Doit('flying');
  ma.say();
  Doit.doing();
  console.log(module.uri);
});