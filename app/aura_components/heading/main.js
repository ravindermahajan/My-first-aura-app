/**
 * Created by synerzip on 13/3/14.
 */
define({
    initialize:function(){
        var self=this;
        this.render();
        this.sandbox.once("alert", function (message) {
            alert(message);

        });

    },render:function(){
        var $div=$('<div/>');
        $div.html('this is my heading widget with the heading as:'+this.options.myHeading+this.sandbox.printName('ravinder mAhaJan'));
        this.html($div);
    }
});