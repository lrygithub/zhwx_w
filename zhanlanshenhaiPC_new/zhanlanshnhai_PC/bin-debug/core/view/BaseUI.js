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
var core;
(function (core) {
    var BaseUI = (function (_super) {
        __extends(BaseUI, _super);
        function BaseUI() {
            var _this = _super.call(this) || this;
            _this.eventPool = [];
            _this.initSize();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
            egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, _this.onOChange, _this);
            return _this;
        }
        BaseUI.prototype.onOChange = function () {
            // if(window.innerWidth>=window.innerHeight)
            // {
            //   this.currentState='hor';
            // }
            // else
            // {
            // 	this.currentState='ver';
            // }
        };
        BaseUI.prototype.initSize = function () {
            this.top = 0;
            this.left = 0;
            this.bottom = 0;
            this.right = 0;
            // this.scaleX=0.657894737;
            // this.scaleY=0.657894737;
        };
        BaseUI.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        BaseUI.prototype.onAdd = function () {
            this.isShow = true;
            this.initListener();
            //core.UIUtils.addButtonScaleEffects(this);
        };
        BaseUI.prototype.onRemove = function () {
            this.clearEvent();
            core.NotifyManager.getInstance().removeRegister(this);
            //core.UIUtils.removeButtonScaleEffects(this);
        };
        /**注册事件 会在dispose时自动移除 */
        BaseUI.prototype.registerEvent = function (target, type, callback, callbackobj) {
            target.addEventListener(type, callback, callbackobj);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        /**移除全部事件 */
        BaseUI.prototype.clearEvent = function () {
            if (this.eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = this.eventPool[i].target;
                    var type = this.eventPool[i].type;
                    var callback = this.eventPool[i].callback;
                    var callbackobj = this.eventPool[i].callbackobj;
                    target.removeEventListener(type, callback, callbackobj);
                }
            }
        };
        /**初始监听 */
        BaseUI.prototype.initListener = function () {
            this.addRegister(core.NotifyConst.RESIZE, this.onResize, this);
        };
        BaseUI.prototype.onResize = function () {
            // var stageSize = egret.sys.screenAdapter.calculateStageSize(egret.MainContext.instance.stage.scaleMode, window.innerWidth, window.innerHeight, GameConfig.DES_WIDTH, GameConfig.DES_HEIGHT);
            // console.log('w',GameConfig.WIDTH/stageSize.displayWidth);
            // console.log("h",GameConfig.HEIGHT/stageSize.displayHeight);
        };
        /**注册通知 由子类调用*/
        BaseUI.prototype.addRegister = function (type, callback, callbackobj) {
            core.NotifyManager.getInstance().registerNotify(type, callback, callbackobj);
        };
        /**移除通知 由子类调用*/
        BaseUI.prototype.removeRegister = function (obj) {
            core.NotifyManager.getInstance().removeRegister(obj);
        };
        BaseUI.prototype.close = function () {
            this.isShow = false;
            if (this.parent)
                this.parent.removeChild(this);
        };
        return BaseUI;
    }(eui.Component));
    core.BaseUI = BaseUI;
    __reflect(BaseUI.prototype, "core.BaseUI");
    var EventObj = (function () {
        function EventObj() {
        }
        return EventObj;
    }());
    core.EventObj = EventObj;
    __reflect(EventObj.prototype, "core.EventObj");
})(core || (core = {}));
//# sourceMappingURL=BaseUI.js.map