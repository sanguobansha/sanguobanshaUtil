(function(app) {

    app.module("RolesApp.Rule", function(Rule, app, Backbone, Marionette, $, _) {
        Rule.RuleView = Marionette.ItemView.extend({
            template: '#rule-tpl',

            events: {

            },

            initialize: function() {
            	app.addRegions({
			        rule1Region: "#rule1",
			    });
            },

            onShow: function() {
                app.rule1Region.show(app.RolesApp.List.Controller.listByAnotherGroup('1'));
            }
        });
    });

})(UtilManager);
