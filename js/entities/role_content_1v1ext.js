(function(app) {

	var roleContent_1v1ext = new app.Entities.RoleCollection([{
		id: "2001",
        name: "曹操",
        group: "20",
        basic: "君主。每夜1个ID指认" + app.roleLinkArray["2048"] + "、" + app.roleLinkArray["2122"] + "，不能得到反馈。死亡后选择以" + app.roleLinkArray["2002"] + "或" + app.roleLinkArray["2003"] + "的角色继续游戏。",
        skills: [
        	{name: "割发代首", content: "被动技能。当第一次得票受伤时触发，使得该次投票致伤无效。不可被继承。（投票技能）"},
        	{name: "割须弃袍", content: "被动技能。当受到武将杀伤技能作用时触发，使伤害减轻。即被刺杀将受伤，被致伤将无效。不可被继承。（武将保护技能）"},
        	{name: "亲冒矢石", content: "主动技能。提交1个ID，如果对方不具有“猛将”评价，令其受伤。只可以被" + app.roleLinkArray["2002"] + "继承。（武将杀伤技能）"},
        	{name: "铜雀春深", content: "被动技能。当成功指认出" + app.roleLinkArray["2048"] + "时触发，令" + app.roleLinkArray["2048"] + "脱离游戏。" + app.roleLinkArray["2037"] + "若存活，可得知" + app.roleLinkArray["2048"] + "已经退出游戏。不可被继承。（指认技能）"},
        	{name: "密诛马腾", content: "被动技能。当成功指认出" + app.roleLinkArray["2122"] + "时触发，令" + app.roleLinkArray["2122"] + "受伤。不可被继承。（指认技能）"},
        ],
        attr: "智者、统帅、文豪、能吏",
        faq: [],
        alias: [
        	{content: app.roleLinkArray["1001"] + "（三国版杀-魏国）"}
        ]
	}, ]);

	/* Role content json template.
    	id: "",
        name: "",
        group: "",
        basic: "",
        skills: [
        	{name: "", content: ""},
        ],
        attr: "",
        faq: [
        	{content: ""}
        ],
        alias: [
        	{content: ""}
        ]
    */

    app.roleContent.add(roleContent_1v1ext.models);

})(UtilManager);