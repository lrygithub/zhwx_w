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
var StipsUI = (function (_super) {
    __extends(StipsUI, _super);
    function StipsUI() {
        var _this = _super.call(this) || this;
        _this.skinName = StipSkin;
        return _this;
    }
    StipsUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.registerEvent(this.okBtn, egret.TouchEvent.TOUCH_TAP, function () {
            _this.callfun && _this.callfun();
            core.UIManager.closeUI(core.UIConst.StipsUI);
        }, this);
    };
    StipsUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    StipsUI.prototype.shows = function (title, des, callfun) {
        if (title === void 0) { title = ''; }
        if (des === void 0) { des = ''; }
        if (callfun === void 0) { callfun = null; }
        this.titleLabel.text = title;
        this.desLabel.text = des;
        this.callfun = callfun;
    };
    return StipsUI;
}(core.BaseUI));
__reflect(StipsUI.prototype, "StipsUI");
//# sourceMappingURL=StipsUI.js.map