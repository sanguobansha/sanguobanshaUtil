(function(app) {

    /**
     * @ app.duelRoles: 1v1抽将数据
     * type 
     * san: 1君主 2军师 3杀手 4护卫女眷 5平民
     * zhan: 1君主 2家老中老 3侍大将 4奉行旗本 5平民
     * chao: 1君 2相 3将 4臣 5民
     */

    app.duelRoles = {
        "san": [{
            "id": 1,
            "name": "曹操",
            "type": 1
        }, {
            "id": 2,
            "name": "刘备",
            "type": 1
        }, {
            "id": 3,
            "name": "孙坚",
            "type": 1
        }, {
            "id": 4,
            "name": "袁绍",
            "type": 1
        }, {
            "id": 5,
            "name": "刘表",
            "type": 1
        }, {
            "id": 6,
            "name": "刘焉",
            "type": 1
        }, {
            "id": 7,
            "name": "陶谦",
            "type": 1
        }, {
            "id": 8,
            "name": "公孙康",
            "type": 1
        }, {
            "id": 9,
            "name": "司马师",
            "type": 1
        }, {
            "id": 10,
            "name": "郭嘉",
            "type": 2
        }, {
            "id": 11,
            "name": "贾诩",
            "type": 2
        }, {
            "id": 12,
            "name": "徐庶",
            "type": 2
        }, {
            "id": 13,
            "name": "庞统",
            "type": 2
        }, {
            "id": 14,
            "name": "周瑜",
            "type": 2
        }, {
            "id": 15,
            "name": "吕蒙",
            "type": 2
        }, {
            "id": 16,
            "name": "杨修",
            "type": 2
        }, {
            "id": 17,
            "name": "少侠",
            "type": 2
        }, {
            "id": 18,
            "name": "陈宫",
            "type": 2
        }, {
            "id": 19,
            "name": "张昭",
            "type": 2
        }, {
            "id": 20,
            "name": "程昱",
            "type": 2
        }, {
            "id": 21,
            "name": "蒋琬",
            "type": 2
        }, {
            "id": 22,
            "name": "夏侯惇",
            "type": 3
        }, {
            "id": 23,
            "name": "张辽",
            "type": 3
        }, {
            "id": 24,
            "name": "关羽",
            "type": 3
        }, {
            "id": 25,
            "name": "张飞",
            "type": 3
        }, {
            "id": 26,
            "name": "太史慈",
            "type": 3
        }, {
            "id": 27,
            "name": "甘宁",
            "type": 3
        }, {
            "id": 28,
            "name": "于禁",
            "type": 3
        }, {
            "id": 29,
            "name": "王平",
            "type": 3
        }, {
            "id": 30,
            "name": "文聘",
            "type": 3
        }, {
            "id": 31,
            "name": "潘璋",
            "type": 3
        }, {
            "id": 32,
            "name": "夏侯渊",
            "type": 3
        }, {
            "id": 33,
            "name": "李典",
            "type": 3
        }, {
            "id": 34,
            "name": "典韦",
            "type": 4
        }, {
            "id": 35,
            "name": "蔡琰",
            "type": 4
        }, {
            "id": 36,
            "name": "赵云",
            "type": 4
        }, {
            "id": 37,
            "name": "糜夫人",
            "type": 4
        }, {
            "id": 38,
            "name": "黄盖",
            "type": 4
        }, {
            "id": 39,
            "name": "小乔",
            "type": 4
        }, {
            "id": 40,
            "name": "曹洪",
            "type": 4
        }, {
            "id": 41,
            "name": "徐盛",
            "type": 4
        }, {
            "id": 42,
            "name": "星彩",
            "type": 4
        }, {
            "id": 43,
            "name": "周仓",
            "type": 4
        }, {
            "id": 44,
            "name": "吴国太",
            "type": 4
        }, {
            "id": 45,
            "name": "步练师",
            "type": 4
        }, {
            "id": 46,
            "name": "华佗",
            "type": 5
        }, {
            "id": 47,
            "name": "张角",
            "type": 5
        }, {
            "id": 48,
            "name": "吕布",
            "type": 5
        }, {
            "id": 49,
            "name": "貂蝉",
            "type": 5
        }, {
            "id": 50,
            "name": "陈琳",
            "type": 5
        }, {
            "id": 51,
            "name": "董卓",
            "type": 5
        }, {
            "id": 52,
            "name": "王允",
            "type": 5
        }, {
            "id": 53,
            "name": "孔融",
            "type": 5
        }, {
            "id": 54,
            "name": "水镜",
            "type": 5
        }, {
            "id": 55,
            "name": "公孙瓒",
            "type": 5
        }, {
            "id": 56,
            "name": "百姓",
            "type": 5
        }, {
            "id": 57,
            "name": "毌丘俭",
            "type": 5
        }, {
            "id": 58,
            "name": "许邵",
            "type": 5
        }, {
            "id": 59,
            "name": "颜良",
            "type": 5
        }, {
            "id": 60,
            "name": "华雄",
            "type": 5
        }, {
            "id": 61,
            "name": "蔡邕",
            "type": 5
        }, {
            "id": 62,
            "name": "华歆",
            "type": 5
        }, {
            "id": 63,
            "name": "董承",
            "type": 5
        }, {
            "id": 64,
            "name": "田丰",
            "type": 5
        }, {
            "id": 65,
            "name": "卢植",
            "type": 5
        }, {
            "id": 66,
            "name": "张燕",
            "type": 5
        }, {
            "id": 67,
            "name": "何进",
            "type": 5
        }, {
            "id": 68,
            "name": "纪灵",
            "type": 5
        }, {
            "id": 69,
            "name": "陈登",
            "type": 5
        }, {
            "id": 70,
            "name": "南华老仙",
            "type": 5
        }],
        "zhan": [{
            "id": 1,
            "name": "织田信秀",
            "type": 1
        }, {
            "id": 2,
            "name": "丰臣秀吉",
            "type": 1
        }, {
            "id": 3,
            "name": "松平广忠",
            "type": 1
        }, {
            "id": 4,
            "name": "武田信虎",
            "type": 1
        }, {
            "id": 5,
            "name": "长尾为景",
            "type": 1
        }, {
            "id": 6,
            "name": "北条氏康",
            "type": 1
        }, {
            "id": 7,
            "name": "毛利元就",
            "type": 1
        }, {
            "id": 8,
            "name": "",
            "type": 0
        }, {
            "id": 9,
            "name": "",
            "type": 0
        }, {
            "id": 10,
            "name": "平手政秀",
            "type": 2
        }, {
            "id": 11,
            "name": "林秀贞",
            "type": 2
        }, {
            "id": 12,
            "name": "竹中重治",
            "type": 2
        }, {
            "id": 13,
            "name": "蜂须贺正胜",
            "type": 2
        }, {
            "id": 14,
            "name": "石川数正",
            "type": 2
        }, {
            "id": 15,
            "name": "平岩亲吉",
            "type": 2
        }, {
            "id": 16,
            "name": "横田高松",
            "type": 2
        }, {
            "id": 17,
            "name": "板垣信方",
            "type": 2
        }, {
            "id": 18,
            "name": "宇佐美定满",
            "type": 2
        }, {
            "id": 19,
            "name": "长尾政景",
            "type": 2
        }, {
            "id": 20,
            "name": "北条幻庵",
            "type": 2
        }, {
            "id": 21,
            "name": "多目元忠",
            "type": 2
        }, {
            "id": 22,
            "name": "福原贞俊",
            "type": 2
        }, {
            "id": 23,
            "name": "志道广良",
            "type": 2
        }, {
            "id": 24,
            "name": "",
            "type": 0
        }, {
            "id": 25,
            "name": "",
            "type": 0
        }, {
            "id": 26,
            "name": "",
            "type": 0
        }, {
            "id": 27,
            "name": "",
            "type": 0
        }, {
            "id": 28,
            "name": "柴田胜家",
            "type": 3
        }, {
            "id": 29,
            "name": "佐久间信盛",
            "type": 3
        }, {
            "id": 30,
            "name": "加藤清正",
            "type": 3
        }, {
            "id": 31,
            "name": "福岛正则",
            "type": 3
        }, {
            "id": 32,
            "name": "本多忠胜",
            "type": 3
        }, {
            "id": 33,
            "name": "神原康政",
            "type": 3
        }, {
            "id": 34,
            "name": "甘利虎泰",
            "type": 3
        }, {
            "id": 35,
            "name": "饭富虎昌",
            "type": 3
        }, {
            "id": 36,
            "name": "柿崎景家",
            "type": 3
        }, {
            "id": 37,
            "name": "斋藤朝信",
            "type": 3
        }, {
            "id": 38,
            "name": "北条纲成",
            "type": 3
        }, {
            "id": 39,
            "name": "富永直胜",
            "type": 3
        }, {
            "id": 40,
            "name": "吉川元春",
            "type": 3
        }, {
            "id": 41,
            "name": "国司元相",
            "type": 3
        }, {
            "id": 42,
            "name": "",
            "type": 0
        }, {
            "id": 43,
            "name": "",
            "type": 0
        }, {
            "id": 44,
            "name": "",
            "type": 0
        }, {
            "id": 45,
            "name": "",
            "type": 0
        }, {
            "id": 46,
            "name": "村井贞胜",
            "type": 4
        }, {
            "id": 47,
            "name": "浅野长政",
            "type": 4
        }, {
            "id": 48,
            "name": "伊奈忠次",
            "type": 4
        }, {
            "id": 49,
            "name": "武田信廉",
            "type": 4
        }, {
            "id": 50,
            "name": "上杉宪政",
            "type": 4
        }, {
            "id": 51,
            "name": "安藤良整",
            "type": 4
        }, {
            "id": 52,
            "name": "口羽通良",
            "type": 4
        }, {
            "id": 53,
            "name": "池田恒兴",
            "type": 4
        }, {
            "id": 54,
            "name": "加藤嘉明",
            "type": 4
        }, {
            "id": 55,
            "name": "服部正成",
            "type": 4
        }, {
            "id": 56,
            "name": "原虎胤",
            "type": 4
        }, {
            "id": 57,
            "name": "中条藤资",
            "type": 4
        }, {
            "id": 58,
            "name": "北条纲高",
            "type": 4
        }, {
            "id": 59,
            "name": "穗井田元清",
            "type": 4
        }, {
            "id": 60,
            "name": "",
            "type": 0
        }, {
            "id": 61,
            "name": "",
            "type": 0
        }, {
            "id": 62,
            "name": "",
            "type": 0
        }, {
            "id": 63,
            "name": "",
            "type": 0
        }, {
            "id": 64,
            "name": "上泉信纲",
            "type": 5
        }, {
            "id": 65,
            "name": "来岛通总",
            "type": 5
        }, {
            "id": 66,
            "name": "百地三太夫",
            "type": 5
        }, {
            "id": 67,
            "name": "今井宗久",
            "type": 5
        }, {
            "id": 68,
            "name": "织田市",
            "type": 5
        }, {
            "id": 69,
            "name": "菊亭晴季",
            "type": 5
        }, {
            "id": 70,
            "name": "前田庆次",
            "type": 5
        }, {
            "id": 71,
            "name": "本愿寺显如",
            "type": 5
        }, {
            "id": 72,
            "name": "足利义辉",
            "type": 5
        }, {
            "id": 73,
            "name": "弗洛伊斯",
            "type": 5
        }, {
            "id": 74,
            "name": "快川绍喜",
            "type": 5
        }, {
            "id": 75,
            "name": "曲直濑道三",
            "type": 5
        }, {
            "id": 76,
            "name": "千宗易",
            "type": 5
        }, {
            "id": 77,
            "name": "浅井长政",
            "type": 5
        }, {
            "id": 78,
            "name": "长宗我部元亲",
            "type": 5
        }, {
            "id": 79,
            "name": "伊达政宗",
            "type": 5
        }, {
            "id": 80,
            "name": "今川义元",
            "type": 5
        }, {
            "id": 81,
            "name": "后奈良天皇",
            "type": 5
        }, {
            "id": 82,
            "name": "宇喜多直家",
            "type": 5
        }, {
            "id": 83,
            "name": "本因坊算砂",
            "type": 5
        }, {
            "id": 84,
            "name": "宫本武藏",
            "type": 5
        }, {
            "id": 85,
            "name": "立花道雪",
            "type": 5
        }, {
            "id": 86,
            "name": "陶晴贤",
            "type": 5
        }, {
            "id": 87,
            "name": "狩野永德",
            "type": 5
        }, {
            "id": 88,
            "name": "斋藤归蝶",
            "type": 5
        }, {
            "id": 89,
            "name": "阿国",
            "type": 5
        }, {
            "id": 90,
            "name": "黑田长政",
            "type": 5
        }, {
            "id": 91,
            "name": "太原雪斋",
            "type": 5
        }]
    };


    app.module("RolesApp.Duel", function(Duel, app, Backbone, Marionette, $, _) {
        Duel.DuelView = Marionette.ItemView.extend({
            template: '#duel-tpl',
            events: {
                "click button.generate-duel": "generate"
            },
            onShow: function() {
            	$("div#duel-result").hide();
            },
            generate: function() {
                var i, j, temp,
                    k = 0,
                    banned = [],
                    names = [],
                    rs = [],
                    rs2 = [],
                    stack = [
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    roleDataName = $("input[name='duel-choice']:checked").val();

                var duelRolesCopy = app.duelRoles[roleDataName].slice(0);
                _.each(duelRolesCopy, function(role) {
                    names.push(role.name);
                });

                for (i = 1; i < 7; i++) {
                    temp = $("input#ban" + i).val().trim();
                    if (temp !== "") {
                        if (names.indexOf(temp) !== -1) {
                            banned.push(temp);
                        } else {
                            alert(temp + " 是无效的角色名。");
                            return;
                        }
                    }
                }
                for (i = 0; i < banned.length; i++) {
                    for (j = 0; j < duelRolesCopy.length; j++) {
                        if (duelRolesCopy[j].name === banned[i]) {
                            duelRolesCopy[j].type = 0;
                            break;
                        }
                    }
                }
                for (i = 0; i < duelRolesCopy.length; i++) {
                    stack[duelRolesCopy[i].type].push(duelRolesCopy[i].name);
                }
                for (i = 1; i < 6; i++) {
                    stack[i] = _.shuffle(stack[i]);
                    if (i === 1) {
                        k = 3;
                    } else if (i === 2) {
                        if (roleDataName === "san") {
                            k = 4;
                            rs2.push(stack[i][4]);
                            rs2.push(stack[i][5]);
                        } else if (roleDataName === "zhan") {
                            k = 5;
                            rs2.push(stack[i][5]);
                            rs2.push(stack[i][6]);
                        }
                    } else if (i === 3 || i === 4) {
                        if (roleDataName === "san") {
                            k = 6;
                        } else if (roleDataName === "zhan") {
                            k = 7;
                        }
                    } else if (i === 5) {
                        if (roleDataName === "san") {
                            k = 9;
                        } else if (roleDataName === "zhan") {
                            k = 12;
                        }
                    }
                    for (j = 0; j < k; j++) {
                        rs.push(stack[i][j]);
                    }
                    k = 0;
                }
                rs = _.shuffle(rs);

                if (roleDataName === "san") {
                    for (i = 0; i < 13; i++) {
                        rs2.push(rs.pop());
                    }
                } else if (roleDataName === "zhan") {
                    for (i = 0; i < 16; i++) {
                        rs2.push(rs.pop());
                    }
                }

                var light = "",
                    dark = "";

                var lineLength = 5;
                if (roleDataName === "zhan") {
                    lineLength = 6;
                }

                for (i = 0; i < rs2.length; i++) {
                    light = light + "<label class='btn btn-success'><input type='checkbox'> " + rs2[i] + "</label>";
                    if ((i + 1) % lineLength === 0) {
                        light = light + "<br/>";
                    }
                }
                for (i = 0; i < rs.length; i++) {
                    dark = dark + "<label class='btn btn-primary'><input type='checkbox'> " + rs[i] + "</label>";
                    if ((i + 1) % lineLength === 0) {
                        dark = dark + "<br/>";
                    }
                }
                $("div#duel-result-light").html(light);
                $("div#duel-result-dark").html(dark);
                $("div#duel-result").show();
            }

        });
    });

})(UtilManager);
