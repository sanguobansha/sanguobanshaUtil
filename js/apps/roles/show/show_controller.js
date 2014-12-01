(function(app) {

    app.module("RolesApp.Show", function(Show, app, Backbone, Marionette, $, _) {
        Show.Controller = {
            showRole: function(group, id) {
                var roles = app.request("role:entities");
                var model = roles.get(id);

                var roleView;

                if (model !== undefined) {
                    roleView = new Show.Role({
                        model: model
                    });
                } else {
                    roleView = new Show.MissingRole();
                }

                app.mainRegion.show(roleView);
            }
        };
    });

})(UtilManager);
