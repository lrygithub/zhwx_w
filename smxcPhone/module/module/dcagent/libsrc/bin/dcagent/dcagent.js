!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.DCAgent = {}); }(this, function (t) {
    "use strict";
    function e() { }
    function n(t) { return "function" == typeof t; }
    function r(t) { return t && "[object Object]" === qt.call(t); }
    function o(t) { console.log("---- DCAgent log start ----\n" + t + "\n---- DCAgent log end   ----"); }
    function i(t) { var e, n, r; return e = Date.now(), n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = n.replace(/[xy]/g, function (t) { var n; return n = (e + 16 * Math.random()) % 16 | 0, e = Math.floor(e / 16), "x" === t ? n.toString(16) : (7 & n | 8).toString(16); }), (t || "") + r.replace(/-/g, "").toUpperCase(); }
    function c(t) { var e, n; for (e in t)
        n = t[e], t[e] = n; var r = arguments.length >= 2 ? [].slice.call(arguments, 1) : []; return r.forEach(function (r) { var o; o = []; for (e in r)
        n = r[e], o.push(t[e] = n); return o; }), t; }
    function a(t) { return Qt(function () { var e = "0"; t.setItem(e, e); var n = t.getItem(e) === e; return t.removeItem(e), n; }); }
    function u(t) { for (var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], n = "", r = 0; e > r; r += 1)
        n += t; return n; }
    function s(t, e, n) { return t ? t && t.length >= n ? t : t + u(e, Math.ceil(n - t.length) / e.length) : t; }
    function f(t, e, n) { return function () { Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]); var r, o; for (r = 0; r < e.length; r += 1)
        if (o = e[r], Qt(o, this, arguments) === !1)
            return; var i = Qt(t, this, arguments); if (i === !1)
        return !1; for (r = 0; r < n.length; r += 1)
        o = n[r], Qt(o, this, arguments); return i; }; }
    function g(t) { if (!t)
        return ""; var e = t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/); return e ? e[3] : ""; }
    function l(t, e, n) { return [].slice.call(t, e, n); }
    function p(t) { var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? 10 : arguments[2]; return t >= 1e21 && (t = 9527e16), Gt.parseInt(t, n) || e; }
    function d(t) { return Math.min(99e19, t); }
    function h(t) { try {
        return t ? JSON.stringify(t) : null;
    }
    catch (e) {
        o("invalid json format");
    } return null; }
    function m(t) { try {
        return t ? JSON.parse(t) : null;
    }
    catch (e) {
        o("invalid json string");
    } return null; }
    function b(t, e) { var n = this; this.duration = e, this.status = "running", this.timer = kt(function () { return n.run(); }, this.duration), this.run = function () { "cancelled" !== n.status && (Ht(n.timer), Ct.attempt(t), n.timer = kt(function () { return n.run(); }, n.duration)); }, this.stop = function () { n.status = "stopped", Ht(n.timer); }, this.reset = function (t) { "cancelled" !== n.status && (n.stop(), t && (n.duration = t), n.run()); }, this.cancel = function () { this.status = "cancelled", Ht(this.timer); }; }
    function j(t) { St && (St.stop(), kt(function () { St && St.reset(t); }, t), t && (Vt.interval = t)); }
    function v() { St && (St.cancel(), St = null); }
    function T() { St && St.stop(); }
    function E() { St && St.run(); }
    function I(t, e) { St = new b(t, e); }
    function O() { if (Xt)
        return Xt; if ($t += 1, !($t > 4)) {
        var t = { egret: "egret", layabox: "layabox", cocos: "cc.game", impact: "ig", phaser: "Phaser", pixi: "PIXI", create: "createjs", three: "THREE", gameMaker: "asset_get_type", playCanvas: "pc.fw", turbulenz: "TurbulenzEngine", quintus: "Quintus", melon: "me.game", lychee: "lychee", wade: "wade.addSceneObject", crafty: "Crafty", lime: "lime.Scene", enchant: "enchant", isogenic: "IgeEngine", gameclosure: "GC.Application", panda: "game.Scene", kiwi: "Kiwi", jaws: "jaws", sirius2d: "ss2d", collie: "collie", physics: "Physics", stage: "Stage.Anim", babylon: "BABYLON" };
        for (var e in t) {
            var n = t[e];
            if (n.indexOf(".") > -1) {
                var r = n.split("."), o = Gt[r[0]];
                if (o && o[r[1]])
                    return Xt = e, e;
            }
            else if (Gt[n])
                return Xt = e, e;
        }
    } }
    function y() { var t = Vt.loginTime || Vt.initTime; return { loginTime: t, onlineTime: Ct.parseInt(Date.now() / 1e3) - t || 1, extendMap: { from: Vt.from, engine: O() || "", app: Vt.app } }; }
    function _(t, e) { var n = { headerInfo: le, onlineInfo: y(), errorInfoList: Jt.concat(), eventInfoList: pe.concat() }; return t && (n.paymentInfo = t), e && (n.userInfo = e), n; }
    function S() { pe.length = 0, Jt.length = 0; }
    function A() { Ze.setItem(Lt.LOGOUT_TIME, Ct.parseInt(Date.now() / 1e3)), (Jt.length || pe.length) && Ze.setItem(Lt.QUIT_SNAPSHOT, Ct.jsonStringify(_())); }
    function C() { var t = Ze.getItem(Lt.QUIT_SNAPSHOT); return t && Ct.jsonParse(t); }
    function D(t) { de >= Nt.MAX_ERROR_COUNT || (Jt.push(t), de += 1); }
    function N(t) { pe.push(t); }
    function L(t, e) { if (!t)
        return void Ct.tryThrow("Missing eventId"); var n = function (t) { return t.replace(/%/g, "_"); }; arguments.length > 2 && (e = arguments[2]); var r = {}; if (Ct.isObject(e))
        for (var o in e)
            r[n(o)] = "number" == typeof e[o] ? e[o] : encodeURIComponent(e[o]); var i = { eventId: n(t), eventMap: r }; return Dt.addEvent(i), e && e.immediate === !0 && (At.reset(), At.run()), i; }
    function w() { return le.uid || ""; }
    function x(t) { var e = Gt.egret, n = new e.URLLoader, r = Date.now(); n.addEventListener(e.Event.COMPLETE, function (e) { var n = Date.now() - r, o = e.target, i = "success" === o.data; Ct.attempt(i ? t.success : t.error, o, [o, n, n >= t.timeout]), Ct.attempt(t.complete, o, [o, n]); }); var o = new e.URLRequest(t.url); o.method = t.method || e.URLRequestMethod.POST, o.data = Ct.jsonStringify(t.data), n.load(o); }
    function R() { if (zt && n(zt.createElement)) {
        var t = zt.createElement("div");
        if (!t)
            return !1;
        if (n(t.querySelector)) {
            t.innerHTML = "<i></i>";
            var e = t.querySelector("i");
            return !!e && "I" === e.tagName;
        }
        if (n(t.getElementsByTagName)) {
            var r = t.getElementsByTagName("i");
            return !!r && 1 === r.length;
        }
    } return !1; }
    function P() { return Gt.cc.loader.getXMLHttpRequest(); }
    function U(t) { var e = sn(); en && (e.timeout = t.timeout), e.open(t.method || "POST", t.url, !0), pn(e, "text/plain; charset=UTF-8"); var n = Date.now(); e.onreadystatechange = function () { if (4 === this.readyState) {
        var e = this.status >= 200 && this.status < 300, r = Date.now() - n;
        Ct.attempt(e ? t.success : t.error, this, [this, r]), Ct.attempt(t.complete, this, [this, r]), this.onreadystatechange = null, this.ontimeout = null;
    } }, en && (e.ontimeout = function () { var e = Date.now() - n; Ct.attempt(t.error, this, [this, e, !0]), Ct.attempt(t.complete, this, [this, e]), this.onreadystatechange = null, this.ontimeout = null; }), e.send(Ct.jsonStringify(t.data)); }
    function M(e, n) { var r = Date.now(); if (!n) {
        if (r - jn < Nt.ASAP_TIMEOUT)
            return void Ct.tryThrow("Request dropped: rate limit");
        jn = r;
    } bn += 1, console.log(e.data), t.report = e.data, dn({ url: e.url, data: e.data, success: function (t, n) { Ct.attempt(e.success, t, [t, n]); }, error: function (t, n, r) { tn += 1, Ct.attempt(e.error, t, [t, n, r]); }, complete: function (t, n) { if (Ct.attempt(e.complete, t, [t, n]), t.getAllResponseHeaders && t.getResponseHeader) {
            var r = t.getAllResponseHeaders(), o = "X-Rate-Limit";
            if (-1 !== r.indexOf(o)) {
                var i = Ct.parseInt(t.getResponseHeader(o));
                i > 1 && At.reset(1e3 * i);
            }
        } } }); }
    function V(t) { if (!t)
        return !1; var e = t.onlineInfo.onlineTime; return 1 > e || e > Nt.MAX_ONLINE_TIME ? (Ct.tryThrow("Illegal online time"), !1) : !0; }
    function F() { return Vt.inited ? void 0 : (Ct.tryThrow("DCAgent.init needed"), !1); }
    function G() { return Vt.loginTime ? void 0 : (Ct.tryThrow("DCAgent.login needed"), !1); }
    function k() { return Vt.destroyed ? (Ct.tryThrow("DCAgent is destroyed already"), !1) : void 0; }
    function H(t) { return t + "?__deuid=" + le.uid + "&__deappid=" + le.appId; }
    function B(t) { return t + "?type=h520&appId=" + le.appId + "&uid=" + le.uid + "&mac=" + (le.mac || "") + "&imei=" + (le.imei || "") + "&idfa=" + (le.idfa || ""); }
    function X(t, e, n) { if (t || !Ct.hiddenProperty || !zt[Ct.hiddenProperty]) {
        var r = { url: Rt.appendOnline(Rt.API_PATH) };
        if (bn && bn % Vt.oss === 0 && Dt.addEvent({ eventId: Lt.REQ_KEY, eventMap: { succ: bn - tn, fail: tn, total: bn } }), r.data = Dt.collect(e, n), xt.isParamsValid(r.data)) {
            Dt.clear();
            var o = r.data.errorInfoList, i = r.data.eventInfoList;
            (i.length || o.length) && (r.error = function () { o.forEach(function (t) { Dt.addError(t); }), i.forEach(function (t) { Dt.addEvent(t); }); }), M(r, t);
        }
    } }
    function q(t) { t || (t = Ct.isDebug ? Nt.ASAP_TIMEOUT_DEBUG : Nt.ASAP_TIMEOUT), Ht(hn), At.stop(), hn = kt(function () { At.run(); }, t); }
    function K(t) { if (!t)
        return void Ct.tryThrow("Missing accountID"); if (le.accountId === t)
        return void (Vt.loginTime = Vt.loginTime || Ct.parseInt(Date.now() / 1e3)); Pt.setPollingDebounce(Vt.interval), X(!0), Vt.loginTime = Ct.parseInt(Date.now() / 1e3); var e = Lt.ACCOUNT_RELATED_SETTINGS + "," + Lt.ACCOUNT_ROLE_SETTINGS; e.split(",").forEach(function (t) { return le[t] = ""; }), le.age = Nt.DEFAULT_AGE, le.gender = Nt.DEFAULT_GENDER, le.roleLevel = Nt.DEFAULT_ROLE_LEVEL, le.accountId = t, X(!0); }
    function Y(t, e, n, r) { var o = arguments; Lt.ACCOUNT_ROLE_SETTINGS.split(",").forEach(function (t, e) { return le[t] = o[e] || ""; }), le.roleLevel = Ct.parseInt(r) || 1; }
    function Q(t, e, n, r) { Y(t, e, n, r), L("DE_EVENT_CREATE_ROLE", { roleId: String(t), roleRace: String(e), roleClass: String(n) }); }
    function z(t) { le.gender = 2 === t ? 2 : 1; }
    function W(t) { le.gameServer = String(t); }
    function J(t) { t = Ct.parseInt(t), le.age = t > 0 && 128 > t ? t : 0; }
    function $(t) { le.accountType = String(t); }
    function Z(t, e) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_TASK, { actionType: "taskUnfinish", taskId: String(t), elapsed: e }); }
    function tt(t, e) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_TASK, { actionType: "taskFinish", taskId: String(t), elapsed: e }); }
    function et(t) { if (!t || !t.hasOwnProperty("amount"))
        return void Ct.tryThrow("Missing amount"); var e = { currencyAmount: Ct.max(parseFloat(t.amount, 10) || 0), currencyType: t.currencyType || "CNY", payType: String(t.payType || ""), iapid: String(t.iapid || ""), payTime: Ct.parseInt(Date.now() / 1e3), extendMap: { orderId: String(t.orderId || "") } }; return X(!0, e), e; }
    function nt(t, e) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_MISSION, { actionType: "guankaUnfinish", guankaId: String(t), duration: e }); }
    function rt(t, e) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_MISSION, { actionType: "guankaFinish", guankaId: String(t), duration: e }); }
    function ot(t, e, n) { return t = Ct.parseInt(t), e = Ct.parseInt(e), n = Ct.parseInt(n), 0 > t || 0 > e || t > e || 0 > n ? (Ct.tryThrow("Argument error"), !1) : (le.roleLevel = e, void L(Lt.EVT_LEVEL, { startLevel: t, endLevel: e, duration: n })); }
    function it(t, e, n, r) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_ITEM, { actionType: "itemUse", itemId: String(t), itemNum: e, reason: String(r), missonID: String(n) }); }
    function ct(t, e, n, r) { return e = Ct.parseInt(e), 0 > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_ITEM, { actionType: "itemGet", itemId: String(t), itemNum: e, reason: String(r), missonID: String(n) }); }
    function at(t, e, n, r, o) { return e = Ct.parseInt(e), r = Ct.parseInt(r), 0 > e || 0 > r ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_ITEM, { actionType: "itemBuy", itemId: String(t), itemNum: e, coinType: String(n), coinNum: r, missonID: String(o) }); }
    function ut(t, e, n, r) { return e = Ct.parseInt(e), t = Ct.parseInt(t), 0 > e || 0 > t ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_COIN, { actionType: "coinUse", coinType: String(n), balanceNum: e, coinNum: t, reason: String(r) }); }
    function st(t, e, n, r) { return e = Ct.parseInt(e), t = Ct.parseInt(t), 0 > e || 0 > t || t > e ? (Ct.tryThrow("Argument error"), !1) : void L(Lt.EVT_COIN, { actionType: "coinGet", coinType: String(n), balanceNum: e, coinNum: t, reason: String(r) }); }
    function ft() { for (var t = ["pagehide", "beforeunload", "unload"], e = 0; e < t.length; e += 1)
        if ("on" + t[e] in Gt)
            return t[e]; }
    function gt(t) { if (Gt.addEventListener) {
        var e = ft();
        e && Gt.addEventListener(e, t);
    } }
    function lt(t) { if (Vt.storage && (gt(Dt.saveToStorage), !t)) {
        var e = Dt.loadFromStorage();
        e && (M({ url: Rt.appendOnline(Rt.API_PATH), data: e }, !0), Ze.removeItem(Lt.QUIT_SNAPSHOT));
    } }
    function pt() { Gt.addEventListener && Gt.addEventListener("error", function (t) { Ct.attempt(function () { var e = {}, n = ["colno", "filename", "lineno", "message"]; n.forEach(function (n) { return e[n] = t[n] || "1"; }); var r = t.error || {}; if (e.stack = encodeURIComponent(r.stack || r.stacktrace || ""), e.type = r.name || "Error", e.timestamp = parseInt(t.timeStamp / 1e3), Ct.isFunction(Vt.getErrorScene)) {
        var o = Ct.attempt(Vt.getErrorScene, r, [t]);
        if (o) {
            if (Ct.isObject(o)) {
                var i = "";
                for (var c in o)
                    i += "	" + c + "=" + o[c] + "\n";
                o = i;
            }
            else
                o = String(o);
            e.stack += "\n\nError scene:\n" + encodeURIComponent(o);
        }
    } Dt.addError(e); }); }, !1); }
    function dt(t) { return wt.isStandardBrowser || Lt.CLIENT_KEY === t ? t : le.appId + "." + t; }
    function ht(t, e) { t = dt(t), Ze.setItem(t, e), An.set(t, e, 3650); }
    function mt(t) { return t = dt(t), Ze.getItem(t) || An.get(t); }
    function bt() { var t = Date.now().toString(36).toUpperCase(), e = Mt.engine; return e.egret ? Lt.EGRET_PREFIX + t : e.layabox ? Lt.LAYA_PREFIX + t : e.cocos ? Lt.COCOS_PREFIX + t : Lt.UNKNOW_ENGINE + t; }
    function jt(t) { var e, n; e = Array.prototype.forEach, n = Array.prototype.map, this.each = function (t, n, r) { if (null !== t)
        if (e && t.forEach === e)
            t.forEach(n, r);
        else if (t.length === +t.length) {
            for (var o = 0, i = t.length; i > o; o++)
                if (n.call(r, t[o], o, t) === {})
                    return;
        }
        else
            for (var c in t)
                if (t.hasOwnProperty(c) && n.call(r, t[c], c, t) === {})
                    return; }, this.map = function (t, e, r) { var o = []; return null == t ? o : n && t.map === n ? t.map(e, r) : (this.each(t, function (t, n, i) { o[o.length] = e.call(r, t, n, i); }), o); }, "object" == typeof t ? (this.hasher = t.hasher, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t); }
    function vt() { var t; try {
        if (wt.isStandardBrowser)
            t = new Nn({ canvas: !0, screen_resolution: !0, ie_activex: !0 }).get().toString();
        else if (Mt.engine.layabox) {
            var e = Gt.layabox.getDeviceInfo() || {};
            t = e.mac || e.idfa, t = t && t.replace(/[-_:=\s]+/g, "").toUpperCase();
        }
    }
    catch (n) {
        t = null;
    } return t = Ct.padding(t, Lt.PADDING_STRING, Nt.UID_MIN_LENGTH), t || Ct.uuid(bt()); }
    function Tt(t) { if (le.uid) {
        var e = Ct.padding(le.uid, Lt.PADDING_STRING, Nt.UID_MIN_LENGTH);
        t !== e && (le.uid = e, t = e, Ze.setItem(Lt.CREATE_TIME, Ct.parseInt(Date.now() / 1e3)));
    } var n = t || vt(); return Ut.setItem(Lt.CLIENT_KEY, n), n; }
    function Et(t) { var e = Ut.getItem(Lt.CLIENT_KEY), n = e ? 0 : 1, r = Tt(e); le.uid = r, le.accountId = r, t.errorReport && pt(), Vt.initTime = Ct.parseInt(Date.now() / 1e3); var o = Ze.getItem(Lt.CREATE_TIME); o || (o = Vt.initTime, Ze.setItem(Lt.CREATE_TIME, o)), Vt.createTime = Ct.parseInt(o); var i = on.href || "!"; Dt.addEvent({ eventId: Lt.EVT_PV, eventMap: { page: encodeURI(i.split("?")[0]) } }); var c = n ? { actTime: o, regTime: o } : null; X(!0, null, c), lt(n); var a = Ct.isDebug ? Nt.MIN_ONLINE_INTERVAL_DEBUG : Nt.MIN_ONLINE_INTERVAL, u = 1e3 * Math.max(a, parseFloat(t.interval || a)); At.set(X, u), Vt.interval = u, Vt.inited = !0; }
    function It(t) { return Vt.storage = Ct.isLocalStorageSupported(Ze), t.uid || Vt.storage ? Vt.inited ? "Initialization ignored" : t && t.appId ? (t.appId = t.appId.toUpperCase(), Vt.oss = "number" == typeof t.oss ? t.oss : 0, Vt.getErrorScene = t.getErrorScene, Vt.app = t.appName || "", Vt.from = t.from || Ct.getHostName(zt.referrer), void Lt.USER_INIT_BASE_SETTINGS.split(",").forEach(function (e) { t.hasOwnProperty(e) && (le[e] = t[e]); })) : "Missing appId" : wt.hasStorage ? "Storage quota error" : "Storage not support"; }
    function Ot(t) { if (xt.shouldNotBeDestoryed() !== !1) {
        var e = It(t);
        if (e)
            return Ct.tryThrow(e);
        Et(t), Ct.isDebug || M({ url: Rt.appendEcho(wt.protocol + "//" + Lt.HOST + "/echo"), method: "GET" }, !0);
    } }
    function yt() { return Vt.inited; }
    function _t() { v(), Vt.destroyed = !0; }
    var St, At = { get reset() { return j; }, get cancel() { return v; }, get stop() { return T; }, get run() { return E; }, get set() { return I; } }, Ct = { get isDebug() { return Kt; }, get noop() { return e; }, get isFunction() { return n; }, get isObject() { return r; }, get log() { return o; }, get tryThrow() { return Yt; }, get uuid() { return i; }, get extend() { return c; }, get attempt() { return Qt; }, get isLocalStorageSupported() { return a; }, get repeat() { return u; }, get padding() { return s; }, get aspect() { return f; }, get getHostName() { return g; }, get hiddenProperty() { return Wt; }, get slice() { return l; }, get parseInt() { return p; }, get max() { return d; }, get jsonStringify() { return h; }, get jsonParse() { return m; } }, Dt = { get getOnlineInfo() { return y; }, get collect() { return _; }, get clear() { return S; }, get saveToStorage() { return A; }, get loadFromStorage() { return C; }, get addError() { return D; }, get addEvent() { return N; } }, Nt = { get REQUEST_TIME_OUT() { return Zt; }, get MAX_ONLINE_TIME() { return te; }, get MIN_ONLINE_INTERVAL() { return ee; }, get MIN_ONLINE_INTERVAL_DEBUG() { return ne; }, get UID_MIN_LENGTH() { return re; }, get ASAP_TIMEOUT() { return oe; }, get ASAP_TIMEOUT_DEBUG() { return ie; }, get MAX_ERROR_COUNT() { return ce; }, get DEFAULT_AGE() { return ae; }, get DEFAULT_GENDER() { return ue; }, get DEFAULT_ROLE_LEVEL() { return se; }, get DEFAULT_NET_TYPE() { return fe; }, get DEFAULT_PLATFORM() { return ge; } }, Lt = { get HOST() { return Ce; }, get CREATE_TIME() { return De; }, get EGRET_PREFIX() { return Ne; }, get LAYA_PREFIX() { return Le; }, get COCOS_PREFIX() { return we; }, get UNKNOW_ENGINE() { return xe; }, get PARENT_KEY() { return Re; }, get EVENTS_KEY() { return Pe; }, get ERRORS_KEY() { return Ue; }, get CLIENT_KEY() { return Me; }, get QUIT_SNAPSHOT() { return Ve; }, get LOGOUT_TIME() { return Fe; }, get API_PATH() { return Ge; }, get PADDING_STRING() { return ke; }, get REQ_KEY() { return He; }, get USER_INIT_BASE_SETTINGS() { return Be; }, get ACCOUNT_RELATED_SETTINGS() { return Xe; }, get ACCOUNT_ROLE_SETTINGS() { return qe; }, get EVT_COIN() { return Ke; }, get EVT_ITEM() { return Ye; }, get EVT_LEVEL() { return Qe; }, get EVT_MISSION() { return ze; }, get EVT_TASK() { return We; }, get EVT_PV() { return Je; } }, wt = { get hasStorage() { return $e; }, get isStandardBrowser() { return nn; }, get hasCookie() { return rn; }, get protocol() { return cn; }, get useXDR() { return an; }, get device() { return _e; } }, xt = { get isParamsValid() { return V; }, get shouldBeInited() { return F; }, get shouldBeLoggedIn() { return G; }, get shouldNotBeDestoryed() { return k; } }, Rt = { get API_PATH() { return vn; }, get appendOnline() { return H; }, get appendEcho() { return B; } }, Pt = { get setPollingDebounce() { return q; } }, Ut = { get setItem() { return ht; }, get getItem() { return mt; } }, Mt = { get engine() { return Bt; }, get "default"() { return O; } }, Vt = { inited: !1 }, Ft = (1, eval)("this"), Gt = Ft || {}, kt = Gt.setTimeout, Ht = Gt.clearTimeout, Bt = { isEgret: !!Gt.egret, isLayabox: !!Gt.layabox, isCocos: !!Gt.cc && !!Gt.cc.game };
    Bt.isEgret && (kt = function (t, e) { Gt.egret.setTimeout(t, Gt, e); }, Ht = function (t) { Gt.egret.clearTimeout(t); });
    var Xt, qt = Object.prototype.toString, Kt = Gt.DCAGENT_DEBUG_OPEN, Yt = Kt ? function (t) { throw new Error(t); } : function (t) { o(t); }, Qt = Kt ? function (t, e, r) { return n(t) ? t.apply(e, r) : void 0; } : function (t, e, r) { if (n(t))
        try {
            return t.apply(e, r);
        }
        catch (i) {
            o("exec error for function:\n " + t.toString());
        } }, zt = Ft.document || {}, Wt = "hidden" in zt ? "hidden" : "webkitHidden" in zt ? "webkitHidden" : "mozHidden" in zt ? "mozHidden" : "msHidden" in zt ? "msHidden" : null, Jt = [], $t = 0;
    t.version = 24;
    var Zt = 3e4, te = 172800, ee = 40, ne = 15, re = 32, oe = 5e3, ie = 2e3, ce = 100, ae = 0, ue = 0, se = 0, fe = 3, ge = 0, le = { accountId: "", accountType: "", age: Nt.DEFAULT_AGE, appId: "", appVersion: "", brand: "", channel: "", customDeviceId: "", gameServer: "", gender: Nt.DEFAULT_GENDER, idfa: "", imei: "", lonLat: "", mac: "", netType: Nt.DEFAULT_NET_TYPE, operator: "", osVersion: "", platform: Nt.DEFAULT_PLATFORM, resolution: "", roleClass: "", roleId: "", roleLevel: Nt.DEFAULT_ROLE_LEVEL, roleRace: "", simCardOp: "", uid: "", ver: t.version }, pe = [], de = 0, he = Nt.DEFAULT_PLATFORM, me = Gt.screen || {}, be = me.width && me.width + "*" + me.height, je = "0*0";
    be || (be = je);
    var ve = "", Te = "", Ee = Gt.navigator && Gt.navigator.userAgent || "";
    if (!Ee) {
        var Ie = ["ios", "android"];
        if (Bt.layabox) {
            var Oe = Gt.layabox.getDeviceInfo() || {};
            be = Oe.resolution || je, Te = Oe.phonemodel, he = Ie.indexOf(Oe.os.toLowerCase()), ve = (Oe.os + " " + Oe.osversion).toLowerCase();
        }
        else if (Bt.cocos) {
            var ye = Gt.cc.view.getViewPortRect() || {};
            be = ye.width + "*" + ye.height, he = Ie.indexOf(Gt.cc.sys.os.toLowerCase());
        }
        -1 === [0, 1, 2, 3].indexOf(he) && (he = Nt.DEFAULT_PLATFORM);
    }
    var _e = { resolution: be, brand: Te, osVersion: ve, platform: he };
    for (var Se in _e)
        le[Se] = le[Se] || _e[Se];
    var Ae, Ce = "rd.gdatacube.net", De = "dcagent_create_time", Ne = "EGRET", Le = "LAYA", we = "COCOS", xe = "UE", Re = "dcagent_parent_id", Pe = "dcagent_client_events", Ue = "dcagent_client_errors", Me = "dcagent_client_id", Ve = "dcagent_snapshot", Fe = "dc_p_lo", Ge = "/dc/hh5/sync", ke = "0A", He = "DE_EVENT_OSS", Be = "appId,appVersion,brand,channel,customDeviceId,idfa,imei,lonLat,mac,netType,operator,osVersion,platform,simCardOp,uid", Xe = "accountId,accountType,age,gender,gameServer", qe = "roleId,roleRace,roleClass,roleLevel", Ke = "DE_EVENT_COIN_ACTION", Ye = "DE_EVENT_ITEM_ACTION", Qe = "DE_EVENT_LEVELUP", ze = "DE_EVENT_GUANKA_ACTION", We = "DE_EVENT_TASK_ACTION", Je = "DE_EVENT_PV", $e = !!Gt.localStorage || Bt.isEgret || Bt.isCocos || Bt.isLayabox;
    Ae = Bt.isEgret ? Gt.egret.localStorage : Bt.isCocos ? Gt.cc.sys.localStorage : $e ? Gt.localStorage : { getItem: e, setItem: e, removeItem: e };
    var Ze = Ae, tn = 0, en = !0, nn = R(), rn = nn && "cookie" in zt, on = Ft.location || {}, cn = "https:" === on.protocol ? "https:" : "http:", an = !!Gt.XDomainRequest, un = wt.useXDR ? function () { return new Gt.XDomainRequest; } : function () { return new Gt.XMLHttpRequest; }, sn = Bt.isCocos ? P : un, fn = sn(), gn = !0;
    try {
        fn.contentType = "text/plain; charset=UTF-8";
    }
    catch (ln) {
        gn = !1;
    }
    var pn = wt.useXDR ? function (t, e) { gn && (t.contentType = e); } : function (t, e) { t.setRequestHeader("Content-Type", e); };
    try {
        fn.timeout = 1;
    }
    catch (ln) {
        en = !1;
    }
    var dn = function () { return Gt.XMLHttpRequest || Bt.isCocos ? U : Bt.isEgret ? x : (Ct.log("XMLHttpRequest not found"), Ct.noop); }();
    t.report;
    var hn, mn, bn = 0, jn = Date.now() - Nt.ASAP_TIMEOUT, vn = wt.protocol + "//" + Lt.HOST + Lt.API_PATH, Tn = { login: K, getUid: w, onEvent: L }, En = { onCoinGet: st, onCoinUse: ut, onItemBuy: at, onItemProduce: ct, onItemUse: it, onLevelUp: ot, onMissionFinished: rt, onMissionUnfinished: nt, onPayment: et, onTaskFinished: tt, onTaskUnfinished: Z, setAccountType: $, setAge: J, setGameServer: W, setGender: z, setRoleInfo: Y, createRole: Q }, In = [xt.shouldNotBeDestoryed, xt.shouldBeInited], On = [xt.shouldNotBeDestoryed, xt.shouldBeLoggedIn], yn = [function () { return Pt.setPollingDebounce(); }];
    for (mn in Tn)
        t[mn] = Ct.aspect(Tn[mn], In, "onEvent" === mn && yn);
    for (mn in En)
        t[mn] = Ct.aspect(En[mn], On, "onPayment" !== mn && yn);
    var _n = { get: function (t) { var e = "(^|)\\s*" + t + "=([^\\s]*)", n = zt.cookie.match(new RegExp(e)); return n && n.length >= 3 ? decodeURIComponent(n[2]) : null; }, set: function (t, e, n, r, o, i) { var c; n && (c = new Date, c.setTime(c.getTime() + 864e5 * n)); var a = n ? " expires=" + c.toGMTString() : "", u = " path=" + (o || "/"), s = r ? " domain=" + r : "", f = i ? " secure" : ""; zt.cookie = t + "=" + encodeURIComponent(e) + a + u + s + f; }, remove: function (t, e, n) { _n.set(t, "", -1, e, n); } }, Sn = wt.hasCookie ? _n : { get: Ct.noop, set: Ct.noop }, An = Sn, Cn = Gt.navigator;
    jt.prototype.isIE = function () { return "Microsoft Internet Explorer" === Cn.appName ? !0 : "Netscape" === Cn.appName && /Trident/.test(Cn.userAgent) ? !0 : !1; }, jt.prototype.getRegularPluginsString = function () { return this.map(Cn.plugins, function (t) { var e = this.map(t, function (t) { return [t.type, t.suffixes].join("~"); }).join(","); return [t.name, t.description, e].join("::"); }, this).join(";"); };
    var Dn = Gt.screen;
    jt.prototype.get = function () { var t = []; if (t.push(Cn.userAgent), t.push(Cn.language), t.push(Dn.colorDepth), this.screen_resolution) {
        var e = this.getScreenResolution();
        "undefined" != typeof e && t.push(e.join("x"));
    } return t.push((new Date).getTimezoneOffset()), t.push(this.hasSessionStorage()), t.push(this.hasLocalStorage()), t.push(!!Gt.indexedDB), zt.body ? t.push(typeof zt.body.addBehavior) : t.push("undefined"), t.push(typeof Gt.openDatabase), t.push(Cn.cpuClass), t.push(Cn.platform), t.push(Cn.doNotTrack), t.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(t.join("###"), 31) : this.murmurhash3_32_gc(t.join("###"), 31); }, jt.prototype.murmurhash3_32_gc = function (t, e) { var n, r, o, i, c, a, u, s; for (n = 3 & t.length, r = t.length - n, o = e, c = 3432918353, a = 461845907, s = 0; r > s;)
        u = 255 & t.charCodeAt(s) | (255 & t.charCodeAt(++s)) << 8 | (255 & t.charCodeAt(++s)) << 16 | (255 & t.charCodeAt(++s)) << 24, ++s, u = (65535 & u) * c + (((u >>> 16) * c & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295, o ^= u, o = o << 13 | o >>> 19, i = 5 * (65535 & o) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295, o = (65535 & i) + 27492 + (((i >>> 16) + 58964 & 65535) << 16); switch (u = 0, n) {
        case 3:
            u ^= (255 & t.charCodeAt(s + 2)) << 16;
            break;
        case 2:
            u ^= (255 & t.charCodeAt(s + 1)) << 8;
            break;
        case 1: u ^= 255 & t.charCodeAt(s), u = (65535 & u) * c + (((u >>> 16) * c & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295, o ^= u;
    } return o ^= t.length, o ^= o >>> 16, o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 13, o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 16, o >>> 0; }, jt.prototype.hasLocalStorage = function () { try {
        return !!Gt.localStorage;
    }
    catch (t) {
        return !0;
    } }, jt.prototype.hasSessionStorage = function () { try {
        return !!Gt.sessionStorage;
    }
    catch (t) {
        return !0;
    } }, jt.prototype.isCanvasSupported = function () { var t = zt.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")); }, jt.prototype.getPluginsString = function () { return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString(); }, jt.prototype.getIEPluginsString = function () { if (Gt.ActiveXObject) {
        var t = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
        return this.map(t, function (t) { try {
            return new Gt.ActiveXObject(t), t;
        }
        catch (e) {
            return null;
        } }).join(";");
    } return ""; }, jt.prototype.getScreenResolution = function () { var t; return t = this.screen_orientation ? Dn.height > Dn.width ? [Dn.height, Dn.width] : [Dn.width, Dn.height] : [Dn.height, Dn.width]; }, jt.prototype.getCanvasFingerprint = function () { var t = zt.createElement("canvas"), e = t.getContext("2d"), n = "http://www.dataeye.com/"; return e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(n, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(n, 4, 17), t.toDataURL(); };
    var Nn = jt;
    t.init = Ot, t.isReady = yt, t.destroy = _t;
    var Ln = Gt.DCAgentObject;
    if (Ln) {
        var wn = Gt[Ln];
        if (Ct.isFunction(wn)) {
            var xn = wn.cache;
            xn.length && (xn.forEach(function (e) { Ct.attempt(t[e[0]], t, Ct.slice(e, 1)); }), xn.length = 0);
        }
    }
    var Rn = { get isNew() { var t = Vt.loginTime || Vt.initTime; return Vt.createTime === t; }, get initTime() { return Vt.initTime; }, get createTime() { return Vt.createTime; }, get loginTime() { return Vt.loginTime; }, get lastLogoutTime() { return parseInt(Ze.getItem(Lt.LOGOUT_TIME)); }, get reportCount() { return bn; }, get reportFailedCount() { return tn; } };
    t.state = Vt, t.player = Rn;
});
