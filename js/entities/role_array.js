(function(app) {

	app.rolePairs = [
		// Sanguobansha, id: "1xxx"
		{id: "1001", name: "曹操"},
		{id: "1002", name: "曹丕"},
		{id: "1003", name: "曹植"},
		{id: "1004", name: "郭嘉"},
		{id: "1005", name: "荀彧"},
		{id: "1006", name: "荀攸"},
		{id: "1007", name: "贾诩"},
		{id: "1008", name: "司马懿"},
		{id: "1009", name: "钟会"},
		{id: "1010", name: "夏侯惇"},
		{id: "1011", name: "曹仁"},
		{id: "1012", name: "夏侯渊"},
		{id: "1013", name: "张郃"},
		{id: "1014", name: "张辽"},
		{id: "1015", name: "徐晃"},
		{id: "1016", name: "邓艾"},
		{id: "1017", name: "典韦"},
		{id: "1018", name: "许褚"},
		{id: "1019", name: "蔡琰"},
		{id: "1020", name: "甄宓"},
		{id: "1101", name: "刘备"},
		{id: "1102", name: "刘禅"},
		{id: "1103", name: "徐庶"},
		{id: "1104", name: "卧龙"},
		{id: "1105", name: "姜维"},
		{id: "1106", name: "马良"},
		{id: "1107", name: "诸葛亮"},
		{id: "1108", name: "庞统"},
		{id: "1109", name: "法正"},
		{id: "1110", name: "关羽"},
		{id: "1111", name: "黄忠"},
		{id: "1112", name: "张飞"},
		{id: "1113", name: "马超"},
		{id: "1114", name: "赵云"},
		{id: "1115", name: "魏延"},
		{id: "1116", name: "王平"},
		{id: "1117", name: "糜夫人"},
		{id: "1118", name: "黄月英"},
		{id: "1201", name: "孙坚"},
		{id: "1202", name: "孙策"},
		{id: "1203", name: "孙权"},
		{id: "1204", name: "周瑜"},
		{id: "1205", name: "鲁肃"},
		{id: "1206", name: "吕蒙"},
		{id: "1207", name: "陆逊"},
		{id: "1208", name: "陆抗"},
		{id: "1209", name: "太史慈"},
		{id: "1210", name: "丁奉"},
		{id: "1211", name: "蒋钦"},
		{id: "1212", name: "甘宁"},
		{id: "1213", name: "凌统"},
		{id: "1214", name: "黄盖"},
		{id: "1215", name: "周泰"},
		{id: "1216", name: "徐盛"},
		{id: "1217", name: "小乔"},
		{id: "1218", name: "孙尚香"},
		{id: "1301", name: "吕布"},
		{id: "1302", name: "孟获"},
		{id: "1303", name: "貂蝉"},
		{id: "1304", name: "祝融"},
		{id: "1305", name: "张角"},
		{id: "1306", name: "左慈"},
		{id: "1307", name: "华佗"},
		{id: "1308", name: "葛玄"},
		{id: "1309", name: "王允"},
		{id: "1310", name: "于吉"},
		{id: "1311", name: "陈琳"},
		{id: "1312", name: "陈寿"},
		{id: "1313", name: "水镜先生"},
		{id: "1314", name: "管辂"},
		{id: "1315", name: "孔融"},
		{id: "1316", name: "祢衡"},
		{id: "1317", name: "董卓"},
		{id: "1318", name: "庞德"},
		{id: "1319", name: "袁绍"},
		{id: "1320", name: "袁术"},
		{id: "1321", name: "陈宫"},
		{id: "1322", name: "陈登"},
		{id: "1323", name: "卢植"},
		{id: "1324", name: "蔡邕"},
		{id: "1325", name: "百姓"},
		{id: "1326", name: "流寇"},
		{id: "1327", name: "山贼"},
		{id: "1328", name: "海盗"},
		{id: "1329", name: "黄巾贼"},
		{id: "1330", name: "汉少帝"},
		{id: "1331", name: "汉献帝"},

		// Sanguobansha 1v1, id: "2xxx"

		// Qunxiongbansha, id: "3xxx"

		// Zhanguobansha, id: "4xxx"

		// Others, so on
	];
	app.roleLinkArray = [];

	_.each(app.rolePairs, function(rolePair) {
		var roleLink = "<a href='#roles/" + rolePair.id.substring(0, 2) + "/" + rolePair.id + "'>" + rolePair.name + "</a>";
		app.roleLinkArray[rolePair.id] = roleLink;
	});
	
})(UtilManager);