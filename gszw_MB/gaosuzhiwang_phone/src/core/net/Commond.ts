class Commond {
	public static index: number = 0;
	/**
	 * 發送心跳
	 */
	public static sendHeartCheck(): void {
		// let data =  Commond.initData();
		// data.Parameter = {
		// 	"Action": 'TouchToken',
		// 	"Type": null,
		// 	"PartnerId": data.PartnerId,
		// 	"McDebug": 1
		// };
		// sockets.SocketMananger.getInstance().sendMessage(data);
	}

	/**
	 * 查看玩家资料
	 */
	public static checkPlayer(): void {
		let data = Commond.initData();
		data.Parameter = {
			"Action": 'Status',
			"Type": 'list_redis',
			"PartnerId": data.PartnerId,
			"McDebug": 1
		};
		sockets.SocketMananger.getInstance().sendMessage(data);
	}

	/**
	 * 发送始化游戏
	 */
	public static sendInitGame(): void {
		let data = Commond.initData();
		data.Action='Initial';
		data.Parameter = {
			"Action": 'Initial',
			"Type": null,
			"PartnerId": data.PartnerId,
			"McDebug": 1
		};
		//ServerManager.getInstance().acpetCommond(data);
		if (GameConfig.gameModle == GameType.GameModule.trueModle) {
			GameManager.getInstance().onNetgGmeInit({});
		}
		else {
			sockets.SocketMananger.getInstance().sendMessage(data);
		}

	}

	/**
	 * 发送开始游戏命令
	 * isFree 是否是免费游戏
	 */
	public static sendPlay(isFree: boolean = false): void {
		let data = Commond.initData();
		data.Action='Play';
		data.Parameter = {
			"Action": 'Play',
			"Type": isFree ? 'freeslot' : "slot",
			"Line": vo.GameData.line,
			"Bet": 1,
			"Denom":   vo.GameData.betScoreArr[vo.GameData.betIndex]*10000,
			"PlayerId": GameConfig.CasinoGame.PlayerId,
			"BetSetup": {
				"Line": vo.GameData.line,
				"Bet": vo.GameData.betScoreArr[vo.GameData.betIndex],
				"Multiply": 1
			},
			"SessionData": {
				"Bet": 1,
				"Multiply": 10
			},
			"DebugMode": "None"
		};
		//ServerManager.getInstance().acpetCommond(data);
		if(GameConfig.gameModle==GameType.GameModule.trueModle)
		{
		    GameManager.getInstance().onNetGamePlay({});
		}
		else
		{
		   sockets.SocketMananger.getInstance().sendMessage(data);
		}
	}

	public static initData(): any {
		let data: any = {};
		data.Link_auth = GameConfig.CasinoGame.Link_auth;
		data.GameCode = GameConfig.CasinoGame.GameCode;
		data.Game_id = GameConfig.CasinoGame.Game_id;
		data.PlayerId = GameConfig.CasinoGame.PlayerId;
		data.Skin = GameConfig.CasinoGame.Skin;
		data.PartnerId = GameConfig.CasinoGame.PartnerId;
		data.UrlBase = GameConfig.CasinoGame.UrlBase;
		data.Token = GameConfig.CasinoGame.Token;
		data.IP = GameConfig.CasinoGame.IP;
		data.Language = GameConfig.CasinoGame.Language;
		data.GameCanvas = GameConfig.CasinoGame.GameCanvas;
		data.vtoken_interval = GameConfig.CasinoGame.vtoken_interval;
		data.guset = GameConfig.CasinoGame.guest;
		data.udf1 = GameConfig.CasinoGame.udf1;
		data.udf2 = GameConfig.CasinoGame.udf2;
		data.udf3 = GameConfig.CasinoGame.udf3;
		data.udf4 = GameConfig.CasinoGame.udf4;
		data.udf5 = GameConfig.CasinoGame.udf5;
		data.NjsHost = GameConfig.CasinoGame.NjsHost;
		data.Denom = GameConfig.CasinoGame.Denom;
		data.crnex = GameConfig.CasinoGame.crnex;
		data.UrlRes = GameConfig.CasinoGame.UrlRes;
		return data;
	}
}