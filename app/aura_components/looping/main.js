/**
 * Created by synerzip on 13/3/14.
 */
define(['text!./looping.html'], function(tpl) {
    return {
        type: "Backbone",
        initialize: function() {
            this.render();
        },
        render:function(){
//            var children = this.options.children.split(",");
//            var heading=this.options.heading;
            this.html(_.template(tpl)({ children: ['ravinder','amit'],heading:'hiii'}));
        },
        events: {
            "click #myClick": function() {
                console.log("Clicked zoom in");
                this.sandbox.emit("alert",'this is my custom alert message');

            }
        }
    }
});
