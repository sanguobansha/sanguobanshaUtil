(function(app) {

    app.module("RolesApp.List", function(List, app, Backbone, Marionette, $, _) {
        List.Controller = {
            listRoles: function() {
                var roles = app.request("role:entities");
                var rolesListView = new List.Roles({
                    collection: roles
                });
                rolesListView.on( "itemview:role:show", function(childView, model) {
                	app.trigger( "role:show", model.get("group"), model.get("id"));
				});
                app.mainRegion.show(rolesListView);
            },

            listByGroup: function(group) {
                var roles = app.request("role:entities").clone();
                var models = roles.models;
                for (var i = models.length - 1; i >= 0; i--) {
                    if (models[i].get("group") !== group) {
                        roles.remove(models[i]);
                    }
                }
                var rolesListView = new List.Roles({
                    collection: roles
                });
                rolesListView.on( "itemview:role:show", function(childView, model) {
                    app.trigger( "role:show", model.get("group"), model.get("id"));
                });
                app.mainRegion.show(rolesListView);
            },

            listByAnotherGroup: function(group) {
                var roles = app.request("role:entities").clone();
                var models = roles.models;
                for (var i = models.length - 1; i >= 0; i--) {
                    if (!_.str.startsWith(models[i].get("group"), group)) {
                        roles.remove(models[i]);
                    }
                }
                var rolesListView = new List.Roles({
                    collection: roles
                });
                rolesListView.on( "itemview:role:show", function(childView, model) {
                    app.trigger( "role:show", model.get("group"), model.get("id"));
                });
                return rolesListView;
            }
        };
    });

})(UtilManager);
