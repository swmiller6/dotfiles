/* © 2020 goodwordguide.com. All Rights Reserved. */
'use strict';
(() => {
  void 0;
  const k = window, n = document, q = JSON.stringify, r = JSON.parse, g = k.chrome || this.browser, d = {};
  (() => {
    const f = {}, b = g.extension && "function" === typeof g.extension.getBackgroundPage ? g.extension.getBackgroundPage() : null, l = Object.is(b, k), m = (a, c) => ({command:a, args:c || null}), p = (a, c, e) => {
      if ("backgroundPage" === a.target && !l) {
        return !1;
      }
      const h = f[a.command] || [], b = h.length;
      if (b) {
        for (let d = 0; d < b; d++) {
          h[d](a.args, (a) => {
            e(a);
            d = b;
          }, c);
        }
      }
      return !0;
    };
    l && (k.__MessageReceiver = p);
    d.c = (a) => {
      var c;
      if (c = "__ECHO_SERVICE__", "function" === typeof a) {
        var e = f[c] || [];
        e.push(a);
        f[c] = e;
      }
    };
    d.f = (a, c) => {
      c = c.split(":");
      a = f[a];
      const e = c[1] ? parseInt(c[1]) : 0;
      return a && c[1] && e && a[e] ? (a.splice(e - 1, 1), !0) : !1;
    };
    d.g = (a, c, e) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof c && (e = c, c = null);
      try {
        g.runtime.sendMessage(m(a, c), e);
      } catch (h) {
        return !1;
      }
      return !0;
    };
    d.b = (a, c, e, b) => {
      c = (c || "").trim();
      if (a && c) {
        "function" === typeof e && (b = e, e = null);
        try {
          g.tabs.sendMessage(a, m(c, e), b);
        } catch (t) {
        }
      }
    };
    d.i = (a, c, e) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof c && (e = c, c = null);
      try {
        return g.tabs.getCurrent((b) => {
          d.b(b.id, m(a, c), e);
        }), !0;
      } catch (h) {
        return h.stack.match("Cannot read property 'getCurrent' of undefined") ? d.a("__ECHO_SERVICE__", {command:a, args:c, callback:e ? !0 : !1}, e) : !1;
      }
    };
    d.h = (a, c, b) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof c && (b = c, c = null);
      try {
        return g.tabs.query({}, (e) => {
          for (let f = 0, h = e.length; f < h; f++) {
            d.b(e[f].id, a, c, b);
          }
        }), !0;
      } catch (h) {
        return !1;
      }
    };
    d.j = (a, c, b) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof c && (b = c, c = null);
      try {
        g.tabs.query({active:!0, currentWindow:!0}, (e) => {
          d.b(e[0].id, a, c, b);
        });
      } catch (h) {
        return !1;
      }
      return !0;
    };
    d.a = (a, c, e) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof c && (e = c, c = null);
      try {
        if (b) {
          b.__MessageReceiver(m(a, r(q(c))), {}, (a) => {
            a = r(q(a));
            e(a);
          });
        } else {
          const b = m(a, c);
          b.target = "backgroundPage";
          g.runtime.sendMessage(b, e);
        }
      } catch (h) {
        return !1;
      }
      return !0;
    };
    g.runtime.onMessage.addListener(p);
    l && d.c((a, c, b) => {
      d.b(b.tab.id, a.command, a.args, a.callback ? (a) => {
        c(a);
      } : null);
    });
  })();
  (() => {
    const f = k.onerror;
    k.onerror = (b, l, g, p, a) => {
      a && n.body && (b = {msg:b, stack:a.stack, url:l, lineNo:g, columNo:p, location:k.location}, "function" === typeof reportError ? reportError(b) : d.a("ERROR", b));
      "function" === typeof f && f(a);
    };
  })();
  new k.Vue({el:n.getElementById("gwg-body"), data:{form:{}, saved:!1, resetDisabled:!0, currentYear:(new Date).getFullYear(), dialog:{buttonLabel:"Ok", message:"The pop-up bubble will not work in tabs that were open prior to installation; such tabs must be refreshed. Also, note that all extensions are disabled on app Store pages.", open:!0, title:"Important"}, version:g.runtime.getManifest().version, wordHistoryCount:0}, methods:{clearHistory:function(f) {
    const b = this;
    f.preventDefault();
    d.a("WORD_HISTORY_CLEAR", () => {
      b.wordHistoryCount = 0;
    });
    return !1;
  }, downloadHistory:function(f) {
    f.preventDefault();
    d.a("WORD_HISTORY_GET_ALL", (b) => {
      let d = '"Word","Count","URL","Last lookup date/time"\n';
      const f = n.getElementById("download-history-link");
      b.forEach((b) => {
        d += '"' + b.word + '","';
        d += b.count + '","';
        d += "https://www.goodwordguide.com/define/" + b.word.replace(/\s+/g, "+") + '","';
        d += (new Date(b.date)).toLocaleString() + '"\n';
      });
      f.href = k.URL.createObjectURL(new Blob([d], {type:"text/plain"}));
      b = n.createEvent("MouseEvents");
      b.initEvent("click", !0, !0);
      f.dispatchEvent(b);
    });
    return !1;
  }, refreshHistoryCount:function() {
    const f = this;
    d.a("WORD_HISTORY_COUNT", (b) => {
      f.wordHistoryCount = b;
    });
  }, reset:function(f) {
    const b = this;
    f && f.preventDefault();
    d.a("SETTINGS_GET_ALL", (d) => {
      for (let f in d) {
        b.form = d;
      }
      setTimeout(() => {
        b.resetDisabled = !0;
      }, 200);
    });
    return !1;
  }, submit:function(f) {
    const b = this;
    this.resetDisabled = !0;
    f.preventDefault();
    d.a("SETTINGS_SET_ALL", this.form, () => {
      b.saved = !0;
      setTimeout(() => {
        b.saved = !1;
      }, 2225);
    });
    return !1;
  }}, created:function() {
    const f = this;
    this.refreshHistoryCount();
    this.reset();
    this.saved = !1;
    d.a("FIRST_RUN", (b) => {
      f.firstRun = b;
    });
  }, watch:{form:{deep:!0, handler:function() {
    this.resetDisabled = !1;
  }}}});
})();

