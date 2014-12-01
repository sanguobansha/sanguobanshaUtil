(function(app) {

	app.module("RolesApp.Rule", function(Rule, app, Backbone, Marionette, $, _) {
		Rule.Controller = {
			showRule: function() {
                var ruleView = new Rule.RuleView();
                app.mainRegion.show(ruleView);
            },
		};
	});

})(UtilManager);