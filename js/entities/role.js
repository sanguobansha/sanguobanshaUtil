(function(app) {

    app.module("Entities", function(Entities, app, Backbone, Marionette, $, _) {

        Entities.Role = Backbone.Model.extend({});

        Entities.RoleCollection = Backbone.Collection.extend({
            model: Entities.Role,
            comparator: "id"
        });

        var initializeRoles = function() {
            return app.roleContent;
        };

        var API = {
            getRoleEntities: function() {
            	return initializeRoles();
            },

            getRoleEntity: function(roleId) {
                var role = new Entities.Role({
                    id: roleId
                });
                role.fetch();
                return role;
            }
        };

        app.reqres.setHandler("role:entities", function() {
            return API.getRoleEntities();
        });

        app.reqres.setHandler("role:entity", function(id) {
        	return API.getRoleEntity(id);
        });

    });

})(UtilManager);
