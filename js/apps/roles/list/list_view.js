(function(app) {

    app.module("RolesApp.List", function(List, app, Backbone, Marionette, $, _) {
    	var roleListTplSource   = $("#role-list-item").html();
		var roleListTpl = Handlebars.compile(roleListTplSource);
        List.Role = Marionette.ItemView.extend({
            tagName: "tr",
            template: roleListTpl,
            events: {
            	"click": "hightlightName",
            	"click td a.js-show": "showClicked"
            },
            hightlightName: function(e) {
            	e.preventDefault();
            	this.$el.toggleClass("warning");
            },
            showClicked: function(e) {
            	e.preventDefault();
				e.stopPropagation();
				this.trigger("role:show", this.model);
            }
        });
        List.Roles = Marionette.CompositeView.extend({
            tagName: "table",
            className: "table table-hover",
            template: "#role-list",
            itemView: List.Role,
            itemViewContainer: "tbody"
        });
    });

})(UtilManager);
