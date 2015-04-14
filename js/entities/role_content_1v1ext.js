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
	}, {
        id: "2002",
        name: "曹丕",
        group: "20",
        basic: "君主。" + app.roleLinkArray["2001"] + "的继承者。每夜指认1个ID为雅士或文豪，优先获知雅士。",
        skills: [
            {name: "代汉自立", content: "主动技能。当夜对曹丕的所有武将杀伤技能与军师负面技能成功率减半。当夜结算时吴蜀联盟解除且之后无法再达成。若发动时吴蜀联盟尚未达成，之后亦不可达成。发动当夜" + app.roleLinkArray["2120"] + "行动发动失败，失败的技能视为已消耗。当夜公告“曹子桓代汉自立”。（全局技能 公告）"},
        ],
        attr: "统帅、文豪",
        faq: [],
        alias: [
            {content: app.roleLinkArray["1002"] + "（三国版杀-魏国）"}
        ]
    }, {
        id: "2003",
        name: "曹植",
        group: "20",
        basic: "君主。" + app.roleLinkArray["2001"] + "的继承者。每夜指认1个ID为雅士或文豪，优先获知文豪。",
        skills: [
            {name: "琳琅妙笔", content: "主动技能。提交1个ID，该夜为其抵御一次军师负面技能或武将杀伤技能的作用，或治愈一次受伤，不能抵御刺杀，优先治愈受伤。当夜对曹植的所有武将杀伤技能与军师负面技能成功率减半。（军师增益技能）"},
        ],
        attr: "仁者、文豪、雅士",
        faq: [],
        alias: [
            {content: app.roleLinkArray["1003"] + "（三国版杀-魏国）"}
        ]
    }, {
        id: "2004",
        name: "郭嘉",
        group: "20",
        basic: "军师。第三夜结算时自然死亡。每夜1个ID指认" + app.roleLinkArray["2104"] + "。从第二夜开始，每夜指认1个ID，得知其一项评价，优先获知智者与异人，且得知其阵营。若和" + app.roleLinkArray["2001"] + "同一阵营，第二夜开始每夜1个ID指认" + app.roleLinkArray["2035"] + "，不能得到反馈。死亡后选择以" + app.roleLinkArray["2005"] + "或" + app.roleLinkArray["2006"] + "的角色继续游戏。",
        skills: [
            {name: "洞若观火", content: "主动技能。指定1个ID，得知其身份（君主、军师、杀手、护卫、女眷、平民）。不可被继承。（指认技能）"},
            {name: "料事如神", content: "被动技能。当成功指认出" + app.roleLinkArray["2035"] + "时触发。" + app.roleLinkArray["2035"] + "下一夜开始时脱离游戏。不可被继承。（指认技能）"},
            {name: "留侯再世", content: "被动技能。当郭嘉/" + app.roleLinkArray["2005"] + "在场时，若本方君主被军师负面技能作用时触发，为其抵御一次。只可以被" + app.roleLinkArray["2005"] + "继承。（军师增益技能）"},
            {name: "驱虎吞狼", content: "主动技能。强制修改敌方杀手的刺杀ID，若该ID与该杀手不属于同一阵营，则刺杀可以发动，若为同一阵营，则【驱虎吞狼】消耗且无法起到效果。敌方杀手不能得知刺杀ID被修改。可以被继承。（军师增益技能）"},
            {name: "奇计百出", content: "被动技能。当指认出的智者达到二人时触发，可以随机学到其中一人（不包扩该角色转世前或转世后的角色）的一项非针对具体角色的主动技能，包括该角色能够继承的上一角色的技能。（【料敌机先】、【武侯八阵】、【连环妙计】除外）。可以被继承。（军师增益技能）"},
            {name: "遗计定辽", content: "被动技能。当成功指认出" + app.roleLinkArray["2104"] + "且" + app.roleLinkArray["2104"] + "所在方军师和杀手少于四人出场时触发，次夜" + app.roleLinkArray["2104"] + "所在方所有行动成功概率减半，此后" + app.roleLinkArray["2104"] + "所在方杀手刺杀成功概率都减半。当夜公告“郭嘉遗计定辽东”。不可被继承。（全局技能 公告）"},
        ],
        attr: "智者、雅士",
        faq: [],
        alias: [
            {content: app.roleLinkArray["1004"] + "（三国版杀-魏国）"}
        ]
    }, {
        id: "2005",
        name: "荀彧",
        group: "20",
        basic: "军师。" + app.roleLinkArray["2004"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["2028"] + "、" + app.roleLinkArray["2104"] + "，不能得到反馈。每夜指认1个ID，得知其一项评价，优先获知智者与异人。",
        skills: [
            {name: "严阵以待", content: "被动技能。当成功指认出" + app.roleLinkArray["2028"] + "时触发，令其受伤。（指认技能）"},
            {name: "火烧乌巢", content: "被动技能。当成功指认出" + app.roleLinkArray["2104"] + "且" + app.roleLinkArray["2215"] + "/" + app.roleLinkArray["2216"] + "不在场时触发，当夜" + app.roleLinkArray["2104"] + "所在方所有行动成功概率减半，不影响刺杀。当夜公告“曹孟德火烧乌巢”。若" + app.roleLinkArray["2004"] + "【遗计定辽】已经触发则该技能失效。（全局技能 公告）"}
        ],
        attr: "智者、仁者、雅士、能吏",
        faq: [],
        alias: [
            {content: app.roleLinkArray["1005"] + "（三国版杀-魏国）"}
        ]
    }, {
        id: "2006",
        name: "荀攸",
        group: "20",
        basic: "军师。" + app.roleLinkArray["2004"] + "的继承者。每夜指认1个ID，随机获得其一项评价。",
        skills: [
            {name: "曹魏谋主", content: "被动技能。当荀攸存活，若本国君主被军师负面技能作用时触发，使此技能也同时作用于技能发动者。（军师增益技能）"},
            {name: "经达权变", content: "主动技能，即时生效。提交2个ID，若其非同国，则发动当夜，这2个ID只能受到自己或对方的指认和技能作用。其对其他角色所有的指认和主动技能均失败，其他角色对这2个ID的指认和发动的主动技能也失败。若技能指定了包括这2个ID在内的多个角色，则技能发动成功，但对这2个ID无效。同理，当此2个ID发动了针对包括自己在内的多个目标的技能，则此技能发动成功，但是对其他角色无效。（军师增益技能）"},
            {name: "围城焚粮", content: "主动技能。提交1个ID，对其进行一次刺杀。若此ID在当夜受到其他任何以其作为目标的主动技能作用，则此刺杀无效。（武将杀伤技能）"},
            {name: "水淹下邳", content: "主动技能。发动当夜令吕布令其当夜行动失效。（军师负面技能）"}
        ],
        attr: "智者、雅士",
        faq: [],
        alias: [
            {content: app.roleLinkArray["1006"] + "（三国版杀-魏国）"}
        ]
    }]);

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
