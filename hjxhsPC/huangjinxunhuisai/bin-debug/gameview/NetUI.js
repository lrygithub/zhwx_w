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
var NetUI = (function (_super) {
    __extends(NetUI, _super);
    function NetUI() {
        var _this = _super.call(this) || this;
        _this.skinName = NetSkin;
        return _this;
    }
    NetUI.getInstance = function () {
        if (!this._instance) {
            this._instance = new NetUI();
        }
        return this._instance;
    };
    NetUI.prototype.childrenCreated = function () {
    };
    /**
     * 显示正在连接界面
     */
    NetUI.prototype.showNetting = function () {
        var _this = this;
        var layer = core.LayerManager.getInstance().getLayer(core.LayerManager.Layer_Tip);
        layer.addChild(this);
        this.netingIcon.rotation = 0;
        egret.Tween.get(this.netingIcon, { loop: true }).to({ rotation: 12000 }, 60000).call(function () { _this.netingIcon.rotation = 0; });
    };
    /**
    * hide正在连接界面
    */
    NetUI.prototype.hideNetting = function () {
        egret.Tween.removeTweens(this.netingIcon);
        if (this.parent)
            this.parent.removeChild(this);
    };
    return NetUI;
}(core.BaseUI));
__reflect(NetUI.prototype, "NetUI");
//# sourceMappingURL=NetUI.js.map