(function(app) {

    app.module("RolesApp", function(RolesApp, app, Backbone, Marionette, $, _) {

        RolesApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "rule": "showRule",
                "roles": "listRoles",
                "roles/:group": "listByGroup",
                "roles/:group/:id": "showRole",
                "judge": "showJudge",
                "start": "showStart"
            }
        });

        var API = {
            showRule: function() {
                RolesApp.Rule.Controller.showRule();
            },
            listRoles: function() {
                RolesApp.List.Controller.listRoles();
            },
            listByGroup: function(group) {
                RolesApp.List.Controller.listByGroup(group);
            },
            showRole: function(group, id) {
                RolesApp.Show.Controller.showRole(group, id);
            },
            showJudge: function() {
                RolesApp.Judge.Controller.showJudge();
            },
            showStart: function() {
                RolesApp.Start.Controller.showStart();
            }
        };

        app.on("roles:list", function() {
            app.navigate("roles");
            API.listRoles();
        });

        app.on("roles:group", function(group) {
            app.navigate("roles/" + group);
            API.listByGroup(group);
        });

        app.on("role:show", function(group, id) {
            app.navigate("roles/" + group + "/" + id);
            API.showRole(group, id);
        });

        app.addInitializer(function() {
            new RolesApp.Router({
                controller: API
            });
        });

    });

})(UtilManager);
