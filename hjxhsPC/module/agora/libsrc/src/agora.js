!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t(); }(this, function () { return function (e) { function t(n) { if (i[n])
    return i[n].exports; var o = i[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports; } var i = {}; return t.m = e, t.c = i, t.d = function (e, i, n) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n }); }, t.n = function (e) { var i = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return t.d(i, "a", i), i; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = "", t(t.s = 34); }([function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(13), o = function () { var e, t, i, o, r, a, s = 0; return e = function (e) { e > 4 ? e = 4 : e < 0 && (e = 0), s = e; }, t = function () { var e = arguments[0], t = arguments; if (!(e < s))
            switch (e) {
                case 0:
                    t[0] = (0, n.getTimestamp)() + " DEBUG:", console.log.apply(console, t);
                    break;
                case 1:
                    t[0] = (0, n.getTimestamp)() + " INFO:", console.log.apply(console, t);
                    break;
                case 2:
                    t[0] = (0, n.getTimestamp)() + " WARN:", console.warn.apply(console, t);
                    break;
                case 3:
                    t[0] = (0, n.getTimestamp)() + " ERROR:", console.error.apply(console, t);
                    break;
                default: return t[0] = (0, n.getTimestamp)() + " DEFAULT:", void console.log.apply(console, t);
            } }, i = function () { for (var e = [0], i = 0; i < arguments.length; i++)
            e.push(arguments[i]); t.apply(this, e); }, o = function () { for (var e = [1], i = 0; i < arguments.length; i++)
            e.push(arguments[i]); t.apply(this, e); }, r = function () { for (var e = [2], i = 0; i < arguments.length; i++)
            e.push(arguments[i]); t.apply(this, e); }, a = function () { for (var e = [3], i = 0; i < arguments.length; i++)
            e.push(arguments[i]); t.apply(this, e); }, { DEBUG: 0, INFO: 1, WARNING: 2, ERROR: 3, NONE: 4, setLogLevel: e, log: t, debug: i, info: o, warning: r, error: a }; }();
        t.default = o;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = ["webcs-1.agora.io", "webcs-2.agora.io"], o = ["webcs-3.agora.io", "webcs-4.agora.io"], r = { "90p_1": [160, 90], "120p_1": [160, 120], "120p_3": [120, 120], "120p_4": [212, 120], "180p_1": [320, 180], "180p_3": [180, 180], "180p_4": [240, 180], "240p_1": [320, 240], "240p_3": [240, 240], "240p_4": [424, 240], "360p_1": [640, 360], "360p_3": [360, 360], "360p_4": [640, 360], "360p_6": [360, 360], "360p_7": [480, 360], "360p_8": [480, 360], "360p_9": [640, 360], "360p_10": [640, 360], "360p_11": [640, 360], "480p_1": [640, 480], "480p_2": [640, 480], "480p_3": [480, 480], "480p_4": [640, 480], "480p_6": [480, 480], "480p_8": [848, 480], "480p_9": [848, 480], "480p_10": [640, 480], "720p_1": [1280, 720], "720p_2": [1280, 720], "720p_3": [1280, 720], "720p_5": [960, 720], "720p_6": [960, 720], "1080p_1": [1920, 1080], "1080p_2": [1920, 1080], "1080p_3": [1920, 1080], "1080p_5": [1920, 1080], "1440p_1": [2560, 1440], "1440p_2": [2560, 1440], "4k_1": [3840, 2160], "4k_3": [3840, 2160] };
        t.GIT_VERSION = "release_20180410_01-2-g5dcca91", t.VERSION = "2.2.0", t.WEBCS_DOMAIN = n, t.WEBCS_DOMAIN_BACKUP_LIST = o, t.EVENT_REPORT_DOMAIN = "webcollector-1.agora.io", t.EVENT_REPORT_BACKUP_DOMAIN = "webcollector-2.agora.io", t.WEBCS_BACKUP_CONNECT_TIMEOUT = 6e3, t.HTTP_CONNECT_TIMEOUT = 5e3, t.SUPPORT_RESOLUTION_LIST = r;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        function o() { return (0, l.default)().replace(/-/g, "").toUpperCase(); }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.random = t.safeCall = t.is32Uint = t.vsResHack = t.CSCrashRecord = t.audioLevelHelper = t.generateSessionId = t.isLiveTranscodingValid = t.checkSystemRequirements = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, a = i(3), s = function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t; }(a), d = i(0), c = n(d), u = i(14), l = n(u), p = function () { var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia, i = window.WebSocket, n = !!e && !!t && !!i, o = !1; return c.default.debug(s.getBrowserInfo(), "isAPISupport:" + n), s.isChrome() && s.getBrowserVersion() >= 58 && "iOS" !== s.getBrowserOS() && (o = !0), s.isFireFox() && s.getBrowserVersion() >= 56 && (o = !0), s.isOpera() && s.getBrowserVersion() >= 45 && (o = !0), s.isSafari() && s.getBrowserVersion() >= 11 && (o = !0), (s.isWeChatBrowser() || s.isQQBrowser()) && "iOS" !== s.getBrowserOS() && (o = !0), s.isSupportedPC() || s.isSupportedMobile() || (o = !1), n && o; }, f = function () { var e = arguments[0]; if ("function" == typeof e) {
            var t = Array.prototype.slice.call(arguments, 1);
            e.apply(null, t);
        } }, m = window.AudioContext || window.webkitAudioContext, g = m ? new m : null, v = function (e) { if (g)
            return this.audioContext = g, this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e), this.analyser = this.audioContext.createAnalyser(), this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount), this.sourceNode.connect(this.analyser), this.getAudioLevel = function () { if (this.analyser) {
                this.analyser.getByteTimeDomainData(this.timeDomainData);
                for (var e = 0, t = 0; t < this.timeDomainData.length; t++)
                    e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
                return e / 128;
            } return c.default.warning("can't find analyser in audioLevelHelper"), 0; }, this; }, _ = { shouldBlock: function () { if (localStorage) {
                var e = JSON.parse(localStorage.getItem("agoraCSCrashRecord"));
                return !!(e && e.length > 6) && (new Date).getTime() - e[e.length - 6] - 1e4 < 0;
            } return !1; }, record: function (e) { if (localStorage) {
                var t = JSON.parse(localStorage.getItem("agoraCSCrashRecord"));
                t = !t || t.length > 50 ? [] : t, t.push(e), localStorage.setItem("agoraCSCrashRecord", JSON.stringify(t));
            } } }, S = function (e, t, i) { try {
            var n = document.createElement("video");
            n.setAttribute("autoplay", ""), n.setAttribute("muted", ""), n.setAttribute("playsinline", ""), n.setAttribute("style", "position: absolute; top: 0; left: 0; width:1px; high:1px;"), document.body.appendChild(n), n.addEventListener("playing", function (e) { s.isFireFox() ? n.videoWidth && (t(n.videoWidth, n.videoHeight), document.body.removeChild(n)) : (t(n.videoWidth, n.videoHeight), document.body.removeChild(n)); }), n.srcObject = e;
        }
        catch (e) {
            i(e);
        } }, h = function (e) { return !!(0 <= e && e <= 4294967295); }, E = function (e) { var t = ["lowLatency", "userConfigExtraInfo", "transcodingUsers"]; for (var i in e)
            if ("lowLatency" === i && "boolean" != typeof e[i] || "userConfigExtraInfo" === i && "object" !== r(e[i]) || "transcodingUsers" === i && !b(e[i]) || !~t.indexOf(i) && "number" != typeof e[i])
                throw new Error("Param [" + i + "] is inVaild"); return !0; }, b = function (e) { for (var t = 0; t < e.length; t++)
            for (var i in e[t])
                if ("number" != typeof e[t][i])
                    throw new Error("Param user[" + t + "] - [" + i + "] is inVaild"); return !0; }, R = function (e) { isNaN(e) && (e = 1e3); var t = +new Date; t = (9301 * t + 49297) % 233280; var i = t / 233280; return Math.ceil(i * e); };
        t.checkSystemRequirements = p, t.isLiveTranscodingValid = E, t.generateSessionId = o, t.audioLevelHelper = v, t.CSCrashRecord = _, t.vsResHack = S, t.is32Uint = h, t.safeCall = f, t.random = R;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () { var e = m(); return e.name && "Chrome" === e.name; }, o = function () { var e = m(); return e.name && "Safari" === e.name; }, r = function () { var e = m(); return e.name && "Firefox" === e.name; }, a = function () { var e = m(); return e.name && "OPR" === e.name; }, s = function () { var e = m(); return e.name && "QQBrowser" === e.name; }, d = function () { var e = m(); return e.name && "MicroMessenger" === e.name; }, c = function () { var e = p(); return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows"); }, u = function () { var e = p(); return "Android" === e || "iOS" === e; }, l = function () { return m().version; }, p = function () { return m().os; }, f = function () { var e, t = navigator.userAgent, i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; "Chrome" === i[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (i = e), "Safari" === i[1] && null != (e = t.match(/version\/(\d+)/i)) && (i[2] = e[1]), ~t.toLowerCase().indexOf("qqbrowser") && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (i = e), ~t.toLowerCase().indexOf("micromessenger") && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (i = e), ~t.toLowerCase().indexOf("edge") && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (i = e), ~t.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (i = [null, "IE", e[1]]); var n = void 0, o = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }]; for (var r in o) {
            var a = o[r];
            if (a.r.test(navigator.userAgent)) {
                n = a.s;
                break;
            }
        } return { name: i[1], version: i[2], os: n }; }, m = function () { var e = f(); return function () { return e; }; }();
        t.getBrowserInfo = m, t.getBrowserVersion = l, t.getBrowserOS = p, t.isChrome = n, t.isSafari = o, t.isFireFox = r, t.isOpera = a, t.isQQBrowser = s, t.isWeChatBrowser = d, t.isSupportedPC = c, t.isSupportedMobile = u;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () { var e = {}; return e.dispatcher = {}, e.dispatcher.eventListeners = {}, e.addEventListener = function (t, i) { void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(i); }, e.on = e.addEventListener, e.removeEventListener = function (t, i) { var n; -1 !== (n = e.dispatcher.eventListeners[t].indexOf(i)) && e.dispatcher.eventListeners[t].splice(n, 1); }, e.dispatchEvent = function (t) { var i; for (i in e.dispatcher.eventListeners[t.type])
            e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t); }, e.dispatchSocketEvent = function (t) { var i; for (i in e.dispatcher.eventListeners[t.type])
            e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t.msg); }, e; }, o = function (e) { var t = {}; return t.type = e.type, t; }, r = function (e) { var t = o(e); return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t; }, a = function (e) { var t = o(e); return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t; }, s = function (e) { var t = o(e); return t.msg = e.msg, t; }, d = function (e) { var t = o(e); return t.url = e.url, t.reason = e.reason, t; };
        t.EventDispatcher = n, t.StreamEvent = r, t.ClientEvent = a, t.MediaEvent = s, t.LiveStreamingEvent = d;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.SUBSCRIBE = t.PUBLISH = t.JOIN_GATEWAY = t.JOIN_CHOOSE_SERVER = t.SESSION_INIT = t.report = void 0;
        var n = i(1), o = function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t; }(n), r = i(0), a = (function (e) { e && e.__esModule; }(r), i(9)), s = { type: null, sid: null, lts: null, succ: null, cname: null, uid: null, peerid: null, cid: null, elaps: null, extend: null, vid: 0 }, d = function () { var e = {}; return e.list = {}, e.url = (0, a.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_DOMAIN + ":6443/events/report" : "http://" + o.EVENT_REPORT_DOMAIN + ":6080/events/report", e.urlBackup = (0, a.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_BACKUP_DOMAIN + ":6443/events/report" : "http://" + o.EVENT_REPORT_BACKUP_DOMAIN + '":6080/events/report', e.sessionInit = function (t, i) { i.sid = t; var n = Object.assign(s, i); e.list[t] || (n.startTime = +new Date); var r = Object.assign({}, n); delete n.appid, delete n.mode, e.list[t] = n, r.extend = null, r.ver = o.VERSION, r.type = "session_init", r.browser = navigator.userAgent, r.lts = +new Date, r.elaps = r.lts - r.startTime, e.send(r); }, e.joinChooseServer = function (t, i, n) { var o; o = n ? Object.assign(e.list[t], i) : Object.assign({}, e.list[t], i), o.type = "join_choose_server"; var r = +new Date; o.ev_elaps = r - o.lts, o.elaps = r - o.startTime, o.lts = r, o.serverList = JSON.stringify(o.serverList), e.send(o); }, e.joinGateway = function (t, i) { var n = Object.assign(e.list[t], i); n.type = "join_gateway"; var o = +new Date; n.ev_elaps = o - n.lts, n.elaps = o - n.startTime, n.lts = o, e.send(n); }, e.publish = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "publish"; var o = +new Date; n.ev_elaps = o - n.lts, n.elaps = o - n.startTime, n.lts = o, e.send(n); }, e.subscribe = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "subscribe"; var o = +new Date; n.ev_elaps = o - n.lts, n.elaps = o - n.startTime, n.lts = o, e.send(n); }, e.firstRemoteFrame = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "first_remote_frame", n.lts = +new Date, n.elaps = n.lts - n.startTime, e.send(n); }, e.streamSwitch = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "stream_switch", n.isdual = i.isdual, n.lts = +new Date, n.elaps = n.lts - n.startTime, e.send(n); }, e.audioSendingStopped = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "audio_sending_stopped", n.lts = +new Date, n.elaps = n.lts - n.startTime, e.send(n); }, e.videoSendingStopped = function (t, i) { var n = Object.assign({}, e.list[t], i); n.type = "video_sending_stopped", n.lts = +new Date, n.elaps = n.lts - n.startTime, e.send(n); }, e.send = function (t) { try {
            (0, a.post)(e.url, t, null, function (i) { (0, a.post)(e.urlBackup, t, null, function (e) { }, { timeout: 1e4 }); }, { timeout: 1e4 });
        }
        catch (e) { } }, e; }();
        t.report = d, t.SESSION_INIT = "session_init", t.JOIN_CHOOSE_SERVER = "join_choose_server", t.JOIN_GATEWAY = "join_gateway", t.PUBLISH = "publish", t.SUBSCRIBE = "subscribe";
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = { FAILED: "FAILED", INVALID_KEY: "INVALID_KEY", INVALID_OPERATION: "INVALID_OPERATION", INVALID_PARAMETER: "INVALID_PARAMETER", INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM", INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM", INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY", DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT", NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE", NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE", JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT", NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL", LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT", LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED", OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT", OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED", REQUEST_DEFERRED: "REQUEST_DEFERRED", STREAM_ALREADY_PUBLISHED: "STREAM_ALREADY_PUBLISHED", STREAM_NOT_YET_PUBLISHED: "STREAM_NOT_YET_PUBLISHED", JOIN_TOO_FREQUENT: "JOIN_TOO_FREQUENT", SOCKET_ERROR: "SOCKET_ERROR", SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED", PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED", CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR", SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE", JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED", PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED", UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED", SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED", UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED", NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM", ERR_FAILED: "1", ERR_INVALID_VENDOR_KEY: "101", ERR_INVALID_CHANNEL_NAME: "102", WARN_NO_AVAILABLE_CHANNEL: "103", WARN_LOOKUP_CHANNEL_TIMEOUT: "104", WARN_LOOKUP_CHANNEL_REJECTED: "105", WARN_OPEN_CHANNEL_TIMEOUT: "106", WARN_OPEN_CHANNEL_REJECTED: "107", WARN_REQUEST_DEFERRED: "108", ERR_DYNAMIC_KEY_TIMEOUT: "109", ERR_INVALID_DYNAMIC_KEY: "110", ERR_NO_VOCS_AVAILABLE: "2000", ERR_NO_VOS_AVAILABLE: "2001", ERR_JOIN_CHANNEL_TIMEOUT: "2002", IOS_NOT_SUPPORT: "IOS_NOT_SUPPORT", WECHAT_NOT_SUPPORT: "WECHAT_NOT_SUPPORT", SHARING_SCREEN_NOT_SUPPORT: "SHARING_SCREEN_NOT_SUPPORT", STILL_ON_PUBLISHING: "STILL_ON_PUBLISHING", LOW_STREAM_ALREADY_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED", LOW_STREAM_NOT_YET_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED", HIGH_STREAM_NOT_VIDEO_TRACE: "HIGH_STREAM_NOT_VIDEO_TRACE", NOT_FIND_DEVICE_BY_LABEL: "NOT_FIND_DEVICE_BY_LABEL", ENABLE_DUALSTREAM_FAILED: "ENABLE_DUALSTREAM_FAILED", DISABLE_DUALSTREAM_FAILED: "DISABLE_DUALSTREAM_FAILED", ELECTRON_NOT_SUPPORT_SHARING_SCREEN: "ELECTRON_NOT_SUPPORT_SHARING_SCREEN" }, o = { 2000: "ERR_NO_VOCS_AVAILABLE", 2001: "ERR_NO_VOS_AVAILABLE", 2002: "ERR_JOIN_CHANNEL_TIMEOUT", 101: "ERR_INVALID_VENDOR_KEY", 102: "ERR_INVALID_CHANNEL_NAME", 103: "WARN_NO_AVAILABLE_CHANNEL", 104: "WARN_LOOKUP_CHANNEL_TIMEOUT", 105: "WARN_LOOKUP_CHANNEL_REJECTED", 106: "WARN_OPEN_CHANNEL_TIMEOUT", 107: "WARN_OPEN_CHANNEL_REJECTED", 108: "WARN_REQUEST_DEFERRED", 109: "ERR_DYNAMIC_KEY_TIMEOUT", 110: "ERR_NO_AUTHORIZED", 111: "ERR_VOM_SERVICE_UNAVAILABLE", 112: "ERR_NO_CHANNEL_AVAILABLE_CODE", 113: "ERR_TOO_MANY_USERS", 114: "ERR_MASTER_VOCS_UNAVAILABLE", 115: "ERR_INTERNAL_ERROR", 116: "ERR_NO_ACTIVE_STATUS", 117: "ERR_INVALID_UID", 118: "ERR_DYNAMIC_KEY_EXPIRED", 119: "ERR_STATIC_USE_DYANMIC_KE", 120: "ERR_DYNAMIC_USE_STATIC_KE", 2: "K_TIMESTAMP_EXPIRED", 3: "K_CHANNEL_PERMISSION_INVALID", 4: "K_CERTIFICATE_INVALID", 5: "K_CHANNEL_NAME_EMPTY", 6: "K_CHANNEL_NOT_FOUND", 7: "K_TICKET_INVALID", 8: "K_CHANNEL_CONFLICTED", 9: "K_SERVICE_NOT_READY", 10: "K_SERVICE_TOO_HEAVY", 14: "K_UID_BANNED", 15: "K_IP_BANNED", 16: "K_CHANNEL_BANNED" };
        t.default = n, t.GatewayErrorCode = o;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getDevices = t.createStream = t.Stream = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, r = i(18), a = n(r), s = i(8), d = i(4), c = i(0), u = n(c), l = i(3), p = i(27), f = i(2), m = i(5), g = function (e) { function t() { return null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35; } function i() { return null !== window.navigator.userAgent.match("Firefox"); } function n(t, i) { return { width: { ideal: t }, height: { ideal: i }, deviceId: e.cameraId ? { exact: e.cameraId } : void 0 }; } var r = (0, d.EventDispatcher)(); if (r.params = Object.assign({}, e), r.stream = e.stream, r.aux_stream = void 0, r.url = e.url, r.onClose = void 0, r.local = !1, r.video = !!e.video, r.audio = !!e.audio, r.screen = !!e.screen, r.screenAttributes = { width: 1920, height: 1080, maxFr: 5, minFr: 1 }, r.videoSize = e.videoSize, r.player = void 0, r.audioLevelHelper = null, e.attributes = e.attributes || {}, r.videoEnabled = !0, r.audioEnabled = !0, r.lowStream = null, r.videoWidth = 0, r.videoHeight = 0, r.streamId = null, r.streamId = e.streamID, r.mirror = !1 !== e.mirror, !(void 0 === r.videoSize || r.videoSize instanceof Array && 4 === r.videoSize.length))
            throw Error("Invalid Video Size"); r.videoSize = [640, 480, 640, 480], void 0 !== e.local && !0 !== e.local || (r.local = !0), r.initialized = !r.local; var c = { true: !0, unspecified: !0, "90p_1": n(160, 90), "120p_1": n(160, 120), "120p_3": n(120, 120), "120p_4": n(212, 120), "180p_1": n(320, 180), "180p_3": n(180, 180), "180p_4": n(240, 180), "240p_1": n(320, 240), "240p_3": n(240, 240), "240p_4": n(424, 240), "360p_1": n(640, 360), "360p_3": n(360, 360), "360p_4": n(640, 360), "360p_6": n(360, 360), "360p_7": n(480, 360), "360p_8": n(480, 360), "360p_9": n(640, 360), "360p_10": n(640, 360), "360p_11": n(640, 360), "480p_1": n(640, 480), "480p_2": n(640, 480), "480p_3": n(480, 480), "480p_4": n(640, 480), "480p_6": n(480, 480), "480p_8": n(848, 480), "480p_9": n(848, 480), "480p_10": n(640, 480), "720p_1": n(1280, 720), "720p_2": n(1280, 720), "720p_3": n(1280, 720), "720p_5": n(960, 720), "720p_6": n(960, 720), "1080p_1": n(1920, 1080), "1080p_2": n(1920, 1080), "1080p_3": n(1920, 1080), "1080p_5": n(1920, 1080), "1440p_1": n(2560, 1440), "1440p_2": n(2560, 1440), "4k_1": n(3840, 2160), "4k_3": n(3840, 2160) }; return r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0, r.setVideoResolution = function (t) { return t += "", void 0 !== c[t] && (e.video = c[t], e.attributes = e.attributes || {}, e.attributes.resolution = t, !0); }, r.setVideoFrameRate = function (t) { return !(0, l.isFireFox)() && ("object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1], !0)); }, r.setVideoBitRate = function (t) { return "object" === (void 0 === t ? "undefined" : o(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {}, e.attributes.minVideoBW = t[0], e.attributes.maxVideoBW = t[1], !0); }, r.setScreenProfile = function (e) { if ("string" == typeof e && r.screen) {
            switch (e) {
                case "480p_1":
                    r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                    break;
                case "480p_2":
                    r.screenAttributes.width = 640, r.screenAttributes.height = 480, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                    break;
                case "720p_1":
                    r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                    break;
                case "720p_2":
                    r.screenAttributes.width = 1280, r.screenAttributes.height = 720, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
                    break;
                case "1080p_1":
                    r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 5, r.screenAttributes.minFr = 1;
                    break;
                case "1080p_2": r.screenAttributes.width = 1920, r.screenAttributes.height = 1080, r.screenAttributes.maxFr = 30, r.screenAttributes.minFr = 25;
            }
            return !0;
        } return !1; }, r.setVideoProfileCustom = function (e) { r.setVideoResolution(e[0]), r.setVideoFrameRate([e[1], e[1]]), r.setVideoBitRate([e[2], e[2]]); }, r.setVideoProfileCustomPlus = function (t) { console.log(t), e.video = n(t.width, t.height), e.attributes = e.attributes || {}, e.attributes.resolution = t.width + "x" + t.height, r.setVideoFrameRate([t.framerate, t.framerate]), r.setVideoBitRate([t.bitrate, t.bitrate]); }, r.setVideoProfile = function (e) { if (r.profile = e, "string" == typeof e && r.video) {
            switch (e) {
                case "120p":
                case "120P":
                case "120p_1":
                case "120P_1":
                    r.setVideoResolution("120p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 65]);
                    break;
                case "120p_3":
                case "120P_3":
                    r.setVideoResolution("120p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 50]);
                    break;
                case "180p":
                case "180P":
                case "180p_1":
                case "180P_1":
                    r.setVideoResolution("180p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                    break;
                case "180p_3":
                case "180P_3":
                    r.setVideoResolution("180p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 100]);
                    break;
                case "180p_4":
                case "180P_4":
                    r.setVideoResolution("180p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 120]);
                    break;
                case "240p":
                case "240P":
                case "240p_1":
                case "240P_1":
                    r.setVideoResolution("240p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 200]);
                    break;
                case "240p_3":
                case "240P_3":
                    r.setVideoResolution("240p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 140]);
                    break;
                case "240p_4":
                case "240P_4":
                    r.setVideoResolution("240p_4"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([10, 220]);
                    break;
                case "360p":
                case "360P":
                case "360p_1":
                case "360P_1":
                    r.setVideoResolution("360p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                    break;
                case "360p_3":
                case "360P_3":
                    r.setVideoResolution("360p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 260]);
                    break;
                case "360p_4":
                case "360P_4":
                    r.setVideoResolution("360p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                    break;
                case "360p_6":
                case "360P_6":
                    r.setVideoResolution("360p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 400]);
                    break;
                case "360p_7":
                case "360P_7":
                    r.setVideoResolution("360p_7"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 320]);
                    break;
                case "360p_8":
                case "360P_8":
                    r.setVideoResolution("360p_8"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 490]);
                    break;
                case "360p_9":
                case "360P_9":
                    r.setVideoResolution("360p_9"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 800]);
                    break;
                case "360p_10":
                case "360P_10":
                    r.setVideoResolution("360p_10"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 800]);
                    break;
                case "360p_11":
                case "360P_11":
                    r.setVideoResolution("360p_11"), r.setVideoFrameRate([24, 24]), r.setVideoBitRate([20, 1e3]);
                    break;
                case "480p":
                case "480P":
                case "480p_1":
                case "480P_1":
                    r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500]);
                    break;
                case "480p_2":
                case "480P_2":
                    r.setVideoResolution("480p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 1e3]);
                    break;
                case "480p_3":
                case "480P_3":
                    r.setVideoResolution("480p_3"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 400]);
                    break;
                case "480p_4":
                case "480P_4":
                    r.setVideoResolution("480p_4"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 750]);
                    break;
                case "480p_6":
                case "480P_6":
                    r.setVideoResolution("480p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 600]);
                    break;
                case "480p_8":
                case "480P_8":
                    r.setVideoResolution("480p_8"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 610]);
                    break;
                case "480p_9":
                case "480P_9":
                    r.setVideoResolution("480p_9"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([20, 930]);
                    break;
                case "480p_10":
                case "480P_10":
                    r.setVideoResolution("480p_10"), r.setVideoFrameRate([10, 10]), r.setVideoBitRate([20, 400]);
                    break;
                case "720p":
                case "720P":
                case "720p_1":
                case "720P_1":
                    r.setVideoResolution("720p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 1130]);
                    break;
                case "720p_2":
                case "720P_2":
                    r.setVideoResolution("720p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 2e3]);
                    break;
                case "720p_3":
                case "720P_3":
                    r.setVideoResolution("720p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1710]);
                    break;
                case "720p_5":
                case "720P_5":
                    r.setVideoResolution("720p_5"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([30, 910]);
                    break;
                case "720p_6":
                case "720P_6":
                    r.setVideoResolution("720p_6"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([30, 1380]);
                    break;
                case "1080p":
                case "1080P":
                case "1080p_1":
                case "1080P_1":
                    r.setVideoResolution("1080p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([50, 2080]);
                    break;
                case "1080p_2":
                case "1080P_2":
                    r.setVideoResolution("1080p_2"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3e3]);
                    break;
                case "1080p_3":
                case "1080P_3":
                    r.setVideoResolution("1080p_3"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 3150]);
                    break;
                case "1080p_5":
                case "1080P_5":
                    r.setVideoResolution("1080p_5"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 4780]);
                    break;
                case "1440p":
                case "1440P":
                case "1440p_1":
                case "1440P_1":
                    r.setVideoResolution("1440p_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 4850]);
                    break;
                case "1440p_2":
                case "1440P_2":
                    r.setVideoResolution("1440p_2"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 7350]);
                    break;
                case "4k":
                case "4K":
                case "4k_1":
                case "4K_1":
                    r.setVideoResolution("4k_1"), r.setVideoFrameRate([30, 30]), r.setVideoBitRate([50, 8910]);
                    break;
                case "4k_3":
                case "4K_3":
                    r.setVideoResolution("4k_3"), r.setVideoFrameRate([60, 60]), r.setVideoBitRate([50, 13500]);
                    break;
                default: r.setVideoResolution("480p_1"), r.setVideoFrameRate([15, 15]), r.setVideoBitRate([20, 500]);
            }
            return !0;
        } return !1; }, r.getId = function () { return r.streamId; }, r.getAttributes = function () { return e.screen ? r.screenAttributes : e.attributes; }, r.hasAudio = function () { return r.audio; }, r.hasVideo = function () { return r.video; }, r.hasScreen = function () { return r.screen; }, r.isVideoOn = function () { return (r.hasVideo() || r.hasScreen()) && r.videoEnabled; }, r.isAudioOn = function () { return r.hasAudio() && r.audioEnabled; }, r.init = function (n, a) { var d = ((new Date).getTime(), arguments[2]); if (void 0 === d && (d = 2), !0 === r.initialized)
            return void ("function" == typeof a && a({ type: "warning", msg: "STREAM_ALREADY_INITIALIZED" })); if (!0 !== r.local)
            return void ("function" == typeof a && a({ type: "warning", msg: "STREAM_NOT_LOCAL" })); try {
            if ((e.audio || e.video || e.screen) && void 0 === e.url) {
                u.default.debug("Requested access to local media");
                var c = e.video;
                if (e.screen)
                    var p = { video: c, audio: e.audio, screen: !0, data: !0, extensionId: e.extensionId, attributes: r.screenAttributes, fake: e.fake, mediaSource: e.mediaSource };
                else {
                    var p = { video: c, audio: e.audio, fake: e.fake };
                    if (!t()) {
                        var m = 30, g = 30;
                        void 0 !== e.attributes.minFrameRate && (m = e.attributes.minFrameRate), void 0 !== e.attributes.maxFrameRate && (g = e.attributes.maxFrameRate), i() ? !0 === p.video ? (p.video = { width: { ideal: r.videoSize[0] }, height: { ideal: r.videoSize[1] }, frameRate: { ideal: m, max: g } }, r.setVideoBitRate([500, 500])) : "object" === o(p.video) && (p.video.frameRate = { ideal: m, max: g }) : (!0 === p.audio && (p.audio = !e.microphoneId || { deviceId: { exact: e.microphoneId } }), !0 === p.video ? (p.video = { width: { ideal: r.videoSize[0] }, height: { ideal: r.videoSize[1] }, frameRate: { ideal: m, max: g } }, r.setVideoBitRate([500, 500])) : "object" === o(p.video) && (p.video.frameRate = { ideal: m, max: g }));
                    }
                }
                u.default.debug(p);
                var v = Object.assign({}, p);
                if ((0, s.GetUserMedia)(v, function (t) { u.default.debug("User has granted access to local media"), r.dispatchEvent({ type: "accessAllowed" }), r.stream = t, r.initialized = !0, n && n(), r.hasVideo() && (0, f.vsResHack)(t, function (e, t) { r.videoWidth = e, r.videoHeight = t; }, function (e) { u.default.warning("vsResHack failed:" + e); }), e.screen && (0, l.isChrome)() && r.stream && r.stream.getVideoTracks()[0] && (r.stream.getVideoTracks()[0].onended = function () { r.dispatchEvent({ type: "stopScreenSharing" }); }); }, function (e) { var t = { type: "error", msg: e.name || e }; switch (t.msg) {
                    case "Starting video failed":
                    case "TrackStartError":
                        if (r.videoSize = void 0, d > 0)
                            return void setTimeout(function () { r.init(n, a, d - 1); }, 1);
                        t.msg = "MEDIA_OPTION_INVALID";
                        break;
                    case "DevicesNotFoundError":
                        t.msg = "DEVICES_NOT_FOUND";
                        break;
                    case "NotSupportedError":
                        t.msg = "NOT_SUPPORTED";
                        break;
                    case "PermissionDeniedError":
                        t.msg = "PERMISSION_DENIED", r.dispatchEvent({ type: "accessDenied" });
                        break;
                    case "PERMISSION_DENIED":
                        r.dispatchEvent({ type: "accessDenied" });
                        break;
                    case "InvalidStateError":
                        t.msg = "PERMISSION_DENIED", r.dispatchEvent({ type: "accessDenied" });
                        break;
                    case "NotAllowedError":
                        r.dispatchEvent({ type: "accessDenied" });
                        break;
                    case "ConstraintNotSatisfiedError":
                        t.msg = "CONSTRAINT_NOT_SATISFIED";
                        break;
                    default: t.msg || (t.msg = "UNDEFINED");
                } u.default.error("Media access:", t.msg), "function" == typeof a && a(t); }), e.screen && e.audio) {
                    var _ = { video: !1, audio: p.audio };
                    u.default.debug(_), (0, s.GetUserMedia)(_, function (e) { u.default.info("User has granted access to auxiliary local media."), r.dispatchEvent({ type: "accessAllowed" }), r.aux_stream = e; }, function (e) { var t = { type: "error", msg: e.name || e }; switch (t.msg) {
                        case "Starting video failed":
                        case "TrackStartError":
                            if (r.videoSize = void 0, d > 0)
                                return void setTimeout(function () { r.init(n, a, d - 1); }, 1);
                            t.msg = "MEDIA_OPTION_INVALID";
                            break;
                        case "DevicesNotFoundError":
                            t.msg = "DEVICES_NOT_FOUND";
                            break;
                        case "NotSupportedError":
                            t.msg = "NOT_SUPPORTED";
                            break;
                        case "PermissionDeniedError":
                        case "InvalidStateError":
                            t.msg = "PERMISSION_DENIED", r.dispatchEvent({ type: "accessDenied" });
                            break;
                        case "PERMISSION_DENIED":
                        case "NotAllowedError":
                            r.dispatchEvent({ type: "accessDenied" });
                            break;
                        case "ConstraintNotSatisfiedError":
                            t.msg = "CONSTRAINT_NOT_SATISFIED";
                            break;
                        default: t.msg || (t.msg = "UNDEFINED");
                    } u.default.error("Media access:", t.msg), "function" == typeof a && a(t); });
                }
            }
            else
                "function" == typeof a && a({ type: "warning", msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES" });
        }
        catch (e) {
            u.default.error("Stream init:", e), "function" == typeof a && a({ type: "error", msg: e.message || e });
        } }, r.close = function () { if (u.default.debug("Close stream with id", r.streamId), void 0 !== r.stream) {
            var e = r.stream.getTracks();
            for (var t in e)
                e.hasOwnProperty(t) && e[t].stop();
            r.stream = void 0;
        } r.initialized = !1, r.unmuteAudio = void 0, r.muteAudio = void 0, r.unmuteVideo = void 0, r.muteVideo = void 0, r.lowStream && r.lowStream.close(); }, r.enableAudio = function () { return u.default.debug("Enable audio stream with id", r.streamId), !(!r.hasAudio() || !r.initialized || void 0 === r.stream || !0 === r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.unmuteAudio && r.unmuteAudio(), r.audioEnabled = !0, r.stream.getAudioTracks()[0].enabled = !0, !0); }, r.disableAudio = function () { return u.default.debug("Disable audio stream with id", r.streamId), !!(r.hasAudio() && r.initialized && void 0 !== r.stream && r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.muteAudio && r.muteAudio(), r.audioEnabled = !1, r.stream.getAudioTracks()[0].enabled = !1, r.sid && m.report.audioSendingStopped(r.sid, { succ: !0, reason: "muteAudio" }), !0); }, r.enableVideo = function () { return u.default.debug("Enable video stream with id", r.streamId), !(!r.initialized || void 0 === r.stream || !r.stream.getVideoTracks().length || !0 === r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.unmuteVideo && r.unmuteVideo(), r.videoEnabled = !0, r.stream.getVideoTracks()[0].enabled = !0, r.lowStream && r.lowStream.enableVideo(), !0); }, r.disableVideo = function () { return u.default.debug("Disable video stream with id", r.streamId), !!(r.initialized && void 0 !== r.stream && r.stream.getVideoTracks().length && r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.muteVideo && r.muteVideo(), r.videoEnabled = !1, r.stream.getVideoTracks()[0].enabled = !1, r.lowStream && r.lowStream.disableVideo(), r.sid && m.report.videoSendingStopped(r.sid, { succ: !0, reason: "muteVideo" }), !0); }, r.play = function (e, t) { r.showing = !1, !r.local || r.video || r.screen ? void 0 !== e && (r.player = new a.default({ id: r.getId(), stream: r, elementID: e, options: void 0, url: t }), r.showing = !0) : r.hasAudio() && (r.player = new a.default({ id: r.getId(), stream: r, elementID: e, options: void 0, url: t }), r.showing = !0); }, r.stop = function () { u.default.debug("Stop stream player with id", r.streamId), void 0 !== r.player && r.player.destroy(); }, r.getStats = function (e) { r.pc && r.pc.getStats ? r.pc.getStats(function (t) { if (r.pc.isSubscriber) {
            var i = (0, p.subscribeStatsFilter)(t);
            (0, l.isFireFox)() && (i.videoReceivedResolutionHeight = r.videoHeight + "", i.videoReceivedResolutionWidth = r.videoWidth + ""), e && e((0, p.subscribeStatsFilter)(t));
        }
        else {
            var i = (0, p.publishStatsFilter)(t);
            ((0, l.isSafari)() || (0, l.isFireFox)()) && (i.videoSendResolutionHeight = r.videoHeight + "", i.videoSendResolutionWidth = r.videoWidth + ""), ((0, l.isSafari)() || (0, l.isFireFox)()) && r.uplinkStats && (i.videoSendBandwidth = r.uplinkStats.uplink_available_bandwidth + "", i.videoSendPacketsLost = r.uplinkStats.uplink_cumulative_lost + ""), e && e(i);
        } }) : u.default.warning("use getStats after peerConnection established"); }, r.getAudioLevel = function () { return r.audioLevelHelper ? r.audioLevelHelper.getAudioLevel() : r.stream ? 0 !== r.stream.getAudioTracks().length ? (r.audioLevelHelper = new f.audioLevelHelper(r.stream), r.audioLevelHelper.getAudioLevel()) : void u.default.warning("can't get audioLevel beacuse no audio trace in stream") : (u.default.warning("can't get audioLevel beacuse no stream exist"), 0); }, r; }, v = function (e) { return u.default.debug("Create stream"), g(e); }, _ = function (e, t) { navigator.mediaDevices && navigator.mediaDevices.enumerateDevices || (u.default.warning("enumerateDevices() not supported."), t && t("enumerateDevices() not supported")), navigator.mediaDevices.enumerateDevices().then(function (t) { return e(t); }).catch(function (e) { return t && t(e.name + ": " + e.message); }); };
        t.Stream = g, t.createStream = v, t.getDevices = _;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.GetUserMedia = t.Connection = void 0;
        var o = i(22), r = n(o), a = i(23), s = n(a), d = i(24), c = n(d), u = i(25), l = n(u), p = i(26), f = n(p), m = i(0), g = n(m), v = i(6), _ = 103, S = function (e) { var t = {}; if (e.session_id = _ += 1, "undefined" != typeof window && window.navigator)
            if (null !== window.navigator.userAgent.match("Firefox"))
                t.browser = "mozilla", t = (0, f.default)(e);
            else if (window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome"))
                g.default.debug("Safari"), t = (0, c.default)(e), t.browser = "safari";
            else if (window.navigator.userAgent.indexOf("MSIE "))
                t = (0, s.default)(e), t.browser = "ie";
            else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26)
                t = (0, s.default)(e), t.browser = "chrome-stable";
            else {
                if (!(window.navigator.userAgent.toLowerCase().indexOf("chrome") >= 40))
                    throw t.browser = "none", "WebRTC stack not available";
                t = (0, r.default)(e), t.browser = "chrome-canary";
            }
        else
            g.default.error("Publish/subscribe video/audio streams not supported yet"), t = (0, l.default)(e); return t; }, h = function (e, t, i) { var n = {}; return n.callback = t, n.config = e, n.error = i, n.selectSource = function (e, t, i) { var n = document.createElement("div"); n.setAttribute("style", "position: absolute; z-index: 99999999; width: 65%; height: 70%; top:50%; left:50%; -webkit-transform:translate(-50%,-50%); transform:translate(-50%,-50%); border: #333333 1px solid; background: #ffffff; overflow: scroll;display: flex; justify-content: space-around; flex-wrap: wrap;padding: 50px 20px 5px 20px;box-shadow: 10px #333333;"), document.body.appendChild(n), e.map(function (e) { if (e.id) {
            var i = document.createElement("div");
            i.setAttribute("style", "width: 30%;text-align: center;");
            var o = document.createElement("div");
            o.innerHTML = e.name, o.setAttribute("style", "display: inline-block;width: 70%;word-break: keep-all;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;");
            var r = document.createElement("div");
            r.setAttribute("style", "width: 100%;height: 70%");
            var a = document.createElement("img");
            a.setAttribute("style", "height: 100%;"), a.src = e.thumbnail.toDataURL(), i.onclick = function () { document.body.removeChild(n), t && t(e.id); }, r.appendChild(a), i.appendChild(r), i.appendChild(o), n.appendChild(i);
        } }); var o = document.createElement("button"); o.innerHTML = "Back", o.setAttribute("style", " width: 100%; padding:10px 0; background-color: #fff; font-size: 20px; color: #333;border: none;"), o.onclick = function () { document.body.removeChild(n), i && i("NotAllowedError"); }, n.appendChild(o); }, n.share = function (e) { e.desktopCapturer.getSources({ types: ["window", "screen"] }, function (e, t) { if (e)
            throw e; n.selectSource(t, function (e) { var t = n.config.attributes.width, i = n.config.attributes.height, o = n.config.attributes.maxFr, r = n.config.attributes.minFr, a = { audio: !1, video: { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: e, maxHeight: i, maxWidth: t, maxFrameRate: o, minFrameRate: r } } }; navigator.webkitGetUserMedia(a, n.callback, n.error); }, n.error); }); }, n; }, E = function (e, t, i) { if (navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen) {
            var n = null;
            try {
                n = window.require("electron");
            }
            catch (e) { }
            if (n) {
                if (n.desktopCapturer) {
                    h(e, t, i).share(n);
                }
                else
                    i(v.ErrorCodes.ELECTRON_NOT_SUPPORT_SHARING_SCREEN);
                return;
            }
            if (g.default.debug("Screen access requested"), null !== window.navigator.userAgent.match("Firefox")) {
                if (!~["screen", "window", "application"].indexOf(e.mediaSource))
                    return i && i("Invalid mediaSource, mediaSource should be one of [screen, window, application]");
                var o = {};
                void 0 != e.video.mandatory ? (o.video = e.video, o.video.mediaSource = e.mediaSource) : o = { video: { mediaSource: e.mediaSource } }, navigator.getMedia(o, t, i);
            }
            else if (null !== window.navigator.userAgent.match("Chrome")) {
                if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34)
                    return void i({ code: "This browser does not support screen sharing" });
                var r = "okeephmleflklcdebijnponpabbmmgeo";
                e.extensionId && (g.default.debug("extensionId supplied, using " + e.extensionId), r = e.extensionId), g.default.debug("Screen access on chrome stable, looking for extension");
                try {
                    chrome.runtime.sendMessage(r, { getStream: !0 }, function (n) { if (void 0 === n) {
                        g.default.debug("Access to screen denied");
                        return void i({ code: "Access to screen denied" });
                    } var r = n.streamId, a = e.attributes.width, s = e.attributes.height, d = e.attributes.maxFr, c = e.attributes.minFr; o = { video: { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: r, maxHeight: s, maxWidth: a, maxFrameRate: d, minFrameRate: c } } }, navigator.getMedia(o, t, i); });
                }
                catch (e) {
                    g.default.debug("AgoraRTC screensharing plugin is not accessible");
                    var a = { code: "no_plugin_present" };
                    return void i(a);
                }
            }
            else
                g.default.debug("This browser does not support screenSharing");
        }
        else
            window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? navigator.mediaDevices.getUserMedia(e).then(t).catch(i) : "undefined" != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, i) : g.default.error("Video/audio streams not supported yet"); };
        t.Connection = S, t.GetUserMedia = E;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.shouldUseHttps = t.post = void 0;
        var n = i(1), o = function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t; }(n), r = function (e, t, i, n) { var r = new XMLHttpRequest; r.timeout = t.timeout || o.HTTP_CONNECT_TIMEOUT, r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json; charset=utf-8"), r.onload = function (e) { i && i(r.responseText); }, r.onerror = function (t) { n && n(t, e); }, r.ontimeout = function (t) { n && n(t, e); }, r.send(JSON.stringify(t)); }, a = function () { return "https:" == document.location.protocol; };
        t.post = r, t.shouldUseHttps = a;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function (e) { e && e.apply(this, [].slice.call(arguments, 1)); };
        t.default = n;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getGatewayList = void 0;
        var o = i(1), r = function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t; }(o), a = i(0), s = n(a), d = i(9), c = i(5), u = i(2), l = i(6), p = n(l), f = function (e, t, i, n) { var o = (new Date).getTime(), r = { key: t.appId, cname: t.cname, uid: t.uid }; (0, d.post)(e, r, function (r) { var a = JSON.parse(r), s = a.error; void 0 != s ? (c.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: e, serverList: null, ec: s }), n("Get server node failed [" + s + "]", e)) : i(a, e); }, function (e, i) { "timeout" === e.type ? (c.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: i, serverList: null, ec: "timeout" }), n("Connect choose server timeout", i)) : c.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: i, serverList: null, ec: "server_wrong" }); }); }, m = function (e, t, i) { var n = (new Date).getTime(), o = !1; u.CSCrashRecord.record(n); for (var a = function (i, r) { o ? c.report.joinChooseServer(e.sid, { lts: n, succ: !0, csAddr: r, serverList: i.gateway_addr, cid: i.cid + "", uid: i.uid + "", ec: null }, !1) : (clearTimeout(v), o = !0, s.default.debug("Get gateway address:", i.gateway_addr), t(i), c.report.joinChooseServer(e.sid, { lts: n, succ: !0, csAddr: r, serverList: i.gateway_addr, cid: i.cid + "", uid: i.uid + "", ec: null }, !0)); }, l = function (e, t) { s.default.error(e, t); }, p = r.WEBCS_DOMAIN, m = 0; m < p.length; ++m) {
            var g;
            g = (0, d.shouldUseHttps)() ? "https://" + p[m] + ":5668/getwebgw/jsonp" : "http://" + p[m] + ":5669/getwebgw/jsonp", f(g, e, a, l);
        } var v = setTimeout(function () { if (!o)
            for (var t = r.WEBCS_DOMAIN_BACKUP_LIST, i = 0; i < t.length; ++i) {
                var n;
                n = (0, d.shouldUseHttps)() ? "https://" + t[i] + ":5668/getwebgw/jsonp" : "http://" + t[i] + ":5669/getwebgw/jsonp", f(n, e, a, l);
            } }, 1e3); setTimeout(function () { o || i(); }, r.WEBCS_BACKUP_CONNECT_TIMEOUT); }, g = function (e, t, i) { var n = !1, o = null, r = 1; !function a() { if (u.CSCrashRecord.shouldBlock())
            return s.default.warning("CS connetion crash too many times in 10s"), i && i(p.default.JOIN_TOO_FREQUENT); n || m(e, function (e) { n = !0, clearTimeout(o), t(e); }, function () { s.default.debug("Request gateway list will be restart in " + r + "s"), o = setTimeout(function () { a(); }, 1e3 * r), r = r >= 3600 ? 3600 : 2 * r; }); }(); };
        t.getGatewayList = g;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.AUDIO_SAMPLE_RATE_32000 = 32e3, t.AUDIO_SAMPLE_RATE_44100 = 44100, t.AUDIO_SAMPLE_RATE_48000 = 48e3, t.VIDEO_CODEC_PROFILE_BASELINE = 66, t.VIDEO_CODEC_PROFILE_MAIN = 77, t.VIDEO_CODEC_PROFILE_HIGH = 100, t.REMOTE_VIDEO_STREAM_HIGH = 0, t.REMOTE_VIDEO_STREAM_LOW = 1, t.REMOTE_VIDEO_STREAM_MEDIUM = 2;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () { var e = new Date; return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds(); };
        t.getTimestamp = n;
    }, function (e, t, i) { function n(e, t, i) { var n = t && i || 0; "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {}; var a = e.random || (e.rng || o)(); if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
        for (var s = 0; s < 16; ++s)
            t[n + s] = a[s]; return t || r(a); } var o = i(15), r = i(17); e.exports = n; }, function (e, t, i) { (function (t) { var i, n = t.crypto || t.msCrypto; if (n && n.getRandomValues) {
        var o = new Uint8Array(16);
        i = function () { return n.getRandomValues(o), o; };
    } if (!i) {
        var r = new Array(16);
        i = function () { for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255; return r; };
    } e.exports = i; }).call(t, i(16)); }, function (e, t) { var i; i = function () { return this; }(); try {
        i = i || Function("return this")() || (0, eval)("this");
    }
    catch (e) {
        "object" == typeof window && (i = window);
    } e.exports = i; }, function (e, t) { function i(e, t) { var i = t || 0, o = n; return o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + "-" + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]] + o[e[i++]]; } for (var n = [], o = 0; o < 256; ++o)
        n[o] = (o + 256).toString(16).substr(1); e.exports = i; }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = i(19), r = n(o), a = i(20), s = n(a), d = i(0), c = n(d), u = i(21), l = function (e) { var t = (0, r.default)({}); if (t.id = e.id, t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.destroy = function () { t.video.srcObject = null, t.audio.srcObject = null, t.video.pause(), delete t.resizer, document.getElementById(t.div.id) && t.parentNode.removeChild(t.div); }, t.resize = function () { var i = t.container.offsetWidth, n = t.container.offsetHeight; e.stream.screen ? .75 * i < n ? (t.video.style.width = i + "px", t.video.style.height = .75 * i + "px", t.video.style.top = -(.75 * i / 2 - n / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = n + "px", t.video.style.width = 4 / 3 * n + "px", t.video.style.left = -(4 / 3 * n / 2 - i / 2) + "px", t.video.style.top = "0px") : i === t.containerWidth && n === t.containerHeight || (.75 * i > n ? (t.video.style.width = i + "px", t.video.style.height = .75 * i + "px", t.video.style.top = -(.75 * i / 2 - n / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = n + "px", t.video.style.width = 4 / 3 * n + "px", t.video.style.left = -(4 / 3 * n / 2 - i / 2) + "px", t.video.style.top = "0px")), t.containerWidth = i, t.containerHeight = n; }, t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; ") : e.stream.video ? (t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;"), window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && t.video.setAttribute("controls", "")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none;"), t.video.setAttribute("autoplay", ""), t.video.setAttribute("muted", ""), t.video.setAttribute("playsinline", ""), e.stream.local && (t.video.volume = 0, t.video.setAttribute("muted", "")), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), t.audio.setAttribute("autoplay", ""), e.stream.local && (t.audio.volume = 0, t.audio.setAttribute("muted", "")), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode, t.video.addEventListener("playing", function (e) { !function e() { if (t.video.videoWidth * t.video.videoHeight > 4)
            return void c.default.debug("video dimensions:", t.video.videoWidth, t.video.videoHeight); setTimeout(e, 50); }(); }), t.containerWidth = 0, t.containerHeight = 0, t.resizer = new s.default(t.container, t.resize), t.resize(), e.stream.hasVideo() || e.stream.hasScreen())
            t.div.appendChild(t.video), t.div.appendChild(t.audio), (0, u.attachMediaStream)(t.video, e.stream.stream), (0, u.attachMediaStream)(t.audio, e.stream.stream);
        else if (!e.stream.local && t.video.removeAttribute("muted"), t.div.appendChild(t.video), window.MediaStream) {
            var i = new MediaStream(e.stream.stream.getAudioTracks());
            t.video.srcObject = i;
        }
        else
            t.video.srcObject = e.stream.stream; return t; };
        t.default = l;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(4), o = function (e) { var t = (0, n.EventDispatcher)(e); return t.url = ".", t; };
        t.default = o;
    }, function (e, t, i) { var n, o; !function (r, a) { n = a, void 0 !== (o = "function" == typeof n ? n.call(t, i, t, e) : n) && (e.exports = o); }(0, function () { function e(e, t) { var i = Object.prototype.toString.call(e), n = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "[object Object]" === i || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements, o = 0, r = e.length; if (n)
        for (; o < r; o++)
            t(e[o]);
    else
        t(e); } if ("undefined" == typeof window)
        return null; var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) { return window.setTimeout(e, 20); }, i = function (n, o) { function r() { var e = []; this.add = function (t) { e.push(t); }; var t, i; this.call = function () { for (t = 0, i = e.length; t < i; t++)
        e[t].call(); }, this.remove = function (n) { var o = []; for (t = 0, i = e.length; t < i; t++)
        e[t] !== n && o.push(e[t]); e = o; }, this.length = function () { return e.length; }; } function a(e, t) { return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]; } function s(e, i) { if (e.resizedAttached) {
        if (e.resizedAttached)
            return void e.resizedAttached.add(i);
    }
    else
        e.resizedAttached = new r, e.resizedAttached.add(i); e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor"; var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;", o = "position: absolute; left: 0; top: 0; transition: 0s;"; e.resizeSensor.style.cssText = n, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), "static" == a(e, "position") && (e.style.position = "relative"); var s, d, c, u, l = e.resizeSensor.childNodes[0], p = l.childNodes[0], f = e.resizeSensor.childNodes[1], m = e.offsetWidth, g = e.offsetHeight, v = function () { p.style.width = "100000px", p.style.height = "100000px", l.scrollLeft = 1e5, l.scrollTop = 1e5, f.scrollLeft = 1e5, f.scrollTop = 1e5; }; v(); var _ = function () { d = 0, s && (m = c, g = u, e.resizedAttached && e.resizedAttached.call()); }, S = function () { c = e.offsetWidth, u = e.offsetHeight, s = c != m || u != g, s && !d && (d = t(_)), v(); }, h = function (e, t, i) { e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i); }; h(l, "scroll", S), h(f, "scroll", S); } e(n, function (e) { s(e, o); }), this.detach = function (e) { i.detach(n, e); }; }; return i.detach = function (t, i) { e(t, function (e) { e.resizedAttached && "function" == typeof i && (e.resizedAttached.remove(i), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached); }); }, i; }); }, function (e, t, i) {
        "use strict";
        function n(e) { return new Promise(function (t, i) { r(e, t, i); }); }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, r = null, a = null, s = null, d = null, c = null, u = null, l = { log: function () { }, extractVersion: function (e, t, i) { var n = e.match(t); return n && n.length >= i && parseInt(n[i]); } };
        if ("object" === ("undefined" == typeof window ? "undefined" : o(window)) && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", { get: function () { return "mozSrcObject" in this ? this.mozSrcObject : this._srcObject; }, set: function (e) { "mozSrcObject" in this ? this.mozSrcObject = e : (this._srcObject = e, this.src = URL.createObjectURL(e)); } }), r = window.navigator && window.navigator.getUserMedia), a = function (e, t) { e.srcObject = t; }, s = function (e, t) { e.srcObject = t.srcObject; }, "undefined" != typeof window && window.navigator)
            if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
                if (l.log("This appears to be Firefox"), d = "firefox", c = l.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), u = 31, window.RTCPeerConnection = function (e, t) { if (c < 38 && e && e.iceServers) {
                    for (var i = [], n = 0; n < e.iceServers.length; n++) {
                        var o = e.iceServers[n];
                        if (o.hasOwnProperty("urls"))
                            for (var r = 0; r < o.urls.length; r++) {
                                var a = { url: o.urls[r] };
                                0 === o.urls[r].indexOf("turn") && (a.username = o.username, a.credential = o.credential), i.push(a);
                            }
                        else
                            i.push(e.iceServers[n]);
                    }
                    e.iceServers = i;
                } return new mozRTCPeerConnection(e, t); }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), r = function (e, t, i) { var n = function (e) { if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.require)
                    return e; var t = []; return Object.keys(e).forEach(function (i) { if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
                    var n = e[i] = "object" === o(e[i]) ? e[i] : { ideal: e[i] };
                    if (void 0 === n.min && void 0 === n.max && void 0 === n.exact || t.push(i), void 0 !== n.exact && ("number" == typeof n.exact ? n.min = n.max = n.exact : e[i] = n.exact, delete n.exact), void 0 !== n.ideal) {
                        e.advanced = e.advanced || [];
                        var r = {};
                        "number" == typeof n.ideal ? r[i] = { min: n.ideal, max: n.ideal } : r[i] = n.ideal, e.advanced.push(r), delete n.ideal, Object.keys(n).length || delete e[i];
                    }
                } }), t.length && (e.require = t), e; }; return c < 38 && (l.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = n(e.audio)), e.video && (e.video = n(e.video)), l.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, i); }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = { getUserMedia: n, addEventListener: function () { }, removeEventListener: function () { } }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () { return new Promise(function (e) { e([{ kind: "audioinput", deviceId: "default", label: "", groupId: "" }, { kind: "videoinput", deviceId: "default", label: "", groupId: "" }]); }); }, c < 41) {
                    var p = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                    navigator.mediaDevices.enumerateDevices = function () { return p().then(void 0, function (e) { if ("NotFoundError" === e.name)
                        return []; throw e; }); };
                }
            }
            else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
                l.log("This appears to be Chrome"), d = "chrome", c = l.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), u = 38, window.RTCPeerConnection = function (e, t) { e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy); var i = new webkitRTCPeerConnection(e, t), n = i.getStats.bind(i); return i.getStats = function (e, t, i) { var o = this, r = arguments; if (arguments.length > 0 && "function" == typeof e)
                    return n(e, t); var a = function (e) { var t = {}; return e.result().forEach(function (e) { var i = { id: e.id, timestamp: e.timestamp, type: e.type }; e.names().forEach(function (t) { i[t] = e.stat(t); }), t[i.id] = i; }), t; }; if (arguments.length >= 2) {
                    var s = function (e) { r[1](a(e)); };
                    return n.apply(this, [s, arguments[0]]);
                } return new Promise(function (t, i) { 1 === r.length && null === e ? n.apply(o, [function (e) { t.apply(null, [a(e)]); }, i]) : n.apply(o, [t, i]); }); }, i; }, ["createOffer", "createAnswer"].forEach(function (e) { var t = webkitRTCPeerConnection.prototype[e]; webkitRTCPeerConnection.prototype[e] = function () { var e = this; if (arguments.length < 1 || 1 === arguments.length && "object" === o(arguments[0])) {
                    var i = 1 === arguments.length ? arguments[0] : void 0;
                    return new Promise(function (n, o) { t.apply(e, [n, o, i]); });
                } return t.apply(this, arguments); }; }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (e) { var t = webkitRTCPeerConnection.prototype[e]; webkitRTCPeerConnection.prototype[e] = function () { var e = arguments, i = this; return new Promise(function (n, o) { t.apply(i, [e[0], function () { n(), e.length >= 2 && e[1].apply(null, []); }, function (t) { o(t), e.length >= 3 && e[2].apply(null, [t]); }]); }); }; });
                var f = function (e) { if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.mandatory || e.optional)
                    return e; var t = {}; return Object.keys(e).forEach(function (i) { if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
                    var n = "object" === o(e[i]) ? e[i] : { ideal: e[i] };
                    void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                    var r = function (e, t) { return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t; };
                    if (void 0 !== n.ideal) {
                        t.optional = t.optional || [];
                        var a = {};
                        "number" == typeof n.ideal ? (a[r("min", i)] = n.ideal, t.optional.push(a), a = {}, a[r("max", i)] = n.ideal, t.optional.push(a)) : (a[r("", i)] = n.ideal, t.optional.push(a));
                    }
                    void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", i)] = n.exact) : ["min", "max"].forEach(function (e) { void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, i)] = n[e]); });
                } }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t; };
                if (r = function (e, t, i) { return e.audio && (e.audio = f(e.audio)), e.video && (e.video = f(e.video)), l.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, i); }, navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = { getUserMedia: n, enumerateDevices: function () { return new Promise(function (e) { var t = { audio: "audioinput", video: "videoinput" }; return MediaStreamTrack.getSources(function (i) { e(i.map(function (e) { return { label: e.label, kind: t[e.kind], deviceId: e.id, groupId: "" }; })); }); }); } }), navigator.mediaDevices.getUserMedia) {
                    var m = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function (e) { return l.log("spec:   " + JSON.stringify(e)), e.audio = f(e.audio), e.video = f(e.video), l.log("chrome: " + JSON.stringify(e)), m(e); };
                }
                else
                    navigator.mediaDevices.getUserMedia = function (e) { return n(e); };
                void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function () { l.log("Dummy mediaDevices.addEventListener called."); }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function () { l.log("Dummy mediaDevices.removeEventListener called."); }), a = function (e, t) { c >= 43 ? e.srcObject = t : void 0 !== e.src ? e.src = URL.createObjectURL(t) : l.log("Error attaching stream to element."); }, s = function (e, t) { c >= 43 ? e.srcObject = t.srcObject : e.src = t.src; };
            }
            else
                navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (l.log("This appears to be Edge"), d = "edge", c = l.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : l.log("Browser does not appear to be WebRTC-capable");
        else
            l.log("This does not appear to be a browser"), d = "not a browser";
        var g = {};
        try {
            Object.defineProperty(g, "version", { set: function (e) { c = e; } });
        }
        catch (e) { }
        var v;
        "undefined" != typeof window && (v = window.RTCPeerConnection), e.exports = { RTCPeerConnection: v, getUserMedia: r, attachMediaStream: a, reattachMediaStream: s, webrtcDetectedBrowser: d, webrtcDetectedVersion: c, webrtcMinimumVersion: u, webrtcTesting: g, webrtcUtils: l };
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(0), o = function (e) { return e && e.__esModule ? e : { default: e }; }(n), r = function (e) { var t = {}, i = webkitRTCPeerConnection; t.pc_config = { iceServers: [] }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }); }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) { "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({ username: e.username, credential: e.password, url: e.url }); }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({ username: e.turnServer.username, credential: e.turnServer.password, url: e.turnServer.url }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { mandatory: { OfferToReceiveVideo: e.video, OfferToReceiveAudio: e.audio } }, t.roapSessionId = 103, t.peerConnection = new i(t.pc_config, t.con), t.peerConnection.onicecandidate = function (e) { e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())); }; var n = function (t) { var i, n; return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t; }; return t.processSignalingMessage = function (e) { var i, o = JSON.parse(e); t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (i = { sdp: o.sdp, type: "answer" }, i.sdp = n(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (i = { sdp: o.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state)); }, t.addStream = function (e) { t.peerConnection.addStream(e), t.markActionNeeded(); }, t.removeStream = function () { t.markActionNeeded(); }, t.close = function () { t.state = "closed", t.peerConnection.close(); }, t.markActionNeeded = function () { t.actionNeeded = !0, t.doLater(function () { t.onstablestate(); }); }, t.doLater = function (e) { window.setTimeout(e, 1); }, t.onstablestate = function () { var e; if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state)
                t.peerConnection.createOffer(function (e) { if (e.sdp = n(e.sdp), o.default.debug("Changed", e.sdp), e.sdp !== t.prevOffer)
                    return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded(); o.default.debug("Not sending a new offer"); }, function (e) { o.default.debug("peer connection create offer failed ", e); }, t.mediaConstraints);
            else if ("preparing-offer" === t.state) {
                if (t.moreIceComing)
                    return;
                t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent";
            }
            else if ("offer-received" === t.state)
                t.peerConnection.createAnswer(function (e) { if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted)
                    return void t.markActionNeeded(); var i = new Date; o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0; }, function (e) { o.default.debug("peer connection create answer failed ", e); }, t.mediaConstraints);
            else if ("offer-received-preparing-answer" === t.state) {
                if (t.moreIceComing)
                    return;
                e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established";
            }
            else
                t.error("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1;
        } }, t.sendOK = function () { t.sendMessage("OK"); }, t.sendMessage = function (e, i) { var n = {}; n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n)); }, t.error = function (e) { throw "Error in RoapOnJsep: " + e; }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.onopen = function () { t.onopen && t.onopen(); }, t.peerConnection.onaddstream = function (e) { t.onaddstream && t.onaddstream(e); }, t.peerConnection.onremovestream = function (e) { t.onremovestream && t.onremovestream(e); }, t.peerConnection.oniceconnectionstatechange = function (e) { t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState); }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t; };
        t.default = r;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(0), o = function (e) { return e && e.__esModule ? e : { default: e }; }(n), r = function (e) { var t = {}, i = RTCPeerConnection; t.isSubscriber = e.isSubscriber, t.pc_config = { iceServers: [] }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }); }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) { "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({ username: e.username, credential: e.password, url: e.url }); }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({ username: e.turnServer.username, credential: e.turnServer.password, url: e.turnServer.url }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { mandatory: { OfferToReceiveVideo: e.video, OfferToReceiveAudio: e.audio } }, t.roapSessionId = 103, t.peerConnection = new i({ iceServers: [{ urls: ["stun:webcs.agora.io:3478"] }] }, t.con), t.peerConnection.onicecandidate = function (e) { var i, n, r; i = t.peerConnection.localDescription.sdp, n = i.match(/a=candidate:.+typ\ssrflx.+\r\n/), r = i.match(/a=candidate:.+typ\shost.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () { t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()); }, 1e3)), null === n && null === r || void 0 !== t.ice || (o.default.debug("srflx candidate : " + n + " host candidate : " + r), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1; }; var n = function (t) { return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t; }, r = function (t) { var i, n; return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t; }; return t.processSignalingMessage = function (e) { var i, o = JSON.parse(e); t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (i = { sdp: o.sdp, type: "answer" }, i.sdp = n(i.sdp), i.sdp = r(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (i = { sdp: o.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state)); }, t.getStatsRate = function (e) { t.getStats(function (t) { e(t); }); }, t.getStats = function (e) { t.peerConnection.getStats(null, function (i) { var n = [], o = [], r = null; Object.keys(i).forEach(function (e) { var t = i[e]; o.push(t), "ssrc" !== t.type && "VideoBwe" !== t.type || (r = t.timestamp, n.push(t)); }), n.push({ id: "time", startTime: t.connectedTime, timestamp: r || new Date }), e(n, o); }); }, t.addStream = function (e) { t.peerConnection.addStream(e), t.markActionNeeded(); }, t.removeStream = function () { t.markActionNeeded(); }, t.close = function () { t.state = "closed", t.peerConnection.close(); }, t.markActionNeeded = function () { t.actionNeeded = !0, t.doLater(function () { t.onstablestate(); }); }, t.doLater = function (e) { window.setTimeout(e, 1); }, t.onstablestate = function () { var e; if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state)
                t.peerConnection.createOffer(function (e) { if (e.sdp = r(e.sdp), e.sdp !== t.prevOffer)
                    return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded(); o.default.debug("Not sending a new offer"); }, function (e) { o.default.debug("peer connection create offer failed ", e); }, t.mediaConstraints);
            else if ("preparing-offer" === t.state) {
                if (t.moreIceComing)
                    return;
                t.prevOffer = t.peerConnection.localDescription.sdp, t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent";
            }
            else if ("offer-received" === t.state)
                t.peerConnection.createAnswer(function (e) { if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted)
                    return void t.markActionNeeded(); var i = new Date; o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0; }, function (e) { o.default.debug("peer connection create answer failed ", e); }, t.mediaConstraints);
            else if ("offer-received-preparing-answer" === t.state) {
                if (t.moreIceComing)
                    return;
                e = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", e), t.state = "established";
            }
            else
                t.error("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1;
        } }, t.sendOK = function () { t.sendMessage("OK"); }, t.sendMessage = function (e, i) { var n = {}; n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n)); }, t.error = function (e) { throw "Error in RoapOnJsep: " + e; }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) { t.onaddstream && (t.onaddstream(e, "ontrack"), t.peerConnection.onaddstream = null); }, t.peerConnection.onaddstream = function (e) { t.onaddstream && (t.onaddstream(e, "onaddstream"), t.peerConnection.ontrack = null); }, t.peerConnection.onremovestream = function (e) { t.onremovestream && t.onremovestream(e); }, t.peerConnection.oniceconnectionstatechange = function (e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState); }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t; };
        t.default = r;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(0), o = function (e) { return e && e.__esModule ? e : { default: e }; }(n), r = function (e) { var t = {}; RTCPeerConnection; t.isSubscriber = e.isSubscriber, t.pc_config = { iceServers: [{ urls: ["stun:72.251.224.27:3478"] }], bundlePolicy: "max-bundle" }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }); }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) { "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({ username: e.username, credential: e.password, url: e.url }); }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({ username: e.turnServer.username, credential: e.turnServer.password, url: e.turnServer.url }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { mandatory: { OfferToReceiveVideo: e.video, OfferToReceiveAudio: e.audio } }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection({ iceServers: [{ urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"] }], bundlePolicy: "max-bundle" }), t.peerConnection.onicecandidate = function (i) { o.default.debug("PeerConnection: ", e.session_id, i), i.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function () { t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()); }, 1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())); }; var i = function (t) { return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t; }, n = function (t) { var i, n; return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), o.default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)), t; }; t.processSignalingMessage = function (e) { var o, r = JSON.parse(e); t.incomingMessage = r, "new" === t.state ? "OFFER" === r.messageType ? (o = { sdp: r.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (o = { sdp: r.sdp, type: "answer" }, o.sdp = i(o.sdp), o.sdp = n(o.sdp), o.sdp = o.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (o = { sdp: r.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (o = { sdp: r.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state)); }; var r = { id: "", type: "", mediaType: "", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" }, a = { id: "", type: "", mediaType: "", googCodecName: "h264" === e.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0", googFramesEncoded: "0" }, s = { id: "", type: "", mediaType: "", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" }, d = { id: "", type: "", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googFramesDecoded: "0", googFrameReceived: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0" }, c = { id: "bweforvideo", type: "VideoBwe", googAvailableSendBandwidth: "0", googAvailableReceiveBandwidth: "0", googActualEncBitrate: "0", googRetransmitBitrate: "0", googTargetEncBitrate: "0", googBucketDelay: "0", googTransmitBitrate: "0" }, u = 0, l = 0, p = 0; return t.getStatsRate = function (e) { t.getStats(function (t) { t.forEach(function (e) { "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - u) / 3).toString(), u = e.googFramesEncoded), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - p) / 3).toString(), p = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - l) / 3).toString(), l = e.googFramesDecoded)); }), e(t); }); }, t.getStats = function (e) { var i = []; t.peerConnection.getStats().then(function (n) { n.forEach(function (e) { i.push(e), "outbound-rtp" === e.type && "audio" === e.mediaType && (r.id = e.id, r.type = e.type, r.mediaType = e.mediaType, r.bytesSent = e.bytesSent ? e.bytesSent + "" : "0", r.packetsSent = e.packetsSent ? e.packetsSent + "" : "0"), "outbound-rtp" === e.type && "video" === e.mediaType && (a.id = e.id, a.type = e.type, a.mediaType = e.mediaType, a.bytesSent = e.bytesSent ? e.bytesSent + "" : "0", a.packetsSent = e.packetsSent ? e.packetsSent + "" : "0", a.googPlisReceived = e.pliCount ? e.pliCount + "" : "0", a.googNacksReceived = e.nackCount ? e.nackCount + "" : "0", a.googFirsReceived = e.firCount ? e.firCount + "" : "0", a.googFramesEncoded = e.framesEncoded ? e.framesEncoded + "" : "0"), "inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (s.id = e.id, s.type = e.type, s.mediaType = "audio", s.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", s.bytesReceived = e.bytesReceived ? e.bytesReceived + "" : "0", s.packetsLost = e.packetsLost ? e.packetsLost + "" : "0", s.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", s.googJitterReceived = e.jitter ? e.jitter + "" : "0"), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (d.id = e.id, d.type = e.type, d.mediaType = "video", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "" : "0", d.bytesReceived = e.bytesReceived ? e.bytesReceived + "" : "0", d.packetsLost = e.packetsLost ? e.packetsLost + "" : "0", d.googJitterBufferMs = e.jitter ? e.jitter + "" : "0", d.googNacksSent = e.nackCount ? e.nackCount + "" : "0", d.googPlisSent = e.pliCount ? e.pliCount + "" : "0", d.googFirsSent = e.firCount ? e.firCount + "" : "0"), "track" === e.type && -1 != e.id.indexOf("55543") && (d.googFrameWidthReceived = e.frameWidth ? e.frameWidth + "" : "0", d.googFrameHeightReceived = e.frameHeight ? e.frameHeight + "" : "0", d.googFrameReceived = e.framesReceived ? e.framesReceived + "" : "0", d.googFramesDecoded = e.framesDecoded ? e.framesDecoded + "" : "0"), "track" === e.type && -1 != e.id.indexOf("44444") && (s.audioOutputLevel = e.audioLevel + "", r.audioInputLevel = e.audioLevel + ""), "candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? c.googAvailableSendBandwidth = e.availableOutgoingBitrate + "" : c.googAvailableReceiveBandwidth = e.availableIncomingBitrate + ""); }); var o = [c, r, a, s, d]; o.push({ id: "time", startTime: t.connectedTime, timestamp: new Date }), e(o, i); }).catch(function (e) { console.error(e); }); }, t.addStream = function (e) { window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function (i) { return t.peerConnection.addTrack(i, e); }) : t.peerConnection.addStream(e), t.markActionNeeded(); }, t.removeStream = function () { t.markActionNeeded(); }, t.close = function () { t.state = "closed", t.peerConnection.close(); }, t.markActionNeeded = function () { t.actionNeeded = !0, t.doLater(function () { t.onstablestate(); }); }, t.doLater = function (e) { window.setTimeout(e, 1); }, t.onstablestate = function () { var i; if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state) {
                if (e.isSubscriber && window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) {
                    var r = t.peerConnection.addTransceiver("audio"), a = t.peerConnection.addTransceiver("video");
                    r.setDirection("recvonly"), a.setDirection("recvonly");
                }
                t.peerConnection.createOffer(t.mediaConstraints).then(function (i) { if (i.sdp = n(i.sdp), e.isSubscriber || (i.sdp = i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, "")), i.sdp !== t.prevOffer)
                    return t.peerConnection.setLocalDescription(i), t.state = "preparing-offer", void t.markActionNeeded(); o.default.debug("Not sending a new offer"); }).catch(function (e) { o.default.debug("peer connection create offer failed ", e); });
            }
            else if ("preparing-offer" === t.state) {
                if (t.moreIceComing)
                    return;
                t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent";
            }
            else if ("offer-received" === t.state)
                t.peerConnection.createAnswer(function (e) { if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted)
                    return void t.markActionNeeded(); var i = new Date; o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0; }, function (e) { o.default.debug("peer connection create answer failed ", e); }, t.mediaConstraints);
            else if ("offer-received-preparing-answer" === t.state) {
                if (t.moreIceComing)
                    return;
                i = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", i), t.state = "established";
            }
            else
                t.error("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1;
        } }, t.sendOK = function () { t.sendMessage("OK"); }, t.sendMessage = function (e, i) { var n = {}; n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n)); }, t.error = function (e) { throw "Error in RoapOnJsep: " + e; }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) { t.onaddstream && t.onaddstream(e, "ontrack"); }, t.peerConnection.onremovestream = function (e) { t.onremovestream && t.onremovestream(e); }, t.peerConnection.oniceconnectionstatechange = function (e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState); }, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t; };
        t.default = r;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function () { var e = {}; return e.addStream = function () { }, e; };
        t.default = n;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(0), o = function (e) { return e && e.__esModule ? e : { default: e }; }(n), r = function (e) { var t = {}, i = (mozRTCPeerConnection, mozRTCSessionDescription), n = !1; t.isSubscriber = e.isSubscriber, t.pc_config = { iceServers: [] }, e.iceServers instanceof Array ? e.iceServers.map(function (e) { 0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({ url: e.url }); }) : e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }); }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { offerToReceiveAudio: e.audio, offerToReceiveVideo: e.video, mozDontOfferDataChannel: !0 }, t.roapSessionId = 103, t.peerConnection = new RTCPeerConnection(t.pc_config), t.peerConnection.onicecandidate = function (e) { e.candidate ? t.iceCandidateCount += 1 : (o.default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())); }, t.checkMLineReverseInSDP = function (e) { return !(!~e.indexOf("m=audio") || !~e.indexOf("m=video")) && e.indexOf("m=audio") > e.indexOf("m=video"); }, t.reverseMLineInSDP = function (e) { var t = e.split("m=audio"), i = t[1].split("m=video"), n = "m=video" + i[1], o = "m=audio" + i[0]; return e = t[0] + n + o; }, t.processSignalingMessage = function (e) { var n, r = JSON.parse(e); t.incomingMessage = r, "new" === t.state ? "OFFER" === r.messageType ? (r.sdp = u(r.sdp), n = { sdp: r.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new i(n), function () { o.default.debug("setRemoteDescription succeeded"); }, function (e) { o.default.info("setRemoteDescription failed: " + e.name); }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (r.sdp = u(r.sdp), r.sdp = r.sdp.replace(/ generation 0/g, ""), r.sdp = r.sdp.replace(/ udp /g, " UDP "), r.sdp = r.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), r.sdp = r.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), r.sdp = r.sdp.replace(/a=mid:video/, "a=mid:sdparta_1"), t.isMLineReverseInSDP && (r.sdp = t.reverseMLineInSDP(r.sdp)), n = { sdp: r.sdp, type: "answer" }, t.peerConnection.setRemoteDescription(new i(n), function () { o.default.debug("setRemoteDescription succeeded"); }, function (e) { o.default.info("setRemoteDescription failed: " + e); }), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (n = { sdp: r.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new i(n), function () { o.default.debug("setRemoteDescription succeeded"); }, function (e) { o.default.info("setRemoteDescription failed: " + e.name); })) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (n = { sdp: r.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new i(n), function () { o.default.debug("setRemoteDescription succeeded"); }, function (e) { o.default.info("setRemoteDescription failed: " + e.name); }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state)); }; var r = { id: "", type: "", mediaType: "opus", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" }, a = { id: "", type: "", mediaType: "", googCodecName: "h264" === e.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0" }, s = { id: "", type: "", mediaType: "", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" }, d = { id: "", type: "", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0", googFramesDecoded: "0" }, c = 0; t.getStatsRate = function (e) { t.getStats(function (t) { t.forEach(function (e) { "inboundrtp" === e.type && "video" === e.mediaType && e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - c) / 3).toString(), c = e.googFramesDecoded); }), e(t); }); }, t.getStats = function (e) { t.peerConnection.getStats().then(function (i) { var n = []; Object.keys(i).forEach(function (e) { var t = i[e]; n.push(t), "outboundrtp" === t.type && "video" === t.mediaType && (a.id = t.id, a.type = t.type, a.mediaType = t.mediaType, a.bytesSent = t.bytesSent ? t.bytesSent + "" : "0", a.packetsSent = t.packetsSent ? t.packetsSent + "" : "0", a.googPlisReceived = t.pliCount ? t.pliCount + "" : "0", a.googNacksReceived = t.nackCount ? t.nackCount + "" : "0", a.googFirsReceived = t.firCount ? t.firCount + "" : "0", a.googFrameRateSent = t.framerateMean ? t.framerateMean + "" : "0"), "outboundrtp" === t.type && "audio" === t.mediaType && (r.id = t.id, r.type = t.type, r.mediaType = t.mediaType, r.bytesSent = t.bytesSent ? t.bytesSent + "" : "0", r.packetsSent = t.packetsSent ? t.packetsSent + "" : "0"), "inboundrtp" !== t.type || "audio" !== t.mediaType || t.isRemote || (s.id = t.id, s.type = t.type, s.mediaType = t.mediaType, s.bytesReceived = t.bytesReceived ? t.bytesReceived + "" : "0", s.packetsLost = t.packetsLost ? t.packetsLost + "" : "0", s.packetsReceived = t.packetsReceived ? t.packetsReceived + "" : "0", s.googJitterReceived = t.jitter ? t.jitter + "" : "0"), "inboundrtp" !== t.type || "video" !== t.mediaType || t.isRemote || (d.id = t.id, d.type = t.type, d.mediaType = t.mediaType, d.bytesReceived = t.bytesReceived ? t.bytesReceived + "" : "0", d.googFrameRateReceived = t.framerateMean ? t.framerateMean + "" : "0", d.googFramesDecoded = t.framesDecoded ? t.framesDecoded + "" : "0", d.packetsLost = t.packetsLost ? t.packetsLost + "" : "0", d.packetsReceived = t.packetsReceived ? t.packetsReceived + "" : "0", d.googJitterBufferMs = t.jitter ? t.jitter + "" : "0", d.googNacksSent = t.nackCount ? t.nackCount + "" : "0", d.googPlisSent = t.pliCount ? t.pliCount + "" : "0", d.googFirsSent = t.firCount ? t.firCount + "" : "0"), -1 !== t.id.indexOf("outbound_rtcp_video") && (a.packetsLost = t.packetsLost ? t.packetsLost + "" : "0"); }); var o = [a, r, s, d]; o.push({ id: "time", startTime: t.connectedTime, timestamp: new Date }), e(o, n); }, function (e) { o.default.error(e); }); }, t.addStream = function (e) { n = !0, t.peerConnection.addStream(e), t.markActionNeeded(); }, t.removeStream = function () { t.markActionNeeded(); }, t.close = function () { t.state = "closed", t.peerConnection.close(); }, t.markActionNeeded = function () { t.actionNeeded = !0, t.doLater(function () { t.onstablestate(); }); }, t.doLater = function (e) { window.setTimeout(e, 1); }, t.onstablestate = function () { if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state) {
                n && (t.mediaConstraints = void 0), function () { t.peerConnection.createOffer(function (e) { if (e.sdp = u(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer)
                    return t.peerConnection.setLocalDescription(e), t.isMLineReverseInSDP = t.checkMLineReverseInSDP(e.sdp), t.state = "preparing-offer", void t.markActionNeeded(); o.default.debug("Not sending a new offer"); }, function (e) { o.default.debug("Ups! create offer failed ", e); }, t.mediaConstraints); }();
            }
            else if ("preparing-offer" === t.state) {
                if (t.moreIceComing)
                    return;
                t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent";
            }
            else if ("offer-received" === t.state)
                t.peerConnection.createAnswer(function (e) { if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted)
                    return void t.markActionNeeded(); var i = new Date; o.default.debug(i.getTime() + ": Starting ICE in responder"), t.iceStarted = !0; }, function () { o.default.debug("Ups! Something went wrong"); });
            else if ("offer-received-preparing-answer" === t.state) {
                if (t.moreIceComing)
                    return;
                var e = t.peerConnection.localDescription.sdp;
                t.sendMessage("ANSWER", e), t.state = "established";
            }
            else
                t.error("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1;
        } }, t.sendOK = function () { t.sendMessage("OK"); }, t.sendMessage = function (e, i) { var n = {}; n.messageType = e, n.sdp = i, "OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(n)); }, t.error = function (e) { throw "Error in RoapOnJsep: " + e; }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) { t.onaddstream && t.onaddstream(e, "ontrack"); }, t.peerConnection.onremovestream = function (e) { t.onremovestream && t.onremovestream(e); }, t.peerConnection.oniceconnectionstatechange = function (e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState); }; var u = function (t) { if (e.video && e.maxVideoBW) {
            var i = t.match(/m=video.*\r\n/);
            if (null == i && (i = t.match(/m=video.*\n/)), i && i.length > 0) {
                var n = i[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
                t = t.replace(i[0], n);
            }
        } if (e.audio && e.maxAudioBW) {
            var i = t.match(/m=audio.*\r\n/);
            if (null == i && (i = t.match(/m=audio.*\n/)), i && i.length > 0) {
                var n = i[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n";
                t = t.replace(i[0], n);
            }
        } return t; }; return t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t; };
        t.default = r;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function (e) { var t = { audioSendBytes: "0", audioSendPackets: "0", videoSendBytes: "0", videoSendPackets: "0", videoSendPacketsLost: "0", videoSendFrameRate: "0", videoSendBandwidth: "0", videoSendResolutionWidth: "0", videoSendResolutionHeight: "0", audioCodecName: "", videoCodecName: "", timestamp: "", startTime: "", duration: "0" }; return e.forEach(function (e) { "VideoBwe" === e.type ? t.videoSendBandwidth = e.googAvailableSendBandwidth : -1 !== e.id.indexOf("send") || -1 !== e.id.indexOf("outbound_rtp") || -1 !== e.id.indexOf("OutboundRTP") ? "audio" === e.mediaType ? (t.audioSendBytes = e.bytesSent, t.audioSendPackets = e.packetsSent, t.audioCodecName = e.googCodecName) : (t.videoSendBytes = e.bytesSent, t.videoSendPackets = e.packetsSent, t.videoSendPacketsLost = e.packetsLost, t.videoSendFrameRate = e.googFrameRateSent, t.videoSendResolutionWidth = e.googFrameWidthSent, t.videoSendResolutionHeight = e.googFrameHeightSent, t.videoCodecName = e.googCodecName) : "time" === e.id && (t.timestamp = e.timestamp, t.startTime = e.startTime); }), t.timestamp instanceof Date && t.startTime instanceof Date && (t.duration = Math.floor((t.timestamp.getTime() - t.startTime.getTime()) / 1e3) + ""), t; }, o = function (e) { var t = { audioReceiveBytes: "0", audioReceivePackets: "0", audioReceivePacketsLost: "0", videoReceiveBytes: "0", videoReceivePackets: "0", videoReceivePacketsLost: "0", videoReceiveFrameRate: "0", videoReceiveDecodeFrameRate: "0", videoReceiveBandwidth: "0", videoReceivedResolutionWidth: "0", videoReceivedResolutionHeight: "0", timestamp: "", startTime: "", duration: "0" }; return e.forEach(function (e) { "VideoBwe" === e.type ? t.videoReceiveBandwidth = e.googAvailableReceiveBandwidth : -1 !== e.id.indexOf("recv") || -1 !== e.id.indexOf("inbound_rtp") || -1 !== e.id.indexOf("InboundRTP") ? "audio" === e.mediaType ? (t.audioReceiveBytes = e.bytesReceived, t.audioReceivePackets = e.packetsReceived, t.audioReceivePacketsLost = e.packetsLost) : (t.videoReceiveBytes = e.bytesReceived, t.videoReceivePacketsLost = e.packetsLost, t.videoReceivePackets = e.packetsReceived, t.videoReceiveFrameRate = e.googFrameRateReceived, t.videoReceiveDecodeFrameRate = e.googFrameRateDecoded, t.videoReceivedResolutionWidth = e.googFrameWidthReceived, t.videoReceivedResolutionHeight = e.googFrameHeightReceived) : "time" === e.id && (t.timestamp = e.timestamp, t.startTime = e.startTime); }), t.timestamp instanceof Date && t.startTime instanceof Date && (t.duration = Math.floor((t.timestamp.getTime() - t.startTime.getTime()) / 1e3) + ""), t; };
        t.publishStatsFilter = n, t.subscribeStatsFilter = o;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.LiveTranscoding = t.TranscodingUser = t.createLiveClient = t.createRtcClient = t.createClient = void 0;
        var o = i(29), r = n(o), a = i(0), s = n(a), d = i(6), c = n(d), u = i(2), l = i(11), p = i(5), f = i(3), m = i(32), g = i(7), v = i(12), _ = i(1), S = function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t.default = e, t; }(_), h = function (e) { var t = {}; return t.key = void 0, t.highStream = null, t.lowStream = null, t.lowStreamParameter = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2, t.setLowStreamParameter = function (e) { t.lowStreamParameter = e; }, t._getVideoCameraIdByLabel = function (e, t, i) { (0, g.getDevices)(function (n) { var o = !0, r = !1, a = void 0; try {
            for (var s, d = n[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                var u = s.value;
                if (u.label === e && "videoinput" === u.kind)
                    return t && t(u.deviceId);
            }
        }
        catch (e) {
            r = !0, a = e;
        }
        finally {
            try {
                !o && d.return && d.return();
            }
            finally {
                if (r)
                    throw a;
            }
        } return i && i(c.default.NOT_FIND_DEVICE_BY_LABEL); }, i); }, t.init = function (t, i, n) { if ("string" != typeof t)
            throw new Error("Param appId should be string"); s.default.info("Initializing AgoraRTC client"), e.appId = t, e.sessionId = (0, u.generateSessionId)(), i && i(); }, t.configPublisher = function (e) { t.gatewayClient.configPublisher(e); }, t.enableDualStream = function (i, n) { return "iOS" === (0, f.getBrowserOS)() ? (p.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !1 }), n && n(c.default.IOS_NOT_SUPPORT)) : (0, f.isWeChatBrowser)() ? (p.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !1 }), n && n(c.default.WECHAT_NOT_SUPPORT)) : (p.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !0 }), t.isDualStream = !0, void (0 === t.highStreamState ? t._publishLowStream(i, function (e) { s.default.warning(e), n && n(c.default.ENABLE_DUALSTREAM_FAILED); }) : 1 === t.highStreamState ? n && n(c.default.STILL_ON_PUBLISHING) : i && i())); }, t.disableDualStream = function (i, n) { p.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !1, succ: !0 }), t.isDualStream = !1, 0 === t.highStreamState ? t._unpublishLowStream(i, function (e) { s.default.warning(e), n && n(c.default.DISABLE_DUALSTREAM_FAILED); }) : 1 === t.highStreamState ? n && n(c.default.STILL_ON_PUBLISHING) : i && i(); }, t._createLowStream = function (e, i) { if (!t.highStream || !t.highStream.stream)
            return void (i && i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE)); var n = Object.assign({}, t.highStream.params); if (n.streamID += 1, n.audio = !1, !n.video)
            return void (i && i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE)); var o = t.highStream.stream.getVideoTracks()[0]; if (!o)
            return void (i && i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE)); t._getVideoCameraIdByLabel(o.label, function (r) { n.cameraId = r; var a = new g.Stream(n); if (a.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
            var s = Object.assign({}, t.lowStreamParameter);
            if (!s.width || !s.height) {
                var d = (0, m.simMap)(t.highStream.profile), c = S.SUPPORT_RESOLUTION_LIST[d[0]];
                s.width = c[0], s.height = c[1];
            }
            if (s.framerate = s.framerate || 5, s.bitrate = s.bitrate || 50, (0, f.isSafari)()) {
                var c = S.SUPPORT_RESOLUTION_LIST[t.highStream.profile];
                s.width = c[0], s.height = c[1];
            }
            a.setVideoProfileCustomPlus(s);
        }
        else
            a.setVideoProfileCustom((0, m.simMap)(t.highStream.profile)); a.init(function () { t.highStream.lowStream = a, o.enabled || a.disableVideo(), e && e(a); }, i); }, i); }, t._getLowStream = function (e, i) { t.lowStream ? e(t.lowStream) : t._createLowStream(function (i) { t.lowStream = i, e(t.lowStream); }, i); }, t._publishLowStream = function (e, i) { return 2 !== t.lowStreamState ? i && i(c.default.LOW_STREAM_ALREADY_PUBLISHED) : t.highStream && t.highStream.hasScreen() ? i && i(c.default.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream(function (n) { t.lowStreamState = 1, t.gatewayClient.publish(n, function () { t.lowStreamState = 0, e && e(); }, function (e) { s.default.debug("publish low stream failed"), i && i(e); }); }, i); }, t._unpublishLowStream = function (e, i) { if (0 !== t.lowStreamState)
            return i && i(c.default.LOW_STREAM_NOT_YET_PUBLISHED); t.lowStream && (t.gatewayClient.unpublish(t.lowStream, function () { }, function (e) { s.default.debug("unpublish low stream failed"), i && i(e); }), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e()); }, t.join = function (i, n, o, r, a) { if (i && "string" != typeof i)
            return s.default.warning("Param channelKey should be string"), a && a(c.default.INVALID_PARAMETER); if ("string" != typeof n)
            return s.default.warning("Param channel should be string"), a && a(c.default.INVALID_PARAMETER); if (o && ("number" != typeof o || !(0, u.is32Uint)(o)))
            return s.default.warning("Param uid should be number"), a && a(c.default.INVALID_PARAMETER); t.highStream = null, t.lowStream = null, t.lowStreamParameter = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2; var d = { appId: e.appId, sid: e.sessionId, cname: n, uid: o }; p.report.sessionInit(e.sessionId, { lts: (new Date).getTime(), cname: n, appid: e.appId, mode: e.mode, succ: !0 }), (0, l.getGatewayList)(d, function (o) { s.default.info("Joining channel: " + n), t.key = i || e.appId, d.cid = o.cid, d.uid = o.uid, d.gatewayAddr = o.gateway_addr, t.joinInfo = d, t.gatewayClient.join(d, t.key, function (e) { s.default.info("Join channal " + n + " success"), r(e); }, a); }, a); }, t.renewChannelKey = function (e, i, n) { void 0 === t.key ? (s.default.error("renewChannelKey should not be called before user join"), (0, u.safeCall)(n, c.default.INVALID_OPERATION)) : (t.key = e, t.gatewayClient.key = e, t.gatewayClient.rejoin(), (0, u.safeCall)(i)); }, t.leave = function (e, i) { s.default.info("Leaving channel"), t.gatewayClient.leave(e, i); }, t._publish = function (i, n, o) { if (2 !== t.highStreamState)
            return s.default.warning("Can't publish stream when stream already publish", i.getId()), o && o(c.default.STREAM_ALREADY_PUBLISHED); s.default.info("Publishing stream, uid: ", i.getId()), t.highStream = i, t.highStreamState = 1, t.highStream.streamId = t.joinInfo.uid, t.gatewayClient.publish(i, function () { i.sid = e.sessionId, t.highStreamState = 0, s.default.info("Publish success, uid:", i.getId()), t.isDualStream ? t._publishLowStream(function () { n && n(); }, function () { n && n(); }) : n && n(); }, o); }, t._unpublish = function (e, i, n) { if (0 !== t.highStreamState)
            return s.default.warning("Can't unpublish stream when stream not publish"), n && n(c.default.STREAM_NOT_YET_PUBLISHED); s.default.info("Unpublish stream, uid: ", e.getId()), t.isDualStream && t.lowStream ? (t._unpublishLowStream(null, n), t.gatewayClient.unpublish(e, null, n), t.highStreamState = 2, s.default.info("Unpublish stream success, uid:", e.getId())) : (t.gatewayClient.unpublish(e, null, n), t.highStreamState = 2, s.default.info("Unpublish stream success, uid:", e.getId())), i && i(); }, t.publish = function (e, i) { if (2 !== t.highStreamState)
            return void (i && i(c.default.STREAM_ALREADY_PUBLISHED)); t._publish(e, null, i); }, t.unpublish = function (e, i) { if (0 !== t.highStreamState)
            return void (i && i(c.default.STREAM_NOT_YET_PUBLISHED)); t._unpublish(e, null, i); }, t.subscribe = function (e, i) { s.default.info("Subscribe stream, uid: ", e.getId()), t.gatewayClient.subscribe(e, null, i); }, t.unsubscribe = function (e, i) { s.default.info("Unsubscribe stream, uid: ", e.getId()), t.gatewayClient.unsubscribe(e, null, i); }, t.setRemoteVideoStreamType = function (e, i) { t.gatewayClient.setRemoteVideoStreamType(e, i); }, t.startLiveStreaming = function (e, i) { t.gatewayClient.startLiveStreaming(e, i); }, t.stopLiveStreaming = function (e) { t.gatewayClient.stopLiveStreaming(e); }, t.setLiveTranscoding = function (e) { Object.assign(b, e), t.gatewayClient.setLiveTranscoding(b); }, t.gatewayClient = (0, r.default)(e), t.on = t.gatewayClient.on, t.on("rejoin", function () { var e = 2 === t.highStreamState ? 2 : 0; t.highStream && 0 === e && (s.default.info("publish after rejoin"), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream, function (e) { e && s.default.info(e); })); }), t.on("pubP2PLost", function (e) { s.default.debug("Start reconnect local peerConnection :", t.highStream.getId()), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-start", id: t.highStream.getId() }), t._unpublish(t.highStream, function () { t._publish(t.highStream, function () { s.default.debug("Reconnect local peerConnection success:", t.highStream.getId()), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: t.highStream.getId() }); }, function (e) { s.default.debug("Reconnect local peerConnection failed:" + e), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: t.highStream.getId() }); }); }, function (e) { s.default.debug("Reconnect local peerConnection failed:" + e), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: t.highStream.getId() }); }); }), t.on("subP2PLost", function (e) { s.default.debug("Start reconnect remote peerConnection :", e.stream.getId()), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-start", id: e.stream.getId() }), t.gatewayClient.unsubscribe(e.stream, function () { t.gatewayClient.subscribe(e.stream, function () { s.default.debug("Reconnect remote peerConnection success:", e.stream.getId()), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: e.stream.getId() }); }, function (i) { s.default.debug("Reconnect remote peerConnection failed:" + i), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: e.stream.getId() }); }); }, function (i) { s.default.debug("Reconnect remote peerConnection failed:" + i), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", id: e.stream.getId() }); }); }), t; }, E = { uid: 0, x: 0, y: 0, width: 0, height: 0, zOrder: 0, alpha: 1 }, b = { width: 640, height: 360, videoBitrate: 400, videoFramerate: 15, lowLatency: !1, audioSampleRate: v.AUDIO_SAMPLE_RATE_48000, audioBitrate: 48, audioChannels: 1, videoGop: 30, videoCodecProfile: v.VIDEO_CODEC_PROFILE_HIGH, userCount: 0, userConfigExtraInfo: {}, backgroundColor: 0, transcodingUsers: [] }, R = function (e) { return e && "interop" === e.mode ? (s.default.info("Creating client , MODE : Interop"), h({ mode: "live" })) : e && "h264_interop" === e.mode ? (s.default.info("Creating client , MODE : h264_interop"), h({ mode: "live", codec: "h264" })) : (s.default.info("Creating client , MODE : web-only"), h({ mode: "rtc" })); }, I = function () { return s.default.info("Creating client , MODE : rtc"), s.default.warning("createRtcClient is deprecated."), h({ mode: "rtc" }); }, y = function (e) { var t = "host"; return e && "audience" === e.role && (t = e.role), s.default.info("Creating client , MODE : live"), s.default.warning("createLiveClient is deprecated."), h({ mode: "live", role: t }); };
        t.createClient = R, t.createRtcClient = I, t.createLiveClient = y, t.TranscodingUser = E, t.LiveTranscoding = b;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, r = i(7), a = i(30), s = n(a), d = i(8), c = i(4), u = i(0), l = n(u), p = i(6), f = n(p), m = i(10), g = n(m), v = i(11), _ = i(1), S = i(5), h = i(2), E = i(3), b = function (e) { function t() { M.remoteStreamsInChannel.clear(); for (var e in M.remoteStreams)
            if (M.remoteStreams.hasOwnProperty(e)) {
                var t = M.remoteStreams[e];
                t.stop(), t.close(), delete M.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0);
            } } var i = !1, n = function () { return { _type: "ping" }; }, a = function () { return { _type: "join1", message: { appId: e.appId, key: M.key, channel: M.joinInfo.cname, uid: M.uid, version: _.VERSION, browser: navigator.userAgent, mode: e.mode, role: e.role, config: M.config } }; }, u = function () { return { _type: "leave" }; }, m = function (e) { return { _type: "control", message: e }; }, b = function (e) { return { _type: "token", message: e }; }, R = function (e) { return { _type: "unpublish", message: e }; }, I = function (e) { return { _type: "unsubscribe", message: e }; }, y = function (e, t) { return { _type: "switchVideoStream", message: { id: e, type: t } }; }, A = function (e, t, i) { return { _type: "publish", options: e, sdp: t, p2pid: i }; }, C = function (e) { return { _type: "publish_stats", options: { stats: e }, sdp: null }; }, T = function (e) { return { _type: "publish_stats_low", options: { stats: e }, sdp: null }; }, O = function (e, t, i) { return { _type: "subscribe", options: e, sdp: t, p2pid: i }; }, w = function (e, t) { return { _type: "subscribe_stats", options: { id: e, stats: t }, sdp: null }; }, N = function (e, t) { return { _type: "start_live_streaming", message: { url: e, transcodingEnabled: t } }; }, D = function (e) { return { _type: "stop_live_streaming", message: { url: e } }; }, L = function (e) { return { _type: "set_live_transcoding", message: { transcoding: e } }; }, M = (0, c.EventDispatcher)(e); M.socket = void 0, M.state = 0, M.mode = e.mode, M.role = e.role, M.codec = e.codec, M.config = {}, M.timers = {}, M.timer_counter = {}, M.localStreams = {}, M.remoteStreams = {}, M.attemps = 1, M.p2p_attemps = 1, M.audioLevel = {}, M.activeSpeaker = void 0, M.p2ps = new Map, M.firstFrameTimer = new Map, M.liveStreams = new Map, M.remoteStreamsInChannel = new Set; var k = g.default; M.p2pCounter = (0, h.random)(1e5), M.generateP2PId = function () { return ++M.p2pCounter; }, M.remoteVideoStreamTypes = { REMOTE_VIDEO_STREAM_HIGH: 0, REMOTE_VIDEO_STREAM_LOW: 1, REMOTE_VIDEO_STREAM_MEDIUM: 2 }, M.configPublisher = function (e) { M.config = e; }, M.join = function (e, t, i, o) { var r = (new Date).getTime(), s = e.uid; return 0 !== M.state ? (l.default.error("Server already in connecting/connected state"), o && o(f.default.INVALID_OPERATION), void S.report.joinGateway(e.sid, { lts: r, succ: !1, ec: f.default.INVALID_OPERATION, addr: null })) : null !== s && void 0 !== s && parseInt(s) !== s ? (l.default.error("Input uid is invalid"), o && o(f.default.INVALID_PARAMETER), void S.report.joinGateway(e.sid, { lts: r, succ: !1, ec: f.default.INVALID_PARAMETER, addr: null })) : (M.joinInfo = e, M.uid = s, M.key = t, M.state = 1, void U(e, function (t) { M.stunServerUrl = t.stunServerUrl, M.turnServer = t.turnServer, M.state = 2, l.default.debug("Connected to gateway server"), M.pingTimer = setInterval(function () { B(n(), function () { }, function (e) { }); }, 3e3), B(a(), function (t) { S.report.joinGateway(e.sid, { lts: r, succ: !0, ec: null, vid: t.vid, addr: M.socket.getURL() }), i(M.uid); }, function (t) { l.default.error("User join failed [" + t + "]"), o && o(t), S.report.joinGateway(e.sid, { lts: r, succ: !1, ec: t, addr: M.socket.getURL() }); }); }, function (t) { l.default.error("User join failed [" + t + "]"), o && o(t), S.report.joinGateway(e.sid, { lts: r, succ: !1, ec: t, addr: M.socket.getURL() }); })); }, M.leave = function (e, i) { if (2 != M.state)
            return void k(e); clearInterval(M.pingTimer); for (var n in M.timers)
            M.timers.hasOwnProperty(n) && clearInterval(M.timers[n]); B(u(), function (t) { M.socket.close(), M.socket = void 0, l.default.info("Leave channal success"), e && e(t); }, i); for (var n in M.localStreams)
            if (M.localStreams.hasOwnProperty(n)) {
                var o = M.localStreams[n];
                delete M.localStreams[n], void 0 !== o.pc && (o.pc.close(), o.pc = void 0);
            } t(), M.state = 0; }, M.publish = function (e, t, i) { var n = (new Date).getTime(); if (e.publishLTS = n, "object" !== (void 0 === e ? "undefined" : o(e)) || null === e)
            return l.default.error("Invalid local stream"), i && i(f.default.INVALID_LOCAL_STREAM), void S.report.publish(M.joinInfo.sid, { lts: n, succ: !1, ec: f.default.INVALID_LOCAL_STREAM }); if (null === e.stream && void 0 === e.url)
            return l.default.error("Invalid local media stream"), i && i(f.default.INVALID_LOCAL_STREAM), void S.report.publish(M.joinInfo.sid, { lts: n, succ: !1, ec: f.default.INVALID_LOCAL_STREAM }); if (2 !== M.state)
            return l.default.error("User is not in the session"), i && i(f.default.INVALID_OPERATION), void S.report.publish(M.joinInfo.sid, { lts: n, succ: !1, ec: f.default.INVALID_OPERATION }); var r = e.getAttributes() || {}; if (e.local && void 0 === M.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
            var a = M.generateP2PId();
            void 0 !== e.url ? x(A({ state: "url", audio: e.hasAudio(), video: e.hasVideo(), attributes: e.getAttributes(), mode: M.mode }, e.url), function (t, i) { "success" === t ? (e.getUserId = function () { return i; }, M.localStreams[i] = e, e.onClose = function () { M.unpublish(e); }) : l.default.error("Publish local stream failed", t); }) : (M.localStreams[e.getId()] = e, e.pc = (0, d.Connection)({ callback: function (o) { l.default.debug("SDP exchange in publish : send offer --  ", JSON.parse(o)), x(A({ state: "offer", id: e.getId(), audio: e.hasAudio(), video: e.hasVideo() || e.hasScreen(), attributes: e.getAttributes(), mode: M.mode, codec: M.codec, p2pid: a }, o), function (r, s) { if ("error" === r)
                    return l.default.error("Publish local stream failed"), i && i(f.default.PUBLISH_STREAM_FAILED), void S.report.publish(M.joinInfo.sid, { lts: n, succ: !1, localSDP: o, ec: f.default.PUBLISH_STREAM_FAILED }); e.pc.onsignalingmessage = function (t) { e.pc.onsignalingmessage = function () { }, x(A({ state: "ok", id: e.getId(), audio: e.hasAudio(), video: e.hasVideo(), screen: e.hasScreen(), attributes: e.getAttributes(), mode: M.mode }, t)), e.getUserId = function () { return s.id; }, l.default.info("Local stream published with uid", s.id), e.onClose = function () { M.unpublish(e); }, e.unmuteAudio = function () { B(m({ action: "audio-out-on", streamId: e.getId() }), function () { }, function () { }); }, e.unmuteVideo = function () { B(m({ action: "video-out-on", streamId: e.getId() }), function () { }, function () { }); }, e.muteAudio = function () { B(m({ action: "audio-out-off", streamId: e.getId() }), function () { }, function () { }); }, e.muteVideo = function () { B(m({ action: "video-out-off", streamId: e.getId() }), function () { }, function () { }); }, e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (l.default.debug("local stream audio mute"), e.muteAudio()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (l.default.debug("local stream video mute"), e.muteVideo())); }, e.pc.oniceconnectionstatechange = function (o) { "failed" === o ? (void 0 != M.timers[e.getId()] && clearInterval(M.timers[e.getId()]), l.default.error("Publisher connection is lost"), i && i(f.default.PEERCONNECTION_FAILED), M.p2ps.delete(a), M.dispatchEvent((0, c.ClientEvent)({ type: "pubP2PLost", stream: e })), S.report.publish(M.joinInfo.sid, { lts: n, succ: !1, ec: f.default.PEERCONNECTION_FAILED })) : "connected" === o && (M.p2ps.set(a, e), e.p2pId = a, t && t(), S.report.publish(M.joinInfo.sid, { lts: n, succ: !0, ec: null })); }, l.default.debug("SDP exchange in publish : receive answer --  ", JSON.parse(r)), e.pc.processSignalingMessage(r); }); }, audio: e.hasAudio(), video: e.hasVideo(), screen: e.hasScreen(), isSubscriber: !1, iceServers: [], stunServerUrl: M.stunServerUrl, turnServer: M.turnServer, maxAudioBW: r.maxAudioBW, minVideoBW: r.minVideoBW, maxVideoBW: r.maxVideoBW, mode: M.mode, codec: M.codec }), e.pc.addStream(e.stream), l.default.debug("PeerConnection add stream :", e.stream), M.timers[e.getId()] = setInterval(function () { e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (t) { t.forEach(function (t) { -1 === t.id.indexOf("outbound_rtp") && -1 === t.id.indexOf("OutboundRTP") || "video" !== t.mediaType || (t.googFrameWidthSent = e.videoWidth + "", t.googFrameHeightSent = e.videoHeight + ""), e.getUserId && (e.getId() === e.getUserId() ? B(C(t), null, null) : B(T(t), null, null)); }); }); }, 3e3), void 0 !== e.aux_stream && (e.pc.addStream(e.aux_stream), l.default.debug("PeerConnection add stream :", e.aux_stream)));
        } }, M.unpublish = function (e, t, i) { return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (l.default.error("Invalid local stream"), void k(i, f.default.INVALID_LOCAL_STREAM)) : 2 !== M.state ? (l.default.error("User not in the session"), void k(i, f.default.INVALID_OPERATION)) : (void 0 != M.timers[e.getId()] && clearInterval(M.timers[e.getId()]), void (void 0 !== M.socket ? e.local && void 0 !== M.localStreams[e.getId()] ? (delete M.localStreams[e.getId()], B(R(e.getUserId())), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e.unmuteAudio = void 0, e.muteAudio = void 0, e.unmuteVideo = void 0, e.muteVideo = void 0, M.p2ps.delete(e.p2pId), t && t()) : (l.default.error("Invalid local stream"), k(i, f.default.INVALID_LOCAL_STREAM)) : (l.default.error("User not in the session"), k(i, f.default.INVALID_OPERATION)))); }, M.subscribe = function (e, t, i) { var n = (new Date).getTime(); if (e.subscribeLTS = n, "object" !== (void 0 === e ? "undefined" : o(e)) || null === e)
            return l.default.error("Invalid remote stream"), i && i(f.default.INVALID_REMOTE_STREAM), void S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.INVALID_REMOTE_STREAM }); if (2 !== M.state)
            return l.default.error("User is not in the session"), i && i(f.default.INVALID_OPERATION), void S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.INVALID_OPERATION }); if (!e.local && M.remoteStreams.hasOwnProperty(e.getId()))
            if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
                var r = M.generateP2PId();
                e.pc = (0, d.Connection)({ callback: function (t) { l.default.debug("SDP exchange in subscribe : send offer --  ", JSON.parse(t)), x(O({ streamId: e.getId(), audio: !0, video: !0, mode: M.mode, codec: M.codec, p2pid: r }, t), function (t) { if ("error" === t)
                        return l.default.error("Subscribe remote stream failed, closing stream ", e.getId()), e.close(), i && i(f.default.SUBSCRIBE_STREAM_FAILED), void S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.SUBSCRIBE_STREAM_FAILED }); l.default.debug("SDP exchange in subscribe : receive answer --  ", JSON.parse(t)), e.pc.processSignalingMessage(t); }); }, nop2p: !0, audio: !0, video: !0, screen: e.hasScreen(), isSubscriber: !0, iceServers: [], stunServerUrl: M.stunServerUrl, turnServer: M.turnServer }), e.pc.onaddstream = function (t, i) { if ("ontrack" === i && "video" === t.track.kind || "onaddstream" === i) {
                    if (l.default.info("Remote stream subscribed with uid ", e.getId()), M.remoteStreams[e.getId()].stream = "onaddstream" === i ? t.stream : t.streams[0], M.remoteStreams[e.getId()].hasVideo()) {
                        if ((0, E.isFireFox)()) {
                            var n = M.remoteStreams[e.getId()].stream;
                            (0, h.vsResHack)(n, function (t, i) { e.videoWidth = t, e.videoHeight = i; }, function (e) { return l.default.warning("vsResHack failed:" + e); });
                        }
                    }
                    else
                        M.remoteStreams[e.getId()].disableVideo();
                    var o = (0, c.StreamEvent)({ type: "stream-subscribed", stream: M.remoteStreams[e.getId()] });
                    M.dispatchEvent(o);
                } e.unmuteAudio = function () { B(m({ action: "audio-in-on", streamId: e.getId() }), function () { }, function () { }); }, e.muteAudio = function () { B(m({ action: "audio-in-off", streamId: e.getId() }), function () { }, function () { }); }, e.unmuteVideo = function () { B(m({ action: "video-in-on", streamId: e.getId() }), function () { }, function () { }); }, e.muteVideo = function () { B(m({ action: "video-in-off", streamId: e.getId() }), function () { }, function () { }); }; }, M.timers[e.getId()] = setInterval(function () { e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (t) { t.forEach(function (t) { -1 !== t.id.indexOf("inbound_rtp") && "video" === t.mediaType && (t.googFrameWidthReceived = e.videoWidth + "", t.googFrameHeightReceived = e.videoHeight + ""), x(w(e.getId(), t), null, null); }); }); }, 3e3), M.audioLevel[e.getId()] = 0, M.timers[e.getId() + "audio"] = setInterval(function () { e && e.pc && e.pc.getStats && e.pc.getStats(function (t) { t.forEach(function (t) { if ("audio" === t.mediaType) {
                    if (t.audioOutputLevel > 5e3) {
                        M.audioLevel[e.getId()] < 20 && (M.audioLevel[e.getId()] += 1);
                        for (var i in M.audioLevel)
                            parseInt(i) !== e.getId() && M.audioLevel[i] > 0 && (M.audioLevel[i] -= 1);
                    }
                    var n = Object.keys(M.audioLevel), o = n.sort(function (e, t) { return M.audioLevel[t] - M.audioLevel[e]; });
                    if (M.activeSpeaker !== o[0]) {
                        var r = (0, c.ClientEvent)({ type: "active-speaker", uid: o[0] });
                        M.dispatchEvent(r), M.activeSpeaker = o[0], l.default.debug("Update active speaker:" + M.activeSpeaker);
                    }
                } }); }); }, 50), e.pc.oniceconnectionstatechange = function (o) { "failed" === o ? (void 0 != M.timers[e.getId()] && (clearInterval(M.timers[e.getId()]), clearInterval(M.timers[e.getId()] + "audio")), M.p2ps.delete(r), l.default.error("Subscriber connection is lost", e.getId()), i && i(f.default.PEERCONNECTION_FAILED), M.remoteStreams[e.getId()] && M.dispatchEvent((0, c.ClientEvent)({ type: "subP2PLost", stream: e })), S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.PEERCONNECTION_FAILED })) : "connected" === o && (M.p2ps.set(r, e), e.p2pId = r, t && t(), S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !0, peerid: e.getId() + "", ec: null }), M.firstFrameTimer.set(e.getId(), setInterval(function () { e.pc ? e.pc.getStats(function (t) { t.forEach(function (t) { -1 === t.id.indexOf("recv") && -1 === t.id.indexOf("inbound_rtp") && -1 === t.id.indexOf("InboundRTP") || "video" === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (clearInterval(M.firstFrameTimer.get(e.getId())), M.firstFrameTimer.delete(e.getId()), S.report.firstRemoteFrame(M.joinInfo.sid, { lts: (new Date).getTime(), peerid: e.getId() + "", succ: !0, width: +t.googFrameWidthReceived, height: +t.googFrameHeightReceived })); }); }) : (clearInterval(M.firstFrameTimer.get(e.getId())), M.firstFrameTimer.delete(e.getId())); }, 100))); };
            }
            else
                l.default.error("Invalid remote stream"), i && i(f.default.INVALID_REMOTE_STREAM), S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.INVALID_REMOTE_STREAM });
        else
            l.default.error("No such remote stream"), i && i(f.default.NO_SUCH_REMOTE_STREAM), S.report.subscribe(M.joinInfo.sid, { lts: n, succ: !1, peerid: e.getId() + "", ec: f.default.INVALID_REMOTE_STREAM }); }, M.unsubscribe = function (e, t, i) { return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? (l.default.error("Invalid remote stream"), void k(i, f.default.INVALID_REMOTE_STREAM)) : 2 !== M.state ? (l.default.error("User is not in the session"), void k(i, f.default.INVALID_OPERATION)) : (void 0 != M.timers[e.getId()] && (clearInterval(M.timers[e.getId()]), clearInterval(M.timers[e.getId()] + "audio")), void 0 != M.audioLevel[e.getId()] && delete M.audioLevel[e.getId()], void 0 != M.timer_counter[e.getId()] && delete M.timer_counter[e.getId()], M.remoteStreams.hasOwnProperty(e.getId()) ? M.socket ? e.local ? (l.default.error("Invalid remote stream"), void k(i, f.default.INVALID_REMOTE_STREAM)) : (e.close(), void B(I(e.getId()), function (n) { if ("error" === n)
            return l.default.error("Unsubscribe remote stream failed", e.getId()), void k(i, f.default.UNSUBSCRIBE_STREAM_FAILED); void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e.unmuteAudio = void 0, e.muteAudio = void 0, e.unmuteVideo = void 0, e.muteVideo = void 0, M.p2ps.delete(e.p2pId), l.default.info("Unsubscribe stream success"), M.dispatchEvent((0, c.ClientEvent)({ type: "stream-removed", uid: e.getId(), stream: e })), t && t(); }, i)) : (l.default.error("User is not in the session"), void k(i, f.default.INVALID_OPERATION)) : void k(i, f.default.NO_SUCH_REMOTE_STREAM)); }, M.setRemoteVideoStreamType = function (e, t) { if (l.default.debug("Switching remote video stream " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined" : o(e)) || null === e)
            return void l.default.error("Invalid remote stream"); if (2 !== M.state)
            return void l.default.error("User is not in the session"); if (!e.local) {
            switch (t) {
                case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM: break;
                default: return;
            }
            B(y(e.getId(), t), null, null);
        } }, M.startLiveStreaming = function (e, t) { if (M.liveStreams.set(e, t), l.default.debug("Start live streaming " + e + " transcodingEnabled " + t), 2 !== M.state)
            return void l.default.error("User is not in the session"); B(N(e, t), null, null); }, M.stopLiveStreaming = function (e) { if (l.default.debug("Stop live streaming " + e), 2 !== M.state)
            return void l.default.error("User is not in the session"); M.liveStreams.delete(e), B(D(e), null, null); }, M.setLiveTranscoding = function (e) { if ((0, h.isLiveTranscodingValid)(e)) {
            if (M.transcoding = e, l.default.debug("Set live transcoding ", e), 2 !== M.state)
                return void l.default.error("User is not in the session");
            B(L(e), null, null);
        } }; var P = function (e) { return 1e3 * Math.min(30, Math.pow(2, e) - 1); }; M.rejoin = function () { 0 !== M.state && (M.state = 0), M.socket && (clearInterval(M.pingTimer), M.socket.close(), M.socket = void 0), V(); }; var V = function () { M.key ? (l.default.info("Re-joining to channel " + M.joinInfo.cname), M.join(M.joinInfo, M.key, function (e) { l.default.info("User " + e + " is re-joined to " + M.joinInfo.cname); for (var t in M.localStreams)
            if (void 0 !== M.localStreams[t]) {
                var i = M.localStreams[t];
                delete M.localStreams[t], void 0 !== i.pc && (i.pc.close(), i.pc = void 0);
            } M.dispatchEvent((0, c.ClientEvent)({ type: "rejoin" })), M.liveStreams && M.liveStreams.size && M.liveStreams.forEach(function (e, t) { e && M.setLiveTranscoding(M.transcoding), M.startLiveStreaming(t, e); }); }, function (e) { l.default.error("Re-join to channel failed [" + e + "]"), M.dispatchEvent((0, c.StreamEvent)({ type: "error", reason: e })); })) : l.default.error("Connection recover failed [Invalid channel key]"); }, F = function (e) { M.socket = (0, s.default)(e, { sid: M.joinInfo.sid }); }, U = function (e, n, o) { void 0 !== M.socket ? M.socket.socket.connect() : (F(e.gatewayAddr), M.socket.on("onUplinkStats", function (e) { M.localStreams[M.uid] && (M.localStreams[M.uid].uplinkStats = e); }), M.socket.on("connect", function () { M.attemps = 1, B(b(e), n, o); }), M.socket.on("reconnect", function () { l.default.debug("Try to reconnect choose server and get gateway list again "), (0, v.getGatewayList)(M.joinInfo, function (e) { M.socket.reconnect(e.gateway_addr); }); }), M.socket.on("connect_error", function (e) { for (var n in M.timers)
            M.timers.hasOwnProperty(n) && clearInterval(M.timers[n]); for (var n in M.remoteStreams)
            if (M.remoteStreams.hasOwnProperty(n)) {
                var o = M.remoteStreams[n], r = (0, c.ClientEvent)({ type: "stream-removed", uid: o.getId(), stream: o });
                M.dispatchEvent(r);
            } if (t(), 1 != i) {
            clearInterval(M.pingTimer), M.state = 0, M.socket = void 0;
            var r = (0, c.StreamEvent)({ type: "error", reason: f.default.SOCKET_ERROR });
            M.dispatchEvent(r);
            var a = P(M.attemps);
            l.default.error("Connect to server error [" + JSON.stringify(e) + "], attempt to recover [#" + M.attemps + "] after " + a / 1e3 + " seconds");
            setTimeout(function () { M.attemps++, V(); }, a);
        } }), M.socket.on("disconnect", function (e) { if (0 !== M.state) {
            M.state = 0;
            for (var n in M.timers)
                M.timers.hasOwnProperty(n) && clearInterval(M.timers[n]);
            for (var n in M.remoteStreams)
                if (M.remoteStreams.hasOwnProperty(n)) {
                    var o = M.remoteStreams[n], r = (0, c.ClientEvent)({ type: "stream-removed", uid: o.getId(), stream: o });
                    M.dispatchEvent(r);
                }
            if (M.p2ps.clear(), t(), 1 != i) {
                clearInterval(M.pingTimer), M.socket = void 0;
                var r = (0, c.StreamEvent)({ type: "error", reason: f.default.SOCKET_DISCONNECTED });
                M.dispatchEvent(r);
                var a = P(M.attemps);
                l.default.error("Disconnect from server [" + e + "], attempt to recover [#" + M.attemps + "] after " + a / 1e3 + " seconds");
                setTimeout(function () { M.attemps++, V(); }, a);
            }
        } }), M.socket.on("onAddAudioStream", function (e) { if (l.default.info("Newly added audio stream with uid", e.id), M.remoteStreamsInChannel.has(e.id) || M.remoteStreamsInChannel.add(e.id), void 0 === M.remoteStreams[e.id]) {
            var t = (0, r.Stream)({ streamID: e.id, local: !1, audio: e.audio, video: e.video, screen: e.screen, attributes: e.attributes });
            M.remoteStreams[e.id] = t;
            var i = (0, c.StreamEvent)({ type: "stream-added", stream: t });
            M.dispatchEvent(i);
        } }), M.socket.on("onAddVideoStream", function (e) { if (l.default.info("Newly added remote stream with uid", e.id), M.remoteStreamsInChannel.has(e.id) || M.remoteStreamsInChannel.add(e.id), void 0 === M.remoteStreams[e.id]) {
            var t = (0, r.Stream)({ streamID: e.id, local: !1, audio: e.audio, video: e.video, screen: e.screen, attributes: e.attributes });
            M.remoteStreams[e.id] = t;
            var i = (0, c.StreamEvent)({ type: "stream-added", stream: t });
            M.dispatchEvent(i);
        }
        else if (void 0 !== M.remoteStreams[e.id].stream) {
            M.remoteStreams[e.id].video = !0, M.remoteStreams[e.id].enableVideo(), l.default.info("Stream changed: enable video " + e.id);
            var n = M.remoteStreams[e.id], o = n.player.elementID;
            n.stop(), n.play(o);
        }
        else {
            var t = (0, r.Stream)({ streamID: e.id, local: !1, audio: !0, video: !0, screen: !1, attributes: e.attributes });
            M.remoteStreams[e.id] = t, l.default.info("Stream changed: modify video " + e.id);
        } }), M.socket.on("onRemoveStream", function (e) { M.remoteStreamsInChannel.has(e.id) && M.remoteStreamsInChannel.delete(e.id); var t = M.remoteStreams[e.id]; if (!t)
            return void console.log("ERROR stream ", e.id, " not found onRemoveStream ", e); delete M.remoteStreams[e.id]; var i = (0, c.StreamEvent)({ type: "stream-removed", stream: t }); M.dispatchEvent(i), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0); }), M.socket.on("onPublishStream", function (e) { var t = M.localStreams[e.id], i = (0, c.StreamEvent)({ type: "stream-published", stream: t }); M.dispatchEvent(i); }), M.socket.on("mute_audio", function (e) { if (M.remoteStreamsInChannel.has(e.peerid)) {
            l.default.info("rcv peer mute audio:" + e.peerid);
            var t = (0, c.ClientEvent)({ type: "mute-audio", uid: e.peerid });
            M.dispatchEvent(t);
        } }), M.socket.on("unmute_audio", function (e) { if (M.remoteStreamsInChannel.has(e.peerid)) {
            l.default.info("rcv peer unmute audio:" + e.peerid);
            var t = (0, c.ClientEvent)({ type: "unmute-audio", uid: e.peerid });
            M.dispatchEvent(t);
        } }), M.socket.on("mute_video", function (e) { if (M.remoteStreamsInChannel.has(e.peerid)) {
            l.default.info("rcv peer mute video:" + e.peerid);
            var t = (0, c.ClientEvent)({ type: "mute-video", uid: e.peerid });
            M.dispatchEvent(t);
        } }), M.socket.on("unmute_video", function (e) { if (M.remoteStreamsInChannel.has(e.peerid)) {
            l.default.info("rcv peer unmute video:" + e.peerid);
            var t = (0, c.ClientEvent)({ type: "unmute-video", uid: e.peerid });
            M.dispatchEvent(t);
        } }), M.socket.on("user_banned", function (e) { l.default.info("user banned uid:" + e.id + "error:" + e.errcode); var t = (0, c.ClientEvent)({ type: "client-banned", uid: e.id, attr: e.errcode }); M.dispatchEvent(t), i = !0, leave(); }), M.socket.on("onP2PLost", function (e) { if (l.default.debug("p2plost:", e), "publish" === e.event) {
            var t = M.localStreams[e.uid];
            t && S.report.publish(M.joinInfo.sid, { lts: t.publishLTS, succ: !1, ec: "DTLS failed" });
        } if ("subscribe" === e.event) {
            var i = M.remoteStreams[e.uid];
            i && S.report.subscribe(M.joinInfo.sid, { lts: i.subscribeLTS, succ: !1, peerid: e.uid + "", ec: "DTLS failed" });
        } l.default.debug("p2plost:", e.p2pid); var n = M.p2ps.get(e.p2pid); n && (M.p2ps.delete(e.p2pid), n.local ? M.dispatchEvent((0, c.ClientEvent)({ type: "pubP2PLost", stream: n })) : M.remoteStreams[n.getId()] && M.dispatchEvent((0, c.ClientEvent)({ type: "subP2PLost", stream: n }))); }), M.socket.on("onRepeatJoin", function (e) { console.log("recv onRepeatJoin message: uid=" + e.uid); }), M.socket.on("onPeerLeave", function (e) { var t = (0, c.ClientEvent)({ type: "peer-leave", uid: e.id }); if (M.remoteStreamsInChannel.has(e.id) && M.remoteStreamsInChannel.delete(e.id), M.remoteStreams.hasOwnProperty(e.id) && (t.stream = M.remoteStreams[e.id]), M.dispatchEvent(t), M.remoteStreams.hasOwnProperty(e.id)) {
            l.default.info("closing stream on peer leave", e.id);
            var i = M.remoteStreams[e.id];
            i.close(), delete M.remoteStreams[e.id], void 0 !== i.pc && (i.pc.close(), i.pc = void 0);
        } M.timers.hasOwnProperty(e.id) && (clearInterval(M.timers[e.id]), delete M.timers[e.id]), void 0 != M.audioLevel[e.id] && delete M.audioLevel[e.id], void 0 != M.timer_counter[e.id] && delete M.timer_counter[e.id]; }), M.socket.on("onUplinkStats", function (e) { }), M.socket.on("liveStreamingStarted", function (e) { var t = (0, c.LiveStreamingEvent)({ type: "liveStreamingStarted", url: e.url }); M.dispatchEvent(t); }), M.socket.on("liveStreamingFailed", function (e) { var t = (0, c.LiveStreamingEvent)({ type: "liveStreamingFailed", url: e.url }); M.dispatchEvent(t); }), M.socket.on("liveStreamingStopped", function (e) { var t = (0, c.LiveStreamingEvent)({ type: "liveStreamingStopped", url: e.url }); M.dispatchEvent(t); }), M.socket.on("liveTranscodingUpdated", function (e) { var t = (0, c.LiveStreamingEvent)({ type: "liveTranscodingUpdated", reason: e.reason }); M.dispatchEvent(t); })); }, B = function (e, t, i) { if (void 0 === M.socket)
            return l.default.error("No socket available"), void k(i, f.default.INVALID_OPERATION); try {
            M.socket.emitSimpleMessage(e, function (e, n) { "success" === e ? "function" == typeof t && t(n) : "function" == typeof i && i(p.GatewayErrorCode[n] || n); });
        }
        catch (t) {
            l.default.error("Socket emit message failed" + JSON.stringify(e)), l.default.error(t), k(i, f.default.SOCKET_ERROR);
        } }, x = function (e, t) { if (void 0 === M.socket)
            return void l.default.error("Error in sendSimpleSdp [socket not ready]"); try {
            M.socket.emitSimpleMessage(e, function (e, i) { t && t(e, i); });
        }
        catch (e) {
            l.default.error("Error in sendSimpleSdp [" + e + "]");
        } }; return M; };
        t.default = b;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(31), o = function (e) { return e && e.__esModule ? e : { default: e }; }(n), r = i(4), a = function (e, t) { var i = {}; return i.connect = function () { t.host = e, i.signal = (0, o.default)(t), i.on = i.signal.on, i.dispatchEvent = i.signal.dispatchEvent, i.signal.on("onopen", function (e) { i.signal.onEvent = function (e) { i.dispatchEvent((0, r.MediaEvent)({ type: e.event, msg: e })); }, i.dispatchEvent((0, r.MediaEvent)({ type: "connect", msg: e })); }), i.signal.on("onError", function (e) { var t = e.msg; onError(t.code, "error"); }); }, i.disconnect = function () { i.signal.disconnect(); }, i.close = function () { i.signal.close(); }, i.getURL = function () { return i.signal.getURL(); }, i.reconnect = function (e) { i.signal.creatConnection(e); }, i.emitSimpleMessage = function (e, t) { i.signal.sendSignalCommand(e, t); }, i.connect(), i; };
        t.default = a;
    }, function (e, t, i) {
        "use strict";
        function n(e) { return e && e.__esModule ? e : { default: e }; }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = i(4), r = i(10), a = n(r), s = i(0), d = n(s), c = i(5), u = function (e) { var t = (0, o.EventDispatcher)(e); return t.needReconnect = !0, t.isTimeout = !1, t.isInit = !0, t.hostIndex = 0, t.requestID = 0, e.host instanceof Array ? t.host = e.host : t.host = [e.host], t.Reconnection = function (e) { t.host = e || t.host, t.hostIndex = 0, t.creatConnection(); }, t.getURL = function () { return t.connection.url; }, t.creatConnection = function () { if (t.hostIndex >= t.host.length)
            return t.hostIndex = 0, void t.dispatchEvent((0, o.MediaEvent)({ type: "reconnect" })); d.default.debug("start connect:" + t.host[t.hostIndex]), t.lts = (new Date).getTime(), t.connection = new WebSocket("wss://" + t.host[t.hostIndex++]), t.connection.onopen = function (e) { d.default.debug("websockect opened"), t.isTimeout = !1, t.isInit = !1, clearTimeout(t.timeoutCheck), t.dispatchEvent((0, o.MediaEvent)({ type: "onopen", event: e, socket: t })); }, t.connection.onmessage = function (e) { var i = JSON.parse(e.data); i.hasOwnProperty("_id") ? t.dispatchEvent((0, o.MediaEvent)({ type: i._id, msg: i })) : i.hasOwnProperty("_type") && t.dispatchSocketEvent((0, o.MediaEvent)({ type: i._type, msg: i.message })); }, t.connection.onclose = function (i) { t.needReconnect ? t.isTimeout || t.isInit ? (d.default.debug("websockect connect timeout"), c.report.joinGateway(e.sid, { lts: t.lts, succ: !1, ec: "timeout", addr: t.connection.url }), t.creatConnection()) : t.dispatchEvent((0, o.MediaEvent)({ type: "disconnect", event: i })) : (d.default.debug("websockect closeed"), (0, a.default)(e.onFailure, i), clearTimeout(t.timeoutCheck), t.dispatchEvent((0, o.MediaEvent)({ type: "close", event: i })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0); }, t.connection.onerror = function (e) { }; setTimeout(function () { t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close()); }, 5e3); }, t.creatConnection(), t.sendMessage = function (e, i) { t.connection && t.connection.readyState == WebSocket.OPEN ? t.connection.send(JSON.stringify(e)) : i({ error: "Gateway not connected" }); }, t.disconnect = function () { t.needReconnect = !0, t.connection.close(); }, t.close = function () { t.needReconnect = !1, t.connection.close(); }, t.sendSignalCommand = function (e, i) { e._id = "_request_" + t.requestID, t.requestID += 1, "publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id, function (n) { n.msg && i && i(n.msg._result, n.msg.message), delete t.dispatcher.eventListeners[e._id]; }), t.sendMessage(e, function (e) { e.reason = "NOT_CONNECTED", i && i(e.reason, e); }); }, t; };
        t.default = u;
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.simMap = void 0;
        var n = i(3), o = function (e) { var t; switch (e) {
            case "120p":
            case "120p_1":
                t = ["120p_1", "120p_1", "120p_1"];
                break;
            case "120p_3":
                t = ["120p_3", "120p_3", "120p_3"];
                break;
            case "180p":
            case "180p_1":
                t = ["90p_1", "90p_1", "180p_1"];
                break;
            case "180p_3":
                t = ["120p_3", "120p_3", "180p_3"];
                break;
            case "180p_4":
                t = ["120p_1", "120p_1", "180p_4"];
                break;
            case "240p":
            case "240p_1":
                t = ["120p_1", "120p_1", "240p_1"];
                break;
            case "240p_3":
                t = ["120p_3", "120p_3", "240p_3"];
                break;
            case "240p_4":
                t = ["120p_4", "120p_4", "240p_4"];
                break;
            case "360p":
            case "360p_1":
            case "360p_4":
            case "360p_9":
            case "360p_10":
            case "360p_11":
                t = ["90p_1", "90p_1", "360p_1"];
                break;
            case "360p_3":
            case "360p_6":
                t = ["120p_3", "120p_3", "360p_3"];
                break;
            case "360p_7":
            case "360p_8":
                t = ["120p_1", "120p_1", "360p_7"];
                break;
            case "480p":
            case "480p_1":
            case "480p_2":
            case "480p_4":
            case "480p_10":
                t = ["120p_1", "120p_1", "480p_1"];
                break;
            case "480p_3":
            case "480p_6":
                t = ["120p_3", "120p_3", "480p_3"];
                break;
            case "480p_8":
            case "480p_9":
                t = ["120p_4", "120p_4", "480p_8"];
                break;
            case "720p":
            case "720p_1":
            case "720p_2":
            case "720p_3":
                t = ["90p_1", "90p_1", "720p_1"];
                break;
            case "720p_5":
            case "720p_6":
                t = ["120p_1", "120p_1", "720p_5"];
                break;
            case "1080p":
            case "1080p_1":
            case "1080p_2":
            case "1080p_3":
            case "1080p_5":
                t = ["90p_1", "90p_1", "1080p_1"];
                break;
            case "1440p":
            case "1440p_1":
            case "1440p_2":
                t = ["90p_1", "90p_1", "1440p_1"];
                break;
            case "4k":
            case "4k_1":
            case "4k_3":
                t = ["90p_1", "90p_1", "4k_1"];
                break;
            default: t = ["120p_1", "120p_1", "360p_7"];
        } return (0, n.isFireFox)() ? [t[1], 15, 100] : (0, n.isSafari)() ? [t[2], 15, 50] : [t[0], 15, 50]; };
        t.simMap = o;
    }, , function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(1), o = i(0), r = function (e) { return e && e.__esModule ? e : { default: e }; }(o), a = i(2), s = i(7), d = i(12), c = i(28);
        t.default = { TranscodingUser: c.TranscodingUser, LiveTranscoding: c.LiveTranscoding, createClient: c.createClient, createStream: s.createStream, Logger: r.default, getDevices: s.getDevices, checkSystemRequirements: a.checkSystemRequirements, VERSION: n.VERSION, AUDIO_SAMPLE_RATE_32000: d.AUDIO_SAMPLE_RATE_32000, AUDIO_SAMPLE_RATE_44100: d.AUDIO_SAMPLE_RATE_44100, AUDIO_SAMPLE_RATE_48000: d.AUDIO_SAMPLE_RATE_48000, VIDEO_CODEC_PROFILE_BASELINE: d.VIDEO_CODEC_PROFILE_BASELINE, VIDEO_CODEC_PROFILE_MAIN: d.VIDEO_CODEC_PROFILE_MAIN, VIDEO_CODEC_PROFILE_HIGH: d.VIDEO_CODEC_PROFILE_HIGH, REMOTE_VIDEO_STREAM_HIGH: d.REMOTE_VIDEO_STREAM_HIGH, REMOTE_VIDEO_STREAM_LOW: d.REMOTE_VIDEO_STREAM_LOW, REMOTE_VIDEO_STREAM_MEDIUM: d.REMOTE_VIDEO_STREAM_MEDIUM };
    }]).default; });
//# sourceMappingURL=AgoraRTC-production.js.map 
