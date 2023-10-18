(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var aa = "&action=", ba = ".wikipedia.org", ca = "CSSStyleDeclaration", da = "Clobbering detected", ea = "Edge", fa = "Element", ha = "GET", ia = "Node", ja = "SCRIPT", ka = "SPAN", la = "STYLE", ma = "SW_READER_LIST_", na = "SW_READER_LIST_CLOSED_", oa = "Share this post", pa = "Symbol.iterator", qa = "_blank", ra = "about:invalid#zClosurez", sa = "about:invalid#zSoyz", ta = "attributes", ua = "block", va = "click", wa = "collapsed", xa = "collapsible", ya = "comment-editor", za = "commentId", Aa = "complete", Ba = "contact-form-email", Ca = "contact-form-email-message", Da = "contact-form-error-message", Ea = "contact-form-error-message-with-border", Fa = "contact-form-name", Ga = "contact-form-submit", Ha = "contact-form-success-message", Ia = "contact-form-success-message-with-border", Ja = "data-height", Ka = "data-sanitizer-", La = "data-viewurl", Ma = "displayModeFull", Na = "displayModeLayout", Oa = "displayModeNone", l = "div", Pa = "dropdown-toggle", Qa = "error", Ra = "expanded", Sa = "followers-grid", m = "function", Ta = "getAttribute", Ua = "getElementsByTagName", Va = "getPropertyValue", Wa = "hasAttribute", Xa = "hidden", Ya = "https:", Za = "layout-widget-description", $a = "layout-widget-title", ab = "max-height: 0;", bb = "msMatchesSelector", cb = "namespaceURI", p = "none", q = "number", t = "object", db = "prerender", eb = "ready", fb = "removeAttribute", gb = "rotate(-45deg)", hb = "setAttribute", ib = "status-message", jb = "status-message-inner", u = "string", kb = "style", lb = "success", mb = "text/javascript", nb = "thread-collapsed", ob = "thread-expanded", pb = "title", qb = "toggle", rb = "visible", sb = "wikipedia-search-input", tb = "wikipedia-search-more", ub = "wikipedia-search-results", vb = "wikipedia-search-results-header", w;
    function wb(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var xb = typeof Object.defineProperties == m ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function yb(a) {
        a = [t == typeof globalThis && globalThis, a, t == typeof window && window, t == typeof self && self, t == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var zb = yb(this);
    function x(a, b) {
        if (b)
            a: {
                var c = zb;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && xb(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    x("Symbol", function(a) {
        function b(f) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++,f)
        }
        function c(f, g) {
            this.C = f;
            xb(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.C
        }
        ;
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , e = 0;
        return b
    });
    x(pa, function(a) {
        if (a)
            return a;
        a = Symbol(pa);
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = zb[b[c]];
            typeof d === m && typeof d.prototype[a] != m && xb(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Ab(wb(this))
                }
            })
        }
        return a
    });
    function Ab(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    function Bb(a) {
        return a.raw = a
    }
    function Cb(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == q)
            return {
                next: wb(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var Db = typeof Object.create == m ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , Eb;
    if (typeof Object.setPrototypeOf == m)
        Eb = Object.setPrototypeOf;
    else {
        var Fb;
        a: {
            var Gb = {
                a: !0
            }
              , Hb = {};
            try {
                Hb.__proto__ = Gb;
                Fb = Hb.a;
                break a
            } catch (a) {}
            Fb = !1
        }
        Eb = Fb ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var Ib = Eb;
    function y(a, b) {
        a.prototype = Db(b.prototype);
        a.prototype.constructor = a;
        if (Ib)
            Ib(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.O = b.prototype
    }
    function Jb() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    function Kb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    x("WeakMap", function(a) {
        function b(k) {
            this.ga = (h += Math.random() + 1).toString();
            if (k) {
                k = Cb(k);
                for (var n; !(n = k.next()).done; )
                    n = n.value,
                    this.set(n[0], n[1])
            }
        }
        function c() {}
        function d(k) {
            var n = typeof k;
            return n === t && null !== k || n === m
        }
        function e(k) {
            if (!Kb(k, g)) {
                var n = new c;
                xb(k, g, {
                    value: n
                })
            }
        }
        function f(k) {
            var n = Object[k];
            n && (Object[k] = function(r) {
                if (r instanceof c)
                    return r;
                Object.isExtensible(r) && e(r);
                return n(r)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , n = Object.seal({})
                  , r = new a([[k, 2], [n, 3]]);
                if (2 != r.get(k) || 3 != r.get(n))
                    return !1;
                r.delete(k);
                r.set(n, 4);
                return !r.has(k) && 4 == r.get(n)
            } catch (v) {
                return !1
            }
        }())
            return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, n) {
            if (!d(k))
                throw Error("Invalid WeakMap key");
            e(k);
            if (!Kb(k, g))
                throw Error("WeakMap key fail: " + k);
            k[g][this.ga] = n;
            return this
        }
        ;
        b.prototype.get = function(k) {
            return d(k) && Kb(k, g) ? k[g][this.ga] : void 0
        }
        ;
        b.prototype.has = function(k) {
            return d(k) && Kb(k, g) && Kb(k[g], this.ga)
        }
        ;
        b.prototype.delete = function(k) {
            return d(k) && Kb(k, g) && Kb(k[g], this.ga) ? delete k[g][this.ga] : !1
        }
        ;
        return b
    });
    x("Map", function(a) {
        function b() {
            var h = {};
            return h.sa = h.next = h.head = h
        }
        function c(h, k) {
            var n = h[1];
            return Ab(function() {
                if (n) {
                    for (; n.head != h[1]; )
                        n = n.sa;
                    for (; n.next != n.head; )
                        return n = n.next,
                        {
                            done: !1,
                            value: k(n)
                        };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
        function d(h, k) {
            var n = k && typeof k;
            n == t || n == m ? f.has(k) ? n = f.get(k) : (n = "" + ++g,
            f.set(k, n)) : n = "p_" + k;
            var r = h[0][n];
            if (r && Kb(h[0], n))
                for (h = 0; h < r.length; h++) {
                    var v = r[h];
                    if (k !== k && v.key !== v.key || k === v.key)
                        return {
                            id: n,
                            list: r,
                            index: h,
                            aa: v
                        }
                }
            return {
                id: n,
                list: r,
                index: -1,
                aa: void 0
            }
        }
        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = Cb(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        }
        if (function() {
            if (!a || typeof a != m || !a.prototype.entries || typeof Object.seal != m)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(Cb([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var n = k.entries()
                  , r = n.next();
                if (r.done || r.value[0] != h || "s" != r.value[1])
                    return !1;
                r = n.next();
                return r.done || 4 != r.value[0].x || "t" != r.value[1] || !n.next().done ? !1 : !0
            } catch (v) {
                return !1
            }
        }())
            return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this[0][n.id] = []);
            n.aa ? n.aa.value = k : (n.aa = {
                next: this[1],
                sa: this[1].sa,
                head: this[1],
                key: h,
                value: k
            },
            n.list.push(n.aa),
            this[1].sa.next = n.aa,
            this[1].sa = n.aa,
            this.size++);
            return this
        }
        ;
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.aa && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.aa.sa.next = h.aa.next,
            h.aa.next.sa = h.aa.sa,
            h.aa.head = null,
            this.size--,
            !0) : !1
        }
        ;
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].sa = b();
            this.size = 0
        }
        ;
        e.prototype.has = function(h) {
            return !!d(this, h).aa
        }
        ;
        e.prototype.get = function(h) {
            return (h = d(this, h).aa) && h.value
        }
        ;
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        }
        ;
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        }
        ;
        e.prototype.forEach = function(h, k) {
            for (var n = this.entries(), r; !(r = n.next()).done; )
                r = r.value,
                h.call(k, r[1], r[0], this)
        }
        ;
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    var Lb = typeof Object.assign == m ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Kb(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    x("Object.assign", function(a) {
        return a || Lb
    });
    x("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    function Mb(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    x("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Mb(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
                if (d[--c] != b[--e])
                    return !1;
            return 0 >= e
        }
    });
    x("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Mb(this, b, "startsWith");
            b += "";
            var e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    x("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== q ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    function Nb(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    }
    x("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Nb(this, function(b, c) {
                return c
            })
        }
    });
    x("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Nb(this, function(b) {
                return b
            })
        }
    });
    x("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == m) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    });
    x("Set", function(a) {
        function b(c) {
            this.C = new Map;
            if (c) {
                c = Cb(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.C.size
        }
        if (function() {
            if (!a || typeof a != m || !a.prototype.entries || typeof Object.seal != m)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(Cb([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.C.set(c, c);
            this.size = this.C.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.C.delete(c);
            this.size = this.C.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.C.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.C.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.C.entries()
        }
        ;
        b.prototype.values = function() {
            return this.C.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.C.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    x("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Kb(b, d) && c.push(b[d]);
            return c
        }
    });
    window.jstiming && window.jstiming.load.tick("widgetJsStart");
    function Ob() {
        window.jstiming.load.tick("ol")
    }
    function Pb(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b)
    }
    function Qb(a, b) {
        return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? Qb(a.parentNode, b) : null
    }
    function Rb() {
        window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++)
                a[c].complete ? null != Qb(a[c], "post") && Rb.apply(a[c]) : null != Qb(a[c], "post") && Pb(a[c], Rb);
            Pb(window, Ob);
            a = function() {
                for (var d = {}, e = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiments"], g = [], h = f.length, k = 0; k < h; k++) {
                    var n = f[k];
                    n in window && g.push(window[n])
                }
                e && (d.blogId = e);
                0 < g.length && (d.e = g.join(","));
                e = (document.location.protocol == Ya ? Ya : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, d, b || e)
            }
            ;
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    }
    ;
    var Sb = Sb || {}
      , z = this || self;
    function Tb(a) {
        a.Ba = void 0;
        a.Ya = function() {
            return a.Ba ? a.Ba : a.Ba = new a
        }
    }
    function Ub(a) {
        var b = typeof a;
        return b != t ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function Vb(a) {
        var b = Ub(a);
        return "array" == b || b == t && typeof a.length == q
    }
    function Wb(a) {
        var b = typeof a;
        return b == t && null != a || b == m
    }
    var Xb = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Yb = 0;
    function Zb(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function $b(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function B(a, b, c) {
        B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Zb : $b;
        return B.apply(null, arguments)
    }
    function ac(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function C(a, b) {
        a = a.split(".");
        var c = z;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Zd = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    function bc(a) {
        return a
    }
    ;function cc(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, cc);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    D(cc, Error);
    cc.prototype.name = "CustomError";
    var dc;
    function ec(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        cc.call(this, c + a[d])
    }
    D(ec, cc);
    ec.prototype.name = "AssertionError";
    var fc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (typeof a === u)
            return typeof b !== u || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , gc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = typeof a === u ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , hc = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === u ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , ic = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = typeof a === u ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    ;
    function jc(a, b) {
        return 0 <= fc(a, b)
    }
    function kc(a) {
        if (!Array.isArray(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    function lc(a, b) {
        b = fc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function mc(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function nc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function oc(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    function pc(a, b) {
        return mc.apply([], hc(a, b))
    }
    ;function qc(a) {
        a = a.className;
        return typeof a === u && a.match(/\S+/g) || []
    }
    function rc(a, b) {
        var c = qc(a);
        sc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }
    function tc(a, b) {
        var c = qc(a);
        c = uc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }
    function sc(a, b) {
        for (var c = 0; c < b.length; c++)
            jc(a, b[c]) || a.push(b[c])
    }
    function uc(a, b) {
        return a.filter(function(c) {
            return !jc(b, c)
        })
    }
    function vc(a, b, c) {
        for (var d = qc(a), e = !1, f = 0; f < d.length; f++)
            d[f] == b && (d.splice(f--, 1),
            e = !0);
        e && (d.push(c),
        a.className = d.join(" "))
    }
    function wc(a, b) {
        return jc(qc(a), b)
    }
    ;var xc, yc;
    a: {
        for (var zc = ["CLOSURE_FLAGS"], Ac = z, Bc = 0; Bc < zc.length; Bc++)
            if (Ac = Ac[zc[Bc]],
            null == Ac) {
                yc = null;
                break a
            }
        yc = Ac
    }
    var Cc = yc && yc[610401301];
    xc = null != Cc ? Cc : !1;
    function Dc(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    var F = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Ec = /&/g
      , Fc = /</g
      , Gc = />/g
      , Hc = /"/g
      , Ic = /'/g
      , Jc = /\x00/g
      , Kc = /[\x00&<>"']/;
    function Lc() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Nc, Oc = z.navigator;
    Nc = Oc ? Oc.userAgentData || null : null;
    function Pc(a) {
        return xc ? Nc ? Nc.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }
    function G(a) {
        return -1 != Lc().indexOf(a)
    }
    ;function Qc() {
        return xc ? !!Nc && 0 < Nc.brands.length : !1
    }
    function Rc() {
        return Qc() ? !1 : G("Opera")
    }
    function Sc() {
        return Qc() ? !1 : G("Trident") || G("MSIE")
    }
    function Tc() {
        return G("Safari") && !(Uc() || (Qc() ? 0 : G("Coast")) || Rc() || (Qc() ? 0 : G(ea)) || (Qc() ? Pc("Microsoft Edge") : G("Edg/")) || (Qc() ? Pc("Opera") : G("OPR")) || G("Firefox") || G("FxiOS") || G("Silk") || G("Android"))
    }
    function Uc() {
        return Qc() ? Pc("Chromium") : (G("Chrome") || G("CriOS")) && !(Qc() ? 0 : G(ea)) || G("Silk")
    }
    function Vc() {
        return G("Android") && !(Uc() || G("Firefox") || G("FxiOS") || Rc() || G("Silk"))
    }
    function Wc() {
        var a = Lc();
        if (Sc()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
        } else
            a = "";
        return a
    }
    function Xc() {
        if (Qc()) {
            var a = Nc.brands.find(function(b) {
                return "Internet Explorer" === b.brand
            });
            if (!a || !a.version)
                return NaN;
            a = a.version.split(".")
        } else {
            a = Wc();
            if ("" === a)
                return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    }
    ;function Yc(a) {
        Yc[" "](a);
        return a
    }
    Yc[" "] = function() {}
    ;
    var Zc = Rc()
      , $c = Sc()
      , ad = G(ea)
      , bd = G("Gecko") && !(-1 != Lc().toLowerCase().indexOf("webkit") && !G(ea)) && !(G("Trident") || G("MSIE")) && !G(ea)
      , cd = -1 != Lc().toLowerCase().indexOf("webkit") && !G(ea);
    function dd() {
        var a = z.document;
        return a ? a.documentMode : void 0
    }
    var ed;
    a: {
        var fd = ""
          , gd = function() {
            var a = Lc();
            if (bd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (ad)
                return /Edge\/([\d\.]+)/.exec(a);
            if ($c)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (cd)
                return /WebKit\/(\S+)/.exec(a);
            if (Zc)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        gd && (fd = gd ? gd[1] : "");
        if ($c) {
            var hd = dd();
            if (null != hd && hd > parseFloat(fd)) {
                ed = String(hd);
                break a
            }
        }
        ed = fd
    }
    var id = ed, jd;
    if (z.document && $c) {
        var kd = dd();
        jd = kd ? kd : parseInt(id, 10) || void 0
    } else
        jd = void 0;
    var ld = jd;
    try {
        (new self.OffscreenCanvas(0,0)).getContext("2d")
    } catch (a) {}
    var md = $c || cd;
    function nd(a) {
        return function() {
            return a
        }
    }
    function od() {
        return null
    }
    function pd() {}
    function qd(a) {
        return a
    }
    ;function rd(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function sd(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function td(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function ud(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function vd(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function wd(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var xd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function yd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < xd.length; f++)
                c = xd[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var zd;
    function Ad() {
        if (void 0 === zd) {
            var a = null
              , b = z.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: bc,
                        createScript: bc,
                        createScriptURL: bc
                    })
                } catch (c) {
                    z.console && z.console.error(c.message)
                }
                zd = a
            } else
                zd = a
        }
        return zd
    }
    ;function Bd(a, b) {
        this.C = a === Cd && b || "";
        this.D = Dd
    }
    Bd.prototype.oa = !0;
    Bd.prototype.la = function() {
        return this.C
    }
    ;
    var Dd = {}
      , Cd = {};
    var Ed = {};
    function Fd(a) {
        this.C = a;
        this.oa = !0
    }
    Fd.prototype.toString = function() {
        return this.C.toString()
    }
    ;
    Fd.prototype.la = function() {
        return this.C.toString()
    }
    ;
    function Gd(a) {
        this.C = a
    }
    Gd.prototype.toString = function() {
        return this.C + ""
    }
    ;
    Gd.prototype.oa = !0;
    Gd.prototype.la = function() {
        return this.C.toString()
    }
    ;
    function Hd(a) {
        return a instanceof Gd && a.constructor === Gd ? a.C : "type_error:TrustedResourceUrl"
    }
    var Id = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Jd = {};
    function Kd(a) {
        var b = Ad();
        a = b ? b.createScriptURL(a) : a;
        return new Gd(a,Jd)
    }
    function Ld(a, b, c) {
        if (null == c)
            return b;
        if (typeof c === u)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;function H(a) {
        this.C = a
    }
    H.prototype.toString = function() {
        return this.C.toString()
    }
    ;
    H.prototype.oa = !0;
    H.prototype.la = function() {
        return this.C.toString()
    }
    ;
    function Md(a) {
        return a instanceof H && a.constructor === H ? a.C : "type_error:SafeUrl"
    }
    var Nd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , Od = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Pd(a) {
        a instanceof H || (a = typeof a == t && a.oa ? a.la() : String(a),
        Od.test(a) ? a = new H(a,Qd) : (a = String(a).replace(/(%0A|%0D)/g, ""),
        a = a.match(Nd) ? new H(a,Qd) : null));
        return a || Rd
    }
    var Qd = {}
      , Rd = new H(ra,Qd);
    var Sd = {};
    function Td(a) {
        this.C = a;
        this.oa = !0
    }
    Td.prototype.la = function() {
        return this.C
    }
    ;
    Td.prototype.toString = function() {
        return this.C.toString()
    }
    ;
    function Ud(a) {
        return a instanceof Td && a.constructor === Td ? a.C : "type_error:SafeStyle"
    }
    var Vd = new Td("",Sd);
    function Wd(a) {
        if (a instanceof H)
            return 'url("' + Md(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Bd)
            a = a instanceof Bd && a.constructor === Bd && a.D === Dd ? a.C : "type_error:Const";
        else {
            a = String(a);
            var b = a.replace(Xd, "$1").replace(Xd, "$1").replace(Yd, "url");
            if (Zd.test(b)) {
                if (b = !$d.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && ae(a)
                }
                a = b ? be(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new ec("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function ae(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var Zd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$")
      , Yd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g")
      , Xd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g")
      , $d = /\/\*/;
    function be(a) {
        return a.replace(Yd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = Pd(d).la();
            return c + f + b + f + e
        })
    }
    ;var ce = {};
    function de(a) {
        this.C = a;
        this.oa = !0
    }
    de.prototype.toString = function() {
        return this.C.toString()
    }
    ;
    function ee(a) {
        function b(d) {
            Array.isArray(d) ? d.forEach(b) : c += fe(d)
        }
        var c = "";
        Array.prototype.forEach.call(arguments, b);
        return new de(c,ce)
    }
    de.prototype.la = function() {
        return this.C
    }
    ;
    function fe(a) {
        return a instanceof de && a.constructor === de ? a.C : "type_error:SafeStyleSheet"
    }
    var ge = new de("",ce);
    var he = {};
    function ie(a) {
        this.C = a;
        this.oa = !0
    }
    ie.prototype.la = function() {
        return this.C.toString()
    }
    ;
    ie.prototype.toString = function() {
        return this.C.toString()
    }
    ;
    function je(a) {
        return a instanceof ie && a.constructor === ie ? a.C : "type_error:SafeHtml"
    }
    function ke(a) {
        a instanceof ie || (a = typeof a == t && a.oa ? a.la() : String(a),
        Kc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ec, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Fc, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Gc, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Hc, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(Ic, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(Jc, "&#0;"))),
        a = le(a));
        return a
    }
    function me(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = ke(e),
            d.push(je(e).toString()))
        }
        var c = ke(ne)
          , d = [];
        a.forEach(b);
        return le(d.join(je(c).toString()))
    }
    function oe(a) {
        return me(Array.prototype.slice.call(arguments))
    }
    function le(a) {
        var b = Ad();
        a = b ? b.createHTML(a) : a;
        return new ie(a,he)
    }
    var pe = le("<!DOCTYPE html>")
      , ne = new ie(z.trustedTypes && z.trustedTypes.emptyHTML || "",he)
      , qe = le("<br>");
    var re = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        var a = document.createElement(l)
          , b = document.createElement(l);
        b.appendChild(document.createElement(l));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = je(ne);
        return !b.parentElement
    });
    function se(a, b) {
        if (re())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = je(b)
    }
    function te(a, b) {
        var c = ue(a.ownerDocument && a.ownerDocument.defaultView);
        c && a.setAttribute("nonce", c);
        a.src = Hd(b)
    }
    var ve = /^[\w+/_-]+[=]{0,2}$/;
    function ue(a) {
        a = (a || z).document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ve.test(a) ? a : "" : ""
    }
    ;function we(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    we.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    we.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    we.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function xe(a, b) {
        this.width = a;
        this.height = b
    }
    w = xe.prototype;
    w.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    w.ka = function() {
        return !(this.width * this.height)
    }
    ;
    w.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    w.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    w.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var ye = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    function ze(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Ae(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function I(a) {
        return Be(document, a)
    }
    function Be(a, b) {
        return typeof b === u ? a.getElementById(b) : b
    }
    function Ce(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : De(document, "*", a, b)
    }
    function J(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : De(c, "*", a, b)[0] || null
        }
        return a || null
    }
    function De(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                typeof b.split == m && jc(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    function Ee(a, b) {
        rd(b, function(c, d) {
            c && typeof c == t && c.oa && (c = c.la());
            d == kb ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Fe.hasOwnProperty(d) ? a.setAttribute(Fe[d], c) : Dc(d, "aria-") || Dc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Fe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function Ge(a, b, c) {
        return He(document, arguments)
    }
    function He(a, b) {
        var c = b[1]
          , d = Ie(a, String(b[0]));
        c && (typeof c === u ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Ee(d, c));
        2 < b.length && Je(a, d, b, 2);
        return d
    }
    function Je(a, b, c, d) {
        function e(h) {
            h && b.appendChild(typeof h === u ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Vb(f) || Wb(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && typeof f.length == q) {
                        if (Wb(f)) {
                            var g = typeof f.item == m || typeof f.item == u;
                            break a
                        }
                        if (typeof f === m) {
                            g = typeof f.item == m;
                            break a
                        }
                    }
                    g = !1
                }
                gc(g ? nc(f) : f, e)
            }
        }
    }
    function Ie(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function Ke(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function Le(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function Me(a) {
        var b;
        if (md && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return Wb(b) && 1 == b.nodeType ? b : null
    }
    function Ne(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            Ke(a),
            a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
    }
    var Oe = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Pe = {
        IMG: " ",
        BR: "\n"
    };
    function Qe(a, b, c) {
        if (!(a.nodeName in Oe))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Pe)
                b.push(Pe[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Qe(a, b, c),
                    a = a.nextSibling
    }
    function Re(a, b, c) {
        if (!b && !c)
            return null;
        var d = b ? String(b).toUpperCase() : null;
        return Se(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === u && jc(e.className.split(/\s+/), c))
        })
    }
    function Se(a, b) {
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function Te(a) {
        this.D = a || z.document || document
    }
    Te.prototype.Xa = function() {
        return Be(this.D)
    }
    ;
    Te.prototype.C = function(a, b, c) {
        return He(this.D, arguments)
    }
    ;
    function Ue(a, b) {
        return Ie(a.D, b)
    }
    Te.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    Te.prototype.append = function(a, b) {
        Je(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1)
    }
    ;
    function Ve(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;function We() {
        this.N = this.N;
        this.ha = this.ha
    }
    We.prototype.N = !1;
    We.prototype.isDisposed = function() {
        return this.N
    }
    ;
    We.prototype.Aa = function() {
        this.N || (this.N = !0,
        this.W())
    }
    ;
    We.prototype.W = function() {
        if (this.ha)
            for (; this.ha.length; )
                this.ha.shift()()
    }
    ;
    function Xe(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ma = !1
    }
    Xe.prototype.stopPropagation = function() {
        this.Ma = !0
    }
    ;
    Xe.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var Ye = function() {
        if (!z.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            z.addEventListener("test", c, b);
            z.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    function Ze(a, b) {
        Xe.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.C = null;
        a && this.init(a, b)
    }
    D(Ze, Xe);
    var $e = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Ze.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (bd) {
                a: {
                    try {
                        Yc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else
            "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.offsetX = cd || void 0 !== a.offsetX ? a.offsetX : a.layerX,
        this.offsetY = cd || void 0 !== a.offsetY ? a.offsetY : a.layerY,
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === u ? a.pointerType : $e[a.pointerType] || "";
        this.state = a.state;
        this.C = a;
        a.defaultPrevented && Ze.O.preventDefault.call(this)
    }
    ;
    Ze.prototype.stopPropagation = function() {
        Ze.O.stopPropagation.call(this);
        this.C.stopPropagation ? this.C.stopPropagation() : this.C.cancelBubble = !0
    }
    ;
    Ze.prototype.preventDefault = function() {
        Ze.O.preventDefault.call(this);
        var a = this.C;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var af = "closure_listenable_" + (1E6 * Math.random() | 0);
    function bf(a) {
        return !(!a || !a[af])
    }
    ;var cf = 0;
    function df(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.bb = e;
        this.key = ++cf;
        this.Na = this.Va = !1
    }
    function ef(a) {
        a.Na = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.bb = null
    }
    ;function ff(a) {
        this.src = a;
        this.C = {};
        this.D = 0
    }
    ff.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [],
        this.D++);
        var g = gf(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.Va = !1)) : (b = new df(b,this.src,f,!!d,e),
        b.Va = c,
        a.push(b));
        return b
    }
    ;
    function hf(a, b) {
        var c = b.type;
        if (!(c in a.C))
            return !1;
        var d = lc(a.C[c], b);
        d && (ef(b),
        0 == a.C[c].length && (delete a.C[c],
        a.D--));
        return d
    }
    function jf(a) {
        var b = 0, c;
        for (c in a.C) {
            for (var d = a.C[c], e = 0; e < d.length; e++)
                ++b,
                ef(d[e]);
            delete a.C[c];
            a.D--
        }
    }
    function kf(a, b, c, d, e) {
        a = a.C[b.toString()];
        b = -1;
        a && (b = gf(a, c, d, e));
        return -1 < b ? a[b] : null
    }
    function gf(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Na && f.listener == b && f.capture == !!c && f.bb == d)
                return e
        }
        return -1
    }
    ;var lf = "closure_lm_" + (1E6 * Math.random() | 0)
      , mf = {}
      , nf = 0;
    function K(a, b, c, d, e) {
        if (d && d.once)
            return of(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                K(a, b[f], c, d, e);
            return null
        }
        c = pf(c);
        return bf(a) ? a.fa.add(String(b), c, !1, Wb(d) ? !!d.capture : !!d, e) : qf(a, b, c, !1, d, e)
    }
    function qf(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Wb(e) ? !!e.capture : !!e
          , h = rf(a);
        h || (a[lf] = h = new ff(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy)
            return c;
        d = sf();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Ye || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(tf(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        nf++;
        return c
    }
    function sf() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = uf;
        return a
    }
    function of(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                of(a, b[f], c, d, e);
            return null
        }
        c = pf(c);
        return bf(a) ? a.fa.add(String(b), c, !0, Wb(d) ? !!d.capture : !!d, e) : qf(a, b, c, !0, d, e)
    }
    function vf(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                vf(a, b[f], c, d, e);
        else
            d = Wb(d) ? !!d.capture : !!d,
            c = pf(c),
            bf(a) ? (a = a.fa,
            b = String(b).toString(),
            b in a.C && (f = a.C[b],
            c = gf(f, c, d, e),
            -1 < c && (ef(f[c]),
            Array.prototype.splice.call(f, c, 1),
            0 == f.length && (delete a.C[b],
            a.D--)))) : a && (a = rf(a)) && (c = kf(a, b, c, d, e)) && wf(c)
    }
    function wf(a) {
        if (typeof a === q || !a || a.Na)
            return !1;
        var b = a.src;
        if (bf(b))
            return hf(b.fa, a);
        var c = a.type
          , d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(tf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        nf--;
        (c = rf(b)) ? (hf(c, a),
        0 == c.D && (c.src = null,
        b[lf] = null)) : ef(a);
        return !0
    }
    function xf(a) {
        if (a)
            if (bf(a))
                a.fa && jf(a.fa);
            else if (a = rf(a)) {
                var b = 0, c;
                for (c in a.C)
                    for (var d = a.C[c].concat(), e = 0; e < d.length; ++e)
                        wf(d[e]) && ++b
            }
    }
    function tf(a) {
        return a in mf ? mf[a] : mf[a] = "on" + a
    }
    function uf(a, b) {
        if (a.Na)
            a = !0;
        else {
            b = new Ze(b,this);
            var c = a.listener
              , d = a.bb || a.src;
            a.Va && wf(a);
            a = c.call(d, b)
        }
        return a
    }
    function rf(a) {
        a = a[lf];
        return a instanceof ff ? a : null
    }
    var yf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function pf(a) {
        if (typeof a === m)
            return a;
        a[yf] || (a[yf] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[yf]
    }
    ;function zf(a) {
        We.call(this);
        this.D = a;
        this.C = {}
    }
    D(zf, We);
    var Af = [];
    function Bf(a, b, c, d) {
        Array.isArray(c) || (c && (Af[0] = c.toString()),
        c = Af);
        for (var e = 0; e < c.length; e++) {
            var f = K(b, c[e], d || a.handleEvent, !1, a.D || a);
            if (!f)
                break;
            a.C[f.key] = f
        }
    }
    function Cf(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                Cf(a, b, c[g], d, e, f);
        else
            d = d || a.handleEvent,
            e = Wb(e) ? !!e.capture : !!e,
            f = f || a.D || a,
            d = pf(d),
            e = !!e,
            c = bf(b) ? kf(b.fa, String(c), d, e, f) : b ? (b = rf(b)) ? kf(b, c, d, e, f) : null : null,
            c && (wf(c),
            delete a.C[c.key])
    }
    function Df(a) {
        rd(a.C, function(b, c) {
            this.C.hasOwnProperty(c) && wf(b)
        }, a);
        a.C = {}
    }
    zf.prototype.W = function() {
        zf.O.W.call(this);
        Df(this)
    }
    ;
    zf.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function Ff() {
        We.call(this);
        this.fa = new ff(this);
        this.hd = this;
        this.wb = null
    }
    D(Ff, We);
    Ff.prototype[af] = !0;
    Ff.prototype.addEventListener = function(a, b, c, d) {
        K(this, a, b, c, d)
    }
    ;
    Ff.prototype.removeEventListener = function(a, b, c, d) {
        vf(this, a, b, c, d)
    }
    ;
    function L(a, b) {
        var c = a.wb;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.wb)
                d.push(c),
                ++e
        }
        a = a.hd;
        c = b.type || b;
        typeof b === u ? b = new Xe(b,a) : b instanceof Xe ? b.target = b.target || a : (e = b,
        b = new Xe(c,a),
        yd(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.Ma && 0 <= f; f--) {
                var g = b.currentTarget = d[f];
                e = Gf(g, c, !0, b) && e
            }
        b.Ma || (g = b.currentTarget = a,
        e = Gf(g, c, !0, b) && e,
        b.Ma || (e = Gf(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.Ma && f < d.length; f++)
                g = b.currentTarget = d[f],
                e = Gf(g, c, !1, b) && e
    }
    Ff.prototype.W = function() {
        Ff.O.W.call(this);
        this.fa && jf(this.fa);
        this.wb = null
    }
    ;
    function Gf(a, b, c, d) {
        b = a.fa.C[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Na && g.capture == c) {
                var h = g.listener
                  , k = g.bb || g.src;
                g.Va && hf(a.fa, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    }
    ;function Hf(a, b) {
        this.F = a;
        this.G = b;
        this.D = 0;
        this.C = null
    }
    Hf.prototype.get = function() {
        if (0 < this.D) {
            this.D--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else
            a = this.F();
        return a
    }
    ;
    function If(a, b) {
        a.G(b);
        100 > a.D && (a.D++,
        b.next = a.C,
        a.C = b)
    }
    ;var Jf;
    function Kf() {
        var a = z.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
            var e = Ie(document, "IFRAME");
            e.style.display = p;
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = B(function(k) {
                if (("*" == h || k.origin == h) && k.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !Sc()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Vb;
                    c.Vb = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    Vb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            z.setTimeout(e, 0)
        }
    }
    ;function Lf(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;function Mf() {
        this.D = this.C = null
    }
    Mf.prototype.add = function(a, b) {
        var c = Nf.get();
        c.set(a, b);
        this.D ? this.D.next = c : this.C = c;
        this.D = c
    }
    ;
    function Of() {
        var a = Pf
          , b = null;
        a.C && (b = a.C,
        a.C = a.C.next,
        a.C || (a.D = null),
        b.next = null);
        return b
    }
    var Nf = new Hf(function() {
        return new Qf
    }
    ,function(a) {
        return a.reset()
    }
    );
    function Qf() {
        this.next = this.scope = this.C = null
    }
    Qf.prototype.set = function(a, b) {
        this.C = a;
        this.scope = b;
        this.next = null
    }
    ;
    Qf.prototype.reset = function() {
        this.next = this.scope = this.C = null
    }
    ;
    var Rf, Sf = !1, Pf = new Mf;
    function Tf(a, b) {
        Rf || Uf();
        Sf || (Rf(),
        Sf = !0);
        Pf.add(a, b)
    }
    function Uf() {
        if (z.Promise && z.Promise.resolve) {
            var a = z.Promise.resolve(void 0);
            Rf = function() {
                a.then(Vf)
            }
        } else
            Rf = function() {
                var b = Vf;
                typeof z.setImmediate !== m || z.Window && z.Window.prototype && (Qc() || !G(ea)) && z.Window.prototype.setImmediate == z.setImmediate ? (Jf || (Jf = Kf()),
                Jf(b)) : z.setImmediate(b)
            }
    }
    function Vf() {
        for (var a; a = Of(); ) {
            try {
                a.C.call(a.scope)
            } catch (b) {
                Lf(b)
            }
            If(Nf, a)
        }
        Sf = !1
    }
    ;function Wf(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function Xf(a) {
        this.C = 0;
        this.N = void 0;
        this.G = this.D = this.F = null;
        this.J = this.K = !1;
        if (a != pd)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    Yf(b, 2, c)
                }, function(c) {
                    Yf(b, 3, c)
                })
            } catch (c) {
                Yf(this, 3, c)
            }
    }
    function Zf() {
        this.next = this.F = this.D = this.G = this.C = null;
        this.J = !1
    }
    Zf.prototype.reset = function() {
        this.F = this.D = this.G = this.C = null;
        this.J = !1
    }
    ;
    var $f = new Hf(function() {
        return new Zf
    }
    ,function(a) {
        a.reset()
    }
    );
    function ag(a, b, c) {
        var d = $f.get();
        d.G = a;
        d.D = b;
        d.F = c;
        return d
    }
    function bg() {
        var a, b, c = new Xf(function(d, e) {
            a = d;
            b = e
        }
        );
        return new cg(c,a,b)
    }
    Xf.prototype.then = function(a, b, c) {
        return dg(this, typeof a === m ? a : null, typeof b === m ? b : null, c)
    }
    ;
    Xf.prototype.$goog_Thenable = !0;
    Xf.prototype.cancel = function(a) {
        if (0 == this.C) {
            var b = new eg(a);
            Tf(function() {
                fg(this, b)
            }, this)
        }
    }
    ;
    function fg(a, b) {
        if (0 == a.C)
            if (a.F) {
                var c = a.F;
                if (c.D) {
                    for (var d = 0, e = null, f = null, g = c.D; g && (g.J || (d++,
                    g.C == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.C && 1 == d ? fg(c, b) : (f ? (d = f,
                    d.next == c.G && (c.G = d),
                    d.next = d.next.next) : gg(c),
                    hg(c, e, 3, b)))
                }
                a.F = null
            } else
                Yf(a, 3, b)
    }
    function ig(a, b) {
        a.D || 2 != a.C && 3 != a.C || jg(a);
        a.G ? a.G.next = b : a.D = b;
        a.G = b
    }
    function dg(a, b, c, d) {
        var e = ag(null, null, null);
        e.C = new Xf(function(f, g) {
            e.G = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (n) {
                    g(n)
                }
            }
            : f;
            e.D = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof eg ? g(h) : f(k)
                } catch (n) {
                    g(n)
                }
            }
            : g
        }
        );
        e.C.F = a;
        ig(a, e);
        return e.C
    }
    Xf.prototype.R = function(a) {
        this.C = 0;
        Yf(this, 2, a)
    }
    ;
    Xf.prototype.T = function(a) {
        this.C = 0;
        Yf(this, 3, a)
    }
    ;
    function Yf(a, b, c) {
        if (0 == a.C) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.C = 1;
            a: {
                var d = c
                  , e = a.R
                  , f = a.T;
                if (d instanceof Xf) {
                    ig(d, ag(e || pd, f || null, a));
                    var g = !0
                } else if (Wf(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Wb(d))
                        try {
                            var h = d.then;
                            if (typeof h === m) {
                                kg(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.N = c,
            a.C = b,
            a.F = null,
            jg(a),
            3 != b || c instanceof eg || lg(a, c))
        }
    }
    function kg(a, b, c, d, e) {
        function f(k) {
            h || (h = !0,
            d.call(e, k))
        }
        function g(k) {
            h || (h = !0,
            c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }
    function jg(a) {
        a.K || (a.K = !0,
        Tf(a.L, a))
    }
    function gg(a) {
        var b = null;
        a.D && (b = a.D,
        a.D = b.next,
        b.next = null);
        a.D || (a.G = null);
        return b
    }
    Xf.prototype.L = function() {
        for (var a; a = gg(this); )
            hg(this, a, this.C, this.N);
        this.K = !1
    }
    ;
    function hg(a, b, c, d) {
        if (3 == c && b.D && !b.J)
            for (; a && a.J; a = a.F)
                a.J = !1;
        if (b.C)
            b.C.F = null,
            mg(b, c, d);
        else
            try {
                b.J ? b.G.call(b.F) : mg(b, c, d)
            } catch (e) {
                ng.call(null, e)
            }
        If($f, b)
    }
    function mg(a, b, c) {
        2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c)
    }
    function lg(a, b) {
        a.J = !0;
        Tf(function() {
            a.J && ng.call(null, b)
        })
    }
    var ng = Lf;
    function eg(a) {
        cc.call(this, a)
    }
    D(eg, cc);
    eg.prototype.name = "cancel";
    function cg(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    }
    ;function og(a, b) {
        Ff.call(this);
        this.D = a || 1;
        this.C = b || z;
        this.F = B(this.Md, this);
        this.G = Date.now()
    }
    D(og, Ff);
    w = og.prototype;
    w.Qa = !1;
    w.ma = null;
    w.Md = function() {
        if (this.Qa) {
            var a = Date.now() - this.G;
            0 < a && a < .8 * this.D ? this.ma = this.C.setTimeout(this.F, this.D - a) : (this.ma && (this.C.clearTimeout(this.ma),
            this.ma = null),
            L(this, "tick"),
            this.Qa && (pg(this),
            this.start()))
        }
    }
    ;
    w.start = function() {
        this.Qa = !0;
        this.ma || (this.ma = this.C.setTimeout(this.F, this.D),
        this.G = Date.now())
    }
    ;
    function pg(a) {
        a.Qa = !1;
        a.ma && (a.C.clearTimeout(a.ma),
        a.ma = null)
    }
    w.W = function() {
        og.O.W.call(this);
        pg(this);
        delete this.C
    }
    ;
    function qg(a, b, c) {
        if (typeof a === m)
            c && (a = B(a, c));
        else if (a && typeof a.handleEvent == m)
            a = B(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : z.setTimeout(a, b || 0)
    }
    ;function rg() {
        this.J = {};
        this.C = {};
        this.F = {};
        this.G = null;
        this.D = []
    }
    Tb(rg);
    function sg(a) {
        var b = rg.Ya()
          , c = b.J
          , d = b.C;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [[1, a]],
        typeof b.G === u ? tg(b, "lightbox") : b.D.push("lightbox"))
    }
    function ug() {
        return function() {
            var a = arguments;
            sg(function(b) {
                b.apply(null, a)
            })
        }
    }
    rg.prototype.K = function(a, b) {
        return a + "_" + b + ".js"
    }
    ;
    function vg(a) {
        eval(a)
    }
    rg.prototype.init = function(a, b) {
        C("__gjsload__", vg);
        this.G = a.replace(/\.js$/, "");
        b && (this.K = b);
        this.D.forEach(function(c) {
            tg(this, c)
        }, this);
        kc(this.D)
    }
    ;
    function tg(a, b) {
        qg(function() {
            if (!this.C[b]) {
                var c = this.K(this.G, b)
                  , d = ud(this.F, c);
                this.F[b] = c;
                d || (d = Ge(ja, {
                    type: mb
                }),
                te(d, Kd(c)),
                document.body.appendChild(d))
            }
        }, 0, a)
    }
    ;function wg(a) {
        try {
            return z.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    ;function xg() {}
    xg.prototype.C = null;
    function yg(a) {
        var b;
        (b = a.C) || (b = {},
        zg(a) && (b[0] = !0,
        b[1] = !0),
        b = a.C = b);
        return b
    }
    ;var Ag;
    function Bg() {}
    D(Bg, xg);
    function Cg(a) {
        return (a = zg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function zg(a) {
        if (!a.D && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.D = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.D
    }
    Ag = new Bg;
    var Dg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function Eg(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }
    ;function Fg(a) {
        Ff.call(this);
        this.headers = new Map;
        this.da = a || null;
        this.F = !1;
        this.Z = this.C = null;
        this.Ga = "";
        this.J = 0;
        this.G = this.Fa = this.T = this.ua = !1;
        this.R = 0;
        this.X = null;
        this.L = "";
        this.xb = this.K = !1
    }
    D(Fg, Ff);
    var Gg = /^https?$/i
      , Hg = ["POST", "PUT"]
      , Ig = [];
    function Jg(a, b, c, d) {
        var e = new Fg;
        Ig.push(e);
        b && e.fa.add(Aa, b, !1, void 0, void 0);
        e.fa.add(eb, e.kd, !0, void 0, void 0);
        Kg(e, a, c, d)
    }
    w = Fg.prototype;
    w.kd = function() {
        this.Aa();
        lc(Ig, this)
    }
    ;
    w.fc = function() {
        return this.L
    }
    ;
    w.hc = function() {
        return this.K
    }
    ;
    function Kg(a, b, c, d, e) {
        if (a.C)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.Ga + "; newUri=" + b);
        c = c ? c.toUpperCase() : ha;
        a.Ga = b;
        a.J = 0;
        a.ua = !1;
        a.F = !0;
        a.C = a.da ? Cg(a.da) : Cg(Ag);
        a.Z = a.da ? yg(a.da) : yg(Ag);
        a.C.onreadystatechange = B(a.kc, a);
        try {
            a.Fa = !0,
            a.C.open(c, String(b), !0),
            a.Fa = !1
        } catch (h) {
            Lg(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        if (e)
            if (Object.getPrototypeOf(e) === Object.prototype)
                for (var f in e)
                    d.set(f, e[f]);
            else if (typeof e.keys === m && typeof e.get === m) {
                f = Cb(e.keys());
                for (var g = f.next(); !g.done; g = f.next())
                    g = g.value,
                    d.set(g, e.get(g))
            } else
                throw Error("Unknown input type for opt_headers: " + String(e));
        e = Array.from(d.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        f = z.FormData && b instanceof z.FormData;
        !jc(Hg, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = Cb(d);
        for (e = c.next(); !e.done; e = c.next())
            d = Cb(e.value),
            e = d.next().value,
            d = d.next().value,
            a.C.setRequestHeader(e, d);
        a.L && (a.C.responseType = a.L);
        "withCredentials"in a.C && a.C.withCredentials !== a.K && (a.C.withCredentials = a.K);
        try {
            Mg(a),
            0 < a.R && (a.xb = Ng(a.C),
            a.xb ? (a.C.timeout = a.R,
            a.C.ontimeout = B(a.za, a)) : a.X = qg(a.za, a.R, a)),
            a.T = !0,
            a.C.send(b),
            a.T = !1
        } catch (h) {
            Lg(a)
        }
    }
    function Ng(a) {
        return $c && typeof a.timeout === q && void 0 !== a.ontimeout
    }
    w.za = function() {
        "undefined" != typeof Sb && this.C && (this.J = 8,
        L(this, "timeout"),
        this.abort(8))
    }
    ;
    function Lg(a) {
        a.F = !1;
        a.C && (a.G = !0,
        a.C.abort(),
        a.G = !1);
        a.J = 5;
        Og(a);
        Pg(a)
    }
    function Og(a) {
        a.ua || (a.ua = !0,
        L(a, Aa),
        L(a, Qa))
    }
    w.abort = function(a) {
        this.C && this.F && (this.F = !1,
        this.G = !0,
        this.C.abort(),
        this.G = !1,
        this.J = a || 7,
        L(this, Aa),
        L(this, "abort"),
        Pg(this))
    }
    ;
    w.W = function() {
        this.C && (this.F && (this.F = !1,
        this.G = !0,
        this.C.abort(),
        this.G = !1),
        Pg(this, !0));
        Fg.O.W.call(this)
    }
    ;
    w.kc = function() {
        this.isDisposed() || (this.Fa || this.T || this.G ? Qg(this) : this.Bd())
    }
    ;
    w.Bd = function() {
        Qg(this)
    }
    ;
    function Qg(a) {
        if (a.F && "undefined" != typeof Sb && (!a.Z[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != Rg(a)))
            if (a.T && 4 == (a.C ? a.C.readyState : 0))
                qg(a.kc, 0, a);
            else if (L(a, "readystatechange"),
            4 == (a.C ? a.C.readyState : 0)) {
                a.F = !1;
                try {
                    Sg(a) ? (L(a, Aa),
                    L(a, lb)) : (a.J = 6,
                    Og(a))
                } finally {
                    Pg(a)
                }
            }
    }
    function Pg(a, b) {
        if (a.C) {
            Mg(a);
            var c = a.C
              , d = a.Z[0] ? function() {}
            : null;
            a.C = null;
            a.Z = null;
            b || L(a, eb);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function Mg(a) {
        a.C && a.xb && (a.C.ontimeout = null);
        a.X && (z.clearTimeout(a.X),
        a.X = null)
    }
    w.isActive = function() {
        return !!this.C
    }
    ;
    function Sg(a) {
        var b = Rg(a);
        a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var c = !0;
            break a;
        default:
            c = !1
        }
        if (!c) {
            if (b = 0 === b)
                a = String(a.Ga).match(Dg)[1] || null,
                !a && z.self && z.self.location && (a = z.self.location.protocol.slice(0, -1)),
                b = !Gg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }
    function Rg(a) {
        try {
            return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1
        } catch (b) {
            return -1
        }
    }
    function Tg(a) {
        try {
            return a.C ? a.C.responseText : ""
        } catch (b) {
            return ""
        }
    }
    ;function Ug(a, b) {
        this.C = a[z.Symbol.iterator]();
        this.D = b
    }
    Ug.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    Ug.prototype.next = function() {
        var a = this.C.next();
        return {
            value: a.done ? void 0 : this.D.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    function Vg(a, b) {
        return new Ug(a,b)
    }
    ;function Wg() {}
    Wg.prototype.next = function() {
        return Xg
    }
    ;
    var Xg = {
        done: !0,
        value: void 0
    };
    Wg.prototype.va = function() {
        return this
    }
    ;
    function Yg(a) {
        if (a instanceof Zg || a instanceof $g || a instanceof ah)
            return a;
        if (typeof a.next == m)
            return new Zg(function() {
                return a
            }
            );
        if (typeof a[Symbol.iterator] == m)
            return new Zg(function() {
                return a[Symbol.iterator]()
            }
            );
        if (typeof a.va == m)
            return new Zg(function() {
                return a.va()
            }
            );
        throw Error("Not an iterator or iterable.");
    }
    function Zg(a) {
        this.C = a
    }
    Zg.prototype.va = function() {
        return new $g(this.C())
    }
    ;
    Zg.prototype[Symbol.iterator] = function() {
        return new ah(this.C())
    }
    ;
    Zg.prototype.D = function() {
        return new ah(this.C())
    }
    ;
    function $g(a) {
        this.C = a
    }
    y($g, Wg);
    $g.prototype.next = function() {
        return this.C.next()
    }
    ;
    $g.prototype[Symbol.iterator] = function() {
        return new ah(this.C)
    }
    ;
    $g.prototype.D = function() {
        return new ah(this.C)
    }
    ;
    function ah(a) {
        Zg.call(this, function() {
            return a
        });
        this.F = a
    }
    y(ah, Zg);
    ah.prototype.next = function() {
        return this.F.next()
    }
    ;
    function bh() {
        this.D = [];
        this.C = []
    }
    function ch(a) {
        0 === a.D.length && (a.D = a.C,
        a.D.reverse(),
        a.C = []);
        return a.D.pop()
    }
    bh.prototype.V = function() {
        return this.D.length + this.C.length
    }
    ;
    bh.prototype.ka = function() {
        return 0 === this.D.length && 0 === this.C.length
    }
    ;
    bh.prototype.ca = function() {
        for (var a = [], b = this.D.length - 1; 0 <= b; --b)
            a.push(this.D[b]);
        var c = this.C.length;
        for (b = 0; b < c; ++b)
            a.push(this.C[b]);
        return a
    }
    ;
    function dh(a, b) {
        this.D = {};
        this.C = [];
        this.F = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof dh)
                for (c = a.na(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    w = dh.prototype;
    w.V = function() {
        return this.size
    }
    ;
    w.ca = function() {
        eh(this);
        for (var a = [], b = 0; b < this.C.length; b++)
            a.push(this.D[this.C[b]]);
        return a
    }
    ;
    w.na = function() {
        eh(this);
        return this.C.concat()
    }
    ;
    w.has = function(a) {
        return fh(this.D, a)
    }
    ;
    w.ka = function() {
        return 0 == this.size
    }
    ;
    w.delete = function(a) {
        return fh(this.D, a) ? (delete this.D[a],
        --this.size,
        this.F++,
        this.C.length > 2 * this.size && eh(this),
        !0) : !1
    }
    ;
    function eh(a) {
        if (a.size != a.C.length) {
            for (var b = 0, c = 0; b < a.C.length; ) {
                var d = a.C[b];
                fh(a.D, d) && (a.C[c++] = d);
                b++
            }
            a.C.length = c
        }
        if (a.size != a.C.length) {
            var e = {};
            for (c = b = 0; b < a.C.length; )
                d = a.C[b],
                fh(e, d) || (a.C[c++] = d,
                e[d] = 1),
                b++;
            a.C.length = c
        }
    }
    w.get = function(a, b) {
        return fh(this.D, a) ? this.D[a] : b
    }
    ;
    w.set = function(a, b) {
        fh(this.D, a) || (this.size += 1,
        this.C.push(a),
        this.F++);
        this.D[a] = b
    }
    ;
    w.forEach = function(a, b) {
        for (var c = this.na(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    w.keys = function() {
        return Yg(this.va(!0)).D()
    }
    ;
    w.values = function() {
        return Yg(this.va(!1)).D()
    }
    ;
    w.entries = function() {
        var a = this;
        return Vg(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    w.va = function(a) {
        eh(this);
        var b = 0
          , c = this.F
          , d = this
          , e = new Wg;
        e.next = function() {
            if (c != d.F)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.C.length)
                return Xg;
            var f = d.C[b++];
            return {
                value: a ? f : d.D[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    function fh(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function gh(a) {
        if (a.ca && typeof a.ca == m)
            return a.ca();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
            return Array.from(a.values());
        if (typeof a === u)
            return a.split("");
        if (Vb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return sd(a)
    }
    function hh(a) {
        if (a.na && typeof a.na == m)
            return a.na();
        if (!a.ca || typeof a.ca != m) {
            if ("undefined" !== typeof Map && a instanceof Map)
                return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (Vb(a) || typeof a === u) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++)
                        b.push(c);
                    return b
                }
                return td(a)
            }
        }
    }
    function ih(a, b, c) {
        if (a.forEach && typeof a.forEach == m)
            a.forEach(b, c);
        else if (Vb(a) || typeof a === u)
            Array.prototype.forEach.call(a, b, c);
        else
            for (var d = hh(a), e = gh(a), f = e.length, g = 0; g < f; g++)
                b.call(c, e[g], d && d[g], a)
    }
    ;function jh() {
        this.C = new dh;
        this.size = 0
    }
    function kh(a) {
        var b = typeof a;
        return b == t && a || b == m ? "o" + (Object.prototype.hasOwnProperty.call(a, Xb) && a[Xb] || (a[Xb] = ++Yb)) : b.slice(0, 1) + a
    }
    w = jh.prototype;
    w.V = function() {
        return this.C.size
    }
    ;
    w.add = function(a) {
        this.C.set(kh(a), a);
        this.size = this.C.size
    }
    ;
    w.delete = function(a) {
        a = kh(a);
        a = this.C.delete(a);
        this.size = this.C.size;
        return a
    }
    ;
    w.ka = function() {
        return 0 === this.C.size
    }
    ;
    w.has = function(a) {
        a = kh(a);
        return this.C.has(a)
    }
    ;
    w.ca = function() {
        return this.C.ca()
    }
    ;
    w.values = function() {
        return this.C.values()
    }
    ;
    w.va = function() {
        return this.C.va(!1)
    }
    ;
    jh.prototype[Symbol.iterator] = function() {
        return this.values()
    }
    ;
    function lh(a, b) {
        We.call(this);
        this.L = a || 0;
        this.F = b || 10;
        if (this.L > this.F)
            throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.C = new bh;
        this.D = new jh;
        this.delay = 0;
        this.J = null;
        this.Ta()
    }
    D(lh, We);
    w = lh.prototype;
    w.Za = function() {
        var a = Date.now();
        if (!(null != this.J && a - this.J < this.delay)) {
            for (var b; 0 < this.C.V() && (b = ch(this.C),
            !this.Db(b)); )
                this.Ta();
            !b && this.V() < this.F && (b = this.Ab());
            b && (this.J = a,
            this.D.add(b));
            return b
        }
    }
    ;
    w.Ja = function(a) {
        this.D.delete(a);
        this.Db(a) && this.V() < this.F ? this.C.C.push(a) : mh(a)
    }
    ;
    w.Ta = function() {
        for (var a = this.C; this.V() < this.L; ) {
            var b = this.Ab();
            a.C.push(b)
        }
        for (; this.V() > this.F && 0 < this.C.V(); )
            mh(ch(a))
    }
    ;
    w.Ab = function() {
        return {}
    }
    ;
    function mh(a) {
        if (typeof a.Aa == m)
            a.Aa();
        else
            for (var b in a)
                a[b] = null
    }
    w.Db = function(a) {
        return typeof a.jd == m ? a.jd() : !0
    }
    ;
    w.V = function() {
        return this.C.V() + this.D.V()
    }
    ;
    w.ka = function() {
        return this.C.ka() && this.D.ka()
    }
    ;
    w.W = function() {
        lh.O.W.call(this);
        if (0 < this.D.V())
            throw Error("[goog.structs.Pool] Objects not released");
        delete this.D;
        for (var a = this.C; !a.ka(); )
            mh(ch(a));
        delete this.C
    }
    ;
    function nh(a, b) {
        this.C = a;
        this.D = b
    }
    ;function oh(a) {
        this.C = [];
        if (a)
            a: {
                if (a instanceof oh) {
                    var b = a.na();
                    a = a.ca();
                    if (0 >= this.V()) {
                        for (var c = this.C, d = 0; d < b.length; d++)
                            c.push(new nh(b[d],a[d]));
                        break a
                    }
                } else
                    b = td(a),
                    a = sd(a);
                for (c = 0; c < b.length; c++)
                    this.insert(b[c], a[c])
            }
    }
    w = oh.prototype;
    w.insert = function(a, b) {
        var c = this.C;
        c.push(new nh(a,b));
        a = c.length - 1;
        b = this.C;
        for (c = b[a]; 0 < a; ) {
            var d = a - 1 >> 1;
            if (b[d].C > c.C)
                b[a] = b[d],
                a = d;
            else
                break
        }
        b[a] = c
    }
    ;
    w.ca = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].D);
        return b
    }
    ;
    w.na = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].C);
        return b
    }
    ;
    w.V = function() {
        return this.C.length
    }
    ;
    w.ka = function() {
        return 0 === this.C.length
    }
    ;
    function ph() {
        oh.apply(this, arguments)
    }
    y(ph, oh);
    function qh(a, b) {
        this.K = void 0;
        this.G = new ph;
        lh.call(this, a, b)
    }
    D(qh, lh);
    w = qh.prototype;
    w.Za = function(a, b) {
        if (!a)
            return (a = qh.O.Za.call(this)) && this.delay && (this.K = z.setTimeout(B(this.ab, this), this.delay)),
            a;
        this.G.insert(void 0 !== b ? b : 100, a);
        this.ab()
    }
    ;
    w.ab = function() {
        for (var a = this.G; 0 < a.V(); ) {
            var b = this.Za();
            if (b) {
                var c = a
                  , d = c.C
                  , e = d.length;
                var f = d[0];
                if (0 >= e)
                    f = void 0;
                else {
                    if (1 == e)
                        d.length = 0;
                    else {
                        d[0] = d.pop();
                        d = 0;
                        c = c.C;
                        e = c.length;
                        for (var g = c[d]; d < e >> 1; ) {
                            var h = 2 * d + 1
                              , k = 2 * d + 2;
                            h = k < e && c[k].C < c[h].C ? k : h;
                            if (c[h].C > g.C)
                                break;
                            c[d] = c[h];
                            d = h
                        }
                        c[d] = g
                    }
                    f = f.D
                }
                f.apply(this, [b])
            } else
                break
        }
    }
    ;
    w.Ja = function(a) {
        qh.O.Ja.call(this, a);
        this.ab()
    }
    ;
    w.Ta = function() {
        qh.O.Ta.call(this);
        this.ab()
    }
    ;
    w.W = function() {
        qh.O.W.call(this);
        z.clearTimeout(this.K);
        this.G.C.length = 0;
        this.G = null
    }
    ;
    function rh(a, b, c, d) {
        this.R = a;
        this.T = !!d;
        qh.call(this, b, c)
    }
    D(rh, qh);
    rh.prototype.Ab = function() {
        var a = new Fg
          , b = this.R;
        b && b.forEach(function(c, d) {
            a.headers.set(d, c)
        });
        this.T && (a.K = !0);
        return a
    }
    ;
    rh.prototype.Db = function(a) {
        return !a.isDisposed() && !a.isActive()
    }
    ;
    function sh(a, b, c, d, e, f) {
        Ff.call(this);
        this.G = void 0 !== a ? a : 1;
        this.J = void 0 !== e ? Math.max(0, e) : 0;
        this.K = !!f;
        this.D = new rh(b,c,d,f);
        this.C = new dh;
        this.F = new zf(this)
    }
    D(sh, Ff);
    var th = [eb, Aa, lb, Qa, "abort", "timeout"];
    function uh(a, b, c, d, e, f) {
        if (a.C.get(b))
            throw Error("[goog.net.XhrManager] ID in use");
        c = new vh(c,B(a.R, a, b),d,e,f,a.G,a.K);
        a.C.set(b, c);
        b = B(a.L, a, b);
        a.D.Za(b, null)
    }
    sh.prototype.abort = function(a, b) {
        var c = this.C.get(a);
        if (c) {
            var d = c.fb;
            c.Rb = !0;
            b && (d && (Cf(this.F, d, th, c.Hb),
            of(d, eb, function() {
                var e = this.D;
                e.D.delete(d) && e.Ja(d)
            }, !1, this)),
            this.C.delete(a));
            d && d.abort()
        }
    }
    ;
    sh.prototype.L = function(a, b) {
        var c = this.C.get(a);
        c && !c.fb ? (Bf(this.F, b, th, c.Hb),
        b.R = Math.max(0, this.J),
        b.L = c.fc(),
        b.K = c.hc(),
        c.fb = b,
        L(this, new wh(eb,this,a,b)),
        xh(this, a, b),
        c.Rb && b.abort()) : (a = this.D,
        a.D.delete(b) && a.Ja(b))
    }
    ;
    sh.prototype.R = function(a, b) {
        var c = b.target;
        switch (b.type) {
        case eb:
            xh(this, a, c);
            break;
        case Aa:
            a: {
                var d = this.C.get(a);
                if (7 == c.J || Sg(c) || d.Ua > d.kb)
                    if (L(this, new wh(Aa,this,a,c)),
                    d && (d.Xb = !0,
                    d.Wb)) {
                        a = d.Wb.call(c, b);
                        break a
                    }
                a = null
            }
            return a;
        case lb:
            L(this, new wh(lb,this,a,c));
            break;
        case "timeout":
        case Qa:
            b = this.C.get(a);
            b.Ua > b.kb && L(this, new wh(Qa,this,a,c));
            break;
        case "abort":
            L(this, new wh("abort",this,a,c))
        }
        return null
    }
    ;
    function xh(a, b, c) {
        var d = a.C.get(b);
        !d || d.Xb || d.Ua > d.kb ? (d && (Cf(a.F, c, th, d.Hb),
        a.C.delete(b)),
        a = a.D,
        a.D.delete(c) && a.Ja(c)) : (d.Ua++,
        Kg(c, d.getUrl(), d.zd, d.Cb(), d.Dc))
    }
    sh.prototype.W = function() {
        sh.O.W.call(this);
        this.D.Aa();
        this.D = null;
        this.F.Aa();
        this.F = null;
        var a = this.C;
        a.D = {};
        a.C.length = 0;
        a.size = 0;
        a.F = 0;
        this.C = null
    }
    ;
    function wh(a, b, c, d) {
        Xe.call(this, a, b);
        this.id = c;
        this.fb = d
    }
    D(wh, Xe);
    function vh(a, b, c, d, e, f, g) {
        this.C = a;
        this.zd = c || ha;
        this.F = d;
        this.Dc = null;
        this.kb = void 0 !== f ? f : 1;
        this.Ua = 0;
        this.Rb = this.Xb = !1;
        this.Hb = b;
        this.Wb = e;
        this.D = !!g;
        this.fb = null
    }
    vh.prototype.getUrl = function() {
        return this.C
    }
    ;
    vh.prototype.Cb = function() {
        return this.F
    }
    ;
    vh.prototype.hc = function() {
        return this.D
    }
    ;
    vh.prototype.fc = function() {
        return ""
    }
    ;
    function yh(a) {
        this.Ha = a
    }
    function zh(a) {
        return new yh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var Ah = [zh("data"), zh("http"), zh("https"), zh("mailto"), zh("ftp"), new yh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function Bh(a) {
        var b = void 0 === b ? Ah : b;
        a: if (b = void 0 === b ? Ah : b,
        !(a instanceof H)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof yh && d.Ha(a)) {
                    a = new H(a,Qd);
                    break a
                }
            }
            a = void 0
        }
        return a || Rd
    }
    ;function Ch(a) {
        return {
            valueOf: a
        }.valueOf()
    }
    ;var Dh = Ch(function() {
        return typeof URL === m
    });
    function Eh(a) {
        if (!Dh) {
            a: {
                var b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    a = void 0;
                    break a
                }
                a = b.protocol;
                a = ":" === a || "" === a ? Ya : a
            }
            return a
        }
        try {
            b = new URL(a)
        } catch (c) {
            return Ya
        }
        return b.protocol
    }
    var Fh = ["data:", "http:", Ya, "mailto:", "ftp:"];
    function Gh(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if (c === ja || c === la)
                throw Error("");
        }
        a.innerHTML = je(b)
    }
    ;function Hh(a) {
        var b = void 0 === b ? {} : b;
        if (a instanceof ie)
            return a;
        a = Ih(String(a));
        b.be && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.ae && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.ce && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return le(a)
    }
    function Jh(a) {
        var b = {
            nonce: ue()
        };
        b = void 0 === b ? {} : b;
        a = (a instanceof Fd && a.constructor === Fd ? a.C : "type_error:SafeScript").toString();
        var c = "<script";
        b.id && (c += ' id="' + Ih(b.id) + '"');
        b.nonce && (c += ' nonce="' + Ih(b.nonce) + '"');
        b.type && (c += ' type="' + Ih(b.type) + '"');
        b.defer && (c += " defer");
        return le(c + (">" + a + "\x3c/script>"))
    }
    function Ih(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    function Kh(a) {
        var b = Hh("");
        return le(a.map(function(c) {
            return je(Hh(c))
        }).join(je(b).toString()))
    }
    var Lh = /^[a-z][a-z\d-]*$/i
      , Mh = ["APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", ja, la, "SVG", "TEMPLATE"]
      , Nh = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ")
      , Oh = ["action", "formaction", "href"];
    function Ph(a) {
        var b = {};
        if (!Lh.test("body"))
            throw Error("");
        if (-1 !== Mh.indexOf("BODY"))
            throw Error("");
        var c = "<body";
        b && (c += Qh(b));
        Array.isArray(a) || (a = void 0 === a ? [] : [a]);
        -1 !== Nh.indexOf("BODY") ? c += ">" : (a = Kh(a.map(function(d) {
            return d instanceof ie ? d : Hh(String(d))
        })),
        c += ">" + a.toString() + "</body>");
        return le(c)
    }
    function Qh(a) {
        for (var b = "", c = Object.keys(a), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = a[e];
            if (!Lh.test(e))
                throw Error("");
            if (void 0 !== f && null !== f) {
                if (/^on/i.test(e))
                    throw Error("");
                -1 !== Oh.indexOf(e.toLowerCase()) && (f instanceof H ? f = f.toString() : (f = String(f),
                f = "javascript:" !== Eh(f) ? f : void 0,
                f = f || ra));
                e = e + '="' + Hh(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    }
    ;function Rh(a) {
        var b = document.implementation.createHTMLDocument("")
          , c = b.createRange();
        c.selectNode(b.body);
        a = le(a);
        return c.createContextualFragment(je(a))
    }
    ;function Sh(a) {
        a = a.nodeName;
        return typeof a === u ? a : "FORM"
    }
    function Th(a) {
        a = a.nodeType;
        return 1 === a || typeof a !== q
    }
    ;function Uh(a, b) {
        var c = new Map(Vh);
        this.D = new Set(Wh);
        this.C = c;
        this.F = a;
        this.G = b
    }
    ;var Wh = ["ARTICLE", "SECTION", "NAV", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "FOOTER", "ADDRESS", "P", "HR", "PRE", "BLOCKQUOTE", "OL", "UL", "LH", "LI", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "MAIN", "DIV", "EM", "STRONG", "SMALL", "S", "CITE", "Q", "DFN", "ABBR", "RUBY", "RB", "RT", "RTC", "RP", "DATA", "TIME", "CODE", "VAR", "SAMP", "KBD", "SUB", "SUP", "I", "B", "U", "MARK", "BDI", "BDO", ka, "BR", "WBR", "INS", "DEL", "PICTURE", "PARAM", "TRACK", "MAP", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "SELECT", "DATALIST", "OPTGROUP", "OPTION", "OUTPUT", "PROGRESS", "METER", "FIELDSET", "LEGEND", "DETAILS", "SUMMARY", "MENU", "DIALOG", "SLOT", "CANVAS", "FONT", "CENTER", "ACRONYM", "BASEFONT", "BIG", "DIR", "HGROUP", "STRIKE", "TT"]
      , Vh = [["A", new Map([["href", {
        Y: 2
    }]])], ["AREA", new Map([["href", {
        Y: 2
    }]])], ["LINK", new Map([["href", {
        Y: 2,
        conditions: new Map([["rel", new Set(["alternate", "author", "bookmark", "canonical", "cite", "help", "icon", "license", "next", "prefetch", "dns-prefetch", db, "preconnect", "preload", "prev", "search", "subresource"])]])
    }]])], ["SOURCE", new Map([["src", {
        Y: 1
    }]])], ["IMG", new Map([["src", {
        Y: 1
    }]])], ["VIDEO", new Map([["src", {
        Y: 1
    }]])], ["AUDIO", new Map([["src", {
        Y: 1
    }]])]]
      , Xh = [pb, "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-current", "aria-disabled", "aria-dropeffect", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-label", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "alt", "align", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "color", "cols", "colspan", "controls", "datetime", "disabled", "download", "draggable", "enctype", "face", "formenctype", "frameborder", "height", "hreflang", Xa, "ismap", "label", "lang", "loop", "max", "maxlength", "media", "minlength", "min", "multiple", "muted", "nonce", "open", "placeholder", "preload", "rel", "required", "reversed", "role", "rows", "rowspan", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "start", "step", "summary", "translate", "type", "valign", "value", "width", "wrap", "itemscope", "itemtype", "itemid", "itemprop", "itemref"]
      , Yh = [["dir", {
        Y: 3,
        conditions: Ch(function() {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
        })
    }], ["async", {
        Y: 3,
        conditions: Ch(function() {
            return new Map([["async", new Set(["async"])]])
        })
    }], ["cite", {
        Y: 2
    }], ["loading", {
        Y: 3,
        conditions: Ch(function() {
            return new Map([["loading", new Set(["eager", "lazy"])]])
        })
    }], ["poster", {
        Y: 2
    }], ["target", {
        Y: 3,
        conditions: Ch(function() {
            return new Map([["target", new Set(["_self", qa])]])
        })
    }]]
      , Zh = new Uh(new Set(Xh),new Map(Yh))
      , $h = new Uh(new Set(Ch(function() {
        return Xh.concat(["class", "id"])
    })),new Map(Ch(function() {
        return Yh.concat([[kb, {
            Y: 4
        }]])
    })));
    function ai(a) {
        this.D = a;
        this.changes = []
    }
    function bi(a) {
        var b = ci;
        b.changes = [];
        a = b.C(a);
        if (0 !== b.changes.length)
            throw Error("");
        return a
    }
    ai.prototype.C = function(a) {
        var b = document.createElement("span");
        b.appendChild(di(this, a));
        a = (new XMLSerializer).serializeToString(b);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
        return le(a)
    }
    ;
    function di(a, b) {
        b = Rh(b);
        b = document.createTreeWalker(b, 5, function(g) {
            return ei(a, g)
        }, !1);
        for (var c = b.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
            var f = void 0;
            if (3 === c.nodeType)
                f = document.createTextNode(c.data);
            else if (Th(c))
                f = fi(a, c);
            else
                throw Error("");
            e.appendChild(f);
            if (c = b.firstChild())
                e = f;
            else
                for (; !(c = b.nextSibling()) && (c = b.parentNode()); )
                    e = e.parentNode
        }
        return d
    }
    function fi(a, b) {
        var c = Sh(b)
          , d = document.createElement(c);
        b = b.attributes;
        for (var e = Cb(b), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.name;
            g = g.value;
            var h = a.D;
            var k = h.C.get(c);
            h = (null == k ? 0 : k.has(f)) ? k.get(f) : h.F.has(f) ? {
                Y: 1
            } : (h = h.G.get(f)) ? h : {
                Y: 0
            };
            a: {
                if (k = h.conditions) {
                    k = Cb(k);
                    for (var n = k.next(); !n.done; n = k.next()) {
                        var r = Cb(n.value);
                        n = r.next().value;
                        r = r.next().value;
                        var v = void 0;
                        if ((n = null == (v = b.getNamedItem(n)) ? void 0 : v.value) && !r.has(n)) {
                            k = !1;
                            break a
                        }
                    }
                }
                k = !0
            }
            if (k)
                switch (h.Y) {
                case 1:
                    gi(d, f, g);
                    break;
                case 2:
                    h = Eh(g);
                    h = void 0 !== h && -1 !== Fh.indexOf(h.toLowerCase()) ? g : ra;
                    h !== g && hi(a);
                    gi(d, f, h);
                    break;
                case 3:
                    gi(d, f, g.toLowerCase());
                    break;
                case 4:
                    gi(d, f, g);
                    break;
                case 0:
                    hi(a)
                }
            else
                hi(a)
        }
        return d
    }
    function ei(a, b) {
        if (3 === b.nodeType)
            return 1;
        if (!Th(b))
            return 2;
        b = Sh(b);
        if (null === b)
            return hi(a),
            2;
        var c = a.D;
        if ("FORM" !== b && (c.D.has(b) || c.C.has(b)))
            return 1;
        hi(a);
        return 2
    }
    function hi(a) {
        0 === a.changes.length && a.changes.push("")
    }
    function gi(a, b, c) {
        a.setAttribute(b, c)
    }
    var ci = Ch(function() {
        return new ai(Zh)
    })
      , ii = Ch(function() {
        return new ai($h)
    });
    function ji(a, b, c, d, e) {
        this.D = a;
        this.G = b;
        this.C = c || null;
        this.data = d || null;
        if (e) {
            if (this.F = e,
            "displayModeSnippet" != e && e != Ma && e != Na && e != Oa)
                throw "bad display mode: " + e;
        } else
            this.F = Oa;
        this.K = !1
    }
    ji.prototype.J = function() {
        return this.D
    }
    ;
    function ki(a) {
        this.G = !0;
        this.M = a;
        this.C = null
    }
    function M(a, b) {
        return document.getElementById(a.M.D + "_" + b)
    }
    function li(a, b) {
        a = M(a, b);
        if (!a)
            throw "did not find element for id " + b;
        return a
    }
    ki.prototype.F = function() {
        return this.M.data
    }
    ;
    ki.prototype.D = function() {
        var a = {};
        a.type = this.C.F();
        a.instanceId = this.M.D;
        a.sectionId = this.M.G;
        a.actionUrl = N.Ub;
        a.quickEditUrl = N.ac + "&widgetType=" + this.C.F() + "&widgetId=" + this.M.D + "&sectionId=" + this.M.G + aa + N.xc;
        return a
    }
    ;
    ki.prototype.Ea = function(a, b, c, d) {
        b = b || {};
        window.__wavt && (b.xssi_token = window.__wavt);
        N.Ea(a, b, this.M.D, this.C.F(), c, d)
    }
    ;
    function mi(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }
    function N() {}
    N.Cc = function(a, b) {
        N.Ca = {};
        N.ac = a;
        N.Ub = b;
        N.Ka = {};
        N.gb = new sh;
        N.jc = 0;
        N.Eb = 0;
        K(N.gb, eb, function() {
            N.Eb++
        });
        K(N.gb, Aa, function() {
            N.Eb--
        })
    }
    ;
    N.Tc = function(a, b) {
        N.mc = a;
        N.lc = b
    }
    ;
    N.bd = function() {
        var a = N.wc();
        document.body.appendChild(a)
    }
    ;
    N.Vc = function(a) {
        N.bd();
        if (window.parent == window) {
            var b = "Preview";
            a && (b = a);
            a = N.vc(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    }
    ;
    N.xc = "editWidget";
    N.Uc = function(a) {
        N.Nd = a
    }
    ;
    N.Kb = function() {
        return N.Nd
    }
    ;
    N.Sc = function(a) {
        N.Ka = a
    }
    ;
    N.zc = function() {
        var a = {}, b;
        for (b in N.Ka) {
            var c = N.Ka[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in N.Ca)
            c[b] = N.Ca[b].H.M.data;
        a.widgets = c;
        return a
    }
    ;
    N.Qb = function(a, b) {
        var c = new ki(b);
        a = new window[a](c);
        c.C = a;
        N.Ca[b.D] = a;
        N.Jb(a);
        return a
    }
    ;
    N.Nc = function(a, b) {
        a = N.Qb(a, b);
        a.H.M.K = !0;
        return a
    }
    ;
    N.Jb = function(a) {
        var b = a.H;
        b.M.F != Oa && (b.M.F == Ma && a.ia(),
        a.H.G = !1)
    }
    ;
    N.jb = function(a) {
        return N.Ca ? N.Ca[a] : null
    }
    ;
    N.Lc = function(a, b, c, d, e) {
        var f = "";
        d && (f = "&widgetId=" + d);
        a = N.ac + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
        if (window.name == e)
            return window.location.replace(a),
            window.focus(),
            window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus();
        return e
    }
    ;
    N.Kc = function(a) {
        var b = a.getAttribute("id")
          , c = a.parentNode.getAttribute("id");
        a = a.getAttribute("widgetType");
        N.lc && N.lc(c, a, b);
        return !1
    }
    ;
    N.Mc = function(a) {
        a = a.parentNode.getAttribute("id");
        N.mc && N.mc(a);
        return !1
    }
    ;
    N.Ea = function(a, b, c, d, e, f) {
        N.Qc(a, b, c, d, e, f)
    }
    ;
    N.Qc = function(a, b, c, d, e, f) {
        function g() {
            n(this.C) && window.eval(Tg(this))
        }
        var h = N.Ub;
        a = ["action=" + encodeURIComponent(a), "widgetId=" + encodeURIComponent(c), "widgetType=" + encodeURIComponent(d), "responseType=js"];
        for (var k in b)
            if (typeof b[k] == t)
                for (c = b[k],
                d = 0; d < c.length; ++d)
                    a.push(encodeURIComponent(k) + "=" + encodeURIComponent(c[d]));
            else
                a.push(encodeURIComponent(k) + "=" + encodeURIComponent(b[k]));
        var n = e || ni();
        f == ha ? (h = 0 <= h.indexOf("?") ? h + "&" : h + "?",
        uh(N.gb, "" + N.jc++, h + a.join("&"), ha, void 0, g)) : uh(N.gb, "" + N.jc++, h, "POST", a.join("&"), g)
    }
    ;
    N.hb = function(a, b) {
        0 == N.Eb ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            N.hb(a, b)
        }, 200)
    }
    ;
    N.Fc = function(a, b) {
        a && (N.hb(a, 100),
        N.cd(a, b))
    }
    ;
    N.cd = function(a, b) {
        if (a) {
            var c = a.document.getElementById(jb);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    }
    ;
    N.ja = function(a, b, c) {
        a = N.Ca[a];
        null != c.errors ? (b = window,
        N.ub(b, c.errors),
        N.Lb(c, b)) : a.ja(b, c)
    }
    ;
    N.Lb = function(a, b) {
        a = a["error-details"];
        for (var c in a) {
            var d = a[c], e;
            (e = b.document) || (e = document);
            if (e = e.getElementById("errormessage_" + c))
                Gh(e, ii.C(d)),
                e.className = "errorbox-bad errormsg"
        }
    }
    ;
    function oi(a, b) {
        N.ub(a.J, b[ib]);
        N.yc(a.M.D, function(c) {
            window.opener._WidgetManager._OnWidgetConfigured(c, b)
        })
    }
    N.Ic = function(a, b) {
        window.parent && window.parent.editor && b ? N.Pb(a, b) : window.location.replace(window.location.href)
    }
    ;
    N.Pb = function(a, b) {
        var c = N.jb(a);
        c.H.M.data = b.data;
        a = document.getElementById(a);
        Ke(a);
        pi(a, c)
    }
    ;
    N.Bc = function(a, b, c) {
        null != c.errors && (N.ub(window, c.errors),
        N.Lb(c, window))
    }
    ;
    N.Jc = function(a) {
        var b = N.jb(a);
        b && (b.H.M.F == Na ? top.editor.HandleDeleteWidget(b.H.M.C) : (b = b.H.M.C,
        b.parentNode.removeChild(b)),
        delete N.Ca[a])
    }
    ;
    N.yc = function(a, b) {
        if (N.Mb(window)) {
            var c = window.opener;
            b || (b = c._WidgetManager._OnWidgetConfigured);
            b(a);
            c._WidgetManager ? c._WidgetManager._KillPopupDelay(window, a) : N.hb(window, 100)
        } else
            a = N.Kb() + "?widgetId=" + a,
            a += "&func=" + encodeURIComponent("_OnWidgetConfigured"),
            window.location.replace(a)
    }
    ;
    N.Mb = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = "X" + a.opener.document.domain;
                c && "X" != c && (b = !0)
            }
        } catch (d) {}
        return b
    }
    ;
    N.Rc = "status-msg-yellow-on-white";
    N.ub = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(jb);
        c && (c.textContent = b);
        (a = a.document.getElementById(ib)) && rc(a, N.Rc)
    }
    ;
    N.Pa = function(a, b) {
        if (wc(a, b))
            return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = N.Pa(a.childNodes.item(d), b);
                if (e)
                    return e
            }
        return null
    }
    ;
    N.wc = function() {
        var a = window.document.createElement(l);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = "fixed";
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = N.tb;
        a.onmousedown = N.tb;
        a.onmouseup = N.tb;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.textContent = "\u00a0";
        return a
    }
    ;
    N.vc = function(a) {
        var b = window.document
          , c = N.Ib(b, a);
        a = N.Ib(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    }
    ;
    N.Ib = function(a, b) {
        a = a.createElement(l);
        a.style.position = "absolute";
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        a.style.MozTransform = gb;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = gb;
        a.style.WebkitTransformOrigin = "50% 0";
        a.textContent = b;
        a.className = "singleton-element";
        return a
    }
    ;
    N.tb = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0,
        a.stopPropagation && a.stopPropagation());
        return !1
    }
    ;
    function qi() {
        this.C = [];
        for (var a = 0; a < N.Ka.length; ++a)
            this.C[this.C.length] = N.Ka[a]
    }
    function ri(a, b) {
        null == b && (b = "");
        for (var c = a.C.length - 1; 0 <= c; --c)
            if (a.C[c].name == b)
                return a.C[c].data;
        return null
    }
    function si(a, b) {
        var c = ri(a, b);
        if (null !== c)
            return c;
        var d = b.split(".");
        if (1 == d.length)
            return c = ri(a, ""),
            c[b];
        c = ri(a, d[0]);
        b = 0;
        c ? b = 1 : c = ri(a, "");
        for (a = b; a < d.length; a++) {
            if (null == c)
                return null;
            c = c[d[a]]
        }
        return c
    }
    function O(a, b) {
        this.T = a;
        this.H = b
    }
    O.prototype.F = function() {
        return this.T
    }
    ;
    O.prototype.N = function() {
        return this.H
    }
    ;
    O.prototype.ja = function(a, b) {
        "configure" == a && oi(this.H, b)
    }
    ;
    O.prototype.ia = function() {}
    ;
    C("_WidgetManager", N);
    N._SetOpenWidgetDialogs = N.Tc;
    N._Init = N.Cc;
    N._SetWidgetRefreshUrl = N.Uc;
    N._GetWidgetRefreshUrl = N.Kb;
    N._DisplayWidget = N.Jb;
    N._GetWidget = N.jb;
    N._HandleControllerResult = N.ja;
    N._HandlePageActionResult = N.Bc;
    N._IsOpenerReachable = N.Mb;
    N._SetDataContext = N.Sc;
    N._SetupPreview = N.Vc;
    N._RegisterWidget = N.Qb;
    N._RegisterNewWidget = N.Nc;
    N._PopupPaneFromParams = N.Lc;
    N._PopupConfig = N.Kc;
    N._PopupToolbox = N.Mc;
    N._KillPopupDelay = N.Fc;
    N._OnWidgetConfigured = N.Ic;
    N._OnWidgetConfiguredWithData = N.Pb;
    N._OnWidgetDeleted = N.Jc;
    C("_WidgetInfo", ji);
    ji.prototype._getInstanceId = ji.prototype.J;
    O.prototype._GetHelper = O.prototype.N;
    ki.prototype._GetData = ki.prototype.F;
    ki.prototype._GenerateWidgetMetadata = ki.prototype.D;
    N._GetAllData = N.zc;
    C("widget_module_provide", function(a, b, c) {
        var d = rg.Ya()
          , e = d.C
          , f = d.J;
        e[a] || (e[a] = {});
        if (c)
            e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)
                (0,
                f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.F[a]
        }
    });
    function ti(a) {
        O.call(this, "AdSense", a);
        this.H = a
    }
    y(ti, O);
    C("_AdSenseView", ti);
    function ui(a) {
        O.call(this, "BlogArchive", a);
        this.C = a.M
    }
    D(ui, O);
    var vi = "&#9658;&nbsp;";
    w = ui.prototype;
    w.ja = function(a, b) {
        if ("configure" == a)
            oi(this.H, b);
        else if ("getTitles" == a) {
            a: {
                a = b.path;
                var c = this.C.C.getElementsByTagName("A");
                for (e in c) {
                    var d = c[e];
                    if (d.href == a) {
                        var e = Re(d, "li", "archivedate");
                        break a
                    }
                }
                e = void 0
            }
            a = J("posts", e);
            (c = Re(e, l, xa)) && Ee(c, {
                style: "",
                "data-height": ""
            });
            Ke(a);
            for (c = 0; c < b.posts.length; c++) {
                d = b.posts[c];
                var f = document.createElement("li");
                Gh(f, ii.C("<a href=" + d.url + ">" + d.title + "</a>"));
                a.appendChild(f)
            }
            wi(this, e);
            xi(this, e)
        } else
            ui.O.ja.call(this, a, b)
    }
    ;
    w.ia = function() {
        if (M(this.H, "ArchiveList")) {
            var a = De(document, "a", qb, this.C.C);
            1 > a.length && (a = De(document, "li", qb, this.C.C));
            if (0 < a.length && a[0].currentStyle)
                var b = a[0].parentNode.currentStyle.color;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                0 < De(document, l, xa, d).length ? (d.onclick = this.Wc.bind(this),
                wi(this, d)) : d.onclick = this.Xc.bind(this);
                b && (d.style.color = b)
            }
            if (a = M(this.H, "ArchiveMenu")) {
                for (b = 1; b < a.options.length; b++)
                    if (c = a.options[b].value,
                    c == window.location.href || null != window.location.href.match(c)) {
                        a.selectedIndex = b;
                        break
                    }
                a.onchange = this.Ac.bind(this)
            } else
                for (a = De(document, l, Pa, this.C.C),
                b = 0; b < a.length; b++)
                    c = a[b],
                    c.addEventListener(va, this.ad.bind(this), !1),
                    c.addEventListener(va, this.Pc.bind(this), !1);
            "rtl" == this.H.M.data.languageDirection && (vi = "&#9668;&nbsp;")
        }
    }
    ;
    w.Ac = function() {
        var a = M(this.H, "ArchiveMenu");
        a && "" != a.value && (window.location.href = a.value)
    }
    ;
    w.Xc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !wc(b, qb) && (b = b.parentNode);
        a = N.Pa(b, "zippy");
        b = b.parentNode;
        if (wc(b, Ra))
            return vc(b, Ra, wa),
            Gh(a, bi(vi)),
            tc(a, "toggle-open"),
            !1;
        vc(b, wa, Ra);
        Gh(a, bi("&#9660;&nbsp;"));
        rc(a, "toggle-open");
        yi(this, b);
        return !1
    }
    ;
    w.ad = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = wc(a, Pa) ? a : Re(a, l, Pa)) && (a = J("menu", a)) && (wc(a, "open") ? tc(a, "open") : rc(a, "open"))
    }
    ;
    w.Pc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = wc(b, "ripple") ? b : Re(b, l, "ripple")) {
            var c = J("splash", b);
            if (!c) {
                c = document.createElement("span");
                rc(c, "splash");
                var d = document.createElement(l);
                rc(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            tc(c, "animate");
            d = b.offsetWidth;
            var e = getComputedStyle(b);
            d += parseInt(e.marginLeft) + parseInt(e.marginRight);
            d = Math.max(d, zi(b));
            Ee(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " + (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            rc(c, "animate")
        }
    }
    ;
    w.Wc = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || "A" != a.srcElement.tagName) {
            var b = a.currentTarget || a.srcElement;
            b && !wc(b, qb) && (b = b.parentNode);
            a.stopPropagation();
            a = wc(b, "archivedate") ? b : b.parentNode;
            wc(a, Ra) ? (Ai(this, a),
            vc(a, Ra, wa)) : (yi(this, a),
            xi(this, a),
            vc(a, wa, Ra))
        }
    }
    ;
    function yi(a, b) {
        var c = b.getElementsByTagName("UL");
        0 < c.length && !wc(c[0], "posts") ? c = !1 : (c = N.Pa(b, "post-count"),
        c = parseInt(c.innerHTML.match(/\d+/), 10),
        c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = J(xa, b);
            c = J("posts", b);
            c || (c = document.createElement("UL"),
            d ? d.appendChild(c) : b.appendChild(c),
            rc(c, "posts"));
            d && Ee(d, {
                style: "",
                "data-height": ""
            });
            (d = Re(b, l, xa)) && Ee(d, {
                style: "",
                "data-height": ""
            });
            d = document.createElement("LI");
            Gh(d, ci.C(a.H.M.data.loadingMessage || "Loading..."));
            c.appendChild(d);
            a.H.Ea("getTitles", {
                path: N.Pa(b, "post-count-link").href
            }, null, ha)
        }
    }
    function xi(a, b) {
        var c = J(xa, b);
        c.getAttribute(Ja) || wi(a, b);
        var d = (a = c.getAttribute(Ja) || zi(c)) ? a + "px" : p;
        window.setTimeout(function() {
            Ee(c, {
                style: "max-height: " + d + ";"
            })
        }, 10)
    }
    function Ai(a, b) {
        var c = J(xa, b);
        c.getAttribute(Ja) || wi(a, b);
        window.setTimeout(function() {
            Ee(c, {
                style: ab
            })
        }, 10)
    }
    function wi(a, b) {
        var c = J(xa, b);
        Ee(c, {
            style: "max-height: none;"
        });
        for (var d = 0, e = De(document, l, xa, c), f = 0; f < e.length; f++) {
            var g = e[f]
              , h = Re(g, "li", qb);
            if (wc(h, wa)) {
                var k = g.getAttribute(Ja);
                k || (wi(a, h),
                k = g.getAttribute(Ja));
                d += parseInt(k)
            }
        }
        a = d + zi(c);
        c.setAttribute(Ja, a);
        c.setAttribute(kb, "max-height: " + a + "px;");
        wc(b, wa) && c.setAttribute(kb, ab)
    }
    function zi(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    C("_BlogArchiveView", ui);
    function ni() {
        return function(a) {
            return 500 <= mi(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR),
            !1) : !0
        }
    }
    ;function pi(a, b) {
        var c = N
          , d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData()
          , f = c._GetAllData();
        a = Bi(d, a, l, "widget-wrap1");
        a = Bi(d, a, l, "widget-wrap2");
        a = Bi(d, a, l, "widget-wrap3");
        var g = Bi(d, a, l, "widget-content");
        if (a = e.version && 1 < e.version)
            g.className += " visibility",
            Bi(d, g, l, "layout-widget-state " + (e.isVisible ? rb : "not-visible")).setAttribute(pb, e.visibilityTooltipMessage);
        var h = Bi(d, g, l, "layout-title");
        if (e[$a]) {
            var k = Bi(d, g, l, Za);
            k.appendChild(d.createTextNode(e[$a]));
            k.setAttribute(pb, e[Za])
        }
        h.appendChild(d.createTextNode(e["layout-title"]));
        e = Bi(d, g, "a", "editlink");
        var n = b._GenerateWidgetMetadata();
        e.target = "chooseWidget";
        e.onclick = function() {
            return c._PopupConfig(d.getElementById(n.instanceId))
        }
        ;
        a && (e.className += " icon");
        e.appendChild(d.createTextNode(f.messages.edit || "Edit"))
    }
    function Bi(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    }
    ;function Ci(a) {
        O.call(this, Ci.ea, a)
    }
    D(Ci, O);
    Ci.ea = "Attribution";
    C("_AttributionView", Ci);
    Vc();
    Uc();
    Tc();
    var Di = {}
      , Ei = null;
    var Fi = "undefined" !== typeof Uint8Array
      , Gi = !$c && typeof btoa === m;
    var Hi = typeof Symbol === m && "symbol" === typeof Symbol() ? Symbol() : void 0, Ii = Math.max, Ji = Ii.apply, Ki = Object.values({
        Ud: 1,
        Sd: 2,
        Rd: 4,
        Xd: 8,
        Wd: 16,
        Vd: 32,
        Od: 64,
        Yd: 128,
        Qd: 256,
        Pd: 512,
        Td: 1024
    }), Li;
    if (Ki instanceof Array)
        Li = Ki;
    else {
        for (var Mi = Cb(Ki), Ni, Oi = []; !(Ni = Mi.next()).done; )
            Oi.push(Ni.value);
        Li = Oi
    }
    Ji.call(Ii, Math, Li);
    var Pi = Hi ? function(a, b) {
        a[Hi] |= b
    }
    : function(a, b) {
        void 0 !== a.xa ? a.xa |= b : Object.defineProperties(a, {
            xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    ;
    function Qi(a) {
        var b = Ri(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)),
        Si(a, b | 1))
    }
    var Ri = Hi ? function(a) {
        return a[Hi] | 0
    }
    : function(a) {
        return a.xa | 0
    }
      , Ti = Hi ? function(a) {
        return a[Hi]
    }
    : function(a) {
        return a.xa
    }
      , Si = Hi ? function(a, b) {
        a[Hi] = b
    }
    : function(a, b) {
        void 0 !== a.xa ? a.xa = b : Object.defineProperties(a, {
            xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    ;
    function Ui() {
        var a = [];
        Pi(a, 1);
        return a
    }
    function Vi(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var Wi = {};
    function Xi(a) {
        return null !== a && typeof a === t && !Array.isArray(a) && a.constructor === Object
    }
    var Yi, Zi = [];
    Si(Zi, 55);
    Yi = Object.freeze(Zi);
    function $i() {
        var a = Error();
        Ve(a, "incident");
        Lf(a)
    }
    function aj() {
        var a = Error();
        Ve(a, "warning");
        return a
    }
    ;var bj = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function cj(a) {
        var b = typeof a;
        return b === q ? Number.isFinite(a) : b !== u ? !1 : bj.test(a)
    }
    function dj(a) {
        return typeof a === q && Number.isFinite(a) || !!a && typeof a === u && isFinite(a)
    }
    function ej(a) {
        if (null == a)
            return a;
        if (typeof a === u) {
            if (!a)
                return;
            a = +a
        }
        if (typeof a === q)
            return a
    }
    function fj(a) {
        if (!dj(a))
            throw aj();
        cj(a) || $i();
        typeof a === u ? dj(a) : dj(a);
        return a
    }
    ;var gj;
    function hj(a, b, c) {
        null == a && (a = gj);
        gj = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c],
            d |= 512) : a = [];
            b && (d = d & -2095105 | (b & 1023) << 11)
        } else {
            if (!Array.isArray(a))
                throw Error();
            d = Ri(a);
            if (d & 64)
                return a;
            d |= 64;
            if (c && (d |= 512,
            c !== a[0]))
                throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1
                      , g = c[f];
                    if (Xi(g)) {
                        d |= 256;
                        b = +!!(d & 512) - 1;
                        e = f - b;
                        1024 <= e && (ij(c, b, g),
                        e = 1023);
                        d = d & -2095105 | (e & 1023) << 11;
                        break a
                    }
                }
                b && (g = +!!(d & 512) - 1,
                b = Math.max(b, e - g),
                1024 < b && (ij(c, g, {}),
                d |= 256,
                b = 1023),
                d = d & -2095105 | (b & 1023) << 11)
            }
        }
        Si(a, d);
        return a
    }
    function ij(a, b, c) {
        for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
            var g = a[f];
            null != g && g !== c && (c[f - b] = g)
        }
        a.length = d + 1;
        a[d] = c
    }
    ;function jj(a) {
        switch (typeof a) {
        case q:
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case t:
            if (a && !Array.isArray(a) && Fi && null != a && a instanceof Uint8Array) {
                if (Gi) {
                    for (var b = "", c = 0, d = a.length - 10240; c < d; )
                        b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    a = btoa(b)
                } else {
                    void 0 === b && (b = 0);
                    if (!Ei) {
                        Ei = {};
                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                        d = ["+/=", "+/", "-_=", "-_.", "-_"];
                        for (var e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            Di[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === Ei[h] && (Ei[h] = g)
                            }
                        }
                    }
                    b = Di[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || "";
                    for (e = f = 0; f < a.length - 2; f += 3) {
                        var k = a[f]
                          , n = a[f + 1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[(k & 3) << 4 | n >> 4];
                        n = b[(n & 15) << 2 | h >> 6];
                        h = b[h & 63];
                        c[e++] = "" + g + k + n + h
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                    case 2:
                        g = a[f + 1],
                        h = b[(g & 15) << 2] || d;
                    case 1:
                        a = a[f],
                        c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                    }
                    a = c.join("")
                }
                return a
            }
        }
        return a
    }
    ;function kj(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a))
                a = e && 0 == a.length && Ri(a) & 1 ? void 0 : f && Ri(a) & 2 ? a : lj(a, b, c, void 0 !== d, e, f);
            else if (Xi(a)) {
                var g = {}, h;
                for (h in a)
                    g[h] = kj(a[h], b, c, d, e, f);
                a = g
            } else
                a = b(a, d);
            return a
        }
    }
    function lj(a, b, c, d, e, f) {
        var g = d || c ? Ri(a) : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++)
            a[h] = kj(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }
    function mj(a) {
        return a.xd === Wi ? a.toJSON() : jj(a)
    }
    ;Object.freeze({});
    function nj(a, b) {
        a = a.qa;
        return oj(a, Ti(a), b)
    }
    function oj(a, b, c) {
        if (-1 === c)
            return null;
        if (c >= Vi(b)) {
            if (b & 256)
                return a[a.length - 1][c]
        } else if (b = c + (+!!(b & 512) - 1),
        b < a.length)
            return a[b]
    }
    function pj(a, b, c) {
        var d = a.qa
          , e = Ti(d);
        if (e & 2)
            throw Error();
        qj(d, e, b, c);
        return a
    }
    function qj(a, b, c, d) {
        var e = Vi(b);
        if (c >= e) {
            var f = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return;
                e = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            e[c] = d;
            f !== b && Si(a, f)
        } else
            a[c + (+!!(b & 512) - 1)] = d,
            b & 256 && (a = a[a.length - 1],
            c in a && delete a[c])
    }
    function rj(a, b) {
        a = a.qa;
        var c = Ti(a)
          , d = oj(a, c, b);
        var e = null == d ? d : typeof d === q || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && qj(a, c, b, e);
        return e
    }
    function P(a, b) {
        a = nj(a, b);
        return null == a ? a : "boolean" !== typeof a && typeof a !== q ? void 0 : !!a
    }
    function R(a, b) {
        return ej(nj(a, b))
    }
    function sj(a, b) {
        a = nj(a, b);
        null != a && (dj(a) ? typeof a === q ? dj(a) : dj(a) : a = void 0);
        return a
    }
    function tj(a, b) {
        a = nj(a, b);
        null != a && (dj(a) ? typeof a === q ? dj(a) : dj(a) : a = void 0);
        return a
    }
    function uj(a, b) {
        a = nj(a, b);
        return null == a || typeof a === u ? a : void 0
    }
    function S(a, b) {
        a = P(a, b);
        return null != a ? a : !1
    }
    function T(a, b, c) {
        if (null != c) {
            if ("boolean" !== typeof c)
                throw Error("Expected boolean but got " + Ub(c) + ": " + c);
            c = !!c
        }
        pj(a, b, c)
    }
    function U(a, b, c) {
        if (null != c) {
            if (typeof c !== q)
                throw aj();
            Number.isFinite(c) || $i()
        }
        pj(a, b, c)
    }
    function vj(a, b, c) {
        if (null != c) {
            if (!dj(c))
                throw aj();
            cj(c) || $i();
            typeof c === u ? dj(c) : dj(c)
        }
        pj(a, b, c)
    }
    function wj(a, b, c) {
        if (null != c && typeof c !== q)
            throw Error("Value of float/double field must be a number, found " + typeof c + ": " + c);
        pj(a, b, c)
    }
    function xj(a, b, c) {
        if (null != c && typeof c !== u)
            throw Error();
        return pj(a, b, c)
    }
    ;function yj(a, b, c) {
        this.qa = hj(a, b, c)
    }
    yj.prototype.toJSON = function() {
        var a = lj(this.qa, mj, void 0, void 0, !1, !1);
        return zj(this, a, !0)
    }
    ;
    yj.prototype.xd = Wi;
    yj.prototype.toString = function() {
        return zj(this, this.qa, !1).toString()
    }
    ;
    function zj(a, b, c) {
        var d = a.constructor.de
          , e = Vi(Ti(c ? a.qa : b))
          , f = !1;
        if (d) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var g;
                if (b.length && Xi(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = Ti(a.qa);
            a = Vi(g);
            g = +!!(g & 512) - 1;
            for (var h, k, n = 0; n < d.length; n++)
                if (k = d[n],
                k < a) {
                    k += g;
                    var r = e[k];
                    null == r ? e[k] = c ? Yi : Ui() : c && r !== Yi && Qi(r)
                } else
                    h || (r = void 0,
                    e.length && Xi(r = e[e.length - 1]) ? h = r : e.push(h = {})),
                    r = h[k],
                    null == h[k] ? h[k] = c ? Yi : Ui() : c && r !== Yi && Qi(r)
        }
        d = b.length;
        if (!d)
            return b;
        var v;
        if (Xi(h = b[d - 1])) {
            a: {
                var A = h;
                e = {};
                c = !1;
                for (var E in A)
                    a = A[E],
                    Array.isArray(a) && a != a && (c = !0),
                    null != a ? e[E] = a : c = !0;
                if (c) {
                    for (var Q in e) {
                        A = e;
                        break a
                    }
                    A = null
                }
            }
            A != h && (v = !0);
            d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h)
                break;
            var Mc = !0
        }
        if (!v && !Mc)
            return b;
        var Ef;
        f ? Ef = b : Ef = Array.prototype.slice.call(b, 0, d);
        b = Ef;
        f && (b.length = d);
        A && b.push(A);
        return b
    }
    ;/*
 SPDX-License-Identifier: Apache-2.0 */
    var Aj = Object.prototype.hasOwnProperty;
    function Bj() {}
    Bj.prototype = Object.create(null);
    function Cj(a, b, c) {
        a = a.style;
        if (typeof c === u)
            a.cssText = c;
        else {
            a.cssText = "";
            for (var d in c)
                if (Aj.call(c, d)) {
                    b = d;
                    var e = c[d];
                    0 <= b.indexOf("-") ? a.setProperty(b, e) : a[b] = e
                }
        }
    }
    function Dj(a, b, c) {
        var d = typeof c;
        d === t || d === m ? a[b] = c : null == c ? a.removeAttribute(b) : (d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null) ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
    }
    function Ej() {
        var a = new Bj;
        a.__default = Dj;
        a.style = Cj;
        return a
    }
    Ej();
    var Fj = Ej();
    function Gj(a, b) {
        this.F = this.L = this.G = "";
        this.N = null;
        this.K = this.D = "";
        this.J = !1;
        var c;
        a instanceof Gj ? (this.J = void 0 !== b ? b : a.J,
        Hj(this, a.G),
        this.L = a.L,
        this.F = a.F,
        Ij(this, a.N),
        Jj(this, a.D),
        Kj(this, Lj(a.C)),
        this.K = a.K) : a && (c = String(a).match(Dg)) ? (this.J = !!b,
        Hj(this, c[1] || "", !0),
        this.L = Mj(c[2] || ""),
        this.F = Mj(c[3] || "", !0),
        Ij(this, c[4]),
        Jj(this, c[5] || "", !0),
        Kj(this, c[6] || "", !0),
        this.K = Mj(c[7] || "")) : (this.J = !!b,
        this.C = new Nj(null,this.J))
    }
    Gj.prototype.toString = function() {
        var a = []
          , b = this.G;
        b && a.push(Oj(b, Pj, !0), ":");
        var c = this.F;
        if (c || "file" == b)
            a.push("//"),
            (b = this.L) && a.push(Oj(b, Pj, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.N,
            null != c && a.push(":", String(c));
        if (c = this.D)
            this.F && "/" != c.charAt(0) && a.push("/"),
            a.push(Oj(c, "/" == c.charAt(0) ? Qj : Rj, !0));
        (c = this.C.toString()) && a.push("?", c);
        (c = this.K) && a.push("#", Oj(c, Sj));
        return a.join("")
    }
    ;
    Gj.prototype.resolve = function(a) {
        var b = new Gj(this)
          , c = !!a.G;
        c ? Hj(b, a.G) : c = !!a.L;
        c ? b.L = a.L : c = !!a.F;
        c ? b.F = a.F : c = null != a.N;
        var d = a.D;
        if (c)
            Ij(b, a.N);
        else if (c = !!a.D) {
            if ("/" != d.charAt(0))
                if (this.F && !this.D)
                    d = "/" + d;
                else {
                    var e = b.D.lastIndexOf("/");
                    -1 != e && (d = b.D.slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = Dc(e, "/");
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? Jj(b, d) : c = "" !== a.C.toString();
        c ? Kj(b, Lj(a.C)) : c = !!a.K;
        c && (b.K = a.K);
        return b
    }
    ;
    function Hj(a, b, c) {
        a.G = c ? Mj(b, !0) : b;
        a.G && (a.G = a.G.replace(/:$/, ""))
    }
    function Ij(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.N = b
        } else
            a.N = null
    }
    function Jj(a, b, c) {
        a.D = c ? Mj(b, !0) : b;
        return a
    }
    function Kj(a, b, c) {
        b instanceof Nj ? (a.C = b,
        Tj(a.C, a.J)) : (c || (b = Oj(b, Uj)),
        a.C = new Nj(b,a.J))
    }
    function Vj(a, b, c) {
        a.C.set(b, c);
        return a
    }
    function Wj(a, b) {
        return a instanceof Gj ? new Gj(a) : new Gj(a,b)
    }
    function Mj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function Oj(a, b, c) {
        return typeof a === u ? (a = encodeURI(a).replace(b, Xj),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    function Xj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Pj = /[#\/\?@]/g
      , Rj = /[#\?:]/g
      , Qj = /[#\?]/g
      , Uj = /[#\?@]/g
      , Sj = /#/g;
    function Nj(a, b) {
        this.D = this.C = null;
        this.F = a || null;
        this.G = !!b
    }
    function Yj(a) {
        a.C || (a.C = new Map,
        a.D = 0,
        a.F && Eg(a.F, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    function Zj(a) {
        var b = hh(a);
        if ("undefined" == typeof b)
            throw Error("Keys are undefined");
        var c = new Nj(null);
        a = gh(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , f = a[d];
            Array.isArray(f) ? ak(c, e, f) : c.add(e, f)
        }
        return c
    }
    w = Nj.prototype;
    w.V = function() {
        Yj(this);
        return this.D
    }
    ;
    w.add = function(a, b) {
        Yj(this);
        this.F = null;
        a = bk(this, a);
        var c = this.C.get(a);
        c || this.C.set(a, c = []);
        c.push(b);
        this.D = this.D + 1;
        return this
    }
    ;
    function ck(a, b) {
        Yj(a);
        b = bk(a, b);
        a.C.has(b) && (a.F = null,
        a.D = a.D - a.C.get(b).length,
        a.C.delete(b))
    }
    w.ka = function() {
        Yj(this);
        return 0 == this.D
    }
    ;
    function dk(a, b) {
        Yj(a);
        b = bk(a, b);
        return a.C.has(b)
    }
    w.forEach = function(a, b) {
        Yj(this);
        this.C.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    w.na = function() {
        Yj(this);
        for (var a = Array.from(this.C.values()), b = Array.from(this.C.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    w.ca = function(a) {
        Yj(this);
        var b = [];
        if (typeof a === u)
            dk(this, a) && (b = b.concat(this.C.get(bk(this, a))));
        else {
            a = Array.from(this.C.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    w.set = function(a, b) {
        Yj(this);
        this.F = null;
        a = bk(this, a);
        dk(this, a) && (this.D = this.D - this.C.get(a).length);
        this.C.set(a, [b]);
        this.D = this.D + 1;
        return this
    }
    ;
    w.get = function(a, b) {
        if (!a)
            return b;
        a = this.ca(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    function ak(a, b, c) {
        ck(a, b);
        0 < c.length && (a.F = null,
        a.C.set(bk(a, b), nc(c)),
        a.D = a.D + c.length)
    }
    w.toString = function() {
        if (this.F)
            return this.F;
        if (!this.C)
            return "";
        for (var a = [], b = Array.from(this.C.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.ca(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.F = a.join("&")
    }
    ;
    function Lj(a) {
        var b = new Nj;
        b.F = a.F;
        a.C && (b.C = new Map(a.C),
        b.D = a.D);
        return b
    }
    function bk(a, b) {
        b = String(b);
        a.G && (b = b.toLowerCase());
        return b
    }
    function Tj(a, b) {
        b && !a.G && (Yj(a),
        a.F = null,
        a.C.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (ck(this, d),
            ak(this, e, c))
        }, a));
        a.G = b
    }
    w.Ec = function(a) {
        for (var b = 0; b < arguments.length; b++)
            ih(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var ek = {}
      , fk = {}
      , gk = {};
    function hk() {
        throw Error("Do not instantiate directly");
    }
    hk.prototype.Yb = null;
    hk.prototype.Cb = function() {
        return this.content
    }
    ;
    hk.prototype.toString = function() {
        return this.content
    }
    ;
    hk.prototype.qc = function() {
        if (this.Zb !== ek)
            throw Error("Sanitized content was not of kind HTML.");
        return le(this.toString())
    }
    ;
    function ik() {
        hk.call(this)
    }
    D(ik, hk);
    ik.prototype.Zb = ek;
    function jk(a, b) {
        return null != a && a.Zb === b
    }
    ;function kk(a) {
        if (null != a)
            switch (a.Yb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    function lk(a) {
        return jk(a, ek) ? a : a instanceof ie ? mk(je(a).toString()) : a instanceof ie ? mk(je(a).toString()) : mk(String(String(a)).replace(nk, ok), kk(a))
    }
    var mk = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Yb = d);
            return c
        }
    }(ik);
    function pk(a) {
        if (jk(a, ek)) {
            var b = String;
            a = String(a.Cb()).replace(qk, "").replace(rk, "&lt;");
            b = b(a).replace(sk, ok)
        } else
            b = String(a).replace(nk, ok);
        return b
    }
    function tk(a) {
        jk(a, fk) || jk(a, gk) ? a = uk(a) : a instanceof H ? a = uk(Md(a)) : a instanceof H ? a = uk(Md(a)) : a instanceof Gd ? a = uk(Hd(a).toString()) : a instanceof Gd ? a = uk(Hd(a).toString()) : (a = String(a),
        a = vk.test(a) ? a.replace(wk, xk) : sa);
        return a
    }
    var yk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function ok(a) {
        return yk[a]
    }
    var zk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function xk(a) {
        return zk[a]
    }
    var nk = /[\x00\x22\x26\x27\x3c\x3e]/g
      , sk = /[\x00\x22\x27\x3c\x3e]/g
      , wk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , vk = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i
      , Ak = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function uk(a) {
        return String(a).replace(wk, xk)
    }
    var qk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , rk = /</g;
    /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var Bk = {};
    Fj.checked = function(a, b, c) {
        null == c ? (a.removeAttribute("checked"),
        a.checked = !1) : (a.setAttribute("checked", String(c)),
        a.checked = !(!1 === c || "false" === c))
    }
    ;
    Fj.value = function(a, b, c) {
        null == c ? (a.removeAttribute("value"),
        a.value = "") : (a.setAttribute("value", String(c)),
        a.value = String(c))
    }
    ;
    Fj.muted = function(a, b, c) {
        null == c ? (a.removeAttribute("muted"),
        a.muted = !1) : (a.setAttribute("muted", String(c)),
        a.muted = !0)
    }
    ;
    function Ck(a, b) {
        return Dk(b, a.config, a.yd, a.od, a.depth)
    }
    function Dk(a, b, c, d, e) {
        var f, g = '<li class="comment" id="c' + pk(d.id) + '"><div class="avatar-image-container"><img src="', h = d.authorAvatarSrc;
        jk(h, fk) || jk(h, gk) ? h = uk(h) : h instanceof H ? h = uk(Md(h)) : h instanceof H ? h = uk(Md(h)) : h instanceof Gd ? h = uk(Hd(h).toString()) : h instanceof Gd ? h = uk(Hd(h).toString()) : (h = String(h),
        h = Ak.test(h) ? h.replace(wk, xk) : sa);
        g = g + pk(h) + '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' + (d.authorUrl ? '<a href="' + pk(tk(d.authorUrl)) + '" rel="nofollow">' + lk(d.author) + "</a>" : lk(d.author)) + '</cite><span class="icon user ' + pk(null != (f = d.extraIconClass) ? f : "") + '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' + pk(tk(d.url)) + '">' + lk(d.timestamp) + '</a></span></div><p class="comment-content">' + lk(d.body) + '</p><span class="comment-actions secondary-text">' + (e < b.maxDepth ? '<a class="comment-reply" target="_self" data-comment-id="' + pk(d.id) + '">' + lk(c.reply) + "</a>" : "") + '<span class="item-control blog-admin ' + pk(d.adminClass) + '"><a target="_self" href="' + pk(tk(d.deleteUrl)) + '">' + lk(c["delete"]) + '</a></span></span></div><div class="comment-replies">';
        var k;
        f = null != (k = d.replies) ? k : [];
        g += '<div id="c' + pk(d.id) + '-rt" class="comment-thread inline-thread' + (0 == f.length ? " hidden" : "") + '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' + lk(c.replies) + '</a></span></span><ol id="c' + pk(d.id) + '-ra" class="thread-chrome thread-expanded"><div>';
        k = f.length;
        for (h = 0; h < k; h++)
            g += Dk(a, b, c, f[h], e ? e + 1 : 1);
        g += '</div><div id="c' + pk(d.id) + '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' + pk(d.id) + '">' + lk(c.reply) + '</a></div></ol></div></div><div class="comment-replybox-single" id="c' + pk(d.id) + '-ce"></div></li>';
        return mk(g)
    }
    ;function Ek(a, b, c) {
        if (typeof b === u)
            (b = Fk(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Fk(c, d);
                f && (c.style[f] = e)
            }
    }
    var Gk = {};
    function Fk(a, b) {
        var c = Gk[b];
        if (!c) {
            var d = ze(b);
            c = d;
            void 0 === a.style[d] && (d = (cd ? "Webkit" : bd ? "Moz" : $c ? "ms" : null) + Ae(d),
            void 0 !== a.style[d] && (c = d));
            Gk[b] = c
        }
        return c
    }
    ;function Hk() {}
    Tb(Hk);
    function Ik(a) {
        Ff.call(this);
        this.X = a || dc || (dc = new Te);
        this.ga = null;
        this.wa = !1;
        this.C = null;
        this.D = void 0;
        this.T = this.L = null
    }
    D(Ik, Ff);
    Hk.Ya();
    w = Ik.prototype;
    w.Xa = function() {
        return this.C
    }
    ;
    function Jk(a) {
        a.D || (a.D = new zf(a));
        return a.D
    }
    w.Nb = function() {
        this.C = Ue(this.X, "DIV")
    }
    ;
    w.render = function(a) {
        if (this.wa)
            throw Error("Component already rendered");
        this.C || this.Nb();
        a ? a.insertBefore(this.C, null) : this.X.D.body.appendChild(this.C);
        this.L && !this.L.wa || this.Wa()
    }
    ;
    w.Wa = function() {
        this.wa = !0;
        Kk(this, function(a) {
            !a.wa && a.Xa() && a.Wa()
        })
    }
    ;
    function Lk(a) {
        Kk(a, function(b) {
            b.wa && Lk(b)
        });
        a.D && Df(a.D);
        a.wa = !1
    }
    w.W = function() {
        this.wa && Lk(this);
        this.D && (this.D.Aa(),
        delete this.D);
        Kk(this, function(a) {
            a.Aa()
        });
        this.C && Le(this.C);
        this.L = this.C = this.T = null;
        Ik.O.W.call(this)
    }
    ;
    function Kk(a, b) {
        a.T && a.T.forEach(b, void 0)
    }
    ;function Mk(a, b, c, d) {
        Ik.call(this, d);
        this.J = c || window;
        this.Z = a;
        this.da = b;
        this.R = {};
        this.K = this.F = null;
        this.G = {};
        this.G.EMAIL = {
            cb: "Email",
            yb: this.dd
        };
        this.G.FACEBOOK = {
            cb: "Facebook",
            yb: this.ed
        };
        this.G.TWITTER = {
            cb: "Twitter",
            yb: this.fd
        }
    }
    y(Mk, Ik);
    w = Mk.prototype;
    w.Nb = function() {
        var a = this.X
          , b = a.C("DIV", {
            style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
            "class": "mobile-share-panel-outer"
        });
        this.F = a.C("DIV", {
            style: "position:absolute;;width:230px;height:200px;",
            "class": "mobile-share-panel-inner"
        });
        b.appendChild(this.F);
        var c = a.C("DIV", {
            "class": "mobile-share-panel-title"
        });
        c.innerText = oa;
        c.textContent = oa;
        this.F.appendChild(c);
        this.K = a.C("A", {
            href: "javascript:void(0)",
            "class": "mobile-share-panel-button-close"
        });
        this.K.textContent = "\u00d7";
        c.appendChild(this.K);
        for (var d in this.G) {
            c = a.C("A", {
                target: qa,
                display: ua,
                "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase()
            });
            var e = a.C(ka)
              , f = this.G[d];
            e.innerText = f.cb;
            e.textContent = f.cb;
            c.href = f.yb.call(this);
            c.appendChild(e);
            this.F.appendChild(c);
            this.R[d] = c
        }
        this.C = b
    }
    ;
    w.Wa = function() {
        Ik.prototype.Wa.call(this);
        for (var a in this.R) {
            var b = this.R[a];
            b && Bf(Jk(this), b, va, this.zb)
        }
        Bf(Jk(this), this.K, va, this.zb);
        a = this.Xa();
        Bf(Jk(this), a, va, this.zb);
        this.Sb();
        Bf(Jk(this), this.J, "scroll", this.Sb)
    }
    ;
    w.show = function(a) {
        var b = this.Xa();
        b && (b.style.display = a ? "" : p)
    }
    ;
    w.Sb = function() {
        var a = this.J.innerHeight
          , b = this.J.innerWidth
          , c = this.J.pageYOffset
          , d = this.J.pageXOffset
          , e = 0;
        200 < a && (e = (a - 200) / 2);
        Ek(this.F, "top", e + c + "px");
        a = 0;
        230 < b && (a = (b - 230) / 2);
        Ek(this.F, "left", a + d + "px")
    }
    ;
    w.fd = function() {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.Z + ": " + this.da)
    }
    ;
    w.ed = function() {
        return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.da) + "&t=" + encodeURIComponent(this.Z)
    }
    ;
    w.dd = function() {
        return "mailto:?subject=" + encodeURIComponent(this.Z) + "&body=" + encodeURIComponent(this.da)
    }
    ;
    w.zb = function() {
        this.show(!1)
    }
    ;
    var Nk = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,y,z]|-testonly)?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.googleusercontent)|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(lh[3-6]\\.(googleadsserving\\.cn|xn--9kr7l\\.com))|(photos\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/", "i")
      , Ok = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i
      , Pk = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i
      , Qk = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
    function Rk(a) {
        return Nk.test(a) || Ok.test(a) || Pk.test(a) || Qk.test(a)
    }
    ;function Sk(a) {
        this.qa = hj(a)
    }
    y(Sk, yj);
    Sk.prototype.getToken = function() {
        return uj(this, 24)
    }
    ;
    Sk.prototype.setToken = function(a) {
        return xj(this, 24, a)
    }
    ;
    function Tk() {
        this.D = void 0;
        this.C = {}
    }
    w = Tk.prototype;
    w.set = function(a, b) {
        Uk(this, a, b, !1)
    }
    ;
    w.add = function(a, b) {
        Uk(this, a, b, !0)
    }
    ;
    function Uk(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.C[f] || (a.C[f] = new Tk);
            a = a.C[f]
        }
        if (d && void 0 !== a.D)
            throw Error('The collection already contains the key "' + b + '"');
        a.D = c
    }
    function Vk(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a = a.C[b.charAt(c)],
            !a)
                return;
        return a
    }
    w.get = function(a) {
        return (a = Vk(this, a)) ? a.D : void 0
    }
    ;
    w.ca = function() {
        var a = [];
        Wk(this, a);
        return a
    }
    ;
    function Wk(a, b) {
        void 0 !== a.D && b.push(a.D);
        for (var c in a.C)
            Wk(a.C[c], b)
    }
    w.na = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.C[e])
                    return [];
                c = c.C[e]
            }
            Xk(c, a, b)
        } else
            Xk(this, "", b);
        return b
    }
    ;
    function Xk(a, b, c) {
        void 0 !== a.D && c.push(b);
        for (var d in a.C)
            Xk(a.C[d], b + d, c)
    }
    w.V = function() {
        var a = this.ca();
        if (a.V && typeof a.V == m)
            a = a.V();
        else if (Vb(a) || typeof a === u)
            a = a.length;
        else {
            var b = 0, c;
            for (c in a)
                b++;
            a = b
        }
        return a
    }
    ;
    w.ka = function() {
        return void 0 === this.D && vd(this.C)
    }
    ;
    function Yk() {
        if (!Zk) {
            var a = Zk = new Tk, b;
            for (b in $k)
                a.add(b, $k[b])
        }
    }
    var Zk;
    function V(a, b) {
        this.types = a;
        this.C = b
    }
    var $k = {
        a: new V([3, 0],[function(a, b) {
            T(a, 21, b)
        }
        , function(a, b) {
            U(a, 56, b)
        }
        ]),
        al: new V([3],[function(a, b) {
            T(a, 74, b)
        }
        ]),
        b: new V([3, 0],[function(a, b) {
            T(a, 23, b)
        }
        , function(a, b) {
            U(a, 38, b)
        }
        ]),
        ba: new V([0],[function(a, b) {
            U(a, 85, b)
        }
        ]),
        bc: new V([0],[function(a, b) {
            U(a, 87, b)
        }
        ]),
        br: new V([0],[function(a, b) {
            U(a, 86, b)
        }
        ]),
        c: new V([3, 0],[function(a, b) {
            T(a, 2, b)
        }
        , function(a, b) {
            U(a, 39, b)
        }
        ]),
        cc: new V([3],[function(a, b) {
            T(a, 51, b)
        }
        ]),
        ci: new V([3],[function(a, b) {
            T(a, 32, b)
        }
        ]),
        ckm: new V([3],[function(a, b) {
            T(a, 104, b)
        }
        ]),
        cp: new V([0],[function(a, b) {
            U(a, 92, b)
        }
        ]),
        cv: new V([0],[function(a, b) {
            U(a, 94, b)
        }
        ]),
        d: new V([3],[function(a, b) {
            T(a, 3, b)
        }
        ]),
        dc: new V([5],[function(a, b) {
            xj(a, 99, b)
        }
        ]),
        df: new V([3],[function(a, b) {
            T(a, 80, b)
        }
        ]),
        dv: new V([3],[function(a, b) {
            T(a, 90, b)
        }
        ]),
        e: new V([0],[function(a, b) {
            U(a, 15, b)
        }
        ]),
        em: new V([0],[function(a, b) {
            U(a, 107, b)
        }
        ]),
        f: new V([4],[function(a, b) {
            xj(a, 16, b)
        }
        ]),
        fg: new V([3],[function(a, b) {
            T(a, 34, b)
        }
        ]),
        fh: new V([3],[function(a, b) {
            T(a, 30, b)
        }
        ]),
        fm: new V([3],[function(a, b) {
            T(a, 84, b)
        }
        ]),
        fo: new V([2],[function(a, b) {
            wj(a, 79, b)
        }
        ]),
        ft: new V([3],[function(a, b) {
            T(a, 50, b)
        }
        ]),
        fv: new V([3],[function(a, b) {
            T(a, 31, b)
        }
        ]),
        g: new V([3],[function(a, b) {
            T(a, 14, b)
        }
        ]),
        gd: new V([3],[function(a, b) {
            T(a, 83, b)
        }
        ]),
        gm: new V([3],[function(a, b) {
            T(a, 105, b)
        }
        ]),
        h: new V([3, 0],[function(a, b) {
            T(a, 4, b)
        }
        , function(a, b) {
            U(a, 13, b)
        }
        ]),
        i: new V([3],[function(a, b) {
            T(a, 22, b)
        }
        ]),
        ic: new V([0],[function(a, b) {
            U(a, 71, b)
        }
        ]),
        id: new V([3],[function(a, b) {
            T(a, 70, b)
        }
        ]),
        il: new V([3],[function(a, b) {
            T(a, 96, b)
        }
        ]),
        ip: new V([3],[function(a, b) {
            T(a, 54, b)
        }
        ]),
        iv: new V([0],[function(a, b) {
            vj(a, 75, b)
        }
        ]),
        j: new V([1],[function(a, b) {
            pj(a, 29, null == b ? b : fj(b))
        }
        ]),
        k: new V([3, 0],[function(a, b) {
            T(a, 17, b)
        }
        , function(a, b) {
            U(a, 42, b)
        }
        ]),
        l: new V([0],[function(a, b) {
            U(a, 44, b)
        }
        ]),
        lf: new V([3],[function(a, b) {
            T(a, 65, b)
        }
        ]),
        lo: new V([3],[function(a, b) {
            T(a, 97, b)
        }
        ]),
        m: new V([0],[function(a, b) {
            U(a, 63, b)
        }
        ]),
        md: new V([3],[function(a, b) {
            T(a, 91, b)
        }
        ]),
        mm: new V([4],[function(a, b) {
            xj(a, 81, b)
        }
        ]),
        mo: new V([3],[function(a, b) {
            T(a, 73, b)
        }
        ]),
        mv: new V([3],[function(a, b) {
            T(a, 66, b)
        }
        ]),
        n: new V([3],[function(a, b) {
            T(a, 20, b)
        }
        ]),
        nc: new V([3],[function(a, b) {
            T(a, 55, b)
        }
        ]),
        nd: new V([3],[function(a, b) {
            T(a, 53, b)
        }
        ]),
        ng: new V([3],[function(a, b) {
            T(a, 95, b)
        }
        ]),
        ngm: new V([3],[function(a, b) {
            T(a, 106, b)
        }
        ]),
        no: new V([3],[function(a, b) {
            T(a, 37, b)
        }
        ]),
        ns: new V([3],[function(a, b) {
            T(a, 40, b)
        }
        ]),
        nt0: new V([4],[function(a, b) {
            xj(a, 36, b)
        }
        ]),
        nu: new V([3],[function(a, b) {
            T(a, 46, b)
        }
        ]),
        nw: new V([3],[function(a, b) {
            T(a, 48, b)
        }
        ]),
        o: new V([1, 3],[function(a, b) {
            pj(a, 7, null == b ? b : fj(b))
        }
        , function(a, b) {
            T(a, 27, b)
        }
        ]),
        p: new V([3, 0],[function(a, b) {
            T(a, 19, b)
        }
        , function(a, b) {
            U(a, 43, b)
        }
        ]),
        pa: new V([3],[function(a, b) {
            T(a, 61, b)
        }
        ]),
        pc: new V([0],[function(a, b) {
            U(a, 88, b)
        }
        ]),
        pd: new V([3],[function(a, b) {
            T(a, 60, b)
        }
        ]),
        pf: new V([3],[function(a, b) {
            T(a, 67, b)
        }
        ]),
        pg: new V([3],[function(a, b) {
            T(a, 72, b)
        }
        ]),
        pi: new V([2],[function(a, b) {
            wj(a, 76, b)
        }
        ]),
        pp: new V([3],[function(a, b) {
            T(a, 52, b)
        }
        ]),
        q: new V([4],[function(a, b) {
            xj(a, 28, b)
        }
        ]),
        r: new V([3, 0],[function(a, b) {
            T(a, 6, b)
        }
        , function(a, b) {
            U(a, 26, b)
        }
        ]),
        ra: new V([3],[function(a, b) {
            T(a, 103, b)
        }
        ]),
        rf: new V([3],[function(a, b) {
            T(a, 100, b)
        }
        ]),
        rg: new V([3],[function(a, b) {
            T(a, 59, b)
        }
        ]),
        rh: new V([3],[function(a, b) {
            T(a, 49, b)
        }
        ]),
        rj: new V([3],[function(a, b) {
            T(a, 57, b)
        }
        ]),
        ro: new V([2],[function(a, b) {
            wj(a, 78, b)
        }
        ]),
        rp: new V([3],[function(a, b) {
            T(a, 58, b)
        }
        ]),
        rw: new V([3],[function(a, b) {
            T(a, 35, b)
        }
        ]),
        rwa: new V([3],[function(a, b) {
            T(a, 64, b)
        }
        ]),
        rwu: new V([3],[function(a, b) {
            T(a, 41, b)
        }
        ]),
        s: new V([3, 0],[function(a, b) {
            T(a, 33, b)
        }
        , function(a, b) {
            U(a, 1, b)
        }
        ]),
        sc: new V([0],[function(a, b) {
            U(a, 89, b)
        }
        ]),
        sg: new V([3],[function(a, b) {
            T(a, 82, b)
        }
        ]),
        sm: new V([3],[function(a, b) {
            T(a, 93, b)
        }
        ]),
        t: new V([4],[function(a, b) {
            a.setToken(b)
        }
        ]),
        u: new V([3],[function(a, b) {
            T(a, 18, b)
        }
        ]),
        ut: new V([3],[function(a, b) {
            T(a, 45, b)
        }
        ]),
        v: new V([0],[function(a, b) {
            U(a, 62, b)
        }
        ]),
        vb: new V([0],[function(a, b) {
            vj(a, 68, b)
        }
        ]),
        vf: new V([4],[function(a, b) {
            xj(a, 102, b)
        }
        ]),
        vl: new V([0],[function(a, b) {
            vj(a, 69, b)
        }
        ]),
        vm: new V([3],[function(a, b) {
            T(a, 98, b)
        }
        ]),
        w: new V([0],[function(a, b) {
            U(a, 12, b)
        }
        ]),
        x: new V([0],[function(a, b) {
            U(a, 9, b)
        }
        ]),
        y: new V([0],[function(a, b) {
            U(a, 10, b)
        }
        ]),
        ya: new V([2],[function(a, b) {
            wj(a, 77, b)
        }
        ]),
        z: new V([0],[function(a, b) {
            U(a, 11, b)
        }
        ])
    };
    w = Yk.prototype;
    w.parse = function(a) {
        var b = new Sk
          , c = new Sk;
        if ("" == a)
            a = !0;
        else {
            a = a.split("-");
            for (var d = !0, e = 0; e < a.length; e++) {
                var f = a[e];
                if (0 == f.length)
                    d = !1;
                else {
                    var g = f
                      , h = !1;
                    var k = g;
                    var n = g.substring(0, 1);
                    n != n.toLowerCase() && (h = !0,
                    k = g.substring(0, 1).toLowerCase() + g.substring(1));
                    var r = Zk;
                    for (n = 1; n <= k.length; ++n) {
                        var v = r
                          , A = k.substring(0, n);
                        if (0 == A.length ? v.ka() : !Vk(v, A))
                            break
                    }
                    k = 1 == n ? null : (k = r.get(k.substring(0, n - 1))) ? {
                        Cd: g.substring(0, n - 1),
                        value: g.substring(n - 1),
                        Ld: h,
                        attributes: k
                    } : null;
                    if (k) {
                        g = [];
                        h = [];
                        n = !1;
                        for (r = 0; r < k.attributes.types.length; r++) {
                            v = k.attributes.types[r];
                            var E = k.value;
                            A = e;
                            if (k.Ld && 1 == v)
                                for (var Q = E.length; 12 > Q && A < a.length - 1; )
                                    E += "-" + a[A + 1],
                                    Q = E.length,
                                    ++A;
                            else if (2 == v)
                                for (; A < a.length - 1 && a[A + 1].match(/^[\d\.]/); )
                                    E += "-" + a[A + 1],
                                    ++A;
                            Q = k.attributes.C[r];
                            E = al(this, v)(k.Cd, E, b, c, Q);
                            if (null === E) {
                                n = !0;
                                e = A;
                                break
                            } else
                                g.push(v),
                                h.push(E)
                        }
                        if (!n)
                            for (k = 0; k < h.length; k++)
                                r = g[k],
                                E = h[k],
                                bl(this, r)(f, E);
                        d = d && n
                    } else
                        d = !1
                }
            }
            a = d
        }
        return new cl(b,c,a)
    }
    ;
    function dl(a, b, c, d, e, f) {
        e(c, b);
        a = a.substring(0, 1);
        f = f(a == a.toUpperCase());
        e(d, f)
    }
    w.Fd = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        isFinite(b) && (b = String(b));
        b = typeof b === u ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
        if (isNaN(b))
            return 1;
        dl(a, b, c, d, e, Number);
        return null
    }
    ;
    w.vd = function() {}
    ;
    w.Ed = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        var f = Number(b);
        b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
        if (isNaN(b))
            return 1;
        dl(a, b, c, d, e, Number);
        return null
    }
    ;
    w.ud = function() {}
    ;
    w.Dd = function(a, b, c, d, e) {
        if ("" != b)
            return 2;
        dl(a, !0, c, d, e, Boolean);
        return null
    }
    ;
    w.td = function() {}
    ;
    w.Gd = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        dl(a, b, c, d, e, function(f) {
            return f ? "1" : ""
        });
        return null
    }
    ;
    w.wd = function() {}
    ;
    w.Hd = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        dl(a, b, c, d, e, function(f) {
            return f ? 1 : 0
        });
        return null
    }
    ;
    function al(a, b) {
        switch (b) {
        case 0:
            return B(a.Fd, a);
        case 2:
            return B(a.Ed, a);
        case 3:
            return B(a.Dd, a);
        case 4:
            return B(a.Gd, a);
        case 1:
            return B(a.Hd, a);
        default:
            return function() {}
        }
    }
    function bl(a, b) {
        switch (b) {
        case 0:
            return B(a.vd, a);
        case 2:
            return B(a.ud, a);
        case 3:
            return B(a.td, a);
        case 4:
        case 1:
            return B(a.wd, a);
        default:
            return function() {}
        }
    }
    function cl(a, b, c) {
        this.C = a;
        this.D = b;
        this.F = c
    }
    cl.prototype.Ha = function() {
        return this.F
    }
    ;
    function el(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    el.prototype.C = "";
    el.prototype.set = function(a) {
        this.C = "" + a
    }
    ;
    el.prototype.append = function(a, b, c) {
        this.C += String(a);
        if (null != b)
            for (var d = 1; d < arguments.length; d++)
                this.C += arguments[d];
        return this
    }
    ;
    el.prototype.toString = function() {
        return this.C
    }
    ;
    function fl(a) {
        this.G = null;
        this.F = [];
        this.D = null;
        gl(this, a)
    }
    function hl(a) {
        null == a.G && (a.G = new Yk);
        return a.G
    }
    function gl(a, b) {
        a.D = b ? typeof b === u ? hl(a).parse(b) : b : hl(a).parse("")
    }
    function il(a, b) {
        return a == b ? !1 : !0
    }
    w = fl.prototype;
    w.nb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 2) && T(b, 2, a);
        return this
    }
    ;
    w.mb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != P(b, 51) && T(b, 51, a);
        return this
    }
    ;
    w.ob = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != P(b, 32) && T(b, 32, a);
        return this
    }
    ;
    w.Ra = function(a) {
        var b = this.D
          , c = b.C;
        il(a, R(c, 13), R(b.D, 13)) && U(c, 13, a);
        return this
    }
    ;
    w.lb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 20) && T(b, 20, a);
        return this
    }
    ;
    w.qb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 19) && T(b, 19, a);
        return this
    }
    ;
    w.pb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != P(b, 60) && T(b, 60, a);
        return this
    }
    ;
    w.sb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 67) && T(b, 67, a);
        return this
    }
    ;
    w.rb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 52) && T(b, 52, a);
        return this
    }
    ;
    w.Da = function(a) {
        var b = this.D
          , c = b.C;
        il(a, R(c, 1), R(b.D, 1)) && U(c, 1, a);
        return this
    }
    ;
    w.setToken = function(a) {
        a = a || void 0;
        var b = this.D
          , c = b.C;
        il(a, c.getToken(), b.D.getToken()) && c.setToken(a);
        return this
    }
    ;
    w.Sa = function(a) {
        var b = this.D
          , c = b.C;
        il(a, R(c, 12), R(b.D, 12)) && U(c, 12, a);
        return this
    }
    ;
    function jl(a) {
        gl(a, "");
        return a
    }
    w.ta = function() {
        this.F.length = 0;
        var a = this.D
          , b = a.C;
        a = a.D;
        W(this, "s", R(b, 1), R(a, 1));
        W(this, "w", R(b, 12), R(a, 12));
        X(this, "c", S(b, 2), S(a, 2));
        X(this, "d", S(b, 3), S(a, 3));
        W(this, "h", R(b, 13), R(a, 13));
        X(this, "s", P(b, 33), P(a, 33));
        X(this, "h", S(b, 4), S(a, 4));
        X(this, "p", S(b, 19), S(a, 19));
        X(this, "pp", S(b, 52), S(a, 52));
        X(this, "pf", S(b, 67), S(a, 67));
        X(this, "n", S(b, 20), S(a, 20));
        W(this, "r", R(b, 26), R(a, 26));
        X(this, "r", S(b, 6), S(a, 6));
        X(this, "o", P(b, 27), P(a, 27));
        var c = tj(b, 7);
        kl(this, "o", c, tj(a, 7));
        c = tj(b, 29);
        kl(this, "j", c, tj(a, 29));
        W(this, "x", R(b, 9), R(a, 9));
        W(this, "y", R(b, 10), R(a, 10));
        W(this, "z", R(b, 11), R(a, 11));
        X(this, "g", S(b, 14), S(a, 14));
        W(this, "e", R(b, 15), R(a, 15));
        kl(this, "f", uj(b, 16), uj(a, 16));
        X(this, "k", P(b, 17), P(a, 17));
        X(this, "u", P(b, 18), !0);
        X(this, "ut", P(b, 45), !0);
        X(this, "i", P(b, 22), !0);
        X(this, "a", P(b, 21), P(a, 21));
        X(this, "b", S(b, 23), S(a, 23));
        W(this, "b", R(b, 38), R(a, 38));
        W(this, "c", R(b, 39), R(a, 39), 16, 8);
        kl(this, "q", uj(b, 28), uj(a, 28));
        X(this, "fh", P(b, 30), P(a, 30));
        X(this, "fv", P(b, 31), P(a, 31));
        X(this, "fg", S(b, 34), S(a, 34));
        X(this, "ci", P(b, 32), P(a, 32));
        kl(this, "t", b.getToken(), a.getToken());
        kl(this, "nt0", uj(b, 36), uj(a, 36));
        X(this, "rw", S(b, 35), S(a, 35));
        X(this, "rwu", S(b, 41), S(a, 41));
        X(this, "rwa", S(b, 64), S(a, 64));
        X(this, "nw", S(b, 48), S(a, 48));
        X(this, "rh", S(b, 49), S(a, 49));
        X(this, "no", S(b, 37), S(a, 37));
        X(this, "ns", P(b, 40), P(a, 40));
        W(this, "k", R(b, 42), R(a, 42));
        W(this, "p", R(b, 43), R(a, 43));
        W(this, "l", R(b, 44), R(a, 44));
        W(this, "v", R(b, 62), R(a, 62));
        X(this, "nu", P(b, 46), P(a, 46));
        X(this, "ft", P(b, 50), P(a, 50));
        X(this, "cc", P(b, 51), P(a, 51));
        X(this, "nd", P(b, 53), P(a, 53));
        X(this, "ip", P(b, 54), P(a, 54));
        X(this, "nc", P(b, 55), P(a, 55));
        W(this, "a", R(b, 56), R(a, 56));
        X(this, "rj", P(b, 57), P(a, 57));
        X(this, "rp", P(b, 58), P(a, 58));
        X(this, "rg", P(b, 59), P(a, 59));
        X(this, "pd", P(b, 60), P(a, 60));
        X(this, "pa", P(b, 61), P(a, 61));
        W(this, "m", R(b, 63), R(a, 63));
        W(this, "vb", sj(b, 68), sj(a, 68));
        W(this, "vl", sj(b, 69), sj(a, 69));
        X(this, "lf", P(b, 65), P(a, 65));
        X(this, "mv", P(b, 66), P(a, 66));
        X(this, "id", P(b, 70), P(a, 70));
        W(this, "ic", R(b, 71), !0);
        X(this, "pg", S(b, 72), S(a, 72));
        X(this, "mo", P(b, 73), P(a, 73));
        X(this, "al", P(b, 74), P(a, 74));
        W(this, "iv", sj(b, 75), sj(a, 75));
        W(this, "pi", rj(b, 76), rj(a, 76));
        W(this, "ya", rj(b, 77), rj(a, 77));
        W(this, "ro", rj(b, 78), rj(a, 78));
        W(this, "fo", rj(b, 79), rj(a, 79));
        X(this, "df", P(b, 80), P(a, 80));
        kl(this, "mm", uj(b, 81), uj(a, 81));
        X(this, "sg", P(b, 82), P(a, 82));
        X(this, "gd", P(b, 83), P(a, 83));
        X(this, "fm", P(b, 84), P(a, 84));
        W(this, "ba", R(b, 85), R(a, 85));
        W(this, "br", R(b, 86), R(a, 86));
        W(this, "bc", R(b, 87), R(a, 87), 16, 8);
        W(this, "pc", R(b, 88), R(a, 88), 16, 8);
        W(this, "sc", R(b, 89), R(a, 89), 16, 8);
        X(this, "dv", P(b, 90), P(a, 90));
        X(this, "md", P(b, 91), P(a, 91));
        W(this, "cp", R(b, 92), R(a, 92));
        X(this, "sm", P(b, 93), P(a, 93));
        W(this, "cv", R(b, 94), R(a, 94));
        X(this, "ng", P(b, 95), P(a, 95));
        X(this, "il", P(b, 96), P(a, 96));
        X(this, "lo", P(b, 97), P(a, 97));
        X(this, "vm", P(b, 98), P(a, 98));
        kl(this, "dc", uj(b, 99), uj(a, 99));
        X(this, "rf", P(b, 100), P(a, 100));
        kl(this, "vf", uj(b, 102), uj(a, 102));
        X(this, "ra", S(b, 103), S(a, 103));
        X(this, "ckm", P(b, 104), P(a, 104));
        X(this, "gm", P(b, 105), P(a, 105));
        X(this, "ngm", P(b, 106), P(a, 106));
        W(this, "em", R(b, 107), R(a, 107));
        return this.F.join("-")
    }
    ;
    function W(a, b, c, d, e, f) {
        if (null != c) {
            var g = void 0 == e || 10 != e && 16 != e ? 10 : e;
            c = c.toString(g);
            e = new el;
            e.append(16 == g ? "0x" : "");
            g = e.append;
            void 0 == f ? f = "" : (f -= c.length,
            f = 0 >= f ? "" : ye("0", f));
            g.call(e, f);
            e.append(c);
            ll(a, b, e.toString(), !!d)
        }
    }
    function X(a, b, c, d) {
        c && ll(a, b, "", !!d)
    }
    function kl(a, b, c, d) {
        c && ll(a, b, c, !!d)
    }
    function ll(a, b, c, d) {
        d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
        a.F.push(b + c)
    }
    ;function Y(a) {
        fl.call(this, a)
    }
    D(Y, fl);
    w = Y.prototype;
    w.nb = function(a) {
        a && ml(this);
        return Y.O.nb.call(this, a)
    }
    ;
    w.Ra = function(a) {
        a = null == a || 0 > a ? void 0 : a;
        null != a && this.Da();
        return Y.O.Ra.call(this, a)
    }
    ;
    w.ob = function(a) {
        a && ml(this);
        return Y.O.ob.call(this, a)
    }
    ;
    w.mb = function(a) {
        a && ml(this);
        return Y.O.mb.call(this, a)
    }
    ;
    w.Da = function(a) {
        Wb(a) && (a = Math.max(a.width, a.height));
        a = null == a || 0 > a ? void 0 : a;
        null != a && (this.Sa(),
        this.Ra());
        return Y.O.Da.call(this, a)
    }
    ;
    w.qb = function(a) {
        a && ml(this);
        return Y.O.qb.call(this, a)
    }
    ;
    w.rb = function(a) {
        a && ml(this);
        return Y.O.rb.call(this, a)
    }
    ;
    w.sb = function(a) {
        a && ml(this);
        return Y.O.sb.call(this, a)
    }
    ;
    w.lb = function(a) {
        a && ml(this);
        return Y.O.lb.call(this, a)
    }
    ;
    w.pb = function(a) {
        a && ml(this);
        return Y.O.pb.call(this, a)
    }
    ;
    w.Sa = function(a) {
        a = null == a || 0 > a ? void 0 : a;
        null != a && this.Da();
        return Y.O.Sa.call(this, a)
    }
    ;
    function ml(a) {
        a.lb();
        a.mb();
        a.nb();
        a.ob();
        a.pb();
        a.qb();
        a.rb();
        a.sb()
    }
    w.ta = function() {
        var a = this.D.C;
        P(a, 18) || P(a, 45) ? R(a, 1) || this.Da(0) : (a = this.D.C,
        R(a, 1) || R(a, 12) || R(a, 13) || (this.Da(),
        this.Ra(),
        this.Sa(),
        ml(this)));
        return Y.O.ta.call(this)
    }
    ;
    var nl = /^[^\/]*\/\//;
    function ol(a, b) {
        b = void 0 === b ? !1 : b;
        this.G = a;
        this.K = "";
        (a = this.G.match(nl)) && a[0] ? (this.K = a[0],
        a = this.K.match(/\w+/) ? this.G : "http://" + this.G.substring(this.K.length)) : a = "http://" + this.G;
        this.D = Wj(a, !0);
        this.ha = b;
        this.J = !0;
        this.da = !1
    }
    function pl(a, b) {
        a.F = a.F ? a.F + ("/" + b) : b
    }
    function ql(a) {
        if (void 0 == a.C) {
            var b = a.D.D.substring(1);
            a.F = null;
            if (a.ha) {
                a.C = [];
                if (1 < (b.match(/=/g) || []).length)
                    return a.J = !1,
                    a.C;
                var c = b.indexOf("=");
                -1 != c ? (a.C.push(b.substr(0, c)),
                a.C.push(b.substr(c + 1))) : a.C.push(b);
                return a.C
            }
            a.C = b.split("/");
            b = a.C.length;
            2 < b && "u" == a.C[0] && (pl(a, a.C[0] + "/" + a.C[1]),
            a.C.shift(),
            a.C.shift(),
            b -= 2);
            if (0 == b || 4 == b || 7 < b)
                return a.J = !1,
                a.C;
            if (2 == b)
                pl(a, a.C[0]);
            else if ("image" == a.C[0])
                pl(a, a.C[0]);
            else if (7 == b || 3 == b)
                return a.J = !1,
                a.C;
            if (3 >= b) {
                a.da = !0;
                3 == b && (pl(a, a.C[1]),
                a.C.shift(),
                --b);
                --b;
                c = a.C[b];
                var d = c.indexOf("=");
                -1 != d && (a.C[b] = c.substr(0, d),
                a.C.push(c.substr(d + 1)))
            }
        }
        return a.C
    }
    ol.prototype.Ha = function() {
        ql(this);
        return this.J
    }
    ;
    function rl(a) {
        ql(a);
        return a.da
    }
    function sl(a) {
        ql(a);
        return a.ha
    }
    function tl(a) {
        ql(a);
        void 0 == a.F && (a.F = null);
        return a.F
    }
    function ul(a) {
        switch (ql(a).length) {
        case 7:
            return !0;
        case 6:
            return null == tl(a);
        case 5:
            return !1;
        case 3:
            return !0;
        case 2:
            return null == tl(a);
        case 1:
            return !1;
        default:
            return !1
        }
    }
    function vl(a, b) {
        if (sl(a))
            a: {
                switch (b) {
                case 7:
                    b = 0;
                    break;
                case 4:
                    if (!ul(a)) {
                        a = null;
                        break a
                    }
                    b = 1;
                    break;
                default:
                    a = null;
                    break a
                }
                a = ql(a)[b]
            }
        else if (rl(a))
            a: {
                var c = null != tl(a) ? 1 : 0;
                switch (b) {
                case 6:
                    b = 0 + c;
                    break;
                case 4:
                    if (!ul(a)) {
                        a = null;
                        break a
                    }
                    b = 1 + c;
                    break;
                default:
                    a = null;
                    break a
                }
                a = ql(a)[b]
            }
        else
            a: {
                c = null != tl(a) ? 1 : 0;
                switch (b) {
                case 0:
                    b = 0 + c;
                    break;
                case 1:
                    b = 1 + c;
                    break;
                case 2:
                    b = 2 + c;
                    break;
                case 3:
                    b = 3 + c;
                    break;
                case 4:
                    if (!ul(a)) {
                        a = null;
                        break a
                    }
                    b = 4 + c;
                    break;
                case 5:
                    b = ul(a) ? 1 : 0;
                    b = 4 + c + b;
                    break;
                default:
                    a = null;
                    break a
                }
                a = ql(a)[b]
            }
        return a
    }
    function wl(a) {
        void 0 == a.ua && (a.ua = vl(a, 4));
        return a.ua
    }
    ;function xl() {}
    xl.prototype.parse = function(a, b) {
        return new yl(a,void 0 === b ? !1 : b)
    }
    ;
    function yl(a, b) {
        ol.call(this, a, void 0 === b ? !1 : b)
    }
    y(yl, ol);
    function zl(a, b) {
        b = void 0 === b ? !1 : b;
        this.C = null;
        a instanceof yl || (void 0 == Al && (Al = new xl),
        a = Al.parse(a.toString(), b));
        a = this.C = a;
        void 0 == a.N && ((b = wl(a)) || (b = ""),
        a.N = (new Yk).parse(b));
        fl.call(this, a.N);
        this.N = this.C.K;
        a = this.C;
        b = a.D.N;
        this.K = a.D.F + (b ? ":" + b : "");
        this.J = this.C.D.C.toString()
    }
    var Al;
    D(zl, Y);
    function Bl(a) {
        a.J = "";
        return a
    }
    zl.prototype.Ha = function() {
        return this.C.Ha()
    }
    ;
    zl.prototype.ta = function() {
        if (!this.C.Ha())
            return this.C.G;
        var a = zl.O.ta.call(this)
          , b = [];
        null != tl(this.C) && b.push(tl(this.C));
        var c = sl(this.C);
        if (rl(this.C)) {
            var d = this.C;
            void 0 == d.X && (d.X = vl(d, 6));
            b.push(d.X + (a ? "=" + a : ""))
        } else if (c) {
            d = b.push;
            var e = this.C;
            void 0 === e.R && (e.R = vl(e, 7));
            d.call(b, e.R);
            a && b.push(a)
        } else
            d = b.push,
            e = this.C,
            void 0 == e.Z && (e.Z = vl(e, 0)),
            d.call(b, e.Z),
            d = b.push,
            e = this.C,
            void 0 == e.Fa && (e.Fa = vl(e, 1)),
            d.call(b, e.Fa),
            d = b.push,
            e = this.C,
            void 0 == e.T && (e.T = vl(e, 2)),
            d.call(b, e.T),
            d = b.push,
            e = this.C,
            void 0 == e.Ga && (e.Ga = vl(e, 3)),
            d.call(b, e.Ga),
            a && b.push(a),
            a = b.push,
            d = this.C,
            void 0 == d.L && (d.L = vl(d, 5)),
            a.call(b, d.L);
        b = Wj(this.N + this.K + "/" + (c ? b.join("=") : b.join("/")) + (this.J ? "?" + this.J : "")).toString();
        b.startsWith("%3a//") && (b = b.replace("%3a//", "://"));
        return b
    }
    ;
    var Cl = new xl;
    var Dl = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(a))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$")
      , El = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(proxy))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$")
      , Fl = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com)))/img/(b)/[^/?]*/([^/=?]+)/(?:([-a-zA-Z0-9_=]+)?/(?:[^/?]*)?)?(?:\\?[^/]*)?$")
      , Gl = {
        tc: 3,
        proxy: 3,
        uc: 3
    }
      , Hl = {
        tc: 4,
        proxy: 4,
        uc: 4
    };
    function Il(a) {
        return Dl.test(a) || El.test(a) || Fl.test(a)
    }
    function Jl(a) {
        return "/blogger/image/" + Kl(a, Gl) + "/" + Kl(a, Hl)
    }
    function Kl(a, b) {
        if (Dl.test(a)) {
            var c;
            return null != (c = Dl.exec(a)[b.tc]) ? c : ""
        }
        if (El.test(a)) {
            var d;
            return null != (d = El.exec(a)[b.proxy]) ? d : ""
        }
        if (Fl.test(a)) {
            var e;
            return null != (e = Fl.exec(a)[b.uc]) ? e : ""
        }
        throw Error("Not a blogger image url: " + a);
    }
    ;function Ll() {
        var a = Ml
          , b = "Ba";
        if (a.Ba && a.hasOwnProperty(b))
            return a.Ba;
        var c = new a;
        a.Ba = c;
        a.hasOwnProperty(b);
        return c
    }
    ;function Ml() {
        this.F = null;
        this.C = {};
        this.D = !1
    }
    Ml.prototype.init = function(a, b) {
        var c = nd(a);
        rg.Ya().init(a, c);
        this.G = b
    }
    ;
    Ml.prototype.J = function(a, b, c) {
        c.ctrlKey || c.altKey || c.shiftKey || c.metaKey || (a = this.C[a]) && 0 < a.length && (Nl(this),
        ug()(a, b),
        c.preventDefault())
    }
    ;
    Ml.prototype.K = function() {
        Nl(this);
        sg(function() {})
    }
    ;
    function Nl(a) {
        a.D || (document.body.appendChild(Ge("LINK", {
            type: "text/css",
            rel: "stylesheet",
            href: a.G
        })),
        a.D = !0)
    }
    ;function Ol() {
        this.D = {};
        this.C = 0;
        this.J = [];
        this.F = [];
        var a = this;
        this.K = function() {
            Pl(a)
        }
    }
    Ol.prototype.init = function() {
        for (var a = this.D, b = De(document, "img", "delayLoad"), c = 0; c < b.length; c++)
            if (b[c].style.display == p && (b[c].style.display = ""),
            5 > c) {
                var d = b[c];
                "" != d.longDesc && (d.src = d.longDesc)
            } else
                d = b[c].id,
                "" == d && (d = "av-delay-tempId-" + c),
                a[d] = {
                    ec: b[c],
                    key: d
                },
                this.C++;
        0 != this.C && (this.L = K(window, "scroll", this.K),
        this.N = K(window, "resize", this.K),
        Ql(this))
    }
    ;
    function Pl(a) {
        a.G && window.clearTimeout(a.G);
        a.G = window.setTimeout(function() {
            a.G = null;
            Ql(a)
        }, 100)
    }
    function Ql(a) {
        if (!(0 > a.C))
            if (0 == a.C)
                wf(a.L),
                wf(a.N),
                a.C = -1;
            else {
                var b = !1, c;
                for (c in a.D) {
                    a: {
                        var d = a;
                        var e = a.D[c]
                          , f = window.document;
                        f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        f = (new xe(f.clientWidth,f.clientHeight)).height;
                        var g = e.ec;
                        if (1 == g.nodeType) {
                            try {
                                var h = g.getBoundingClientRect()
                            } catch (k) {
                                h = {
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                }
                            }
                            g = new we(h.left,h.top)
                        } else
                            g = g.changedTouches ? g.changedTouches[0] : g,
                            g = new we(g.clientX,g.clientY);
                        g = g.y;
                        if (0 <= g && g <= f)
                            d.J.push(e);
                        else if (0 < g && g < Math.round(2.25 * f))
                            d.F.push(e);
                        else if (0 > g && g > Math.round(-1.25 * f))
                            d.F.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.J.concat(a.F);
                    for (c = 0; c < b.length; c++)
                        h = b[c].ec,
                        "" != h.longDesc && (h.src = h.longDesc),
                        a.C--,
                        delete a.D[b[c].key];
                    a.J = [];
                    a.F = []
                }
            }
    }
    ;var Rl = !$c && !Tc();
    function Sl(a) {
        if (/-[a-z]/.test(za))
            return null;
        if (Rl && a.dataset) {
            if (Vc() && !(za in a.dataset))
                return null;
            a = a.dataset.commentId;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + za.replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;var Tl = {};
    function Ul(a) {
        var b = Tl.hasOwnProperty(a) ? Tl[a] : null;
        if (b)
            return b;
        65536 < Object.keys(Tl).length && (Tl = {});
        var c = [0, 0, 0, 0]
          , d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
        b = Vl(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
        b = Vl(b, d);
        b = Vl(b, /\\./g);
        b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
        b = b.replace(RegExp("{[^]*", "gm"), "");
        b = Wl(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
        b = Wl(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
        b = Wl(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
        b = Wl(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = Wl(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = Wl(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        Wl(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return Tl[a] = b
    }
    function Wl(a, b, c, d) {
        return a.replace(c, function(e) {
            b[d] += 1;
            return Array(e.length + 1).join(" ")
        })
    }
    function Vl(a, b) {
        return a.replace(b, function(c) {
            return Array(c.length + 1).join("A")
        })
    }
    ;var Xl = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-CONTROLS": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-EXPANDED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-HASPOPUP": !0,
        "* ARIA-HIDDEN": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    }
      , Yl = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
    var Zl = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , $l = /[\n\f\r"'()*<>]/g
      , am = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };
    function bm(a) {
        return am[a]
    }
    function cm(a, b, c) {
        b = F(b);
        if ("" == b)
            return null;
        var d = String(b.slice(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
            if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c)
                a = null;
            else {
                a: for (b = b.substring(4, b.length - 1),
                d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
                a = c ? (a = c(b, a)) && Md(a) != ra ? 'url("' + Md(a).replace($l, bm) + '")' : null : null
            }
            return a
        }
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b))
                return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b); )
                if (!(c[1].toLowerCase()in Zl))
                    return null
        }
        return b
    }
    ;function dm(a, b) {
        a = z[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function em(a, b) {
        return (a = z[a]) && a.prototype && a.prototype[b] || null
    }
    var fm = dm(fa, ta) || dm(ia, ta)
      , gm = em(fa, Wa)
      , hm = em(fa, Ta)
      , im = em(fa, hb)
      , jm = em(fa, fb);
    dm(fa, "innerHTML") || dm("HTMLElement", "innerHTML");
    var km = em(fa, Ua)
      , lm = em(fa, "matches") || em(fa, bb)
      , mm = dm(ia, "nodeName")
      , nm = dm(ia, "nodeType")
      , om = dm(ia, "parentNode");
    dm(ia, "childNodes");
    var pm = dm("HTMLElement", kb) || dm(fa, kb)
      , qm = dm("HTMLStyleElement", "sheet")
      , rm = em(ca, Va)
      , sm = em(ca, "setProperty")
      , tm = dm(fa, cb) || dm(ia, cb);
    function um(a, b, c, d) {
        if (a)
            return a.apply(b);
        a = b[c];
        if (!d(a))
            throw Error(da);
        return a
    }
    function vm(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if ($c && 10 > document.documentMode) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if (typeof b[c] != m)
            throw Error(da);
        return b[c].apply(b, d)
    }
    function wm(a) {
        return um(fm, a, ta, function(b) {
            return b instanceof NamedNodeMap
        })
    }
    function xm(a, b, c) {
        try {
            vm(im, a, hb, [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred"))
                throw d;
        }
    }
    function ym(a) {
        return um(pm, a, kb, function(b) {
            return b instanceof CSSStyleDeclaration
        })
    }
    function zm(a) {
        return um(qm, a, "sheet", function(b) {
            return b instanceof CSSStyleSheet
        })
    }
    function Am(a) {
        return um(mm, a, "nodeName", function(b) {
            return typeof b == u
        })
    }
    function Bm(a) {
        return um(nm, a, "nodeType", function(b) {
            return typeof b == q
        })
    }
    function Cm(a) {
        return um(om, a, "parentNode", function(b) {
            return !(b && typeof b.name == u && b.name && "parentnode" == b.name.toLowerCase())
        })
    }
    function Dm(a, b) {
        return vm(rm, a, a.getPropertyValue ? Va : Ta, [b]) || ""
    }
    function Em(a, b, c) {
        vm(sm, a, a.setProperty ? "setProperty" : hb, [b, c])
    }
    function Fm(a) {
        return um(tm, a, cb, function(b) {
            return typeof b == u
        })
    }
    ;var Gm = $c && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g")
      , Hm = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };
    function Im(a, b, c) {
        var d = [];
        Jm(nc(a.cssRules)).forEach(function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
                throw Error("Invalid container id");
            if (!(b && $c && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(Gm, "#" + b + " $1") : e.selectorText
                  , g = d.push;
                e = Km(e.style, c);
                if (-1 != f.indexOf("<"))
                    throw Error("Selector does not allow '<', got: " + f);
                var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h))
                    throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + f);
                a: {
                    for (var k = {
                        "(": ")",
                        "[": "]"
                    }, n = [], r = 0; r < h.length; r++) {
                        var v = h[r];
                        if (k[v])
                            n.push(k[v]);
                        else if (ud(k, v) && n.pop() != v) {
                            h = !1;
                            break a
                        }
                    }
                    h = 0 == n.length
                }
                if (!h)
                    throw Error("() and [] in selector must be balanced, got: " + f);
                if (!(e instanceof Td)) {
                    h = "";
                    for (var A in e)
                        if (Object.prototype.hasOwnProperty.call(e, A)) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(A))
                                throw Error("Name allows only [-_a-zA-Z0-9], got: " + A);
                            k = e[A];
                            null != k && (k = Array.isArray(k) ? k.map(Wd).join(" ") : Wd(k),
                            h += A + ":" + k + ";")
                        }
                    e = h ? new Td(h,Sd) : Vd
                }
                f = f + "{" + Ud(e).replace(/</g, "\\3C ") + "}";
                g.call(d, new de(f,ce))
            }
        });
        return ee(d)
    }
    function Jm(a) {
        return a.filter(function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    }
    function Lm(a, b, c) {
        a = Mm("<style>" + a + "</style>");
        return null == a || null == a.sheet ? ge : Im(a.sheet, void 0 != b ? b : null, c)
    }
    function Mm(a) {
        a = le("<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(je(a), "text/html").body.children[0]
    }
    function Km(a, b) {
        if (!a)
            return Vd;
        var c = document.createElement(l).style;
        Nm(a).forEach(function(d) {
            var e = cd && d in Hm ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Dc(e, "--") || Dc(e, "var") || (d = Dm(a, d),
            d = cm(e, d, b),
            null != d && Em(c, e, d))
        });
        return new Td(c.cssText || "",Sd)
    }
    function Om(a) {
        var b = Array.from(vm(km, a, Ua, [la]))
          , c = pc(b, function(g) {
            return nc(zm(g).cssRules)
        });
        c = Jm(c);
        for (var d = [], e = 0; e < c.length; e++)
            d[e] = {
                index: e,
                Fb: c[e]
            };
        d.sort(function(g, h) {
            var k = Ul(g.Fb.selectorText)
              , n = Ul(h.Fb.selectorText);
            a: {
                for (var r = Math.min(k.length, n.length), v = 0; v < r; v++) {
                    var A = k[v]
                      , E = n[v];
                    A = A > E ? 1 : A < E ? -1 : 0;
                    if (0 != A) {
                        n = A;
                        break a
                    }
                }
                k = k.length;
                n = n.length;
                n = k > n ? 1 : k < n ? -1 : 0
            }
            return n || g.index - h.index
        });
        for (e = 0; e < d.length; e++)
            c[e] = d[e].Fb;
        c.reverse();
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var f; f = a.nextNode(); )
            c.forEach(function(g) {
                vm(lm, f, f.matches ? "matches" : bb, [g.selectorText]) && g.style && Pm(f, g.style)
            });
        b.forEach(Le)
    }
    function Pm(a, b) {
        var c = Nm(a.style);
        Nm(b).forEach(function(d) {
            if (!(0 <= c.indexOf(d))) {
                var e = Dm(b, d);
                Em(a.style, d, e)
            }
        })
    }
    function Nm(a) {
        Vb(a) ? a = nc(a) : (a = td(a),
        lc(a, "cssText"));
        return a
    }
    ;var Qm = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]")
      , Rm = 0;
    function Sm() {
        this.F = [];
        this.D = [];
        this.C = "data-elementweakmap-index-" + Rm++
    }
    Sm.prototype.set = function(a, b) {
        if (vm(gm, a, Wa, [this.C])) {
            var c = parseInt(vm(hm, a, Ta, [this.C]) || null, 10);
            this.D[c] = b
        } else
            c = this.D.push(b) - 1,
            xm(a, this.C, c.toString()),
            this.F.push(a);
        return this
    }
    ;
    Sm.prototype.get = function(a) {
        if (vm(gm, a, Wa, [this.C]))
            return a = parseInt(vm(hm, a, Ta, [this.C]) || null, 10),
            this.D[a]
    }
    ;
    Sm.prototype.clear = function() {
        this.F.forEach(function(a) {
            vm(jm, a, fb, [this.C])
        }, this);
        this.F = [];
        this.D = []
    }
    ;
    var Tm;
    (Tm = !$c) || (Tm = 10 <= Number(ld));
    var Um = Tm
      , Vm = !$c || null == document.documentMode;
    function Wm() {}
    ;var Xm = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var Ym = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var Zm = {
        "ANNOTATION-XML": !0,
        "COLOR-PROFILE": !0,
        "FONT-FACE": !0,
        "FONT-FACE-SRC": !0,
        "FONT-FACE-URI": !0,
        "FONT-FACE-FORMAT": !0,
        "FONT-FACE-NAME": !0,
        "MISSING-GLYPH": !0
    };
    function $m(a) {
        a = a || new an;
        bn(a);
        this.D = wd(a.C);
        this.K = wd(a.Z);
        this.F = wd(a.G);
        this.R = a.ha;
        a.ua.forEach(function(b) {
            if (!Dc(b, "data-"))
                throw new ec('Only "data-" attributes allowed, got: %s.',[b]);
            if (Dc(b, Ka))
                throw new ec('Attributes with "%s" prefix are not allowed, got: %s.',[Ka, b]);
            this.D["* " + b.toUpperCase()] = cn
        }, this);
        a.da.forEach(function(b) {
            b = b.toUpperCase();
            if (-1 == b.indexOf("-") || Zm[b])
                throw new ec("Only valid custom element tag names allowed, got: %s.",[b]);
            this.F[b] = !0
        }, this);
        this.L = a.F;
        this.J = a.X;
        this.G = null;
        this.N = a.T
    }
    D($m, Wm);
    function dn(a) {
        return function(b, c) {
            return (b = a(F(b), c)) && Md(b) != ra ? Md(b) : null
        }
    }
    function an() {
        this.C = {};
        gc([Xl, Yl], function(a) {
            td(a).forEach(function(b) {
                this.C[b] = cn
            }, this)
        }, this);
        this.D = {};
        this.ua = [];
        this.da = [];
        this.Z = wd(Xm);
        this.G = wd(Ym);
        this.ha = !1;
        this.R = Pd;
        this.L = this.J = this.K = this.F = od;
        this.X = null;
        this.N = this.T = !1
    }
    function en() {
        var a = new an;
        a.G = {
            SPAN: !0
        };
        "a b br em i strong".split(" ").forEach(function(b) {
            b = b.toUpperCase();
            if (Ym[b])
                this.G[b] = !0;
            else
                throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
        }, a);
        return a
    }
    function fn(a) {
        var b = new an;
        b.L = gn;
        b.K = qd;
        b.J = qd;
        b.F = a;
        return b
    }
    function hn(a, b) {
        a.R = b;
        return a
    }
    function jn(a, b) {
        return function(c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    }
    function kn(a, b, c, d) {
        a[c] && !b[c] && (a[c] = jn(a[c], d))
    }
    function bn(a) {
        if (a.N)
            throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        kn(a.C, a.D, "* USEMAP", ln);
        var b = dn(a.R);
        ["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
            kn(this.C, this.D, d, b)
        }, a);
        var c = dn(a.F);
        ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
            kn(this.C, this.D, d, c)
        }, a);
        ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
            kn(this.C, this.D, d, ac(mn, this.K))
        }, a);
        kn(a.C, a.D, "A TARGET", ac(nn, [qa, "_self"]));
        kn(a.C, a.D, "* CLASS", ac(on, a.J));
        kn(a.C, a.D, "* ID", ac(pn, a.J));
        kn(a.C, a.D, "* STYLE", ac(a.L, c));
        a.N = !0
    }
    function qn(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    }
    function gn(a, b, c, d) {
        if (!d.Bb)
            return null;
        b = Ud(Km(d.Bb, function(e, f) {
            c.qd = f;
            e = a(e, c);
            var g;
            null == e ? g = null : g = new H(e,Qd);
            return g
        }));
        return "" == b ? null : b
    }
    function cn(a) {
        return F(a)
    }
    function nn(a, b) {
        b = F(b);
        return jc(a, b.toLowerCase()) ? b : null
    }
    function ln(a) {
        return (a = F(a)) && "#" == a.charAt(0) ? a : null
    }
    function mn(a, b, c) {
        return a(F(b), c)
    }
    function on(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    }
    function pn(a, b, c) {
        return a(F(b), c)
    }
    $m.prototype.C = function(a) {
        var b = !(la in this.K) && la in this.F;
        this.G = "*" == this.J && b ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : this.J;
        if (Um) {
            b = a;
            if (Um) {
                a = Ie(document, ka);
                this.G && "*" == this.J && (a.id = this.G);
                this.N && (b = Mm("<div>" + b + "</div>"),
                Om(b),
                b = b.innerHTML);
                b = le(b);
                var c = document.createElement("template");
                if (Vm && "content"in c)
                    se(c, b),
                    c = c.content;
                else {
                    var d = document.implementation.createHTMLDocument("x");
                    c = d.body;
                    se(d.body, b)
                }
                b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (c = Qm ? new WeakMap : new Sm; d = b.nextNode(); ) {
                    c: {
                        var e = d;
                        switch (Bm(e)) {
                        case 3:
                            e = rn(this, e);
                            break c;
                        case 1:
                            if ("TEMPLATE" == Am(e).toUpperCase())
                                e = null;
                            else {
                                var f = Am(e).toUpperCase();
                                if (f in this.K || "http://www.w3.org/1999/xhtml" != Fm(e))
                                    var g = null;
                                else
                                    this.F[f] ? g = document.createElement(f) : (g = Ie(document, ka),
                                    this.R && xm(g, "data-sanitizer-original-tag", f.toLowerCase()));
                                if (g) {
                                    var h = g
                                      , k = wm(e);
                                    if (null != k)
                                        for (var n = 0; f = k[n]; n++)
                                            if (f.specified) {
                                                var r = e;
                                                var v = f;
                                                var A = v.name;
                                                if (Dc(A, Ka))
                                                    v = null;
                                                else {
                                                    var E = Am(r);
                                                    v = v.value;
                                                    var Q = {
                                                        tagName: F(E).toLowerCase(),
                                                        attributeName: F(A).toLowerCase()
                                                    }
                                                      , Mc = {
                                                        Bb: void 0
                                                    };
                                                    Q.attributeName == kb && (Mc.Bb = ym(r));
                                                    r = qn(E, A);
                                                    r in this.D ? (A = this.D[r],
                                                    v = A(v, Q, Mc)) : (A = qn(null, A),
                                                    A in this.D ? (A = this.D[A],
                                                    v = A(v, Q, Mc)) : v = null)
                                                }
                                                null !== v && xm(h, f.name, v)
                                            }
                                    e = g
                                } else
                                    e = null
                            }
                            break c;
                        default:
                            e = null
                        }
                    }
                    if (e) {
                        if (1 == Bm(e) && c.set(d, e),
                        d = Cm(d),
                        f = !1,
                        d)
                            g = Bm(d),
                            h = Am(d).toLowerCase(),
                            k = Cm(d),
                            11 != g || k ? "body" == h && k && (g = Cm(k)) && !Cm(g) && (f = !0) : f = !0,
                            g = null,
                            f || !d ? g = a : 1 == Bm(d) && (g = c.get(d)),
                            g.content && (g = g.content),
                            g.appendChild(e)
                    } else
                        Ke(d)
                }
                c.clear && c.clear()
            } else
                a = Ie(document, ka);
            0 < wm(a).length && (b = Ie(document, ka),
            b.appendChild(a),
            a = b);
            a = (new XMLSerializer).serializeToString(a);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
        } else
            a = "";
        return le(a)
    }
    ;
    function rn(a, b) {
        var c = b.data;
        (b = Cm(b)) && Am(b).toLowerCase() == kb && !(la in a.K) && la in a.F && (c = fe(Lm(c, a.G, B(function(d, e) {
            return this.L(d, {
                qd: e
            })
        }, a))));
        return document.createTextNode(c)
    }
    ;function sn(a) {
        return (new $m(hn(fn(function(b) {
            return Bh(b)
        }), function(b) {
            return Bh(b)
        }))).C(a)
    }
    ;function tn(a) {
        O.call(this, "Blog", a);
        this.C = a.M;
        this.K = new $m(en());
        if (this.C.data) {
            a = new qi;
            this.L = si(a, "blog.canonicalUrl");
            if (this.C.data.lightboxEnabled) {
                var b = this.C.data.lightboxModuleUrl
                  , c = this.C.data.lightboxCssUrl;
                Ll().init(b, c);
                b = De(document, "DIV", "post-body", this.C.C);
                for (c = 0; c < b.length; c++) {
                    for (var d = "fakeId" + un++, e = Ll(), f = De(document, "IMG", void 0, b[c]), g = f.length, h = [], k = 0; k < g; k++) {
                        var n = f[k].src
                          , r = null
                          , v = Re(f[k], "A");
                        if (v) {
                            v = v.href;
                            var A = v;
                            var E = n;
                            if (Rk(A) && Rk(E)) {
                                var Q = new xl;
                                A = Q.parse(A ? jl(Bl(new zl(A,!1))).ta() : "");
                                E = Q.parse(E ? jl(Bl(new zl(E,!1))).ta() : "");
                                E = A.D.D == E.D.D
                            } else
                                E = !1;
                            E || (E = v,
                            Q = n,
                            E = Il(E) && Il(Q) ? Jl(E) === Jl(Q) : !1);
                            if (E) {
                                if (v != n && (r = n),
                                n = v,
                                !Il(n) && (v = wl(Cl.parse(n, !1))))
                                    v = (new Yk).parse(v),
                                    v = new Y(v),
                                    E = (E = void 0,
                                    void 0),
                                    Q = v.D.C,
                                    il(E, S(Q, 4)) && T(Q, 4, E),
                                    E = (E = void 0,
                                    void 0),
                                    Q = v.D.C,
                                    il(E, S(Q, 6)) && T(Q, 6, E),
                                    v = v.ta(),
                                    n = new zl(n,!1),
                                    gl(n, v),
                                    n = n.ta()
                            } else if (v != n)
                                continue;
                            h.push({
                                imageUrl: n,
                                thumbnailUrl: r
                            });
                            K(f[k], va, B(e.J, e, d, h.length - 1))
                        }
                    }
                    0 < h.length && (e.C[d] = h,
                    e.F || (e.F = K(window, "load", e.K, !1, e)))
                }
            }
            this.C.data.mobile && (this.G = new Mk(si(a, "blog.pageTitle"),this.L));
            this.J = this.D = null
        }
    }
    y(tn, O);
    w = tn.prototype;
    w.ja = function(a, b) {
        if ("getComments" == a) {
            if (b.comments && b.messages) {
                a = b.comments;
                for (var c = b.config, d = 0; d < a.length; d++)
                    a: {
                        var e = b
                          , f = a[d];
                        if (!document.getElementById("c" + f.id)) {
                            f.author = this.K.C(f.author);
                            f.body = this.K.C(f.body);
                            var g = 1;
                            if (f.inReplyTo) {
                                var h = document.getElementById("c" + f.inReplyTo);
                                if (h) {
                                    var k;
                                    g = h;
                                    for (k = []; g; )
                                        wc(g, "comment") && k.push(g),
                                        g = Me(g);
                                    g = k.length + 1;
                                    k.length + 1 > e.config.maxDepth && ((h = Re(h.parentNode, null, "comment")) ? (g--,
                                    f.inReplyTo = h.id.slice(1)) : g = 1)
                                }
                            }
                            h = document.getElementById("c" + f.inReplyTo + "-ra");
                            if (!h && (h = document.getElementById("top-ra"),
                            !h))
                                break a;
                            g = {
                                config: e.config,
                                yd: e.messages,
                                od: f,
                                depth: g
                            };
                            k = Ck;
                            e = dc || (dc = new Te);
                            if ((g = k(g || Bk, void 0)) && g.C)
                                e = g.C();
                            else {
                                c: if (Wb(g)) {
                                    if (g.qc && (g = g.qc(),
                                    g instanceof ie))
                                        break c;
                                    g = ke("zSoyz")
                                } else
                                    g = ke(String(g));
                                e = e.D;
                                k = g;
                                g = Ie(e, "DIV");
                                $c ? (k = oe(qe, k),
                                se(g, k),
                                g.removeChild(g.firstChild)) : se(g, k);
                                if (1 == g.childNodes.length)
                                    e = g.removeChild(g.firstChild);
                                else
                                    for (e = e.createDocumentFragment(); g.firstChild; )
                                        e.appendChild(g.firstChild)
                            }
                            vn(this, e);
                            h.appendChild(e);
                            f.inReplyTo && (f = document.getElementById("c" + f.inReplyTo + "-rt")) && tc(f, Xa)
                        }
                    }
                a.length < c.commentsPerPage ? (this.D = null,
                rc(J("loadmore", this.C.C), Xa)) : this.D = a[a.length - 1].timestampAbs + 1
            }
        } else
            O.prototype.ja.call(this, a, b)
    }
    ;
    w.Zc = function(a) {
        var b = null
          , c = null;
        a = Re(a.currentTarget, null, "thread-toggle");
        wc(a, ob) ? (b = nb,
        c = ob) : (b = ob,
        c = nb);
        gc(Ce(c, Me(a)), function(d) {
            vc(d, c, b)
        })
    }
    ;
    w.Oc = function(a) {
        a = Sl(a.currentTarget);
        wn(this, a || void 0)
    }
    ;
    function wn(a, b) {
        var c = document.getElementById(ya);
        if (c) {
            var d = Wj(c.src)
              , e = b ? "c" + b : "top"
              , f = document.getElementById(e + "-ce");
            f && f !== Me(c) && (c.height = "250px",
            c.style.display = ua,
            c.src = "",
            f.appendChild(c),
            b ? d.C.set("parentID", b) : ck(d.C, "parentID"),
            c.src = d.toString());
            gc(Ce("continue", a.C.C), function(g) {
                tc(g, Xa)
            });
            (a = document.getElementById(e + "-continue")) && rc(a, Xa)
        }
    }
    w.Hc = function() {
        this.J && this.D && this.H.Ea("getComments", {
            postId: this.J,
            publishedMin: this.D
        }, function(a) {
            return 500 > mi(a)
        }, ha)
    }
    ;
    w.ia = function() {
        if (this.C.data.mobile) {
            var a = I(ya)
              , b = window.location.href.split("#");
            b[b.length - 1] && "comment-form" == b[b.length - 1] ? a && (a.style.display = ua) : a && (a.style.display = p);
            a = M(this.H, "comment-editor-toggle-link");
            null != a && (a.onclick = this.Yc);
            (a = I("mobile-share-button")) && this.G && (a.onclick = B(this.Ad, this))
        }
        this.R = new Ol;
        this.R.init();
        vn(this, this.C.C);
        if (a = J("loadmore", this.C.C)) {
            a.onclick = this.Hc.bind(this);
            if (Rl && a.dataset)
                b = a.dataset;
            else {
                b = {};
                for (var c = a.attributes, d = 0; d < c.length; ++d) {
                    var e = c[d];
                    if (Dc(e.name, "data-")) {
                        var f = ze(e.name.slice(5));
                        b[f] = e.value
                    }
                }
            }
            b.publishedMin && b.postId && (this.D = parseInt(b.publishedMin, 10) + 1,
            this.J = b.postId,
            tc(a, Xa))
        }
        wn(this)
    }
    ;
    function vn(a, b) {
        gc(Ce("thread-toggle", b), function(c) {
            c.onclick = this.Zc.bind(this);
            gc((c || document).getElementsByTagName("A"), function(d) {
                d.href = "javascript:;"
            })
        }, a);
        gc(Ce("comment-reply", b), function(c) {
            c.onclick = this.Oc.bind(this);
            c.href = "javascript:;"
        }, a)
    }
    w.Ad = function() {
        this.G.wa ? this.G.show(!0) : this.G.render()
    }
    ;
    w.Yc = function() {
        var a = I(ya);
        a && (a.style.display = a.style.display == p ? ua : p);
        return !1
    }
    ;
    var un = 0;
    C("_BlogView", tn);
    function xn(a) {
        O.call(this, "BlogList", a)
    }
    y(xn, O);
    w = xn.prototype;
    w.ia = function() {
        var a = this.H.M.data;
        this.Gb = a.totalItems;
        this.eb = a.numItemsToShow;
        0 != this.eb && this.Gb > this.eb && (li(this.H, "show-all").onclick = this.rc.bind(this),
        li(this.H, "show-n").onclick = this.rc.bind(this));
        K(window, "load", this.Gc)
    }
    ;
    w.rc = function() {
        var a = M(this.H, "blogs");
        if (null != a) {
            a = a.getElementsByTagName("li");
            for (var b = this.eb; b < this.Gb; b++) {
                var c = a[b];
                c.style.display = c.style.display == p ? ua : p
            }
            a = li(this.H, "show-all");
            a.style.display = a.style.display == p ? "inline" : p;
            a = li(this.H, "show-n");
            a.style.display = a.style.display == p ? "inline" : p
        }
    }
    ;
    w.Gc = function() {
        for (var a = document.images.length, b = 0; b < a; b++) {
            var c = document.images[b]
              , d = null;
            if (d = c.getAttribute("data-lateloadsrc"))
                K(c, Qa, function() {
                    this.style.visibility = Xa
                }),
                c.src = d
        }
    }
    ;
    w.Gb = null;
    w.eb = null;
    C("_BlogListView", xn);
    function yn(a) {
        O.call(this, "BlogSearch", a)
    }
    y(yn, O);
    C("_BlogSearchView", yn);
    var zn = RegExp("^[+a-zA-Z0-9_.!#$%&'*\\/=?^`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}$");
    function An(a) {
        O.call(this, "ContactForm", a);
        this.C = a.M;
        this.D = this.C.data
    }
    D(An, O);
    C("_ContactFormView", An);
    An.prototype.ia = function() {
        var a = I(M(this.H, Ga));
        if (a) {
            var b = this;
            a.onclick = function() {
                Bn(b) && Cn(b)
            }
        }
    }
    ;
    function Bn(a) {
        I(M(a.H, Da)).className = Da;
        I(M(a.H, Da)).textContent = "";
        I(M(a.H, Ha)).className = Ha;
        I(M(a.H, Ha)).textContent = "";
        var b = Ie(document, "IMG");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() {
            I(M(a.H, Da)).className = Da;
            I(M(a.H, Da)).textContent = ""
        }
        ;
        var c = F(I(M(a.H, Ba)).value);
        if (!zn.test(c))
            return I(M(a.H, Da)).className = Ea,
            I(M(a.H, Da)).innerHTML = a.D.contactFormInvalidEmailMsg,
            I(M(a.H, Da)).appendChild(b),
            !1;
        c = I(M(a.H, Ca)).value;
        return null == c || "" == F(c) ? (I(M(a.H, Da)).className = Ea,
        I(M(a.H, Da)).innerHTML = a.D.contactFormEmptyMessageMsg,
        I(M(a.H, Da)).appendChild(b),
        !1) : !0
    }
    function Cn(a) {
        I(M(a.H, Ga)).className = "contact-form-button contact-form-button-submit disabled";
        I(M(a.H, Ga)).disabled = !0;
        I(M(a.H, Ha)).className = Ia;
        I(M(a.H, Ha)).innerHTML = a.D.contactFormMessageSendingMsg;
        var b = encodeURIComponent(F(I(M(a.H, Fa)).value))
          , c = encodeURIComponent(F(I(M(a.H, Ba)).value))
          , d = encodeURIComponent(F(I(M(a.H, Ca)).value))
          , e = encodeURIComponent(a.D.blogId)
          , f = encodeURIComponent(a.D.contactFormToken);
        b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e, "token=" + f];
        c = a.D.submitUrl;
        if (window.XDomainRequest && 9 >= Xc()) {
            var g = new XDomainRequest;
            g.onload = function() {
                var h = eval("(" + g.responseText + ")");
                h = eval(h.details.emailSentStatus);
                Dn(a, h)
            }
            ;
            g.open("post", c, !0);
            g.send(b.join("&"))
        } else
            Jg(c, a.rd.bind(a), "POST", b.join("&"))
    }
    An.prototype.rd = function(a) {
        a = a.target;
        var b = eval("(" + Tg(a) + ")");
        b = eval(b.details.emailSentStatus);
        Dn(this, Sg(a) && b)
    }
    ;
    function Dn(a, b) {
        I(M(a.H, Ha)).className = Ia;
        b ? (I(M(a.H, Fa)).value = "",
        I(M(a.H, Ba)).value = "",
        I(M(a.H, Ca)).value = "",
        I(M(a.H, Ha)).innerHTML = a.D.contactFormMessageSentMsg) : I(M(a.H, Ha)).innerHTML = a.D.contactFormMessageNotSentMsg;
        setTimeout(function() {
            I(M(a.H, Ha)).className = Ha;
            I(M(a.H, Ha)).textContent = "";
            I(M(a.H, Ga)).className = "contact-form-button contact-form-button-submit";
            I(M(a.H, Ga)).removeAttribute("disabled")
        }, 3E3)
    }
    ;function En(a) {
        O.call(this, "Example", a)
    }
    y(En, O);
    C("_ExampleView", En);
    function Fn(a) {
        O.call(this, "FeaturedPost", a)
    }
    y(Fn, O);
    C("_FeaturedPostView", Fn);
    function Gn() {}
    ;/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
    function Hn(a, b) {
        this.J = [];
        this.X = a;
        this.ha = b || null;
        this.G = this.F = !1;
        this.D = void 0;
        this.R = this.Z = this.N = !1;
        this.K = 0;
        this.C = null;
        this.L = 0
    }
    D(Hn, Gn);
    Hn.prototype.cancel = function(a) {
        if (this.F)
            this.D instanceof Hn && this.D.cancel();
        else {
            if (this.C) {
                var b = this.C;
                delete this.C;
                a ? b.cancel(a) : (b.L--,
                0 >= b.L && b.cancel())
            }
            this.X ? this.X.call(this.ha, this) : this.R = !0;
            this.F || (a = new In(this),
            Jn(this),
            Kn(this, !1, a))
        }
    }
    ;
    Hn.prototype.T = function(a, b) {
        this.N = !1;
        Kn(this, a, b)
    }
    ;
    function Kn(a, b, c) {
        a.F = !0;
        a.D = c;
        a.G = !b;
        Ln(a)
    }
    function Jn(a) {
        if (a.F) {
            if (!a.R)
                throw new Mn(a);
            a.R = !1
        }
    }
    Hn.prototype.callback = function(a) {
        Jn(this);
        Kn(this, !0, a)
    }
    ;
    function Nn(a, b, c, d) {
        a.J.push([b, c, d]);
        a.F && Ln(a)
    }
    Hn.prototype.then = function(a, b, c) {
        var d, e, f = new Xf(function(g, h) {
            e = g;
            d = h
        }
        );
        Nn(this, e, function(g) {
            g instanceof In ? f.cancel() : d(g);
            return On
        }, this);
        return f.then(a, b, c)
    }
    ;
    Hn.prototype.$goog_Thenable = !0;
    function Pn(a) {
        return ic(a.J, function(b) {
            return typeof b[1] === m
        })
    }
    var On = {};
    function Ln(a) {
        if (a.K && a.F && Pn(a)) {
            var b = a.K
              , c = Qn[b];
            c && (z.clearTimeout(c.ga),
            delete Qn[b]);
            a.K = 0
        }
        a.C && (a.C.L--,
        delete a.C);
        b = a.D;
        for (var d = c = !1; a.J.length && !a.N; ) {
            var e = a.J.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.G ? g : f)
                try {
                    var h = f.call(e || a.ha, b);
                    h === On && (h = void 0);
                    void 0 !== h && (a.G = a.G && (h == b || h instanceof Error),
                    a.D = b = h);
                    if (Wf(b) || typeof z.Promise === m && b instanceof z.Promise)
                        d = !0,
                        a.N = !0
                } catch (k) {
                    b = k,
                    a.G = !0,
                    Pn(a) || (c = !0)
                }
        }
        a.D = b;
        d && (h = B(a.T, a, !0),
        d = B(a.T, a, !1),
        b instanceof Hn ? (Nn(b, h, d),
        b.Z = !0) : b.then(h, d));
        c && (b = new Rn(b),
        Qn[b.ga] = b,
        a.K = b.ga)
    }
    function Mn() {
        cc.call(this)
    }
    D(Mn, cc);
    Mn.prototype.message = "Deferred has already fired";
    Mn.prototype.name = "AlreadyCalledError";
    function In() {
        cc.call(this)
    }
    D(In, cc);
    In.prototype.message = "Deferred was canceled";
    In.prototype.name = "CanceledError";
    function Rn(a) {
        this.ga = z.setTimeout(B(this.D, this), 0);
        this.C = a
    }
    Rn.prototype.D = function() {
        delete Qn[this.ga];
        throw this.C;
    }
    ;
    var Qn = {};
    function Sn(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = Hd(a).toString()
          , e = Ue(new Te(b), ja)
          , f = {
            oc: e,
            za: void 0
        }
          , g = new Hn(Tn,f)
          , h = null
          , k = null != c.timeout ? c.timeout : 5E3;
        0 < k && (h = window.setTimeout(function() {
            Un(e, !0);
            var n = new Vn(1,"Timeout reached for loading script " + d);
            Jn(g);
            Kn(g, !1, n)
        }, k),
        f.za = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != Aa || (Un(e, c.ld || !1, h),
            g.callback(null))
        }
        ;
        e.onerror = function() {
            Un(e, !0, h);
            var n = new Vn(0,"Error while loading script " + d);
            Jn(g);
            Kn(g, !1, n)
        }
        ;
        f = c.attributes || {};
        yd(f, {
            type: mb,
            charset: "UTF-8"
        });
        Ee(e, f);
        te(e, a);
        Wn(b).appendChild(e);
        return g
    }
    function Wn(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 !== b.length ? b[0] : a.documentElement
    }
    function Tn() {
        if (this && this.oc) {
            var a = this.oc;
            a && a.tagName == ja && Un(a, !0, this.za)
        }
    }
    function Un(a, b, c) {
        null != c && z.clearTimeout(c);
        a.onload = function() {}
        ;
        a.onerror = function() {}
        ;
        a.onreadystatechange = function() {}
        ;
        b && window.setTimeout(function() {
            Le(a)
        }, 0)
    }
    function Vn(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        cc.call(this, c);
        this.code = a
    }
    D(Vn, cc);
    function Xn() {
        this.C = Yn;
        this.za = 5E3
    }
    var Zn = 0;
    Xn.prototype.cancel = function(a) {
        a && (a.sd && a.sd.cancel(),
        a.ga && $n(a.ga, !1))
    }
    ;
    function ao(a) {
        return function() {
            $n(a, !1)
        }
    }
    function bo(a, b) {
        return function(c) {
            $n(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function $n(a, b) {
        a = "_callbacks___" + a;
        if (z[a])
            if (b)
                try {
                    delete z[a]
                } catch (c) {
                    z[a] = void 0
                }
            else
                z[a] = pd
    }
    ;var co = Bb(["//ajax.googleapis.com/ajax/services/feed/load"]);
    function eo(a) {
        O.call(this, "Feed", a)
    }
    y(eo, O);
    eo.prototype.ja = function(a, b) {
        "getFeed" == a ? (this.C.F = b,
        fo(this.C)) : O.prototype.ja.call(this, a, b)
    }
    ;
    eo.prototype.ia = function() {
        if (this.D = M(this.H, "feedItemListDisplay")) {
            var a = this.H.M.data;
            this.C = new go(a.feedUrl,this.D,{
                numItemsShow: a.numItemsShow,
                showItemAuthor: a.showItemAuthor,
                showItemDate: a.showItemDate,
                linkTarget: a.openLinksInNewWindow ? qa : "_self",
                useFeedWidgetServ: "true" === a.useFeedWidgetServ
            });
            "true" === a.useFeedWidgetServ ? this.H.Ea("getFeed", null, null, ha) : fo(this.C)
        }
    }
    ;
    function go(a, b, c) {
        this.N = a;
        this.D = b;
        this.C = c
    }
    function fo(a) {
        if (a.C.useFeedWidgetServ)
            "ok" == a.F.status ? ho(a, a.F.feed) : io(a);
        else {
            var b = new Xn;
            b.za = -1;
            var c = {
                q: a.N,
                num: a.C.numItemsShow,
                output: "json",
                v: "1.0"
            }
              , d = B(a.G, a);
            a = c ? wd(c) : {};
            c = "_" + (Zn++).toString(36) + Date.now().toString(36);
            var e = "_callbacks___" + c;
            d && (z[e] = bo(c, d),
            a.callback = e);
            d = {
                timeout: b.za,
                ld: !0
            };
            b = Id.exec(Hd(b.C).toString());
            e = b[3] || "";
            b = Kd(b[1] + Ld("?", b[2] || "", a) + Ld("#", e));
            b = Sn(b, d);
            Nn(b, null, ao(c))
        }
    }
    go.prototype.G = function(a) {
        200 == a.responseStatus ? ho(this, a.responseData.feed) : io(this)
    }
    ;
    function ho(a, b) {
        Ke(a.D);
        var c = Ie(document, "ul");
        a.D.appendChild(c);
        for (var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e]
              , g = Ie(document, "li");
            c.appendChild(g);
            var h;
            (h = a.C.previewMode) || (h = (new Gj(f.link)).G,
            h = !("" == h || "http" == h || "https" == h));
            h = h ? Ge("A", {
                href: "javascript:void(0);"
            }, f.title) : Ge("A", {
                href: f.link
            }, f.title);
            h.target = a.C.linkTarget;
            g.appendChild(Ge(ka, {
                "class": "item-title"
            }, h));
            a.C.showItemDate && (h = Ge(ka, {
                "class": "item-date"
            }, "\u00a0-\u00a0" + (new Date(f.publishedDate)).toLocaleDateString()),
            g.appendChild(h));
            a.C.showItemAuthor && (f = Ge(ka, {
                "class": "item-author"
            }, "\u00a0-\u00a0" + f.author),
            g.appendChild(f))
        }
        a.J && a.J(b)
    }
    function io(a) {
        Ke(a.D);
        a.D.appendChild(Ge(ka, null, "Error loading feed."));
        a.K && a.K()
    }
    var Yn = function(a) {
        var b = Jb.apply(1, arguments);
        if (0 === b.length)
            return Kd(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return Kd(c)
    }(co);
    C("_FeedView", eo);
    function jo(a) {
        O.call(this, "Followers", a);
        this.C = a.M
    }
    y(jo, O);
    jo.prototype.ja = function(a, b) {
        "getFacepile" == a ? (ko(this, b),
        lo(this),
        mo(this, b)) : O.prototype.ja.call(this, a, b)
    }
    ;
    jo.prototype.ia = function() {
        vd(this.C.data) || (lo(this),
        mo(this, this.C.data))
    }
    ;
    function ko(a, b) {
        a = oc(b.followers, De(document, "a", "follower-link", J(Sa, a.C.C)));
        for (b = 0; b < a.length; b++) {
            var c = a[b][0]
              , d = a[b][1];
            d.setAttribute(La, c.viewUrl);
            d.onclick = function() {
                return !1
            }
            ;
            d = J("follower-thumbnail", d);
            d.setAttribute("src", c.thumbnailUrl);
            d.setAttribute(pb, c.displayName)
        }
    }
    function lo(a) {
        var b = J(Sa, a.C.C);
        if (b) {
            b = De(document, "a", "follower-link", b);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.getAttribute(La) && (d.onclick = B(no, a, d.getAttribute(La)))
            }
        }
    }
    function mo(a, b) {
        var c = J("followers-next-link", a.C.C);
        c && (b.nextTimestamp ? (c.style.display = "inline",
        c = J("next-page-link", c),
        c.href = "#",
        c.onclick = function() {
            return !1
        }
        ,
        xf(c),
        K(c, va, B(jo.prototype.D, a, b.nextTimestamp))) : c.style.display = p)
    }
    jo.prototype.D = function(a) {
        this.H.Ea("getFacepile", {
            fcMT: a
        }, null, ha)
    }
    ;
    function no(a) {
        window.open(a, qa, "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no")
    }
    C("_FollowersView", jo);
    function oo(a) {
        O.call(this, oo.ea, a)
    }
    D(oo, O);
    oo.ea = "Header";
    C("_HeaderView", oo);
    function po(a, b) {
        O.call(this, b, a)
    }
    y(po, O);
    function qo(a) {
        O.call(this, "Text", a)
    }
    y(qo, po);
    function ro(a) {
        O.call(this, "HTML", a)
    }
    y(ro, po);
    C("_TextView", qo);
    C("_HTMLView", ro);
    function so(a) {
        O.call(this, "Image", a);
        this.C = a.M
    }
    y(so, O);
    so.prototype.ia = function() {
        if (1 == this.C.data.resize) {
            var a = M(this.H, "img")
              , b = this.C.C;
            if (a && b) {
                if (document.defaultView)
                    b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle)
                    a.style.display = p,
                    b = b.offsetWidth,
                    a.style.display = "";
                else
                    return;
                a.width > b && (a.height = Math.round(b / a.width * a.height),
                a.width = b);
                a.style.visibility = rb
            }
        }
    }
    ;
    C("_ImageView", so);
    function to(a) {
        O.call(this, "Label", a)
    }
    y(to, O);
    C("_LabelView", to);
    function uo(a) {
        O.call(this, uo.ea, a)
    }
    D(uo, O);
    uo.ea = "TextList";
    C("_TextListView", uo);
    function vo(a) {
        O.call(this, vo.ea, a)
    }
    D(vo, O);
    vo.ea = "LinkList";
    C("_LinkListView", vo);
    function wo(a) {
        O.call(this, "BloggerButton", a)
    }
    y(wo, O);
    C("_BloggerButtonView", wo);
    function xo(a) {
        O.call(this, "Navbar", a)
    }
    y(xo, O);
    C("_NavbarView", xo);
    function yo(a) {
        O.call(this, "PageList", a)
    }
    y(yo, O);
    yo.prototype.F = function() {
        return "PageList"
    }
    ;
    yo.prototype.ia = function() {
        if (0 != this.H.M.data.mobile) {
            var a = M(this.H, "select");
            a && (a.onchange = function(b) {
                b = b || window.event;
                b = b.target || b.srcElement;
                if (b = b.options[b.selectedIndex].value)
                    window.location = b
            }
            )
        }
    }
    ;
    var _PageListView = yo;
    C("_PageListView", yo);
    function zo(a) {
        O.call(this, "Poll", a);
        this.G = this.D = this.C = null;
        if (a = this.H.M.data)
            this.C = "poll-widget" + a.pollid,
            this.D = a.iframeurl,
            this.G = K(window, "message", this.J, !1, this),
            a = document.getElementsByName(this.C)[0],
            void 0 != a && (a.src.src = Hd(this.D).toString())
    }
    y(zo, O);
    zo.prototype.J = function(a) {
        var b = document.getElementsByName(this.C)[0];
        void 0 != b && (a = a.C,
        a.source === b.contentWindow && Dc(this.D, a.origin) && (a = a.data,
        typeof a !== q || 0 > a || (b.height = a + "px",
        wf(this.G))))
    }
    ;
    C("_PollView", zo);
    function Ao(a) {
        O.call(this, "PopularPosts", a)
    }
    y(Ao, O);
    C("_PopularPostsView", Ao);
    function Bo(a) {
        O.call(this, "Profile", a);
        this.C = a.M
    }
    y(Bo, O);
    Bo.prototype.ia = function() {
        this.C && this.C.C && 0 == this.H.M.data.isDisplayable && (this.C.C.style.display = p)
    }
    ;
    C("_ProfileView", Bo);
    function Co(a) {
        O.call(this, "RecentPosts", a)
    }
    y(Co, O);
    C("_RecentPostsView", Co);
    function Do(a) {
        O.call(this, "ReportAbuse", a)
    }
    y(Do, O);
    C("_ReportAbuseView", Do);
    function Eo(a) {
        O.call(this, Eo.ea, a)
    }
    D(Eo, O);
    Eo.ea = "Sharing";
    C("_SharingView", Eo);
    function Fo(a) {
        O.call(this, "Stats", a)
    }
    y(Fo, O);
    Fo.prototype.ia = function() {
        null != M(this.H, "totalCount") && Jg(this.H.M.data.statsUrl, B(this.J, this))
    }
    ;
    Fo.prototype.J = function(a) {
        a = a.target;
        if (Sg(a)) {
            if (a.C)
                b: {
                    a = a.C.responseText;
                    if (z.JSON)
                        try {
                            var b = z.JSON.parse(a);
                            break b
                        } catch (h) {}
                    b = wg(a)
                }
            else
                b = void 0;
            a = this.H.M.data;
            var c = M(this.H, "totalCount");
            if (null != c) {
                if (a.showGraphicalCounter) {
                    this.G = b.total;
                    for (var d = "" + b.total, e = 0; e < d.length; e++)
                        c.appendChild(Ge(ka, {
                            "class": "digit stage-0"
                        }, Ge("STRONG", null, document.createTextNode(String(d.charAt(e)))), Ge(ka, {
                            "class": "blind-plate"
                        })));
                    a.showAnimatedCounter && (this.D = new og(b.nextTickMs),
                    K(this.D, "tick", B(this.K, this, c)),
                    this.D.start())
                } else {
                    d = b.total;
                    if (isNaN(d) || 0 > d)
                        d = "NaN";
                    else {
                        d = d.toString();
                        e = [];
                        for (var f = d.length, g = 0; g < f; g++)
                            0 < g && 0 == g % 3 && e.push(","),
                            e.push(d.charAt(f - 1 - g));
                        d = e.reverse().join("")
                    }
                    Ne(c, d)
                }
                a.showSparkline && (a = li(this.H, "sparklinespan"),
                c = b.sparklineData,
                b = b.sparklineOptions,
                a && c && b ? Go(a, c, b) : a && a.parentNode.removeChild(a));
                li(this.H, "content").style.display = ""
            }
        }
    }
    ;
    function Go(a, b, c) {
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(function() {
            (new google.visualization.AreaChart(a)).draw(google.visualization.arrayToDataTable(b, !0), Object.assign({
                enableInteractivity: !1,
                chartArea: {
                    top: 0,
                    left: 0,
                    width: 75,
                    height: 30
                },
                hAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                vAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                legend: {
                    position: p
                }
            }, c))
        })
    }
    Fo.prototype.K = function(a) {
        if (Ho(this.G + 1) > Ho(this.G))
            xf(this.D),
            pg(this.D);
        else {
            this.G++;
            for (var b = "" + this.G, c = 0; c < b.length; c++) {
                var d = a.childNodes[c]
                  , e = b.charAt(c);
                var f = [];
                Qe(d.firstChild, f, !0);
                f = f.join("");
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                f = f.replace(/ +/g, " ");
                " " != f && (f = f.replace(/^\s*/, ""));
                f != e && (Ne(d.firstChild, e),
                qg(B(this.C, this, d, 1), 50),
                qg(B(this.C, this, d, 2), 100),
                qg(B(this.C, this, d, 3), 150),
                qg(B(this.C, this, d, 0), 200))
            }
        }
    }
    ;
    function Ho(a) {
        return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    Fo.prototype.C = function(a, b) {
        var c = "stage-" + (0 != b ? b - 1 : 3);
        b = "stage-" + b;
        var d = qc(a);
        typeof c === u ? lc(d, c) : Array.isArray(c) && (d = uc(d, c));
        typeof b !== u || jc(d, b) ? Array.isArray(b) && sc(d, b) : d.push(b);
        a.className = d.join(" ")
    }
    ;
    C("_StatsView", Fo);
    function Io(a) {
        O.call(this, "Subscribe", a)
    }
    y(Io, O);
    function Jo(a, b) {
        a.style.zIndex = 1 == b ? "20" : ""
    }
    var Ko = null
      , Lo = null;
    C("_SubscribeView", Io);
    C("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(ma + b)
          , d = document.getElementById(na + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != Ko && Ko != c && (Jo(Ko.parentNode, !1),
        Ko.style.display = p,
        Lo.style.visibility = rb);
        c.style.display == p ? (Jo(c.parentNode, !0),
        c.style.display = "",
        Ko = c,
        Lo = d,
        d.style.visibility = Xa,
        document.onclick = function() {
            c.style.display = p;
            Jo(c.parentNode, !1);
            d.style.visibility = rb;
            e && (document.onclick = e)
        }
        ) : (c.style.display = p,
        Jo(c.parentNode, !1),
        d.style.visibility = rb,
        e && (document.onclick = e));
        return !1
    });
    C("_SW_hideReaderList", function(a) {
        var b = document.getElementById(ma + a);
        a = document.getElementById(na + a);
        b.style.display = p;
        Jo(b.parentNode, !1);
        a.style.visibility = rb
    });
    function Mo(a) {
        O.call(this, Mo.ea, a)
    }
    D(Mo, O);
    Mo.ea = "Translate";
    C("_TranslateView", Mo);
    function No(a) {
        this.qa = hj(a)
    }
    y(No, yj);
    var Oo = function(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b))
                throw Error("Expected jspb data to be an array, got " + Ub(b) + ": " + b);
            Pi(b, 34);
            return new a(b)
        }
    }(No);
    var Po;
    function Qo() {
        var a = Po || (Po = Oo('[null,null,null,null,null,"(function(){\'use strict\';/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar e\\u003dthis||self;function f(a){return a};var h;function k(a){this.g\\u003da}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]'));
        if (!a)
            return null;
        a = uj(a, 6);
        if (null === a || void 0 === a)
            a = null;
        else {
            var b = Ad();
            a = b ? b.createScript(a) : a;
            a = new Fd(a,Ed)
        }
        return a
    }
    ;function Ro(a) {
        this.url = a;
        this.timeout = 5E3;
        this.G = "callback";
        this.C = this.D = null
    }
    function So(a) {
        var b = {
            callback: "?"
        };
        b = void 0 === b ? {} : b;
        a.C = bg();
        var c = new Gj(a.url)
          , d = new Map;
        d.set("callback", a.G);
        c.C.Ec(Zj(b), d);
        To(a).then(function() {
            Uo(a, c.toString())
        }).then(function() {
            return a.C.promise
        }).then(function() {
            Vo(a)
        }, function() {
            Vo(a)
        });
        0 < a.timeout && (a.F = setTimeout(function() {
            a.C.reject("Timeout!")
        }, a.timeout));
        return a.C.promise
    }
    function Uo(a, b) {
        var c = new MessageChannel;
        a.D.contentWindow.postMessage({
            url: b,
            callbackName: a.G
        }, "*", [c.port2]);
        c.port1.onmessage = function(d) {
            var e = {};
            void 0 !== a.F && (clearTimeout(a.F),
            a.F = void 0);
            void 0 === d.data && a.C.reject("Callback called, but no data received");
            typeof d.data !== u && a.C.reject("Exploitation attempt! Data is not a string!");
            try {
                e = JSON.parse(d.data)
            } catch (f) {
                a.C.reject("Invalid Data received: " + f.message)
            }
            a.C.resolve(e)
        }
    }
    function To(a) {
        var b = bg()
          , c = Ie(document, "IFRAME");
        if (!c.sandbox)
            throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = p;
        a.D = c;
        a = Qo();
        a = Kh([pe, Ph(Jh(a))]);
        c.srcdoc = je(a);
        a = Kd("data:text/html;charset=UTF-8;base64," + btoa(je(a).toString()));
        c.src = Hd(a).toString();
        c.addEventListener("load", function() {
            return b.resolve(c)
        }, !1);
        c.addEventListener(Qa, function(d) {
            b.reject(d)
        }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }
    function Vo(a) {
        null !== a.D && (document.documentElement.removeChild(a.D),
        a.D = null)
    }
    ;function Z(a) {
        O.call(this, Z.ea, a)
    }
    D(Z, O);
    Z.ea = "Wikipedia";
    C("_WikipediaView", Z);
    Z.Ob = 5;
    Z.La = "";
    Z.ib = "en";
    w = Z.prototype;
    w.Oa = !1;
    w.Ia = !1;
    w.ia = function() {
        var a = M(this.H, "wikipedia-search-form");
        if (a) {
            Z.La = this.H.M.data.language || "en";
            var b = this;
            K(a, "submit", function(c) {
                Z.prototype.Ia || (Z.prototype.Ia = !0,
                Wo(b));
                c.preventDefault()
            })
        }
    }
    ;
    function Wo(a) {
        Ke(I(M(a.H, ub)));
        Ke(I(M(a.H, tb)));
        var b = F(I(M(a.H, sb)).value);
        b ? (b = Vj(Vj(Vj(Jj(new Gj("https://" + (a.Oa && Z.ib || Z.La) + ba), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"),
        b = new Ro(b),
        M(a.H, vb),
        M(a.H, ub),
        So(b).then(B(a.Jd, a), B(a.Id, a))) : (I(M(a.H, vb)).style.display = p,
        li(a.H, ub).textContent = a.H.M.data.enterTextMsg,
        Z.prototype.Ia = !1)
    }
    w.Jd = function(a) {
        var b = M(this.H, vb)
          , c = M(this.H, ub)
          , d = F(I(M(this.H, sb)).value)
          , e = []
          , f = a[1];
        a = f.length;
        if (0 == a)
            I(b).style.display = ua,
            Gh(c, ci.C(this.H.M.data.noResultsFoundMsg)),
            Z.prototype.Ia = !1;
        else {
            for (var g = 0; g < a; g++)
                e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=https://' + ((this.Oa && Z.ib || Z.La) + ".wikipedia.org/wiki/" + f[g].replace(/ /g, "_")) + ">" + f[g] + "</a></div>");
            if (a > Z.Ob) {
                for (a = 0; a < Z.Ob; a++)
                    I(c).innerHTML += e[a];
                I(M(this.H, tb)).style.display = ua;
                c = '<a target="_blank" href=' + Vj(Vj(Vj(Vj(Jj(new Gj("https://" + (this.Oa && Z.ib || Z.La) + ba), "/w/index.php"), pb, "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.H.M.data.moreMsg + "</a>";
                Gh(I(M(this.H, tb)), sn(c))
            } else
                for (d = 0; d < a; d++)
                    I(c).innerHTML += e[d];
            I(b).style.display = ua;
            this.Oa = Z.prototype.Ia = !1
        }
    }
    ;
    w.Id = function() {
        "en" != Z.La ? (this.Oa = !0,
        Wo(this)) : (I(M(this.H, vb)).style.display = p,
        Gh(li(this.H, ub), Hh(this.H.M.data.fetchingErrorMsg)),
        Z.prototype.Ia = !1)
    }
    ;
    if (window.jstiming) {
        window.jstiming.Tb = {};
        window.jstiming.Kd = 1;
        var Xo = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                void 0 != c ? e = c : e = e[0],
                Math.round(d - e)
        }
          , Yo = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
            delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
            delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (v) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t
              , h = g.start;
            e = [];
            f = [];
            for (var k in g)
                if ("start" != k && 0 != k.indexOf("_")) {
                    var n = g[k][1];
                    n ? g[n] && f.push(k + "." + Xo(a, k, g[n][0])) : h && e.push(k + "." + Xo(a, k))
                }
            delete g.start;
            if (b)
                for (var r in b)
                    d += "&" + r + "=" + b[r];
            (b = c) || (b = Ya == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + aa, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        }
          , Zo = function(a, b, c) {
            a = Yo(a, b, c);
            if (!a)
                return "";
            b = new Image;
            var d = window.jstiming.Kd++;
            window.jstiming.Tb[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.Tb[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.jstiming.report = function(a, b, c) {
            var d = document.visibilityState
              , e = "visibilitychange";
            d || (d = document.webkitVisibilityState,
            e = "webkitvisibilitychange");
            if (d == db) {
                var f = !1
                  , g = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ((document.visibilityState || document.webkitVisibilityState) == db)
                            var h = !1;
                        else
                            Zo(a, b, c),
                            h = !0;
                        h && (f = !0,
                        document.removeEventListener(e, g, !1))
                    }
                };
                document.addEventListener(e, g, !1);
                return ""
            }
            return Zo(a, b, c)
        }
    }
    ;
}
).call(this);
