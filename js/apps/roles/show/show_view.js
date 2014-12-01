(function(app) {

    app.module("RolesApp.Show", function(Show, app, Backbone, Marionette, $, _) {

        Show.MissingRole = Marionette.ItemView.extend({
            template: "#missing-role-view"
        });

        var roleShowTplSource   = $("#role-view").html();
		var roleShowTpl = Handlebars.compile(roleShowTplSource);
		
        Show.Role = Marionette.ItemView.extend({
            template: roleShowTpl
        });
    });

})(UtilManager);
