define(['backbone','cache','underscore'],function(backbone,cache,_){
  var z= {
    youc:function(){
      console.log(backbone);
      var abc = cache.add(2,3);
      console.log(abc);
      console.log(_);
    }
  }

  return z
})