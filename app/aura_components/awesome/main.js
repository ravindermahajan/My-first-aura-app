define(['text!./awesome.html'], function(template) {
  return {
    initialize: function() {
     this.render();
    },
     render:function(){
         this.$el.html(template);
     }
  };
});
