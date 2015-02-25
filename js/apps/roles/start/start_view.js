(function(app) {

	app.module("RolesApp.Start", function(Start, app, Backbone, Marionette, $, _) {
		Start.StartView = Marionette.ItemView.extend({
			template: '#start-tpl',
			events: {
				"click button.role-rows": "roleRows",
				"click button.role-num": "roleNumSet",
				"click button.role-random": "roleRandom"
			},

			onShow: function() {
				this.$("div#start-result-region").hide();
				this.$("input#occupation-list").val("君主 主军师 副军师 杀手1 杀手2 护卫 女眷");
			},

			roleRows: function() {
				var role_num = this.$("input#role-num").val();
				if (!role_num || isNaN(role_num)) {
					alert("请检查一下数量哟 (╯‵□′)╯︵┻━┻");
				} else {
					this.$("#id-area").attr("rows", role_num);
					this.$("#id-role-area").attr("rows", role_num);
					this.$("#id-result-area").attr("rows", role_num);
					this.$("#id-role-result-area").attr("rows", role_num);
				}
			},

			roleNumSet: function() {
				var role_num = this.$("input#role-num").val();
				var camp_num = this.$("input#camp-num").val();
				var camp_ids = ['A', 'B', 'C', 'D', 'E', 'F'];
				var init_role = [];
				var i;
				var occupation_list = _.str.words(this.$("input#occupation-list").val());
				if (!role_num || 
					!camp_num || 
					isNaN(role_num) || 
					isNaN(camp_num) || 
					camp_num < 1 ||
					camp_num > 6 ||
					occupation_list.length === 0 ||
					role_num < occupation_list.length * camp_num) {
					alert("请检查一下数量哟 (╯‵□′)╯︵┻━┻");
				} else {
					_.each(occupation_list, function(occupation) {
						for (i = 0; i < camp_num; i++) {
							init_role.push(camp_ids[i] + "势力" + occupation);
						}
					});
					var remaining = role_num - init_role.length;
					var ex_num = remaining % camp_num;
					var civilian_num = remaining - ex_num;
					for (i = 0; i < civilian_num; i++) {
						init_role.push("在野" + (i + 1));
					}
					for (i = 0; i < ex_num; i++) {
						init_role.push("EX" + (i + 1));
					}
					this.$("#id-role-area").text(init_role.join("\n"));
				}
			},

			roleRandom: function() {
				var id_list = _.str.words($("#id-area").val());
				var role_list = _.str.words($("#id-role-area").val());
				var resultContent = "";
				if (id_list.length !== role_list.length) {
					this.$("div#start-result-region").hide();
					alert("ID和角色数量不符 (╯‵□′)╯︵┻━┻");
				} else {
					role_list = _.shuffle(role_list);
				    for (var i = 0; i < id_list.length; i++) {
				        resultContent = resultContent.concat(role_list[i] + "\n");
				    }
				    this.$("#id-result-area").text($("#id-area").val());
				    this.$("#id-role-result-area").text(_.str.trim(resultContent));
					this.$("div#start-result-region").show();
				}
			}
		});
	});

})(UtilManager);