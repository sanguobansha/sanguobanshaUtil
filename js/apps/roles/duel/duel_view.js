(function(app) {

    app.module("RolesApp.Duel", function(Duel, app, Backbone, Marionette, $, _) {
        Duel.DuelView = Marionette.ItemView.extend({
            template: '#duel-tpl',
            
        });
    });

})(UtilManager);
