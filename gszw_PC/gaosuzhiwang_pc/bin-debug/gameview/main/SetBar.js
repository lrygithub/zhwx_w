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
var SetBar = (function (_super) {
    __extends(SetBar, _super);
    function SetBar() {
        return _super.call(this) || this;
    }
    SetBar.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.registerEvent(this.musicCheckBox, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.setBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.musicCheckBox.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.musicCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        core.TimerManager.instance.addTick(200, -1, this.onFrame, this);
        this.setBtn.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.checkList.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver2, this);
        this.volueSlider.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver1, this);
        this.volueSlider.addEventListener("MyHslider_STOP", this.onTouchStop, this);
        this.volueSlider.addEventListener(egret.Event.CHANGE, this.onVolueChange, this);
        this.checkList.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut2, this);
        this.volueSlider.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut1, this);
        this.musicCheckBox.selected = SoundManager.getInstance().getBgVolume() > 0 ? true : false;
        this.checkList.checkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.checkList.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.checkList.hisBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.checkList.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    SetBar.prototype.onTab = function (e) {
        //SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
        switch (e.currentTarget) {
            case this.checkList.checkBtn:
                core.UIManager.openUI(core.UIConst.SetUI, core.LayerManager.Layer_Top);
                // let sui:SetUI=core.UIManager.getUI(core.UIConst.SetUI);
                // sui.show();
                this.misShow = false;
                this.checkisShow = false;
                break;
            case this.checkList.helpBtn:
                //openHelp();
                this.misShow = false;
                this.checkisShow = false;
                core.UIManager.openUI(core.UIConst.HelpDesUI, core.LayerManager.Layer_Top);
                break;
            case this.checkList.hisBtn:
                //openHelp();
                openHistory();
                this.misShow = false;
                this.checkisShow = false;
                break;
            case this.checkList.rewardBtn:
                //openHelp();
                core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
                this.misShow = false;
                this.checkisShow = false;
                break;
        }
    };
    SetBar.prototype.closeall = function () {
        this.misShow = false;
        this.checkisShow = false;
    };
    SetBar.prototype.onChange = function (e) {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var btn = e.currentTarget;
        if (btn == this.musicCheckBox) {
            if (btn.currentState == 'rollOver' || btn.currentState == 'rollOverAndSelected' || btn.currentState == 'down' || btn.currentState == 'downAndSelected') {
                this.misShow = true;
                this.volueSlider.setVolues(SoundManager.getInstance().getEffectVolume() * 100);
                this.checkisShow = false;
                egret.clearTimeout(this.mt);
                ui.topList.hide();
            }
            else {
                this.mt = egret.setTimeout(function () {
                    _this.misShow = false;
                }, this, 1000);
            }
        }
        else if (btn == this.setBtn) {
            ui.topList.hide();
            if (btn.currentState == 'rollOver') {
                this.checkisShow = true;
                this.misShow = false;
                egret.clearTimeout(this.ct);
            }
            else {
                this.ct = egret.setTimeout(function () {
                    _this.checkisShow = false;
                }, this, 1000);
            }
        }
    };
    SetBar.prototype.onTouchStop = function () {
        this.misShow = false;
    };
    SetBar.prototype.onOver1 = function (e) {
        this.misShow = true;
        this.checkisShow = false;
        egret.clearTimeout(this.mt);
        this.volueSlider.setVolues(SoundManager.getInstance().getEffectVolume() * 100);
        //this.musicCheckBox.currentState = this.musicCheckBox.selected == false ? 'rollOver' : 'rollOverAndSelected';
    };
    SetBar.prototype.onOver2 = function (e) {
        egret.clearTimeout(this.ct);
        this.checkisShow = true;
        this.misShow = false;
        //this.setBtn.currentState = 'rollOver';
    };
    SetBar.prototype.onOut1 = function (e) {
        var _this = this;
        if (!this.volueSlider.hitTestPoint(e.stageX, e.stageY)) {
            this.mt = egret.setTimeout(function () {
                _this.misShow = false;
            }, this, 1000);
        }
        //this.musicCheckBox.currentState = '';
    };
    SetBar.prototype.onOut2 = function (e) {
        var _this = this;
        if (!this.checkList.hitTestPoint(e.stageX, e.stageY)) {
            this.ct = egret.setTimeout(function () {
                _this.checkisShow = false;
            }, this, 1000);
        }
        //this.setBtn.currentState = '';
    };
    SetBar.prototype.onFrame = function () {
        if (this.misShow) {
            this.volueSlider.y = 0;
            this.volueSlider.enabled = true;
            egret.Tween.removeTweens(this.volueSlider);
            egret.Tween.get(this.volueSlider).to({ alpha: 1 }, 200);
        }
        else if (this.misShow == false && this.volueSlider.isPlaying == false) {
            this.musicCheckBox.currentState = '';
            this.volueSlider.enabled = false;
            egret.Tween.removeTweens(this.volueSlider);
            egret.Tween.get(this.volueSlider).to({ alpha: 0 }, 200);
        }
        if (this.checkisShow) {
            this.checkList.y = 0;
            this.checkList.enabled = true;
            egret.Tween.removeTweens(this.checkList);
            egret.Tween.get(this.checkList).to({ alpha: 1 }, 200);
        }
        else {
            this.setBtn.currentState = '';
            this.checkList.enabled = false;
            egret.Tween.removeTweens(this.checkList);
            egret.Tween.get(this.checkList).to({ alpha: 0 }, 200);
        }
        this.musicCheckBox.updataImg();
    };
    SetBar.prototype.onVolueChange = function () {
        var n = this.volueSlider.value / this.volueSlider.maximum;
        SoundManager.getInstance().setBgVolume(n);
        SoundManager.getInstance().setEffectVolume(n);
        this.musicCheckBox.valume = n;
    };
    SetBar.prototype.onCheck = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        //SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
        if (!this.musicCheckBox.selected) {
            SoundManager.getInstance().saveVolue();
            this.volueSlider.setVolues(0);
            SoundManager.getInstance().setBgVolume(0);
            SoundManager.getInstance().setEffectVolume(0);
            this.musicCheckBox.valume = this.volueSlider.value;
            SoundManager.getInstance().close();
        }
        else {
            this.musicCheckBox.valume = SoundManager.getInstance().lastVolume;
            SoundManager.getInstance().setBgVolume(SoundManager.getInstance().lastVolume);
            SoundManager.getInstance().setEffectVolume(SoundManager.getInstance().lastVolume);
            var n = SoundManager.getInstance().lastVolume * this.volueSlider.maximum;
            this.volueSlider.setVolues(n);
            SoundManager.getInstance().open();
        }
    };
    return SetBar;
}(eui.Component));
__reflect(SetBar.prototype, "SetBar");
//# sourceMappingURL=SetBar.js.map