(function(app) {

	app.module("RolesApp.Secret", function(Secret, app, Backbone, Marionette, $, _) {
		Secret.Controller = {
			showSecret: function() {
                var secretView = new Secret.SecretView();
                app.mainRegion.show(secretView);
            },
		};
	});

})(UtilManager);