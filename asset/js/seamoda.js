define(function(require, exports, module) {

  var Moda = function(name) {
    this.name = name;
    this.say = function(){
      console.log('this is ' + this.name);
    }
  }

  module.exports = Moda;

  // exports是对module.exports的一个引用，exports一般是用来暴露一些属性和方法，比如 exports.myName = 'flying',或者exports.doing = function(){};
  // 当需要暴露整个对象时，文档说是应该使用 module.exports = {myName = 'flying',doing:function(){}},这样的，而不是exports = {myName = 'flying',doing:function(){}}

  module.exports.doing = function(){
    console.log(1);
  }
  module.exports.named = "abc";
});