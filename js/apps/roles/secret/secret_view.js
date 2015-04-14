(function(app) {

    app.module("RolesApp.Secret", function(Secret, app, Backbone, Marionette, $, _) {
        Secret.SecretView = Marionette.ItemView.extend({
            template: '#secret-tpl',
            events: {

            },

            onShow: function() {
                this.$("div#secret-region").html("敬请期待！");
            },
        });
    });

})(UtilManager);
