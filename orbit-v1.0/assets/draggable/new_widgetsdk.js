var tc;
if (typeof (tc) == "undefined") {
    tc = {}
}
var tc = tc || {};
tc.lib = (function() {
    function d(r) {
        return btoa(unescape(encodeURIComponent(JSON.stringify(r))))
    }
    function q(r) {
        return JSON.parse(decodeURIComponent(escape(atob(r))))
    }
    function n(r, s, t) {
        c(r, s);
        b(t)
    }
    function c(u, t) {
        var s = document.getElementById(u);
        try {
            if (s) {
                s.contentWindow.postMessage({
                    message: t
                }, "*")
            }
        } catch (r) {
            e(r, "error")
        }
    }
    function b(v) {
        var u = window.addEventListener ? "addEventListener" : "attachEvent";
        var s = window[u];
        var r = u == "attachEvent" ? "onmessage" : "message";
        try {
            s(r, function(w) {
                if (w.data) {
                    v(w)
                }
            }, false)
        } catch (t) {
            e("Error :" + t)
        }
    }
    function a() {
        function r() {
            return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
        }
        return r() + r() + "-" + r() + "-" + r() + r()
    }
    function g(r) {
        return decodeURI((RegExp(r + "=(.+?)(&|$)").exec(location.search) || [, null ])[1])
    }
    function e(s, r) {
        try {
            if (typeof logstr == "object") {
                logstr = JSON.stringify(s)
            }
            var r = (r) ? r : "log";
            if (window.console) {
                window.console.log(s)
            }
        } catch (t) {}
    }
    function f(r) {
        if (typeof r == "undefined" || r == "" || r == null  || r == "null") {
            return true
        } else {
            if (typeof r == "object" && Object.keys(r).length == 0) {
                return true
            } else {
                if (typeof r == "string" && r.trim().length == 0) {
                    return true
                }
            }
        }
        return false
    }
    function o(s, v, t) {
        var u = new Date();
        u.setTime(u.getTime() + (t * 24 * 60 * 60 * 1000));
        var r = "expires=" + u.toUTCString();
        document.cookie = s + "=" + v + "; " + r
    }
    function k(t) {
        var s = t + "=";
        var r = document.cookie.split(";");
        for (var u = 0; u < r.length; u++) {
            var v = r[u];
            while (v.charAt(0) == " ") {
                v = v.substring(1)
            }
            if (v.indexOf(s) == 0) {
                return v.substring(s.length, v.length)
            }
        }
        return ""
    }
    function l() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            return true
        } else {
            return false
        }
    }
    function p(r, s) {
        if (typeof (r.style.cssText) != "undefined") {
            r.style.cssText += s
        } else {
            r.setAttribute("style", s)
        }
    }
    function h(v, r, s, t) {
        var u;
        r = r || 0;
        s = s || 5;
        t = t || 50;
        u = setInterval(function() {
            var w = r / 100;
            r = r + s;
            if (w > 1 || w < 0) {
                v.style.display = "block";
                clearInterval(u);
                return
            }
            v.style.opacity = w;
            v.style.filter = "alpha(opacity=" + w * 100 + ")"
        }, t)
    }
    function j() {
        try {
            return new XMLHttpRequest
        } catch (r) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (r) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (r) {}
        return null 
    }
    function m(s, r) {
        var t = j();
        t.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (typeof (r) == "function") {
                    r(t)
                }
            }
        }
        ;
        if (s.headers) {
            for (header in s.headers) {
                t.setRequestHeader(header, s.headers[header])
            }
        }
        t.open(s.method, s.url);
        t.send();
        return t.onreadystatechange()
    }
    return {
        events: {
            init: n,
            send: c,
            receive: b
        },
        JsonToString: d,
        StringToJson: q,
        uuid: a,
        getUrlParam: g,
        log: e,
        isEmpty: f,
        setCookie: o,
        getCookie: k,
        bw_appear: h,
        mobileDevice: l,
        applyCssSettings: p,
        xhrReq: m
    }
})();
tc.funcs = (function() {
    var h = false
      , m = false
      , k = ""
      , p = window.location.origin
      , t = undefined
      , z = undefined
      , n = undefined
      , g = false
      , y = "anon:" + tc.lib.uuid()
      , a = "User"
      , c = "//botwidget.gupshup.io/ChatChannel"
      , D = "//www.buildquickbots.com";
    function C() {
        return D + "/botwidget/v2/echat/mobile.html"
    }
    function o(G, F, E) {
        var H = document.createElement(G);
        if (F) {
            H.id = F
        }
        if (E) {
            H.className = E
        }
        return H
    }
    function v(F, G) {
        if (typeof (G) == "object") {
            var E = Object.keys(G);
            for (i in G) {
                F.setAttribute(i, G[i])
            }
        }
    }
    function e(E, F) {
        if (typeof (E.style.cssText) != "undefined") {
            E.style.cssText += F
        } else {
            E.setAttribute("style", F)
        }
    }
    function s(F) {
        if (arguments.length > 1) {
            for (var E = 1; E < arguments.length; E++) {
                F.appendChild(arguments[E])
            }
        }
    }
    function j(E) {
        var H = new Array();
        H = document.getElementsByClassName("tc-widget");
        if (E) {
            f();
            for (var F = 0; F < H.length; F++) {
                var G = H[F];
                G.classList.remove("hidewidget");
                G.classList.remove("widget-fadeOut");
                G.style.display = "block"
            }
            document.getElementById("widget-close").style.display = "block";
            tc.lib.events.send("iframe_widget", "open");
            if (h && m) {
                tc.lib.events.send("iframe_widget", "play")
            } else {
                if (k) {
                    window.clearInterval(k)
                }
                k = setInterval(function() {
                    if (h && m) {
                        tc.lib.events.send("iframe_widget", "play");
                        clearInterval(k)
                    }
                }, 1000)
            }
        } else {
            for (var F = 0; F < H.length; F++) {
                var G = H[F];
                if (G.style.display != "none" && G.getAttribute("id") != "widget-open") {
                    G.classList.add("hidewidget");
                    G.classList.add("widget-fadeOut");
                    setTimeout(function() {
                        document.getElementById("widget-close").style.display = "none"
                    }, 1000);
                    setTimeout(function() {
                        document.getElementById("widget").style.display = "none"
                    }, 1000)
                }
            }
            document.getElementById("widget-open").style.display = "block";
            tc.lib.events.send("iframe_widget", "pause");
            tc.lib.events.send("iframe_widget", "close")
        }
    }
    function f(F) {
        var E = document.getElementById("widget");
        var G = document.getElementById("widget-open").querySelector("span.bedge");
        if (F < 1 || !(E.style.display == "none" || E.style.display == "") || isNaN(F)) {
            G.innerText = 0;
            G.style.display = "none";
            return false
        } else {
            G.innerText = parseInt(F) + parseInt(G.innerText);
            G.style.display = "block"
        }
    }
    function r() {
        var G = "&domain=" + p;
        var I = "&timestamp=" + new Date().getTime();
        var E = {
            botkey: t,
            contentScreen: z.contentScreen,
            sender: b(),
            persistenceMenu: z.commonWidget.persistenceMenu,
            common: {
                userImg: z.commonWidget.user,
                botImg: z.commonWidget.bot,
                msgEncyption: z.commonWidget.msgEncryption,
                widgetType: z.commonWidget.widgetType,
                pageTitle: z.commonWidget.pageTitle,
                bgImage: z.commonWidget.bgImage,
                isMobile: tc.lib.mobileDevice(),
                ref: tc.lib.getUrlParam("ref"),
                RDStatus: z.commonWidget.RDStatus,
                webView: z.commonWidget.webView,
                allowHtmlFromBot: z.commonWidget.allowHtmlFromBot,
                perMenuImg: z.commonWidget.perMenuImg
            }
        };
        if (z.config && z.config.attachment == "No") {
            E.common.attachment = false
        }
        if (n && n.wsurl) {
            E.devbox = {
                enc: false,
                wsurl: n.wsurl
            }
        }
        var H = tc.lib.JsonToString(E);
        var F = C() + "?data=" + H + G + I;
        return F
    }
    function d(G) {
        var E = r();
        var F = document.createElement("iframe");
        F.setAttribute("src", E);
        F.setAttribute("id", "iframe_widget");
        var G = document.getElementById(G);
        G.innerHTML = "";
        G.appendChild(F)
    }
    function B() {
        var E = r();
        //window.open(E, "_blank")
        window.location = E;
    }
    function A(R) {
        var P = o("div", "widget-close", "tc-widget widget-fadeIn");
        var I = o("div", "widget-open", "tc-widget");
        var O = o("div", "widget", "tc-widget widget-fadeIn");
        var W = o("div", undefined, "logo-img-icon");
        var X = o("img");
        var N = o("span", "max-msg");
        var M = o("span", undefined, "right");
        v(X, {
            src: z.commonWidget.logo,
            width: 35,
            height: 35
        });
        v(I, {
            onClick: "tc.funcs.toggleWidget(true)"
        });
        v(M, {
            onClick: "tc.funcs.toggleWidget(false)"
        });
        N.innerText = z.chatScreen.maxText;
        M.innerText = "_";
        var U = W.cloneNode(true);
        var G = o("span", "min-msg");
        var E = o("span", undefined, "bedge");
        var L = X.cloneNode(true);
        v(L, {
            width: 45,
            height: 45
        });
        E.innerText = "0";
        G.innerText = z.minimisedScreen.minText;
        s(R, P, I, O);
        s(P, W, N, M);
        s(W, X);
        s(I, U, G, E);
        s(U, L);
        var J = z.commonWidget;
        var K = z.chatScreen;
        var T = "margin: 5px; vartical-align: top;";
        var F = "background-color: " + J.bgColor + ";width: " + (parseInt(J.width, 10)) + "px;height: " + (parseInt(J.titleWinHeight, 10)) + "px;border-color: " + J.borderColor + ";"
          , V = "width: " + (parseInt(J.width, 10)) + "px;border-color: " + J.borderColor + ";"
          , Q = "bottom:" + (parseInt(J.height, 10)) + "px;border-radius: 4px 4px 0px 0px;"
          , H = "width:" + (parseInt(z.minimisedScreen.width, 10)) + "px;border-radius: 4px 4px 0px 0px;";
        tc.lib.applyCssSettings(X, T);
        tc.lib.applyCssSettings(P, F);
        tc.lib.applyCssSettings(O, "height:" + J.height + "px");
        tc.lib.applyCssSettings(N, "font-size:" + J.titleTextFont + "px;color:" + K.textColor + ";");
        tc.lib.applyCssSettings(G, "font-size:" + J.titleTextFont + "px;color:" + z.minimisedScreen.textColor + ";");
        tc.lib.applyCssSettings(I, F);
        tc.lib.applyCssSettings(O, V);
        tc.lib.applyCssSettings(P, Q);
        tc.lib.applyCssSettings(I, H);
        if (J.isResponsive == "Yes") {
            var S = document.createElement("meta");
            S.name = "viewport";
            S.content = "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0";
            document.getElementsByTagName("head")[0].appendChild(S)
        }
        if (K.imageDisplayType == "circular") {
            W.style.borderRadius = "40px"
        }
        window.addEventListener("focus", function() {
            if (O && O.style && O.style.display == "block") {
                tc.lib.events.send("iframe_widget", "topFocus")
            }
        });
        window.addEventListener("blur", function() {
            if (O && O.style && O.style.display == "block") {
                tc.lib.events.send("iframe_widget", "topBlur")
            }
        })
    }
    function q(P) {
        var G = o("div", "widget-close", "tc-widget widget-fadeIn");
        var K = o("div", "widget-open", "tc-widget");
        var E = o("div", undefined, "logo-img-icon");
        var I = o("img");
        var M = o("span", "min-msg");
        var F = o("div", "widget", "tc-widget widget-fadeIn");
        v(I, {
            src: z.commonWidget.logo,
            width: 45,
            height: 45
        });
        v(K, {
            onClick: "supportChatMobile()"
        });
        M.innerText = z.minimisedScreen.minText;
        s(P, G, K, F);
        s(K, E, M);
        s(E, I);
        var H = z.commonWidget;
        var J = z.chatScreen;
        var L = "margin: 5px; vartical-align: top;";
        var O = "background-color: " + H.bgColor + ";width: " + (parseInt(H.width, 10)) + "px;height: " + (parseInt(H.titleWinHeight, 10)) + "px;border-color: " + H.borderColor + ";border-radius: 4px 4px 0px 0px;";
        tc.lib.applyCssSettings(I, L);
        tc.lib.applyCssSettings(K, O);
        tc.lib.applyCssSettings(M, "font-size:" + H.titleTextFont + "px;color:" + J.textColor + ";");
        if (H.isResponsive == "Yes") {
            var N = document.createElement("meta");
            N.name = "viewport";
            N.content = "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0";
            document.getElementsByTagName("head")[0].appendChild(N)
        }
        if (J.imageDisplayType == "circular") {
            E.style.borderRadius = "40px"
        }
    }
    function x(E) {
        if (typeof (E) == "string") {
            tc.lib.events.send(E, "startchatevent")
        } else {
            tc.lib.events.send("iframe_widget", "startchatevent")
        }
    }
    function b() {
        var E = {
            channel: "widget",
            sender: {
                id: y,
                name: a
            },
            recipient: {
                id: t,
                name: "Bot"
            },
            message: {
                text: "hi",
                type: "text"
            }
        };
        return E
    }
    function w(H) {
        var E = {
            minimisedScreen: {
                minText: "Talk to Bot",
                width: "300",
                textColor: "#565656"
            },
            chatScreen: {
                maxText: "Support",
                imageDisplayType: "rectangular",
                textColor: "#565656"
            },
            loginScreen: {
                height: "410",
                formHeading: "Please tell us about yourself.",
                nameLabel: "Add Name",
                emailLabel: "Add Email",
                phoneLabel: "Add Phone No",
                messageLabel: "Add Message",
                submitBtnText: "Start Chatting"
            },
            contentScreen: {
                customfontSize: "16",
                fontFamily: "Times",
                botBgColor: "#eeeeee",
                botColor: "#444",
                userBgColor: "#3498db",
                userColor: "#fff"
            },
            commonWidget: {
                width: "400",
                height: "450",
                bgColor: "#eeeeee",
                bgImage: "",
                perMenuImg: "",
                borderColor: "#d4d4d4",
                textColor: "#ff4400",
                titleTextFont: "16",
                titleWinHeight: "45",
                RDStatus: "No",
                webView: "Yes",
                isResponsive: "No",
                msgEncryption: "No",
                allowHtmlFromBot: "No",
                widgetType: "Normal",
                persistenceMenu: '{"disableinput":false,"menu":[{"title":"Level1 - Element1","type":"nested","menu":[{"title":"Level2 - Element1","type":"text"},{"title":"Level2 - Element2","type":"nested","menu":[{"title":"Level3 - Element1","type":"text"}]},{"title":"Level2 - Element4","type":"nested","menu":[{"title":"Level3 - Element1","type":"text"}]},{"title":"Level2 - Element5","type":"text"}]},{"title":"Level2 - Element4.1","type":"text"}]}',
                logo: "https://www.gupshup.io/images/botwidget/ic_dummy_chat_g.png",
                user: "https://www.gupshup.io/images/botwidget/ic_user.png",
                bot: "https://www.gupshup.io/images/botwidget/ic_bot.png"
            }
        };
        var F = undefined;
        if (H) {
            try {
                F = JSON.parse(unescape(H))
            } catch (G) {
                tc.lib.log("uiSettings not funnd. Taking default settings.")
            }
        }
        if (F) {
            return F
        } else {
            return E
        }
    }
    function u(F, E) {
        if (g) {
            return false
        }
        h = true;
        if (!F.botkey && !t) {
            console.log("Botkey not found");
            return false
        } else {
            if (F.botkey) {
                t = F.botkey
            }
        }
        if (F.userObj && F.userObj.sender && F.userObj.sender.id) {
            y = F.userObj.sender.id;
            a = F.userObj.sender.name
        }
        n = F;
        if (F.domain) {
            D = F.domain
        }
        z = w(F.appUISetting);
        if (E instanceof Function) {
            g = true;
            return E()
        }
        var G = o("div", "supportchatwidget");
        document.body.appendChild(G);
        if (tc.lib.mobileDevice()) {
            q(G)
        } else {
            A(G);
            d("widget");
            tc.lib.events.init("iframe_widget", "play", function(H) {
                if (H) {
                    if (H.data.event == "ready") {
                        m = true;
                        tc.lib.events.send("iframe_widget", "data")
                    } else {
                        if (H.data.event == "bw") {
                            if (H.data.message == "hide") {
                                tc.lib.log("Disappering... Bye");
                                tc.lib.applyCssSettings(document.querySelector("#supportchatwidget"), "display: none;")
                            } else {
                                if (typeof (H.data.message) && H.data.message.newMsg) {
                                    f(H.data.message.newMsg)
                                }
                            }
                        }
                    }
                }
            })
        }
        document.getElementById("widget-open").style.display = "block";
        g = true
    }
    function l(J, K) {
        var F = document.getElementById("gs-sdk");
        var E;
        if (F) {
            E = F.getAttribute("callback")
        } else {
            E = "tcAsyncInit"
        }
        if (!F) {
            if (window[E] instanceof Function) {
                window[E]()
            }
            console.log("Id not found in script");
            return false
        }
        if (!J.getElementById("gs-css")) {
            var H = J.getElementsByTagName("script")[0];
            css = J.createElement("link");
            css.id = K;
            css.type = "text/css";
            css.rel = "stylesheet";
            css.href = D + "/botwidget/v2/demo/static/css/style.css";
            H.parentNode.insertBefore(css, H)
        }
        var I = F.getAttribute("key");
        if (I) {
            t = I
        }
        if (window[E] instanceof Function) {
            window[E]({
                init: u,
                toggleWidget: j,
                getRedirectUrl: r,
                supportChatMobile: B,
                startchat: x
            })
        } else {
            if (!I) {
                console.log("Botkey attribute not found");
                return false
            }
            var G = {
                method: "GET",
                url: c + "/api/bot/" + t + "/botconfig"
            };
            tc.lib.xhrReq(G, function(L) {
                var N = {};
                if (L.status < 300 && L.response) {
                    try {
                        z = JSON.parse(L.response);
                        if (!tc.lib.isEmpty(z.uisettings)) {
                            N.appUISetting = z.uisettings
                        }
                    } catch (M) {
                        tc.lib.log("uiSettings not funnd. Please save the settings first at widget config.")
                    }
                    u(N)
                } else {
                    console.log("Error in get")
                }
            })
        }
    }
    setTimeout(function() {
        l(document, "gs-css")
    }, 200);
    return {
        init: u,
        toggleWidget: j,
        getRedirectUrl: r,
        supportChatMobile: B,
        startchat: x
    }
})();
toggleWidget = tc.funcs.toggleWidget;
tc.init = tc.funcs.init;
var supportChatMobile = tc.funcs.supportChatMobile;
tc.devbox = {
    startchat: tc.funcs.startchat
};
