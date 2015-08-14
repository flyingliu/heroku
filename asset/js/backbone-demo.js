var CustRoute = Backbone.Router.extend({
        initialize: function () {
            console.log("Route initialize");
        },
        routes: {
            "": "index",
            "help": "help",
            "single/:single": "fsingle",
            "multip/:single/:multip": "fmultip"
        },
        index: function () {
            console.log("index");
        },
        help: function () {
            console.log("help");
        },
        fsingle: function (single) {
            console.log("single:" + single);
        },
        fmultip: function (single, multip) {
            console.log("multip:" + single + ":" + multip);
        }
    });
$(function () {
	new CustRoute();
	Backbone.history.start();
});