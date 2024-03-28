var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
var k$1 = Symbol.for("react.element"), m$2 = Symbol.for("react.portal"), n$1 = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), r = Symbol.for("react.consumer"), t = Symbol.for("react.context"), u$1 = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.for("react.debug_trace_mode"), aa$1 = Symbol.for("react.offscreen"), ba$1 = Symbol.for("react.cache"), ca$1 = Symbol.for("react.postpone"), A = Symbol.iterator;
function da$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = A && a[A] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D = {};
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = c || B;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$1.prototype;
function G$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = c || B;
}
var H$1 = G$1.prototype = new F$1();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I = Array.isArray, J$1 = { current: null }, K$1 = { current: null }, L$1 = { transition: null }, M$1 = { ReactCurrentDispatcher: J$1, ReactCurrentCache: K$1, ReactCurrentBatchConfig: L$1, ReactCurrentOwner: { current: null } }, N$1 = Object.prototype.hasOwnProperty, O = M$1.ReactCurrentOwner;
function P$1(a, b, c, e, d, g, f2) {
  c = f2.ref;
  return { $$typeof: k$1, type: a, key: b, ref: void 0 !== c ? c : null, props: f2, _owner: g };
}
function Q$1(a, b, c) {
  var e, d = {}, g = null;
  if (null != b)
    for (e in void 0 !== b.key && (g = "" + b.key), b)
      N$1.call(b, e) && "key" !== e && "__self" !== e && "__source" !== e && (d[e] = b[e]);
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = c;
  else if (1 < f2) {
    for (var h2 = Array(f2), l2 = 0; l2 < f2; l2++)
      h2[l2] = arguments[l2 + 2];
    d.children = h2;
  }
  if (a && a.defaultProps)
    for (e in f2 = a.defaultProps, f2)
      void 0 === d[e] && (d[e] = f2[e]);
  return P$1(a, g, null, void 0, void 0, O.current, d);
}
function ea$1(a, b) {
  return P$1(a.type, b, null, void 0, void 0, a._owner, a.props);
}
function R$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === k$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(c) {
    return b[c];
  });
}
var S$1 = /\/+/g;
function T$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function U$1() {
}
function fa$1(a) {
  switch (a.status) {
    case "fulfilled":
      return a.value;
    case "rejected":
      throw a.reason;
    default:
      switch ("string" === typeof a.status ? a.then(U$1, U$1) : (a.status = "pending", a.then(function(b) {
        "pending" === a.status && (a.status = "fulfilled", a.value = b);
      }, function(b) {
        "pending" === a.status && (a.status = "rejected", a.reason = b);
      })), a.status) {
        case "fulfilled":
          return a.value;
        case "rejected":
          throw a.reason;
      }
  }
  throw a;
}
function V(a, b, c, e, d) {
  var g = typeof a;
  if ("undefined" === g || "boolean" === g)
    a = null;
  var f2 = false;
  if (null === a)
    f2 = true;
  else
    switch (g) {
      case "bigint":
      case "string":
      case "number":
        f2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case k$1:
          case m$2:
            f2 = true;
            break;
          case y:
            return f2 = a._init, V(f2(a._payload), b, c, e, d);
        }
    }
  if (f2)
    return d = d(a), f2 = "" === e ? "." + T$1(a, 0) : e, I(d) ? (c = "", null != f2 && (c = f2.replace(S$1, "$&/") + "/"), V(d, b, c, "", function(ha2) {
      return ha2;
    })) : null != d && (R$1(d) && (d = ea$1(d, c + (!d.key || a && a.key === d.key ? "" : ("" + d.key).replace(S$1, "$&/") + "/") + f2)), b.push(d)), 1;
  f2 = 0;
  var h2 = "" === e ? "." : e + ":";
  if (I(a))
    for (var l2 = 0; l2 < a.length; l2++)
      e = a[l2], g = h2 + T$1(e, l2), f2 += V(e, b, c, g, d);
  else if (l2 = da$1(a), "function" === typeof l2)
    for (a = l2.call(a), l2 = 0; !(e = a.next()).done; )
      e = e.value, g = h2 + T$1(e, l2++), f2 += V(e, b, c, g, d);
  else if ("object" === g) {
    if ("function" === typeof a.then)
      return V(fa$1(a), b, c, e, d);
    b = String(a);
    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  }
  return f2;
}
function W$1(a, b, c) {
  if (null == a)
    return a;
  var e = [], d = 0;
  V(a, e, "", "", function(g) {
    return b.call(c, g, d++);
  });
  return e;
}
function ia$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(c) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = c;
    }, function(c) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = c;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
