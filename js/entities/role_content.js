(function(app) {

    app.roleContent = new app.Entities.RoleCollection([{

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

        id: "1001",
        name: "曹操",
        group: "10",
        basic: "君主。每夜2个ID指认" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "、" + app.roleLinkArray["1010"]+ "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1012"]+ "/" + app.roleLinkArray["1013"]+ "。每夜1个ID指认" + app.roleLinkArray["1217"] + "，每夜1个ID指认" + app.roleLinkArray["1319"] + "，均不能得到反馈。死亡后选择以" + app.roleLinkArray["1002"] + "或" + app.roleLinkArray["1003"] + "的角色继续游戏。",
        skills: [
        	{name: "割发代首", content: "被动技能。当第一次得票数最多时触发，使得该次投票无效。不可被继承。（投票技能）"},
        	{name: "割须弃袍", content: "被动技能。当第一次被武将杀伤技能作用时触发，抵消一次。如果其受到的是刺杀（包括非杀手刺杀），则该刺杀一半概率失效。只能抵御一次。不可被继承。（武将保护技能）"},
        	{name: "亲冒矢石", content: "主动技能。指定1个ID，如果其不具有“猛将”评价，令其受伤。只可以被" + app.roleLinkArray["1002"] + "继承。（武将杀伤技能 结算时生效）"},
        	{name: "铜雀春深", content: "被动技能。当成功指认出" + app.roleLinkArray["1217"] + "时触发，令" + app.roleLinkArray["1217"] + "脱离游戏。但" + app.roleLinkArray["1204"] + "若存活，可得知" + app.roleLinkArray["1217"] + "已经脱离游戏。（如果之前" + app.roleLinkArray["1204"] + "没有与" + app.roleLinkArray["1217"] + "互相认识，" + app.roleLinkArray["1204"] + "仍不能得知" +app.roleLinkArray["1217"] + "的ID）。不可被继承。（指认技能）"},
        	{name: "血战官渡", content: "被动技能。当成功指认出" + app.roleLinkArray["1319"] + "时触发，令" + app.roleLinkArray["1319"] + "发动【河朔称雄】时对魏国角色无效。若" + app.roleLinkArray["1319"] + "当夜发动【河朔称雄】，则除上述效果外同时令" + app.roleLinkArray["1319"] + "【四世三公】使用次数-1。若" + app.roleLinkArray["1319"] + "【河朔称雄】已经消耗，则令" + app.roleLinkArray["1319"] + "【四世三公】使用次数-2。【血战官渡】触发以后，" + app.roleLinkArray["1319"] + "若指认曹操的评价，统一反馈为“不是对应评价”。" + app.roleLinkArray["1319"] + "加入魏国后，此技能失效不可再次触发。不可被继承。（指认技能）"},
        ],
        attr: "智者、统帅、文豪、能吏",
        faq: [
        	{content: "曹操对" + app.roleLinkArray["1319"] + "的指认ID不视为对在野的招揽。"},
        	{content: "曹操死亡选择" + app.roleLinkArray["1002"] + "支线后，即使被【起死回生】复活成曹操，再次死亡后也不能选择" + app.roleLinkArray["1003"] + "支线。其他多支线人物选择规则同理。"}
        ],
        alias: [
            {content: "" + app.roleLinkArray["2001"] + "（三国版杀单挑-标准）"}
        ]
    }, {
        id: "1002",
        name: "曹丕",
        group: "10",
        basic: "君主。" + app.roleLinkArray["1001"] + "的继承者。自动得知" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "。每夜1个ID指认" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "。每夜指认1个ID为雅士或文豪，优先获知雅士。",
        skills: [
        	{name: "代汉自立", content: "主动技能。当夜曹丕获得如下状态：对曹丕的所有武将杀伤技能与军师负面技能成功率减半。当夜结算后吴蜀联盟解除且之后无法再达成。若此时吴蜀非联盟状态，之后亦不可联盟。当夜" + app.roleLinkArray["1330"] + "/" + app.roleLinkArray["1331"] + "行动失败，失败的技能视为已消耗。当夜公告“曹子桓代汉自立”。（全局技能 公告）"},
        ],
        attr: "统帅、文豪",
        faq: [
        	{content: "吴蜀联盟建立后，曹丕使用【代汉自立】当晚吴蜀联盟不会解除，当夜反馈完毕后吴蜀联盟解除。"},
        	{content: "吴蜀联盟达成同夜，曹丕使用【代汉自立】，当夜公告吴蜀联盟达成、吴蜀联盟破裂，曹子桓代汉自立。"},
        	{content: "若吴蜀联盟达成同夜，吴魏联盟也达成，且当夜曹丕使用【代汉自立】，当夜不公告任何联盟达成，公告曹子桓代汉自立。"},
        ],
        alias: [
            {content: "" + app.roleLinkArray["2002"] + "（三国版杀单挑-标准）"}
        ]
    }, {
        id: "1003",
        name: "曹植",
        group: "10",
        basic: "君主。" + app.roleLinkArray["1001"] + "的继承者。每夜2个ID指认" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "、" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "。每夜指认1个ID为雅士或文豪，优先获知文豪。",
        skills: [
        	{name: "琳琅妙笔", content: "主动技能，指定一个ID，随后：<br/>（1）【琳琅妙笔】使用者获得如下状态：对【琳琅妙笔】使用者的所有武将杀伤技能与军师负面技能成功率减半。（军师增益技能 结算前生效）<br/>（2）为指定的ID抵御一次军师负面技能或武将杀伤技能的作用，或治愈一次受伤，不能抵御刺杀，优先治愈受伤。（军师增益技能 结算时生效）"},
        ],
        attr: "仁者、文豪、雅士",
        faq: [],
        alias: [
            {content: "" + app.roleLinkArray["2003"] + "（三国版杀单挑-标准）"}
        ]
    }, {
    	id: "1004",
    	name: "郭嘉",
    	group: "10",
    	basic: "军师。自动知道" + app.roleLinkArray["1001"] + "。开局即知道魏国杀手的角色选择情况。每夜2个ID指认" + app.roleLinkArray["1017"] + "/" + app.roleLinkArray["1018"] + "、" + app.roleLinkArray["1019"] + "/" + app.roleLinkArray["1020"] + "。第三夜结算时自然死亡，之前所有指认结果将由天庭通告本国君主。从第二夜开始，每夜指认1个ID为智者。和" + app.roleLinkArray["1001"] + "互识后，每夜1个ID指认" + app.roleLinkArray["1202"] + "，不能得到反馈。死亡后选择以" + app.roleLinkArray["1005"] + "或" + app.roleLinkArray["1006"] + "的角色继续游戏。",
        skills: [
        	{name: "洞若观火", content: "主动技能。指定1个ID，得知其身份（君主、军师、杀手、护卫、女眷、平民）。不可被继承。（指认技能 结算时生效）"},
        	{name: "料事如神", content: "被动技能。当成功指认出" + app.roleLinkArray["1202"] + "时触发。" + app.roleLinkArray["1202"] + "下一夜开始时脱离游戏。不可被继承。（指认技能）"},
        	{name: "奉孝安在", content: "被动技能。" + app.roleLinkArray["1204"] + "【火烧赤壁】触发时，若郭嘉还未死亡则触发，使魏国角色获得状态：当夜所有不属于魏国的角色针对魏国角色的所有武将杀伤性质的主动技能发动失败，不影响杀手刺杀及依赖于刺杀发动的技能。不可被继承。（军师增益技能）"},
        ],
        attr: "智者、雅士",
        faq: [
        	{content: "【料事如神】触发后，" + app.roleLinkArray["1202"] + "将于下一夜开始时脱离游戏，在当夜有遗言，计入当夜死伤人数。当夜该玩家ID对应的角色为" + app.roleLinkArray["1203"] + "，" + app.roleLinkArray["1203"] + "若当夜受到伤害，则其对死伤数的影响及遗言另计。"}
        ],
        alias: [
            {content: "" + app.roleLinkArray["2004"] + "（三国版杀单挑-标准）"}
        ]
    }, {
    	id: "1005",
    	name: "荀彧",
    	group: "10",
    	basic: "军师。" + app.roleLinkArray["1004"] + "的继承者。自动得知魏国君主。每夜1个ID指认魏国人，若该ID为魏国人，可得知对方角色。每夜指认1个ID，得知该角色除“智者”“异人”外的随机一项评价，若其具有“智者”或“异人”评价，则额外地随机获知其中一项。每夜1个ID指认" + app.roleLinkArray["1112"] + "，不能得到反馈。",
        skills: [
        	{name: "留侯再世", content: "（1）被动技能。当荀彧存活，若本国君主被军师负面技能作用时触发，为其抵御一次。（军师增益技能）<br/>（2）主动技能，当荀彧死亡退出游戏且未触发效果（1）时，天庭通知魏国君主获得此技能。指定一个ID，若其次日得票数最多则投票无效。若第一次使用该技能未能触发效果，则可以再使用一次。若获得该技能的君主为非最后一命角色，则可以被继承。（投票技能）"},
        	{name: "奇计百出", content: "被动技能。当指认出的“智者”达到二人时触发，可以随机学到其中一人（不包括该角色转世前或转世后的角色）的一项非针对具体角色的主动技能，包括该角色能够继承的上一角色的技能。（【料敌机先】、【武侯八阵】、【连环妙计】除外）。（军师增益技能 结算时生效）"},
        	{name: "驱虎吞狼", content: "主动技能。指定一个国籍，并指定1个ID，若当夜该国杀手提交了刺杀行动，则刺杀ID被强制修改为【驱虎吞狼】使用者指定的ID，若该ID与该杀手不是同一国人，则刺杀可以发动，若为一国人，或者该国当夜没有提交刺杀行动，则【驱虎吞狼】消耗且无法起到效果。该国杀手不能得到ID被修改的反馈。（军师增益技能 结算时生效）"},
        	{name: "严阵以待", content: "被动技能。当成功指认出" + app.roleLinkArray["1112"] + "时触发，令其受伤。（指认技能）"},
        ],
        attr: "智者、仁者、雅士、能吏",
        faq: [
        	{content: "荀彧指认魏国人，若被" + app.roleLinkArray["1305"] + "【妖言惑众】或" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "【虚虚实实】作用，指认对则无反馈，错误则随机反馈为某一魏国角色。其他角色的此类型指认同理。"},
        	{content: "荀彧【驱虎吞狼】、军师命令杀手刺杀、" + app.roleLinkArray["1316"] + "【天纵奇才】若作用于同一杀手，刺杀最终目标ID以【驱虎吞狼】所定目标ID为准，结算级别为：【驱虎吞狼】>军师命令>【天纵奇才】。 "},
        	{content: "荀彧【驱虎吞狼】当夜若该国杀手未出刀或该国杀手全部退出游戏，【驱虎吞狼】发动成功但作用无效。若杀手出刀被禁魔，则照常结算，只是刺杀ID进行改变。"},
        	{content: "当" + app.roleLinkArray["1112"] + "/" + app.roleLinkArray["1113"] + "发动【探阵斩将】，" + app.roleLinkArray["1210"] + "触发【老当益壮】，或者杀手受到" + app.roleLinkArray["1205"] + "【秣马厉兵】等作用时，当夜可以发动两次刺杀，此时【驱虎吞狼】仅可改变该杀手提交的所有刺杀ID中的第一个。若此ID被修改为与该杀手刺杀的其他ID相同，则视为对该ID刺杀了两次。 "},
        	{content: "若【驱虎吞狼】的作用国家的杀手当夜国籍被改变，则【驱虎吞狼】发动成功但无作用。若其他国家的杀手国籍被改变到目标国家，则结算时按照只改变一刀的目标ID为原则，优先改变目标国家本身杀手的刺杀ID。若因任何原因，如该国杀手当夜未出刀，或全部退出游戏等，导致该国自身的杀手没有刺杀，则改变被改变国籍的杀手的刺杀ID。"},
        	{content: "荀彧触发【奇计百出】时，若之前指认的两个智者没有可以学习的主动技能，反馈【奇计百出】触发并消耗，荀彧没有学到技能。"}
        ],
        alias: []
    }, {
    	id: "1006",
    	name: "荀攸",
    	group: "10",
    	basic: "军师。" + app.roleLinkArray["1004"] + "的继承者。自动得知魏国君主。每夜1个ID指认" + app.roleLinkArray["1017"] + "/" + app.roleLinkArray["1018"] + "、" + app.roleLinkArray["1019"] + "/" + app.roleLinkArray["1020"] + "。每夜指认1个ID，随机获得其一项评价。每夜1个ID指认" + app.roleLinkArray["1301"] + "，不能得到反馈。",
        skills: [
        	{name: "曹魏谋主", content: "被动技能。荀攸存活时，若当夜与荀攸互识的角色受到其他国家的技能作用时，可根据不同身份为其抵御。<br/>（1）若本国君主当夜被技能作用且需要概率判定时，自动达成较好的结果。若此判定没有结果优劣之分则不触发。当" + app.roleLinkArray["1204"] + "【火烧赤壁】触发时也可触发此技能，魏国君主可选择当夜哪个ID死亡（仍然不能选择自己，若选择的ID非魏国角色，则【曹魏谋主】消耗但无效）。（军师增益技能）<br/>（2）若本国军师当夜受到武将杀伤技能作用，为其抵御一次。若为刺杀，则该次刺杀一半概率失效。（武将保护技能）<br/>（3）若本国杀手当夜受到造成伤害的军师负面技能作用，为其抵御一次。（军师增益技能）<br/>（4）若本国护卫、女眷或平民当夜受到不造成伤害的军师负面技能作用，为其抵御一次。（军师增益技能）<br/>（5）若当夜同时受到多个技能的作用，抵御顺序默认为君主>军师>杀手>护卫=女眷=平民<br/>（6）若当夜有多名角色受到技能作用，则荀攸可以得知，并选择是否触发两次【曹魏谋主】（不可为同一角色触发两次），该部分为非锁定技。若荀攸选择触发，则【经达权变】失效不可再用。若【经达权变】已经消耗，则【曹魏谋主】无法触发两次。若发动【经达权变】当夜多名角色满足【曹魏谋主】的触发条件，亦不能触发两次。"},
        	{name: "经达权变", content: "主动技能。指定两个ID，若其非同国，则发动当夜，这两个ID只能受到自己或对方的指认和技能作用。其对其他角色所有的指认和主动技能均失败，其他角色对这两个ID的指认和发动的主动技能也失败。若技能指定了包括这两个ID在内的多个角色，则技能发动成功，但对这两个ID无效。同理，当此两个ID发动了针对包括自己在内的多个目标的技能，则此技能发动成功，但是对其他角色无效。其他角色释放的状态技能对这两个ID无效，这两个ID释放的状态技能对其他角色无效。（军师增益技能 结算前生效）"},
        	{name: "围城焚粮", content: "主动技能。指定1个ID，对其进行一次刺杀。若此ID在当夜受到其他任何以其作为目标的主动技能作用，则此刺杀无效。（武将杀伤技能 结算时生效）"},
        	{name: "水淹下邳", content: "被动技能。当成功指认出" + app.roleLinkArray["1301"] + "时触发，令其当夜行动失效。（指认技能）"},
        ],
        attr: "智者、雅士",
        faq: [
        	{content: "荀攸【围城焚粮】中“以其作为目标的主动技能”指的是行动提交时指定ID的主动技能。例如" + app.roleLinkArray["1014"] + "【威震逍遥津】就不属于指定目标的主动技能。例如" + app.roleLinkArray["1305"] + "【蛮烟迷雾】指定了某个角色，若荀攸【围城焚粮】指定了与其同国的角色，则可以生效，若直接指定了该角色，则不能生效。其他情况以此类推。"}
        ],
        alias: []
    }, {
    	id: "1007",
    	name: "贾诩",
    	group: "10",
    	basic: "军师。每夜2个ID指认魏国君主、" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1014"] + "/" + app.roleLinkArray["1015"] + "、" + app.roleLinkArray["1103"] + "，指认" + app.roleLinkArray["1103"] + "不能得到反馈。每夜1个ID指认统帅或猛将，优先获知统帅。第三夜结算时自然死亡。死亡后以" + app.roleLinkArray["1008"] + "的角色继续游戏。",
        skills: [
        	{name: "计赚徐庶", content: "被动技能。当成功认出" + app.roleLinkArray["1103"] + "时触发，令" + app.roleLinkArray["1103"] + "脱离游戏。当夜魏国角色获得以下状态：别国对魏国角色的武将杀伤技能与不造成伤害的军师负面技能成功率减半，不影响刺杀（包括非杀手刺杀）。只可以被" + app.roleLinkArray["1008"] + "继承。（指认技能）"},
        	{name: "虚虚实实", content: "主动技能。指定1个ID，使其当夜行动中的指认反馈结果错误。但依赖于指认而生效的被动技能不受影响。可以被继承。（军师负面技能 结算时生效）"},
        	{name: "韬光养晦", content: "被动技能。当贾诩第一次得票最多时触发，魏国人对贾诩的投票自动转嫁到得票第二多的角色身上，若得票第二多角色有多个，则转嫁到其中随机一个上。不可被继承。（投票技能）"},
        	{name: "料敌机先", content: "主动技能。白天使用，入夜生效。当晚贾诩/" + app.roleLinkArray["1008"] + "不能做任何其他行动。可以在结算前得知当夜别国提交的包含魏国ID、角色、身份、国籍的所有行动（他国指定行动给天庭时，天庭即时把所有情况转告贾诩/" + app.roleLinkArray["1008"] + "，并把每人受到的行动情况分别转告给本人。转告的内容：某角色指认某角色为某角色/评价，某角色对某角色发动什么技能，" + app.roleLinkArray["1301"] + "刺杀什么角色，" + app.roleLinkArray["1301"] + "【濮阳设伏】、" + app.roleLinkArray["1109"] + "【智算汉中】等技能以及针对魏国的全局技能）。不可获知别国军师改刀信息。除使用者外，其他所有本国角色额外延长一个小时时间可以更改行动。只可以被" + app.roleLinkArray["1008"] + "继承。（无属性技能）"},
        ],
        attr: "智者、能吏",
        faq: [
        	{content: "【料敌机先】当夜若" + app.roleLinkArray["1204"] + "反间魏国人，首先料敌即时收到所有直接针对魏国角色的确定行动，" + app.roleLinkArray["1204"] + "于行动截止时获得反间对象的确定行动（若其未交确定行动则无法获得任何行动），有15分钟的时间修改自己和与自己互识角色的行动，若有满足料敌条件的行动，随后料敌即时获得。 "}
        ],
        alias: []
    }, {
    	id: "1008",
    	name: "司马懿",
    	group: "10",
    	basic: "军师。" + app.roleLinkArray["1007"] + "的继承者。每夜2个ID指认魏国君主、" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1014"] + "/" + app.roleLinkArray["1015"] + "。每夜指认1个ID为统帅。每夜1个ID指认" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1107"] + "，不能得到反馈。死亡后以" + app.roleLinkArray["1009"] + "的角色继续游戏。",
        skills: [
        	{name: "五丈屯兵", content: "被动技能。当成功指认出" + app.roleLinkArray["1107"] + "时触发，" + app.roleLinkArray["1107"] + "的下一次【七星续命】反馈固定变为F，若【七星续命】已经失效，则" + app.roleLinkArray["1107"] + "下一夜的行动失效。不可被继承。（指认技能）"},
        	{name: "兵不厌诈", content: "主动技能，指定1个ID，令其当夜所有行动失败，失败的技能视作已经消耗。不可被继承。（军师负面技能 结算前生效）"},
        	{name: "以逸待劳", content: "主动技能。指定1个ID，令其受伤。可以被继承。（军师负面技能 结算时生效）"},
        ],
        attr: "智者、统帅、能吏",
        faq: [],
        alias: []
    }, {
    	id: "1009",
    	name: "钟会",
    	group: "10",
    	basic: "军师。" + app.roleLinkArray["1008"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1016"] + "。",
        skills: [
        	{name: "铜墙铁壁", content: "主动技能。指定1个ID，如果该ID不是君主，则当夜可为其抵御一次武将杀伤技能或军师负面技能。（武将保护技能 结算时生效）"},
        	{name: "谗言构陷", content: "主动技能。指定1个ID，如果该ID不是君主，则其当夜所有行动发动失败。（军师负面技能 结算前生效）"},
        ],
        attr: "智者、统帅、雅士",
        faq: [],
        alias: []
    }, {
    	id: "1010",
    	name: "夏侯惇",
    	group: "10",
    	basic: "杀手。开局知道" + app.roleLinkArray["1012"] + "、" + app.roleLinkArray["1014"] + "。每夜1个ID指认魏国君主、" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "/" + app.roleLinkArray["1009"] + "。第四夜开始，每夜1个ID指认" + app.roleLinkArray["1017"] + "/" + app.roleLinkArray["1018"] + "。死亡后以" + app.roleLinkArray["1011"] + "的角色继续游戏。",
        skills: [
        	{name: "拔矢啖睛", content: "被动技能。当第一次被刺杀时触发，不会死亡只会受伤，但从此失去指认能力。不可被继承。（武将保护技能）"},
        	{name: "曹氏宗亲", content: "被动技能。当成功指认出" + app.roleLinkArray["1001"] + "时触发，二人互相认识。可以被继承。（指认技能）"}
        ],
        attr: "猛将、能吏",
        faq: [
        	{content: "发身份时，魏国杀手需要在三个角色中选择两个登场，反馈天庭后，再由天庭随机抽取两位杀手的ID和扮演角色的对应关系。"}
        ],
        alias: []
    }, {
    	id: "1011",
    	name: "曹仁",
    	group: "10",
    	basic: "杀手。" + app.roleLinkArray["1010"] + "的继承者。每夜1个ID指认魏国君主、" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "/" + app.roleLinkArray["1009"] + "。第四夜开始，每夜1个ID指认" + app.roleLinkArray["1017"] + "/" + app.roleLinkArray["1018"] + "。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "，不能得到反馈。",
        skills: [
        	{name: "南郡破敌", content: "被动技能。当成功指认出" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "时触发，使其受伤。如果" + app.roleLinkArray["1204"] + "已被" + app.roleLinkArray["1104"] + "成功指认，则" + app.roleLinkArray["1204"] + "此次受伤不可痊愈，伤判一半概率死亡一半概率继续受伤，若伤判结果为继续受伤，" + app.roleLinkArray["1204"] + "下夜结算时脱离游戏。（指认技能）"},
        	{name: "八门金锁", content: "主动技能。效果等同于一次性的【武侯八阵】（见" + app.roleLinkArray["1104"] + "【武侯八阵】），受困者死亡、脱出、破阵后自动失效。（无属性技能 结算前生效）"},
        ],
        attr: "猛将、统帅",
        faq: [
        	{content: "【八门金锁】视为一次性【武侯八阵】，除了只能发动一次之外，所有处理方法（结算前生效、不可学习性等等）跟【武侯八阵】相同。"}
        ],
        alias: []
    }, {
    	id: "1012",
    	name: "夏侯渊",
    	group: "10",
    	basic: "杀手。开局知道" + app.roleLinkArray["1010"] + "、" + app.roleLinkArray["1014"] + "。每夜1个ID指认魏国君主，" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "。每夜1个ID指认" + app.roleLinkArray["1113"] + "，不能得到反馈。死亡后以" + app.roleLinkArray["1013"] + "的角色继续游戏。",
        skills: [
        	{name: "曹氏宗亲", content: "被动技能。当成功指认出" + app.roleLinkArray["1001"] + "时触发，二人互相认识。不可被继承。（指认技能）"},
        	{name: "三日五百", content: "主动技能。夏侯渊登场第三夜开始可以使用，发动当夜除魏国杀手正常刺杀外，夏侯渊可额外指定1个ID进行刺杀。不可被继承。（武将杀伤技能 结算时生效）"},
        	{name: "六日一千", content: "主动技能。夏侯渊登场第六夜开始可以使用，发动当夜除魏国杀手正常刺杀外，夏侯渊可额外指定1个ID进行刺杀。不可被继承。（武将杀伤技能 结算时生效）"},
        	{name: "虎步关右", content: "被动技能，当成功指认出" + app.roleLinkArray["1113"] + "时触发，使" + app.roleLinkArray["1113"] + "【威震西凉】技能消耗，若已经消耗，则使其当夜使用的主动技能失败。若与【威震西凉】同时发动，则【威震西凉】失效。不可被继承。（指认技能）"},
        ],
        attr: "猛将、统帅",
        faq: [
        	{content: "发身份时，魏国杀手需要在三个角色中选择两个登场，反馈天庭后，再由天庭随机抽取两位杀手的ID和扮演角色的对应关系。"},
        	{content: "夏侯渊【三日五百】和【六日一千】是主动技能，不能和夏侯渊自己的刺杀同时使用。但是当夏侯渊受到" + app.roleLinkArray["1313"] + "【其疾如风】等技能影响可以多次行动时，【三日五百】、【六日一千】可以和刺杀同时发动，也可以同时发动这两个技能。 "}
        ],
        alias: []
    }, {
    	id: "1013",
    	name: "张郃",
    	group: "10",
    	basic: "杀手。" + app.roleLinkArray["1012"] + "的继承者。每夜1个ID指认魏国君主，" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "。",
        skills: [
        	{name: "强袭街亭", content: "主动技能。当夜蜀国主军师若不是" + app.roleLinkArray["1107"] + "，则当夜蜀国所有军师、杀手获得状态：行动成功率减半，不影响杀手刺杀及依赖于刺杀发动的技能。（军师增益技能 结算前生效）"},
        	{name: "善阵识变", content: "主动技能。与刺杀同时使用，被刺杀的ID当夜的所有行动一半概率发动失败。（军师增益技能 结算前生效）"},
        	{name: "江陵破吴", content: "主动技能。指定1个ID，若该ID为吴国人，则该ID当夜行动指向的所有ID均随机改变，转移向除魏国人外的其他人。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、义士、能吏",
        faq: [
        	{content: "若张郃使用【善阵识变】当夜被军师改刀，【善阵识变】仍然有效，只是作用ID转到军师命令的刺杀目标ID。"}
        ],
        alias: []
    }, {
    	id: "1014",
    	name: "张辽",
    	group: "10",
    	basic: "杀手。开局知道" + app.roleLinkArray["1010"] + "、" + app.roleLinkArray["1012"] + "。每夜1个ID指认魏国君主，" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "。每夜1个ID指认" + app.roleLinkArray["1209"] + "，不能得到反馈。死亡后选择以" + app.roleLinkArray["1015"] + "或" + app.roleLinkArray["1016"] + "的角色继续游戏。",
        skills: [
        	{name: "英雄相惜", content: "被动技能，触发次数不限。当张辽/" + app.roleLinkArray["1015"] + "刺杀到" + app.roleLinkArray["1110"] + "时触发，张辽/" + app.roleLinkArray["1015"] + "刺杀无效且单方面知道" + app.roleLinkArray["1110"] + "。此后张辽/" + app.roleLinkArray["1015"] + "存活时，魏国杀手刺杀" + app.roleLinkArray["1110"] + "概率减半。只可以被" + app.roleLinkArray["1015"] + "继承。（指认技能）"},
        	{name: "威震逍遥津", content: "主动技能。当夜吴国所有角色获得状态：所有行动成功率减半。不可被继承。当夜公告“张文远威震逍遥津”。（全局技能 公告）"},
        	{name: "乱箭齐发", content: "被动技能。当成功指认出" + app.roleLinkArray["1209"] + "时触发，令其脱离游戏。不可被继承。（指认技能）"},
        ],
        attr: "猛将、统帅、义士",
        faq: [
        	{content: "发身份时，魏国杀手需要在三个角色中选择两个登场，反馈天庭后，再由天庭随机抽取两位杀手的ID和扮演角色的对应关系。"}
        ],
        alias: []
    }, {
    	id: "1015",
    	name: "徐晃",
    	group: "10",
    	basic: "杀手。" + app.roleLinkArray["1014"] + "的继承者。每夜1个ID指认魏国君主，" + app.roleLinkArray["1008"] + "/" + app.roleLinkArray["1009"] + "。",
        skills: [
        	{name: "坚壁清野", content: "被动技能。当魏国军师被武将杀伤技能作用时触发，为其抵御一次。（武将保护技能）"},
        	{name: "亚夫之风", content: "被动技能。当被军师负面技能作用时触发，可抵御一次。（军师增益技能）"},
        	{name: "截烧粮草", content: "主动技能。指定1个ID，使其当夜使用的武将杀伤技能发动失败。若为杀手，则刺杀成功率减半。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、统帅、能吏",
        faq: [],
        alias: []
    }, {
    	id: "1016",
    	name: "邓艾",
    	group: "10",
    	basic: "杀手。" + app.roleLinkArray["1014"] + "的继承者。每夜1个ID指认魏国君主，" + app.roleLinkArray["1009"] + "、" + app.roleLinkArray["1017"] + "/" + app.roleLinkArray["1018"] + "。每夜1个ID指认" + app.roleLinkArray["1102"] + "、" + app.roleLinkArray["1105"] + "，不能得到反馈。不可以重复指认" + app.roleLinkArray["1102"] + "。",
        skills: [
        	{name: "祁山斗阵", content: "被动技能。当成功指认出" + app.roleLinkArray["1105"] + "时触发，当夜蜀国所有角色获得状态：所有行动成功率减半，但不影响杀手刺杀及依赖于刺杀发动的技能。当夜公告“邓士载祁山斗阵”。（全局技能 公告）"},
        	{name: "汉祚终焉", content: "被动技能。当蜀国军师选择" + app.roleLinkArray["1106"] + "线后生效。当成功指认出" + app.roleLinkArray["1102"] + "，当夜结算时" + app.roleLinkArray["1009"] + "状态正常的情况下，若" + app.roleLinkArray["1107"] + "在场则有一半概率触发，若" + app.roleLinkArray["1107"] + "不在场则必然触发，次夜蜀国所有角色获得状态：所有行动成功率减半。当夜公告“邓钟二士灭汉祚”。（全局技能 公告）"},
        	{name: "长驱直入", content: "主动技能。与刺杀同时使用，当夜刺杀可以指定角色名字代替指定ID（指定角色时，必须说出正确的当前存在角色）。若指定角色的同时正确说出其玩家ID，则此次刺杀可以使除" + app.roleLinkArray["1301"] + "【天下无双】外的一切武将保护技能的保护作用失效，但若该保护技能有其余作用，则刺杀者仍需受到相应技能的其余作用。（武将杀伤技能 结算时生效）"},
        ],
        attr: "智者、猛将、统帅",
        faq: [
        	{content: "若邓艾使用【长驱直入】的同时被军师改刀，由于【长驱直入】作用对象为角色，军师改刀只能修改猜测ID，【长驱直入】作用对象仍为原角色。若ID和角色不对应，则【长驱直入】没有破防效果。被" + app.roleLinkArray["1005"] + "【驱虎吞狼】、" + app.roleLinkArray["1316"] + "【天纵奇才】作用同理。"},
        	{content: "凡是涉及全局的指认，优先判定是否触发，若不满足触发条件，再结算其他行动，此后该夜该全局不会触发。例如：邓艾某夜指认A，" + app.roleLinkArray["1108"] + "【连环妙计】" + app.roleLinkArray["1105"] + "和A，则【连环妙计】成功，而【祁山斗阵】不会触发。同理，若连环之前已经在A与" + app.roleLinkArray["1105"] + "身上，则【祁山斗阵】会触发。"}
        ],
        alias: []
    }, {
    	id: "1017",
    	name: "典韦",
    	group: "10",
    	basic: "护卫。每夜2个ID指认魏国君主、" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1004"] + "、" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1016"] + "。每夜指认1个ID为猛将。死亡后以" + app.roleLinkArray["1018"] + "的角色继续游戏。",
        skills: [
        	{name: "挺身护驾", content: "被动技能，非锁定技。当夜本国君主受到武将杀伤性技能攻击，经过结算和判定之后仍然要承受伤害，天庭将通知“君主受到攻击”，此时可选择触发，为君主抵御一次最大伤害的攻击，但自己受伤。可以被继承。（武将保护技能）"},
        	{name: "宛城血战", content: "主动技能。指定1个ID，若当夜该ID受到刺杀（包括非杀手刺杀），则该刺杀者和典韦一起受伤，该ID免受该次刺杀的影响。可以被继承。（武将保护技能 结算时生效）"},
        	{name: "古之恶来", content: "被动技能。触发次数不限。典韦受伤时触发，当夜受伤时也能行动，不可被继承。（军师增益技能）"},
        ],
        attr: "猛将、义士",
        faq: [
        	{content: "典韦被修改国籍的情形下，若该国君主受到攻击，也会根据【挺身护驾】的触发条件进行询问。"},
        	{content: "典韦【宛城血战】的目标若被多人刺杀，则由典韦提交数字拼点判定何人的刺杀被挡且受到反伤。"} 
        ],
        alias: []
    }, {
    	id: "1018",
    	name: "许褚",
    	group: "10",
    	basic: "护卫。" + app.roleLinkArray["1017"] + "的继承者。每夜1个ID指认魏国君主、" + app.roleLinkArray["1007"] + "/" + app.roleLinkArray["1008"] + "、" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "、" + app.roleLinkArray["1016"] + "、" + app.roleLinkArray["1113"] + "，指认" + app.roleLinkArray["1113"] + "不能得到反馈。每夜指认1个ID为猛将。",
        skills: [
        	{name: "裸战马超", content: "被动技能。当成功指认出" + app.roleLinkArray["1113"] + "时触发，令其受伤。（指认技能）"},
        	{name: "虎痴喋血", content: "主动技能。指定1个ID，对其发动一次刺杀，若对方有“猛将”评价，则对方不受影响，许褚自己受伤。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
    	id: "1019",
    	name: "蔡琰",
    	group: "10",
    	basic: "女眷。每夜2个ID指认" + app.roleLinkArray["1001"] + "、" + app.roleLinkArray["1004"] + "/" + app.roleLinkArray["1005"] + "/" + app.roleLinkArray["1006"] + "，指认出" + app.roleLinkArray["1001"] + "后相互认识。死亡后以" + app.roleLinkArray["1020"] + "的角色继续游戏。",
    	skills: [
    		{name: "胡笳十八拍", content: "主动技能。指定1个ID，若对方是魏国角色，则使对方知道自己。如果不是魏国角色，则对方不会得到任何信息。无论何种情况，自己都不能收到技能效果的反馈。不可被继承。（指认技能 结算时生效）"},
    		{name: "文姬归汉", content: "被动技能。抵御武将杀伤技能一次。不可被继承。（武将保护技能）"},
    		{name: "悲愤诗", content: "主动技能。对本国所有角色使用，使其当夜受到的杀伤性技能效果减轻，即本该致死的改为致伤，本该受伤（包括继续受伤状态）的改为无效。对整个当夜最后结果进行总结算，不可抵挡因为指认技能而造成的脱离游戏和受伤不可痊愈状态。不可被继承。（军师增益技能 结算后生效）"},
    	],
    	attr: "智者、仁者、文豪、雅士",
    	faq: [
    		{content: "悲愤诗不是以具体ID为目标的技能。"}
    	],
    	alias: []
    }, {
    	id: "1020",
    	name: "甄宓",
    	group: "10",
    	basic: "女眷。" + app.roleLinkArray["1019"] + "的继承者。自动得知" + app.roleLinkArray["1001"] + "。每夜2个ID指认" + app.roleLinkArray["1002"] + "/" + app.roleLinkArray["1003"] + "，指认出之后相互认识。",
        skills: [
        	{name: "巧言善辩", content: "主动技能。指定1个ID，令其次日投票时得票数减三票。（投票技能 结算时生效）"},
        	{name: "良苦谏言", content: "主动技能。指定1个ID，令其当夜进行的任何刺杀（包括非杀手刺杀）及依赖于刺杀发动的技能发动失败。（军师负面技能 结算前生效）"},
        ],
        attr: "智者、仁者、雅士",
        faq: [],
        alias: []
    }, {
		id: "1101",
	    name: "刘备",
	    group: "11",
	    basic: "君主。每夜3个ID指认" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "/" + app.roleLinkArray["1107"] + "、" + app.roleLinkArray["1110"] + "、" + app.roleLinkArray["1112"] + "。在得知" + app.roleLinkArray["1218"] + "登场后，每夜2个ID指认" + app.roleLinkArray["1218"] + "。死亡后以" + app.roleLinkArray["1102"] + "的角色继续游戏。",
	    skills: [
	    	{name: "桃园结义", content: "被动技能。当成功指认出" + app.roleLinkArray["1110"] + "、" + app.roleLinkArray["1112"] + "之一时触发，与他们两人相互认识。不可被继承。（指认技能）"},
	    	{name: "三顾茅庐", content: "被动技能。当成功指认出" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1107"] + "时触发，与" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1107"] + "互相认识。不可被继承。（指认技能）"},
	    	{name: "痛哭流涕", content: "被动技能。当第一次得票受伤时触发，使得该次投票致伤无效。不可被继承。（投票技能）"},
	    	{name: "马跃檀溪", content: "被动技能。当受到武将杀伤技能作用时触发，可抵御一次。不可被继承。（武将保护技能）"},
	    	{name: "乱世枭雄", content: "主动技能。指定1个ID，如果其不具有“猛将”评价，令其受伤。不可被继承。（武将杀伤技能 结算时生效）"},
	    	{name: "五虎封将", content: "主动技能。当" + app.roleLinkArray["1109"] + "已经消耗过【智算汉中】或" + app.roleLinkArray["1330"] + "/" + app.roleLinkArray["1331"] + "已经退出过游戏、且蜀国的杀手和护卫尚有2人以上（包括2人）存活时，则可以发动，否则该技能发动失败且不能再用。蜀国杀手和护卫的ID被军师知道。蜀国和蜀国角色当夜获得状态：别国所有针对蜀国和蜀国角色的行动成功率减半。当夜公告“汉中王五虎封将”。可以被继承。（全局技能 公告）"},
	    ],
	    attr: "统帅、义士、仁者",
	    faq: [],
	    alias: []
	}, {
		id: "1102",
	    name: "刘禅",
	    group: "11",
	    basic: "君主。" + app.roleLinkArray["1101"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1105"] + "、" + app.roleLinkArray["1113"] + "、" + app.roleLinkArray["1114"] + "，指认出之后互相认识。每夜1个ID指认" + app.roleLinkArray["1106"] + "。",
	    skills: [
	    	{name: "乐不思蜀", content: "主动技能。当夜所有刺杀刘禅的行动视为发动成功但无效。刘禅次日投票无效。（无属性技能 结算时生效）"},
	    ],
	    attr: "仁者",
	    faq: [],
	    alias: []
	}, {
		id: "1103",
	    name: "徐庶",
	    group: "11",
	    basic: "军师。第三夜结算时自然死亡。每夜2个ID指认" + app.roleLinkArray["1101"] + "、" + app.roleLinkArray["1114"] + "，1个ID指认" + app.roleLinkArray["1108"] + "。每夜指认1个ID为智者。死亡后选择以" + app.roleLinkArray["1104"] + "或" + app.roleLinkArray["1106"] + "的角色继续游戏。",
	    skills: [
	    	{name: "击剑长歌", content: "主动技能。指定1个ID，令其受伤。不可被继承。（军师负面技能 结算时生效）"},
	    	{name: "玄门破阵", content: "被动技能。当被军师负面技能作用时触发，可抵御一次。可以被继承。（军师增益技能）"},
	    	{name: "披发涂炭", content: "被动技能。若蜀国杀手或护卫被非本国人刺杀（包括非杀手刺杀）时触发，该刺杀者受伤，刺杀一半概率无效。不可被继承。（军师增益技能）"},
	    ],
	    attr: "智者、义士",
	    faq: [],
	    alias: []
	}, {
		id: "1104",
	    name: "卧龙",
	    group: "11",
	    basic: "军师。" + app.roleLinkArray["1103"] + "的继承者。继任三日后自然死亡。每夜1个ID指认" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "、" + app.roleLinkArray["1108"] + "/" + app.roleLinkArray["1109"] + "、" + app.roleLinkArray["1114"] + "/" + app.roleLinkArray["1115"] + "。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "。每夜1个ID指认" + app.roleLinkArray["1010"] + "/" + app.roleLinkArray["1011"] + "，不可重复指认，不能得到反馈。每夜指认1个ID为智者。死亡后以" + app.roleLinkArray["1105"] + "的角色继续游戏。",
	    skills: [
	    	{name: "力排众议", content: "主动技能。某夜发动，令次日全部投票无效。不可被继承。（投票技能 结算时生效）"},
	    	{name: "舌战群儒", content: "被动技能。当成功指认出" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "时触发，与" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "互识且吴蜀联盟达成，若已达成则期限增加一天。不可被继承。（指认技能 公告联盟）"},
	    	{name: "火烧博望", content: "被动技能。当成功指认出" + app.roleLinkArray["1010"] + "时触发，使其受伤。不可被继承。（指认技能）"},
	    	{name: "火烧新野", content: "被动技能。当成功指认出" + app.roleLinkArray["1011"] + "时触发，使其受伤。不可被继承。（指认技能）"},
	    	{name: "武侯八阵", content: "主动技能，可多次使用。可以被继承。指定1个ID，可将其困住，使其当夜行动全部发动失败；其当夜被作用的行动全部无效。如果判定结果为BCD，则次日投票无效。可以被继承。（无属性技能 结算前生效）<br/>使用此技能时，告诉天庭自己赋予1-8八个数字的五种含义（ABC各2、DE各1）。被困者在白天判定阶段向天庭指定1-8中的一个数字，根据卧龙/" + app.roleLinkArray["1105"] + "指定的数字的含义决定效果：A为脱出；B为继续被困；C为继续被困并且无法提交行动；D为死亡（死亡的同时，解除被八阵困住的状态，但死亡的结算在投票后生效）；E为破阵（八阵作废，同时被困者下一夜可以行动）。卧龙/" + app.roleLinkArray["1105"] + "的死亡不影响已经存在的八阵的效果。<br/>（1）八阵判定在每夜公告公布后和投票票面公布前的阶段进行，判定完成时通知卧龙/" + app.roleLinkArray["1105"] + "八卦阵的效果，被困者脱出或死亡后卧龙/" + app.roleLinkArray["1105"] + "可重新选择一人困住。若被困者当夜自然死亡，则视为脱阵，无须判定。<br/>（2）若被困者为" + app.roleLinkArray["1207"] + "，则DE的效果统一为D，BC的效果统一为C。<br/>（3）不能对按照规则认识的本国角色使用此技能。（自己不算）<br/>（4）若被困结果为BC，被困者无法自杀。<br/>（5）只要八阵存在，每一夜卧龙/" + app.roleLinkArray["1105"] + "都可以更换一次数字。"},
	    ],
	    attr: "智者、仁者、文豪、能吏",
	    faq: [],
	    alias: []
	}, {
		id: "1105",
	    name: "姜维",
	    group: "11",
	    basic: "军师。" + app.roleLinkArray["1104"] + "的继承者。自动与" + app.roleLinkArray["1115"] + "互相认识。每夜1个ID指认" + app.roleLinkArray["1102"] + "、" + app.roleLinkArray["1016"] + "。指认" + app.roleLinkArray["1016"] + "不能得到反馈。",
	    skills: [
	    	{name: "初生牛犊", content: "被动技能。当被武将杀伤技能作用时触发，可抵御一次，并使对方负伤。（武将保护技能）"},
	    	{name: "祁山斗阵", content: "被动技能。当成功指认出" + app.roleLinkArray["1016"] + "时触发，使其受伤。（指认技能）"},
	    ],
	    attr: "智者、猛将、统帅",
	    faq: [],
	    alias: []
	}, {
        id: "1106",
        name: "马良",
        group: "11",
        basic: "军师。" + app.roleLinkArray["1103"] + "的继承者，继任三日后自然死亡。每夜1个ID指认" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "、" + app.roleLinkArray["1114"] + "/" + app.roleLinkArray["1115"] + "、" + app.roleLinkArray["1117"] + "/" + app.roleLinkArray["1118"] + "。每夜指认1个ID为智者。死亡后以" + app.roleLinkArray["1107"] + "的角色继续游戏。",
        skills: [
            {name: "五溪归蜀", content: "主动技能。提交1个ID，马良/" + app.roleLinkArray["1107"] + "可选择当夜将该ID视为蜀国国籍或者平民身份，使其受一切可影响平民身份或蜀国国籍的技能影响（例如" + app.roleLinkArray["1108"] + "【运筹帷幄】、" + app.roleLinkArray["1113"] + "【威震西凉】等）。当将其修改为蜀国国籍时，不影响计算灭国人数、军师状态。当与" + app.roleLinkArray["1214"] + "【苦肉诈降】指定了同一人且均修改的是国籍时，则拼点决定谁有效，无效的一方可以下次重新发动。可以被继承。（军师增益技能 结算前生效）"},
            {name: "送图问计", content: "主动技能。" + app.roleLinkArray["1111"] + "登场后生效。提交1个ID，若该ID为吴国人，则该ID当夜所有行动发动失败。可以被继承。（军师负面技能 结算前生效）"},
            {name: "五常之最", content: "主动技能。指定1个ID，若该ID不是君主，则当夜为其抵御一次武将杀伤技能或军师负面技能作用。不可被继承。（武将保护技能 结算时生效）"},
        ],
        attr: "智者、雅士、能吏",
        faq: [],
        alias: []
    }, {
        id: "1107",
        name: "诸葛亮",
        group: "11",
        basic: "军师。" + app.roleLinkArray["1106"] + "的继承者。自动与" + app.roleLinkArray["1102"] + "互相认识。每夜1个ID指认" + app.roleLinkArray["1115"] + "。每夜1个ID指认" + app.roleLinkArray["1013"] + "，不能得到反馈。，每夜指认1个ID触发【七星续命】。",
        skills: [
            {name: "木门设伏", content: "被动技能。当成功指认出" + app.roleLinkArray["1013"] + "时触发，使其受伤。（指认技能）"},
            {name: "空城绝唱", content: "被动技能。当第一次得票最多时触发，所得票数全部转移给当日得票数最高的非蜀国人。若有数个非蜀国人得票一样多，则转移给其中随机一个。（投票技能）"},
            {name: "出师表", content: "主动技能。提交1个ID，若其当夜发动主动技能，则此技能被【出师表】使用者学到，以后可以由【出师表】使用者使用一次（不包括【连环妙计】、【武侯八阵】、【料敌机先】）；若其当夜发动刺杀，则【出师表】使用者将拥有一次发动刺杀的机会；若其既发动技能又发动刺杀，则【出师表】使用者学会一次刺杀；若其发动多个主动技能，则【出师表】使用者随机学会其中一个；若其未发动主动技能或刺杀，则【出师表】可以再次使用。该ID发动技能失败或刺杀发动失败不影响【出师表】的学习。（军师增益技能 结算时生效）"},
            {name: "七星续命", content: "被动技能，触发次数不限。诸葛亮每夜指认1个ID，提交一种保护需求（包括甲：抵御一次刺杀；乙：抵御一次对该ID的军师负面技能；丙：当夜对该ID的所有指认无效），并由诸葛亮指定的ID提交一个1-7的数字，天庭预先将1-7的数字分别赋予ABCDE五种含义。其中A3个，BCDE各1个，" + app.roleLinkArray["1115"] + "登场后，E变成F。各字母的含义是：A对该ID的保护需求生效；B对该ID的保护需求生效但生效ID改变为诸葛亮；C对该ID的保护需求生效但改变为随机保护一名诸葛亮已认识的蜀国角色；D对该ID保护成功但保护需求随机更改为甲乙丙三项中一向；E无任何效果；F为七星坠落，不可再用。（无属性技能） "},
        ],
        attr: "智者、仁者、文豪、能吏",
        faq: [],
        alias: []
    }, {
        id: "1108",
        name: "庞统",
        group: "11",
        basic: "军师。每夜2个ID指认" + app.roleLinkArray["1110"] + "、" + app.roleLinkArray["1112"] + "，1个ID指认" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1104"] + "。每夜指认1个ID为能吏。死亡后以" + app.roleLinkArray["1109"] + "的角色继续游戏。",
        skills: [
            {name: "连环妙计", content: "主动技能。指定两个ID，此后针对其中任一人以ID为目标的行动均对两人同时生效。如果AB连环，可以选择C，使之与A或B相连，但相应地，B或A解开连环，此时连环变成AC或BC，每次改变连环都无法使用其他技能。正在受到连环影响的两人都死亡或使用者自行取消连环后，此技能无法再使用。可以被继承。（军师增益技能 结算前生效）<br/>（1） 连环只影响直接针对ID的行动，针对国籍/身份/角色的行动不受影响。<br/>（2） 定义假连环状态：当连环一头因为某种原因死亡或退出游戏而连环另一端不受影响时，视为连环一端处于假连环（自杀不造成假连环）。直到假连环一端被更改，否则连环无法相互影响对方。当两端都处于假连环状态时，连环断开不可再用。<br/>（3） 若庞统/" + app.roleLinkArray["1109"] + "死亡退出游戏且此时连环未断，则连环被取消，之后若庞统/" + app.roleLinkArray["1109"] + "回到游戏，连环重置可以再用。<br/>（4） 若庞统/" + app.roleLinkArray["1109"] + "非死亡退出游戏，则此时记录当前连环的状态，并暂时取消连环。当庞统/" + app.roleLinkArray["1109"] + "回到游戏时，判断此时连环两头的ID相对于连环取消时的状态是否满足假连环条件。若两头均满足则连环断开，若至少有一头处于连环状态，则此技能重置并可以重新使用。<br/>（5） 当连环更改受到【武侯八阵】等技能的作用时，连环视作更改失败，庞统/" + app.roleLinkArray["1109"] + "将得到相关的反馈。"},
            {name: "运筹帷幄", content: "主动技能。命令本国任意角色针对任意ID一次指认，或者发动一次主动技能，不得命令杀手发动刺杀。被命令者将会在结算反馈时知道被命令了，当夜其自己进行的指认无效（或者选择使用的技能将视作发动失败）。但是命令不影响被命令者当夜的刺杀，即可以在刺杀的同时使用技能。被命令使用的技能算作已经使用。可以被继承。（军师增益技能 结算前生效）"},
        ],
        attr: "智者、雅士、能吏",
        faq: [],
        alias: []
    }, {
        id: "1109",
        name: "法正",
        group: "11",
        basic: "军师。" + app.roleLinkArray["1108"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1104"] + "、" + app.roleLinkArray["1111"] + "，指认出" + app.roleLinkArray["1111"] + "后相互认识。每夜1个ID指认" + app.roleLinkArray["1012"] + "，不能得到反馈。每夜指认1个ID为能吏。",
        skills: [
            {name: "盖棺论定", content: "主动技能，白天使用。可以从法官处得知所有已经退出游戏的玩家的身份（主公、军师、杀手、护卫、女眷、平民）。（指认技能）"},
            {name: "智算汉中", content: "主动技能。当夜魏国所有杀手、护卫获得状态：其行动成功率减半，不影响杀手刺杀及依赖于刺杀发动的技能。（军师增益技能 结算前生效）"},
            {name: "睚眦必报", content: "被动技能。当蜀国选择了" + app.roleLinkArray["1106"] + "继承" + app.roleLinkArray["1103"] + "后才生效。当法正受到刺杀时触发，该次刺杀失效，且该刺杀者下一夜将不能出刀，该刺杀者不知道自己下夜不能出刀。（武将保护技能）"},
            {name: "步步为营", content: "被动技能。" + app.roleLinkArray["1111"] + "登场后且死亡退出游戏前，成功指认出" + app.roleLinkArray["1012"] + "时触发，令" + app.roleLinkArray["1012"] + "脱离游戏。" + app.roleLinkArray["1111"] + "死亡退出游戏后，此技能失效。（指认技能）"},
        ],
        attr: "智者、统帅",
        faq: [],
        alias: []
    }, {
        id: "1110",
        name: "关羽",
        group: "11",
        basic: "杀手。开局知道" + app.roleLinkArray["1112"] + "。每夜1个ID指认蜀国君主、" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "，不能得到反馈，不可重复指认。死亡后以" + app.roleLinkArray["1111"] + "的角色继续游戏。",
        skills: [
            {name: "英雄相惜", content: "被动技能，触发次数不限。当关羽刺杀到" + app.roleLinkArray["1014"] + "/" + app.roleLinkArray["1015"] + "时触发，关羽刺杀无效并单方面知道" + app.roleLinkArray["1014"] + "/" + app.roleLinkArray["1015"] + "。此后关羽存活时，蜀国杀手刺杀" + app.roleLinkArray["1014"] + "/" + app.roleLinkArray["1015"] + "成功率减半。不可被继承。（指认技能）"},
            {name: "春秋大义", content: "被动技能，非锁定技。当被" + app.roleLinkArray["1206"] + "指认后，可以选择触发。触发后，魏吴联盟无法建立，" + app.roleLinkArray["1207"] + "的技能【火烧连营】失效。不可被继承。（无属性技能）"},
            {name: "过关斩将", content: "被动技能。当本国女眷受到刺杀时触发，可为其抵御一次，并有一半概率使刺杀者受伤。可以被继承。（武将保护技能）"},
            {name: "水淹七军", content: "主动技能，指定1个ID，令其当夜所有行动失败，失败的技能视作已经消耗。不可被继承。（军师负面技能 结算前生效）"},
            {name: "单刀赴会", content: "被动技能。当成功指认出" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "时触发，次夜吴国军师行动成功率减半。不可被继承。（指认技能）"},
        ],
        attr: "猛将、统帅、义士、仁者",
        faq: [],
        alias: []
    }, {
        id: "1111",
        name: "黄忠",
        group: "11",
        basic: "杀手。" + app.roleLinkArray["1110"] + "的继承者。每夜1个ID指认法正，指认出" + app.roleLinkArray["1109"] + "后互相认识。每夜1个ID指认" + app.roleLinkArray["1212"] + "，不能得到反馈。",
        skills: [
            {name: "力开两石", content: "主动技能。指定1个ID，令其受伤。（武将杀伤技能 结算时生效）"},
            {name: "蛮王助阵", content: "被动技能。当成功指认出" + app.roleLinkArray["1212"] + "时触发，令" + app.roleLinkArray["1212"] + "脱离游戏。（指认技能）"},
        ],
        attr: "猛将",
        faq: [],
        alias: []
    }, {
        id: "1112",
        name: "张飞",
        group: "11",
        basic: "杀手。开局知道" + app.roleLinkArray["1110"] + "。每夜1个ID指认" + app.roleLinkArray["1108"] + "。每夜1个ID指认" + app.roleLinkArray["1301"] + "，指认出之后" + app.roleLinkArray["1301"] + "每一次改变阵营张飞都将得知。每夜指认1个ID为猛将。死亡后以" + app.roleLinkArray["1113"] + "的角色继续游戏。",
        skills: [
            {name: "探阵斩将", content: "主动技能。与刺杀同时使用，可在某夜刺杀时额外刺杀一人。可以被继承。（武将杀伤技能 结算时生效）"},
            {name: "临桥虎吼", content: "主动技能。使当夜所有不属于蜀国的角色获得以下状态：其行动中针对蜀国ID的指认无效、依靠指认出蜀国ID而触发的被动技能（非全局技能）发动失败、技能描述中带有指认的技能若指认蜀国ID，该技能也失败。不可被继承。（军师增益技能 结算前生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
        id: "1113",
        name: "马超",
        group: "11",
        basic: "杀手，" + app.roleLinkArray["1112"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1102"] + "、" + app.roleLinkArray["1114"] + "。每夜1个ID指认" + app.roleLinkArray["1001"] + "，不能得到反馈。每夜指认1个ID为猛将。",
        skills: [
            {name: "复仇之焰", content: "被动技能。当成功指认出" + app.roleLinkArray["1001"] + "时触发，若" + app.roleLinkArray["1001"] + "的【割须弃袍】已经消耗，则令" + app.roleLinkArray["1001"] + "脱离游戏；若没有消耗，则" + app.roleLinkArray["1001"] + "以【割须弃袍】抵挡。（指认技能）"},
            {name: "威震西凉", content: "主动技能。对当夜所有不属于蜀国的平民角色使用，使其针对所有蜀国角色的所有行动发动失败。若此技能被抵御且抵御者当夜对蜀国发动的技能成功（无论是否生效），天庭将通知马超，此时选择对1个ID致伤，若抵御者和指定的致伤目标ID国籍相同，则致伤生效。若有多人抵挡分别计算，但仍只能选择1个ID致伤。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、统帅",
        faq: [],
        alias: []
    }, {
        id: "1114",
        name: "赵云",
        group: "11",
        basic: "护卫。每夜2个ID指认" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "、" + app.roleLinkArray["1113"] + "、" + app.roleLinkArray["1117"] + "。自动得知" + app.roleLinkArray["1102"] + "。每夜指认1个ID为义士。死亡后选择以" + app.roleLinkArray["1115"] + "或" + app.roleLinkArray["1116"] + "的角色继续游戏。",
        skills: [
            {name: "单枪救主", content: "主动技能。为本国君主抵御一次武将杀伤技能的作用。不可被继承。（武将保护技能 结算时生效）"},
            {name: "浑身是胆", content: "主动技能。指定1个ID，当夜为其抵御一次最大伤害。可以被继承。（武将保护技能 结算时生效）"},
            {name: "绝处逢生", content: "主动技能。不可被继承。只能在受伤状态下使用，指定1个ID，同时消耗【浑身是胆】，随后：<br/>（1）治愈赵云的受伤。（军师增益技能 结算时生效）<br/>（2）为该ID抵御一次最大伤害。（武将保护技能 结算时生效）<br/>（3）为该ID抵御一次军师负面技能。（军师增益技能 结算时生效）<br/>其中效果（2）与（3）只可触发一项，优先触发效果（2）。"},
        ],
        attr: "猛将、义士、仁者",
        faq: [],
        alias: []
    }, {
        id: "1115",
        name: "魏延",
        group: "11",
        basic: "护卫。" + app.roleLinkArray["1114"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "/" + app.roleLinkArray["1107"] + "。自动与" + app.roleLinkArray["1105"] + "互识。每夜1个ID指认" + app.roleLinkArray["1008"] + "，不能得到反馈。",
        skills: [
            {name: "踏营陷阵", content: "主动技能。指定1个ID，若其身份为杀手、护卫，可令其受伤。（武将杀伤技能 结算时生效）"},
            {name: "兵出子午谷", content: "被动技能。蜀国选择" + app.roleLinkArray["1104"] + "继承" + app.roleLinkArray["1103"] + "时才生效。当" + app.roleLinkArray["1103"] + "死后，成功指认出" + app.roleLinkArray["1008"] + "时触发，当夜魏国全体角色获得状态：其行动成功率减半，不影响杀手刺杀及依赖于刺杀发动的技能。当夜公告“魏文长兵出子午谷”。（全局技能 公告）"},
            {name: "火烧上方谷", content: "主动技能。蜀国选择" + app.roleLinkArray["1106"] + "继承" + app.roleLinkArray["1103"] + "时才生效。" + app.roleLinkArray["1107"] + "登场以后，魏延可以选择发动，当夜魏国军师获得状态：其行动发动失败，且杀手获得状态：刺杀成功率减半。当夜公告“诸葛亮火烧上方谷”。（全局技能 公告）"},
        ],
        attr: "猛将、统帅",
        faq: [],
        alias: []
    }, {
        id: "1116",
        name: "王平",
        group: "11",
        basic: "护卫。" + app.roleLinkArray["1114"] + "的继承者。每夜1个ID指认蜀国军师，指认出之后相互认识。每夜1个ID指认" + app.roleLinkArray["1015"] + "，不能得到反馈。每夜指认1个ID为义士。",
        skills: [
            {name: "无当飞军", content: "主动技能。指定1个ID，若" + app.roleLinkArray["1114"] + "的【浑身是胆】没有消耗，则当夜为该ID抵御一次最大伤害，同时令伤害来源受伤，且视为" + app.roleLinkArray["1114"] + "【浑身是胆】消耗。若" + app.roleLinkArray["1114"] + "【浑身是胆】已经消耗，则其当夜受到刺杀时有四分之一的概率抵御，或是受到致伤时有一半的概率抵御，优先抵御刺杀。（武将保护技能 结算时生效）"},
            {name: "忠勇严整", content: "主动技能，可使用两次。指定1个ID，当夜为其抵挡一次不造成伤害的军师负面技能。若抵挡成功，则王平次日投票无效。若该ID当夜未受到不造成伤害的军师负面技能作用则抵挡失败。若两次抵挡失败，则王平受伤。若此技能被学习，则只可使用一次。（军师增益技能 结算时生效）"},
            {name: "失据白水", content: "被动技能。成功指认出" + app.roleLinkArray["1015"] + "时触发，令" + app.roleLinkArray["1015"] + "【亚夫之风】消耗。若【亚夫之风】已经消耗，则当夜" + app.roleLinkArray["1015"] + "的所有行动失败。（指认技能）"},
        ],
        attr: "猛将、统帅",
        faq: [],
        alias: []
    }, {
        id: "1117",
        name: "糜夫人",
        group: "11",
        basic: "女眷。每夜2个ID指认" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "，指认出之后互相认识。每夜1个ID指认" + app.roleLinkArray["1114"] + "。死亡后以" + app.roleLinkArray["1118"] + "的角色继续游戏。",
        skills: [
            {name: "相夫教子", content: "主动技能。" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "当夜和次日获得概率优待，即需要概率判定时，自动达成对" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "有益的结果。不可被继承。（军师增益技能 结算前生效）"},
            {name: "深明大义", content: "被动技能。当与" + app.roleLinkArray["1114"] + "互识之后，可在某夜选择自杀时触发，如果" + app.roleLinkArray["1114"] + "当夜存活且状态正常，可以指定1个ID，使其受伤（视为武将杀伤技能）。" + app.roleLinkArray["1114"] + "该夜不得发动其他主动技能。当夜" + app.roleLinkArray["1118"] + "仍可发动自己的技能。不可被继承。（军师增益技能）"},
            {name: "视死如归", content: "主动技能。指定1个ID，令其当夜所有行动发动失败。可以被继承。（军师负面技能 结算前生效）。"},
        ],
        attr: "义士",
        faq: [],
        alias: []
    }, {
        id: "1118",
        name: "黄月英",
        group: "11",
        basic: "女眷。" + app.roleLinkArray["1117"] + "的继承者。每夜2个ID指认" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "/" + app.roleLinkArray["1107"] + "，指认出" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1107"] + "之后互相认识。",
        skills: [
            {name: "木牛流马", content: "主动技能。治愈一个受伤角色，可以在游戏的任何时刻选择使用（白天判定阶段除外，但若判定结果为继续受伤，则可以白天内立刻使用，不影响晚上黄月英使用技能）。（军师增益技能 即时生效）"},
            {name: "诸葛连弩", content: "主动技能。指定1个ID，该ID次夜发动的所有武将杀伤技能将具有三倍的效果。（军师增益技能 结算时生效）"},
        ],
        attr: "智者、能吏、异人",
        faq: [],
        alias: []
    }, {
        id: "1201",
        name: "孙坚",
        group: "12",
        basic: "君主。第二夜结算时自然死亡。每夜2个ID指认" + app.roleLinkArray["1204"] + "。每夜1个ID指认" + app.roleLinkArray["1214"] + "。死亡后以" + app.roleLinkArray["1202"] + "的角色继续游戏。",
        skills: [
            {name: "传国玉玺", content: "主动技能。指定1个ID，若对方是本国角色，则对方知道自己。如果不是本国角色，则对方不会得到任何信息。如果对方是他国君主，则此技能转移给对方。无论何种情况，自己都不能收到技能效果的反馈。孙坚死时若此技能未消耗，将传给" + app.roleLinkArray["1202"] + "，" + app.roleLinkArray["1202"] + "死后或孙坚/" + app.roleLinkArray["1202"] + "使用后自动转移给魏国君主，魏国君主也只能使用一次。若玉玺使用对象的ID是" + app.roleLinkArray["1330"] + "/" + app.roleLinkArray["1331"] + "，视为被【传国玉玺】使用国君主招揽。可以被继承。（指认技能 结算时生效）"},
            {name: "兵圣后裔", content: "被动技能。当受到军师负面技能作用时触发，可抵御一次。当" + app.roleLinkArray["1202"] + "与" + app.roleLinkArray["1209"] + "结义后，" + app.roleLinkArray["1014"] + "触发【乱箭齐发】时也可触发，使【乱箭齐发】程度减轻，" + app.roleLinkArray["1209"] + "只受伤。若此技能已消耗，" + app.roleLinkArray["1209"] + "仍脱离游戏。可以被继承。（军师增益技能）"},
            {name: "横扫江东", content: "主动技能。指定1个ID，使其受伤。只可以被" + app.roleLinkArray["1202"] + "继承。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、统帅",
        faq: [],
        alias: []
    }, {
        id: "1202",
        name: "孙策",
        group: "12",
        basic: "君主。" + app.roleLinkArray["1201"] + "的继承者。登场时可选择与" + app.roleLinkArray["1204"] + "或者与" + app.roleLinkArray["1209"] + "结义。若登场未及时做出选择，则默认与" + app.roleLinkArray["1204"] + "结义。<br/>若与" + app.roleLinkArray["1204"] + "结义，自动得知" + app.roleLinkArray["1204"] + "。每夜2个ID指认" + app.roleLinkArray["1209"] + "/" + app.roleLinkArray["1210"] + "/" + app.roleLinkArray["1211"] + "、" + app.roleLinkArray["1214"] + "/" + app.roleLinkArray["1215"] + "/" + app.roleLinkArray["1216"] + "。若" + app.roleLinkArray["1204"] + "已死，每夜1个ID指认" + app.roleLinkArray["1205"] + "、" + app.roleLinkArray["1218"] + "。<br/>若与" + app.roleLinkArray["1209"] + "结义，自动得知" + app.roleLinkArray["1209"] + "。每夜2个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "、" + app.roleLinkArray["1214"] + "/" + app.roleLinkArray["1215"] + "/" + app.roleLinkArray["1216"] + "。若" + app.roleLinkArray["1209"] + "已死，每夜1个ID指认" + app.roleLinkArray["1210"] + "/" + app.roleLinkArray["1211"] + "、" + app.roleLinkArray["1218"] + "。<br/>死亡后以" + app.roleLinkArray["1203"] + "的角色继续游戏。",
        skills: [
            {name: "霸王再世", content: "被动技能。当第一次被武将杀伤技能攻击时触发，一半概率抵御，一半概率与对方同时受伤。不可被继承。（武将保护技能）"},
            {name: "结纳豪俊", content: "主动技能。某夜使用后，次日投票时孙策多投一张暗票，该暗票不显示在票面公告中。可以被继承。（投票技能 结算时生效）"},
            {name: "群英荟萃", content: "主动技能，白天使用。孙策选择与" + app.roleLinkArray["1204"] + "结义才有效。得知在使用此技能之前，各国分别选择的是哪位分线人物。可以被继承。（指认技能 即时生效）"},
        ],
        attr: "猛将、统帅、义士",
        faq: [],
        alias: []
    }, {
        id: "1203",
        name: "孙权",
        group: "12",
        basic: "君主。" + app.roleLinkArray["1202"] + "的继任者。自动与" + app.roleLinkArray["1218"] + "互识。每夜1个ID指认" + app.roleLinkArray["1206"] + "/" + app.roleLinkArray["1207"] + "、" + app.roleLinkArray["1215"] + "/" + app.roleLinkArray["1216"] + "。每夜指认1个ID为能吏。",
        skills: [
            {name: "父兄之佑", content: "被动技能，当吴国角色需要概率判定时触发，可以提交两个数字，按照较好的结果达成。若孙权需要概率判定时，达成最优结果。优先优待孙权的概率判定。（军师增益技能）"},
        ],
        attr: "仁者、能吏",
        faq: [],
        alias: []
    }, {
        id: "1204",
        name: "周瑜",
        group: "12",
        basic: "军师。若" + app.roleLinkArray["1202"] + "选择与周瑜结义，则即时得知" + app.roleLinkArray["1202"] + "登场的消息。第四夜结算时自然死亡，死后所有指认信息转告君主。每夜2个ID指认" + app.roleLinkArray["1206"] + "/" + app.roleLinkArray["1207"] + "、" + app.roleLinkArray["1212"] + "。每夜2个ID指认" + app.roleLinkArray["1104"] + "、" + app.roleLinkArray["1108"] + "。每夜指认1个ID，得知其随机一项评价。死亡后以" + app.roleLinkArray["1205"] + "的角色继续游戏。",
        skills: [
            {name: "琴书雅韵", content: "被动技能。当受到军师负面技能作用时触发，可抵御一次。当" + app.roleLinkArray["1202"] + "与周瑜结义后、周瑜已和" + app.roleLinkArray["1217"] + "互相认识、且" + app.roleLinkArray["1001"] + "触发【铜雀春深】时也可触发，为" + app.roleLinkArray["1217"] + "抵御【铜雀春深】。如果此技能已消耗，则" + app.roleLinkArray["1217"] + "仍脱离游戏。不可被继承。（军师增益技能）"},
            {name: "诱以美色", content: "主动技能。指定1个ID，使其当夜一切行动发动失败，不影响杀手刺杀及依赖于刺杀发动的技能。可以被继承。（军师负面技能 结算前生效）"},
            {name: "雄才大略", content: "被动技能。当成功指认出" + app.roleLinkArray["1104"] + "、" + app.roleLinkArray["1108"] + "二者之一时触发，两人相互认识，且吴蜀联盟达成。不可被继承。（指认技能 公告联盟）"},
            {name: "火烧赤壁", content: "被动技能。当吴蜀联盟达成当夜，周瑜在场，且下一夜开始时，若吴蜀联盟存在，周瑜已经和" + app.roleLinkArray["1214"] + "互相认识、连环技能尚未失效且连环未有一头处于假连环状态，则触发，魏国君主指定数字，除君主之外，随机死亡一人，当夜魏国角色获得状态：其行动成功率减半。联盟达成下一夜周瑜是否在场不影响此技能的触发。触发当夜公告“周公瑾火烧赤壁”。不可被继承。（全局技能 公告）"},
            {name: "巧设反间", content: "主动技能。可以指定一个角色名称，在当夜行动截止时得知其当晚的行动动向。此时【巧设反间】使用者及与其互识的角色额外延长十五分钟时间可以更改行动。（天庭会反馈：某角色对某ID使用了什么技能、某角色刺杀某ID、某角色指认某ID为某角色等。）不可被继承。（无属性技能 结算前生效）"},
        ],
        attr: "智者、统帅、义士、雅士",
        faq: [],
        alias: []
    }, {
        id: "1205",
        name: "鲁肃",
        group: "12",
        basic: "军师，" + app.roleLinkArray["1204"] + "的继承者。登场自动得知" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "。每夜2个ID指认" + app.roleLinkArray["1212"] + "/" + app.roleLinkArray["1213"] + "，1个ID指认" + app.roleLinkArray["1217"] + "/" + app.roleLinkArray["1218"] + "。每夜指认1个ID为智者。",
        skills: [
            {name: "鼓舞士气", content: "主动技能。指定1个ID，当夜为其抵御一次军师负面技能或武将杀伤技能的作用，或治愈一次受伤，不能抵挡刺杀，优先治愈受伤。（军师增益技能 结算时生效）"},
            {name: "秣马厉兵", content: "主动技能。指定1个ID，令该ID次夜可以行动两次。该技能无法与" + app.roleLinkArray["1112"] + "【探阵斩将】、" + app.roleLinkArray["1210"] + "【老当益壮】叠加。（军师增益技能 结算时生效）"},
        ],
        attr: "智者、仁者、能吏",
        faq: [],
        alias: []
    }, {
        id: "1206",
        name: "吕蒙",
        group: "12",
        basic: "军师。每夜2个ID指认" + app.roleLinkArray["1204"] + "、" + app.roleLinkArray["1212"] + "。每夜1个ID指认" + app.roleLinkArray["1110"] + "，不能得到反馈。第三夜结算时自然死亡。每夜指认1个ID为统帅。死亡后以" + app.roleLinkArray["1207"] + "的角色继续游戏。",
        skills: [
            {name: "士别三日", content: "主动技能。指定任意阵营一个军师第一命角色名字，随机学到对方所有命数的一项未消耗的、非针对某具体角色的主动技能（不可学习【料敌机先】、【武侯八阵】、【连环妙计】）。学习到的技能无论本身描述如何，均可以被" + app.roleLinkArray["1207"] + "/" + app.roleLinkArray["1208"] + "继承。可以被继承。（无属性技能 结算时生效）"},
            {name: "白衣渡江", content: "被动技能。当成功指认出" + app.roleLinkArray["1110"] + "时触发，令" + app.roleLinkArray["1110"] + "脱离游戏，吴蜀联盟破裂。若" + app.roleLinkArray["1110"] + "未触发【春秋大义】，则魏吴联盟达成。继承给" + app.roleLinkArray["1207"] + "之后，" + app.roleLinkArray["1110"] + "的【春秋大义】失效。只可以被" + app.roleLinkArray["1207"] + "继承。（指认技能 公告联盟）"},
            {name: "勇贯三军", content: "主动技能。指定1个ID，若对方具有“猛将”评价，则一半概率受伤；若对方不具有“猛将”评价，则直接受伤。不可被继承。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、统帅",
        faq: [],
        alias: []
    }, {
        id: "1207",
        name: "陆逊",
        group: "12",
        basic: "军师。" + app.roleLinkArray["1206"] + "的继承者。自动得知" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "。每夜2个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "、" + app.roleLinkArray["1212"] + "。每夜1个ID指认" + app.roleLinkArray["1110"] + "，不能得到反馈。每夜指认1个ID为统帅。死亡后以" + app.roleLinkArray["1208"] + "的角色继续游戏。",
        skills: [
            {name: "火烧连营", content: "被动技能。当魏吴联盟达成当夜陆逊在场，且下一夜开始时，吴魏联盟存在，" + app.roleLinkArray["1110"] + "和" + app.roleLinkArray["1112"] + "均已死亡，则可触发，蜀国角色获得状态：其行动成功率减半。此时若" + app.roleLinkArray["1101"] + "在场，当夜" + app.roleLinkArray["1101"] + "受伤。联盟达成下一夜陆逊是否在场不影响此技能触发。触发当夜公告“陆伯言火烧连营”。不可被继承。（全局技能 公告）"},
            {name: "不耻下问", content: "主动技能。指定1个ID，若该ID为杀手或护卫，则当夜该ID若发动非来自于继承的技能，在发动的同时视为没有消耗。可以被继承。（军师增益技能 结算时生效）"},
            {name: "计赚曹休", content: "主动技能。" + app.roleLinkArray["1014"] + "发动过【威震逍遥津】后可以在某夜选择使用。指定1个ID，若该ID为魏国人，则令其受伤。可以被继承。（武将杀伤技能 结算时生效）"},
        ],
        attr: "智者、统帅",
        faq: [],
        alias: []
    }, {
        id: "1208",
        name: "陆抗",
        group: "12",
        basic: "军师。" + app.roleLinkArray["1207"] + "的继承者。每夜1个ID指认吴国人，若该ID为吴国人，得知该ID角色。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "，指认出后互相认识。",
        skills: [
            {name: "西陵克敌", content: "被动技能。当自己或认识的本国角色受到武将杀伤技能作用时触发，可抵御一次。若为刺杀，刺杀者一半概率受伤。（武将保护技能）"},
        ],
        attr: "统帅、雅士、能吏",
        faq: [],
        alias: []
    }, {
        id: "1209",
        name: "太史慈",
        group: "12",
        basic: "杀手。开局知道" + app.roleLinkArray["1212"] + "。若" + app.roleLinkArray["1202"] + "选择与太史慈结义，则即时得知" + app.roleLinkArray["1202"] + "登场的消息。每夜1个ID指认" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "。每夜指认1个ID为仁者。指认到的非本国角色若具有“仁者”评价则获得一枚“仁者”印记，从每个ID处最多获得一枚“仁者”印记。死亡后选择以" + app.roleLinkArray["1210"] + "或" + app.roleLinkArray["1211"] + "的角色继续游戏。",
        skills: [
            {name: "匹马冲阵", content: "主动技能。与刺杀同时使用，当夜刺杀将具有三倍的效果（用以抵消武将保护技能）。只可以被" + app.roleLinkArray["1210"] + "继承。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
        id: "1210",
        name: "丁奉",
        group: "12",
        basic: "杀手。" + app.roleLinkArray["1209"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "。每夜1个ID指认" + app.roleLinkArray["1014"] + ",不能得到反馈。",
        skills: [
            {name: "老当益壮", content: "被动技能。当丁奉登场满三日后触发，每夜可进行两次刺杀。（武将杀伤技能）"},
            {name: "箭无虚发", content: "被动技能。当成功指认出" + app.roleLinkArray["1014"] + "时触发，令其受伤，该伤不可痊愈，伤判一半概率死亡一半概率继续受伤，若伤判结果为继续受伤，则" + app.roleLinkArray["1014"] + "下夜开始时脱离游戏。（指认技能）"},
        ],
        attr: "智者、猛将、能吏",
        faq: [],
        alias: []
    }, {
        id: "1211",
        name: "蒋钦",
        group: "12",
        basic: "杀手。" + app.roleLinkArray["1209"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "、" + app.roleLinkArray["1215"] + "。每夜指认1个ID为仁者，指认到的非本国角色若具有“仁者”评价则获得一枚“仁者”印记，从每个ID处最多获得一枚“仁者”印记。",
        skills: [
            {name: "忘私举贤", content: "主动技能，可多次使用。消耗“仁者”印记并指定1个ID，使其当夜受到的最大杀伤性技能效果减轻（非最终结算），第一次使用消耗1枚“仁者”印记，之后每一次递增一枚。（军师增益技能 结算时生效）"},
            {name: "督领濡须", content: "主动技能。从游戏开始时累积，每当任何吴国角色成功使用一次【百骑劫营】后，技能效果发生相应改变：<br/>0次：指定1个ID，一半概率为其抵御一次武将杀伤技能。<br/>1次：指定1个ID，为其抵御一次武将杀伤技能。<br/>2次：指定两个ID，为他们抵御一次武将杀伤技能。<br/>3次：该技能视为【百骑劫营】。<br/>4次以上：可以选择该技能视为【百骑劫营】或者【悲愤诗】（使用【悲愤诗】视作军师增益技能）。<br/>（武将保护技能 结算时生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
        id: "1212",
        name: "甘宁",
        group: "12",
        basic: "杀手。开局知道" + app.roleLinkArray["1209"] + "。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "、" + app.roleLinkArray["1206"] + "/" + app.roleLinkArray["1207"] + "/" + app.roleLinkArray["1208"] + "。死亡后以" + app.roleLinkArray["1213"] + "的角色继续游戏。",
        skills: [
            {name: "百骑劫营", content: "主动技能。使用当夜，若自己或认识的本国角色遭到武将杀伤技能作用，则为其抵御一次伤害最大的攻击。可以被继承。（武将保护技能 结算时生效）"},
            {name: "乌林阻敌", content: "被动技能。甘宁知道" + app.roleLinkArray["1204"] + "后，" + app.roleLinkArray["1204"] + "触发【火烧赤壁】当夜触发，魏国扩大伤害，由魏国君主指定数字，随机多受伤一人。可以被继承。（武将杀伤技能）"},
            {name: "义释苏飞", content: "被动技能，触发次数不限。当甘宁/" + app.roleLinkArray["1213"] + "刺杀到同国或盟国角色时触发，该刺杀无效。可以被继承。（武将保护技能）"},
        ],
        attr: "猛将",
        faq: [
            {content: "使用【百骑劫营】当夜，多名【百骑劫营】使用者知道的本国角色受到同等程度伤害时，由【百骑劫营】使用者提交数字随机保护其中一个。"}
        ],
        alias: []
    }, {
        id: "1213",
        name: "凌统",
        group: "12",
        basic: "杀手。" + app.roleLinkArray["1212"] + "的继承者。自动得知" + app.roleLinkArray["1203"] + "。每夜1个ID指认" + app.roleLinkArray["1204"] + "/" + app.roleLinkArray["1205"] + "、" + app.roleLinkArray["1206"] + "/" + app.roleLinkArray["1207"] + "/" + app.roleLinkArray["1208"] + "。每夜指认1个ID为猛将。",
        skills: [
            {name: "断后突围", content: "主动技能。当夜对" + app.roleLinkArray["1203"] + "使用的伤害最高的武将杀伤技能无效。" + app.roleLinkArray["1203"] + "死亡退出游戏后，此技能可以对吴国君主生效。（武将保护技能 结算时生效）"},
            {name: "国士之风", content: "被动技能。当凌统退出游戏时，吴国存活游戏中的人数非三国最多时触发（存活人数与别国并列为最多时亦可触发），次日投票所有对吴国角色的投票无效。（投票技能）"},
        ],
        attr: "猛将、仁者",
        faq: [],
        alias: []
    }, {
        id: "1214",
        name: "黄盖",
        group: "12",
        basic: "护卫。每夜3个ID指认" + app.roleLinkArray["1204"] + "，指认出后互相认识。每夜1个ID指认" + app.roleLinkArray["1201"] + "/" + app.roleLinkArray["1202"] + "。死亡后选择以" + app.roleLinkArray["1215"] + "或" + app.roleLinkArray["1216"] + "的角色继续游戏。",
        skills: [
            {name: "义奉三朝", content: "主动技能。当夜吴国君主被武将杀伤技能作用，可以抵御伤害最高的一次。不可被继承。（武将保护技能 结算时生效）"},
            {name: "苦肉诈降", content: "主动技能。当黄盖认识" + app.roleLinkArray["1204"] + "后生效，且" + app.roleLinkArray["1204"] + "死亡后不可使用。指定本国1个ID，可更改当夜该ID的国籍。修改的国籍仅对指认、使用主动技能、触发被动技能有效果，而在结算灭国人数、判定是否有君主、军师存在时，仍按照原国籍结算。不可被继承。（军师增益技能 结算前生效）"},
            {name: "火船冲阵", content: "主动技能。指定1个ID，令该ID受伤。可以被继承。（军师负面技能 结算时生效）"},
        ],
        attr: "猛将、能吏",
        faq: [
            {content: "被【苦肉诈降】修改国籍的人不可使用" + app.roleLinkArray["1108"] + "【运筹帷幄】。"}
        ],
        alias: []
    }, {
        id: "1215",
        name: "周泰",
        group: "12",
        basic: "护卫。" + app.roleLinkArray["1214"] + "的继承者。自动得知" + app.roleLinkArray["1203"] + "。每夜1个ID指认" + app.roleLinkArray["1207"] + "/" + app.roleLinkArray["1208"] + "、" + app.roleLinkArray["1211"] + "。",
        skills: [
            {name: "舍身护主", content: "被动技能。非锁定技。当" + app.roleLinkArray["1203"] + "被武将杀伤技能作用，且概率判定无法躲避攻击时，可从天庭处得知，可以选择保护君主不受伤害，但自己受伤。" + app.roleLinkArray["1203"] + "退出游戏后，此技能可以对吴国君主生效。（武将保护技能）"},
            {name: "九死一生", content: "被动技能，触发次数不限。当受伤后可触发，伤判一半概率痊愈，一半概率继续受伤，若伤判结果为继续受伤，则下一次伤判为自动痊愈。（武将保护技能）"},
            {name: "浪里擒将", content: "主动技能。指定1个ID，令其当夜所有行动失败，失败的技能视作已经消耗。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
        id: "1216",
        name: "徐盛",
        group: "12",
        basic: "护卫。" + app.roleLinkArray["1214"] + "的继承者。每夜1个ID指认" + app.roleLinkArray["1203"] + "、" + app.roleLinkArray["1207"] + "/" + app.roleLinkArray["1208"] + "。",
        skills: [
            {name: "江东铁壁", content: "主动技能。指定1个ID，为其抵消一次伤害最大的武将杀伤技能伤害。（军师增益技能 结算时生效）"},
            {name: "疑城之计", content: "主动技能。指定1个ID，若其身份为君主，则当夜该国杀手发动的刺杀的效果减为受伤（并非最终结算）。如指定的ID当前角色为" + app.roleLinkArray["1305"] + "，则视为三国所有杀手均受此技能影响。（武将保护技能 结算时生效）"},
            {name: "濡须破敌", content: "主动技能。提交1个ID，对该ID所在国的护卫和女眷使用，使其当夜行动成功率减半。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、仁者、能吏",
        faq: [],
        alias: []
    }, {
        id: "1217",
        name: "小乔",
        group: "12",
        basic: "女眷。每夜3个ID指认" + app.roleLinkArray["1204"] + "，指认出之后相互认识。第五夜起，每夜1个ID指认" + app.roleLinkArray["1205"] + "。死亡后以" + app.roleLinkArray["1218"] + "的角色继续游戏。",
        skills: [
            {name: "倾国倾城", content: "主动技能。某夜使用后，次日投票时小乔多投一张暗票，不显示在票面公告中。不可被继承。（投票技能 结算时生效）"},
            {name: "秀色可餐", content: "被动技能。当受到武将杀伤技能作用时触发，可抵御一次。不可被继承。（武将保护技能）"},
            {name: "南国佳人", content: "被动技能，触发次数不限。当每次投票时可触发，自己所得票数减二票。不可被继承。（投票技能）"},
            {name: "国色天香", content: "主动技能。可猜测某ID现在扮演的角色具有某项非针对具体角色的技能（不论是是否消耗）。如果猜测正确，则该夜可由小乔使用该技能一次（不包括【料敌机先】、【武侯八阵】、【连环妙计】）。如果猜测错误，则【国色天香】发动失败，不可再用。不可被继承。（军师增益技能 结算时生效）"},
        ],
        attr: "仁者、雅士",
        faq: [],
        alias: []
    }, {
        id: "1218",
        name: "孙尚香",
        group: "12",
        basic: "女眷。" + app.roleLinkArray["1217"] + "的继承者。自动与" + app.roleLinkArray["1203"] + "互识。登场时由天庭告知" + app.roleLinkArray["1101"] + "自己已经登场，但" + app.roleLinkArray["1101"] + "只能靠指认进行确定。每夜2个ID指认" + app.roleLinkArray["1101"] + "、" + app.roleLinkArray["1202"] + "、" + app.roleLinkArray["1205"] + "。指认出" + app.roleLinkArray["1202"] + "之后相互认识。",
        skills: [
            {name: "政治联姻", content: "被动技能。当与" + app.roleLinkArray["1101"] + "成功相互指认出时触发，吴蜀联盟达成。若联盟已经达成，则延长两天期限。此技能触发后，自己受到蜀国杀手的刺杀失效。（指认技能 公告联盟）"},
            {name: "将门虎女", content: "主动技能。指定1个ID，若对方不具有“猛将”评价，则令其受伤，对君主无效。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、仁者",
        faq: [],
        alias: []
    }, {
        id: "1301",
        name: "吕布",
        group: "13",
        basic: "平民。在野时投票无效。死亡后以" + app.roleLinkArray["1302"] + "的角色继续游戏。",
        skills: [
            {name: "朝秦暮楚", content: "主动技能。每天白天指认一人，不可重复指认。被指认者所处阵营军师入夜时得知，当夜可令吕布刺杀1个ID，被刺杀者引发的一切武将保护技能作用失效，且视为被消耗。吕布只能为每个阵营刺杀一人。所有的命令，吕布都可以拒绝，吕布拒绝刺杀则反馈对方军师，对方军师可以在下一次吕布指认该阵营时再次命令。如果吕布没有表态则视作同意执行。该技能在吕布正式入国后即作废。不可被继承。（武将杀伤技能 结算时生效）"},
            {name: "白门遗恨", content: "被动技能。当成功指认到" + app.roleLinkArray["1101"] + "时触发，保持前一夜所指认的阵营不变。若本来指认在蜀国，则视为指认到在野。此技能触发以后吕布指到蜀国人时，均保持上一夜指认的阵营不变。不可被继承。（指认技能）"},
            {name: "天下无双", content: "被动技能，触发次数不限。当被除【朝秦暮楚】的刺杀之外的武将杀伤技能作用时触发，使其作用无效。不可被继承。（武将保护技能）"},
            {name: "威震虎牢", content: "主动技能。当吕布不为吴国人时有效。下个白天的吴国所有人一半概率投票无效。不可被继承。（投票技能 结算时生效）"},
            {name: "濮阳设伏", content: "主动技能。当吕布不为魏国人时有效。若" + app.roleLinkArray["1017"] + "状态正常，则" + app.roleLinkArray["1017"] + "受伤。若" + app.roleLinkArray["1017"] + "处于八阵内、受伤、已经死亡或退出游戏，则" + app.roleLinkArray["1001"] + "受伤，且次夜" + app.roleLinkArray["1001"] + "的所有行动失败。不可被继承。（武将杀伤技能 结算时生效）"},
            {name: "偷袭徐州", content: "主动技能。当吕布不为蜀国人时有效。" + app.roleLinkArray["1112"] + "的【临桥虎吼】视为被消耗；如果【临桥虎吼】已经消耗，则" + app.roleLinkArray["1112"] + "当夜任何刺杀行动失败。若当夜" + app.roleLinkArray["1112"] + "不在场，则此技能视为发动成功，但无效果。不可被继承。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将",
        faq: [],
        alias: []
    }, {
        id: "1302",
        name: "孟获",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1301"] + "的继承者。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1105"] + "/" + app.roleLinkArray["1107"] + "，当加入任意阵营后，该指认失效。",
        skills: [
            {name: "南蛮归心", content: "当成功指认出" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1105"] + "/" + app.roleLinkArray["1107"] + "，自己仍处于在野状态，且蜀国当时在野人员未满时触发，自动加入蜀国，不得退出。并与" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1105"] + "/" + app.roleLinkArray["1107"] + "互相认识。次日白天" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1105"] + "/" + app.roleLinkArray["1107"] + "的投票可以视作2票。当加入任意阵营后，该技能失效。（指认技能）"},
            {name: "蛮王神威", content: "主动技能。指定1个ID，令该ID受伤。（武将杀伤技能 结算时生效）"},
            {name: "藤甲护体", content: "主动技能。使用后，永久抵御武将杀伤技能，但受到带有杀伤效果的军师负面技能时，作用程度加深，由受伤变为死亡。（武将保护技能 结算时生效）"},
            {name: "猛兽军团", content: "主动技能。提交1个ID，然后对与其相同身份属性（君主、杀手、军师、护卫、女眷，但不包括平民）的三国角色使用，使其当夜所有行动成功率减半。（军师负面技能 结算前生效）"},
        ],
        attr: "猛将、异人",
        faq: [],
        alias: []
    }, {
        id: "1303",
        name: "貂蝉",
        group: "13",
        basic: "平民。在野时投票无效。每夜1个ID指认女眷，指认出后相互认识。貂蝉入国后，成功指认到非本国的女眷时，可以获得一枚“闭月”印记。死亡后以" + app.roleLinkArray["1304"] + "的角色继续游戏。",
        skills: [
            {name: "闭月羞花", content: "被动技能，触发次数不限。当被武将杀伤技能作用时触发，一半概率抵御该武将杀伤技能。若刺杀者为" + app.roleLinkArray["1110"] + "，该技能不触发。每当貂蝉进行一次【闭月羞花】判定，则积累一枚“闭月”印记。貂蝉死亡转世或非死亡退出游戏时，“闭月”印记清零。不可被继承。（武将保护技能）"},
            {name: "媚眼如丝", content: "主动技能，可使用三次。指定1个ID，若该角色为男性角色，则控制该ID次日的投票，可以与自己不一致。修改后的投票显示在票面公告上。不可被继承。（投票技能 结算时生效）"},
            {name: "祸水红颜", content: "主动技能。指定两个ID，若作用对象都为男性角色，则两人进行拼点，失败者受伤。次日【祸水红颜】使用者投票无效，拼点胜利者次日投票算作两票。下夜【祸水红颜】使用者可继续指定另1个ID与胜利者拼点。如果其为男性，则技能发动成功，以此类推。若作用对象为女性角色，则技能发动失败，不可再用。在使用【祸水红颜】时，若使用者具有“闭月”印记，则在当夜可以消耗一枚“闭月”印记，视为当夜拼点胜利者对失败者发动一次刺杀。此技能被其他角色学习后只能使用一次。不可被继承。（军师负面技能 结算时生效）"},
            {name: "儿女情长", content: "被动技能。当貂蝉使用【祸水红颜】指定的ID之一为" + app.roleLinkArray["1301"] + "时触发，两人互相认识，且无需拼点，" + app.roleLinkArray["1301"] + "胜利。此后貂蝉不可再用【祸水红颜】。不可被继承。（指认技能）"},
            {name: "英雄气短", content: "被动技能。当貂蝉死亡时触发，使" + app.roleLinkArray["1301"] + "的【天下无双】失效。若貂蝉自杀，此技能不触发。此技能触发后" + app.roleLinkArray["1301"] + "将得到【天下无双】失效的反馈。不可被继承。（军师负面技能）"},
        ],
        attr: "义士、雅士",
        faq: [],
        alias: []
    }, {
        id: "1304",
        name: "祝融",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1303"] + "的继承者。在野时投票无效。",
        skills: [
            {name: "火神传世", content: "主动技能。指定1个ID，与其拼点，若你获胜，则令该ID受伤并另其当夜的所有行动发动失败。若你失败，结算时生效，令该ID受伤。（军师负面技能 结算前生效）"},
            {name: "万象奔腾", content: "主动技能。当夜抵御自己受到的所有武将杀伤技能，并且被抵御的武将杀伤技能的使用者将受伤。（武将保护技能 结算时生效）"},
        ],
        attr: "猛将、异人",
        faq: [],
        alias: []
    }, {
        id: "1305",
        name: "张角",
        group: "13",
        basic: "平民。在野时投票无效。每夜3个ID指认三国君主，不能得到反馈。第四夜结算时自然死亡。死亡后以" + app.roleLinkArray["1306"] + "的角色继续游戏。",
        skills: [
            {name: "苍天已死", content: "被动技能。当指认出某国君主时触发，天庭向该国所有成员发布该君主的死亡通知。死亡通知仅仅是伪报，君主本身不受影响，伪报中" + app.roleLinkArray["1001"] + "的继承人为" + app.roleLinkArray["1002"] + "。不可被继承。（指认技能）"},
            {name: "黄天当立", content: "被动技能。当【苍天已死】触发当夜时触发，次日白天所有未入国的在野角色得票数自动转移给指认出的君主。不可被继承。（投票技能）"},
            {name: "岁在甲子", content: "主动技能。使用后当夜不限制行动次数。不可被继承。如果张角使用过【岁在甲子】，则" + app.roleLinkArray["1306"] + "的【天遁】失效。（军师增益技能 结算前生效）"},
            {name: "天下大吉", content: "主动技能。当夜所有对未入国的在野角色发动成功的主动技能视为无效，不影响刺杀。不可被继承。（无属性技能 结算时生效）"},
            {name: "电闪雷鸣", content: "主动技能。指定1个ID，使其受伤。不可被继承。（军师负面技能 结算时生效）"},
            {name: "消灾度厄", content: "主动技能，可使用四次。指定1个ID，当夜为其抵御一次任何非刺杀行为的致伤技能伤害。对某一阵营的角色生效一次之后，再对同一阵营的人使用，将会无效，并算做使用过一次。不可被继承。（军师增益技能 结算时生效）"},
            {name: "蛮烟迷雾", content: "主动技能。提交1个ID，判断其国籍，然后使该ID所属阵营所有角色仅在当夜获得【蛮烟迷雾（被动）】，可以被继承。（军师增益技能 结算时生效）<br/>蛮烟迷雾（被动）：被指认时，对方无法得到指认结果，统一反馈为无反馈。但依赖于指认而生效的被动技能不受影响。"},
            {name: "妖言惑众", content: "主动技能，指定三个ID，使这些ID当夜行动中的指认反馈错误结果。但依赖于指认而生效的被动技能不受影响。不可被继承。（军师负面技能 结算时生效）"},
        ],
        attr: "统帅、异人",
        faq: [
            {content: "反馈错误结果是指：若A具有某评价，则反馈A不具有该评价，反之亦然。若A是某角色，则无反馈。若A不是某角色，则反馈A是某角色。当指定超过1个ID指认一名角色时且都失败时，默认指定的第1个ID反馈结果为：该ID是该角色。"}
        ],
        alias: []
    }, {
        id: "1306",
        name: "左慈",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1305"] + "的继承者。在野时投票无效。每夜指认1个ID为异人。",
        skills: [
            {name: "借物代形", content: "被动技能。当被任何技能作用到时触发（包括被动技能），使该技能效果对自己无效，不影响刺杀。（军师增益技能）"},
            {name: "移花接木", content: "主动技能。可以使用任意角色的某项非针对某具体角色的主动技能一次（不能使用【料敌机先】、【武侯八阵】、【连环妙计】）。（军师增益技能 结算时生效）"},
            {name: "天遁", content: "主动技能。使用之后，当夜不限制行动次数。若" + app.roleLinkArray["1304"] + "使用过【岁在甲子】，则此技能无效。（军师增益技能  结算前生效）"},
            {name: "地遁", content: "主动技能。指定1个ID，使该ID当夜所有行动失败，且当夜针对该ID的所有行动作用无效。（军师增益技能 结算前生效）"},
            {name: "人遁", content: "主动技能。指定A、B两个ID，当夜所有针对A和B这两个ID的指向性行动将被互相替换。（军师增益技能 结算前生效）"},
        ],
        attr: "智者、异人",
        faq: [],
        alias: []
    }, {
        id: "1307",
        name: "华佗",
        group: "13",
        basic: "平民。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1110"] + "，不能重复指认，不能得到反馈。死亡后以" + app.roleLinkArray["1308"] + "的角色继续游戏。",
        skills: [
            {name: "刮骨疗毒", content: "被动技能。成功指认出" + app.roleLinkArray["1110"] + "时触发，" + app.roleLinkArray["1110"] + "当夜不受武将杀伤技能作用。不可被继承。（指认技能）"},
            {name: "针灸奇术", content: "主动技能，可使用三次。指定1个ID，若当夜此ID受到刺杀，则受到的刺杀均无效。若该ID未受到刺杀，则计一空针，累计两空针者受伤。可以被继承。（武将保护技能 结算时生效）"},
            {name: "起死回生", content: "主动技能。指定1个ID，当夜结算后，该ID的当前角色复活至其上一角色。若前一角色为因被指认导致的死亡、脱离游戏、自然死亡，则复活无效。自然死亡的角色在寿命还未到期前死亡的，如果复活时已经超过了其原本寿命应该到期的天数，则复活无效。复活者技能不得重置。可以被继承。（军师增益技能 结算后生效）"},
            {name: "麻沸散", content: "主动技能。指定1个ID，使该ID从当夜结束时退出游戏。退出时长由【麻沸散】使用者设定，不得超过两日两夜。当夜该ID一切行动失败。当夜公告此ID退出游戏，并计入当夜死亡人数，遗言为无遗言。如果退出时长设定为两日两夜，当夜对该角色使用的其他技能失败。经过退出时长后将再次公告该ID回到游戏。可以被继承。（军师负面技能 结算前生效）"},
        ],
        attr: "智者、仁者、异人",
        faq: [],
        alias: []
    }, {
        id: "1308",
        name: "葛玄",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1307"] + "的继承者。在野时投票无效。",
        skills: [
            {name: "结庐炼丹", content: "主动技能。指定1个ID，可在结算时减轻该ID在当夜的伤害。若受伤则改为痊愈，若死亡则改为受伤。（军师增益技能 结算后生效）"},
            {name: "一叶障目", content: "主动技能。指定1个ID，此ID当夜视为拥有全评价。（军师增益技能 结算时生效）"},
        ],
        attr: "异人",
        faq: [],
        alias: []
    }, {
        id: "1309",
        name: "王允",
        group: "13",
        basic: "平民。在野时投票无效。每夜3个ID指认" + app.roleLinkArray["1001"] + "、" + app.roleLinkArray["1303"] + "，不可重复指认。指认" + app.roleLinkArray["1001"] + "不能得到反馈。死亡后以" + app.roleLinkArray["1310"] + "的角色继续游戏。",
        skills: [
            {name: "巧施连环", content: "主动技能。成功指认出" + app.roleLinkArray["1303"] + "时由天庭通知王允此技能生效。王允可以选择在某夜指定1个ID，该夜若" + app.roleLinkArray["1301"] + "状态正常，则" + app.roleLinkArray["1301"] + "强制刺杀该ID。该次刺杀无视" + app.roleLinkArray["1301"] + "阵营，该次刺杀不影响" + app.roleLinkArray["1301"] + "【朝秦暮楚】的刺杀，效果与【朝秦暮楚】中刺杀的效果一致。若指定的刺杀对象为" + app.roleLinkArray["1301"] + "或" + app.roleLinkArray["1303"] + "，则此次命令失效，【巧施连环】视作已经消耗。<br/>若本版" + app.roleLinkArray["1303"] + "不在场，则王允对" + app.roleLinkArray["1303"] + "的指认从第四夜起可以用于指认" + app.roleLinkArray["1301"] + "，成功指认出" + app.roleLinkArray["1301"] + "时，天庭通知此技能生效。王允可以选择在某夜指定1个ID，该夜若" + app.roleLinkArray["1301"] + "状态正常，则" + app.roleLinkArray["1301"] + "强制刺杀该ID。该次刺杀无视" + app.roleLinkArray["1301"] + "阵营，该次刺杀不影响" + app.roleLinkArray["1301"] + "【朝秦暮楚】的刺杀，但效果仅为普通刺杀。若指定的刺杀对象为" + app.roleLinkArray["1301"] + "，则此次命令失效，【巧施连环】视作已经消耗。<br/>若本版" + app.roleLinkArray["1301"] + "不在场，成功指认出" + app.roleLinkArray["1303"] + "时，天庭通知生效。可选择在某一夜使用，当夜及当夜之后" + app.roleLinkArray["1303"] + "第一次使用【祸水红颜】时，王允得知【祸水红颜】的作用ID并可以指定获胜者。<br/>不可被继承。（军师增益技能 结算时生效）"},
            {name: "孟德献刀", content: "被动技能。成功指认出" + app.roleLinkArray["1001"] + "时触发，当夜令" + app.roleLinkArray["1317"] + "受伤。不可被继承.（指认技能）"},
            {name: "恰逢大赦", content: "主动技能。某夜发动，令次日全部投票无效。不可被继承。（投票技能 结算时生效）"},
            {name: "末代老臣", content: "主动技能。指定1个ID，使其当夜所有行动发动失败。可以被继承。（军师负面技能 结算前生效）"},
            {name: "年高德劭", content: "主动技能。指定1个ID，可选择自己所拥有的一项评价对其进行一次评价指认。若指定了自己不具有的评价，则此技能失效。可以被继承。（指认技能 结算时生效）"},
        ],
        attr: "智者、文豪、雅士",
        faq: [
            {content: "王允通过【巧施连环】指定" + app.roleLinkArray["1303"] + "【祸水红颜】的胜利者时，若" + app.roleLinkArray["1303"] + "此次使用【祸水红颜】时使用了“闭月”印记，效果仍然为胜利者对失败者发动的刺杀。"}
        ],
        alias: []
    }, {
        id: "1310",
        name: "于吉",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1309"] + "的继承者。在野时投票无效。",
        skills: [
            {name: "广施符水", content: "主动技能。指定1个ID，该夜为其抵御一次军师负面技能或武将杀伤技能的作用，或治愈一次受伤，不能抵御刺杀，优先治愈受伤。（军师增益技能 结算时生效）"},
            {name: "妖术惑众", content: "主动技能。指定1个ID，若其不具有“智者”评价，则令其受伤。（军师负面技能 结算时生效）"},
            {name: "深得民心", content: "被动技能，触发次数不限。每次投票时触发，自己所得票数减二票。（投票技能）"},
            {name: "魑魅魍魉", content: "被动技能。当于吉被刺杀而死时触发，令刺杀者结算时同时死亡。（军师负面技能）"},
        ],
        attr: "智者、仁者、异人",
        faq: [],
        alias: []
    }, {
        id: "1311",
        name: "陈琳",
        group: "13",
        basic: "平民。在野时投票无效。每夜指认1个ID用以触发【生花妙笔】。每夜1个ID指认用以触发【檄文讨逆】，不可重复指认。指认到" + app.roleLinkArray["1002"] + "/" + app.roleLinkArray["1003"] + "时两人相互认识。每夜指认1个ID为文豪。死亡后以" + app.roleLinkArray["1312"] + "的角色继续游戏。",
        skills: [
            {name: "生花妙笔", content: "被动技能。指认的ID在当夜死亡时触发，可在反馈时得知，【生花妙笔】的触发者可以额外写一条遗言，当夜公告死亡人数加一。若同时【生花妙笔】的触发者死亡，该遗言与【生花妙笔】的触发者本身遗言不重叠。如果该夜同时指认到多个死亡ID，则此技能可以被触发多次。可以被继承。（指认技能）"},
            {name: "檄文讨逆", content: "被动技能。指认的ID所在国君主受伤时触发，使该君主直接死亡。若该夜指认到的国家使用了" + app.roleLinkArray["1019"] + "【悲愤诗】，则【檄文讨逆】无效。如果该夜同时指认到多个ID所在国君主均受伤，则此技能可以被触发多次。不可被继承。（指认技能）"},
            {name: "建安风骨", content: "主动技能，白天使用，加入阵营后才可使用。使用后，当日投票得票最高的角色受到的伤害将加深，直接死亡。若有多个角色得票最高，则均不会死亡。可以被继承。（投票技能 结算时生效）"},
            {name: "饮马长城", content: "主动技能，白天使用。可以在白天选择自杀，同时得知使用此技能之前每夜受伤的角色和伤判结果。此次自杀在次夜有遗言，计入次夜死亡人数，且不影响当日自己的继承者使用其他技能。不可被继承。（无属性技能 即时生效）"},
        ],
        attr: "智者、文豪、雅士、能吏",
        faq: [],
        alias: []
    }, {
        id: "1312",
        name: "陈寿",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1311"] + "的继承者。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1107"] + "，指认出后两人相互认识。",
        skills: [
            {name: "直笔修史", content: "主动技能，可使用三次。指定一个角色名字，获得此角色此夜之前全部行动记录，不包括此角色转世前以及转世后的行动记录。可指定已死亡角色。（无属性技能 结算时生效）"},
            {name: "魂兮归来", content: "主动技能，白天使用。指定一个已经彻底死亡并退出游戏的角色。白天结束时公告该角色对应玩家ID回到游戏中。入夜后，此角色可使用一个死亡前未使用或仍可再用的技能，或者进行一次指认触发被动技能。夜晚结束后该角色再次死亡，公告该角色对应的玩家ID退出游戏，不计入死伤人数。【魂兮归来】作用中的角色不被其他角色任何行动作用，包括全局技能。入夜后【魂兮归来】的使用者不可使用其他技能。（无属性技能 结算时生效）"},
            {name: "三国终焉", content: "主动技能，白天使用。" + app.roleLinkArray["1311"] + "使用【饮马长城】当日陈寿不可使用。指定一个已退出游戏的ID，随机学习其一项主动技能（不能学习【料敌机先】、【连环妙计】和【武侯八阵】）。（无属性技能 即时生效）"},
        ],
        attr: "智者、文豪",
        faq: [],
        alias: []
    }, {
        id: "1313",
        name: "水镜先生",
        group: "13",
        basic: "平民。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1103"] + "/" + app.roleLinkArray["1104"] + "/" + app.roleLinkArray["1106"] + "/" + app.roleLinkArray["1107"] + "、" + app.roleLinkArray["1108"] + "，指认到后两人互相认识。第四夜结算时自然死亡。死亡后以" + app.roleLinkArray["1314"] + "的角色继续游戏。",
        skills: [
            {name: "镜花水月", content: "被动技能，触发次数不限。当【镜花水月】拥有者被指认时触发，所有指认到【镜花水月】拥有者的角色，皆被【镜花水月】拥有者得到自己的随机一项评价。当有两个可以互相认识的角色指认过【镜花水月】拥有者后（不限于同一夜），这两名角色可以得知彼此身份。可以触发依赖双向指认触发的被动技能。不可触发依赖单向指认触发的技能。不可被继承。（指认技能）"},
            {name: "其疾如风", content: "主动技能。指定1个ID，该ID当夜可以行动两次。被指定的ID次日投票无效。若被指定者为杀手，不可进行两次刺杀。不可指定自己。可以被继承。（军师增益技能 结算前生效）"},
            {name: "其徐如林", content: "主动技能。白天使用。指定1个ID，该ID入夜后的行动无法被【料敌机先】、【巧设反间】、【直笔修史】侦查，若该ID入夜后发动了需要公告的技能，当夜反馈公告阶段将不对其进行公告。入夜后【其徐如林】的使用者不可再使用其它主动技能。可以被继承。（军师增益技能 结算时生效）"},
            {name: "侵略如火", content: "主动技能。指定1个ID，若该ID当夜进行刺杀，被刺杀者引发的一切除【天下无双】以外的武将保护技能作用失效，且视为被消耗。可以被继承。（军师增益技能 结算时生效）"},
            {name: "不动如山", content: "主动技能。指定1个ID，若该ID当夜没有进行任何行动，则该ID当夜受到的任何伤害皆作用无效。可以被继承。（军师增益技能 结算后生效）"},
            {name: "难知如阴", content: "主动技能。指定1个ID，若该ID当夜退出游戏，则【难知如阴】的使用者可以修改公告为另一个ID退出游戏。假退出游戏的玩家次日白天不能投票，真退出游戏的玩家投票无效。投票结束后，公告真退出的玩家ID退出游戏，假退出的玩家ID回到了游戏。难知如阴仅影响公告，但在结算某国是否灭国或者君主、军师存在时，并不产生实际影响。可以被继承。（无属性技能 结算时生效）"},
            {name: "动如雷震", content: "主动技能。指定一个角色名字，使该角色当夜无法成为军师负面技能和除【动如雷震】以外的军师增益技能的作用目标。可以被继承。（军师增益技能 结算前生效）"},
        ],
        attr: "智者、仁者、雅士、异人",
        faq: [],
        alias: []
    }, {
        id: "1314",
        name: "管辂",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1313"] + "的继承者。在野时投票无效。",
        skills: [
            {name: "算定天下", content: "主动技能。指认1个ID，得知其角色。（指认技能 结算时生效）"},
        ],
        attr: "智者、雅士、异人",
        faq: [],
        alias: []
    }, {
        id: "1315",
        name: "孔融",
        group: "13",
        basic: "平民。在野时投票无效。每夜指认1个ID由天庭询问是否触发【君子让梨】。死亡后以" + app.roleLinkArray["1316"] + "的角色继续游戏。",
        skills: [
            {name: "逆天改命", content: "主动技能。可使用三次。指定1个ID，修改其评价。【逆天改命】使用者无法得知该玩家原有的评价。不得修改为无评价。不可指定自己。可以被继承。（无属性技能 结算时生效）"},
            {name: "君子让梨", content: "被动技能。非锁定技。每夜指认的ID，若当夜进行伤害结算时其受伤或者阵亡，由天庭询问孔融是否选择触发此技能承担其伤害。孔融该夜受到伤害仍可触发此技能，使两人伤害累计结算后均由孔融承担。不可被继承。（军师增益技能 结算后生效）"},
            {name: "仲尼复生", content: "主动技能。指认1个ID为文豪，若其具有“文豪”评价。则得知其角色。不可指认自己。不可被继承。（指认技能 结算时生效）"},
        ],
        attr: "智者、仁者、文豪、能吏",
        faq: [],
        alias: []
    }, {
        id: "1316",
        name: "祢衡",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1315"] + "的继承者。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1001"] + "，不能得到反馈。",
        skills: [
            {name: "裸衣击鼓", content: "被动技能。当成功指认到" + app.roleLinkArray["1001"] + "时触发，若" + app.roleLinkArray["1001"] + "【割发代首】尚未消耗，则" + app.roleLinkArray["1001"] + "失去此技能；若【割发代首】已经消耗，则次日投票中" + app.roleLinkArray["1001"] + "得票数加三票。（指认技能）"},
            {name: "狂悖之徒", content: "主动技能。指认1个ID为异人，不可指认自己。若该ID具有“异人”评价，则随机学到他的一个主动技能，包括该角色能够继承的上一角色的技能。（不能学习【料敌机先】、【武侯八阵】、【连环妙计】）。（军师增益技能 结算时生效）"},
            {name: "颜回不死", content: "主动技能。指认1个ID为雅士，不可指认自己。若该ID具有“雅士”评价，则其在进行下一次伤害判定时自动痊愈，受伤不限于技能使用当夜。（军师增益技能 结算时生效）"},
            {name: "天纵奇才", content: "主动技能。指认1个ID为智者，不可指认自己。若该ID具有“智者”评价，且该ID当夜进行了指向性行动（包括指认、刺杀、技能），则其中一个的指向性行动目标改为由【天纵奇才】使用者指定。（军师增益技能 结算前生效）"},
        ],
        attr: "智者、义士、文豪、能吏",
        faq: [],
        alias: []
    }, {
        id: "1317",
        name: "董卓",
        group: "13",
        basic: "平民。在野时投票无效。每夜指认1个ID为统帅。死亡后以" + app.roleLinkArray["1318"] + "的角色继续游戏。",
        skills: [
            {name: "奉先安在", content: "主动技能。如果当夜" + app.roleLinkArray["1301"] + "在野，则董卓不受武将杀伤技能作用。不可被继承。（武将保护技能 结算时生效）"},
            {name: "唯我独尊", content: "主动技能。当夜三国君主主动技能发动失败，且三国君主次日投票无效。次日投票时董卓多计一张暗票，不显示在票面公告中。不可被继承。（无属性技能 结算前生效）"},
            {name: "雄霸天下", content: "主动技能。当" + app.roleLinkArray["1201"] + "转世或消耗了【传国玉玺】、" + app.roleLinkArray["1101"] + "触发【桃园结义】或" + app.roleLinkArray["1103"] + "转世、" + app.roleLinkArray["1004"] + "转世或消耗过【洞若观火】三条件均达成后，由天庭通知此技能生效。董卓可选择某夜进行一次刺杀，同时三国杀手当夜刺杀及依赖于刺杀发动的技能全部发动失败。不可被继承。（武将杀伤技能 结算时生效）"},
            {name: "嗜血蛮族", content: "主动技能。当董卓使用【雄霸天下】或【嗜血蛮族】杀死一名角色后生效。由天庭通知董卓可进行一次刺杀。刺杀时须与刺杀对象进行一次拼点，胜利则刺杀成功；失败则董卓受伤，刺杀失败。每成功杀死了一名角色，就可以再获得下一夜刺杀的能力。【嗜血蛮族】的发动不影响其他杀手的刺杀。不可被继承。（武将杀伤技能 结算时生效）"},
            {name: "兽之觉醒", content: "被动技能。当董卓刺杀到" + app.roleLinkArray["1301"] + "或者" + app.roleLinkArray["1303"] + "时触发，刺杀失效，且两人相互认识。不可被继承。（指认技能）"},
            {name: "废帝另立", content: "被动技能。当指认到" + app.roleLinkArray["1330"] + "时触发，令" + app.roleLinkArray["1330"] + "脱离游戏。" + app.roleLinkArray["1331"] + "的【先祖庇护】与董卓共享。董卓死亡转世后不再共享，董卓不能得知获得此技能。不可被继承。（指认技能）"},
        ],
        attr: "猛将、统帅、异人",
        faq: [],
        alias: []
    }, {
        id: "1318",
        name: "庞德",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1317"] + "的继承者。在野时投票无效。每夜1个ID指认" + app.roleLinkArray["1113"] + "，指认到后两人互相认识。每夜指认1个ID为猛将。",
        skills: [
            {name: "人马一体", content: "主动技能。指认1个ID为“统帅”、“猛将”，若其具有“统帅”评价，则对其发动一次刺杀；若其具有“猛将”评价，对其进行一次致伤。若同时具有两种评价，则视为“猛将”。（武将杀伤技能 结算时生效）"},
            {name: "西凉铁骑", content: "被动技能。成功指认出" + app.roleLinkArray["1113"] + "时触发，两人相互认识，且当夜" + app.roleLinkArray["1113"] + "与庞德不受任何军师负面技能和武将杀伤技能作用，不影响被刺杀。（指认技能）"},
            {name: "死战不屈", content: "主动技能。指定1个ID进行刺杀，被刺杀者引发的一切武将保护技能作用无效，且视为被消耗。次夜结算时" + app.roleLinkArray["1317"] + "/庞德脱离游戏，且不可再被【起死回生】作用。（武将杀伤技能 结算时生效）"},
        ],
        attr: "猛将、义士",
        faq: [],
        alias: []
    }, {
        id: "1319",
        name: "袁绍",
        group: "13",
        basic: "平民。在野时投票无效。每夜1个ID指认三国君主。每夜指认1个ID为具有某项你指定评价的角色。死亡后以" + app.roleLinkArray["1320"] + "的角色继续游戏。",
        skills: [
            {name: "广结名士", content: "被动技能，触发次数不限。袁绍每夜指认评价时若指认为正确，则下夜可选择一个其他评价进行指认，若指认为错误，下夜不能更换指认的评价。每次指认不属于己方阵营的评价正确时，获得一枚“三公”印记，对每个ID的评价指认最多可以获得一枚“三公”印记。可以被继承。（指认技能）"},
            {name: "讨董联盟", content: "被动技能。袁绍在野时，指认到" + app.roleLinkArray["1001"] + "、" + app.roleLinkArray["1101"] + "、" + app.roleLinkArray["1201"] + "时触发；袁绍入国后，指认到非本阵营的对应君主才触发，使袁绍和指认到的君主次日投票均算作2票。若" + app.roleLinkArray["1317"] + "在场，则使" + app.roleLinkArray["1317"] + "下一次使用时【雄霸天下】刺杀有一半概率失效，但阻止三国杀手刺杀的效果仍然有效，且不影响董卓【嗜血蛮族】的发动，若【雄霸天下】已经消耗，则令" + app.roleLinkArray["1317"] + "当夜发动的所有行动失败。不可被继承。（指认技能）"},
            {name: "刚愎自用", content: "被动技能，触发次数不限。袁绍进行伤判时，结果变化为：痊愈——死亡，继续受伤——痊愈且立即生效，死亡——死亡并计入下夜死亡人数且下夜可以写一条遗言。不可被继承。（无属性技能）"},
            {name: "四世三公", content: "被动技能，非锁定技。游戏开始时袁绍拥有三枚“三公”印记。袁绍/" + app.roleLinkArray["1320"] + "在进行受伤判定或" + app.roleLinkArray["1320"] + "进行【渴思蜜水】判定时，在得知结果之后可以消耗一枚“三公”印记重新进行判定，可以被继承。（军师增益技能）"},
            {name: "空墙苟活", content: "被动技能，当袁绍在某夜受到伤害（非最终结算）时触发，若为致死，则消耗两枚“三公”印记抵消这次伤害；若为致伤，则消耗一枚“三公”印记抵消这次伤害。最多消耗三枚“三公”印记来抵消伤害。若剩余次数无法抵消所有伤害或者承受的伤害用三枚“三公”印记仍然无法抵挡时，则此技能消耗，但不消耗“三公”印记。不可被继承。（军师增益技能）"},
            {name: "名门望族", content: "被动技能，袁绍/" + app.roleLinkArray["1320"] + "第一次受伤时，或者正确的评价指认达到两个以上触发，使袁绍【四世三公】之后可以作用于互识同国角色的伤判，若选择使用且伤判结果若为痊愈或死亡则立即生效，但一次消耗两枚“三公”印记，不足两枚无法使用。若此技能由于指认正确评价而触发，则获得一枚“三公”印记。可以被继承。（军师增益技能）"},
            {name: "强弩射阵", content: "主动技能。指定包括自己在内的3个ID，令他们同时受伤。不可被继承。（武将杀伤技能 结算时生效）"},
            {name: "河朔称雄", content: "主动技能。入国后才可以使用，作用于所有被袁绍指认过评价的ID。若为同国角色，均使袁绍获得一枚“三公”印记。若为非同国角色。由袁绍判定随机使一个ID当夜行动发动失败，其余的ID中，指认过正确评价的角色使袁绍获得一枚“三公”印记，指认不正确评价的角色一半概率使袁绍获得一枚“三公”印记，不可被继承。（军师增益技能 结算时生效）"},
        ],
        attr: "统帅、雅士",
        faq: [],
        alias: []
    }, {
        id: "1320",
        name: "袁术",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1319"] + "的继承者。在野时投票无效。每夜指认1个ID为具有某项你指定评价的角色。激活【寿春称帝】后，每夜指认1个ID用以触发【寿春称帝】。",
        skills: [
            {name: "袁氏嫡子", content: "主动技能。指定1个ID，消耗一枚“三公”印记令其受伤，或者消耗三枚“三公”印记，对其发动一次刺杀。（武将杀伤技能 结算时生效）"},
            {name: "寿春称帝", content: "被动技能。" + app.roleLinkArray["1201"] + "/" + app.roleLinkArray["1202"] + "使用【传国玉玺】转移给其他君主后满三日，或" + app.roleLinkArray["1202"] + "死亡时" + app.roleLinkArray["1201"] + "/" + app.roleLinkArray["1202"] + "尚未使用过【传国玉玺】，或是袁术成为【传国玉玺】的作用目标后，天庭通知生效。每一夜指认到的ID，若为互识的同国角色，则当夜袁术承受的伤害（非最终结算）由此ID来承担。若为非本国角色且袁术当夜承受致伤效果（非最终结算），则有一半概率由此ID承担。若【寿春称帝】因为第二种条件激活，获得一枚“三公”印记；若因为第三种条件激活，获得两枚“三公”印记。（军师增益技能）"},
            {name: "冢中枯骨", content: "被动技能，当袁术触发【寿春称帝】后才可触发，触发次数不限。之后袁术每夜的评价指认有一半概率失败。（指认技能）"},
            {name: "渴思蜜水", content: "被动技能。从第七夜开始，若【寿春称帝】已触发，每夜袁术进行一次判定，该判定一半概率使袁术当夜结算时脱离游戏，计入当夜死亡人数但无遗言，一半概率令袁术当夜评价指认无需判定直接成功。（军师增益技能）"},
        ],
        attr: "雅士",
        faq: [],
        alias: []
    }, {
        id: "1321",
        name: "陈宫",
        group: "13",
        basic: "平民。在野时投票无效。每夜指认1个ID为义士。死亡后以" + app.roleLinkArray["1322"] + "的角色继续游戏。",
        skills: [
            {name: "谋定而动", content: "主动技能。指定1个ID，若其不是平民，则发动当夜该ID针对具体ID成功发动的所有主动技能无效果；次夜，昨夜发动成功但因【谋定而动】无效果的主动技能可以使用两次。可以重新指定目标 ，不受使用者状态影响，但若使用者退出游戏则不能发动。使用者不得使用其他主动技能。不影响带有刺杀性质的技能。此技能不能影响【武侯八阵】。若此技能影响【连环妙计】，则下一夜可以重置【连环妙计】两端。不可被继承。（军师增益技能 结算前生效）"},
            {name: "刚直明策", content: "主动技能，不可被继承。指定1个ID，然后选择以下效果之一：<br/>（1）治愈其受伤状态。（军师增益技能 即时生效）<br/>（2）为该ID抵御一次武将杀伤技能或军师负面技能，不可抵御刺杀。（军师增益技能 结算时生效）<br/>（3）该ID若状态正常则可以提交一个ID令其受伤。（武将杀伤技能 结算时生效）"},
            {name: "请出就戮", content: "被动技能。陈宫在夜晚结束时死亡则触发。由天庭反馈给陈宫此技能触发。陈宫不会即时死亡，而是在下一夜结束后脱离游戏。遗言和死亡人数也在下一夜生效。若陈宫在下一夜结束时又因伤害造成死亡，则可以写两条遗言。此技能触发次日陈宫不受投票的致伤或致死影响。不可被继承。（无属性技能）"},
            {name: "犄角之计", content: "主动技能。指定1个ID，若当夜陈宫所属阵营的角色对该ID使用主动技能（不包括杀手刺杀），则当夜此ID受到武将杀伤技能时不会触发任何被动的武将保护技能，针对此ID发动的主动武将保护技能均发动失败，若是针对多个ID的武将保护技能则对此ID无效。不可被继承。（军师负面技能 结算时生效）"},
        ],
        attr: "智者、义士、仁者",
        faq: [],
        alias: []
    }, {
        id: "1322",
        name: "陈登",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1321"] + "的继承者，在野时投票无效。",
        skills: [
            {name: "河海豪气", content: "被动技能，触发次数不限。若陈登在夜晚成为评价指认的目标，则陈登获知自己所有被指认的评价，并可以于次夜指认1个ID具有其中某一项评价。（指认技能）"},
            {name: "雄杰相敬", content: "主动技能。指定1个ID，根据该ID与自己评价相同的个数决定效果：一个评价相同，两人次日投票均视为两票；二个评价相同，当夜为两人抵消受到的伤害最大的一次武将杀伤技能；三个或以上评价相同，陈登学习到该角色一个非针对具体角色的主动技能（不可学习【武侯八阵】【连环妙计】【料敌机先】）。（军师增益技能 结算时生效）"},
            {name: "献计袭徐", content: "主动技能。指定1个阵营，并指定1个ID，等待结算时该阵营当夜提交刺杀行动的杀手将收到询问是否同意将刺杀目标改为陈登指定的ID，若拒绝，当夜该国杀手刺杀一半几率失败，结算时发动刺杀的杀手受伤。当夜反馈陈登将得知该杀手是否同意修改目标。若指定的ID与陈登阵营不同，则技能发动失败不可再用。（军师增益技能 结算前生效）"},
            {name: "固守广陵", content: "主动技能。指定1个阵营，并指定1个ID，抵御当夜受到来自该阵营角色造成的最大一次伤害。若下夜该阵营同一角色对该ID发动武将杀伤技能，视为发动成功但无效。（军师增益技能 结算时生效）"},
        ],
        attr: "智者、统帅、仁者、能吏",
        faq: [],
        alias: []
    }, {
        id: "1323",
        name: "卢植",
        group: "13",
        basic: "平民。在野时投票无效。死亡后以" + app.roleLinkArray["1324"] + "的角色继续游戏。",
        skills: [
            {name: "为人师表", content: "主动技能。当夜可以得知所有具有“统帅”评价的角色所使用的技能，并选择其中一项学习（不可学习【武侯八阵】、【连环妙计】，学到的技能是否可继承由技能说明决定）。不可被继承。（军师增益技能 结算时生效）"},
            {name: "治世能臣", content: "主动技能。指定1个ID，若其具有“能吏”或“统帅”评价，则其当夜使用的军师增益技能视为没有消耗。不可被继承。（军师增益技能 结算时生效）"},
            {name: "平乱汉室", content: "主动技能。指定1个ID，若其具有“猛将”评价，则其当夜行动失败，失败的技能可以再用。不可被继承。（军师负面技能 结算前生效）"},
            {name: "汉之忠臣", content: "主动技能。当夜具有“义士”评价的角色次日投票按两票计算。可以被继承。（投票技能 结算时生效）"},
            {name: "贯通经学", content: "主动技能。指定1个ID，若其具有“雅士”评价，则其当夜行动被【贯通经学】使用者所知。可以被继承。（军师增益技能 结算时生效）"},
            {name: "避居上谷", content: "被动技能，当卢植死亡转世时，若其【为人师表】【治世能臣】【平乱汉室】均未消耗，则可以选择其中之一继承给" + app.roleLinkArray["1324"] + "。不可被继承。（军师增益技能）"}
        ],
        attr: "智者、统帅、雅士、能吏",
        faq: [],
        alias: []
    }, {
        id: "1324",
        name: "蔡邕",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1323"] + "的继承者，在野时投票无效。",
        skills: [
            {name: "世传大儒", content: "主动技能。指定1个ID，若其具有“智者”评价，则为其当夜抵御所有非杀伤性的军师负面技能。（军师增益技能 结算前生效）"},
            {name: "笔走龙蛇", content: "主动技能。指定1个ID，若其具有“文豪”评价，该ID当夜全部指认失败。不可被继承。（指认技能 结算时生效）"},
            {name: "悲天悯人", content: "主动技能。指定1个ID，若其具有“仁者”评价，则为其抵御当夜受到的所有伤害类技能。（军师增益技能 结算时生效）"},
            {name: "焦尾怜音", content: "主动技能。指定1个ID，若其具有“异人”评价，则为其治疗一次非当夜的受伤。若当夜该ID受到其他伤害，则此技能发动失败，不可再用。（军师增益技能 结算时生效）"},
        ],
        attr: "仁者、文豪、雅士",
        faq: [],
        alias: []
    }, {
        id: "1325",
        name: "百姓",
        group: "13",
        basic: "平民。抽到百姓的玩家开局可在百姓与" + app.roleLinkArray["1330"] + "之间选择一个角色进行游戏。任何时候投票均无效。每夜指认1个ID为雅士。百姓只能接受君主招揽，不能主动申请加入国家。加入某国阵营不公告，不计入该国灭国人数，不计入该国在野人数。若被多名君主招揽，则由百姓选择加入哪国。加入魏国后死亡则转世为" + app.roleLinkArray["1326"] + "，加入蜀国后死亡转世为" + app.roleLinkArray["1327"] + "，加入吴国后死亡转世为" + app.roleLinkArray["1328"] + "，在野死亡后转世为" + app.roleLinkArray["1329"] + "。",
        skills: [
            {name: "水能载舟", content: "被动技能，触发次数不限。当每次投票时触发，任何情况下得票最高都不受影响。不可被继承。（投票技能）"},
            {name: "手无寸铁", content: "主动技能。当夜所有刺杀（包括非杀手刺杀）目标全部被替换为自己。发动刺杀者或使用视为发动刺杀技能的人不能得知自己的目标被替换。不可被继承。（军师增益技能 结算时生效）"},
            {name: "民怨沸腾", content: "被动技能。当某夜自己退出游戏时触发，当夜三国君主全部受伤。不可被继承。（无属性技能）"},
        ],
        attr: "义士、仁者、异人",
        faq: [],
        alias: []
    }, {
        id: "1326",
        name: "流寇",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1325"] + "的继承者。任何时候投票均无效。不计入魏国灭国人数，不计入魏国在野人数。",
        skills: [
            {name: "挟天令侯", content: "主动技能。" + app.roleLinkArray["1001"] + "存在时生效。当夜" + app.roleLinkArray["1001"] + "可以行动两次。（军师增益技能 结算前生效）"},
            {name: "平反大将", content: "被动技能。当被非魏国人杀死时触发，第一个杀死流寇的国家，若君主存在，则可由君主选择一个ID，自由学会" + app.roleLinkArray["1325"] + "的三个技能中的一个，但学来的【水能载舟】只能触发一次。若有两个或以上国家同时杀死流寇，则此技能无法触发。（无属性技能）"},
        ],
        attr: "异人",
        faq: [],
        alias: []
    }, {
        id: "1327",
        name: "山贼",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1325"] + "的继承者。任何时候投票均无效。不计入蜀国灭国人数，不计入蜀国在野人数。",
        skills: [
            {name: "明修栈道", content: "主动技能。" + app.roleLinkArray["1101"] + "存在时生效。当夜" + app.roleLinkArray["1101"] + "可以自己选择任意一个ID，使之当夜和次日需要判定时判定两次，按照较好的一次结果结算。（军师增益技能 结算时生效）"},
            {name: "平反大将", content: "被动技能。当被非蜀国人杀死时触发，第一个杀死山贼的国家，若君主存在，则可由君主选择一个ID，自由学会" + app.roleLinkArray["1325"] + "的三个技能中的一个，但学来的【水能载舟】只能触发一次。若有两个或以上国家同时杀死山贼，则此技能无法触发。（无属性技能）"},
        ],
        attr: "统帅",
        faq: [],
        alias: []
    }, {
        id: "1328",
        name: "海盗",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1325"] + "的继承者。任何时候投票均无效。不计入吴国灭国人数，不计入吴国在野人数。",
        skills: [
            {name: "侠名远扬", content: "主动技能。" + app.roleLinkArray["1202"] + "存在时生效。当夜" + app.roleLinkArray["1202"] + "可以自己选择任意一个评价，对某一个ID进行评价指认。（军师增益技能 结算时生效）"},
            {name: "平反大将", content: "被动技能。当被非吴国人杀死时触发，第一个杀死海盗的国家，若君主存在，则可由君主选择一个ID，自由学会" + app.roleLinkArray["1325"] + "的三个技能中的一个，但学来的【水能载舟】只能触发一次。若有两个或以上国家同时杀死海盗，则此技能无法触发。（无属性技能）"},
        ],
        attr: "义士",
        faq: [],
        alias: []
    }, {
        id: "1329",
        name: "黄巾贼",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1325"] + "的继承者。任何时候投票均无效。转世黄巾贼后，根据" + app.roleLinkArray["1305"] + "的国籍确定国籍，不计入该国灭国人数，不计入该国在野人数。若没有" + app.roleLinkArray["1305"] + "存在，则不能加入任何国家。",
        skills: [
            {name: "揭竿起义", content: "被动技能。当" + app.roleLinkArray["1305"] + "存在时触发，黄巾贼自动与" + app.roleLinkArray["1305"] + "互相认识。黄巾贼存活期间，" + app.roleLinkArray["1305"] + "的存活不计入寿命。（军师增益技能）"},
            {name: "平反大将", content: "被动技能。当被" + app.roleLinkArray["1305"] + "所在国家之外的人杀死时触发，第一个杀死黄巾贼的国家，若君主存在，则可由君主选择一个ID，自由学会" + app.roleLinkArray["1325"] + "的三个技能中的一个，但学来的【水能载舟】只能触发一次。若有两个或以上国家同时杀死黄巾贼，则此技能无法触发。（无属性技能）"},
        ],
        attr: "猛将",
        faq: [],
        alias: []
    }, {
        id: "1330",
        name: "汉少帝",
        group: "13",
        basic: "平民。任何时候投票均无效。每夜2个ID指认" + app.roleLinkArray["1309"] + "、" + app.roleLinkArray["1315"] + "，指认出后互相认识。每夜指认1个ID为异人。被三国君主指认到后入国，不能主动申请加入国家。加入某国阵营不公告，不计入该国灭国人数，不计入该国在野人数。若被多名君主招揽，则由汉少帝选择加入哪国。被" + app.roleLinkArray["1317"] + "指认到后脱离游戏。第三夜结算时自然死亡。死亡后以" + app.roleLinkArray["1331"] + "的角色继续游戏。",
        skills: [
            {name: "先祖庇护", content: "被动技能。当受到武将杀伤技能作用时触发，可以抵御一次。若与其他角色共享此技能时，与共享角色都受到攻击时优先保护汉少帝/" + app.roleLinkArray["1331"] + "。可以被继承。（武将保护技能）"},
            {name: "天子之命", content: "主动技能。指定一个角色名字，可修改其次日投票，被修改的投票不显示在票面公告中。可以被继承。（投票技能 结算时生效）"},
            {name: "皇恩浩荡", content: "被动技能，可触发两次。当【天子之命】、【尚方宝剑】作用成功时皆可触发，被【天子之命】、【尚方宝剑】的角色将和汉少帝/" + app.roleLinkArray["1331"] + "共享【先祖庇护】技能。可以被继承。（军师增益技能）"},
            {name: "赞拜不名", content: "主动技能。当皇帝属于魏国时，" + app.roleLinkArray["1001"] + "/" + app.roleLinkArray["1002"] + "获得此技能。指定一个ID，当夜为其抵御一次任何非刺杀行为的致伤技能伤害。可以被继承。（武将保护技能 结算时生效）"},
            {name: "汉室宗亲", content: "主动技能。当皇帝属于蜀国时，" + app.roleLinkArray["1101"] + "/" + app.roleLinkArray["1102"] + "获得此技能。某夜发动后，次日皇帝的投票变为有效。可以被继承。（投票技能 结算时生效）"},
            {name: "忠心为国", content: "主动技能。当皇帝属于吴国时，" + app.roleLinkArray["1201"] + "/" + app.roleLinkArray["1202"] + "/" + app.roleLinkArray["1203"] + "获得此技能。指定一个ID，当夜所有对该ID的指认无效，不包括技能表述中带有指认的技能。可以被继承。（军师增益技能 结算时生效）"},
        ],
        attr: "全评价（选择时视为三评价）",
        faq: [],
        alias: []
    }, {
        id: "1331",
        name: "汉献帝",
        group: "13",
        basic: "平民。" + app.roleLinkArray["1330"] + "的继承者。任何时候投票均无效。被三国君主指认到后入国，不能主动申请加入国家。加入某国阵营不公告，不计入该国灭国人数，不计入该国在野人数。若被多名君主招揽，则由汉献帝选择加入哪国。",
        skills: [
            {name: "尚方宝剑", content: "主动技能。指定1个角色名字，该角色当夜结算反馈时可从天庭处得知获得尚方宝剑。次夜该角色可进行一次刺杀。（军师增益技能 结算时生效）"},
            {name: "招贤纳才", content: "主动技能。汉献帝入国后，可命令一个在野角色加入该国。若该在野角色当夜没有入其他国，则加入汉献帝所在国，下夜生效，次日公告显示。该旨意不可违抗。（军师增益技能 结算时生效）"},
            {name: "举国同哀", content: "被动技能。当某夜汉献帝退出游戏时触发，所有和汉献帝互相认识的人次夜行动一半概率失败。（无属性技能）"},
        ],
        attr: "全评价（选择时视为三评价）",
        faq: [],
        alias: []
    }]);

})(UtilManager);
