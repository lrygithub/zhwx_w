var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Commond = (function () {
    function Commond() {
    }
    /**
     * 發送心跳
     */
    Commond.sendHeartCheck = function () {
        // let data =  Commond.initData();
        // data.Parameter = {
        // 	"Action": 'TouchToken',
        // 	"Type": null,
        // 	"PartnerId": data.PartnerId,
        // 	"McDebug": 1
        // };
        // sockets.SocketMananger.getInstance().sendMessage(data);
    };
    /**
     * 查看玩家资料
     */
    Commond.checkPlayer = function () {
        var data = Commond.initData();
        data.Parameter = {
            "Action": 'Status',
            "Type": 'list_redis',
            "PartnerId": data.PartnerId,
            "McDebug": 1
        };
        sockets.SocketMananger.getInstance().sendMessage(data);
    };
    /**
     * 发送始化游戏
     */
    Commond.sendInitGame = function () {
        var data = Commond.initData();
        data.Action = 'Initial';
        data.Parameter = {
            "Action": 'Initial',
            "Type": null,
            "PartnerId": data.PartnerId,
            "McDebug": 1
        };
        // ServerManager.getInstance().acpetCommond(data);
        if (GameConfig.gameModle == GameType.GameModule.falseModle) {
            GameManager.getInstance().onNetgGmeInit({});
        }
        else {
            sockets.SocketMananger.getInstance().sendMessage(data);
        }
    };
    /**
     * 发送开始游戏命令
     * isFree 是否是免费游戏
     */
    Commond.sendPlay = function (isFree) {
        if (isFree === void 0) { isFree = 0; }
        if (egret.getTimer() - this.playtime < 400) {
            return;
        }
        var type;
        if (isFree == 0) {
            type = "slot";
        }
        if (isFree == 1) {
            type = "freeslot";
        }
        this.playtime = egret.getTimer();
        var data = Commond.initData();
        data.Action = 'Play';
        data.Parameter = {
            "Action": 'Play',
            "Type": type,
            "Line": vo.GameData.line,
            "Bet": 1,
            "Denom": vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex] * 10000,
            "PlayerId": GameConfig.CasinoGame.PlayerId,
            "SessionData": {
                "Bet": 1,
                "Multiply": 10
            },
            "DebugMode": "None"
        };
        // ServerManager.getInstance().acpetCommond(data);
        if (GameConfig.gameModle == GameType.GameModule.falseModle) {
            GameManager.getInstance().onNetGamePlay({});
        }
        else {
            sockets.SocketMananger.getInstance().sendMessage(data);
        }
    };
    /**红利游戏 */
    Commond.sendBonus = function (type, idx) {
        if (type === void 0) { type = 1; }
        if (idx === void 0) { idx = 0; }
        var sendType = null;
        if (type == 1) {
            sendType = GameType.GameType.treasure;
        }
        else if (type == 2) {
            sendType = GameType.GameType.treasure2;
        }
        var data = Commond.initData();
        data.Action = 'Play',
            data.Parameter = {
                "Type": sendType,
                // "McDebug": 1,
                "BetSetup": {
                    "Bet": 1,
                    'Line': (vo.GameData.line + 1),
                    "Multiply": vo.GameData.betScoreArr[vo.GameData.betIndex]
                },
            };
        sockets.SocketMananger.getInstance().sendMessage(data);
    };
    Commond.initData = function () {
        var data = {};
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
        // data.udf3 = GameConfig.CasinoGame.udf3;
        data.udf4 = GameConfig.CasinoGame.udf4;
        // data.udf5 = GameConfig.CasinoGame.udf5;
        data.NjsHost = GameConfig.CasinoGame.NjsHost;
        data.Denom = GameConfig.CasinoGame.Denom;
        // data.crnex = GameConfig.CasinoGame.crnex;
        // data.UrlRes = GameConfig.CasinoGame.UrlRes;
        return data;
    };
    Commond.index = 0;
    return Commond;
}());
__reflect(Commond.prototype, "Commond");
//# sourceMappingURL=Commond.js.map