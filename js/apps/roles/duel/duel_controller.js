(function(app) {

	app.module("RolesApp.Duel", function(Duel, app, Backbone, Marionette, $, _) {
		Duel.Controller = {
			showDuel: function() {
                var duelView = new Duel.DuelView();
                app.mainRegion.show(duelView);
            },
		};
	});

})(UtilManager);