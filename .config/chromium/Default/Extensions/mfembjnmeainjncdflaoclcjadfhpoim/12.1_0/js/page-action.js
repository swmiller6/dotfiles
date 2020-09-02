/* © 2020 goodwordguide.com. All Rights Reserved. */
'use strict';
(() => {
  function A() {
    this.G = {};
  }
  void 0;
  const p = window, t = document, B = JSON.stringify, C = JSON.parse, u = p.chrome || this.browser, D = JSON.stringify, E = JSON.parse, y = p.Array, I = p.String, x = y.isArray, l = {}, F = !p.addEventListener && p.attachEvent ? (b, e, a) => {
    b.attachEvent("on" + e, a);
  } : (b, e, a, c) => {
    b.addEventListener(e, a, c);
  };
  (() => {
    const b = ["0", "0", "0", "0", "0"], e = b.length;
    l.da = (a) => x(a) ? a.length : Object.keys(a).length;
    l.aa = (a) => E(D(a));
    l.S = (a, c) => {
      if (x(a)) {
        var b = a.length;
        for (let f = 0; f < b && !1 !== c(a[f], f, a); f++) {
        }
      } else {
        if (a) {
          for (b in a) {
            if (!1 === c(a[b], b, a)) {
              break;
            }
          }
        }
      }
    };
    l.I = () => {
      x(void 0) ? (void 0).length = 0 : l.S(void 0, (a, c) => {
        delete (void 0)[c];
      });
    };
    l.U = (a) => {
      var c = document.implementation.createHTMLDocument(""), b = c.createDocumentFragment(), f = a.match(/^(<tbody|<thead|<tfoot)/i) ? "table" : "body";
      f = a.match(/^<tr/i) ? "tbody" : f;
      f = a.match(/^<td/i) ? "tr" : f;
      if (a.match(/^<link/i) && c.createStyleSheet) {
        b = a.match("href=[\"'](.*)?[\"']")[1];
        f = a.match("rel=[\"'](.*)?[\"']");
        a = a.match("media=[\"'](.*)?[\"']");
        try {
          var n = c.createStyleSheet(b);
        } catch (h) {
          n = c.createElement("link"), n.href = b;
        }
        f && (n.rel = f[1]);
        a && (n.media = a[1]);
        return [n];
      }
      if (a.match(/^<script/i)) {
        return a = a.match("src=[\"'](.*)?[\"']"), c = c.createElement("script"), c.async = !0, a && (c.src = a[1]), [c];
      }
      c = c.createElement(f);
      c.innerHTML = a;
      for (n = []; a = c.firstChild;) {
        n.push(a), b.appendChild(a);
      }
      return n;
    };
    l.C = (a) => !!navigator.userAgent.match(new RegExp(a + "/", "i"));
    l.Da = (a) => !l.da(a);
    l.Ea = (a, b) => {
      if (a == b) {
        return !0;
      }
      if (!a || !b) {
        return !1;
      }
      const c = Object.getOwnPropertyNames(a);
      if (c.length != Object.getOwnPropertyNames(b).length) {
        return !1;
      }
      const f = c.length;
      for (let n = 0; n < f; n++) {
        const f = c[n];
        if (a[f] !== b[f]) {
          return !1;
        }
      }
      return !0;
    };
    l.Fa = (a) => "function" == typeof a;
    l.Ga = (a) => "string" == typeof a;
    l.Ha = function(a) {
      for (let b, e = 1, f = arguments.length; e < f;) {
        b = arguments[e], l.S(b, (f, b) => {
          a[b] = f;
        }), e++;
      }
      return a;
    };
    l.Ia = (a) => {
      const b = document.createElement("a");
      b.href = a;
      return b;
    };
    l.Ka = () => (Math.random() + 1).toString(36).substring(2);
    l.La = (a, b) => {
      a = a || p;
      a = a.getSelection();
      return !0 === b ? a : a.toString();
    };
    l.ua = () => {
      let a = e, c;
      for (; a;) {
        a--;
        c = b[a].charCodeAt(0);
        if (57 == c) {
          return b[a] = "A", b.join("");
        }
        if (90 == c) {
          b[a] = "0";
        } else {
          return b[a] = I.fromCharCode(c + 1), b.join("");
        }
      }
      b.unshift("0");
      return b.join("");
    };
    l.Sa = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
      const b = 16 * Math.random() | 0;
      return ("x" == a ? b : b & 3 | 8).toString(16);
    });
    l.Ta = (a) => {
      const b = [];
      for (let c in a) {
        b.push(a[c]);
      }
      return b;
    };
    l.ja = l.C("Firefox");
    l.Ba = l.C("Chrome") && !l.C("Edg");
    l.Ca = l.C("Edg");
  })();
  const m = {};
  (() => {
    const b = {}, e = u.extension && "function" === typeof u.extension.getBackgroundPage ? u.extension.getBackgroundPage() : null, a = Object.is(e, p), c = (a, b) => ({command:a, args:b || null}), r = (f, n, h) => {
      if ("backgroundPage" === f.target && !a) {
        return !1;
      }
      const d = b[f.command] || [], c = d.length;
      if (c) {
        for (let a = 0; a < c; a++) {
          d[a](f.args, (b) => {
            h(b);
            a = c;
          }, n);
        }
      }
      return !0;
    };
    a && (p.__MessageReceiver = r);
    m.K = (a, c) => {
      a = (a || "").trim();
      if (!a || "function" !== typeof c) {
        return !1;
      }
      const f = b[a] || [];
      c = a + ":" + f.push(c);
      b[a] = f;
      return c;
    };
    m.Aa = (a, c) => {
      c = c.split(":");
      a = b[a];
      const f = c[1] ? parseInt(c[1]) : 0;
      return a && c[1] && f && a[f] ? (a.splice(f - 1, 1), !0) : !1;
    };
    m.Ma = (a, b, h) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (h = b, b = null);
      try {
        u.runtime.sendMessage(c(a, b), h);
      } catch (d) {
        return !1;
      }
      return !0;
    };
    m.F = (a, b, h, d) => {
      b = (b || "").trim();
      if (a && b) {
        "function" === typeof h && (d = h, h = null);
        try {
          u.tabs.sendMessage(a, c(b, h), d);
        } catch (J) {
        }
      }
    };
    m.Oa = (a, b, h) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (h = b, b = null);
      try {
        return u.tabs.getCurrent((d) => {
          m.F(d.id, c(a, b), h);
        }), !0;
      } catch (d) {
        return d.stack.match("Cannot read property 'getCurrent' of undefined") ? m.L("__ECHO_SERVICE__", {command:a, args:b, callback:h ? !0 : !1}, h) : !1;
      }
    };
    m.Na = (a, b, c) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (c = b, b = null);
      try {
        return u.tabs.query({}, (d) => {
          for (let h = 0, f = d.length; h < f; h++) {
            m.F(d[h].id, a, b, c);
          }
        }), !0;
      } catch (d) {
        return !1;
      }
    };
    m.X = (a, b) => {
      if (a = (a || "").trim()) {
        if ("function" === typeof b) {
          var c = b;
          b = null;
        }
        try {
          u.tabs.query({active:!0, currentWindow:!0}, (d) => {
            m.F(d[0].id, a, b, c);
          });
        } catch (d) {
        }
      }
    };
    m.L = (a, b, h) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (h = b, b = null);
      try {
        if (e) {
          e.__MessageReceiver(c(a, C(B(b))), {}, (a) => {
            a = C(B(a));
            h(a);
          });
        } else {
          const d = c(a, b);
          d.target = "backgroundPage";
          u.runtime.sendMessage(d, h);
        }
      } catch (d) {
        return !1;
      }
      return !0;
    };
    u.runtime.onMessage.addListener(r);
    a && m.K("__ECHO_SERVICE__", (a, b, c) => {
      m.F(c.tab.id, a.command, a.args, a.callback ? (a) => {
        b(a);
      } : null);
    });
  })();
  (() => {
    const b = p.onerror;
    p.onerror = (e, a, c, r, f) => {
      f && t.body && (e = {msg:e, stack:f.stack, url:a, lineNo:c, columNo:r, location:p.location}, "function" === typeof reportError ? reportError(e) : m.L("ERROR", e));
      "function" === typeof b && b(f);
    };
  })();
  let G;
  (() => {
    function b(a) {
      let d = "";
      for (let c in a) {
        let h = a[c] ? a[c] : 0 === a[c] ? "0" : "";
        h instanceof y ? h = h.join(",") : "object" == typeof h && (h = b(h));
        d += encodeURIComponent(c) + "=" + encodeURIComponent(h) + "&";
      }
      return d.slice(0, -1);
    }
    var e = navigator.onLine;
    const a = p.XMLHttpRequest, c = (a) => {
      if (x(a)) {
        let c = [];
        a.forEach((a) => {
          c.push(b(a));
        });
        return c.join("\n");
      }
      return b(a);
    }, r = {text:(a) => a, json:(a) => {
      try {
        return E(a);
      } catch (d) {
        console.log(d);
      }
    }, xml:(a, b) => b.responseXML}, f = (a, b) => {
      const c = a.responseText;
      if (c) {
        return b = b || "text", b = r[b] ? b : "text", r[b](c, a);
      }
    }, n = (a, b, c) => {
      const d = c.xa || p, h = a.status ? a.status : b.N || b.O ? 0 : 200;
      let g = a.statusText ? a.statusText.toUpperCase().replace(/\s+/g, "_") : "OK";
      const k = {headers:{}, status:g, statusCode:h, url:a.responseURL};
      let q = null;
      a.getAllResponseHeaders && a.getAllResponseHeaders().split(/\r\n/).forEach((a) => {
        a && (a = a.split(/:\s*/), k.headers[a[0].toLowerCase()] = a[1]);
      });
      for (const b in a) {
        const g = typeof a[b];
        "function" !== g && "object" !== g && (k[b] = a[b]);
      }
      if (c.M || c.w || c.R) {
        q = f(a, c.sa);
      }
      200 <= h && 300 > h ? c.M && c.M.apply(d, [q, g, k]) : (0 !== h || e ? b.N ? g = "NETWORK_ERROR" : b.aborted || !g ? g = "REQUEST_ABORTED" : b.O ? g = "REQUEST_TIMED_OUT" : 0 === h && (g = "REQUEST_REFUSED") : g = "NETWORK_OFFLINE", c.w && c.w.apply(d, [g, q, k]));
      c.R && c.R.apply(d, [q, g, k]);
    };
    G = (f) => {
      f = f || {};
      var d = f.ya;
      const e = (f.ma || (d ? "post" : "get")).toLowerCase(), h = {};
      var v = null, g = f.ta || "";
      const k = {aborted:!1, N:!1, O:!1}, q = new a;
      q.timeout = f.Qa || 90000;
      d && ("get" == e ? (d = b(d), g += -1 < g.indexOf("?") ? "&" + d : "?" + d) : "json" === f.za ? (v = D(d), h["Content-type"] = "application/json") : (h["Content-type"] = "application/x-www-form-urlencoded", "post" !== e && "put" !== e || "string" === typeof d || (v = c(d))));
      q.open(e, g, !0, f.Ra, f.Ja);
      if ("object" === typeof f.ha) {
        for (let a in f.ha) {
          q.setRequestHeader(a, h[a]);
        }
      }
      for (let a in h) {
        q.setRequestHeader(a, h[a]);
      }
      q.onerror = () => {
        k.N = l.ja ? !1 : !0;
      };
      q.onabort = () => {
        k.aborted = !0;
      };
      q.ontimeout = () => {
        k.O = !0;
      };
      q.onreadystatechange = () => {
        4 == q.readyState && setTimeout(() => {
          n(q, k, f);
        });
      };
      q.send(v);
      return q;
    };
    p.addEventListener("load", () => {
      p.addEventListener("online", () => {
        e = !0;
      }, !1);
      p.addEventListener("offline", () => {
        e = !1;
      }, !1);
    });
  })();
  var e;
  (() => {
    function b() {
    }
    let m = !1, a = [];
    const c = (a) => function(b, g) {
      b ? this.b((k) => {
        F(k, a, (a) => {
          a.oa = a.preventDefault ? a.preventDefault : () => a.returnValue = !1;
          a.ra = a.stopPropagation ? a.stopPropagation : () => {
            a.cancelBubble = !0;
          };
          a.qa = a.stopImmediatePropagation ? a.stopImmediatePropagation : () => {
            a.va = !0;
          };
          a.Pa = () => {
            a.oa();
            a.ra();
            a.qa();
          };
          if (!a.va) {
            return !1 === b(a, k) ? !1 : !0;
          }
        }, g);
      }) : this.b((b) => {
        {
          let g;
          if (b[a]) {
            b[a]();
          } else {
            t.createEvent ? (g = t.createEvent("HTMLEvents"), g.initEvent(a, !0, !0)) : (g = t.createEventObject(), g.wa = a), g.Ua = a, t.createEvent ? b.dispatchEvent(g) : b.fireEvent("on" + g.wa, g);
          }
        }
      });
      return this;
    };
    b.prototype = [];
    b.prototype.constructor = b;
    b.prototype.ia = b.prototype.indexOf;
    b.prototype.na = b.prototype.pop;
    b.prototype.f = b.prototype.push;
    b.prototype.b = function(a) {
      for (let b = 0, g = this.length; b < g && !1 !== a(this[b], b, this); b++) {
      }
    };
    b.prototype.Z = c("blur");
    b.prototype.$ = c("click");
    b.prototype.w = c("error");
    b.prototype.T = c("focus");
    b.prototype.c = c("input");
    b.prototype.ka = c("keydown");
    b.prototype.la = c("keyup");
    b.prototype.P = function(a) {
      const b = e(a);
      this.b((a) => {
        b.b((b) => {
          a.appendChild(b);
        });
      });
    };
    b.prototype.m = function(a, b) {
      return "" === b || !1 === b || null === b ? (this.b((b) => {
        b.removeAttribute(a);
      }), this) : void 0 != b || null != b ? (this.b((g) => {
        g.setAttribute(a, b);
      }), this) : this[0] && this[0].getAttribute ? this[0].getAttribute(a) : "";
    };
    b.prototype.aa = function(a) {
      const b = e([]);
      this.b((g) => {
        b.f(g.cloneNode(a));
      });
      return b;
    };
    b.prototype.ba = function() {
      const a = e([]);
      this.b((b) => {
        (b = e(b).W(".autocomplete-item").na()) && a.f(b);
      });
      return a;
    };
    b.prototype.ca = function() {
      const a = e([]);
      this.b((b) => {
        a.f.apply(a, b.childNodes);
      });
      return a;
    };
    b.prototype.u = function(a) {
      if (!this[0]) {
        return this;
      }
      var b = this[0].ownerDocument.defaultView || t.defaultView || {};
      if ("string" === typeof a) {
        const k = -1 < a.indexOf("-") ? f(a) : a;
        if (void 0 === g) {
          var c = this[0];
          if (b.getComputedStyle) {
            if (-1 < u.indexOf(k)) {
              return e(c).u(k + "Width") + "px " + e(c).u(k + "Style") + " " + e(c).u(k + "Color");
            }
            a = a.replace(/([A-Z])/g, "-$1").toLowerCase();
            a = b.getComputedStyle(c, null).getPropertyValue(a);
            return -1 < w.indexOf(k) && a ? parseInt(a) : a;
          }
          return -1 < w.indexOf(k) ? h(c, k) : c.currentStyle[k] || c.style[k];
        }
        var g = -1 < w.indexOf(k) && g && !isNaN(g) ? g + "px" : g;
        this.b((a) => {
          1 === a.nodeType && (a.style[k] = g);
        });
      } else {
        b = 0;
        let g = [], k = [];
        for (c in a) {
          g[b] = f(c), k[b] = -1 < w.indexOf(g[b]) && void 0 !== a[c] && "" !== a[c] && !isNaN(a[c]) ? a[c] + "px" : a[c], b++;
        }
        this.b((a) => {
          if (1 === a.nodeType) {
            let b = 0, c = g.length;
            for (; b < c;) {
              a.style[g[b]] = k[b] || "", b++;
            }
          }
        });
      }
      return this;
    };
    b.prototype.I = function() {
      this.b((a) => {
        for (; a.firstChild;) {
          a.removeChild(a.firstChild);
        }
      });
      return this;
    };
    b.prototype.B = function(a) {
      if ("string" === typeof a) {
        let b = e(a, n(this[0]));
        return e(this.filter((a) => -1 < b.ia(a)));
      }
      return "function" === typeof a ? e(this.filter(a)) : this;
    };
    b.prototype.ga = function() {
      return -1 != (" " + this[0].className + " ").indexOf(" autocomplete-item ") ? 1 : 0;
    };
    b.prototype.U = function(a) {
      if (void 0 === a) {
        return this.ca().B((a) => 1 === a.nodeType);
      }
      a instanceof b ? (this.I(), this.P(a)) : null !== a && this.b((b) => {
        e(b).I().P(e(a));
      });
      return this;
    };
    b.prototype.l = function(a, b, d, f) {
      const g = this;
      let k;
      "function" === typeof b ? (k = b, f = d) : k = (a) => {
        const c = a.target;
        let g = e(c).W();
        g.f(c);
        g = g.B(b);
        if (g.length) {
          return d(a, g[0]);
        }
      };
      e(a.replace(/\s+/g, "").split(",")).b((a) => {
        c(a).call(g, k, f);
      });
      return this;
    };
    b.prototype.W = function(a) {
      const b = e([]);
      this.b((a) => {
        {
          const b = [];
          for (; a;) {
            b.unshift(a), a = a.parentNode;
          }
          a = b;
        }
        b.f.apply(b, a);
      });
      return a ? b.B(a) : b;
    };
    b.prototype.i = function(a) {
      if (void 0 === a) {
        const a = [];
        this.b((b) => {
          a.push(b.value);
        });
        return 2 > a.length ? a.join() : a;
      }
      this.b((b) => {
        if ("checkbox" === b.type || "radio" === b.type) {
          if (!0 === a) {
            b.checked = !0;
          } else {
            if (!1 === a) {
              b.checked = !1;
            } else {
              const c = e(b).m("value");
              b.checked = c === a + "";
            }
          }
        } else {
          b.value = a;
        }
      });
      return this;
    };
    e = (c, k) => {
      const g = new b;
      if (c) {
        if ("function" === typeof c) {
          m ? c() : a.push(c);
        } else {
          if ("string" === typeof c) {
            c = c.trim();
            if (c.match(/^</)) {
              return e(l.U(c));
            }
            r(g, c, k);
          } else {
            if (c.nodeName) {
              g.f(c);
            } else {
              if (!(k = y.isArray(c))) {
                {
                  k = c;
                  const a = Object.prototype.toString.call(k);
                  k = "object" === typeof k && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(a) && "number" === typeof k.length && (0 === k.length || "object" === typeof k[0] && 0 < k[0].nodeType);
                }
              }
              k || c instanceof b ? g.f.apply(g, c) : g.f(c);
            }
          }
        }
      }
      return g;
    };
    const r = (a, b, c) => {
      b = (b || "").trim();
      c = (c = "string" === typeof c ? c.trim() : c) || t;
      c = "string" === typeof c ? t.querySelectorAll(c) : c;
      "length" in c ? e(c).b((c) => {
        a.f.apply(a, c.querySelectorAll(b));
      }) : a.f.apply(a, c.querySelectorAll(b));
    }, f = (a) => a.toLowerCase().replace(/\-(\w)/g, (a, b) => b.toUpperCase()), n = (a) => {
      if (a) {
        if (9 === a.nodeType) {
          return a;
        }
        if (a.ownerDocument) {
          return a.ownerDocument;
        }
      }
      return t;
    }, h = (a, b) => {
      const c = a.currentStyle || a.style, d = c.top;
      a.style.top = c[b];
      b = a.style.pixelTop;
      a.style.top = d;
      return b;
    }, d = (b) => {
      m = !0;
      for (let c = 0, d = a.length; c < d; c++) {
        a[c](b);
      }
      a = [];
    }, u = ["borderBottom", "borderLeft", "borderRight", "borderTop"], w = "borderBottomWidth borderTopWidth bottom fontSize height marginTop marginBottom maxHeight minHeight paddingTop paddingBottom top".split(" ").concat("borderLeftWidth borderRightWidth fontSize left marginLeft marginRight maxWidth minWidth paddingLeft paddingRight right width".split(" ")), v = t.readyState;
    "complete" === v || "interactive" === v ? d() : F(p, "DOMContentLoaded", d);
  })();
  A.prototype = {ea:function(b, e) {
    b = this.G[b];
    for (let a in b) {
      b[a](e);
    }
    return this;
  }, l:function(b, e) {
    const a = l.ua();
    this.G[b] = this.G[b] || {};
    this.G[b][a] = e;
    return a;
  }};
  var z, H;
  (function() {
    function b(a, b) {
      var c = this.j.suggestions, f = c[this.h];
      f && (f._focus = !1);
      (c = c[a]) ? (c._focus = !0, this.h = a, b && (this.D ? this.D(c.title) : this.c.i(c.title))) : (b && (this.D ? this.D(this.V, this.c[0]) : this.c.i(this.V)), this.h = -1);
    }
    function l(a) {
      var c = this.j.suggestions, e = this.h, f = e;
      -1 == e && -1 == a && (f = c.length);
      return b.call(this, f + a, !0);
    }
    z = function(a, c, r, f, n, h) {
      const d = this;
      this.c = e(a).m("autocomplete", "off");
      this.c.m("id");
      this.pa = c;
      this.h = -1;
      this.J = f ? e(f) : !1;
      this.H = new A;
      this.D = h;
      d.j = n;
      n.suggestions = [];
      n.active = !1;
      this.c.T(function() {
        -1 == d.h && d.A();
      });
      var m = 0;
      e(this.J).l("mouseover", ".autocomplete-item", function() {
        var a = parseInt(e(this).m("index"));
        a != d.h && b.call(d, a);
      }).l("mouseout", ".autocomplete-item *", function() {
        m = 1;
      }).l("mouseout", ".autocomplete-item", function() {
        0 == m && b.call(d, -1);
        m = 0;
      });
      e(this.J).$(function(a) {
        var b = a.target;
        a.preventDefault();
        a.stopPropagation();
        e(b).ga() || (b = e(b).ba()[0]);
        a = e(b).m("title");
        d.c.i(a);
        d.o();
        "function" == typeof r && r(a, d.c[0]);
      });
      this.c.ka(function(a) {
        38 == a.keyCode && d.j.suggestions.length && a.preventDefault();
      });
      this.c.la(function(a) {
        var b = a.keyCode;
        if ("none" == d.J.u("display") && 40 == b) {
          d.A();
        } else {
          var c = d.c.i();
          d.fa = -1 == d.h ? "" : d.j.suggestions[d.h].title;
          if (!(a.ctrlKey || a.shiftKey || a.altKey || -1 == b)) {
            if (c.trim()) {
              if (40 == b) {
                l.call(d, 1);
              } else {
                if (38 == b) {
                  l.call(d, -1);
                } else {
                  if (a = 39 == b) {
                    a = d.c[0];
                    if (t.selection) {
                      var f = t.selection.createRange(), e = f.duplicate();
                      e.moveToElementText(a);
                      e.setEndPoint("EndToEnd", f);
                      a = e.text.length - f.text.length;
                    } else {
                      a = a.selectionStart;
                    }
                    a = a == c.length;
                  }
                  a ? d.A() : 37 != b && (13 == b ? (d.o(), r && r(c, d.c[0])) : c && d.fa != c && d.A());
                }
              }
            } else {
              c || d.o();
            }
          }
        }
      });
    };
    z.prototype = {o:function() {
      return this.Y();
    }, A:function() {
      function a(a) {
        b.c.i() == e && b.c.B(":focus").length && b.Y(a);
      }
      var b = this, e = this.c.i();
      e ? this.pa(e, a) : this.o();
      this.V = e;
    }, Y:function(a) {
      var b = this.j.suggestions.length;
      a = a || [];
      if (0 != b || 0 != a.length) {
        b = !!a.length, this.j.suggestions = a, this.j.active = b, this.h = -1, this.H.ea("active", [b]);
      }
      return this;
    }, K:function() {
      this.H.l.apply(this.H, arguments);
      return this;
    }};
    H = function(a, b, e, f, l, h) {
      return new z(a, b, e, f, l, h);
    };
  })();
  (() => {
    const b = new RegExp(/'''''(.*?)'''''/, "g"), l = new RegExp(/'''(.*?)'''/, "g"), a = new RegExp(/''(.*?)''/, "g"), c = new RegExp(/\s/, "g"), r = new RegExp(/(.*?[^\.\s]\.\s)/, "g"), f = new RegExp(/%20/, "g"), n = new RegExp(/(\*|@|\(|\)|\[|\]|\{|\}|\+|\-|=|:|;|,|_|\$|\^|\.|`|~|#|%|!|'|"|\?|<|>|\/|\\)/, "g");
    let h, d;
    try {
      d = new SpeechSynthesisUtterance, p.speechSynthesis.getVoices(), d.voiceURI = "native", d.volume = 1, d.rate = 1, d.pitch = 1, d.lang = "en-US";
    } catch (v) {
      reportError(v);
    }
    e(t).l("click", (a) => {
      "q" !== a.target.id && h.o();
    });
    const u = (a) => {
      const b = e("#q");
      h = H(b, (b, c) => {
        G({ta:"https://api.goodwordguide.com/v1/autocomplete/?term=" + encodeURIComponent(b || "").replace(f, "+"), ma:"get", sa:"json", M:(a) => {
          const d = [];
          var e = b.replace(n, (a) => `\\${a}`);
          e = new RegExp("^(" + e + ")(.*)$", "g");
          for (let b = 0, c = a.length; b < c; b++) {
            d.push({html:a[b] && a[b].replace ? a[b].replace(e, "$1<b>$2</b>") : a[b], title:a[b], _focus:!1});
          }
          c(d);
        }, w:() => {
          c([]);
        }});
        a.term = b;
      }, (c) => {
        a.term = c;
        b.i(c).Z();
        a.define(c, "autocomplete");
      }, e("#autocomplete"), a, (b) => {
        a.term = b;
      }).K("active", (b) => {
        a.autocomplete_active = b;
      });
    }, w = new p.Vue({el:t.getElementById("body"), data:{currentYear:(new Date).getFullYear(), poses:{a:"Adjective", n:"Noun", r:"Adverb", s:"Adjective", v:"Verb"}, adjectiveFormLabels:{adjective:"adjective", comparative:"comparative adjective", superlative:"superlative adjective"}, nounFormLabels:{singular:"noun", plural:"plural noun"}, verbFormLabels:{"3pp":"3rd person present", g:"gerund or present participle", pp:"past participle", pt:"past tense", verb:"verb"}, result:null, suggestions:[], active:!1, 
    term:"", q:""}, methods:{define:function(d) {
      const e = this;
      this.term = d;
      m.L("DEFINE", {term:d}, (d) => {
        d.response || (d = {response:{source:"not_found"}});
        if ((d = d.response) && d["abstract"]) {
          let e = d["abstract"];
          if (200 < e.length) {
            const a = e.match(r);
            let b = "";
            a && (a.forEach((a) => {
              200 > b.length + a.length && (b += a);
            }), 60 < b.length && (e = b));
          }
          e = e.replace(b, (a, b) => `<b><i>${b}</i></b>`);
          e = e.replace(l, (a, b) => `<b>${b}</b>`);
          e = e.replace(a, (a, b) => `<i>${b}</i>`);
          d.link = d.title.replace(c, "_");
          d["abstract"] = e;
        }
        e.result = d;
      });
      return !1;
    }, submit:function(a) {
      a.preventDefault();
      this.define(e("#q").i());
    }, isLast:function(a, b, c) {
      b++;
      return b === a.length || b === c;
    }, speak:function() {
      d.text = this.result.title;
      speechSynthesis.speak(d);
    }}, watch:{form:function() {
      this.resetDisabled = !1;
    }}, mounted:function() {
      this.$nextTick(() => {
        u(w);
        m.X("SELECTION_GET", (a) => {
          (a = (a || "").trim()) ? w.define(a) : e("#q").T();
        });
        m.X("POPUP_CLOSE");
      });
    }});
  })();
})();

