var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BetSetCompoment = (function (_super) {
    __extends(BetSetCompoment, _super);
    function BetSetCompoment() {
        var _this = _super.call(this) || this;
        _this.cState = 0;
        return _this;
    }
    BetSetCompoment.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.checkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.arrButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.sunBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.subdImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.adddImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.sunBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.addBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.subdImg0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.adddImg0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.checkBtn.selected = SetConst.SPEED_PLAY;
        this.arrButton.selected = SetConst.BETSET_SHOW;
        this.updataState();
        this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
        core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, function () {
            _this.updataState();
        }, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_SPEED_CHANGED, this.onDataChanged, this);
        core.MyUIUtils.addLongTouch(this.sunBtn, function () {
            vo.GameData.betIndex = 0;
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
            _this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        }, function () {
        }, this);
        core.MyUIUtils.addLongTouch(this.addBtn, function () {
            vo.GameData.betIndex = vo.GameData.betScoreArr.length - 1;
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
            _this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        }, function () {
        }, this);
        core.MyUIUtils.addLongTouch(this.sunBtn0, function () {
            vo.GameData.line = 1;
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
            _this.lineLabel.text = vo.GameData.line + '';
        }, function () {
        }, this);
        core.MyUIUtils.addLongTouch(this.addBtn0, function () {
            vo.GameData.line = 9;
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
            _this.lineLabel.text = vo.GameData.line + '';
        }, function () {
        }, this);
    };
    BetSetCompoment.prototype.onDataChanged = function () {
        this.checkBtn.selected = SetConst.SPEED_PLAY;
    };
    BetSetCompoment.prototype.updataState = function () {
        if (window.innerWidth >= window.innerHeight) {
            this.currentState = 'hor_' + SetConst.MODLE;
        }
        else {
            this.currentState = SetConst.MODLE == 0 ? 'ver' : 'ver_1';
        }
        this.sunBtn.enabled = vo.GameData.betIndex > 0;
        this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
        this.sunBtn0.enabled = vo.GameData.line > 1;
        this.addBtn0.enabled = vo.GameData.line < 9;
    };
    BetSetCompoment.prototype.onTab = function (e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        switch (e.currentTarget) {
            case this.sunBtn:
                if (vo.GameData.betIndex > 0) {
                    SoundManager.getInstance().playEffect(SoundConst.SUB);
                    vo.GameData.betIndex -= 1;
                    GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
                }
                this.sunBtn.enabled = vo.GameData.betIndex > 0;
                this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
                break;
            case this.addBtn:
                if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
                    SoundManager.getInstance().playEffect(SoundConst.ADD);
                    vo.GameData.betIndex += 1;
                    GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
                }
                this.sunBtn.enabled = vo.GameData.betIndex > 0;
                this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
                break;
            case this.sunBtn0:
                if (vo.GameData.line > 1) {
                    SoundManager.getInstance().playEffect(SoundConst.SUB);
                    vo.GameData.line -= 1;
                    GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
                }
                this.sunBtn0.enabled = vo.GameData.line > 1;
                this.addBtn0.enabled = vo.GameData.line < 9;
                break;
            case this.addBtn0:
                if (vo.GameData.line < 9) {
                    SoundManager.getInstance().playEffect(SoundConst.ADD);
                    vo.GameData.line += 1;
                    GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
                }
                this.sunBtn0.enabled = vo.GameData.line > 1;
                this.addBtn0.enabled = vo.GameData.line < 9;
                break;
            case this.checkBtn:
                SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
                SetConst.SPEED_PLAY = this.checkBtn.selected;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_SPEED_CHANGED);
                break;
            case this.arrButton:
                SoundManager.getInstance().playEffect(SoundConst.BUTTON);
                if (this.arrButton.selected) {
                    SetConst.BETSET_SHOW = true;
                }
                else {
                    SetConst.BETSET_SHOW = false;
                }
                this.goUpdata();
                this.dispatchEventWith(SetEvent.SET_STATE_CHANGE);
                break;
        }
        this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        this.lineLabel.text = vo.GameData.line + '';
        this.dispatchEventWith(egret.Event.CHANGE);
    };
    BetSetCompoment.prototype.getXY = function () {
        var x;
        var y;
        if (SetConst.MODLE == 0) {
            if (SetConst.BETSET_SHOW) {
                x = this.currentState.indexOf('hor') != -1 ? 0 : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 118;
            }
            else {
                x = this.currentState.indexOf('hor') != -1 ? -this.width + 100 : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
            }
        }
        else {
            if (SetConst.BETSET_SHOW) {
                x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - this.width : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 118;
            }
            else {
                x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - 100 : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
            }
        }
        return { x: x, y: y };
    };
    BetSetCompoment.prototype.updata = function () {
        egret.Tween.removeTweens(this);
        this.arrButton.selected = SetConst.BETSET_SHOW;
        var t = this.getXY();
        this.x = t.x;
        this.y = t.y;
    };
    BetSetCompoment.prototype.goUpdata = function () {
        egret.Tween.removeTweens(this);
        this.arrButton.selected = SetConst.BETSET_SHOW;
        var t = this.getXY();
        egret.Tween.get(this).to({ x: t.x, y: t.y }, 200);
    };
    BetSetCompoment.prototype.onModleChange = function () {
        this.updataState();
        this.updata();
    };
    return BetSetCompoment;
}(eui.Component));
__reflect(BetSetCompoment.prototype, "BetSetCompoment");
//# sourceMappingURL=BetSetCompoment.js.map