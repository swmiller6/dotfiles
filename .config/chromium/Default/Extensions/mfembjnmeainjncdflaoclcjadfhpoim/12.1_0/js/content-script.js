/* © 2020 goodwordguide.com. All Rights Reserved. */
'use strict';
(() => {
  const u = window, v = document, C = JSON.stringify, D = JSON.parse, x = u.chrome || this.browser, J = JSON.stringify, K = JSON.parse, E = u.Array, L = u.String, B = E.isArray, p = {}, F = !u.addEventListener && u.attachEvent ? (b, r, a) => {
    b.attachEvent("on" + r, a);
  } : (b, r, a, d) => {
    b.addEventListener(r, a, d);
  };
  (() => {
    const b = ["0", "0", "0", "0", "0"], r = b.length;
    p.W = (a) => B(a) ? a.length : Object.keys(a).length;
    p.U = (a) => K(J(a));
    p.J = (a, d) => {
      if (B(a)) {
        var b = a.length;
        for (let c = 0; c < b && !1 !== d(a[c], c, a); c++) {
        }
      } else {
        if (a) {
          for (b in a) {
            if (!1 === d(a[b], b, a)) {
              break;
            }
          }
        }
      }
    };
    p.C = () => {
      B(void 0) ? (void 0).length = 0 : p.J(void 0, (a, b) => {
        delete (void 0)[b];
      });
    };
    p.L = (a) => {
      var b = document.implementation.createHTMLDocument(""), r = b.createDocumentFragment(), c = a.match(/^(<tbody|<thead|<tfoot)/i) ? "table" : "body";
      c = a.match(/^<tr/i) ? "tbody" : c;
      c = a.match(/^<td/i) ? "tr" : c;
      if (a.match(/^<link/i) && b.createStyleSheet) {
        r = a.match("href=[\"'](.*)?[\"']")[1];
        c = a.match("rel=[\"'](.*)?[\"']");
        a = a.match("media=[\"'](.*)?[\"']");
        try {
          var e = b.createStyleSheet(r);
        } catch (h) {
          e = b.createElement("link"), e.href = r;
        }
        c && (e.rel = c[1]);
        a && (e.media = a[1]);
        return [e];
      }
      if (a.match(/^<script/i)) {
        return a = a.match("src=[\"'](.*)?[\"']"), b = b.createElement("script"), b.async = !0, a && (b.src = a[1]), [b];
      }
      b = b.createElement(c);
      b.innerHTML = a;
      for (e = []; a = b.firstChild;) {
        e.push(a), r.appendChild(a);
      }
      return e;
    };
    p.w = (a) => !!navigator.userAgent.match(new RegExp(a + "/", "i"));
    p.Ea = (a) => !p.W(a);
    p.Fa = (a, b) => {
      if (a == b) {
        return !0;
      }
      if (!a || !b) {
        return !1;
      }
      const d = Object.getOwnPropertyNames(a);
      if (d.length != Object.getOwnPropertyNames(b).length) {
        return !1;
      }
      const c = d.length;
      for (let e = 0; e < c; e++) {
        const c = d[e];
        if (a[c] !== b[c]) {
          return !1;
        }
      }
      return !0;
    };
    p.Ga = (a) => "function" == typeof a;
    p.Ha = (a) => "string" == typeof a;
    p.Ia = function(a) {
      for (let b, r = 1, c = arguments.length; r < c;) {
        b = arguments[r], p.J(b, (b, c) => {
          a[c] = b;
        }), r++;
      }
      return a;
    };
    p.Ka = (a) => {
      const b = document.createElement("a");
      b.href = a;
      return b;
    };
    p.La = () => (Math.random() + 1).toString(36).substring(2);
    p.f = (a, b) => {
      a = a || u;
      a = a.getSelection();
      return !0 === b ? a : a.toString();
    };
    p.Ra = () => {
      let a = r, d;
      for (; a;) {
        a--;
        d = b[a].charCodeAt(0);
        if (57 == d) {
          return b[a] = "A", b.join("");
        }
        if (90 == d) {
          b[a] = "0";
        } else {
          return b[a] = L.fromCharCode(d + 1), b.join("");
        }
      }
      b.unshift("0");
      return b.join("");
    };
    p.Sa = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
      const b = 16 * Math.random() | 0;
      return ("x" == a ? b : b & 3 | 8).toString(16);
    });
    p.Ta = (b) => {
      const a = [];
      for (let d in b) {
        a.push(b[d]);
      }
      return a;
    };
    p.ca = p.w("Firefox");
    p.Ca = p.w("Chrome") && !p.w("Edg");
    p.Da = p.w("Edg");
  })();
  const t = {};
  (() => {
    const b = {}, r = x.extension && "function" === typeof x.extension.getBackgroundPage ? x.extension.getBackgroundPage() : null, a = Object.is(r, u), d = (b, a) => ({command:b, args:a || null}), g = (c, e, h) => {
      if ("backgroundPage" === c.target && !a) {
        return !1;
      }
      const k = b[c.command] || [], d = k.length;
      if (d) {
        for (let b = 0; b < d; b++) {
          k[b](c.args, (a) => {
            h(a);
            b = d;
          }, e);
        }
      }
      return !0;
    };
    a && (u.__MessageReceiver = g);
    t.j = (a, e) => {
      if ((a = (a || "").trim()) && "function" === typeof e) {
        var c = b[a] || [];
        c.push(e);
        b[a] = c;
      }
    };
    t.Ba = (a, e) => {
      e = e.split(":");
      a = b[a];
      const c = e[1] ? parseInt(e[1]) : 0;
      return a && e[1] && c && a[c] ? (a.splice(c - 1, 1), !0) : !1;
    };
    t.Oa = (a, b, h) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (h = b, b = null);
      try {
        x.runtime.sendMessage(d(a, b), h);
      } catch (k) {
        return !1;
      }
      return !0;
    };
    t.B = (a, b, h, k) => {
      b = (b || "").trim();
      if (a && b) {
        "function" === typeof h && (k = h, h = null);
        try {
          x.tabs.sendMessage(a, d(b, h), k);
        } catch (z) {
        }
      }
    };
    t.ra = () => {
      var a = "CLOSE_POPUP";
      if (a = (a || "").trim()) {
        if ("function" === typeof h) {
          var b = h;
          var h = null;
        }
        try {
          x.tabs.getCurrent((c) => {
            t.B(c.id, d(a, h), b);
          });
        } catch (k) {
          k.stack.match("Cannot read property 'getCurrent' of undefined") && t.A("__ECHO_SERVICE__", {command:a, args:h, callback:b ? !0 : !1}, b);
        }
      }
    };
    t.Pa = (a, b, d) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (d = b, b = null);
      try {
        return x.tabs.query({}, (c) => {
          for (let e = 0, k = c.length; e < k; e++) {
            t.B(c[e].id, a, b, d);
          }
        }), !0;
      } catch (k) {
        return !1;
      }
    };
    t.Qa = (a, b, d) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (d = b, b = null);
      try {
        x.tabs.query({active:!0, currentWindow:!0}, (c) => {
          t.B(c[0].id, a, b, d);
        });
      } catch (k) {
        return !1;
      }
      return !0;
    };
    t.A = (a, b, h) => {
      if (a = (a || "").trim()) {
        "function" === typeof b && (h = b, b = null);
        try {
          if (r) {
            r.__MessageReceiver(d(a, D(C(b))), {}, (a) => {
              a = D(C(a));
              h(a);
            });
          } else {
            const c = d(a, b);
            c.target = "backgroundPage";
            x.runtime.sendMessage(c, h);
          }
        } catch (k) {
        }
      }
    };
    x.runtime.onMessage.addListener(g);
    a && t.j("__ECHO_SERVICE__", (a, b, d) => {
      t.B(d.tab.id, a.command, a.args, a.callback ? (a) => {
        b(a);
      } : null);
    });
  })();
  (() => {
    const b = u.onerror;
    u.onerror = (r, a, d, g, c) => {
      c && v.body && (r = {msg:r, stack:c.stack, url:a, lineNo:d, columNo:g, location:u.location}, "function" === typeof reportError ? reportError(r) : t.A("ERROR", r));
      "function" === typeof b && b(c);
    };
  })();
  var g;
  (() => {
    function b() {
    }
    let r = !1, a = [];
    const d = (a) => function(b, f) {
      b ? this.c((m) => {
        F(m, a, (a) => {
          a.oa = a.preventDefault ? a.preventDefault : () => a.returnValue = !1;
          a.ua = a.stopPropagation ? a.stopPropagation : () => {
            a.cancelBubble = !0;
          };
          a.ta = a.stopImmediatePropagation ? a.stopImmediatePropagation : () => {
            a.xa = !0;
          };
          a.sa = () => {
            a.oa();
            a.ua();
            a.ta();
          };
          if (!a.xa) {
            return !1 === b(a, m) ? !1 : !0;
          }
        }, f);
      }) : this.c((b) => {
        {
          let f;
          if (b[a]) {
            b[a]();
          } else {
            v.createEvent ? (f = v.createEvent("HTMLEvents"), f.initEvent(a, !0, !0)) : (f = v.createEventObject(), f.ya = a), f.Va = a, v.createEvent ? b.dispatchEvent(f) : b.fireEvent("on" + f.ya, f);
          }
        }
      });
      return this;
    };
    b.prototype = [];
    b.prototype.constructor = b;
    b.prototype.$ = b.prototype.indexOf;
    b.prototype.g = b.prototype.push;
    b.prototype.c = function(a) {
      for (let b = 0, f = this.length; b < f && !1 !== a(this[b], b, this); b++) {
      }
    };
    b.prototype.S = d("blur");
    b.prototype.T = d("click");
    b.prototype.X = d("dblclick");
    b.prototype.ea = d("keydown");
    b.prototype.fa = d("keyup");
    b.prototype.ga = d("mousedown");
    b.prototype.ha = d("mousemove");
    b.prototype.ia = d("mouseup");
    b.prototype.qa = d("resize");
    b.prototype.H = function(a) {
      if (a) {
        const b = ("" + a).split(/\s+/);
        this.c((f) => {
          if (1 === f.nodeType) {
            if (f.className) {
              const a = " " + f.className + " ";
              let m = f.className, q = 0;
              const c = b.length;
              for (; q < c;) {
                0 > a.indexOf(" " + b[q] + " ") && (m += " " + b[q]), q++;
              }
              f.className = m.trim();
            } else {
              f.className = a;
            }
          }
        });
      }
    };
    b.prototype.i = function(a) {
      const b = g(a);
      this.c((a) => {
        b.c((b) => {
          a.appendChild(b);
        });
      });
    };
    b.prototype.P = function(a) {
      const b = g(a, void 0);
      this.c((a) => {
        b.i(a);
      });
      return this;
    };
    b.prototype.R = function() {
      return this[0] && this[0].getAttribute ? this[0].getAttribute("target") : "";
    };
    b.prototype.U = function(a) {
      const b = g([]);
      this.c((f) => {
        b.g(f.cloneNode(a));
      });
      return b;
    };
    b.prototype.V = function() {
      const a = g([]);
      this.c((b) => {
        a.g.apply(a, b.childNodes);
      });
      return a;
    };
    b.prototype.b = function(a) {
      if (!this[0]) {
        return this;
      }
      var b = this[0].ownerDocument.defaultView || v.defaultView || {};
      if ("string" === typeof a) {
        const m = -1 < a.indexOf("-") ? c(a) : a;
        if (void 0 === d) {
          var f = this[0];
          if (b.getComputedStyle) {
            if (-1 < l.indexOf(m)) {
              return g(f).b(m + "Width") + "px " + g(f).b(m + "Style") + " " + g(f).b(m + "Color");
            }
            a = a.replace(/([A-Z])/g, "-$1").toLowerCase();
            a = b.getComputedStyle(f, null).getPropertyValue(a);
            return -1 < n.indexOf(m) && a ? parseInt(a) : a;
          }
          return -1 < n.indexOf(m) ? h(f, m) : f.currentStyle[m] || f.style[m];
        }
        var d = -1 < n.indexOf(m) && d && !isNaN(d) ? d + "px" : d;
        this.c((a) => {
          1 === a.nodeType && (a.style[m] = d);
        });
      } else {
        b = 0;
        let m = [], q = [];
        for (f in a) {
          m[b] = c(f), q[b] = -1 < n.indexOf(m[b]) && void 0 !== a[f] && "" !== a[f] && !isNaN(a[f]) ? a[f] + "px" : a[f], b++;
        }
        this.c((a) => {
          if (1 === a.nodeType) {
            let b = 0, f = m.length;
            for (; b < f;) {
              a.style[m[b]] = q[b] || "", b++;
            }
          }
        });
      }
      return this;
    };
    b.prototype.C = function() {
      this.c((a) => {
        for (; a.firstChild;) {
          a.removeChild(a.firstChild);
        }
      });
      return this;
    };
    b.prototype.K = function(a) {
      if ("string" === typeof a) {
        let b = g(a, e(this[0]));
        return g(this.filter((a) => -1 < b.$(a)));
      }
      return "function" === typeof a ? g(this.filter(a)) : this;
    };
    b.prototype.Z = function() {
      return k(this[0]) ? this.aa() : this.b("height");
    };
    b.prototype.L = function(a) {
      if (void 0 === a) {
        return this.V().K((a) => 1 === a.nodeType);
      }
      a instanceof b ? (this.C(), this.i(a)) : null !== a && this.c((b) => {
        g(b).C().i(g(a));
      });
      return this;
    };
    b.prototype.aa = function() {
      const a = this[0];
      return k(a) ? a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight || 0 : a.nodeType && 9 === a.nodeType ? a.body.scrollHeight : this.l() - parseInt(this.b("padding-top")) - parseInt(this.b("padding-bottom")) - parseInt(this.b("border-top-width")) - parseInt(this.b("border-bottom-width"));
    };
    b.prototype.ba = function() {
      const a = this[0];
      return k(a) ? a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0 : a.nodeType && 9 === a.nodeType ? a.body.scrollWidth : this.l() - parseInt(this.b("padding-left")) - parseInt(this.b("padding-right")) - parseInt(this.b("border-left-width")) - parseInt(this.b("border-right-width"));
    };
    b.prototype.ja = function() {
      var a = v.documentElement, b = v.body;
      const q = this[0].getBoundingClientRect(), d = H ? u.pageXOffset : w ? a.scrollLeft : b.scrollLeft;
      a = H ? u.pageYOffset : w ? a.scrollTop : b.scrollTop;
      b = !(v.documentMode || u.XMLHttpRequest);
      const c = this.b("border-top-width");
      this.b("border-left-width");
      const M = this.b("border-bottom-width");
      this.b("border-right-width");
      let e = q.bottom - q.top, k = q.right - q.left;
      b && (q.bottom -= c + M, q.left -= 2, q.right -= 2, q.top -= c, e = q.bottom - q.top, k = q.right - q.left);
      return {bottom:q.bottom + d, height:e, left:q.left + a, right:q.right + a, top:q.top + d, width:k};
    };
    b.prototype.h = function(a, b, q) {
      const f = this;
      let m;
      if ("function" === typeof b) {
        m = b;
        var c = q;
      } else {
        m = (a) => {
          const f = a.target;
          let m = g(f).la();
          m.g(f);
          m = m.K(b);
          if (m.length) {
            return q(a, m[0]);
          }
        };
      }
      g(a.replace(/\s+/g, "").split(",")).c((a) => {
        d(a).call(f, m, c);
      });
    };
    b.prototype.F = function(a) {
      a = a || "Height";
      const b = this[0];
      return k(b) ? b["outer" + a] || b.document.documentElement["client" + a] || b.document.body["client" + a] || 0 : b.nodeType && 9 === b.nodeType ? b.body["scroll" + a] : this.ja()[a.toLowerCase()];
    };
    b.prototype.l = function() {
      return this.F("Width");
    };
    b.prototype.la = function() {
      const a = g([]);
      this.c((b) => {
        {
          const a = [];
          for (; b;) {
            a.unshift(b), b = b.parentNode;
          }
          b = a;
        }
        a.g.apply(a, b);
      });
      return a;
    };
    b.prototype.na = function() {
      var a = this[0];
      const b = this.F(), c = this.l(), d = a.offsetTop;
      a = a.offsetLeft;
      return {bottom:d + b, height:b, left:a, right:a + c, top:d, width:c};
    };
    b.prototype.pa = function() {
      this.c((a) => {
        const b = a.parentNode;
        b && b.removeChild(a);
      });
    };
    b.prototype.M = function(a) {
      a ? (a = g(a.split(/\s+/)), this.c((b) => {
        if (b.className) {
          let f = " " + b.className + " ";
          a.c((a) => {
            f = " " + f.replace(" " + a + " ", " ") + " ";
          });
          b.className = f.trim();
        }
      })) : this.c((a) => {
        a.className && (a.className = "");
      });
    };
    b.prototype.va = function() {
      const a = this[0];
      return k(a) || a === v ? this.ba() : this.b("width");
    };
    g = (f, c) => {
      const d = new b;
      if (f) {
        if ("function" === typeof f) {
          r ? f() : a.push(f);
        } else {
          if ("string" === typeof f) {
            f = f.trim();
            if (f.match(/^</)) {
              return g(p.L(f));
            }
            t(d, f, c);
          } else {
            if (f.nodeName) {
              d.g(f);
            } else {
              if (!(c = E.isArray(f))) {
                {
                  c = f;
                  const a = Object.prototype.toString.call(c);
                  c = "object" === typeof c && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(a) && "number" === typeof c.length && (0 === c.length || "object" === typeof c[0] && 0 < c[0].nodeType);
                }
              }
              c || f instanceof b ? d.g.apply(d, f) : d.g(f);
            }
          }
        }
      }
      return d;
    };
    const t = (a, b, c) => {
      b = (b || "").trim();
      c = (c = "string" === typeof c ? c.trim() : c) || v;
      c = "string" === typeof c ? v.querySelectorAll(c) : c;
      "length" in c ? g(c).c((c) => {
        a.g.apply(a, c.querySelectorAll(b));
      }) : a.g.apply(a, c.querySelectorAll(b));
    }, c = (a) => a.toLowerCase().replace(/\-(\w)/g, (a, b) => b.toUpperCase()), e = (a) => {
      if (a) {
        if (9 === a.nodeType) {
          return a;
        }
        if (a.ownerDocument) {
          return a.ownerDocument;
        }
      }
      return v;
    }, h = (a, b) => {
      const c = a.currentStyle || a.style, d = c.top;
      a.style.top = c[b];
      b = a.style.pixelTop;
      a.style.top = d;
      return b;
    }, k = (a) => a && a.postMessage && a.focus && a.blur && a.close, z = (b) => {
      r = !0;
      for (let c = 0, d = a.length; c < d; c++) {
        a[c](b);
      }
      a = [];
    }, l = ["borderBottom", "borderLeft", "borderRight", "borderTop"], n = "borderBottomWidth borderTopWidth bottom fontSize height marginTop marginBottom maxHeight minHeight paddingTop paddingBottom top".split(" ").concat("borderLeftWidth borderRightWidth fontSize left marginLeft marginRight maxWidth minWidth paddingLeft paddingRight right width".split(" ")), w = "CSS1Compat" === v.compatMode, H = void 0 !== u.pageXOffset, A = v.readyState;
    "complete" === A || "interactive" === A ? z() : F(u, "DOMContentLoaded", z);
  })();
  let I;
  (() => {
    function b(b, a, d) {
      const r = this;
      this.u = g(`<div id="${b}" style="display:block;max-height:0;max-width:0;margin-left:-5000px;padding:0;margin:0;border:none;position:static"/>`);
      this.N = g(this.u[0].attachShadow({mode:"closed"}));
      this.o = g("<div style='display:table;position:absolute;z-index:999999999'/>").P(this.N);
      "function" === typeof a && this.N.i("<style>" + a() + "</style>");
      "function" === typeof d && this.o.i(d());
      this.G = g(u);
      this.f = null;
      this.ma = g("#so_pointer", this.o);
      this.G.qa(() => {
        r.m();
      }).S(() => {
        r.m();
      });
      b = (a) => {
        a.stopPropagation();
        a.stopImmediatePropagation();
      };
      g(this.u).T(b).X(b).ga(b).ia(b).ha(b).fa(b).ea(b);
    }
    I = (g, a, d) => new b(g, a, d);
    b.prototype = {I:function() {
      this.u.pa();
      return this;
    }, ka:function() {
      g("html").i(this.u);
      return this;
    }, m:function(b) {
      var a = null;
      try {
        a = (b || this.f).getRangeAt(0).cloneRange().getClientRects()[0];
      } catch (n) {
        return this;
      }
      if (!a) {
        return this;
      }
      const d = this.o.na();
      var g = this.G.Z(), c = this.G.va();
      g = g - d.height - 17;
      var e = c - d.width - 17;
      c = this.ma;
      var h = c.F();
      const k = c.l(), p = d.height + h;
      h = a.left + a.width / 2 - d.width / 2;
      let l = a.top - p;
      h = 0 > h ? 0 : h;
      h = h > e ? e : h;
      l = 0 > l ? 0 : l;
      l = l > g ? g : l;
      0 > a.top - p ? (l = a.bottom, c.M("bottom"), c.H("top")) : (c.M("top"), c.H("bottom"));
      a = a.left + a.width / 2 - h - k / 2;
      a = 0 > a ? 10 : a;
      a = a > d.width - 10 ? d.width - 10 : a;
      c.b({left:a});
      this.o.b({left:u.scrollX + h, top:u.scrollY + l});
      b && (this.f = b);
      return this;
    }};
  })();
  const N = {za:(b, r, a) => {
    const d = b.document, u = [d];
    var c = d.body;
    c ? u.push(c) : c = d;
    var e, h = 0, k = 0, t = {}, l = 0, n = 0, w, v = 0, A = "";
    a = a || {};
    a.D = a.D || 1000;
    const f = (a) => {
      if (v === a.timeStamp && A === a.type) {
        return !0;
      }
      v = a.timeStamp;
      A = a.type;
      return !1;
    }, m = (a, c) => {
      const d = p.f(b, !0);
      var f = "Range" === d.type ? d.getRangeAt(0).cloneRange() : null;
      f = f ? f.getClientRects()[0] : null;
      const e = d.toString();
      c = {Y:c, da:q(c.target), altKey:c.altKey, ctrlKey:c.ctrlKey, shiftKey:c.shiftKey, Ja:a, f:d, Ma:f, Na:e, wa:c.clientX, Ua:c.clientY};
      c.O = c.f.toString().trim();
      ("escape" == a || ("click" == a || c.O) && c.wa) && r(a, c);
      return c;
    }, q = (b) => {
      const c = b.tagName;
      b = b.getAttribute ? (b.getAttribute("contenteditable") || "").toLowerCase() : "";
      return "INPUT" == c ? a.enableInInputField : "TEXTAREA" == c ? a.enableInTextArea : "true" == b ? a.enableInContentEditable : !0;
    }, G = (a) => {
      const c = g(d).l(), f = a.clientX;
      a = a.clientY;
      let e = f, k = f;
      for (; e;) {
        x(e, a, f, a);
        if (p.f(b).match(/\W/)) {
          break;
        }
        e--;
      }
      for (; k < c;) {
        x(f, a, k, a);
        if (p.f(b).match(/\W/)) {
          break;
        }
        k++;
      }
      x(e + 1, a, k - 1, a);
    }, x = (a, c, f, e) => {
      const k = d.body.createTextRange;
      let m = "offsetNode", q = "offset", g = b.getSelection, h;
      let n = null;
      if (d.caretPositionFromPoint) {
        var l = "caretPositionFromPoint";
      } else {
        d.caretRangeFromPoint && (l = "caretRangeFromPoint", m = "startContainer", q = "startOffset");
      }
      l && (h = d[l](a, c)) && (l = d[l](f, e)) && (n = d.createRange(), n.setStart(h[m], h[q]), n.setEnd(l[m], l[q]));
      null !== n && g ? (f = g(), f.removeAllRanges(), f.addRange(n)) : k && (n = k(), n.moveToPoint(a, c), a = n.duplicate(), a.moveToPoint(f, e), n.setEndPoint("EndToEnd", a), n.select());
    };
    g(u).h("keyup", (a) => {
      f(a) || 27 === a.keyCode && m("escape", a);
    }, 1);
    g(u).h("click", (b) => {
      f(b) || (w && clearTimeout(w), w = setTimeout(() => {
        w = 0;
        l ? (b.sa(), l = 0) : (b[a.clickKey + "Key"] && q(b.target) && G(b), h = 0, e && clearTimeout(e), e = 0, m("click", b));
      }));
    }, 1);
    g(c).h("dblclick", (a) => {
      w && clearTimeout(w);
      w = 0;
      e && clearTimeout(e);
      e = 0;
      m("doubleClick", a);
    }, 1);
    g(c).h("select", (a) => {
      m("selection", a);
    }, 1);
    g(c).h("mousedown", (c) => {
      e && clearTimeout(e);
      e = setTimeout(() => {
        h && !k && (h = 0, a.longClickEnabled && q(c.target) && G(c), p.f(b) ? (m("longClick", c), l = n = 1) : l = 0);
      }, a.D);
      t = {x:c.screenX, y:c.screenY};
      h = c;
      l = k = 0;
    }, 1);
    g(u).h("mouseup", (a) => {
      f(a) || (p.f(b, !0), n ? n = 0 : k && (l = 1, m("selection", a)), e && clearTimeout(e), h = k = e = 0);
    }, 1);
    g(u).h("mousemove", (a) => {
      if (!f(a)) {
        var b = t, c = b.x - a.screenX;
        a = b.Aa - a.screenY;
        if (5 < c || 5 > c || 5 < a || 5 > a) {
          k = 1;
        }
      }
    }, 1);
  }};
  (() => {
    const b = new SpeechSynthesisUtterance;
    window.speechSynthesis.getVoices();
    b.voiceURI = "native";
    b.volume = 1;
    b.rate = 1;
    b.pitch = 1;
    b.lang = "en-US";
  })();
  let y;
  (() => {
    const b = new RegExp(/'''''(.*?)'''''/, "g"), g = new RegExp(/'''(.*?)'''/, "g"), a = new RegExp(/''(.*?)''/, "g"), d = new RegExp(/\s/, "g"), v = new RegExp(/(.*?[^\.\s]\.\s)/, "g"), c = "\" ' ( ) , - . / 1 2 2012 : ? a about and are as be but com for from have i in is it like may more my next not of on search that the this to was when with you your".split(" ");
    try {
      if (u.SpeechSynthesisUtterance) {
        u.speechSynthesis.getVoices();
        var e = new SpeechSynthesisUtterance;
        e.voiceURI = "native";
        e.volume = 1;
        e.rate = p.ca ? .75 : .5;
        e.pitch = 1;
        e.lang = "en-US";
      }
    } catch (k) {
      reportError(k);
    }
    const h = (e, h, l, n, w, p) => {
      n = e.response;
      e = e.status;
      w = "NOT_FOUND";
      if ("NETWORK_ERROR" === e || "REQUEST_TIMED_OUT" === e || "REQUEST_ABORTED" === e || "REQUEST_REFUSED" === e) {
        w = "NETWORK_ERROR";
      } else {
        if (h.offline || !navigator.onLine) {
          w = "INTERNET_OFFLINE";
        }
      }
      h.term = l;
      h.state = "loaded";
      h.result = n || {source:w};
      if (n && n["abstract"]) {
        l = n["abstract"];
        if (200 < l.length) {
          e = l.match(v);
          let a = "";
          e && (e.forEach((b) => {
            200 > a.length + b.length && (a += b);
          }), 60 < a.length && (l = a));
        }
        l = l.replace(b, (a, b) => `<b><i>${b}</i></b>`);
        l = l.replace(g, (a, b) => `<b>${b}</b>`);
        l = l.replace(a, (a, b) => `<i>${b}</i>`);
        n.link = n.title.replace(d, "_");
        n["abstract"] = l;
      }
      if (n && "dictionary" === n.source) {
        l = {};
        e = {};
        w = n.order;
        const a = w.length;
        for (let b = 0; b < a; b++) {
          let a = n.definitions[w[b]], c = a.length;
          for (let b = 0; b < c; b++) {
            var k = a[b].synonyms;
            let c = a[b].antonyms;
            if (k) {
              var f = k.length;
              for (var m = 0; m < f; m++) {
                let a = k[m];
                l[a] = l[a] || 0;
                l[a]++;
              }
            }
            if (c) {
              for (k = c.length, f = 0; f < k; f++) {
                m = c[f], e[m] = e[m] || 0, e[m]++;
              }
            }
          }
        }
        n.synonyms = Object.keys(l);
        n.antonyms = Object.keys(e);
      }
      n && n.title && h.trigger && !h.trigger.triggerKey && (n.tooltip = -1 !== c.indexOf(n.title.toLowerCase()));
      p(n);
    };
    y = {data:{activate_page_cover:!1, pinned:!1, poses:{a:"Adjective", n:"Noun", r:"Adverb", s:"Adjective", v:"Verb"}, progress:0, result:{}, state:"", offline:!navigator.onLine}, methods:{speak:function() {
      e && (e.text = this.result.title);
      window.speechSynthesis && speechSynthesis.speak(e);
    }, define:function(a, b, c, d) {
      const e = this;
      e.offline || !navigator.onLine ? h({status:"INTERNET_OFFLINE", response:null}, e, c, a, b, d) : (t.A("DEFINE", {term:c, trigger:a}, (k) => {
        h(k, e, c, a, b, d);
      }), e.state = "loading");
    }, isLast:function(a, b, c) {
      b++;
      return b === a.length || b === c;
    }}, created:function() {
      const a = this;
      u.addEventListener("offline", () => {
        a.offline = !0;
      });
      u.addEventListener("online", () => {
        a.offline = !1;
      });
    }};
  })();
  (() => {
    const b = new RegExp(/\n/, "g"), r = new RegExp(/\s/, "g"), a = /[@_=://*|]+/, d = new RegExp(/[a-zA-Z0-1]+/, ""), v = x.runtime.getURL("/"), c = {enableInInputField:!1, enableInTextArea:!1, enableInContentEditable:!0, D:1000};
    let e, h;
    const k = () => {
      e && e.I();
      t.ra();
    }, z = () => {
      e = I("gwgd-bubble-host", () => "* {\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n}\n\n.clear {\n\tclear: both;\n\tdisplay: table;\n\twidth: 100%;\n}\n\n::-webkit-scrollbar {\n\theight: 8px;\n\twidth: 8px;\n}\n\n::-webkit-scrollbar-track {\n\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n\n[v-cloak] {\n\tdisplay: none\n}\n\n#so_wrap {\n\tbackground: transparent;\n\tcolor: #000;\n\tfont-family: verdana;\n\tfont-size: 16px;\n\tline-height: 16px;\n\tmargin-top: 11px;\n\t\n}\n\na {\n\t\n\tcolor: rgb(36, 79, 209);\n\t\n\ttext-decoration: none;\n}\n\na:visited {\n\tcolor: #609;\n}\n\na:hover {\n\ttext-decoration: underline;\n}\n\np {\n\tmargin: 10px 0 0 0;\n\tpadding: 0;\n}\n\np:first-child {\n\tmargin-top: 0;\n}\n\ntable {\n\tfont: inherit;\n\tborder-collapse: collapse;\n\twidth: 100%;\n}\n\ntable td {\n\tpadding: 5px;\n}\n\n.right {\n\tfloat: right;\n}\n\n.align-right {\n\ttext-align: right;\n}\n\n\n\n#so_wrap {\n\tbackground-color: transparent;\n\tbox-shadow: 0px 0px 15px 3px #aaa;\n\tbox-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.188235);\n\tdisplay: table;\n\tmin-width: 320px;\n}\n\n.drag #so_wrap {\n\tbox-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.219608)\n}\n\n#so {\n\tbackground-color: #fff;\n\tline-height: 1em;\n\tposition: relative;\n}\n\n\n#so_mast_head {\n\t\n\t\n\tbackground-color: #787878;\n\tborder: 1px solid #686868;\n\tbox-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.258824), 0 2px 10px 0 rgba(0, 0, 0, 0.156863);\n\tcursor: move;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n\n#so_title_bar {\n\tfont-size: 10px;\n\tcolor: #f4f4f4;\n\theight: 34px;\n\tpadding: 6px 8px 4px 8px;\n}\n\n#so_title_bar a.disabled {\n\tbackground-color: transparent;\n\tcursor: default;\n}\n\n#so_title_bar a.disabled path {\n\tfill: #999;\n\tfill: rgba(255, 255, 255, 0.30);\n}\n\n.so_user_tag {\n\tbackground-color: rgba(0, 0, 0, .1);\n\tborder-radius: 0 0 2px 2px;\n\tcolor: #e0e0e0;\n\theight: 21px;\n\tright: 50px;\n\tpadding: 4px 8px;\n\tposition: absolute;\n\ttext-decoration: none !important;\n\ttext-shadow: 1px 1px 1px #222;\n\ttop: 0;\n}\n\n.so_user_tag:hover {\n\tbackground-color: rgba(0, 0, 0, .4);\n\tcolor: #eee;\n}\n\n#so_head {\n\t-webkit-backdrop-filter: blur(10px);\n\tbackdrop-filter: blur(10px);\n\tposition: relative;\n\tpadding: 8px 15px 8px 15px;\n}\n\n#so_page,\n#so_autocomplete .autocomplete {\n\tborder: solid #aaa;\n\tborder-width: 0 1px;\n\twidth: 100%;\n}\n\n#so_page {\n\tborder-radius: 0;\n\tborder-width: 1px 1px 0 1px;\n\tdisplay: table;\n\tmin-height: 110px;\n\tposition: relative;\n}\n\n#so_page_cover {\n\tbackground-color: #fff;\n\theight: 100%;\n\topacity: .7;\n\tposition: absolute;\n\twidth: 100%;\n}\n\n#so_q,\n.autocomplete-item {\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-size: 14px;\n\tline-height: 14px;\n\tpadding: 8px 10px 8px 42px;\n\ttext-overflow: ellipsis;\n}\n\n.autocomplete-item div {\n\tdisplay: inline-block;\n\ttext-overflow: ellipsis;\n}\n\n#so_q {\n\tbackground: #fff\n\t\t\n\t;\n\tborder: 0px solid rgba(255, 255, 255, 0.45);\n\tborder-bottom-width: 0px;\n\tborder-radius: 2px;\n\t\n\tbox-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n\tcolor: #000\n\t\t\n\t;\n\tfont-weight: normal;\n\tmin-width: 100px;\n\toutline: none;\n\ttransition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);\n\tuser-select: auto;\n\twidth: 100%;\n}\n\n#so_q:hover,\n#so_q.so_q_active {\n\tbox-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);\n}\n\n#so_nav_btn,\n#so_search_cancel {\n\tbackground: transparent;\n\tborder: none;\n\tcursor: hand;\n\tcursor: pointer;\n\tmargin-right: -7px;\n\tpadding: 3px 7px;\n\ttext-align: center;\n}\n\n#so_nav_btn {\n\tbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADVJREFUeNpi/A8EDGQCFiDeQK5mRgosZmBioACAnH2ZEs2clPiZkRKbKYqq5ZQ4m2ybAQIMAK07EUDP2UjbAAAAAElFTkSuQmCC) no-repeat center center;\n\tborder-radius: 2px;\n\tfloat: right;\n\theight: 27px;\n\topacity: .8;\n\twidth: 27px;\n}\n\n#so_search {\n\tdisplay: block;\n\tmargin-left: -5px;\n\tmargin-right: -5px;\n\t\n\tposition: relative;\n}\n\n#so_search_cancel {\n\tposition: absolute;\n\tright: 0;\n\ttop: 2px\n}\n\n.so_progress_bar {\n\tbackground-color: #f2f2f2;\n\tposition: absolute;\n\twidth: 100%;\n}\n\n.so_progress_bar_fill {\n\tbackground-color: #357ae8;\n\theight: 3px;\n\ttransition: all linear 0.2s;\n\twidth: 0px;\n}\n\n#so_tooltip {\n\tclear: both;\n\tcolor: red;\n\tpadding-bottom: 8px;\n\tpadding-top: 0;\n}\n\n\n\n#so_footer {\n\tbackground-color: transparent;\n\t\n\tborder: 1px solid #aaa;\n\tborder-top-color: #ebebeb;\n\tcolor: #666;\n\tfont-size: 10px;\n\tpadding: 8px 16px;\n\tuser-select: none;\n}\n\n#so_footer_links {\n\tfloat: right;\n}\n\n#so_footer a {\n\tcolor: #777;\n}\n\n#so_footer a:hover {\n\tcolor: #333;\n\ttext-decoration: underline;\n}\n\n#so_logo_small {\n\tbackground: url(http://localhost/images/3.svg) no-repeat;\n\tbackground-size: 100%;\n\tdisplay: inline-block;\n\theight: 18px;\n\tvertical-align: middle;\n\twidth: 16px;\n}\n\n\n\n.so_link_ext {\n\tbackground-position: center right;\n\tbackground-repeat: no-repeat;\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAV0lEQVR4Xq2QwQ2AAAwC3cmd2Kk7sRP64CEJ9qOX8OPatMc/QKppnEPhTmJh23CLiwAqIw21CybKQ28qQi37WGFYBJcwfJQpP8LlEHKyZMF0IdmF13zlAjZ/6H4wb+mUAAAAAElFTkSuQmCC);\n\tpadding-right: 15px;\n}\n\n#so_link_more {\n\tfloat: right;\n\tpadding: 2px 0 10px 0;\n\ttext-decoration: underline;\n}\n\n.so_icon_mglass {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbackground: #fff;\n\tborder-radius: 30px;\n\theight: 11px;\n\twidth: 11px;\n\tborder: 2px solid #aaa;\n}\n\n.so_icon_mglass:after {\n\tcontent: \"\";\n\theight: 2px;\n\twidth: 6px;\n\tbackground: #aaa;\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 6px;\n\t-webkit-transform: rotate(45deg);\n\t-moz-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\t-o-transform: rotate(45deg);\n}\n\n.so_icon_arrow_left,\n.so_icon_arrow_right,\n.so_icon_cross {\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\theight: 24px;\n\tmargin-right: 2px;\n\ttext-align: center;\n\twidth: 24px;\n}\n\n.so_icon_arrow_left svg,\n.so_icon_arrow_right svg,\n.so_icon_cross svg {\n\tmargin-top: 5px;\n\twidth: 18px;\n}\n\n.so_icon_cross svg {\n\tmargin-top: 6px;\n\twidth: 10px;\n}\n\n.so_icon_arrow_left path,\n.so_icon_arrow_right path,\n.so_icon_cross polygon {\n\tfill: #666;\n\t\n\ttransition: all 300ms cubic-bezier(0, 0, .2, 1);\n}\n\n.so_icon_arrow_left,\n.so_icon_arrow_right,\n#so_close.so_icon_cross,\n#so_nav_btn {\n\t\n\ttransition: all 300ms cubic-bezier(0, 0, .2, 1);\n\t\n}\n\n.so_icon_arrow_left:hover path,\n.so_icon_arrow_right:hover path,\n#so_close.so_icon_cross:hover polygon,\n.so_pinned #so_close.so_icon_cross polygon,\n#so_nav_btn:hover {\n\t\n\t\n}\n\n.so_icon_angle_down,\n.so_icon_angle_up {\n\tfont-size: 24px;\n\tcolor: #999;\n\tline-height: 17px;\n\tmargin-right: 4px;\n\ttransform: rotate(-90deg);\n}\n\n.so_icon_angle_down {\n\tmargin-right: 0;\n\ttransform: rotate(90deg);\n}\n\n.so_pinned #so_close {\n\tbackground-color: rgba(220, 110, 110, 0.33);\n\t\n}\n\n#so_close.so_icon_cross {\n\tmargin-right: 0;\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n}\n\n\n.so_q_icon {\n\tposition: absolute;\n\tleft: 5px;\n\ttop: 8px;\n\twidth: 16px;\n\theight: 16px;\n}\n\n.so_icon_spinner {\n\t-webkit-animation: load8 1.1s infinite linear;\n\tanimation: load8 1.1s infinite linear;\n\tborder: 2px solid rgba(0, 0, 0, 0.2);\n\tborder-left-color: rgba(0, 0, 0, .9);\n\t-webkit-transform: translateZ(0);\n\t-ms-transform: translateZ(0);\n\ttransform: translateZ(0);\n}\n\n.so_icon_spinner,\n.so_icon_spinner:after {\n\tborder-radius: 50%;\n\twidth: 16px;\n\theight: 16px;\n\tmargin: 0 5px;\n}\n\n.so_q_icon.so_icon_cross {\n\tleft: initial;\n\tright: 8px;\n\ttop: 9px;\n}\n\n.so_q_icon.so_icon_mglass {\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tcursor: hand;\n\theight: 11px;\n\tleft: 12px;\n\tright: initial;\n\ttop: 9px;\n\twidth: 11px;\n}\n\n#so_q_clear {\n\twidth: 32px;\n\tright: 0;\n\ttop: 0px;\n\theight: 34px;\n}\n\n#so_q_clear:after,\n#so_q_clear:before {\n\ttop: 11px;\n}\n\n@-webkit-keyframes load8 {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes load8 {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.so_list {\n\tmargin-top: 13px;\n}\n\n.so_list_heading {\n\tfloat: left;\n\tmargin: 0 7px 0 0;\n\tpadding: 0;\n}\n\n.so_list_titles {\n\tmargin: 5px 0 0 0;\n\tpadding: 0;\n}\n\n.so_list_title {\n\tmargin-top: 2px;\n}\n\n.so_link_dim {\n\tfont-size: 0.88em;\n\tcolor: #888;\n}\n\n\n.so_content {\n\tfont-family: verdana;\n\tfont-size: 0.688em;\n\tline-height: 1.64em;\n\tmax-height: 380px;\n\tmax-width: 360px;\n\tmin-width: 280px;\n\toverflow-y: auto;\n\tpadding: 16px 16px 0 16px;\n}\n\n.so_content:after,\n.so_content:before {\n\tclear: both;\n\tcontent: ' ';\n\tdisplay: table;\n}\n\n\n\n.so_heading {\n\tcolor: rgb(228, 21, 19);\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tmargin-bottom: 7px;\n\tmargin-top: -2px;\n}\n\n.so_attrbs_row {\n\tmargin-top: 7px;\n}\n\n.so_attrbs_row:first-child {\n\tmargin-top: 0;\n}\n\n.so_attrbs_label {\n\tfont-weight: bold;\n}\n\n#so_page_title {\n\tcolor: rgb(228, 21, 19);\n\tfont-size: 19px;\n\tfont-weight: normal;\n\tline-height: 26px;\n\tmargin-bottom: 8px;\n}\n\n#so_self #so_page_title {\n\tcolor: #000;\n}\n\n\n\n#so_not_found #so_page_title {\n\tcolor: #000;\n}\n\n#so_not_found #so_page_message {\n\tfont-size: 13px;\n\tpadding-top: 20px;\n}\n\n#so_not_found li {\n\tfont-size: 12px;\n\tfont-weight: bold;\n\tmargin-bottom: 5px;\n}\n\n#so_not_found li b {\n\tfont-weight: normal;\n}\n\n\n\n#so_home {\n\tmax-width: 360px;\n}\n\n#so_home_head {\n\tdisplay: table;\n}\n\n#so_usr {\n\tcolor: #888;\n\tfloat: right;\n\tpadding: 6px 0;\n\toverflow: hidden;\n\tmax-width: 100%;\n\ttext-overflow: ellipsis;\n}\n\n\n\n#so_wiki_caption,\n#so_dict_pronun_text {\n\tcolor: #777;\n\tmargin-bottom: 7px;\n\tmargin-top: -2px;\n}\n\n#so_wiki_img_link {\n\tborder: none;\n\tfloat: right;\n\tline-height: 0;\n\tmargin: 0 0px 16px 10px;\n\tmax-width: 115px;\n\ttransition: max-width 300ms cubic-bezier(0, 0, .2, 1), max-height 300ms cubic-bezier(0, 0, .2, 1);\n}\n\n\n\n#so_wiki_img {\n\tborder: none;\n\twidth: 100%;\n}\n\n#so_wiki_abstr {\n\tfont-size: 1.0902em;\n\tmargin-bottom: 13px;\n}\n\n#so_wiki_abstr_text {\n\t\n}\n\n#so_wiki_attrbs {\n\tmargin-top: 4px;\n\tmargin-bottom: 15px;\n}\n\n\n\n#so_dictionary #so_page_title {\n\tcolor: rgb(228, 21, 19);\n\tdisplay: inline-block;\n}\n\n#so_dict_pronun {\n\tdisplay: inline-block;\n\tfont-size: 1.15em;\n\theight: 32px;\n\tvertical-align: middle;\n}\n\n#so_dict_pronun_text {\n\tdisplay: inline-block;\n\theight: 32px;\n\tmargin-top: -4px;\n\tvertical-align: middle;\n}\n\n#so_dict_audio {\n\tbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABqSURBVHjazFPRCgAhCMvoW/Wb/FoPHwSRNCS4u4EUro2YCCIybjDHJUoDIpJTb3bECmYGz82O2PreZFUCL1SRCfVshRi//d4U/mMQg/NYFlI1RuO3RroLu0JE0co4u6cG8WHWg8+38RFgADtAko3CwXmBAAAAAElFTkSuQmCC) no-repeat center right;\n\tcursor: hand;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\theight: 32px;\n\tmargin-right: 10px;\n\tmargin-top: -3px;\n\twidth: 26px;\n}\n\n.so_dict_definitions {\n\tclear: both;\n\tmargin-top: 2px;\n}\n\n.so_dict_pos_definition td {\n\tpadding: 0 0 5px 0;\n\ttext-align: left;\n\tvertical-align: top;\n}\n\n.so_dict_pos_definition>td {\n\tpadding: 5px 0 0 0;\n\tborder-bottom: 1px solid #eee;\n}\n\n.so_dict_pos_definition.last td {\n\tborder-bottom: none;\n\tpadding-bottom: 5px;\n}\n\n.so_dict_definition_pos {\n\tcolor: #777;\n\twidth: 75px;\n}\n\n.so_dict_sense {\n\tmargin-bottom: 5px;\n}\n\n.so_dict_sense_text {\n\tcolor: black;\n\tfont-weight: bold;\n\tpadding-bottom: 5px;\n}\n\ntd.so_dict_sense_num {\n\tpadding-top: 2px;\n\twidth: 24px;\n}\n\n.so_dict_synonyms {\n\tfont-weight: normal;\n\tpadding-bottom: 5px;\n}\n\n.so_usage_note {\n\tborder: 1px solid #ddd;\n\tborder-radius: 5px;\n\tmargin-bottom: 20px;\n}\n\n.so_usage_note_header {\n\tbackground-color: #eee;\n\tborder-radius: 5px 5px 0 0;\n\tcolor: #777;\n\tcursor: pointer;\n\tcursor: hand;\n\tpadding: 2px 5px;\n}\n\n.so_usage_note_visible .so_usage_note_header {\n\tborder-bottom: 1px solid #ddd;\n}\n\n.so_usage_note_header_angle {\n\tfloat: right;\n}\n\n.so_usage_note_content {\n\tdisplay: none;\n\tpadding: 5px 10px;\n}\n\n.so_usage_note_content em {\n\tfont-style: normal;\n\tfont-weight: bold;\n}\n\n.so_usage_note_visible .so_usage_note_content {\n\tdisplay: block;\n}\n\n\n\n#so_autocomplete {\n\tmargin-top: -7px;\n\tpadding: 0 10px;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 99;\n}\n\n.autocomplete {\n\tbackground-color: transparent;\n\tbox-shadow: 0 3px 8px 0 #989898;\n\tfont-weight: bold;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.autocomplete-item {\n\tcursor: hand;\n\tcursor: pointer;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.autocomplete-item b {\n\tfont-weight: normal;\n}\n\n.autocomplete-item-focus {\n\tbackground-color: #eee;\n}\n\n\n\n#so_pointer {\n\tposition: absolute;\n\tleft: 10%;\n}\n\n#so_pointer,\n#so_pointer_base {\n\tfont-size: 0px;\n\tline-height: 0px;\n\twidth: 0px;\n\theight: 0px;\n\tz-index: 999999999;\n\tborder-width: 10px;\n\tborder-style: solid;\n\tborder-image: initial;\n\tborder-color: #999 transparent;\n}\n\n#so_pointer_base {\n\tposition: relative;\n\tleft: -10px;\n\tz-index: 99999999;\n\tborder-width: 10px;\n\tborder-color: #fff transparent;\n}\n\n#so_pointer.top,\n#so_pointer.top #so_pointer_base {\n\tborder-top-width: 0;\n}\n\n#so_pointer.top {\n\ttop: 1px;\n}\n\n#so_pointer.top #so_pointer_base {\n\tborder-color: #fff transparent;\n\ttop: 1px;\n}\n\n#so_pointer.bottom,\n#so_pointer.bottom #so_pointer_base {\n\tborder-bottom-width: 0;\n}\n\n#so_pointer.bottom #so_pointer_base {\n\ttop: -11px;\n}\n\n\n.menu-dropdown {\n\tmargin-top: -5px;\n}\n\n\n.gsc-search-box,\n.gsc-search-box-tools,\n.gsc-above-wrapper-area,\n.gsc-resultsHeader {\n\tdisplay: none !important;\n}\n\n.gsc-control-cse,\n.gsc-control-cse-en {\n\tborder-width: 0 !important;\n\tpadding: 0 !important;\n}\n\n.gsc-table-result,\n.gsc-thumbnail-inside,\n.gsc-url-top {\n\tpadding-left: 0 !important;\n\tpadding-right: 0 !important;\n}\n\n.gsc-adBlock,\n.gsc-resultsbox-visible {\n\tmargin-top: -10px;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-page {\n\tbackground-color: #eee;\n\tborder-radius: 50%;\n\tcolor: #000 !important;\n\tdisplay: inline-block !important;\n\theight: 25px;\n\tline-height: 25px;\n\ttext-align: center;\n\ttext-decoration: none;\n\twidth: 25px;\n}\n\n.gsc-results .gsc-cursor-box .gsc-cursor-current-page {\n\tcolor: #DD4B39 !important;\n}", 
      () => '<div id="so_iframe_body">\n\t<div id="so_wrap">\n\t\t<div id="so" v-bind:class="{so_pinned: pinned}" v-bind:style="{fontSize: + (parseInt(options.fontSize) + 5) + \'px\'}" v-cloak>\n\t\t\t<div id="so_page">\n\t\t\t\t<div v-show="progress > 0 && progress < 100" class="so_progress_bar">\n\t\t\t\t\t<div :style="\'width:\' + progress + \'%\'" class="so_progress_bar_fill"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="so_page_cover" v-if="activate_page_cover && state === \'loading\'"></div>\n\n\t\t\t\t<a id="so_close" href="javascript:void(0);" class="so_icon_cross" title="Close" v-on:click="close">\n\t\t\t\t\t<svg viewBox="-0.268 -0.38 35 35" style="width:10px;height:10px"><polygon points="17.18,20.327 3.132,34.385 0,31.251 14.048,17.192 0,3.134 3.132,0 17.18,14.058 31.228,0 34.359,3.134 20.312,17.192 34.359,31.251 31.228,34.385"/></svg>\n\t\t\t\t</a>\n\n\t\t\t\t<div class="so_content" id="so_not_found" v-if="result.source === \'NOT_FOUND\'">\n\t\t\t\t\t<div id="so_page_title">No results were found.</div>\n\t\t\t\t\t<div id="so_page_message">\n\t\t\t\t\t\t<a target="_blank" class="so_link_ext" :href="\'https://ww.goodwordguide.com/static/google.html#gsc.tab=0&gsc.q=\' + term + \'&gsc.sort=&gsc.page=1\'">Search the web for "<span v-text="term"></span>"</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="so_content" id="so_not_found" v-if="result.source === \'NETWORK_ERROR\'">\n\t\t\t\t\t<div id="so_page_title">Network error</div>\n\t\t\t\t\t<div id="so_page_message">\n\t\t\t\t\t\t<p>A network error was encountered, try after some time.</p><br>\n\t\t\t\t\t\t<a target="_blank" class="so_link_ext" :href="\'https://ww.goodwordguide.com/static/google.html#gsc.tab=0&gsc.q=\' + term + \'&gsc.sort=&gsc.page=1\'">Search the web for "<span v-text="term"></span>"</a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="so_content" id="so_not_found" v-if="result.source === \'INTERNET_OFFLINE\'">\n\t\t\t\t\t<div id="so_page_title">No internet</div>\n\t\t\t\t\t<div id="so_page_message">\n\t\t\t\t\t\t<p>Connect to internet and try again.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="so_content" id="so_wiki" v-if="result.source == \'wikipedia\'">\n\t\t\t\t\t<div id="so_page_title" v-html="result.title"></div>\n\t\t\t\t\t<div id="so_wiki_caption" v-if="result.caption" v-html="result.caption"></div>\n\t\t\t\t\t<div id="so_wiki_abstr">\n\t\t\t\t\t\t<span id="so_wiki_abstr_text" v-html="result.abstract"></span>\n\t\t\t\t\t\t<a v-if="result.abstract" target="_blank" class="so_link_ext" :href="\'https://en.wikipedia.org/wiki/\' + result.link">Wikipedia</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a target="_blank" id="so_link_more" :href="\'https://www.goodwordguide.com/define/\' + result.title">More \u00bb</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="so_content" id="so_dictionary" v-if="result.source == \'dictionary\'">\n\t\t\t\t\t<div id="so_page_title" v-text="result.title"></div>\n\t\t\t\t\t<div id="so_dict_pronun">\n\t\t\t\t\t\t<a id="so_dict_audio" :data-term="result.title" v-on:click="speak"></a>\n\t\t\t\t\t\t<span id="so_dict_pronun_text" v-if="result.pronunciations" v-text="result.pronunciations.pronun1"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table class="so_dict_definitions">\n\t\t\t\t\t\t<tr v-bind:class="{last: isLast(result.order, $index, result.order.length) && ! result.synonyms.length && ! result.antonyms.length}" class="so_dict_pos_definition" v-for="(pos, $index) in result.order">\n\t\t\t\t\t\t\t<td class="so_dict_definition_pos" v-text="poses[pos]"></td>\n\t\t\t\t\t\t\t<td class="so_dict_definition">\n\t\t\t\t\t\t\t\t<table class="so_dict_senses">\n\t\t\t\t\t\t\t\t\t<tr class="so_dict_sense" v-for="sense in result.definitions[pos].slice(0, 1)">\n\t\t\t\t\t\t\t\t\t\t<td class="so_dict_sense_content">\n\t\t\t\t\t\t\t\t\t\t\t<div class="so_dict_sense_text" v-text="sense.definition"></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="so_dict_definitions">\n\t\t\t\t\t\t<tr class="so_dict_pos_definition" v-if="result.synonyms.length" v-bind:class="{last: ! result.antonyms.length}">\n\t\t\t\t\t\t\t<td class="so_dict_definition_pos">Synonyms</td>\n\t\t\t\t\t\t\t<td class="so_dict_definition">\n\t\t\t\t\t\t\t\t<span v-for="(syn, $index) in result.synonyms.slice(0, 5)"><a target="_blank" :href="\'https://www.goodwordguide.com/define/\' + syn" v-text="syn"></a><span v-if=" ! isLast(result.synonyms, $index, 5)"> - </span></span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class="so_dict_pos_definition last" v-if="result.antonyms.length">\n\t\t\t\t\t\t\t<td class="so_dict_definition_pos">Antonyms</td>\n\t\t\t\t\t\t\t<td class="so_dict_definition">\n\t\t\t\t\t\t\t\t<span v-for="(ant, $index) in result.antonyms.slice(0, 5)"><a target="_blank" :href="\'https://www.goodwordguide.com/define/\' + ant" v-text="ant"></a><span v-if=" ! isLast(result.antonyms, $index, 5)"> - </span></span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<a target="_blank" id="so_link_more" :href="\'https://www.goodwordguide.com/define/\' + result.title" v-on:click="close">More \u00bb</a>\n\t\t\t\t</div>\n\t\t\t\t<div style="color:red" class="so_content" id="so_tooltip" v-if="result.tooltip">Tip: Didn\'t want this definition pop-up? Try setting a trigger key in <a target="_blank" :href="helpUrl">Extension Options</a>.</div>\n\t\t\t</div>\n\t\t\t<div id="so_footer">\n\t\t\t\t<div id="so_footer_links">\n\t\t\t\t\t<a target="_blank" title="go to Extension Options" :href="helpUrl">Extension Options</a>\x3c!-- |\n\t\t\t\t\t<a href="javascript:void(0)" ng-click="feedback()">Send feedback</a>--\x3e\n\t\t\t\t</div>\n\t\t\t\t<div id="so_copyright">\n\t\t\t\t\tPowered by <a target="_blank" title="go to goodwordguide.com" href="https://www.goodwordguide.com">goodwordguide.com</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="so_pointer" class="bottom">\n\t\t\t<div id="so_pointer_base"></div>\n\t\t</div>\n\t</div>\n</div>');
      const a = e.o;
      y.data.helpUrl = `${v}pages/options.ht\ml`;
      y.data.options = c;
      y.data.trigger = {};
      y.methods.close = function() {
        k();
      };
      y.el = g("#so", a)[0];
      h = new u.Vue(y);
      g(a).h("click", (a) => {
        "_blank" === g(a.target).R() && k();
      });
    };
    t.j("CLOSE_POPUP", () => {
      e && e.I();
    });
    g(() => {
      N.za(u, (g, l) => {
        var n = c[g + "Enabled"];
        const t = c[g + "Key"];
        var f = l[t];
        if ("gwgd-bubble-host" !== l.Y.target.id) {
          if (l.da && n && (t ? f : 1)) {
            const c = (l.O || "").trim();
            var m = (l.f.toString() || "").trim();
            n = c.match(r);
            f = m.match(b);
            m = m.match(a);
            t || l.shiftKey || "longClick" == g || !n && !f ? 1 !== c.length || c.match(d) ? n && 5 < n.length || f || m ? k() : (e || z(), h.trigger = {triggerKey:t}, e.m(l.f), k(), h.define(g, l, c, () => {
              setTimeout(() => {
                let a = (p.f(u) || "").trim();
                a != c || !t && !l.shiftKey && "longClick" != g && (a.match(r) || a.match(b)) ? k() : e.ka() && e.m();
              }, 100);
            }), h.activate_page_cover = !1, setTimeout(() => {
              h.activate_page_cover = !0;
            }, 200)) : k() : k();
          } else {
            k();
          }
        }
      }, c);
    });
    const l = (a) => {
      for (let b in a) {
        c[b] = a[b];
      }
      setTimeout(() => {
        e && e.m();
      }, 300);
    };
    t.j("SELECTION_GET", (a, b) => {
      b(p.f());
    });
    t.A("SETTINGS_GET_ALL", l);
    t.j("SETTINGS_UPDATED", l);
    t.j("POPUP_CLOSE", k);
  })();
})();

