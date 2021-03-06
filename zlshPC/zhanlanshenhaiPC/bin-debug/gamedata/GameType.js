var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏类型集合
 */
var GameType;
(function (GameType_1) {
    var ItemType = (function () {
        function ItemType() {
        }
        return ItemType;
    }());
    GameType_1.ItemType = ItemType;
    __reflect(ItemType.prototype, "GameType.ItemType");
    var GameModule = (function () {
        function GameModule() {
        }
        /**
         * 真钱模式
         */
        GameModule.trueModle = 0;
        /**
         * 假钱模式
         */
        GameModule.falseModle = 1;
        return GameModule;
    }());
    GameType_1.GameModule = GameModule;
    __reflect(GameModule.prototype, "GameType.GameModule");
    var GameState = (function () {
        function GameState() {
        }
        GameState.PLAYING = 1;
        GameState.STOP = 0;
        return GameState;
    }());
    GameType_1.GameState = GameState;
    __reflect(GameState.prototype, "GameType.GameState");
    var LangType = (function () {
        function LangType() {
        }
        LangType.CN = 'cn';
        LangType.TW = 'tw';
        LangType.EN = 'en';
        return LangType;
    }());
    GameType_1.LangType = LangType;
    __reflect(LangType.prototype, "GameType.LangType");
    var GameType = (function () {
        function GameType() {
        }
        GameType['slot'] = 'slot';
        GameType['freeslot'] = 'freeslot';
        GameType['treasure'] = 'treasure';
        GameType['treasure2'] = 'treasure2';
        return GameType;
    }());
    GameType_1.GameType = GameType;
    __reflect(GameType.prototype, "GameType.GameType");
    var RewardType = (function () {
        function RewardType() {
        }
        RewardType.NOMAL_REWARD = 1;
        RewardType.NO_REWARD = 0;
        RewardType.BIG_REWARD = 2;
        RewardType.FREE_REWARD = 3;
        RewardType.BIG_AND_FREE = 4;
        return RewardType;
    }());
    GameType_1.RewardType = RewardType;
    __reflect(RewardType.prototype, "GameType.RewardType");
})(GameType || (GameType = {}));
//# sourceMappingURL=GameType.js.map