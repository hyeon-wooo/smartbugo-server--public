/**
 * Kakao Javascript SDK for Kakao Open Platform Service - v1.39.16
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 *  crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 *  easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 *  ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 *  Underscore
 *
 * https://github.com/jashkenas/underscore
 *
 * Copyright 2009-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *
 * MIT License
 *
 *
 *  Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c) <year> <copyright holders>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */
var _slicedToArray = function (e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e))
      return (function (e, t) {
        var n = [],
          r = !0,
          i = !1,
          o = undefined;
        try {
          for (
            var a, s = e[Symbol.iterator]();
            !(r = (a = s.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (c) {
          (i = !0), (o = c);
        } finally {
          try {
            !r && s["return"] && s["return"]();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
function _possibleConstructorReturn(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
!(function (e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).Kakao = e());
})(function () {
  return (function p(o, a, s) {
    function c(t, e) {
      if (!a[t]) {
        if (!o[t]) {
          var n = "function" == typeof require && require;
          if (!e && n) return n(t, !0);
          if (u) return u(t, !0);
          var r = new Error("Cannot find module '" + t + "'");
          throw ((r.code = "MODULE_NOT_FOUND"), r);
        }
        var i = (a[t] = { exports: {} });
        o[t][0].call(
          i.exports,
          function (e) {
            return c(o[t][1][e] || e);
          },
          i,
          i.exports,
          p,
          o,
          a,
          s
        );
      }
      return a[t].exports;
    }
    for (
      var u = "function" == typeof require && require, e = 0;
      e < s.length;
      e++
    )
      c(s[e]);
    return c;
  })(
    {
      1: [
        function (e, t, n) {
          var r,
            i,
            o = (t.exports = {});
          function a() {
            throw new Error("setTimeout has not been defined");
          }
          function s() {
            throw new Error("clearTimeout has not been defined");
          }
          function c(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === a || !r) && setTimeout)
              return (r = setTimeout), setTimeout(e, 0);
            try {
              return r(e, 0);
            } catch (t) {
              try {
                return r.call(null, e, 0);
              } catch (t) {
                return r.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              r = "function" == typeof setTimeout ? setTimeout : a;
            } catch (e) {
              r = a;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
              i = s;
            }
          })();
          var u,
            l = [],
            p = !1,
            d = -1;
          function f() {
            p &&
              u &&
              ((p = !1),
              u.length ? (l = u.concat(l)) : (d = -1),
              l.length && m());
          }
          function m() {
            if (!p) {
              var e = c(f);
              p = !0;
              for (var t = l.length; t; ) {
                for (u = l, l = []; ++d < t; ) u && u[d].run();
                (d = -1), (t = l.length);
              }
              (u = null),
                (p = !1),
                (function (e) {
                  if (i === clearTimeout) return clearTimeout(e);
                  if ((i === s || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(e);
                  try {
                    i(e);
                  } catch (t) {
                    try {
                      return i.call(null, e);
                    } catch (t) {
                      return i.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function h(e, t) {
            (this.fun = e), (this.array = t);
          }
          function g() {}
          (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            l.push(new h(e, t)), 1 !== l.length || p || c(m);
          }),
            (h.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = g),
            (o.addListener = g),
            (o.once = g),
            (o.off = g),
            (o.removeListener = g),
            (o.removeAllListeners = g),
            (o.emit = g),
            (o.prependListener = g),
            (o.prependOnceListener = g),
            (o.listeners = function (e) {
              return [];
            }),
            (o.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
              return 0;
            });
        },
        {},
      ],
      2: [
        function (c, e, u) {
          (function (e, t) {
            var r = c("process/browser.js").nextTick,
              n = Function.prototype.apply,
              i = Array.prototype.slice,
              o = {},
              a = 0;
            function s(e, t) {
              (this._id = e), (this._clearFn = t);
            }
            (u.setTimeout = function () {
              return new s(n.call(setTimeout, window, arguments), clearTimeout);
            }),
              (u.setInterval = function () {
                return new s(
                  n.call(setInterval, window, arguments),
                  clearInterval
                );
              }),
              (u.clearTimeout = u.clearInterval =
                function (e) {
                  e.close();
                }),
              (s.prototype.unref = s.prototype.ref = function () {}),
              (s.prototype.close = function () {
                this._clearFn.call(window, this._id);
              }),
              (u.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
              }),
              (u.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
              }),
              (u._unrefActive = u.active =
                function (e) {
                  clearTimeout(e._idleTimeoutId);
                  var t = e._idleTimeout;
                  0 <= t &&
                    (e._idleTimeoutId = setTimeout(function () {
                      e._onTimeout && e._onTimeout();
                    }, t));
                }),
              (u.setImmediate =
                "function" == typeof e
                  ? e
                  : function (e) {
                      var t = a++,
                        n = !(arguments.length < 2) && i.call(arguments, 1);
                      return (
                        (o[t] = !0),
                        r(function () {
                          o[t] &&
                            (n ? e.apply(null, n) : e.call(null),
                            u.clearImmediate(t));
                        }),
                        t
                      );
                    }),
              (u.clearImmediate =
                "function" == typeof t
                  ? t
                  : function (e) {
                      delete o[e];
                    });
          }.call(this, c("timers").setImmediate, c("timers").clearImmediate));
        },
        { "process/browser.js": 1, timers: 2 },
      ],
      3: [
        function (e, t, n) {
          function r() {
            return "Bearer " + o.getAccessToken();
          }
          function i() {
            return "KakaoAK " + o.getAppKey();
          }
          var o;
          t.exports = {
            accessToken: r,
            appKey: i,
            tokenOrKey: (o = e("../Auth/secret")).getAccessToken() ? r : i,
          };
        },
        { "../Auth/secret": 15 },
      ],
      4: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./request")(o)]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./request": 5 },
      ],
      5: [
        function (e, t, n) {
          t.exports = function (n) {
            e("../../vendor/es6-promise");
            var i = e("../../vendor/easyXDM"),
              l = e("../util"),
              p = e("../common"),
              o = e("./rules"),
              d = e("./authType"),
              a = null;
            return {
              request: function (r) {
                var e = (r = p.processRules(r, o.request, "API.request")).url,
                  t = o.api[e].data;
                return (
                  t &&
                    (r.data = p.processRules(r.data, t, "API.request - " + e)),
                  a ||
                    ((a = p.guardCreateEasyXDM(function () {
                      return new i.Rpc(
                        { remote: p.URL.apiRemote },
                        { remote: { request: {} } }
                      );
                    })),
                    n.push(function () {
                      a.destroy(), (a = null);
                    })),
                  new Promise(function (t, n) {
                    (function (a) {
                      var s = a.url,
                        e = o.api[s],
                        c = {};
                      l.each(a.data, function (e, t) {
                        c[t] = l.isString(e) ? e : JSON.stringify(e);
                      });
                      var u = {
                        url: s,
                        method: e.method,
                        headers: {
                          KA: p.KAKAO_AGENT,
                          Authorization: (e.authType || d.accessToken)(),
                          "Cache-Control": "no-cache",
                          Pragma: "no-cache",
                        },
                        data: c,
                      };
                      return new Promise(function (r, t) {
                        if (
                          "/v1/api/story/upload/multi" === (o = s) ||
                          "/v2/api/talk/message/image/upload" === o ||
                          a.data.file
                        ) {
                          var e = a.files || a.data.file;
                          if (!e)
                            throw new p.KakaoError(
                              "'files' parameter should be set for " + s
                            );
                          (n = e),
                            (i = l.map(n, function (t) {
                              return p.serializeFile(t).then(function (e) {
                                return { name: t.name, type: t.type, str: e };
                              });
                            })),
                            new Promise(function (t, n) {
                              Promise.all(i).then(
                                function (e) {
                                  t({ paramName: "file", data: e });
                                },
                                function (e) {
                                  n(e);
                                }
                              );
                            }).then(
                              function (e) {
                                var t = [];
                                for (var n in c)
                                  "file" !== n &&
                                    t.push(n + "=" + encodeURIComponent(c[n]));
                                0 < t.length && (u.url += "?" + t.join("&")),
                                  (u.file = e),
                                  r(u);
                              },
                              function (e) {
                                t(e);
                              }
                            );
                        } else r(u);
                        var n, i, o;
                      });
                    })(r).then(
                      function (e) {
                        a.request(
                          e,
                          function (e) {
                            r.success(e), r.always(e), t(e);
                          },
                          function (e) {
                            var t = (function (e) {
                              try {
                                return (
                                  p.logDebug(e),
                                  JSON.stringify(e.message.responseText)
                                );
                              } catch (t) {
                                return { code: -777, msg: "Unknown error" };
                              }
                            })(e);
                            r.fail(t), r.always(t), n(t);
                          }
                        );
                      },
                      function (e) {
                        n(e);
                      }
                    );
                  })
                );
              },
            };
          };
        },
        {
          "../../vendor/easyXDM": 46,
          "../../vendor/es6-promise": 47,
          "../common": 39,
          "../util": 43,
          "./authType": 3,
          "./rules": 6,
        },
      ],
      6: [
        function (e, t, n) {
          function r(e) {
            if (!o.isString(e)) return !1;
            if (0 === e.length || 2048 < e.length)
              throw new _k.KakaoError(
                "content length should be between 0 and 2048"
              );
            return !0;
          }
          function i(e) {
            return (
              (e.header_image_url ||
                e.header_image_width ||
                e.header_image_height) &&
                (delete e.header_image_url,
                delete e.header_image_width,
                delete e.header_image_height,
                console &&
                  console.warn(
                    "KakaoWarning: The parameters (" +
                      [
                        "header_image_url",
                        "header_image_width",
                        "header_image_height",
                      ].join(", ") +
                      ") for header background image are deprecated."
                  )),
              !0
            );
          }
          var o, a, s, c, u, l;
          t.exports =
            ((o = e("../util")),
            (a = e("./authType")),
            (s = {
              permission: o.isOneOf(["A", "F", "M"]),
              enable_share: o.isBoolean,
              android_exec_param: o.isString,
              ios_exec_param: o.isString,
              android_market_param: o.isString,
              ios_market_param: o.isString,
            }),
            (c = { secure_resource: o.isBoolean }),
            (u = function u(e) {
              !1 === e.secure_resource &&
                (console &&
                  console.warn(
                    "KakaoWarning: The secure_resource parameter is deprecated."
                  ),
                (e.secure_resource = !0));
            }),
            (l = {
              request: {
                required: {
                  url: function (e) {
                    return o.isOneOf(o.keys(l.api))(e);
                  },
                },
                optional: {
                  data: o.isObject,
                  files: function (e) {
                    return (
                      o.passesOneOf([o.isArray, o.isFileList])(e) &&
                      o.every(e, o.passesOneOf([o.isFile, o.isBlob]))
                    );
                  },
                  file: o.isFile,
                  success: o.isFunction,
                  fail: o.isFunction,
                  always: o.isFunction,
                },
                defaults: {
                  data: {},
                  success: o.emptyFunc,
                  fail: o.emptyFunc,
                  always: o.emptyFunc,
                },
              },
              api: {
                "/v1/user/signup": {
                  method: "post",
                  data: { optional: { properties: o.isObject } },
                },
                "/v1/user/unlink": { method: "post" },
                "/v2/user/me": {
                  method: "get",
                  data: { optional: o.extend({ property_keys: o.isArray }, c) },
                },
                "/v1/user/logout": { method: "post", data: {} },
                "/v1/user/update_profile": {
                  method: "post",
                  data: { required: { properties: o.isObject } },
                },
                "/v2/user/scopes": {
                  method: "get",
                  data: { optional: { scopes: o.isArray } },
                },
                "/v2/user/revoke/scopes": {
                  method: "post",
                  data: { required: { scopes: o.isArray } },
                },
                "/v1/api/talk/profile": {
                  method: "get",
                  data: { optional: c, after: u },
                },
                "/v2/api/talk/memo/send": {
                  method: "post",
                  data: {
                    required: { template_id: o.isNumber },
                    optional: { template_args: o.isObject },
                  },
                },
                "/v2/api/talk/memo/scrap/send": {
                  method: "post",
                  data: {
                    required: { request_url: o.isString },
                    optional: {
                      template_id: o.isNumber,
                      template_args: o.isObject,
                    },
                  },
                },
                "/v2/api/talk/memo/default/send": {
                  method: "post",
                  data: {
                    required: {
                      template_object: function (e) {
                        return o.isObject(e) && i(e);
                      },
                    },
                  },
                },
                "/v1/api/story/profile": {
                  method: "get",
                  data: { optional: c },
                },
                "/v1/api/story/isstoryuser": { method: "get" },
                "/v1/api/story/mystory": {
                  method: "get",
                  data: { required: { id: o.isString } },
                },
                "/v1/api/story/mystories": {
                  method: "get",
                  data: { optional: { last_id: o.isString } },
                },
                "/v1/api/story/linkinfo": {
                  method: "get",
                  data: { required: { url: o.isString } },
                },
                "/v1/api/story/post/note": {
                  method: "post",
                  data: { required: { content: r }, optional: s },
                },
                "/v1/api/story/post/photo": {
                  method: "post",
                  data: {
                    required: {
                      image_url_list: function (e) {
                        return (
                          !!o.isArray(e) &&
                          o.every(e, function (e) {
                            if (!o.isString(e)) return !1;
                            if (o.isURL(e))
                              throw new _k.KakaoError(
                                "url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'."
                              );
                            return !0;
                          })
                        );
                      },
                    },
                    optional: o.extend({ content: r }, s),
                  },
                },
                "/v1/api/story/post/link": {
                  method: "post",
                  data: {
                    required: { link_info: o.isObject },
                    optional: o.extend({ content: r }, s),
                  },
                },
                "/v1/api/story/upload/multi": { method: "post", data: {} },
                "/v1/api/story/delete/mystory": {
                  method: "delete",
                  data: { required: { id: o.isString } },
                },
                "/v1/emoticon/my_items": {
                  method: "get",
                  data: {},
                  authType: a.appKey,
                },
                "/v1/emoticon/item_resources": {
                  method: "get",
                  data: { required: { id: o.isString } },
                  authType: a.appKey,
                },
                "/v2/emoticon/items": { method: "get", authType: a.tokenOrKey },
                "/v2/emoticon/item": {
                  method: "get",
                  data: {
                    required: { id: o.passesOneOf([o.isNumber, o.isString]) },
                  },
                  authType: a.tokenOrKey,
                },
                "/v2/emoticon/item_resources": {
                  method: "get",
                  authType: a.tokenOrKey,
                },
                "/v2/emoticon/item_resource": {
                  method: "get",
                  data: {
                    required: { id: o.passesOneOf([o.isNumber, o.isString]) },
                  },
                  authType: a.tokenOrKey,
                },
                "/v2/api/kakaolink/talk/template/validate": {
                  method: "get",
                  data: {
                    required: { link_ver: o.isString, template_id: o.isNumber },
                    optional: { template_args: o.isObject },
                  },
                  authType: a.appKey,
                },
                "/v2/api/kakaolink/talk/template/scrap": {
                  method: "get",
                  data: {
                    required: { link_ver: o.isString, request_url: o.isString },
                    optional: {
                      template_id: o.isNumber,
                      template_args: o.isObject,
                    },
                  },
                  authType: a.appKey,
                },
                "/v2/api/kakaolink/talk/template/default": {
                  method: "get",
                  data: {
                    required: {
                      link_ver: o.isString,
                      template_object: o.isObject,
                    },
                  },
                  authType: a.appKey,
                },
                "/v1/user/access_token_info": { method: "get", data: {} },
                "/v2/api/talk/message/image/upload": {
                  method: "post",
                  data: { required: { file: o.isObject } },
                  authType: a.appKey,
                },
                "/v2/api/talk/message/image/delete": {
                  method: "delete",
                  data: { required: { image_url: o.isString } },
                  authType: a.appKey,
                },
                "/v2/api/talk/message/image/scrap": {
                  method: "post",
                  data: { required: { image_url: o.isString } },
                  authType: a.appKey,
                },
                "/v1/vision/face/detect": {
                  method: "post",
                  data: {
                    optional: {
                      file: o.isObject,
                      image_url: o.isString,
                      threshold: o.isNumber,
                    },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/product/detect": {
                  method: "post",
                  data: {
                    optional: {
                      file: o.isObject,
                      image_url: o.isString,
                      threshold: o.isNumber,
                    },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/thumbnail/crop": {
                  method: "post",
                  data: {
                    required: { width: o.isInteger, height: o.isInteger },
                    optional: { file: o.isObject, image_url: o.isString },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/thumbnail/detect": {
                  method: "post",
                  data: {
                    required: { width: o.isInteger, height: o.isInteger },
                    optional: { file: o.isObject, image_url: o.isString },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/multitag/generate": {
                  method: "post",
                  data: {
                    optional: { file: o.isObject, image_url: o.isString },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/adult/detect": {
                  method: "post",
                  data: {
                    optional: { file: o.isObject, image_url: o.isString },
                  },
                  authType: a.appKey,
                },
                "/v1/vision/text/detect": {
                  method: "post",
                  data: { optional: { file: o.isObject } },
                  authType: a.appKey,
                },
                "/v1/vision/text/recognize": {
                  method: "post",
                  data: {
                    optional: {
                      file: o.isObject,
                      boxes: o.passesOneOf([o.isString, o.isArray]),
                    },
                  },
                  authType: a.appKey,
                },
                "/v1/translation/translate": {
                  method: "post",
                  data: {
                    required: {
                      query: o.isString,
                      src_lang: o.isString,
                      target_lang: o.isString,
                    },
                  },
                  authType: a.appKey,
                },
                "/v1/user/service/terms": { method: "get" },
                "/v1/user/shipping_address": {
                  method: "get",
                  data: {
                    optional: {
                      address_id: o.isNumber,
                      from_updated_at: o.isNumber,
                      page_size: o.isNumber,
                    },
                  },
                },
                "/v1/api/talk/plusfriends": {
                  method: "get",
                  data: { optional: { plus_friend_public_ids: o.isArray } },
                },
                "/v1/api/talk/channels": {
                  method: "get",
                  data: { optional: { channel_public_ids: o.isArray } },
                },
                "/v1/friends": {
                  method: "get",
                  data: {
                    optional: o.extend(
                      {
                        offset: o.isNumber,
                        limit: o.isNumber,
                        order: o.isString,
                        friend_order: o.isString,
                      },
                      c
                    ),
                    after: u,
                  },
                },
                "/v1/api/talk/friends": {
                  method: "get",
                  data: {
                    optional: o.extend(
                      {
                        offset: o.isNumber,
                        limit: o.isNumber,
                        order: o.isString,
                      },
                      c
                    ),
                    after: u,
                  },
                },
                "/v1/api/talk/friends/message/send": {
                  method: "post",
                  data: {
                    required: {
                      template_id: o.isNumber,
                      receiver_uuids: o.isArray,
                      receiver_id_type: o.isString,
                    },
                    optional: { template_args: o.isObject },
                    defaults: function () {
                      return { receiver_id_type: "uuid" };
                    },
                  },
                },
                "/v1/api/talk/friends/message/scrap/send": {
                  method: "post",
                  data: {
                    required: {
                      request_url: o.isString,
                      receiver_uuids: o.isArray,
                      receiver_id_type: o.isString,
                    },
                    optional: {
                      template_id: o.isNumber,
                      template_args: o.isObject,
                    },
                    defaults: function () {
                      return { receiver_id_type: "uuid" };
                    },
                  },
                },
                "/v1/api/talk/friends/message/default/send": {
                  method: "post",
                  data: {
                    required: {
                      template_object: function (e) {
                        return o.isObject(e) && i(e);
                      },
                      receiver_uuids: o.isArray,
                      receiver_id_type: o.isString,
                    },
                    defaults: function () {
                      return { receiver_id_type: "uuid" };
                    },
                  },
                },
              },
            }));
        },
        { "../util": 43, "./authType": 3 },
      ],
      7: [
        function (e, t, n) {
          function r(e, t) {
            var n,
              r = e.url,
              i = e.method,
              o = e.data,
              a = new XMLHttpRequest();
            "undefined" != typeof a.withCredentials
              ? (a.open(i, r),
                a.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded"
                ),
                (a.onreadystatechange = function () {
                  a.readyState === XMLHttpRequest.DONE &&
                    200 === a.status &&
                    t(a);
                }),
                a.send(o))
              : ((n = new XDomainRequest()).open(i.toLowerCase(), r),
                (n.onload = function () {
                  t({
                    status: n.responseText ? 200 : "error",
                    response: n.responseText,
                  });
                }),
                setTimeout(function () {
                  n.send(o);
                }, 0));
          }
          t.exports = {
            checkAuthorize: function (e, t) {
              r({ method: "GET", url: e }, t);
            },
          };
        },
        {},
      ],
      8: [
        function (e, t, n) {
          var r, o;
          t.exports =
            ((r = e("../util")),
            (o = e("../common")),
            {
              openLoginPopup: function (e) {
                var t, n, r, i;
                return o.windowOpen(
                  e,
                  "_blank",
                  ((t = window.screenLeft
                    ? window.screenLeft
                    : window.screenX
                    ? window.screenX
                    : 0),
                  (n = window.screenTop
                    ? window.screenTop
                    : window.screenY
                    ? window.screenY
                    : 0),
                  (r = screen.width / 2 - 240 + t),
                  (i = screen.height / 2 - 350 + n),
                  [
                    "width=480",
                    "height=700",
                    "left=" + r,
                    "top=" + i,
                    "scrollbars=yes",
                    "resizable=1",
                  ].join(","))
                );
              },
              makeAuthUrl: function (e) {
                return o.URL.authorize + "?" + r.buildQueryString(e);
              },
              makeAuthParams: function (e) {
                var t = { client_id: o.RUNTIME.appKey };
                return (
                  e.approvalType && (t.approval_type = e.approvalType),
                  e.scope && (t.scope = e.scope),
                  e.state && (t.state = e.state),
                  t
                );
              },
              makeAuthExtraParams: function (e) {
                var t = {};
                return (
                  e.plusFriendPublicId &&
                    (t["extra.plus_friend_public_id"] = e.plusFriendPublicId),
                  e.channelPublicId &&
                    (t.channel_public_id = e.channelPublicId),
                  e.serviceTerms && (t["extra.service_terms"] = e.serviceTerms),
                  e.autoLogin && (t.prompt = "none"),
                  e.reauthenticate && (t.prompt = "login"),
                  e.prompts && (t.prompt = e.prompts),
                  e.deviceType && (t.device_type = e.deviceType),
                  t
                );
              },
              runAuthCallback: function (e, t) {
                o.logDebug(t), t.error ? e.fail(t) : e.success(t), e.always(t);
              },
            });
        },
        { "../common": 39, "../util": 43 },
      ],
      9: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./oauth"), e("./login")(o), e("./secret")]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./login": 11, "./oauth": 12, "./secret": 15 },
      ],
      10: [
        function (e, t, n) {
          var p, d, f, m, h, g;
          t.exports =
            ((d = e("../common")),
            (f = "_blank"),
            (m = "width=380, height=520, scrollbars=yes"),
            (h = /Version\/4.0/i.test(d.UA.ua) || /; wv\)/i.test(d.UA.ua)),
            (g = /naver\(inapp|fb_iab|daumapps|instagram|ebay/g.test(d.UA.ua)),
            {
              isSupport: function () {
                if (d.UA.os.ios) {
                  var e = /safari|FxiOS|CriOS/.test(d.UA.ua),
                    t = !/KAKAOTALK/i.test(d.UA.ua);
                  return e || t;
                }
                return (
                  !!d.UA.os.android &&
                  d.UA.browser.chrome &&
                  !/opr\//i.test(d.UA.ua) &&
                  30 <= d.UA.browser.version.major &&
                  (!h || (h && g))
                );
              },
              login: function (e, t, n, r) {
                var i, o, a, s, c, u, l;
                if (this.isSupport())
                  return (
                    d.UA.os.ios
                      ? ((u = e),
                        ((l = n).state = u),
                        (i = [
                          d.URL.talkLoginScheme,
                          "?",
                          "client_id=" + d.RUNTIME.appKey,
                          "&",
                          "redirect_uri=" + d.URL.redirectUri,
                          "&",
                          "params=" + encodeURIComponent(JSON.stringify(l)),
                        ].join("")),
                        r
                          ? (location.href =
                              d.URL.universalKakaoLink +
                              encodeURIComponent(i) +
                              "&web=" +
                              encodeURIComponent(t))
                          : (p = d.windowOpen(
                              d.URL.universalKakaoLink +
                                encodeURIComponent(i) +
                                "&web=" +
                                encodeURIComponent(t),
                              f,
                              m
                            )))
                      : d.UA.os.android &&
                        ((a = e),
                        (s = t),
                        (c = n),
                        (o = [
                          "intent:#Intent",
                          "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY",
                          "launchFlags=0x08880000",
                          "S.com.kakao.sdk.talk.appKey=" + d.RUNTIME.appKey,
                          "S.com.kakao.sdk.talk.redirectUri=" +
                            d.URL.talkLoginRedirectUri,
                          "S.com.kakao.sdk.talk.state=" + a,
                          "S.com.kakao.sdk.talk.kaHeader=" + d.KAKAO_AGENT,
                          "S.com.kakao.sdk.talk.extraparams=" +
                            encodeURIComponent(JSON.stringify(c)),
                          "S.browser_fallback_url=" + encodeURIComponent(s),
                          "end;",
                        ].join(";")),
                        r
                          ? (location.href = o)
                          : 40 < d.UA.browser.version.major && (!h || (h && g))
                          ? (p = d.windowOpen(o, f, m))
                          : (p = d.windowOpen("", f, m)) &&
                            (p.addEventListener("unload", function () {
                              setTimeout(function () {
                                p && p.location && (p.location.href = t);
                              }, 10);
                            }),
                            (p.location.href = o))),
                    p
                  );
              },
              hasWebLoginWindow: function () {
                try {
                  return p && p.location && "about:blank" != p.location.href
                    ? !d.UA.os.android || !!p.location.href
                    : !1;
                } catch (e) {
                  return !0;
                }
              },
            });
        },
        { "../common": 39 },
      ],
      11: [
        function (t, e, n) {
          e.exports = function (s) {
            var c = t("../util"),
              u = t("../common"),
              i = t("../eventObserver"),
              l = t("../webviewchecker")(),
              p = t("../browserProxy.js").getOrigin(),
              o = t("../poller")(1e3, 600),
              a = t("./rules"),
              d = t("./common"),
              f = t("./proxy"),
              n = t("./secret"),
              m = t("./kakaotalk"),
              h = "kakaojs";
            function g(e) {
              var t,
                n,
                o,
                a,
                r = c.getRandomString() + c.getRandomString();
              m.isSupport() && e.throughTalk
                ? _(e, r)
                : e.redirectUri
                ? (location.href = x(e))
                : l.isNewerAndroidKakaoTalkWebView()
                ? ((t = c.extend(
                    {},
                    d.makeAuthParams(e),
                    d.makeAuthExtraParams(e),
                    {
                      redirect_uri: u.URL.talkLoginRedirectUri,
                      response_type: "code",
                      state: r,
                      ka: u.KAKAO_AGENT,
                      origin: p,
                    }
                  )),
                  _(e, r, d.makeAuthUrl(t)))
                : ((u.UA.browser.msie &&
                    parseInt(u.UA.browser.version.major) <= 9) ||
                    ((o = e),
                    (a = function a(e) {
                      var t,
                        n,
                        r = e.origin,
                        i = e.data;
                      /\.kakao\.com$/.test(r) &&
                        i &&
                        "string" == typeof i &&
                        "postResponse" === (t = i.split(" "))[1] &&
                        ((n = JSON.parse(decodeURIComponent(t[2]))),
                        T(o, n),
                        c.removeEvent(window, "message", a));
                    }),
                    c.addEvent(window, "message", a),
                    s.push(function () {
                      c.removeEvent(window, "message", a);
                    })),
                  (n = A(e, r)),
                  d.openLoginPopup(n)),
                i.dispatch("LOGIN_START");
            }
            var y = null,
              v = function v() {
                y && y.close && y.close(), (y = null);
              },
              k = null,
              b = null;
            function _(t, e, n) {
              k ||
                ((k = f.getProxy({}, function (e) {
                  if (
                    ("error" !== e.status ||
                      ("500" !== e.error_code &&
                        "600" !== e.error_code &&
                        "700" !== e.error_code) ||
                      (o.stop(),
                      "700" === e.error_code &&
                        (location.href = u.URL.authDomain + "/error/network"),
                      T(t, {
                        error: e.error,
                        error_description: e.error_description,
                      })),
                    e.status)
                  )
                    if ("ok" === e.status) {
                      if ((o.stop(), b === e.code)) return;
                      (b = e.code),
                        k.getAccessToken(
                          e.code,
                          u.RUNTIME.appKey,
                          u.UA.os.ios && !n
                            ? u.URL.redirectUri
                            : u.URL.talkLoginRedirectUri,
                          t.approvalType
                        ),
                        v();
                    } else
                      u.UA.os.ios && "about:blank" === y.location.href && v();
                  else T(t, e);
                })),
                s.push(function () {
                  k.destroy(), (k = null);
                }));
              var r,
                i = "";
              n
                ? t.redirectUri
                  ? (location.href = n)
                  : d.openLoginPopup(n)
                : ((i = t.redirectUri
                    ? x(t)
                    : A(
                        t,
                        e,
                        u.UA.os.ios
                          ? u.URL.redirectUri
                          : u.URL.talkLoginRedirectUri
                      )),
                  (r = c.extend(
                    {},
                    d.makeAuthParams(t),
                    d.makeAuthExtraParams(t)
                  )),
                  setTimeout(function () {
                    y = m.login(e, i, r, t.redirectUri);
                  }, 500)),
                o.start(
                  function () {
                    e && k.getCode(e, u.RUNTIME.appKey, u.KAKAO_AGENT);
                  },
                  function () {
                    T(t, {
                      error: "timeout",
                      description:
                        "Account login timed out. Please login again.",
                      error_description:
                        "Account login timed out. Please login again.",
                    }),
                      t.redirectUri ? (location.href = i) : d.openLoginPopup(i);
                  }
                );
            }
            var w = null,
              S = {};
            function A(e, t, n) {
              w ||
                ((w = f.getProxy({}, function (e) {
                  T(O(e, S), e);
                })),
                s.push(function () {
                  w.destroy(), (w = null);
                }));
              var r = (S[t] = e).redirectUri ? e.redirectUri : n || h,
                i = c.extend(
                  {},
                  d.makeAuthParams(e),
                  d.makeAuthExtraParams(e),
                  {
                    redirect_uri: r,
                    response_type: "code",
                    state: t,
                    proxy: "easyXDM_Kakao_" + w.channel + "_provider",
                    ka: u.KAKAO_AGENT,
                    origin: p,
                  }
                );
              return d.makeAuthUrl(i);
            }
            function x(e) {
              var t = c.extend(
                {},
                d.makeAuthParams(e),
                d.makeAuthExtraParams(e),
                {
                  redirect_uri: e.redirectUri,
                  response_type: "code",
                  ka: u.KAKAO_AGENT,
                  origin: p,
                }
              );
              return d.makeAuthUrl(t);
            }
            function O(e, t) {
              if (!c.has(t, e.stateToken))
                throw new u.KakaoError("security error: #CST2");
              var n = t[e.stateToken];
              return delete t[e.stateToken], delete e.stateToken, n;
            }
            function T(e, t) {
              t.error
                ? "access_denied" !== t.error && n.setAccessToken(null)
                : (n.setAccessToken(t.access_token, e.persistAccessToken),
                  i.dispatch("LOGIN")),
                d.runAuthCallback(e, t);
            }
            var e = null;
            var r = null,
              I = {};
            return {
              createLoginButton: function (e) {
                e = u.processRules(
                  e,
                  a.createLoginButton,
                  "Auth.createLoginButton"
                );
                var t = c.getElement(e.container);
                if (!t)
                  throw new u.KakaoError(
                    "container is required for Kakao login button: pass in element or id"
                  );
                var n =
                    "medium" === e.size
                      ? "02"
                      : "small" === e.size
                      ? "03"
                      : "01",
                  r =
                    u.URL.authDomain +
                    "/public/widget/login/" +
                    e.lang +
                    "/" +
                    e.lang +
                    "_" +
                    n +
                    "_medium",
                  i = r + ".png",
                  o = r + "_press.png";
                (t.innerHTML =
                  '<img\n      id="kakao-login-btn"\n      src=' +
                  i +
                  "\n      onmouseover=this.src='" +
                  o +
                  "'\n      onmouseout=this.src='" +
                  i +
                  '\'\n      style="cursor: pointer"\n    />'),
                  (t.onclick = function () {
                    g(e);
                  });
              },
              login: function (e) {
                g((e = u.processRules(e, a.login, "Auth.login")));
              },
              loginForm: function (e) {
                e = u.processRules(e, a.login, "Auth.loginForm");
                var t,
                  n = c.getRandomString() + c.getRandomString(),
                  r = "&prompt=login";
                e.redirectUri
                  ? (location.href = x(e) + r)
                  : ((t = A(e, n) + r), d.openLoginPopup(t));
              },
              autoLogin: function (e) {
                var t, n;
                (e = u.processRules(e, a.autoLogin, "Auth.autoLogin")),
                  l.isIOSKakaoTalkWebView() || l.isAndroidKakaoTalkWebView()
                    ? ((t = c.getRandomString() + c.getRandomString()),
                      (n = c.extend({}, d.makeAuthParams(e), {
                        redirect_uri: u.URL.talkLoginRedirectUri,
                        response_type: "code",
                        state: t,
                        ka: u.KAKAO_AGENT,
                        origin: p,
                        prompt: "none",
                      })),
                      _(e, t, d.makeAuthUrl(n)))
                    : d.runAuthCallback(e, {
                        error: "auto_login",
                        error_description:
                          "Auto-login is only supported by KakaoTalk InAppBrowser",
                        error_code: "400",
                        status: "error",
                      }),
                  i.dispatch("LOGIN_START");
              },
              logout: function (e) {
                (e = e || c.emptyFunc),
                  u.validate(e, c.isFunction, "Auth.logout"),
                  Kakao.API.request({
                    url: "/v1/user/logout",
                    always: function () {
                      n.setAccessToken(null), i.dispatch("LOGOUT"), e(!0);
                    },
                  });
              },
              issueAccessToken: function (t) {
                (t = u.processRules(
                  t,
                  a.issueAccessToken,
                  "Auth.issueAccessToken"
                )),
                  e ||
                    ((e = f.getProxy({}, function (e) {
                      T(t, e);
                    })),
                    s.push(function () {
                      e.destroy(), (e = null);
                    })),
                  e.getAccessToken(t.code, u.RUNTIME.appKey, t.redirectUri);
              },
              selectStoryChannel: function (e) {
                (e = u.processRules(
                  e,
                  a.selectStoryChannel,
                  "Auth.selectStoryChannel"
                )),
                  r ||
                    ((r = f.getProxy({}, function (e) {
                      var t = O(e, I);
                      d.runAuthCallback(t, e);
                    })),
                    s.push(function () {
                      r.destroy(), (r = null);
                    }));
                var t = c.getRandomString();
                I[t] = e;
                var n = c.extend({}, d.makeAuthParams(e), {
                  state: t,
                  proxy: "easyXDM_Kakao_" + r.channel + "_provider",
                  token: e.extendedToken || "",
                });
                d.openLoginPopup(
                  u.URL.storySelectChannel + "?" + c.buildQueryString(n)
                );
              },
            };
          };
        },
        {
          "../browserProxy.js": 38,
          "../common": 39,
          "../eventObserver": 40,
          "../poller": 42,
          "../util": 43,
          "../webviewchecker": 44,
          "./common": 8,
          "./kakaotalk": 10,
          "./proxy": 13,
          "./rules": 14,
          "./secret": 15,
        },
      ],
      12: [
        function (e, t, n) {
          function _(e, t) {
            e.state && (t.state = e.state),
              e.redirectUri
                ? (location.href = e.redirectUri + "?" + w.buildQueryString(t))
                : T.runAuthCallback(e, t);
          }
          var w, S, A, x, O, T, I;
          t.exports =
            ((w = e("../util")),
            (S = e("../common")),
            (A = e("../eventObserver")),
            (x = e("../poller")(1e3, 600)),
            (O = e("./rules")),
            (T = e("./common")),
            (I = e("./ajax")),
            {
              authorize: function (t) {
                if (
                  (t = S.processRules(t, O.authorize, "Auth.authorize"))
                    .autoLogin &&
                  !/KAKAOTALK/i.test(S.UA.ua)
                )
                  return (
                    _(t, {
                      error: "auto_login",
                      error_description: "NOT_SUPPORTED_BROWSER",
                    }),
                    !1
                  );
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l,
                  p,
                  d,
                  f = (
                    Math.random().toString(36).slice(2) +
                    S.RUNTIME.appKey +
                    Date.now().toString(36)
                  ).slice(0, 60),
                  m = w.extend(
                    {},
                    T.makeAuthParams(t),
                    T.makeAuthExtraParams(t),
                    {
                      redirect_uri: t.redirectUri || S.URL.redirectUri,
                      response_type: "code",
                      auth_tran_id: f,
                    }
                  ),
                  h = w.extend({}, m, {
                    ka: S.KAKAO_AGENT,
                    is_popup: t.isPopup,
                  }),
                  g =
                    ((e = t),
                    (n =
                      !(!S.UA.os.ios && !S.UA.os.android) &&
                      !/KAKAOTALK/i.test(S.UA.ua)),
                    (r = !e.reauthenticate && "login" !== e.prompts),
                    n && r && e.throughTalk && !e.autoLogin),
                  y =
                    t.throughSyncplugin &&
                    /KAKAOTALK/i.test(S.UA.ua) &&
                    /ch-home/i.test(S.UA.ua),
                  v = T.makeAuthUrl(h),
                  k = g
                    ? ((i = t),
                      (o = m),
                      (a = v),
                      (s = w.extend({}, o, { is_popup: !0 })),
                      (c = function c() {
                        var e = [
                          "intent:#Intent",
                          "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY",
                          "launchFlags=0x08880000",
                          "S.com.kakao.sdk.talk.appKey=" + S.RUNTIME.appKey,
                          "S.com.kakao.sdk.talk.redirectUri=" + s.redirect_uri,
                          "S.com.kakao.sdk.talk.kaHeader=" + S.KAKAO_AGENT,
                          "S.com.kakao.sdk.talk.extraparams=" +
                            encodeURIComponent(JSON.stringify(s)),
                        ];
                        return (
                          i.state &&
                            e.push("S.com.kakao.sdk.talk.state=" + i.state),
                          e
                            .concat([
                              "S.browser_fallback_url=" + encodeURIComponent(a),
                              "end;",
                            ])
                            .join(";")
                        );
                      }),
                      (u = function u() {
                        var e = T.makeAuthUrl(s),
                          t = i.isPopup ? e : a,
                          n = e + "&ka=" + encodeURIComponent(S.KAKAO_AGENT),
                          r =
                            S.URL.talkInappScheme +
                            "?url=" +
                            encodeURIComponent(n);
                        return (
                          "" +
                          S.URL.universalKakaoLink +
                          encodeURIComponent(r) +
                          "&web=" +
                          encodeURIComponent(t)
                        );
                      }),
                      (S.UA.os.android ? c : u)())
                    : v,
                  b = null;
                y
                  ? ((l = m),
                    (p = w.extend({}, l, {
                      ka: S.KAKAO_AGENT,
                      is_popup: !0,
                      approval_window_type: "v4_bizplugin",
                    })),
                    (d = encodeURIComponent(w.buildQueryString(p))),
                    (location.href =
                      S.URL.talkSyncpluginScheme + "&query=" + d))
                  : t.isPopup
                  ? (b = T.openLoginPopup(k))
                  : (location.href = k),
                  (g || y || t.isPopup) &&
                    x.start(
                      function () {
                        var e;
                        f &&
                          ((e = {
                            client_id: S.RUNTIME.appKey,
                            auth_tran_id: f,
                            ka: S.KAKAO_AGENT,
                          }),
                          I.checkAuthorize(
                            S.URL.authDomain +
                              "/apiweb/code.json?" +
                              w.buildQueryString(e),
                            function (e) {
                              !(function (e, t) {
                                if (200 === t.status && t.response) {
                                  var n = JSON.parse(t.response);
                                  if ("ok" === n.status && n.code)
                                    return _(e, { code: n.code }), !0;
                                  if (
                                    "error" === n.status &&
                                    ("500" === n.error_code ||
                                      "600" === n.error_code ||
                                      "700" === n.error_code)
                                  )
                                    return (
                                      _(e, {
                                        error: n.error,
                                        error_description: n.error_description,
                                      }),
                                      "700" === n.error_code &&
                                        (location.href =
                                          S.URL.authDomain + "/error/network"),
                                      !0
                                    );
                                }
                                return !1;
                              })(t, e) || (x.stop(), b && b.close && b.close()),
                                !g && b && b.closed && x.stop();
                            }
                          ));
                      },
                      function () {
                        _(t, {
                          error: "timeout",
                          error_description: "LOGIN_TIMEOUT",
                        });
                      }
                    ),
                  A.dispatch("LOGIN_START");
              },
            });
        },
        {
          "../common": 39,
          "../eventObserver": 40,
          "../poller": 42,
          "../util": 43,
          "./ajax": 7,
          "./common": 8,
          "./rules": 14,
        },
      ],
      13: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../util")),
            (i = e("../common")),
            (o = e("../../vendor/easyXDM")),
            {
              getProxy: function (t, n) {
                return (
                  r.extend(t, {
                    remote: i.URL.loginWidget,
                    channel: r.getRandomString(),
                  }),
                  i.guardCreateEasyXDM(function () {
                    var e = new o.Rpc(t, {
                      local: {
                        postResponse: n,
                        getKakaoAgent: function () {
                          return i.KAKAO_AGENT;
                        },
                      },
                      remote: {
                        getCode: {},
                        getAccessToken: {},
                        setClient: {},
                        setStateToken: {},
                        deleteAuthCookie: {},
                      },
                    });
                    return (e.channel = t.channel), e;
                  })
                );
              },
            });
        },
        { "../../vendor/easyXDM": 46, "../common": 39, "../util": 43 },
      ],
      14: [
        function (e, t, n) {
          var r, i, o, a;
          t.exports =
            ((r = e("../util")),
            (i = {
              success: r.emptyFunc,
              fail: r.emptyFunc,
              always: r.emptyFunc,
            }),
            (o = r.extend(
              {
                throughTalk: !0,
                persistAccessToken: !0,
                persistRefreshToken: !1,
              },
              i
            )),
            (a = {
              success: r.isFunction,
              fail: r.isFunction,
              always: r.isFunction,
              persistAccessToken: r.isBoolean,
              persistRefreshToken: r.isBoolean,
              approvalType: r.isOneOf(["project"]),
              scope: r.isString,
              throughTalk: r.isBoolean,
              plusFriendPublicId: r.isString,
              channelPublicId: r.isString,
              serviceTerms: r.isString,
              redirectUri: r.isString,
              state: r.isString,
              deviceType: r.isOneOf(["watch", "tv"]),
            }),
            {
              createLoginButton: {
                required: {
                  container: r.passesOneOf([r.isElement, r.isString]),
                },
                optional: r.extend(
                  {
                    lang: r.isOneOf(["en", "kr"]),
                    size: r.isOneOf(["small", "medium", "large"]),
                  },
                  a
                ),
                defaults: r.extend({ lang: "kr", size: "medium" }, o),
              },
              login: { optional: a, defaults: o },
              authorize: {
                optional: {
                  redirectUri: r.isString,
                  approvalType: r.isOneOf(["project"]),
                  scope: r.isString,
                  throughTalk: r.isBoolean,
                  plusFriendPublicId: r.isString,
                  channelPublicId: r.isString,
                  serviceTerms: r.isString,
                  isPopup: r.isBoolean,
                  state: r.isString,
                  autoLogin: r.isBoolean,
                  deviceType: r.isOneOf(["watch", "tv"]),
                  prompts: r.isOneOf(["login", "none"]),
                  reauthenticate: r.isBoolean,
                  throughSyncplugin: r.isBoolean,
                  success: r.isFunction,
                  fail: r.isFunction,
                  always: r.isFunction,
                },
                defaults: {
                  throughTalk: !0,
                  isPopup: !1,
                  reauthenticate: !1,
                  throughSyncplugin: !0,
                  success: r.emptyFunc,
                  fail: r.emptyFunc,
                  always: r.emptyFunc,
                },
              },
              autoLogin: {
                optional: {
                  success: r.isFunction,
                  fail: r.isFunction,
                  always: r.isFunction,
                },
                defaults: i,
              },
              issueAccessToken: {
                required: { code: r.isString, redirectUri: r.isString },
                optional: {
                  success: r.isFunction,
                  fail: r.isFunction,
                  always: r.isFunction,
                },
                defaults: i,
              },
              selectStoryChannel: {
                optional: {
                  extendedToken: r.isString,
                  success: r.isFunction,
                  fail: r.isFunction,
                  always: r.isFunction,
                },
                defaults: i,
              },
            });
        },
        { "../util": 43 },
      ],
      15: [
        function (e, t, n) {
          function o() {
            return c.RUNTIME.appKey;
          }
          function r() {
            var e, t;
            return (
              c.RUNTIME.accessToken ||
                (c.RUNTIME.accessToken =
                  ((e = a()),
                  (t = s.localStorage.getItem(e))
                    ? (function (e, t) {
                        return u.AES.decrypt(e, t).toString(u.enc.Utf8);
                      })(t, o())
                    : null)),
              c.RUNTIME.accessToken
            );
          }
          function a() {
            var e;
            return (
              i.accessTokenKey ||
                (i.accessTokenKey =
                  "kakao_" + ((e = "kat" + o()), u.MD5(e).toString())),
              i.accessTokenKey
            );
          }
          var s, c, u, i;
          t.exports =
            ((s = e("../util")),
            (c = e("../common")),
            (u = e("../../vendor/CryptoJS")),
            (i = {}),
            {
              getAppKey: o,
              getAccessToken: r,
              setAccessToken: function (e) {
                var t,
                  n,
                  r,
                  i =
                    !(1 < arguments.length && arguments[1] !== undefined) ||
                    arguments[1];
                null === (c.RUNTIME.accessToken = e) || !1 === i
                  ? ((r = a()), s.localStorage.removeItem(r))
                  : ((t = a()),
                    (n = (function (e, t) {
                      return u.AES.encrypt(e, t).toString();
                    })(e, o())),
                    s.localStorage.setItem(t, n));
              },
              getRefreshToken: function () {
                return (
                  console.log("unsupported operation: Auth.getRefreshToken()"),
                  ""
                );
              },
              setRefreshToken: function (e) {
                console.log("unsupported operation: Auth.setRefreshToken()");
              },
              getStatusInfo: function (t) {
                c.validate(t, s.isFunction, "Auth.getStatusInfo"),
                  r()
                    ? Kakao.API.request({
                        url: "/v2/user/me",
                        success: function (e) {
                          t({ status: "connected", user: e });
                        },
                        fail: function () {
                          t({ status: "not_connected" });
                        },
                      })
                    : t({ status: "not_connected" });
              },
            });
        },
        { "../../vendor/CryptoJS": 45, "../common": 39, "../util": 43 },
      ],
      16: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../util")),
            (i = e("../common")),
            (o = e("../browserProxy").getOrigin()),
            {
              createAnchorImage: function (e, t, n) {
                var r = document.createElement("a");
                r.setAttribute("href", "#");
                var i = document.createElement("img");
                return (
                  i.setAttribute("src", t),
                  i.setAttribute("title", n),
                  i.setAttribute("alt", n),
                  e.supportMultipleDensities &&
                    i.setAttribute(
                      "srcset",
                      [
                        t.replace(".png", "_2X.png 2x"),
                        t.replace(".png", "_3X.png 3x"),
                      ].join(", ")
                    ),
                  r.appendChild(i),
                  r
                );
              },
              makeChannelParams: function (e) {
                return r.buildQueryString({
                  api_ver: e,
                  kakao_agent: i.KAKAO_AGENT,
                  app_key: i.RUNTIME.appKey,
                  referer: o + location.pathname + location.search,
                });
              },
            });
        },
        { "../browserProxy": 38, "../common": 39, "../util": 43 },
      ],
      17: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./request")(o)]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./request": 18 },
      ],
      18: [
        function (e, t, n) {
          t.exports = function (s) {
            var c = e("../util"),
              u = e("../common"),
              l = e("./rules"),
              p = e("./common"),
              n = "1.1",
              r = "channel_add_social_plugin",
              i = "channel_chat_social_plugin",
              o = "width=350, height=510";
            function a(e) {
              var t = u.URL.channel + "/" + e.channelPublicId + "/friend";
              Kakao.isInitialized() && (t += "?" + p.makeChannelParams(n)),
                u.windowOpen(t, r, o);
            }
            function d(e) {
              var t = u.URL.channel + "/" + e.channelPublicId + "/chat";
              Kakao.isInitialized() && (t += "?" + p.makeChannelParams(n)),
                u.windowOpen(t, i, o);
            }
            return {
              createAddChannelButton: function (t) {
                var e = c.getElement(t.container);
                if (!e)
                  throw new u.KakaoError(
                    "container is required for Channel.createAddChannelButton: pass in element or id"
                  );
                u.applyAttributes(t, e, {
                  channelPublicId: "data-channel-public-id",
                  size: "data-size",
                  supportMultipleDensities: "data-support-multiple-densities",
                }),
                  (t = u.processRules(
                    t,
                    l.createAddChannelButton,
                    "Channel.createAddChannelButton"
                  ));
                var n,
                  r =
                    ((n = "friendadd_" + t.size + "_yellow_rect.png"),
                    u.URL.channelIcon + "/channel/" + n),
                  i = p.createAnchorImage(t, r, "카카오톡 채널 추가 버튼");
                e.appendChild(i);
                var o = function o(e) {
                  e.preventDefault(), a(t);
                };
                c.addEvent(i, "click", o),
                  s.push(function () {
                    c.removeEvent(i, "click", o), e.removeChild(i);
                  });
              },
              addChannel: function (e) {
                a((e = u.processRules(e, l.addChannel, "Channel.addChannel")));
              },
              createChatButton: function (t) {
                var e = c.getElement(t.container);
                if (!e)
                  throw new u.KakaoError(
                    "container is required for Channel.createChatButton: pass in element or id"
                  );
                u.applyAttributes(t, e, {
                  channelPublicId: "data-channel-public-id",
                  size: "data-size",
                  color: "data-color",
                  shape: "data-shape",
                  title: "data-title",
                  supportMultipleDensities: "data-support-multiple-densities",
                }),
                  (t = u.processRules(
                    t,
                    l.createChatButton,
                    "Channel.createChatButton"
                  ));
                var n,
                  r,
                  i =
                    ((r =
                      (n = t).title +
                      "_" +
                      n.size +
                      "_" +
                      n.color +
                      "_" +
                      n.shape +
                      ".png"),
                    u.URL.channelIcon + "/channel/" + r),
                  o = p.createAnchorImage(t, i, "카카오톡 채널 1:1 채팅 버튼");
                e.appendChild(o);
                var a = function a(e) {
                  e.preventDefault(), d(t);
                };
                c.addEvent(o, "click", a),
                  s.push(function () {
                    c.removeEvent(o, "click", a), e.removeChild(o);
                  });
              },
              chat: function (e) {
                d((e = u.processRules(e, l.chat, "Channel.chat")));
              },
            };
          };
        },
        { "../common": 39, "../util": 43, "./common": 16, "./rules": 19 },
      ],
      19: [
        function (e, t, n) {
          var r, i, o, a, s;
          t.exports =
            ((r = e("../util")),
            (i = ["small", "large"]),
            (o = ["yellow", "mono"]),
            (a = ["pc", "mobile"]),
            (s = ["consult", "question"]),
            {
              createAddChannelButton: {
                required: {
                  container: r.passesOneOf([r.isElement, r.isString]),
                  channelPublicId: r.isString,
                },
                optional: {
                  size: r.isOneOf(i),
                  supportMultipleDensities: r.isBoolean,
                },
                defaults: { size: i[0], supportMultipleDensities: !1 },
              },
              addChannel: { required: { channelPublicId: r.isString } },
              createChatButton: {
                required: {
                  container: r.passesOneOf([r.isElement, r.isString]),
                  channelPublicId: r.isString,
                },
                optional: {
                  size: r.isOneOf(i),
                  color: r.isOneOf(o),
                  shape: r.isOneOf(a),
                  title: r.isOneOf(s),
                  supportMultipleDensities: r.isBoolean,
                },
                defaults: {
                  size: i[0],
                  color: o[0],
                  shape: a[0],
                  title: s[0],
                  supportMultipleDensities: !1,
                },
              },
              chat: { required: { channelPublicId: r.isString } },
            });
        },
        { "../util": 43 },
      ],
      20: [
        function (e, t, n) {
          var r;
          t.exports =
            ((r = e("../util")),
            {
              capitalize: function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
              },
              stringifyLCBA: function (e) {
                return r.isObject(e) ? JSON.stringify(e) : e;
              },
              requestAPI: function (e, t) {
                return Kakao.API.request({ url: e, data: t });
              },
            });
        },
        { "../util": 43 },
      ],
      21: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = e("./rules")),
            (o = e("./common")),
            {
              uploadImage: function (e) {
                return (
                  (e = r.processRules(e, i.uploadImage, "Link.uploadImage")),
                  o.requestAPI("/v2/api/talk/message/image/upload", {
                    file: e.file,
                  })
                );
              },
              deleteImage: function (e) {
                return (
                  (e = r.processRules(e, i.deleteImage, "Link.deleteImage")),
                  o.requestAPI("/v2/api/talk/message/image/delete", {
                    image_url: e.imageUrl,
                  })
                );
              },
              scrapImage: function (e) {
                return (
                  (e = r.processRules(e, i.scrapImage, "Link.scrapImage")),
                  o.requestAPI("/v2/api/talk/message/image/scrap", {
                    image_url: e.imageUrl,
                  })
                );
              },
            });
        },
        { "../common": 39, "./common": 20, "./rules": 26 },
      ],
      22: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./linker")(o), e("./imageAPI")]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./imageAPI": 21, "./linker": 24 },
      ],
      23: [
        function (e, t, n) {
          t.exports = (function () {
            var i = e("../util"),
              r = e("../common"),
              n = e("./common"),
              o = e("./propGenerator"),
              a =
                (r.UA.os.ios,
                function a(e, t) {
                  _classCallCheck(this, a),
                    (this.appkey = r.RUNTIME.appKey),
                    (this.appver = "1.0"),
                    (this.linkver = "4.0"),
                    (this.extras = i.extend({ KA: r.KAKAO_AGENT }, e.extras)),
                    e.serverCallbackArgs &&
                      (this.extras.lcba = n.stringifyLCBA(
                        e.serverCallbackArgs
                      )),
                    (this.template_json = t.template_msg),
                    (this.template_args = t.template_args),
                    (this.template_id = t.template_id);
                });
            var t = function t(e) {
                var r = this;
                _classCallCheck(this, t),
                  (this.link_ver = "4.0"),
                  (this.template_object = {
                    object_type: e.objectType,
                    button_title: e.buttonTitle || "",
                  }),
                  i.each(e, function (e, t) {
                    var n = o.create(e, t, "defaultObject");
                    n && (r.template_object[t] = n);
                  });
              },
              s = { FeedLink: t, CommerceLink: t };
            function c(e) {
              _classCallCheck(this, c);
              var t = _possibleConstructorReturn(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                ),
                n = t.template_object;
              return (
                (n.header_title = e.headerTitle || ""),
                (n.header_link = n.headerLink || {}),
                delete n.headerLink,
                console &&
                  (e.headerImageUrl ||
                    e.headerImageWidth ||
                    e.headerImageHeight) &&
                  console.warn(
                    "KakaoWarning: The parameters (" +
                      [
                        "headerImageUrl",
                        "headerImageWidth",
                        "headerImageHeight",
                      ].join(", ") +
                      ") for header background image are deprecated."
                  ),
                t
              );
            }
            function u(e) {
              _classCallCheck(this, u);
              var t = _possibleConstructorReturn(
                  this,
                  (u.__proto__ || Object.getPrototypeOf(u)).call(this, e)
                ),
                n = t.template_object;
              return (
                (n.address = e.address || ""),
                (n.address_title = e.addressTitle || ""),
                t
              );
            }
            function l(e) {
              _classCallCheck(this, l);
              var t = _possibleConstructorReturn(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).call(this, e)
              );
              return (t.template_object.text = e.text || ""), t;
            }
            (s.ListLink = (_inherits(c, t), c)),
              (s.LocationLink = (_inherits(u, t), u)),
              (s.TextLink = (_inherits(l, t), l));
            var p = function p(e) {
                _classCallCheck(this, p),
                  (this.link_ver = "4.0"),
                  (this.request_url = e.requestUrl),
                  e.templateId && (this.template_id = e.templateId),
                  e.templateArgs && (this.template_args = e.templateArgs);
              },
              d = function d(e) {
                _classCallCheck(this, d),
                  (this.link_ver = "4.0"),
                  (this.template_id = e.templateId),
                  (this.template_args = e.templateArgs);
              };
            return {
              makeKakaoLink: function (e, t) {
                var n = new a(e, t);
                if (1e4 < JSON.stringify(n).length)
                  throw new r.KakaoError(
                    "Failed to send message because it exceeds the message size limit. Please contact the app administrator."
                  );
                return "kakaolink://send?" + i.buildQueryString(n);
              },
              makeDefaultLink: function (e) {
                return new s[n.capitalize(e.objectType) + "Link"](e);
              },
              makeScrapLink: function (e) {
                return new p(e);
              },
              makeCustomLink: function (e) {
                return new d(e);
              },
            };
          })();
        },
        {
          "../common": 39,
          "../util": 43,
          "./common": 20,
          "./propGenerator": 25,
        },
      ],
      24: [
        function (m, e, t) {
          e.exports = function (i) {
            var o = m("../util"),
              s = m("../common"),
              n = m("./rules"),
              r = m("./common"),
              e = m("./linkGenerator"),
              c = m("./webSender"),
              u = m("./talkSender");
            function t(e) {
              if (
                !e.objectType ||
                !o.isOneOf(n.defaultObjectTypes)(e.objectType)
              )
                throw new s.KakaoError(
                  "objectType should be one of (" +
                    n.defaultObjectTypes.join(", ") +
                    ")"
                );
              var t = n["create" + r.capitalize(e.objectType) + "Button"];
              p(
                (e = s.processRules(e, t, "Link.createDefaultButton")),
                "default"
              );
            }
            function a(e) {
              p(
                (e = s.processRules(
                  e,
                  n.createScrapButton,
                  "Link.createScrapButton"
                )),
                "scrap"
              );
            }
            function l(e) {
              p(
                (e = s.processRules(
                  e,
                  n.createCustomButton,
                  "Link.createCustomButton"
                )),
                "custom"
              );
            }
            function p(t, n) {
              var e = o.getElement(t.container);
              if (!e)
                throw new s.KakaoError(
                  "container is required for KakaoTalk Link: pass in element or id"
                );
              var r = function r(e) {
                e.preventDefault(), e.stopPropagation(), f(t, n);
              };
              o.addEvent(e, "click", r),
                i.push(function () {
                  o.removeEvent(e, "click", r);
                });
            }
            var d = {
              default: {
                makeLinkFunc: e.makeDefaultLink,
                requestUrl: "/v2/api/kakaolink/talk/template/default",
              },
              scrap: {
                makeLinkFunc: e.makeScrapLink,
                requestUrl: "/v2/api/kakaolink/talk/template/scrap",
              },
              custom: {
                makeLinkFunc: e.makeCustomLink,
                requestUrl: "/v2/api/kakaolink/talk/template/validate",
              },
            };
            function f(e, t) {
              var n = d[t],
                r = n.makeLinkFunc,
                i = n.requestUrl,
                o = r(e),
                a = s.UA.os.ios && "tablet" === s.UA.platform;
              !e.throughTalk || ("mobile" !== s.UA.platform && !a)
                ? c.send(e, t, o)
                : u.send(e, i, o);
            }
            return {
              createDefaultButton: t,
              createDefault: t,
              sendDefault: function (e) {
                if (
                  !e.objectType ||
                  !o.isOneOf(n.defaultObjectTypes)(e.objectType)
                )
                  throw new s.KakaoError(
                    "objectType should be one of (" +
                      n.defaultObjectTypes.join(", ") +
                      ")"
                  );
                var t = n["send" + r.capitalize(e.objectType)];
                f((e = s.processRules(e, t, "Link.sendDefault")), "default");
              },
              createScrapButton: a,
              createScrap: a,
              sendScrap: function (e) {
                f(
                  (e = s.processRules(e, n.sendScrap, "Link.sendScrap")),
                  "scrap"
                );
              },
              createCustomButton: l,
              createCustom: l,
              sendCustom: function (e) {
                f(
                  (e = s.processRules(e, n.sendCustom, "Link.sendCustom")),
                  "custom"
                );
              },
            };
          };
        },
        {
          "../common": 39,
          "../util": 43,
          "./common": 20,
          "./linkGenerator": 23,
          "./rules": 26,
          "./talkSender": 27,
          "./webSender": 28,
        },
      ],
      25: [
        function (e, t, n) {
          function r(e) {
            var t = parseInt(e, 10);
            if (isNaN(t) || t < 80)
              throw new h.KakaoError(
                "Illegal argument for image: width/height should be a number larger than 80"
              );
            return !0;
          }
          function i(e) {
            (e.width = parseInt(e.width, 10)),
              (e.height = parseInt(e.height, 10));
          }
          function o(e) {
            var t = m.keys(e)[0];
            return (
              "webButton" === t
                ? h.processRules(
                    e.webButton,
                    k[t],
                    "parameter webButton in Link.createTalkLink"
                  )
                : h.processRules(
                    e.appButton,
                    k[t],
                    "parameter appButton in Link.createTalkLink"
                  ),
              !0
            );
          }
          function a(e, t) {
            return {
              objtype: "image",
              src: t.src,
              width: t.width,
              height: t.height,
              action: u(e, t),
              disptype: t.displayType,
            };
          }
          function s(e, t) {
            return {
              objtype: "button",
              text: t.text,
              action: u(e, t),
              disptype: t.displayType,
            };
          }
          function c(e, t) {
            return {
              objtype: "link",
              text: t.text,
              action: u(e, t),
              disptype: t.displayType,
            };
          }
          function u(e, t) {
            switch (e) {
              case "web":
                return {
                  type: t.type,
                  url: t.url
                    ? (function (e) {
                        return -1 < e.indexOf("://") ? e : "http://" + e;
                      })(t.url)
                    : undefined,
                  auth: t.auth,
                };
              case "app":
                return {
                  type: "app",
                  url: t.webUrl,
                  actioninfo: (function (r, i) {
                    r = r && h.processRules(r, b, "execParams in Kakao.Link");
                    i = i && h.processRules(i, b, "marketParams in Kakao.Link");
                    var o = [];
                    return (
                      m.each(
                        {
                          android: { os: "android" },
                          iphone: { os: "ios", devicetype: "phone" },
                          ipad: { os: "ios", devicetype: "pad" },
                        },
                        function (e, t) {
                          var n = m.extend({}, e);
                          r &&
                            r[t] &&
                            (n.execparam = m.buildQueryString(r[t], !1)),
                            i &&
                              i[t] &&
                              (n.marketparam = m.buildQueryString(i[t], !1)),
                            (n.execparam || n.marketparam) && o.push(n);
                        }
                      ),
                      o
                    );
                  })(t.execParams, t.marketParams),
                };
              default:
                return undefined;
            }
          }
          function l(e) {
            return {
              web_url: e.webUrl,
              mobile_web_url: e.mobileWebUrl,
              android_execution_params: e.androidExecParams,
              ios_execution_params: e.iosExecParams,
            };
          }
          function p(e) {
            return (
              h.processRules(
                e,
                k.content,
                "parameter content in Link.sendDefault"
              ),
              !0
            );
          }
          function d(e) {
            return (
              h.processRules(e, k.link, "parameter link in Link.sendDefault"),
              !0
            );
          }
          function f(e) {
            return (
              h.processRules(
                e,
                k.button,
                "parameter button in Link.sendDefault"
              ),
              !0
            );
          }
          var m, h, g, y, v, k, b;
          t.exports =
            ((m = e("../util")),
            (h = e("../common")),
            (g = "web"),
            (y = "inweb"),
            (v = { displayType: m.isOneOf(["both", "sender", "receiver"]) }),
            (k = {
              label: {
                required: { text: m.isString },
                optional: v,
                builder: function (e) {
                  return {
                    objtype: "label",
                    text: e.text,
                    disptype: e.displayType,
                  };
                },
              },
              image: {
                required: { src: m.isString, width: r, height: r },
                optional: v,
                before: i,
                builder: m.partial(a, null),
              },
              webImage: {
                required: { src: m.isString, width: r, height: r },
                optional: m.extend(
                  {
                    url: m.isString,
                    auth: m.isBoolean,
                    type: m.isOneOf([g, y]),
                  },
                  v
                ),
                defaults: { type: g },
                before: i,
                builder: m.partial(a, "web"),
              },
              webButton: {
                optional: m.extend(
                  {
                    text: m.isString,
                    url: m.isString,
                    auth: m.isBoolean,
                    type: m.isOneOf(["web", "inweb"]),
                  },
                  v
                ),
                defaults: { type: "web" },
                builder: m.partial(s, "web"),
              },
              appButton: {
                optional: m.extend(
                  {
                    text: m.isString,
                    webUrl: m.isString,
                    execParams: m.isObject,
                    marketParams: m.isObject,
                    type: m.isString,
                  },
                  v
                ),
                defaults: { type: "app" },
                builder: m.partial(s, "app"),
              },
              webLink: {
                required: { text: m.isString },
                optional: m.extend(
                  {
                    url: m.isString,
                    auth: m.isBoolean,
                    type: m.isOneOf(["web", "inweb"]),
                  },
                  v
                ),
                defaults: { type: "web" },
                builder: m.partial(c, "web"),
              },
              appLink: {
                required: { text: m.isString },
                optional: m.extend(
                  {
                    webUrl: m.isString,
                    execParams: m.isObject,
                    marketParams: m.isObject,
                  },
                  v
                ),
                builder: m.partial(c, "app"),
              },
              horizontalButton: {
                required: { 0: o, 1: o },
                builder: function (e) {
                  var t = m.keys(e[0]),
                    n = m.keys(e[1]),
                    r = e[0][t],
                    i = e[1][n];
                  return {
                    objtype: "horizontal",
                    subs: [
                      { objtype: "button", text: r.text, action: u(r.type, r) },
                      { objtype: "button", text: i.text, action: u(i.type, i) },
                    ],
                    disptype: "both",
                  };
                },
              },
              content: {
                required: { title: m.isString, imageUrl: m.isString, link: d },
                optional: {
                  imageWidth: m.isNumber,
                  imageHeight: m.isNumber,
                  description: m.isString,
                },
                builder: function (e) {
                  return {
                    title: e.title,
                    image_url: e.imageUrl,
                    link: l(e.link),
                    image_width: e.imageWidth,
                    image_height: e.imageHeight,
                    description: e.description,
                  };
                },
              },
              contents: {
                optional: { 0: p, 1: p, 2: p },
                builder: function (e) {
                  if (e.length < 2)
                    throw new h.KakaoError(
                      "Illegal argument for contents: min count(2)"
                    );
                  return m.map(e, function (e) {
                    return {
                      title: e.title,
                      image_url: e.imageUrl,
                      link: l(e.link),
                      image_width: e.imageWidth,
                      image_height: e.imageHeight,
                      description: e.description,
                    };
                  });
                },
              },
              commerce: {
                required: { regularPrice: m.isNumber },
                optional: {
                  discountPrice: m.isNumber,
                  discountRate: m.isNumber,
                  fixedDiscountPrice: m.isNumber,
                  productName: m.isString,
                },
                builder: function (e) {
                  return {
                    regular_price: e.regularPrice,
                    discount_price: e.discountPrice,
                    discount_rate: e.discountRate,
                    fixed_discount_price: e.fixedDiscountPrice,
                    product_name: e.productName,
                  };
                },
              },
              social: {
                optional: {
                  likeCount: m.isNumber,
                  commentCount: m.isNumber,
                  sharedCount: m.isNumber,
                  viewCount: m.isNumber,
                  subscriberCount: m.isNumber,
                },
                builder: function (e) {
                  return {
                    like_count: e.likeCount,
                    comment_count: e.commentCount,
                    shared_count: e.sharedCount,
                    view_count: e.viewCount,
                    subscriber_count: e.subscriberCount,
                  };
                },
              },
              button: {
                required: { title: m.isString, link: d },
                builder: function (e) {
                  return { title: e.title, link: l(e.link) };
                },
              },
              buttons: {
                optional: { 0: f, 1: f },
                builder: function (e) {
                  return m.map(e, function (e) {
                    return { title: e.title, link: l(e.link) };
                  });
                },
              },
              headerLink: {
                optional: {
                  webUrl: m.isString,
                  mobileWebUrl: m.isString,
                  androidExecParams: m.isString,
                  iosExecParams: m.isString,
                },
                builder: l,
              },
              link: {
                optional: {
                  webUrl: m.isString,
                  mobileWebUrl: m.isString,
                  androidExecParams: m.isString,
                  iosExecParams: m.isString,
                },
                builder: l,
              },
            }),
            (b = {
              optional: {
                iphone: m.isObject,
                ipad: m.isObject,
                android: m.isObject,
              },
            }),
            {
              create: function (e, t, n) {
                var r = k[t];
                if (r)
                  return (
                    (e = h.processRules(
                      e,
                      r,
                      "parameter '" + t + "' in " + (n || "Link")
                    )),
                    r.builder(e)
                  );
              },
            });
        },
        { "../common": 39, "../util": 43 },
      ],
      26: [
        function (e, t, n) {
          function r(e) {
            return i.defaults(
              {
                required: i.extend(
                  { container: i.passesOneOf([i.isElement, i.isString]) },
                  e.required
                ),
              },
              e
            );
          }
          var i, o, a, s, c, u, l, p, d, f;
          t.exports =
            ((i = e("../util")),
            (o = {
              success: i.isFunction,
              fail: i.isFunction,
              always: i.isFunction,
              callback: i.isFunction,
              installTalk: i.isBoolean,
              throughTalk: i.isBoolean,
              extras: i.isObject,
              serverCallbackArgs: i.passesOneOf([i.isJSONString, i.isObject]),
            }),
            (a = {
              success: i.emptyFunc,
              fail: i.emptyFunc,
              always: i.emptyFunc,
              installTalk: !1,
              throughTalk: !0,
            }),
            (s = {
              required: {
                objectType: function (e) {
                  return "feed" === e;
                },
                content: i.isObject,
              },
              optional: i.extend(
                {
                  social: i.isObject,
                  buttonTitle: i.isString,
                  buttons: i.isArray,
                },
                o
              ),
              defaults: a,
            }),
            (c = {
              required: {
                objectType: function (e) {
                  return "list" === e;
                },
                headerTitle: i.isString,
                headerLink: i.isObject,
                contents: i.isArray,
              },
              optional: i.extend(
                {
                  buttonTitle: i.isString,
                  buttons: i.isArray,
                  headerImageUrl: i.isString,
                  headerImageWidth: i.isNumber,
                  headerImageHeight: i.isNumber,
                },
                o
              ),
              defaults: a,
            }),
            (u = {
              required: {
                objectType: function (e) {
                  return "commerce" === e;
                },
                content: i.isObject,
                commerce: i.isObject,
              },
              optional: i.extend(
                { buttonTitle: i.isString, buttons: i.isArray },
                o
              ),
              defaults: a,
            }),
            (l = {
              required: {
                objectType: function (e) {
                  return "location" === e;
                },
                content: i.isObject,
                address: i.isString,
              },
              optional: i.extend(
                {
                  addressTitle: i.isString,
                  social: i.isObject,
                  buttonTitle: i.isString,
                  buttons: i.isArray,
                },
                o
              ),
              defaults: a,
            }),
            (p = {
              required: {
                objectType: function (e) {
                  return "text" === e;
                },
                text: i.isString,
                link: i.isObject,
              },
              optional: i.extend(
                { buttonTitle: i.isString, buttons: i.isArray },
                o
              ),
              defaults: a,
            }),
            (d = {
              required: { requestUrl: i.isString },
              optional: i.extend(
                { templateId: i.isNumber, templateArgs: i.isObject },
                o
              ),
              defaults: i.extend({ templateArgs: {} }, a),
            }),
            (f = {
              required: { templateId: i.isNumber },
              optional: i.extend({ templateArgs: i.isObject }, o),
              defaults: i.extend({ templateArgs: {} }, a),
            }),
            {
              defaultObjectTypes: [
                "feed",
                "list",
                "commerce",
                "location",
                "text",
              ],
              sendFeed: s,
              createFeedButton: r(s),
              sendList: c,
              createListButton: r(c),
              sendCommerce: u,
              createCommerceButton: r(u),
              sendLocation: l,
              createLocationButton: r(l),
              sendText: p,
              createTextButton: r(p),
              sendScrap: d,
              createScrapButton: r(d),
              sendCustom: f,
              createCustomButton: r(f),
              uploadImage: { required: { file: i.isObject } },
              deleteImage: { required: { imageUrl: i.isString } },
              scrapImage: { required: { imageUrl: i.isString } },
            });
        },
        { "../util": 43 },
      ],
      27: [
        function (e, t, n) {
          function o(e, t) {
            !(function (e, t, n) {
              var r = [
                  "intent:" + e + "#Intent",
                  "launchFlags=0x14008000",
                  (!0 === n ? "package=com.kakao.talk;" : "") + "end;",
                ].join(";"),
                i = {
                  urlScheme: e,
                  intentURI: r,
                  appName: "KakaoTalk",
                  storeURL: c.getInstallUrl(d, f),
                  onUnsupportedEnvironment: function () {
                    t(e);
                  },
                };
              (n && !u.isIOSKakaoTalkWebView() && !u.isAndroidWebView()) ||
                (i.onAppMissing = s.emptyFunc);
              u.isIOSKakaoTalkWebView() && (i.universalLink = undefined);
              try {
                a(i);
              } catch (o) {
                c.logDebug(o);
              }
            })(r.makeKakaoLink(t, e), t.fail, t.installTalk);
            var n = {
              template_msg: e.template_msg || {},
              warning_msg: e.warning_msg || {},
              argument_msg: e.argument_msg || {},
            };
            t.success(n), t.always(n);
          }
          var a, s, c, u, l, p, r, d, f;
          t.exports =
            ((a = e("../../vendor/web2app")),
            (s = e("../util")),
            (c = e("../common")),
            (u = e("../webviewchecker")()),
            (l = e("../poller")(100, 100)),
            (p = e("./common")),
            (r = e("./linkGenerator")),
            (d = "com.kakao.talk"),
            (f = "362057947"),
            {
              send: function (t, e, n) {
                var r,
                  i = null;
                return (
                  c.UA.browser.iphone && /version/.test(c.UA.ua.toLowerCase())
                    ? ((r = null),
                      (i = function i(e) {
                        r = e;
                      }),
                      l.start(
                        function () {
                          null !== r && (l.stop(), o(r, t));
                        },
                        function () {
                          var e = {
                            error: "timeout",
                            error_description: "LINK_TIMEOUT",
                          };
                          t.fail(e), t.always(e);
                        }
                      ))
                    : (i = o),
                  p.requestAPI(e, n).then(
                    function (e) {
                      i(e, t);
                    },
                    function (e) {
                      t.fail(e), t.always(e);
                    }
                  )
                );
              },
            });
        },
        {
          "../../vendor/web2app": 49,
          "../common": 39,
          "../poller": 42,
          "../util": 43,
          "../webviewchecker": 44,
          "./common": 20,
          "./linkGenerator": 23,
        },
      ],
      28: [
        function (e, t, n) {
          var a, s, c, u, l;
          t.exports =
            ((a = e("../util")),
            (s = e("../common")),
            (c = e("./common")),
            (u = "kakao_link_web_sharer"),
            (l =
              "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"),
            {
              send: function (e, t, n) {
                var r = {
                  app_key: s.RUNTIME.appKey,
                  ka: s.KAKAO_AGENT,
                  validation_action: t,
                  validation_params: JSON.stringify(n),
                };
                e.serverCallbackArgs &&
                  (r.lcba = c.stringifyLCBA(e.serverCallbackArgs));
                var i =
                    s.URL.sharerDomain +
                    "/talk/friends/picker/easylink?" +
                    a.buildQueryString(r),
                  o = null;
                !s.UA.browser.msie && !s.UA.browser.spartan && i.length < 2084
                  ? (o = s.windowOpen(i, u, l)).focus()
                  : (o = (function (e) {
                      var t = s.UA.browser.msie ? {} : s.windowOpen("", u, l);
                      t.focus && t.focus();
                      var n = document.createElement("form");
                      for (var r in (n.setAttribute("accept-charset", "utf-8"),
                      n.setAttribute("method", "post"),
                      n.setAttribute(
                        "action",
                        s.URL.sharerDomain + "/talk/friends/picker/link"
                      ),
                      n.setAttribute("target", u),
                      n.setAttribute("style", "display:none"),
                      e)) {
                        var i;
                        e.hasOwnProperty(r) &&
                          (((i = document.createElement("input")).type =
                            "hidden"),
                          (i.name = r),
                          (i.value = a.isString(e[r])
                            ? e[r]
                            : JSON.stringify(e[r])),
                          n.appendChild(i));
                      }
                      return (
                        document.body.appendChild(n),
                        n.submit(),
                        document.body.removeChild(n),
                        t
                      );
                    })(r)),
                  e.callback &&
                    (function (e, t) {
                      if (s.UA.browser.msie)
                        return (
                          console &&
                          console.warn(
                            "KakaoWarning: The callback parameter does not support the IE browser."
                          )
                        );
                      var n = function n(e) {
                        "sent" === e.data &&
                          e.origin === s.URL.sharerDomain &&
                          t();
                      };
                      a.addEvent(window, "message", n);
                      var r = setInterval(function () {
                        e.closed &&
                          (clearInterval(r),
                          a.removeEvent(window, "message", n));
                      }, 1e3);
                    })(o, e.callback);
              },
            });
        },
        { "../common": 39, "../util": 43, "./common": 20 },
      ],
      29: [
        function (e, t, n) {
          var r;
          t.exports =
            ((r = {}), e("../common").initSubModules(r, [e("./request")]), r);
        },
        { "../common": 39, "./request": 30 },
      ],
      30: [
        function (e, t, n) {
          function a() {
            return {
              appkey: u.RUNTIME.appKey,
              apiver: "1.0",
              extras: { KA: u.KAKAO_AGENT },
            };
          }
          function s(e, t) {
            var n = {
              urlScheme: e,
              intentURI: [
                "intent:" + e + "#Intent",
                "package=com.locnall.KimGiSa",
                "S.browser_fallback_url=" + encodeURIComponent(t),
                "end;",
              ].join(";"),
              storeURL: t,
              universalLink: t,
            };
            try {
              i(n);
            } catch (r) {
              u.logDebug(r);
            }
          }
          var i, c, u, l;
          t.exports =
            ((i = e("../../vendor/web2app")),
            (c = e("../util")),
            (u = e("../common")),
            (l = e("./rules")),
            {
              start: function (e) {
                e = u.processRules(e, l.start, "Navi.start");
                var t,
                  n,
                  r,
                  i,
                  o = c.buildQueryString(
                    ((n = {
                      name: (t = e).name,
                      x: t.x,
                      y: t.y,
                      rpflag: t.rpflag,
                      cid: t.cid,
                      guide_id: t.guideId,
                    }),
                    (r = {
                      coord_type: t.coordType,
                      vehicle_type: t.vehicleType,
                      rpoption: t.rpOption,
                      route_info: t.routeInfo,
                      s_x: t.sX,
                      s_y: t.sY,
                      s_angle: t.sAngle,
                      return_uri: t.returnUri,
                    }),
                    ((i = a()).param = {
                      destination: n,
                      option: r,
                      via_list: t.viaPoints,
                    }),
                    i)
                  );
                s(u.URL.naviStartScheme + "?" + o, u.URL.naviWeb + "?" + o);
              },
              share: function (e) {
                e = u.processRules(e, l.share, "Navi.share");
                var t,
                  n,
                  r,
                  i,
                  o = c.buildQueryString(
                    ((n = {
                      name: (t = e).name,
                      x: t.x,
                      y: t.y,
                      rpflag: t.rpflag,
                      cid: t.cid,
                      guide_id: t.guideId,
                    }),
                    (r = { coord_type: t.coordType }),
                    ((i = a()).param = { destination: n, option: r }),
                    (i.scheme_type = "sharePoi"),
                    i)
                  );
                s(u.URL.naviShareScheme + "?" + o, u.URL.naviWeb + "?" + o);
              },
            });
        },
        {
          "../../vendor/web2app": 49,
          "../common": 39,
          "../util": 43,
          "./rules": 31,
        },
      ],
      31: [
        function (e, t, n) {
          var r, i, o, a;
          t.exports =
            ((r = e("../util")),
            (i = e("../common")),
            (o = ["wgs84", "katec"]),
            (a = {
              required: { name: r.isString, x: r.isNumber, y: r.isNumber },
              optional: { rpflag: r.isString, cid: r.isString },
            }),
            {
              start: {
                required: { name: r.isString, x: r.isNumber, y: r.isNumber },
                optional: {
                  coordType: r.isOneOf(o),
                  vehicleType: r.isOneOf([1, 2, 3, 4, 5, 6, 7]),
                  rpOption: r.isOneOf([1, 2, 3, 4, 5, 6, 8, 100]),
                  routeInfo: r.isBoolean,
                  sX: r.isNumber,
                  sY: r.isNumber,
                  sAngle: r.isNumber,
                  returnUri: r.isString,
                  rpflag: r.isString,
                  cid: r.isString,
                  guideId: r.isNumber,
                  viaPoints: function (e) {
                    if (r.isArray(e)) {
                      if (3 < e.length)
                        throw new i.KakaoError(
                          "Invalid parameter keys: via points should not be exceed 3. at Navi.start"
                        );
                      return (
                        r.each(e, function (e) {
                          return i.processRules(e, a, "Navi.start");
                        }),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                defaults: {
                  coordType: "katec",
                  vehicleType: 1,
                  rpOption: 100,
                  routeInfo: !1,
                },
              },
              share: {
                required: { name: r.isString, x: r.isNumber, y: r.isNumber },
                optional: {
                  coordType: r.isOneOf(o),
                  rpflag: r.isString,
                  cid: r.isString,
                  guideId: r.isNumber,
                },
                defaults: { coordType: "katec" },
              },
            });
        },
        { "../common": 39, "../util": 43 },
      ],
      32: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./request")(o)]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./request": 33 },
      ],
      33: [
        function (e, t, n) {
          t.exports = function (s) {
            var c = e("../util"),
              u = e("../common"),
              l = e("./rules"),
              p = e("../Channel/common"),
              n = "1.0",
              r = "plus_friend_add_social_plugin",
              i = "plus_friend_chat_social_plugin",
              o = "width=350, height=510",
              d =
                "KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.";
            function f(e) {
              var t = u.URL.channel + "/" + e.plusFriendId + "/friend";
              Kakao.isInitialized() && (t += "?" + p.makeChannelParams(n)),
                u.windowOpen(t, r, o);
            }
            function m(e) {
              var t = u.URL.channel + "/" + e.plusFriendId + "/chat";
              Kakao.isInitialized() && (t += "?" + p.makeChannelParams(n)),
                u.windowOpen(t, i, o);
            }
            return {
              createAddFriendButton: function (t) {
                console && console.warn(d);
                var e = c.getElement(t.container);
                if (!e)
                  throw new u.KakaoError(
                    "container is required for PlusFriend.createAddFriendButton: pass in element or id"
                  );
                u.applyAttributes(t, e, {
                  plusFriendId: "data-plusfriend-id",
                  size: "data-size",
                  color: "data-color",
                  shape: "data-shape",
                  supportMultipleDensities: "data-support-multiple-densities",
                }),
                  (t = u.processRules(
                    t,
                    l.createAddFriendButton,
                    "PlusFriend.createAddFriendButton"
                  ));
                var n,
                  r,
                  i =
                    ((r =
                      "friendadd_" +
                      (n = t).size +
                      "_" +
                      n.color +
                      "_" +
                      n.shape +
                      ".png"),
                    u.URL.channelIcon + "/plusfriend/" + r),
                  o = p.createAnchorImage(t, i, "플러스친구 친구 추가 버튼");
                e.appendChild(o);
                var a = function a(e) {
                  e.preventDefault(), f(t);
                };
                c.addEvent(o, "click", a),
                  s.push(function () {
                    c.removeEvent(o, "click", a), e.removeChild(o);
                  });
              },
              addFriend: function (e) {
                console && console.warn(d),
                  f(
                    (e = u.processRules(e, l.addFriend, "PlusFriend.addFriend"))
                  );
              },
              createChatButton: function (t) {
                console && console.warn(d);
                var e = c.getElement(t.container);
                if (!e)
                  throw new u.KakaoError(
                    "container is required for PlusFriend.createChatButton: pass in element or id"
                  );
                u.applyAttributes(t, e, {
                  plusFriendId: "data-plusfriend-id",
                  size: "data-size",
                  color: "data-color",
                  shape: "data-shape",
                  title: "data-title",
                  supportMultipleDensities: "data-support-multiple-densities",
                }),
                  (t = u.processRules(
                    t,
                    l.createChatButton,
                    "PlusFriend.createChatButton"
                  ));
                var n,
                  r,
                  i =
                    ((r =
                      (n = t).title +
                      "_" +
                      n.size +
                      "_" +
                      n.color +
                      "_" +
                      n.shape +
                      ".png"),
                    u.URL.channelIcon + "/plusfriend/" + r),
                  o = p.createAnchorImage(t, i, "플러스친구 1:1 채팅 버튼");
                e.appendChild(o);
                var a = function a(e) {
                  e.preventDefault(), m(t);
                };
                c.addEvent(o, "click", a),
                  s.push(function () {
                    c.removeEvent(o, "click", a), e.removeChild(o);
                  });
              },
              chat: function (e) {
                console && console.warn(d),
                  m((e = u.processRules(e, l.chat, "PlusFriend.chat")));
              },
            };
          };
        },
        {
          "../Channel/common": 16,
          "../common": 39,
          "../util": 43,
          "./rules": 34,
        },
      ],
      34: [
        function (e, t, n) {
          var r;
          t.exports = {
            createAddFriendButton: {
              required: {
                container: (r = e("../util")).passesOneOf([
                  r.isElement,
                  r.isString,
                ]),
                plusFriendId: r.isString,
              },
              optional: {
                size: r.isOneOf(["small", "large"]),
                color: r.isOneOf(["yellow", "black"]),
                shape: r.isOneOf(["rect", "round"]),
                supportMultipleDensities: r.isBoolean,
              },
              defaults: {
                size: "small",
                color: "yellow",
                shape: "rect",
                supportMultipleDensities: !1,
              },
            },
            addFriend: { required: { plusFriendId: r.isString } },
            createChatButton: {
              required: {
                container: r.passesOneOf([r.isElement, r.isString]),
                plusFriendId: r.isString,
              },
              optional: {
                size: r.isOneOf(["small", "large"]),
                color: r.isOneOf(["yellow", "mono"]),
                shape: r.isOneOf(["pc", "mobile"]),
                title: r.isOneOf(["consult", "question"]),
                supportMultipleDensities: r.isBoolean,
              },
              defaults: {
                size: "small",
                color: "yellow",
                shape: "pc",
                title: "consult",
                supportMultipleDensities: !1,
              },
            },
            chat: { required: { plusFriendId: r.isString } },
          };
        },
        { "../util": 43 },
      ],
      35: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../common")),
            (i = {}),
            (o = []),
            r.initSubModules(i, [e("./request")(o)]),
            (i.cleanup = function () {
              r.emptyCleanups(o);
            }),
            i);
        },
        { "../common": 39, "./request": 36 },
      ],
      36: [
        function (e, t, n) {
          t.exports = function (o) {
            var i = e("../../vendor/web2app"),
              p = e("../util"),
              d = e("../common"),
              a = e("./rules");
            function s(e) {
              var t = p.extend({ url: e.url }, m());
              e.text && (t.text = e.text),
                d.windowOpen(
                  d.URL.storyShare + "?" + p.buildQueryString(t),
                  "kakaostory_social_plugin",
                  "width=670, height=800, scrollbars=yes"
                );
            }
            var f = 0;
            function m() {
              var e = { kakao_agent: d.KAKAO_AGENT };
              return Kakao.isInitialized() && (e.app_key = d.RUNTIME.appKey), e;
            }
            return {
              createShareButton: function (t) {
                var e = p.getElement(t.container);
                if (!e)
                  throw new d.KakaoError(
                    "container is required for Story.createShareButton: pass in element or id"
                  );
                d.applyAttributes(t, e, { url: "data-url" }),
                  (t = d.processRules(
                    t,
                    a.createShareButton,
                    "Story.createShareButton"
                  ));
                var n = (function (e, t) {
                  var n = document.createElement("a");
                  n.setAttribute("href", "#");
                  var r = document.createElement("img");
                  return (
                    r.setAttribute("src", e),
                    r.setAttribute("title", t),
                    r.setAttribute("alt", t),
                    n.appendChild(r),
                    n
                  );
                })(d.URL.storyIcon, "카카오스토리 웹 공유 버튼");
                e.appendChild(n);
                var r = function r(e) {
                  e.preventDefault(), s(t);
                };
                p.addEvent(n, "click", r),
                  o.push(function () {
                    p.removeEvent(n, "click", r), e.removeChild(n);
                  });
              },
              share: function (e) {
                s((e = d.processRules(e, a.share, "Story.share")));
              },
              open: function (e) {
                var t = (function (e) {
                    var t = location.hostname || "",
                      n = p.extend(
                        {
                          apiver: "1.0",
                          appver: d.VERSION,
                          appid: t,
                          appname: t,
                          post: e.text ? e.text + "\n" + e.url : e.url,
                        },
                        m()
                      );
                    e.urlInfo &&
                      ((n.urlinfo = JSON.stringify(e.urlInfo)),
                      (n.appname = e.urlInfo.name || n.appname));
                    return d.URL.storyPostScheme + "?" + p.buildQueryString(n);
                  })((e = d.processRules(e, a.open, "Story.open"))),
                  n = {
                    urlScheme: t,
                    intentURI: [
                      "intent:" + t + "#Intent",
                      (e.install ? "package=com.kakao.story;" : "") + "end;",
                    ].join(";"),
                    appName: "KakaoStory",
                    storeURL: d.getInstallUrl("com.kakao.story", "486244601"),
                    onUnsupportedEnvironment: function () {
                      e.fail && e.fail();
                    },
                  };
                try {
                  i(n);
                } catch (r) {
                  d.logDebug(r);
                }
              },
              createFollowButton: function (e) {
                var t = p.getElement(e.container);
                if (!t)
                  throw new d.KakaoError(
                    "container is required for Story.createFollowButton: pass in element or id"
                  );
                d.applyAttributes(e, t, {
                  id: "data-id",
                  showFollowerCount: "data-show-follower-count",
                  type: "data-type",
                });
                var n = (function (e) {
                    var a = f++,
                      s =
                        e.showFollowerCount && "horizontal" === e.type
                          ? 85
                          : 59,
                      c =
                        e.showFollowerCount && "vertical" === e.type ? 46 : 20,
                      u = document.createElement("iframe");
                    (u.src = (function (e, t) {
                      var n = p.extend(
                        {
                          id: e.id,
                          type: e.type,
                          hideFollower: !e.showFollowerCount,
                          frameId: t,
                        },
                        m()
                      );
                      return (
                        d.URL.storyChannelFollow + "?" + p.buildQueryString(n)
                      );
                    })(e, a)),
                      u.setAttribute("frameborder", "0"),
                      u.setAttribute("marginwidth", "0"),
                      u.setAttribute("marginheight", "0"),
                      u.setAttribute("scrolling", "no"),
                      u.setAttribute(
                        "style",
                        "width:" + s + "px; height:" + c + "px;"
                      );
                    var l = function l(e) {
                      var t, n, r, i, o;
                      e.data &&
                        /\.kakao\.com$/.test(e.origin) &&
                        "string" == typeof e.data &&
                        ((t = e.data.split(",").map(function (e) {
                          return parseInt(e, 10);
                        })),
                        (r = (n = _slicedToArray(t, 3))[0]),
                        (i = n[1]),
                        (o = n[2]),
                        r === a &&
                          (s !== i && ((s = i), (u.style.width = s + "px")),
                          c !== o && ((c = o), (u.style.height = c + "px"))));
                    };
                    return { iframe$: u, messageHandler: l };
                  })(
                    (e = d.processRules(
                      e,
                      a.createFollowButton,
                      "Story.createFollowButton"
                    ))
                  ),
                  r = n.iframe$,
                  i = n.messageHandler;
                t.appendChild(r),
                  p.addEvent(window, "message", i),
                  o.push(function () {
                    p.removeEvent(window, "message", i), t.removeChild(r);
                  });
              },
            };
          };
        },
        {
          "../../vendor/web2app": 49,
          "../common": 39,
          "../util": 43,
          "./rules": 37,
        },
      ],
      37: [
        function (e, t, n) {
          var r, i, o;
          t.exports =
            ((r = e("../util")),
            (i = e("../common")),
            (o = {
              required: { title: r.isString },
              optional: {
                desc: r.isString,
                name: r.isString,
                images: r.isArray,
                type: r.isString,
              },
              defaults: { type: "website" },
              after: function (e) {
                e.images && ((e.imageurl = e.images), delete e.images);
              },
            }),
            {
              createShareButton: {
                required: {
                  container: r.passesOneOf([r.isElement, r.isString]),
                },
                optional: { url: r.isString, text: r.isString },
                defaults: { url: location.href },
              },
              share: {
                optional: { url: r.isString, text: r.isString },
                defaults: { url: location.href },
              },
              open: {
                optional: {
                  url: r.isString,
                  text: r.isString,
                  urlInfo: function (e) {
                    return (
                      r.isObject(e) && !!i.processRules(e, o, "Story.open")
                    );
                  },
                  install: r.isBoolean,
                },
                defaults: { url: location.href, install: !1 },
              },
              createFollowButton: {
                required: {
                  container: r.passesOneOf([r.isElement, r.isString]),
                  id: r.isString,
                },
                optional: {
                  showFollowerCount: r.isBoolean,
                  type: r.isOneOf(["horizontal", "vertical"]),
                },
                defaults: { showFollowerCount: !0, type: "horizontal" },
                after: function (e) {
                  "@" !== e.id[0] && (e.id = "@" + e.id);
                },
              },
            });
        },
        { "../common": 39, "../util": 43 },
      ],
      38: [
        function (e, t, n) {
          var r;
          t.exports =
            ((r = e("../vendor/userAgent")()),
            {
              getOrigin: function () {
                var e = location,
                  t = e.protocol,
                  n = e.hostname,
                  r = e.port;
                return t + "//" + n + (r ? ":" + r : "");
              },
              getNavigator: function () {
                return navigator;
              },
              getUA: function () {
                return r;
              },
            });
        },
        { "../vendor/userAgent": 48 },
      ],
      39: [
        function (e, t, n) {
          function c(e) {
            Error.prototype.constructor.apply(this, arguments),
              (this.name = "KakaoError"),
              (this.message = e);
          }
          var u, r, i, o, l;
          t.exports =
            ((u = e("./util")),
            (r = e("./browserProxy")),
            (i = r.getOrigin()),
            (o = r.getNavigator()),
            ((l = {}).VERSION = "1.39.16"),
            (l.KAKAO_AGENT = [
              "sdk/" + l.VERSION,
              "os/javascript",
              "sdk_type/javascript",
              "lang/" + (o.userLanguage || o.language),
              "device/" + o.platform.replace(/ /g, "_"),
              "origin/" + encodeURIComponent(i),
            ].join(" ")),
            (l.UA = r.getUA()),
            (l.URL = {
              authDomain: "https://kauth.kakao.com",
              authorize: "https://kauth.kakao.com/oauth/authorize",
              loginWidget:
                "https://kauth.kakao.com/public/widget/login/kakaoLoginWidget.html",
              redirectUri: "JS-SDK",
              universalKakaoLink: "https://talk-apps.kakao.com/scheme/",
              talkLoginScheme: "kakaokompassauth://authorize",
              talkLoginRedirectUri:
                "https://kapi.kakao.com/cors/afterlogin.html",
              talkInappScheme: "kakaotalk://inappbrowser",
              talkSyncpluginScheme:
                "kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298",
              apiRemote: "https://kapi.kakao.com/cors/",
              sharerDomain: "https://sharer.kakao.com",
              channel: "https://pf.kakao.com",
              channelIcon:
                "https://developers.kakao.com/assets/img/about/logos",
              storySelectChannel:
                "https://kauth.kakao.com/story/select_channel",
              storyShare: "https://story.kakao.com/s/share",
              storyChannelFollow: "https://story.kakao.com/s/follow",
              storyIcon:
                "https://developers.kakao.com/sdk/js/resources/story/icon_small.png",
              storyPostScheme: "storylink://posting",
              naviStartScheme: "kakaonavi-sdk://navigate",
              naviShareScheme: "kakaonavi-sdk://sharePoi",
              naviWeb: "https://kakaonavi-wguide.kakao.com/openapi",
            }),
            (l.RUNTIME = { appKey: "", accessToken: "" }),
            (l.DUMMY_KEY = "YOUR APP KEY"),
            (c.prototype = new Error()),
            (l.KakaoError = c),
            (l.isDebug = function () {
              return !1;
            }),
            (l.logDebug = function (e) {
              l.isDebug() && window.console && console.log(JSON.stringify(e));
            }),
            (l.initSubModules = function (n, e) {
              u.each(e, function (e) {
                for (var t in e) n[t] = n[t] || e[t];
              });
            }),
            (l.emptyCleanups = function (e) {
              u.each(e, function (e) {
                e();
              }),
                (e.length = 0);
            }),
            (l.validate = function (e, t, n) {
              if (!0 !== t(e)) throw new c("Illegal argument for " + n);
            }),
            (l.processRules = function (e, t, r) {
              (e = e || {}),
                t.before && t.before(e),
                u.isFunction(t.defaults)
                  ? u.defaults(e, t.defaults(e))
                  : u.defaults(e, t.defaults);
              var n = t.required || {},
                i = u.difference(u.keys(n), u.keys(e));
              if (i.length)
                throw new c(
                  "Missing required keys: " + i.join(",") + " at " + r
                );
              var o = t.optional || {},
                a = u.extend({}, n, o),
                s = u.difference(u.keys(e), u.keys(a));
              if (s.length)
                throw new c(
                  "Invalid parameter keys: " + s.join(",") + " at " + r
                );
              return (
                u.each(e, function (e, t) {
                  var n = a[t];
                  l.validate(e, n, '"' + t + '" in ' + r);
                }),
                t.after && t.after(e),
                e
              );
            }),
            (l.getInstallUrl = function (e, t) {
              if (l.UA.os.android) {
                var n = { appkey: l.RUNTIME.appKey, KA: l.KAKAO_AGENT };
                return (
                  "market://details?id=" + e + "&referrer=" + JSON.stringify(n)
                );
              }
              return l.UA.os.ios
                ? "https://itunes.apple.com/app/id" + t
                : location.href;
            }),
            (l.guardCreateEasyXDM = function (e) {
              try {
                return e();
              } catch (t) {
                throw t instanceof TypeError
                  ? new c("kakao.js should be loaded from a web server")
                  : new c("EasyXDM - " + t.message);
              }
            }),
            (l.serializeFile = function (r) {
              return new Promise(function (t, n) {
                "undefined" == typeof FileReader &&
                  n(new c("File API is not supported for this browser."));
                var e = new FileReader();
                (e.onload = function (e) {
                  try {
                    t(u.arrayBufferToString(e.target.result));
                  } catch (e) {
                    n(e);
                  }
                }),
                  (e.onerror = function (e) {
                    n(new c("Cannot read file: " + r.name));
                  }),
                  e.readAsArrayBuffer(r);
              });
            }),
            (l.popupWindows = {}),
            (l.windowOpen = function (e, t, n) {
              var r = l.popupWindows[t];
              return (
                r && r.close && !r.closed && r.close(),
                (l.popupWindows[t] = window.open(e, t, n)),
                l.popupWindows[t]
              );
            }),
            (l.applyAttributes = function (n, r, i) {
              u.keys(i).forEach(function (e) {
                var t = r.getAttribute(i[e]);
                null !== t &&
                  (n[e] = "true" === t || "false" === t ? "true" === t : t);
              });
            }),
            l);
        },
        { "./browserProxy": 38, "./util": 43 },
      ],
      40: [
        function (e, t, n) {
          var r, i;
          t.exports =
            ((r = e("./util")),
            (i = {}),
            {
              subscribe: function (e, t) {
                i[e] || (i[e] = []), i[e].push(t);
              },
              unsubscribe: function (e, t) {
                for (var n = i[e], r = 0; r < l.length; r++)
                  if (n[m] === t) {
                    n.splice(m, 1);
                    break;
                  }
              },
              dispatch: function (e) {
                var t = i[e];
                t &&
                  t.length &&
                  r.each(t, function (e) {
                    e();
                  });
              },
            });
        },
        { "./util": 43 },
      ],
      41: [
        function (i, e, t) {
          e.exports = (function (e) {
            e.Kakao = e.Kakao || {};
            var t = e.Kakao,
              n = i("./util"),
              r = i("./common");
            return (
              (t.VERSION = r.VERSION),
              (t.Story = i("./Story")),
              (t.init = function (e) {
                if (r.RUNTIME.appKey)
                  throw new r.KakaoError("Kakao.init: Already initialized");
                if (!n.isString(e) || e === r.DUMMY_KEY)
                  throw new r.KakaoError(
                    "Kakao.init: App key must be provided"
                  );
                (r.RUNTIME.appKey = e),
                  (t.Auth = i("./Auth")),
                  (t.API = i("./API")),
                  (t.Link = i("./Link")),
                  (t.Navi = i("./Navi")),
                  (t.Channel = i("./Channel")),
                  (t.PlusFriend = i("./PlusFriend"));
              }),
              (t.isInitialized = function () {
                return !!r.RUNTIME.appKey;
              }),
              (t.cleanup = function () {
                t.Auth && t.Auth.cleanup(),
                  t.API && t.API.cleanup(),
                  t.Link && t.Link.cleanup(),
                  t.Story && t.Story.cleanup(),
                  t.PlusFriend && t.PlusFriend.cleanup(),
                  t.Channel && t.Channel.cleanup(),
                  n.nullify(r.RUNTIME);
              }),
              window.kakaoAsyncInit && window.kakaoAsyncInit(),
              t
            );
          })(window);
        },
        {
          "./API": 4,
          "./Auth": 9,
          "./Channel": 17,
          "./Link": 22,
          "./Navi": 29,
          "./PlusFriend": 32,
          "./Story": 35,
          "./common": 39,
          "./util": 43,
        },
      ],
      42: [
        function (e, t, n) {
          t.exports = function (r, i) {
            var o = 0,
              a = !1,
              s = null;
            return {
              start: function (e, t) {
                (o = 0),
                  (a = !1),
                  (function n(e, t) {
                    if (a) return;
                    s = setTimeout(function () {
                      ++o > i ? t() : (e(), n(e, t));
                    }, r);
                  })(e, t);
              },
              stop: function () {
                (a = !0), clearTimeout(s);
              },
            };
          };
        },
        {},
      ],
      43: [
        function (e, t, n) {
          t.exports = (function () {
            var s = {},
              a = {},
              n = Array.prototype,
              e = Object.prototype,
              r = n.slice,
              i = n.concat,
              o = e.toString,
              c = e.hasOwnProperty,
              u = n.forEach,
              t = n.map,
              l = n.filter,
              p = n.every,
              d = n.some,
              f = n.indexOf,
              m = Array.isArray,
              h = Object.keys,
              g = (s.each = function (e, t, n) {
                if (null == e) return e;
                if (u && e.forEach === u) e.forEach(t, n);
                else if (e.length === +e.length) {
                  for (var r = 0, i = e.length; r < i; r++)
                    if (t.call(n, e[r], r, e) === a) return;
                } else
                  for (var o = s.keys(e), r = 0, i = o.length; r < i; r++)
                    if (t.call(n, e[o[r]], o[r], e) === a) return;
                return e;
              });
            (s.map = function (e, r, i) {
              var o = [];
              return null == e
                ? o
                : t && e.map === t
                ? e.map(r, i)
                : (g(e, function (e, t, n) {
                    o.push(r.call(i, e, t, n));
                  }),
                  o);
            }),
              (s.filter = function (e, r, i) {
                var o = [];
                return null == e
                  ? o
                  : l && e.filter === l
                  ? e.filter(r, i)
                  : (g(e, function (e, t, n) {
                      r.call(i, e, t, n) && o.push(e);
                    }),
                    o);
              }),
              (s.every = function (e, r, i) {
                r = r || s.identity;
                var o = !0;
                return null == e
                  ? o
                  : p && e.every === p
                  ? e.every(r, i)
                  : (g(e, function (e, t, n) {
                      if (!(o = o && r.call(i, e, t, n))) return a;
                    }),
                    !!o);
              });
            var y = (s.any = function (e, r, i) {
              r = r || s.identity;
              var o = !1;
              return null == e
                ? o
                : d && e.some === d
                ? e.some(r, i)
                : (g(e, function (e, t, n) {
                    if ((o = o || r.call(i, e, t, n))) return a;
                  }),
                  !!o);
            });
            return (
              (s.contains = function (e, t) {
                return (
                  null != e &&
                  (f && e.indexOf === f
                    ? -1 != e.indexOf(t)
                    : y(e, function (e) {
                        return e === t;
                      }))
                );
              }),
              (s.difference = function (e) {
                var t = i.apply(n, r.call(arguments, 1));
                return s.filter(e, function (e) {
                  return !s.contains(t, e);
                });
              }),
              (s.partial = function (i) {
                var o = r.call(arguments, 1);
                return function () {
                  for (
                    var e = 0, t = o.slice(), n = 0, r = t.length;
                    n < r;
                    n++
                  )
                    t[n] === s && (t[n] = arguments[e++]);
                  for (; e < arguments.length; ) t.push(arguments[e++]);
                  return i.apply(this, t);
                };
              }),
              (s.after = function (e, t) {
                return function () {
                  if (--e < 1) return t.apply(this, arguments);
                };
              }),
              (s.keys = function (e) {
                if (!s.isObject(e)) return [];
                if (h) return h(e);
                var t = [];
                for (var n in e) s.has(e, n) && t.push(n);
                return t;
              }),
              (s.extend = function (n) {
                return (
                  g(r.call(arguments, 1), function (e) {
                    if (e) for (var t in e) n[t] = e[t];
                  }),
                  n
                );
              }),
              (s.defaults = function (n) {
                return (
                  g(r.call(arguments, 1), function (e) {
                    if (e) for (var t in e) void 0 === n[t] && (n[t] = e[t]);
                  }),
                  n
                );
              }),
              (s.isElement = function (e) {
                return !(!e || 1 !== e.nodeType);
              }),
              (s.isArray =
                m ||
                function (e) {
                  return "[object Array]" == o.call(e);
                }),
              (s.isObject = function (e) {
                return e === Object(e);
              }),
              g(
                [
                  "Arguments",
                  "Function",
                  "String",
                  "Number",
                  "Date",
                  "RegExp",
                  "Blob",
                  "File",
                  "FileList",
                ],
                function (t) {
                  s["is" + t] = function (e) {
                    return o.call(e) == "[object " + t + "]";
                  };
                }
              ),
              (s.isBoolean = function (e) {
                return !0 === e || !1 === e || "[object Boolean]" == o.call(e);
              }),
              (s.has = function (e, t) {
                return c.call(e, t);
              }),
              (s.identity = function (e) {
                return e;
              }),
              (s.isInteger = function (e) {
                return s.isNumber(e) && e % 1 == 0;
              }),
              (s.emptyFunc = function () {}),
              (s.getElement = function (e) {
                return s.isElement(e)
                  ? e
                  : s.isString(e)
                  ? document.querySelector(e)
                  : null;
              }),
              (s.addEvent = function (e, t, n) {
                e.addEventListener
                  ? e.addEventListener(t, n, !1)
                  : e.attachEvent && e.attachEvent("on" + t, n);
              }),
              (s.removeEvent = function (e, t, n) {
                e.removeEventListener
                  ? e.removeEventListener(t, n, !1)
                  : e.detachEvent && e.detachEvent("on" + t, n);
              }),
              (s.buildQueryString = function (e, t) {
                var n,
                  r,
                  i,
                  o = [];
                for (var a in e) {
                  e.hasOwnProperty(a) &&
                    ((n = e[a]),
                    s.isObject(n) && (n = JSON.stringify(n)),
                    (r = !1 === t ? a : encodeURIComponent(a)),
                    (i = !1 === t ? n : encodeURIComponent(n)),
                    o.push(r + "=" + i));
                }
                return o.join("&");
              }),
              (s.getRandomString = function () {
                return Math.random().toString(36).slice(2);
              }),
              (s.nullify = function (n) {
                s.each(n, function (e, t) {
                  n[t] = null;
                });
              }),
              (s.isOneOf = function (e) {
                return s.partial(s.contains, e);
              }),
              (s.passesOneOf = function (e) {
                if (!s.isArray(e))
                  throw new Error("validators should be an Array");
                return function (t) {
                  return s.any(e, function (e) {
                    return e(t);
                  });
                };
              }),
              (s.isURL = function (e) {
                return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(
                  e
                );
              }),
              (s.arrayBufferToString = function (e) {
                for (
                  var t,
                    n,
                    r = "",
                    i = new Uint8Array(e),
                    o = i.length,
                    a = Math.pow(2, 16),
                    s = 0;
                  s < o;
                  s += a
                )
                  (t = Math.min(a, o - s)),
                    (n = i.subarray(s, s + t)),
                    (r += String.fromCharCode.apply(null, n));
                return r;
              }),
              (s.isJSONString = function (e) {
                try {
                  JSON.parse(e);
                } catch (t) {
                  return !1;
                }
                return !0;
              }),
              (s.localStorage = (function () {
                var e = {
                  _data: {},
                  setItem: function (e, t) {
                    return (this._data[e] = String(t));
                  },
                  getItem: function (e) {
                    return this._data.hasOwnProperty(e) ? this._data[e] : null;
                  },
                  removeItem: function (e) {
                    return delete this._data[e];
                  },
                  clear: function () {
                    return (this._data = {});
                  },
                };
                try {
                  return "localStorage" in window
                    ? (window.localStorage.setItem("store", ""),
                      window.localStorage.removeItem("store"),
                      window.localStorage)
                    : e;
                } catch (t) {
                  return e;
                }
              })()),
              s
            );
          })();
        },
        {},
      ],
      44: [
        function (t, e, n) {
          e.exports = function () {
            var e = t("../vendor/userAgent.js")();
            return {
              isAndroidWebView: function () {
                return (
                  e.os.android &&
                  ((2 == e.os.version.major &&
                    /Version\/\d+.\d+|/i.test(e.ua)) ||
                    (4 == e.os.version.major &&
                      e.os.version.minor < 4 &&
                      /Version\/\d+.\d+|/i.test(e.ua)) ||
                    (/Version\/\d+\.\d+/i.test(e.ua) &&
                      (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(e.ua) ||
                        /; wv\)/i.test(e.ua))))
                );
              },
              isIOSKakaoTalkWebView: function () {
                return e.os.ios && /KAKAOTALK/i.test(e.ua);
              },
              isAndroidKakaoTalkWebView: function () {
                return e.os.android && /KAKAOTALK/i.test(e.ua);
              },
              isNewerAndroidKakaoTalkWebView: function () {
                return (
                  e.os.android &&
                  /KAKAOTALK/i.test(e.ua) &&
                  e.browser.chrome &&
                  71 <= e.browser.version.major
                );
              },
            };
          };
        },
        { "../vendor/userAgent.js": 48 },
      ],
      45: [
        function (e, t, n) {
          var c, r, i, o, u, a, I;
          t.exports =
            ((I = (function (s) {
              var e = {},
                t = (e.lib = {}),
                n = function n() {},
                r = (t.Base = {
                  extend: function (e) {
                    n.prototype = this;
                    var t = new n();
                    return (
                      e && t.mixIn(e),
                      t.hasOwnProperty("init") ||
                        (t.init = function () {
                          t.$super.init.apply(this, arguments);
                        }),
                      ((t.init.prototype = t).$super = this),
                      t
                    );
                  },
                  create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                  },
                  init: function () {},
                  mixIn: function (e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") &&
                      (this.toString = e.toString);
                  },
                  clone: function () {
                    return this.init.prototype.extend(this);
                  },
                }),
                c = (t.WordArray = r.extend({
                  init: function (e, t) {
                    (e = this.words = e || []),
                      (this.sigBytes = null != t ? t : 4 * e.length);
                  },
                  toString: function (e) {
                    return (e || o).stringify(this);
                  },
                  concat: function (e) {
                    var t = this.words,
                      n = e.words,
                      r = this.sigBytes;
                    if (((e = e.sigBytes), this.clamp(), r % 4))
                      for (var i = 0; i < e; i++)
                        t[(r + i) >>> 2] |=
                          ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                          (24 - ((r + i) % 4) * 8);
                    else if (65535 < n.length)
                      for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
                    else t.push.apply(t, n);
                    return (this.sigBytes += e), this;
                  },
                  clamp: function () {
                    var e = this.words,
                      t = this.sigBytes;
                    (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)),
                      (e.length = s.ceil(t / 4));
                  },
                  clone: function () {
                    var e = r.clone.call(this);
                    return (e.words = this.words.slice(0)), e;
                  },
                  random: function (e) {
                    for (var t = [], n = 0; n < e; n += 4)
                      t.push((4294967296 * s.random()) | 0);
                    return new c.init(t, e);
                  },
                })),
                i = (e.enc = {}),
                o = (i.Hex = {
                  stringify: function (e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], r = 0; r < e; r++) {
                      var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                      n.push((i >>> 4).toString(16)),
                        n.push((15 & i).toString(16));
                    }
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, n = [], r = 0; r < t; r += 2)
                      n[r >>> 3] |=
                        parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                    return new c.init(n, t / 2);
                  },
                }),
                a = (i.Latin1 = {
                  stringify: function (e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var n = [], r = 0; r < e; r++)
                      n.push(
                        String.fromCharCode(
                          (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
                        )
                      );
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, n = [], r = 0; r < t; r++)
                      n[r >>> 2] |=
                        (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                    return new c.init(n, t);
                  },
                }),
                u = (i.Utf8 = {
                  stringify: function (e) {
                    try {
                      return decodeURIComponent(escape(a.stringify(e)));
                    } catch (t) {
                      throw Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (e) {
                    return a.parse(unescape(encodeURIComponent(e)));
                  },
                }),
                l = (t.BufferedBlockAlgorithm = r.extend({
                  reset: function () {
                    (this._data = new c.init()), (this._nDataBytes = 0);
                  },
                  _append: function (e) {
                    "string" == typeof e && (e = u.parse(e)),
                      this._data.concat(e),
                      (this._nDataBytes += e.sigBytes);
                  },
                  _process: function (e) {
                    var t = this._data,
                      n = t.words,
                      r = t.sigBytes,
                      i = this.blockSize,
                      o = r / (4 * i);
                    if (
                      ((e =
                        (o = e
                          ? s.ceil(o)
                          : s.max((0 | o) - this._minBufferSize, 0)) * i),
                      (r = s.min(4 * e, r)),
                      e)
                    ) {
                      for (var a = 0; a < e; a += i) this._doProcessBlock(n, a);
                      (a = n.splice(0, e)), (t.sigBytes -= r);
                    }
                    return new c.init(a, r);
                  },
                  clone: function () {
                    var e = r.clone.call(this);
                    return (e._data = this._data.clone()), e;
                  },
                  _minBufferSize: 0,
                }));
              t.Hasher = l.extend({
                cfg: r.extend(),
                init: function (e) {
                  (this.cfg = this.cfg.extend(e)), this.reset();
                },
                reset: function () {
                  l.reset.call(this), this._doReset();
                },
                update: function (e) {
                  return this._append(e), this._process(), this;
                },
                finalize: function (e) {
                  return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function (n) {
                  return function (e, t) {
                    return new n.init(t).finalize(e);
                  };
                },
                _createHmacHelper: function (n) {
                  return function (e, t) {
                    return new p.HMAC.init(n, t).finalize(e);
                  };
                },
              });
              var p = (e.algo = {});
              return e;
            })(Math)),
            (c = I.lib.WordArray),
            (I.enc.Base64 = {
              stringify: function (e) {
                var t = e.words,
                  n = e.sigBytes,
                  r = this._map;
                e.clamp(), (e = []);
                for (var i = 0; i < n; i += 3)
                  for (
                    var o =
                        (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                        (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) &
                          255) <<
                          8) |
                        ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                      a = 0;
                    a < 4 && i + 0.75 * a < n;
                    a++
                  )
                    e.push(r.charAt((o >>> (6 * (3 - a))) & 63));
                if ((t = r.charAt(64))) for (; e.length % 4; ) e.push(t);
                return e.join("");
              },
              parse: function (e) {
                var t = e.length,
                  n = this._map;
                !(o = n.charAt(64)) || (-1 != (o = e.indexOf(o)) && (t = o));
                for (var r, i, o = [], a = 0, s = 0; s < t; s++) {
                  s % 4 &&
                    ((r = n.indexOf(e.charAt(s - 1)) << ((s % 4) * 2)),
                    (i = n.indexOf(e.charAt(s)) >>> (6 - (s % 4) * 2)),
                    (o[a >>> 2] |= (r | i) << (24 - (a % 4) * 8)),
                    a++);
                }
                return c.create(o, a);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            }),
            (function (o) {
              function S(e, t, n, r, i, o, a) {
                return (
                  (((e = e + ((t & n) | (~t & r)) + i + a) << o) |
                    (e >>> (32 - o))) +
                  t
                );
              }
              function A(e, t, n, r, i, o, a) {
                return (
                  (((e = e + ((t & r) | (n & ~r)) + i + a) << o) |
                    (e >>> (32 - o))) +
                  t
                );
              }
              function x(e, t, n, r, i, o, a) {
                return (
                  (((e = e + (t ^ n ^ r) + i + a) << o) | (e >>> (32 - o))) + t
                );
              }
              function O(e, t, n, r, i, o, a) {
                return (
                  (((e = e + (n ^ (t | ~r)) + i + a) << o) | (e >>> (32 - o))) +
                  t
                );
              }
              for (
                var e = I,
                  t = (r = e.lib).WordArray,
                  n = r.Hasher,
                  r = e.algo,
                  T = [],
                  i = 0;
                i < 64;
                i++
              )
                T[i] = (4294967296 * o.abs(o.sin(i + 1))) | 0;
              (r = r.MD5 =
                n.extend({
                  _doReset: function () {
                    this._hash = new t.init([
                      1732584193, 4023233417, 2562383102, 271733878,
                    ]);
                  },
                  _doProcessBlock: function (e, t) {
                    for (var n = 0; n < 16; n++) {
                      var r = e[(i = t + n)];
                      e[i] =
                        (16711935 & ((r << 8) | (r >>> 24))) |
                        (4278255360 & ((r << 24) | (r >>> 8)));
                    }
                    var n = this._hash.words,
                      i = e[t + 0],
                      r = e[t + 1],
                      o = e[t + 2],
                      a = e[t + 3],
                      s = e[t + 4],
                      c = e[t + 5],
                      u = e[t + 6],
                      l = e[t + 7],
                      p = e[t + 8],
                      d = e[t + 9],
                      f = e[t + 10],
                      m = e[t + 11],
                      h = e[t + 12],
                      g = e[t + 13],
                      y = e[t + 14],
                      v = e[t + 15],
                      k = S(
                        (k = n[0]),
                        (w = n[1]),
                        (_ = n[2]),
                        (b = n[3]),
                        i,
                        7,
                        T[0]
                      ),
                      b = S(b, k, w, _, r, 12, T[1]),
                      _ = S(_, b, k, w, o, 17, T[2]),
                      w = S(w, _, b, k, a, 22, T[3]),
                      k = S(k, w, _, b, s, 7, T[4]),
                      b = S(b, k, w, _, c, 12, T[5]),
                      _ = S(_, b, k, w, u, 17, T[6]),
                      w = S(w, _, b, k, l, 22, T[7]),
                      k = S(k, w, _, b, p, 7, T[8]),
                      b = S(b, k, w, _, d, 12, T[9]),
                      _ = S(_, b, k, w, f, 17, T[10]),
                      w = S(w, _, b, k, m, 22, T[11]),
                      k = S(k, w, _, b, h, 7, T[12]),
                      b = S(b, k, w, _, g, 12, T[13]),
                      _ = S(_, b, k, w, y, 17, T[14]),
                      k = A(
                        k,
                        (w = S(w, _, b, k, v, 22, T[15])),
                        _,
                        b,
                        r,
                        5,
                        T[16]
                      ),
                      b = A(b, k, w, _, u, 9, T[17]),
                      _ = A(_, b, k, w, m, 14, T[18]),
                      w = A(w, _, b, k, i, 20, T[19]),
                      k = A(k, w, _, b, c, 5, T[20]),
                      b = A(b, k, w, _, f, 9, T[21]),
                      _ = A(_, b, k, w, v, 14, T[22]),
                      w = A(w, _, b, k, s, 20, T[23]),
                      k = A(k, w, _, b, d, 5, T[24]),
                      b = A(b, k, w, _, y, 9, T[25]),
                      _ = A(_, b, k, w, a, 14, T[26]),
                      w = A(w, _, b, k, p, 20, T[27]),
                      k = A(k, w, _, b, g, 5, T[28]),
                      b = A(b, k, w, _, o, 9, T[29]),
                      _ = A(_, b, k, w, l, 14, T[30]),
                      k = x(
                        k,
                        (w = A(w, _, b, k, h, 20, T[31])),
                        _,
                        b,
                        c,
                        4,
                        T[32]
                      ),
                      b = x(b, k, w, _, p, 11, T[33]),
                      _ = x(_, b, k, w, m, 16, T[34]),
                      w = x(w, _, b, k, y, 23, T[35]),
                      k = x(k, w, _, b, r, 4, T[36]),
                      b = x(b, k, w, _, s, 11, T[37]),
                      _ = x(_, b, k, w, l, 16, T[38]),
                      w = x(w, _, b, k, f, 23, T[39]),
                      k = x(k, w, _, b, g, 4, T[40]),
                      b = x(b, k, w, _, i, 11, T[41]),
                      _ = x(_, b, k, w, a, 16, T[42]),
                      w = x(w, _, b, k, u, 23, T[43]),
                      k = x(k, w, _, b, d, 4, T[44]),
                      b = x(b, k, w, _, h, 11, T[45]),
                      _ = x(_, b, k, w, v, 16, T[46]),
                      k = O(
                        k,
                        (w = x(w, _, b, k, o, 23, T[47])),
                        _,
                        b,
                        i,
                        6,
                        T[48]
                      ),
                      b = O(b, k, w, _, l, 10, T[49]),
                      _ = O(_, b, k, w, y, 15, T[50]),
                      w = O(w, _, b, k, c, 21, T[51]),
                      k = O(k, w, _, b, h, 6, T[52]),
                      b = O(b, k, w, _, a, 10, T[53]),
                      _ = O(_, b, k, w, f, 15, T[54]),
                      w = O(w, _, b, k, r, 21, T[55]),
                      k = O(k, w, _, b, p, 6, T[56]),
                      b = O(b, k, w, _, v, 10, T[57]),
                      _ = O(_, b, k, w, u, 15, T[58]),
                      w = O(w, _, b, k, g, 21, T[59]),
                      k = O(k, w, _, b, s, 6, T[60]),
                      b = O(b, k, w, _, m, 10, T[61]),
                      _ = O(_, b, k, w, o, 15, T[62]),
                      w = O(w, _, b, k, d, 21, T[63]);
                    (n[0] = (n[0] + k) | 0),
                      (n[1] = (n[1] + w) | 0),
                      (n[2] = (n[2] + _) | 0),
                      (n[3] = (n[3] + b) | 0);
                  },
                  _doFinalize: function () {
                    var e = this._data,
                      t = e.words,
                      n = 8 * this._nDataBytes,
                      r = 8 * e.sigBytes;
                    t[r >>> 5] |= 128 << (24 - (r % 32));
                    var i = o.floor(n / 4294967296);
                    for (
                      t[15 + (((64 + r) >>> 9) << 4)] =
                        (16711935 & ((i << 8) | (i >>> 24))) |
                        (4278255360 & ((i << 24) | (i >>> 8))),
                        t[14 + (((64 + r) >>> 9) << 4)] =
                          (16711935 & ((n << 8) | (n >>> 24))) |
                          (4278255360 & ((n << 24) | (n >>> 8))),
                        e.sigBytes = 4 * (t.length + 1),
                        this._process(),
                        t = (e = this._hash).words,
                        n = 0;
                      n < 4;
                      n++
                    )
                      (r = t[n]),
                        (t[n] =
                          (16711935 & ((r << 8) | (r >>> 24))) |
                          (4278255360 & ((r << 24) | (r >>> 8))));
                    return e;
                  },
                  clone: function () {
                    var e = n.clone.call(this);
                    return (e._hash = this._hash.clone()), e;
                  },
                })),
                (e.MD5 = n._createHelper(r)),
                (e.HmacMD5 = n._createHmacHelper(r));
            })(Math),
            (i = (r = I).lib),
            (o = i.Base),
            (u = i.WordArray),
            (a = (i = r.algo).EvpKDF =
              o.extend({
                cfg: o.extend({ keySize: 4, hasher: i.MD5, iterations: 1 }),
                init: function (e) {
                  this.cfg = this.cfg.extend(e);
                },
                compute: function (e, t) {
                  for (
                    var n = (a = this.cfg).hasher.create(),
                      r = u.create(),
                      i = r.words,
                      o = a.keySize,
                      a = a.iterations;
                    i.length < o;

                  ) {
                    s && n.update(s);
                    var s = n.update(e).finalize(t);
                    n.reset();
                    for (var c = 1; c < a; c++) (s = n.finalize(s)), n.reset();
                    r.concat(s);
                  }
                  return (r.sigBytes = 4 * o), r;
                },
              })),
            (r.EvpKDF = function (e, t, n) {
              return a.create(n).compute(e, t);
            }),
            I.lib.Cipher ||
              (function () {
                var e = (d = I).lib,
                  t = e.Base,
                  a = e.WordArray,
                  n = e.BufferedBlockAlgorithm,
                  r = d.enc.Base64,
                  i = d.algo.EvpKDF,
                  o = (e.Cipher = n.extend({
                    cfg: t.extend(),
                    createEncryptor: function (e, t) {
                      return this.create(this._ENC_XFORM_MODE, e, t);
                    },
                    createDecryptor: function (e, t) {
                      return this.create(this._DEC_XFORM_MODE, e, t);
                    },
                    init: function (e, t, n) {
                      (this.cfg = this.cfg.extend(n)),
                        (this._xformMode = e),
                        (this._key = t),
                        this.reset();
                    },
                    reset: function () {
                      n.reset.call(this), this._doReset();
                    },
                    process: function (e) {
                      return this._append(e), this._process();
                    },
                    finalize: function (e) {
                      return e && this._append(e), this._doFinalize();
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function (r) {
                      return {
                        encrypt: function (e, t, n) {
                          return ("string" == typeof t ? f : p).encrypt(
                            r,
                            e,
                            t,
                            n
                          );
                        },
                        decrypt: function (e, t, n) {
                          return ("string" == typeof t ? f : p).decrypt(
                            r,
                            e,
                            t,
                            n
                          );
                        },
                      };
                    },
                  }));
                e.StreamCipher = o.extend({
                  _doFinalize: function () {
                    return this._process(!0);
                  },
                  blockSize: 1,
                });
                var s = (d.mode = {}),
                  c = function c(e, t, n) {
                    var r = this._iv;
                    r ? (this._iv = void 0) : (r = this._prevBlock);
                    for (var i = 0; i < n; i++) e[t + i] ^= r[i];
                  },
                  u = (e.BlockCipherMode = t.extend({
                    createEncryptor: function (e, t) {
                      return this.Encryptor.create(e, t);
                    },
                    createDecryptor: function (e, t) {
                      return this.Decryptor.create(e, t);
                    },
                    init: function (e, t) {
                      (this._cipher = e), (this._iv = t);
                    },
                  })).extend();
                (u.Encryptor = u.extend({
                  processBlock: function (e, t) {
                    var n = this._cipher,
                      r = n.blockSize;
                    c.call(this, e, t, r),
                      n.encryptBlock(e, t),
                      (this._prevBlock = e.slice(t, t + r));
                  },
                })),
                  (u.Decryptor = u.extend({
                    processBlock: function (e, t) {
                      var n = this._cipher,
                        r = n.blockSize,
                        i = e.slice(t, t + r);
                      n.decryptBlock(e, t),
                        c.call(this, e, t, r),
                        (this._prevBlock = i);
                    },
                  })),
                  (s = s.CBC = u),
                  (u = (d.pad = {}).Pkcs7 =
                    {
                      pad: function (e, t) {
                        for (
                          var n = 4 * t,
                            r =
                              ((n = n - (e.sigBytes % n)) << 24) |
                              (n << 16) |
                              (n << 8) |
                              n,
                            i = [],
                            o = 0;
                          o < n;
                          o += 4
                        )
                          i.push(r);
                        (n = a.create(i, n)), e.concat(n);
                      },
                      unpad: function (e) {
                        e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
                      },
                    }),
                  (e.BlockCipher = o.extend({
                    cfg: o.cfg.extend({ mode: s, padding: u }),
                    reset: function () {
                      o.reset.call(this);
                      var e,
                        t = (n = this.cfg).iv,
                        n = n.mode;
                      this._xformMode == this._ENC_XFORM_MODE
                        ? (e = n.createEncryptor)
                        : ((e = n.createDecryptor), (this._minBufferSize = 1)),
                        (this._mode = e.call(n, this, t && t.words));
                    },
                    _doProcessBlock: function (e, t) {
                      this._mode.processBlock(e, t);
                    },
                    _doFinalize: function () {
                      var e,
                        t = this.cfg.padding;
                      return (
                        this._xformMode == this._ENC_XFORM_MODE
                          ? (t.pad(this._data, this.blockSize),
                            (e = this._process(!0)))
                          : ((e = this._process(!0)), t.unpad(e)),
                        e
                      );
                    },
                    blockSize: 4,
                  }));
                var l = (e.CipherParams = t.extend({
                    init: function (e) {
                      this.mixIn(e);
                    },
                    toString: function (e) {
                      return (e || this.formatter).stringify(this);
                    },
                  })),
                  s = ((d.format = {}).OpenSSL = {
                    stringify: function (e) {
                      var t = e.ciphertext;
                      return (
                        (e = e.salt)
                          ? a
                              .create([1398893684, 1701076831])
                              .concat(e)
                              .concat(t)
                          : t
                      ).toString(r);
                    },
                    parse: function (e) {
                      var t,
                        n = (e = r.parse(e)).words;
                      return (
                        1398893684 == n[0] &&
                          1701076831 == n[1] &&
                          ((t = a.create(n.slice(2, 4))),
                          n.splice(0, 4),
                          (e.sigBytes -= 16)),
                        l.create({ ciphertext: e, salt: t })
                      );
                    },
                  }),
                  p = (e.SerializableCipher = t.extend({
                    cfg: t.extend({ format: s }),
                    encrypt: function (e, t, n, r) {
                      r = this.cfg.extend(r);
                      var i = e.createEncryptor(n, r);
                      return (
                        (t = i.finalize(t)),
                        (i = i.cfg),
                        l.create({
                          ciphertext: t,
                          key: n,
                          iv: i.iv,
                          algorithm: e,
                          mode: i.mode,
                          padding: i.padding,
                          blockSize: e.blockSize,
                          formatter: r.format,
                        })
                      );
                    },
                    decrypt: function (e, t, n, r) {
                      return (
                        (r = this.cfg.extend(r)),
                        (t = this._parse(t, r.format)),
                        e.createDecryptor(n, r).finalize(t.ciphertext)
                      );
                    },
                    _parse: function (e, t) {
                      return "string" == typeof e ? t.parse(e, this) : e;
                    },
                  })),
                  d = ((d.kdf = {}).OpenSSL = {
                    execute: function (e, t, n, r) {
                      return (
                        (r = r || a.random(8)),
                        (e = i.create({ keySize: t + n }).compute(e, r)),
                        (n = a.create(e.words.slice(t), 4 * n)),
                        (e.sigBytes = 4 * t),
                        l.create({ key: e, iv: n, salt: r })
                      );
                    },
                  }),
                  f = (e.PasswordBasedCipher = p.extend({
                    cfg: p.cfg.extend({ kdf: d }),
                    encrypt: function (e, t, n, r) {
                      return (
                        (n = (r = this.cfg.extend(r)).kdf.execute(
                          n,
                          e.keySize,
                          e.ivSize
                        )),
                        (r.iv = n.iv),
                        (e = p.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                        e
                      );
                    },
                    decrypt: function (e, t, n, r) {
                      return (
                        (r = this.cfg.extend(r)),
                        (t = this._parse(t, r.format)),
                        (n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt)),
                        (r.iv = n.iv),
                        p.decrypt.call(this, e, t, n.key, r)
                      );
                    },
                  }));
              })(),
            (function () {
              for (
                var e = I,
                  t = e.lib.BlockCipher,
                  n = e.algo,
                  a = [],
                  r = [],
                  i = [],
                  o = [],
                  s = [],
                  c = [],
                  u = [],
                  l = [],
                  p = [],
                  d = [],
                  f = [],
                  m = 0;
                m < 256;
                m++
              )
                f[m] = m < 128 ? m << 1 : (m << 1) ^ 283;
              for (var h = 0, g = 0, m = 0; m < 256; m++) {
                var y =
                  ((y = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)) >>> 8) ^
                  (255 & y) ^
                  99;
                a[h] = y;
                var v = f[(r[y] = h)],
                  k = f[v],
                  b = f[k],
                  _ = (257 * f[y]) ^ (16843008 * y);
                (i[h] = (_ << 24) | (_ >>> 8)),
                  (o[h] = (_ << 16) | (_ >>> 16)),
                  (s[h] = (_ << 8) | (_ >>> 24)),
                  (c[h] = _),
                  (_ =
                    (16843009 * b) ^ (65537 * k) ^ (257 * v) ^ (16843008 * h)),
                  (u[y] = (_ << 24) | (_ >>> 8)),
                  (l[y] = (_ << 16) | (_ >>> 16)),
                  (p[y] = (_ << 8) | (_ >>> 24)),
                  (d[y] = _),
                  h ? ((h = v ^ f[f[f[b ^ v]]]), (g ^= f[f[g]])) : (h = g = 1);
              }
              var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                n = (n.AES = t.extend({
                  _doReset: function () {
                    for (
                      var e,
                        t = (r = this._key).words,
                        n = r.sigBytes / 4,
                        r = 4 * ((this._nRounds = n + 6) + 1),
                        i = (this._keySchedule = []),
                        o = 0;
                      o < r;
                      o++
                    ) {
                      o < n
                        ? (i[o] = t[o])
                        : ((e = i[o - 1]),
                          o % n
                            ? 6 < n &&
                              4 == o % n &&
                              (e =
                                (a[e >>> 24] << 24) |
                                (a[(e >>> 16) & 255] << 16) |
                                (a[(e >>> 8) & 255] << 8) |
                                a[255 & e])
                            : ((e =
                                (a[(e = (e << 8) | (e >>> 24)) >>> 24] << 24) |
                                (a[(e >>> 16) & 255] << 16) |
                                (a[(e >>> 8) & 255] << 8) |
                                a[255 & e]),
                              (e ^= w[(o / n) | 0] << 24)),
                          (i[o] = i[o - n] ^ e));
                    }
                    for (t = this._invKeySchedule = [], n = 0; n < r; n++)
                      (o = r - n),
                        (e = n % 4 ? i[o] : i[o - 4]),
                        (t[n] =
                          n < 4 || o <= 4
                            ? e
                            : u[a[e >>> 24]] ^
                              l[a[(e >>> 16) & 255]] ^
                              p[a[(e >>> 8) & 255]] ^
                              d[a[255 & e]]);
                  },
                  encryptBlock: function (e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, i, o, s, c, a);
                  },
                  decryptBlock: function (e, t) {
                    var n = e[t + 1];
                    (e[t + 1] = e[t + 3]),
                      (e[t + 3] = n),
                      this._doCryptBlock(
                        e,
                        t,
                        this._invKeySchedule,
                        u,
                        l,
                        p,
                        d,
                        r
                      ),
                      (n = e[t + 1]),
                      (e[t + 1] = e[t + 3]),
                      (e[t + 3] = n);
                  },
                  _doCryptBlock: function (e, t, n, r, i, o, a, s) {
                    for (
                      var c = this._nRounds,
                        u = e[t] ^ n[0],
                        l = e[t + 1] ^ n[1],
                        p = e[t + 2] ^ n[2],
                        d = e[t + 3] ^ n[3],
                        f = 4,
                        m = 1;
                      m < c;
                      m++
                    )
                      var h =
                          r[u >>> 24] ^
                          i[(l >>> 16) & 255] ^
                          o[(p >>> 8) & 255] ^
                          a[255 & d] ^
                          n[f++],
                        g =
                          r[l >>> 24] ^
                          i[(p >>> 16) & 255] ^
                          o[(d >>> 8) & 255] ^
                          a[255 & u] ^
                          n[f++],
                        y =
                          r[p >>> 24] ^
                          i[(d >>> 16) & 255] ^
                          o[(u >>> 8) & 255] ^
                          a[255 & l] ^
                          n[f++],
                        d =
                          r[d >>> 24] ^
                          i[(u >>> 16) & 255] ^
                          o[(l >>> 8) & 255] ^
                          a[255 & p] ^
                          n[f++],
                        u = h,
                        l = g,
                        p = y;
                    (h =
                      ((s[u >>> 24] << 24) |
                        (s[(l >>> 16) & 255] << 16) |
                        (s[(p >>> 8) & 255] << 8) |
                        s[255 & d]) ^
                      n[f++]),
                      (g =
                        ((s[l >>> 24] << 24) |
                          (s[(p >>> 16) & 255] << 16) |
                          (s[(d >>> 8) & 255] << 8) |
                          s[255 & u]) ^
                        n[f++]),
                      (y =
                        ((s[p >>> 24] << 24) |
                          (s[(d >>> 16) & 255] << 16) |
                          (s[(u >>> 8) & 255] << 8) |
                          s[255 & l]) ^
                        n[f++]),
                      (d =
                        ((s[d >>> 24] << 24) |
                          (s[(u >>> 16) & 255] << 16) |
                          (s[(l >>> 8) & 255] << 8) |
                          s[255 & p]) ^
                        n[f++]),
                      (e[t] = h),
                      (e[t + 1] = g),
                      (e[t + 2] = y),
                      (e[t + 3] = d);
                  },
                  keySize: 8,
                }));
              e.AES = t._createHelper(n);
            })(),
            I);
        },
        {},
      ],
      46: [
        function (e, t, n) {
          t.exports =
            ((function (h, l, p, g, d, f) {
              var c,
                u,
                m,
                y,
                v,
                k = this || h,
                b = Math.floor(1e4 * Math.random()),
                _ = Function.prototype,
                w = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
                n = /[\-\w]+\/\.\.\//,
                r = /([^:])\/\//g,
                S = "",
                A = {},
                t = h.easyXDM,
                x = "easyXDM_",
                O = !1;
              function T(e, t) {
                var n = _typeof(e[t]);
                return (
                  "function" == n || ("object" == n && e[t]) || "unknown" == n
                );
              }
              function I() {
                var e,
                  t,
                  n = "Shockwave Flash",
                  r = "application/x-shockwave-flash";
                if (
                  (P(navigator.plugins) ||
                    "object" != _typeof(navigator.plugins[n]) ||
                    ((e = navigator.plugins[n].description) &&
                      !P(navigator.mimeTypes) &&
                      navigator.mimeTypes[r] &&
                      navigator.mimeTypes[r].enabledPlugin &&
                      (u = e.match(/\d+/g))),
                  !u)
                )
                  try {
                    (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
                      (u = Array.prototype.slice.call(
                        t
                          .GetVariable("$version")
                          .match(/(\d+),(\d+),(\d+),(\d+)/),
                        1
                      )),
                      (t = null);
                  } catch (a) {}
                if (u) {
                  var i = parseInt(u[0], 10),
                    o = parseInt(u[1], 10);
                  return (m = 9 < i && 0 < o), 1;
                }
              }
              if (T(h, "addEventListener"))
                (y = function y(e, t, n) {
                  e.addEventListener(t, n, !1);
                }),
                  (v = function v(e, t, n) {
                    e.removeEventListener(t, n, !1);
                  });
              else {
                if (!T(h, "attachEvent"))
                  throw new Error("Browser not supported");
                (y = function y(e, t, n) {
                  e.attachEvent("on" + t, n);
                }),
                  (v = function v(e, t, n) {
                    e.detachEvent("on" + t, n);
                  });
              }
              var e,
                i,
                o = !1,
                a = [];
              function s() {
                if (!o) {
                  o = !0;
                  for (var e = 0; e < a.length; e++) a[e]();
                  a.length = 0;
                }
              }
              function E(e, t) {
                o
                  ? e.call(t)
                  : a.push(function () {
                      e.call(t);
                    });
              }
              function R(e) {
                return e.match(w)[3];
              }
              function C(e) {
                if (0 <= e.indexOf("file://")) return "file://";
                var t = e.toLowerCase().match(w);
                if (!t) return "";
                var n = t[2],
                  r = t[3],
                  i = t[4] || "";
                return (
                  (("http:" == n && ":80" == i) ||
                    ("https:" == n && ":443" == i)) &&
                    (i = ""),
                  n + "//" + r + i
                );
              }
              function U(e) {
                var t;
                for (
                  (e = e.replace(r, "$1/")).match(/^(http||https):\/\//) ||
                  ("/" !==
                    (t = "/" === e.substring(0, 1) ? "" : p.pathname).substring(
                      t.length - 1
                    ) && (t = t.substring(0, t.lastIndexOf("/") + 1)),
                  (e = p.protocol + "//" + p.host + t + e));
                  n.test(e);

                )
                  e = e.replace(n, "");
                return e;
              }
              function L(e, t) {
                var n = "",
                  r = e.indexOf("#");
                -1 !== r && ((n = e.substring(r)), (e = e.substring(0, r)));
                var i = [];
                for (var o in t)
                  t.hasOwnProperty(o) && i.push(o + "=" + f(t[o]));
                return (
                  e +
                  (O ? "#" : -1 == e.indexOf("?") ? "?" : "&") +
                  i.join("&") +
                  n
                );
              }
              (o =
                "readyState" in l
                  ? "complete" == (e = l.readyState) ||
                    (~navigator.userAgent.indexOf("AppleWebKit/") &&
                      ("loaded" == e || "interactive" == e))
                  : !!l.body) ||
                (T(h, "addEventListener")
                  ? y(l, "DOMContentLoaded", s)
                  : (y(l, "readystatechange", function () {
                      "complete" == l.readyState && s();
                    }),
                    l.documentElement.doScroll &&
                      h === top &&
                      ((i = function i() {
                        if (!o) {
                          try {
                            l.documentElement.doScroll("left");
                          } catch (e) {
                            return void g(i, 1);
                          }
                          s();
                        }
                      }),
                      i())),
                y(h, "load", s));
              var K = (function (e) {
                for (
                  var t, n = {}, r = (e = e.substring(1).split("&")).length;
                  r--;

                )
                  n[(t = e[r].split("="))[0]] = d(t[1]);
                return n;
              })(/xdm_e=/.test(p.search) ? p.search : p.hash);
              function P(e) {
                return void 0 === e;
              }
              var j,
                N = function () {
                  var e = {},
                    t = { a: [1, 2, 3] },
                    n = '{"a":[1,2,3]}';
                  return "undefined" != typeof JSON &&
                    "function" == typeof JSON.stringify &&
                    JSON.stringify(t).replace(/\s/g, "") === n
                    ? JSON
                    : (Object.toJSON &&
                        Object.toJSON(t).replace(/\s/g, "") === n &&
                        (e.stringify = Object.toJSON),
                      "function" == typeof String.prototype.evalJSON &&
                        (t = n.evalJSON()).a &&
                        3 === t.a.length &&
                        3 === t.a[2] &&
                        (e.parse = function (e) {
                          return e.evalJSON();
                        }),
                      e.stringify && e.parse
                        ? ((N = function () {
                            return e;
                          }),
                          e)
                        : null);
                };
              function B(e, t, n) {
                var r;
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (i in e
                      ? "object" ===
                        (void 0 === (r = t[i]) ? "undefined" : _typeof(r))
                        ? B(e[i], r, n)
                        : n || (e[i] = t[i])
                      : (e[i] = t[i]));
                return e;
              }
              function F(e) {
                var t, n, r;
                P(c) &&
                  ((t = l.body.appendChild(l.createElement("form"))),
                  ((n = t.appendChild(l.createElement("input"))).name =
                    x + "TEST" + b),
                  (c = n !== t.elements[n.name]),
                  l.body.removeChild(t)),
                  c
                    ? (r = l.createElement(
                        '<iframe name="' + e.props.name + '"/>'
                      ))
                    : ((r = l.createElement("IFRAME")).name = e.props.name),
                  (r.id = r.name = e.props.name),
                  delete e.props.name,
                  "string" == typeof e.container &&
                    (e.container = l.getElementById(e.container)),
                  e.container ||
                    (B(r.style, {
                      position: "absolute",
                      top: "-2000px",
                      left: "0px",
                    }),
                    (e.container = l.body));
                var i = e.props.src;
                if (
                  ((e.props.src = "javascript:false"),
                  B(r, e.props),
                  (r.border = r.frameBorder = 0),
                  (r.allowTransparency = !0),
                  e.container.appendChild(r),
                  e.onLoad && y(r, "load", e.onLoad),
                  e.usePost)
                ) {
                  var o,
                    a = e.container.appendChild(l.createElement("form"));
                  if (
                    ((a.target = r.name),
                    (a.action = i),
                    (a.method = "POST"),
                    "object" === _typeof(e.usePost))
                  )
                    for (var s in e.usePost)
                      e.usePost.hasOwnProperty(s) &&
                        (c
                          ? (o = l.createElement('<input name="' + s + '"/>'))
                          : ((o = l.createElement("INPUT")).name = s),
                        (o.value = e.usePost[s]),
                        a.appendChild(o));
                  a.submit(), a.parentNode.removeChild(a);
                } else r.src = i;
                return (e.props.src = i), r;
              }
              function M(e) {
                var t,
                  n = e.protocol;
                if (
                  ((e.isHost = e.isHost || P(K.xdm_p)),
                  (O = e.hash || !1),
                  e.props || (e.props = {}),
                  e.isHost)
                )
                  (e.remote = U(e.remote)),
                    (e.channel = e.channel || "default" + b++),
                    (e.secret = Math.random().toString(16).substring(2)),
                    P(n) &&
                      (n =
                        C(p.href) == C(e.remote)
                          ? "4"
                          : T(h, "postMessage") || T(l, "postMessage")
                          ? "1"
                          : e.swf && T(h, "ActiveXObject") && I()
                          ? "6"
                          : "Gecko" === navigator.product &&
                            "frameElement" in h &&
                            -1 == navigator.userAgent.indexOf("WebKit")
                          ? "5"
                          : e.remoteHelper
                          ? "2"
                          : "0");
                else if (
                  ((e.channel = K.xdm_c.replace(/["'<>\\]/g, "")),
                  (e.secret = K.xdm_s),
                  (e.remote = K.xdm_e.replace(/["'<>\\]/g, "")),
                  (n = K.xdm_p),
                  e.acl &&
                    !(function (e, t) {
                      "string" == typeof e && (e = [e]);
                      for (var n = e.length; n--; ) {
                        var r =
                          "^" === e[n].substr(0, 1) &&
                          "$" === e[n].substr(e[n].length - 1, 1)
                            ? e[n]
                            : "^" +
                              e[n]
                                .replace(/[-[\]/{}()+.\^$|]/g, "\\$&")
                                .replace(/(\*)/g, ".$1")
                                .replace(/\?/g, ".") +
                              "$";
                        if ((r = new RegExp(r)).test(t)) return 1;
                      }
                    })(e.acl, e.remote))
                )
                  throw new Error("Access denied for " + e.remote);
                switch ((e.protocol = n)) {
                  case "0":
                    if (
                      (B(
                        e,
                        {
                          interval: 100,
                          delay: 2e3,
                          useResize: !0,
                          useParent: !1,
                          usePolling: !1,
                        },
                        !0
                      ),
                      e.isHost)
                    ) {
                      if (!e.local) {
                        for (
                          var r,
                            i = p.protocol + "//" + p.host,
                            o = l.body.getElementsByTagName("img"),
                            a = o.length;
                          a--;

                        )
                          if ((r = o[a]).src.substring(0, i.length) === i) {
                            e.local = r.src;
                            break;
                          }
                        e.local || (e.local = h);
                      }
                      var s = { xdm_c: e.channel, xdm_p: 0 };
                      e.local === h
                        ? ((e.usePolling = !0),
                          (e.useParent = !0),
                          (e.local =
                            p.protocol + "//" + p.host + p.pathname + p.search),
                          (s.xdm_e = e.local),
                          (s.xdm_pa = 1))
                        : (s.xdm_e = U(e.local)),
                        e.container && ((e.useResize = !1), (s.xdm_po = 1)),
                        (e.remote = L(e.remote, s));
                    } else
                      B(e, {
                        useParent: !P(K.xdm_pa),
                        usePolling: !P(K.xdm_po),
                        useResize: !e.useParent && e.useResize,
                      });
                    t = [
                      new A.stack.HashTransport(e),
                      new A.stack.ReliableBehavior({}),
                      new A.stack.QueueBehavior({
                        encode: !0,
                        maxLength: 4e3 - e.remote.length,
                      }),
                      new A.stack.VerifyBehavior({ initiate: e.isHost }),
                    ];
                    break;
                  case "1":
                    t = [new A.stack.PostMessageTransport(e)];
                    break;
                  case "2":
                    e.isHost && (e.remoteHelper = U(e.remoteHelper)),
                      (t = [
                        new A.stack.NameTransport(e),
                        new A.stack.QueueBehavior(),
                        new A.stack.VerifyBehavior({ initiate: e.isHost }),
                      ]);
                    break;
                  case "3":
                    t = [new A.stack.NixTransport(e)];
                    break;
                  case "4":
                    t = [new A.stack.SameOriginTransport(e)];
                    break;
                  case "5":
                    t = [new A.stack.FrameElementTransport(e)];
                    break;
                  case "6":
                    u || I(), (t = [new A.stack.FlashTransport(e)]);
                }
                return (
                  t.push(
                    new A.stack.QueueBehavior({ lazy: e.lazy, remove: !0 })
                  ),
                  t
                );
              }
              function q(e) {
                for (
                  var t,
                    n = {
                      incoming: function (e, t) {
                        this.up.incoming(e, t);
                      },
                      outgoing: function (e, t) {
                        this.down.outgoing(e, t);
                      },
                      callback: function (e) {
                        this.up.callback(e);
                      },
                      init: function () {
                        this.down.init();
                      },
                      destroy: function () {
                        this.down.destroy();
                      },
                    },
                    r = 0,
                    i = e.length;
                  r < i;
                  r++
                )
                  B((t = e[r]), n, !0),
                    0 !== r && (t.down = e[r - 1]),
                    r !== i - 1 && (t.up = e[r + 1]);
                return t;
              }
              B(A, {
                version: "2.5.00.1",
                query: K,
                stack: {},
                apply: B,
                getJSONObject: N,
                whenReady: E,
                noConflict: function (e) {
                  return (
                    (h.easyXDM = t),
                    (S = e) && (x = "easyXDM_" + S.replace(".", "_") + "_"),
                    A
                  );
                },
              }),
                (A.DomHelper = {
                  on: y,
                  un: v,
                  requiresJSON: function (e) {
                    var t, n;
                    ("object" == _typeof((t = h)[(n = "JSON")]) && t[n]) ||
                      l.write(
                        '<script type="text/javascript" src="' +
                          e +
                          '"></script>'
                      );
                  },
                }),
                (j = {}),
                (A.Fn = {
                  set: function (e, t) {
                    j[e] = t;
                  },
                  get: function (e, t) {
                    if (j.hasOwnProperty(e)) {
                      var n = j[e];
                      return t && delete j[e], n;
                    }
                  },
                }),
                (A.Socket = function (n) {
                  var t = q(
                      M(n).concat([
                        {
                          incoming: function (e, t) {
                            n.onMessage(e, t);
                          },
                          callback: function (e) {
                            n.onReady && n.onReady(e);
                          },
                        },
                      ])
                    ),
                    r = C(n.remote);
                  (this.origin = C(n.remote)),
                    (this.destroy = function () {
                      t.destroy();
                    }),
                    (this.postMessage = function (e) {
                      t.outgoing(e, r);
                    }),
                    t.init();
                }),
                (A.Rpc = function (t, e) {
                  if (e.local)
                    for (var n in e.local) {
                      var r;
                      !e.local.hasOwnProperty(n) ||
                        ("function" == typeof (r = e.local[n]) &&
                          (e.local[n] = { method: r }));
                    }
                  var i = q(
                    M(t).concat([
                      new A.stack.RpcBehavior(this, e),
                      {
                        callback: function (e) {
                          t.onReady && t.onReady(e);
                        },
                      },
                    ])
                  );
                  (this.origin = C(t.remote)),
                    (this.context = t.context || null),
                    (this.destroy = function () {
                      i.destroy();
                    }),
                    i.init();
                }),
                (A.stack.SameOriginTransport = function (e) {
                  var t, n, r, i;
                  return (t = {
                    outgoing: function (e, t, n) {
                      r(e), n && n();
                    },
                    destroy: function () {
                      n && (n.parentNode.removeChild(n), (n = null));
                    },
                    onDOMReady: function () {
                      (i = C(e.remote)),
                        e.isHost
                          ? (B(e.props, {
                              src: L(e.remote, {
                                xdm_e: p.protocol + "//" + p.host + p.pathname,
                                xdm_c: e.channel,
                                xdm_p: 4,
                              }),
                              name: x + e.channel + "_provider",
                            }),
                            (n = F(e)),
                            A.Fn.set(e.channel, function (e) {
                              return (
                                (r = e),
                                g(function () {
                                  t.up.callback(!0);
                                }, 0),
                                function (e) {
                                  t.up.incoming(e, i);
                                }
                              );
                            }))
                          : ((r = (function () {
                              var e = parent;
                              if ("" !== S)
                                for (
                                  var t = 0, n = S.split(".");
                                  t < n.length;
                                  t++
                                )
                                  e = e[n[t]];
                              return e.easyXDM;
                            })().Fn.get(
                              e.channel,
                              !0
                            )(function (e) {
                              t.up.incoming(e, i);
                            })),
                            g(function () {
                              t.up.callback(!0);
                            }, 0));
                    },
                    init: function () {
                      E(t.onDOMReady, t);
                    },
                  });
                }),
                (A.stack.FlashTransport = function (i) {
                  var n, r, o, a, s;
                  function c(e, t) {
                    g(function () {
                      n.up.incoming(e, o);
                    }, 0);
                  }
                  function u(n) {
                    var e = i.swf + "?host=" + i.isHost,
                      t = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                    A.Fn.set(
                      "flash_loaded" + n.replace(/[\-.]/g, "_"),
                      function () {
                        A.stack.FlashTransport[n].swf = a = s.firstChild;
                        for (
                          var e = A.stack.FlashTransport[n].queue, t = 0;
                          t < e.length;
                          t++
                        )
                          e[t]();
                        e.length = 0;
                      }
                    ),
                      i.swfContainer
                        ? (s =
                            "string" == typeof i.swfContainer
                              ? l.getElementById(i.swfContainer)
                              : i.swfContainer)
                        : (B(
                            (s = l.createElement("div")).style,
                            m && i.swfNoThrottle
                              ? {
                                  height: "20px",
                                  width: "20px",
                                  position: "fixed",
                                  right: 0,
                                  top: 0,
                                }
                              : {
                                  height: "1px",
                                  width: "1px",
                                  position: "absolute",
                                  overflow: "hidden",
                                  right: 0,
                                  top: 0,
                                }
                          ),
                          l.body.appendChild(s));
                    var r =
                      "callback=flash_loaded" +
                      f(n.replace(/[\-.]/g, "_")) +
                      "&proto=" +
                      k.location.protocol +
                      "&domain=" +
                      f(R(k.location.href)) +
                      "&port=" +
                      f(k.location.href.match(w)[4] || "") +
                      "&ns=" +
                      f(S);
                    s.innerHTML =
                      "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
                      t +
                      "' data='" +
                      e +
                      "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
                      e +
                      "'></param><param name='flashvars' value='" +
                      r +
                      "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
                      r +
                      "' allowScriptAccess='always' wmode='transparent' src='" +
                      e +
                      "' height='1' width='1'></embed></object>";
                  }
                  return (n = {
                    outgoing: function (e, t, n) {
                      a.postMessage(i.channel, e.toString()), n && n();
                    },
                    destroy: function () {
                      try {
                        a.destroyChannel(i.channel);
                      } catch (e) {}
                      (a = null),
                        r && (r.parentNode.removeChild(r), (r = null));
                    },
                    onDOMReady: function () {
                      (o = i.remote),
                        A.Fn.set("flash_" + i.channel + "_init", function () {
                          g(function () {
                            n.up.callback(!0);
                          });
                        }),
                        A.Fn.set("flash_" + i.channel + "_onMessage", c),
                        (i.swf = U(i.swf));
                      var e = R(i.swf),
                        t = function t() {
                          (A.stack.FlashTransport[e].init = !0),
                            (a = A.stack.FlashTransport[e].swf).createChannel(
                              i.channel,
                              i.secret,
                              C(i.remote),
                              i.isHost
                            ),
                            i.isHost &&
                              (m &&
                                i.swfNoThrottle &&
                                B(i.props, {
                                  position: "fixed",
                                  right: 0,
                                  top: 0,
                                  height: "20px",
                                  width: "20px",
                                }),
                              B(i.props, {
                                src: L(i.remote, {
                                  xdm_e: C(p.href),
                                  xdm_c: i.channel,
                                  xdm_p: 6,
                                  xdm_s: i.secret,
                                }),
                                name: x + i.channel + "_provider",
                              }),
                              (r = F(i)));
                        };
                      A.stack.FlashTransport[e] &&
                      A.stack.FlashTransport[e].init
                        ? t()
                        : A.stack.FlashTransport[e]
                        ? A.stack.FlashTransport[e].queue.push(t)
                        : ((A.stack.FlashTransport[e] = { queue: [t] }), u(e));
                    },
                    init: function () {
                      E(n.onDOMReady, n);
                    },
                  });
                }),
                (A.stack.PostMessageTransport = function (r) {
                  var n, t, i, o;
                  function a(e) {
                    var t;
                    "string" != typeof e.data ||
                      ((t = (function (e) {
                        if (e.origin) return C(e.origin);
                        if (e.uri) return C(e.uri);
                        if (e.domain) return p.protocol + "//" + e.domain;
                        throw "Unable to retrieve the origin of the event";
                      })(e)) == o &&
                        "string" == typeof e.data &&
                        e.data.substring(0, r.channel.length + 1) ==
                          r.channel + " " &&
                        n.up.incoming(
                          e.data.substring(r.channel.length + 1),
                          t
                        ));
                  }
                  function s(e) {
                    e.data == r.channel + "-ready" &&
                      ((i =
                        "postMessage" in t.contentWindow
                          ? t.contentWindow
                          : t.contentWindow.document),
                      v(h, "message", s),
                      y(h, "message", a),
                      g(function () {
                        n.up.callback(!0);
                      }, 0));
                  }
                  return (n = {
                    outgoing: function (e, t, n) {
                      i.postMessage(r.channel + " " + e, t || o), n && n();
                    },
                    destroy: function () {
                      v(h, "message", s),
                        v(h, "message", a),
                        t &&
                          ((i = null), t.parentNode.removeChild(t), (t = null));
                    },
                    onDOMReady: function () {
                      "file://" === (o = C(r.remote)) && (o = "*"),
                        r.isHost
                          ? (y(h, "message", s),
                            B(r.props, {
                              src: L(r.remote, {
                                xdm_e: C(p.href),
                                xdm_c: r.channel,
                                xdm_p: 1,
                              }),
                              name: x + r.channel + "_provider",
                            }),
                            (t = F(r)))
                          : (y(h, "message", a),
                            (i =
                              "postMessage" in h.parent
                                ? h.parent
                                : h.parent.document).postMessage(
                              r.channel + "-ready",
                              o
                            ),
                            g(function () {
                              n.up.callback(!0);
                            }, 0));
                    },
                    init: function () {
                      E(n.onDOMReady, n);
                    },
                  });
                }),
                (A.stack.FrameElementTransport = function (e) {
                  var t, n, r, i;
                  return (t = {
                    outgoing: function (e, t, n) {
                      r.call(this, e), n && n();
                    },
                    destroy: function () {
                      n && (n.parentNode.removeChild(n), (n = null));
                    },
                    onDOMReady: function () {
                      (i = C(e.remote)),
                        e.isHost
                          ? (B(e.props, {
                              src: L(e.remote, {
                                xdm_e: C(p.href),
                                xdm_c: e.channel,
                                xdm_p: 5,
                              }),
                              name: x + e.channel + "_provider",
                            }),
                            ((n = F(e)).fn = function (e) {
                              return (
                                delete n.fn,
                                (r = e),
                                g(function () {
                                  t.up.callback(!0);
                                }, 0),
                                function (e) {
                                  t.up.incoming(e, i);
                                }
                              );
                            }))
                          : (l.referrer &&
                              C(l.referrer) != K.xdm_e &&
                              (h.top.location = K.xdm_e),
                            (r = h.frameElement.fn(function (e) {
                              t.up.incoming(e, i);
                            })),
                            t.up.callback(!0));
                    },
                    init: function () {
                      E(t.onDOMReady, t);
                    },
                  });
                }),
                (A.stack.NameTransport = function (r) {
                  var t, i, o, e, a, s, c, u;
                  function l(e) {
                    var t = r.remoteHelper + (i ? "#_3" : "#_2") + r.channel;
                    o.contentWindow.sendMessage(e, t);
                  }
                  function p() {
                    i
                      ? (2 != ++a && i) || t.up.callback(!0)
                      : (l("ready"), t.up.callback(!0));
                  }
                  function d(e) {
                    t.up.incoming(e, c);
                  }
                  function f() {
                    s &&
                      g(function () {
                        s(!0);
                      }, 0);
                  }
                  return (t = {
                    outgoing: function (e, t, n) {
                      (s = n), l(e);
                    },
                    destroy: function () {
                      o.parentNode.removeChild(o),
                        (o = null),
                        i && (e.parentNode.removeChild(e), (e = null));
                    },
                    onDOMReady: function () {
                      (i = r.isHost),
                        (a = 0),
                        (c = C(r.remote)),
                        (r.local = U(r.local)),
                        i
                          ? (A.Fn.set(r.channel, function (e) {
                              i &&
                                "ready" === e &&
                                (A.Fn.set(r.channel, d), p());
                            }),
                            (u = L(r.remote, {
                              xdm_e: r.local,
                              xdm_c: r.channel,
                              xdm_p: 2,
                            })),
                            B(r.props, {
                              src: u + "#" + r.channel,
                              name: x + r.channel + "_provider",
                            }),
                            (e = F(r)))
                          : ((r.remoteHelper = r.remote),
                            A.Fn.set(r.channel, d));
                      var n = function n() {
                        var e = o || this;
                        v(e, "load", n),
                          A.Fn.set(r.channel + "_load", f),
                          (function t() {
                            "function" == typeof e.contentWindow.sendMessage
                              ? p()
                              : g(t, 50);
                          })();
                      };
                      o = F({
                        props: { src: r.local + "#_4" + r.channel },
                        onLoad: n,
                      });
                    },
                    init: function () {
                      E(t.onDOMReady, t);
                    },
                  });
                }),
                (A.stack.HashTransport = function (i) {
                  var o, a, e, s, c, u, l, p, d, f;
                  function t() {
                    var e, t, n;
                    l &&
                      ((t = ""),
                      -1 != (n = (e = l.location.href).indexOf("#")) &&
                        (t = e.substring(n)),
                      t &&
                        t != c &&
                        ((c = t),
                        o.up.incoming(c.substring(c.indexOf("_") + 1), f)));
                  }
                  function m() {
                    e = setInterval(t, s);
                  }
                  return (o = {
                    outgoing: function (e, t) {
                      var n, r;
                      (n = e),
                        p &&
                          ((r = i.remote + "#" + u++ + "_" + n),
                          ((a || !d ? p.contentWindow : p).location = r));
                    },
                    destroy: function () {
                      h.clearInterval(e),
                        (!a && d) || p.parentNode.removeChild(p),
                        (p = null);
                    },
                    onDOMReady: function () {
                      var t, n;
                      (a = i.isHost),
                        (s = i.interval),
                        (c = "#" + i.channel),
                        (u = 0),
                        (d = i.useParent),
                        (f = C(i.remote)),
                        a
                          ? (B(i.props, {
                              src: i.remote,
                              name: x + i.channel + "_provider",
                            }),
                            d
                              ? (i.onLoad = function () {
                                  (l = h), m(), o.up.callback(!0);
                                })
                              : ((t = 0),
                                (n = i.delay / 50),
                                (function r() {
                                  if (++t > n)
                                    throw new Error(
                                      "Unable to reference listenerwindow"
                                    );
                                  try {
                                    l =
                                      p.contentWindow.frames[
                                        x + i.channel + "_consumer"
                                      ];
                                  } catch (e) {}
                                  l ? (m(), o.up.callback(!0)) : g(r, 50);
                                })()),
                            (p = F(i)))
                          : ((l = h),
                            m(),
                            d
                              ? ((p = parent), o.up.callback(!0))
                              : (B(i, {
                                  props: {
                                    src:
                                      i.remote + "#" + i.channel + new Date(),
                                    name: x + i.channel + "_consumer",
                                  },
                                  onLoad: function () {
                                    o.up.callback(!0);
                                  },
                                }),
                                (p = F(i))));
                    },
                    init: function () {
                      E(o.onDOMReady, o);
                    },
                  });
                }),
                (A.stack.ReliableBehavior = function (e) {
                  var i,
                    o,
                    a = 0,
                    s = 0,
                    c = "";
                  return (i = {
                    incoming: function (e, t) {
                      var n = e.indexOf("_"),
                        r = e.substring(0, n).split(",");
                      (e = e.substring(n + 1)),
                        r[0] == a && ((c = ""), o && o(!0)),
                        0 < e.length &&
                          (i.down.outgoing(r[1] + "," + a + "_" + c, t),
                          s != r[1] && ((s = r[1]), i.up.incoming(e, t)));
                    },
                    outgoing: function (e, t, n) {
                      (c = e),
                        (o = n),
                        i.down.outgoing(s + "," + ++a + "_" + e, t);
                    },
                  });
                }),
                (A.stack.QueueBehavior = function (o) {
                  var a,
                    n,
                    s = [],
                    r = !0,
                    i = "",
                    c = 0,
                    u = !1,
                    l = !1;
                  function p() {
                    if (o.remove && 0 === s.length)
                      return (
                        ((e = a).up.down = e.down),
                        (e.down.up = e.up),
                        void (e.up = e.down = null)
                      );
                    var e, t;
                    r ||
                      0 === s.length ||
                      n ||
                      ((r = !0),
                      (t = s.shift()),
                      a.down.outgoing(t.data, t.origin, function (e) {
                        (r = !1),
                          t.callback &&
                            g(function () {
                              t.callback(e);
                            }, 0),
                          p();
                      }));
                  }
                  return (a = {
                    init: function () {
                      P(o) && (o = {}),
                        o.maxLength && ((c = o.maxLength), (l = !0)),
                        o.lazy ? (u = !0) : a.down.init();
                    },
                    callback: function (e) {
                      r = !1;
                      var t = a.up;
                      p(), t.callback(e);
                    },
                    incoming: function (e, t) {
                      var n, r;
                      l
                        ? ((n = e.indexOf("_")),
                          (r = parseInt(e.substring(0, n), 10)),
                          (i += e.substring(n + 1)),
                          0 === r &&
                            (o.encode && (i = d(i)),
                            a.up.incoming(i, t),
                            (i = "")))
                        : a.up.incoming(e, t);
                    },
                    outgoing: function (e, t, n) {
                      o.encode && (e = f(e));
                      var r,
                        i = [];
                      if (l) {
                        for (; 0 !== e.length; )
                          (r = e.substring(0, c)),
                            (e = e.substring(r.length)),
                            i.push(r);
                        for (; (r = i.shift()); )
                          s.push({
                            data: i.length + "_" + r,
                            origin: t,
                            callback: 0 === i.length ? n : null,
                          });
                      } else s.push({ data: e, origin: t, callback: n });
                      u ? a.down.init() : p();
                    },
                    destroy: function () {
                      (n = !0), a.down.destroy();
                    },
                  });
                }),
                (A.stack.VerifyBehavior = function (r) {
                  var i, o, a;
                  function s() {
                    (o = Math.random().toString(16).substring(2)),
                      i.down.outgoing(o);
                  }
                  return (i = {
                    incoming: function (e, t) {
                      var n = e.indexOf("_");
                      -1 === n
                        ? e === o
                          ? i.up.callback(!0)
                          : a ||
                            ((a = e), r.initiate || s(), i.down.outgoing(e))
                        : e.substring(0, n) === a &&
                          i.up.incoming(e.substring(n + 1), t);
                    },
                    outgoing: function (e, t, n) {
                      i.down.outgoing(o + "_" + e, t, n);
                    },
                    callback: function (e) {
                      r.initiate && s();
                    },
                  });
                }),
                (A.stack.RpcBehavior = function (l, i) {
                  var t,
                    o = i.serializer || N(),
                    a = 0,
                    s = {};
                  function p(e) {
                    (e.jsonrpc = "2.0"), t.down.outgoing(o.stringify(e));
                  }
                  function c(e, r, t, n) {
                    if (t) {
                      var i, o, a;
                      r
                        ? ((i = function (e) {
                            (i = _), p({ id: r, result: e });
                          }),
                          (o = function (e, t) {
                            o = _;
                            var n = {
                              id: r,
                              error: { code: -32099, message: e },
                            };
                            t && (n.error.data = t), p(n);
                          }))
                        : (i = o = _),
                        (a = n),
                        "[object Array]" !==
                          Object.prototype.toString.call(a) && (n = [n]);
                      try {
                        var s = l.context || t.scope,
                          c = t.method.apply(s, n.concat([i, o]));
                        P(c) || i(c);
                      } catch (u) {
                        o(u.message);
                      }
                    } else
                      r &&
                        p({
                          id: r,
                          error: {
                            code: -32601,
                            message: "Procedure not found.",
                          },
                        });
                  }
                  return (t = {
                    incoming: function (e, t) {
                      var n,
                        r = o.parse(e);
                      r.method
                        ? i.handle
                          ? i.handle(r, p)
                          : c(r.method, r.id, i.local[r.method], r.params)
                        : ((n = s[r.id]),
                          r.error
                            ? n.error && n.error(r.error)
                            : n.success && n.success(r.result),
                          delete s[r.id]);
                    },
                    init: function () {
                      if (i.remote)
                        for (var e in i.remote)
                          i.remote.hasOwnProperty(e) &&
                            (l[e] = (function (r, i) {
                              var o = Array.prototype.slice;
                              return function () {
                                var e,
                                  t = arguments.length,
                                  n = { method: i };
                                0 < t && "function" == typeof arguments[t - 1]
                                  ? (1 < t &&
                                    "function" == typeof arguments[t - 2]
                                      ? ((e = {
                                          success: arguments[t - 2],
                                          error: arguments[t - 1],
                                        }),
                                        (n.params = o.call(
                                          arguments,
                                          0,
                                          t - 2
                                        )))
                                      : ((e = { success: arguments[t - 1] }),
                                        (n.params = o.call(
                                          arguments,
                                          0,
                                          t - 1
                                        ))),
                                    (s["" + ++a] = e),
                                    (n.id = a))
                                  : (n.params = o.call(arguments, 0)),
                                  r.namedParams &&
                                    1 === n.params.length &&
                                    (n.params = n.params[0]),
                                  p(n);
                              };
                            })(i.remote[e], e));
                      t.down.init();
                    },
                    destroy: function () {
                      for (var e in i.remote)
                        i.remote.hasOwnProperty(e) &&
                          l.hasOwnProperty(e) &&
                          delete l[e];
                      t.down.destroy();
                    },
                  });
                }),
                (k.easyXDM = A);
            })(
              window,
              document,
              location,
              window.setTimeout,
              decodeURIComponent,
              encodeURIComponent
            ),
            easyXDM.noConflict("Kakao"));
        },
        {},
      ],
      47: [
        function (Q, Y, e) {
          (function (X, J, V) {
            (function () {
              "use strict";
              function u(e) {
                return "function" == typeof e;
              }
              var t;
              t = Array.isArray
                ? Array.isArray
                : function t(e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  };
              var n,
                a = t,
                r = 0;
              var s = function (e, t) {
                  (k[r] = e), (k[r + 1] = t), 2 === (r += 2) && d();
                },
                e = "undefined" != typeof window ? window : undefined,
                i = e || {},
                o = i.MutationObserver || i.WebKitMutationObserver,
                c = void 0 !== X && "[object process]" === {}.toString.call(X),
                l =
                  "undefined" != typeof Uint8ClampedArray &&
                  "undefined" != typeof importScripts &&
                  "undefined" != typeof MessageChannel;
              function p() {
                return function () {
                  setTimeout(b, 1);
                };
              }
              var d,
                f,
                m,
                h,
                g,
                y,
                v,
                k = new Array(1e3);
              function b() {
                for (var e = 0; e < r; e += 2) {
                  (0, k[e])(k[e + 1]),
                    (k[e] = undefined),
                    (k[e + 1] = undefined);
                }
                r = 0;
              }
              function _() {}
              d = c
                ? ((y = X.nextTick),
                  (v = X.versions.node.match(
                    /^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/
                  )),
                  Array.isArray(v) && "0" === v[1] && "10" === v[2] && (y = V),
                  function () {
                    y(b);
                  })
                : o
                ? ((m = 0),
                  (h = new o(b)),
                  (g = document.createTextNode("")),
                  h.observe(g, { characterData: !0 }),
                  function () {
                    g.data = m = ++m % 2;
                  })
                : l
                ? (((f = new MessageChannel()).port1.onmessage = b),
                  function () {
                    f.port2.postMessage(0);
                  })
                : (e === undefined && "function" == typeof Q
                    ? function () {
                        try {
                          var e = Q("vertx");
                          return (
                            (n = e.runOnLoop || e.runOnContext),
                            function () {
                              n(b);
                            }
                          );
                        } catch (t) {
                          return p();
                        }
                      }
                    : p)();
              var w = void 0,
                S = 1,
                A = 2,
                x = new K();
              function O(e, r, i) {
                s(function (t) {
                  var n = !1,
                    e = (function (e, t, n, r) {
                      try {
                        e.call(t, n, r);
                      } catch (i) {
                        return i;
                      }
                    })(
                      i,
                      r,
                      function (e) {
                        n || ((n = !0), (r !== e ? I : R)(t, e));
                      },
                      function (e) {
                        n || ((n = !0), C(t, e));
                      },
                      t._label
                    );
                  !n && e && ((n = !0), C(t, e));
                }, e);
              }
              function T(e, t) {
                var n, r, i;
                t.constructor === e.constructor
                  ? ((r = e),
                    (i = t)._state === S
                      ? R(r, i._result)
                      : i._state === A
                      ? C(r, i._result)
                      : U(
                          i,
                          undefined,
                          function (e) {
                            I(r, e);
                          },
                          function (e) {
                            C(r, e);
                          }
                        ))
                  : (n = (function (e) {
                      try {
                        return e.then;
                      } catch (t) {
                        return (x.error = t), x;
                      }
                    })(t)) === x
                  ? C(e, x.error)
                  : n !== undefined && u(n)
                  ? O(e, t, n)
                  : R(e, t);
              }
              function I(e, t) {
                var n;
                e === t
                  ? C(
                      e,
                      new TypeError("You cannot resolve a promise with itself")
                    )
                  : ("function" == typeof (n = t) ||
                      ("object" === (void 0 === n ? "undefined" : _typeof(n)) &&
                        null !== n)
                      ? T
                      : R)(e, t);
              }
              function E(e) {
                e._onerror && e._onerror(e._result), L(e);
              }
              function R(e, t) {
                e._state === w &&
                  ((e._result = t),
                  (e._state = S),
                  0 !== e._subscribers.length && s(L, e));
              }
              function C(e, t) {
                e._state === w && ((e._state = A), (e._result = t), s(E, e));
              }
              function U(e, t, n, r) {
                var i = e._subscribers,
                  o = i.length;
                (e._onerror = null),
                  (i[o] = t),
                  (i[o + S] = n),
                  (i[o + A] = r),
                  0 === o && e._state && s(L, e);
              }
              function L(e) {
                var t = e._subscribers,
                  n = e._state;
                if (0 !== t.length) {
                  for (var r, i, o = e._result, a = 0; a < t.length; a += 3)
                    (r = t[a]), (i = t[a + n]), r ? j(n, r, i, o) : i(o);
                  e._subscribers.length = 0;
                }
              }
              function K() {
                this.error = null;
              }
              var P = new K();
              function j(e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  c = u(n);
                if (c) {
                  if (
                    ((i = (function (e, t) {
                      try {
                        return e(t);
                      } catch (n) {
                        return (P.error = n), P;
                      }
                    })(n, r)) === P
                      ? ((s = !0), (o = i.error), (i = null))
                      : (a = !0),
                    t === i)
                  )
                    return void C(
                      t,
                      new TypeError(
                        "A promises callback cannot return that same promise."
                      )
                    );
                } else (i = r), (a = !0);
                t._state !== w ||
                  (c && a
                    ? I(t, i)
                    : s
                    ? C(t, o)
                    : e === S
                    ? R(t, i)
                    : e === A && C(t, i));
              }
              function N(e, t) {
                var n = this;
                (n._instanceConstructor = e),
                  (n.promise = new e(_)),
                  n._validateInput(t)
                    ? ((n._input = t),
                      (n.length = t.length),
                      (n._remaining = t.length),
                      n._init(),
                      0 === n.length
                        ? R(n.promise, n._result)
                        : ((n.length = n.length || 0),
                          n._enumerate(),
                          0 === n._remaining && R(n.promise, n._result)))
                    : C(n.promise, n._validationError());
              }
              (N.prototype._validateInput = function (e) {
                return a(e);
              }),
                (N.prototype._validationError = function () {
                  return new Error("Array Methods must be provided an Array");
                }),
                (N.prototype._init = function () {
                  this._result = new Array(this.length);
                });
              var B = N;
              (N.prototype._enumerate = function () {
                for (
                  var e = this.length, t = this.promise, n = this._input, r = 0;
                  t._state === w && r < e;
                  r++
                )
                  this._eachEntry(n[r], r);
              }),
                (N.prototype._eachEntry = function (e, t) {
                  var n,
                    r = this,
                    i = r._instanceConstructor;
                  "object" ===
                    (void 0 === (n = e) ? "undefined" : _typeof(n)) &&
                  null !== n
                    ? e.constructor === i && e._state !== w
                      ? ((e._onerror = null),
                        r._settledAt(e._state, t, e._result))
                      : r._willSettleAt(i.resolve(e), t)
                    : (r._remaining--, (r._result[t] = e));
                }),
                (N.prototype._settledAt = function (e, t, n) {
                  var r = this,
                    i = r.promise;
                  i._state === w &&
                    (r._remaining--, e === A ? C(i, n) : (r._result[t] = n)),
                    0 === r._remaining && R(i, r._result);
                }),
                (N.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  U(
                    e,
                    undefined,
                    function (e) {
                      n._settledAt(S, t, e);
                    },
                    function (e) {
                      n._settledAt(A, t, e);
                    }
                  );
                });
              var F = function (e) {
                var t = new this(_);
                if (!a(e))
                  return (
                    C(t, new TypeError("You must pass an array to race.")), t
                  );
                var n = e.length;
                function r(e) {
                  I(t, e);
                }
                function i(e) {
                  C(t, e);
                }
                for (var o = 0; t._state === w && o < n; o++)
                  U(this.resolve(e[o]), undefined, r, i);
                return t;
              };
              var M = function (e) {
                if (
                  e &&
                  "object" === (void 0 === e ? "undefined" : _typeof(e)) &&
                  e.constructor === this
                )
                  return e;
                var t = new this(_);
                return I(t, e), t;
              };
              var q = function (e) {
                  var t = new this(_);
                  return C(t, e), t;
                },
                D = 0;
              var z = H;
              function H(e) {
                (this._id = D++),
                  (this._state = undefined),
                  (this._result = undefined),
                  (this._subscribers = []),
                  _ !== e &&
                    (u(e) ||
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof H ||
                      (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })(),
                    (function (t, e) {
                      try {
                        e(
                          function (e) {
                            I(t, e);
                          },
                          function (e) {
                            C(t, e);
                          }
                        );
                      } catch (n) {
                        C(t, n);
                      }
                    })(this, e));
              }
              (H.all = function (e) {
                return new B(this, e).promise;
              }),
                (H.race = F),
                (H.resolve = M),
                (H.reject = q),
                (H.prototype = {
                  constructor: H,
                  then: function (e, t) {
                    var n = this._state;
                    if ((n === S && !e) || (n === A && !t)) return this;
                    var r,
                      i = new this.constructor(_),
                      o = this._result;
                    return (
                      n
                        ? ((r = arguments[n - 1]),
                          s(function () {
                            j(n, i, r, o);
                          }))
                        : U(this, i, e, t),
                      i
                    );
                  },
                  catch: function (e) {
                    return this.then(null, e);
                  },
                });
              var W = function () {
                  var e;
                  if (void 0 !== J) e = J;
                  else if ("undefined" != typeof self) e = self;
                  else
                    try {
                      e = Function("return this")();
                    } catch (n) {
                      throw new Error(
                        "polyfill failed because global object is unavailable in this environment"
                      );
                    }
                  var t = e.Promise;
                  (t &&
                    "[object Promise]" ===
                      Object.prototype.toString.call(t.resolve()) &&
                    !t.cast) ||
                    (e.Promise = z);
                },
                G = { Promise: z, polyfill: W };
              void 0 !== Y && Y.exports
                ? (Y.exports = G)
                : void 0 !== this && (this.ES6Promise = G),
                W();
            }.call(this));
          }.call(
            this,
            Q("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
            Q("timers").setImmediate
          ));
        },
        { _process: 1, timers: 2 },
      ],
      48: [
        function (e, t, n) {
          var f;
          t.exports =
            ((f = function f(e) {
              function t(e) {
                var t = {},
                  n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
                return (
                  (t.info = n.join(".")),
                  (t.major = n[0] || "0"),
                  (t.minor = n[1] || "0"),
                  (t.patch = n[2] || "0"),
                  t
                );
              }
              return {
                ua: (e = (e || window.navigator.userAgent)
                  .toString()
                  .toLowerCase()),
                browser:
                  ((p = {}),
                  "webkit" ===
                  (d = /(dolfin)[ \/]([\w.]+)/.exec((l = e)) ||
                    /(edge)[ \/]([\w.]+)/.exec(l) ||
                    /(chrome)[ \/]([\w.]+)/.exec(l) ||
                    /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(l) ||
                    /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(l) ||
                    /(msie) ([\w.]+)/.exec(l) ||
                    (l.indexOf("compatible") < 0 &&
                      /(mozilla)(?:.*? rv:([\w.]+))?/.exec(l)) || [
                      "",
                      "unknown",
                    ])[1]
                    ? (d = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(
                        l
                      ) ||
                        /(android)[ \/]([\w._\-]+);/.exec(l) || [
                          d[0],
                          "safari",
                          d[2],
                        ])
                    : "mozilla" === d[1]
                    ? /trident/.test(l)
                      ? (d[1] = "msie")
                      : (d[1] = "firefox")
                    : "edge" === d[1]
                    ? (d[1] = "spartan")
                    : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(
                        l
                      ) && (d[1] = "polaris"),
                  (p[d[1]] = !0),
                  (p.name = d[1]),
                  (p.version = t(d[2])),
                  p),
                platform:
                  !(u = c = e).match(/linux|windows (nt|98)|macintosh/) ||
                  u.match(
                    /android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/
                  )
                    ? (function (e) {
                        if (
                          e.match(/ipad/) ||
                          (e.match(/android/) && !e.match(/mobi|mini|fennec/))
                        )
                          return !0;
                        return !1;
                      })(c)
                      ? "tablet"
                      : c.match(
                          /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/
                        )
                      ? "mobile"
                      : ""
                    : "pc",
                os:
                  ((a = {}),
                  "iphone" ===
                    (s = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(
                      (o = e)
                    ) ||
                      /(android)[ \/]([\w._\-]+);/.exec(o) ||
                      (!!/android/.test(o) && ["", "android", "0.0.0"]) ||
                      (!!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(
                        o
                      ) && ["", "polaris", "0.0.0"]) ||
                      /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(
                        o
                      ) ||
                      (!!/(windows)/.test(o) && ["", "windows", "0.0.0"]) ||
                      /(mac) os x ([\w._\-]+)/.exec(o) ||
                      (!!/(linux)/.test(o) && ["", "linux", "0.0.0"]) ||
                      (!!/webos/.test(o) && ["", "webos", "0.0.0"]) ||
                      /(bada)[ \/]([\w._\-]+)/.exec(o) ||
                      (!!/bada/.test(o) && ["", "bada", "0.0.0"]) ||
                      (!!/(rim|blackberry|bb10)/.test(o) && [
                        "",
                        "blackberry",
                        "0.0.0",
                      ]) || ["", "unknown", "0.0.0"])[1] ||
                  "ipad" === s[1] ||
                  "ipod" === s[1]
                    ? (s[1] = "ios")
                    : "windows" === s[1] && "98" === s[2] && (s[2] = "0.98.0"),
                  (a[s[1]] = !0),
                  (a.name = s[1]),
                  (a.version = t(s[2])),
                  a),
                app:
                  ((r = {}),
                  (i = /(crios)[ \/]([\w.]+)/.exec((n = e)) ||
                    /(daumapps)[ \/]([\w.]+)/.exec(n) || ["", ""])[1]
                    ? ((r.isApp = !0), (r.name = i[1]), (r.version = t(i[2])))
                    : (r.isApp = !1),
                  r),
              };
              var n, r, i, o, a, s, c, u, l, p, d;
            }),
            f);
        },
        {},
      ],
      49: [
        function (e, t, n) {
          function p(e) {
            window.top.location.replace(e);
          }
          function d(t, n, r) {
            var i = new Date().getTime();
            return setTimeout(function () {
              var e = new Date().getTime();
              f() && e - i < t + o && r(n);
            }, t);
          }
          function f() {
            for (
              var e = ["hidden", "webkitHidden"], t = 0, n = e.length;
              t < n;
              t++
            )
              if ("undefined" != typeof document[e[t]]) return !document[e[t]];
            return 1;
          }
          function m(n) {
            setTimeout(function () {
              var e, t;
              ((e = "appLauncher"),
              ((t = document.createElement("iframe")).id = e),
              (t.style.border = "none"),
              (t.style.width = "0"),
              (t.style.height = "0"),
              (t.style.display = "none"),
              (t.style.overflow = "hidden"),
              document.body.appendChild(t),
              t).src = n;
            }, 100);
          }
          var r, h, g, o, y, v, k, b;
          t.exports =
            ((r = e("./userAgent.js")),
            (h = 5e3),
            (g = 300),
            (o = 100),
            (y = r()),
            (v = y.os),
            (k = ["firefox", "opr/"]),
            (b = ["KAKAOTALK"]),
            function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s =
                  "function" == typeof e.willInvokeApp
                    ? e.willInvokeApp
                    : function () {},
                c = "function" == typeof e.onAppMissing ? e.onAppMissing : p,
                u =
                  "function" == typeof e.onUnsupportedEnvironment
                    ? e.onUnsupportedEnvironment
                    : function () {};
              function l() {
                top.location.href = r;
              }
              s(),
                v.android
                  ? ((i = y.browser.chrome && 25 <= +y.browser.version.major),
                    (o = new RegExp(k.join("|"), "i")),
                    (a = new RegExp(b.join("|"), "i")),
                    ((i && !o.test(y.ua)) || a.test(y.ua)) &&
                    e.intentURI &&
                    !e.useUrlScheme
                      ? ((r = e.intentURI),
                        y.browser.chrome ? l() : setTimeout(l, 100))
                      : e.storeURL &&
                        ((t = e.urlScheme), (n = e.storeURL), d(g, n, c), m(t)))
                  : v.ios && e.storeURL
                  ? (function (e, t, n, r) {
                      var i = d(h, t, n);
                      (parseInt(y.os.version.major, 10) < 8
                        ? function (e) {
                            window.addEventListener("pagehide", function t() {
                              f() &&
                                (clearTimeout(e),
                                window.removeEventListener("pagehide", t));
                            });
                          }
                        : function (e) {
                            document.addEventListener(
                              "visibilitychange",
                              function t() {
                                f() &&
                                  (clearTimeout(e),
                                  document.removeEventListener(
                                    "visibilitychange",
                                    t
                                  ));
                              }
                            );
                          })(i);
                      8 < parseInt(y.os.version.major, 10) && y.os.ios
                        ? (r === undefined ? (r = e) : clearTimeout(i),
                          (function (e) {
                            window.top.location.replace(e);
                          })(r))
                        : m(e);
                    })(e.urlScheme, e.storeURL, c, e.universalLink)
                  : setTimeout(function () {
                      u();
                    }, 100);
            });
        },
        { "./userAgent.js": 48 },
      ],
    },
    {},
    [41]
  )(41);
});
