/* © 2020 goodwordguide.com. All Rights Reserved. */
'use strict';
(() => {
  void 0;
  const p = window, I = document, B = JSON.stringify, C = JSON.parse, m = p.chrome || this.browser, x = p.localStorage, E = JSON.stringify, F = JSON.parse, G = p.Array, J = p.String, A = G.isArray, k = {};
  (() => {
    const f = ["0", "0", "0", "0", "0"], g = f.length;
    k.l = (a) => A(a) ? a.length : Object.keys(a).length;
    k.W = (a) => F(E(a));
    k.B = (a, c) => {
      if (A(a)) {
        var b = a.length;
        for (let e = 0; e < b && !1 !== c(a[e], e, a); e++) {
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
    k.Y = (a) => {
      A(a) ? a.length = 0 : k.B(a, (c, b) => {
        delete a[b];
      });
    };
    k.Z = (a) => {
      var c = document.implementation.createHTMLDocument(""), b = c.createDocumentFragment(), e = a.match(/^(<tbody|<thead|<tfoot)/i) ? "table" : "body";
      e = a.match(/^<tr/i) ? "tbody" : e;
      e = a.match(/^<td/i) ? "tr" : e;
      if (a.match(/^<link/i) && c.createStyleSheet) {
        b = a.match("href=[\"'](.*)?[\"']")[1];
        e = a.match("rel=[\"'](.*)?[\"']");
        a = a.match("media=[\"'](.*)?[\"']");
        try {
          var d = c.createStyleSheet(b);
        } catch (h) {
          d = c.createElement("link"), d.href = b;
        }
        e && (d.rel = e[1]);
        a && (d.media = a[1]);
        return [d];
      }
      if (a.match(/^<script/i)) {
        return a = a.match("src=[\"'](.*)?[\"']"), c = c.createElement("script"), c.async = !0, a && (c.src = a[1]), [c];
      }
      c = c.createElement(e);
      c.innerHTML = a;
      for (d = []; a = c.firstChild;) {
        d.push(a), b.appendChild(a);
      }
      return d;
    };
    k.g = (a) => !!navigator.userAgent.match(new RegExp(a + "/", "i"));
    k.ca = (a) => !k.l(a);
    k.da = (a, c) => {
      if (a == c) {
        return !0;
      }
      if (!a || !c) {
        return !1;
      }
      const b = Object.getOwnPropertyNames(a);
      if (b.length != Object.getOwnPropertyNames(c).length) {
        return !1;
      }
      const e = b.length;
      for (let d = 0; d < e; d++) {
        const h = b[d];
        if (a[h] !== c[h]) {
          return !1;
        }
      }
      return !0;
    };
    k.fa = (a) => "function" == typeof a;
    k.ga = (a) => "string" == typeof a;
    k.ha = function(a) {
      for (let c, b = 1, e = arguments.length; b < e;) {
        c = arguments[b], k.B(c, (d, h) => {
          a[h] = d;
        }), b++;
      }
      return a;
    };
    k.ia = (a) => {
      const c = document.createElement("a");
      c.href = a;
      return c;
    };
    k.ka = () => (Math.random() + 1).toString(36).substring(2);
    k.la = (a, c) => {
      a = a || p;
      a = a.getSelection();
      return !0 === c ? a : a.toString();
    };
    k.qa = () => {
      let a = g, c;
      for (; a;) {
        a--;
        c = f[a].charCodeAt(0);
        if (57 == c) {
          return f[a] = "A", f.join("");
        }
        if (90 == c) {
          f[a] = "0";
        } else {
          return f[a] = J.fromCharCode(c + 1), f.join("");
        }
      }
      f.unshift("0");
      return f.join("");
    };
    k.U = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
      const c = 16 * Math.random() | 0;
      return ("x" == a ? c : c & 3 | 8).toString(16);
    });
    k.ra = (a) => {
      const c = [];
      for (let b in a) {
        c.push(a[b]);
      }
      return c;
    };
    k.O = k.g("Firefox");
    k.aa = k.g("Chrome") && !k.g("Edg");
    k.ba = k.g("Edg");
  })();
  let y;
  (() => {
    function f(a) {
      let d = "";
      for (let h in a) {
        let e = a[h] ? a[h] : 0 === a[h] ? "0" : "";
        e instanceof G ? e = e.join(",") : "object" == typeof e && (e = f(e));
        d += encodeURIComponent(h) + "=" + encodeURIComponent(e) + "&";
      }
      return d.slice(0, -1);
    }
    var g = navigator.onLine;
    const a = p.XMLHttpRequest, c = (a) => {
      if (A(a)) {
        let e = [];
        a.forEach((a) => {
          e.push(f(a));
        });
        return e.join("\n");
      }
      return f(a);
    }, b = {text:(a) => a, json:(a) => {
      try {
        return F(a);
      } catch (n) {
        console.log(n);
      }
    }, xml:(a, e) => e.responseXML}, e = (a, e) => {
      const d = a.responseText;
      if (d) {
        return e = e || "text", e = b[e] ? e : "text", b[e](d, a);
      }
    }, d = (a, d, c) => {
      const h = c.X || p, b = a.status ? a.status : d.s || d.u ? 0 : 200;
      let n = a.statusText ? a.statusText.toUpperCase().replace(/\s+/g, "_") : "OK";
      const f = {headers:{}, status:n, statusCode:b, url:a.responseURL};
      let z = null;
      a.getAllResponseHeaders && a.getAllResponseHeaders().split(/\r\n/).forEach((a) => {
        a && (a = a.split(/:\s*/), f.headers[a[0].toLowerCase()] = a[1]);
      });
      for (const e in a) {
        const d = typeof a[e];
        "function" !== d && "object" !== d && (f[e] = a[e]);
      }
      if (c.i || c.c || c.w) {
        z = e(a, c.T);
      }
      200 <= b && 300 > b ? c.i && c.i.apply(h, [z, n, f]) : (0 !== b || g ? d.s ? n = "NETWORK_ERROR" : d.aborted || !n ? n = "REQUEST_ABORTED" : d.u ? n = "REQUEST_TIMED_OUT" : 0 === b && (n = "REQUEST_REFUSED") : n = "NETWORK_OFFLINE", c.c && c.c.apply(h, [n, z, f]));
      c.w && c.w.apply(h, [z, n, f]);
    };
    y = (e) => {
      e = e || {};
      var b = e.A;
      const h = (e.P || (b ? "post" : "get")).toLowerCase(), g = {};
      var l = null, m = e.j || "";
      const p = {aborted:!1, s:!1, u:!1}, q = new a;
      q.timeout = e.S || 90000;
      b && ("get" == h ? (b = f(b), m += -1 < m.indexOf("?") ? "&" + b : "?" + b) : "json" === e.I ? (l = E(b), g["Content-type"] = "application/json") : (g["Content-type"] = "application/x-www-form-urlencoded", "post" !== h && "put" !== h || "string" === typeof b || (l = c(b))));
      q.open(h, m, !0, e.pa, e.ja);
      if ("object" === typeof e.M) {
        for (let a in e.M) {
          q.setRequestHeader(a, g[a]);
        }
      }
      for (let a in g) {
        q.setRequestHeader(a, g[a]);
      }
      q.onerror = () => {
        p.s = k.O ? !1 : !0;
      };
      q.onabort = () => {
        p.aborted = !0;
      };
      q.ontimeout = () => {
        p.u = !0;
      };
      q.onreadystatechange = () => {
        4 == q.readyState && setTimeout(() => {
          d(q, p, e);
        });
      };
      q.send(l);
      return q;
    };
    p.addEventListener("load", () => {
      p.addEventListener("online", () => {
        g = !0;
      }, !1);
      p.addEventListener("offline", () => {
        g = !1;
      }, !1);
    });
  })();
  const H = m.runtime.getManifest().version;
  var v;
  (() => {
    v = (f, g) => {
      g = g || "";
      const a = "string" === typeof f ? `${f}: ${g}\n\tat ${"https://source.cloud.google.com/goodwordguide/gwg-extension"}:1:1` : f.stack.toString();
      y({j:"https://clouderrorreporting.googleapis.com/v1beta1/projects/goodwordguide/events:report?key=AIzaSyC0dAxTpN255P2xsxLTZi_qLYkmAotbnB4", A:{serviceContext:{service:"Instant Dictionary", version:H}, context:{httpRequest:{userAgent:navigator.userAgent, url:g || (f && f.location ? f.location.href : f.url)}, sourceReferences:[{repository:"https://source.cloud.google.com/goodwordguide/gwg-extension", revisionId:""}]}, message:a}, P:"post", I:"json"});
      "function" === typeof t && t.D(a);
    };
  })();
  (() => {
    const f = p.onerror;
    p.onerror = (g, a, c, b, e) => {
      e && I.body && (g = {msg:g, stack:e.stack, url:a, lineNo:c, columNo:b, location:p.location}, "function" === typeof v ? v(g) : l.C("ERROR", g));
      "function" === typeof f && f(e);
    };
  })();
  const t = {};
  (() => {
    let f = x.getItem("ga.cid");
    f || (f = k.U(), x.setItem("ga.cid", f));
    const g = f, a = (a, b, e) => {
      b.v = 1;
      b.t = a;
      b.tid = "UA-158073503-1";
      b.cid = g;
      b.an = "Instant Dictionary";
      b.av = H;
      b.sr = window.screen.width + "x" + window.screen.height;
      b.ul = navigator.language || navigator.ta;
      b.sd = window.screen.colorDepth + "-bits";
      e && (b.plt = Math.round(e.duration), b.dns = Math.round(e.domainLookupEnd - e.domainLookupStart), b.pdt = Math.round(e.responseEnd - (e.responseStart || e.startTime)), b.rrt = 0, b.tcp = Math.round(e.connectEnd - e.connectStart), b.srt = 0, b.dit = 0, b.clt = 0);
      return y({j:"https://www.google-analytics.com/collect", A:b});
    };
    t.V = (c, b, e, d, h, f) => {
      c = null === c ? document.title : c;
      b = null === b ? window.location.href : b;
      d = null === d ? window.location.pathname : d;
      a("pageview", {dr:h, dl:b, dh:e, dp:d, dt:c}, f);
    };
    t.D = (c) => {
      a("exception", {exd:c.stack, exf:1});
    };
    t.event = (c, b, e, d, h) => {
      c = {ec:c, ea:b};
      null !== e && (c.el = e);
      null !== d && (c.ev = d);
      return a("event", c, h);
    };
    t.timing = (c, b) => a("timing", {utc:c}, b);
  })();
  const l = {};
  (() => {
    const f = {}, g = m.extension && "function" === typeof m.extension.getBackgroundPage ? m.extension.getBackgroundPage() : null, a = Object.is(g, p), c = (a, d) => ({command:a, args:d || null}), b = (e, d, c) => {
      if ("backgroundPage" === e.target && !a) {
        return !1;
      }
      const b = f[e.command] || [], h = b.length;
      if (h) {
        for (let a = 0; a < h; a++) {
          b[a](e.args, (e) => {
            c(e);
            a = h;
          }, d);
        }
      }
      return !0;
    };
    a && (p.__MessageReceiver = b);
    l.a = (a, d) => {
      if ((a = (a || "").trim()) && "function" === typeof d) {
        var e = f[a] || [];
        e.push(d);
        f[a] = e;
      }
    };
    l.$ = (a, d) => {
      d = d.split(":");
      a = f[a];
      const e = d[1] ? parseInt(d[1]) : 0;
      return a && d[1] && e && a[e] ? (a.splice(e - 1, 1), !0) : !1;
    };
    l.ma = (a, d, b) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof d && (b = d, d = null);
      try {
        m.runtime.sendMessage(c(a, d), b);
      } catch (n) {
        return !1;
      }
      return !0;
    };
    l.h = (a, d, b, f) => {
      d = (d || "").trim();
      if (a && d) {
        "function" === typeof b && (f = b, b = null);
        try {
          m.tabs.sendMessage(a, c(d, b), f);
        } catch (z) {
        }
      }
    };
    l.na = (a, d, b) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof d && (b = d, d = null);
      try {
        return m.tabs.getCurrent((e) => {
          l.h(e.id, c(a, d), b);
        }), !0;
      } catch (n) {
        return n.stack.match("Cannot read property 'getCurrent' of undefined") ? l.C("__ECHO_SERVICE__", {command:a, args:d, callback:b ? !0 : !1}, b) : !1;
      }
    };
    l.R = (a) => {
      var d = "SETTINGS_UPDATED";
      if (d = (d || "").trim()) {
        if ("function" === typeof a) {
          var e = a;
          a = null;
        }
        try {
          m.tabs.query({}, (b) => {
            for (let c = 0, f = b.length; c < f; c++) {
              l.h(b[c].id, d, a, e);
            }
          });
        } catch (n) {
        }
      }
    };
    l.oa = (a, d, b) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof d && (b = d, d = null);
      try {
        m.tabs.query({active:!0, currentWindow:!0}, (e) => {
          l.h(e[0].id, a, d, b);
        });
      } catch (n) {
        return !1;
      }
      return !0;
    };
    l.C = (a, b, f) => {
      a = (a || "").trim();
      if (!a) {
        return !1;
      }
      "function" === typeof b && (f = b, b = null);
      try {
        if (g) {
          g.__MessageReceiver(c(a, C(B(b))), {}, (a) => {
            a = C(B(a));
            f(a);
          });
        } else {
          const d = c(a, b);
          d.target = "backgroundPage";
          m.runtime.sendMessage(d, f);
        }
      } catch (n) {
        return !1;
      }
      return !0;
    };
    m.runtime.onMessage.addListener(b);
    a && l.a("__ECHO_SERVICE__", (a, b, c) => {
      l.h(c.tab.id, a.command, a.args, a.callback ? (a) => {
        b(a);
      } : null);
    });
  })();
  let D;
  (() => {
    const f = {}, g = /s/g;
    D = (a, c, b, e) => {
      if (!m.alarms) {
        return !1;
      }
      const d = {};
      a = a.toUpperCase().replace(g, "_");
      f[a] = b;
      d[e ? "periodInMinutes" : "delayInMinutes"] = c;
      return m.alarms.create(a, d);
    };
    D.clear = (a) => {
      a = a.toUpperCase().replace(g, "_");
      delete f[a];
      m.alarms.clear(a);
    };
    m.alarms && m.alarms.onAlarm.addListener((a) => {
      a = a.name;
      f[a] && f[a]();
    });
  })();
  const w = {};
  (() => {
    let f;
    const g = {language:"language", font_size:"fontSize", dblclick_checkbox:"doubleClickEnabled", dblclick_key:"doubleClickKey", select_checkbox:"selectionEnabled", select_key:"selectionKey", history_checkbox:"wordHistoryEnabled"}, a = {doubleClickEnabled:!0, doubleClickKey:"", fontSize:11, language:"en-us", longClickEnabled:!0, selectionEnabled:!1, selectionKey:"", wordHistoryEnabled:!0}, c = (a, b) => {
      for (let c in a) {
        b[g[c]] = a[c];
      }
      return b;
    }, b = (a) => {
      let b = 0;
      for (let c in g) {
        let d = x[c];
        d && ("true" === d ? d = !0 : "false" === d && (d = !1), a[c] = d, b++);
      }
      return b;
    }, e = (a) => {
      for (let b in a) {
        x.removeItem(b);
      }
    };
    w.f = (d) => {
      const g = {}, n = {};
      let k = 0;
      if (f) {
        d(f);
      } else {
        if (k = b(g)) {
          c(g, n), e(g), f = n, w.m(n), d(n);
        } else {
          try {
            m.storage.sync.get(["appSettings"], (b) => {
              b && b.appSettings ? (f = b.appSettings, d(f)) : (w.m(a), d(a));
            });
          } catch (K) {
            d(a), console.error(K);
          }
        }
      }
    };
    w.m = (a, b) => {
      try {
        m.storage.sync.set({appSettings:a}, () => {
          f = a;
          b && b(!0);
        });
      } catch (n) {
        b && b(!0), console.error(n);
      }
    };
  })();
  const u = {};
  (() => {
    const f = new window.Dexie("gwg");
    f.version(1).stores({history:"++id, *word, *timestamp"});
    f.open().then(() => {
      u.G = !0;
    }).catch(() => {
      f.history = {add:() => {
      }};
    });
    u.F = (g) => {
      g = g.toLowerCase();
      const a = f.history.where("word").equals(g);
      a.first().then((c) => {
        c.count++;
        c.date = new Date;
        a.modify(c).catch((a) => {
          console.error("error while updating history record.", c, a);
          window.onerror(a);
        });
      }).catch(() => {
        f.history.add({word:g, count:1, date:new Date});
      });
    };
    u.H = () => f.history.clear();
    u.l = (g) => f.history.count(g);
    u.f = (g) => {
      f.history.toArray(g);
    };
  })();
  const r = {o:{}, sa:{}};
  (() => {
    r.o.get = (f, g, a, c) => {
      const b = c ? r.L() : r.J(), e = `/api/v1/define/${f}`, d = `${b}${e}`, h = performance.getEntries().length;
      y({j:d, T:"json", i:(c, k) => {
        g({status:k, response:c});
        w.f((g) => {
          g.wordHistoryEnabled && u.G && u.F(f);
          c && t.V(c.title, d, b, e, a.url, performance.getEntries()[h]);
        });
      }, c:(d) => {
        "NETWORK_ERROR" === d || "REQUEST_TIMED_OUT" === d || "REQUEST_ABORTED" === d || "REQUEST_REFUSED" === d ? (t.event(d, b, null, null, performance.getEntries()[h]), !1 === c ? (r.o.get(f, g, a, !0), v("CONNECTION_ERROR", b)) : (g({status:d, response:null}), v("CONNECTION_RETRY_ERROR", b))) : (t.event("DEFINITION_NOT_FOUND", f, null, null, performance.getEntries()[h]), g({status:d, response:null}));
      }});
    };
  })();
  (() => {
    var f = !1;
    const g = [];
    var a = [];
    ["us", "hk"].forEach((a) => {
      g.push({host:`${"http"}://${a}.${"infoapis.com"}${":8080"}`, b:99999});
    });
    const c = (a, b) => {
      const c = Date.now(), d = {host:"", b:0};
      y({j:a, i:() => {
        d.b = Date.now() - c;
        b(!0, d);
      }, c:() => {
        d.b = Date.now() - c;
        b(!1, d);
        console.log("PING_ERROR:", a);
        v("PING_ERROR", a);
      }, S:15000});
    }, b = (a, e, f) => {
      const d = g[a];
      c(`${d.host}${"/ping"}`, (c, h) => {
        c && (h.host = d.host, e.push(h));
        g[++a] ? b(a, e, f) : f(e.sort((a, b) => a.b - b.b));
      });
    }, e = (c) => {
      f = !0;
      b(0, [], (b) => {
        b.length ? (x.setItem("api-closest-hosts", B({list:b, timestamp:Date.now()})), a = b, !c && e(!0)) : v("not able to find an online host");
        f = !1;
      });
    };
    r.K = () => {
      if (a.length) {
        return a;
      }
      var b = x.getItem("api-closest-hosts");
      if ((b = C(b || "{}")) && b.list && b.list.length && 9E5 > Date.now() - b.timestamp) {
        return b.list;
      }
      f || e();
      return g;
    };
    r.J = () => r.K()[0].host;
    r.L = () => {
      f || e();
      return "https://global.infoapis.com";
    };
    r.N = () => {
      e();
    };
    D("PING_API", 5, () => {
      f || e();
    }, !0);
  })();
  (() => {
    const f = m.contextMenus, g = m.tabs;
    let a = !1;
    m.runtime.onInstalled.addListener((c) => {
      "install" === c.reason && (a = !0, r.N(), m.runtime.openOptionsPage());
    });
    l.a("DEFINE", (a, b, e) => {
      r.o.get(a.term, b, e, !1);
    });
    l.a("ERROR", (a) => {
      v(a);
      t.D(a.stack);
    });
    l.a("FIRST_RUN", (c, b) => {
      b(a);
    });
    l.a("SETTINGS_GET_ALL", (a, b) => {
      w.f(b);
    });
    l.a("SETTINGS_SET_ALL", (a, b) => {
      w.m(a, () => {
        b(!0);
        l.R(a);
      });
    });
    l.a("WORD_HISTORY_CLEAR", (a, b) => {
      b(u.H());
    });
    l.a("WORD_HISTORY_COUNT", (a, b) => {
      u.l(b);
    });
    l.a("WORD_HISTORY_GET_ALL", (a, b) => {
      u.f(b);
    });
    m.omnibox.onInputEntered.addListener((a) => {
      const b = "https://www.goodwordguide.com/dictionary/" + a.replace(/\s+/g, "+");
      g.getSelected(null, (a) => {
        g.update(a.id, {url:b});
      });
    });
    f.removeAll(() => {
      f.create({id:"gwgd-search", title:"Search dictionary for \u201c%s\u201d", contexts:["selection"]});
    });
    f.onClicked.addListener((a) => {
      "gwgd-search" == a.menuItemId && g.create({url:"https://www.goodwordguide.com/define/" + a.selectionText.toLowerCase()});
      return !0;
    });
  })();
})();

