(function(app) {

	app.module("RolesApp.Judge", function(Judge, app, Backbone, Marionette, $, _) {
		Judge.Controller = {
			showJudge: function() {
                var judgeView = new Judge.JudgeView();
                app.mainRegion.show(judgeView);
            },
		};
	});

})(UtilManager);