function ja$1() {
  return /* @__PURE__ */ new WeakMap();
}
function X$1() {
  return { s: 0, v: void 0, o: null, p: null };
}
function Y$1(a, b) {
  return J$1.current.useOptimistic(a, b);
}
var Z$1 = "function" === typeof reportError ? reportError : function(a) {
  if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
    var b = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: "object" === typeof a && null !== a && "string" === typeof a.message ? String(a.message) : String(a), error: a });
    if (!window.dispatchEvent(b))
      return;
  } else if ("object" === typeof process && "function" === typeof process.emit) {
    process.emit("uncaughtException", a);
    return;
  }
  console.error(a);
};
function ka$1() {
}
react_production_min.Children = { map: W$1, forEach: function(a, b, c) {
  W$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  W$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return W$1(a, function(b) {
    return b;
  }) || [];
}, only: function(a) {
  if (!R$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = n$1;
react_production_min.Profiler = q;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = p;
react_production_min.Suspense = v;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M$1;
react_production_min.act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.cache = function(a) {
  return function() {
    var b = K$1.current;
    if (!b)
      return a.apply(null, arguments);
    var c = b.getCacheForType(ja$1);
    b = c.get(a);
    void 0 === b && (b = X$1(), c.set(a, b));
    c = 0;
    for (var e = arguments.length; c < e; c++) {
      var d = arguments[c];
      if ("function" === typeof d || "object" === typeof d && null !== d) {
        var g = b.o;
        null === g && (b.o = g = /* @__PURE__ */ new WeakMap());
        b = g.get(d);
        void 0 === b && (b = X$1(), g.set(d, b));
      } else
        g = b.p, null === g && (b.p = g = /* @__PURE__ */ new Map()), b = g.get(d), void 0 === b && (b = X$1(), g.set(d, b));
    }
    if (1 === b.s)
      return b.v;
    if (2 === b.s)
      throw b.v;
    try {
      var f2 = a.apply(
        null,
        arguments
      );
      c = b;
      c.s = 1;
      return c.v = f2;
    } catch (h2) {
      throw f2 = b, f2.s = 2, f2.v = h2, h2;
    }
  };
};
react_production_min.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error("The argument must be a React element, but you passed " + a + ".");
  var e = C$1({}, a.props), d = a.key, g = a._owner;
  if (null != b) {
    void 0 !== b.ref && (g = O.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var f2 = a.type.defaultProps;
    for (h2 in b)
      !N$1.call(b, h2) || "key" === h2 || "__self" === h2 || "__source" === h2 || "ref" === h2 && void 0 === b.ref || (e[h2] = void 0 === b[h2] && void 0 !== f2 ? f2[h2] : b[h2]);
  }
  var h2 = arguments.length - 2;
  if (1 === h2)
    e.children = c;
  else if (1 < h2) {
    f2 = Array(h2);
    for (var l2 = 0; l2 < h2; l2++)
      f2[l2] = arguments[l2 + 2];
    e.children = f2;
  }
  return P$1(a.type, d, null, void 0, void 0, g, e);
};
react_production_min.createContext = function(a) {
  a = { $$typeof: t, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = a;
  a.Consumer = { $$typeof: r, _context: a };
  return a;
};
react_production_min.createElement = Q$1;
react_production_min.createFactory = function(a) {
  var b = Q$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.experimental_useEffectEvent = function(a) {
  return J$1.current.useEffectEvent(a);
};
react_production_min.experimental_useOptimistic = function(a, b) {
  return Y$1(a, b);
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: u$1, render: a };
};
react_production_min.isValidElement = R$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: ia$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = L$1.transition, c = /* @__PURE__ */ new Set();
  L$1.transition = { _callbacks: c };
  var e = L$1.transition;
  try {
    var d = a();
    "object" === typeof d && null !== d && "function" === typeof d.then && (c.forEach(function(g) {
      return g(e, d);
    }), d.then(ka$1, Z$1));
  } catch (g) {
    Z$1(g);
  } finally {
    L$1.transition = b;
  }
};
react_production_min.unstable_Activity = aa$1;
react_production_min.unstable_Cache = ba$1;
react_production_min.unstable_DebugTracingMode = z;
react_production_min.unstable_SuspenseList = w;
react_production_min.unstable_getCacheForType = function(a) {
  var b = K$1.current;
  return b ? b.getCacheForType(a) : a();
};
react_production_min.unstable_getCacheSignal = function() {
  var a = K$1.current;
  return a ? a.getCacheSignal() : (a = new AbortController(), a.abort(Error("This CacheSignal was requested outside React which means that it is immediately aborted.")), a.signal);
};
react_production_min.unstable_postpone = function(a) {
  a = Error(a);
  a.$$typeof = ca$1;
  throw a;
};
react_production_min.unstable_useCacheRefresh = function() {
  return J$1.current.useCacheRefresh();
};
react_production_min.unstable_useMemoCache = function(a) {
  return J$1.current.useMemoCache(a);
};
react_production_min.use = function(a) {
  return J$1.current.use(a);
};
react_production_min.useActionState = function(a, b, c) {
  return J$1.current.useActionState(a, b, c);
};
react_production_min.useCallback = function(a, b) {
  return J$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return J$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a, b) {
  return J$1.current.useDeferredValue(a, b);
};
react_production_min.useEffect = function(a, b) {
  return J$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return J$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return J$1.current.useImperativeHandle(a, b, c);
};
react_production_min.useInsertionEffect = function(a, b) {
  return J$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return J$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return J$1.current.useMemo(a, b);
};
react_production_min.useOptimistic = Y$1;
react_production_min.useReducer = function(a, b, c) {
  return J$1.current.useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return J$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return J$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, c) {
  return J$1.current.useSyncExternalStore(a, b, c);
};
react_production_min.useTransition = function() {
  return J$1.current.useTransition();
};
react_production_min.version = "19.0.0-experimental-2b036d3f1-20240327";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var f = reactExports, h = Symbol.for("react.element"), k = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, m$1 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
function n(d, b, g) {
  var c = {}, e = null;
  void 0 !== g && (e = "" + g);
  void 0 !== b.key && (e = "" + b.key);
  for (a in b)
    l.call(b, a) && "key" !== a && (c[a] = b[a]);
  if (d && d.defaultProps)
    for (a in b = d.defaultProps, b)
      void 0 === c[a] && (c[a] = b[a]);
  var a = c.ref;
  return { $$typeof: h, type: d, key: e, ref: void 0 !== a ? a : null, props: c, _owner: m$1.current };
}
reactJsxRuntime_production_min.Fragment = k;
reactJsxRuntime_production_min.jsx = n;
reactJsxRuntime_production_min.jsxs = n;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
(function(exports) {
  function f2(a, c) {
    var b = a.length;
    a.push(c);
    a:
      for (; 0 < b; ) {
        var d = b - 1 >>> 1, e = a[d];
        if (0 < g(e, c))
          a[d] = c, a[b] = e, b = d;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var c = a[0], b = a.pop();
    if (b !== c) {
      a[0] = b;
      a:
        for (var d = 0, e = a.length, v2 = e >>> 1; d < v2; ) {
          var w2 = 2 * (d + 1) - 1, C2 = a[w2], m2 = w2 + 1, x2 = a[m2];
          if (0 > g(C2, b))
            m2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[m2] = b, d = m2) : (a[d] = C2, a[w2] = b, d = w2);
          else if (m2 < e && 0 > g(x2, b))
            a[d] = x2, a[m2] = b, d = m2;
          else
            break a;
        }
    }
    return c;
  }
  function g(a, c) {
    var b = a.sortIndex - c.sortIndex;
    return 0 !== b ? b : a.id - c.id;
  }
  exports.unstable_now = void 0;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var n2 = Date, p2 = n2.now();
    exports.unstable_now = function() {
      return n2.now() - p2;
    };
  }
  var q2 = [], r2 = [], t2 = 1, u2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  function G2(a) {
    for (var c = h2(r2); null !== c; ) {
      if (null === c.callback)
        k2(r2);
      else if (c.startTime <= a)
        k2(r2), c.sortIndex = c.expirationTime, f2(q2, c);
      else
        break;
      c = h2(r2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(q2))
        A2 = true, I2();
      else {
        var c = h2(r2);
        null !== c && J2(H2, c.startTime - a);
      }
  }
  var K2 = false, L2 = -1, M2 = 5, N2 = -1;
  function O2() {
    return exports.unstable_now() - N2 < M2 ? false : true;
  }
  function P2() {
    if (K2) {
      var a = exports.unstable_now();
      N2 = a;
      var c = true;
      try {
        a: {
          A2 = false;
          B2 && (B2 = false, E2(L2), L2 = -1);
          z2 = true;
          var b = y2;
          try {
            b: {
              G2(a);
              for (u2 = h2(q2); null !== u2 && !(u2.expirationTime > a && O2()); ) {
                var d = u2.callback;
                if ("function" === typeof d) {
                  u2.callback = null;
                  y2 = u2.priorityLevel;
                  var e = d(u2.expirationTime <= a);
                  a = exports.unstable_now();
                  if ("function" === typeof e) {
                    u2.callback = e;
                    G2(a);
                    c = true;
                    break b;
                  }
                  u2 === h2(q2) && k2(q2);
                  G2(a);
                } else
                  k2(q2);
                u2 = h2(q2);
              }
              if (null !== u2)
                c = true;
              else {
                var v2 = h2(r2);
                null !== v2 && J2(H2, v2.startTime - a);
                c = false;
              }
            }
            break a;
          } finally {
            u2 = null, y2 = b, z2 = false;
          }
          c = void 0;
        }
      } finally {
        c ? Q2() : K2 = false;
      }
    }
  }
  var Q2;
  if ("function" === typeof F2)
    Q2 = function() {
      F2(P2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var R2 = new MessageChannel(), S2 = R2.port2;
    R2.port1.onmessage = P2;
    Q2 = function() {
      S2.postMessage(null);
    };
  } else
    Q2 = function() {
      D2(P2, 0);
    };
  function I2() {
    K2 || (K2 = true, Q2());
  }
  function J2(a, c) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, c);
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
    A2 || z2 || (A2 = true, I2());
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(q2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var c = 3;
        break;
      default:
        c = y2;
    }
    var b = y2;
    y2 = c;
    try {
      return a();
    } finally {
      y2 = b;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, c) {
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
    var b = y2;
    y2 = a;
    try {
      return c();
    } finally {
      y2 = b;
    }
  };
  exports.unstable_scheduleCallback = function(a, c, b) {
    var d = exports.unstable_now();
    "object" === typeof b && null !== b ? (b = b.delay, b = "number" === typeof b && 0 < b ? d + b : d) : b = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = b + e;
    a = { id: t2++, callback: c, priorityLevel: a, startTime: b, expirationTime: e, sortIndex: -1 };
    b > d ? (a.sortIndex = b, f2(r2, a), null === h2(q2) && a === h2(r2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, J2(H2, b - d))) : (a.sortIndex = e, f2(q2, a), A2 || z2 || (A2 = true, I2()));
    return a;
  };
  exports.unstable_shouldYield = O2;
  exports.unstable_wrapCallback = function(a) {
    var c = y2;
    return function() {
      var b = y2;
      y2 = c;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = b;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
var aa = reactExports, ba = schedulerExports;
function ca() {
}
var da = { usingClientEntryPoint: false, Events: null, ReactDOMCurrentDispatcher: { current: { prefetchDNS: ca, preconnect: ca, preload: ca, preloadModule: ca, preinitScript: ca, preinitStyle: ca, preinitModuleScript: ca } } };
function u(a) {
  var b = "https://react.dev/errors/" + a;
  if (1 < arguments.length) {
    b += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var c = 2; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
  }
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var C = Object.assign, ea = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fa = ea.ReactCurrentDispatcher, ha = { pending: false, data: null, method: null, action: null };
function ia() {
  return fa.current.useHostTransitionStatus();
}
function ja(a, b, c) {
  return fa.current.useFormState(a, b, c);
}
var ka = [], la = -1;
function ma(a) {
  return { current: a };
}
function na(a) {
  0 > la || (a.current = ka[la], ka[la] = null, la--);
}
function E(a, b) {
  la++;
  ka[la] = a.current;
  a.current = b;
}
var oa = Symbol.for("react.element"), pa = Symbol.for("react.portal"), qa = Symbol.for("react.fragment"), ra = Symbol.for("react.strict_mode"), sa = Symbol.for("react.profiler"), ta = Symbol.for("react.provider"), ua = Symbol.for("react.consumer"), va = Symbol.for("react.context"), wa = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ya = Symbol.for("react.suspense_list"), za = Symbol.for("react.memo"), Aa = Symbol.for("react.lazy"), Ba = Symbol.for("react.scope");
var Ca = Symbol.for("react.offscreen"), Da = Symbol.for("react.legacy_hidden"), Ea = Symbol.for("react.cache");
var Fa = Symbol.for("react.memo_cache_sentinel"), Ga = Symbol.for("react.postpone"), Ha = Symbol.iterator;
function Ia(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ha && a[Ha] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var Ja = ma(null), Ka = ma(null), La = ma(null), Ma = ma(null), Na = { $$typeof: va, Provider: null, Consumer: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
function Oa(a, b) {
  E(La, b);
  E(Ka, a);
  E(Ja, null);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? (b = b.namespaceURI) ? Pa(b) : 0 : 0;
      break;
    default:
      if (a = 8 === a ? b.parentNode : b, b = a.tagName, a = a.namespaceURI)
        a = Pa(a), b = Qa(a, b);
      else
        switch (b) {
          case "svg":
            b = 1;
            break;
          case "math":
            b = 2;
            break;
          default:
            b = 0;
        }
  }
  na(Ja);
  E(Ja, b);
}
function Ra() {
  na(Ja);
  na(Ka);
  na(La);
}
function Sa(a) {
  null !== a.memoizedState && E(Ma, a);
  var b = Ja.current;
  var c = Qa(b, a.type);
  b !== c && (E(Ka, a), E(Ja, c));
}
function Ta(a) {
  Ka.current === a && (na(Ja), na(Ka));
  Ma.current === a && (na(Ma), Na._currentValue = null);
}
var Ua = ba.unstable_scheduleCallback, Va = ba.unstable_cancelCallback, Wa = ba.unstable_shouldYield, Xa = ba.unstable_requestPaint, Ya = ba.unstable_now, Za = ba.unstable_getCurrentPriorityLevel, $a = ba.unstable_ImmediatePriority, ab = ba.unstable_UserBlockingPriority, bb = ba.unstable_NormalPriority, cb = ba.unstable_LowPriority, db = ba.unstable_IdlePriority, eb = ba.log, fb = ba.unstable_setDisableYieldValue, gb = null, hb = null;
function ib(a) {
  if (hb && "function" === typeof hb.onCommitFiberRoot)
    try {
      hb.onCommitFiberRoot(gb, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
function jb(a) {
  "function" === typeof eb && fb(a);
  if (hb && "function" === typeof hb.setStrictMode)
    try {
      hb.setStrictMode(gb, a);
    } catch (b) {
    }
}
var lb = Math.clz32 ? Math.clz32 : kb, mb = Math.log, nb = Math.LN2;
function kb(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (mb(a) / nb | 0) | 0;
}
var ob = 128, pb = 4194304;
function qb(a) {
  var b = a & 42;
  if (0 !== b)
    return b;
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
      return 64;
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
      return a & 4194176;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return a & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return a;
  }
}
function rb(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes;
  a = a.pingedLanes;
  var f2 = c & 134217727;
  0 !== f2 ? (c = f2 & ~e, 0 !== c ? d = qb(c) : (a &= f2, 0 !== a && (d = qb(a)))) : (c &= ~e, 0 !== c ? d = qb(c) : 0 !== a && (d = qb(a)));
  return 0 === d ? 0 : 0 !== b && b !== d && 0 === (b & e) && (e = d & -d, a = b & -b, e >= a || 32 === e && 0 !== (a & 4194176)) ? b : d;
}
function sb(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
    case 8:
      return b + 250;
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
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tb(a, b) {
  if (a.errorRecoveryDisabledLanes & b)
    return 0;
  a = a.pendingLanes & -536870913;
  return 0 !== a ? a : a & 536870912 ? 536870912 : 0;
}
function ub() {
  var a = ob;
  ob <<= 1;
  0 === (ob & 4194176) && (ob = 128);
  return a;
}
function vb() {
  var a = pb;
  pb <<= 1;
  0 === (pb & 62914560) && (pb = 4194304);
  return a;
}
function wb(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function xb(a, b, c) {
  var d = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.entangledLanes &= b;
  a.errorRecoveryDisabledLanes &= b;
  a.shellSuspendCounter = 0;
  b = a.entanglements;
  for (var e = a.expirationTimes, f2 = a.hiddenUpdates; 0 < d; ) {
    var g = 31 - lb(d), h2 = 1 << g;
    b[g] = 0;
    e[g] = -1;
    var k2 = f2[g];
    if (null !== k2)
      for (f2[g] = null, g = 0; g < k2.length; g++) {
        var n2 = k2[g];
        null !== n2 && (n2.lane &= -536870913);
      }
    d &= ~h2;
  }
  0 !== c && yb(a, c, 0);
}
function yb(a, b, c) {
  a.pendingLanes |= b;
  a.suspendedLanes &= ~b;
  var d = 31 - lb(b);
  a.entangledLanes |= b;
  a.entanglements[d] = a.entanglements[d] | 1073741824 | c & 4194218;
}
function zb(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - lb(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
function Ab(a, b) {
  a.pendingLanes |= 2;
  for (a.entangledLanes |= 2; b; ) {
    var c = 1 << 31 - lb(b);
    a.entanglements[1] |= c;
    b &= ~c;
  }
}
var F = 0;
function Cb(a, b) {
  var c = F;
  try {
    return F = a, b();
  } finally {
    F = c;
  }
}
function Db(a) {
  a &= -a;
  return 2 < a ? 8 < a ? 0 !== (a & 134217727) ? 32 : 268435456 : 8 : 2;
}
var Eb = Object.prototype.hasOwnProperty, Fb = Math.random().toString(36).slice(2), Gb = "__reactFiber$" + Fb, Hb = "__reactProps$" + Fb, Ib = "__reactContainer$" + Fb, Jb = "__reactEvents$" + Fb, Kb = "__reactListeners$" + Fb, Lb = "__reactHandles$" + Fb, Mb = "__reactResources$" + Fb, Nb = "__reactMarker$" + Fb;
function Ob(a) {
  delete a[Gb];
  delete a[Hb];
  delete a[Jb];
  delete a[Kb];
  delete a[Lb];
}
function Pb(a) {
  var b = a[Gb];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[Ib] || c[Gb]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Qb(a); null !== a; ) {
          if (c = a[Gb])
            return c;
          a = Qb(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Rb(a) {
  if (a = a[Gb] || a[Ib]) {
    var b = a.tag;
    if (5 === b || 6 === b || 13 === b || 26 === b || 27 === b || 3 === b)
      return a;
  }
  return null;
}
function Sb(a) {
  var b = a.tag;
  if (5 === b || 26 === b || 27 === b || 6 === b)
    return a.stateNode;
  throw Error(u(33));
}
function Tb(a) {
  return a[Hb] || null;
}
function Ub(a) {
  var b = a[Mb];
  b || (b = a[Mb] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
  return b;
}
function Vb(a) {
  a[Nb] = true;
}
var Wb = /* @__PURE__ */ new Set(), Xb = {};
function Yb(a, b) {
  Zb(a, b);
  Zb(a + "Capture", b);
}
function Zb(a, b) {
  Xb[a] = b;
  for (a = 0; a < b.length; a++)
    Wb.add(b[a]);
}
var $b = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ac = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), bc = {}, cc = {};
function dc(a) {
  if (Eb.call(cc, a))
    return true;
  if (Eb.call(bc, a))
    return false;
  if (ac.test(a))
    return cc[a] = true;
  bc[a] = true;
  return false;
}
function ec(a, b, c) {
  if (dc(b))
    if (null === c)
      a.removeAttribute(b);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
          a.removeAttribute(b);
          return;
        case "boolean":
          var d = b.toLowerCase().slice(0, 5);
          if ("data-" !== d && "aria-" !== d) {
            a.removeAttribute(b);
            return;
          }
      }
      a.setAttribute(b, "" + c);
    }
}
function fc(a, b, c) {
  if (null === c)
    a.removeAttribute(b);
  else {
    switch (typeof c) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        a.removeAttribute(b);
        return;
    }
    a.setAttribute(b, "" + c);
  }
}
function gc(a, b, c, d) {
  if (null === d)
    a.removeAttribute(c);
  else {
    switch (typeof d) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        a.removeAttribute(c);
        return;
    }
    a.setAttributeNS(b, c, "" + d);
  }
}
var hc;
function ic(a) {
  if (void 0 === hc)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      hc = b && b[1] || "";
    }
  return "\n" + hc + a;
}
var jc = false;
function kc(a, b) {
  if (!a || jc)
    return "";
  jc = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  var d = { DetermineComponentFrameRoot: function() {
    try {
      if (b) {
        var w2 = function() {
          throw Error();
        };
        Object.defineProperty(w2.prototype, "props", { set: function() {
          throw Error();
        } });
        if ("object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(w2, []);
          } catch (r2) {
            var q2 = r2;
          }
          Reflect.construct(a, [], w2);
        } else {
          try {
            w2.call();
          } catch (r2) {
            q2 = r2;
          }
          a.call(w2.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (r2) {
          q2 = r2;
        }
        (w2 = a()) && "function" === typeof w2.catch && w2.catch(function() {
        });
      }
    } catch (r2) {
      if (r2 && q2 && "string" === typeof r2.stack)
        return [r2.stack, q2.stack];
    }
    return [null, null];
  } };
  d.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
  var e = Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot, "name");
  e && e.configurable && Object.defineProperty(d.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
  try {
    var f2 = d.DetermineComponentFrameRoot(), g = f2[0], h2 = f2[1];
    if (g && h2) {
      var k2 = g.split("\n"), n2 = h2.split("\n");
      for (e = d = 0; d < k2.length && !k2[d].includes("DetermineComponentFrameRoot"); )
        d++;
      for (; e < n2.length && !n2[e].includes("DetermineComponentFrameRoot"); )
        e++;
      if (d === k2.length || e === n2.length)
        for (d = k2.length - 1, e = n2.length - 1; 1 <= d && 0 <= e && k2[d] !== n2[e]; )
          e--;
      for (; 1 <= d && 0 <= e; d--, e--)
        if (k2[d] !== n2[e]) {
          if (1 !== d || 1 !== e) {
            do
              if (d--, e--, 0 > e || k2[d] !== n2[e]) {
                var t2 = "\n" + k2[d].replace(" at new ", " at ");
                a.displayName && t2.includes("<anonymous>") && (t2 = t2.replace("<anonymous>", a.displayName));
                return t2;
              }
            while (1 <= d && 0 <= e);
          }
          break;
        }
    }
  } finally {
    jc = false, Error.prepareStackTrace = c;
  }
  return (c = a ? a.displayName || a.name : "") ? ic(c) : "";
}
function lc(a) {
  switch (a.tag) {
    case 26:
    case 27:
    case 5:
      return ic(a.type);
    case 16:
      return ic("Lazy");
    case 13:
      return ic("Suspense");
    case 19:
      return ic("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = kc(a.type, false), a;
    case 11:
      return a = kc(a.type.render, false), a;
    case 1:
      return a = kc(a.type, true), a;
    default:
      return "";
  }
}
function mc(a) {
  try {
    var b = "";
    do
      b += lc(a), a = a.return;
    while (a);
    return b;
  } catch (c) {
    return "\nError generating stack: " + c.message + "\n" + c.stack;
  }
}
function nc(a) {
  switch (typeof a) {
    case "bigint":
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
function oc(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function pc(a) {
  var b = oc(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(g) {
      d = "" + g;
      f2.call(this, g);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(g) {
      d = "" + g;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function qc(a) {
  a._valueTracker || (a._valueTracker = pc(a));
}
function rc(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = oc(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function sc(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
var tc = /[\n"\\]/g;
function uc(a) {
  return a.replace(tc, function(b) {
    return "\\" + b.charCodeAt(0).toString(16) + " ";
  });
}
function vc(a, b, c, d, e, f2, g, h2) {
  a.name = "";
  null != g && "function" !== typeof g && "symbol" !== typeof g && "boolean" !== typeof g ? a.type = g : a.removeAttribute("type");
  if (null != b)
    if ("number" === g) {
      if (0 === b && "" === a.value || a.value != b)
        a.value = "" + nc(b);
    } else
      a.value !== "" + nc(b) && (a.value = "" + nc(b));
  else
    "submit" !== g && "reset" !== g || a.removeAttribute("value");
  null != b ? wc(a, g, nc(b)) : null != c ? wc(a, g, nc(c)) : null != d && a.removeAttribute("value");
  null == e && null != f2 && (a.defaultChecked = !!f2);
  null != e && (a.checked = e && "function" !== typeof e && "symbol" !== typeof e);
  null != h2 && "function" !== typeof h2 && "symbol" !== typeof h2 && "boolean" !== typeof h2 ? a.name = "" + nc(h2) : a.removeAttribute("name");
}
function xc(a, b, c, d, e, f2, g, h2) {
  null != f2 && "function" !== typeof f2 && "symbol" !== typeof f2 && "boolean" !== typeof f2 && (a.type = f2);
  if (null != b || null != c) {
    if (!("submit" !== f2 && "reset" !== f2 || void 0 !== b && null !== b))
      return;
    c = null != c ? "" + nc(c) : "";
    b = null != b ? "" + nc(b) : c;
    h2 || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  d = null != d ? d : e;
  d = "function" !== typeof d && "symbol" !== typeof d && !!d;
  a.checked = h2 ? a.checked : !!d;
  a.defaultChecked = !!d;
  null != g && "function" !== typeof g && "symbol" !== typeof g && "boolean" !== typeof g && (a.name = g);
}
function wc(a, b, c) {
  "number" === b && sc(a.ownerDocument) === a || a.defaultValue === "" + c || (a.defaultValue = "" + c);
}
var yc = Array.isArray;
function zc(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + nc(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function Ac(a, b, c) {
  if (null != b && (b = "" + nc(b), b !== a.value && (a.value = b), null == c)) {
    a.defaultValue !== b && (a.defaultValue = b);
    return;
  }
  a.defaultValue = null != c ? "" + nc(c) : "";
}
function Bc(a, b, c, d) {
  if (null == b) {
    if (null != d) {
      if (null != c)
        throw Error(u(92));
      if (yc(d)) {
        if (1 < d.length)
          throw Error(u(93));
        d = d[0];
      }
      c = d;
    }
    null == c && (c = "");
    b = c;
  }
  c = nc(b);
  a.defaultValue = c;
  d = a.textContent;
  d === c && "" !== d && null !== d && (a.value = d);
}
function Cc(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var Dc = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function Ec(a, b, c) {
  var d = 0 === b.indexOf("--");
  null == c || "boolean" === typeof c || "" === c ? d ? a.setProperty(b, "") : "float" === b ? a.cssFloat = "" : a[b] = "" : d ? a.setProperty(b, c) : "number" !== typeof c || 0 === c || Dc.has(b) ? "float" === b ? a.cssFloat = c : a[b] = ("" + c).trim() : a[b] = c + "px";
}
function Fc(a, b, c) {
  if (null != b && "object" !== typeof b)
    throw Error(u(62));
  a = a.style;
  if (null != c) {
    for (var d in c)
      !c.hasOwnProperty(d) || null != b && b.hasOwnProperty(d) || (0 === d.indexOf("--") ? a.setProperty(d, "") : "float" === d ? a.cssFloat = "" : a[d] = "");
    for (var e in b)
      d = b[e], b.hasOwnProperty(e) && c[e] !== d && Ec(a, e, d);
  } else
    for (var f2 in b)
      b.hasOwnProperty(f2) && Ec(a, f2, b[f2]);
}
function Gc(a) {
  if (-1 === a.indexOf("-"))
    return false;
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
var Hc = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  [
    "glyphOrientationVertical",
    "glyph-orientation-vertical"
  ],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  [
    "shapeRendering",
    "shape-rendering"
  ],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), Ic = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Jc(a) {
  return Ic.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
}
var Kc = null;
function Lc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var Mc = null, Nc = null;
function Oc(a) {
  var b = Rb(a);
  if (b && (a = b.stateNode)) {
    var c = Tb(a);
    a:
      switch (a = b.stateNode, b.type) {
        case "input":
          vc(a, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll('input[name="' + uc("" + b) + '"][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Tb(d);
                if (!e)
                  throw Error(u(90));
                vc(
                  d,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (b = 0; b < c.length; b++)
              d = c[b], d.form === a.form && rc(d);
          }
          break a;
        case "textarea":
          Ac(a, c.value, c.defaultValue);
          break a;
        case "select":
          b = c.value, null != b && zc(a, !!c.multiple, b, false);
      }
  }
}
function Pc(a) {
  Mc ? Nc ? Nc.push(a) : Nc = [a] : Mc = a;
}
function Qc() {
  if (Mc) {
    var a = Mc, b = Nc;
    Nc = Mc = null;
    Oc(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Oc(b[a]);
  }
}
function Rc(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Sc(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Tc(a) {
  if (Rc(a) !== a)
    throw Error(u(188));
}
function Uc(a) {
  var b = a.alternate;
  if (!b) {
    b = Rc(a);
    if (null === b)
      throw Error(u(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Tc(e), a;
        if (f2 === d)
          return Tc(e), b;
        f2 = f2.sibling;
      }
      throw Error(u(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h2 = e.child; h2; ) {
        if (h2 === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g)
          throw Error(u(189));
      }
    }
    if (c.alternate !== d)
      throw Error(u(190));
  }
  if (3 !== c.tag)
    throw Error(u(188));
  return c.stateNode.current === c ? a : b;
}
function Vc(a) {
  a = Uc(a);
  return null !== a ? Wc(a) : null;
}
function Wc(a) {
  var b = a.tag;
  if (5 === b || 26 === b || 27 === b || 6 === b)
    return a;
  for (a = a.child; null !== a; ) {
    b = Wc(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var Xc = {};
function Yc(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var Zc = "function" === typeof Object.is ? Object.is : Yc, $c = [], ad = 0, bd = null, cd = 0, dd = [], ed = 0, fd = null, gd = 1, hd = "";
function id(a, b) {
  $c[ad++] = cd;
  $c[ad++] = bd;
  bd = a;
  cd = b;
}
function jd(a, b, c) {
  dd[ed++] = gd;
  dd[ed++] = hd;
  dd[ed++] = fd;
  fd = a;
  var d = gd;
  a = hd;
  var e = 32 - lb(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - lb(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    gd = 1 << 32 - lb(b) + e | c << e | d;
    hd = f2 + a;
  } else
    gd = 1 << f2 | c << e | d, hd = a;
}
function kd(a) {
  null !== a.return && (id(a, 1), jd(a, 1, 0));
}
function ld(a) {
  for (; a === bd; )
    bd = $c[--ad], $c[ad] = null, cd = $c[--ad], $c[ad] = null;
  for (; a === fd; )
    fd = dd[--ed], dd[ed] = null, hd = dd[--ed], dd[ed] = null, gd = dd[--ed], dd[ed] = null;
}
var md = null, nd = null, G = false, od = null, pd = false;
function qd() {
  throw Error(u(418, ""));
}
function rd(a) {
  var b = a.stateNode, c = a.type, d = a.memoizedProps;
  b[Gb] = a;
  b[Hb] = d;
  switch (c) {
    case "dialog":
      H("cancel", b);
      H("close", b);
      break;
    case "iframe":
    case "object":
    case "embed":
      H("load", b);
      break;
    case "video":
    case "audio":
      for (a = 0; a < sd.length; a++)
        H(sd[a], b);
      break;
    case "source":
      H("error", b);
      break;
    case "img":
    case "image":
    case "link":
      H("error", b);
      H("load", b);
      break;
    case "details":
      H("toggle", b);
      break;
    case "input":
      H("invalid", b);
      xc(b, d.value, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name, true);
      qc(b);
      break;
    case "select":
      H("invalid", b);
      break;
    case "textarea":
      H("invalid", b), Bc(b, d.value, d.defaultValue, d.children), qc(b);
  }
  a = d.children;
  "string" !== typeof a && "number" !== typeof a && "bigint" !== typeof a || b.textContent === "" + a || true === d.suppressHydrationWarning || td(b.textContent, a) ? (null != d.onScroll && H("scroll", b), null != d.onScrollEnd && H("scrollend", b), null != d.onClick && (b.onclick = ud), b = true) : b = false;
  b || qd();
}
function vd(a) {
  for (md = a.return; md; )
    switch (md.tag) {
      case 3:
      case 27:
        pd = true;
        return;
      case 5:
      case 13:
        pd = false;
        return;
      default:
        md = md.return;
    }
}
function wd(a) {
  if (a !== md)
    return false;
  if (!G)
    return vd(a), G = true, false;
  var b = false, c;
  if (c = 3 !== a.tag && 27 !== a.tag) {
    if (c = 5 === a.tag)
      c = a.type, c = !("form" !== c && "button" !== c) || xd(a.type, a.memoizedProps);
    c = !c;
  }
  c && (b = true);
  b && nd && qd();
  vd(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(u(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType)
          if (c = a.data, "/$" === c) {
            if (0 === b) {
              nd = yd(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        a = a.nextSibling;
      }
      nd = null;
    }
  } else
    nd = md ? yd(a.stateNode.nextSibling) : null;
  return true;
}
function zd() {
  nd = md = null;
  G = false;
}
function Ad(a) {
  null === od ? od = [a] : od.push(a);
}
var Bd = [], Cd = 0, Dd = 0;
function Ed() {
  for (var a = Cd, b = Dd = Cd = 0; b < a; ) {
    var c = Bd[b];
    Bd[b++] = null;
    var d = Bd[b];
    Bd[b++] = null;
    var e = Bd[b];
    Bd[b++] = null;
    var f2 = Bd[b];
    Bd[b++] = null;
    if (null !== d && null !== e) {
      var g = d.pending;
      null === g ? e.next = e : (e.next = g.next, g.next = e);
      d.pending = e;
    }
    0 !== f2 && Fd(c, e, f2);
  }
}
function Gd(a, b, c, d) {
  Bd[Cd++] = a;
  Bd[Cd++] = b;
  Bd[Cd++] = c;
  Bd[Cd++] = d;
  Dd |= d;
  a.lanes |= d;
  a = a.alternate;
  null !== a && (a.lanes |= d);
}
function Hd(a, b, c, d) {
  Gd(a, b, c, d);
  return Id(a);
}
function Jd(a, b) {
  Gd(a, null, null, b);
  return Id(a);
}
function Fd(a, b, c) {
  a.lanes |= c;
  var d = a.alternate;
  null !== d && (d.lanes |= c);
  for (var e = false, f2 = a.return; null !== f2; )
    f2.childLanes |= c, d = f2.alternate, null !== d && (d.childLanes |= c), 22 === f2.tag && (a = f2.stateNode, null === a || a._visibility & 1 || (e = true)), a = f2, f2 = f2.return;
  e && null !== b && 3 === a.tag && (f2 = a.stateNode, e = 31 - lb(c), f2 = f2.hiddenUpdates, a = f2[e], null === a ? f2[e] = [b] : a.push(b), b.lane = c | 536870912);
}
function Id(a) {
  Kd();
  for (var b = a.return; null !== b; )
    a = b, b = a.return;
  return 3 === a.tag ? a.stateNode : null;
}
var Ld = null, Md = null, Nd = false, Od = false, Pd = false, Qd = 0;
function Rd(a) {
  a !== Md && null === a.next && (null === Md ? Ld = Md = a : Md = Md.next = a);
  Od = true;
  Nd || (Nd = true, Sd(Td));
}
function Ud(a) {
  if (!Pd && Od) {
    Pd = true;
    do {
      var b = false;
      for (var c = Ld; null !== c; ) {
        if (!a || 0 === c.tag) {
          var d = J;
          d = rb(c, c === K ? d : 0);
          0 !== (d & 3) && (b = true, Vd(c, d));
        }
        c = c.next;
      }
    } while (b);
    Pd = false;
  }
}
function Td() {
  Od = Nd = false;
  for (var a = Ya(), b = null, c = Ld; null !== c; ) {
    var d = c.next;
    if (0 !== Qd && Wd()) {
      var e = c, f2 = Qd;
      e.pendingLanes |= 2;
      e.entangledLanes |= 2;
      e.entanglements[1] |= f2;
    }
    e = Xd(c, a);
    0 === e ? (c.next = null, null === b ? Ld = d : b.next = d, null === d && (Md = b)) : (b = c, 0 !== (e & 3) && (Od = true));
    c = d;
  }
  Qd = 0;
  Ud(false);
}
function Xd(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes & -62914561; 0 < f2; ) {
    var g = 31 - lb(f2), h2 = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h2 & c) || 0 !== (h2 & d))
        e[g] = sb(h2, b);
    } else
      k2 <= b && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
  b = K;
  c = J;
  c = rb(a, a === b ? c : 0);
  d = a.callbackNode;
  if (0 === c || a === b && 2 === L || null !== a.cancelPendingCommit)
    return null !== d && null !== d && Va(d), a.callbackNode = null, a.callbackPriority = 0;
  if (0 !== (c & 3))
    return null !== d && null !== d && Va(d), a.callbackPriority = 2, a.callbackNode = null, 2;
  b = c & -c;
  if (b === a.callbackPriority)
    return b;
  null !== d && Va(d);
  switch (Db(c)) {
    case 2:
      c = $a;
      break;
    case 8:
      c = ab;
      break;
    case 32:
      c = bb;
      break;
    case 268435456:
      c = db;
      break;
    default:
      c = bb;
  }
  d = Yd.bind(null, a);
  c = Ua(c, d);
  a.callbackPriority = b;
  a.callbackNode = c;
  return b;
}
function Sd(a) {
  Zd(function() {
    0 !== (M & 6) ? Ua($a, a) : a();
  });
}
function $d() {
  0 === Qd && (Qd = ub());
  return Qd;
}
var ae = null, be = 0, ce = 0, de = null;
function ee(a, b) {
  if (null === ae) {
    var c = ae = [];
    be = 0;
    ce = $d();
    de = { status: "pending", value: void 0, then: function(d) {
      c.push(d);
    } };
  }
  be++;
  b.then(fe, fe);
  return b;
}
function fe() {
  if (null !== ae && 0 === --be) {
    null !== de && (de.status = "fulfilled");
    var a = ae;
    ae = null;
    ce = 0;
    de = null;
    for (var b = 0; b < a.length; b++)
      (0, a[b])();
  }
}
function ge(a, b) {
  var c = [], d = { status: "pending", value: null, reason: null, then: function(e) {
    c.push(e);
  } };
  a.then(function() {
    d.status = "fulfilled";
    d.value = b;
    for (var e = 0; e < c.length; e++)
      (0, c[e])(b);
  }, function(e) {
    d.status = "rejected";
    d.reason = e;
    for (e = 0; e < c.length; e++)
      (0, c[e])(void 0);
  });
  return d;
}
var he = false;
function ie(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
}
function je(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, callbacks: null });
}
function ke(a) {
  return { lane: a, tag: 0, payload: null, callback: null, next: null };
}
function le(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (M & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    b = Id(a);
    Fd(a, null, c);
    return b;
  }
  Gd(a, d, b, c);
  return Id(a);
}
function me(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194176))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    zb(a, c);
  }
}
function ne(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { lane: c.lane, tag: c.tag, payload: c.payload, callback: null, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, callbacks: d.callbacks };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
var oe = false;
function pe() {
  if (oe) {
    var a = de;
    if (null !== a)
      throw a;
  }
}
function qe(a, b, c, d) {
  oe = false;
  var e = a.updateQueue;
  he = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h2 = e.shared.pending;
  if (null !== h2) {
    e.shared.pending = null;
    var k2 = h2, n2 = k2.next;
    k2.next = null;
    null === g ? f2 = n2 : g.next = n2;
    g = k2;
    var t2 = a.alternate;
    null !== t2 && (t2 = t2.updateQueue, h2 = t2.lastBaseUpdate, h2 !== g && (null === h2 ? t2.firstBaseUpdate = n2 : h2.next = n2, t2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var w2 = e.baseState;
    g = 0;
    t2 = n2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane & -536870913, r2 = q2 !== h2.lane;
      if (r2 ? (J & q2) === q2 : (d & q2) === q2) {
        0 !== q2 && q2 === ce && (oe = true);
        null !== t2 && (t2 = t2.next = {
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: null,
          next: null
        });
        a: {
          var B2 = a, D2 = h2;
          q2 = b;
          var O2 = c;
          switch (D2.tag) {
            case 1:
              B2 = D2.payload;
              if ("function" === typeof B2) {
                w2 = B2.call(O2, w2, q2);
                break a;
              }
              w2 = B2;
              break a;
            case 3:
              B2.flags = B2.flags & -65537 | 128;
            case 0:
              B2 = D2.payload;
              q2 = "function" === typeof B2 ? B2.call(O2, w2, q2) : B2;
              if (null === q2 || void 0 === q2)
                break a;
              w2 = C({}, w2, q2);
              break a;
            case 2:
              he = true;
          }
        }
        q2 = h2.callback;
        null !== q2 && (a.flags |= 64, r2 && (a.flags |= 8192), r2 = e.callbacks, null === r2 ? e.callbacks = [q2] : r2.push(q2));
      } else
        r2 = {
          lane: q2,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        }, null === t2 ? (n2 = t2 = r2, k2 = w2) : t2 = t2.next = r2, g |= q2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === t2 && (k2 = w2);
    e.baseState = k2;
    e.firstBaseUpdate = n2;
    e.lastBaseUpdate = t2;
    null === f2 && (e.shared.lanes = 0);
    re |= g;
    a.lanes = g;
    a.memoizedState = w2;
  }
}
function se(a, b) {
  if ("function" !== typeof a)
    throw Error(u(191, a));
  a.call(b);
}
function te(a, b) {
  var c = a.callbacks;
  if (null !== c)
    for (a.callbacks = null, a = 0; a < c.length; a++)
      se(c[a], b);
}
function ue(a, b) {
  if (Zc(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!Eb.call(b, e) || !Zc(a[e], b[e]))
      return false;
  }
  return true;
}
var ve = Error(u(460)), we = Error(u(474)), xe = { then: function() {
} };
function ye(a) {
  a = a.status;
  return "fulfilled" === a || "rejected" === a;
}
function ze() {
}
function Ae(a, b, c) {
  c = a[c];
  void 0 === c ? a.push(b) : c !== b && (b.then(ze, ze), b = c);
  switch (b.status) {
    case "fulfilled":
      return b.value;
    case "rejected":
      a = b.reason;
      if (a === ve)
        throw Error(u(483));
      throw a;
    default:
      if ("string" === typeof b.status)
        b.then(ze, ze);
      else {
        a = K;
        if (null !== a && 100 < a.shellSuspendCounter)
          throw Error(u(482));
        a = b;
        a.status = "pending";
        a.then(function(d) {
          if ("pending" === b.status) {
            var e = b;
            e.status = "fulfilled";
            e.value = d;
          }
        }, function(d) {
          if ("pending" === b.status) {
            var e = b;
            e.status = "rejected";
            e.reason = d;
          }
        });
      }
      switch (b.status) {
        case "fulfilled":
          return b.value;
        case "rejected":
          a = b.reason;
          if (a === ve)
            throw Error(u(483));
          throw a;
      }
      Be = b;
      throw ve;
  }
}
var Be = null;
function Ce() {
  if (null === Be)
    throw Error(u(459));
  var a = Be;
  Be = null;
  return a;
}
var De = null, Ee = 0;
function Fe(a) {
  var b = Ee;
  Ee += 1;
  null === De && (De = []);
  return Ae(De, a, b);
}
function Ge(a, b, c, d) {
  a = d.props.ref;
  c.ref = void 0 !== a ? a : null;
}
function He(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(u(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ie(a) {
  var b = a._init;
  return b(a._payload);
}
function Je(a) {
  function b(m2, l2) {
    if (a) {
      var p2 = m2.deletions;
      null === p2 ? (m2.deletions = [l2], m2.flags |= 16) : p2.push(l2);
    }
  }
  function c(m2, l2) {
    if (!a)
      return null;
    for (; null !== l2; )
      b(m2, l2), l2 = l2.sibling;
    return null;
  }
  function d(m2) {
    for (var l2 = /* @__PURE__ */ new Map(); null !== m2; )
      null !== m2.key ? l2.set(m2.key, m2) : l2.set(m2.index, m2), m2 = m2.sibling;
    return l2;
  }
  function e(m2, l2) {
    m2 = Ke(m2, l2);
    m2.index = 0;
    m2.sibling = null;
    return m2;
  }
  function f2(m2, l2, p2) {
    m2.index = p2;
    if (!a)
      return m2.flags |= 1048576, l2;
    p2 = m2.alternate;
    if (null !== p2)
      return p2 = p2.index, p2 < l2 ? (m2.flags |= 33554434, l2) : p2;
    m2.flags |= 33554434;
    return l2;
  }
  function g(m2) {
    a && null === m2.alternate && (m2.flags |= 33554434);
    return m2;
  }
  function h2(m2, l2, p2, v2) {
    if (null === l2 || 6 !== l2.tag)
      return l2 = Le(p2, m2.mode, v2), l2.return = m2, l2;
    l2 = e(l2, p2);
    l2.return = m2;
    return l2;
  }
  function k2(m2, l2, p2, v2) {
    var x2 = p2.type;
    if (x2 === qa)
      return t2(m2, l2, p2.props.children, v2, p2.key);
    if (null !== l2 && (l2.elementType === x2 || "object" === typeof x2 && null !== x2 && x2.$$typeof === Aa && Ie(x2) === l2.type))
      return v2 = e(l2, p2.props), Ge(m2, l2, v2, p2), v2.return = m2, v2;
    v2 = Me(p2.type, p2.key, p2.props, null, m2.mode, v2);
    Ge(m2, l2, v2, p2);
    v2.return = m2;
    return v2;
  }
  function n2(m2, l2, p2, v2) {
    if (null === l2 || 4 !== l2.tag || l2.stateNode.containerInfo !== p2.containerInfo || l2.stateNode.implementation !== p2.implementation)
      return l2 = Ne(p2, m2.mode, v2), l2.return = m2, l2;
    l2 = e(l2, p2.children || []);
    l2.return = m2;
    return l2;
  }
  function t2(m2, l2, p2, v2, x2) {
    if (null === l2 || 7 !== l2.tag)
      return l2 = Oe(p2, m2.mode, v2, x2), l2.return = m2, l2;
    l2 = e(l2, p2);
    l2.return = m2;
    return l2;
  }
  function w2(m2, l2, p2) {
    if ("string" === typeof l2 && "" !== l2 || "number" === typeof l2 || "bigint" === typeof l2)
      return l2 = Le("" + l2, m2.mode, p2), l2.return = m2, l2;
    if ("object" === typeof l2 && null !== l2) {
      switch (l2.$$typeof) {
        case oa:
          return p2 = Me(
            l2.type,
            l2.key,
            l2.props,
            null,
            m2.mode,
            p2
          ), Ge(m2, null, p2, l2), p2.return = m2, p2;
        case pa:
          return l2 = Ne(l2, m2.mode, p2), l2.return = m2, l2;
        case Aa:
          var v2 = l2._init;
          return w2(m2, v2(l2._payload), p2);
      }
      if (yc(l2) || Ia(l2))
        return l2 = Oe(l2, m2.mode, p2, null), l2.return = m2, l2;
      if ("function" === typeof l2.then)
        return w2(m2, Fe(l2), p2);
      if (l2.$$typeof === va)
        return w2(m2, Pe(m2, l2, p2), p2);
      He(m2, l2);
    }
    return null;
  }
  function q2(m2, l2, p2, v2) {
    var x2 = null !== l2 ? l2.key : null;
    if ("string" === typeof p2 && "" !== p2 || "number" === typeof p2 || "bigint" === typeof p2)
      return null !== x2 ? null : h2(m2, l2, "" + p2, v2);
    if ("object" === typeof p2 && null !== p2) {
      switch (p2.$$typeof) {
        case oa:
          return p2.key === x2 ? k2(m2, l2, p2, v2) : null;
        case pa:
          return p2.key === x2 ? n2(m2, l2, p2, v2) : null;
        case Aa:
          return x2 = p2._init, q2(m2, l2, x2(p2._payload), v2);
      }
      if (yc(p2) || Ia(p2))
        return null !== x2 ? null : t2(m2, l2, p2, v2, null);
      if ("function" === typeof p2.then)
        return q2(m2, l2, Fe(p2), v2);
      if (p2.$$typeof === va)
        return q2(m2, l2, Pe(m2, p2, v2), v2);
      He(m2, p2);
    }
    return null;
  }
  function r2(m2, l2, p2, v2, x2) {
    if ("string" === typeof v2 && "" !== v2 || "number" === typeof v2 || "bigint" === typeof v2)
      return m2 = m2.get(p2) || null, h2(l2, m2, "" + v2, x2);
    if ("object" === typeof v2 && null !== v2) {
      switch (v2.$$typeof) {
        case oa:
          return m2 = m2.get(null === v2.key ? p2 : v2.key) || null, k2(l2, m2, v2, x2);
        case pa:
          return m2 = m2.get(null === v2.key ? p2 : v2.key) || null, n2(l2, m2, v2, x2);
        case Aa:
          var z2 = v2._init;
          return r2(m2, l2, p2, z2(v2._payload), x2);
      }
      if (yc(v2) || Ia(v2))
        return m2 = m2.get(p2) || null, t2(l2, m2, v2, x2, null);
      if ("function" === typeof v2.then)
        return r2(m2, l2, p2, Fe(v2), x2);
      if (v2.$$typeof === va)
        return r2(m2, l2, p2, Pe(l2, v2, x2), x2);
      He(l2, v2);
    }
    return null;
  }
  function B2(m2, l2, p2, v2) {
    for (var x2 = null, z2 = null, y2 = l2, A2 = l2 = 0, V2 = null; null !== y2 && A2 < p2.length; A2++) {
      y2.index > A2 ? (V2 = y2, y2 = null) : V2 = y2.sibling;
      var I2 = q2(m2, y2, p2[A2], v2);
      if (null === I2) {
        null === y2 && (y2 = V2);
        break;
      }
      a && y2 && null === I2.alternate && b(m2, y2);
      l2 = f2(I2, l2, A2);
      null === z2 ? x2 = I2 : z2.sibling = I2;
      z2 = I2;
      y2 = V2;
    }
    if (A2 === p2.length)
      return c(m2, y2), G && id(m2, A2), x2;
    if (null === y2) {
      for (; A2 < p2.length; A2++)
        y2 = w2(m2, p2[A2], v2), null !== y2 && (l2 = f2(y2, l2, A2), null === z2 ? x2 = y2 : z2.sibling = y2, z2 = y2);
      G && id(m2, A2);
      return x2;
    }
    for (y2 = d(y2); A2 < p2.length; A2++)
      V2 = r2(y2, m2, A2, p2[A2], v2), null !== V2 && (a && null !== V2.alternate && y2.delete(null === V2.key ? A2 : V2.key), l2 = f2(V2, l2, A2), null === z2 ? x2 = V2 : z2.sibling = V2, z2 = V2);
    a && y2.forEach(function(Bb) {
      return b(m2, Bb);
    });
    G && id(m2, A2);
    return x2;
  }
  function D2(m2, l2, p2, v2) {
    var x2 = Ia(p2);
    if ("function" !== typeof x2)
      throw Error(u(150));
    p2 = x2.call(p2);
    if (null == p2)
      throw Error(u(151));
    for (var z2 = x2 = null, y2 = l2, A2 = l2 = 0, V2 = null, I2 = p2.next(); null !== y2 && !I2.done; A2++, I2 = p2.next()) {
      y2.index > A2 ? (V2 = y2, y2 = null) : V2 = y2.sibling;
      var Bb = q2(m2, y2, I2.value, v2);
      if (null === Bb) {
        null === y2 && (y2 = V2);
        break;
      }
      a && y2 && null === Bb.alternate && b(m2, y2);
      l2 = f2(Bb, l2, A2);
      null === z2 ? x2 = Bb : z2.sibling = Bb;
      z2 = Bb;
      y2 = V2;
    }
    if (I2.done)
      return c(m2, y2), G && id(m2, A2), x2;
    if (null === y2) {
      for (; !I2.done; A2++, I2 = p2.next())
        I2 = w2(m2, I2.value, v2), null !== I2 && (l2 = f2(I2, l2, A2), null === z2 ? x2 = I2 : z2.sibling = I2, z2 = I2);
      G && id(m2, A2);
      return x2;
    }
    for (y2 = d(y2); !I2.done; A2++, I2 = p2.next())
      I2 = r2(y2, m2, A2, I2.value, v2), null !== I2 && (a && null !== I2.alternate && y2.delete(null === I2.key ? A2 : I2.key), l2 = f2(I2, l2, A2), null === z2 ? x2 = I2 : z2.sibling = I2, z2 = I2);
    a && y2.forEach(function(Fm) {
      return b(m2, Fm);
    });
    G && id(m2, A2);
    return x2;
  }
  function O2(m2, l2, p2, v2) {
    "object" === typeof p2 && null !== p2 && p2.type === qa && null === p2.key && (p2 = p2.props.children);
    if ("object" === typeof p2 && null !== p2) {
      switch (p2.$$typeof) {
        case oa:
          a: {
            for (var x2 = p2.key, z2 = l2; null !== z2; ) {
              if (z2.key === x2) {
                x2 = p2.type;
                if (x2 === qa) {
                  if (7 === z2.tag) {
                    c(m2, z2.sibling);
                    l2 = e(z2, p2.props.children);
                    l2.return = m2;
                    m2 = l2;
                    break a;
                  }
                } else if (z2.elementType === x2 || "object" === typeof x2 && null !== x2 && x2.$$typeof === Aa && Ie(x2) === z2.type) {
                  c(m2, z2.sibling);
                  l2 = e(z2, p2.props);
                  Ge(m2, z2, l2, p2);
                  l2.return = m2;
                  m2 = l2;
                  break a;
                }
                c(m2, z2);
                break;
              } else
                b(m2, z2);
              z2 = z2.sibling;
            }
            p2.type === qa ? (l2 = Oe(p2.props.children, m2.mode, v2, p2.key), l2.return = m2, m2 = l2) : (v2 = Me(p2.type, p2.key, p2.props, null, m2.mode, v2), Ge(m2, l2, v2, p2), v2.return = m2, m2 = v2);
          }
          return g(m2);
        case pa:
          a: {
            for (z2 = p2.key; null !== l2; ) {
              if (l2.key === z2)
                if (4 === l2.tag && l2.stateNode.containerInfo === p2.containerInfo && l2.stateNode.implementation === p2.implementation) {
                  c(
                    m2,
                    l2.sibling
                  );
                  l2 = e(l2, p2.children || []);
                  l2.return = m2;
                  m2 = l2;
                  break a;
                } else {
                  c(m2, l2);
                  break;
                }
              else
                b(m2, l2);
              l2 = l2.sibling;
            }
            l2 = Ne(p2, m2.mode, v2);
            l2.return = m2;
            m2 = l2;
          }
          return g(m2);
        case Aa:
          return z2 = p2._init, O2(m2, l2, z2(p2._payload), v2);
      }
      if (yc(p2))
        return B2(m2, l2, p2, v2);
      if (Ia(p2))
        return D2(m2, l2, p2, v2);
      if ("function" === typeof p2.then)
        return O2(m2, l2, Fe(p2), v2);
      if (p2.$$typeof === va)
        return O2(m2, l2, Pe(m2, p2, v2), v2);
      He(m2, p2);
    }
    return "string" === typeof p2 && "" !== p2 || "number" === typeof p2 || "bigint" === typeof p2 ? (p2 = "" + p2, null !== l2 && 6 === l2.tag ? (c(m2, l2.sibling), l2 = e(l2, p2), l2.return = m2, m2 = l2) : (c(m2, l2), l2 = Le(p2, m2.mode, v2), l2.return = m2, m2 = l2), g(m2)) : c(m2, l2);
  }
  return function(m2, l2, p2, v2) {
    Ee = 0;
    m2 = O2(m2, l2, p2, v2);
    De = null;
    return m2;
  };
}
var Qe = Je(true), Re = Je(false), Se = ma(null), Te = ma(0);
function Ue(a, b) {
  a = Ve;
  E(Te, a);
  E(Se, b);
  Ve = a | b.baseLanes;
}
function We() {
  E(Te, Ve);
  E(Se, Se.current);
}
function Xe() {
  Ve = Te.current;
  na(Se);
  na(Te);
}
var Ye = ma(null), Ze = null;
function $e(a) {
  var b = a.alternate;
  E(af, af.current & 1);
  E(Ye, a);
  null === Ze && (null === b || null !== Se.current ? Ze = a : null !== b.memoizedState && (Ze = a));
}
function bf(a) {
  if (22 === a.tag) {
    if (E(af, af.current), E(Ye, a), null === Ze) {
      var b = a.alternate;
      null !== b && null !== b.memoizedState && (Ze = a);
    }
  } else
    cf();
}
function cf() {
  E(af, af.current);
  E(Ye, Ye.current);
}
function df(a) {
  na(Ye);
  Ze === a && (Ze = null);
  na(af);
}
var af = ma(0);
function ef(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var ff = ea.ReactCurrentDispatcher, gf = ea.ReactCurrentBatchConfig, hf = 0, N = null, P = null, Q = null, jf = false, kf = false, lf = false, mf = 0, nf = 0, of = null, pf = 0;
function R() {
  throw Error(u(321));
}
function qf(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!Zc(a[c], b[c]))
      return false;
  return true;
}
function rf(a, b, c, d, e, f2) {
  hf = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  ff.current = null === a || null === a.memoizedState ? sf : tf;
  lf = false;
  a = c(d, e);
  lf = false;
  kf && (a = uf(b, c, d, e));
  vf();
  return a;
}
function vf() {
  ff.current = wf;
  var a = null !== P && null !== P.next;
  hf = 0;
  Q = P = N = null;
  jf = false;
  nf = 0;
  of = null;
  if (a)
    throw Error(u(300));
}
function uf(a, b, c, d) {
  N = a;
  var e = 0;
  do {
    kf && (of = null);
    nf = 0;
    kf = false;
    if (25 <= e)
      throw Error(u(301));
    e += 1;
    Q = P = null;
    a.updateQueue = null;
    ff.current = xf;
    var f2 = b(c, d);
  } while (kf);
  return f2;
}
function yf() {
  var a = ff.current.useState()[0];
  return "function" === typeof a.then ? zf(a) : a;
}
function Af() {
  var a = 0 !== mf;
  mf = 0;
  return a;
}
function Bf(a, b, c) {
  b.updateQueue = a.updateQueue;
  b.flags &= -2053;
  a.lanes &= ~c;
}
function Cf(a) {
  if (jf) {
    for (a = a.memoizedState; null !== a; ) {
      var b = a.queue;
      null !== b && (b.pending = null);
      a = a.next;
    }
    jf = false;
  }
  hf = 0;
  Q = P = N = null;
  kf = false;
  nf = mf = 0;
  of = null;
}
function Df() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === Q ? N.memoizedState = Q = a : Q = Q.next = a;
  return Q;
}
function S() {
  if (null === P) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = P.next;
  var b = null === Q ? N.memoizedState : Q.next;
  if (null !== b)
    Q = b, P = a;
  else {
    if (null === a) {
      if (null === N.alternate)
        throw Error(u(467));
      throw Error(u(310));
    }
    P = a;
    a = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null };
    null === Q ? N.memoizedState = Q = a : Q = Q.next = a;
  }
  return Q;
}
var Ef;
Ef = function() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function zf(a) {
  var b = nf;
  nf += 1;
  null === of && (of = []);
  a = Ae(of, a, b);
  null === N.alternate && (null === Q ? null === N.memoizedState : null === Q.next) && (ff.current = sf);
  return a;
}
function Ff(a) {
  if (null !== a && "object" === typeof a) {
    if ("function" === typeof a.then)
      return zf(a);
    if (a.$$typeof === va)
      return Gf(a);
  }
  throw Error(u(438, String(a)));
}
function Hf(a) {
  var b = null, c = N.updateQueue;
  null !== c && (b = c.memoCache);
  if (null == b) {
    var d = N.alternate;
    null !== d && (d = d.updateQueue, null !== d && (d = d.memoCache, null != d && (b = { data: d.data.map(function(e) {
      return e.slice();
    }), index: 0 })));
  }
  null == b && (b = { data: [], index: 0 });
  null === c && (c = Ef(), N.updateQueue = c);
  c.memoCache = b;
  c = b.data[b.index];
  if (void 0 === c)
    for (c = b.data[b.index] = Array(a), d = 0; d < a; d++)
      c[d] = Fa;
  b.index++;
  return c;
}
function If(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Jf(a) {
  var b = S();
  return Kf(b, P, a);
}
function Kf(a, b, c) {
  var d = a.queue;
  if (null === d)
    throw Error(u(311));
  d.lastRenderedReducer = c;
  var e = a.baseQueue, f2 = d.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    b.baseQueue = e = f2;
    d.pending = null;
  }
  f2 = a.baseState;
  if (null === e)
    a.memoizedState = f2;
  else {
    b = e.next;
    var h2 = g = null, k2 = null, n2 = b, t2 = false;
    do {
      var w2 = n2.lane & -536870913;
      if (w2 !== n2.lane ? (J & w2) === w2 : (hf & w2) === w2) {
        var q2 = n2.revertLane;
        if (0 === q2)
          null !== k2 && (k2 = k2.next = {
            lane: 0,
            revertLane: 0,
            action: n2.action,
            hasEagerState: n2.hasEagerState,
            eagerState: n2.eagerState,
            next: null
          }), w2 === ce && (t2 = true);
        else if ((hf & q2) === q2) {
          n2 = n2.next;
          q2 === ce && (t2 = true);
          continue;
        } else
          w2 = { lane: 0, revertLane: n2.revertLane, action: n2.action, hasEagerState: n2.hasEagerState, eagerState: n2.eagerState, next: null }, null === k2 ? (h2 = k2 = w2, g = f2) : k2 = k2.next = w2, N.lanes |= q2, re |= q2;
        w2 = n2.action;
        lf && c(f2, w2);
        f2 = n2.hasEagerState ? n2.eagerState : c(f2, w2);
      } else
        q2 = { lane: w2, revertLane: n2.revertLane, action: n2.action, hasEagerState: n2.hasEagerState, eagerState: n2.eagerState, next: null }, null === k2 ? (h2 = k2 = q2, g = f2) : k2 = k2.next = q2, N.lanes |= w2, re |= w2;
      n2 = n2.next;
    } while (null !== n2 && n2 !== b);
    null === k2 ? g = f2 : k2.next = h2;
    if (!Zc(f2, a.memoizedState) && (Lf = true, t2 && (c = de, null !== c)))
      throw c;
    a.memoizedState = f2;
    a.baseState = g;
    a.baseQueue = k2;
    d.lastRenderedState = f2;
  }
  null === e && (d.lanes = 0);
  return [a.memoizedState, d.dispatch];
}
function Mf(a) {
  var b = S(), c = b.queue;
  if (null === c)
    throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    Zc(f2, b.memoizedState) || (Lf = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Nf(a, b, c) {
  var d = N, e = S(), f2 = G;
  if (f2) {
    if (void 0 === c)
      throw Error(u(407));
    c = c();
  } else
    c = b();
  var g = !Zc((P || e).memoizedState, c);
  g && (e.memoizedState = c, Lf = true);
  e = e.queue;
  Of(Pf.bind(null, d, e, a), [a]);
  if (e.getSnapshot !== b || g || null !== Q && Q.memoizedState.tag & 1) {
    d.flags |= 2048;
    Qf(9, Rf.bind(null, d, e, c, b), { destroy: void 0 }, null);
    if (null === K)
      throw Error(u(349));
    f2 || 0 !== (hf & 60) || Sf(d, b, c);
  }
  return c;
}
function Sf(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = Ef(), N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function Rf(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  Tf(b) && Uf(a);
}
function Pf(a, b, c) {
  return c(function() {
    Tf(b) && Uf(a);
  });
}
function Tf(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !Zc(a, c);
  } catch (d) {
    return true;
  }
}
function Uf(a) {
  var b = Jd(a, 2);
  null !== b && Vf(b, a, 2);
}
function Wf(a) {
  var b = Df();
  if ("function" === typeof a) {
    var c = a;
    a = c();
    lf && (jb(true), c(), jb(false));
  }
  b.memoizedState = b.baseState = a;
  b.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: If, lastRenderedState: a };
  return b;
}
function Xf(a, b, c, d) {
  a.baseState = c;
  return Kf(a, P, "function" === typeof d ? d : If);
}
function Yf(a, b, c, d, e) {
  if (Zf(a))
    throw Error(u(485));
  a = b.pending;
  null === a ? (a = { payload: e, next: null }, a.next = b.pending = a, $f(b, c, d, e)) : b.pending = a.next = { payload: e, next: a.next };
}
function $f(a, b, c, d) {
  var e = a.action, f2 = a.state, g = gf.transition, h2 = { _callbacks: /* @__PURE__ */ new Set() };
  gf.transition = h2;
  b(true);
  try {
    var k2 = e(f2, d);
    null !== k2 && "object" === typeof k2 && "function" === typeof k2.then ? (ag(h2, k2), k2.then(function(n2) {
      a.state = n2;
      bg(a, b, c);
    }, function() {
      return bg(a, b, c);
    }), c(k2)) : (c(k2), a.state = k2, bg(a, b, c));
  } catch (n2) {
    c({ then: function() {
    }, status: "rejected", reason: n2 }), bg(a, b, c);
  } finally {
    gf.transition = g;
  }
}
function bg(a, b, c) {
  var d = a.pending;
  if (null !== d) {
    var e = d.next;
    e === d ? a.pending = null : (e = e.next, d.next = e, $f(a, b, c, e.payload));
  }
}
function cg(a, b) {
  return b;
}
function dg(a, b) {
  if (G) {
    var c = K.formState;
    if (null !== c) {
      a: {
        if (G) {
          if (nd) {
            b: {
              var d = nd;
              for (var e = pd; 8 !== d.nodeType; ) {
                if (!e) {
                  d = null;
                  break b;
                }
                d = yd(d.nextSibling);
                if (null === d) {
                  d = null;
                  break b;
                }
              }
              e = d.data;
              d = "F!" === e || "F" === e ? d : null;
            }
            if (d) {
              nd = yd(d.nextSibling);
              d = "F!" === d.data;
              break a;
            }
          }
          qd();
        }
        d = false;
      }
      d && (b = c[0]);
    }
  }
  c = Df();
  c.memoizedState = c.baseState = b;
  d = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cg, lastRenderedState: b };
  c.queue = d;
  c = eg.bind(null, N, d);
  d.dispatch = c;
  d = Wf(false);
  var f2 = fg.bind(null, N, false, d.queue);
  d = Df();
  e = { state: b, dispatch: null, action: a, pending: null };
  d.queue = e;
  c = Yf.bind(null, N, e, f2, c);
  e.dispatch = c;
  d.memoizedState = a;
  return [b, c, false];
}
function gg(a) {
  var b = S();
  return hg(b, P, a);
}
function hg(a, b, c) {
  b = Kf(a, b, cg)[0];
  a = Jf(If)[0];
  b = "object" === typeof b && null !== b && "function" === typeof b.then ? zf(b) : b;
  var d = S(), e = d.queue, f2 = e.dispatch;
  c !== d.memoizedState && (N.flags |= 2048, Qf(9, ig.bind(null, e, c), { destroy: void 0 }, null));
  return [b, f2, a];
}
function ig(a, b) {
  a.action = b;
}
function jg(a) {
  var b = S(), c = P;
  if (null !== c)
    return hg(b, c, a);
  S();
  b = b.memoizedState;
  c = S();
  var d = c.queue.dispatch;
  c.memoizedState = a;
  return [b, d, false];
}
function Qf(a, b, c, d) {
  a = { tag: a, create: b, inst: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = Ef(), N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function kg() {
  return S().memoizedState;
}
function lg(a, b, c, d) {
  var e = Df();
  N.flags |= a;
  e.memoizedState = Qf(1 | b, c, { destroy: void 0 }, void 0 === d ? null : d);
}
function mg(a, b, c, d) {
  var e = S();
  d = void 0 === d ? null : d;
  var f2 = e.memoizedState.inst;
  null !== P && null !== d && qf(d, P.memoizedState.deps) ? e.memoizedState = Qf(b, c, f2, d) : (N.flags |= a, e.memoizedState = Qf(1 | b, c, f2, d));
}
function ng(a, b) {
  lg(8390656, 8, a, b);
}
function Of(a, b) {
  mg(2048, 8, a, b);
}
function og(a) {
  N.flags |= 4;
  var b = N.updateQueue;
  if (null === b)
    b = Ef(), N.updateQueue = b, b.events = [a];
  else {
    var c = b.events;
    null === c ? b.events = [a] : c.push(a);
  }
}
function pg(a) {
  var b = S().memoizedState;
  og({ ref: b, nextImpl: a });
  return function() {
    if (0 !== (M & 2))
      throw Error(u(440));
    return b.impl.apply(void 0, arguments);
  };
}
function qg(a, b) {
  return mg(4, 2, a, b);
}
function rg(a, b) {
  return mg(4, 4, a, b);
}
function sg(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function tg(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  mg(4, 4, sg.bind(null, b, a), c);
}
function ug() {
}
function vg(a, b) {
  var c = S();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== b && qf(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function wg(a, b) {
  var c = S();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== b && qf(b, d[1]))
    return d[0];
  d = a();
  lf && (jb(true), a(), jb(false));
  c.memoizedState = [d, b];
  return d;
}
function xg(a, b, c) {
  if (void 0 === c || 0 !== (hf & 1073741824))
    return a.memoizedState = b;
  a.memoizedState = c;
  a = yg();
  N.lanes |= a;
  re |= a;
  return c;
}
function zg(a, b, c, d) {
  if (Zc(c, b))
    return c;
  if (null !== Se.current)
    return a = xg(a, c, d), Zc(a, b) || (Lf = true), a;
  if (0 === (hf & 42))
    return Lf = true, a.memoizedState = c;
  a = yg();
  N.lanes |= a;
  re |= a;
  return b;
}
function Ag(a, b, c, d, e) {
  var f2 = F;
  F = 0 !== f2 && 8 > f2 ? f2 : 8;
  var g = gf.transition, h2 = { _callbacks: /* @__PURE__ */ new Set() };
  gf.transition = h2;
  fg(a, false, b, c);
  try {
    var k2 = e();
    if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
      ag(h2, k2);
      var n2 = ge(k2, d);
      eg(a, b, n2);
    } else
      eg(a, b, d);
  } catch (t2) {
    eg(a, b, { then: function() {
    }, status: "rejected", reason: t2 });
  } finally {
    F = f2, gf.transition = g;
  }
}
function Bg(a, b, c, d) {
  if (5 !== a.tag)
    throw Error(u(476));
  if (null === a.memoizedState) {
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: If, lastRenderedState: ha };
    var f2 = e;
    e = { memoizedState: ha, baseState: ha, baseQueue: null, queue: e, next: null };
    a.memoizedState = e;
    var g = a.alternate;
    null !== g && (g.memoizedState = e);
  } else
    f2 = a.memoizedState.queue;
  Ag(a, f2, b, ha, function() {
    return c(d);
  });
}
function Cg() {
  var a = Gf(Na);
  return null !== a ? a : ha;
}
function Dg() {
  return S().memoizedState;
}
function Eg() {
  return S().memoizedState;
}
function Fg(a, b, c) {
  for (var d = a.return; null !== d; ) {
    switch (d.tag) {
      case 24:
      case 3:
        var e = Gg(d);
        a = ke(e);
        var f2 = le(d, a, e);
        null !== f2 && (Vf(f2, d, e), me(f2, d, e));
        d = Hg();
        null !== b && void 0 !== b && null !== f2 && d.data.set(b, c);
        a.payload = { cache: d };
        return;
    }
    d = d.return;
  }
}
function Ig(a, b, c) {
  var d = Gg(a);
  c = { lane: d, revertLane: 0, action: c, hasEagerState: false, eagerState: null, next: null };
  Zf(a) ? Jg(b, c) : (c = Hd(a, b, c, d), null !== c && (Vf(c, a, d), Kg(c, b, d)));
}
function eg(a, b, c) {
  var d = Gg(a), e = { lane: d, revertLane: 0, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Zf(a))
    Jg(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h2 = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h2;
        if (Zc(h2, g)) {
          Gd(a, b, e, 0);
          null === K && Ed();
          return;
        }
      } catch (k2) {
      } finally {
      }
    c = Hd(a, b, e, d);
    null !== c && (Vf(c, a, d), Kg(c, b, d));
  }
}
function fg(a, b, c, d) {
  Lg();
  d = { lane: 2, revertLane: $d(), action: d, hasEagerState: false, eagerState: null, next: null };
  if (Zf(a)) {
    if (b)
      throw Error(u(479));
  } else
    b = Hd(a, c, d, 2), null !== b && Vf(b, a, 2);
}
function Zf(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Jg(a, b) {
  kf = jf = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Kg(a, b, c) {
  if (0 !== (c & 4194176)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    zb(a, c);
  }
}
var wf = { readContext: Gf, use: Ff, useCallback: R, useContext: R, useEffect: R, useImperativeHandle: R, useLayoutEffect: R, useInsertionEffect: R, useMemo: R, useReducer: R, useRef: R, useState: R, useDebugValue: R, useDeferredValue: R, useTransition: R, useSyncExternalStore: R, useId: R };
wf.useCacheRefresh = R;
wf.useMemoCache = R;
wf.useEffectEvent = R;
wf.useHostTransitionStatus = R;
wf.useFormState = R;
wf.useActionState = R;
wf.useOptimistic = R;
var sf = { readContext: Gf, use: Ff, useCallback: function(a, b) {
  Df().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Gf, useEffect: ng, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  lg(4194308, 4, sg.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return lg(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  lg(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Df();
  b = void 0 === b ? null : b;
  var d = a();
  lf && (jb(true), a(), jb(false));
  c.memoizedState = [d, b];
  return d;
}, useReducer: function(a, b, c) {
  var d = Df();
  if (void 0 !== c) {
    var e = c(b);
    lf && (jb(true), c(b), jb(false));
  } else
    e = b;
  d.memoizedState = d.baseState = e;
  a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: e };
  d.queue = a;
  a = a.dispatch = Ig.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Df();
  a = { current: a };
  return b.memoizedState = a;
}, useState: function(a) {
  a = Wf(a);
  var b = a.queue, c = eg.bind(null, N, b);
  b.dispatch = c;
  return [a.memoizedState, c];
}, useDebugValue: ug, useDeferredValue: function(a, b) {
  var c = Df();
  return xg(c, a, b);
}, useTransition: function() {
  var a = Wf(false);
  a = Ag.bind(null, N, a.queue, true, false);
  Df().memoizedState = a;
  return [false, a];
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = Df();
  if (G) {
    if (void 0 === c)
      throw Error(u(407));
    c = c();
  } else {
    c = b();
    if (null === K)
      throw Error(u(349));
    0 !== (J & 60) || Sf(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  ng(Pf.bind(null, d, f2, a), [a]);
  d.flags |= 2048;
  Qf(9, Rf.bind(null, d, f2, c, b), { destroy: void 0 }, null);
  return c;
}, useId: function() {
  var a = Df(), b = K.identifierPrefix;
  if (G) {
    var c = hd;
    var d = gd;
    c = (d & ~(1 << 32 - lb(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = mf++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = pf++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, useCacheRefresh: function() {
  return Df().memoizedState = Fg.bind(null, N);
} };
sf.useMemoCache = Hf;
sf.useEffectEvent = function(a) {
  var b = Df(), c = { impl: a };
  b.memoizedState = c;
  return function() {
    if (0 !== (M & 2))
      throw Error(u(440));
    return c.impl.apply(void 0, arguments);
  };
};
sf.useHostTransitionStatus = Cg;
sf.useFormState = dg;
sf.useActionState = dg;
sf.useOptimistic = function(a) {
  var b = Df();
  b.memoizedState = b.baseState = a;
  var c = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
  b.queue = c;
  b = fg.bind(null, N, true, c);
  c.dispatch = b;
  return [a, b];
};
var tf = { readContext: Gf, use: Ff, useCallback: vg, useContext: Gf, useEffect: Of, useImperativeHandle: tg, useInsertionEffect: qg, useLayoutEffect: rg, useMemo: wg, useReducer: Jf, useRef: kg, useState: function() {
  return Jf(If);
}, useDebugValue: ug, useDeferredValue: function(a, b) {
  var c = S();
  return zg(c, P.memoizedState, a, b);
}, useTransition: function() {
  var a = Jf(If)[0], b = S().memoizedState;
  return ["boolean" === typeof a ? a : zf(a), b];
}, useSyncExternalStore: Nf, useId: Dg };
tf.useCacheRefresh = Eg;
tf.useMemoCache = Hf;
tf.useEffectEvent = pg;
tf.useHostTransitionStatus = Cg;
tf.useFormState = gg;
tf.useActionState = gg;
tf.useOptimistic = function(a, b) {
  var c = S();
  return Xf(c, P, a, b);
};
var xf = { readContext: Gf, use: Ff, useCallback: vg, useContext: Gf, useEffect: Of, useImperativeHandle: tg, useInsertionEffect: qg, useLayoutEffect: rg, useMemo: wg, useReducer: Mf, useRef: kg, useState: function() {
  return Mf(If);
}, useDebugValue: ug, useDeferredValue: function(a, b) {
  var c = S();
  return null === P ? xg(c, a, b) : zg(c, P.memoizedState, a, b);
}, useTransition: function() {
  var a = Mf(If)[0], b = S().memoizedState;
  return ["boolean" === typeof a ? a : zf(a), b];
}, useSyncExternalStore: Nf, useId: Dg };
xf.useCacheRefresh = Eg;
xf.useMemoCache = Hf;
xf.useEffectEvent = pg;
xf.useHostTransitionStatus = Cg;
xf.useFormState = jg;
xf.useActionState = jg;
xf.useOptimistic = function(a, b) {
  var c = S();
  if (null !== P)
    return Xf(c, P, a, b);
  c.baseState = a;
  return [a, c.queue.dispatch];
};
function Mg(a, b) {
  if (a && a.defaultProps) {
    b = C({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Ng(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : C({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Og = { isMounted: function(a) {
  return (a = a._reactInternals) ? Rc(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Gg(a), e = ke(d);
  e.payload = b;
  void 0 !== c && null !== c && (e.callback = c);
  b = le(a, e, d);
  null !== b && (Vf(b, a, d), me(b, a, d));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Gg(a), e = ke(d);
  e.tag = 1;
  e.payload = b;
  void 0 !== c && null !== c && (e.callback = c);
  b = le(a, e, d);
  null !== b && (Vf(b, a, d), me(b, a, d));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Gg(a), d = ke(c);
  d.tag = 2;
  void 0 !== b && null !== b && (d.callback = b);
  b = le(a, d, c);
  null !== b && (Vf(b, a, c), me(b, a, c));
} };
function Pg(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !ue(c, d) || !ue(e, f2) : true;
}
function Qg(a, b, c) {
  var d = Xc, e = b.contextType;
  "object" === typeof e && null !== e && (d = Gf(e));
  b = new b(c, d);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Og;
  a.stateNode = b;
  b._reactInternals = a;
  return b;
}
function Rg(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Og.enqueueReplaceState(b, b.state, null);
}
function Sg(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  ie(a);
  var f2 = b.contextType;
  e.context = "object" === typeof f2 && null !== f2 ? Gf(f2) : Xc;
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Ng(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Og.enqueueReplaceState(e, e.state, null), qe(a, c, e, d), pe(), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
var Tg = /* @__PURE__ */ new WeakMap();
function Ug(a, b) {
  if ("object" === typeof a && null !== a) {
    var c = Tg.get(a);
    "string" !== typeof c && (c = mc(b), Tg.set(a, c));
  } else
    c = mc(b);
  return { value: a, source: b, stack: c, digest: null };
}
function Vg(a, b, c) {
  "string" === typeof c && Tg.set(a, c);
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
var Wg = "function" === typeof reportError ? reportError : function(a) {
  if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
    var b = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: "object" === typeof a && null !== a && "string" === typeof a.message ? String(a.message) : String(a), error: a });
    if (!window.dispatchEvent(b))
      return;
  } else if ("object" === typeof process && "function" === typeof process.emit) {
    process.emit("uncaughtException", a);
    return;
  }
  console.error(a);
};
function Xg(a) {
  Wg(a);
}
function Yg(a) {
  console.error(a);
}
function Zg(a) {
  Wg(a);
}
function $g(a, b) {
  try {
    var c = a.onUncaughtError;
    c(b.value, { componentStack: b.stack });
  } catch (d) {
    setTimeout(function() {
      throw d;
    });
  }
}
function ah(a, b, c) {
  try {
    var d = a.onCaughtError;
    d(c.value, { componentStack: c.stack, errorBoundary: 1 === b.tag ? b.stateNode : null });
  } catch (e) {
    setTimeout(function() {
      throw e;
    });
  }
}
function bh(a, b, c) {
  c = ke(c);
  c.tag = 3;
  c.payload = { element: null };
  c.callback = function() {
    $g(a, b);
  };
  return c;
}
function ch(a) {
  a = ke(a);
  a.tag = 3;
  return a;
}
function dh(a, b, c, d) {
  var e = c.type.getDerivedStateFromError;
  if ("function" === typeof e) {
    var f2 = d.value;
    a.payload = function() {
      return e(f2);
    };
    a.callback = function() {
      ah(b, c, d);
    };
  }
  var g = c.stateNode;
  null !== g && "function" === typeof g.componentDidCatch && (a.callback = function() {
    ah(b, c, d);
    "function" !== typeof e && (null === eh ? eh = /* @__PURE__ */ new Set([this]) : eh.add(this));
    var h2 = d.stack;
    this.componentDidCatch(d.value, { componentStack: null !== h2 ? h2 : "" });
  });
}
function fh(a) {
  var b = a.tag;
  0 !== (a.mode & 1) || 0 !== b && 11 !== b && 15 !== b || ((b = a.alternate) ? (a.updateQueue = b.updateQueue, a.memoizedState = b.memoizedState, a.lanes = b.lanes) : (a.updateQueue = null, a.memoizedState = null));
}
function gh(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ke(2), b.tag = 2, le(c, b, 2))), c.lanes |= 2), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
function hh(a, b, c, d, e) {
  c.flags |= 32768;
  if (null !== d && "object" === typeof d && (d.$$typeof === Ga && (d = { then: function() {
  } }), "function" === typeof d.then)) {
    var f2 = d;
    fh(c);
    d = Ye.current;
    if (null !== d) {
      switch (d.tag) {
        case 13:
          return c.mode & 1 && (null === Ze ? ih() : null === d.alternate && 0 === T && (T = 3)), d.flags &= -257, gh(d, b, c, a, e), f2 === xe ? d.flags |= 16384 : (b = d.updateQueue, null === b ? d.updateQueue = /* @__PURE__ */ new Set([f2]) : b.add(f2), d.mode & 1 && jh(a, f2, e)), false;
        case 22:
          if (d.mode & 1)
            return d.flags |= 65536, f2 === xe ? d.flags |= 16384 : (b = d.updateQueue, null === b ? (b = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([f2]) }, d.updateQueue = b) : (d = b.retryQueue, null === d ? b.retryQueue = /* @__PURE__ */ new Set([f2]) : d.add(f2)), jh(a, f2, e)), false;
      }
      throw Error(u(435, d.tag));
    }
    if (1 === a.tag)
      return jh(a, f2, e), ih(), false;
    d = Error(u(426));
  }
  if (G && c.mode & 1 && (f2 = Ye.current, null !== f2))
    return 0 === (f2.flags & 65536) && (f2.flags |= 256), gh(f2, b, c, a, e), Ad(Ug(d, c)), false;
  d = Ug(d, c);
  kh(d);
  if (null === b)
    return true;
  f2 = b;
  do {
    switch (f2.tag) {
      case 3:
        return a = d, f2.flags |= 65536, e &= -e, f2.lanes |= e, a = bh(f2.stateNode, a, e), ne(f2, a), false;
      case 1:
        b = d;
        c = f2.type;
        var g = f2.stateNode;
        if (0 === (f2.flags & 128) && ("function" === typeof c.getDerivedStateFromError || null !== g && "function" === typeof g.componentDidCatch && (null === eh || !eh.has(g))))
          return f2.flags |= 65536, e &= -e, f2.lanes |= e, e = ch(e), dh(e, a, f2, b), ne(f2, e), false;
    }
    f2 = f2.return;
  } while (null !== f2);
  return false;
}
var lh = ea.ReactCurrentOwner, mh = Error(u(461)), Lf = false;
function nh(a, b, c, d) {
  b.child = null === a ? Re(b, null, c, d) : Qe(b, a.child, c, d);
}
function oh(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  if ("ref" in d) {
    var g = {};
    for (var h2 in d)
      "ref" !== h2 && (g[h2] = d[h2]);
  } else
    g = d;
  ph(b, e);
  d = rf(a, b, c, g, f2, e);
  h2 = Af();
  if (null !== a && !Lf)
    return Bf(a, b, e), qh(a, b, e);
  G && h2 && kd(b);
  b.flags |= 1;
  nh(a, b, d, e);
  return b.child;
}
function rh(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !sh(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, th(a, b, f2, d, e);
    a = Me(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : ue;
    if (c(g, d) && a.ref === b.ref)
      return qh(a, b, e);
  }
  b.flags |= 1;
  a = Ke(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function th(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (ue(f2, d) && a.ref === b.ref)
      if (Lf = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Lf = true);
      else
        return b.lanes = a.lanes, qh(a, b, e);
  }
  return uh(a, b, c, d, e);
}
function vh(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = 0 !== (b.stateNode._pendingVisibility & 2), g = null !== a ? a.memoizedState : null;
  wh(a, b);
  if ("hidden" === d.mode || f2) {
    if (0 !== (b.flags & 128)) {
      c = null !== g ? g.baseLanes | c : c;
      if (null !== a) {
        d = b.child = a.child;
        for (e = 0; null !== d; )
          e = e | d.lanes | d.childLanes, d = d.sibling;
        b.childLanes = e & ~c;
      } else
        b.childLanes = 0, b.child = null;
      return xh(a, b, c);
    }
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null }, null !== a && yh(b, null), We(), bf(b);
    else if (0 !== (c & 536870912))
      b.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, null !== a && yh(b, null !== g ? g.cachePool : null), null !== g ? Ue(b, g) : We(), bf(b);
    else
      return b.lanes = b.childLanes = 536870912, xh(a, b, null !== g ? g.baseLanes | c : c);
  } else
    null !== g ? (yh(b, g.cachePool), Ue(b, g), cf(), b.memoizedState = null) : (null !== a && yh(b, null), We(), cf());
  nh(a, b, e, c);
  return b.child;
}
function xh(a, b, c) {
  var d = zh();
  d = null === d ? null : { parent: U._currentValue, pool: d };
  b.memoizedState = { baseLanes: c, cachePool: d };
  null !== a && yh(b, null);
  We();
  bf(b);
  return null;
}
function wh(a, b) {
  var c = b.ref;
  if (null === c)
    null !== a && null !== a.ref && (b.flags |= 2097664);
  else {
    if ("function" !== typeof c && "object" !== typeof c)
      throw Error(u(284));
    if (null === a || a.ref !== c)
      b.flags |= 2097664;
  }
}
function uh(a, b, c, d, e) {
  ph(b, e);
  c = rf(a, b, c, d, void 0, e);
  d = Af();
  if (null !== a && !Lf)
    return Bf(a, b, e), qh(a, b, e);
  G && d && kd(b);
  b.flags |= 1;
  nh(a, b, c, e);
  return b.child;
}
function Ah(a, b, c, d, e, f2) {
  ph(b, f2);
  c = uf(b, d, c, e);
  vf();
  d = Af();
  if (null !== a && !Lf)
    return Bf(a, b, f2), qh(a, b, f2);
  G && d && kd(b);
  b.flags |= 1;
  nh(a, b, c, f2);
  return b.child;
}
function Bh(a, b, c, d, e) {
  ph(b, e);
  if (null === b.stateNode)
    Ch(a, b), Qg(b, c, d), Sg(b, c, d, e), d = true;
  else if (null === a) {
    var f2 = b.stateNode, g = b.memoizedProps;
    f2.props = g;
    var h2 = f2.context, k2 = c.contextType, n2 = Xc;
    "object" === typeof k2 && null !== k2 && (n2 = Gf(k2));
    var t2 = c.getDerivedStateFromProps;
    (k2 = "function" === typeof t2 || "function" === typeof f2.getSnapshotBeforeUpdate) || "function" !== typeof f2.UNSAFE_componentWillReceiveProps && "function" !== typeof f2.componentWillReceiveProps || (g !== d || h2 !== n2) && Rg(b, f2, d, n2);
    he = false;
    var w2 = b.memoizedState;
    f2.state = w2;
    qe(b, d, f2, e);
    pe();
    h2 = b.memoizedState;
    g !== d || w2 !== h2 || he ? ("function" === typeof t2 && (Ng(b, c, t2, d), h2 = b.memoizedState), (g = he || Pg(b, c, g, d, w2, h2, n2)) ? (k2 || "function" !== typeof f2.UNSAFE_componentWillMount && "function" !== typeof f2.componentWillMount || ("function" === typeof f2.componentWillMount && f2.componentWillMount(), "function" === typeof f2.UNSAFE_componentWillMount && f2.UNSAFE_componentWillMount()), "function" === typeof f2.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof f2.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = h2), f2.props = d, f2.state = h2, f2.context = n2, d = g) : ("function" === typeof f2.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    f2 = b.stateNode;
    je(a, b);
    n2 = b.memoizedProps;
    k2 = b.type === b.elementType ? n2 : Mg(b.type, n2);
    f2.props = k2;
    t2 = b.pendingProps;
    var q2 = f2.context;
    h2 = c.contextType;
    g = Xc;
    "object" === typeof h2 && null !== h2 && (g = Gf(h2));
    w2 = c.getDerivedStateFromProps;
    (h2 = "function" === typeof w2 || "function" === typeof f2.getSnapshotBeforeUpdate) || "function" !== typeof f2.UNSAFE_componentWillReceiveProps && "function" !== typeof f2.componentWillReceiveProps || (n2 !== t2 || q2 !== g) && Rg(b, f2, d, g);
    he = false;
    q2 = b.memoizedState;
    f2.state = q2;
    qe(b, d, f2, e);
    pe();
    var r2 = b.memoizedState;
    n2 !== t2 || q2 !== r2 || he ? ("function" === typeof w2 && (Ng(b, c, w2, d), r2 = b.memoizedState), (k2 = he || Pg(b, c, k2, d, q2, r2, g) || false) ? (h2 || "function" !== typeof f2.UNSAFE_componentWillUpdate && "function" !== typeof f2.componentWillUpdate || ("function" === typeof f2.componentWillUpdate && f2.componentWillUpdate(d, r2, g), "function" === typeof f2.UNSAFE_componentWillUpdate && f2.UNSAFE_componentWillUpdate(d, r2, g)), "function" === typeof f2.componentDidUpdate && (b.flags |= 4), "function" === typeof f2.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof f2.componentDidUpdate || n2 === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 4), "function" !== typeof f2.getSnapshotBeforeUpdate || n2 === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = r2), f2.props = d, f2.state = r2, f2.context = g, d = k2) : ("function" !== typeof f2.componentDidUpdate || n2 === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 4), "function" !== typeof f2.getSnapshotBeforeUpdate || n2 === a.memoizedProps && q2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return Dh(a, b, c, d, false, e);
}
function Dh(a, b, c, d, e, f2) {
  wh(a, b);
  e = 0 !== (b.flags & 128);
  if (!d && !e)
    return qh(a, b, f2);
  d = b.stateNode;
  lh.current = b;
  c = e && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && e ? (b.child = Qe(b, a.child, null, f2), b.child = Qe(b, null, c, f2)) : nh(a, b, c, f2);
  b.memoizedState = d.state;
  return b.child;
}
function Eh(a, b, c, d, e) {
  zd();
  Ad(e);
  b.flags |= 256;
  nh(a, b, c, d);
  return b.child;
}
var Fh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gh(a) {
  return { baseLanes: a, cachePool: Hh() };
}
function Ih(a, b, c) {
  a = null !== a ? a.childLanes & ~c : 0;
  b && (a |= Jh);
  return a;
}
function Kh(a, b, c) {
  var d = b.pendingProps, e = false, f2 = 0 !== (b.flags & 128), g;
  (g = f2) || (g = null !== a && null === a.memoizedState ? false : 0 !== (af.current & 2));
  g && (e = true, b.flags &= -129);
  g = 0 !== (b.flags & 32);
  b.flags &= -33;
  if (null === a) {
    if (G) {
      e ? $e(b) : cf();
      if (G) {
        var h2 = nd, k2;
        if (k2 = h2) {
          c: {
            k2 = h2;
            for (h2 = pd; 8 !== k2.nodeType; ) {
              if (!h2) {
                h2 = null;
                break c;
              }
              k2 = yd(k2.nextSibling);
              if (null === k2) {
                h2 = null;
                break c;
              }
            }
            h2 = k2;
          }
          null !== h2 ? (b.memoizedState = { dehydrated: h2, treeContext: null !== fd ? { id: gd, overflow: hd } : null, retryLane: 536870912 }, k2 = Lh(18, null, null, 0), k2.stateNode = h2, k2.return = b, b.child = k2, md = b, nd = null, k2 = true) : k2 = false;
        }
        k2 || qd();
      }
      h2 = b.memoizedState;
      if (null !== h2 && (h2 = h2.dehydrated, null !== h2))
        return "$!" === h2.data ? b.lanes = 16 : b.lanes = 536870912, null;
      df(b);
    }
    h2 = d.children;
    k2 = d.fallback;
    if (e)
      return cf(), d = Mh(b, h2, k2, c), e = b.child, e.memoizedState = Gh(c), e.childLanes = Ih(a, g, c), b.memoizedState = Fh, d;
    if ("number" === typeof d.unstable_expectedLoadTime)
      return cf(), d = Mh(b, h2, k2, c), e = b.child, e.memoizedState = Gh(c), e.childLanes = Ih(a, g, c), b.memoizedState = Fh, b.lanes = 4194304, d;
    $e(b);
    return Nh(b, h2);
  }
  k2 = a.memoizedState;
  if (null !== k2 && (h2 = k2.dehydrated, null !== h2)) {
    if (f2)
      b.flags & 256 ? ($e(b), b.flags &= -257, g = Vg(Error(u(422))), b = Oh(a, b, c, g)) : null !== b.memoizedState ? (cf(), b.child = a.child, b.flags |= 128, b = null) : (cf(), e = d.fallback, h2 = b.mode, d = Ph({ mode: "visible", children: d.children }, h2, 0, null), e = Oe(e, h2, c, null), e.flags |= 2, d.return = b, e.return = b, d.sibling = e, b.child = d, 0 !== (b.mode & 1) && Qe(b, a.child, null, c), d = b.child, d.memoizedState = Gh(c), d.childLanes = Ih(a, g, c), b.memoizedState = Fh, b = e);
    else if ($e(b), "$!" === h2.data) {
      g = h2.nextSibling && h2.nextSibling.dataset;
      if (g)
        var n2 = g.dgst;
      g = n2;
      d = null;
      "POSTPONE" !== g && (d = Error(u(419)), d.digest = g, d = Vg(d, g, void 0));
      b = Oh(a, b, c, d);
    } else if (g = 0 !== (c & a.childLanes), Lf || g) {
      g = K;
      if (null !== g) {
        d = c & -c;
        if (0 !== (d & 42))
          d = 1;
        else
          switch (d) {
            case 2:
              d = 1;
              break;
            case 8:
              d = 4;
              break;
            case 32:
              d = 16;
              break;
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
              d = 64;
              break;
            case 268435456:
              d = 134217728;
              break;
            default:
              d = 0;
          }
        d = 0 !== (d & (g.suspendedLanes | c)) ? 0 : d;
        if (0 !== d && d !== k2.retryLane)
          throw k2.retryLane = d, Jd(a, d), Vf(g, a, d), mh;
      }
      "$?" === h2.data || ih();
      b = Oh(a, b, c, null);
    } else
      "$?" === h2.data ? (b.flags |= 128, b.child = a.child, b = Qh.bind(null, a), h2._reactRetry = b, b = null) : (c = k2.treeContext, nd = yd(h2.nextSibling), md = b, G = true, od = null, pd = false, null !== c && (dd[ed++] = gd, dd[ed++] = hd, dd[ed++] = fd, gd = c.id, hd = c.overflow, fd = b), b = Nh(b, d.children), b.flags |= 4096);
    return b;
  }
  if (e)
    return cf(), e = d.fallback, h2 = b.mode, k2 = a.child, n2 = k2.sibling, f2 = {
      mode: "hidden",
      children: d.children
    }, 0 === (h2 & 1) && b.child !== k2 ? (d = b.child, d.childLanes = 0, d.pendingProps = f2, b.deletions = null) : (d = Ke(k2, f2), d.subtreeFlags = k2.subtreeFlags & 31457280), null !== n2 ? e = Ke(n2, e) : (e = Oe(e, h2, c, null), e.flags |= 2), e.return = b, d.return = b, d.sibling = e, b.child = d, d = e, e = b.child, h2 = a.child.memoizedState, null === h2 ? h2 = Gh(c) : (k2 = h2.cachePool, null !== k2 ? (n2 = U._currentValue, k2 = k2.parent !== n2 ? { parent: n2, pool: n2 } : k2) : k2 = Hh(), h2 = { baseLanes: h2.baseLanes | c, cachePool: k2 }), e.memoizedState = h2, e.childLanes = Ih(a, g, c), b.memoizedState = Fh, d;
  $e(b);
  g = a.child;
  a = g.sibling;
  g = Ke(g, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (g.lanes = c);
  g.return = b;
  g.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = g;
  b.memoizedState = null;
  return g;
}
function Nh(a, b) {
  b = Ph({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function Mh(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  0 === (e & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = Ph(b, e, 0, null);
  c = Oe(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function Oh(a, b, c, d) {
  null !== d && Ad(d);
  Qe(b, a.child, null, c);
  a = Nh(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function Rh(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sh(a.return, b, c);
}
function Th(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function Uh(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  nh(a, b, d.children, c);
  d = af.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && Rh(a, c, b);
          else if (19 === a.tag)
            Rh(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  E(af, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === ef(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        Th(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === ef(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        Th(b, true, c, null, f2);
        break;
      case "together":
        Th(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function Ch(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function qh(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  re |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(u(153));
  if (null !== b.child) {
    a = b.child;
    c = Ke(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = Ke(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function Vh(a, b, c) {
  switch (b.tag) {
    case 3:
      Oa(b, b.stateNode.containerInfo);
      Wh(b, U, a.memoizedState.cache);
      zd();
      break;
    case 27:
    case 5:
      Sa(b);
      break;
    case 4:
      Oa(b, b.stateNode.containerInfo);
      break;
    case 10:
      Wh(b, b.type, b.memoizedProps.value);
      break;
    case 13:
      var d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return $e(b), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return Kh(a, b, c);
        $e(b);
        a = qh(a, b, c);
        return null !== a ? a.sibling : null;
      }
      $e(b);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return Uh(
            a,
            b,
            c
          );
        b.flags |= 128;
      }
      var e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      E(af, af.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, vh(a, b, c);
    case 24:
      Wh(b, U, a.memoizedState.cache);
  }
  return qh(a, b, c);
}
function Xh(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps)
      Lf = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Lf = false, Vh(a, b, c);
      Lf = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Lf = false, G && 0 !== (b.flags & 1048576) && jd(b, cd, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      Ch(a, b);
      a = b.pendingProps;
      ph(b, c);
      a = rf(null, b, d, a, void 0, c);
      d = Af();
      b.flags |= 1;
      b.tag = 0;
      G && d && kd(b);
      nh(null, b, a, c);
      b = b.child;
      return b;
    case 16:
      d = b.elementType;
      a: {
        Ch(a, b);
        a = b.pendingProps;
        var e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Yh(d);
        a = Mg(d, a);
        switch (e) {
          case 0:
            b = uh(null, b, d, a, c);
            break a;
          case 1:
            b = Bh(null, b, d, a, c);
            break a;
          case 11:
            b = oh(null, b, d, a, c);
            break a;
          case 14:
            b = rh(null, b, d, Mg(d.type, a), c);
            break a;
        }
        throw Error(u(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Mg(d, e), uh(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Mg(d, e), Bh(a, b, d, e, c);
    case 3:
      a: {
        Oa(b, b.stateNode.containerInfo);
        if (null === a)
          throw Error(u(387));
        e = b.pendingProps;
        var f2 = b.memoizedState;
        d = f2.element;
        je(
          a,
          b
        );
        qe(b, e, null, c);
        var g = b.memoizedState;
        e = g.cache;
        Wh(b, U, e);
        e !== f2.cache && Zh(b, U, c);
        pe();
        e = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: e, isDehydrated: false, cache: g.cache }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            d = Ug(Error(u(423)), b);
            b = Eh(a, b, e, c, d);
            break a;
          } else if (e !== d) {
            d = Ug(Error(u(424)), b);
            b = Eh(a, b, e, c, d);
            break a;
          } else
            for (nd = yd(b.stateNode.containerInfo.firstChild), md = b, G = true, od = null, pd = true, c = Re(b, null, e, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          zd();
          if (e === d) {
            b = qh(
              a,
              b,
              c
            );
            break a;
          }
          nh(a, b, e, c);
        }
        b = b.child;
      }
      return b;
    case 26:
      return wh(a, b), c = b.memoizedState = $h(b.type, null === a ? null : a.memoizedProps, b.pendingProps), null !== a || G || null !== c || (c = b.type, a = b.pendingProps, d = ai(La.current).createElement(c), d[Gb] = b, d[Hb] = a, bi(d, c, a), Vb(d), b.stateNode = d), null;
    case 27:
      return Sa(b), null === a && G && (d = b.stateNode = ci(b.type, b.pendingProps, La.current), md = b, pd = true, nd = yd(d.firstChild)), d = b.pendingProps.children, null !== a || G ? nh(a, b, d, c) : b.child = Qe(b, null, d, c), wh(a, b), b.child;
    case 5:
      if (null === a && G) {
        if (e = d = nd)
          d = di(d, b.type, b.pendingProps, pd), null !== d ? (b.stateNode = d, md = b, nd = yd(d.firstChild), pd = false, e = true) : e = false;
        e || qd();
      }
      Sa(b);
      e = b.type;
      f2 = b.pendingProps;
      g = null !== a ? a.memoizedProps : null;
      d = f2.children;
      xd(e, f2) ? d = null : null !== g && xd(e, g) && (b.flags |= 32);
      null !== b.memoizedState && (e = rf(a, b, yf, null, null, c), Na._currentValue = e, Lf && null !== a && a.memoizedState.memoizedState !== e && Zh(b, Na, c));
      wh(a, b);
      nh(a, b, d, c);
      return b.child;
    case 6:
      if (null === a && G) {
        if (a = c = nd)
          c = ei(c, b.pendingProps, pd), null !== c ? (b.stateNode = c, md = b, nd = null, a = true) : a = false;
        a || qd();
      }
      return null;
    case 13:
      return Kh(a, b, c);
    case 4:
      return Oa(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Qe(b, null, d, c) : nh(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Mg(d, e), oh(a, b, d, e, c);
    case 7:
      return nh(a, b, b.pendingProps, c), b.child;
    case 8:
      return nh(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return nh(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        Wh(b, d, g);
        if (null !== f2)
          if (Zc(f2.value, g)) {
            if (f2.children === e.children) {
              b = qh(a, b, c);
              break a;
            }
          } else
            Zh(b, d, c);
        nh(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type._context, d = b.pendingProps.children, ph(b, c), e = Gf(e), d = d(e), b.flags |= 1, nh(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Mg(d, b.pendingProps), e = Mg(d.type, e), rh(a, b, d, e, c);
    case 15:
      return th(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Mg(d, e), Ch(a, b), b.tag = 1, ph(b, c), Qg(b, d, e), Sg(b, d, e, c), Dh(null, b, d, true, false, c);
    case 19:
      return Uh(
        a,
        b,
        c
      );
    case 22:
      return vh(a, b, c);
    case 24:
      return ph(b, c), d = Gf(U), null === a ? (e = zh(), null === e && (e = K, f2 = Hg(), e.pooledCache = f2, f2.refCount++, null !== f2 && (e.pooledCacheLanes |= c), e = f2), b.memoizedState = { parent: d, cache: e }, ie(b), Wh(b, U, e)) : (0 !== (a.lanes & c) && (je(a, b), qe(b, null, null, c), pe()), e = a.memoizedState, f2 = b.memoizedState, e.parent !== d ? (e = { parent: d, cache: d }, b.memoizedState = e, 0 === b.lanes && (b.memoizedState = b.updateQueue.baseState = e), Wh(b, U, d)) : (d = f2.cache, Wh(b, U, d), d !== e.cache && Zh(b, U, c))), nh(
        a,
        b,
        b.pendingProps.children,
        c
      ), b.child;
  }
  throw Error(u(156, b.tag));
}
var fi = ma(null), gi = null, hi = null, ii = null;
function ji() {
  ii = hi = gi = null;
}
function Wh(a, b, c) {
  E(fi, b._currentValue);
  b._currentValue = c;
}
function ki(a) {
  a._currentValue = fi.current;
  na(fi);
}
function Sh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Zh(a, b, c) {
  var d = a.child;
  null !== d && (d.return = a);
  for (; null !== d; ) {
    var e = d.dependencies;
    if (null !== e) {
      var f2 = d.child;
      for (var g = e.firstContext; null !== g; ) {
        if (g.context === b) {
          if (1 === d.tag) {
            g = ke(c & -c);
            g.tag = 2;
            var h2 = d.updateQueue;
            if (null !== h2) {
              h2 = h2.shared;
              var k2 = h2.pending;
              null === k2 ? g.next = g : (g.next = k2.next, k2.next = g);
              h2.pending = g;
            }
          }
          d.lanes |= c;
          g = d.alternate;
          null !== g && (g.lanes |= c);
          Sh(d.return, c, a);
          e.lanes |= c;
          break;
        }
        g = g.next;
      }
    } else if (10 === d.tag)
      f2 = d.type === a.type ? null : d.child;
    else if (18 === d.tag) {
      f2 = d.return;
      if (null === f2)
        throw Error(u(341));
      f2.lanes |= c;
      e = f2.alternate;
      null !== e && (e.lanes |= c);
      Sh(f2, c, a);
      f2 = d.sibling;
    } else
      f2 = d.child;
    if (null !== f2)
      f2.return = d;
    else
      for (f2 = d; null !== f2; ) {
        if (f2 === a) {
          f2 = null;
          break;
        }
        d = f2.sibling;
        if (null !== d) {
          d.return = f2.return;
          f2 = d;
          break;
        }
        f2 = f2.return;
      }
    d = f2;
  }
}
function ph(a, b) {
  gi = a;
  ii = hi = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Lf = true), a.firstContext = null);
}
function Gf(a) {
  return li(gi, a);
}
function Pe(a, b, c) {
  null === gi && ph(a, c);
  return li(a, b);
}
function li(a, b) {
  var c = b._currentValue;
  if (ii !== b)
    if (b = { context: b, memoizedValue: c, next: null }, null === hi) {
      if (null === a)
        throw Error(u(308));
      hi = b;
      a.dependencies = { lanes: 0, firstContext: b };
    } else
      hi = hi.next = b;
  return c;
}
var mi = "undefined" !== typeof AbortController ? AbortController : function() {
  var a = [], b = this.signal = { aborted: false, addEventListener: function(c, d) {
    a.push(d);
  } };
  this.abort = function() {
    b.aborted = true;
    a.forEach(function(c) {
      return c();
    });
  };
}, ni = ba.unstable_scheduleCallback, oi = ba.unstable_NormalPriority, U = { $$typeof: va, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
function Hg() {
  return { controller: new mi(), data: /* @__PURE__ */ new Map(), refCount: 0 };
}
function pi(a) {
  a.refCount--;
  0 === a.refCount && ni(oi, function() {
    a.controller.abort();
  });
}
var qi = ea.ReactCurrentBatchConfig;
function Lg() {
  var a = qi.transition;
  null !== a && a._callbacks.add(ri);
  return a;
}
function ri(a, b) {
  ee(a, b);
}
function ag(a, b) {
  a._callbacks.forEach(function(c) {
    return c(a, b);
  });
}
var si = ma(null);
function zh() {
  var a = si.current;
  return null !== a ? a : K.pooledCache;
}
function yh(a, b) {
  null === b ? E(si, si.current) : E(si, b.pool);
}
function Hh() {
  var a = zh();
  return null === a ? null : { parent: U._currentValue, pool: a };
}
function ti(a) {
  a.flags |= 4;
}
function ui(a, b) {
  if ("stylesheet" !== b.type || 0 !== (b.state.loading & 4))
    a.flags &= -16777217;
  else if (a.flags |= 16777216, 0 === (J & 42) && (b = "stylesheet" === b.type && 0 === (b.state.loading & 3) ? false : true, !b))
    if (vi())
      a.flags |= 8192;
    else
      throw Be = xe, we;
}
function wi(a, b) {
  null !== b ? a.flags |= 4 : a.flags & 16384 && (b = 22 !== a.tag ? vb() : 536870912, a.lanes |= b);
}
function xi(a, b) {
  if (!G)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function W(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 31457280, d |= e.flags & 31457280, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function yi(a, b, c) {
  var d = b.pendingProps;
  ld(b);
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
      return W(b), null;
    case 1:
      return W(b), null;
    case 3:
      c = b.stateNode;
      d = null;
      null !== a && (d = a.memoizedState.cache);
      b.memoizedState.cache !== d && (b.flags |= 2048);
      ki(U);
      Ra();
      c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
      if (null === a || null === a.child)
        wd(b) ? ti(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== od && (zi(od), od = null));
      W(b);
      return null;
    case 26:
      c = b.memoizedState;
      if (null === a)
        ti(b), null !== c ? (W(b), ui(b, c)) : (W(b), b.flags &= -16777217);
      else {
        var e = a.memoizedState;
        c !== e && ti(b);
        null !== c ? (W(b), c === e ? b.flags &= -16777217 : ui(b, c)) : (a.memoizedProps !== d && ti(b), W(b), b.flags &= -16777217);
      }
      return null;
    case 27:
      Ta(b);
      c = La.current;
      e = b.type;
      if (null !== a && null != b.stateNode)
        a.memoizedProps !== d && ti(b);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(u(166));
          W(b);
          return null;
        }
        a = Ja.current;
        wd(b) ? rd(b) : (a = ci(e, d, c), b.stateNode = a, ti(b));
      }
      W(b);
      return null;
    case 5:
      Ta(b);
      c = b.type;
      if (null !== a && null != b.stateNode)
        a.memoizedProps !== d && ti(b);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(u(166));
          W(b);
          return null;
        }
        a = Ja.current;
        if (wd(b))
          rd(b);
        else {
          e = ai(La.current);
          switch (a) {
            case 1:
              a = e.createElementNS("http://www.w3.org/2000/svg", c);
              break;
            case 2:
              a = e.createElementNS("http://www.w3.org/1998/Math/MathML", c);
              break;
            default:
              switch (c) {
                case "svg":
                  a = e.createElementNS("http://www.w3.org/2000/svg", c);
                  break;
                case "math":
                  a = e.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    c
                  );
                  break;
                case "script":
                  a = e.createElement("div");
                  a.innerHTML = "<script><\/script>";
                  a = a.removeChild(a.firstChild);
                  break;
                case "select":
                  a = "string" === typeof d.is ? e.createElement("select", { is: d.is }) : e.createElement("select");
                  d.multiple ? a.multiple = true : d.size && (a.size = d.size);
                  break;
                default:
                  a = "string" === typeof d.is ? e.createElement(c, { is: d.is }) : e.createElement(c);
              }
          }
          a[Gb] = b;
          a[Hb] = d;
          a:
            for (e = b.child; null !== e; ) {
              if (5 === e.tag || 6 === e.tag)
                a.appendChild(e.stateNode);
              else if (4 !== e.tag && 27 !== e.tag && null !== e.child) {
                e.child.return = e;
                e = e.child;
                continue;
              }
              if (e === b)
                break a;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === b)
                  break a;
                e = e.return;
              }
              e.sibling.return = e.return;
              e = e.sibling;
            }
          b.stateNode = a;
          a:
            switch (bi(a, c, d), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!d.autoFocus;
                break a;
              case "img":
                a = true;
                break a;
              default:
                a = false;
            }
          a && ti(b);
        }
      }
      W(b);
      b.flags &= -16777217;
      return null;
    case 6:
      if (a && null != b.stateNode)
        a.memoizedProps !== d && ti(b);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(u(166));
        a = La.current;
        if (wd(b)) {
          a = b.stateNode;
          c = b.memoizedProps;
          d = null;
          e = md;
          if (null !== e)
            switch (e.tag) {
              case 27:
              case 5:
                d = e.memoizedProps;
            }
          a[Gb] = b;
          a = a.nodeValue === c || null !== d && true === d.suppressHydrationWarning || td(a.nodeValue, c) ? true : false;
          a || qd();
        } else
          a = ai(a).createTextNode(d), a[Gb] = b, b.stateNode = a;
      }
      W(b);
      return null;
    case 13:
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        e = wd(b);
        if (null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!e)
              throw Error(u(318));
            e = b.memoizedState;
            e = null !== e ? e.dehydrated : null;
            if (!e)
              throw Error(u(317));
            e[Gb] = b;
          } else
            zd(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          W(b);
          e = false;
        } else
          null !== od && (zi(od), od = null), e = true;
        if (!e) {
          if (b.flags & 256)
            return df(b), b;
          df(b);
          return null;
        }
      }
      df(b);
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      c = null !== d;
      a = null !== a && null !== a.memoizedState;
      if (c) {
        d = b.child;
        e = null;
        null !== d.alternate && null !== d.alternate.memoizedState && null !== d.alternate.memoizedState.cachePool && (e = d.alternate.memoizedState.cachePool.pool);
        var f2 = null;
        null !== d.memoizedState && null !== d.memoizedState.cachePool && (f2 = d.memoizedState.cachePool.pool);
        f2 !== e && (d.flags |= 2048);
      }
      c !== a && c && (b.child.flags |= 8192);
      wi(b, b.updateQueue);
      W(b);
      return null;
    case 4:
      return Ra(), null === a && Ai(b.stateNode.containerInfo), W(b), null;
    case 10:
      return ki(b.type), W(b), null;
    case 17:
      return W(b), null;
    case 19:
      na(af);
      e = b.memoizedState;
      if (null === e)
        return W(b), null;
      d = 0 !== (b.flags & 128);
      f2 = e.rendering;
      if (null === f2)
        if (d)
          xi(e, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              f2 = ef(a);
              if (null !== f2) {
                b.flags |= 128;
                xi(e, false);
                a = f2.updateQueue;
                b.updateQueue = a;
                wi(b, a);
                b.subtreeFlags = 0;
                a = c;
                for (c = b.child; null !== c; )
                  Bi(c, a), c = c.sibling;
                E(af, af.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== e.tail && Ya() > Ci && (b.flags |= 128, d = true, xi(e, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = ef(f2), null !== a) {
            if (b.flags |= 128, d = true, a = a.updateQueue, b.updateQueue = a, wi(b, a), xi(e, true), null === e.tail && "hidden" === e.tailMode && !f2.alternate && !G)
              return W(b), null;
          } else
            2 * Ya() - e.renderingStartTime > Ci && 536870912 !== c && (b.flags |= 128, d = true, xi(e, false), b.lanes = 4194304);
        e.isBackwards ? (f2.sibling = b.child, b.child = f2) : (a = e.last, null !== a ? a.sibling = f2 : b.child = f2, e.last = f2);
      }
      if (null !== e.tail)
        return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = Ya(), b.sibling = null, a = af.current, E(af, d ? a & 1 | 2 : a & 1), b;
      W(b);
      return null;
    case 22:
    case 23:
      return df(b), Xe(), d = null !== b.memoizedState, null !== a ? null !== a.memoizedState !== d && (b.flags |= 8192) : d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (c & 536870912) && 0 === (b.flags & 128) && (W(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : W(b), c = b.updateQueue, null !== c && wi(b, c.retryQueue), c = null, null !== a && null !== a.memoizedState && null !== a.memoizedState.cachePool && (c = a.memoizedState.cachePool.pool), d = null, null !== b.memoizedState && null !== b.memoizedState.cachePool && (d = b.memoizedState.cachePool.pool), d !== c && (b.flags |= 2048), null !== a && na(si), null;
    case 24:
      return c = null, null !== a && (c = a.memoizedState.cache), b.memoizedState.cache !== c && (b.flags |= 2048), ki(U), W(b), null;
    case 25:
      return null;
  }
  throw Error(u(156, b.tag));
}
function Di(a, b) {
  ld(b);
  switch (b.tag) {
    case 1:
      return a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return ki(U), Ra(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 26:
    case 27:
    case 5:
      return Ta(b), null;
    case 13:
      df(b);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(u(340));
        zd();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return na(af), null;
    case 4:
      return Ra(), null;
    case 10:
      return ki(b.type), null;
    case 22:
    case 23:
      return df(b), Xe(), null !== a && na(si), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 24:
      return ki(U), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function Ei(a, b) {
  ld(b);
  switch (b.tag) {
    case 3:
      ki(U);
      Ra();
      break;
    case 26:
    case 27:
    case 5:
      Ta(b);
      break;
    case 4:
      Ra();
      break;
    case 13:
      df(b);
      break;
    case 19:
      na(af);
      break;
    case 10:
      ki(b.type);
      break;
    case 22:
    case 23:
      df(b);
      Xe();
      null !== a && na(si);
      break;
    case 24:
      ki(U);
  }
}
var Fi = false, Gi = false, Hi = "function" === typeof WeakSet ? WeakSet : Set, Ii = null;
function Ji(a, b) {
  try {
    var c = a.ref;
    if (null !== c) {
      var d = a.stateNode;
      switch (a.tag) {
        case 26:
        case 27:
        case 5:
          var e = d;
          break;
        default:
          e = d;
      }
      "function" === typeof c ? a.refCleanup = c(e) : c.current = e;
    }
  } catch (f2) {
    X(a, b, f2);
  }
}
function Ki(a, b) {
  var c = a.ref, d = a.refCleanup;
  if (null !== c)
    if ("function" === typeof d)
      try {
        d();
      } catch (e) {
        X(a, b, e);
      } finally {
        a.refCleanup = null, a = a.alternate, null != a && (a.refCleanup = null);
      }
    else if ("function" === typeof c)
      try {
        c(null);
      } catch (e) {
        X(a, b, e);
      }
    else
      c.current = null;
}
function Li(a, b, c) {
  try {
    c();
  } catch (d) {
    X(a, b, d);
  }
}
var Mi = false;
function Ni(a, b) {
  Oi = Pi;
  a = Qi();
  if (Ri(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (V2) {
            c = null;
            break a;
          }
          var g = 0, h2 = -1, k2 = -1, n2 = 0, t2 = 0, w2 = a, q2 = null;
          b:
            for (; ; ) {
              for (var r2; ; ) {
                w2 !== c || 0 !== e && 3 !== w2.nodeType || (h2 = g + e);
                w2 !== f2 || 0 !== d && 3 !== w2.nodeType || (k2 = g + d);
                3 === w2.nodeType && (g += w2.nodeValue.length);
                if (null === (r2 = w2.firstChild))
                  break;
                q2 = w2;
                w2 = r2;
              }
              for (; ; ) {
                if (w2 === a)
                  break b;
                q2 === c && ++n2 === e && (h2 = g);
                q2 === f2 && ++t2 === d && (k2 = g);
                if (null !== (r2 = w2.nextSibling))
                  break;
                w2 = q2;
                q2 = w2.parentNode;
              }
              w2 = r2;
            }
          c = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Si = { focusedElem: a, selectionRange: c };
  Pi = false;
  for (Ii = b; null !== Ii; )
    if (b = Ii, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, Ii = a;
    else
      for (; null !== Ii; ) {
        b = Ii;
        try {
          var B2 = b.alternate, D2 = b.flags;
          switch (b.tag) {
            case 0:
              if (0 !== (D2 & 4)) {
                var O2 = b.updateQueue, m2 = null !== O2 ? O2.events : null;
                if (null !== m2)
                  for (a = 0; a < m2.length; a++) {
                    var l2 = m2[a];
                    l2.ref.impl = l2.nextImpl;
                  }
              }
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (0 !== (D2 & 1024) && null !== B2) {
                var p2 = B2.memoizedProps, v2 = B2.memoizedState, x2 = b.stateNode, z2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? p2 : Mg(b.type, p2), v2);
                x2.__reactInternalSnapshotBeforeUpdate = z2;
              }
              break;
            case 3:
              if (0 !== (D2 & 1024)) {
                var y2 = b.stateNode.containerInfo, A2 = y2.nodeType;
                if (9 === A2)
                  Ti(y2);
                else if (1 === A2)
                  switch (y2.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ti(y2);
                      break;
                    default:
                      y2.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (0 !== (D2 & 1024))
                throw Error(u(163));
          }
        } catch (V2) {
          X(b, b.return, V2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          Ii = a;
          break;
        }
        Ii = b.return;
      }
  B2 = Mi;
  Mi = false;
  return B2;
}
function Ui(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.inst, g = f2.destroy;
        void 0 !== g && (f2.destroy = void 0, Li(b, c, g));
      }
      e = e.next;
    } while (e !== d);
  }
}
function Vi(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create, e = c.inst;
        d = d();
        e.destroy = d;
      }
      c = c.next;
    } while (c !== b);
  }
}
function Wi(a, b) {
  try {
    Vi(b, a);
  } catch (c) {
    X(a, a.return, c);
  }
}
function Xi(a) {
  var b = a.updateQueue;
  if (null !== b) {
    var c = a.stateNode;
    try {
      te(b, c);
    } catch (d) {
      X(a, a.return, d);
    }
  }
}
function Yi(a) {
  var b = a.type, c = a.memoizedProps, d = a.stateNode;
  try {
    a:
      switch (b) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          c.autoFocus && d.focus();
          break a;
        case "img":
          c.src && (d.src = c.src);
      }
  } catch (e) {
    X(a, a.return, e);
  }
}
function Zi(a, b, c) {
  var d = c.flags;
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
      $i(a, c);
      d & 4 && Wi(c, 5);
      break;
    case 1:
      $i(a, c);
      if (d & 4)
        if (a = c.stateNode, null === b)
          try {
            a.componentDidMount();
          } catch (h2) {
            X(c, c.return, h2);
          }
        else {
          var e = c.elementType === c.type ? b.memoizedProps : Mg(c.type, b.memoizedProps);
          b = b.memoizedState;
          try {
            a.componentDidUpdate(e, b, a.__reactInternalSnapshotBeforeUpdate);
          } catch (h2) {
            X(c, c.return, h2);
          }
        }
      d & 64 && Xi(c);
      d & 512 && Ji(c, c.return);
      break;
    case 3:
      $i(a, c);
      if (d & 64 && (d = c.updateQueue, null !== d)) {
        a = null;
        if (null !== c.child)
          switch (c.child.tag) {
            case 27:
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        try {
          te(d, a);
        } catch (h2) {
          X(c, c.return, h2);
        }
      }
      break;
    case 26:
      $i(a, c);
      d & 512 && Ji(c, c.return);
      break;
    case 27:
    case 5:
      $i(a, c);
      null === b && d & 4 && Yi(c);
      d & 512 && Ji(c, c.return);
      break;
    case 12:
      $i(a, c);
      break;
    case 13:
      $i(a, c);
      d & 4 && aj(a, c);
      break;
    case 22:
      if (0 !== (c.mode & 1)) {
        if (e = null !== c.memoizedState || Fi, !e) {
          b = null !== b && null !== b.memoizedState || Gi;
          var f2 = Fi, g = Gi;
          Fi = e;
          (Gi = b) && !g ? bj(a, c, 0 !== (c.subtreeFlags & 8772)) : $i(a, c);
          Fi = f2;
          Gi = g;
        }
      } else
        $i(a, c);
      d & 512 && ("manual" === c.memoizedProps.mode ? Ji(c, c.return) : Ki(c, c.return));
      break;
    default:
      $i(a, c);
  }
}
function cj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, cj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && Ob(b));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function dj(a) {
  return 5 === a.tag || 3 === a.tag || 26 === a.tag || 27 === a.tag || 4 === a.tag;
}
function ej(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || dj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 27 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function fj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = ud));
  else if (4 !== d && 27 !== d && (a = a.child, null !== a))
    for (fj(a, b, c), a = a.sibling; null !== a; )
      fj(a, b, c), a = a.sibling;
}
function gj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && 27 !== d && (a = a.child, null !== a))
    for (gj(a, b, c), a = a.sibling; null !== a; )
      gj(a, b, c), a = a.sibling;
}
var hj = null, ij = false;
function jj(a, b, c) {
  for (c = c.child; null !== c; )
    kj(a, b, c), c = c.sibling;
}
function kj(a, b, c) {
  if (hb && "function" === typeof hb.onCommitFiberUnmount)
    try {
      hb.onCommitFiberUnmount(gb, c);
    } catch (k2) {
    }
  switch (c.tag) {
    case 26:
      Gi || Ki(c, b);
      jj(a, b, c);
      c.memoizedState ? c.memoizedState.count-- : c.stateNode && (c = c.stateNode, c.parentNode.removeChild(c));
      break;
    case 27:
      Gi || Ki(c, b);
      var d = hj, e = ij;
      hj = c.stateNode;
      jj(a, b, c);
      c = c.stateNode;
      for (a = c.attributes; a.length; )
        c.removeAttributeNode(a[0]);
      Ob(c);
      hj = d;
      ij = e;
      break;
    case 5:
      Gi || Ki(c, b);
    case 6:
      d = hj;
      e = ij;
      hj = null;
      jj(a, b, c);
      hj = d;
      ij = e;
      null !== hj && (ij ? (a = hj, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : hj.removeChild(c.stateNode));
      break;
    case 18:
      null !== hj && (ij ? (a = hj, c = c.stateNode, 8 === a.nodeType ? lj(a.parentNode, c) : 1 === a.nodeType && lj(a, c), mj(a)) : lj(hj, c.stateNode));
      break;
    case 4:
      d = hj;
      e = ij;
      hj = c.stateNode.containerInfo;
      ij = true;
      jj(a, b, c);
      hj = d;
      ij = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Gi && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e.tag, g = e.inst, h2 = g.destroy;
          void 0 !== h2 && (0 !== (f2 & 2) ? (g.destroy = void 0, Li(c, b, h2)) : 0 !== (f2 & 4) && (g.destroy = void 0, Li(c, b, h2)));
          e = e.next;
        } while (e !== d);
      }
      jj(a, b, c);
      break;
    case 1:
      if (!Gi && (Ki(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (k2) {
          X(c, b, k2);
        }
      jj(a, b, c);
      break;
    case 21:
      jj(a, b, c);
      break;
    case 22:
      Ki(c, b);
      c.mode & 1 ? (Gi = (d = Gi) || null !== c.memoizedState, jj(a, b, c), Gi = d) : jj(a, b, c);
      break;
    default:
      jj(a, b, c);
  }
}
function aj(a, b) {
  if (null === b.memoizedState && (a = b.alternate, null !== a && (a = a.memoizedState, null !== a && (a = a.dehydrated, null !== a))))
    try {
      mj(a);
    } catch (c) {
      X(b, b.return, c);
    }
}
function nj(a) {
  switch (a.tag) {
    case 13:
    case 19:
      var b = a.stateNode;
      null === b && (b = a.stateNode = new Hi());
      return b;
    case 22:
      return a = a.stateNode, b = a._retryCache, null === b && (b = a._retryCache = new Hi()), b;
    default:
      throw Error(u(435, a.tag));
  }
}
function oj(a, b) {
  var c = nj(a);
  b.forEach(function(d) {
    var e = pj.bind(null, a, d);
    c.has(d) || (c.add(d), d.then(e, e));
  });
}
function qj(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h2 = g;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 27:
              case 5:
                hj = h2.stateNode;
                ij = false;
                break a;
              case 3:
                hj = h2.stateNode.containerInfo;
                ij = true;
                break a;
              case 4:
                hj = h2.stateNode.containerInfo;
                ij = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === hj)
          throw Error(u(160));
        kj(f2, g, e);
        hj = null;
        ij = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (n2) {
        X(e, b, n2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      rj(b, a), b = b.sibling;
}
var sj = null;
function rj(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      qj(b, a);
      tj(a);
      if (d & 4) {
        try {
          Ui(3, a, a.return), Vi(3, a);
        } catch (r2) {
          X(a, a.return, r2);
        }
        try {
          Ui(5, a, a.return);
        } catch (r2) {
          X(a, a.return, r2);
        }
      }
      break;
    case 1:
      qj(b, a);
      tj(a);
      d & 512 && null !== c && Ki(c, c.return);
      d & 64 && Fi && (a = a.updateQueue, null !== a && (c = a.callbacks, null !== c && (d = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = null === d ? c : d.concat(c))));
      break;
    case 26:
      var e = sj;
      qj(b, a);
      tj(a);
      d & 512 && null !== c && Ki(c, c.return);
      if (d & 4) {
        if (b = null !== c ? c.memoizedState : null, d = a.memoizedState, null === c)
          if (null === d)
            if (null === a.stateNode) {
              a: {
                c = a.type;
                d = a.memoizedProps;
                b = e.ownerDocument || e;
                b:
                  switch (c) {
                    case "title":
                      e = b.getElementsByTagName("title")[0];
                      if (!e || e[Nb] || e[Gb] || "http://www.w3.org/2000/svg" === e.namespaceURI || e.hasAttribute("itemprop"))
                        e = b.createElement(c), b.head.insertBefore(e, b.querySelector("head > title"));
                      bi(e, c, d);
                      e[Gb] = a;
                      Vb(e);
                      c = e;
                      break a;
                    case "link":
                      var f2 = uj("link", "href", b).get(c + (d.href || ""));
                      if (f2) {
                        for (var g = 0; g < f2.length; g++)
                          if (e = f2[g], e.getAttribute("href") === (null == d.href ? null : d.href) && e.getAttribute("rel") === (null == d.rel ? null : d.rel) && e.getAttribute("title") === (null == d.title ? null : d.title) && e.getAttribute("crossorigin") === (null == d.crossOrigin ? null : d.crossOrigin)) {
                            f2.splice(g, 1);
                            break b;
                          }
                      }
                      e = b.createElement(c);
                      bi(e, c, d);
                      b.head.appendChild(e);
                      break;
                    case "meta":
                      if (f2 = uj("meta", "content", b).get(c + (d.content || ""))) {
                        for (g = 0; g < f2.length; g++)
                          if (e = f2[g], e.getAttribute("content") === (null == d.content ? null : "" + d.content) && e.getAttribute("name") === (null == d.name ? null : d.name) && e.getAttribute("property") === (null == d.property ? null : d.property) && e.getAttribute("http-equiv") === (null == d.httpEquiv ? null : d.httpEquiv) && e.getAttribute("charset") === (null == d.charSet ? null : d.charSet)) {
                            f2.splice(g, 1);
                            break b;
                          }
                      }
                      e = b.createElement(c);
                      bi(e, c, d);
                      b.head.appendChild(e);
                      break;
                    default:
                      throw Error(u(468, c));
                  }
                e[Gb] = a;
                Vb(e);
                c = e;
              }
              a.stateNode = c;
            } else
              vj(e, a.type, a.stateNode);
          else
            a.stateNode = wj(e, d, a.memoizedProps);
        else if (b !== d)
          null === b ? null !== c.stateNode && (c = c.stateNode, c.parentNode.removeChild(c)) : b.count--, null === d ? vj(e, a.type, a.stateNode) : wj(e, d, a.memoizedProps);
        else if (null === d && null !== a.stateNode) {
          a.updateQueue = null;
          try {
            var h2 = a.stateNode, k2 = a.memoizedProps;
            xj(h2, a.type, c.memoizedProps, k2);
            h2[Hb] = k2;
          } catch (r2) {
            X(a, a.return, r2);
          }
        }
      }
      break;
    case 27:
      if (d & 4 && null === a.alternate) {
        e = a.stateNode;
        f2 = a.memoizedProps;
        for (g = e.firstChild; g; ) {
          var n2 = g.nextSibling, t2 = g.nodeName;
          g[Nb] || "HEAD" === t2 || "BODY" === t2 || "SCRIPT" === t2 || "STYLE" === t2 || "LINK" === t2 && "stylesheet" === g.rel.toLowerCase() || e.removeChild(g);
          g = n2;
        }
        g = a.type;
        for (n2 = e.attributes; n2.length; )
          e.removeAttributeNode(n2[0]);
        bi(e, g, f2);
        e[Gb] = a;
        e[Hb] = f2;
      }
    case 5:
      qj(b, a);
      tj(a);
      d & 512 && null !== c && Ki(c, c.return);
      if (a.flags & 32) {
        b = a.stateNode;
        try {
          Cc(b, "");
        } catch (r2) {
          X(a, a.return, r2);
        }
      }
      if (d & 4 && (d = a.stateNode, null != d)) {
        b = a.memoizedProps;
        c = null !== c ? c.memoizedProps : b;
        e = a.type;
        a.updateQueue = null;
        try {
          xj(d, e, c, b), d[Hb] = b;
        } catch (r2) {
          X(a, a.return, r2);
        }
      }
      break;
    case 6:
      qj(b, a);
      tj(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(u(162));
        c = a.stateNode;
        d = a.memoizedProps;
        try {
          c.nodeValue = d;
        } catch (r2) {
          X(
            a,
            a.return,
            r2
          );
        }
      }
      break;
    case 3:
      yj = null;
      e = sj;
      sj = zj(b.containerInfo);
      qj(b, a);
      sj = e;
      tj(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          mj(b.containerInfo);
        } catch (r2) {
          X(a, a.return, r2);
        }
      break;
    case 4:
      c = sj;
      sj = zj(a.stateNode.containerInfo);
      qj(b, a);
      tj(a);
      sj = c;
      break;
    case 13:
      qj(b, a);
      tj(a);
      a.child.flags & 8192 && null !== a.memoizedState !== (null !== c && null !== c.memoizedState) && (Aj = Ya());
      d & 4 && (c = a.updateQueue, null !== c && (a.updateQueue = null, oj(a, c)));
      break;
    case 22:
      d & 512 && null !== c && Ki(c, c.return);
      h2 = null !== a.memoizedState;
      k2 = null !== c && null !== c.memoizedState;
      if (a.mode & 1) {
        var w2 = Fi, q2 = Gi;
        Fi = w2 || h2;
        Gi = q2 || k2;
        qj(b, a);
        Gi = q2;
        Fi = w2;
      } else
        qj(b, a);
      tj(a);
      b = a.stateNode;
      b._current = a;
      b._visibility &= -3;
      b._visibility |= b._pendingVisibility & 2;
      if (d & 8192 && (b._visibility = h2 ? b._visibility & -2 : b._visibility | 1, h2 && (b = Fi || Gi, null === c || k2 || b || 0 !== (a.mode & 1) && Bj(a)), null === a.memoizedProps || "manual" !== a.memoizedProps.mode))
        a:
          for (c = null, b = a; ; ) {
            if (5 === b.tag || 26 === b.tag || 27 === b.tag) {
              if (null === c) {
                c = b;
                try {
                  e = b.stateNode, h2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty(
                    "display",
                    "none",
                    "important"
                  ) : f2.display = "none") : (g = b.stateNode, n2 = b.memoizedProps.style, t2 = void 0 !== n2 && null !== n2 && n2.hasOwnProperty("display") ? n2.display : null, g.style.display = null == t2 || "boolean" === typeof t2 ? "" : ("" + t2).trim());
                } catch (r2) {
                  X(a, a.return, r2);
                }
              }
            } else if (6 === b.tag) {
              if (null === c)
                try {
                  b.stateNode.nodeValue = h2 ? "" : b.memoizedProps;
                } catch (r2) {
                  X(a, a.return, r2);
                }
            } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
              b.child.return = b;
              b = b.child;
              continue;
            }
            if (b === a)
              break a;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a)
                break a;
              c === b && (c = null);
              b = b.return;
            }
            c === b && (c = null);
            b.sibling.return = b.return;
            b = b.sibling;
          }
      d & 4 && (c = a.updateQueue, null !== c && (d = c.retryQueue, null !== d && (c.retryQueue = null, oj(a, d))));
      break;
    case 19:
      qj(b, a);
      tj(a);
      d & 4 && (c = a.updateQueue, null !== c && (a.updateQueue = null, oj(a, c)));
      break;
    case 21:
      break;
    default:
      qj(b, a), tj(a);
  }
}
function tj(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      if (27 !== a.tag) {
        b: {
          for (var c = a.return; null !== c; ) {
            if (dj(c)) {
              var d = c;
              break b;
            }
            c = c.return;
          }
          throw Error(u(160));
        }
        switch (d.tag) {
          case 27:
            var e = d.stateNode, f2 = ej(a);
            gj(a, f2, e);
            break;
          case 5:
            var g = d.stateNode;
            d.flags & 32 && (Cc(g, ""), d.flags &= -33);
            var h2 = ej(a);
            gj(a, h2, g);
            break;
          case 3:
          case 4:
            var k2 = d.stateNode.containerInfo, n2 = ej(a);
            fj(a, n2, k2);
            break;
          default:
            throw Error(u(161));
        }
      }
    } catch (t2) {
      X(a, a.return, t2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function $i(a, b) {
  if (b.subtreeFlags & 8772)
    for (b = b.child; null !== b; )
      Zi(a, b.alternate, b), b = b.sibling;
}
function Bj(a) {
  for (a = a.child; null !== a; ) {
    var b = a;
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ui(4, b, b.return);
        Bj(b);
        break;
      case 1:
        Ki(b, b.return);
        var c = b.stateNode;
        if ("function" === typeof c.componentWillUnmount) {
          var d = b, e = b.return;
          try {
            var f2 = d;
            c.props = f2.memoizedProps;
            c.state = f2.memoizedState;
            c.componentWillUnmount();
          } catch (g) {
            X(d, e, g);
          }
        }
        Bj(b);
        break;
      case 26:
      case 27:
      case 5:
        Ki(b, b.return);
        Bj(b);
        break;
      case 22:
        Ki(b, b.return);
        null === b.memoizedState && Bj(b);
        break;
      default:
        Bj(b);
    }
    a = a.sibling;
  }
}
function bj(a, b, c) {
  c = c && 0 !== (b.subtreeFlags & 8772);
  for (b = b.child; null !== b; ) {
    var d = b.alternate, e = a, f2 = b, g = f2.flags;
    switch (f2.tag) {
      case 0:
      case 11:
      case 15:
        bj(e, f2, c);
        Wi(f2, 4);
        break;
      case 1:
        bj(e, f2, c);
        e = f2.stateNode;
        if ("function" === typeof e.componentDidMount)
          try {
            e.componentDidMount();
          } catch (k2) {
            X(f2, f2.return, k2);
          }
        d = f2.updateQueue;
        if (null !== d) {
          var h2 = d.shared.hiddenCallbacks;
          if (null !== h2)
            for (d.shared.hiddenCallbacks = null, d = 0; d < h2.length; d++)
              se(h2[d], e);
        }
        c && g & 64 && Xi(f2);
        Ji(f2, f2.return);
        break;
      case 26:
      case 27:
      case 5:
        bj(e, f2, c);
        c && null === d && g & 4 && Yi(f2);
        Ji(f2, f2.return);
        break;
      case 12:
        bj(e, f2, c);
        break;
      case 13:
        bj(e, f2, c);
        c && g & 4 && aj(e, f2);
        break;
      case 22:
        null === f2.memoizedState && bj(e, f2, c);
        Ji(f2, f2.return);
        break;
      default:
        bj(e, f2, c);
    }
    b = b.sibling;
  }
}
function Cj(a, b) {
  try {
    Vi(b, a);
  } catch (c) {
    X(a, a.return, c);
  }
}
function Dj(a, b) {
  var c = null;
  null !== a && null !== a.memoizedState && null !== a.memoizedState.cachePool && (c = a.memoizedState.cachePool.pool);
  a = null;
  null !== b.memoizedState && null !== b.memoizedState.cachePool && (a = b.memoizedState.cachePool.pool);
  a !== c && (null != a && a.refCount++, null != c && pi(c));
}
function Ej(a, b) {
  a = null;
  null !== b.alternate && (a = b.alternate.memoizedState.cache);
  b = b.memoizedState.cache;
  b !== a && (b.refCount++, null != a && pi(a));
}
function Fj(a, b, c, d) {
  if (b.subtreeFlags & 10256)
    for (b = b.child; null !== b; )
      Gj(a, b, c, d), b = b.sibling;
}
function Gj(a, b, c, d) {
  var e = b.flags;
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
      Fj(a, b, c, d);
      e & 2048 && Cj(b, 9);
      break;
    case 3:
      Fj(a, b, c, d);
      e & 2048 && (a = null, null !== b.alternate && (a = b.alternate.memoizedState.cache), b = b.memoizedState.cache, b !== a && (b.refCount++, null != a && pi(a)));
      break;
    case 23:
      break;
    case 22:
      var f2 = b.stateNode;
      null !== b.memoizedState ? f2._visibility & 4 ? Fj(a, b, c, d) : b.mode & 1 ? Hj(a, b) : (f2._visibility |= 4, Fj(a, b, c, d)) : f2._visibility & 4 ? Fj(a, b, c, d) : (f2._visibility |= 4, Ij(a, b, c, d, 0 !== (b.subtreeFlags & 10256)));
      e & 2048 && Dj(
        b.alternate,
        b
      );
      break;
    case 24:
      Fj(a, b, c, d);
      e & 2048 && Ej(b.alternate, b);
      break;
    default:
      Fj(a, b, c, d);
  }
}
function Ij(a, b, c, d, e) {
  e = e && 0 !== (b.subtreeFlags & 10256);
  for (b = b.child; null !== b; ) {
    var f2 = a, g = b, h2 = c, k2 = d, n2 = g.flags;
    switch (g.tag) {
      case 0:
      case 11:
      case 15:
        Ij(f2, g, h2, k2, e);
        Cj(g, 8);
        break;
      case 23:
        break;
      case 22:
        var t2 = g.stateNode;
        null !== g.memoizedState ? t2._visibility & 4 ? Ij(f2, g, h2, k2, e) : g.mode & 1 ? Hj(f2, g) : (t2._visibility |= 4, Ij(f2, g, h2, k2, e)) : (t2._visibility |= 4, Ij(f2, g, h2, k2, e));
        e && n2 & 2048 && Dj(g.alternate, g);
        break;
      case 24:
        Ij(f2, g, h2, k2, e);
        e && n2 & 2048 && Ej(g.alternate, g);
        break;
      default:
        Ij(f2, g, h2, k2, e);
    }
    b = b.sibling;
  }
}
function Hj(a, b) {
  if (b.subtreeFlags & 10256)
    for (b = b.child; null !== b; ) {
      var c = a, d = b, e = d.flags;
      switch (d.tag) {
        case 22:
          Hj(c, d);
          e & 2048 && Dj(d.alternate, d);
          break;
        case 24:
          Hj(c, d);
          e & 2048 && Ej(d.alternate, d);
          break;
        default:
          Hj(c, d);
      }
      b = b.sibling;
    }
}
var Jj = 8192;
function Kj(a) {
  if (a.subtreeFlags & Jj)
    for (a = a.child; null !== a; )
      Lj(a), a = a.sibling;
}
function Lj(a) {
  switch (a.tag) {
    case 26:
      Kj(a);
      a.flags & Jj && null !== a.memoizedState && Mj(sj, a.memoizedState, a.memoizedProps);
      break;
    case 5:
      Kj(a);
      break;
    case 3:
    case 4:
      var b = sj;
      sj = zj(a.stateNode.containerInfo);
      Kj(a);
      sj = b;
      break;
    case 22:
      null === a.memoizedState && (b = a.alternate, null !== b && null !== b.memoizedState ? (b = Jj, Jj = 16777216, Kj(a), Jj = b) : Kj(a));
      break;
    default:
      Kj(a);
  }
}
function Nj(a) {
  var b = a.alternate;
  if (null !== b && (a = b.child, null !== a)) {
    b.child = null;
    do
      b = a.sibling, a.sibling = null, a = b;
    while (null !== a);
  }
}
function Oj(a) {
  var b = a.deletions;
  if (0 !== (a.flags & 16)) {
    if (null !== b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        Ii = d;
        Pj(d, a);
      }
    Nj(a);
  }
  if (a.subtreeFlags & 10256)
    for (a = a.child; null !== a; )
      Qj(a), a = a.sibling;
}
function Qj(a) {
  switch (a.tag) {
    case 0:
    case 11:
    case 15:
      Oj(a);
      a.flags & 2048 && Ui(9, a, a.return);
      break;
    case 22:
      var b = a.stateNode;
      null !== a.memoizedState && b._visibility & 4 && (null === a.return || 13 !== a.return.tag) ? (b._visibility &= -5, Rj(a)) : Oj(a);
      break;
    default:
      Oj(a);
  }
}
function Rj(a) {
  var b = a.deletions;
  if (0 !== (a.flags & 16)) {
    if (null !== b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        Ii = d;
        Pj(d, a);
      }
    Nj(a);
  }
  for (a = a.child; null !== a; ) {
    b = a;
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
        Ui(8, b, b.return);
        Rj(b);
        break;
      case 22:
        c = b.stateNode;
        c._visibility & 4 && (c._visibility &= -5, Rj(b));
        break;
      default:
        Rj(b);
    }
    a = a.sibling;
  }
}
function Pj(a, b) {
  for (; null !== Ii; ) {
    var c = Ii;
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
        Ui(8, c, b);
        break;
      case 23:
      case 22:
        if (null !== c.memoizedState && null !== c.memoizedState.cachePool) {
          var d = c.memoizedState.cachePool.pool;
          null != d && d.refCount++;
        }
        break;
      case 24:
        pi(c.memoizedState.cache);
    }
    d = c.child;
    if (null !== d)
      d.return = c, Ii = d;
    else
      a:
        for (c = a; null !== Ii; ) {
          d = Ii;
          var e = d.sibling, f2 = d.return;
          cj(d);
          if (d === c) {
            Ii = null;
            break a;
          }
          if (null !== e) {
            e.return = f2;
            Ii = e;
            break a;
          }
          Ii = f2;
        }
  }
}
var Sj = { getCacheSignal: function() {
  return Gf(U).controller.signal;
}, getCacheForType: function(a) {
  var b = Gf(U), c = b.data.get(a);
  void 0 === c && (c = a(), b.data.set(a, c));
  return c;
} }, Tj = "function" === typeof WeakMap ? WeakMap : Map, Uj = ea.ReactCurrentDispatcher, Vj = ea.ReactCurrentCache, Wj = ea.ReactCurrentOwner, Xj = ea.ReactCurrentBatchConfig, M = 0, K = null, Y = null, J = 0, L = 0, Yj = null, Zj = false, Ve = 0, T = 0, re = 0, ak = 0, bk = 0, Jh = 0, ck = null, dk = null, ek = false, fk = false, Aj = 0, Ci = Infinity, gk = null, eh = null, hk = false, ik = null, jk = 0, kk = 0, lk = null, mk = 0, nk = null;
function Gg(a) {
  if (0 === (a.mode & 1))
    return 2;
  if (0 !== (M & 2) && 0 !== J)
    return J & -J;
  if (null !== Lg())
    return a = ce, 0 !== a ? a : $d();
  a = F;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 32 : ok(a.type);
  return a;
}
function yg() {
  0 === Jh && (Jh = 0 === (J & 536870912) || G ? ub() : 536870912);
  var a = Ye.current;
  null !== a && (a.flags |= 32);
  return Jh;
}
function Vf(a, b, c) {
  if (a === K && 2 === L || null !== a.cancelPendingCommit)
    pk(a, 0), qk(a, J, Jh);
  rk(a, c);
  if (0 === (M & 2) || a !== K)
    a === K && (0 === (M & 2) && (ak |= c), 4 === T && qk(a, J, Jh)), Rd(a), 2 === c && 0 === M && 0 === (b.mode & 1) && (Ci = Ya() + 500, Ud(true));
}
function Yd(a, b) {
  if (0 !== (M & 6))
    throw Error(u(327));
  var c = a.callbackNode;
  if (sk() && a.callbackNode !== c)
    return null;
  var d = rb(a, a === K ? J : 0);
  if (0 === d)
    return null;
  var e = 0 === (d & 60) && 0 === (d & a.expiredLanes) && !b;
  b = e ? tk(a, d) : uk(a, d);
  if (0 !== b) {
    var f2 = e;
    do {
      if (6 === b)
        qk(a, d, 0);
      else {
        e = a.current.alternate;
        if (f2 && !vk(e)) {
          b = uk(a, d);
          f2 = false;
          continue;
        }
        if (2 === b) {
          f2 = d;
          var g = tb(a, f2);
          0 !== g && (d = g, b = wk(a, f2, g));
        }
        if (1 === b) {
          pk(a, 0);
          qk(a, d, 0);
          break;
        }
        a.finishedWork = e;
        a.finishedLanes = d;
        a: {
          f2 = a;
          switch (b) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((d & 4194176) === d) {
                qk(f2, d, Jh);
                break a;
              }
              break;
            case 2:
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((d & 62914560) === d && (b = Aj + 300 - Ya(), 10 < b)) {
            qk(f2, d, Jh);
            if (0 !== rb(f2, 0))
              break a;
            f2.timeoutHandle = xk(yk.bind(null, f2, e, dk, gk, ek, d, Jh), b);
            break a;
          }
          yk(f2, e, dk, gk, ek, d, Jh);
        }
      }
      break;
    } while (1);
  }
  Rd(a);
  Xd(a, Ya());
  a = a.callbackNode === c ? Yd.bind(null, a) : null;
  return a;
}
function wk(a, b, c) {
  var d = ck, e = a.current.memoizedState.isDehydrated;
  e && (pk(a, c).flags |= 256);
  c = uk(a, c);
  if (2 !== c) {
    if (Zj && !e)
      return a.errorRecoveryDisabledLanes |= b, ak |= b, 4;
    a = dk;
    dk = d;
    null !== a && zi(a);
  }
  return c;
}
function zi(a) {
  null === dk ? dk = a : dk.push.apply(dk, a);
}
function yk(a, b, c, d, e, f2, g) {
  if (0 === (f2 & 42) && (zk = { stylesheets: null, count: 0, unsuspend: Ak }, Lj(b), b = Bk(), null !== b)) {
    a.cancelPendingCommit = b(Ck.bind(null, a, c, d, e));
    qk(a, f2, g);
    return;
  }
  Ck(a, c, d, e, g);
}
function vk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!Zc(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function rk(a, b) {
  a.pendingLanes |= b;
  268435456 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  M & 2 ? ek = true : M & 4 && (fk = true);
  Kd();
}
function qk(a, b, c) {
  b &= ~bk;
  b &= ~ak;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (var d = a.expirationTimes, e = b; 0 < e; ) {
    var f2 = 31 - lb(e), g = 1 << f2;
    d[f2] = -1;
    e &= ~g;
  }
  0 !== c && yb(a, c, b);
}
function Vd(a, b) {
  if (0 !== (M & 6))
    throw Error(u(327));
  if (sk())
    return Rd(a), null;
  var c = uk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = b, e = tb(a, d);
    0 !== e && (b = e, c = wk(a, d, e));
  }
  if (1 === c)
    return pk(a, 0), qk(a, b, 0), Rd(a), null;
  if (6 === c)
    return qk(a, b, Jh), Rd(a), null;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Ck(a, dk, gk, ek, Jh);
  Rd(a);
  return null;
}
function Dk(a, b) {
  var c = M;
  M |= 1;
  try {
    return a(b);
  } finally {
    M = c, 0 === M && (Ci = Ya() + 500, Ud(true));
  }
}
function Ek(a) {
  null !== ik && 0 === ik.tag && 0 === (M & 6) && sk();
  var b = M;
  M |= 1;
  var c = Xj.transition, d = F;
  try {
    if (Xj.transition = null, F = 2, a)
      return a();
  } finally {
    F = d, Xj.transition = c, M = b, 0 === (M & 6) && Ud(false);
  }
}
function Fk() {
  if (null !== Y) {
    if (0 === L)
      var a = Y.return;
    else
      a = Y, ji(), Cf(a), De = null, Ee = 0, a = Y;
    for (; null !== a; )
      Ei(a.alternate, a), a = a.return;
    Y = null;
  }
}
function pk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gk(c));
  c = a.cancelPendingCommit;
  null !== c && (a.cancelPendingCommit = null, c());
  Fk();
  K = a;
  Y = c = Ke(a.current, null);
  J = b;
  L = 0;
  Yj = null;
  Zj = false;
  Jh = bk = ak = re = T = 0;
  dk = ck = null;
  ek = false;
  0 !== (b & 8) && (b |= b & 32);
  var d = a.entangledLanes;
  if (0 !== d)
    for (a = a.entanglements, d &= b; 0 < d; ) {
      var e = 31 - lb(d), f2 = 1 << e;
      b |= a[e];
      d &= ~f2;
    }
  Ve = b;
  Ed();
  return c;
}
function Hk(a, b) {
  N = null;
  ff.current = wf;
  Wj.current = null;
  b === ve ? (b = Ce(), L = vi() && 0 === (re & 134217727) && 0 === (ak & 134217727) ? 2 : 3) : b === we ? (b = Ce(), L = 4) : L = b === mh ? 8 : null !== b && "object" === typeof b && "function" === typeof b.then ? 6 : 1;
  Yj = b;
  null === Y && (T = 1, $g(a, Ug(b, a.current)));
}
function vi() {
  var a = Ye.current;
  return null === a ? true : (J & 4194176) === J ? null === Ze ? true : false : (J & 62914560) === J || 0 !== (J & 536870912) ? a === Ze : false;
}
function Ik() {
  var a = Uj.current;
  Uj.current = wf;
  return null === a ? wf : a;
}
function Jk() {
  var a = Vj.current;
  Vj.current = Sj;
  return a;
}
function ih() {
  T = 4;
  0 === (re & 134217727) && 0 === (ak & 134217727) || null === K || qk(K, J, Jh);
}
function kh(a) {
  4 !== T && (T = 2);
  null === ck ? ck = [a] : ck.push(a);
}
function uk(a, b) {
  var c = M;
  M |= 2;
  var d = Ik(), e = Jk();
  if (K !== a || J !== b)
    gk = null, pk(a, b);
  b = false;
  a:
    do
      try {
        if (0 !== L && null !== Y) {
          var f2 = Y, g = Yj;
          switch (L) {
            case 8:
              Fk();
              T = 6;
              break a;
            case 3:
            case 2:
              b || null !== Ye.current || (b = true);
            default:
              L = 0, Yj = null, Kk(a, f2, g);
          }
        }
        Lk();
        break;
      } catch (h2) {
        Hk(a, h2);
      }
    while (1);
  b && a.shellSuspendCounter++;
  ji();
  M = c;
  Uj.current = d;
  Vj.current = e;
  if (null !== Y)
    throw Error(u(261));
  K = null;
  J = 0;
  Ed();
  return T;
}
function Lk() {
  for (; null !== Y; )
    Mk(Y);
}
function tk(a, b) {
  var c = M;
  M |= 2;
  var d = Ik(), e = Jk();
  if (K !== a || J !== b)
    gk = null, Ci = Ya() + 500, pk(a, b);
  a:
    do
      try {
        if (0 !== L && null !== Y) {
          b = Y;
          var f2 = Yj;
          b:
            switch (L) {
              case 1:
                L = 0;
                Yj = null;
                Kk(a, b, f2);
                break;
              case 2:
                if (ye(f2)) {
                  L = 0;
                  Yj = null;
                  Nk(b);
                  break;
                }
                b = function() {
                  2 === L && K === a && (L = 7);
                  Rd(a);
                };
                f2.then(b, b);
                break a;
              case 3:
                L = 7;
                break a;
              case 4:
                L = 5;
                break a;
              case 7:
                ye(f2) ? (L = 0, Yj = null, Nk(b)) : (L = 0, Yj = null, Kk(a, b, f2));
                break;
              case 5:
                switch (Y.tag) {
                  case 5:
                  case 26:
                  case 27:
                    b = Y;
                    L = 0;
                    Yj = null;
                    var g = b.sibling;
                    if (null !== g)
                      Y = g;
                    else {
                      var h2 = b.return;
                      null !== h2 ? (Y = h2, Ok(h2)) : Y = null;
                    }
                    break b;
                }
                L = 0;
                Yj = null;
                Kk(a, b, f2);
                break;
              case 6:
                L = 0;
                Yj = null;
                Kk(a, b, f2);
                break;
              case 8:
                Fk();
                T = 6;
                break a;
              default:
                throw Error(u(462));
            }
        }
        Pk();
        break;
      } catch (k2) {
        Hk(a, k2);
      }
    while (1);
  ji();
  Uj.current = d;
  Vj.current = e;
  M = c;
  if (null !== Y)
    return 0;
  K = null;
  J = 0;
  Ed();
  return T;
}
function Pk() {
  for (; null !== Y && !Wa(); )
    Mk(Y);
}
function Mk(a) {
  var b = Xh(a.alternate, a, Ve);
  a.memoizedProps = a.pendingProps;
  null === b ? Ok(a) : Y = b;
  Wj.current = null;
}
function Nk(a) {
  var b = a.alternate;
  switch (a.tag) {
    case 2:
      a.tag = 0;
    case 15:
    case 0:
      var c = a.type, d = a.pendingProps;
      d = a.elementType === c ? d : Mg(c, d);
      b = Ah(b, a, d, c, void 0, J);
      break;
    case 11:
      c = a.type.render;
      d = a.pendingProps;
      d = a.elementType === c ? d : Mg(c, d);
      b = Ah(b, a, d, c, a.ref, J);
      break;
    case 5:
      Cf(a);
    default:
      Ei(b, a), a = Y = Bi(a, Ve), b = Xh(b, a, Ve);
  }
  a.memoizedProps = a.pendingProps;
  null === b ? Ok(a) : Y = b;
  Wj.current = null;
}
function Kk(a, b, c) {
  ji();
  Cf(b);
  De = null;
  Ee = 0;
  var d = b.return;
  try {
    if (hh(a, d, b, c, J)) {
      T = 1;
      $g(a, Ug(c, a.current));
      Y = null;
      return;
    }
  } catch (e) {
    if (null !== d)
      throw Y = d, e;
    T = 1;
    $g(a, Ug(c, a.current));
    Y = null;
    return;
  }
  if (b.flags & 32768)
    a: {
      a = b;
      do {
        b = Di(a.alternate, a);
        if (null !== b) {
          b.flags &= 32767;
          Y = b;
          break a;
        }
        a = a.return;
        null !== a && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null);
        Y = a;
      } while (null !== a);
      T = 6;
      Y = null;
    }
  else
    Ok(b);
}
function Ok(a) {
  var b = a;
  do {
    a = b.return;
    var c = yi(b.alternate, b, Ve);
    if (null !== c) {
      Y = c;
      return;
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Ck(a, b, c, d, e) {
  var f2 = F, g = Xj.transition;
  try {
    Xj.transition = null, F = 2, Qk(a, b, c, d, f2, e);
  } finally {
    Xj.transition = g, F = f2;
  }
  return null;
}
function Qk(a, b, c, d, e, f2) {
  do
    sk();
  while (null !== ik);
  if (0 !== (M & 6))
    throw Error(u(327));
  var g = a.finishedWork, h2 = a.finishedLanes;
  if (null === g)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (g === a.current)
    throw Error(u(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  a.cancelPendingCommit = null;
  var k2 = g.lanes | g.childLanes;
  k2 |= Dd;
  xb(a, k2, f2);
  fk = false;
  a === K && (Y = K = null, J = 0);
  0 === (g.subtreeFlags & 10256) && 0 === (g.flags & 10256) || hk || (hk = true, kk = k2, lk = c, Rk(bb, function() {
    sk();
    return null;
  }));
  c = 0 !== (g.flags & 15990);
  if (0 !== (g.subtreeFlags & 15990) || c) {
    c = Xj.transition;
    Xj.transition = null;
    f2 = F;
    F = 2;
    var n2 = M;
    M |= 4;
    Wj.current = null;
    Ni(a, g);
    rj(g, a);
    Sk(Si);
    Pi = !!Oi;
    Si = Oi = null;
    a.current = g;
    Zi(a, g.alternate, g);
    Xa();
    M = n2;
    F = f2;
    Xj.transition = c;
  } else
    a.current = g;
  hk ? (hk = false, ik = a, jk = h2) : Tk(a, k2);
  k2 = a.pendingLanes;
  0 === k2 && (eh = null);
  ib(g.stateNode);
  Rd(a);
  if (null !== b)
    for (e = a.onRecoverableError, g = 0; g < b.length; g++)
      k2 = b[g], c = { digest: k2.digest, componentStack: k2.stack }, e(k2.value, c);
  0 !== (jk & 3) && 0 !== a.tag && sk();
  k2 = a.pendingLanes;
  d || fk || 0 !== (h2 & 4194218) && 0 !== (k2 & 42) ? a === nk ? mk++ : (mk = 0, nk = a) : mk = 0;
  Ud(false);
  return null;
}
function Tk(a, b) {
  0 === (a.pooledCacheLanes &= b) && (b = a.pooledCache, null != b && (a.pooledCache = null, pi(b)));
}
function sk() {
  if (null !== ik) {
    var a = ik, b = kk;
    kk = 0;
    var c = Db(jk), d = 32 > c ? 32 : c;
    c = Xj.transition;
    var e = F;
    try {
      Xj.transition = null;
      F = d;
      if (null === ik)
        var f2 = false;
      else {
        d = lk;
        lk = null;
        var g = ik, h2 = jk;
        ik = null;
        jk = 0;
        if (0 !== (M & 6))
          throw Error(u(331));
        var k2 = M;
        M |= 4;
        Qj(g.current);
        Gj(g, g.current, h2, d);
        M = k2;
        Ud(false);
        if (hb && "function" === typeof hb.onPostCommitFiberRoot)
          try {
            hb.onPostCommitFiberRoot(gb, g);
          } catch (n2) {
          }
        f2 = true;
      }
      return f2;
    } finally {
      F = e, Xj.transition = c, Tk(a, b);
    }
  }
  return false;
}
function Uk(a, b, c) {
  b = Ug(c, b);
  b = bh(a.stateNode, b, 2);
  a = le(a, b, 2);
  null !== a && (rk(a, 2), Rd(a));
}
function X(a, b, c) {
  if (3 === a.tag)
    Uk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Uk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === eh || !eh.has(d))) {
          a = Ug(c, a);
          c = ch(2);
          d = le(b, c, 2);
          null !== d && (dh(c, d, b, a), rk(d, 2), Rd(d));
          break;
        }
      }
      b = b.return;
    }
}
function jh(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Tj();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (Zj = true, e.add(c), a = Vk.bind(null, a, b, c), b.then(a, a));
}
function Vk(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  a.pingedLanes |= a.suspendedLanes & c;
  M & 2 ? ek = true : M & 4 && (fk = true);
  Kd();
  K === a && (J & c) === c && (4 === T || 3 === T && (J & 62914560) === J && 300 > Ya() - Aj ? 0 === (M & 2) && pk(a, 0) : bk |= c);
  Rd(a);
}
function Wk(a, b) {
  0 === b && (b = 0 === (a.mode & 1) ? 2 : vb());
  a = Jd(a, b);
  null !== a && (rk(a, b), Rd(a));
}
function Qh(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Wk(a, c);
}
function pj(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    case 22:
      d = a.stateNode._retryCache;
      break;
    default:
      throw Error(u(314));
  }
  null !== d && d.delete(b);
  Wk(a, c);
}
function Kd() {
  if (50 < mk)
    throw mk = 0, nk = null, M & 2 && null !== K && (K.errorRecoveryDisabledLanes |= J), Error(u(185));
}
function Rk(a, b) {
  return Ua(a, b);
}
function Xk(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Lh(a, b, c, d) {
  return new Xk(a, b, c, d);
}
function sh(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Yh(a) {
  if ("function" === typeof a)
    return sh(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === wa)
      return 11;
    if (a === za)
      return 14;
  }
  return 2;
}
function Ke(a, b) {
  var c = a.alternate;
  null === c ? (c = Lh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 31457280;
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
  c.refCleanup = a.refCleanup;
  return c;
}
function Bi(a, b) {
  a.flags &= 31457282;
  var c = a.alternate;
  null === c ? (a.childLanes = 0, a.lanes = b, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, b = c.dependencies, a.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext });
  return a;
}
function Me(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    sh(a) && (g = 1);
  else if ("string" === typeof a)
    g = Yk(a, c, Ja.current) ? 26 : "html" === a || "head" === a || "body" === a ? 27 : 5;
  else
    a:
      switch (a) {
        case qa:
          return Oe(c.children, e, f2, b);
        case ra:
          g = 8;
          e |= 8;
          0 !== (e & 1) && (e |= 16);
          break;
        case sa:
          return a = Lh(12, c, b, e | 2), a.elementType = sa, a.lanes = f2, a;
        case xa:
          return a = Lh(13, c, b, e), a.elementType = xa, a.lanes = f2, a;
        case ya:
          return a = Lh(19, c, b, e), a.elementType = ya, a.lanes = f2, a;
        case Ca:
          return Ph(c, e, f2, b);
        case Da:
        case Ba:
        case Ea:
          return a = Lh(
            24,
            c,
            b,
            e
          ), a.elementType = Ea, a.lanes = f2, a;
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case ta:
              case va:
                g = 10;
                break a;
              case ua:
                g = 9;
                break a;
              case wa:
                g = 11;
                break a;
              case za:
                g = 14;
                break a;
              case Aa:
                g = 16;
                d = null;
                break a;
            }
          throw Error(u(130, null == a ? a : typeof a, ""));
      }
  b = Lh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Oe(a, b, c, d) {
  a = Lh(7, a, d, b);
  a.lanes = c;
  return a;
}
function Ph(a, b, c, d) {
  a = Lh(22, a, d, b);
  a.elementType = Ca;
  a.lanes = c;
  var e = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() {
    var f2 = e._current;
    if (null === f2)
      throw Error(u(456));
    if (0 === (e._pendingVisibility & 2)) {
      var g = Jd(f2, 2);
      null !== g && (e._pendingVisibility |= 2, Vf(g, f2, 2));
    }
  }, attach: function() {
    var f2 = e._current;
    if (null === f2)
      throw Error(u(456));
    if (0 !== (e._pendingVisibility & 2)) {
      var g = Jd(f2, 2);
      null !== g && (e._pendingVisibility &= -3, Vf(g, f2, 2));
    }
  } };
  a.stateNode = e;
  return a;
}
function Le(a, b, c) {
  a = Lh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Ne(a, b, c) {
  b = Lh(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function Zk(a, b, c, d, e, f2, g, h2) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
  this.callbackPriority = 0;
  this.expirationTimes = wb(-1);
  this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = wb(0);
  this.hiddenUpdates = wb(null);
  this.identifierPrefix = d;
  this.onUncaughtError = e;
  this.onCaughtError = f2;
  this.onRecoverableError = g;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = h2;
  this.incompleteTransitions = /* @__PURE__ */ new Map();
}
function $k(a, b, c, d, e, f2, g, h2, k2, n2, t2, w2, q2) {
  a = new Zk(a, b, c, h2, k2, n2, t2, q2);
  1 === b ? (b = 1, true === f2 && (b |= 24)) : b = 0;
  f2 = Lh(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  b = Hg();
  b.refCount++;
  a.pooledCache = b;
  b.refCount++;
  f2.memoizedState = { element: d, isDehydrated: c, cache: b };
  ie(f2);
  return a;
}
function al(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: pa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function bl(a, b, c, d) {
  c = b.current;
  var e = Gg(c);
  null === b.context ? b.context = Xc : b.pendingContext = Xc;
  b = ke(e);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = le(c, b, e);
  null !== a && (Vf(a, c, e), me(a, c, e));
  return e;
}
function cl(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = qb(b.pendingLanes);
        0 !== c && (Ab(b, c), Rd(b), 0 === (M & 6) && (Ci = Ya() + 500, Ud(false)));
      }
      break;
    case 13:
      Ek(function() {
        var d = Jd(a, 2);
        null !== d && Vf(d, a, 2);
      }), dl(a, 2);
  }
}
function el(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function dl(a, b) {
  el(a, b);
  (a = a.alternate) && el(a, b);
}
function fl(a) {
  if (13 === a.tag) {
    var b = Jd(a, 67108864);
    null !== b && Vf(b, a, 67108864);
    dl(a, 67108864);
  }
}
function gl() {
  return null;
}
var hl = false;
function il(a, b, c) {
  if (hl)
    return a(b, c);
  hl = true;
  try {
    return Dk(a, b, c);
  } finally {
    if (hl = false, null !== Mc || null !== Nc)
      Ek(), Qc();
  }
}
function jl(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Tb(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
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
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(u(231, b, typeof c));
  return c;
}
var kl = false;
if ($b)
  try {
    var ll = {};
    Object.defineProperty(ll, "passive", { get: function() {
      kl = true;
    } });
    window.addEventListener("test", ll, ll);
    window.removeEventListener("test", ll, ll);
  } catch (a) {
    kl = false;
  }
function ml(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function nl() {
  return true;
}
function ol() {
  return false;
}
function pl(a) {
  function b(c, d, e, f2, g) {
    this._reactName = c;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var h2 in a)
      a.hasOwnProperty(h2) && (c = a[h2], this[h2] = c ? c(f2) : f2[h2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? nl : ol;
    this.isPropagationStopped = ol;
    return this;
  }
  C(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var c = this.nativeEvent;
    c && (c.preventDefault ? c.preventDefault() : "unknown" !== typeof c.returnValue && (c.returnValue = false), this.isDefaultPrevented = nl);
  }, stopPropagation: function() {
    var c = this.nativeEvent;
    c && (c.stopPropagation ? c.stopPropagation() : "unknown" !== typeof c.cancelBubble && (c.cancelBubble = true), this.isPropagationStopped = nl);
  }, persist: function() {
  }, isPersistent: nl });
  return b;
}
var ql = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, rl = pl(ql), sl = C({}, ql, { view: 0, detail: 0 }), tl = pl(sl), ul, vl, wl, yl = C({}, sl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xl, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== wl && (wl && "mousemove" === a.type ? (ul = a.screenX - wl.screenX, vl = a.screenY - wl.screenY) : vl = ul = 0, wl = a);
  return ul;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : vl;
} }), zl = pl(yl), Al = C({}, yl, { dataTransfer: 0 }), Bl = pl(Al), Cl = C({}, sl, { relatedTarget: 0 }), Dl = pl(Cl), El = C({}, ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fl = pl(El), Gl = C({}, ql, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Hl = pl(Gl), Il = C({}, ql, { data: 0 }), Jl = pl(Il), Kl = {
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
}, Ll = {
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
}, Ml = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nl(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Ml[a]) ? !!b[a] : false;
}
function xl() {
  return Nl;
}
var Ol = C({}, sl, { key: function(a) {
  if (a.key) {
    var b = Kl[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = ml(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Ll[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xl, charCode: function(a) {
  return "keypress" === a.type ? ml(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? ml(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Pl = pl(Ol), Ql = C({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rl = pl(Ql), Sl = C({}, sl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xl }), Tl = pl(Sl), Ul = C({}, ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vl = pl(Ul), Wl = C({}, yl, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xl = pl(Wl);
function Yl(a, b, c, d, e) {
  if ("submit" === b && c && c.stateNode === e) {
    var f2 = Tb(e).action, g = d.submitter;
    g && (b = (b = Tb(g)) ? b.formAction : g.getAttribute("formAction"), null != b && (f2 = b, g = null));
    if ("function" === typeof f2) {
      var h2 = new rl("action", "action", null, d, e);
      a.push({ event: h2, listeners: [{ instance: null, listener: function() {
        if (!d.defaultPrevented) {
          h2.preventDefault();
          if (g) {
            var k2 = g.ownerDocument.createElement("input");
            k2.name = g.name;
            k2.value = g.value;
            g.parentNode.insertBefore(k2, g);
            var n2 = new FormData(e);
            k2.parentNode.removeChild(k2);
          } else
            n2 = new FormData(e);
          Bg(c, { pending: true, data: n2, method: e.method, action: f2 }, f2, n2);
        }
      }, currentTarget: e }] });
    }
  }
}
var Zl = false, $l = null, am = null, bm = null, cm = /* @__PURE__ */ new Map(), dm = /* @__PURE__ */ new Map(), em = [], fm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function gm(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      $l = null;
      break;
    case "dragenter":
    case "dragleave":
      am = null;
      break;
    case "mouseover":
    case "mouseout":
      bm = null;
      break;
    case "pointerover":
    case "pointerout":
      cm.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dm.delete(b.pointerId);
  }
}
function hm(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Rb(b), null !== b && fl(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function im(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return $l = hm($l, a, b, c, d, e), true;
    case "dragenter":
      return am = hm(am, a, b, c, d, e), true;
    case "mouseover":
      return bm = hm(bm, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      cm.set(f2, hm(cm.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, dm.set(f2, hm(dm.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function jm(a) {
  var b = Pb(a.target);
  if (null !== b) {
    var c = Rc(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Sc(c), null !== b) {
          a.blockedOn = b;
          Cb(a.priority, function() {
            if (13 === c.tag) {
              var d = Gg(c), e = Jd(c, d);
              null !== e && Vf(e, c, d);
              dl(c, d);
            }
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
function km(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = lm(a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      Kc = d;
      c.target.dispatchEvent(d);
      Kc = null;
    } else
      return b = Rb(c), null !== b && fl(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function mm(a, b, c) {
  km(a) && c.delete(b);
}
function nm() {
  Zl = false;
  null !== $l && km($l) && ($l = null);
  null !== am && km(am) && (am = null);
  null !== bm && km(bm) && (bm = null);
  cm.forEach(mm);
  dm.forEach(mm);
}
function om(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Zl || (Zl = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, nm)));
}
var pm = null;
function qm(a) {
  pm !== a && (pm = a, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, function() {
    pm === a && (pm = null);
    for (var b = 0; b < a.length; b += 3) {
      var c = a[b], d = a[b + 1], e = a[b + 2];
      if ("function" !== typeof d)
        if (null === rm(d || c))
          continue;
        else
          break;
      var f2 = Rb(c);
      null !== f2 && (a.splice(b, 3), b -= 3, Bg(f2, { pending: true, data: e, method: c.method, action: d }, d, e));
    }
  }));
}
function mj(a) {
  function b(k2) {
    return om(k2, a);
  }
  null !== $l && om($l, a);
  null !== am && om(am, a);
  null !== bm && om(bm, a);
  cm.forEach(b);
  dm.forEach(b);
  for (var c = 0; c < em.length; c++) {
    var d = em[c];
    d.blockedOn === a && (d.blockedOn = null);
  }
  for (; 0 < em.length && (c = em[0], null === c.blockedOn); )
    jm(c), null === c.blockedOn && em.shift();
  c = (a.ownerDocument || a).$$reactFormReplay;
  if (null != c)
    for (d = 0; d < c.length; d += 3) {
      var e = c[d], f2 = c[d + 1], g = Tb(e);
      if ("function" === typeof f2)
        g || qm(c);
      else if (g) {
        var h2 = null;
        if (f2 && f2.hasAttribute("formAction"))
          if (e = f2, g = Tb(f2))
            h2 = g.formAction;
          else {
            if (null !== rm(e))
              continue;
          }
        else
          h2 = g.action;
        "function" === typeof h2 ? c[d + 1] = h2 : (c.splice(d, 3), d -= 3);
        qm(c);
      }
    }
}
var sm = ea.ReactCurrentBatchConfig, Pi = true;
function tm(a, b, c, d) {
  var e = F, f2 = sm.transition;
  sm.transition = null;
  try {
    F = 2, um(a, b, c, d);
  } finally {
    F = e, sm.transition = f2;
  }
}
function vm(a, b, c, d) {
  var e = F, f2 = sm.transition;
  sm.transition = null;
  try {
    F = 8, um(a, b, c, d);
  } finally {
    F = e, sm.transition = f2;
  }
}
function um(a, b, c, d) {
  if (Pi) {
    var e = lm(d);
    if (null === e)
      wm(a, b, d, xm, c), gm(a, d);
    else if (im(e, a, b, c, d))
      d.stopPropagation();
    else if (gm(a, d), b & 4 && -1 < fm.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Rb(e);
        null !== f2 && cl(f2);
        f2 = lm(d);
        null === f2 && wm(a, b, d, xm, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      wm(a, b, d, null, c);
  }
}
function lm(a) {
  a = Lc(a);
  return rm(a);
}
var xm = null;
function rm(a) {
  xm = null;
  a = Pb(a);
  if (null !== a) {
    var b = Rc(a);
    if (null === b)
      a = null;
    else {
      var c = b.tag;
      if (13 === c) {
        a = Sc(b);
        if (null !== a)
          return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else
        b !== a && (a = null);
    }
  }
  xm = a;
  return null;
}
function ok(a) {
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
      return 2;
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
      return 8;
    case "message":
      switch (Za()) {
        case $a:
          return 2;
        case ab:
          return 8;
        case bb:
        case cb:
          return 32;
        case db:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var ym = null, zm = null, Am = null;
function Bm() {
  if (Am)
    return Am;
  var a, b = zm, c = b.length, d, e = "value" in ym ? ym.value : ym.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return Am = e.slice(a, 1 < d ? 1 - d : void 0);
}
var Cm = [9, 13, 27, 32], Dm = $b && "CompositionEvent" in window, Em = null;
$b && "documentMode" in document && (Em = document.documentMode);
var Gm = $b && "TextEvent" in window && !Em, Hm = $b && (!Dm || Em && 8 < Em && 11 >= Em), Im = String.fromCharCode(32), Jm = false;
function Km(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== Cm.indexOf(b.keyCode);
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
function Lm(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var Mm = false;
function Nm(a, b) {
  switch (a) {
    case "compositionend":
      return Lm(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      Jm = true;
      return Im;
    case "textInput":
      return a = b.data, a === Im && Jm ? null : a;
    default:
      return null;
  }
}
function Om(a, b) {
  if (Mm)
    return "compositionend" === a || !Dm && Km(a, b) ? (a = Bm(), Am = zm = ym = null, Mm = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return Hm && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var Pm = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Qm(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Pm[a.type] : "textarea" === b ? true : false;
}
function Rm(a, b, c, d) {
  Pc(d);
  b = Sm(b, "onChange");
  0 < b.length && (c = new rl("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var Tm = null, Um = null;
function Vm(a) {
  Wm(a, 0);
}
function Xm(a) {
  var b = Sb(a);
  if (rc(b))
    return a;
}
function Ym(a, b) {
  if ("change" === a)
    return b;
}
var Zm = false;
if ($b) {
  var $m;
  if ($b) {
    var an = "oninput" in document;
    if (!an) {
      var bn = document.createElement("div");
      bn.setAttribute("oninput", "return;");
      an = "function" === typeof bn.oninput;
    }
    $m = an;
  } else
    $m = false;
  Zm = $m && (!document.documentMode || 9 < document.documentMode);
}
function cn() {
  Tm && (Tm.detachEvent("onpropertychange", dn), Um = Tm = null);
}
function dn(a) {
  if ("value" === a.propertyName && Xm(Um)) {
    var b = [];
    Rm(b, Um, a, Lc(a));
    il(Vm, b);
  }
}
function en(a, b, c) {
  "focusin" === a ? (cn(), Tm = b, Um = c, Tm.attachEvent("onpropertychange", dn)) : "focusout" === a && cn();
}
function fn(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return Xm(Um);
}
function gn(a, b) {
  if ("click" === a)
    return Xm(b);
}
function hn(a, b) {
  if ("input" === a || "change" === a)
    return Xm(b);
}
function jn(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function kn(a, b) {
  var c = jn(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
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
    c = jn(c);
  }
}
function ln(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? ln(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Qi() {
  for (var a = window, b = sc(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = sc(a.document);
  }
  return b;
}
function Ri(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Sk(a) {
  var b = Qi(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && ln(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ri(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = kn(c, f2);
        var g = kn(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var mn = $b && "documentMode" in document && 11 >= document.documentMode, nn = null, on = null, pn = null, qn = false;
function rn(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  qn || null == nn || nn !== sc(d) || (d = nn, "selectionStart" in d && Ri(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), pn && ue(pn, d) || (pn = d, d = Sm(on, "onSelect"), 0 < d.length && (b = new rl("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = nn)));
}
function sn(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var tn = { animationend: sn("Animation", "AnimationEnd"), animationiteration: sn("Animation", "AnimationIteration"), animationstart: sn("Animation", "AnimationStart"), transitionend: sn("Transition", "TransitionEnd") }, un = {}, vn = {};
$b && (vn = document.createElement("div").style, "AnimationEvent" in window || (delete tn.animationend.animation, delete tn.animationiteration.animation, delete tn.animationstart.animation), "TransitionEvent" in window || delete tn.transitionend.transition);
function wn(a) {
  if (un[a])
    return un[a];
  if (!tn[a])
    return a;
  var b = tn[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in vn)
      return un[a] = b[c];
  return a;
}
var xn = wn("animationend"), yn = wn("animationiteration"), zn = wn("animationstart"), An = wn("transitionend"), Bn = /* @__PURE__ */ new Map(), Cn = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
function Dn(a, b) {
  Bn.set(a, b);
  Yb(b, [a]);
}
for (var En = 0; En < Cn.length; En++) {
  var Fn = Cn[En], Gn = Fn.toLowerCase(), Hn = Fn[0].toUpperCase() + Fn.slice(1);
  Dn(Gn, "on" + Hn);
}
Dn(xn, "onAnimationEnd");
Dn(yn, "onAnimationIteration");
Dn(zn, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(An, "onTransitionEnd");
Zb("onMouseEnter", ["mouseout", "mouseover"]);
Zb("onMouseLeave", ["mouseout", "mouseover"]);
Zb("onPointerEnter", ["pointerout", "pointerover"]);
Zb("onPointerLeave", ["pointerout", "pointerover"]);
Yb("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yb("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yb("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yb("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yb("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yb("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var sd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), In = new Set("cancel close invalid load scroll scrollend toggle".split(" ").concat(sd));
function Wm(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h2 = d[g], k2 = h2.instance, n2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          f2 = h2;
          e.currentTarget = n2;
          try {
            f2(e);
          } catch (t2) {
            Wg(t2);
          }
          e.currentTarget = null;
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h2 = d[g];
          k2 = h2.instance;
          n2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          f2 = h2;
          e.currentTarget = n2;
          try {
            f2(e);
          } catch (t2) {
            Wg(t2);
          }
          e.currentTarget = null;
          f2 = k2;
        }
    }
  }
}
function H(a, b) {
  var c = b[Jb];
  void 0 === c && (c = b[Jb] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (Jn(b, a, 2, false), c.add(d));
}
function Kn(a, b, c) {
  var d = 0;
  b && (d |= 4);
  Jn(c, a, d, b);
}
var Ln = "_reactListening" + Math.random().toString(36).slice(2);
function Ai(a) {
  if (!a[Ln]) {
    a[Ln] = true;
    Wb.forEach(function(c) {
      "selectionchange" !== c && (In.has(c) || Kn(c, false, a), Kn(c, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[Ln] || (b[Ln] = true, Kn("selectionchange", false, b));
  }
}
function Jn(a, b, c, d) {
  switch (ok(b)) {
    case 2:
      var e = tm;
      break;
    case 8:
      e = vm;
      break;
    default:
      e = um;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !kl || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function wm(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e || 8 === h2.nodeType && h2.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h2; ) {
            g = Pb(h2);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2 || 26 === k2 || 27 === k2) {
              d = f2 = g;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  il(function() {
    var n2 = f2, t2 = Lc(c), w2 = [];
    a: {
      var q2 = Bn.get(a);
      if (void 0 !== q2) {
        var r2 = rl, B2 = a;
        switch (a) {
          case "keypress":
            if (0 === ml(c))
              break a;
          case "keydown":
          case "keyup":
            r2 = Pl;
            break;
          case "focusin":
            B2 = "focus";
            r2 = Dl;
            break;
          case "focusout":
            B2 = "blur";
            r2 = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            r2 = Dl;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            r2 = zl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            r2 = Bl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            r2 = Tl;
            break;
          case xn:
          case yn:
          case zn:
            r2 = Fl;
            break;
          case An:
            r2 = Vl;
            break;
          case "scroll":
          case "scrollend":
            r2 = tl;
            break;
          case "wheel":
            r2 = Xl;
            break;
          case "copy":
          case "cut":
          case "paste":
            r2 = Hl;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            r2 = Rl;
        }
        var D2 = 0 !== (b & 4), O2 = !D2 && ("scroll" === a || "scrollend" === a), m2 = D2 ? null !== q2 ? q2 + "Capture" : null : q2;
        D2 = [];
        for (var l2 = n2, p2; null !== l2; ) {
          var v2 = l2;
          p2 = v2.stateNode;
          v2 = v2.tag;
          5 !== v2 && 26 !== v2 && 27 !== v2 || null === p2 || null === m2 || (v2 = jl(l2, m2), null != v2 && D2.push(Mn(l2, v2, p2)));
          if (O2)
            break;
          l2 = l2.return;
        }
        0 < D2.length && (q2 = new r2(q2, B2, null, c, t2), w2.push({ event: q2, listeners: D2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        q2 = "mouseover" === a || "pointerover" === a;
        r2 = "mouseout" === a || "pointerout" === a;
        if (q2 && c !== Kc && (B2 = c.relatedTarget || c.fromElement) && (Pb(B2) || B2[Ib]))
          break a;
        if (r2 || q2) {
          q2 = t2.window === t2 ? t2 : (q2 = t2.ownerDocument) ? q2.defaultView || q2.parentWindow : window;
          if (r2) {
            if (B2 = c.relatedTarget || c.toElement, r2 = n2, B2 = B2 ? Pb(B2) : null, null !== B2 && (O2 = Rc(B2), D2 = B2.tag, B2 !== O2 || 5 !== D2 && 27 !== D2 && 6 !== D2))
              B2 = null;
          } else
            r2 = null, B2 = n2;
          if (r2 !== B2) {
            D2 = zl;
            v2 = "onMouseLeave";
            m2 = "onMouseEnter";
            l2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              D2 = Rl, v2 = "onPointerLeave", m2 = "onPointerEnter", l2 = "pointer";
            O2 = null == r2 ? q2 : Sb(r2);
            p2 = null == B2 ? q2 : Sb(B2);
            q2 = new D2(v2, l2 + "leave", r2, c, t2);
            q2.target = O2;
            q2.relatedTarget = p2;
            v2 = null;
            Pb(t2) === n2 && (D2 = new D2(m2, l2 + "enter", B2, c, t2), D2.target = p2, D2.relatedTarget = O2, v2 = D2);
            O2 = v2;
            if (r2 && B2)
              b: {
                D2 = r2;
                m2 = B2;
                l2 = 0;
                for (p2 = D2; p2; p2 = Nn(p2))
                  l2++;
                p2 = 0;
                for (v2 = m2; v2; v2 = Nn(v2))
                  p2++;
                for (; 0 < l2 - p2; )
                  D2 = Nn(D2), l2--;
                for (; 0 < p2 - l2; )
                  m2 = Nn(m2), p2--;
                for (; l2--; ) {
                  if (D2 === m2 || null !== m2 && D2 === m2.alternate)
                    break b;
                  D2 = Nn(D2);
                  m2 = Nn(m2);
                }
                D2 = null;
              }
            else
              D2 = null;
            null !== r2 && On(w2, q2, r2, D2, false);
            null !== B2 && null !== O2 && On(w2, O2, B2, D2, true);
          }
        }
      }
      a: {
        q2 = n2 ? Sb(n2) : window;
        r2 = q2.nodeName && q2.nodeName.toLowerCase();
        if ("select" === r2 || "input" === r2 && "file" === q2.type)
          var x2 = Ym;
        else if (Qm(q2))
          if (Zm)
            x2 = hn;
          else {
            x2 = fn;
            var z2 = en;
          }
        else
          r2 = q2.nodeName, !r2 || "input" !== r2.toLowerCase() || "checkbox" !== q2.type && "radio" !== q2.type ? n2 && Gc(n2.elementType) && (x2 = Ym) : x2 = gn;
        if (x2 && (x2 = x2(a, n2))) {
          Rm(
            w2,
            x2,
            c,
            t2
          );
          break a;
        }
        z2 && z2(a, q2, n2);
        "focusout" === a && n2 && "number" === q2.type && null != n2.memoizedProps.value && wc(q2, "number", q2.value);
      }
      z2 = n2 ? Sb(n2) : window;
      switch (a) {
        case "focusin":
          if (Qm(z2) || "true" === z2.contentEditable)
            nn = z2, on = n2, pn = null;
          break;
        case "focusout":
          pn = on = nn = null;
          break;
        case "mousedown":
          qn = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qn = false;
          rn(w2, c, t2);
          break;
        case "selectionchange":
          if (mn)
            break;
        case "keydown":
        case "keyup":
          rn(w2, c, t2);
      }
      var y2;
      if (Dm)
        b: {
          switch (a) {
            case "compositionstart":
              var A2 = "onCompositionStart";
              break b;
            case "compositionend":
              A2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              A2 = "onCompositionUpdate";
              break b;
          }
          A2 = void 0;
        }
      else
        Mm ? Km(a, c) && (A2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (A2 = "onCompositionStart");
      A2 && (Hm && "ko" !== c.locale && (Mm || "onCompositionStart" !== A2 ? "onCompositionEnd" === A2 && Mm && (y2 = Bm()) : (ym = t2, zm = "value" in ym ? ym.value : ym.textContent, Mm = true)), z2 = Sm(n2, A2), 0 < z2.length && (A2 = new Jl(A2, a, null, c, t2), w2.push({ event: A2, listeners: z2 }), y2 ? A2.data = y2 : (y2 = Lm(c), null !== y2 && (A2.data = y2))));
      if (y2 = Gm ? Nm(
        a,
        c
      ) : Om(a, c))
        A2 = Sm(n2, "onBeforeInput"), 0 < A2.length && (z2 = new Jl("onBeforeInput", "beforeinput", null, c, t2), w2.push({ event: z2, listeners: A2 }), z2.data = y2);
      Yl(w2, a, n2, c, t2);
    }
    Wm(w2, b);
  });
}
function Mn(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function Sm(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    e = e.tag;
    5 !== e && 26 !== e && 27 !== e || null === f2 || (e = jl(a, c), null != e && d.unshift(Mn(a, e, f2)), e = jl(a, b), null != e && d.push(Mn(a, e, f2)));
    a = a.return;
  }
  return d;
}
function Nn(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag && 27 !== a.tag);
  return a ? a : null;
}
function On(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h2 = c, k2 = h2.alternate, n2 = h2.stateNode;
    h2 = h2.tag;
    if (null !== k2 && k2 === d)
      break;
    5 !== h2 && 26 !== h2 && 27 !== h2 || null === n2 || (k2 = n2, e ? (n2 = jl(c, f2), null != n2 && g.unshift(Mn(c, n2, k2))) : e || (n2 = jl(c, f2), null != n2 && g.push(Mn(c, n2, k2))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var Pn = /\r\n?/g, Qn = /\u0000|\uFFFD/g;
function Rn(a) {
  return ("string" === typeof a ? a : "" + a).replace(Pn, "\n").replace(Qn, "");
}
function td(a, b) {
  b = Rn(b);
  return Rn(a) === b ? true : false;
}
function ud() {
}
function Z(a, b, c, d, e, f2) {
  switch (c) {
    case "children":
      "string" === typeof d ? "body" === b || "textarea" === b && "" === d || Cc(a, d) : ("number" === typeof d || "bigint" === typeof d) && "body" !== b && Cc(a, "" + d);
      break;
    case "className":
      fc(a, "class", d);
      break;
    case "tabIndex":
      fc(a, "tabindex", d);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      fc(a, c, d);
      break;
    case "style":
      Fc(a, d, f2);
      break;
    case "src":
    case "href":
      if ("" === d && ("a" !== b || "href" !== c)) {
        a.removeAttribute(c);
        break;
      }
      if (null == d || "function" === typeof d || "symbol" === typeof d || "boolean" === typeof d) {
        a.removeAttribute(c);
        break;
      }
      d = Jc("" + d);
      a.setAttribute(c, d);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof d) {
        a.setAttribute(c, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break;
      } else
        "function" === typeof f2 && ("formAction" === c ? ("input" !== b && Z(a, b, "name", e.name, e, null), Z(a, b, "formEncType", e.formEncType, e, null), Z(a, b, "formMethod", e.formMethod, e, null), Z(a, b, "formTarget", e.formTarget, e, null)) : (Z(a, b, "encType", e.encType, e, null), Z(a, b, "method", e.method, e, null), Z(a, b, "target", e.target, e, null)));
      if (null == d || "symbol" === typeof d || "boolean" === typeof d) {
        a.removeAttribute(c);
        break;
      }
      d = Jc("" + d);
      a.setAttribute(c, d);
      break;
    case "onClick":
      null != d && (a.onclick = ud);
      break;
    case "onScroll":
      null != d && H("scroll", a);
      break;
    case "onScrollEnd":
      null != d && H("scrollend", a);
      break;
    case "dangerouslySetInnerHTML":
      if (null != d) {
        if ("object" !== typeof d || !("__html" in d))
          throw Error(u(61));
        c = d.__html;
        if (null != c) {
          if (null != e.children)
            throw Error(u(60));
          a.innerHTML = c;
        }
      }
      break;
    case "multiple":
      a.multiple = d && "function" !== typeof d && "symbol" !== typeof d;
      break;
    case "muted":
      a.muted = d && "function" !== typeof d && "symbol" !== typeof d;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (null == d || "function" === typeof d || "boolean" === typeof d || "symbol" === typeof d) {
        a.removeAttribute("xlink:href");
        break;
      }
      c = Jc("" + d);
      a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != d && "function" !== typeof d && "symbol" !== typeof d ? a.setAttribute(c, "" + d) : a.removeAttribute(c);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      d && "function" !== typeof d && "symbol" !== typeof d ? a.setAttribute(c, "") : a.removeAttribute(c);
      break;
    case "capture":
    case "download":
      true === d ? a.setAttribute(c, "") : false !== d && null != d && "function" !== typeof d && "symbol" !== typeof d ? a.setAttribute(c, d) : a.removeAttribute(c);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != d && "function" !== typeof d && "symbol" !== typeof d && !isNaN(d) && 1 <= d ? a.setAttribute(c, d) : a.removeAttribute(c);
      break;
    case "rowSpan":
    case "start":
      null == d || "function" === typeof d || "symbol" === typeof d || isNaN(d) ? a.removeAttribute(c) : a.setAttribute(c, d);
      break;
    case "xlinkActuate":
      gc(a, "http://www.w3.org/1999/xlink", "xlink:actuate", d);
      break;
    case "xlinkArcrole":
      gc(a, "http://www.w3.org/1999/xlink", "xlink:arcrole", d);
      break;
    case "xlinkRole":
      gc(a, "http://www.w3.org/1999/xlink", "xlink:role", d);
      break;
    case "xlinkShow":
      gc(a, "http://www.w3.org/1999/xlink", "xlink:show", d);
      break;
    case "xlinkTitle":
      gc(a, "http://www.w3.org/1999/xlink", "xlink:title", d);
      break;
    case "xlinkType":
      gc(
        a,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        d
      );
      break;
    case "xmlBase":
      gc(a, "http://www.w3.org/XML/1998/namespace", "xml:base", d);
      break;
    case "xmlLang":
      gc(a, "http://www.w3.org/XML/1998/namespace", "xml:lang", d);
      break;
    case "xmlSpace":
      gc(a, "http://www.w3.org/XML/1998/namespace", "xml:space", d);
      break;
    case "is":
      ec(a, "is", d);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1])
        c = Hc.get(c) || c, ec(a, c, d);
  }
}
function Sn(a, b, c, d, e, f2) {
  switch (c) {
    case "style":
      Fc(a, d, f2);
      break;
    case "dangerouslySetInnerHTML":
      if (null != d) {
        if ("object" !== typeof d || !("__html" in d))
          throw Error(u(61));
        c = d.__html;
        if (null != c) {
          if (null != e.children)
            throw Error(u(60));
          a.innerHTML = c;
        }
      }
      break;
    case "children":
      "string" === typeof d ? Cc(a, d) : ("number" === typeof d || "bigint" === typeof d) && Cc(a, "" + d);
      break;
    case "onScroll":
      null != d && H("scroll", a);
      break;
    case "onScrollEnd":
      null != d && H("scrollend", a);
      break;
    case "onClick":
      null != d && (a.onclick = ud);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!Xb.hasOwnProperty(c))
        a: {
          if ("o" === c[0] && "n" === c[1] && (e = c.endsWith("Capture"), b = c.slice(2, e ? c.length - 7 : void 0), f2 = Tb(a), f2 = null != f2 ? f2[c] : null, "function" === typeof f2 && a.removeEventListener(b, f2, e), "function" === typeof d)) {
            "function" !== typeof f2 && null !== f2 && (c in a ? a[c] = null : a.hasAttribute(c) && a.removeAttribute(c));
            a.addEventListener(b, d, e);
            break a;
          }
          c in a ? a[c] = d : true === d ? a.setAttribute(c, "") : ec(a, c, d);
        }
  }
}
function bi(a, b, c) {
  switch (b) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      H("invalid", a);
      var d = null, e = null, f2 = null, g = null, h2 = null, k2 = null;
      for (t2 in c)
        if (c.hasOwnProperty(t2)) {
          var n2 = c[t2];
          if (null != n2)
            switch (t2) {
              case "name":
                d = n2;
                break;
              case "type":
                e = n2;
                break;
              case "checked":
                h2 = n2;
                break;
              case "defaultChecked":
                k2 = n2;
                break;
              case "value":
                f2 = n2;
                break;
              case "defaultValue":
                g = n2;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != n2)
                  throw Error(u(137, b));
                break;
              default:
                Z(
                  a,
                  b,
                  t2,
                  n2,
                  c,
                  null
                );
            }
        }
      xc(a, f2, g, h2, k2, e, d, false);
      qc(a);
      return;
    case "select":
      H("invalid", a);
      var t2 = e = f2 = null;
      for (d in c)
        if (c.hasOwnProperty(d) && (g = c[d], null != g))
          switch (d) {
            case "value":
              f2 = g;
              break;
            case "defaultValue":
              e = g;
              break;
            case "multiple":
              t2 = g;
            default:
              Z(a, b, d, g, c, null);
          }
      b = f2;
      c = e;
      a.multiple = !!t2;
      null != b ? zc(a, !!t2, b, false) : null != c && zc(a, !!t2, c, true);
      return;
    case "textarea":
      H("invalid", a);
      f2 = d = t2 = null;
      for (e in c)
        if (c.hasOwnProperty(e) && (g = c[e], null != g))
          switch (e) {
            case "value":
              t2 = g;
              break;
            case "defaultValue":
              d = g;
              break;
            case "children":
              f2 = g;
              break;
            case "dangerouslySetInnerHTML":
              if (null != g)
                throw Error(u(91));
              break;
            default:
              Z(a, b, e, g, c, null);
          }
      Bc(a, t2, d, f2);
      qc(a);
      return;
    case "option":
      for (g in c)
        if (c.hasOwnProperty(g) && (t2 = c[g], null != t2))
          switch (g) {
            case "selected":
              a.selected = t2 && "function" !== typeof t2 && "symbol" !== typeof t2;
              break;
            default:
              Z(a, b, g, t2, c, null);
          }
      return;
    case "dialog":
      H("cancel", a);
      H("close", a);
      break;
    case "iframe":
    case "object":
      H("load", a);
      break;
    case "video":
    case "audio":
      for (t2 = 0; t2 < sd.length; t2++)
        H(sd[t2], a);
      break;
    case "image":
      H("error", a);
      H(
        "load",
        a
      );
      break;
    case "details":
      H("toggle", a);
      break;
    case "embed":
    case "source":
    case "img":
    case "link":
      H("error", a), H("load", a);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (h2 in c)
        if (c.hasOwnProperty(h2) && (t2 = c[h2], null != t2))
          switch (h2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, b));
            default:
              Z(a, b, h2, t2, c, null);
          }
      return;
    default:
      if (Gc(b)) {
        for (k2 in c)
          c.hasOwnProperty(k2) && (t2 = c[k2], null != t2 && Sn(a, b, k2, t2, c, null));
        return;
      }
  }
  for (f2 in c)
    c.hasOwnProperty(f2) && (t2 = c[f2], null != t2 && Z(a, b, f2, t2, c, null));
}
function xj(a, b, c, d) {
  switch (b) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var e = null, f2 = null, g = null, h2 = null, k2 = null, n2 = null, t2 = null;
      for (r2 in c) {
        var w2 = c[r2];
        if (c.hasOwnProperty(r2) && null != w2)
          switch (r2) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              k2 = w2;
            default:
              d.hasOwnProperty(r2) || Z(a, b, r2, null, d, w2);
          }
      }
      for (var q2 in d) {
        var r2 = d[q2];
        w2 = c[q2];
        if (d.hasOwnProperty(q2) && (null != r2 || null != w2))
          switch (q2) {
            case "type":
              f2 = r2;
              break;
            case "name":
              e = r2;
              break;
            case "checked":
              n2 = r2;
              break;
            case "defaultChecked":
              t2 = r2;
              break;
            case "value":
              g = r2;
              break;
            case "defaultValue":
              h2 = r2;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != r2)
                throw Error(u(137, b));
              break;
            default:
              r2 !== w2 && Z(a, b, q2, r2, d, w2);
          }
      }
      vc(a, g, h2, k2, n2, t2, f2, e);
      return;
    case "select":
      r2 = g = h2 = q2 = null;
      for (f2 in c)
        if (k2 = c[f2], c.hasOwnProperty(f2) && null != k2)
          switch (f2) {
            case "value":
              break;
            case "multiple":
              r2 = k2;
            default:
              d.hasOwnProperty(f2) || Z(a, b, f2, null, d, k2);
          }
      for (e in d)
        if (f2 = d[e], k2 = c[e], d.hasOwnProperty(e) && (null != f2 || null != k2))
          switch (e) {
            case "value":
              q2 = f2;
              break;
            case "defaultValue":
              h2 = f2;
              break;
            case "multiple":
              g = f2;
            default:
              f2 !== k2 && Z(a, b, e, f2, d, k2);
          }
      b = h2;
      c = g;
      d = r2;
      null != q2 ? zc(a, !!c, q2, false) : !!d !== !!c && (null != b ? zc(a, !!c, b, true) : zc(a, !!c, c ? [] : "", false));
      return;
    case "textarea":
      r2 = q2 = null;
      for (h2 in c)
        if (e = c[h2], c.hasOwnProperty(h2) && null != e && !d.hasOwnProperty(h2))
          switch (h2) {
            case "value":
              break;
            case "children":
              break;
            default:
              Z(a, b, h2, null, d, e);
          }
      for (g in d)
        if (e = d[g], f2 = c[g], d.hasOwnProperty(g) && (null != e || null != f2))
          switch (g) {
            case "value":
              q2 = e;
              break;
            case "defaultValue":
              r2 = e;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != e)
                throw Error(u(91));
              break;
            default:
              e !== f2 && Z(a, b, g, e, d, f2);
          }
      Ac(a, q2, r2);
      return;
    case "option":
      for (var B2 in c)
        if (q2 = c[B2], c.hasOwnProperty(B2) && null != q2 && !d.hasOwnProperty(B2))
          switch (B2) {
            case "selected":
              a.selected = false;
              break;
            default:
              Z(a, b, B2, null, d, q2);
          }
      for (k2 in d)
        if (q2 = d[k2], r2 = c[k2], d.hasOwnProperty(k2) && q2 !== r2 && (null != q2 || null != r2))
          switch (k2) {
            case "selected":
              a.selected = q2 && "function" !== typeof q2 && "symbol" !== typeof q2;
              break;
            default:
              Z(a, b, k2, q2, d, r2);
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var D2 in c)
        q2 = c[D2], c.hasOwnProperty(D2) && null != q2 && !d.hasOwnProperty(D2) && Z(a, b, D2, null, d, q2);
      for (n2 in d)
        if (q2 = d[n2], r2 = c[n2], d.hasOwnProperty(n2) && q2 !== r2 && (null != q2 || null != r2))
          switch (n2) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != q2)
                throw Error(u(137, b));
              break;
            default:
              Z(a, b, n2, q2, d, r2);
          }
      return;
    default:
      if (Gc(b)) {
        for (var O2 in c)
          q2 = c[O2], c.hasOwnProperty(O2) && null != q2 && !d.hasOwnProperty(O2) && Sn(a, b, O2, null, d, q2);
        for (t2 in d)
          q2 = d[t2], r2 = c[t2], !d.hasOwnProperty(t2) || q2 === r2 || null == q2 && null == r2 || Sn(a, b, t2, q2, d, r2);
        return;
      }
  }
  for (var m2 in c)
    q2 = c[m2], c.hasOwnProperty(m2) && null != q2 && !d.hasOwnProperty(m2) && Z(a, b, m2, null, d, q2);
  for (w2 in d)
    q2 = d[w2], r2 = c[w2], !d.hasOwnProperty(w2) || q2 === r2 || null == q2 && null == r2 || Z(a, b, w2, q2, d, r2);
}
var Tn = da.ReactDOMCurrentDispatcher, Oi = null, Si = null;
function ai(a) {
  return 9 === a.nodeType ? a : a.ownerDocument;
}
function Pa(a) {
  switch (a) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function Qa(a, b) {
  if (0 === a)
    switch (b) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === a && "foreignObject" === b ? 0 : a;
}
function xd(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "bigint" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Un = null;
function Wd() {
  var a = window.event;
  if (a && "popstate" === a.type) {
    if (a === Un)
      return false;
    Un = a;
    return true;
  }
  Un = null;
  return false;
}
var xk = "function" === typeof setTimeout ? setTimeout : void 0, Gk = "function" === typeof clearTimeout ? clearTimeout : void 0, Vn = "function" === typeof Promise ? Promise : void 0, Zd = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Vn ? function(a) {
  return Vn.resolve(null).then(a).catch(Wn);
} : xk;
function Wn(a) {
  setTimeout(function() {
    throw a;
  });
}
function lj(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          mj(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  mj(b);
}
function Ti(a) {
  var b = a.firstChild;
  b && 10 === b.nodeType && (b = b.nextSibling);
  for (; b; ) {
    var c = b;
    b = b.nextSibling;
    switch (c.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        Ti(c);
        Ob(c);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === c.rel.toLowerCase())
          continue;
    }
    a.removeChild(c);
  }
}
function di(a, b, c, d) {
  for (; 1 === a.nodeType; ) {
    var e = c;
    if (a.nodeName.toLowerCase() !== b.toLowerCase()) {
      if (!d && ("INPUT" !== a.nodeName || "hidden" !== a.type))
        break;
    } else if (!d)
      if ("input" === b && "hidden" === a.type) {
        var f2 = null == e.name ? null : "" + e.name;
        if ("hidden" === e.type && a.getAttribute("name") === f2)
          return a;
      } else
        return a;
    else if (!a[Nb])
      switch (b) {
        case "meta":
          if (!a.hasAttribute("itemprop"))
            break;
          return a;
        case "link":
          f2 = a.getAttribute("rel");
          if ("stylesheet" === f2 && a.hasAttribute("data-precedence"))
            break;
          else if (f2 !== e.rel || a.getAttribute("href") !== (null == e.href ? null : e.href) || a.getAttribute("crossorigin") !== (null == e.crossOrigin ? null : e.crossOrigin) || a.getAttribute("title") !== (null == e.title ? null : e.title))
            break;
          return a;
        case "style":
          if (a.hasAttribute("data-precedence"))
            break;
          return a;
        case "script":
          f2 = a.getAttribute("src");
          if ((f2 !== (null == e.src ? null : e.src) || a.getAttribute("type") !== (null == e.type ? null : e.type) || a.getAttribute("crossorigin") !== (null == e.crossOrigin ? null : e.crossOrigin)) && f2 && a.hasAttribute("async") && !a.hasAttribute("itemprop"))
            break;
          return a;
        default:
          return a;
      }
    a = yd(a.nextSibling);
    if (null === a)
      break;
  }
  return null;
}
function ei(a, b, c) {
  if ("" === b)
    return null;
  for (; 3 !== a.nodeType; ) {
    if ((1 !== a.nodeType || "INPUT" !== a.nodeName || "hidden" !== a.type) && !c)
      return null;
    a = yd(a.nextSibling);
    if (null === a)
      return null;
  }
  return a;
}
function yd(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b || "F!" === b || "F" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Qb(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
function ci(a, b, c) {
  b = ai(c);
  switch (a) {
    case "html":
      a = b.documentElement;
      if (!a)
        throw Error(u(452));
      return a;
    case "head":
      a = b.head;
      if (!a)
        throw Error(u(453));
      return a;
    case "body":
      a = b.body;
      if (!a)
        throw Error(u(454));
      return a;
    default:
      throw Error(u(451));
  }
}
var Xn = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Set();
function zj(a) {
  return "function" === typeof a.getRootNode ? a.getRootNode() : a.ownerDocument;
}
var Zn = Tn.current;
Tn.current = { prefetchDNS: $n, preconnect: ao, preload: bo, preloadModule: co, preinitStyle: eo, preinitScript: fo, preinitModuleScript: go };
var ho = "undefined" === typeof document ? null : document;
function io(a, b, c) {
  var d = ho;
  if (d && "string" === typeof b && b) {
    var e = uc(b);
    e = 'link[rel="' + a + '"][href="' + e + '"]';
    "string" === typeof c && (e += '[crossorigin="' + c + '"]');
    Yn.has(e) || (Yn.add(e), a = { rel: a, crossOrigin: c, href: b }, null === d.querySelector(e) && (b = d.createElement("link"), bi(b, "link", a), Vb(b), d.head.appendChild(b)));
  }
}
function $n(a) {
  Zn.prefetchDNS(a);
  io("dns-prefetch", a, null);
}
function ao(a, b) {
  Zn.preconnect(a, b);
  io("preconnect", a, b);
}
function bo(a, b, c) {
  Zn.preload(a, b, c);
  var d = ho;
  if (d && a && b) {
    var e = 'link[rel="preload"][as="' + uc(b) + '"]';
    "image" === b ? c && c.imageSrcSet ? (e += '[imagesrcset="' + uc(c.imageSrcSet) + '"]', "string" === typeof c.imageSizes && (e += '[imagesizes="' + uc(c.imageSizes) + '"]')) : e += '[href="' + uc(a) + '"]' : e += '[href="' + uc(a) + '"]';
    var f2 = e;
    switch (b) {
      case "style":
        f2 = jo(a);
        break;
      case "script":
        f2 = ko(a);
    }
    Xn.has(f2) || (a = C({ rel: "preload", href: "image" === b && c && c.imageSrcSet ? void 0 : a, as: b }, c), Xn.set(f2, a), null !== d.querySelector(e) || "style" === b && d.querySelector(lo(f2)) || "script" === b && d.querySelector(mo(f2)) || (b = d.createElement("link"), bi(b, "link", a), Vb(b), d.head.appendChild(b)));
  }
}
function co(a, b) {
  Zn.preloadModule(a, b);
  var c = ho;
  if (c && a) {
    var d = b && "string" === typeof b.as ? b.as : "script", e = 'link[rel="modulepreload"][as="' + uc(d) + '"][href="' + uc(a) + '"]', f2 = e;
    switch (d) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        f2 = ko(a);
    }
    if (!Xn.has(f2) && (a = C({ rel: "modulepreload", href: a }, b), Xn.set(f2, a), null === c.querySelector(e))) {
      switch (d) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (c.querySelector(mo(f2)))
            return;
      }
      d = c.createElement("link");
      bi(d, "link", a);
      Vb(d);
      c.head.appendChild(d);
    }
  }
}
function eo(a, b, c) {
  Zn.preinitStyle(a, b, c);
  var d = ho;
  if (d && a) {
    var e = Ub(d).hoistableStyles, f2 = jo(a);
    b = b || "default";
    var g = e.get(f2);
    if (!g) {
      var h2 = { loading: 0, preload: null };
      if (g = d.querySelector(lo(f2)))
        h2.loading = 5;
      else {
        a = C({ rel: "stylesheet", href: a, "data-precedence": b }, c);
        (c = Xn.get(f2)) && no(a, c);
        var k2 = g = d.createElement("link");
        Vb(k2);
        bi(k2, "link", a);
        k2._p = new Promise(function(n2, t2) {
          k2.onload = n2;
          k2.onerror = t2;
        });
        k2.addEventListener("load", function() {
          h2.loading |= 1;
        });
        k2.addEventListener("error", function() {
          h2.loading |= 2;
        });
        h2.loading |= 4;
        oo(g, b, d);
      }
      g = { type: "stylesheet", instance: g, count: 1, state: h2 };
      e.set(f2, g);
    }
  }
}
function fo(a, b) {
  Zn.preinitScript(a, b);
  var c = ho;
  if (c && a) {
    var d = Ub(c).hoistableScripts, e = ko(a), f2 = d.get(e);
    f2 || (f2 = c.querySelector(mo(e)), f2 || (a = C({ src: a, async: true }, b), (b = Xn.get(e)) && po(a, b), f2 = c.createElement("script"), Vb(f2), bi(f2, "link", a), c.head.appendChild(f2)), f2 = { type: "script", instance: f2, count: 1, state: null }, d.set(e, f2));
  }
}
function go(a, b) {
  Zn.preinitModuleScript(a, b);
  var c = ho;
  if (c && a) {
    var d = Ub(c).hoistableScripts, e = ko(a), f2 = d.get(e);
    f2 || (f2 = c.querySelector(mo(e)), f2 || (a = C({ src: a, async: true, type: "module" }, b), (b = Xn.get(e)) && po(a, b), f2 = c.createElement("script"), Vb(f2), bi(f2, "link", a), c.head.appendChild(f2)), f2 = { type: "script", instance: f2, count: 1, state: null }, d.set(e, f2));
  }
}
function $h(a, b, c) {
  b = (b = La.current) ? zj(b) : null;
  if (!b)
    throw Error(u(446));
  switch (a) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof c.precedence && "string" === typeof c.href ? (c = jo(c.href), b = Ub(b).hoistableStyles, a = b.get(c), a || (a = { type: "style", instance: null, count: 0, state: null }, b.set(c, a)), a) : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if ("stylesheet" === c.rel && "string" === typeof c.href && "string" === typeof c.precedence) {
        a = jo(c.href);
        var d = Ub(b).hoistableStyles, e = d.get(a);
        e || (b = b.ownerDocument || b, e = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(a, e), Xn.has(a) || qo(b, a, { rel: "preload", as: "style", href: c.href, crossOrigin: c.crossOrigin, integrity: c.integrity, media: c.media, hrefLang: c.hrefLang, referrerPolicy: c.referrerPolicy }, e.state));
        return e;
      }
      return null;
    case "script":
      return "string" === typeof c.src && true === c.async ? (c = ko(c.src), b = Ub(b).hoistableScripts, a = b.get(c), a || (a = { type: "script", instance: null, count: 0, state: null }, b.set(c, a)), a) : {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
    default:
      throw Error(u(444, a));
  }
}
function jo(a) {
  return 'href="' + uc(a) + '"';
}
function lo(a) {
  return 'link[rel="stylesheet"][' + a + "]";
}
function ro(a) {
  return C({}, a, { "data-precedence": a.precedence, precedence: null });
}
function qo(a, b, c, d) {
  Xn.set(b, c);
  a.querySelector(lo(b)) || (a.querySelector('link[rel="preload"][as="style"][' + b + "]") ? d.loading = 1 : (b = a.createElement("link"), d.preload = b, b.addEventListener("load", function() {
    return d.loading |= 1;
  }), b.addEventListener("error", function() {
    return d.loading |= 2;
  }), bi(b, "link", c), Vb(b), a.head.appendChild(b)));
}
function ko(a) {
  return '[src="' + uc(a) + '"]';
}
function mo(a) {
  return "script[async]" + a;
}
function wj(a, b, c) {
  b.count++;
  if (null === b.instance)
    switch (b.type) {
      case "style":
        var d = a.querySelector('style[data-href~="' + uc(c.href) + '"]');
        if (d)
          return b.instance = d, Vb(d), d;
        var e = C({}, c, { "data-href": c.href, "data-precedence": c.precedence, href: null, precedence: null });
        d = (a.ownerDocument || a).createElement("style");
        Vb(d);
        bi(d, "style", e);
        oo(d, c.precedence, a);
        return b.instance = d;
      case "stylesheet":
        e = jo(c.href);
        var f2 = a.querySelector(lo(e));
        if (f2)
          return b.state.loading |= 4, b.instance = f2, Vb(f2), f2;
        d = ro(c);
        (e = Xn.get(e)) && no(d, e);
        f2 = (a.ownerDocument || a).createElement("link");
        Vb(f2);
        var g = f2;
        g._p = new Promise(function(h2, k2) {
          g.onload = h2;
          g.onerror = k2;
        });
        bi(f2, "link", d);
        b.state.loading |= 4;
        oo(f2, c.precedence, a);
        return b.instance = f2;
      case "script":
        f2 = ko(c.src);
        if (e = a.querySelector(mo(f2)))
          return b.instance = e, Vb(e), e;
        d = c;
        if (e = Xn.get(f2))
          d = C({}, c), po(d, e);
        a = a.ownerDocument || a;
        e = a.createElement("script");
        Vb(e);
        bi(e, "link", d);
        a.head.appendChild(e);
        return b.instance = e;
      case "void":
        return null;
      default:
        throw Error(u(443, b.type));
    }
  else
    "stylesheet" === b.type && 0 === (b.state.loading & 4) && (d = b.instance, b.state.loading |= 4, oo(d, c.precedence, a));
  return b.instance;
}
function oo(a, b, c) {
  for (var d = c.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = d.length ? d[d.length - 1] : null, f2 = e, g = 0; g < d.length; g++) {
    var h2 = d[g];
    if (h2.dataset.precedence === b)
      f2 = h2;
    else if (f2 !== e)
      break;
  }
  f2 ? f2.parentNode.insertBefore(a, f2.nextSibling) : (b = 9 === c.nodeType ? c.head : c, b.insertBefore(a, b.firstChild));
}
function no(a, b) {
  null == a.crossOrigin && (a.crossOrigin = b.crossOrigin);
  null == a.referrerPolicy && (a.referrerPolicy = b.referrerPolicy);
  null == a.title && (a.title = b.title);
}
function po(a, b) {
  null == a.crossOrigin && (a.crossOrigin = b.crossOrigin);
  null == a.referrerPolicy && (a.referrerPolicy = b.referrerPolicy);
  null == a.integrity && (a.integrity = b.integrity);
}
var yj = null;
function uj(a, b, c) {
  if (null === yj) {
    var d = /* @__PURE__ */ new Map();
    var e = yj = /* @__PURE__ */ new Map();
    e.set(c, d);
  } else
    e = yj, d = e.get(c), d || (d = /* @__PURE__ */ new Map(), e.set(c, d));
  if (d.has(a))
    return d;
  d.set(a, null);
  c = c.getElementsByTagName(a);
  for (e = 0; e < c.length; e++) {
    var f2 = c[e];
    if (!(f2[Nb] || f2[Gb] || "link" === a && "stylesheet" === f2.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== f2.namespaceURI) {
      var g = f2.getAttribute(b) || "";
      g = a + g;
      var h2 = d.get(g);
      h2 ? h2.push(f2) : d.set(g, [f2]);
    }
  }
  return d;
}
function vj(a, b, c) {
  a = a.ownerDocument || a;
  a.head.insertBefore(c, "title" === b ? a.querySelector("head > title") : null);
}
function Yk(a, b, c) {
  if (1 === c || null != b.itemProp)
    return false;
  switch (a) {
    case "meta":
    case "title":
      return true;
    case "style":
      if ("string" !== typeof b.precedence || "string" !== typeof b.href || "" === b.href)
        break;
      return true;
    case "link":
      if ("string" !== typeof b.rel || "string" !== typeof b.href || "" === b.href || b.onLoad || b.onError)
        break;
      switch (b.rel) {
        case "stylesheet":
          return a = b.disabled, "string" === typeof b.precedence && null == a;
        default:
          return true;
      }
    case "script":
      if (true === b.async && !b.onLoad && !b.onError && "string" === typeof b.src && b.src)
        return true;
  }
  return false;
}
var zk = null;
function Ak() {
}
function Mj(a, b, c) {
  if (null === zk)
    throw Error(u(475));
  var d = zk;
  if ("stylesheet" === b.type && ("string" !== typeof c.media || false !== matchMedia(c.media).matches) && 0 === (b.state.loading & 4)) {
    if (null === b.instance) {
      var e = jo(c.href), f2 = a.querySelector(lo(e));
      if (f2) {
        a = f2._p;
        null !== a && "object" === typeof a && "function" === typeof a.then && (d.count++, d = so.bind(d), a.then(d, d));
        b.state.loading |= 4;
        b.instance = f2;
        Vb(f2);
        return;
      }
      f2 = a.ownerDocument || a;
      c = ro(c);
      (e = Xn.get(e)) && no(c, e);
      f2 = f2.createElement("link");
      Vb(f2);
      var g = f2;
      g._p = new Promise(function(h2, k2) {
        g.onload = h2;
        g.onerror = k2;
      });
      bi(f2, "link", c);
      b.instance = f2;
    }
    null === d.stylesheets && (d.stylesheets = /* @__PURE__ */ new Map());
    d.stylesheets.set(b, a);
    (a = b.state.preload) && 0 === (b.state.loading & 3) && (d.count++, b = so.bind(d), a.addEventListener("load", b), a.addEventListener("error", b));
  }
}
function Bk() {
  if (null === zk)
    throw Error(u(475));
  var a = zk;
  a.stylesheets && 0 === a.count && to(a, a.stylesheets);
  return 0 < a.count ? function(b) {
    var c = setTimeout(function() {
      a.stylesheets && to(a, a.stylesheets);
      if (a.unsuspend) {
        var d = a.unsuspend;
        a.unsuspend = null;
        d();
      }
    }, 6e4);
    a.unsuspend = b;
    return function() {
      a.unsuspend = null;
      clearTimeout(c);
    };
  } : null;
}
function so() {
  this.count--;
  if (0 === this.count) {
    if (this.stylesheets)
      to(this, this.stylesheets);
    else if (this.unsuspend) {
      var a = this.unsuspend;
      this.unsuspend = null;
      a();
    }
  }
}
var uo = null;
function to(a, b) {
  a.stylesheets = null;
  null !== a.unsuspend && (a.count++, uo = /* @__PURE__ */ new Map(), b.forEach(vo, a), uo = null, so.call(a));
}
function vo(a, b) {
  if (!(b.state.loading & 4)) {
    var c = uo.get(a);
    if (c)
      var d = c.get(null);
    else {
      c = /* @__PURE__ */ new Map();
      uo.set(a, c);
      for (var e = a.querySelectorAll("link[data-precedence],style[data-precedence]"), f2 = 0; f2 < e.length; f2++) {
        var g = e[f2];
        if ("link" === g.nodeName || "not all" !== g.getAttribute("media"))
          c.set(g.dataset.precedence, g), d = g;
      }
      d && c.set(null, d);
    }
    e = b.instance;
    g = e.getAttribute("data-precedence");
    f2 = c.get(g) || d;
    f2 === d && c.set(null, e);
    c.set(g, e);
    this.count++;
    d = so.bind(this);
    e.addEventListener("load", d);
    e.addEventListener(
      "error",
      d
    );
    f2 ? f2.parentNode.insertBefore(e, f2.nextSibling) : (a = 9 === a.nodeType ? a.head : a, a.insertBefore(e, a.firstChild));
    b.state.loading |= 4;
  }
}
function wo(a) {
  this._internalRoot = a;
}
xo.prototype.render = wo.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(u(409));
  bl(a, b, null, null);
};
xo.prototype.unmount = wo.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Ek(function() {
      bl(null, a, null, null);
    });
    b[Ib] = null;
  }
};
function xo(a) {
  this._internalRoot = a;
}
xo.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = F;
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < em.length && 0 !== b && b < em[c].priority; c++)
      ;
    em.splice(c, 0, a);
    0 === c && jm(a);
  }
};
function yo(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function zo(a, b) {
  if ("font" === a)
    return "";
  if ("string" === typeof b)
    return "use-credentials" === b ? b : "";
}
var Ao = da.ReactDOMCurrentDispatcher;
da.Events = [Rb, Sb, Tb, Pc, Qc, Dk];
var Bo = { findFiberByHostInstance: Pb, bundleType: 0, version: "19.0.0-experimental-2b036d3f1-20240327", rendererPackageName: "react-dom" };
var Co = { bundleType: Bo.bundleType, version: Bo.version, rendererPackageName: Bo.rendererPackageName, rendererConfig: Bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ea.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Vc(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: Bo.findFiberByHostInstance || gl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "19.0.0-experimental-2b036d3f1-20240327" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Do.isDisabled && Do.supportsFiber)
    try {
      gb = Do.inject(Co), hb = Do;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = da;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!yo(b))
    throw Error(u(299));
  return al(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!yo(a))
    throw Error(u(299));
  var c = false, d = "", e = Xg, f2 = Yg, g = Zg, h2 = null;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onUncaughtError && (e = b.onUncaughtError), void 0 !== b.onCaughtError && (f2 = b.onCaughtError), void 0 !== b.onRecoverableError && (g = b.onRecoverableError), void 0 !== b.unstable_transitionCallbacks && (h2 = b.unstable_transitionCallbacks));
  b = $k(a, 1, false, null, null, c, false, d, e, f2, g, h2, null);
  a[Ib] = b.current;
  Ai(8 === a.nodeType ? a.parentNode : a);
  return new wo(b);
};
reactDom_production_min.experimental_useFormState = function(a, b, c) {
  return ja(a, b, c);
};
reactDom_production_min.experimental_useFormStatus = function() {
  return ia();
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(u(188));
    a = Object.keys(a).join(",");
    throw Error(u(268, a));
  }
  a = Vc(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Ek(a);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!yo(a))
    throw Error(u(299));
  var d = false, e = "", f2 = Xg, g = Yg, h2 = Zg, k2 = null, n2 = null;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (d = true), void 0 !== c.identifierPrefix && (e = c.identifierPrefix), void 0 !== c.onUncaughtError && (f2 = c.onUncaughtError), void 0 !== c.onCaughtError && (g = c.onCaughtError), void 0 !== c.onRecoverableError && (h2 = c.onRecoverableError), void 0 !== c.unstable_transitionCallbacks && (k2 = c.unstable_transitionCallbacks), void 0 !== c.formState && (n2 = c.formState));
  b = $k(a, 1, true, b, null != c ? c : null, d, false, e, f2, g, h2, k2, n2);
  b.context = Xc;
  c = b.current;
  d = Gg(c);
  e = ke(d);
  e.callback = null;
  le(c, e, d);
  b.current.lanes = d;
  rk(b, d);
  Rd(b);
  a[Ib] = b.current;
  Ai(a);
  return new xo(b);
};
reactDom_production_min.preconnect = function(a, b) {
  "string" === typeof a && (b ? (b = b.crossOrigin, b = "string" === typeof b ? "use-credentials" === b ? b : "" : void 0) : b = null, Ao.current.preconnect(a, b));
};
reactDom_production_min.prefetchDNS = function(a) {
  "string" === typeof a && Ao.current.prefetchDNS(a);
};
reactDom_production_min.preinit = function(a, b) {
  if ("string" === typeof a && b && "string" === typeof b.as) {
    var c = b.as, d = zo(c, b.crossOrigin), e = "string" === typeof b.integrity ? b.integrity : void 0, f2 = "string" === typeof b.fetchPriority ? b.fetchPriority : void 0;
    "style" === c ? Ao.current.preinitStyle(a, "string" === typeof b.precedence ? b.precedence : void 0, { crossOrigin: d, integrity: e, fetchPriority: f2 }) : "script" === c && Ao.current.preinitScript(a, { crossOrigin: d, integrity: e, fetchPriority: f2, nonce: "string" === typeof b.nonce ? b.nonce : void 0 });
  }
};
reactDom_production_min.preinitModule = function(a, b) {
  if ("string" === typeof a)
    if ("object" === typeof b && null !== b) {
      if (null == b.as || "script" === b.as) {
        var c = zo(b.as, b.crossOrigin);
        Ao.current.preinitModuleScript(a, { crossOrigin: c, integrity: "string" === typeof b.integrity ? b.integrity : void 0, nonce: "string" === typeof b.nonce ? b.nonce : void 0 });
      }
    } else
      null == b && Ao.current.preinitModuleScript(a);
};
reactDom_production_min.preload = function(a, b) {
  if ("string" === typeof a && "object" === typeof b && null !== b && "string" === typeof b.as) {
    var c = b.as, d = zo(c, b.crossOrigin);
    Ao.current.preload(a, c, { crossOrigin: d, integrity: "string" === typeof b.integrity ? b.integrity : void 0, nonce: "string" === typeof b.nonce ? b.nonce : void 0, type: "string" === typeof b.type ? b.type : void 0, fetchPriority: "string" === typeof b.fetchPriority ? b.fetchPriority : void 0, referrerPolicy: "string" === typeof b.referrerPolicy ? b.referrerPolicy : void 0, imageSrcSet: "string" === typeof b.imageSrcSet ? b.imageSrcSet : void 0, imageSizes: "string" === typeof b.imageSizes ? b.imageSizes : void 0 });
  }
};
reactDom_production_min.preloadModule = function(a, b) {
  if ("string" === typeof a)
    if (b) {
      var c = zo(b.as, b.crossOrigin);
      Ao.current.preloadModule(a, { as: "string" === typeof b.as && "script" !== b.as ? b.as : void 0, crossOrigin: c, integrity: "string" === typeof b.integrity ? b.integrity : void 0 });
    } else
      Ao.current.preloadModule(a);
};
reactDom_production_min.unstable_batchedUpdates = Dk;
reactDom_production_min.unstable_runWithPriority = Cb;
reactDom_production_min.useFormState = ja;
reactDom_production_min.useFormStatus = ia;
reactDom_production_min.version = "19.0.0-experimental-2b036d3f1-20240327";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
export {
  React as R,
  commonjsGlobal as a,
  reactDomExports as b,
  createRoot as c,
  client as d,
  getDefaultExportFromCjs as g,
  jsxRuntimeExports as j,
  reactExports as r
};
//# sourceMappingURL=client.Dtxw8aO3.js.map
