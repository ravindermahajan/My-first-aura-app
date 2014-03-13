define({
    initialize: function() {
       this.render();

    },render:function(){
        this.html("I am " + this.options.myName);
    }
});