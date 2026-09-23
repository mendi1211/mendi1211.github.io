(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y3 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A3(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E2.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F3() {
      }
      F3.prototype = E2.prototype;
      function G2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      var H = G2.prototype = new F3();
      H.constructor = G2;
      C(H, E2.prototype);
      H.isPureReactComponent = true;
      var I3 = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b, e2) {
        var d, c = {}, k3 = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k3 = "" + b.key), b) J.call(b, d) && !L2.hasOwnProperty(d) && (c[d] = b[d]);
        var g2 = arguments.length - 2;
        if (1 === g2) c.children = e2;
        else if (1 < g2) {
          for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g2 = a.defaultProps, g2) void 0 === c[d] && (c[d] = g2[d]);
        return { $$typeof: l2, type: a, key: k3, ref: h, props: c, _owner: K2.current };
      }
      function N(a, b) {
        return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q2(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R2(a, b, e2, d, c) {
        var k3 = typeof a;
        if ("undefined" === k3 || "boolean" === k3) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k3) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q2(h, 0) : d, I3(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R2(c, b, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I3(a)) for (var g2 = 0; g2 < a.length; g2++) {
          k3 = a[g2];
          var f2 = d + Q2(k3, g2);
          h += R2(k3, b, e2, f2, c);
        }
        else if (f2 = A3(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k3 = a.next()).done; ) k3 = k3.value, f2 = d + Q2(k3, g2++), h += R2(k3, b, e2, f2, c);
        else if ("object" === k3) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R2(a, d, "", "", function(a2) {
          return b.call(e2, a2, c++);
        });
        return d;
      }
      function T2(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e2) {
        S(a, function() {
          b.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E2;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X;
      exports.cloneElement = function(a, b, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k3 = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k3 = b.ref, h = K2.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
          for (f2 in b) J.call(b, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g2 ? g2[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g2 = Array(f2);
          for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
          d.children = g2;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k3, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b = M3.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y3, _payload: { _status: -1, _result: a }, _init: T2 };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U3.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U3.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e2) {
        return U3.current.useImperativeHandle(a, b, e2);
      };
      exports.useInsertionEffect = function(a, b) {
        return U3.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U3.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U3.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e2) {
        return U3.current.useReducer(a, b, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e2) {
        return U3.current.useSyncExternalStore(a, b, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g2(e2, b)) a[d] = b, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k3(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m2 = 2 * (d + 1) - 1, C = a[m2], n = m2 + 1, x = a[n];
            if (0 > g2(C, c)) n < e2 && 0 > g2(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m2] = c, d = m2);
            else if (n < e2 && 0 > g2(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g2(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l2;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y3 = 3;
      var z3 = false;
      var A3 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F3 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k3(t);
          else if (b.startTime <= a) k3(t), b.sortIndex = b.expirationTime, f2(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B2 = false;
        G2(a);
        if (!A3) if (null !== h(r)) A3 = true, I3(J);
        else {
          var b = h(t);
          null !== b && K2(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A3 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z3 = true;
        var c = y3;
        try {
          G2(b);
          for (v2 = h(r); null !== v2 && (!(v2.expirationTime > b) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y3 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h(r) && k3(r);
              G2(b);
            } else k3(r);
            v2 = h(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h(t);
            null !== m2 && K2(H, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y3 = c, z3 = false;
        }
      }
      var N = false;
      var O3 = null;
      var L2 = -1;
      var P = 5;
      var Q2 = -1;
      function M3() {
        return exports.unstable_now() - Q2 < P ? false : true;
      }
      function R2() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O3(true, a);
          } finally {
            b ? S() : (N = false, O3 = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F3) S = function() {
        F3(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U3 = T2.port2;
        T2.port1.onmessage = R2;
        S = function() {
          U3.postMessage(null);
        };
      } else S = function() {
        D2(R2, 0);
      };
      var T2;
      var U3;
      function I3(a) {
        O3 = a;
        N || (N = true, S());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A3 || z3 || (A3 = true, I3(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y3;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y3) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y3;
        }
        var c = y3;
        y3 = b;
        try {
          return a();
        } finally {
          y3 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y3;
        y3 = a;
        try {
          return b();
        } finally {
          y3 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H, c - d))) : (a.sortIndex = e2, f2(r, a), A3 || z3 || (A3 = true, I3(J)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b = y3;
        return function() {
          var c = y3;
          y3 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y3 = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b) {
        ha2(a, b);
        ha2(a + "Capture", b);
      }
      function ha2(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa2(a) {
        if (ja.call(ma2, a)) return true;
        if (ja.call(la2, a)) return false;
        if (ka.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa2(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v2(a, b, c, d, e2, f2, g2) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g2;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z3[b] = new v2(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra2,
          sa2
        );
        z3[b] = new v2(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v2(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v2(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b, c, d) {
        var e2 = z3.hasOwnProperty(b) ? z3[b] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e2, d) && (c = null), d || null === e2 ? oa2(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A3 = Object.assign;
      var La2;
      function Ma(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b && b[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e2.length - 1, h = f2.length - 1; 1 <= g2 && 0 <= h && e2[g2] !== f2[h]; ) h--;
            for (; 1 <= g2 && 0 <= h; g2--, h--) if (e2[g2] !== f2[h]) {
              if (1 !== g2 || 1 !== h) {
                do
                  if (g2--, h--, 0 > h || e2[g2] !== f2[h]) {
                    var k3 = "\n" + e2[g2].replace(" at new ", " at ");
                    a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                    return k3;
                  }
                while (1 <= g2 && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b = a.displayName || null, null !== b ? b : Qa2(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa2(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b);
          case 8:
            return b === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua2(a) {
        var b = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya2(a, b) {
        var c = b.checked;
        return A3({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa2(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta2(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa2(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa2(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e2 = 0; e2 < c.length; e2++) b["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b || a[e2].disabled || (b = a[e2]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A3({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b) {
        var c = Sa2(b.value), d = Sa2(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e2);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e2, f2, g2, h, k3) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l2);
        } catch (m2) {
          this.onError(m2);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e2, f2, g2, h, k3) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e2, f2, g2, h, k3) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g2 = false, h = e2.child; h; ) {
              if (h === c) {
                g2 = true;
                c = e2;
                d = f2;
                break;
              }
              if (h === d) {
                g2 = true;
                d = e2;
                c = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g2) {
              for (h = f2.child; h; ) {
                if (h === c) {
                  g2 = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h === d) {
                  g2 = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h = h.sibling;
              }
              if (!g2) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc = ca2.unstable_cancelCallback;
      var cc = ca2.unstable_shouldYield;
      var dc = ca2.unstable_requestPaint;
      var B2 = ca2.unstable_now;
      var ec = ca2.unstable_getCurrentPriorityLevel;
      var fc = ca2.unstable_ImmediatePriority;
      var gc = ca2.unstable_UserBlockingPriority;
      var hc = ca2.unstable_NormalPriority;
      var ic = ca2.unstable_LowPriority;
      var jc = ca2.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c & 268435455;
        if (0 !== g2) {
          var h = g2 & ~e2;
          0 !== h ? d = tc(h) : (f2 &= g2, 0 !== f2 && (d = tc(f2)));
        } else g2 = c & ~e2, 0 !== g2 ? d = tc(g2) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e2 = 1 << c, d |= a[c], b &= ~e2;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g2 = 31 - oc(f2), h = 1 << g2, k3 = e2[g2];
          if (-1 === k3) {
            if (0 === (h & c) || 0 !== (h & d)) e2[g2] = vc(h, b);
          } else k3 <= b && (a.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b | a[d] & b && (a[d] |= b);
          c &= ~e2;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
        return a;
      }
      function Uc(a, b, c, d, e2) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e2 = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e2, cd.transition = f2;
        }
      }
      function gd(a, b, c, d) {
        var e2 = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e2, cd.transition = f2;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e2 = Yc(a, b, c, d);
          if (null === e2) hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e2, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b, c, d);
              null === f2 && hd(a, b, d, id, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
        for (a = 0; a < c && b[a] === e2[a]; a++) ;
        var g2 = c - a;
        for (d = 1; d <= g2 && b[c - d] === e2[f2 - d]; d++) ;
        return md = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e2, f2, g2) {
          this._reactName = b2;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g2;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A3(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A3({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A3({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A3({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A3({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A3({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A3({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A3({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae3 = ia2 && "CompositionEvent" in window;
      var be3 = null;
      ia2 && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia2 && "TextEvent" in window && !be3;
      var de2 = ia2 && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee3 = String.fromCharCode(32);
      var fe2 = false;
      function ge3(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je2(a, b) {
        switch (a) {
          case "compositionend":
            return he2(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe2 = true;
            return ee3;
          case "textInput":
            return a = b.data, a === ee3 && fe2 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b) {
        if (ie3) return "compositionend" === a || !ae3 && ge3(a, b) ? (a = nd(), md = ld = kd = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le3[a.type] : "textarea" === b ? true : false;
      }
      function ne3(a, b, c, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe3 = null;
      var qe2 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b = ue3(a);
        if (Wa(b)) return a;
      }
      function ve3(a, b) {
        if ("change" === a) return b;
      }
      var we3 = false;
      if (ia2) {
        if (ia2) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe3 = ye3;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye3;
      var ze3;
      function Ae3() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe2 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe2)) {
          var b = [];
          ne3(b, qe2, a, xb(a));
          Jb(re3, b);
        }
      }
      function Ce2(a, b, c) {
        "focusin" === a ? (Ae3(), pe3 = b, qe2 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae3();
      }
      function De3(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe2);
      }
      function Ee3(a, b) {
        if ("click" === a) return te3(b);
      }
      function Fe3(a, b) {
        if ("input" === a || "change" === a) return te3(b);
      }
      function Ge3(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b) {
        if (He3(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b, e2) || !He3(a[e2], b[e2])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke2(a, b) {
        var c = Je2(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le3(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le3(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me2() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe2(a) {
        var b = Me2(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke2(c, f2);
              var g2 = Ke2(
                c,
                d
              );
              e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g2.node, g2.offset)) : (b.setEnd(g2.node, g2.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe2 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue2(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe2 || Qe2 !== Xa(d) || (d = Qe2, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe2(Re2, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe2)));
      }
      function Ve2(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe2 = {};
      var Ye2 = {};
      ia2 && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze3(a) {
        if (Xe2[a]) return Xe2[a];
        if (!We2[a]) return a;
        var b = We2[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye2) return Xe2[a] = b[c];
        return a;
      }
      var $e3 = Ze3("animationend");
      var af = Ze3("animationiteration");
      var bf = Ze3("animationstart");
      var cf = Ze3("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa2(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g2 = d.length - 1; 0 <= g2; g2--) {
              var h = d[g2], k3 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k3;
            }
            else for (g2 = 0; g2 < d.length; g2++) {
              h = d[g2];
              k3 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k3;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e2 = ed;
            break;
          case 4:
            e2 = gd;
            break;
          default:
            e2 = fd;
        }
        c = e2.bind(null, b, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e2) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g2 = d.tag;
          if (3 === g2 || 4 === g2) {
            var h = d.stateNode.containerInfo;
            if (h === e2 || 8 === h.nodeType && h.parentNode === e2) break;
            if (4 === g2) for (g2 = d.return; null !== g2; ) {
              var k3 = g2.tag;
              if (3 === k3 || 4 === k3) {
                if (k3 = g2.stateNode.containerInfo, k3 === e2 || 8 === k3.nodeType && k3.parentNode === e2) return;
              }
              g2 = g2.return;
            }
            for (; null !== h; ) {
              g2 = Wc(h);
              if (null === g2) return;
              k3 = g2.tag;
              if (5 === k3 || 6 === k3) {
                d = f2 = g2;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g3 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k4 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k4 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k4 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k4 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k4 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k4 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k4 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k4 = Vd;
                  break;
                case $e3:
                case af:
                case bf:
                  k4 = Hd;
                  break;
                case cf:
                  k4 = Xd;
                  break;
                case "scroll":
                  k4 = vd;
                  break;
                case "wheel":
                  k4 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k4 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k4 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F3 = u.stateNode;
                5 === u.tag && null !== F3 && (u = F3, null !== x && (F3 = Kb(w2, x), null != F3 && t.push(tf(w2, F3, u))));
                if (J) break;
                w2 = w2.return;
              }
              0 < t.length && (h2 = new k4(h2, n, null, c, e3), g3.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k4 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k4 || h2) {
                h2 = e3.window === e3 ? e3 : (h2 = e3.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k4) {
                  if (n = c.relatedTarget || c.toElement, k4 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k4 = null, n = d2;
                if (k4 !== n) {
                  t = Bd;
                  F3 = "onMouseLeave";
                  x = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F3 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                  J = null == k4 ? h2 : ue3(k4);
                  u = null == n ? h2 : ue3(n);
                  h2 = new t(F3, w2 + "leave", k4, c, e3);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F3 = null;
                  Wc(e3) === d2 && (t = new t(x, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J, F3 = t);
                  J = F3;
                  if (k4 && n) b: {
                    t = k4;
                    x = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F3 = x; F3; F3 = vf(F3)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x = vf(x), u--;
                    for (; w2--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k4 && wf(g3, h2, k4, t, false);
                  null !== n && null !== J && wf(g3, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue3(d2) : window;
              k4 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k4 || "input" === k4 && "file" === h2.type) var na2 = ve3;
              else if (me2(h2)) if (we3) na2 = Fe3;
              else {
                na2 = De3;
                var xa2 = Ce2;
              }
              else (k4 = h2.nodeName) && "input" === k4.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na2 = Ee3);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g3, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h2, d2);
              "focusout" === a && (xa2 = h2._wrapperState) && xa2.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me2(xa2) || "true" === xa2.contentEditable) Qe2 = xa2, Re2 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue2(g3, c, e3);
                break;
              case "selectionchange":
                if (Pe2) break;
              case "keydown":
              case "keyup":
                Ue2(g3, c, e3);
            }
            var $a2;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge3(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de2 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie3 = true)), xa2 = oe2(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e3), g3.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he2(c), null !== $a2 && (ba2.data = $a2))));
            if ($a2 = ce3 ? je2(a, c) : ke3(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g3.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g3, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe2(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e2) {
        for (var f2 = b._reactName, g2 = []; null !== c && c !== d; ) {
          var h = c, k3 = h.alternate, l2 = h.stateNode;
          if (null !== k3 && k3 === d) break;
          5 === h.tag && null !== l2 && (h = l2, e2 ? (k3 = Kb(c, f2), null != k3 && g2.unshift(tf(c, k3, h))) : e2 || (k3 = Kb(c, f2), null != k3 && g2.push(tf(c, k3, h))));
          c = c.return;
        }
        0 !== g2.length && a.push({ event: b, listeners: g2 });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E2(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E2(Wf);
        E2(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G2(H, b);
        G2(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b)) throw Error(p(108, Ra(a) || "Unknown", e2));
        return A3({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G2(H, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H), G2(H, a)) : E2(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b) + e2;
        if (30 < f2) {
          var g2 = e2 - e2 % 5;
          f2 = (d & (1 << g2) - 1).toString(32);
          d >>= g2;
          e2 -= g2;
          rg = 1 << 32 - oc(b) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I3 = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I3) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I3 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I3 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I3) return Fg(a), I3 = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I3 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
            b = function(a2) {
              var b2 = e2.refs;
              null === a2 ? delete b2[f2] : b2[f2] = a2;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e2(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g2(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k3(a2, b2, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m2(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e2(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m2(a2, b2, c2, d2, f3) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va2:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka2(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e3 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k3(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
              case Ha:
                return e3 = c2._init, r(
                  a2,
                  b2,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e3 ? null : m2(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y3(a2, b2, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b2, a2, d2, e3);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
              case Ha:
                var f3 = d2._init;
                return y3(a2, b2, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka2(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e3, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e3, g3, h2, k4) {
          for (var l3 = null, m3 = null, u = g3, w2 = g3 = 0, x = null; null !== u && w2 < h2.length; w2++) {
            u.index > w2 ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e3, u, h2[w2], k4);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b(e3, u);
            g3 = f2(n2, g3, w2);
            null === m3 ? l3 = n2 : m3.sibling = n2;
            m3 = n2;
            u = x;
          }
          if (w2 === h2.length) return c(e3, u), I3 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h2.length; w2++) u = q(e3, h2[w2], k4), null !== u && (g3 = f2(u, g3, w2), null === m3 ? l3 = u : m3.sibling = u, m3 = u);
            I3 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h2.length; w2++) x = y3(u, e3, w2, h2[w2], k4), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l3 = x : m3.sibling = x, m3 = x);
          a && u.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function t(e3, g3, h2, k4) {
          var l3 = Ka2(h2);
          if ("function" !== typeof l3) throw Error(p(150));
          h2 = l3.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l3 = null, m3 = g3, w2 = g3 = 0, x = null, n2 = h2.next(); null !== m3 && !n2.done; w2++, n2 = h2.next()) {
            m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
            var t2 = r(e3, m3, n2.value, k4);
            if (null === t2) {
              null === m3 && (m3 = x);
              break;
            }
            a && m3 && null === t2.alternate && b(e3, m3);
            g3 = f2(t2, g3, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m3 = x;
          }
          if (n2.done) return c(
            e3,
            m3
          ), I3 && tg(e3, w2), l3;
          if (null === m3) {
            for (; !n2.done; w2++, n2 = h2.next()) n2 = q(e3, n2.value, k4), null !== n2 && (g3 = f2(n2, g3, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I3 && tg(e3, w2);
            return l3;
          }
          for (m3 = d(e3, m3); !n2.done; w2++, n2 = h2.next()) n2 = y3(m3, e3, w2, n2.value, k4), null !== n2 && (a && null !== n2.alternate && m3.delete(null === n2.key ? w2 : n2.key), g3 = f2(n2, g3, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m3.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function J(a2, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k4 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k4) {
                      k4 = f3.type;
                      if (k4 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === Ha && Ng(k4) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
                }
                return g2(a2);
              case wa:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g2(a2);
              case Ha:
                return l3 = f3._init, J(a2, d2, l3(f3._payload), h2);
            }
            if (eb(f3)) return n(a2, d2, f3, h2);
            if (Ka2(f3)) return t(a2, d2, f3, h2);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g2(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E2(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e2 = b.interleaved;
        null === e2 ? (c.next = c, gh(b)) : (c.next = e2.next, e2.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b.next = b, gh(d)) : (b.next = e2.next, e2.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b : f2 = f2.next = b;
          } else e2 = f2 = b;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h = e2.shared.pending;
        if (null !== h) {
          e2.shared.pending = null;
          var k3 = h, l2 = k3.next;
          k3.next = null;
          null === g2 ? f2 = l2 : g2.next = l2;
          g2 = k3;
          var m2 = a.alternate;
          null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g2 && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k3));
        }
        if (null !== f2) {
          var q = e2.baseState;
          g2 = 0;
          m2 = l2 = k3 = null;
          h = f2;
          do {
            var r = h.lane, y3 = h.eventTime;
            if ((d & r) === r) {
              null !== m2 && (m2 = m2.next = {
                eventTime: y3,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y3 = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y3, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y3, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A3({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h] : r.push(h));
            } else y3 = { eventTime: y3, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y3, k3 = q) : m2 = m2.next = y3, g2 |= r;
            h = h.next;
            if (null === h) if (h = e2.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m2 && (k3 = q);
          e2.baseState = k3;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m2;
          b = e2.shared.interleaved;
          if (null !== b) {
            e2 = b;
            do
              g2 |= e2.lane, e2 = e2.next;
            while (e2 !== b);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g2;
          a.lanes = g2;
          a.memoizedState = q;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G2(wh, b);
        G2(vh, a);
        G2(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E2(uh);
        G2(uh, b);
      }
      function zh() {
        E2(uh);
        E2(vh);
        E2(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E2(uh), E2(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He3(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e2, f2) {
        Hh = f2;
        M3 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O3 = N = M3 = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b) O3 = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g2 = e2.next;
            e2.next = f2.next;
            f2.next = g2;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h = g2 = null, k3 = null, l2 = f2;
          do {
            var m2 = l2.lane;
            if ((Hh & m2) === m2) null !== k3 && (k3 = k3.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q = {
                lane: m2,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k3 ? (h = k3 = q, g2 = d) : k3 = k3.next = q;
              M3.lanes |= m2;
              rh |= m2;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k3 ? g2 = d : k3.next = h;
          He3(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g2;
          b.baseQueue = k3;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g2 = e2 = e2.next;
          do
            f2 = a(f2, g2.action), g2 = g2.next;
          while (g2 !== e2);
          He3(f2, b.memoizedState) || (dh = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M3, d = Uh(), e2 = b(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai2.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi2(9, ci2.bind(null, c, d, e2, b), void 0, null);
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di2(c, b, e2);
        }
        return e2;
      }
      function di2(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M3.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M3.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci2(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei2(b) && fi2(a);
      }
      function ai2(a, b, c) {
        return c(function() {
          ei2(b) && fi2(a);
        });
      }
      function ei2(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi2(a) {
        var b = ih(a, 1);
        null !== b && gi2(b, a, 1, -1);
      }
      function hi2(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii2.bind(null, M3, a);
        return [b.memoizedState, a];
      }
      function bi2(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M3.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M3.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki2(a, b, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi2(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li2(a, b, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N) {
          var g2 = N.memoizedState;
          f2 = g2.destroy;
          if (null !== d && Mh(d, g2.deps)) {
            e2.memoizedState = bi2(b, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi2(1 | b, c, f2, d);
      }
      function mi2(a, b) {
        return ki2(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li2(2048, 8, a, b);
      }
      function ni2(a, b) {
        return li2(4, 2, a, b);
      }
      function oi2(a, b) {
        return li2(4, 4, a, b);
      }
      function pi2(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li2(4, 4, pi2.bind(null, b, a), c);
      }
      function ri2() {
      }
      function si2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui2(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi2(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e2 = R2();
          gi2(c, a, d, e2);
          Bi2(c, b, d);
        }
      }
      function ii2(a, b, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
            var g2 = b.lastRenderedState, h = f2(g2, c);
            e2.hasEagerState = true;
            e2.eagerState = h;
            if (He3(h, g2)) {
              var k3 = b.interleaved;
              null === k3 ? (e2.next = e2, gh(b)) : (e2.next = k3.next, k3.next = e2);
              b.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b, e2, d);
          null !== c && (e2 = R2(), gi2(c, a, d, e2), Bi2(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M3 || null !== b && b === M3;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi2(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi2, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki2(
          4194308,
          4,
          pi2.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki2(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki2(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi2.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi2, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi2(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M3, e2 = Th();
        if (I3) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di2(d, b, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b };
        e2.queue = f2;
        mi2(ai2.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi2(9, ci2.bind(null, d, f2, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q2.identifierPrefix;
        if (I3) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si2,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui2(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui2(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b) {
        if (a && a.defaultProps) {
          b = A3({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A3({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei2 = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R2(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b && null !== b && (e2.callback = b);
        b = nh(a, e2, d);
        null !== b && (gi2(b, a, d, c), oh(b, a, d));
      } };
      function Fi(a, b, c, d, e2, f2, g2) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi(a, b, c) {
        var d = false, e2 = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b = new b(c, f2);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei2;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei2.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a, b, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b, f2, c), e2.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && Ei2.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b, stack: e2, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi2();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b, e2);
        } else e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
      }
      function Ui2(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi2(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi2(a, b, c, d, e2) {
        c = c.render;
        var f2 = b.ref;
        ch(b, e2);
        d = Nh(a, b, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi(a, b, e2);
        I3 && c && vg(b);
        b.flags |= 1;
        Xi2(a, b, d, e2);
        return b.child;
      }
      function $i2(a, b, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e2);
          a = Rg(c.type, null, d, b, b.mode, e2);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g2 = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g2, d) && a.ref === b.ref) return Zi(a, b, e2);
        }
        b.flags |= 1;
        a = Pg(f2, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi(a, b, e2);
        }
        return cj(a, b, c, d, e2);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G2(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi2(a, b, e2, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e2) {
        var f2 = Zf(c) ? Xf : H.current;
        f2 = Yf(b, f2);
        ch(b, e2);
        c = Nh(a, b, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi(a, b, e2);
        I3 && d && vg(b);
        b.flags |= 1;
        Xi2(a, b, c, e2);
        return b.child;
      }
      function hj(a, b, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b);
        } else f2 = false;
        ch(b, e2);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e2), d = true;
        else if (null === a) {
          var g2 = b.stateNode, h = b.memoizedProps;
          g2.props = h;
          var k3 = g2.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
          var m2 = c.getDerivedStateFromProps, q = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
          q || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== d || k3 !== l2) && Hi(b, g2, d, l2);
          jh = false;
          var r = b.memoizedState;
          g2.state = r;
          qh(b, d, g2, e2);
          k3 = b.memoizedState;
          h !== d || r !== k3 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k3 = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k3, l2)) ? (q || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k3), g2.props = d, g2.state = k3, g2.context = l2, d = h) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g2 = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l2 = b.type === b.elementType ? h : Ci(b.type, h);
          g2.props = l2;
          q = b.pendingProps;
          r = g2.context;
          k3 = c.contextType;
          "object" === typeof k3 && null !== k3 ? k3 = eh(k3) : (k3 = Zf(c) ? Xf : H.current, k3 = Yf(b, k3));
          var y3 = c.getDerivedStateFromProps;
          (m2 = "function" === typeof y3 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== q || r !== k3) && Hi(b, g2, d, k3);
          jh = false;
          r = b.memoizedState;
          g2.state = r;
          qh(b, d, g2, e2);
          var n = b.memoizedState;
          h !== q || r !== n || Wf.current || jh ? ("function" === typeof y3 && (Di(b, c, y3, d), n = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r, n, k3) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d, n, k3), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d, n, k3)), "function" === typeof g2.componentDidUpdate && (b.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g2.props = d, g2.state = n, g2.context = k3, d = l2) : ("function" !== typeof g2.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f2, e2);
      }
      function jj(a, b, c, d, e2, f2) {
        gj(a, b);
        var g2 = 0 !== (b.flags & 128);
        if (!d && !g2) return e2 && dg(b, c, false), Zi(a, b, f2);
        d = b.stateNode;
        Wi.current = b;
        var h = g2 && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g2 ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi2(a, b, h, f2);
        b.memoizedState = d.state;
        e2 && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e2) {
        Ig();
        Jg(e2);
        b.flags |= 256;
        Xi2(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e2 = L2.current, f2 = false, g2 = 0 !== (b.flags & 128), h;
        (h = g2) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h) f2 = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L2, e2 & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g2 = d.children;
          a = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g2 = { mode: "hidden", children: g2 }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g2);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h = e2.dehydrated, null !== h)) return rj(a, b, g2, d, h, e2, c);
        if (f2) {
          f2 = d.fallback;
          g2 = b.mode;
          e2 = a.child;
          h = e2.sibling;
          var k3 = { mode: "hidden", children: d.children };
          0 === (g2 & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k3, b.deletions = null) : (d = Pg(e2, k3), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g2, c, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g2 = a.child.memoizedState;
          g2 = null === g2 ? nj(c) : { baseLanes: g2.baseLanes | c, cachePool: null, transitions: g2.transitions };
          f2.memoizedState = g2;
          f2.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e2, f2, g2) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g2, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f2 = d.fallback;
          e2 = b.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g2, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g2);
          b.child.memoizedState = nj(g2);
          b.memoizedState = mj;
          return f2;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g2, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f2 = Error(p(419));
          d = Ki(f2, d, void 0);
          return sj(a, b, g2, d);
        }
        h = 0 !== (g2 & a.childLanes);
        if (dh || h) {
          d = Q2;
          if (null !== d) {
            switch (g2 & -g2) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g2)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi2(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b, g2, d);
        }
        if ("$?" === e2.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e2._reactRetry = b, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b;
        I3 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi2(a, b, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L2, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b.child;
            for (b.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b, true, c, null, f2);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e2 = b.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L2, L2.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G2(L2, L2.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G2(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e2 = b.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A3({}, e2, { value: void 0 });
              d = A3({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g2;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h = e2[l2];
            for (g2 in h) h.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k3 = d[l2];
            h = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k3 !== h && (null != k3 || null != h)) if ("style" === l2) if (h) {
              for (g2 in h) !h.hasOwnProperty(g2) || k3 && k3.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
              for (g2 in k3) k3.hasOwnProperty(g2) && h[g2] !== k3[g2] && (c || (c = {}), c[g2] = k3[g2]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k3;
            else "dangerouslySetInnerHTML" === l2 ? (k3 = k3 ? k3.__html : void 0, h = h ? h.__html : void 0, null != k3 && h !== k3 && (f2 = f2 || []).push(l2, k3)) : "children" === l2 ? "string" !== typeof k3 && "number" !== typeof k3 || (f2 = f2 || []).push(l2, "" + k3) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k3 && "onScroll" === l2 && D2("scroll", a), f2 || h === k3 || (f2 = [])) : (f2 = f2 || []).push(l2, k3));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b.updateQueue = l2) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I3) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E2(Wf);
            E2(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e2 = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za2(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
                  var h = f2[g2];
                  "children" === g2 ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e2 = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e2 = ["children", "" + h]) : ea2.hasOwnProperty(g2) && null != h && "onScroll" === g2 && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), "select" === c && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g2 = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A3({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h = e2;
                  for (f2 in h) if (h.hasOwnProperty(f2)) {
                    var k3 = h[f2];
                    "style" === f2 ? sb(a, k3) : "dangerouslySetInnerHTML" === f2 ? (k3 = k3 ? k3.__html : void 0, null != k3 && nb(a, k3)) : "children" === f2 ? "string" === typeof k3 ? ("textarea" !== c || "" !== k3) && ob(a, k3) : "number" === typeof k3 && ob(a, "" + k3) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k3 && "onScroll" === f2 && D2("scroll", a) : null != k3 && ta2(a, f2, k3, g2));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E2(L2);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I3 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E2(L2);
            f2 = b.memoizedState;
            if (null === f2) return S(b), null;
            d = 0 !== (b.flags & 128);
            g2 = f2.rendering;
            if (null === g2) if (d) Dj(f2, false);
            else {
              if (0 !== T2 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g2 = Ch(a);
                if (null !== g2) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g2.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B2() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g2), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I3) return S(b), null;
              } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = f2.last, null !== c ? c.sibling = g2 : b.child = g2, f2.last = g2);
            }
            if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B2(), b.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E2(Wf), E2(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E2(L2);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E2(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W2(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W2(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me2();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F3) {
                c = null;
                break a;
              }
              var g2 = 0, h = -1, k3 = -1, l2 = 0, m2 = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y3; ; ) {
                  q !== c || 0 !== e2 && 3 !== q.nodeType || (h = g2 + e2);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k3 = g2 + d);
                  3 === q.nodeType && (g2 += q.nodeValue.length);
                  if (null === (y3 = q.firstChild)) break;
                  r = q;
                  q = y3;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l2 === e2 && (h = g2);
                  r === f2 && ++m2 === d && (k3 = g2);
                  if (null !== (y3 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y3;
              }
              c = -1 === h || -1 === k3 ? null : { start: h, end: k3 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V2 = b; null !== V2; ) if (b = V2, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V2 = a;
        else for (; null !== V2; ) {
          b = V2;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w2 = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F3) {
            W2(b, b.return, F3);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b);
          case 6:
            var d = X, e2 = Xj;
            X = null;
            Yj(a, b, c);
            X = d;
            Xj = e2;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e2 = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g2 = f2.destroy;
                f2 = f2.tag;
                void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c, b, g2) : 0 !== (f2 & 4) && Mj(c, b, g2));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W2(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b, c), U3 = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g2 = b, h = g2;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f2, g2, e2);
            X = null;
            Xj = false;
            var k3 = e2.alternate;
            null !== k3 && (k3.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b, l2);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W2(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g2 = null !== c ? c.memoizedProps : f2, h = a.type, k3 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k3) try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h, g2);
                var l2 = vb(h, f2);
                for (g2 = 0; g2 < k3.length; g2 += 2) {
                  var m2 = k3[g2], q = k3[g2 + 1];
                  "style" === m2 ? sb(e2, q) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q) : "children" === m2 ? ob(e2, q) : ta2(e2, m2, q, l2);
                }
                switch (h) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y3 = f2.value;
                    null != y3 ? fb(e2, !!f2.multiple, y3, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W2(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
            d & 4 && ak(a);
            break;
          case 22:
            m2 = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m2, ck(b, a), U3 = l2) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V2 = a, m2 = a.child; null !== m2; ) {
                for (q = V2 = m2; null !== V2; ) {
                  r = V2;
                  y3 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W2(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y3 ? (y3.return = r, V2 = y3) : gk(q);
                }
                m2 = m2.sibling;
              }
              a: for (m2 = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m2) {
                    m2 = q;
                    try {
                      e2 = q.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q.stateNode, k3 = q.memoizedProps.style, g2 = void 0 !== k3 && null !== k3 && k3.hasOwnProperty("display") ? k3.display : null, h.style.display = rb("display", g2));
                    } catch (t) {
                      W2(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m2) try {
                    q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                  } catch (t) {
                    W2(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m2 === q && (m2 = null);
                  q = q.return;
                }
                m2 === q && (m2 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g2 = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g2);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k3) {
            W2(a, a.return, k3);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V2 = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V2; ) {
          var e2 = V2, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g2 = null !== e2.memoizedState || Jj;
            if (!g2) {
              var h = e2.alternate, k3 = null !== h && null !== h.memoizedState || U3;
              h = Jj;
              var l2 = U3;
              Jj = g2;
              if ((U3 = k3) && !l2) for (V2 = e2; null !== V2; ) g2 = V2, k3 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k3 ? (k3.return = g2, V2 = k3) : jk(e2);
              for (; null !== f2; ) V2 = f2, ik(f2, b, c), f2 = f2.sibling;
              V2 = e2;
              Jj = h;
              U3 = l2;
            }
            kk(a, b, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g2 = b.updateQueue;
                  if (null !== g2) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g2, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k3 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k3.autoFocus && c.focus();
                        break;
                      case "img":
                        k3.src && (c.src = k3.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q = m2.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b.flags & 512 && Rj(b);
            } catch (r) {
              W2(b, b.return, r);
            }
          }
          if (b === a) {
            V2 = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function gk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a) {
            V2 = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function jk(a) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k3) {
                  W2(b, c, k3);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k3) {
                    W2(b, e2, k3);
                  }
                }
                var f2 = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W2(b, f2, k3);
                }
                break;
              case 5:
                var g2 = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W2(b, g2, k3);
                }
            }
          } catch (k3) {
            W2(b, b.return, k3);
          }
          if (b === a) {
            V2 = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V2 = h;
            break;
          }
          V2 = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q2 = null;
      var Y2 = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T2 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R2() {
        return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi2(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K2 & 2) || a !== Q2) a === Q2 && (0 === (K2 & 2) && (qk |= c), 4 === T2 && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b.mode & 1) && (Gj = B2() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q2 ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q2 ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q2 !== a || Z !== b) uk = null, Gj = B2() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y2 ? b = 0 : (Q2 = null, Z = 0, b = T2);
        }
        if (0 !== b) {
          2 === b && (e2 = xc(a), 0 !== e2 && (d = e2, b = Nk(a, e2)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
          if (6 === b) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B2(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R2();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g2 = 31 - oc(d);
                  f2 = 1 << g2;
                  g2 = b[g2];
                  g2 > e2 && (e2 = g2);
                  d &= ~f2;
                }
                d = e2;
                d = B2() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B2());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g2) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B2()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B2()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B2());
        return null;
      }
      function Qk(a, b) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b);
        } finally {
          K2 = c, 0 === K2 && (Gj = B2() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b = K2;
        K2 |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K2 = b, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E2(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y2) for (c = Y2.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E2(Wf);
              E2(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E2(L2);
              break;
            case 19:
              E2(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q2 = a;
        Y2 = a = Pg(a.current, null);
        Z = fj = b;
        T2 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g2 = f2.next;
              f2.next = e2;
              d.next = g2;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y2;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M3.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N = M3 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T2 = 1;
              pk = b;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a, g2 = c.return, h = c, k3 = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
                var l2 = k3, m2 = h, q = m2.tag;
                if (0 === (m2.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m2.alternate;
                  r ? (m2.updateQueue = r.updateQueue, m2.memoizedState = r.memoizedState, m2.lanes = r.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
                }
                var y3 = Ui2(g2);
                if (null !== y3) {
                  y3.flags &= -257;
                  Vi(y3, g2, h, f2, b);
                  y3.mode & 1 && Si(f2, l2, b);
                  b = y3;
                  k3 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k3);
                    b.updateQueue = t;
                  } else n.add(k3);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f2, l2, b);
                    tj();
                    break a;
                  }
                  k3 = Error(p(426));
                }
              } else if (I3 && h.mode & 1) {
                var J = Ui2(g2);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g2, h, f2, b);
                  Jg(Ji(k3, h));
                  break a;
                }
              }
              f2 = k3 = Ji(k3, h);
              4 !== T2 && (T2 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g2;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x = Ni(f2, k3, b);
                    ph(f2, x);
                    break a;
                  case 1:
                    h = k3;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F3 = Qi(f2, h, b);
                      ph(f2, F3);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b = na2;
            Y2 === c && null !== c && (Y2 = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
        null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z);
      }
      function Ik(a, b) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q2 !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y2) throw Error(p(261));
        Q2 = null;
        Z = 0;
        return T2;
      }
      function Tk() {
        for (; null !== Y2; ) Uk(Y2);
      }
      function Lk() {
        for (; null !== Y2 && !cc(); ) Uk(Y2);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y2 = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y2 = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y2 = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T2 = 6;
              Y2 = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y2 = b;
            return;
          }
          Y2 = b = a;
        } while (null !== b);
        0 === T2 && (T2 = 5);
      }
      function Pk(a, b, c) {
        var d = C, e2 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e2, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q2 && (Y2 = Q2 = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g2 = C;
          C = 1;
          var h = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe2(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K2 = h;
          C = g2;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B2());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V2 = a.current; null !== V2; ) {
                var f2 = V2, g2 = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k3 = 0; k3 < h.length; k3++) {
                      var l2 = h[k3];
                      for (V2 = l2; null !== V2; ) {
                        var m2 = V2;
                        switch (m2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m2, f2);
                        }
                        var q = m2.child;
                        if (null !== q) q.return = m2, V2 = q;
                        else for (; null !== V2; ) {
                          m2 = V2;
                          var r = m2.sibling, y3 = m2.return;
                          Sj(m2);
                          if (m2 === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y3;
                            V2 = r;
                            break;
                          }
                          V2 = y3;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V2 = g2;
                else b: for (; null !== V2; ) {
                  f2 = V2;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x = f2.sibling;
                  if (null !== x) {
                    x.return = f2.return;
                    V2 = x;
                    break b;
                  }
                  V2 = f2.return;
                }
              }
              var w2 = a.current;
              for (V2 = w2; null !== V2; ) {
                g2 = V2;
                var u = g2.child;
                if (0 !== (g2.subtreeFlags & 2064) && null !== u) u.return = g2, V2 = u;
                else b: for (g2 = w2; null !== V2; ) {
                  h = V2;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na2) {
                    W2(h, h.return, na2);
                  }
                  if (h === g2) {
                    V2 = null;
                    break b;
                  }
                  var F3 = h.sibling;
                  if (null !== F3) {
                    F3.return = h.return;
                    V2 = F3;
                    break b;
                  }
                  V2 = h.return;
                }
              }
              K2 = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R2();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W2(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R2();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R2();
        a.pingedLanes |= a.suspendedLanes & c;
        Q2 === a && (Z & c) === c && (4 === T2 || 3 === T2 && (Z & 130023424) === Z && 500 > B2() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R2();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I3 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e2 = Yf(b, H.current);
            ch(b, c);
            e2 = Nh(null, b, d, a, e2, c);
            var f2 = Sh();
            b.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b), e2.updater = Ei2, b.stateNode = e2, e2._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I3 && f2 && vg(b), Xi2(null, b, e2, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b.type = d;
              e2 = b.tag = Zk(d);
              a = Ci(d, a);
              switch (e2) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi2(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i2(null, b, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci(d, e2), cj(a, b, d, e2, c);
          case 1:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci(d, e2), hj(a, b, d, e2, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e2 = f2.element;
              lh(a, b);
              qh(b, d, null, c);
              var g2 = b.memoizedState;
              d = g2.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e2 = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I3 = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi2(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d, e2) ? g2 = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi2(a, b, g2, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi2(a, b, d, c), b.child;
          case 11:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci(d, e2), Yi2(a, b, d, e2, c);
          case 7:
            return Xi2(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e2 = b.pendingProps;
              f2 = b.memoizedProps;
              g2 = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g2;
              if (null !== f2) if (He3(f2.value, g2)) {
                if (f2.children === e2.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g2 = f2.child;
                  for (var k3 = h.firstContext; null !== k3; ) {
                    if (k3.context === d) {
                      if (1 === f2.tag) {
                        k3 = mh(-1, c & -c);
                        k3.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k3.next = k3 : (k3.next = m2.next, m2.next = k3);
                          l2.pending = k3;
                        }
                      }
                      f2.lanes |= c;
                      k3 = f2.alternate;
                      null !== k3 && (k3.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k3 = k3.next;
                  }
                } else if (10 === f2.tag) g2 = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g2 = f2.return;
                  if (null === g2) throw Error(p(341));
                  g2.lanes |= c;
                  h = g2.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g2, c, b);
                  g2 = f2.sibling;
                } else g2 = f2.child;
                if (null !== g2) g2.return = f2;
                else for (g2 = f2; null !== g2; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
                f2 = g2;
              }
              Xi2(a, b, e2.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e2 = b.type, d = b.pendingProps.children, ch(b, c), e2 = eh(e2), d = d(e2), b.flags |= 1, Xi2(a, b, d, c), b.child;
          case 14:
            return d = b.type, e2 = Ci(d, b.pendingProps), e2 = Ci(d.type, e2), $i2(a, b, d, e2, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci(d, e2), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e2), Ii(b, d, e2, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e2, f2) {
        var g2 = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g2 = 1);
        else if ("string" === typeof a) g2 = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b);
          case za2:
            g2 = 8;
            e2 |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa:
            return a = Bg(19, c, b, e2), a.elementType = Fa, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g2 = 10;
                break a;
              case Ca2:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga2:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g2, c, b, e2);
        b.elementType = a;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e2) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e2, f2, g2, h, k3) {
        a = new al(a, b, c, h, k3);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e2, f2, g2, h, k3) {
        a = bl(c, d, true, a, e2, f2, g2, h, k3);
        a.context = dl(null);
        c = a.current;
        d = R2();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e2 = b.current, f2 = R2(), g2 = yi(e2);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f2, g2);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e2, b, g2);
        null !== a && (gi2(a, e2, g2, f2), oh(a, e2, g2));
        return g2;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl(g2);
              f2.call(a2);
            };
          }
          var g2 = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g2;
          a[uf] = g2.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g2;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k3);
            h.call(a2);
          };
        }
        var k3 = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k3;
        a[uf] = k3.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k3, c, d);
        });
        return k3;
      }
      function rl(a, b, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g2 = f2;
          if ("function" === typeof e2) {
            var h = e2;
            e2 = function() {
              var a2 = gl(g2);
              h.call(a2);
            };
          }
          fl(b, g2, a, e2);
        } else g2 = ql(c, b, a, e2, d);
        return gl(g2);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R2();
                gi2(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R2();
            gi2(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R2();
            gi2(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g2 = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e2, false, f2, g2);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m2 = require_react_dom();
      if (true) {
        exports.createRoot = m2.createRoot;
        exports.hydrateRoot = m2.hydrateRoot;
      } else {
        i = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m2.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m2.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k3 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m2 = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g2) {
        var b, d = {}, e2 = null, h = null;
        void 0 !== g2 && (e2 = "" + g2);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m2.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k3, type: c, key: e2, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react12 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var y = __toESM(require_react(), 1);
  var Je = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ee(e2) {
    var r, t, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (r = 0; r < s; r++) e2[r] && (t = ee(e2[r])) && (o && (o += " "), o += t);
    } else for (t in e2) e2[t] && (o && (o += " "), o += t);
    return o;
  }
  function j() {
    for (var e2, r, t = 0, o = "", s = arguments.length; t < s; t++) (e2 = arguments[t]) && (r = ee(e2)) && (o && (o += " "), o += r);
    return o;
  }
  var ve = (e2) => {
    let r = Ce(e2), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), oe(i, r) || we(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = t[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var oe = (e2, r) => {
    if (e2.length === 0) return r.classGroupId;
    let t = e2[0], o = r.nextPart.get(t), s = o ? oe(e2.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    let n = e2.join("-");
    return r.validators.find(({ validator: a }) => a(n))?.classGroupId;
  };
  var te = /^\[(.+)\]$/;
  var we = (e2) => {
    if (te.test(e2)) {
      let r = te.exec(e2)[1], t = r?.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  };
  var Ce = (e2) => {
    let { theme: r, prefix: t } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return ke(Object.entries(e2.classGroups), t).forEach(([n, a]) => {
      U(a, o, n, r);
    }), o;
  };
  var U = (e2, r, t, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n = s === "" ? r : re(r, s);
        n.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (Se(s)) {
          U(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        U(a, re(r, n), t, o);
      });
    });
  };
  var re = (e2, r) => {
    let t = e2;
    return r.split("-").forEach((o) => {
      t.nextPart.has(o) || t.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o);
    }), t;
  };
  var Se = (e2) => e2.isThemeGetter;
  var ke = (e2, r) => r ? e2.map(([t, o]) => {
    let s = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [r + a, i])) : n);
    return [t, s];
  }) : e2;
  var Re = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      t.set(n, a), r++, r > e2 && (r = 0, o = t, t = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = t.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      t.has(n) ? t.set(n, a) : s(n, a);
    } };
  };
  var Ae = (e2) => {
    let { separator: r, experimentalParseClassName: t } = e2, o = r.length === 1, s = r[0], n = r.length, a = (i) => {
      let d = [], c = 0, u = 0, g2;
      for (let p = 0; p < i.length; p++) {
        let x = i[p];
        if (c === 0) {
          if (x === s && (o || i.slice(p, p + n) === r)) {
            d.push(i.slice(u, p)), u = p + n;
            continue;
          }
          if (x === "/") {
            g2 = p;
            continue;
          }
        }
        x === "[" ? c++ : x === "]" && c--;
      }
      let m2 = d.length === 0 ? i : i.substring(u), v2 = m2.startsWith("!"), w2 = v2 ? m2.substring(1) : m2, h = g2 && g2 > u ? g2 - u : void 0;
      return { modifiers: d, hasImportantModifier: v2, baseClassName: w2, maybePostfixModifierPosition: h };
    };
    return t ? (i) => t({ className: i, parseClassName: a }) : a;
  };
  var Pe = (e2) => {
    if (e2.length <= 1) return e2;
    let r = [], t = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
    }), r.push(...t.sort()), r;
  };
  var ze = (e2) => ({ cache: Re(e2.cacheSize), parseClassName: Ae(e2), ...ve(e2) });
  var Me = /\s+/;
  var Ne = (e2, r) => {
    let { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r, n = [], a = e2.trim().split(Me), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: g2, baseClassName: m2, maybePostfixModifierPosition: v2 } = t(c), w2 = !!v2, h = o(w2 ? m2.substring(0, v2) : m2);
      if (!h) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (h = o(m2), !h) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Pe(u).join(":"), x = g2 ? p + "!" : p, C = x + h;
      if (n.includes(C)) continue;
      n.push(C);
      let N = s(h, w2);
      for (let P = 0; P < N.length; ++P) {
        let L2 = N[P];
        n.push(x + L2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Te() {
    let e2 = 0, r, t, o = "";
    for (; e2 < arguments.length; ) (r = arguments[e2++]) && (t = ne(r)) && (o && (o += " "), o += t);
    return o;
  }
  var ne = (e2) => {
    if (typeof e2 == "string") return e2;
    let r, t = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (r = ne(e2[o])) && (t && (t += " "), t += r);
    return t;
  };
  function Be(e2, ...r) {
    let t, o, s, n = a;
    function a(d) {
      let c = r.reduce((u, g2) => g2(u), e2());
      return t = ze(c), o = t.cache.get, s = t.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ne(d, t);
      return s(d, u), u;
    }
    return function() {
      return n(Te.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let r = (t) => t[e2] || [];
    return r.isThemeGetter = true, r;
  };
  var se = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ie = /^\d+\/\d+$/;
  var _e = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => z(e2) || _e.has(e2) || Ie.test(e2);
  var R = (e2) => M(e2, "length", Ke);
  var z = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var F = (e2) => M(e2, "number", z);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var Oe = (e2) => e2.endsWith("%") && z(e2.slice(0, -1));
  var l = (e2) => se.test(e2);
  var A = (e2) => Ee.test(e2);
  var We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var $e = (e2) => M(e2, We, ie);
  var De = (e2) => M(e2, "position", ie);
  var He = /* @__PURE__ */ new Set(["image", "url"]);
  var Fe = (e2) => M(e2, He, qe);
  var Ue = (e2) => M(e2, "", Ze);
  var I = () => true;
  var M = (e2, r, t) => {
    let o = se.exec(e2);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
  };
  var Ke = (e2) => Le.test(e2) && !Ve.test(e2);
  var ie = () => false;
  var Ze = (e2) => Ge.test(e2);
  var qe = (e2) => je.test(e2);
  var Ye = () => {
    let e2 = f("colors"), r = f("spacing"), t = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), g2 = f("invert"), m2 = f("gap"), v2 = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), h = f("inset"), p = f("margin"), x = f("opacity"), C = f("padding"), N = f("saturate"), P = f("scale"), L2 = f("sepia"), K2 = f("skew"), Z = f("space"), q = f("translate"), W2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, r], b = () => [l, r], Y2 = () => ["", k, R], V2 = () => ["auto", z, l], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G2 = () => ["solid", "dashed", "dotted", "double", "none"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T2 = () => ["", "0", l], Q2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [z, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: S(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b(), borderWidth: Y2(), contrast: S(), grayscale: T2(), hueRotate: S(), invert: T2(), gap: b(), gradientColorStops: [e2], gradientColorStopPositions: [Oe, R], inset: D2(), margin: D2(), opacity: S(), padding: b(), saturate: S(), scale: S(), sepia: T2(), skew: S(), space: b(), translate: b() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Q2() }], "break-before": [{ "break-before": Q2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: W2() }], "overscroll-x": [{ "overscroll-x": W2() }], "overscroll-y": [{ "overscroll-y": W2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [h] }], "inset-x": [{ "inset-x": [h] }], "inset-y": [{ "inset-y": [h] }], start: [{ start: [h] }], end: [{ end: [h] }], top: [{ top: [h] }], right: [{ right: [h] }], bottom: [{ bottom: [h] }], left: [{ left: [h] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: T2() }], shrink: [{ shrink: T2() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": V2() }], "col-end": [{ "col-end": V2() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": V2() }], "row-end": [{ "row-end": V2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [m2] }], "gap-x": [{ "gap-x": [m2] }], "gap-y": [{ "gap-y": [m2] }], "justify-content": [{ justify: ["normal", ...H()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...H(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...H(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [C] }], px: [{ px: [C] }], py: [{ py: [C] }], ps: [{ ps: [C] }], pe: [{ pe: [C] }], pt: [{ pt: [C] }], pr: [{ pr: [C] }], pb: [{ pb: [C] }], pl: [{ pl: [C] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }], "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, r, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", F] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", z, F] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [x] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [x] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...G2(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J(), De] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", $e] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v2] }], "gradient-via": [{ via: [v2] }], "gradient-to": [{ to: [v2] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x] }], "border-style": [{ border: [...G2(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x] }], "divide-style": [{ divide: G2() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...G2()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [x] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, Ue] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [x] }], "mix-blend": [{ "mix-blend": [...X(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": X() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [g2] }], saturate: [{ saturate: [N] }], sepia: [{ sepia: [L2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [g2] }], "backdrop-opacity": [{ "backdrop-opacity": [x] }], "backdrop-saturate": [{ "backdrop-saturate": [N] }], "backdrop-sepia": [{ "backdrop-sepia": [L2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: S() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: S() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [P] }], "scale-x": [{ "scale-x": [P] }], "scale-y": [{ "scale-y": [P] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q] }], "translate-y": [{ "translate-y": [q] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b() }], "scroll-mx": [{ "scroll-mx": b() }], "scroll-my": [{ "scroll-my": b() }], "scroll-ms": [{ "scroll-ms": b() }], "scroll-me": [{ "scroll-me": b() }], "scroll-mt": [{ "scroll-mt": b() }], "scroll-mr": [{ "scroll-mr": b() }], "scroll-mb": [{ "scroll-mb": b() }], "scroll-ml": [{ "scroll-ml": b() }], "scroll-p": [{ "scroll-p": b() }], "scroll-px": [{ "scroll-px": b() }], "scroll-py": [{ "scroll-py": b() }], "scroll-ps": [{ "scroll-ps": b() }], "scroll-pe": [{ "scroll-pe": b() }], "scroll-pt": [{ "scroll-pt": b() }], "scroll-pr": [{ "scroll-pr": b() }], "scroll-pb": [{ "scroll-pb": b() }], "scroll-pl": [{ "scroll-pl": b() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, F] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var ae = Be(Ye);
  function _(...e2) {
    return ae(j(e2));
  }
  function le(e2, r) {
    if (typeof e2 == "function") return e2(r);
    e2 != null && (e2.current = r);
  }
  function ce(...e2) {
    return (r) => {
      let t = false, o = e2.map((s) => {
        let n = le(s, r);
        return !t && typeof n == "function" && (t = true), n;
      });
      if (t) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : le(e2[s], null);
        }
      };
    };
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.lazy");
  var O = y[" use ".trim().toString()];
  function Qe(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ue(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === Xe && "_payload" in e2 && Qe(e2._payload);
  }
  function et(e2) {
    let r = tt(e2), t = y.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ue(n) && typeof O == "function" && (n = O(n._payload));
      let i = y.Children.toArray(n), d = i.find(ot);
      if (d) {
        let c = d.props.children, u = i.map((g2) => g2 === d ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g2);
        return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: y.isValidElement(c) ? y.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: n });
    });
    return t.displayName = `${e2}.Slot`, t;
  }
  var E = et("Slot");
  function tt(e2) {
    let r = y.forwardRef((t, o) => {
      let { children: s, ...n } = t;
      if (ue(s) && typeof O == "function" && (s = O(s._payload)), y.isValidElement(s)) {
        let a = st(s), i = nt(n, s.props);
        return s.type !== y.Fragment && (i.ref = o ? ce(o, a) : a), y.cloneElement(s, i);
      }
      return y.Children.count(s) > 1 ? y.Children.only(null) : null;
    });
    return r.displayName = `${e2}.SlotClone`, r;
  }
  var rt = /* @__PURE__ */ Symbol("radix.slottable");
  function ot(e2) {
    return y.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === rt;
  }
  function nt(e2, r) {
    let t = { ...r };
    for (let o in r) {
      let s = e2[o], n = r[o];
      /^on[A-Z]/.test(o) ? s && n ? t[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...n } : o === "className" && (t[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...t };
  }
  function st(e2) {
    let r = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
    return t ? e2.ref : (r = Object.getOwnPropertyDescriptor(e2, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var pe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var fe = j;
  var be = (e2, r) => (t) => {
    var o;
    if (r?.variants == null) return fe(e2, t?.class, t?.className);
    let { variants: s, defaultVariants: n } = r, a = Object.keys(s).map((c) => {
      let u = t?.[c], g2 = n?.[c];
      if (u === null) return null;
      let m2 = pe(u) || pe(g2);
      return s[c][m2];
    }), i = t && Object.entries(t).reduce((c, u) => {
      let [g2, m2] = u;
      return m2 === void 0 || (c[g2] = m2), c;
    }, {}), d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: g2, className: m2, ...v2 } = u;
      return Object.entries(v2).every((w2) => {
        let [h, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[h]) : { ...n, ...i }[h] === p;
      }) ? [...c, g2, m2] : c;
    }, []);
    return fe(e2, a, d, t?.class, t?.className);
  };
  var at = be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ge = (0, import_react.forwardRef)(({ className: e2, variant: r, size: t, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? E : "button", { className: _(at({ variant: r, size: t, className: e2 })), ref: n, ...s }));
  ge.displayName = "Button";
  var ct = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function dt({ variant: e2 = "primary", compact: r = false, fullWidth: t = false, large: o = false, mobileLarge: s = false, className: n }) {
    return _("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", r ? "px-3" : "px-3 md:px-4", t && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", ct[e2], n);
  }
  var he = (0, import_react2.forwardRef)(({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...g2 }, m2) => {
    let v2 = dt({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n });
    return a ? (0, import_jsx_runtime3.jsx)(E, { ref: m2, className: v2, ...g2, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: m2, type: c, className: v2, ...g2, children: [i, u, d] });
  });
  he.displayName = "DsButton";
  var ye = (0, import_react2.forwardRef)(({ label: e2, className: r, asChild: t = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(t ? E : "button", { ref: n, type: t ? void 0 : o, "aria-label": e2, title: e2, className: _("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", r), ...s }));
  ye.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var $a = Object.create;
  var rn = Object.defineProperty;
  var _a = Object.getOwnPropertyDescriptor;
  var Ba = Object.getOwnPropertyNames;
  var Ea = Object.getPrototypeOf;
  var za = Object.prototype.hasOwnProperty;
  var Ua = (e2, t) => () => (t || e2((t = { exports: {} }).exports, t), t.exports);
  var Va = (e2, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") for (let a of Ba(t)) !za.call(e2, a) && a !== r && rn(e2, a, { get: () => t[a], enumerable: !(n = _a(t, a)) || n.enumerable });
    return e2;
  };
  var nn = (e2, t, r) => (r = e2 != null ? $a(Ea(e2)) : {}, Va(t || !e2 || !e2.__esModule ? rn(r, "default", { value: e2, enumerable: true }) : r, e2));
  var Ar = Ua((xc, Nt) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function t() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var i = arguments[o];
          i && (a = n(a, r(i)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number") return a;
        if (typeof a != "object") return "";
        if (Array.isArray(a)) return t.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) return a.toString();
        var o = "";
        for (var i in a) e2.call(a, i) && a[i] && (o = n(o, i));
        return o;
      }
      function n(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      typeof Nt < "u" && Nt.exports ? (t.default = t, Nt.exports = t) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return t;
      }) : window.classNames = t;
    })();
  });
  function Ge2() {
    let e2 = (0, import_react4.useRef)(null), t = (0, import_react4.useRef)(false), r = (n) => {
      e2.current?.pointerId === n.pointerId && (e2.current = null, delete n.currentTarget.dataset.dragging, n.currentTarget.hasPointerCapture(n.pointerId) && n.currentTarget.releasePointerCapture(n.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (n) => {
      n.currentTarget.toggleAttribute("data-can-drag", n.pointerType === "mouse" && n.currentTarget.scrollWidth > n.currentTarget.clientWidth);
    }, onPointerDown: (n) => {
      t.current = false, !(n.pointerType !== "mouse" || n.button !== 0 || n.currentTarget.scrollWidth <= n.currentTarget.clientWidth) && n.target.closest("[data-drag-scroll], dialog") === n.currentTarget && (e2.current = { pointerId: n.pointerId, startX: n.clientX, scrollLeft: n.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (n) => {
      let a = e2.current;
      if (!a || a.pointerId !== n.pointerId) return;
      let o = n.clientX - a.startX;
      !a.active && Math.abs(o) < 5 || (a.active || (a.active = true, t.current = true, n.currentTarget.dataset.dragging = "", n.currentTarget.setPointerCapture(n.pointerId)), n.preventDefault(), n.currentTarget.scrollLeft = a.scrollLeft - o);
    }, onPointerUp: r, onPointerCancel: r, onLostPointerCapture: r, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (n) => n.preventDefault(), onClickCapture: (n) => {
      !t.current || n.detail === 0 || (t.current = false, n.preventDefault(), n.stopPropagation());
    } };
  }
  function pe2(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function Ya({ children: e2, width: t = "fluid", className: r, ...n }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...n, className: r ? `file-card ${r}` : "file-card", "data-width": t, children: e2 });
  }
  function Ga({ title: e2, fact: t, factKnown: r = false, intro: n }) {
    return (0, import_jsx_runtime4.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime4.jsx)("h1", { className: "file-title", children: e2 }), t && (0, import_jsx_runtime4.jsx)("p", { className: r ? "file-fact is-known" : "file-fact", children: t }), n && (0, import_jsx_runtime4.jsx)("p", { className: "file-intro", children: n })] });
  }
  function Za({ label: e2, heading: t = false, children: r }) {
    let n = import_react3.default.useId();
    return (0, import_jsx_runtime4.jsxs)("section", { className: "file-group", "aria-labelledby": n, children: [(0, import_jsx_runtime4.jsx)("h2", { id: n, className: t ? "file-group-heading" : "file-group-label", children: e2 }), r] });
  }
  function Ka({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-rows", children: e2 });
  }
  function Qa({ number: e2, thumbnail: t, name: r, detail: n, value: a, valueKnown: o = false }) {
    let i = e2 !== void 0 ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : t ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime4.jsx)("img", { src: t.src, alt: t.alt, style: pe2(t), loading: "lazy" }) }) : null;
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-row", children: [i, (0, import_jsx_runtime4.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: r }), n && (0, import_jsx_runtime4.jsx)("span", { className: "file-row-detail", children: n })] }), a && (0, import_jsx_runtime4.jsx)("span", { className: o ? "file-row-value file-known" : "file-row-value", children: a })] });
  }
  function Lt({ items: e2 }) {
    return (0, import_jsx_runtime4.jsx)("dl", { className: "file-facts", children: e2.map((t) => (0, import_jsx_runtime4.jsxs)("div", { children: [(0, import_jsx_runtime4.jsx)("dt", { children: t.label }), (0, import_jsx_runtime4.jsx)("dd", { children: t.value })] }, t.label)) });
  }
  function Ja({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-text", children: e2 });
  }
  function eo({ children: e2, sub: t }) {
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-heading", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: e2 }), t && (0, import_jsx_runtime4.jsx)("span", { className: "file-secondary", children: t })] });
  }
  function to({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-p", children: e2 });
  }
  function ro({ items: e2 }) {
    return (0, import_jsx_runtime4.jsx)("ul", { className: "file-bullets", children: e2.map((t, r) => (0, import_jsx_runtime4.jsx)("li", { children: t }, r)) });
  }
  function no({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function lo({ title: e2, children: t, tone: r = "note" }) {
    return (0, import_jsx_runtime4.jsxs)("aside", { className: "file-callout file-bar", "data-tone": r, children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: e2 }), (0, import_jsx_runtime4.jsx)("span", { children: t })] });
  }
  function so({ items: e2 }) {
    return (0, import_jsx_runtime4.jsx)("ol", { className: "file-steps", children: e2.map((t, r) => (0, import_jsx_runtime4.jsxs)("li", { children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-step-n", children: r + 1 }), (0, import_jsx_runtime4.jsx)("span", { children: t })] }, r)) });
  }
  function Te2({ items: e2, label: t, layout: r = "grid", bleed: n = r === "strip" && e2.length > 1 }) {
    let a = Ge2(), o = ["file-photos", e2.length === 1 && "is-single", r === "strip" && n && "file-bleed"].filter(Boolean).join(" ");
    return (0, import_jsx_runtime4.jsx)("div", { ...r === "strip" ? a : {}, className: o, "data-layout": r, role: "region", "aria-label": t, tabIndex: r === "strip" && e2.length > 1 ? 0 : void 0, children: e2.map((i) => (0, import_jsx_runtime4.jsx)("img", { src: i.src, alt: i.alt, style: pe2(i), loading: "lazy" }, i.src)) });
  }
  function fo({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function ee2(e2, t) {
    return e2 == null || t == null ? NaN : e2 < t ? -1 : e2 > t ? 1 : e2 >= t ? 0 : NaN;
  }
  function Dt(e2, t) {
    return e2 == null || t == null ? NaN : t < e2 ? -1 : t > e2 ? 1 : t >= e2 ? 0 : NaN;
  }
  function Ze2(e2) {
    let t, r, n;
    e2.length !== 2 ? (t = ee2, r = (l2, s) => ee2(e2(l2), s), n = (l2, s) => e2(l2) - s) : (t = e2 === ee2 || e2 === Dt ? e2 : co, r = e2, n = e2);
    function a(l2, s, u = 0, c = l2.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let f2 = u + c >>> 1;
          r(l2[f2], s) < 0 ? u = f2 + 1 : c = f2;
        } while (u < c);
      }
      return u;
    }
    function o(l2, s, u = 0, c = l2.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let f2 = u + c >>> 1;
          r(l2[f2], s) <= 0 ? u = f2 + 1 : c = f2;
        } while (u < c);
      }
      return u;
    }
    function i(l2, s, u = 0, c = l2.length) {
      let f2 = a(l2, s, u, c - 1);
      return f2 > u && n(l2[f2 - 1], s) > -n(l2[f2], s) ? f2 - 1 : f2;
    }
    return { left: a, center: i, right: o };
  }
  function co() {
    return 0;
  }
  function Ht(e2) {
    return e2 === null ? NaN : +e2;
  }
  var on = Ze2(ee2);
  var ln = on.right;
  var po = on.left;
  var mo = Ze2(Ht).center;
  var At = Math.sqrt(50);
  var Ft = Math.sqrt(10);
  var Ot = Math.sqrt(2);
  function z2(e2, t, r) {
    e2.prototype = t.prototype = r, r.constructor = e2;
  }
  function W(e2, t) {
    var r = Object.create(e2.prototype);
    for (var n in t) r[n] = t[n];
    return r;
  }
  function A2() {
  }
  var Y = 0.7;
  var ne2 = 1 / Y;
  var ge2 = "\\s*([+-]?\\d+)\\s*";
  var Le2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var I2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var bo = /^#([0-9a-f]{3,8})$/;
  var yo = new RegExp(`^rgb\\(${ge2},${ge2},${ge2}\\)$`);
  var vo = new RegExp(`^rgb\\(${I2},${I2},${I2}\\)$`);
  var wo = new RegExp(`^rgba\\(${ge2},${ge2},${ge2},${Le2}\\)$`);
  var No = new RegExp(`^rgba\\(${I2},${I2},${I2},${Le2}\\)$`);
  var ko = new RegExp(`^hsl\\(${Le2},${I2},${I2}\\)$`);
  var Mo = new RegExp(`^hsla\\(${Le2},${I2},${I2},${Le2}\\)$`);
  var fn = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  z2(A2, j2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: cn, formatHex: cn, formatHex8: Co, formatHsl: So, formatRgb: dn, toString: dn });
  function cn() {
    return this.rgb().formatHex();
  }
  function Co() {
    return this.rgb().formatHex8();
  }
  function So() {
    return bn(this).formatHsl();
  }
  function dn() {
    return this.rgb().formatRgb();
  }
  function j2(e2) {
    var t, r;
    return e2 = (e2 + "").trim().toLowerCase(), (t = bo.exec(e2)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? pn(t) : r === 3 ? new k2(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? tt2(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? tt2(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = yo.exec(e2)) ? new k2(t[1], t[2], t[3], 1) : (t = vo.exec(e2)) ? new k2(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = wo.exec(e2)) ? tt2(t[1], t[2], t[3], t[4]) : (t = No.exec(e2)) ? tt2(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ko.exec(e2)) ? gn(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mo.exec(e2)) ? gn(t[1], t[2] / 100, t[3] / 100, t[4]) : fn.hasOwnProperty(e2) ? pn(fn[e2]) : e2 === "transparent" ? new k2(NaN, NaN, NaN, 0) : null;
  }
  function pn(e2) {
    return new k2(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function tt2(e2, t, r, n) {
    return n <= 0 && (e2 = t = r = NaN), new k2(e2, t, r, n);
  }
  function De2(e2) {
    return e2 instanceof A2 || (e2 = j2(e2)), e2 ? (e2 = e2.rgb(), new k2(e2.r, e2.g, e2.b, e2.opacity)) : new k2();
  }
  function xe2(e2, t, r, n) {
    return arguments.length === 1 ? De2(e2) : new k2(e2, t, r, n ?? 1);
  }
  function k2(e2, t, r, n) {
    this.r = +e2, this.g = +t, this.b = +r, this.opacity = +n;
  }
  z2(k2, xe2, W(A2, { brighter(e2) {
    return e2 = e2 == null ? ne2 : Math.pow(ne2, e2), new k2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Y : Math.pow(Y, e2), new k2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new k2(re2(this.r), re2(this.g), re2(this.b), nt2(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: mn, formatHex: mn, formatHex8: Ro, formatRgb: hn, toString: hn }));
  function mn() {
    return `#${te2(this.r)}${te2(this.g)}${te2(this.b)}`;
  }
  function Ro() {
    return `#${te2(this.r)}${te2(this.g)}${te2(this.b)}${te2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function hn() {
    let e2 = nt2(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${re2(this.r)}, ${re2(this.g)}, ${re2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function nt2(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function re2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function te2(e2) {
    return e2 = re2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function gn(e2, t, r, n) {
    return n <= 0 ? e2 = t = r = NaN : r <= 0 || r >= 1 ? e2 = t = NaN : t <= 0 && (e2 = NaN), new L(e2, t, r, n);
  }
  function bn(e2) {
    if (e2 instanceof L) return new L(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof A2 || (e2 = j2(e2)), !e2) return new L();
    if (e2 instanceof L) return e2;
    e2 = e2.rgb();
    var t = e2.r / 255, r = e2.g / 255, n = e2.b / 255, a = Math.min(t, r, n), o = Math.max(t, r, n), i = NaN, l2 = o - a, s = (o + a) / 2;
    return l2 ? (t === o ? i = (r - n) / l2 + (r < n) * 6 : r === o ? i = (n - t) / l2 + 2 : i = (t - r) / l2 + 4, l2 /= s < 0.5 ? o + a : 2 - o - a, i *= 60) : l2 = s > 0 && s < 1 ? 0 : i, new L(i, l2, s, e2.opacity);
  }
  function He2(e2, t, r, n) {
    return arguments.length === 1 ? bn(e2) : new L(e2, t, r, n ?? 1);
  }
  function L(e2, t, r, n) {
    this.h = +e2, this.s = +t, this.l = +r, this.opacity = +n;
  }
  z2(L, He2, W(A2, { brighter(e2) {
    return e2 = e2 == null ? ne2 : Math.pow(ne2, e2), new L(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Y : Math.pow(Y, e2), new L(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e2) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new k2(_t(e2 >= 240 ? e2 - 240 : e2 + 120, a, n), _t(e2, a, n), _t(e2 < 120 ? e2 + 240 : e2 - 120, a, n), this.opacity);
  }, clamp() {
    return new L(xn(this.h), rt2(this.s), rt2(this.l), nt2(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = nt2(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${xn(this.h)}, ${rt2(this.s) * 100}%, ${rt2(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function xn(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function rt2(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function _t(e2, t, r) {
    return (e2 < 60 ? t + (r - t) * e2 / 60 : e2 < 180 ? r : e2 < 240 ? t + (r - t) * (240 - e2) / 60 : t) * 255;
  }
  var at2 = Math.PI / 180;
  var ot2 = 180 / Math.PI;
  var it2 = 18;
  var yn = 0.96422;
  var vn = 1;
  var wn = 0.82521;
  var Nn = 4 / 29;
  var be2 = 6 / 29;
  var kn = 3 * be2 * be2;
  var To = be2 * be2 * be2;
  function Mn(e2) {
    if (e2 instanceof F2) return new F2(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof U2) return Cn(e2);
    e2 instanceof k2 || (e2 = De2(e2));
    var t = Ut(e2.r), r = Ut(e2.g), n = Ut(e2.b), a = Bt((0.2225045 * t + 0.7168786 * r + 0.0606169 * n) / vn), o, i;
    return t === r && r === n ? o = i = a : (o = Bt((0.4360747 * t + 0.3850649 * r + 0.1430804 * n) / yn), i = Bt((0.0139322 * t + 0.0971045 * r + 0.7141733 * n) / wn)), new F2(116 * a - 16, 500 * (o - a), 200 * (a - i), e2.opacity);
  }
  function ye2(e2, t, r, n) {
    return arguments.length === 1 ? Mn(e2) : new F2(e2, t, r, n ?? 1);
  }
  function F2(e2, t, r, n) {
    this.l = +e2, this.a = +t, this.b = +r, this.opacity = +n;
  }
  z2(F2, ye2, W(A2, { brighter(e2) {
    return new F2(this.l + it2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new F2(this.l - it2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, t = isNaN(this.a) ? e2 : e2 + this.a / 500, r = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return t = yn * Et(t), e2 = vn * Et(e2), r = wn * Et(r), new k2(zt(3.1338561 * t - 1.6168667 * e2 - 0.4906146 * r), zt(-0.9787684 * t + 1.9161415 * e2 + 0.033454 * r), zt(0.0719453 * t - 0.2289914 * e2 + 1.4052427 * r), this.opacity);
  } }));
  function Bt(e2) {
    return e2 > To ? Math.pow(e2, 1 / 3) : e2 / kn + Nn;
  }
  function Et(e2) {
    return e2 > be2 ? e2 * e2 * e2 : kn * (e2 - Nn);
  }
  function zt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Ut(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Po(e2) {
    if (e2 instanceof U2) return new U2(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof F2 || (e2 = Mn(e2)), e2.a === 0 && e2.b === 0) return new U2(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var t = Math.atan2(e2.b, e2.a) * ot2;
    return new U2(t < 0 ? t + 360 : t, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function Ie2(e2, t, r, n) {
    return arguments.length === 1 ? Po(e2) : new U2(e2, t, r, n ?? 1);
  }
  function U2(e2, t, r, n) {
    this.h = +e2, this.c = +t, this.l = +r, this.opacity = +n;
  }
  function Cn(e2) {
    if (isNaN(e2.h)) return new F2(e2.l, 0, 0, e2.opacity);
    var t = e2.h * at2;
    return new F2(e2.l, Math.cos(t) * e2.c, Math.sin(t) * e2.c, e2.opacity);
  }
  z2(U2, Ie2, W(A2, { brighter(e2) {
    return new U2(this.h, this.c, this.l + it2 * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new U2(this.h, this.c, this.l - it2 * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Cn(this).rgb();
  } }));
  var Pn = -0.14861;
  var Vt = 1.78277;
  var qt = -0.29227;
  var lt2 = -0.90649;
  var Ae2 = 1.97294;
  var Sn = Ae2 * lt2;
  var Rn = Ae2 * Vt;
  var Tn = Vt * qt - lt2 * Pn;
  function Lo(e2) {
    if (e2 instanceof ae2) return new ae2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof k2 || (e2 = De2(e2));
    var t = e2.r / 255, r = e2.g / 255, n = e2.b / 255, a = (Tn * n + Sn * t - Rn * r) / (Tn + Sn - Rn), o = n - a, i = (Ae2 * (r - a) - qt * o) / lt2, l2 = Math.sqrt(i * i + o * o) / (Ae2 * a * (1 - a)), s = l2 ? Math.atan2(i, o) * ot2 - 120 : NaN;
    return new ae2(s < 0 ? s + 360 : s, l2, a, e2.opacity);
  }
  function ve2(e2, t, r, n) {
    return arguments.length === 1 ? Lo(e2) : new ae2(e2, t, r, n ?? 1);
  }
  function ae2(e2, t, r, n) {
    this.h = +e2, this.s = +t, this.l = +r, this.opacity = +n;
  }
  z2(ae2, ve2, W(A2, { brighter(e2) {
    return e2 = e2 == null ? ne2 : Math.pow(ne2, e2), new ae2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? Y : Math.pow(Y, e2), new ae2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * at2, t = +this.l, r = isNaN(this.s) ? 0 : this.s * t * (1 - t), n = Math.cos(e2), a = Math.sin(e2);
    return new k2(255 * (t + r * (Pn * n + Vt * a)), 255 * (t + r * (qt * n + lt2 * a)), 255 * (t + r * (Ae2 * n)), this.opacity);
  } }));
  function Wt(e2, t, r, n, a) {
    var o = e2 * e2, i = o * e2;
    return ((1 - 3 * e2 + 3 * o - i) * t + (4 - 6 * o + 3 * i) * r + (1 + 3 * e2 + 3 * o - 3 * i) * n + i * a) / 6;
  }
  function Ln(e2) {
    var t = e2.length - 1;
    return function(r) {
      var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e2[n], o = e2[n + 1], i = n > 0 ? e2[n - 1] : 2 * a - o, l2 = n < t - 1 ? e2[n + 2] : 2 * o - a;
      return Wt((r - n / t) * t, i, a, o, l2);
    };
  }
  function Dn(e2) {
    var t = e2.length;
    return function(r) {
      var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), a = e2[(n + t - 1) % t], o = e2[n % t], i = e2[(n + 1) % t], l2 = e2[(n + 2) % t];
      return Wt((r - n / t) * t, a, o, i, l2);
    };
  }
  var we2 = (e2) => () => e2;
  function Hn(e2, t) {
    return function(r) {
      return e2 + r * t;
    };
  }
  function Do(e2, t, r) {
    return e2 = Math.pow(e2, r), t = Math.pow(t, r) - e2, r = 1 / r, function(n) {
      return Math.pow(e2 + n * t, r);
    };
  }
  function Ne2(e2, t) {
    var r = t - e2;
    return r ? Hn(e2, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : we2(isNaN(e2) ? t : e2);
  }
  function In(e2) {
    return (e2 = +e2) == 1 ? v : function(t, r) {
      return r - t ? Do(t, r, e2) : we2(isNaN(t) ? r : t);
    };
  }
  function v(e2, t) {
    var r = t - e2;
    return r ? Hn(e2, r) : we2(isNaN(e2) ? t : e2);
  }
  var ke2 = (function e(t) {
    var r = In(t);
    function n(a, o) {
      var i = r((a = xe2(a)).r, (o = xe2(o)).r), l2 = r(a.g, o.g), s = r(a.b, o.b), u = v(a.opacity, o.opacity);
      return function(c) {
        return a.r = i(c), a.g = l2(c), a.b = s(c), a.opacity = u(c), a + "";
      };
    }
    return n.gamma = e, n;
  })(1);
  function An(e2) {
    return function(t) {
      var r = t.length, n = new Array(r), a = new Array(r), o = new Array(r), i, l2;
      for (i = 0; i < r; ++i) l2 = xe2(t[i]), n[i] = l2.r || 0, a[i] = l2.g || 0, o[i] = l2.b || 0;
      return n = e2(n), a = e2(a), o = e2(o), l2.opacity = 1, function(s) {
        return l2.r = n(s), l2.g = a(s), l2.b = o(s), l2 + "";
      };
    };
  }
  var Ho = An(Ln);
  var Io = An(Dn);
  var jt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Yt = new RegExp(jt.source, "g");
  function Fe2(e2, t) {
    return e2 = +e2, t = +t, function(r) {
      return Math.round(e2 * (1 - r) + t * r);
    };
  }
  function zn(e2) {
    return function(t, r) {
      var n = e2((t = He2(t)).h, (r = He2(r)).h), a = v(t.s, r.s), o = v(t.l, r.l), i = v(t.opacity, r.opacity);
      return function(l2) {
        return t.h = n(l2), t.s = a(l2), t.l = o(l2), t.opacity = i(l2), t + "";
      };
    };
  }
  var Xt = zn(Ne2);
  var Gt = zn(v);
  function st2(e2, t) {
    var r = v((e2 = ye2(e2)).l, (t = ye2(t)).l), n = v(e2.a, t.a), a = v(e2.b, t.b), o = v(e2.opacity, t.opacity);
    return function(i) {
      return e2.l = r(i), e2.a = n(i), e2.b = a(i), e2.opacity = o(i), e2 + "";
    };
  }
  function Un(e2) {
    return function(t, r) {
      var n = e2((t = Ie2(t)).h, (r = Ie2(r)).h), a = v(t.c, r.c), o = v(t.l, r.l), i = v(t.opacity, r.opacity);
      return function(l2) {
        return t.h = n(l2), t.c = a(l2), t.l = o(l2), t.opacity = i(l2), t + "";
      };
    };
  }
  var Zt = Un(Ne2);
  var Kt = Un(v);
  function Vn(e2) {
    return (function t(r) {
      r = +r;
      function n(a, o) {
        var i = e2((a = ve2(a)).h, (o = ve2(o)).h), l2 = v(a.s, o.s), s = v(a.l, o.l), u = v(a.opacity, o.opacity);
        return function(c) {
          return a.h = i(c), a.s = l2(c), a.l = s(Math.pow(c, r)), a.opacity = u(c), a + "";
        };
      }
      return n.gamma = t, n;
    })(1);
  }
  var Qt = Vn(Ne2);
  var Jt = Vn(v);
  function Yn(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ie2(e2, t) {
    if ((r = (e2 = t ? e2.toExponential(t - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e2.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e2.slice(r + 1)];
  }
  function O2(e2) {
    return e2 = ie2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function jn(e2, t) {
    return function(r, n) {
      for (var a = r.length, o = [], i = 0, l2 = e2[0], s = 0; a > 0 && l2 > 0 && (s + l2 + 1 > n && (l2 = Math.max(1, n - s)), o.push(r.substring(a -= l2, a + l2)), !((s += l2 + 1) > n)); ) l2 = e2[i = (i + 1) % e2.length];
      return o.reverse().join(t);
    };
  }
  function Xn(e2) {
    return function(t) {
      return t.replace(/[0-9]/g, function(r) {
        return e2[+r];
      });
    };
  }
  var Eo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function G(e2) {
    if (!(t = Eo.exec(e2))) throw new Error("invalid format: " + e2);
    var t;
    return new ut2({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  G.prototype = ut2.prototype;
  function ut2(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  ut2.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function Gn(e2) {
    e: for (var t = e2.length, r = 1, n = -1, a; r < t; ++r) switch (e2[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e2[r]) break e;
        n > 0 && (n = 0);
        break;
    }
    return n > 0 ? e2.slice(0, n) + e2.slice(a + 1) : e2;
  }
  var ar;
  function Zn(e2, t) {
    var r = ie2(e2, t);
    if (!r) return e2 + "";
    var n = r[0], a = r[1], o = a - (ar = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, i = n.length;
    return o === i ? n : o > i ? n + new Array(o - i + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + ie2(e2, Math.max(0, t + o - 1))[0];
  }
  function or(e2, t) {
    var r = ie2(e2, t);
    if (!r) return e2 + "";
    var n = r[0], a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
  }
  var ir = { "%": (e2, t) => (e2 * 100).toFixed(t), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: Yn, e: (e2, t) => e2.toExponential(t), f: (e2, t) => e2.toFixed(t), g: (e2, t) => e2.toPrecision(t), o: (e2) => Math.round(e2).toString(8), p: (e2, t) => or(e2 * 100, t), r: or, s: Zn, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function lr(e2) {
    return e2;
  }
  var Kn = Array.prototype.map;
  var Qn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Jn(e2) {
    var t = e2.grouping === void 0 || e2.thousands === void 0 ? lr : jn(Kn.call(e2.grouping, Number), e2.thousands + ""), r = e2.currency === void 0 ? "" : e2.currency[0] + "", n = e2.currency === void 0 ? "" : e2.currency[1] + "", a = e2.decimal === void 0 ? "." : e2.decimal + "", o = e2.numerals === void 0 ? lr : Xn(Kn.call(e2.numerals, String)), i = e2.percent === void 0 ? "%" : e2.percent + "", l2 = e2.minus === void 0 ? "\u2212" : e2.minus + "", s = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function u(f2) {
      f2 = G(f2);
      var d = f2.fill, h = f2.align, x = f2.sign, N = f2.symbol, C = f2.zero, R2 = f2.width, H = f2.comma, S = f2.precision, q = f2.trim, p = f2.type;
      p === "n" ? (H = true, p = "g") : ir[p] || (S === void 0 && (S = 12), q = true, p = "g"), (C || d === "0" && h === "=") && (C = true, d = "0", h = "=");
      var B2 = N === "$" ? r : N === "#" && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "", Fa = N === "$" ? n : /[%p]/.test(p) ? i : "", Jr = ir[p], Oa = /[defgprs%]/.test(p);
      S = S === void 0 ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
      function en(b) {
        var J = B2, P = Fa, de2, tn, Ye2;
        if (p === "c") P = Jr(b) + P, b = "";
        else {
          b = +b;
          var je2 = b < 0 || 1 / b < 0;
          if (b = isNaN(b) ? s : Jr(Math.abs(b), S), q && (b = Gn(b)), je2 && +b == 0 && x !== "+" && (je2 = false), J = (je2 ? x === "(" ? x : l2 : x === "-" || x === "(" ? "" : x) + J, P = (p === "s" ? Qn[8 + ar / 3] : "") + P + (je2 && x === "(" ? ")" : ""), Oa) {
            for (de2 = -1, tn = b.length; ++de2 < tn; ) if (Ye2 = b.charCodeAt(de2), 48 > Ye2 || Ye2 > 57) {
              P = (Ye2 === 46 ? a + b.slice(de2 + 1) : b.slice(de2)) + P, b = b.slice(0, de2);
              break;
            }
          }
        }
        H && !C && (b = t(b, 1 / 0));
        var Xe2 = J.length + b.length + P.length, E2 = Xe2 < R2 ? new Array(R2 - Xe2 + 1).join(d) : "";
        switch (H && C && (b = t(E2 + b, E2.length ? R2 - P.length : 1 / 0), E2 = ""), h) {
          case "<":
            b = J + b + P + E2;
            break;
          case "=":
            b = J + E2 + b + P;
            break;
          case "^":
            b = E2.slice(0, Xe2 = E2.length >> 1) + J + b + P + E2.slice(Xe2);
            break;
          default:
            b = E2 + J + b + P;
            break;
        }
        return o(b);
      }
      return en.toString = function() {
        return f2 + "";
      }, en;
    }
    function c(f2, d) {
      var h = u((f2 = G(f2), f2.type = "f", f2)), x = Math.max(-8, Math.min(8, Math.floor(O2(d) / 3))) * 3, N = Math.pow(10, -x), C = Qn[8 + x / 3];
      return function(R2) {
        return h(N * R2) + C;
      };
    }
    return { format: u, formatPrefix: c };
  }
  var ft;
  var ct2;
  var dt2;
  sr({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function sr(e2) {
    return ft = Jn(e2), ct2 = ft.format, dt2 = ft.formatPrefix, ft;
  }
  var pr = /* @__PURE__ */ new Date();
  var mr = /* @__PURE__ */ new Date();
  function w(e2, t, r, n) {
    function a(o) {
      return e2(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
    }
    return a.floor = (o) => (e2(o = /* @__PURE__ */ new Date(+o)), o), a.ceil = (o) => (e2(o = new Date(o - 1)), t(o, 1), e2(o), o), a.round = (o) => {
      let i = a(o), l2 = a.ceil(o);
      return o - i < l2 - o ? i : l2;
    }, a.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), a.range = (o, i, l2) => {
      let s = [];
      if (o = a.ceil(o), l2 = l2 == null ? 1 : Math.floor(l2), !(o < i) || !(l2 > 0)) return s;
      let u;
      do
        s.push(u = /* @__PURE__ */ new Date(+o)), t(o, l2), e2(o);
      while (u < o && o < i);
      return s;
    }, a.filter = (o) => w((i) => {
      if (i >= i) for (; e2(i), !o(i); ) i.setTime(i - 1);
    }, (i, l2) => {
      if (i >= i) if (l2 < 0) for (; ++l2 <= 0; ) for (; t(i, -1), !o(i); ) ;
      else for (; --l2 >= 0; ) for (; t(i, 1), !o(i); ) ;
    }), r && (a.count = (o, i) => (pr.setTime(+o), mr.setTime(+i), e2(pr), e2(mr), Math.floor(r(pr, mr))), a.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(n ? (i) => n(i) % o === 0 : (i) => a.count(0, i) % o === 0) : a)), a;
  }
  var le2 = w((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, t) => {
    e2.setTime(+e2 + t * 1e3);
  }, (e2, t) => (t - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var ea = le2.range;
  var pt = w((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 6e4);
  }, (e2, t) => (t - e2) / 6e4, (e2) => e2.getMinutes());
  var Uo = pt.range;
  var mt = w((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 6e4);
  }, (e2, t) => (t - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Vo = mt.range;
  var ht = w((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 36e5);
  }, (e2, t) => (t - e2) / 36e5, (e2) => e2.getHours());
  var qo = ht.range;
  var gt = w((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, t) => {
    e2.setTime(+e2 + t * 36e5);
  }, (e2, t) => (t - e2) / 36e5, (e2) => e2.getUTCHours());
  var Wo = gt.range;
  var xt = w((e2) => e2.setHours(0, 0, 0, 0), (e2, t) => e2.setDate(e2.getDate() + t), (e2, t) => (t - e2 - (t.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var Yo = xt.range;
  var bt = w((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCDate(e2.getUTCDate() + t);
  }, (e2, t) => (t - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var jo = bt.range;
  var ta = w((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCDate(e2.getUTCDate() + t);
  }, (e2, t) => (t - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var Xo = ta.range;
  function se2(e2) {
    return w((t) => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e2) % 7), t.setHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setDate(t.getDate() + r * 7);
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var $e2 = se2(0);
  var ra = se2(1);
  var na = se2(2);
  var aa = se2(3);
  var oa = se2(4);
  var ia = se2(5);
  var la = se2(6);
  var sa = $e2.range;
  var Zo = ra.range;
  var Ko = na.range;
  var Qo = aa.range;
  var Jo = oa.range;
  var ei = ia.range;
  var ti = la.range;
  function ue2(e2) {
    return w((t) => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e2) % 7), t.setUTCHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    }, (t, r) => (r - t) / 6048e5);
  }
  var _e2 = ue2(0);
  var ua = ue2(1);
  var fa = ue2(2);
  var ca = ue2(3);
  var da = ue2(4);
  var pa = ue2(5);
  var ma = ue2(6);
  var ha = _e2.range;
  var ri = ua.range;
  var ni = fa.range;
  var ai = ca.range;
  var oi = da.range;
  var ii = pa.range;
  var li = ma.range;
  var yt = w((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setMonth(e2.getMonth() + t);
  }, (e2, t) => t.getMonth() - e2.getMonth() + (t.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var si = yt.range;
  var vt2 = w((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCMonth(e2.getUTCMonth() + t);
  }, (e2, t) => t.getUTCMonth() - e2.getUTCMonth() + (t.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var ui = vt2.range;
  var Be2 = w((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setFullYear(e2.getFullYear() + t);
  }, (e2, t) => t.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Be2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : w((t) => {
    t.setFullYear(Math.floor(t.getFullYear() / e2) * e2), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e2);
  });
  var fi = Be2.range;
  var Ee2 = w((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, t) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + t);
  }, (e2, t) => t.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  Ee2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : w((t) => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e2) * e2), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e2);
  });
  var ci = Ee2.range;
  function br(e2, t) {
    t.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(t.domain));
  }
  function yr(e2, t) {
    t.range && ("padding" in e2, e2.range(t.range));
  }
  function vr(e2, t) {
    "align" in e2 && "align" in t && typeof t.align < "u" && e2.align(t.align);
  }
  function wr(e2, t) {
    "base" in e2 && "base" in t && typeof t.base < "u" && e2.base(t.base);
  }
  function Nr(e2, t) {
    "clamp" in e2 && "clamp" in t && typeof t.clamp < "u" && e2.clamp(t.clamp);
  }
  function kr(e2, t) {
    "constant" in e2 && "constant" in t && typeof t.constant < "u" && e2.constant(t.constant);
  }
  function Mr(e2, t) {
    "exponent" in e2 && "exponent" in t && typeof t.exponent < "u" && e2.exponent(t.exponent);
  }
  var ga = { lab: st2, hcl: Zt, "hcl-long": Kt, hsl: Xt, "hsl-long": Gt, cubehelix: Qt, "cubehelix-long": Jt, rgb: ke2 };
  function Cr(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return ga[e2];
      default:
    }
    var t = e2.type, r = e2.gamma, n = ga[t];
    return typeof r > "u" ? n : n.gamma(r);
  }
  function Sr(e2, t) {
    if ("interpolate" in t && "interpolate" in e2 && typeof t.interpolate < "u") {
      var r = Cr(t.interpolate);
      e2.interpolate(r);
    }
  }
  var di = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var pi = "%Y-%m-%d %H:%M";
  function Rr(e2) {
    var t = e2.tickFormat(1, pi)(di);
    return t === "2020-02-02 03:04";
  }
  var xa = { day: xt, hour: ht, minute: pt, month: yt, second: le2, week: $e2, year: Be2 };
  var ba = { day: bt, hour: gt, minute: mt, month: vt2, second: le2, week: _e2, year: Ee2 };
  function Tr(e2, t) {
    if ("nice" in t && typeof t.nice < "u" && "nice" in e2) {
      var r = t.nice;
      if (typeof r == "boolean") r && e2.nice();
      else if (typeof r == "number") e2.nice(r);
      else {
        var n = e2, a = Rr(n);
        if (typeof r == "string") n.nice(a ? ba[r] : xa[r]);
        else {
          var o = r.interval, i = r.step, l2 = (a ? ba[o] : xa[o]).every(i);
          l2 != null && n.nice(l2);
        }
      }
    }
  }
  function Pr(e2, t) {
    "padding" in e2 && "padding" in t && typeof t.padding < "u" && e2.padding(t.padding), "paddingInner" in e2 && "paddingInner" in t && typeof t.paddingInner < "u" && e2.paddingInner(t.paddingInner), "paddingOuter" in e2 && "paddingOuter" in t && typeof t.paddingOuter < "u" && e2.paddingOuter(t.paddingOuter);
  }
  function Lr(e2, t) {
    if (t.reverse) {
      var r = e2.range().slice().reverse();
      "padding" in e2, e2.range(r);
    }
  }
  function Dr(e2, t) {
    "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e2 ? e2.round(t.round) : "interpolate" in e2 && t.round && e2.interpolate(Fe2));
  }
  function Hr(e2, t) {
    "unknown" in e2 && "unknown" in t && typeof t.unknown < "u" && e2.unknown(t.unknown);
  }
  function Ir(e2, t) {
    if ("zero" in t && t.zero === true) {
      var r = e2.domain(), n = r[0], a = r[1], o = a < n, i = o ? [a, n] : [n, a], l2 = i[0], s = i[1], u = [Math.min(0, l2), Math.max(0, s)];
      e2.domain(o ? u.reverse() : u);
    }
  }
  var mi = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var hi = { domain: br, nice: Tr, zero: Ir, interpolate: Sr, round: Dr, align: vr, base: wr, clamp: Nr, constant: kr, exponent: Mr, padding: Pr, range: yr, reverse: Lr, unknown: Hr };
  function ze2() {
    for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
    var n = new Set(t), a = mi.filter(function(o) {
      return n.has(o);
    });
    return function(i, l2) {
      return typeof l2 < "u" && a.forEach(function(s) {
        hi[s](i, l2);
      }), i;
    };
  }
  var gi = ze2("domain", "range", "reverse", "align", "padding", "round");
  var xi = ze2("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var Fr = Math.PI;
  var Or = 2 * Fr;
  var ce2 = 1e-6;
  var bi = Or - ce2;
  function $r() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function ya() {
    return new $r();
  }
  $r.prototype = ya.prototype = { constructor: $r, moveTo: function(e2, t) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +t);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, t) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +t);
  }, quadraticCurveTo: function(e2, t, r, n) {
    this._ += "Q" + +e2 + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
  }, bezierCurveTo: function(e2, t, r, n, a, o) {
    this._ += "C" + +e2 + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +a) + "," + (this._y1 = +o);
  }, arcTo: function(e2, t, r, n, a) {
    e2 = +e2, t = +t, r = +r, n = +n, a = +a;
    var o = this._x1, i = this._y1, l2 = r - e2, s = n - t, u = o - e2, c = i - t, f2 = u * u + c * c;
    if (a < 0) throw new Error("negative radius: " + a);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = t);
    else if (f2 > ce2) if (!(Math.abs(c * l2 - s * u) > ce2) || !a) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = t);
    else {
      var d = r - o, h = n - i, x = l2 * l2 + s * s, N = d * d + h * h, C = Math.sqrt(x), R2 = Math.sqrt(f2), H = a * Math.tan((Fr - Math.acos((x + f2 - N) / (2 * C * R2))) / 2), S = H / R2, q = H / C;
      Math.abs(S - 1) > ce2 && (this._ += "L" + (e2 + S * u) + "," + (t + S * c)), this._ += "A" + a + "," + a + ",0,0," + +(c * d > u * h) + "," + (this._x1 = e2 + q * l2) + "," + (this._y1 = t + q * s);
    }
  }, arc: function(e2, t, r, n, a, o) {
    e2 = +e2, t = +t, r = +r, o = !!o;
    var i = r * Math.cos(n), l2 = r * Math.sin(n), s = e2 + i, u = t + l2, c = 1 ^ o, f2 = o ? n - a : a - n;
    if (r < 0) throw new Error("negative radius: " + r);
    this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > ce2 || Math.abs(this._y1 - u) > ce2) && (this._ += "L" + s + "," + u), r && (f2 < 0 && (f2 = f2 % Or + Or), f2 > bi ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e2 - i) + "," + (t - l2) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = s) + "," + (this._y1 = u) : f2 > ce2 && (this._ += "A" + r + "," + r + ",0," + +(f2 >= Fr) + "," + c + "," + (this._x1 = e2 + r * Math.cos(a)) + "," + (this._y1 = t + r * Math.sin(a))));
  }, rect: function(e2, t, r, n) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
  }, toString: function() {
    return this._;
  } };
  function va(e2) {
    this._context = e2;
  }
  va.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, t) {
    switch (e2 = +e2, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, t);
        break;
    }
  } };
  var Ca = nn(Ar());
  var Sa = nn(Ar());

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to2, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to2,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to2
        )}`
      );
      return location;
    }
    function createHref2(to2) {
      return typeof to2 === "string" ? to2 : createPath(to2);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to2) {
        return new URL(createHref2(to2), "http://localhost");
      },
      encodeLocation(to2) {
        let path = typeof to2 === "string" ? parsePath(to2) : to2;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to2, state) {
        action = "PUSH";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to2, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn2) {
        listener = fn2;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to2, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to2 === "string" ? parsePath(to2) : to2,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to2 && to2.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to2, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to2 === "string" ? parsePath(to2) : to2;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to2;
    if (typeof toArg === "string") {
      to2 = parsePath(toArg);
    } else {
      to2 = { ...toArg };
      invariant(
        !to2.pathname || !to2.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to2)
      );
      invariant(
        !to2.pathname || !to2.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to2)
      );
      invariant(
        !to2.search || !to2.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to2)
      );
    }
    let isEmptyPath = toArg === "" || to2.pathname === "";
    let toPathname = isEmptyPath ? "/" : to2.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to2.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to2, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m2) => m2.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to2 = _to;
    if (typeof to2 !== "string" || !ABSOLUTE_URL_REGEX.test(to2)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to: to2
      };
    }
    let absoluteURL = to2;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to2) ? new URL(normalizeProtocolRelativeUrl(to2, currentUrl.protocol)) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to: to2
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b) {
    return a.origin === b.origin && (a.origin !== "null" || a.protocol === b.protocol && a.host === b.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to2, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to2, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(
          to2,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to2 === "string" ? to2 : createPath(to2),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to2, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to2,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to2, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m2) => Object.assign(m2, {
          route: dataRouterOpts.manifest[m2.route.id] || m2.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m2) => m2.route.id && errors?.[m2.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m2) => convertRouteMatchToUiMatch(m2, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          await router.navigate(to2);
        } else {
          await router.navigate(to2, { fromRouteId: id, ...options });
        }
      },
      [router, id]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Route(props) {
    invariant(
      false,
      `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  function Routes({
    children,
    location
  }) {
    return useRoutes(createRoutesFromChildren(children), location);
  }
  function createRoutesFromChildren(children, parentPath = []) {
    let routes = [];
    React3.Children.forEach(children, (element, index) => {
      if (!React3.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index];
      if (element.type === React3.Fragment) {
        routes.push.apply(
          routes,
          createRoutesFromChildren(element.props.children, treePath)
        );
        return;
      }
      invariant(
        element.type === Route,
        `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      );
      invariant(
        !element.props.index || !element.props.children,
        "An index route cannot have child routes."
      );
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        middleware: element.props.middleware,
        loader: element.props.loader,
        action: element.props.action,
        hydrateFallbackElement: element.props.hydrateFallbackElement,
        HydrateFallback: element.props.HydrateFallback,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(
          element.props.children,
          treePath
        );
      }
      routes.push(route);
    });
    return routes;
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m2) => {
        let manifestRoute = manifest.routes[m2.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && routeModules[m2.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m2.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to: to2,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2);
      let parsed = parseToInfo(to2, basename);
      to2 = parsed.to;
      let href = useHref(to2, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to2, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to: to2,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to2, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to: to2,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to2, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to2, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to2, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to2,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to2, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to2, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime14 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react12.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react12.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/assets/hero.png
  var hero_default = "./assets/WV4M5W5L.png";

  // src/App.tsx
  var import_jsx_runtime15 = __toESM(require_jsx_runtime());
  var lessons = [
    ["1", "\u05DE\u05DE\u05E9\u05D9\u05DE\u05D4 \u05DE\u05E2\u05D5\u05E8\u05E4\u05DC\u05EA \u05DC\u05EA\u05D5\u05E6\u05E8 \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D0\u05D9\u05EA\u05D5", "\u05D1\u05D5\u05E0\u05D9\u05DD \u05D1\u05E8\u05D9\u05E3 \u05D1\u05DF 5 \u05D7\u05DC\u05E7\u05D9\u05DD: \u05DE\u05D8\u05E8\u05D4, \u05D7\u05D5\u05DE\u05E8 \u05DE\u05E7\u05D5\u05E8, \u05EA\u05D5\u05E6\u05E8, \u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05D5\u05D1\u05D3\u05D9\u05E7\u05D4. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05D1\u05E8\u05D9\u05E3 \u05DC\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05D7\u05D5\u05D6\u05E8\u05EA \u05D0\u05E6\u05DC\u05DA \u05DB\u05DC \u05E9\u05D1\u05D5\u05E2."],
    ["2", "\u05DE\u05E1\u05D9\u05DB\u05D5\u05DD \u05D9\u05D5\u05DD \u05E9\u05D8\u05D7 \u05DC\u05D3\u05D5\u05D7 \u05E9\u05DE\u05E0\u05D9\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D4", "\u05DE\u05D5\u05E6\u05D9\u05D0\u05D9\u05DD \u05DE\u05D3\u05D5\u05D7 \u05D9\u05D5\u05DE\u05D9 \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD, \u05D7\u05E1\u05DE\u05D9\u05DD, \u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05D5\u05DE\u05D5\u05E2\u05D3\u05D9\u05DD. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05D3\u05D5\u05D7 \u05D9\u05D5\u05DE\u05D9 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DE\u05D4\u05E9\u05D1\u05D5\u05E2 \u05E9\u05DC\u05DA."],
    ["3", "\u05DE\u05EA\u05E7\u05DC\u05D4 \u05D1\u05E9\u05D8\u05D7 \u05DC\u05DE\u05DB\u05EA\u05D1 \u05E7\u05D1\u05DC\u05E0\u05D9 \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D5\u05E6\u05D9\u05D0", "\u05DE\u05E4\u05E8\u05D9\u05D3\u05D9\u05DD \u05E2\u05D5\u05D1\u05D3\u05D4, \u05D3\u05E8\u05D9\u05E9\u05D4, \u05D0\u05E1\u05DE\u05DB\u05EA\u05D4 \u05D5\u05D4\u05DE\u05E9\u05DA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05DC\u05D9 \u05DC\u05D4\u05DE\u05E6\u05D9\u05D0. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05EA\u05E7\u05DC\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4 \u05DE\u05D4\u05E9\u05D8\u05D7, \u05E2\u05D3 \u05DE\u05DB\u05EA\u05D1 \u05DE\u05D5\u05DB\u05DF \u05DC\u05E9\u05DC\u05D9\u05D7\u05D4."],
    ["4", "\u05DE\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05E2\u05DE\u05D5\u05E1 \u05DC\u05D1\u05E7\u05E8\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E9\u05D1\u05D5\u05E2\u05D9\u05EA", "\u05DE\u05D6\u05D4\u05D9\u05DD \u05E1\u05D8\u05D9\u05D5\u05EA, \u05EA\u05DC\u05D5\u05EA, \u05D0\u05D7\u05E8\u05D0\u05D9 \u05D5\u05E6\u05E2\u05D3 \u05D4\u05D1\u05D0 \u05D1\u05DE\u05E7\u05D5\u05DD \u05E8\u05E7 \u05DC\u05E1\u05DB\u05DD. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05DC\u05D5\u05F4\u05D6 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC \u05E9\u05D1\u05D5\u05E2 \u05E2\u05DE\u05D5\u05E1."],
    ["5", "\u05DE\u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05E9\u05D5\u05E0\u05D5\u05EA \u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D7\u05DC\u05D9\u05D8 \u05DC\u05E4\u05D9\u05D4", "\u05DE\u05E0\u05E8\u05DE\u05DC\u05D9\u05DD \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D5\u05E1\u05E2\u05D9\u05E4\u05D9\u05DD, \u05DE\u05E1\u05DE\u05E0\u05D9\u05DD \u05D7\u05D5\u05E1\u05E8\u05D9\u05DD \u05D5\u05DE\u05DB\u05D9\u05E0\u05D9\u05DD \u05E9\u05D0\u05DC\u05D5\u05EA \u05DC\u05E1\u05E4\u05E7. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05E9\u05DC\u05D5\u05E9 \u05D4\u05E6\u05E2\u05D5\u05EA \u05E2\u05DC \u05D0\u05D5\u05EA\u05D4 \u05E2\u05D1\u05D5\u05D3\u05D4."],
    ["6", "\u05DE\u05E0\u05EA\u05D5\u05E0\u05D9 \u05E9\u05D8\u05D7 \u05DC\u05DE\u05E6\u05D2\u05EA \u05D4\u05E0\u05D4\u05DC\u05D4 \u05E7\u05E6\u05E8\u05D4", "\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D7\u05D5\u05DE\u05E8 \u05D0\u05E8\u05D5\u05DA \u05DC\u05D7\u05DE\u05E9 \u05E9\u05E7\u05D5\u05E4\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05D4\u05D7\u05DC\u05D8\u05D4 \u05D0\u05D7\u05EA \u05D1\u05E8\u05D5\u05E8\u05D4. \u05EA\u05E8\u05D2\u05D5\u05DC: \u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05E0\u05D4\u05DC\u05D4 \u05D0\u05D7\u05D3, \u05E2\u05D3 \u05DE\u05E6\u05D2\u05EA \u05DE\u05D5\u05DB\u05E0\u05D4."]
  ];
  var prices = [
    { number: 1, name: "\u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05DE\u05DC\u05D0", detail: "3 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05DC\u05D1\u05D3 \u05D1\u05DE\u05D7\u05D6\u05D5\u05E8 \xB7 6 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA, \u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3 (\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05D6\u05D5\u05D2), \u05DE\u05E9\u05D5\u05D1 \u05E6\u05DE\u05D5\u05D3 \u05D5\u05DE\u05D3\u05D9\u05D3\u05EA \u05DC\u05E4\u05E0\u05D9/\u05D0\u05D7\u05E8\u05D9", value: "\u20AA770", market: "\u20AA3,000", badge: "\u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1 \xB7 3 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA" },
    { number: 2, name: "\u05D9\u05D9\u05E9\u05D5\u05DD \u05DE\u05E2\u05DE\u05D9\u05E7", detail: "\u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 + 2 \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC\u05DB\u05DD", value: "\u20AA1,900", market: "\u20AA6,000", badge: "\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1" },
    { number: 3, name: "\u05D9\u05D9\u05E9\u05D5\u05DD \u05D1\u05E2\u05E1\u05E7", detail: "\u05D0\u05E4\u05D9\u05D5\u05DF, 6 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05DC\u05DE\u05E0\u05D4\u05DC \u05D5\u05E2\u05D5\u05D1\u05D3 \u05DE\u05E4\u05EA\u05D7 \u05D5\u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05DC\u05E6\u05E8\u05DB\u05D9 \u05D4\u05E2\u05E1\u05E7", value: "\u05D4\u05D7\u05DC \u05DE-\u20AA7,500", market: "\u05D4\u05D7\u05DC \u05DE-\u20AA15,000", badge: "\u05DE\u05D7\u05D9\u05E8 \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1" }
  ];
  function PriceRow({ number, name, detail, value, market, badge }) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "file-row price-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "file-row-slot is-number", children: number }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "file-row-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "file-strong", children: name }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "file-row-detail", children: detail })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "price-figures", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "price-market", children: [
          "\u05DE\u05D7\u05D9\u05E8 \u05E9\u05D5\u05E7 ",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("s", { children: market })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "file-row-value file-known price-value", children: value }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "price-badge", children: badge })
      ] })
    ] });
  }
  var mailMeetings = [
    ["08:00-09:00", "\u05E1\u05D9\u05D5\u05E8 \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05E9\u05D1\u05D5\u05E2\u05D9", "\u05D0\u05EA\u05E8 \u05E6\u05E4\u05D5\u05DF"],
    ["10:30-11:30", "\u05D9\u05E9\u05D9\u05D1\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05E7\u05D1\u05DC\u05E0\u05D9\u05DD", "\u05DE\u05E9\u05E8\u05D3 \u05D4\u05D0\u05EA\u05E8"],
    ["14:00-14:45", "\u05E9\u05D9\u05D7\u05D4 \u05E2\u05DD \u05E1\u05E4\u05E7 \u05D7\u05E9\u05DE\u05DC", "\u05D8\u05DC\u05E4\u05D5\u05DF"]
  ];
  function MorningMail() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("figure", { className: "mail", "aria-label": "\u05D3\u05D5\u05D2\u05DE\u05D4 \u05DC\u05DE\u05D9\u05D9\u05DC \u05E1\u05D3\u05E8 \u05D9\u05D5\u05DD", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mail-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-dot", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mail-head-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-subject", children: "\u05E1\u05D3\u05E8 \u05D4\u05D9\u05D5\u05DD \u05E9\u05DC\u05DA - \u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-meta", children: "\u05EA\u05E7\u05E6\u05D9\u05E8 \u05D1\u05D5\u05E7\u05E8 \xB7 06:00" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mail-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mail-sec", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-label", children: "\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "mail-meetings", children: mailMeetings.map(([t, what, where]) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-time", children: t }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-what", children: what }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-where", children: where })
          ] }, t)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mail-sec", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-label", children: "\u05DE\u05D4 \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D5\u05DC\u05D1\u05D3\u05D5\u05E7" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "mail-list", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05EA\u05D5\u05DB\u05E0\u05D9\u05D5\u05EA \u05E7\u05D5\u05DE\u05D4 3 \u05D1\u05D2\u05E8\u05E1\u05D4 \u05D4\u05E2\u05D3\u05DB\u05E0\u05D9\u05EA" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05D3\u05D5\u05D7 \u05D4\u05DC\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD \u05DE\u05D4\u05E1\u05D9\u05D5\u05E8 \u05D4\u05E7\u05D5\u05D3\u05DD" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05D4\u05E6\u05E2\u05EA \u05D4\u05DE\u05D7\u05D9\u05E8 \u05E9\u05DC \u05D4\u05E1\u05E4\u05E7, \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05D9\u05D7\u05D4" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mail-sec", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-label", children: "\u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05DC\u05E4\u05E0\u05D9" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "mail-list", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05DC\u05E9\u05DC\u05D5\u05D7 \u05DC\u05E7\u05D1\u05DC\u05E0\u05D9\u05DD \u05D0\u05EA \u05E0\u05D5\u05E9\u05D0\u05D9 \u05D4\u05D9\u05E9\u05D9\u05D1\u05D4 \u05E2\u05D3 09:30" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05DC\u05D0\u05E9\u05E8 \u05DE\u05D5\u05DC \u05D4\u05DE\u05D4\u05E0\u05D3\u05E1 \u05D0\u05EA \u05DB\u05DE\u05D5\u05D9\u05D5\u05EA \u05D4\u05D1\u05E8\u05D6\u05DC" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mail-sec mail-priority", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-label", children: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "\u05D0\u05DD \u05D4\u05D9\u05D5\u05DD \u05E0\u05DC\u05D7\u05E5 - \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05E2\u05DD \u05D4\u05E1\u05E4\u05E7 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D6\u05D9\u05D6 \u05DC\u05DE\u05D7\u05E8. \u05D4\u05E1\u05D9\u05D5\u05E8 \u05D5\u05D4\u05D9\u05E9\u05D9\u05D1\u05D4 \u05DC\u05D0 \u05D6\u05D6\u05D9\u05DD." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mail-pay", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-label", children: "\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D3\u05D7\u05D5\u05E4\u05D9\u05DD" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mail-pay-value", children: "\u05D0\u05D9\u05DF" })
        ] })
      ] })
    ] });
  }
  function TourReport() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("figure", { className: "report", "aria-label": "\u05D3\u05D5\u05D2\u05DE\u05D4 \u05DC\u05E1\u05D9\u05DB\u05D5\u05DD \u05E1\u05D9\u05D5\u05E8 \u05E9\u05D8\u05D7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-kicker", children: "\u05D5\u05D0\u05D7\u05E8\u05D9 \u05E1\u05D9\u05D5\u05E8 \u05D1\u05E9\u05D8\u05D7" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-title", children: "\u05E1\u05D9\u05DB\u05D5\u05DD \u05E1\u05D9\u05D5\u05E8 \u05D1\u05D9\u05E6\u05D5\u05E2" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-meta", children: "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9 \xB7 \u05E0\u05D5\u05DB\u05D7\u05D9\u05DD: \u05DE\u05E0\u05D4\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8, \u05DE\u05E0\u05D4\u05DC \u05D1\u05D9\u05E6\u05D5\u05E2, \u05DE\u05E0\u05D4\u05DC \u05D0\u05EA\u05E8, \u05E7\u05D1\u05DC\u05DF \u05DE\u05E9\u05E0\u05D4" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-label", children: "\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "report-tasks", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u05EA\u05D5\u05DB\u05E0\u05D9\u05D5\u05EA \u05DE\u05E2\u05E7\u05D5\u05EA - \u05E7\u05D9\u05D3\u05D5\u05DD \u05DE\u05D5\u05DC \u05D4\u05DE\u05EA\u05DB\u05E0\u05DF" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-owner", children: "\u05DE\u05E0\u05D4\u05DC \u05D1\u05D9\u05E6\u05D5\u05E2" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u05E1\u05D9\u05DE\u05D5\u05DF \u05D5\u05D1\u05D3\u05D9\u05E7\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D9\u05E6\u05D9\u05E7\u05D4" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-owner", children: "\u05DE\u05E0\u05D4\u05DC \u05D0\u05EA\u05E8" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u05D4\u05D9\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D0\u05EA\u05E8 \u05DC\u05D7\u05D5\u05E8\u05E3" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-owner", children: "\u05DB\u05D5\u05DC\u05DD" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-label", children: "\u05D1\u05E2\u05D9\u05D5\u05EA \u05E9\u05E2\u05DC\u05D5" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ol", { className: "report-issues", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("b", { children: "\u05D0\u05D9\u05D8\u05D5\u05DD \u05D1\u05E7\u05D5\u05DE\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA" }),
        " - \u05D7\u05E9\u05E9 \u05DC\u05D7\u05D3\u05D9\u05E8\u05EA \u05DE\u05D9\u05DD. ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-fix", children: "\u05D1\u05D8\u05D9\u05E4\u05D5\u05DC:" }),
        " \u05DE\u05E0\u05D4\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DE\u05D5\u05DC \u05D4\u05D9\u05D5\u05E2\u05E5."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "report-note", children: "\u05DE\u05D4\u05E8\u05E9\u05D9\u05DE\u05D5\u05EA \u05D4\u05DE\u05D1\u05D5\u05DC\u05D2\u05E0\u05D5\u05EA \u05DE\u05D4\u05E1\u05D9\u05D5\u05E8 - \u05DC\u05D3\u05D5\u05D7 \u05DE\u05E1\u05D5\u05D3\u05E8, \u05D1\u05DB\u05DE\u05D4 \u05D3\u05E7\u05D5\u05EA." })
    ] });
  }
  function Home() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(lo, { title: "\u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05E0\u05E4\u05EA\u05D7 \u05D1\u05E8\u05D1\u05D9\u05E2\u05D9, 23.9", tone: "note", children: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9, \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3. \u20AA770 \u05DC-3 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05DE\u05D7\u05D6\u05D5\u05E8 (\u05DE\u05D7\u05D9\u05E8 \u05E9\u05D5\u05E7 \u20AA3,000)." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Te2, { label: "\u05DE\u05D4\u05E2\u05D5\u05DE\u05E1 \u05DC\u05EA\u05D4\u05DC\u05D9\u05DA \u05E2\u05D1\u05D5\u05D3\u05D4", items: [{ src: hero_default, alt: "\u05D4\u05DE\u05D7\u05E9\u05D4 \u05E9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05DE\u05D7\u05D1\u05E8 \u05DE\u05E2\u05D8\u05E4\u05EA \u05D1\u05E0\u05D9\u05D9\u05DF, \u05E6\u2019\u05E7\u05DC\u05D9\u05E1\u05D8, \u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD" }] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05DE\u05D4 \u05D9\u05D5\u05E6\u05D0 \u05DE\u05D6\u05D4", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Ja, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(no, { children: "\u05D1\u05DB\u05DC \u05E9\u05D1\u05D5\u05E2, \u05D1\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA, \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05DE\u05D4\u05E9\u05D8\u05D7 \u05E9\u05DC\u05DA, \u05D5\u05D1\u05EA\u05D5\u05DA 45 \u05D3\u05E7\u05D5\u05EA \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05DD \u05EA\u05D4\u05DC\u05D9\u05DA \u05D5\u05EA\u05D5\u05E6\u05E8 \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05DB\u05D1\u05E8 \u05D1\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D1\u05D0\u05D4." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05DC\u05D0 \u05D4\u05E8\u05E6\u05D0\u05D4 \u05E2\u05DC AI \u05D5\u05DC\u05D0 \u05D0\u05D5\u05E1\u05E3 \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD. \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D3\u05D5\u05D7 \u05D9\u05D5\u05DE\u05D9, \u05DE\u05DB\u05EA\u05D1 \u05E7\u05D1\u05DC\u05E0\u05D9, \u05DC\u05D5\u05F4\u05D6, \u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05D0\u05D5 \u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05E0\u05D4\u05DC\u05D4 \u05E9\u05DC\u05DA, \u05D5\u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D9\u05D0 \u05D9\u05D5\u05E6\u05D0\u05EA." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Lt, { items: [
          { label: "\u05DE\u05E9\u05DA", value: "6 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA" },
          { label: "\u05DE\u05E4\u05D2\u05E9", value: "45 \u05D3\u05E7\u05D5\u05EA, \u05D0\u05D9\u05E9\u05D9" },
          { label: "\u05E4\u05D5\u05E8\u05DE\u05D8", value: "\u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3, \u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05D6\u05D5\u05D2" },
          { label: "\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA", value: "3 \u05D1\u05DC\u05D1\u05D3 \u05D1\u05DB\u05DC \u05DE\u05D7\u05D6\u05D5\u05E8" }
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05DC\u05DE\u05D4 \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05D1\u05E7\u05D1\u05D5\u05E6\u05D4 \u05E7\u05E9\u05D4 \u05DC\u05DB\u05D5\u05D5\u05DF \u05DB\u05DC \u05D0\u05D3\u05DD \u05DC\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E2\u05DC \u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05DC\u05D5. \u05D1\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D4\u05D7\u05D5\u05DE\u05E8 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC\u05DA, \u05D1\u05E7\u05E6\u05D1 \u05E9\u05DC\u05DA, \u05D5\u05D1\u05DC\u05D9 \u05DC\u05D4\u05E1\u05EA\u05D9\u05E8 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA \u05DE\u05D5\u05DC \u05D0\u05D7\u05E8\u05D9\u05DD. \u05D0\u05DD \u05E0\u05D5\u05D7 \u05DC\u05DB\u05DD \u05DC\u05D1\u05D5\u05D0 \u05D1\u05D6\u05D5\u05D2 - \u05E9\u05E0\u05D9 \u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D9\u05D7\u05D3 - \u05D2\u05DD \u05D0\u05E4\u05E9\u05E8." }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05DC\u05DE\u05D9 \u05D6\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Ka, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Qa, { name: "\u05E2\u05E6\u05DE\u05D0\u05D9\u05DD \u05D5\u05D1\u05E2\u05DC\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD \u05D1\u05DB\u05DC \u05EA\u05D7\u05D5\u05DD", detail: "\u05E9\u05DE\u05E9\u05D5\u05D5\u05D9\u05DD \u05D4\u05E6\u05E2\u05D5\u05EA, \u05DB\u05D5\u05EA\u05D1\u05D9\u05DD \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05DC\u05D9 \u05DE\u05D8\u05D4 \u05D2\u05D3\u05D5\u05DC." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Qa, { name: "\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D7\u05DB\u05DD \u05D9\u05D5\u05EA\u05E8", detail: "\u05DE\u05E0\u05D4\u05DC\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2, \u05DE\u05E0\u05D4\u05DC\u05D9 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05D5\u05DB\u05DC \u05EA\u05E4\u05E7\u05D9\u05D3 \u05E9\u05D7\u05D9 \u05D1\u05D9\u05DF \u05D3\u05D5\u05D7\u05D5\u05EA, \u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD \u05D5\u05D4\u05D7\u05DC\u05D8\u05D5\u05EA." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Qa, { name: "\u05E6\u05E2\u05D9\u05E8\u05D9\u05DD \u05DE\u05D2\u05D9\u05DC 16", detail: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05DD AI \u05E0\u05DB\u05D5\u05DF \u05DE\u05D4\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF - \u05E2\u05DD \u05D1\u05D3\u05D9\u05E7\u05D4 \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05E7\u05E1\u05DE\u05D9\u05DD." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D9\u05DD 45 \u05D3\u05E7\u05D5\u05EA", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(so, { items: [
        "5 \u05D3\u05E7\u05D5\u05EA: \u05DE\u05D2\u05D3\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05DA \u05D5\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05E6\u05D0\u05EA \u05DE\u05DE\u05E0\u05D4.",
        "10 \u05D3\u05E7\u05D5\u05EA: \u05D4\u05D3\u05D2\u05DE\u05D4 \u05E2\u05DC \u05D4\u05D7\u05D5\u05DE\u05E8 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC\u05DA.",
        "15 \u05D3\u05E7\u05D5\u05EA: \u05D1\u05D5\u05E0\u05D9\u05DD \u05D9\u05D7\u05D3 \u05D0\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D5\u05D4\u05EA\u05D5\u05E6\u05E8 \u05E9\u05DC\u05DA.",
        "10 \u05D3\u05E7\u05D5\u05EA: \u05EA\u05E8\u05D2\u05D5\u05DC \u05E2\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D4\u05D1\u05D5\u05D7\u05DF \u05E9\u05DC \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8, \u05D0\u05D5 \u05D4\u05E1\u05D1\u05E8 \u05DE\u05E2\u05DE\u05D9\u05E7 \u05E9\u05DC \u05D3\u05E8\u05DA \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF.",
        "5 \u05D3\u05E7\u05D5\u05EA: \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05E2\u05D5\u05D1\u05D3\u05D5\u05EA, \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD, \u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05D5\u05D4\u05E6\u05E2\u05D3 \u05D4\u05D1\u05D0."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05D3\u05D5\u05D2\u05DE\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05DE\u05DB\u05DC \u05D1\u05D5\u05E7\u05E8", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05DB\u05DC \u05D1\u05D5\u05E7\u05E8, \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D9 \u05D9\u05D5\u05E6\u05D0 \u05DC\u05E9\u05D8\u05D7, AI \u05E2\u05D5\u05D1\u05E8 \u05E2\u05DC \u05D4\u05D9\u05D5\u05DE\u05DF \u05D5\u05D4\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD \u05D5\u05E9\u05D5\u05DC\u05D7 \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D9\u05D5\u05DD \u05D1\u05D3\u05E7\u05D4 \u05E9\u05DC \u05E7\u05E8\u05D9\u05D0\u05D4 - \u05DB\u05DB\u05D4 \u05E9\u05D5\u05DD \u05D3\u05D1\u05E8 \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D0 \u05E0\u05D5\u05E4\u05DC, \u05DC\u05D0 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05E9\u05D7\u05D9\u05DB\u05EA\u05D4 \u05D1\u05DE\u05D9\u05D9\u05DC \u05D5\u05DC\u05D0 \u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05E9\u05DB\u05D7\u05EA\u05D9. \u05D5\u05D0\u05D7\u05E8\u05D9 \u05E1\u05D9\u05D5\u05E8 \u05D0\u05D5 \u05D9\u05E9\u05D9\u05D1\u05D4 \u05D1\u05E9\u05D8\u05D7, \u05D1\u05DE\u05E7\u05D5\u05DD \u05D3\u05E4\u05D9\u05DD \u05DE\u05D1\u05D5\u05DC\u05D2\u05E0\u05D9\u05DD, \u05D0\u05E0\u05D9 \u05E0\u05D5\u05EA\u05DF \u05DC\u05D5 \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E8\u05E9\u05DD \u05D5\u05DE\u05E7\u05D1\u05DC \u05D3\u05D5\u05D7 \u05E7\u05E8\u05D9\u05D0 \u05D5\u05D1\u05E8\u05D5\u05E8 - \u05DE\u05D9 \u05D0\u05D7\u05E8\u05D0\u05D9 \u05E2\u05DC \u05DE\u05D4 \u05D5\u05DE\u05D4 \u05E0\u05E9\u05D0\u05E8 \u05E4\u05EA\u05D5\u05D7. \u05D6\u05D4 \u05D7\u05D5\u05E1\u05DA \u05DC\u05D9 \u05D4\u05DE\u05D5\u05DF \u05D6\u05DE\u05DF. \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05DB\u05D0\u05DF \u05DC\u05D4\u05DE\u05D7\u05E9\u05D4." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ex-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(MorningMail, {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TourReport, {})
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(lo, { title: "\u05D9\u05E9 \u05DC\u05DA \u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05D7\u05D5\u05D6\u05E8\u05EA \u05DB\u05DC \u05E9\u05D1\u05D5\u05E2?", tone: "note", children: "\u05E9\u05DC\u05D7\u05D5 \u05DC\u05D9 \u05D3\u05D5\u05D2\u05DE\u05D4 \u05D0\u05D7\u05EA: \u05D3\u05D5\u05D7, \u05DE\u05DB\u05EA\u05D1, \u05DC\u05D5\u05F4\u05D6, \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05D0\u05D5 \u05E2\u05D3\u05DB\u05D5\u05DF. \u05D0\u05D2\u05D9\u05D3 \u05DC\u05DB\u05DD \u05D9\u05E9\u05E8 \u05D0\u05DD \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05DB\u05DD." })
    ] });
  }
  function Program() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05E9\u05D9\u05E9\u05D4 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA. \u05E9\u05E9 \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9\u05D5\u05EA", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05DE\u05E9\u05DA 45 \u05D3\u05E7\u05D5\u05EA. \u05D0\u05D7\u05E8\u05D9 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D5\u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D4\u05DE\u05E9\u05D5\u05EA\u05E4\u05EA \u05E0\u05E9\u05D0\u05E8 \u05D6\u05DE\u05DF \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC \u05E2\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D4\u05D1\u05D5\u05D7\u05DF \u05E9\u05DC \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8, \u05D0\u05D5 \u05DC\u05D4\u05E1\u05D1\u05E8 \u05DE\u05E2\u05DE\u05D9\u05E7 \u05E9\u05DC \u05D3\u05E8\u05DA \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF - \u05DC\u05E4\u05D9 \u05DE\u05D4 \u05E9\u05E0\u05DB\u05D5\u05DF \u05DC\u05DA \u05D1\u05D0\u05D5\u05EA\u05D5 \u05E9\u05D1\u05D5\u05E2." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ka, { children: lessons.map(([n, name, detail]) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Qa, { number: Number(n), name, detail }, n)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05DE\u05D4 \u05D9\u05E9 \u05D1\u05DB\u05DC \u05E9\u05D9\u05E2\u05D5\u05E8", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ro, { items: [
        "\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E2\u05DC \u05EA\u05E8\u05D7\u05D9\u05E9 \u05DE\u05D4\u05E9\u05D8\u05D7.",
        "\u05EA\u05E8\u05D2\u05D5\u05DC \u05E7\u05E6\u05E8 \u05E2\u05DC \u05D4\u05D7\u05D5\u05DE\u05E8 \u05E9\u05DC\u05DA.",
        "\u05D6\u05DE\u05DF \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC \u05E2\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D4\u05D1\u05D5\u05D7\u05DF, \u05D0\u05D5 \u05DC\u05D4\u05E1\u05D1\u05E8 \u05DE\u05E2\u05DE\u05D9\u05E7 \u05E9\u05DC \u05D3\u05E8\u05DA \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF.",
        "\u05EA\u05D1\u05E0\u05D9\u05EA \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5\u05DC\u05E2\u05D1\u05D5\u05D3 \u05D0\u05D9\u05EA\u05D4 \u05E9\u05D5\u05D1.",
        "\u05D1\u05E7\u05E8\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D5 \u05E9\u05DC\u05D9\u05D7\u05D4.",
        "\u05DE\u05E9\u05D9\u05DE\u05EA \u05E9\u05D1\u05D5\u05E2 \u05E2\u05DD \u05DE\u05D3\u05D3 \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D1\u05D3\u05D5\u05E7."
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05D0\u05D9\u05DA \u05DE\u05D5\u05D3\u05D3\u05D9\u05DD \u05D0\u05DD \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05D7\u05EA \u05E9\u05D7\u05D5\u05D6\u05E8\u05EA \u05D0\u05E6\u05DC\u05DA, \u05D5\u05DE\u05D5\u05D3\u05D3\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D5\u05D1\u05E1\u05D5\u05E4\u05D5: \u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05DC\u05E7\u05D7\u05D4 \u05D5\u05DB\u05DE\u05D4 \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05E0\u05D3\u05E8\u05E9\u05D5." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ba-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ba-card is-before", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ba-title", children: "\u05DC\u05E4\u05E0\u05D9" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05DB\u05D5\u05EA\u05D1\u05D9\u05DD \u05DE\u05D0\u05E4\u05E1 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05DB\u05DE\u05D4 \u05E1\u05D1\u05D1\u05D9 \u05EA\u05D9\u05E7\u05D5\u05DF \u05E2\u05D3 \u05E9\u05D6\u05D4 \u05D9\u05D5\u05E6\u05D0" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05D3\u05D1\u05E8\u05D9\u05DD \u05DE\u05EA\u05E4\u05E1\u05E4\u05E1\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ba-card is-after", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ba-title", children: "\u05D0\u05D7\u05E8\u05D9" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DE\u05EA\u05D1\u05E0\u05D9\u05EA \u05E9\u05DE\u05D5\u05E8\u05D4" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05E4\u05D7\u05D5\u05EA \u05E1\u05D1\u05D1\u05D9\u05DD, \u05DB\u05D9 \u05D9\u05E9 \u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05E8\u05D5\u05E8" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u05E6\u05F3\u05E7\u05DC\u05D9\u05E1\u05D8 \u05EA\u05D5\u05E4\u05E1 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DC\u05D9\u05D7\u05D4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(lo, { title: "\u05D1\u05DC\u05D9 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05DE\u05D4\u05D0\u05D5\u05D5\u05D9\u05E8", tone: "note", children: "\u05D0\u05E0\u05D9 \u05DC\u05D0 \u05DE\u05D1\u05D8\u05D9\u05D7 \u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05E7\u05D1\u05D5\u05E2 \u05D0\u05D5 ROI \u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05DE\u05D3\u05D3. \u05D0\u05E0\u05D9 \u05DE\u05E4\u05E8\u05E1\u05DD \u05E8\u05E7 \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05EA\u05D5\u05E2\u05D3\u05D4, \u05E2\u05DD \u05E1\u05D5\u05D2 \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D5\u05D4\u05EA\u05E7\u05D5\u05E4\u05D4." })
      ] })
    ] });
  }
  function Pricing() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ka, { children: prices.map((p) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PriceRow, { ...p }, p.number)) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05DE\u05D7\u05D9\u05E8\u05D9 \u05D4\u05E9\u05D5\u05E7 \u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DE\u05D1\u05D5\u05E1\u05E1\u05D9\u05DD \u05E2\u05DC \u05DE\u05D7\u05D9\u05E8\u05D5\u05E0\u05D9\u05DD \u05E4\u05D5\u05DE\u05D1\u05D9\u05D9\u05DD \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC, 2026: \u05E7\u05D5\u05E8\u05E1 AI \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9 \u05DC\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u20AA2,850, \u05E9\u05D9\u05E2\u05D5\u05E8 AI \u05E4\u05E8\u05D8\u05D9 \u05D0\u05D7\u05D3 \u05E2\u05DC \u05D0\u05D7\u05D3 \u20AA750 \u05DC\u05E9\u05E2\u05D4, \u05D5\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D9\u05D9\u05E9\u05D5\u05DD AI \u05D1\u05E2\u05E1\u05E7 \u05D4\u05D7\u05DC \u05DE-\u20AA15,000." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Ja, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(eo, { children: "\u05DC\u05DE\u05D4 \u05E8\u05E7 3 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA?" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05D0\u05E0\u05D9 \u05E4\u05D5\u05EA\u05D7 \u05DB\u05DC \u05DE\u05D7\u05D6\u05D5\u05E8 \u05DC-3 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05DB\u05D3\u05D9 \u05E9\u05DB\u05DC \u05D0\u05D7\u05D3 \u05D9\u05E7\u05D1\u05DC \u05DE\u05DE\u05E0\u05D9 \u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \u05E6\u05DE\u05D5\u05D3 \u05D5\u05DE\u05D3\u05D9\u05D3\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05E2\u05DC \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05D5. \u05D4\u05DE\u05D7\u05D9\u05E8 \u05DC\u05D0 \u05E0\u05E9\u05E2\u05DF \u05E2\u05DC \u05D4\u05D1\u05D8\u05D7\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05DE\u05D4 \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ja, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ro, { items: [
        "6 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05D7\u05D9\u05D9\u05DD \u05E9\u05DC 45 \u05D3\u05E7\u05D5\u05EA, \u05E2\u05DD \u05D6\u05DE\u05DF \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC \u05E2\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D1\u05D5\u05D7\u05DF \u05D0\u05D5 \u05DC\u05D4\u05E1\u05D1\u05E8 \u05DE\u05E2\u05DE\u05D9\u05E7 \u05E9\u05DC \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF.",
        "6 \u05DE\u05E6\u05D2\u05D5\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D5\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D7\u05D5\u05D6\u05E8.",
        "\u05D1\u05D3\u05D9\u05E7\u05EA \u05EA\u05D5\u05E6\u05E8 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D0\u05D7\u05EA \u05D1\u05DB\u05DC \u05E9\u05D1\u05D5\u05E2.",
        "\u05DE\u05D3\u05D9\u05D3\u05EA \u05DC\u05E4\u05E0\u05D9/\u05D0\u05D7\u05E8\u05D9 \u05E2\u05DC \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D7\u05D5\u05D6\u05E8\u05EA \u05D0\u05D7\u05EA."
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(lo, { title: "\u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05E0\u05E4\u05EA\u05D7 \u05D1\u05E8\u05D1\u05D9\u05E2\u05D9, 23.9", tone: "note", children: "\u20AA770 \u05DC-3 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05DE\u05D7\u05D6\u05D5\u05E8 - \u05DE\u05D7\u05D9\u05E8 \u05E9\u05D5\u05E7 \u20AA3,000. \u05DC\u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05EA\u05D0\u05DE\u05D4 \u05E9\u05DC\u05D7\u05D5 \u05DC\u05D9 \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05D7\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05DE\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4." })
    ] });
  }
  function Proof() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Za, { label: "\u05D4\u05E9\u05D9\u05D8\u05D4 \u05DB\u05D1\u05E8 \u05E2\u05D5\u05D1\u05D3\u05EA \u05D1\u05E9\u05D8\u05D7", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Ja, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(no, { children: "\u05D4\u05E7\u05D5\u05E8\u05E1 \u05DC\u05D0 \u05DE\u05D1\u05D8\u05D9\u05D7 - \u05D4\u05D5\u05D0 \u05DE\u05D5\u05D3\u05D3. \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05DD \u05EA\u05D5\u05E6\u05E8 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DE\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05DC\u05DA, \u05D5\u05D1\u05E1\u05D5\u05E3 \u05E8\u05D5\u05D0\u05D9\u05DD \u05D1\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05DE\u05D4 \u05D4\u05E9\u05EA\u05E4\u05E8." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(to, { children: "\u05D1\u05DC\u05D9 \u05D4\u05D1\u05D8\u05D7\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D1\u05DC\u05D9 \u05E2\u05D3\u05D5\u05D9\u05D5\u05EA \u05DE\u05D5\u05DE\u05E6\u05D0\u05D5\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05D6\u05D4: \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05D1\u05DB\u05DC \u05E9\u05D1\u05D5\u05E2, \u05D1\u05E7\u05E8\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DC \u05E9\u05D9\u05DE\u05D5\u05E9, \u05D5\u05DE\u05D3\u05D9\u05D3\u05EA \u05DC\u05E4\u05E0\u05D9/\u05D0\u05D7\u05E8\u05D9 \u05E2\u05DC \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05D7\u05EA \u05E9\u05DC\u05DA." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Lt, { items: [
          { label: "\u05EA\u05D5\u05E6\u05E8", value: "\u05D0\u05DE\u05D9\u05EA\u05D9, \u05DB\u05D1\u05E8 \u05DE\u05D4\u05DE\u05E4\u05D2\u05E9 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF" },
          { label: "\u05D1\u05E7\u05E8\u05D4", value: "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DC \u05E9\u05D9\u05DE\u05D5\u05E9" },
          { label: "\u05DE\u05D3\u05D9\u05D3\u05D4", value: "\u05DC\u05E4\u05E0\u05D9 \u05D5\u05D0\u05D7\u05E8\u05D9, \u05E2\u05DC \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05DA" }
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Za, { label: "\u05D0\u05D9\u05DA \u05EA\u05D3\u05E2\u05D5 \u05E9\u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 \u05D2\u05DD \u05D0\u05E6\u05DC\u05DB\u05DD", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(so, { items: [
        "\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D7\u05D5\u05D6\u05E8\u05EA \u05D0\u05D7\u05EA \u05DE\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05DC\u05DA.",
        "\u05DE\u05D5\u05D3\u05D3\u05D9\u05DD \u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05D5\u05DB\u05DE\u05D4 \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D4\u05D9\u05D0 \u05D3\u05D5\u05E8\u05E9\u05EA \u05D4\u05D9\u05D5\u05DD.",
        "\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DC\u05D9\u05D4 \u05E2\u05DD \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05DE\u05D4\u05DC\u05DA \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8.",
        "\u05DE\u05E9\u05D5\u05D5\u05D9\u05DD \u05D1\u05E1\u05D5\u05E3 - \u05D6\u05DE\u05DF, \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D5\u05DE\u05D4 \u05E0\u05EA\u05E4\u05E1 - \u05D5\u05E8\u05D5\u05D0\u05D9\u05DD \u05DE\u05D4 \u05D4\u05E9\u05EA\u05E4\u05E8."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(lo, { title: "\u05D1\u05DC\u05D9 \u05E2\u05D3\u05D5\u05D9\u05D5\u05EA \u05DE\u05D5\u05DE\u05E6\u05D0\u05D5\u05EA", tone: "note", children: "\u05DC\u05D0 \u05EA\u05DE\u05E6\u05D0\u05D5 \u05DB\u05D0\u05DF \u05E6\u05D9\u05D8\u05D5\u05D8\u05D9\u05DD \u05E2\u05DD \u05E9\u05DE\u05D5\u05EA \u05D5\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E9\u05DC\u05D0 \u05D0\u05D5\u05DE\u05EA\u05D5. \u05D1\u05E9\u05D9\u05D7\u05EA \u05D4\u05EA\u05D0\u05DE\u05D4 \u05E7\u05E6\u05E8\u05D4 \u05D0\u05D2\u05D9\u05D3 \u05DC\u05DB\u05DD \u05D9\u05E9\u05E8 \u05D0\u05DD \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05DB\u05DD." })
    ] });
  }
  function App() {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ya, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { dir: "rtl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Ga, { title: "AI \u05E9\u05E2\u05D5\u05D1\u05D3 \u05D1\u05E9\u05D8\u05D7", fact: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \xB7 6 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA \xB7 3 \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05DB\u05DC \u05DE\u05D7\u05D6\u05D5\u05E8", intro: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9 \u05E7\u05E6\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E4\u05D5\u05DA \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05D7\u05D5\u05D6\u05E8\u05D5\u05EA \u05DB\u05DC \u05E9\u05D1\u05D5\u05E2 \u05DC\u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05E8\u05D5\u05E8, \u05D1\u05D3\u05D5\u05E7 \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9\u05D9 - \u05E2\u05E6\u05DE\u05D0\u05D9\u05DD, \u05D1\u05E2\u05DC\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD, \u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D5\u05E6\u05E2\u05D9\u05E8\u05D9\u05DD \u05DE\u05D2\u05D9\u05DC 16." }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("nav", { className: "file-nav", "aria-label": "\u05E2\u05DE\u05D5\u05D3\u05D9 \u05D4\u05E7\u05D5\u05E8\u05E1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(NavLink, { to: "/", end: true, children: "\u05DC\u05DE\u05D4 \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(NavLink, { to: "/program", children: "\u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(NavLink, { to: "/pricing", children: "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(NavLink, { to: "/proof", children: "\u05DC\u05DE\u05D4 \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Routes, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Home, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Route, { path: "/program", element: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Program, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Route, { path: "/pricing", element: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Pricing, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Route, { path: "/proof", element: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Proof, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(fo, { children: "\u05E8\u05D5\u05E6\u05D9\u05DD \u05D0\u05D7\u05D3 \u05DE-3 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1? \u05E9\u05DC\u05D7\u05D5 \u05DC\u05D9 \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D0\u05D7\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05DE\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4, \u05D5\u05D0\u05D2\u05D9\u05D3 \u05DC\u05DB\u05DD \u05D9\u05E9\u05E8 \u05D0\u05DD \u05D4\u05DE\u05D7\u05D6\u05D5\u05E8 \u05DE\u05EA\u05D0\u05D9\u05DD. \u05D0\u05D9\u05DF \u05D7\u05D9\u05D5\u05D1 \u05D3\u05E8\u05DA \u05D4\u05D3\u05E3." })
    ] }) });
  }

  // src/main.tsx
  var import_jsx_runtime16 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
