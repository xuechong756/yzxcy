window.__require = function e(t, n, o) {
    function r(i, c) {
        if (!n[i]) {
            if (!t[i]) {
                var s = i.split("/");
                if (s = s[s.length - 1],
                !t[s]) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u)
                        return u(s, !0);
                    if (a)
                        return a(s, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var l = n[i] = {
                exports: {}
            };
            t[i][0].call(l.exports, function(e) {
                return r(t[i][1][e] || e)
            }, l, l.exports, e, t, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++)
        r(o[i]);
    return r
}({
    Audio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7d83e+YCqVELJjef1auTUV2", "Audio"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ResourcesManager")
          , r = function() {
            function e(e, t) {
                this.bgVolume = 1,
                this.sfxVolume = 1,
                this.bgAudioID = -1,
                this.bgVolume = e,
                this.bgAudioID = t,
                this.init()
            }
            return e.prototype.init = function() {}
            ,
            e.prototype.playBGM = function(e) {
                this.bgAudioID >= 0 && cc.audioEngine.stop(this.bgAudioID),
                this.bgAudioID = cc.audioEngine.play(o.ResourcesManager.getSound(e), !0, this.bgVolume)
            }
            ,
            e.prototype.playSFX = function(e, t) {
                this.sfxVolume > 0 && cc.audioEngine.play(o.ResourcesManager.getSound(e), !1, t)
            }
            ,
            e.prototype.changeBGMVolume = function(e, t) {
                this.bgAudioID >= 0 && (e > 0 && cc.audioEngine.getState(this.bgAudioID) === cc.audioEngine.AudioState.PAUSED ? cc.audioEngine.resume(this.bgAudioID) : 0 == e && cc.audioEngine.pause(this.bgAudioID)),
                (this.bgVolume != e || t) && (cc.sys.localStorage.setItem("bgVolume", e.toString()),
                this.bgVolume = e,
                cc.audioEngine.setVolume(this.bgAudioID, e))
            }
            ,
            e.prototype.changeSFXVolume = function(e) {
                this.sfxVolume != e && (cc.sys.localStorage.setItem("sfxVolume", e.toString()),
                this.sfxVolume = e)
            }
            ,
            e.prototype.getState = function() {
                return cc.audioEngine.getState(this.bgAudioID)
            }
            ,
            e.prototype.pauseAll = function() {
                cc.audioEngine.pauseAll()
            }
            ,
            e.prototype.resumeAll = function() {
                cc.audioEngine.resumeAll()
            }
            ,
            e.prototype.stopAll = function() {
                cc.audioEngine.stopAll()
            }
            ,
            e
        }();
        n.Audio = r,
        cc._RF.pop()
    }
    , {
        "./ResourcesManager": "ResourcesManager"
    }],
    Base: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f12c2lGb6lAL792ofSpSF67", "Base"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            return function(e) {
                this.INIT_EMPTY = e.get("INIT_EMPTY"),
                this.WRONG_PUNISH = e.get("WRONG_PUNISH")
            }
        }();
        n.Base = o,
        cc._RF.pop()
    }
    , {}],
    ChooseView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3e510Ft2EJC2Klc4/+zFtPH", "ChooseView");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = e("../common/model/RecordGrid")
          , s = e("../../core/common/ResourcesManager")
          , u = e("../../utils/Tools")
          , l = e("../common/data/GameDataManager")
          , p = e("./GameResult")
          , f = e("../common/helper/GameAudio")
          , m = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.gridPrefab = null,
                t.gridAry = null,
                t.gameTable = null,
                t.gameScene = null,
                t.gridAry = [],
                t
            }
            return r(t, e),
            t.prototype.loadFinish = function() {
                this.gridPrefab = s.ResourcesManager.getPrefab("GameGrid"),
                this.createTable()
            }
            ,
            t.prototype.setGameTable = function(e) {
                this.gameTable = e
            }
            ,
            t.prototype.setGameScene = function(e) {
                this.gameScene = e
            }
            ,
            t.prototype.createTable = function() {
                for (var e = 0; e < 4; e++)
                    this.createGameGrid(e)
            }
            ,
            t.prototype.createGameGrid = function(e) {
                if (null != this.gridPrefab) {
                    var t = cc.instantiate(this.gridPrefab);
                    t.setContentSize(cc.size(l.GameDataManager.gameData.gridGridWidth, l.GameDataManager.gameData.gridGridHeight));
                    var n = t.getComponent("GameGrid");
                    n.setClickGridBg(),
                    t.on(cc.Node.EventType.TOUCH_END, function(t) {
                        if (0 != this.checkGridMap(n)) {
                            f.GameAudio.playClickGridEffect();
                            var o = n.getVec()
                              , r = n.getIndex()
                              , a = n.getGridString();
                            c.RecordGrid.getChooseGridMap().delete(r),
                            this.gridAry[e].setGridString(""),
                            c.RecordGrid.displayGrid(a, o)
                        } else
                            cc.log("\u5df2\u7ecf\u5b58\u5728")
                    }, this),
                    null != this.node && null != n && null != n.node ? (this.node.addChild(n.node),
                    this.gridAry.push(n)) : cc.log("Error in ChooseView createGameGrid")
                } else
                    cc.log("ChooseView gridPrefab is null")
            }
            ,
            t.prototype.setGridInfo = function(e, t) {
                if (u.Tools.getMapLength(c.RecordGrid.getChooseGridMap()) >= 4)
                    cc.log("\u5df2\u7ecf\u6ee1\u5b57 \u70b9\u51fb\u65e0\u6548");
                else if (1 != p.GameResult.getIsStartResult())
                    for (var n = 0; n < this.gridAry.length; n++) {
                        var o = this.gridAry[n];
                        if ("" == o.getGridString()) {
                            o.setGridString(t),
                            o.setVec(e),
                            o.setIndex(n),
                            c.RecordGrid.setChooseGridMap(n, o);
                            break
                        }
                    }
                else
                    c.RecordGrid.settempChooseGridMap(e, t)
            }
            ,
            t.prototype.checkGridMap = function(e) {
                var t = !0;
                return "" == e.getGridString() && (t = !1),
                t
            }
            ,
            t.prototype.restoreIdiom = function() {
                c.RecordGrid.getChooseGridMap().forEach(function(e) {
                    c.RecordGrid.displayGrid(e.getGridString(), e.getVec())
                })
            }
            ,
            t.prototype.clearChooseGrid = function() {
                for (var e = 0; e < this.gridAry.length; e++) {
                    this.gridAry[e].setGridString("")
                }
            }
            ,
            t.prototype.playChooseFadeOut = function() {
                for (var e = 0; e < this.gridAry.length; e++) {
                    this.gridAry[e].setFadeOut()
                }
            }
            ,
            t.prototype.playChooseFadeIn = function() {
                for (var e = 0; e < this.gridAry.length; e++) {
                    this.gridAry[e].setFadeIn()
                }
            }
            ,
            t.prototype.resetTempData = function() {
                var e = this;
                c.RecordGrid.gettempChooseGridMap().forEach(function(t, n) {
                    e.setGridInfo(n, t)
                }),
                c.RecordGrid.clearTempRecordData()
            }
            ,
            t.prototype.onGameOver = function() {
                null == this.gridAry && this.gridAry != [] || (this.gridAry.forEach(function(e) {
                    e.removeSelf()
                }),
                this.gridAry = [])
            }
            ,
            t.prototype.onClearAll = function() {
                null == this.gridAry && this.gridAry != [] || (this.gridAry.forEach(function(e) {
                    e.removeSelf()
                }),
                this.gridAry = [])
            }
            ,
            t = a([i()], t)
        }(cc.Component);
        n.ChooseView = m,
        cc._RF.pop()
    }
    , {
        "../../core/common/ResourcesManager": "ResourcesManager",
        "../../utils/Tools": "Tools",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameAudio": "GameAudio",
        "../common/model/RecordGrid": "RecordGrid",
        "./GameResult": "GameResult"
    }],
    CmdHandlerFunction: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a07f04xcsxEyb6X+wBvMdvG", "CmdHandlerFunction"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        cc._RF.pop()
    }
    , {}],
    CommonScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fa494hV7UFPcJjRTRqxNXXR", "CommonScene");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("../event/GameEventListeners")
          , a = e("../event/GameEventTransmitter")
          , i = function(e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e),
            t.prototype.onLoad = function() {
                this.listeners = new r.GameEventListeners(this.uuid),
                a.GameEventTransmitter.on(this.listeners),
                this.load()
            }
            ,
            t.prototype.onDestroy = function() {
                this.unload(),
                a.GameEventTransmitter.off(this.listeners.name),
                this.listeners.clear()
            }
            ,
            t.prototype.addListener = function(e) {
                this.listeners.on(e)
            }
            ,
            t.prototype.removeListener = function(e) {
                this.listeners.off(e)
            }
            ,
            t
        }(cc.Component);
        n.CommonScene = i,
        cc._RF.pop()
    }
    , {
        "../event/GameEventListeners": "GameEventListeners",
        "../event/GameEventTransmitter": "GameEventTransmitter"
    }],
    ConfigManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c653dFzF4NN5JLYJ00MoBzG", "ConfigManager"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../../utils/StringUtils")
          , r = function() {
            function e() {
                this._idiomJson = new Map,
                this._levelsJson = new Map
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "idiomJsonMap", {
                get: function() {
                    return this._idiomJson
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "levelsJsonMap", {
                get: function() {
                    return this._levelsJson
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.load = function() {
                var e = this;
                return new Promise(function(t, n) {
                    cc.loader.loadResDir("jsons", function(n, r, a) {
                        if (!n) {
                            for (var i = 0; i < r.length; i++) {
                                var c = o.StringUtils.getName(a[i])
                                  , s = r[i];
                                "idiom" == c && e.loadIdiomJson(s.json),
                                "levels" == c && e.loadLevelJson(s.json)
                            }
                            return t()
                        }
                        cc.error(n)
                    })
                }
                )
            }
            ,
            e.prototype.loadIdiomJson = function(e) {
                if (null != e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t];
                        this._idiomJson.set(Number(o.ID), o.chengyu)
                    }
                    cc.log("\u6210\u8bed\u6570\u636e", this._idiomJson)
                }
            }
            ,
            e.prototype.loadLevelJson = function(e) {
                if (null != e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t];
                        this._levelsJson.set(o.level, o)
                    }
                    cc.log("\u5173\u5361\u6570\u636e", this._levelsJson)
                }
            }
            ,
            e
        }();
        n.ConfigManager = r.instance,
        cc._RF.pop()
    }
    , {
        "./../../utils/StringUtils": "StringUtils"
    }],
    DefaultCmdHandler: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cfd06UFdN9E7rpH8UrKKHvp", "DefaultCmdHandler");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o._handle = n,
                o
            }
            return o(t, e),
            t.prototype.execute = function(e) {
                this._handle.call(this._handle, e)
            }
            ,
            t.of = function(e, n) {
                return new t(e,n)
            }
            ,
            t
        }(e("./GameCmdHandler").GameCmdHandler);
        n.DefaultCmdHandler = r,
        cc._RF.pop()
    }
    , {
        "./GameCmdHandler": "GameCmdHandler"
    }],
    DefaultGameEvent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "be2112pNJ1Km6UlngcITWWS", "DefaultGameEvent");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o._data = n,
                o
            }
            return o(t, e),
            Object.defineProperty(t.prototype, "data", {
                get: function() {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }),
            t.of = function(e, n) {
                return new t(e,n)
            }
            ,
            t
        }(e("./GameEvent").GameEvent);
        n.DefaultGameEvent = r,
        cc._RF.pop()
    }
    , {
        "./GameEvent": "GameEvent"
    }],
    DefaultGameListener: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d01d2fKxDtOqIdyQZoKiamN", "DefaultGameListener");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o._handle = n,
                o
            }
            return o(t, e),
            t.prototype.onEvent = function(e) {
                this._handle.call(this._handle, e)
            }
            ,
            t.of = function(e, n) {
                return new t(e,n)
            }
            ,
            t
        }(e("./GameEventListener").GameEventListener);
        n.DefaultGameListener = r,
        cc._RF.pop()
    }
    , {
        "./GameEventListener": "GameEventListener"
    }],
    DepositScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "90702l98rNCoathhy4T7GOZ", "DepositScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/GameEngine")
          , u = e("../common/helper/GameSceneHepler")
          , l = e("../common/data/GameDataManager")
          , p = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.btn_back = null,
                t.btn_continue = null,
                t.btn_request_desposit = null,
                t.btn_desposit_record = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack),
                this.btn_continue.node.on(cc.Node.EventType.TOUCH_END, function() {
                    s.GameEngine.changeScene(u.GameSceneHepler.GAME)
                }),
                this.btn_desposit_record.node.on(cc.Node.EventType.TOUCH_END, function() {
                    s.GameEngine.changeScene(u.GameSceneHepler.MYINFO)
                }),
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, function() {
                    s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
                }),
                this.btn_request_desposit.node.on(cc.Node.EventType.TOUCH_END, function() {})
            }
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onClickBack = function() {
                l.GameDataManager.gameData.refuseData(),
                s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
            }
            ,
            a([c(cc.Button)], t.prototype, "btn_back", void 0),
            a([c(cc.Button)], t.prototype, "btn_continue", void 0),
            a([c(cc.Button)], t.prototype, "btn_request_desposit", void 0),
            a([c(cc.Button)], t.prototype, "btn_desposit_record", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.DepositScene = p,
        cc._RF.pop()
    }
    , {
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    EventListenerFunction: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9e16ehKv21I2aW2HU9jaxW7", "EventListenerFunction"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        cc._RF.pop()
    }
    , {}],
    GameAudio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a082fNlUSJL2qekRXNADCqW", "GameAudio"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../core/common/Audio")
          , r = function() {
            function e() {
                this.audio = null,
                this.audio = new o.Audio(1,100)
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.playGameMusic = function() {
                this.audio.playBGM("bgMusic")
            }
            ,
            e.prototype.playBtnEffect = function() {
                this.audio.playSFX("btnEffect", 1)
            }
            ,
            e.prototype.playClickGridEffect = function() {
                this.audio.playSFX("click", 1)
            }
            ,
            e.prototype.playJudgeRightEffect = function() {
                this.audio.playSFX("right", 1)
            }
            ,
            e.prototype.playJudgeErrorEffect = function() {
                this.audio.playSFX("error", 1)
            }
            ,
            e.prototype.changeBGMVolume = function(e, t) {
                this.audio.changeBGMVolume(e, t)
            }
            ,
            e.prototype.changeSFXVolume = function(e) {
                this.audio.changeSFXVolume(e)
            }
            ,
            e.prototype.pauseAll = function() {
                cc.audioEngine.pauseAll()
            }
            ,
            e.prototype.resumeAll = function() {
                cc.audioEngine.resumeAll()
            }
            ,
            e.prototype.stopAll = function() {
                cc.audioEngine.stopAll()
            }
            ,
            e
        }();
        n.GameAudio = r.instance,
        cc._RF.pop()
    }
    , {
        "../../../core/common/Audio": "Audio"
    }],
    GameCmdHandlerManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "da502mRIyNApp7WhUJNXltF", "GameCmdHandlerManager"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this.handlers = new Map
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.add = function(e) {
                this.handlers.set(e.cmd, e)
            }
            ,
            e.prototype.remove = function(e) {
                this.handlers.delete(e)
            }
            ,
            e.prototype.onMessage = function(e, t) {
                var n = this.handlers.get(e);
                null != n && n.handle(t.body)
            }
            ,
            e
        }();
        n.gameCmdHandlerManager = o.instance,
        cc._RF.pop()
    }
    , {}],
    GameCmdHandler: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b382ek26LZFQZO58Xy/2vRv", "GameCmdHandler"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../event/DefaultGameEvent")
          , r = e("./GameCmdHandlerManager")
          , a = e("../event/GameEventTransmitter")
          , i = function() {
            function e(e) {
                this.cmd = e,
                r.gameCmdHandlerManager.add(this)
            }
            return e.prototype.handle = function(e) {
                this.execute(e),
                a.GameEventTransmitter.emit(o.DefaultGameEvent.of(this.cmd))
            }
            ,
            e
        }();
        n.GameCmdHandler = i,
        cc._RF.pop()
    }
    , {
        "../event/DefaultGameEvent": "DefaultGameEvent",
        "../event/GameEventTransmitter": "GameEventTransmitter",
        "./GameCmdHandlerManager": "GameCmdHandlerManager"
    }],
    GameComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "14da2mS5ipKEoRyGm49h3KR", "GameComponent");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("../event/GameEventListeners")
          , a = e("../event/GameEventTransmitter")
          , i = function(e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e),
            t.prototype.onLoad = function() {
                this.listeners = new r.GameEventListeners(this.uuid),
                a.GameEventTransmitter.on(this.listeners),
                this.load()
            }
            ,
            t.prototype.onDestroy = function() {
                this.unload(),
                a.GameEventTransmitter.off(this.listeners.name),
                this.listeners.clear()
            }
            ,
            t.prototype.addListener = function(e) {
                this.listeners.on(e)
            }
            ,
            t.prototype.removeListener = function(e) {
                this.listeners.off(e)
            }
            ,
            t
        }(cc.Component);
        n.GameComponent = i,
        cc._RF.pop()
    }
    , {
        "../event/GameEventListeners": "GameEventListeners",
        "../event/GameEventTransmitter": "GameEventTransmitter"
    }],
    "GameData.1": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "95423atsYhAqJpR6uutbrbM", "GameData.1"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this._level = 1,
                this._score = 0,
                this._topscore = 0,
                this._gametime = 0
            }
            return e.prototype.refuseData = function() {
                this._level = 1,
                this._score = 0,
                this._topscore = 0,
                this._gametime = 0
            }
            ,
            Object.defineProperty(e.prototype, "playerId", {
                get: function() {
                    return this._playerId
                },
                set: function(e) {
                    this._playerId = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "level", {
                get: function() {
                    return this._level
                },
                set: function(e) {
                    this._level = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "topscore", {
                get: function() {
                    return this._topscore
                },
                set: function(e) {
                    this._topscore = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "score", {
                get: function() {
                    return this._score
                },
                set: function(e) {
                    this._score = e
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.addscore = function(e) {
                this._score += e
            }
            ,
            Object.defineProperty(e.prototype, "gametime", {
                get: function() {
                    return this._gametime
                },
                set: function(e) {
                    this._gametime = e
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }();
        n.GameData = o,
        cc._RF.pop()
    }
    , {}],
    GameDataManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9c420E/OstExYlAmTvnIUvw", "GameDataManager"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./GameData")
          , r = e("./UserData")
          , a = function() {
            function e() {
                this._gameData = new o.GameData,
                this._userData = new r.UserData
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "gameData", {
                get: function() {
                    return this._gameData
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "userData", {
                get: function() {
                    return this._userData
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.dataChange = function(e) {}
            ,
            e
        }();
        n.GameDataManager = a.instance,
        cc._RF.pop()
    }
    , {
        "./GameData": "GameData",
        "./UserData": "UserData"
    }],
    GameData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b36338dWSFEU6LUPS9zXJ/q", "GameData"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../ConfigManager")
          , r = e("./StorageInfo")
          , a = function() {
            function e() {
                this._level = 1,
                this._tempLevel = 1,
                this._score = 0,
                this._tempScore = 0,
                this._totalGameTime = 30,
                this._gametime = this._totalGameTime,
                this._gridEffectTime = .5,
                this._gridWidth = 109,
                this._gridHeight = 109,
                this._redPackTimes = 3,
                this._lastTime = 0,
                this.rightTimes = 0
            }
            return e.prototype.refuseData = function() {
                this._tempLevel = this._level,
                this._level = 1,
                this._tempScore = this._score,
                this._score = 0,
                this._lastTime = 0,
                this._gametime = this._totalGameTime,
                this.rightTimes = 0
            }
            ,
            e.prototype.gameStart = function() {
                this._score = 0,
                this._gametime = this._totalGameTime
            }
            ,
            e.prototype.addlevel = function() {
                this._level += 1
            }
            ,
            e.prototype.setScore = function() {
                var e = r.StorageInfo.getPlayTimes();
                this.score = Math.floor(4 * this.rightTimes * Math.sqrt(e)),
                r.StorageInfo.setTopScore(this._score)
            }
            ,
            e.prototype.addgametime = function() {
                var e = o.ConfigManager.levelsJsonMap.get(this._level).addtime || 0;
                this._gametime += e
            }
            ,
            Object.defineProperty(e.prototype, "playerId", {
                get: function() {
                    return this._playerId
                },
                set: function(e) {
                    this._playerId = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "level", {
                get: function() {
                    return this._level
                },
                set: function(e) {
                    this._level = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "templevel", {
                get: function() {
                    return this._tempLevel
                },
                set: function(e) {
                    this._tempLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "score", {
                get: function() {
                    return this._score
                },
                set: function(e) {
                    this._score = e,
                    r.StorageInfo.setTopScore(e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "tempScore", {
                get: function() {
                    return this._tempScore
                },
                set: function(e) {
                    this._tempScore = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "gametime", {
                get: function() {
                    return this._gametime
                },
                set: function(e) {
                    this._gametime = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "totalGameTime", {
                get: function() {
                    return this._totalGameTime
                },
                set: function(e) {
                    this._totalGameTime = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "gridEffectTime", {
                get: function() {
                    return this._gridEffectTime
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "gridGridWidth", {
                get: function() {
                    return this._gridWidth
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "gridGridHeight", {
                get: function() {
                    return this._gridHeight
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "redPackTimes", {
                get: function() {
                    return this._redPackTimes
                },
                set: function(e) {
                    this._redPackTimes = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "lastTime", {
                get: function() {
                    return this._lastTime
                },
                set: function(e) {
                    this._lastTime = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rightTimes", {
                get: function() {
                    return this._rightTimes
                },
                set: function(e) {
                    this._rightTimes = e
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }();
        n.GameData = a,
        cc._RF.pop()
    }
    , {
        "../ConfigManager": "ConfigManager",
        "./StorageInfo": "StorageInfo"
    }],
    GameEngine: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "104ba0KAA5BHrEBuWM2IN11", "GameEngine"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./service/LoginService")
          , r = e("../../core/common/LocalStorage")
          , a = e("../../core/net/Http")
          , i = e("../../core/event/GameEventTransmitter")
          , c = e("../../core/event/DefaultGameEvent")
          , s = e("./data/GameDataManager")
          , u = e("../../core/common/Audio")
          , l = e("../../core/common/ResourcesManager")
          , p = e("../../utils/ServerUrls")
          , f = function() {
            function e() {
                this.loginServerUrl = "https://liubowen.top/dzk/",
                this.loacl = !1,
                this._playerIdKey = "#___player_id__0.2",
                this._loginService = new o.LoginService,
                this._localStorage = new r.LocalStorage,
                this._http = new a.Http(this.loginServerUrl),
                this._audio = new u.Audio(1,1)
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "loginService", {
                get: function() {
                    return this._loginService
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "localStorage", {
                get: function() {
                    return this._localStorage
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "http", {
                get: function() {
                    return this._http
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "audio", {
                get: function() {
                    return this._audio
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "playerIdKey", {
                get: function() {
                    return this._playerIdKey
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.showTips = function(e) {
                var t = l.ResourcesManager.getPrefab("tips")
                  , n = cc.instantiate(t).getComponent("TipsScript");
                return n.show(e),
                n
            }
            ,
            e.prototype.changeScene = function(e) {
                cc.director.loadScene(e)
            }
            ,
            e.prototype.currentScene = function() {
                return cc.director.getScene()
            }
            ,
            e.prototype.currentSceneNode = function() {
                return cc.director.getScene().getChildByName("Canvas")
            }
            ,
            e.prototype.doPost = function(e, t, n) {
                var o = this;
                this._http.httpPost(e, t, function(t) {
                    if (cc.log("url : " + e + " , ret : ", t),
                    t.success) {
                        var r = t.data;
                        s.GameDataManager.dataChange(r),
                        n && 0 != n && i.GameEventTransmitter.emit(c.DefaultGameEvent.of(n, r))
                    } else
                        o.showTips(t.message)
                })
            }
            ,
            e.prototype.shareGame = function() {
                wx.shareAppMessage({
                    title: "\u67da\u5b50\u6d88\u6d88\u4e50\uff0c\u8d8a\u6d88\u8d8a\u8d5a\u94b1",
                    imageUrl: "https://liubowen.top/dzk-res/share/70001.png",
                    query: "sharePlayerId=" + s.GameDataManager.userData.playerId
                }),
                this.doPost(p.ServerUrls.SHARE_URL, {
                    playerId: s.GameDataManager.userData.playerId
                })
            }
            ,
            e.prototype.showPrefab = function(e) {
                var t = l.ResourcesManager.getPrefab(e);
                if (t) {
                    var n = cc.instantiate(t);
                    n && this.currentSceneNode().addChild(n)
                }
            }
            ,
            e
        }();
        n.GameEngine = f.instance,
        cc._RF.pop()
    }
    , {
        "../../core/common/Audio": "Audio",
        "../../core/common/LocalStorage": "LocalStorage",
        "../../core/common/ResourcesManager": "ResourcesManager",
        "../../core/event/DefaultGameEvent": "DefaultGameEvent",
        "../../core/event/GameEventTransmitter": "GameEventTransmitter",
        "../../core/net/Http": "Http",
        "../../utils/ServerUrls": "ServerUrls",
        "./data/GameDataManager": "GameDataManager",
        "./service/LoginService": "LoginService"
    }],
    GameEventListeners: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7d0b2wQ5TtIP6poAU0WXpVg", "GameEventListeners"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./GameEventTransmitter")
          , r = function() {
            function e(e) {
                this.name = e,
                this.listeners = new Map
            }
            return e.prototype.load = function() {
                return o.GameEventTransmitter.on(this),
                this
            }
            ,
            e.prototype.unload = function() {
                o.GameEventTransmitter.off(this.name)
            }
            ,
            e.prototype.on = function(e) {
                this.listeners.set(e.eventCode, e)
            }
            ,
            e.prototype.off = function(e) {
                this.listeners.delete(e)
            }
            ,
            e.prototype.emit = function(e) {
                var t = this.listeners.get(e.eventCode);
                null != t && t.onEvent(e)
            }
            ,
            e.prototype.clear = function() {
                this.listeners.clear()
            }
            ,
            e
        }();
        n.GameEventListeners = r,
        cc._RF.pop()
    }
    , {
        "./GameEventTransmitter": "GameEventTransmitter"
    }],
    GameEventListener: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a41d281cCVNiJn2APbZ3JUi", "GameEventListener"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            return function(e) {
                this.eventCode = e
            }
        }();
        n.GameEventListener = o,
        cc._RF.pop()
    }
    , {}],
    GameEventTransmitter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4e5bcJaRIJNAqZIZR7I5Ru2", "GameEventTransmitter"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this.listeners = new Map,
                this.globalListeners = new Array
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.on = function(e) {
                this.listeners.set(e.name, e)
            }
            ,
            e.prototype.off = function(e) {
                this.listeners.delete(e)
            }
            ,
            e.prototype.emit = function(e) {
                this.listeners.forEach(function(t) {
                    return t.emit(e)
                }),
                this.globalListeners.forEach(function(t) {
                    return t.onEvent(e)
                })
            }
            ,
            e.prototype.onGlobal = function(e) {
                this.globalListeners.push(e)
            }
            ,
            e.prototype.offGlobal = function(e) {
                var t = this.globalListeners.indexOf(e)
                  , n = this.globalListeners.slice(t, t + 1);
                this.globalListeners = n
            }
            ,
            e
        }();
        n.GameEventTransmitter = o.instance,
        cc._RF.pop()
    }
    , {}],
    GameEvent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "32a30LERzNAvo34EMyKa5FO", "GameEvent"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e) {
                this.eventCode = e
            }
            return e.cast = function(e) {
                return e
            }
            ,
            e
        }();
        n.GameEvent = o,
        cc._RF.pop()
    }
    , {}],
    GameGrid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "03a82ylr2NFAK4DsN2jhWmD", "GameGrid");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/data/GameDataManager")
          , u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.gridBorder = null,
                t.gridBg = null,
                t.gridText = null,
                t.index = null,
                t.vec = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.init = function() {}
            ,
            t.prototype.setClickGridBg = function() {}
            ,
            t.prototype.setIndex = function(e) {
                "number" == typeof e ? this.index = e : cc.log("index is null")
            }
            ,
            t.prototype.getIndex = function() {
                return this.index
            }
            ,
            t.prototype.setVec = function(e) {
                "number" == typeof e ? this.vec = e : cc.log("vec is null")
            }
            ,
            t.prototype.getVec = function() {
                return this.vec
            }
            ,
            t.prototype.setGridString = function(e) {
                "string" == typeof e ? this.gridText.string = e : cc.log("setGridString is null")
            }
            ,
            t.prototype.getGridString = function() {
                return this.gridText.string
            }
            ,
            t.prototype.removeSelf = function() {
                this.node.removeFromParent()
            }
            ,
            t.prototype.setFadeOut = function() {
                var e = cc.scaleTo(s.GameDataManager.gameData.gridEffectTime, 1.5)
                  , t = cc.fadeOut(s.GameDataManager.gameData.gridEffectTime);
                this.node.runAction(cc.spawn(e, t))
            }
            ,
            t.prototype.setFadeIn = function() {
                this.node.opacity = 255,
                this.node.scale = 1
            }
            ,
            a([c(cc.Node)], t.prototype, "gridBorder", void 0),
            a([c(cc.Sprite)], t.prototype, "gridBg", void 0),
            a([c(cc.Label)], t.prototype, "gridText", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.GameGrid = u,
        cc._RF.pop()
    }
    , {
        "../common/data/GameDataManager": "GameDataManager"
    }],
    GameManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5ab3akUEjFKcbvjY/SeGTpw", "GameManager");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator.ccclass
          , i = e("./../common/data/GameDataManager")
          , c = e("../common/ConfigManager")
          , s = e("./GameResult")
          , u = e("../common/data/StorageInfo")
          , l = function() {
            function e() {
                this.gameTable = null,
                this.chooseView = null,
                this.gameScene = null
            }
            var t;
            return t = e,
            Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new t),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.setView = function(e, t, n) {
                this.gameTable = t,
                this.chooseView = n,
                this.gameScene = e
            }
            ,
            e.prototype.getRandomIdiom = function() {
                return this.gameTable.getRandomIdiom()
            }
            ,
            e.prototype.onGameStart = function() {
                u.StorageInfo.addPlayTimes(),
                i.GameDataManager.gameData.gameStart(),
                this.loadGameFinish()
            }
            ,
            e.prototype.addGameTime = function() {
                this.addScheTIme(),
                i.GameDataManager.gameData.addgametime()
            }
            ,
            e.prototype.onGameLevelup = function() {
                this.addGameTime(),
                i.GameDataManager.gameData.addlevel(),
                this.gameScene.setTopScore(),
                this.gameScene.updateLevel(),
                this.gameTable.onClearAll(),
                this.chooseView.onClearAll(),
                this.loadGameFinish()
            }
            ,
            e.prototype.addScheTIme = function() {
                var e = c.ConfigManager.levelsJsonMap.get(i.GameDataManager.gameData.level).addtime || 0;
                this.gameScene.addScheTimes(e)
            }
            ,
            e.prototype.loadGameFinish = function() {
                this.chooseView.loadFinish(),
                this.gameTable.setChooseView(this.chooseView),
                this.gameTable.setGameScene(this.gameScene),
                this.gameTable.loadFinish()
            }
            ,
            e.prototype.onGameOver = function() {
                this.gameTable.onGameOver(),
                this.chooseView.onGameOver(),
                this.gameScene.onGameOver(),
                s.GameResult.onGameOver()
            }
            ,
            e = t = r([a()], e)
        }();
        n.GameManagerClass = l,
        n.GameManager = l.instance,
        cc._RF.pop()
    }
    , {
        "../common/ConfigManager": "ConfigManager",
        "../common/data/StorageInfo": "StorageInfo",
        "./../common/data/GameDataManager": "GameDataManager",
        "./GameResult": "GameResult"
    }],
    GameResult: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97be37yWVNJZIYOpkjF/kBY", "GameResult"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../utils/Tools")
          , r = e("./GameManager")
          , a = e("../common/model/RecordGrid")
          , i = e("../common/data/GameDataManager")
          , c = e("../common/helper/GameAudio")
          , s = function() {
            function e() {
                this.randomAry = null,
                this.gameTable = null,
                this.chooseView = null,
                this.gameScene = null,
                this.isStartResult = !1
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.setView = function(e, t) {
                this.gameTable = e,
                this.chooseView = t
            }
            ,
            e.prototype.setGameScene = function(e) {
                this.gameScene = e
            }
            ,
            e.prototype.getIsStartResult = function() {
                return this.isStartResult
            }
            ,
            e.prototype.startResult = function(e) {
                this.isStartResult = !0;
                for (var t = a.RecordGrid.getChooseGridMap(), n = "", o = !1, r = 0; r < e.length; r++) {
                    for (var s = e[r], u = !0, l = 0; l < 4; l++)
                        if (s.substring(l, l + 1) != t.get(l).getGridString()) {
                            u = !1;
                            break
                        }
                    if (u) {
                        o = !0,
                        n = s;
                        break
                    }
                }
                if (o) {
                    c.GameAudio.playJudgeRightEffect(),
                    a.RecordGrid.reduceLastIdiomAry(n),
                    this.chooseView.playChooseFadeOut(),
                    a.RecordGrid.clearRecordData(),
                    this.onSuccessFul();
                    var p = cc.callFunc(this.resetChooseData, this);
                    this.gameTable.node.runAction(cc.sequence(cc.delayTime(i.GameDataManager.gameData.gridEffectTime), p))
                } else
                    this.onFailed()
            }
            ,
            e.prototype.resetChooseData = function() {
                o.Tools.getMapLength(a.RecordGrid.getGameTableGridMap()) == 4 * o.Tools.getGridNumber(this.gameTable.tableWidth, this.gameTable.tableHeight) && r.GameManager.onGameLevelup(),
                this.chooseView.playChooseFadeIn(),
                this.isStartResult = !1,
                this.chooseView.resetTempData()
            }
            ,
            e.prototype.onSuccessFul = function() {
                if (i.GameDataManager.gameData.rightTimes++,
                this.chooseView.clearChooseGrid(),
                i.GameDataManager.gameData.setScore(),
                this.gameScene.setScore(i.GameDataManager.gameData.score.toString()),
                o.Tools.getMapLength(a.RecordGrid.getGameTableGridMap()) == 4 * o.Tools.getGridNumber(this.gameTable.tableWidth, this.gameTable.tableHeight))
                    ;
                else {
                    i.GameDataManager.gameData.gametime = i.GameDataManager.gameData.gametime + 1,
                    this.gameScene.addScheTimes(1)
                }
            }
            ,
            e.prototype.onFailed = function() {
                c.GameAudio.playJudgeErrorEffect(),
                this.chooseView.restoreIdiom(),
                this.clearData()
            }
            ,
            e.prototype.clearData = function() {
                a.RecordGrid.clearRecordData(),
                this.chooseView.clearChooseGrid(),
                this.isStartResult = !1
            }
            ,
            e.prototype.onGameOver = function() {
                this.clearData()
            }
            ,
            e
        }();
        n.GameResult = s.instance,
        cc._RF.pop()
    }
    , {
        "../../utils/Tools": "Tools",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameAudio": "GameAudio",
        "../common/model/RecordGrid": "RecordGrid",
        "./GameManager": "GameManager"
    }],
    GameSceneHepler: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6a63bkDnUNAiYBoHrbZfOwY", "GameSceneHepler"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        function(e) {
            e.LOADING = "LoadingScene",
            e.GAME = "GameScene",
            e.SETTLE = "SettleScene",
            e.MYINFO = "MyinfoScene",
            e.RANK = "RankScene",
            e.READPACK = "RedpackScene",
            e.DEPOSIT = "DepositScene"
        }(n.GameSceneHepler || (n.GameSceneHepler = {})),
        cc._RF.pop()
    }
    , {}],
    GameScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55ba8KjsjZGkK27r9kmJJM1", "GameScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("./../game/GameTable")
          , u = e("./../game/ChooseView")
          , l = e("./GameManager")
          , p = e("../common/data/GameDataManager")
          , f = e("../common/GameEngine")
          , m = e("../common/helper/GameSceneHepler")
          , d = e("./GameResult")
          , g = e("../common/helper/GameAudio")
          , h = e("../common/data/StorageInfo")
          , y = e("../common/model/RecordGrid")
          , b = e("../../utils/Tools")
          , _ = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.gameTable = null,
                t.chooseView = null,
                t.bg_hong = null,
                t.lbl_time = null,
                t.lbl_score = null,
                t.lbl_topScore = null,
                t.lbl_level = null,
                t.btn_back = null,
                t.btn_tishi = null,
                t.bar_time = null,
                t.audio = null,
                t.scheTimes = 0,
                t.tipsScript = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                l.GameManager.setView(this, this.gameTable, this.chooseView),
                this.loadFinish()
            }
            ,
            t.prototype.onDestroy = function() {
                p.GameDataManager.gameData.refuseData(),
                g.GameAudio.stopAll(),
                this.onGameOver()
            }
            ,
            t.prototype.loadFinish = function() {
                g.GameAudio.playGameMusic(),
                this.setScore(p.GameDataManager.gameData.score.toString()),
                this.setTopScore(),
                this.updateLevel(),
                d.GameResult.setGameScene(this),
                l.GameManager.onGameStart(),
                this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this),
                this.btn_tishi.on(cc.Node.EventType.TOUCH_START, this.onTouchEventListener, this),
                this.btn_tishi.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEventListener, this),
                this.btn_tishi.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this),
                this.createCDTime(),
                this.createScheBar()
            }
            ,
            t.prototype.onTouchEventListener = function(e) {
                var t = e.type
                  , n = e.target._name;
                if (g.GameAudio.playBtnEffect(),
                "touchstart" == t) {
                    if ("btn_tishi" == n && null == this.tipsScript) {
						this.unschedule(this.timerSchedule);
						
						//埋点 激励回调下面。拒绝提示 应该回调 this.schedule(this.timerSchedule, 1);
						
						var thisObj = this;
						{
							this.schedule(this.timerSchedule, 1);
							var o = y.RecordGrid.getLastIdiomAry()[0];
							thisObj.tipsScript = f.GameEngine.showTips(o);
							setTimeout(function(){
								null != thisObj.tipsScript && (thisObj.tipsScript.close(),
								thisObj.tipsScript = null)
							}.bind(thisObj), 2000);
						}
                    }
                } else if ("touchend" == t)
                    switch (n) {
                    case "btn_back":
                        l.GameManager.onGameOver(),
                        f.GameEngine.changeScene(m.GameSceneHepler.LOADING);
                        break;
                    case "btn_tishi":
							//null != this.tipsScript && (this.tipsScript.close(),
							//this.tipsScript = null)
                    }
                else
                    "touchcancel" == t && "btn_tishi" == n && null != this.tipsScript && (this.tipsScript.close(),
                    this.tipsScript = null)
            }
            ,
            t.prototype.createCDTime = function() {
                this.lbl_time.string = b.Tools.numberToDate(p.GameDataManager.gameData.gametime);
                this.schedule(this.timerSchedule, 1);
            },
			t.prototype.timerSchedule = function(e) {
				   p.GameDataManager.gameData.gametime--,
                    this.lbl_time.string = b.Tools.numberToDate(p.GameDataManager.gameData.gametime),
                    p.GameDataManager.gameData.gametime <= 10 ? (this.bg_hong.node.active = !0,
                    this.playRemind()) : 1 == this.bg_hong.node.active && (this.bg_hong.node.active = !1),
                    p.GameDataManager.gameData.gametime <= 0 && (this.bar_time.progress = 0,
                    l.GameManager.onGameOver(),
                    f.GameEngine.changeScene(m.GameSceneHepler.SETTLE))
			}
            ,
            t.prototype.createScheBar = function() {
                var e = .01 * p.GameDataManager.gameData.totalGameTime;
                this.scheTimes = 100;
                e < 0 || this.schedule(function(e) {
                    this.scheTimes--;
                    var t = .01 * this.scheTimes;
                    this.bar_time.progress = t
                }, e)
            }
            ,
            t.prototype.addScheTimes = function(e) {
                if ("number" == typeof e) {
                    var t = e / p.GameDataManager.gameData.totalGameTime * 100;
                    this.scheTimes += t
                }
            }
            ,
            t.prototype.playRemind = function() {
                var e = cc.fadeIn(.25)
                  , t = cc.fadeOut(.25);
                this.bg_hong.node.runAction(cc.sequence(e, t))
            }
            ,
            t.prototype.resetCDTime = function() {
                this.onGameOver(),
                this.createCDTime(),
                this.createScheBar()
            }
            ,
            t.prototype.onGameOver = function() {
                this.unscheduleAllCallbacks()
            }
            ,
            t.prototype.setScore = function(e) {
                "string" == typeof e && (this.lbl_score.string = e)
            }
            ,
            t.prototype.setTopScore = function() {
                this.lbl_topScore.string = h.StorageInfo.getTopScore().toString()
            }
            ,
            t.prototype.updateLevel = function() {
                this.lbl_level.string = "\u7b2c" + p.GameDataManager.gameData.level.toString() + "\u5173"
            }
            ,
            a([c(s.GameTable)], t.prototype, "gameTable", void 0),
            a([c(u.ChooseView)], t.prototype, "chooseView", void 0),
            a([c(cc.Sprite)], t.prototype, "bg_hong", void 0),
            a([c(cc.Label)], t.prototype, "lbl_time", void 0),
            a([c(cc.Label)], t.prototype, "lbl_score", void 0),
            a([c(cc.Label)], t.prototype, "lbl_topScore", void 0),
            a([c(cc.Label)], t.prototype, "lbl_level", void 0),
            a([c(cc.Node)], t.prototype, "btn_back", void 0),
            a([c(cc.Node)], t.prototype, "btn_tishi", void 0),
            a([c(cc.ProgressBar)], t.prototype, "bar_time", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.GameScene = _,
        cc._RF.pop()
    }
    , {
        "../../utils/Tools": "Tools",
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/data/StorageInfo": "StorageInfo",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler",
        "../common/model/RecordGrid": "RecordGrid",
        "./../game/ChooseView": "ChooseView",
        "./../game/GameTable": "GameTable",
        "./GameManager": "GameManager",
        "./GameResult": "GameResult"
    }],
    GameScrollView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5dc30ifTGNJ5p7ax3vGzWyc", "GameScrollView");
        var o = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("../event/GameEventListeners")
          , a = e("../event/GameEventTransmitter")
          , i = function(e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e),
            t.prototype.onLoad = function() {
                this.listeners = new r.GameEventListeners(this.uuid),
                a.GameEventTransmitter.on(this.listeners),
                this.load()
            }
            ,
            t.prototype.onDestroy = function() {
                this.unload(),
                a.GameEventTransmitter.off(this.listeners.name),
                this.listeners.clear()
            }
            ,
            t.prototype.addListener = function(e) {
                this.listeners.on(e)
            }
            ,
            t.prototype.removeListener = function(e) {
                this.listeners.off(e)
            }
            ,
            t
        }(cc.ScrollView);
        n.GameScrollView = i,
        cc._RF.pop()
    }
    , {
        "../event/GameEventListeners": "GameEventListeners",
        "../event/GameEventTransmitter": "GameEventTransmitter"
    }],
    GameService: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3614f6tUMpMh5/aLigcamQG", "GameService"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            return function() {}
        }();
        n.GameService = o,
        cc._RF.pop()
    }
    , {}],
    GameTable: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a3345SxcP1OopPhSs31OlHg", "GameTable");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = e("./../../utils/Vec2")
          , s = e("./GameResult")
          , u = e("../common/model/RecordGrid")
          , l = e("../../core/common/ResourcesManager")
          , p = e("./../common/model/RandomAry")
          , f = e("./../common/ConfigManager")
          , m = e("../common/data/GameDataManager")
          , d = e("../../utils/Tools")
          , g = e("../common/helper/GameAudio")
          , h = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.tableWidth = 6,
                t.tableHeight = 6,
                t.gridPrefab = null,
                t.randomIdiom = [],
                t.randomAry = null,
                t.produceAry = null,
                t.chooseView = null,
                t.gameScene = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.loadFinish = function() {
                var e = f.ConfigManager.levelsJsonMap.get(m.GameDataManager.gameData.level);
                null != e && (this.tableWidth = e.row,
                this.tableHeight = e.line);
                var t = d.Tools.getGridNumber(this.tableWidth, this.tableHeight);
                this.randomAry = new p.RandomAry(t),
                this.randomIdiom = this.randomAry.getRandomIdiom(),
                u.RecordGrid.initLastIdiomAry(d.Tools.deepCopyArray(this.randomIdiom)),
                this.produceAry = this.randomAry.getProduceArray(),
                this.gridPrefab = l.ResourcesManager.getPrefab("GameGrid"),
                this.chooseView.setGameTable(this),
                this.chooseView.setGameScene(this.gameScene),
                s.GameResult.setView(this, this.chooseView),
                this.createTable()
            }
            ,
            t.prototype.setGameScene = function(e) {
                this.gameScene = e
            }
            ,
            t.prototype.setChooseView = function(e) {
                this.chooseView = e
            }
            ,
            t.prototype.getRandomIdiom = function() {
                return this.randomIdiom
            }
            ,
            t.prototype.createTable = function() {
                for (var e = 0, t = 0; t < this.tableHeight; t++)
                    for (var n = 0; n < this.tableWidth; n++) {
                        var o = new c.Vec2(n,t);
                        this.createGameGrid(e, o),
                        e++
                    }
            }
            ,
            t.prototype.createGameGrid = function(e, t) {
                if (null != this.gridPrefab) {
                    this.node.setContentSize(this.tableWidth * m.GameDataManager.gameData.gridGridWidth, this.tableHeight * m.GameDataManager.gameData.gridGridHeight);
                    var n = cc.instantiate(this.gridPrefab);
                    n.setContentSize(cc.size(m.GameDataManager.gameData.gridGridWidth, m.GameDataManager.gameData.gridGridHeight));
                    var o = n.getComponent("GameGrid");
                    o.setGridString(this.produceAry[e]),
                    n.on(cc.Node.EventType.TOUCH_START, this.onTouchEventListener, this),
                    n.on(cc.Node.EventType.TOUCH_END, function(t) {
                        var n = this.produceAry[e];
                        if (0 != this.checkGridMap(o)) {
                            g.GameAudio.playClickGridEffect(),
                            this.chooseView.setGridInfo(e, n);
                            var r = d.Tools.getMapLength(u.RecordGrid.getChooseGridMap());
                            u.RecordGrid.setGameTableGridMap(e, o),
                            o.setGridString(""),
                            o.setVec(e),
                            4 == r && s.GameResult.startResult(this.randomIdiom)
                        } else
                            cc.log("\u5df2\u7ecf\u5b58\u5728")
                    }, this),
                    null != this.node && null != o && null != o.node ? this.node.addChild(o.node) : cc.log("Error in GameTable createGameGrid")
                } else
                    cc.log("GameTable gridPrefab is null")
            }
            ,
            t.prototype.onTouchEventListener = function(e) {
                e.type,
                e.target._name
            }
            ,
            t.prototype.checkGridMap = function(e) {
                var t = !0;
                return "" == e.getGridString() && (t = !1),
                t
            }
            ,
            t.prototype.onGameOver = function() {
                this.node && this.node.removeAllChildren(),
                u.RecordGrid.onGameOver()
            }
            ,
            t.prototype.onClearAll = function() {
                this.node && this.node.removeAllChildren(),
                u.RecordGrid.onClearAll()
            }
            ,
            t = a([i()], t)
        }(cc.Component);
        n.GameTable = h,
        cc._RF.pop()
    }
    , {
        "../../core/common/ResourcesManager": "ResourcesManager",
        "../../utils/Tools": "Tools",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameAudio": "GameAudio",
        "../common/model/RecordGrid": "RecordGrid",
        "./../../utils/Vec2": "Vec2",
        "./../common/ConfigManager": "ConfigManager",
        "./../common/model/RandomAry": "RandomAry",
        "./GameResult": "GameResult"
    }],
    Http: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "61df3dSg/BLOJb9nzhELtjG", "Http"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e) {
                this.baseURL = e
            }
            return e.prototype.httpGet = function(e, t, n) {
                void 0 === n && (n = null);
                var o = cc.loader.getXMLHttpRequest();
                o.onreadystatechange = function() {
                    if (4 === o.readyState)
                        if (o.status >= 200 && o.status < 300) {
                            var e = JSON.parse(o.responseText);
                            null != t && t(e)
                        } else
                            null != n && n({
                                status: o.status
                            })
                }
                ,
                o.open("GET", this.baseURL + e, !0),
                cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                o.ontimeout = function(e) {
                    null != n && n(e)
                }
                ,
                o.onerror = function(e) {
                    null != n && n(e)
                }
                ,
                o.timeout = 3e3,
                o.send()
            }
            ,
            e.prototype.httpPost = function(e, t, n, o) {
                void 0 === o && (o = null);
                var r = cc.loader.getXMLHttpRequest();
                r.onreadystatechange = function() {
                    if (4 === r.readyState)
                        if (r.status >= 200 && r.status < 300) {
                            var e = JSON.parse(r.responseText);
                            null != n && n(e)
                        } else
                            null != o && o({
                                status: r.status
                            })
                }
                ,
                r.open("POST", this.baseURL + e, !0),
                cc.sys.isNative && r.setRequestHeader("Accept-Encoding", "gzip,deflate"),
                r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                r.ontimeout = function(e) {
                    null != o && o(e)
                }
                ,
                r.onerror = function(e) {
                    null != o && o(e)
                }
                ,
                r.timeout = 5e3,
                r.send(this.encodeFormData(t))
            }
            ,
            e.prototype.encodeFormData = function(e) {
                var t = []
                  , n = /%20/g;
                for (var o in e) {
                    var r = e[o]
                      , a = encodeURIComponent(o).replace(n, "+") + "=" + encodeURIComponent(r).replace(n, "+");
                    t.push(a)
                }
                return t.join("&")
            }
            ,
            e
        }();
        n.Http = o,
        cc._RF.pop()
    }
    , {}],
    ImageHelper: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "66de7grSSBBY5wXJ5Lc+CmA", "ImageHelper");
        var o = function(e, t, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(i, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            )
        }
          , r = function(e, t) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function c(a) {
                return function(c) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [2 & a[0], r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, c])
                }
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc.Size
          , i = function() {
            function e() {}
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getImage = function(e) {
                return o(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        return [2, new Promise(function(t, n) {
                            cc.loader.load({
                                url: e,
                                type: "png"
                            }, function(e, n) {
                                if (!e)
                                    return t(n);
                                cc.error(e)
                            })
                        }
                        )]
                    })
                })
            }
            ,
            e.prototype.loadImage = function(e, t) {
                null != t && cc.loader.load({
                    url: e,
                    type: "png"
                }, function(e, n) {
                    e ? cc.error(e) : (t.spriteFrame = new cc.SpriteFrame(n),
                    t.spriteFrame.setOriginalSize(new a(t.node.getContentSize())))
                })
            }
            ,
            e
        }();
        n.ImageHelper = i.instance,
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var o = e("polyglot.min")
          , r = null;
        function a(e) {
            return window.i18n.languages[e]
        }
        function i(e) {
            e && (r ? r.replace(e) : r = new o({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = a(e) || {};
                    window.i18n.curLang = e,
                    i(t),
                    this.inst = r
                }
            },
            t: function(e, t) {
                if (r)
                    return r.t(e, t)
            },
            inst: r,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
                    var o = e[n].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, o)
                }
                for (var r = 0; r < t.length; ++r) {
                    var a = t[r];
                    a.node.active && a.updateLabel()
                }
                for (var i = [], c = 0; c < e.length; ++c) {
                    var s = e[c].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(i, s)
                }
                for (var u = 0; u < i.length; ++u) {
                    var l = i[u];
                    l.node.active && l.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LoadingScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3009aYpeIlN0q6ZGDpTUXYw", "LoadingScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        }
          , i = function(e, t, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(i, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            )
        }
          , c = function(e, t) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function c(a) {
                return function(c) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [2 & a[0], r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, c])
                }
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("../../core/common/ResourcesManager")
          , u = e("../common/ConfigManager")
          , l = e("../../core/component/CommonScene")
          , p = cc._decorator.ccclass
          , f = cc._decorator.property
          , m = e("../common/GameEngine")
          , d = e("../common/helper/GameSceneHepler")
          , g = e("../common/data/GameDataManager")
          , h = e("../common/helper/GameAudio")
          , y = e("../common/data/StorageInfo")
          , b = e("../../utils/Tools")
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.progressLabel = null,
                t.progressBar = null,
                t.btn_music = null,
                t.btn_rank = null,
                t.bg_title = null,
                t.btn_start = null,
                t.btn_myinfo = null,
                t.youzi = null,
                t.wxRankPre = null,
                t.btn_audio = null,
                t.progress = 0,
                t
            }
            return r(t, e),
            t.prototype.load = function() {
				var recomNode = new cc.Node();
                recomNode.y = (this.node.height/2) - 200;
                recomNode.color = new cc.Color(0, 0, 0, 255);
				var lable = recomNode.addComponent(cc.Label);
                lable.string = "更多好玩";
                lable.fontSize = 50;
                lable.lineHeight = 50;
				var action = cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 0.9));
				action = cc.repeatForever(action);
                recomNode.runAction(action);
                recomNode.on(cc.Node.EventType.TOUCH_START, function(){
                    //埋点 推荐更多好玩
                    console.log("more game");
					
                }, this);	
				this.node.addChild(recomNode);
				
                return i(this, void 0, void 0, function() {
                    var e;
                    return c(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return e = this,
                            cc.loader.downloader.loadSubpackage("loadingScene", function(e) {
                                e || console.log("load loadingScene subpackage successfully.")
                            }),
                            cc.loader.downloader.loadSubpackage("jsons", function(e) {
                                e || console.log("load jsons subpackage successfully.")
                            }),
                            1 == y.StorageInfo.getFirstLogin() && (y.StorageInfo.setFirstLogin(),
                            y.StorageInfo.setGameAudioStatus("resume"),
                            b.Tools.resetDate()),
                            this.progressLabel.string = "\u6b63\u5728\u52a0\u8f7d",
                            this.setProgress(0),
                            [4, u.ConfigManager.load()];
                        case 1:
                            return t.sent(),
                            this.setProgress(50),
                            [4, s.ResourcesManager.load()];
                        case 2:
                            return t.sent(),
                            this.btn_myinfo.node.on(cc.Node.EventType.TOUCH_END, function() {
                                h.GameAudio.playBtnEffect();
								//埋点 分享。由玩家信息按钮改
								console.log("share");
							  //  m.GameEngine.changeScene(d.GameSceneHepler.MYINFO)
                            }),
                            this.btn_rank.node.on(cc.Node.EventType.TOUCH_END, function() {
                                h.GameAudio.playBtnEffect();
								//埋点 排行榜 
								console.log("ranking");
                              //  var t = cc.instantiate(e.wxRankPre);
                                //cc.director.getScene().addChild(t)
                            }),
                            this.btn_music.node.on(cc.Node.EventType.TOUCH_END, function() {
                                h.GameAudio.playBtnEffect();
                                var t = y.StorageInfo.getGameAudioStatus();
                                console.log("audio status : " + t),
                                "resume" == t ? (e.btn_audio.spriteFrame = s.ResourcesManager.getImage("audio_guan"),
                                y.StorageInfo.setGameAudioStatus("pause"),
                                h.GameAudio.changeBGMVolume(0, !0),
                                h.GameAudio.changeSFXVolume(0)) : (e.btn_audio.spriteFrame = s.ResourcesManager.getImage("audio_kai"),
                                y.StorageInfo.setGameAudioStatus("resume"),
                                h.GameAudio.changeBGMVolume(60, !0),
                                h.GameAudio.changeSFXVolume(60))
                            }),
                            this.setProgress(70),
                            [4, this.initPlayerData()];
                        case 3:
                            return t.sent(),
                            this.setProgress(100),
                            [4, this.loadFinish()];
                        case 4:
                            return t.sent(),
                            [2]
                        }
                    })
                });
            }
            ,
            t.prototype.initPlayerData = function() {}
            ,
            t.prototype.unload = function() {}
            ,
            t.prototype.setProgress = function(e) {
                this.progress = e,
                this.progressBar.progress = e
            }
            ,
            t.prototype.loadFinish = function() {
                this.runAnimation()
            }
            ,
            t.prototype.runAnimation = function() {
                this.progressBar.node.active = !1,
                this.progressLabel.node.active = !1;
                var e = this
                  , t = cc.moveBy(.3, cc.v2(0, 3.3 * cc.view.getVisibleSize().height / 7))
                  , n = cc.callFunc(function() {
                    var t = cc.sequence(cc.scaleTo(.7, 1.2), cc.scaleTo(.7, 1))
                      , n = cc.repeatForever(t);
                    e.btn_start.node.runAction(n)
                });
                this.btn_start.node.runAction(cc.sequence(t, n));
                var o = cc.callFunc(function() {
                    e.youzi.node.scaleX = 1
                })
                  , r = cc.callFunc(function() {
                    e.youzi.node.scaleX = -1
                })
                  , a = cc.jumpTo(2.3, cc.v2(this.youzi.node.x + 350, this.youzi.node.y), 100, 3)
                  , i = cc.jumpTo(2.3, cc.v2(this.youzi.node.x - 50, this.youzi.node.y), 100, 3)
                  , c = cc.sequence(o, a, r, i)
                  , s = cc.repeatForever(c);
                this.youzi.node.runAction(s);
                var u = cc.moveBy(.5, cc.v2(0, 260));
                this.btn_music.node.runAction(u);
                var l = cc.moveBy(.5, cc.v2(0, 260));
                this.btn_rank.node.runAction(l);
                var p = cc.moveBy(.5, cc.v2(0, 260));
                this.btn_myinfo.node.runAction(p);
                var f = cc.moveBy(.6, cc.v2(0, 3.3 * cc.view.getVisibleSize().height / 8));
                this.bg_title.node.runAction(f)
            }
            ,
            t.prototype.startGame = function() {
                cc.loader.downloader.loadSubpackage("gameScene", function(e) {
                    e || console.log("load gameScene subpackage successfully.")
                }),
                h.GameAudio.playBtnEffect(),
                g.GameDataManager.gameData.refuseData(),
                m.GameEngine.changeScene(d.GameSceneHepler.GAME)
            }
            ,
            a([f(cc.Label)], t.prototype, "progressLabel", void 0),
            a([f(cc.ProgressBar)], t.prototype, "progressBar", void 0),
            a([f(cc.Button)], t.prototype, "btn_music", void 0),
            a([f(cc.Button)], t.prototype, "btn_rank", void 0),
            a([f(cc.Sprite)], t.prototype, "bg_title", void 0),
            a([f(cc.Button)], t.prototype, "btn_start", void 0),
            a([f(cc.Button)], t.prototype, "btn_myinfo", void 0),
            a([f(cc.Sprite)], t.prototype, "youzi", void 0),
            a([f(cc.Prefab)], t.prototype, "wxRankPre", void 0),
            a([f(cc.Sprite)], t.prototype, "btn_audio", void 0),
            t = a([p()], t)
        }(l.CommonScene);
        n.LoadingScene = _,
        cc._RF.pop()
    }
    , {
        "../../core/common/ResourcesManager": "ResourcesManager",
        "../../core/component/CommonScene": "CommonScene",
        "../../utils/Tools": "Tools",
        "../common/ConfigManager": "ConfigManager",
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/data/StorageInfo": "StorageInfo",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    LocalStorage: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c94aZMgLxObK3rh/AtQPzA", "LocalStorage"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.prototype.get = function(e) {
                return cc.sys.localStorage.getItem(e)
            }
            ,
            e.prototype.set = function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            }
            ,
            e.prototype.remove = function(e) {
                cc.sys.localStorage.removeItem(e)
            }
            ,
            e
        }();
        n.LocalStorage = o,
        cc._RF.pop()
    }
    , {}],
    LocalizedLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var o = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                o.inst || o.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? o.t(this.dataID) && (this.label.string = o.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var o = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: o
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    LoginService: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75122kGzhJHBKLzcieJHG6e", "LoginService"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../GameEngine")
          , r = e("../helper/GameSceneHepler")
          , a = e("../../../utils/ServerUrls")
          , i = e("../../../utils/StringUtils")
          , c = function() {
            function e() {}
            return e.prototype.checkLogin = function() {
                var e = this;
                wx.getSetting({
                    success: function(t) {
                        var n = o.GameEngine.localStorage.get(o.GameEngine.playerIdKey);
                        cc.log("wx.getSetting playerId: " + n + " , res: ", t),
                        cc.log("!res.authSetting['scope.userInfo']: " + !t["scope.userInfo"] + " "),
                        cc.log("StringUtils.isEmpty(playerId): " + i.StringUtils.isEmpty(n) + " "),
                        cc.log("!res.authSetting['scope.userInfo'] || StringUtils.isEmpty(playerId)  : " + (!t["scope.userInfo"] || i.StringUtils.isEmpty(n))),
                        wx.checkSession({
                            success: function(t) {
                                cc.log("wx.checkSession success , res: ", t),
                                e.getUserInfo()
                            },
                            fail: function(t) {
                                cc.log("wx.checkSession fail , res: ", t),
                                e.login()
                            }
                        })
                    }
                })
            }
            ,
            e.prototype.getUserInfo = function() {
                wx.getUserInfo({
                    withCredentials: !1,
                    lang: "zh_CN",
                    success: function(e) {
                        cc.log("res--getUserInfo = " + e);
                        var t = e.encryptedData
                          , n = e.iv
                          , i = {
                            playerId: o.GameEngine.localStorage.get(o.GameEngine.playerIdKey),
                            encryptedData: t,
                            iv: n
                        };
                        cc.log("wx.getUserInfo res: : ", e),
                        o.GameEngine.http.httpPost(a.ServerUrls.GET_USER_URL, i, function(e) {
                            e.success ? o.GameEngine.changeScene(r.GameSceneHepler.GAME) : o.GameEngine.showTips(e.message)
                        })
                    }
                })
            }
            ,
            e.prototype.login = function() {
                wx.login({
                    success: function(e) {
                        cc.log("wx.login res: : ", e);
                        var t = {
                            code: e.code
                        };
                        o.GameEngine.http.httpPost(a.ServerUrls.LOGIN_URL, t, function(e) {
                            e.success ? o.GameEngine.changeScene(r.GameSceneHepler.GAME) : o.GameEngine.showTips(e.message)
                        })
                    }
                })
            }
            ,
            e.prototype.register = function(e, t) {
                wx.login({
                    success: function(n) {
                        cc.log("wx.login res: : ", n);
                        var i = {
                            code: n.code,
                            encryptedData: e,
                            iv: t
                        };
                        o.GameEngine.http.httpPost(a.ServerUrls.REGISTER_URL, i, function(e) {
                            e.success ? (cc.log("register response", e),
                            o.GameEngine.changeScene(r.GameSceneHepler.GAME)) : o.GameEngine.showTips(e.message)
                        })
                    }
                })
            }
            ,
            e
        }();
        n.LoginService = c,
        cc._RF.pop()
    }
    , {
        "../../../utils/ServerUrls": "ServerUrls",
        "../../../utils/StringUtils": "StringUtils",
        "../GameEngine": "GameEngine",
        "../helper/GameSceneHepler": "GameSceneHepler"
    }],
    MyinfoScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fab89FGV51Om5hFUWrmDqxX", "MyinfoScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/GameEngine")
          , u = e("../common/helper/GameSceneHepler")
          , l = e("../common/data/GameDataManager")
          , p = e("../common/data/StorageInfo")
          , f = e("../common/helper/GameAudio")
          , m = e("../../core/common/ResourcesManager")
          , d = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.label_jihuitimes = null,
                t.label_price = null,
                t.label_playtimes = null,
                t.btn_addtimes = null,
                t.btn_tixian = null,
                t.btn_kefu = null,
                t.btn_waitsave = null,
                t.btn_saved = null,
                t.btn_back = null,
                t.layout_tab = null,
                t.scrollView = null,
                t.items = [],
                t.image_head = null,
                t.path = null,
                t.self = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.self = this,
                this.btn_addtimes.node.on(cc.Node.EventType.TOUCH_END, this.onClickAddTimes),
                this.btn_tixian.node.on(cc.Node.EventType.TOUCH_END, this.onClickTixian),
                this.btn_kefu.node.on(cc.Node.EventType.TOUCH_END, this.onClickTifu),
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack),
                this.btn_waitsave.node.on(cc.Node.EventType.TOUCH_END, this.onClickWaitSave, this),
                this.btn_saved.node.on(cc.Node.EventType.TOUCH_END, this.onClickSaved, this),
                this.label_price.string = p.StorageInfo.getRedPackMoney().toFixed(2),
                this.label_playtimes.string = p.StorageInfo.getPlayTimes().toString(),
                this.updateLayout()
            }
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onClickAddTimes = function() {
                f.GameAudio.playBtnEffect()
            }
            ,
            t.prototype.onClickTixian = function() {
                f.GameAudio.playBtnEffect(),
                s.GameEngine.changeScene(u.GameSceneHepler.DEPOSIT)
            }
            ,
            t.prototype.loadImgurl = function(e, t) {
                cc.loader.load(t, function(t, n) {
                    var o = new cc.SpriteFrame(n);
                    e.spriteFrame = o
                })
            }
            ,
            t.prototype.update = function() {
                null != this.path && this.loadImgurl(this.image_head, this.path)
            }
            ,
            t.prototype.onClickTifu = function() {
                f.GameAudio.playBtnEffect(),
                s.GameEngine.shareGame()
            }
            ,
            t.prototype.onClickWaitSave = function() {
                console.log("onClickWaitSave"),
                f.GameAudio.playBtnEffect(),
                this.btn_waitsave.spriteFrame = m.ResourcesManager.getImage("waitsave"),
                this.btn_saved.spriteFrame = m.ResourcesManager.getImage("saved")
            }
            ,
            t.prototype.onClickSaved = function() {
                console.log("onClickSaved"),
                f.GameAudio.playBtnEffect(),
                this.btn_saved.spriteFrame = m.ResourcesManager.getImage("waitsave"),
                this.btn_waitsave.spriteFrame = m.ResourcesManager.getImage("saved")
            }
            ,
            t.prototype.onClickBack = function() {
                f.GameAudio.playBtnEffect(),
                l.GameDataManager.gameData.refuseData(),
                s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
            }
            ,
            t.prototype.updateLayout = function() {
                for (var e = m.ResourcesManager.getPrefab("myInfoItem"), t = cc.instantiate(e), n = t.height, o = 0; o < 5; o++)
                    t.x = 0,
                    t.y = -o * (n + 5),
                    this.items.push(t),
                    this.layout_tab.addChild(t),
                    o < 4 && (t = cc.instantiate(e));
                this.layout_tab.height = 20 + this.items.length * (n + 5),
                this.scrollView.scrollToTop()
            }
            ,
            a([c(cc.Label)], t.prototype, "label_jihuitimes", void 0),
            a([c(cc.Label)], t.prototype, "label_price", void 0),
            a([c(cc.Label)], t.prototype, "label_playtimes", void 0),
            a([c(cc.Button)], t.prototype, "btn_addtimes", void 0),
            a([c(cc.Button)], t.prototype, "btn_tixian", void 0),
            a([c(cc.Button)], t.prototype, "btn_kefu", void 0),
            a([c(cc.Sprite)], t.prototype, "btn_waitsave", void 0),
            a([c(cc.Sprite)], t.prototype, "btn_saved", void 0),
            a([c(cc.Button)], t.prototype, "btn_back", void 0),
            a([c(cc.Node)], t.prototype, "layout_tab", void 0),
            a([c(cc.ScrollView)], t.prototype, "scrollView", void 0),
            a([c(cc.Sprite)], t.prototype, "image_head", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.SettleScene = d,
        cc._RF.pop()
    }
    , {
        "../../core/common/ResourcesManager": "ResourcesManager",
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/data/StorageInfo": "StorageInfo",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    NetEventCode: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7e8cf+BN29Ilq6qsEgH07+X", "NetEventCode"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.connect = 10001] = "connect",
            e[e.disconnect = 10002] = "disconnect",
            e[e.error = 10003] = "error"
        }(n.NetEventCode || (n.NetEventCode = {})),
        cc._RF.pop()
    }
    , {}],
    NetRouter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "21f2bO3vvBMA7G+pYU0+YoW", "NetRouter"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../event/DefaultGameEvent")
          , r = e("./NetEventCode")
          , a = e("./GameCmdHandlerManager")
          , i = e("../event/GameEventTransmitter")
          , c = function() {
            function e(e) {
                this.DEFAULT_CIPHER = [43, 32, 21, 10],
                this.HEADER_FLAG = 21346,
                this.MAX_BODY_LEN = 2147483647,
                this.HEARTBEAT_CMD = 21023,
                this.STRICT = e
            }
            return e.prototype.init = function() {
                var e = this;
                this.socket.binaryType = "arraybuffer",
                this.socket.onopen = function(t) {
                    e.onConnect(t)
                }
                ,
                this.socket.onclose = function(t) {
                    e.onDisconnect(t)
                }
                ,
                this.socket.onerror = function(t) {
                    e.onError(t)
                }
                ,
                this.socket.onmessage = function(e) {
                    cc.log("socket.onmessage " + JSON.stringify(e))
                }
                ,
                setInterval(function() {
                    e.send(e.HEARTBEAT_CMD, new Uint8Array(0))
                }, 5e3)
            }
            ,
            e.prototype.onConnect = function(e) {
                cc.log("net connect event:", e),
                i.GameEventTransmitter.emit(o.DefaultGameEvent.of(r.NetEventCode.connect))
            }
            ,
            e.prototype.onDisconnect = function(e) {
                cc.log("net disconnect event:", e),
                i.GameEventTransmitter.emit(o.DefaultGameEvent.of(r.NetEventCode.disconnect))
            }
            ,
            e.prototype.onError = function(e) {
                cc.log("net error event:", e),
                i.GameEventTransmitter.emit(o.DefaultGameEvent.of(r.NetEventCode.error))
            }
            ,
            e.prototype.onMessage = function(e) {
                cc.log("net on message, message: ", e),
                a.gameCmdHandlerManager.onMessage(e.protocol, e)
            }
            ,
            e.prototype.connect = function(e) {
                this.socket = new WebSocket(e),
                this.init()
            }
            ,
            e.prototype.isConnect = function() {
                return void 0 !== this.socket.readyState && this.socket.readyState == WebSocket.OPEN
            }
            ,
            e.prototype.send = function(e, t) {
                void 0 === t && (t = null),
                this.isConnect() || cc.log("net not Connect")
            }
            ,
            e
        }();
        n.NetRouter = c,
        cc._RF.pop()
    }
    , {
        "../event/DefaultGameEvent": "DefaultGameEvent",
        "../event/GameEventTransmitter": "GameEventTransmitter",
        "./GameCmdHandlerManager": "GameCmdHandlerManager",
        "./NetEventCode": "NetEventCode"
    }],
    NumberUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "933aaZInhtB3Y/7N5KsUoMS", "NumberUtils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.convertNumber = function(e) {
                var t = ""
                  , n = e.toString()
                  , o = n.length;
                return o <= 4 ? n : (o > 4 && o <= 8 ? t = this.sliceToStr(n, 4, "A") : o > 4 && o <= 12 ? t = this.sliceToStr(n, 8, "B") : o > 4 && o <= 16 ? t = this.sliceToStr(n, 12, "C") : o > 4 && o <= 20 ? t = this.sliceToStr(n, 16, "D") : o > 4 && o <= 24 ? t = this.sliceToStr(n, 20, "E") : o > 4 && o <= 28 ? t = this.sliceToStr(n, 24, "F") : o > 4 && o <= 32 && (t = this.sliceToStr(n, 28, "G")),
                t)
            }
            ,
            e.sliceToStr = function(e, t, n) {
                return e.slice(0, e.length - t) + "." + e.slice(e.length - t, e.length - (t - 2)) + n
            }
            ,
            e
        }();
        n.NumberUtils = o,
        cc._RF.pop()
    }
    , {}],
    RandomAry: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d7781n4M31Jgomts2i9ZIst", "RandomAry"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./../ConfigManager")
          , r = e("./../../../utils/Tools")
          , a = function() {
            function e(e) {
                this.needValus = null,
                this.configLength = null,
                this.jsonData = new Map,
                this.produceArray = null,
                this.randomIdiom = null,
                this.needValus = e,
                this.jsonData = o.ConfigManager.idiomJsonMap,
                this.produceArray = [],
                this.configLength = r.Tools.getMapLength(this.jsonData),
                this.init()
            }
            return e.prototype.init = function() {
                if (this.configLength <= 0)
                    cc.log("json\u8bfb\u53d6\u5931\u8d25");
                else {
                    var e = this.getRandomAry();
                    cc.log("\u968f\u673a\u6570\u7ec4 => ", e),
                    this.randomIdiom = this.getRandomAryIdiom(e),
                    this.produceArray = this.getSplitArray(this.randomIdiom)
                }
            }
            ,
            e.prototype.getRandomIdiom = function() {
                return this.randomIdiom
            }
            ,
            e.prototype.getProduceArray = function() {
                return this.produceArray
            }
            ,
            e.prototype.getRandomAry = function() {
                for (var e = [], t = 0; t < this.needValus; t++) {
                    for (var n = Math.ceil(Math.random() * this.configLength), o = !0, r = 0; r < e.length; r++)
                        if (e[r] == n) {
                            o = !1,
                            t--;
                            break
                        }
                    o && e.push(n)
                }
                return e
            }
            ,
            e.prototype.getRandomAryIdiom = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.toString();
                    t.push(this.jsonData.get(o))
                }
                return cc.log("\u5173\u5361\u6210\u8bed   =>    ", t),
                t
            }
            ,
            e.prototype.getSplitArray = function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    for (var o = e[n], r = 0; r < o.length; r++) {
                        var a = o.substring(r, r + 1);
                        t.push(a)
                    }
                var i = t.length;
                for (n = 0; n < i; n++) {
                    var c = Math.floor(Math.random() * i);
                    if (n != c) {
                        var s = t[n];
                        t[n] = t[c],
                        t[c] = s
                    }
                }
                return t
            }
            ,
            e.prototype.resetRandomAry = function() {
                this.randomIdiom = [],
                this.produceArray = [],
                this.init()
            }
            ,
            e
        }();
        n.RandomAry = a,
        cc._RF.pop()
    }
    , {
        "./../../../utils/Tools": "Tools",
        "./../ConfigManager": "ConfigManager"
    }],
    RankScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c2a5fx0WeFEOIeyNEKFtSlE", "RankScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/GameEngine")
          , u = e("../common/helper/GameSceneHepler")
          , l = e("../common/data/GameDataManager")
          , p = e("../common/helper/GameAudio")
          , f = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.btn_back = null,
                t.tex = null,
                t
            }
            return r(t, e),
            t.prototype.start = function() {
                this.tex = new cc.Texture2D
            }
            ,
            t.prototype.onLoad = function() {
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack),
                cc.log("rank");
                var e = wx.getOpenDataContext();
                cc.log("openDataContext " + e),
                wx.getOpenDataContext().postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: 1
                })
            }
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onClickBack = function() {
                p.GameAudio.playBtnEffect(),
                l.GameDataManager.gameData.refuseData(),
                s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
            }
            ,
            a([c(cc.Button)], t.prototype, "btn_back", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.RankScene = f,
        cc._RF.pop()
    }
    , {
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    RecordGrid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ae8ddoAhIBOXKkpmgmvY7/V", "RecordGrid"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this.chooseGridMap = new Map,
                this.gameTableGridMap = new Map,
                this.tempChooseGridMap = new Map,
                this.lastIdiomAry = []
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.setGameTableGridMap = function(e, t) {
                "number" == typeof e && null != typeof t && this.gameTableGridMap.set(e, t)
            }
            ,
            e.prototype.getGameTableGridMap = function() {
                return this.gameTableGridMap
            }
            ,
            e.prototype.setChooseGridMap = function(e, t) {
                null != typeof t && this.chooseGridMap.set(e, t)
            }
            ,
            e.prototype.getChooseGridMap = function() {
                return this.chooseGridMap
            }
            ,
            e.prototype.settempChooseGridMap = function(e, t) {
                null != typeof t && this.tempChooseGridMap.set(e, t)
            }
            ,
            e.prototype.gettempChooseGridMap = function() {
                return this.tempChooseGridMap
            }
            ,
            e.prototype.initLastIdiomAry = function(e) {
                this.lastIdiomAry = e
            }
            ,
            e.prototype.reduceLastIdiomAry = function(e) {
                var t = this;
                this.lastIdiomAry.forEach(function(n, o) {
                    e == n && t.lastIdiomAry.splice(o, o + 1)
                })
            }
            ,
            e.prototype.getLastIdiomAry = function() {
                return this.lastIdiomAry
            }
            ,
            e.prototype.displayGrid = function(e, t) {
                "string" == typeof e && "number" == typeof t && "" != e && (this.gameTableGridMap.get(t).setGridString(e),
                this.gameTableGridMap.delete(t))
            }
            ,
            e.prototype.clearRecordData = function() {
                this.chooseGridMap.clear()
            }
            ,
            e.prototype.clearTempRecordData = function() {
                this.tempChooseGridMap.clear()
            }
            ,
            e.prototype.onGameOver = function() {
                this.clearRecordData(),
                this.gameTableGridMap.clear()
            }
            ,
            e.prototype.onClearAll = function() {
                this.clearRecordData(),
                this.gameTableGridMap.clear()
            }
            ,
            e
        }();
        n.RecordGrid = o.instance,
        cc._RF.pop()
    }
    , {}],
    RedpackScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "240d07Fq9NHzp9339KsgoDg", "RedpackScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/GameEngine")
          , u = e("../common/helper/GameSceneHepler")
          , l = e("../common/data/GameDataManager")
          , p = e("../common/data/StorageInfo")
          , f = e("../common/helper/GameAudio")
          , m = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.btn_deposit = null,
                t.btn_back = null,
                t.btn_continue = null,
                t.btn_myaward = null,
                t.lbl_price = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                var e = this.getRedPackMoney();
                p.StorageInfo.setRedPackMoney(e),
                this.lbl_price.string = e.toFixed(2),
                this.btn_deposit.on(cc.Node.EventType.TOUCH_END, this.onClickDeposit),
                this.btn_myaward.on(cc.Node.EventType.TOUCH_END, this.onClickMyAward),
                this.btn_continue.on(cc.Node.EventType.TOUCH_END, this.onClickContinue),
                this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onClickBack)
            }
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onClickDeposit = function() {
                f.GameAudio.playBtnEffect(),
                s.GameEngine.shareGame()
            }
            ,
            t.prototype.onClickMyAward = function() {
                f.GameAudio.playBtnEffect(),
                s.GameEngine.changeScene(u.GameSceneHepler.MYINFO)
            }
            ,
            t.prototype.onClickContinue = function() {
                f.GameAudio.playBtnEffect(),
                s.GameEngine.changeScene(u.GameSceneHepler.GAME)
            }
            ,
            t.prototype.onClickBack = function() {
                f.GameAudio.playBtnEffect(),
                l.GameDataManager.gameData.refuseData(),
                s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
            }
            ,
            t.prototype.getRedPackMoney = function() {
                return Number(.05 * Math.random()) || .01
            }
            ,
            a([c(cc.Node)], t.prototype, "btn_deposit", void 0),
            a([c(cc.Node)], t.prototype, "btn_back", void 0),
            a([c(cc.Node)], t.prototype, "btn_continue", void 0),
            a([c(cc.Node)], t.prototype, "btn_myaward", void 0),
            a([c(cc.Label)], t.prototype, "lbl_price", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.SettleScene = m,
        cc._RF.pop()
    }
    , {
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/data/StorageInfo": "StorageInfo",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    ResourcesManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e4028ZLnklJ45df+r9/A7A5", "ResourcesManager");
        var o = function(e, t, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function c(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(i, c)
                }
                s((o = o.apply(e, t || [])).next())
            }
            )
        }
          , r = function(e, t) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function c(a) {
                return function(c) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [2 & a[0], r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, c])
                }
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../../utils/StringUtils")
          , i = function() {
            function e() {
                this.sounds = new Map,
                this.images = new Map,
                this.prefabs = new Map
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getSound = function(e) {
                return this.sounds.get(String(e).trim())
            }
            ,
            e.prototype.getImage = function(e) {
                return this.images.get(String(e).trim())
            }
            ,
            e.prototype.getPrefab = function(e) {
                return this.prefabs.get(String(e).trim())
            }
            ,
            e.prototype.load = function() {
                return o(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.loadSounds()];
                        case 1:
                            return e.sent(),
                            [4, this.loadImages()];
                        case 2:
                            return e.sent(),
                            [4, this.loadSpriteAtlas()];
                        case 3:
                            return e.sent(),
                            [4, this.loadPrefabs()];
                        case 4:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.loadSounds = function() {
                var e = this;
                return new Promise(function(t, n) {
                    cc.loader.loadResDir("sounds", cc.AudioClip, function(n, o, r) {
                        if (!n) {
                            for (var i = 0; i < o.length; i++) {
                                var c = a.StringUtils.getName(r[i])
                                  , s = o[i];
                                cc.log("loadSounds -> name : " + c + " , data :", s),
                                e.sounds.set(c, s)
                            }
                            return t()
                        }
                        cc.error(n)
                    })
                }
                )
            }
            ,
            e.prototype.loadImages = function() {
                var e = this;
                return new Promise(function(t, n) {
                    cc.loader.loadResDir("images", cc.SpriteFrame, function(n, o, r) {
                        if (!n) {
                            for (var i = 0; i < o.length; i++) {
                                var c = a.StringUtils.getName(r[i])
                                  , s = o[i];
                                e.images.set(c, s)
                            }
                            return t()
                        }
                        cc.error(n)
                    })
                }
                )
            }
            ,
            e.prototype.loadSpriteAtlas = function() {
                var e = this;
                return new Promise(function(t, n) {
                    cc.loader.loadResDir("images", cc.SpriteAtlas, function(n, o, r) {
                        if (!n) {
                            for (var i = 0; i < o.length; i++) {
                                var c = a.StringUtils.getName(r[i])
                                  , s = o[i];
                                s instanceof cc.SpriteFrame && (cc.log("loadSpriteAtlas -> name : " + c + " , data : " + s),
                                e.images.set(c, s))
                            }
                            return t()
                        }
                        cc.error(n)
                    })
                }
                )
            }
            ,
            e.prototype.loadPrefabs = function() {
                var e = this;
                return new Promise(function(t, n) {
                    cc.loader.loadResDir("prefabs", cc.Prefab, function(n, o, r) {
                        if (!n) {
                            for (var i = 0; i < o.length; i++) {
                                var c = a.StringUtils.getName(r[i])
                                  , s = o[i];
                                cc.log("loadPrefabs -> name : " + c + " , data : " + s),
                                e.prefabs.set(c, s)
                            }
                            return t()
                        }
                        cc.error(n)
                    })
                }
                )
            }
            ,
            e
        }();
        n.ResourcesManager = i.instance,
        cc._RF.pop()
    }
    , {
        "../../utils/StringUtils": "StringUtils"
    }],
    ServerUrls: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d5483yTB9lLC7Js3efwqEfF", "ServerUrls"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.REGISTER_URL = "user/register",
            e.LOGIN_URL = "user/login",
            e.CHECK_OFFLINE_GOLD_URL = "user/checkOfflineGold",
            e.LOGOUT_URL = "user/logout",
            e.GET_USER_URL = "user/getUserInfo",
            e.HERO_OPEN_STORE_URL = "hero/openHeroStore",
            e.HERO_BUY_URL = "hero/buyHero",
            e.HERO_COMPOSITE_URL = "hero/composite",
            e.HERO_SELL_URL = "hero/sellHero",
            e.TOLLGATE_RECEIVE_GOLD_URL = "tollgate/receiveGold",
            e.TOLLGATE_SYNC_BALL_HP_URL = "tollgate/syncBallHps",
            e.RECEIVE_ACHIEVEMENT_REWARDS_URL = "achievement/receiveAchievementRewards",
            e.TURNTABLE_ACTIVITY_START_TURN_URL = "activities/turntableActivityStartTurn",
            e.OPEN_SHARE_TASK_URL = "task/openShareTask",
            e.SHARE_URL = "task/share",
            e
        }();
        n.ServerUrls = o,
        cc._RF.pop()
    }
    , {}],
    SettleScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7a80dqC0ttPtaiR7v/lxisK", "SettleScene");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../common/GameEngine")
          , u = e("../common/helper/GameSceneHepler")
          , l = e("../common/data/GameDataManager")
          , p = e("../common/helper/GameAudio")
          , f = e("../common/data/StorageInfo")
          , m = e("../../utils/Tools")
          , d = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.btn_redpack = null,
                t.btn_back = null,
                t.btn_continue = null,
                t.btn_share = null,
                t.lbl_score = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.btn_redpack.node.active = !1,
                this.lbl_score.string = l.GameDataManager.gameData.tempScore.toString(),
                this.btn_redpack.node.on(cc.Node.EventType.TOUCH_END, this.onClickRedPack),
                this.btn_share.node.on(cc.Node.EventType.TOUCH_END, this.onClickShare),
                this.btn_continue.node.on(cc.Node.EventType.TOUCH_END, this.onClickContinue),
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack),
                this.displayRedPackScene()
            }
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onClickRedPack = function() {
                p.GameAudio.playBtnEffect(),
                f.StorageInfo.setRedPackTimes(1),
                s.GameEngine.changeScene(u.GameSceneHepler.READPACK)
            }
            ,
            t.prototype.onClickShare = function() {
                p.GameAudio.playBtnEffect(),
                s.GameEngine.shareGame()
            }
            ,
            t.prototype.onClickContinue = function() {
                p.GameAudio.playBtnEffect(),
                s.GameEngine.changeScene(u.GameSceneHepler.GAME)
            }
            ,
            t.prototype.onClickBack = function() {
                p.GameAudio.playBtnEffect(),
                l.GameDataManager.gameData.refuseData(),
                s.GameEngine.changeScene(u.GameSceneHepler.LOADING)
            }
            ,
            t.prototype.displayRedPackScene = function() {
                Math.random() < .8 || (f.StorageInfo.getRedPackTimes() <= l.GameDataManager.gameData.redPackTimes ? this.btn_redpack.node.active = !0 : 0 == this.judgeIsSomeDay() && (m.Tools.resetDate(),
                f.StorageInfo.resetRedPackTimes(),
                this.btn_redpack.node.active = !0))
            }
            ,
            t.prototype.judgeIsSomeDay = function() {
                var e = f.StorageInfo.getGameYear()
                  , t = f.StorageInfo.getGameMonth()
                  , n = f.StorageInfo.getGameDate();
                return m.Tools.judgeIsSomeDay(e, t, n)
            }
            ,
            a([c(cc.Button)], t.prototype, "btn_redpack", void 0),
            a([c(cc.Button)], t.prototype, "btn_back", void 0),
            a([c(cc.Button)], t.prototype, "btn_continue", void 0),
            a([c(cc.Button)], t.prototype, "btn_share", void 0),
            a([c(cc.Label)], t.prototype, "lbl_score", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.SettleScene = d,
        cc._RF.pop()
    }
    , {
        "../../utils/Tools": "Tools",
        "../common/GameEngine": "GameEngine",
        "../common/data/GameDataManager": "GameDataManager",
        "../common/data/StorageInfo": "StorageInfo",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }],
    SplitUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75775V5oZ9Jn7S/WbBjMMZT", "SplitUtils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.splitNumberStr = function(e) {
                for (var t = e.split(this.MAJOR_DELIMITER), n = new Array, o = 0; o < t.length; o++)
                    n.push(Number(t[o]));
                return n
            }
            ,
            e.compactNumberStr = function(e) {
                for (var t = "", n = 0; n < e.length; n++)
                    t += String(e[n]),
                    n != e.length - 1 && (t += this.MAJOR_DELIMITER);
                return t
            }
            ,
            e.splitNumberMap = function(e) {
                for (var t = new Map, n = e.split(this.SEMICOLON_DELIMITER), o = 0; o < n.length; o++) {
                    var r = n[o].split(this.MAJOR_DELIMITER);
                    t.set(Number(r[0]), Number(r[1]))
                }
                return t
            }
            ,
            e.MAJOR_DELIMITER = ",",
            e.MINOR_DELIMITER = "|",
            e.SEMICOLON_DELIMITER = ";",
            e
        }();
        n.SplitUtils = o,
        cc._RF.pop()
    }
    , {}],
    SpriteFrameSet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var o = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = o,
        cc._RF.pop()
    }
    , {}],
    StorageInfo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "057c0eqrf9GUbey+y6qoZ2C", "StorageInfo"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../GameEngine")
          , r = e("./GameDataManager")
          , a = function() {
            function e() {}
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return null == this._instance && (this._instance = new e),
                    this._instance
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.setFirstLogin = function() {
                1 == this.getFirstLogin() && o.GameEngine.localStorage.set("FirstLogin", "true")
            }
            ,
            e.prototype.setTopScore = function(e) {
                if (e > this.getTopScore()) {
                    if ("number" != typeof e)
                        return void console.log("score is not number!");
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.getOpenDataContext().postMessage({
                        EventType: "2",
                        EventData: {
                            score: e,
                            level: r.GameDataManager.gameData.level
                        }
                    }),
                    o.GameEngine.localStorage.set("TopScore", e.toString())
                }
            }
            ,
            e.prototype.resetRedPackTimes = function() {
                o.GameEngine.localStorage.set("RedPackTimes", "0")
            }
            ,
            e.prototype.setRedPackTimes = function(e) {
                var t = this.getRedPackTimes() + e;
                o.GameEngine.localStorage.set("RedPackTimes", t.toString())
            }
            ,
            e.prototype.setRedPackMoney = function(e) {
                if ("number" == typeof e) {
                    var t = this.getRedPackMoney() + e;
                    o.GameEngine.localStorage.set("RedPackMoney", t.toString())
                }
            }
            ,
            e.prototype.setGameYear = function(e) {
                o.GameEngine.localStorage.set("GameYear", e)
            }
            ,
            e.prototype.setGameMonth = function(e) {
                o.GameEngine.localStorage.set("GameMonth", e)
            }
            ,
            e.prototype.setGameDate = function(e) {
                o.GameEngine.localStorage.set("GameDate", e)
            }
            ,
            e.prototype.setGameAudioStatus = function(e) {
                o.GameEngine.localStorage.set("GameAudioStatus", e)
            }
            ,
            e.prototype.addPlayTimes = function() {
                var e = this.getPlayTimes() + 1;
                o.GameEngine.localStorage.set("PlayTimes", e.toString())
            }
            ,
            e.prototype.getTopScore = function() {
                return Number(o.GameEngine.localStorage.get("TopScore")) || 0
            }
            ,
            e.prototype.getRedPackTimes = function() {
                return Number(o.GameEngine.localStorage.get("RedPackTimes")) || 0
            }
            ,
            e.prototype.getRedPackMoney = function() {
                return Number(o.GameEngine.localStorage.get("RedPackMoney")) || 0
            }
            ,
            e.prototype.getGameYear = function() {
                return o.GameEngine.localStorage.get("GameYear")
            }
            ,
            e.prototype.getGameMonth = function() {
                return o.GameEngine.localStorage.get("GameMonth")
            }
            ,
            e.prototype.getGameDate = function() {
                return o.GameEngine.localStorage.get("GameDate")
            }
            ,
            e.prototype.getGameAudioStatus = function() {
                return o.GameEngine.localStorage.get("GameAudioStatus")
            }
            ,
            e.prototype.getFirstLogin = function() {
                return null == o.GameEngine.localStorage.get("FirstLogin")
            }
            ,
            e.prototype.getPlayTimes = function() {
                return Number(o.GameEngine.localStorage.get("PlayTimes"))
            }
            ,
            e
        }();
        n.StorageInfo = a.instance,
        cc._RF.pop()
    }
    , {
        "../GameEngine": "GameEngine",
        "./GameDataManager": "GameDataManager"
    }],
    StringUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cf7e0BwzJdIWpUD0HbfbXX1", "StringUtils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.isEmpty = function(e) {
                return null == e || "" == e || 0 == e.length || void 0 === e
            }
            ,
            e.getName = function(e) {
                return e.substr(e.lastIndexOf("/") + 1, e.length)
            }
            ,
            e.trim = function(e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            }
            ,
            e.leftTrim = function(e) {
                return e.replace(/(^\s*)/g, "")
            }
            ,
            e.rightTrim = function(e) {
                return e.replace(/(\s*$)/g, "")
            }
            ,
            e
        }();
        n.StringUtils = o,
        cc._RF.pop()
    }
    , {}],
    TipsScript: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c5dc91p9shCvJQA5TH41AgJ", "TipsScript");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = cc._decorator.property
          , s = e("../GameEngine")
          , u = e("../../../utils/StringUtils")
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.message = null,
                t.bg = null,
                t.speed = 10,
                t.finalY = 0,
                t
            }
            return r(t, e),
            t.prototype.show = function(e) {
                this.message && !u.StringUtils.isEmpty(e) && (this.message.string = e,
                this.bg.setContentSize(50 * this.message.string.length + 50, this.bg.getContentSize().height),
                this.finalY = this.node.y + 80,
                this.node.setPosition(0, 0),
                s.GameEngine.currentSceneNode().addChild(this.node))
            }
            ,
            t.prototype.close = function() {
                null != this.node.parent && this.node.removeFromParent(!0)
            }
            ,
            t.prototype.update = function(e) {
                this.node.y < this.finalY ? this.node.y += this.speed : this.close()
            }
            ,
            a([c(cc.Label)], t.prototype, "message", void 0),
            a([c(cc.Node)], t.prototype, "bg", void 0),
            t = a([i()], t)
        }(cc.Component);
        n.TipsScript = l,
        cc._RF.pop()
    }
    , {
        "../../../utils/StringUtils": "StringUtils",
        "../GameEngine": "GameEngine"
    }],
    Tools: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b70c16cb3RBjImXMw7h9ewO", "Tools"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../game/common/data/StorageInfo")
          , r = function() {
            function e() {}
            return e.getMapLength = function(e) {
                var t = 0;
                return e.forEach(function(e) {
                    t++
                }),
                t
            }
            ,
            e.getGridNumber = function(e, t) {
                var n = e * t;
                return Math.floor(.25 * n)
            }
            ,
            e.deepCopyArray = function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(e[n]);
                return t
            }
            ,
            e.numberToDate = function(e) {
                if (e < 60) {
                    var t = e.toString();
                    return e < 10 && (t = "0" + e.toString()),
                    "00:" + t
                }
                if (e < 3600) {
                    var n = Math.floor(e % 60)
                      , o = Math.floor(e / 60)
                      , r = "";
                    n < 10 && (r = "0" + n.toString());
                    var a = "";
                    return o < 10 && (a = "0" + o.toString()),
                    a + ":" + r
                }
                return e.toString()
            }
            ,
            e.judgeIsSomeDay = function(e, t, n) {
                var o = new Date
                  , r = !1;
                return Number(e) == o.getFullYear() && Number(t) == o.getMonth() && Number(n) == o.getDate() && (r = !0),
                r
            }
            ,
            e.resetDate = function() {
                var e = new Date
                  , t = e.getFullYear()
                  , n = e.getMonth()
                  , r = e.getDate();
                o.StorageInfo.setGameYear(t.toString()),
                o.StorageInfo.setGameMonth(n.toString()),
                o.StorageInfo.setGameDate(r.toString())
            }
            ,
            e
        }();
        n.Tools = r,
        cc._RF.pop()
    }
    , {
        "../game/common/data/StorageInfo": "StorageInfo"
    }],
    UrlUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c7d5OU0PRA6IqheC/gNGAj", "UrlUtils"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.getUrlParams = function() {
                var e = new Map;
                if (null == window.location)
                    return e;
                for (var t = window.location.href, n = t.indexOf("?"), o = t.substr(n + 1).split("&"), r = 0; r < o.length; r++)
                    if ((n = o[r].indexOf("=")) > 0) {
                        var a = o[r].substring(0, n)
                          , i = o[r].substr(n + 1);
                        e.set(a, i)
                    }
                return e
            }
            ,
            e
        }();
        n.UrlUtils = o,
        cc._RF.pop()
    }
    , {}],
    UserData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "27f537yhFNONovjpa+p9DLo", "UserData"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this._playerId = 0,
                this._headUrl = "",
                this._sex = 1
            }
            return Object.defineProperty(e.prototype, "playerId", {
                get: function() {
                    return this._playerId
                },
                set: function(e) {
                    this._playerId = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "headUrl", {
                get: function() {
                    return this._headUrl
                },
                set: function(e) {
                    this._headUrl = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "sex", {
                get: function() {
                    return this._sex
                },
                set: function(e) {
                    this._sex = e
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }();
        n.UserData = o,
        cc._RF.pop()
    }
    , {}],
    Vec2: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "13600cpS0dNAoBQ5GfuI+vu", "Vec2"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                this._x = e,
                this._y = t
            }
            return Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.toNumber = function() {
                return 1e4 * this._x + this._y
            }
            ,
            e
        }();
        n.Vec2 = o,
        cc._RF.pop()
    }
    , {}],
    WXSubContextView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c9b6efCRQdJII1H02LL2M3B", "WXSubContextView");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator.ccclass
          , c = function(e) {
            function t() {
                return e.call(this) || this
            }
            return r(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t = a([i()], t)
        }(cc.Component);
        n.WXSubContextView = c,
        cc._RF.pop()
    }
    , {}],
    "polyglot.min": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, r) {
            "function" == typeof define && define.amd ? define([], function() {
                return r(e)
            }) : "object" == (void 0 === n ? "undefined" : o(n)) ? t.exports = r(e) : e.Polyglot = r(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || a
            }
            function n(e, t, n) {
                var o, a;
                return null != n && e ? o = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }((a = e.split(i))[r(t, n)] || a[0]) : o = e,
                o
            }
            function r(e, t) {
                return c[function(e) {
                    var t = function(e) {
                        var t, n, o, r = {};
                        for (t in e)
                            if (e.hasOwnProperty(t))
                                for (o in n = e[t])
                                    r[n[o]] = t;
                        return r
                    }(s);
                    return t[e] || t.en
                }(e)](t)
            }
            function a(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var n;
                for (var r in e)
                    e.hasOwnProperty(r) && (n = e[r],
                    t && (r = t + "." + r),
                    "object" == (void 0 === n ? "undefined" : o(n)) ? this.extend(n, r) : this.phrases[r] = n)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var o, r;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? o = this.phrases[e] : "string" == typeof t._ ? o = t._ : this.allowMissing ? o = e : (this.warn('Missing translation for key: "' + e + '"'),
                r = e),
                "string" == typeof o && (t = function(e) {
                    var t = {};
                    for (var n in e)
                        t[n] = e[n];
                    return t
                }(t),
                r = function(e, t) {
                    for (var n in t)
                        "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}","g"), t[n]));
                    return e
                }(r = n(o, this.currentLocale, t.smart_count), t)),
                r
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var i = "||||"
              , c = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , s = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}],
    wxRankView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "42eedk47mtDKIm0esLRB/uF", "wxRankView");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                )(t, n)
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , a = function(e, t, n, r) {
            var a, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (c = (i < 3 ? a(c) : i > 3 ? a(t, n, c) : a(t, n)) || c);
            return i > 3 && c && Object.defineProperty(t, n, c),
            c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../../game/common/GameEngine")
          , c = e("../../game/common/data/GameDataManager")
          , s = e("../common/helper/GameAudio")
          , u = e("../common/helper/GameSceneHepler")
          , l = cc._decorator
          , p = l.ccclass
          , f = l.property
          , m = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.btn_back = null,
                t.btn_invite = null,
                t.tex = null,
                t
            }
            return r(t, e),
            t.prototype.onLoad = function() {
                this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener),
                this.btn_invite.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener)
            }
            ,
            t.prototype.start = function() {
                this.tex = new cc.Texture2D,
                console.log("send"),
                cc.sys.platform === cc.sys.WECHAT_GAME && (wx.getUserInfo({
                    success: function(e) {
                        console.log(e)
                    }
                }),
                wx.getOpenDataContext().postMessage({
                    EventType: "0",
                    EventData: ""
                }))
            }
            ,
            t.prototype.onDestroy = function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.getOpenDataContext().postMessage({
                    EventType: "3",
                    EventData: ""
                })
            }
            ,
            t.prototype.onTouchEventListener = function(e) {
                var t = e.type
                  , n = e.target._name;
                if (s.GameAudio.playBtnEffect(),
                "touchend" == t)
                    switch (n) {
                    case "btn_back":
                        s.GameAudio.playBtnEffect(),
                        c.GameDataManager.gameData.refuseData(),
                        i.GameEngine.changeScene(u.GameSceneHepler.LOADING)
                    }
            }
            ,
            t.prototype.shareGroup = function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.shareAppMessage({
                    title: "\u6c49\u8bed\u516d\u7ea7\u4f60\u80fd\u8003\u591a\u5c11\uff1f\u8bd5\u8bd5\u5c31\u77e5\u9053!",
                    query: "sharePlayerId=" + c.GameDataManager.userData.playerId,
                    imageUrl: "https://liubowen.top/dzk-res/share/70001.png",
                    success: function(e) {
                        console.log("\u5fae\u4fe1\u5206\u4eab\u8fd4\u56de\u6570\u636e =>", e)
                    }
                })
            }
            ,
            a([f(cc.Button)], t.prototype, "btn_back", void 0),
            a([f(cc.Button)], t.prototype, "btn_invite", void 0),
            t = a([p], t)
        }(cc.Component);
        n.wxRankView = m,
        cc._RF.pop()
    }
    , {
        "../../game/common/GameEngine": "GameEngine",
        "../../game/common/data/GameDataManager": "GameDataManager",
        "../common/helper/GameAudio": "GameAudio",
        "../common/helper/GameSceneHepler": "GameSceneHepler"
    }]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "Audio", "LocalStorage", "ResourcesManager", "CommonScene", "GameComponent", "GameScrollView", "DefaultGameEvent", "DefaultGameListener", "EventListenerFunction", "GameEvent", "GameEventListener", "GameEventListeners", "GameEventTransmitter", "CmdHandlerFunction", "DefaultCmdHandler", "GameCmdHandler", "GameCmdHandlerManager", "Http", "NetEventCode", "NetRouter", "GameService", "ConfigManager", "GameEngine", "Base", "GameData.1", "GameData", "GameDataManager", "StorageInfo", "UserData", "GameAudio", "GameSceneHepler", "ImageHelper", "RandomAry", "RecordGrid", "TipsScript", "LoginService", "DepositScene", "ChooseView", "GameGrid", "GameManager", "GameResult", "GameScene", "GameTable", "WXSubContextView", "LoadingScene", "MyinfoScene", "RankScene", "wxRankView", "RedpackScene", "SettleScene", "NumberUtils", "ServerUrls", "SplitUtils", "StringUtils", "Tools", "UrlUtils", "Vec2"]);
