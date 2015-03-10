(function(app) {

    app.module("RolesApp.Judge", function(Judge, app, Backbone, Marionette, $, _) {
        Judge.JudgeView = Marionette.ItemView.extend({
            template: '#judge-tpl',
            events: {
                "click button.number-set": "numberSet",
                "click button.number-random": "numberRandom",
                "click button.injure-init": "injureInit",
                "click button.injure-decide": "injureDecide"
            },

            onShow: function() {
                this.$("div#number-set-result").hide();
                this.$("div#number-random-result").hide();
                this.$("div#injure-input-region").hide();
            },

            numberSet: function() {
                var i, j;
                var choices = this.$("textarea#number-set-input").val().trim().split(" ");
                var rs = [];
                var content = "";

                if (choices.length === 1) {
                    alert("→_→ 耍我是吧，有什么好选的！");
                    return;
                } else if (choices.length === 2 || choices.length === 5 || choices.length === 10) {
                    //0-9
                    for (i = 0; i < 10; i++) {
                        rs.push(choices[i % choices.length]);
                    }
                } else if (choices.length === 3) {
                    //1-9
                    for (i = 0; i < 9; i++) {
                        rs.push(choices[i % 3]);
                    }
                } else if (choices.length === 4) {
                    //1-8
                    for (i = 0; i < 8; i++) {
                        rs.push(choices[i % 4]);
                    }
                } else {
                    //1-n
                    rs = choices;
                }

                rs = _.shuffle(rs);

                if (choices.length === 2 || choices.length === 5 || choices.length === 10) {
                    // start from 0
                    for (i = 0; i < 10; i++) {
                        content += (i + rs[i] + " ");
                    }
                } else {
                    // start from 1
                    for (i = 0; i < rs.length; i++) {
                        content += ((i + 1) + rs[i] + " ");
                    }
                }

                this.$("#number-set-result").text(content);
                this.$("div#number-set-result").show();
            },

            numberRandom: function() {
                var start = parseInt(this.$("input#number-start").val());
                var end = parseInt(this.$("input#number-end").val());
                var content;
                if (isNaN(start) || isNaN(end)) {
                    content = "";
                    alert("输入的什么鬼╮(╯▽╰)╭");
                } else if (start > end) {
                    content = "";
                    alert("能分清大小吗(⊙_⊙)？");
                } else {
                    content = _.random(start, end);
                }
                this.$("div#number-random-result").html(content);
                this.$("div#number-random-result").show();
            },

            injureInit: function() {
                // Chars which can be confused are removed, e.g. oO0, Ll, 9gq, Vv, Uu, I1
                var $chars = '2345678MNPQRSTWXYZabcdefhijkmnprstwxyzABCDEFGHJK';
                var snText = "";
                for (var i = 0; i < 10; i++) {
                    snText += $chars.charAt(Math.floor(Math.random() * $chars.length));
                }

                this.$("input#serialNumber").val(snText);

                var injureRadio = this.$("input#injureRadios:checked").val();

                switch (injureRadio) {
                    case '1':
                        this.injureRs = ['痊愈', '痊愈', '痊愈', '继续受伤', '继续受伤', '继续受伤', '继续受伤', '死亡', '死亡', '死亡'];
                        break;
                    case '2':
                        this.injureRs = ['痊愈', '痊愈', '痊愈', '痊愈', '痊愈', '死亡', '死亡', '死亡', '死亡', '死亡'];
                        break;
                    case '3':
                        this.injureRs = ['继续受伤', '继续受伤', '继续受伤', '继续受伤', '继续受伤', '死亡', '死亡', '死亡', '死亡', '死亡'];
                        break;
                    case '4':
                        this.injureRs = ['痊愈', '痊愈', '痊愈', '痊愈', '痊愈', '继续受伤', '继续受伤', '继续受伤', '继续受伤', '继续受伤'];
                        break;
                }
                this.injureRs = _.shuffle(this.injureRs);

                this.$("div#number-injure-result").hide();
                this.$("div#injure-input-region").show();
            },

            injureDecide: function() {
            	var injureInput = this.$("input#injureInput").val().charAt(0);
            	var outputRs = "<p>";
            	for (var i = 0; i < 10; i++) {
			        outputRs += (i + "：" + this.injureRs[i] + "&nbsp&nbsp&nbsp&nbsp");
			        if (4 === i) {
			        	outputRs += "</p><p>";
			        }
			    }

            	if (!(injureInput) || isNaN(injureInput) || injureInput < 0 || injureInput > 9) {
			        alert("请输入0-9的数字好吗亲！");
			        return;
			    }

			    outputRs += ("</p><p>输入的数字是：" + injureInput + "</p><p>伤判结果：" + this.injureRs[injureInput] + "</p>");

			    this.$("div#number-injure-result").html(outputRs);
            	this.$("div#number-injure-result").show();
            }
        });
    });

})(UtilManager);
