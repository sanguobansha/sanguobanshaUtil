(function(app) {

    app.module("RolesApp.Start", function(Start, app, Backbone, Marionette, $, _) {
        Start.StartView = Marionette.ItemView.extend({
            template: '#start-tpl',
            events: {
                "click button.role-rows": "roleRows",
                "click button.role-num": "roleNumSet",
                "click button.role-random": "roleRandom",
                "click button.role-replace": "roleReplace",
            },

            onShow: function() {
                this.$("div#start-result-region").hide();
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
                    this.$("div#start-result-region").hide();
                }
            },

            roleNumSet: function() {
                var role_num = this.$("input#role-num").val();
                this.camp_a_type = this.$("#camp-a").val();
                this.camp_b_type = this.$("#camp-b").val();
                this.camp_c_type = this.$("#camp-c").val();
                var init_role = [];
                var i;

                if (!role_num ||
                    isNaN(role_num) ||
                    role_num < 21 ||
                    role_num % 3 === 2) {
                    alert("请检查一下数量哟 (╯‵□′)╯︵┻━┻");
                } else {
                    _.each(app.professions[this.camp_a_type], function(profession) {
                        init_role.push("A势力" + profession);
                    });
                    _.each(app.professions[this.camp_b_type], function(profession) {
                        init_role.push("B势力" + profession);
                    });
                    _.each(app.professions[this.camp_c_type], function(profession) {
                        init_role.push("C势力" + profession);
                    });

                    var remaining = role_num - init_role.length;
                    var ex_num = remaining % 3;
                    var civilian_num = remaining - ex_num;
                    for (i = 0; i < civilian_num; i++) {
                        init_role.push("在野" + (i + 1));
                    }
                    if (ex_num === 1) {
                        init_role.push("EX");
                    }
                    this.$("#id-role-area").text(init_role.join("\n"));
                    this.$("div#start-result-region").hide();
                }
            },

            roleRandom: function() {
                var id_list = $("#id-area").val().split("\n");
                var role_list = $("#id-role-area").val().split("\n");
                var resultContent = "";
                if (id_list.length !== role_list.length) {
                    this.$("div#start-result-region").hide();
                    alert("ID和角色数量不符 (╯‵□′)╯︵┻━┻");
                } else {
                    role_list = _.shuffle(role_list);
                    this.role_list = role_list;
                    for (var i = 0; i < id_list.length; i++) {
                        resultContent = resultContent.concat(role_list[i] + "\n");
                    }

                    this.$("#id-result-area").text($("#id-area").val());
                    this.$("#id-role-result-area").text(_.str.trim(resultContent));

                    var optionHTML = "";
                    _.each(app.forces[this.camp_a_type], function(force) {
                        optionHTML = optionHTML.concat("<option value='" + force + "'>" + force + "</option>");
                    });
                    this.$("#camp-a-result").html(optionHTML);

                    optionHTML = "";
                    _.each(app.forces[this.camp_b_type], function(force) {
                        optionHTML = optionHTML.concat("<option value='" + force + "'>" + force + "</option>");
                    });
                    this.$("#camp-b-result").html(optionHTML);

                    optionHTML = "";
                    _.each(app.forces[this.camp_c_type], function(force) {
                        optionHTML = optionHTML.concat("<option value='" + force + "'>" + force + "</option>");
                    });
                    this.$("#camp-c-result").html(optionHTML);

                    this.$("div#start-result-region").show();
                }
            },

            roleReplace: function() {
                var camp_a = this.$("#camp-a-result").val();
                var camp_b = this.$("#camp-b-result").val();
                var camp_c = this.$("#camp-c-result").val();
                var i, resultContent = "";
                for (i = 0; i < this.role_list.length; i++) {
                    if (_.str.startsWith(this.role_list[i], "A")) {
                        this.role_list[i] = app.startRoles[camp_a][this.role_list[i].split("势力")[1]];
                    } else if (_.str.startsWith(this.role_list[i], "B")) {
                        this.role_list[i] = app.startRoles[camp_b][this.role_list[i].split("势力")[1]];
                    } else if (_.str.startsWith(this.role_list[i], "C")) {
                        this.role_list[i] = app.startRoles[camp_c][this.role_list[i].split("势力")[1]];
                    }
                }
                for (i = 0; i < this.role_list.length; i++) {
                    resultContent = resultContent.concat(this.role_list[i] + "\n");
                }
                this.$("#id-role-result-area").text(_.str.trim(resultContent));
            },
        });
    });

})(UtilManager);
