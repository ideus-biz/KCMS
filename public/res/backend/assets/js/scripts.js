"use strict";

!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e || self).autosize = t();
}(void 0, function () {
  var e = new Map();
  function t(t) {
    var o = e.get(t);
    o && o.destroy();
  }
  function o(t) {
    var o = e.get(t);
    o && o.update();
  }
  var r = null;
  return "undefined" == typeof window ? ((r = function (e) {
    return e;
  }).destroy = function (e) {
    return e;
  }, r.update = function (e) {
    return e;
  }) : ((r = function (t, o) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function (t) {
      return function (t) {
        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !e.has(t)) {
          var o,
            r = null,
            n = window.getComputedStyle(t),
            i = (o = t.value, function () {
              s({
                testForHeightReduction: "" === o || !t.value.startsWith(o),
                restoreTextAlign: null
              }), o = t.value;
            }),
            l = function (o) {
              t.removeEventListener("autosize:destroy", l), t.removeEventListener("autosize:update", a), t.removeEventListener("input", i), window.removeEventListener("resize", a), Object.keys(o).forEach(function (e) {
                return t.style[e] = o[e];
              }), e.delete(t);
            }.bind(t, {
              height: t.style.height,
              resize: t.style.resize,
              textAlign: t.style.textAlign,
              overflowY: t.style.overflowY,
              overflowX: t.style.overflowX,
              wordWrap: t.style.wordWrap
            });
          t.addEventListener("autosize:destroy", l), t.addEventListener("autosize:update", a), t.addEventListener("input", i), window.addEventListener("resize", a), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", e.set(t, {
            destroy: l,
            update: a
          }), a();
        }
        function s(e) {
          var o,
            i,
            l = e.restoreTextAlign,
            a = void 0 === l ? null : l,
            d = e.testForHeightReduction,
            u = void 0 === d || d,
            f = n.overflowY;
          if (0 !== t.scrollHeight && ("vertical" === n.resize ? t.style.resize = "none" : "both" === n.resize && (t.style.resize = "horizontal"), u && (o = function (e) {
            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push([e.parentNode, e.parentNode.scrollTop]), e = e.parentNode;
            return function () {
              return t.forEach(function (e) {
                var t = e[0],
                  o = e[1];
                t.style.scrollBehavior = "auto", t.scrollTop = o, t.style.scrollBehavior = null;
              });
            };
          }(t), t.style.height = ""), i = "content-box" === n.boxSizing ? t.scrollHeight - (parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : t.scrollHeight + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), "none" !== n.maxHeight && i > parseFloat(n.maxHeight) ? ("hidden" === n.overflowY && (t.style.overflow = "scroll"), i = parseFloat(n.maxHeight)) : "hidden" !== n.overflowY && (t.style.overflow = "hidden"), t.style.height = i + "px", a && (t.style.textAlign = a), o && o(), r !== i && (t.dispatchEvent(new Event("autosize:resized", {
            bubbles: !0
          })), r = i), f !== n.overflow && !a)) {
            var c = n.textAlign;
            "hidden" === n.overflow && (t.style.textAlign = "start" === c ? "end" : "start"), s({
              restoreTextAlign: c,
              testForHeightReduction: !0
            });
          }
        }
        function a() {
          s({
            testForHeightReduction: !0,
            restoreTextAlign: null
          });
        }
      }(t);
    }), t;
  }).destroy = function (e) {
    return e && Array.prototype.forEach.call(e.length ? e : [e], t), e;
  }, r.update = function (e) {
    return e && Array.prototype.forEach.call(e.length ? e : [e], o), e;
  }), r;
});
; // Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};
  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();
; /*! jQuery UI - v1.13.2 - 2024-04-02
  * http://jqueryui.com
  * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js, widgets/selectmenu.js
  * Copyright jQuery Foundation and other contributors; Licensed MIT */

!function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
}(function (G) {
  "use strict";

  G.ui = G.ui || {};
  G.ui.version = "1.13.2";
  var n,
    i = 0,
    o = Array.prototype.hasOwnProperty,
    r = Array.prototype.slice;
  G.cleanData = (n = G.cleanData, function (e) {
    for (var t, i, s = 0; null != (i = e[s]); s++) (t = G._data(i, "events")) && t.remove && G(i).triggerHandler("remove");
    n(e);
  }), G.widget = function (e, i, t) {
    var s,
      n,
      a,
      o = {},
      r = e.split(".")[0],
      u = r + "-" + (e = e.split(".")[1]);
    return t || (t = i, i = G.Widget), Array.isArray(t) && (t = G.extend.apply(null, [{}].concat(t))), G.expr.pseudos[u.toLowerCase()] = function (e) {
      return !!G.data(e, u);
    }, G[r] = G[r] || {}, s = G[r][e], n = G[r][e] = function (e, t) {
      if (!this || !this._createWidget) return new n(e, t);
      arguments.length && this._createWidget(e, t);
    }, G.extend(n, s, {
      version: t.version,
      _proto: G.extend({}, t),
      _childConstructors: []
    }), (a = new i()).options = G.widget.extend({}, a.options), G.each(t, function (t, s) {
      function n() {
        return i.prototype[t].apply(this, arguments);
      }
      function a(e) {
        return i.prototype[t].apply(this, e);
      }
      o[t] = "function" == typeof s ? function () {
        var e,
          t = this._super,
          i = this._superApply;
        return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, this._superApply = i, e;
      } : s;
    }), n.prototype = G.widget.extend(a, {
      widgetEventPrefix: s && a.widgetEventPrefix || e
    }, o, {
      constructor: n,
      namespace: r,
      widgetName: e,
      widgetFullName: u
    }), s ? (G.each(s._childConstructors, function (e, t) {
      var i = t.prototype;
      G.widget(i.namespace + "." + i.widgetName, n, t._proto);
    }), delete s._childConstructors) : i._childConstructors.push(n), G.widget.bridge(e, n), n;
  }, G.widget.extend = function (e) {
    for (var t, i, s = r.call(arguments, 1), n = 0, a = s.length; n < a; n++) for (t in s[n]) i = s[n][t], o.call(s[n], t) && void 0 !== i && (G.isPlainObject(i) ? e[t] = G.isPlainObject(e[t]) ? G.widget.extend({}, e[t], i) : G.widget.extend({}, i) : e[t] = i);
    return e;
  }, G.widget.bridge = function (a, t) {
    var o = t.prototype.widgetFullName || a;
    G.fn[a] = function (i) {
      var e = "string" == typeof i,
        s = r.call(arguments, 1),
        n = this;
      return e ? this.length || "instance" !== i ? this.each(function () {
        var e,
          t = G.data(this, o);
        return "instance" === i ? (n = t, !1) : t ? "function" != typeof t[i] || "_" === i.charAt(0) ? G.error("no such method '" + i + "' for " + a + " widget instance") : (e = t[i].apply(t, s)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, !1) : void 0 : G.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'");
      }) : n = void 0 : (s.length && (i = G.widget.extend.apply(null, [i].concat(s))), this.each(function () {
        var e = G.data(this, o);
        e ? (e.option(i || {}), e._init && e._init()) : G.data(this, o, new t(i, this));
      })), n;
    };
  }, G.Widget = function () {}, G.Widget._childConstructors = [], G.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function (e, t) {
      t = G(t || this.defaultElement || this)[0], this.element = G(t), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = G(), this.hoverable = G(), this.focusable = G(), this.classesElementLookup = {}, t !== this && (G.data(t, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === t && this.destroy();
        }
      }), this.document = G(t.style ? t.ownerDocument : t.document || t), this.window = G(this.document[0].defaultView || this.document[0].parentWindow)), this.options = G.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function () {
      return {};
    },
    _getCreateEventData: G.noop,
    _create: G.noop,
    _init: G.noop,
    destroy: function () {
      var i = this;
      this._destroy(), G.each(this.classesElementLookup, function (e, t) {
        i._removeClass(t, e);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: G.noop,
    widget: function () {
      return this.element;
    },
    option: function (e, t) {
      var i,
        s,
        n,
        a = e;
      if (0 === arguments.length) return G.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, e = (i = e.split(".")).shift(), i.length) {
        for (s = a[e] = G.widget.extend({}, this.options[e]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
        if (e = i.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
        s[e] = t;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = t;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function (e) {
      for (var t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function (e, t) {
      return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this;
    },
    _setOptionClasses: function (e) {
      var t, i, s;
      for (t in e) s = this.classesElementLookup[t], e[t] !== this.options.classes[t] && s && s.length && (i = G(s.get()), this._removeClass(s, t), i.addClass(this._classes({
        element: i,
        keys: t,
        classes: e,
        add: !0
      })));
    },
    _setOptionDisabled: function (e) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function () {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function () {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function (n) {
      var a = [],
        o = this;
      function e(e, t) {
        for (var i, s = 0; s < e.length; s++) i = o.classesElementLookup[e[s]] || G(), i = n.add ? (function () {
          var i = [];
          n.element.each(function (e, t) {
            G.map(o.classesElementLookup, function (e) {
              return e;
            }).some(function (e) {
              return e.is(t);
            }) || i.push(t);
          }), o._on(G(i), {
            remove: "_untrackClassesElement"
          });
        }(), G(G.uniqueSort(i.get().concat(n.element.get())))) : G(i.not(n.element).get()), o.classesElementLookup[e[s]] = i, a.push(e[s]), t && n.classes[e[s]] && a.push(n.classes[e[s]]);
      }
      return (n = G.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, n)).keys && e(n.keys.match(/\S+/g) || [], !0), n.extra && e(n.extra.match(/\S+/g) || []), a.join(" ");
    },
    _untrackClassesElement: function (i) {
      var s = this;
      G.each(s.classesElementLookup, function (e, t) {
        -1 !== G.inArray(i.target, t) && (s.classesElementLookup[e] = G(t.not(i.target).get()));
      }), this._off(G(i.target));
    },
    _removeClass: function (e, t, i) {
      return this._toggleClass(e, t, i, !1);
    },
    _addClass: function (e, t, i) {
      return this._toggleClass(e, t, i, !0);
    },
    _toggleClass: function (e, t, i, s) {
      var n = "string" == typeof e || null === e,
        i = {
          extra: n ? t : i,
          keys: n ? e : t,
          element: n ? this.element : e,
          add: s = "boolean" == typeof s ? s : i
        };
      return i.element.toggleClass(this._classes(i), s), this;
    },
    _on: function (n, a, e) {
      var o,
        r = this;
      "boolean" != typeof n && (e = a, a = n, n = !1), e ? (a = o = G(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, o = this.widget()), G.each(e, function (e, t) {
        function i() {
          if (n || !0 !== r.options.disabled && !G(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? r[t] : t).apply(r, arguments);
        }
        "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || G.guid++);
        var s = e.match(/^([\w:-]*)\s*(.*)$/),
          e = s[1] + r.eventNamespace,
          s = s[2];
        s ? o.on(e, s, i) : a.on(e, i);
      });
    },
    _off: function (e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t), this.bindings = G(this.bindings.not(e).get()), this.focusable = G(this.focusable.not(e).get()), this.hoverable = G(this.hoverable.not(e).get());
    },
    _delay: function (e, t) {
      var i = this;
      return setTimeout(function () {
        return ("string" == typeof e ? i[e] : e).apply(i, arguments);
      }, t || 0);
    },
    _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function (e) {
          this._addClass(G(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function (e) {
          this._removeClass(G(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function (e) {
          this._addClass(G(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function (e) {
          this._removeClass(G(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function (e, t, i) {
      var s,
        n,
        a = this.options[e];
      if (i = i || {}, (t = G.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], n = t.originalEvent) for (s in n) s in t || (t[s] = n[s]);
      return this.element.trigger(t, i), !("function" == typeof a && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented());
    }
  }, G.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (a, o) {
    G.Widget.prototype["_" + a] = function (t, e, i) {
      var s,
        n = (e = "string" == typeof e ? {
          effect: e
        } : e) ? !0 !== e && "number" != typeof e && e.effect || o : a;
      "number" == typeof (e = e || {}) ? e = {
        duration: e
      } : !0 === e && (e = {}), s = !G.isEmptyObject(e), e.complete = i, e.delay && t.delay(e.delay), s && G.effects && G.effects.effect[n] ? t[a](e) : n !== a && t[n] ? t[n](e.duration, e.easing, i) : t.queue(function (e) {
        G(this)[a](), i && i.call(t[0]), e();
      });
    };
  });
  var s, D, w, a, u, l, h, c, M;
  G.widget;
  function x(e, t, i) {
    return [parseFloat(e[0]) * (c.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (c.test(e[1]) ? i / 100 : 1)];
  }
  function C(e, t) {
    return parseInt(G.css(e, t), 10) || 0;
  }
  function I(e) {
    return null != e && e === e.window;
  }
  D = Math.max, w = Math.abs, a = /left|center|right/, u = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, c = /%$/, M = G.fn.position, G.position = {
    scrollbarWidth: function () {
      if (void 0 !== s) return s;
      var e,
        t = G("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),
        i = t.children()[0];
      return G("body").append(t), e = i.offsetWidth, t.css("overflow", "scroll"), e === (i = i.offsetWidth) && (i = t[0].clientWidth), t.remove(), s = e - i;
    },
    getScrollInfo: function (e) {
      var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
        i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
        t = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
      return {
        width: "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight ? G.position.scrollbarWidth() : 0,
        height: t ? G.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function (e) {
      var t = G(e || window),
        i = I(t[0]),
        s = !!t[0] && 9 === t[0].nodeType;
      return {
        element: t,
        isWindow: i,
        isDocument: s,
        offset: !i && !s ? G(e).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: t.scrollLeft(),
        scrollTop: t.scrollTop(),
        width: t.outerWidth(),
        height: t.outerHeight()
      };
    }
  }, G.fn.position = function (c) {
    if (!c || !c.of) return M.apply(this, arguments);
    var d,
      p,
      m,
      f,
      g,
      e,
      _ = "string" == typeof (c = G.extend({}, c)).of ? G(document).find(c.of) : G(c.of),
      v = G.position.getWithinInfo(c.within),
      y = G.position.getScrollInfo(v),
      k = (c.collision || "flip").split(" "),
      b = {},
      t = 9 === (e = (t = _)[0]).nodeType ? {
        width: t.width(),
        height: t.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : I(e) ? {
        width: t.width(),
        height: t.height(),
        offset: {
          top: t.scrollTop(),
          left: t.scrollLeft()
        }
      } : e.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: e.pageY,
          left: e.pageX
        }
      } : {
        width: t.outerWidth(),
        height: t.outerHeight(),
        offset: t.offset()
      };
    return _[0].preventDefault && (c.at = "left top"), p = t.width, m = t.height, g = G.extend({}, f = t.offset), G.each(["my", "at"], function () {
      var e,
        t,
        i = (c[this] || "").split(" ");
      (i = 1 === i.length ? a.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = a.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = l.exec(i[0]), t = l.exec(i[1]), b[this] = [e ? e[0] : 0, t ? t[0] : 0], c[this] = [h.exec(i[0])[0], h.exec(i[1])[0]];
    }), 1 === k.length && (k[1] = k[0]), "right" === c.at[0] ? g.left += p : "center" === c.at[0] && (g.left += p / 2), "bottom" === c.at[1] ? g.top += m : "center" === c.at[1] && (g.top += m / 2), d = x(b.at, p, m), g.left += d[0], g.top += d[1], this.each(function () {
      var i,
        e,
        o = G(this),
        r = o.outerWidth(),
        u = o.outerHeight(),
        t = C(this, "marginLeft"),
        s = C(this, "marginTop"),
        n = r + t + C(this, "marginRight") + y.width,
        a = u + s + C(this, "marginBottom") + y.height,
        l = G.extend({}, g),
        h = x(b.my, o.outerWidth(), o.outerHeight());
      "right" === c.my[0] ? l.left -= r : "center" === c.my[0] && (l.left -= r / 2), "bottom" === c.my[1] ? l.top -= u : "center" === c.my[1] && (l.top -= u / 2), l.left += h[0], l.top += h[1], i = {
        marginLeft: t,
        marginTop: s
      }, G.each(["left", "top"], function (e, t) {
        G.ui.position[k[e]] && G.ui.position[k[e]][t](l, {
          targetWidth: p,
          targetHeight: m,
          elemWidth: r,
          elemHeight: u,
          collisionPosition: i,
          collisionWidth: n,
          collisionHeight: a,
          offset: [d[0] + h[0], d[1] + h[1]],
          my: c.my,
          at: c.at,
          within: v,
          elem: o
        });
      }), c.using && (e = function (e) {
        var t = f.left - l.left,
          i = t + p - r,
          s = f.top - l.top,
          n = s + m - u,
          a = {
            target: {
              element: _,
              left: f.left,
              top: f.top,
              width: p,
              height: m
            },
            element: {
              element: o,
              left: l.left,
              top: l.top,
              width: r,
              height: u
            },
            horizontal: i < 0 ? "left" : 0 < t ? "right" : "center",
            vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
          };
        p < r && w(t + i) < p && (a.horizontal = "center"), m < u && w(s + n) < m && (a.vertical = "middle"), D(w(t), w(i)) > D(w(s), w(n)) ? a.important = "horizontal" : a.important = "vertical", c.using.call(this, e, a);
      }), o.offset(G.extend(l, {
        using: e
      }));
    });
  }, G.ui.position = {
    fit: {
      left: function (e, t) {
        var i = t.within,
          s = i.isWindow ? i.scrollLeft : i.offset.left,
          n = i.width,
          a = e.left - t.collisionPosition.marginLeft,
          o = s - a,
          r = a + t.collisionWidth - n - s;
        t.collisionWidth > n ? 0 < o && r <= 0 ? (i = e.left + o + t.collisionWidth - n - s, e.left += o - i) : e.left = !(0 < r && o <= 0) && r < o ? s + n - t.collisionWidth : s : 0 < o ? e.left += o : 0 < r ? e.left -= r : e.left = D(e.left - a, e.left);
      },
      top: function (e, t) {
        var i = t.within,
          s = i.isWindow ? i.scrollTop : i.offset.top,
          n = t.within.height,
          a = e.top - t.collisionPosition.marginTop,
          o = s - a,
          r = a + t.collisionHeight - n - s;
        t.collisionHeight > n ? 0 < o && r <= 0 ? (i = e.top + o + t.collisionHeight - n - s, e.top += o - i) : e.top = !(0 < r && o <= 0) && r < o ? s + n - t.collisionHeight : s : 0 < o ? e.top += o : 0 < r ? e.top -= r : e.top = D(e.top - a, e.top);
      }
    },
    flip: {
      left: function (e, t) {
        var i = t.within,
          s = i.offset.left + i.scrollLeft,
          n = i.width,
          a = i.isWindow ? i.scrollLeft : i.offset.left,
          o = e.left - t.collisionPosition.marginLeft,
          r = o - a,
          u = o + t.collisionWidth - n - a,
          l = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
          i = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
          o = -2 * t.offset[0];
        r < 0 ? ((s = e.left + l + i + o + t.collisionWidth - n - s) < 0 || s < w(r)) && (e.left += l + i + o) : 0 < u && (0 < (a = e.left - t.collisionPosition.marginLeft + l + i + o - a) || w(a) < u) && (e.left += l + i + o);
      },
      top: function (e, t) {
        var i = t.within,
          s = i.offset.top + i.scrollTop,
          n = i.height,
          a = i.isWindow ? i.scrollTop : i.offset.top,
          o = e.top - t.collisionPosition.marginTop,
          r = o - a,
          u = o + t.collisionHeight - n - a,
          l = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
          i = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
          o = -2 * t.offset[1];
        r < 0 ? ((s = e.top + l + i + o + t.collisionHeight - n - s) < 0 || s < w(r)) && (e.top += l + i + o) : 0 < u && (0 < (a = e.top - t.collisionPosition.marginTop + l + i + o - a) || w(a) < u) && (e.top += l + i + o);
      }
    },
    flipfit: {
      left: function () {
        G.ui.position.flip.left.apply(this, arguments), G.ui.position.fit.left.apply(this, arguments);
      },
      top: function () {
        G.ui.position.flip.top.apply(this, arguments), G.ui.position.fit.top.apply(this, arguments);
      }
    }
  };
  var e;
  G.ui.position, G.extend(G.expr.pseudos, {
    data: G.expr.createPseudo ? G.expr.createPseudo(function (t) {
      return function (e) {
        return !!G.data(e, t);
      };
    }) : function (e, t, i) {
      return !!G.data(e, i[3]);
    }
  }), G.fn.extend({
    disableSelection: (e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
      return this.on(e + ".ui-disableSelection", function (e) {
        e.preventDefault();
      });
    }),
    enableSelection: function () {
      return this.off(".ui-disableSelection");
    }
  });
  G.ui.focusable = function (e, t) {
    var i,
      s,
      n,
      a,
      o = e.nodeName.toLowerCase();
    return "area" === o ? (s = (i = e.parentNode).name, !(!e.href || !s || "map" !== i.nodeName.toLowerCase()) && 0 < (s = G("img[usemap='#" + s + "']")).length && s.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(o) ? (n = !e.disabled) && (a = G(e).closest("fieldset")[0]) && (n = !a.disabled) : n = "a" === o && e.href || t, n && G(e).is(":visible") && function (e) {
      var t = e.css("visibility");
      for (; "inherit" === t;) e = e.parent(), t = e.css("visibility");
      return "visible" === t;
    }(G(e)));
  }, G.extend(G.expr.pseudos, {
    focusable: function (e) {
      return G.ui.focusable(e, null != G.attr(e, "tabindex"));
    }
  });
  var t, d;
  G.ui.focusable, G.fn._form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : G(this[0].form);
  }, G.ui.formResetMixin = {
    _formResetHandler: function () {
      var t = G(this);
      setTimeout(function () {
        var e = t.data("ui-form-reset-instances");
        G.each(e, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function () {
      var e;
      this.form = this.element._form(), this.form.length && ((e = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), this.form.data("ui-form-reset-instances", e));
    },
    _unbindFormResetHandler: function () {
      var e;
      this.form.length && ((e = this.form.data("ui-form-reset-instances")).splice(G.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
    }
  };
  G.expr.pseudos || (G.expr.pseudos = G.expr[":"]), G.uniqueSort || (G.uniqueSort = G.unique), G.escapeSelector || (t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, d = function (e, t) {
    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }, G.escapeSelector = function (e) {
    return (e + "").replace(t, d);
  }), G.fn.even && G.fn.odd || G.fn.extend({
    even: function () {
      return this.filter(function (e) {
        return e % 2 == 0;
      });
    },
    odd: function () {
      return this.filter(function (e) {
        return e % 2 == 1;
      });
    }
  });
  var p;
  G.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, G.fn.labels = function () {
    var e, t, i;
    return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (t = this.eq(0).parents("label"), (e = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), e = "label[for='" + G.escapeSelector(e) + "']", t = t.add(i.find(e).addBack(e))), this.pushStack(t)) : this.pushStack([]);
  }, G.fn.scrollParent = function (e) {
    var t = this.css("position"),
      i = "absolute" === t,
      s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      e = this.parents().filter(function () {
        var e = G(this);
        return (!i || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
      }).eq(0);
    return "fixed" !== t && e.length ? e : G(this[0].ownerDocument || document);
  }, G.extend(G.expr.pseudos, {
    tabbable: function (e) {
      var t = G.attr(e, "tabindex"),
        i = null != t;
      return (!i || 0 <= t) && G.ui.focusable(e, i);
    }
  }), G.fn.extend({
    uniqueId: (p = 0, function () {
      return this.each(function () {
        this.id || (this.id = "ui-id-" + ++p);
      });
    }),
    removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && G(this).removeAttr("id");
      });
    }
  }), G.ui.safeActiveElement = function (t) {
    var i;
    try {
      i = t.activeElement;
    } catch (e) {
      i = t.body;
    }
    return i = !(i = i || t.body).nodeName ? t.body : i;
  }, G.widget("ui.menu", {
    version: "1.13.2",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.lastMousePosition = {
        x: null,
        y: null
      }, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function (e) {
          e.preventDefault(), this._activateItem(e);
        },
        "click .ui-menu-item": function (e) {
          var t = G(e.target),
            i = G(G.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": "_activateItem",
        "mousemove .ui-menu-item": "_activateItem",
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function (e, t) {
          var i = this.active || this._menuItems().first();
          t || this.focus(e, i);
        },
        blur: function (e) {
          this._delay(function () {
            G.contains(this.element[0], G.ui.safeActiveElement(this.document[0])) || this.collapseAll(e);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function (e) {
          this._closeOnDocumentClick(e) && this.collapseAll(e, !0), this.mouseHandled = !1;
        }
      });
    },
    _activateItem: function (e) {
      var t, i;
      this.previousFilter || e.clientX === this.lastMousePosition.x && e.clientY === this.lastMousePosition.y || (this.lastMousePosition = {
        x: e.clientX,
        y: e.clientY
      }, t = G(e.target).closest(".ui-menu-item"), i = G(e.currentTarget), t[0] === i[0] && (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, i))));
    },
    _destroy: function () {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function () {
        var e = G(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    },
    _keydown: function (e) {
      var t,
        i,
        s,
        n = !0;
      switch (e.keyCode) {
        case G.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;
        case G.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;
        case G.ui.keyCode.HOME:
          this._move("first", "first", e);
          break;
        case G.ui.keyCode.END:
          this._move("last", "last", e);
          break;
        case G.ui.keyCode.UP:
          this.previous(e);
          break;
        case G.ui.keyCode.DOWN:
          this.next(e);
          break;
        case G.ui.keyCode.LEFT:
          this.collapse(e);
          break;
        case G.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;
        case G.ui.keyCode.ENTER:
        case G.ui.keyCode.SPACE:
          this._activate(e);
          break;
        case G.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;
        default:
          t = this.previousFilter || "", s = n = !1, i = 96 <= e.keyCode && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), i === t ? s = !0 : i = t + i, t = this._filterMenuItems(i), (t = s && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (i = String.fromCharCode(e.keyCode), t = this._filterMenuItems(i)), t.length ? (this.focus(e, t), this.previousFilter = i, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }
      n && e.preventDefault();
    },
    _activate: function (e) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e));
    },
    refresh: function () {
      var e,
        t,
        s = this,
        n = this.options.icons.submenu,
        i = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), t = i.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var e = G(this),
          t = e.prev(),
          i = G("<span>").data("ui-menu-submenu-caret", !0);
        s._addClass(i, "ui-menu-icon", "ui-icon " + n), t.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", t.attr("id"));
      }), this._addClass(t, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
        var e = G(this);
        s._isDivider(e) && s._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), i = (t = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(t, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !G.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function () {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function (e, t) {
      var i;
      "icons" === e && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)), this._super(e, t);
    },
    _setOptionDisabled: function (e) {
      this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e);
    },
    focus: function (e, t) {
      var i;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
        item: t
      });
    },
    _scrollIntoView: function (e) {
      var t, i, s;
      this._hasScroll() && (i = parseFloat(G.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(G.css(this.activeMenu[0], "paddingTop")) || 0, t = e.offset().top - this.activeMenu.offset().top - i - s, i = this.activeMenu.scrollTop(), s = this.activeMenu.height(), e = e.outerHeight(), t < 0 ? this.activeMenu.scrollTop(i + t) : s < t + e && this.activeMenu.scrollTop(i + t - s + e));
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function (e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay));
    },
    _open: function (e) {
      var t = G.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t);
    },
    collapseAll: function (t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var e = i ? this.element : G(t && t.target).closest(this.element.find(".ui-menu"));
        e.length || (e = this.element), this._close(e), this.blur(t), this._removeClass(e.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = e;
      }, i ? 0 : this.delay);
    },
    _close: function (e) {
      (e = e || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function (e) {
      return !G(e.target).closest(".ui-menu").length;
    },
    _isDivider: function (e) {
      return !/[^\-\u2014\u2013\s]/.test(e.text());
    },
    collapse: function (e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function (e) {
      var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
      t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t);
      }));
    },
    next: function (e) {
      this._move("next", "first", e);
    },
    previous: function (e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _menuItems: function (e) {
      return (e || this.element).find(this.options.items).filter(".ui-menu-item");
    },
    _move: function (e, t, i) {
      var s;
      (s = this.active ? "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[e + "All"](".ui-menu-item").first() : s) && s.length && this.active || (s = this._menuItems(this.activeMenu)[t]()), this.focus(i, s);
    },
    nextPage: function (e) {
      var t, i, s;
      this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.innerHeight(), 0 === G.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each(function () {
        return (t = G(this)).offset().top - i - s < 0;
      }), this.focus(e, t)) : this.focus(e, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(e);
    },
    previousPage: function (e) {
      var t, i, s;
      this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.innerHeight(), 0 === G.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each(function () {
        return 0 < (t = G(this)).offset().top - i + s;
      }), this.focus(e, t)) : this.focus(e, this._menuItems(this.activeMenu).first())) : this.next(e);
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function (e) {
      this.active = this.active || G(e.target).closest(".ui-menu-item");
      var t = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t);
    },
    _filterMenuItems: function (e) {
      var e = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
        t = new RegExp("^" + e, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return t.test(String.prototype.trim.call(G(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  });
  G.widget("ui.autocomplete", {
    version: "1.13.2",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    liveRegionTimer: null,
    _create: function () {
      var i,
        s,
        n,
        e = this.element[0].nodeName.toLowerCase(),
        t = "textarea" === e,
        e = "input" === e;
      this.isMultiLine = t || !e && this._isContentEditable(this.element), this.valueMethod = this.element[t || e ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function (e) {
          if (this.element.prop("readOnly")) s = n = i = !0;else {
            s = n = i = !1;
            var t = G.ui.keyCode;
            switch (e.keyCode) {
              case t.PAGE_UP:
                i = !0, this._move("previousPage", e);
                break;
              case t.PAGE_DOWN:
                i = !0, this._move("nextPage", e);
                break;
              case t.UP:
                i = !0, this._keyEvent("previous", e);
                break;
              case t.DOWN:
                i = !0, this._keyEvent("next", e);
                break;
              case t.ENTER:
                this.menu.active && (i = !0, e.preventDefault(), this.menu.select(e));
                break;
              case t.TAB:
                this.menu.active && this.menu.select(e);
                break;
              case t.ESCAPE:
                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                break;
              default:
                s = !0, this._searchTimeout(e);
            }
          }
        },
        keypress: function (e) {
          if (i) return i = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault());
          if (!s) {
            var t = G.ui.keyCode;
            switch (e.keyCode) {
              case t.PAGE_UP:
                this._move("previousPage", e);
                break;
              case t.PAGE_DOWN:
                this._move("nextPage", e);
                break;
              case t.UP:
                this._keyEvent("previous", e);
                break;
              case t.DOWN:
                this._keyEvent("next", e);
            }
          }
        },
        input: function (e) {
          if (n) return n = !1, void e.preventDefault();
          this._searchTimeout(e);
        },
        focus: function () {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function (e) {
          clearTimeout(this.searching), this.close(e), this._change(e);
        }
      }), this._initSource(), this.menu = G("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().attr({
        unselectable: "on"
      }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function (e) {
          e.preventDefault();
        },
        menufocus: function (e, t) {
          var i, s;
          if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
            G(e.target).trigger(e.originalEvent);
          });
          s = t.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: s
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), (i = t.item.attr("aria-label") || s.value) && String.prototype.trim.call(i).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function () {
            this.liveRegion.html(G("<div>").text(i));
          }, 100));
        },
        menuselect: function (e, t) {
          var i = t.item.data("ui-autocomplete-item"),
            s = this.previous;
          this.element[0] !== G.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i;
          })), !1 !== this._trigger("select", e, {
            item: i
          }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        }
      }), this.liveRegion = G("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function (e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function (e) {
      var t = this.menu.element[0];
      return e.target === this.element[0] || e.target === t || G.contains(t, e.target);
    },
    _closeOnClickOutside: function (e) {
      this._isEventTargetInWidget(e) || this.close();
    },
    _appendTo: function () {
      var e = this.options.appendTo;
      return e = !(e = !(e = e && (e.jquery || e.nodeType ? G(e) : this.document.find(e).eq(0))) || !e[0] ? this.element.closest(".ui-front, dialog") : e).length ? this.document[0].body : e;
    },
    _initSource: function () {
      var i,
        s,
        n = this;
      Array.isArray(this.options.source) ? (i = this.options.source, this.source = function (e, t) {
        t(G.ui.autocomplete.filter(i, e.term));
      }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function (e, t) {
        n.xhr && n.xhr.abort(), n.xhr = G.ajax({
          url: s,
          data: e,
          dataType: "json",
          success: function (e) {
            t(e);
          },
          error: function () {
            t([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function (s) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
          t = this.menu.element.is(":visible"),
          i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
        e && (t || i) || (this.selectedItem = null, this.search(null, s));
      }, this.options.delay);
    },
    search: function (e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0;
    },
    _search: function (e) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: e
      }, this._response());
    },
    _response: function () {
      var t = ++this.requestIndex;
      return function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }.bind(this);
    },
    __response: function (e) {
      e = e && this._normalize(e), this._trigger("response", null, {
        content: e
      }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close();
    },
    close: function (e) {
      this.cancelSearch = !0, this._close(e);
    },
    _close: function (e) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e));
    },
    _change: function (e) {
      this.previous !== this._value() && this._trigger("change", e, {
        item: this.selectedItem
      });
    },
    _normalize: function (e) {
      return e.length && e[0].label && e[0].value ? e : G.map(e, function (e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : G.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        });
      });
    },
    _suggest: function (e) {
      var t = this.menu.element.empty();
      this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(G.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function (i, e) {
      var s = this;
      G.each(e, function (e, t) {
        s._renderItemData(i, t);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function (e, t) {
      return G("<li>").append(G("<div>").text(t.label)).appendTo(e);
    },
    _move: function (e, t) {
      if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
      this.search(null, t);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (e, t) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
    },
    _isContentEditable: function (e) {
      if (!e.length) return !1;
      var t = e.prop("contentEditable");
      return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t;
    }
  }), G.extend(G.ui.autocomplete, {
    escapeRegex: function (e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function (e, t) {
      var i = new RegExp(G.ui.autocomplete.escapeRegex(t), "i");
      return G.grep(e, function (e) {
        return i.test(e.label || e.value || e);
      });
    }
  }), G.widget("ui.autocomplete", G.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function (e) {
          return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function (e) {
      var t;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function () {
        this.liveRegion.html(G("<div>").text(t));
      }, 100));
    }
  });
  var m;
  G.ui.autocomplete;
  function f() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
      selectMonthLabel: "Select month",
      selectYearLabel: "Select year"
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      onUpdateDatepicker: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, G.extend(this._defaults, this.regional[""]), this.regional.en = G.extend(!0, {}, this.regional[""]), this.regional["en-US"] = G.extend(!0, {}, this.regional.en), this.dpDiv = g(G("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }
  function g(e) {
    var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", t, function () {
      G(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && G(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && G(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", t, _);
  }
  function _() {
    G.datepicker._isDisabledDatepicker((m.inline ? m.dpDiv.parent() : m.input)[0]) || (G(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), G(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && G(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && G(this).addClass("ui-datepicker-next-hover"));
  }
  function v(e, t) {
    for (var i in G.extend(e, t), t) null == t[i] && (e[i] = t[i]);
    return e;
  }
  G.extend(G.ui, {
    datepicker: {
      version: "1.13.2"
    }
  }), G.extend(f.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (e) {
      return v(this._defaults, e || {}), this;
    },
    _attachDatepicker: function (e, t) {
      var i,
        s = e.nodeName.toLowerCase(),
        n = "div" === s || "span" === s;
      e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (i = this._newInst(G(e), n)).settings = G.extend({}, t || {}), "input" === s ? this._connectDatepicker(e, i) : n && this._inlineDatepicker(e, i);
    },
    _newInst: function (e, t) {
      return {
        id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: t,
        dpDiv: t ? g(G("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function (e, t) {
      var i = G(e);
      t.append = G([]), t.trigger = G([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(t), G.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, t) {
      var i,
        s = this._get(t, "appendText"),
        n = this._get(t, "isRTL");
      t.append && t.append.remove(), s && (t.append = G("<span>").addClass(this._appendClass).text(s), e[n ? "before" : "after"](t.append)), e.off("focus", this._showDatepicker), t.trigger && t.trigger.remove(), "focus" !== (i = this._get(t, "showOn")) && "both" !== i || e.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (s = this._get(t, "buttonText"), i = this._get(t, "buttonImage"), this._get(t, "buttonImageOnly") ? t.trigger = G("<img>").addClass(this._triggerClass).attr({
        src: i,
        alt: s,
        title: s
      }) : (t.trigger = G("<button type='button'>").addClass(this._triggerClass), i ? t.trigger.html(G("<img>").attr({
        src: i,
        alt: s,
        title: s
      })) : t.trigger.text(s)), e[n ? "before" : "after"](t.trigger), t.trigger.on("click", function () {
        return G.datepicker._datepickerShowing && G.datepicker._lastInput === e[0] ? G.datepicker._hideDatepicker() : (G.datepicker._datepickerShowing && G.datepicker._lastInput !== e[0] && G.datepicker._hideDatepicker(), G.datepicker._showDatepicker(e[0])), !1;
      }));
    },
    _autoSize: function (e) {
      var t, i, s, n, a, o;
      this._get(e, "autoSize") && !e.inline && (a = new Date(2009, 11, 20), (o = this._get(e, "dateFormat")).match(/[DM]/) && (t = function (e) {
        for (n = s = i = 0; n < e.length; n++) e[n].length > i && (i = e[n].length, s = n);
        return s;
      }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length));
    },
    _inlineDatepicker: function (e, t) {
      var i = G(e);
      i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv), G.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function (e, t, i, s, n) {
      var a,
        o = this._dialogInst;
      return o || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = G("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), G("body").append(this._dialogInput), (o = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, G.data(this._dialogInput[0], "datepicker", o)), v(o.settings, s || {}), t = t && t.constructor === Date ? this._formatDate(o, t) : t, this._dialogInput.val(t), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (a = document.documentElement.clientWidth, s = document.documentElement.clientHeight, t = document.documentElement.scrollLeft || document.body.scrollLeft, n = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + t, s / 2 - 150 + n]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), G.blockUI && G.blockUI(this.dpDiv), G.data(this._dialogInput[0], "datepicker", o), this;
    },
    _destroyDatepicker: function (e) {
      var t,
        i = G(e),
        s = G.data(e, "datepicker");
      i.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), G.removeData(e, "datepicker"), "input" === t ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== t && "span" !== t || i.removeClass(this.markerClassName).empty(), m === s && (m = null, this._curInst = null));
    },
    _enableDatepicker: function (t) {
      var e,
        i = G(t),
        s = G.data(t, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !1, s.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : "div" !== e && "span" !== e || ((i = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = G.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }));
    },
    _disableDatepicker: function (t) {
      var e,
        i = G(t),
        s = G.data(t, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !0, s.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : "div" !== e && "span" !== e || ((i = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = G.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }), this._disabledInputs[this._disabledInputs.length] = t);
    },
    _isDisabledDatepicker: function (e) {
      if (!e) return !1;
      for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return !0;
      return !1;
    },
    _getInst: function (e) {
      try {
        return G.data(e, "datepicker");
      } catch (e) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (e, t, i) {
      var s,
        n,
        a = this._getInst(e);
      if (2 === arguments.length && "string" == typeof t) return "defaults" === t ? G.extend({}, G.datepicker._defaults) : a ? "all" === t ? G.extend({}, a.settings) : this._get(a, t) : null;
      s = t || {}, "string" == typeof t && ((s = {})[t] = i), a && (this._curInst === a && this._hideDatepicker(), n = this._getDateDatepicker(e, !0), t = this._getMinMaxDate(a, "min"), i = this._getMinMaxDate(a, "max"), v(a.settings, s), null !== t && void 0 !== s.dateFormat && void 0 === s.minDate && (a.settings.minDate = this._formatDate(a, t)), null !== i && void 0 !== s.dateFormat && void 0 === s.maxDate && (a.settings.maxDate = this._formatDate(a, i)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(G(e), a), this._autoSize(a), this._setDate(a, n), this._updateAlternate(a), this._updateDatepicker(a));
    },
    _changeDatepicker: function (e, t, i) {
      this._optionDatepicker(e, t, i);
    },
    _refreshDatepicker: function (e) {
      e = this._getInst(e);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (e, t) {
      e = this._getInst(e);
      e && (this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e));
    },
    _getDateDatepicker: function (e, t) {
      e = this._getInst(e);
      return e && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null;
    },
    _doKeyDown: function (e) {
      var t,
        i,
        s = G.datepicker._getInst(e.target),
        n = !0,
        a = s.dpDiv.is(".ui-datepicker-rtl");
      if (s._keyEvent = !0, G.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          G.datepicker._hideDatepicker(), n = !1;
          break;
        case 13:
          return (i = G("td." + G.datepicker._dayOverClass + ":not(." + G.datepicker._currentClass + ")", s.dpDiv))[0] && G.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, i[0]), (t = G.datepicker._get(s, "onSelect")) ? (i = G.datepicker._formatDate(s), t.apply(s.input ? s.input[0] : null, [i, s])) : G.datepicker._hideDatepicker(), !1;
        case 27:
          G.datepicker._hideDatepicker();
          break;
        case 33:
          G.datepicker._adjustDate(e.target, e.ctrlKey ? -G.datepicker._get(s, "stepBigMonths") : -G.datepicker._get(s, "stepMonths"), "M");
          break;
        case 34:
          G.datepicker._adjustDate(e.target, e.ctrlKey ? +G.datepicker._get(s, "stepBigMonths") : +G.datepicker._get(s, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && G.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && G.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && G.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && G.datepicker._adjustDate(e.target, e.ctrlKey ? -G.datepicker._get(s, "stepBigMonths") : -G.datepicker._get(s, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && G.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && G.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && G.datepicker._adjustDate(e.target, e.ctrlKey ? +G.datepicker._get(s, "stepBigMonths") : +G.datepicker._get(s, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && G.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
          break;
        default:
          n = !1;
      } else 36 === e.keyCode && e.ctrlKey ? G.datepicker._showDatepicker(this) : n = !1;
      n && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (e) {
      var t,
        i = G.datepicker._getInst(e.target);
      if (G.datepicker._get(i, "constrainInput")) return t = G.datepicker._possibleChars(G.datepicker._get(i, "dateFormat")), i = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || i < " " || !t || -1 < t.indexOf(i);
    },
    _doKeyUp: function (e) {
      e = G.datepicker._getInst(e.target);
      if (e.input.val() !== e.lastVal) try {
        G.datepicker.parseDate(G.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, G.datepicker._getFormatConfig(e)) && (G.datepicker._setDateFromField(e), G.datepicker._updateAlternate(e), G.datepicker._updateDatepicker(e));
      } catch (e) {}
      return !0;
    },
    _showDatepicker: function (e) {
      var t, i, s, n;
      "input" !== (e = e.target || e).nodeName.toLowerCase() && (e = G("input", e.parentNode)[0]), G.datepicker._isDisabledDatepicker(e) || G.datepicker._lastInput === e || (n = G.datepicker._getInst(e), G.datepicker._curInst && G.datepicker._curInst !== n && (G.datepicker._curInst.dpDiv.stop(!0, !0), n && G.datepicker._datepickerShowing && G.datepicker._hideDatepicker(G.datepicker._curInst.input[0])), !1 !== (i = (s = G.datepicker._get(n, "beforeShow")) ? s.apply(e, [e, n]) : {}) && (v(n.settings, i), n.lastVal = null, G.datepicker._lastInput = e, G.datepicker._setDateFromField(n), G.datepicker._inDialog && (e.value = ""), G.datepicker._pos || (G.datepicker._pos = G.datepicker._findPos(e), G.datepicker._pos[1] += e.offsetHeight), t = !1, G(e).parents().each(function () {
        return !(t |= "fixed" === G(this).css("position"));
      }), s = {
        left: G.datepicker._pos[0],
        top: G.datepicker._pos[1]
      }, G.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      }), G.datepicker._updateDatepicker(n), s = G.datepicker._checkOffset(n, s, t), n.dpDiv.css({
        position: G.datepicker._inDialog && G.blockUI ? "static" : t ? "fixed" : "absolute",
        display: "none",
        left: s.left + "px",
        top: s.top + "px"
      }), n.inline || (i = G.datepicker._get(n, "showAnim"), s = G.datepicker._get(n, "duration"), n.dpDiv.css("z-index", function (e) {
        for (var t, i; e.length && e[0] !== document;) {
          if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
          e = e.parent();
        }
        return 0;
      }(G(e)) + 1), G.datepicker._datepickerShowing = !0, G.effects && G.effects.effect[i] ? n.dpDiv.show(i, G.datepicker._get(n, "showOptions"), s) : n.dpDiv[i || "show"](i ? s : null), G.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), G.datepicker._curInst = n)));
    },
    _updateDatepicker: function (e) {
      this.maxRows = 4, (m = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var t,
        i = this._getNumberOfMonths(e),
        s = i[1],
        n = e.dpDiv.find("." + this._dayOverClass + " a"),
        a = G.datepicker._get(e, "onUpdateDatepicker");
      0 < n.length && _.apply(n.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === G.datepicker._curInst && G.datepicker._datepickerShowing && G.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (t = e.yearshtml, setTimeout(function () {
        t === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year").first().replaceWith(e.yearshtml), t = e.yearshtml = null;
      }, 0)), a && a.apply(e.input ? e.input[0] : null, [e]);
    },
    _shouldFocusInput: function (e) {
      return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
    },
    _checkOffset: function (e, t, i) {
      var s = e.dpDiv.outerWidth(),
        n = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        o = e.input ? e.input.outerHeight() : 0,
        r = document.documentElement.clientWidth + (i ? 0 : G(document).scrollLeft()),
        u = document.documentElement.clientHeight + (i ? 0 : G(document).scrollTop());
      return t.left -= this._get(e, "isRTL") ? s - a : 0, t.left -= i && t.left === e.input.offset().left ? G(document).scrollLeft() : 0, t.top -= i && t.top === e.input.offset().top + o ? G(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + s > r && s < r ? Math.abs(t.left + s - r) : 0), t.top -= Math.min(t.top, t.top + n > u && n < u ? Math.abs(n + o) : 0), t;
    },
    _findPos: function (e) {
      for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || G.expr.pseudos.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
      return [(t = G(e).offset()).left, t.top];
    },
    _hideDatepicker: function (e) {
      var t,
        i,
        s = this._curInst;
      !s || e && s !== G.data(e, "datepicker") || this._datepickerShowing && (t = this._get(s, "showAnim"), i = this._get(s, "duration"), e = function () {
        G.datepicker._tidyDialog(s);
      }, G.effects && (G.effects.effect[t] || G.effects[t]) ? s.dpDiv.hide(t, G.datepicker._get(s, "showOptions"), i, e) : s.dpDiv["slideDown" === t ? "slideUp" : "fadeIn" === t ? "fadeOut" : "hide"](t ? i : null, e), t || e(), this._datepickerShowing = !1, (e = this._get(s, "onClose")) && e.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), G.blockUI && (G.unblockUI(), G("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function (e) {
      e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (e) {
      var t;
      G.datepicker._curInst && (t = G(e.target), e = G.datepicker._getInst(t[0]), (t[0].id === G.datepicker._mainDivId || 0 !== t.parents("#" + G.datepicker._mainDivId).length || t.hasClass(G.datepicker.markerClassName) || t.closest("." + G.datepicker._triggerClass).length || !G.datepicker._datepickerShowing || G.datepicker._inDialog && G.blockUI) && (!t.hasClass(G.datepicker.markerClassName) || G.datepicker._curInst === e) || G.datepicker._hideDatepicker());
    },
    _adjustDate: function (e, t, i) {
      var s = G(e),
        e = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(e, t, i), this._updateDatepicker(e));
    },
    _gotoToday: function (e) {
      var t = G(e),
        i = this._getInst(t[0]);
      this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (e = new Date(), i.selectedDay = e.getDate(), i.drawMonth = i.selectedMonth = e.getMonth(), i.drawYear = i.selectedYear = e.getFullYear()), this._notifyChange(i), this._adjustDate(t);
    },
    _selectMonthYear: function (e, t, i) {
      var s = G(e),
        e = this._getInst(s[0]);
      e["selected" + ("M" === i ? "Month" : "Year")] = e["draw" + ("M" === i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(s);
    },
    _selectDay: function (e, t, i, s) {
      var n = G(e);
      G(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || ((n = this._getInst(n[0])).selectedDay = n.currentDay = parseInt(G("a", s).attr("data-date")), n.selectedMonth = n.currentMonth = t, n.selectedYear = n.currentYear = i, this._selectDate(e, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
    },
    _clearDate: function (e) {
      e = G(e);
      this._selectDate(e, "");
    },
    _selectDate: function (e, t) {
      var i = G(e),
        e = this._getInst(i[0]);
      t = null != t ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e), (i = this._get(e, "onSelect")) ? i.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.trigger("focus"), this._lastInput = null);
    },
    _updateAlternate: function (e) {
      var t,
        i,
        s = this._get(e, "altField");
      s && (t = this._get(e, "altFormat") || this._get(e, "dateFormat"), i = this._getDate(e), e = this.formatDate(t, i, this._getFormatConfig(e)), G(document).find(s).val(e));
    },
    noWeekends: function (e) {
      e = e.getDay();
      return [0 < e && e < 6, ""];
    },
    iso8601Week: function (e) {
      var t = new Date(e.getTime());
      return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), e = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((e - t) / 864e5) / 7) + 1;
    },
    parseDate: function (t, n, e) {
      if (null == t || null == n) throw "Invalid arguments";
      if ("" === (n = "object" == typeof n ? n.toString() : n + "")) return null;
      for (var i, s, a, o = 0, r = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff, r = "string" != typeof r ? r : new Date().getFullYear() % 100 + parseInt(r, 10), u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, l = (e ? e.dayNames : null) || this._defaults.dayNames, h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, c = (e ? e.monthNames : null) || this._defaults.monthNames, d = -1, p = -1, m = -1, f = -1, g = !1, _ = function (e) {
          e = b + 1 < t.length && t.charAt(b + 1) === e;
          return e && b++, e;
        }, v = function (e) {
          var t = _(e),
            t = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
            t = new RegExp("^\\d{" + ("y" === e ? t : 1) + "," + t + "}"),
            t = n.substring(o).match(t);
          if (!t) throw "Missing number at position " + o;
          return o += t[0].length, parseInt(t[0], 10);
        }, y = function (e, t, i) {
          var s = -1,
            t = G.map(_(e) ? i : t, function (e, t) {
              return [[t, e]];
            }).sort(function (e, t) {
              return -(e[1].length - t[1].length);
            });
          if (G.each(t, function (e, t) {
            var i = t[1];
            if (n.substr(o, i.length).toLowerCase() === i.toLowerCase()) return s = t[0], o += i.length, !1;
          }), -1 !== s) return s + 1;
          throw "Unknown name at position " + o;
        }, k = function () {
          if (n.charAt(o) !== t.charAt(b)) throw "Unexpected literal at position " + o;
          o++;
        }, b = 0; b < t.length; b++) if (g) "'" !== t.charAt(b) || _("'") ? k() : g = !1;else switch (t.charAt(b)) {
        case "d":
          m = v("d");
          break;
        case "D":
          y("D", u, l);
          break;
        case "o":
          f = v("o");
          break;
        case "m":
          p = v("m");
          break;
        case "M":
          p = y("M", h, c);
          break;
        case "y":
          d = v("y");
          break;
        case "@":
          d = (a = new Date(v("@"))).getFullYear(), p = a.getMonth() + 1, m = a.getDate();
          break;
        case "!":
          d = (a = new Date((v("!") - this._ticksTo1970) / 1e4)).getFullYear(), p = a.getMonth() + 1, m = a.getDate();
          break;
        case "'":
          _("'") ? k() : g = !0;
          break;
        default:
          k();
      }
      if (o < n.length && (s = n.substr(o), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
      if (-1 === d ? d = new Date().getFullYear() : d < 100 && (d += new Date().getFullYear() - new Date().getFullYear() % 100 + (d <= r ? 0 : -100)), -1 < f) for (p = 1, m = f;;) {
        if (m <= (i = this._getDaysInMonth(d, p - 1))) break;
        p++, m -= i;
      }
      if ((a = this._daylightSavingAdjust(new Date(d, p - 1, m))).getFullYear() !== d || a.getMonth() + 1 !== p || a.getDate() !== m) throw "Invalid date";
      return a;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function (t, e, i) {
      if (!e) return "";
      function s(e, t, i) {
        var s = "" + t;
        if (h(e)) for (; s.length < i;) s = "0" + s;
        return s;
      }
      function n(e, t, i, s) {
        return (h(e) ? s : i)[t];
      }
      var a,
        o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        r = (i ? i.dayNames : null) || this._defaults.dayNames,
        u = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        l = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          e = a + 1 < t.length && t.charAt(a + 1) === e;
          return e && a++, e;
        },
        c = "",
        d = !1;
      if (e) for (a = 0; a < t.length; a++) if (d) "'" !== t.charAt(a) || h("'") ? c += t.charAt(a) : d = !1;else switch (t.charAt(a)) {
        case "d":
          c += s("d", e.getDate(), 2);
          break;
        case "D":
          c += n("D", e.getDay(), o, r);
          break;
        case "o":
          c += s("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
          break;
        case "m":
          c += s("m", e.getMonth() + 1, 2);
          break;
        case "M":
          c += n("M", e.getMonth(), u, l);
          break;
        case "y":
          c += h("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
          break;
        case "@":
          c += e.getTime();
          break;
        case "!":
          c += 1e4 * e.getTime() + this._ticksTo1970;
          break;
        case "'":
          h("'") ? c += "'" : d = !0;
          break;
        default:
          c += t.charAt(a);
      }
      return c;
    },
    _possibleChars: function (t) {
      for (var e = "", i = !1, s = function (e) {
          e = n + 1 < t.length && t.charAt(n + 1) === e;
          return e && n++, e;
        }, n = 0; n < t.length; n++) if (i) "'" !== t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1;else switch (t.charAt(n)) {
        case "d":
        case "m":
        case "y":
        case "@":
          e += "0123456789";
          break;
        case "D":
        case "M":
          return null;
        case "'":
          s("'") ? e += "'" : i = !0;
          break;
        default:
          e += t.charAt(n);
      }
      return e;
    },
    _get: function (e, t) {
      return (void 0 !== e.settings[t] ? e.settings : this._defaults)[t];
    },
    _setDateFromField: function (e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, "dateFormat"),
          s = e.lastVal = e.input ? e.input.val() : null,
          n = this._getDefaultDate(e),
          a = n,
          o = this._getFormatConfig(e);
        try {
          a = this.parseDate(i, s, o) || n;
        } catch (e) {
          s = t ? "" : s;
        }
        e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e);
      }
    },
    _getDefaultDate: function (e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
    },
    _determineDate: function (r, e, t) {
      var i,
        s,
        e = null == e || "" === e ? t : "string" == typeof e ? function (e) {
          try {
            return G.datepicker.parseDate(G.datepicker._get(r, "dateFormat"), e, G.datepicker._getFormatConfig(r));
          } catch (e) {}
          for (var t = (e.toLowerCase().match(/^c/) ? G.datepicker._getDate(r) : null) || new Date(), i = t.getFullYear(), s = t.getMonth(), n = t.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = a.exec(e); o;) {
            switch (o[2] || "d") {
              case "d":
              case "D":
                n += parseInt(o[1], 10);
                break;
              case "w":
              case "W":
                n += 7 * parseInt(o[1], 10);
                break;
              case "m":
              case "M":
                s += parseInt(o[1], 10), n = Math.min(n, G.datepicker._getDaysInMonth(i, s));
                break;
              case "y":
              case "Y":
                i += parseInt(o[1], 10), n = Math.min(n, G.datepicker._getDaysInMonth(i, s));
            }
            o = a.exec(e);
          }
          return new Date(i, s, n);
        }(e) : "number" == typeof e ? isNaN(e) ? t : (i = e, (s = new Date()).setDate(s.getDate() + i), s) : new Date(e.getTime());
      return (e = e && "Invalid Date" === e.toString() ? t : e) && (e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)), this._daylightSavingAdjust(e);
    },
    _daylightSavingAdjust: function (e) {
      return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null;
    },
    _setDate: function (e, t, i) {
      var s = !t,
        n = e.selectedMonth,
        a = e.selectedYear,
        t = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
      e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e));
    },
    _getDate: function (e) {
      return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
    },
    _attachHandlers: function (e) {
      var t = this._get(e, "stepMonths"),
        i = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function () {
            G.datepicker._adjustDate(i, -t, "M");
          },
          next: function () {
            G.datepicker._adjustDate(i, +t, "M");
          },
          hide: function () {
            G.datepicker._hideDatepicker();
          },
          today: function () {
            G.datepicker._gotoToday(i);
          },
          selectDay: function () {
            return G.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function () {
            return G.datepicker._selectMonthYear(i, this, "M"), !1;
          },
          selectYear: function () {
            return G.datepicker._selectMonthYear(i, this, "Y"), !1;
          }
        };
        G(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function (e) {
      var t,
        i,
        s,
        n,
        a,
        o,
        r,
        u,
        l,
        h,
        c,
        d,
        p,
        m,
        f,
        g,
        _,
        v,
        y,
        k,
        b,
        D,
        w,
        M,
        x,
        C,
        I,
        T,
        S,
        A,
        N,
        E,
        F = new Date(),
        O = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
        Y = this._get(e, "isRTL"),
        W = this._get(e, "showButtonPanel"),
        P = this._get(e, "hideIfNoPrevNext"),
        L = this._get(e, "navigationAsDateFormat"),
        H = this._getNumberOfMonths(e),
        R = this._get(e, "showCurrentAtPos"),
        F = this._get(e, "stepMonths"),
        j = 1 !== H[0] || 1 !== H[1],
        K = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
        U = this._getMinMaxDate(e, "min"),
        q = this._getMinMaxDate(e, "max"),
        z = e.drawMonth - R,
        B = e.drawYear;
      if (z < 0 && (z += 12, B--), q) for (t = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth() - H[0] * H[1] + 1, q.getDate())), t = U && t < U ? U : t; this._daylightSavingAdjust(new Date(B, z, 1)) > t;) --z < 0 && (z = 11, B--);
      for (e.drawMonth = z, e.drawYear = B, R = this._get(e, "prevText"), R = L ? this.formatDate(R, this._daylightSavingAdjust(new Date(B, z - F, 1)), this._getFormatConfig(e)) : R, i = this._canAdjustMonth(e, -1, B, z) ? G("<a>").attr({
        class: "ui-datepicker-prev ui-corner-all",
        "data-handler": "prev",
        "data-event": "click",
        title: R
      }).append(G("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w")).text(R))[0].outerHTML : P ? "" : G("<a>").attr({
        class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
        title: R
      }).append(G("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w")).text(R))[0].outerHTML, R = this._get(e, "nextText"), R = L ? this.formatDate(R, this._daylightSavingAdjust(new Date(B, z + F, 1)), this._getFormatConfig(e)) : R, s = this._canAdjustMonth(e, 1, B, z) ? G("<a>").attr({
        class: "ui-datepicker-next ui-corner-all",
        "data-handler": "next",
        "data-event": "click",
        title: R
      }).append(G("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e")).text(R))[0].outerHTML : P ? "" : G("<a>").attr({
        class: "ui-datepicker-next ui-corner-all ui-state-disabled",
        title: R
      }).append(G("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e")).text(R))[0].outerHTML, F = this._get(e, "currentText"), P = this._get(e, "gotoCurrent") && e.currentDay ? K : O, F = L ? this.formatDate(F, P, this._getFormatConfig(e)) : F, R = "", e.inline || (R = G("<button>").attr({
        type: "button",
        class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
        "data-handler": "hide",
        "data-event": "click"
      }).text(this._get(e, "closeText"))[0].outerHTML), L = "", W && (L = G("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(Y ? R : "").append(this._isInRange(e, P) ? G("<button>").attr({
        type: "button",
        class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
        "data-handler": "today",
        "data-event": "click"
      }).text(F) : "").append(Y ? "" : R)[0].outerHTML), n = parseInt(this._get(e, "firstDay"), 10), n = isNaN(n) ? 0 : n, a = this._get(e, "showWeek"), o = this._get(e, "dayNames"), r = this._get(e, "dayNamesMin"), u = this._get(e, "monthNames"), l = this._get(e, "monthNamesShort"), h = this._get(e, "beforeShowDay"), c = this._get(e, "showOtherMonths"), d = this._get(e, "selectOtherMonths"), p = this._getDefaultDate(e), m = "", g = 0; g < H[0]; g++) {
        for (_ = "", this.maxRows = 4, v = 0; v < H[1]; v++) {
          if (y = this._daylightSavingAdjust(new Date(B, z, e.selectedDay)), k = " ui-corner-all", b = "", j) {
            if (b += "<div class='ui-datepicker-group", 1 < H[1]) switch (v) {
              case 0:
                b += " ui-datepicker-group-first", k = " ui-corner-" + (Y ? "right" : "left");
                break;
              case H[1] - 1:
                b += " ui-datepicker-group-last", k = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                b += " ui-datepicker-group-middle", k = "";
            }
            b += "'>";
          }
          for (b += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + k + "'>" + (/all|left/.test(k) && 0 === g ? Y ? s : i : "") + (/all|right/.test(k) && 0 === g ? Y ? i : s : "") + this._generateMonthYearHeader(e, z, B, U, q, 0 < g || 0 < v, u, l) + "</div><table class='ui-datepicker-calendar'><thead><tr>", D = a ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", f = 0; f < 7; f++) D += "<th scope='col'" + (5 <= (f + n + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + o[w = (f + n) % 7] + "'>" + r[w] + "</span></th>";
          for (b += D + "</tr></thead><tbody>", x = this._getDaysInMonth(B, z), B === e.selectedYear && z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, x)), M = (this._getFirstDayOfMonth(B, z) - n + 7) % 7, x = Math.ceil((M + x) / 7), C = j && this.maxRows > x ? this.maxRows : x, this.maxRows = C, I = this._daylightSavingAdjust(new Date(B, z, 1 - M)), T = 0; T < C; T++) {
            for (b += "<tr>", S = a ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(I) + "</td>" : "", f = 0; f < 7; f++) A = h ? h.apply(e.input ? e.input[0] : null, [I]) : [!0, ""], E = (N = I.getMonth() !== z) && !d || !A[0] || U && I < U || q && q < I, S += "<td class='" + (5 <= (f + n + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (I.getTime() === y.getTime() && z === e.selectedMonth && e._keyEvent || p.getTime() === I.getTime() && p.getTime() === y.getTime() ? " " + this._dayOverClass : "") + (E ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !c ? "" : " " + A[1] + (I.getTime() === K.getTime() ? " " + this._currentClass : "") + (I.getTime() === O.getTime() ? " ui-datepicker-today" : "")) + "'" + (N && !c || !A[2] ? "" : " title='" + A[2].replace(/'/g, "&#39;") + "'") + (E ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (N && !c ? "&#xa0;" : E ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === O.getTime() ? " ui-state-highlight" : "") + (I.getTime() === K.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (I.getTime() === K.getTime() ? "true" : "false") + "' data-date='" + I.getDate() + "'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
            b += S + "</tr>";
          }
          11 < ++z && (z = 0, B++), _ += b += "</tbody></table>" + (j ? "</div>" + (0 < H[0] && v === H[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
        }
        m += _;
      }
      return m += L, e._keyEvent = !1, m;
    },
    _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
      var u,
        l,
        h,
        c,
        d,
        p,
        m = this._get(e, "changeMonth"),
        f = this._get(e, "changeYear"),
        g = this._get(e, "showMonthAfterYear"),
        _ = this._get(e, "selectMonthLabel"),
        v = this._get(e, "selectYearLabel"),
        y = "<div class='ui-datepicker-title'>",
        k = "";
      if (a || !m) k += "<span class='ui-datepicker-month'>" + o[t] + "</span>";else {
        for (u = s && s.getFullYear() === i, l = n && n.getFullYear() === i, k += "<select class='ui-datepicker-month' aria-label='" + _ + "' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++) (!u || h >= s.getMonth()) && (!l || h <= n.getMonth()) && (k += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + r[h] + "</option>");
        k += "</select>";
      }
      if (g || (y += k + (!a && m && f ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !f) y += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (o = this._get(e, "yearRange").split(":"), c = new Date().getFullYear(), d = (_ = function (e) {
          e = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
          return isNaN(e) ? c : e;
        })(o[0]), p = Math.max(d, _(o[1] || "")), d = s ? Math.max(d, s.getFullYear()) : d, p = n ? Math.min(p, n.getFullYear()) : p, e.yearshtml += "<select class='ui-datepicker-year' aria-label='" + v + "' data-handler='selectYear' data-event='change'>"; d <= p; d++) e.yearshtml += "<option value='" + d + "'" + (d === i ? " selected='selected'" : "") + ">" + d + "</option>";
        e.yearshtml += "</select>", y += e.yearshtml, e.yearshtml = null;
      }
      return y += this._get(e, "yearSuffix"), g && (y += (!a && m && f ? "" : "&#xa0;") + k), y += "</div>";
    },
    _adjustInstDate: function (e, t, i) {
      var s = e.selectedYear + ("Y" === i ? t : 0),
        n = e.selectedMonth + ("M" === i ? t : 0),
        t = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
        t = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, t)));
      e.selectedDay = t.getDate(), e.drawMonth = e.selectedMonth = t.getMonth(), e.drawYear = e.selectedYear = t.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(e);
    },
    _restrictMinMax: function (e, t) {
      var i = this._getMinMaxDate(e, "min"),
        e = this._getMinMaxDate(e, "max"),
        t = i && t < i ? i : t;
      return e && e < t ? e : t;
    },
    _notifyChange: function (e) {
      var t = this._get(e, "onChangeMonthYear");
      t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
    },
    _getNumberOfMonths: function (e) {
      e = this._get(e, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function (e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function (e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function (e, t, i, s) {
      var n = this._getNumberOfMonths(e),
        n = this._daylightSavingAdjust(new Date(i, s + (t < 0 ? t : n[0] * n[1]), 1));
      return t < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n);
    },
    _isInRange: function (e, t) {
      var i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        n = null,
        a = null,
        o = this._get(e, "yearRange");
      return o && (e = o.split(":"), o = new Date().getFullYear(), n = parseInt(e[0], 10), a = parseInt(e[1], 10), e[0].match(/[+\-].*/) && (n += o), e[1].match(/[+\-].*/) && (a += o)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!n || t.getFullYear() >= n) && (!a || t.getFullYear() <= a);
    },
    _getFormatConfig: function (e) {
      var t = this._get(e, "shortYearCutoff");
      return {
        shortYearCutoff: t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10),
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      };
    },
    _formatDate: function (e, t, i, s) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      t = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e));
    }
  }), G.fn.datepicker = function (e) {
    if (!this.length) return this;
    G.datepicker.initialized || (G(document).on("mousedown", G.datepicker._checkExternalClick), G.datepicker.initialized = !0), 0 === G("#" + G.datepicker._mainDivId).length && G("body").append(G.datepicker.dpDiv);
    var t = Array.prototype.slice.call(arguments, 1);
    return "string" == typeof e && ("isDisabled" === e || "getDate" === e || "widget" === e) || "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? G.datepicker["_" + e + "Datepicker"].apply(G.datepicker, [this[0]].concat(t)) : this.each(function () {
      "string" == typeof e ? G.datepicker["_" + e + "Datepicker"].apply(G.datepicker, [this].concat(t)) : G.datepicker._attachDatepicker(this, e);
    });
  }, G.datepicker = new f(), G.datepicker.initialized = !1, G.datepicker.uuid = new Date().getTime(), G.datepicker.version = "1.13.2";
  G.datepicker, G.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var y = !1;
  G(document).on("mouseup", function () {
    y = !1;
  });
  G.widget("ui.mouse", {
    version: "1.13.2",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var t = this;
      this.element.on("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).on("click." + this.widgetName, function (e) {
        if (!0 === G.data(e.target, t.widgetName + ".preventClickEvent")) return G.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (e) {
      if (!y) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var t = this,
          i = 1 === e.which,
          s = !("string" != typeof this.options.cancel || !e.target.nodeName) && G(e.target).closest(this.options.cancel).length;
        return i && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          t.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === G.data(e.target, this.widgetName + ".preventClickEvent") && G.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return t._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return t._mouseUp(e);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), y = !0)) : !0;
      }
    },
    _mouseMove: function (e) {
      if (this._mouseMoved) {
        if (G.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }
      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function (e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && G.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, y = !1, e.preventDefault();
    },
    _mouseDistanceMet: function (e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0;
    }
  }), G.widget("ui.selectmenu", [G.ui.formResetMixin, {
    version: "1.13.2",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function () {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = G();
    },
    _drawButton: function () {
      var e,
        t = this,
        i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function (e) {
          this.button.trigger("focus"), e.preventDefault();
        }
      }), this.element.hide(), this.button = G("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = G("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        t._rendered || t._refreshMenu();
      });
    },
    _drawMenu: function () {
      var i = this;
      this.menu = G("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = G("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function (e, t) {
          e.preventDefault(), i._setSelection(), i._select(t.item.data("ui-selectmenu-item"), e);
        },
        focus: function (e, t) {
          t = t.item.data("ui-selectmenu-item");
          null != i.focusIndex && t.index !== i.focusIndex && (i._trigger("focus", e, {
            item: t
          }), i.isOpen || i._select(t, e)), i.focusIndex = t.index, i.button.attr("aria-activedescendant", i.menuItems.eq(t.index).attr("id"));
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    },
    refresh: function () {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    },
    _refreshMenu: function () {
      var e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    },
    open: function (e) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)));
    },
    _position: function () {
      this.menuWrap.position(G.extend({
        of: this.button
      }, this.options.position));
    },
    close: function (e) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e));
    },
    widget: function () {
      return this.button;
    },
    menuWidget: function () {
      return this.menu;
    },
    _renderButtonItem: function (e) {
      var t = G("<span>");
      return this._setText(t, e.label), this._addClass(t, "ui-selectmenu-text"), t;
    },
    _renderMenu: function (s, e) {
      var n = this,
        a = "";
      G.each(e, function (e, t) {
        var i;
        t.optgroup !== a && (i = G("<li>", {
          text: t.optgroup
        }), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (t.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), a = t.optgroup), n._renderItemData(s, t);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-selectmenu-item", t);
    },
    _renderItem: function (e, t) {
      var i = G("<li>"),
        s = G("<div>", {
          title: t.element.attr("title")
        });
      return t.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, t.label), i.append(s).appendTo(e);
    },
    _setText: function (e, t) {
      t ? e.text(t) : e.html("&#160;");
    },
    _move: function (e, t) {
      var i,
        s = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](s).eq(-1) : i[e + "All"](s).eq(0)).length && this.menuInstance.focus(t, s);
    },
    _getSelectedItem: function () {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    },
    _toggle: function (e) {
      this[this.isOpen ? "close" : "open"](e);
    },
    _setSelection: function () {
      var e;
      this.range && (window.getSelection ? ((e = window.getSelection()).removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.trigger("focus"));
    },
    _documentClick: {
      mousedown: function (e) {
        this.isOpen && (G(e.target).closest(".ui-selectmenu-menu, #" + G.escapeSelector(this.ids.button)).length || this.close(e));
      }
    },
    _buttonEvents: {
      mousedown: function () {
        var e;
        window.getSelection ? (e = window.getSelection()).rangeCount && (this.range = e.getRangeAt(0)) : this.range = document.selection.createRange();
      },
      click: function (e) {
        this._setSelection(), this._toggle(e);
      },
      keydown: function (e) {
        var t = !0;
        switch (e.keyCode) {
          case G.ui.keyCode.TAB:
          case G.ui.keyCode.ESCAPE:
            this.close(e), t = !1;
            break;
          case G.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);
            break;
          case G.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);
            break;
          case G.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);
            break;
          case G.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
            break;
          case G.ui.keyCode.LEFT:
            this._move("prev", e);
            break;
          case G.ui.keyCode.RIGHT:
            this._move("next", e);
            break;
          case G.ui.keyCode.HOME:
          case G.ui.keyCode.PAGE_UP:
            this._move("first", e);
            break;
          case G.ui.keyCode.END:
          case G.ui.keyCode.PAGE_DOWN:
            this._move("last", e);
            break;
          default:
            this.menu.trigger(e), t = !1;
        }
        t && e.preventDefault();
      }
    },
    _selectFocusedItem: function (e) {
      var t = this.menuItems.eq(this.focusIndex).parent("li");
      t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e);
    },
    _select: function (e, t) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = e.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(e)), this._setAria(e), this._trigger("select", t, {
        item: e
      }), e.index !== i && this._trigger("change", t, {
        item: e
      }), this.close(t);
    },
    _setAria: function (e) {
      e = this.menuItems.eq(e.index).attr("id");
      this.button.attr({
        "aria-labelledby": e,
        "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e);
    },
    _setOption: function (e, t) {
      var i;
      "icons" === e && (i = this.button.find("span.ui-icon"), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "width" === e && this._resizeButton();
    },
    _setOptionDisabled: function (e) {
      this._super(e), this.menuInstance.option("disabled", e), this.button.attr("aria-disabled", e), this._toggleClass(this.button, null, "ui-state-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    },
    _appendTo: function () {
      var e = this.options.appendTo;
      return e = !(e = !(e = e && (e.jquery || e.nodeType ? G(e) : this.document.find(e).eq(0))) || !e[0] ? this.element.closest(".ui-front, dialog") : e).length ? this.document[0].body : e;
    },
    _toggleAttr: function () {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function () {
      var e = this.options.width;
      !1 !== e ? (null === e && (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)) : this.button.css("width", "");
    },
    _resizeMenu: function () {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    },
    _getCreateOptions: function () {
      var e = this._super();
      return e.disabled = this.element.prop("disabled"), e;
    },
    _parseOptions: function (e) {
      var i = this,
        s = [];
      e.each(function (e, t) {
        t.hidden || s.push(i._parseOption(G(t), e));
      }), this.items = s;
    },
    _parseOption: function (e, t) {
      var i = e.parent("optgroup");
      return {
        element: e,
        index: t,
        value: e.val(),
        label: e.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || e.prop("disabled")
      };
    },
    _destroy: function () {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    }
  }]);
});
; /*
  * MultiDatesPicker v1.6.6
  * https://dubrox.github.io/Multiple-Dates-Picker-for-jQuery-UI
  * 
  * Copyright 2017, Luca Lauretta
  * Dual licensed under the MIT or GPL version 2 licenses.
  */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "jquery-ui-dist"], factory);
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.extend($.ui, {
    multiDatesPicker: {
      version: "1.6.6"
    }
  });
  $.fn.multiDatesPicker = function (method) {
    var mdp_arguments = arguments;
    var ret = this;
    var today_date = new Date();
    var day_zero = new Date(0);
    var mdp_events = {};
    function removeDate(date, type) {
      if (!type) type = 'picked';
      date = dateConvert.call(this, date);
      for (var i = 0; i < this.multiDatesPicker.dates[type].length; i++) if (!methods.compareDates(this.multiDatesPicker.dates[type][i], date)) return this.multiDatesPicker.dates[type].splice(i, 1).pop();
    }
    function removeIndex(index, type) {
      if (!type) type = 'picked';
      return this.multiDatesPicker.dates[type].splice(index, 1).pop();
    }
    function addDate(date, type, no_sort) {
      if (!type) type = 'picked';
      date = dateConvert.call(this, date);

      // @todo: use jQuery UI datepicker method instead
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      if (methods.gotDate.call(this, date, type) === false) {
        this.multiDatesPicker.dates[type].push(date);
        if (!no_sort) this.multiDatesPicker.dates[type].sort(methods.compareDates);
      }
    }
    function sortDates(type) {
      if (!type) type = 'picked';
      this.multiDatesPicker.dates[type].sort(methods.compareDates);
    }
    function dateConvert(date, desired_type, date_format) {
      if (!desired_type) desired_type = 'object'; /*
                                                  if(!date_format && (typeof date == 'string')) {
                                                  date_format = $(this).datepicker('option', 'dateFormat');
                                                  if(!date_format) date_format = $.datepicker._defaults.dateFormat;
                                                  }
                                                  */
      return methods.dateConvert.call(this, date, desired_type, date_format);
    }
    var methods = {
      init: function (options) {
        var $this = $(this);
        this.multiDatesPicker.changed = false;
        var mdp_events = {
          beforeShow: function (input, inst) {
            this.multiDatesPicker.changed = false;
            if (this.multiDatesPicker.originalBeforeShow) this.multiDatesPicker.originalBeforeShow.call(this, input, inst);
          },
          onSelect: function (dateText, inst) {
            var $this = $(this);
            this.multiDatesPicker.changed = true;
            if (dateText) {
              $this.multiDatesPicker('toggleDate', dateText);
              this.multiDatesPicker.changed = true;
              // @todo: this will be optimized when I'll move methods to the singleton.
            }

            if (this.multiDatesPicker.mode == 'normal' && this.multiDatesPicker.pickableRange) {
              if (this.multiDatesPicker.dates.picked.length > 0) {
                var min_date = this.multiDatesPicker.dates.picked[0],
                  max_date = new Date(min_date.getTime());
                methods.sumDays(max_date, this.multiDatesPicker.pickableRange - 1);

                // counts the number of disabled dates in the range
                if (this.multiDatesPicker.adjustRangeToDisabled) {
                  var c_disabled,
                    disabled = this.multiDatesPicker.dates.disabled.slice(0);
                  do {
                    c_disabled = 0;
                    for (var i = 0; i < disabled.length; i++) {
                      if (disabled[i].getTime() <= max_date.getTime()) {
                        if (min_date.getTime() <= disabled[i].getTime() && disabled[i].getTime() <= max_date.getTime()) {
                          c_disabled++;
                        }
                        disabled.splice(i, 1);
                        i--;
                      }
                    }
                    max_date.setDate(max_date.getDate() + c_disabled);
                  } while (c_disabled != 0);
                }
                if (this.multiDatesPicker.maxDate && max_date > this.multiDatesPicker.maxDate) max_date = this.multiDatesPicker.maxDate;
                $this.datepicker("option", "minDate", min_date).datepicker("option", "maxDate", max_date);
              } else {
                $this.datepicker("option", "minDate", this.multiDatesPicker.minDate).datepicker("option", "maxDate", this.multiDatesPicker.maxDate);
              }
            }
            if (this.multiDatesPicker.originalOnSelect && dateText) this.multiDatesPicker.originalOnSelect.call(this, dateText, inst);
          },
          beforeShowDay: function (date) {
            var $this = $(this),
              gotThisDate = $this.multiDatesPicker('gotDate', date) !== false,
              isDisabledCalendar = $this.datepicker('option', 'disabled'),
              isDisabledDate = $this.multiDatesPicker('gotDate', date, 'disabled') !== false,
              areAllSelected = this.multiDatesPicker.maxPicks <= this.multiDatesPicker.dates.picked.length;
            var bsdReturn = [true, '', null];
            if (this.multiDatesPicker.originalBeforeShowDay) bsdReturn = this.multiDatesPicker.originalBeforeShowDay.call(this, date);
            bsdReturn[1] = gotThisDate ? 'ui-state-highlight ' + bsdReturn[1] : bsdReturn[1];
            bsdReturn[0] = bsdReturn[0] && !(isDisabledCalendar || isDisabledDate || areAllSelected && !bsdReturn[1]);
            return bsdReturn;
          }
        };

        // value have to be extracted before datepicker is initiated
        if ($this.val()) var inputDates = $this.val();
        if (options) {
          // value have to be extracted before datepicker is initiated
          //if(options.altField) var inputDates = $(options.altField).val();
          if (options.separator) this.multiDatesPicker.separator = options.separator;
          if (!this.multiDatesPicker.separator) this.multiDatesPicker.separator = ', ';
          this.multiDatesPicker.originalBeforeShow = options.beforeShow;
          this.multiDatesPicker.originalOnSelect = options.onSelect;
          this.multiDatesPicker.originalBeforeShowDay = options.beforeShowDay;
          this.multiDatesPicker.originalOnClose = options.onClose;

          // datepicker init
          $this.datepicker(options);
          this.multiDatesPicker.minDate = $.datepicker._determineDate(this, options.minDate, null);
          this.multiDatesPicker.maxDate = $.datepicker._determineDate(this, options.maxDate, null);
          if (options.addDates) methods.addDates.call(this, options.addDates);
          if (options.addDisabledDates) methods.addDates.call(this, options.addDisabledDates, 'disabled');
          methods.setMode.call(this, options);
        } else {
          $this.datepicker();
        }
        $this.datepicker('option', mdp_events);

        // adds any dates found in the input or alt field
        if (inputDates) $this.multiDatesPicker('value', inputDates);

        // generates the new string of added dates
        var inputs_values = $this.multiDatesPicker('value');

        // fills the input field back with all the dates in the calendar
        $this.val(inputs_values);

        // Fixes the altField filled with defaultDate by default
        var altFieldOption = $this.datepicker('option', 'altField');
        if (altFieldOption) $(altFieldOption).val(inputs_values);

        // Updates the calendar view
        $this.datepicker('refresh');
      },
      compareDates: function (date1, date2) {
        date1 = dateConvert.call(this, date1);
        date2 = dateConvert.call(this, date2);
        // return > 0 means date1 is later than date2 
        // return == 0 means date1 is the same day as date2 
        // return < 0 means date1 is earlier than date2 
        var diff = date1.getFullYear() - date2.getFullYear();
        if (!diff) {
          diff = date1.getMonth() - date2.getMonth();
          if (!diff) diff = date1.getDate() - date2.getDate();
        }
        return diff;
      },
      sumDays: function (date, n_days) {
        var origDateType = typeof date;
        obj_date = dateConvert.call(this, date);
        obj_date.setDate(obj_date.getDate() + n_days);
        return dateConvert.call(this, obj_date, origDateType);
      },
      dateConvert: function (date, desired_format, dateFormat) {
        var from_format = typeof date;
        var $this = $(this);
        if (from_format == desired_format) {
          if (from_format == 'object') {
            try {
              date.getTime();
            } catch (e) {
              $.error('Received date is in a non supported format!');
              return false;
            }
          }
          return date;
        }
        if (typeof date == 'undefined') date = new Date(0);
        if (desired_format != 'string' && desired_format != 'object' && desired_format != 'number') $.error('Date format "' + desired_format + '" not supported!');
        if (!dateFormat) {
          // thanks to bibendus83 -> http://sourceforge.net/tracker/index.php?func=detail&aid=3213174&group_id=358205&atid=1495382
          var dp_dateFormat = $this.datepicker('option', 'dateFormat');
          if (dp_dateFormat) {
            dateFormat = dp_dateFormat;
          } else {
            dateFormat = $.datepicker._defaults.dateFormat;
          }
        }

        // converts to object as a neutral format
        switch (from_format) {
          case 'object':
            break;
          case 'string':
            date = $.datepicker.parseDate(dateFormat, date);
            break;
          case 'number':
            date = new Date(date);
            break;
          default:
            $.error('Conversion from "' + from_format + '" format not allowed on jQuery.multiDatesPicker');
        }
        // then converts to the desired format
        switch (desired_format) {
          case 'object':
            return date;
          case 'string':
            return $.datepicker.formatDate(dateFormat, date);
          case 'number':
            return date.getTime();
          default:
            $.error('Conversion to "' + desired_format + '" format not allowed on jQuery.multiDatesPicker');
        }
        return false;
      },
      gotDate: function (date, type) {
        if (!type) type = 'picked';
        for (var i = 0; i < this.multiDatesPicker.dates[type].length; i++) {
          if (methods.compareDates.call(this, this.multiDatesPicker.dates[type][i], date) === 0) {
            return i;
          }
        }
        return false;
      },
      value: function (value) {
        if (value && typeof value == 'string') {
          methods.addDates.call(this, value.split(this.multiDatesPicker.separator));
        } else {
          var dates = methods.getDates.call(this, 'string');
          return dates.length ? dates.join(this.multiDatesPicker.separator) : "";
        }
      },
      getDates: function (format, type) {
        if (!format) format = 'string';
        if (!type) type = 'picked';
        switch (format) {
          case 'object':
            return this.multiDatesPicker.dates[type];
          case 'string':
          case 'number':
            var o_dates = [];
            for (var i = 0; i < this.multiDatesPicker.dates[type].length; i++) o_dates.push(dateConvert.call(this, this.multiDatesPicker.dates[type][i], format));
            return o_dates;
          default:
            $.error('Format "' + format + '" not supported!');
        }
      },
      addDates: function (dates, type) {
        if (dates.length > 0) {
          if (!type) type = 'picked';
          switch (typeof dates) {
            case 'object':
            case 'array':
              if (dates.length) {
                for (var i = 0; i < dates.length; i++) addDate.call(this, dates[i], type, true);
                sortDates.call(this, type);
                break;
              }
            // else does the same as 'string'
            case 'string':
            case 'number':
              addDate.call(this, dates, type);
              break;
            default:
              $.error('Date format "' + typeof dates + '" not allowed on jQuery.multiDatesPicker');
          }
          //$(this).datepicker('refresh');
        } else {
          $.error('Empty array of dates received.');
        }
      },
      removeDates: function (dates, type) {
        if (!type) type = 'picked';
        var removed = [];
        if (Object.prototype.toString.call(dates) === '[object Array]') {
          dates.sort(function (a, b) {
            return b - a;
          });
          for (var i = 0; i < dates.length; i++) {
            removed.push(removeDate.call(this, dates[i], type));
          }
        } else {
          removed.push(removeDate.call(this, dates, type));
        }
        return removed;
      },
      removeIndexes: function (indexes, type) {
        if (!type) type = 'picked';
        var removed = [];
        if (Object.prototype.toString.call(indexes) === '[object Array]') {
          indexes.sort(function (a, b) {
            return b - a;
          });
          for (var i = 0; i < indexes.length; i++) {
            removed.push(removeIndex.call(this, indexes[i], type));
          }
        } else {
          removed.push(removeIndex.call(this, indexes, type));
        }
        return removed;
      },
      resetDates: function (type) {
        if (!type) type = 'picked';
        this.multiDatesPicker.dates[type] = [];
      },
      toggleDate: function (date, type) {
        if (!type) type = 'picked';
        switch (this.multiDatesPicker.mode) {
          case 'daysRange':
            this.multiDatesPicker.dates[type] = []; // deletes all picked/disabled dates
            var end = this.multiDatesPicker.autoselectRange[1];
            var begin = this.multiDatesPicker.autoselectRange[0];
            if (end < begin) {
              // switch
              end = this.multiDatesPicker.autoselectRange[0];
              begin = this.multiDatesPicker.autoselectRange[1];
            }
            for (var i = begin; i < end; i++) methods.addDates.call(this, methods.sumDays.call(this, date, i), type);
            break;
          default:
            if (methods.gotDate.call(this, date) === false)
              // adds dates
              methods.addDates.call(this, date, type);else
              // removes dates
              methods.removeDates.call(this, date, type);
            break;
        }
      },
      setMode: function (options) {
        var $this = $(this);
        if (options.mode) this.multiDatesPicker.mode = options.mode;
        switch (this.multiDatesPicker.mode) {
          case 'normal':
            for (var option in options) switch (option) {
              case 'maxPicks':
              case 'minPicks':
              case 'pickableRange':
              case 'adjustRangeToDisabled':
                this.multiDatesPicker[option] = options[option];
                break;
              //default: $.error('Option ' + option + ' ignored for mode "'.options.mode.'".');
            }

            break;
          case 'daysRange':
          case 'weeksRange':
            var mandatory = 1;
            for (option in options) switch (option) {
              case 'autoselectRange':
                mandatory--;
              case 'pickableRange':
              case 'adjustRangeToDisabled':
                this.multiDatesPicker[option] = options[option];
                break;
              //default: $.error('Option ' + option + ' does not exist for setMode on jQuery.multiDatesPicker');
            }

            if (mandatory > 0) $.error('Some mandatory options not specified!');
            break;
        }

        /*
        if(options.pickableRange) {
        	$this.datepicker("option", "maxDate", options.pickableRange);
        	$this.datepicker("option", "minDate", this.multiDatesPicker.minDate);
        }
        */

        if (mdp_events.onSelect) mdp_events.onSelect();
      },
      destroy: function () {
        this.multiDatesPicker = null;
        $(this).datepicker('destroy');
      }
    };
    this.each(function () {
      var $this = $(this);
      if (!this.multiDatesPicker) {
        this.multiDatesPicker = {
          dates: {
            picked: [],
            disabled: []
          },
          mode: 'normal',
          adjustRangeToDisabled: true
        };
      }
      if (methods[method]) {
        var exec_result = methods[method].apply(this, Array.prototype.slice.call(mdp_arguments, 1));
        switch (method) {
          case 'removeDates':
          case 'removeIndexes':
          case 'resetDates':
          case 'toggleDate':
          case 'addDates':
            var altField = $this.datepicker('option', 'altField');
            // @todo: should use altFormat for altField
            var dates_string = methods.value.call(this);
            if (altField !== undefined && altField != "") {
              $(altField).val(dates_string);
            }
            $this.val(dates_string);
            $.datepicker._refreshDatepicker(this);
        }
        switch (method) {
          case 'removeDates':
          case 'getDates':
          case 'gotDate':
          case 'sumDays':
          case 'compareDates':
          case 'dateConvert':
          case 'value':
            ret = exec_result;
        }
        return exec_result;
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, mdp_arguments);
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.multiDatesPicker');
      }
      return false;
    });
    return ret;
  };
  var PROP_NAME = 'multiDatesPicker';
  var dpuuid = new Date().getTime();
  var instActive;
  $.multiDatesPicker = {
    version: false
  };
  //$.multiDatesPicker = new MultiDatesPicker(); // singleton instance
  $.multiDatesPicker.initialized = false;
  $.multiDatesPicker.uuid = new Date().getTime();
  $.multiDatesPicker.version = $.ui.multiDatesPicker.version;

  // allows MDP not to hide everytime a date is picked
  $.multiDatesPicker._hideDatepicker = $.datepicker._hideDatepicker;
  $.datepicker._hideDatepicker = function () {
    var target = this._curInst.input[0];
    var mdp = target.multiDatesPicker;
    if (!mdp || this._curInst.inline === false && !mdp.changed) {
      return $.multiDatesPicker._hideDatepicker.apply(this, arguments);
    } else {
      mdp.changed = false;
      $.datepicker._refreshDatepicker(target);
      return;
    }
  };

  // Workaround for #4055
  // Add another global to avoid noConflict issues with inline event handlers
  window['DP_jQuery_' + dpuuid] = $;
});
; // ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
  }
  if (t.console = t.console || {
    info: function (t) {}
  }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
          preload: !1
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0
            }
          }
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto"
          }
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1
        },
        touch: {
          vertical: !0,
          momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 3e3
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom"
          },
          de: {
            CLOSE: "Schlie&szlig;en",
            NEXT: "Weiter",
            PREV: "Zur&uuml;ck",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Vergr&ouml;&szlig;ern"
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 1e3 / 60);
        };
      }(),
      u = function () {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
          t.clearTimeout(e);
        };
      }(),
      f = function () {
        var t,
          n = e.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (t in o) if (void 0 !== n.style[t]) return o[t];
        return "transitionend";
      }(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return n.each(e, function (t, e) {
          n.isArray(e) && (o[t] = e);
        }), o;
      },
      g = function (t) {
        var o, i;
        return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
          x: t.getBoundingClientRect().left + t.offsetWidth / 2,
          y: t.getBoundingClientRect().top + t.offsetHeight / 2
        }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i);
      },
      b = function (t, e, o) {
        var i = this;
        i.opts = h({
          index: o
        }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init();
      };
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || "";
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
          container: o
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t);
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {};
          n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
            type: "html",
            src: e + ""
          }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
            contentType: "pdf",
            opts: {
              iframe: {
                preload: !1
              }
            }
          })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), o.group.push(l);
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function () {
        var e = this;
        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
            i = o.current,
            a = t.keyCode || t.which;
          if (9 == a) return void (i.opts.trapFocus && e.focus(t));
          if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length;
        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
          if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
          c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });
            var i = o.pos * c.width + o.pos * o.opts.gutter;
            n.fancybox.setTranslate(o.$slide, {
              top: 0,
              left: i - l.left + u
            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
              top: 0,
              left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
            }, e, function () {
              o.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
            });
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t];
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height;
        l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
          top: s,
          left: a,
          scaleX: r,
          scaleY: c
        }, o || 366, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 366, function () {
          o.isAnimating = !1;
        }));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
      },
      update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide;
        !e.isClosing && o && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, void 0 === t ? 0 : t, function () {
          i.css({
            transform: "",
            opacity: ""
          }), o.isComplete || e.complete();
        }, !1));
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current;
        return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container;
        s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
        }
        return !1;
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content;
        return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i;
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1;
        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
          width: t,
          height: e
        } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s;
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
          switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function (e, n) {
                  "success" === n && a.setContent(t, e);
                },
                error: function (e, n) {
                  e && "abort" !== n && a.setError(t);
                }
              })), o.one("onReset", function () {
                i.abort();
              });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var o,
          i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          i.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t);
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              if (0 === n) return e.url = t;
              o && (e.value = o, e.postfix = t[t.length - 1]);
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement("img"),
          a = n(i);
        t.$image = a.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide;
        t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
        }), a.on("refresh.fb", function () {
          var n,
            o,
            s = t.$content,
            r = i.css.width,
            c = i.css.height;
          if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body");
            } catch (t) {}
            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}
          n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      },
      setError: function (t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1;
        s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current;
        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed;
        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete();
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({
            transform: "",
            opacity: ""
          }), t.pos === s.currPos && s.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb;
        return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
          top: e.top + o,
          left: e.left + s,
          width: e.width - i - s,
          height: e.height - o - a,
          scaleX: 1,
          scaleY: 1
        }, e.width > 0 && e.height > 0 && r);
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {};
        !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function (t) {
        var e,
          n,
          o = this;
        o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t);
          };
        return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)));
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
        "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      },
      hideControls: function (t) {
        var e = this,
          n = ["infobar", "toolbar", "nav"];
        !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      }
    }), n.fancybox = {
      version: "3.5.7",
      defaults: a,
      getInstance: function (t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          o = Array.prototype.slice.call(arguments, 1);
        return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      },
      open: function (t, e, n) {
        return new b(t, e, n);
      },
      close: function (t) {
        var e = this.getInstance();
        e && (e.close(), !0 === t && this.close(t));
      },
      destroy: function () {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(),
      getTranslate: function (t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        });
      },
      setTranslate: function (t, e) {
        var n = "",
          o = {};
        if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o);
      },
      animate: function (t, e, o, i, a) {
        var s,
          r = this;
        n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
            top: e.top,
            left: e.left,
            width: s.width * e.scaleX,
            height: s.height * e.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, o + 33));
      },
      stop: function (t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
        $trigger: n(this)
      });
    }), function () {
      var t = null;
      r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {
          case "mousedown":
            t = n(this);
            break;
          case "mouseup":
            t = null;
            break;
          case "focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
            break;
          case "focusout":
            n(".fancybox-button").removeClass("fancybox-focus");
        }
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";

  var e = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "https://www.youtube-nocookie.com/embed/$4",
        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
      },
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
        }
      },
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
        }
      }
    },
    n = function (e, n, o) {
      if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
        e = e.replace("$" + t, n || "");
      }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
    };
  t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
      r,
      c,
      l,
      d,
      u,
      f,
      p = a.src || "",
      h = !1;
    s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }
        return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType);
  });
  var o = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function (t) {
      var e,
        n = this;
      if (this[t].loaded) return void setTimeout(function () {
        n.done(t);
      });
      this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e));
    },
    done: function (e) {
      var n, o, i;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function (t) {
            0 == t.data && n.next();
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next();
      })));
    }
  };
  t(document).on({
    "afterShow.fb": function (t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    }
  });
}(jQuery), function (t, e, n) {
  "use strict";

  var o = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
    i = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
    a = function (e) {
      var n = [];
      e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
      for (var o in e) e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
      return n;
    },
    s = function (t, e, n) {
      return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    },
    r = function (t) {
      if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
      for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
      return !1;
    },
    c = function (e) {
      var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
      return i || a;
    },
    l = function (t) {
      for (var e = !1;;) {
        if (e = c(t.get(0))) break;
        if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
      }
      return e;
    },
    d = function (t) {
      var e = this;
      e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
    };
  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
      c = n(o.target),
      d = i.instance,
      u = d.current,
      f = u.$slide,
      p = u.$content,
      h = "touchstart" == o.type;
    if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
        top: 0,
        left: 0
      }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
      s = this,
      r = s.instance,
      c = s.isSwiping,
      l = s.sliderStartPos.left || 0;
    if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - i.top,
          left: o.left - i.left
        });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;
    if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
    t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    });
  }, d.prototype.limitMovement = function () {
    var t,
      e,
      n,
      o,
      i,
      a,
      s = this,
      r = s.canvasWidth,
      c = s.canvasHeight,
      l = s.distanceX,
      d = s.distanceY,
      u = s.contentStartPos,
      f = u.left,
      p = u.top,
      h = u.width,
      g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
      a = i.canvasWidth,
      s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    };
  }, d.prototype.onZoom = function () {
    var e = this,
      a = e.contentStartPos,
      r = a.width,
      c = a.height,
      l = a.left,
      d = a.top,
      u = s(e.newPoints[0], e.newPoints[1]),
      f = u / e.startDistanceBetweenFingers,
      p = Math.floor(r * f),
      h = Math.floor(c * f),
      g = (r - p) * e.percentageOfImageAtPinchPointX,
      b = (c - h) * e.percentageOfImageAtPinchPointY,
      m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
      v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
      y = m - e.centerPointStartX,
      x = v - e.centerPointStartY,
      w = l + (g + y),
      $ = d + (b + x),
      S = {
        top: $,
        left: w,
        scaleX: f,
        scaleY: f
      };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
      s = o.isSwiping,
      r = o.isPanning,
      c = o.isZooming,
      l = o.isScrolling;
    if (o.endPoints = a(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
    o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
      i = !1,
      a = o.instance.group.length,
      s = Math.abs(o.distanceX),
      r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
      e,
      o,
      i = this;
    i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
  }, d.prototype.endZooming = function () {
    var t,
      e,
      o,
      i,
      a = this,
      s = a.instance.current,
      r = a.newWidth,
      c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
      i = this,
      s = n(e.target),
      r = i.instance,
      c = r.current,
      l = e && a(e) || i.startPoints,
      d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
      u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
      f = function (t) {
        var o = c.opts[t];
        if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
          case "close":
            r.close(i.startEvent);
            break;
          case "toggleControls":
            r.toggleControls();
            break;
          case "next":
            r.next();
            break;
          case "nextOrClose":
            r.group.length > 1 ? r.next() : r.close(i.startEvent);
            break;
          case "zoom":
            "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));
        }
      };
    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content";
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);
      return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  });
  var n = function (t) {
    this.instance = t, this.init();
  };
  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function () {
      var t = this,
        n = t.instance,
        o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    },
    set: function (t) {
      var n = this,
        o = n.instance,
        i = o.current;
      i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
        scaleX: 1
      }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    },
    clear: function () {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    },
    start: function () {
      var t = this,
        e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    },
    stop: function () {
      var t = this,
        e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    },
    toggle: function () {
      var t = this;
      t.isActive ? t.stop() : t.start();
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    },
    "afterShow.fb": function (t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set();
    },
    "afterKeydown.fb": function (n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function (t, e) {
      var n = e && e.SlideShow;
      n && n.stop();
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
      o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];
      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
        return n;
      }
    }
    return !1;
  }();
  if (n) {
    var o = {
      request: function (e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        t[n.exitFullscreen]();
      },
      toggle: function (e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled]);
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
        n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }
  e(t).on({
    "onInit.fb": function (t, e) {
      var i;
      if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    },
    "beforeClose.fb": function (t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = "fancybox-thumbs";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);
  var o = function (t) {
    this.init(t);
  };
  e.extend(o.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function (t) {
      var e = this,
        n = t.group,
        o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
      for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++);
      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    },
    create: function () {
      var t,
        o = this,
        i = o.instance,
        a = o.opts.parentEl,
        s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
    },
    focus: function (t) {
      var e,
        n,
        o = this,
        i = o.$list,
        a = o.$grid;
      o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, t));
    },
    update: function () {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    },
    hide: function () {
      this.isVisible = !1, this.update();
    },
    show: function () {
      this.isVisible = !0, this.update();
    },
    toggle: function () {
      this.isVisible = !this.isVisible, this.update();
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      var n;
      e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250);
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    },
    "beforeClose.fb": function (t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function (t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
      o,
      i = e.fancybox.getInstance(),
      a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function (t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        },
        mobile: {
          autoFocus: !1
        }
      }
    }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1),
      n = e.split("-"),
      o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
      i = n.join("-");
    return {
      hash: e,
      index: o < 1 ? 1 : o,
      gallery: i
    };
  }
  function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }
  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
  }
  n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    });
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({
      "onInit.fb": function (t, e) {
        var n, i;
        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      },
      "beforeShow.fb": function (n, o, i, s) {
        var r;
        i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300)));
      },
      "beforeClose.fb": function (n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(),
        e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");
        if (i && i.currentHash) return e = i, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  var n = new Date().getTime();
  e(t).on({
    "onInit.fb": function (t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
          i = new Date().getTime();
        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, jQuery);
; /* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";

  function t(t, s) {
    this.element = t, this.options = e.extend({}, l, s);
    var i = this.options.locale;
    void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init();
  }
  function s(t) {
    if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
      var s = e("div.jq-selectbox.opened"),
        l = e("div.jq-selectbox__search input", s),
        o = e("div.jq-selectbox__dropdown", s);
      s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown");
    }
  }
  var i = "styler",
    l = {
      idSuffix: "-styler",
      filePlaceholder: "Файл не выбран",
      fileBrowse: "Обзор...",
      fileNumber: "Выбрано файлов: %s",
      selectPlaceholder: "Выберите...",
      selectSearch: !1,
      selectSearchLimit: 10,
      selectSearchNotFound: "Совпадений не найдено",
      selectSearchPlaceholder: "Поиск...",
      selectVisibleOptions: 0,
      selectSmartPositioning: !0,
      locale: "ru",
      locales: {
        en: {
          filePlaceholder: "No file selected",
          fileBrowse: "Browse...",
          fileNumber: "Selected files: %s",
          selectPlaceholder: "Select...",
          selectSearchNotFound: "No matches found",
          selectSearchPlaceholder: "Search..."
        }
      },
      onSelectOpened: function () {},
      onSelectClosed: function () {},
      onFormStyled: function () {}
    };
  t.prototype = {
    init: function () {
      function t() {
        void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data();
      }
      var i = e(this.element),
        l = this.options,
        o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
        a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
      if (i.is(":checkbox")) {
        var d = function () {
          var s = new t(),
            l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
              id: s.id,
              title: s.title
            }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
            e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change());
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked");
          }).on("keydown.styler", function (e) {
            32 == e.which && l.click();
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };
        d(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d();
        });
      } else if (i.is(":radio")) {
        var r = function () {
          var s = new t(),
            l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
              id: s.id,
              title: s.title
            }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
            var t = this;
            return t.first().parents().filter(function () {
              return e(this).find(t).length === t.length;
            });
          }, e.fn.commonParent = function () {
            return e(this).commonParents().first();
          }, l.click(function (t) {
            if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
              var s = e('input[name="' + i.attr("name") + '"]');
              s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change();
            }
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.parent().addClass("checked");
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };
        r(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r();
        });
      } else if (i.is(":file")) {
        var c = function () {
          var s = new t(),
            o = i.data("placeholder");
          void 0 === o && (o = l.filePlaceholder);
          var a = i.data("browse");
          void 0 !== a && "" !== a || (a = l.fileBrowse);
          var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
          var r = i.val(),
            c = e("div.jq-file__name", d);
          r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function () {
            var e = i.val();
            if (i.is("[multiple]")) {
              e = "";
              var t = i[0].files.length;
              if (t > 0) {
                var s = i.data("number");
                void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s;
              }
            }
            c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed");
          }).on("focus.styler", function () {
            d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          }).on("click.styler", function () {
            d.removeClass("focused");
          });
        };
        c(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), c();
        });
      } else if (i.is('input[type="number"]')) {
        var n = function () {
          var s = new t(),
            l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
              id: s.id,
              title: s.title
            }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
          var o,
            a,
            d,
            r = null,
            c = null;
          void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
          var n = function (t) {
            var s,
              l = i.val();
            e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
            var r = (d.toString().split(".")[1] || []).length;
            if (r > 0) {
              for (var c = "1"; c.length <= r;) c += "0";
              s = Math.round(s * c) / c;
            }
            e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s);
          };
          l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
            var t = e(this);
            n(t), r = setTimeout(function () {
              c = setInterval(function () {
                n(t);
              }, 40);
            }, 350);
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(r), clearInterval(c);
          }).on("mouseup", "div.jq-number__spin", function () {
            i.change().trigger("input");
          }), i.on("focus.styler", function () {
            l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          }));
        };
        n(), i.on("refresh", function () {
          i.off(".styler").closest(".jq-number").before(i).remove(), n();
        });
      } else if (i.is("select")) {
        var f = function () {
          function d(e) {
            var t = e.prop("scrollHeight") - e.outerHeight(),
              s = null,
              i = null;
            e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (l) {
              s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault());
            });
          }
          function r() {
            for (var e = 0; e < c.length; e++) {
              var t = c.eq(e),
                s = "",
                i = "",
                o = "",
                a = "",
                d = "",
                r = "",
                f = "",
                h = "",
                u = "";
              t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
              var p = t.data();
              for (var v in p) "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
              i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s;
            }
          }
          var c = e("option", i),
            n = "";
          if (i.is("[multiple]")) {
            if (a || o) return;
            !function () {
              var s = new t(),
                l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                  id: s.id,
                  title: s.title
                }).addClass(s.classes).data(s.data);
              i.after(l), r(), l.append("<ul>" + n + "</ul>");
              var o = e("ul", l),
                a = e("li", l),
                f = i.attr("size"),
                h = o.outerHeight(),
                u = a.outerHeight();
              void 0 !== f && f > 0 ? o.css({
                height: u * f
              }) : o.css({
                height: 4 * u
              }), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function () {
                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected");
              })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                i.focus();
                var s = e(this);
                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                  var l = !1,
                    o = !1;
                  s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                    e(this).is(".first") && (l = !0);
                  }), s.nextAll().each(function () {
                    e(this).is(".first") && (o = !0);
                  }), l && s.prevAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), o && s.nextAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), 1 == a.filter(".selected").length && s.addClass("first");
                }
                c.prop("selected", !1), a.filter(".selected").each(function () {
                  var t = e(this),
                    s = t.index();
                  t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0);
                }), i.change();
              }), c.each(function (t) {
                e(this).data("optionIndex", t);
              }), i.on("change.styler", function () {
                a.removeClass("selected");
                var t = [];
                c.filter(":selected").each(function () {
                  t.push(e(this).data("optionIndex"));
                }), a.not(".optgroup").filter(function (s) {
                  return e.inArray(s, t) > -1;
                }).addClass("selected");
              }).on("focus.styler", function () {
                l.addClass("focused");
              }).on("blur.styler", function () {
                l.removeClass("focused");
              }), h > l.height() && i.on("keydown.styler", function (e) {
                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u);
              }));
            }();
          } else !function () {
            var a = new t(),
              f = "",
              h = i.data("placeholder"),
              u = i.data("search"),
              p = i.data("search-limit"),
              v = i.data("search-not-found"),
              m = i.data("search-placeholder"),
              g = i.data("smart-positioning");
            void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
            var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
              id: a.id,
              title: a.title
            }).addClass(a.classes).data(a.data);
            i.after(b).prependTo(b);
            var C = b.css("z-index");
            C = C > 0 ? C : 1;
            var x = e("div.jq-selectbox__select", b),
              y = e("div.jq-selectbox__select-text", b),
              w = c.filter(":selected");
            r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
            var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
            b.append(q);
            var _ = e("ul", q),
              j = e("li", q),
              k = e("input", q),
              S = e("div.jq-selectbox__not-found", q).hide();
            j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
            var T = 0,
              N = 0;
            if (j.css({
              display: "inline-block"
            }), j.each(function () {
              var t = e(this);
              t.innerWidth() > T && (T = t.innerWidth(), N = t.width());
            }), j.css({
              display: ""
            }), y.is(".placeholder") && y.width() > T) y.width(y.width());else {
              var P = b.clone().appendTo("body").width("auto"),
                H = P.outerWidth();
              P.remove(), H == b.outerWidth() && y.width(N);
            }
            T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();
            var A = b.outerHeight(!0),
              D = k.parent().outerHeight(!0) || 0,
              I = _.css("max-height"),
              K = j.filter(".selected");
            if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
              var O = j.outerHeight();
              !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O);
            }
            var M = q.css("top");
            if ("auto" == q.css("left") && q.css({
              left: 0
            }), "auto" == q.css("top") && (q.css({
              top: A
            }), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
            x.click(function () {
              if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                var t = e(window),
                  s = j.data("li-height"),
                  a = b.offset().top,
                  r = t.height() - A - (a - t.scrollTop()),
                  n = i.data("visible-options");
                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                var f = 5 * s,
                  h = s * n;
                n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");
                var u = function () {
                  q.height("auto").css({
                    bottom: "auto",
                    top: M
                  });
                  var e = function () {
                    _.css("max-height", Math.floor((r - 20 - D) / s) * s);
                  };
                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e();
                };
                !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function () {
                  q.height("auto").css({
                    top: "auto",
                    bottom: M
                  });
                  var e = function () {
                    _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s);
                  };
                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e();
                }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                  bottom: "auto",
                  top: M
                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                  left: "auto",
                  right: 0
                }), e("div.jqselect").css({
                  zIndex: C - 1
                }).removeClass("opened"), b.css({
                  zIndex: C
                }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                  var t = e(this).val();
                  j.each(function () {
                    e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide();
                  }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide();
                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_);
              }
            }), j.hover(function () {
              e(this).siblings().removeClass("selected");
            });
            var W = j.filter(".selected").text();
            j.filter(":not(.disabled):not(.optgroup)").click(function () {
              i.focus();
              var t = e(this),
                s = t.text();
              if (!t.is(".selected")) {
                var o = t.index();
                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change();
              }
              q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b);
            }), q.mouseout(function () {
              e("li.sel", q).addClass("selected");
            }), i.on("change.styler", function () {
              y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed");
            }).on("focus.styler", function () {
              b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
            }).on("blur.styler", function () {
              b.removeClass("focused");
            }).on("keydown.styler keyup.styler", function (e) {
              var t = j.data("li-height");
              "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b));
            }).on("keydown.styler", function (e) {
              32 == e.which && (e.preventDefault(), x.click());
            }), s.registered || (e(document).on("click", s), s.registered = !0);
          }();
        };
        f(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), f();
        });
      } else i.is(":reset") && i.on("click", function () {
        setTimeout(function () {
          i.closest("form").find("input, select").trigger("refresh");
        }, 1);
      });
    },
    destroy: function () {
      var t = e(this.element);
      t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove();
    }
  }, e.fn[i] = function (s) {
    var l = arguments;
    if (void 0 === s || "object" == typeof s) return this.each(function () {
      e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s));
    }).promise().done(function () {
      var t = e(this[0]).data("_" + i);
      t && t.options.onFormStyled.call();
    }), this;
    if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
      var o;
      return this.each(function () {
        var a = e.data(this, "_" + i);
        a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)));
      }), void 0 !== o ? o : this;
    }
  }, s.registered = !1;
});
; /* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
(function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../widgets/datepicker"], factory);
  } else {
    // Browser globals
    factory(jQuery.datepicker);
  }
})(function (datepicker) {
  "use strict";

  datepicker.regional.da = {
    closeText: "Luk",
    prevText: "Forrige",
    nextText: "Næste",
    currentText: "I dag",
    monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
    dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
    weekHeader: "Uge",
    dateFormat: "dd-mm-yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };
  datepicker.setDefaults(datepicker.regional.da);
  return datepicker.regional.da;
});
; /* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
(function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../widgets/datepicker"], factory);
  } else {
    // Browser globals
    factory(jQuery.datepicker);
  }
})(function (datepicker) {
  "use strict";

  datepicker.regional["en-GB"] = {
    closeText: "Done",
    prevText: "Prev",
    nextText: "Next",
    currentText: "Today",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    weekHeader: "Wk",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };
  datepicker.setDefaults(datepicker.regional["en-GB"]);
  return datepicker.regional["en-GB"];
});
; /**
  * Passive event listeners
  */
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener('wheel', handle, {
      passive: true
    });
  }
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener('mousewheel', handle, {
      passive: true
    });
  }
};
; /*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
  "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
    return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
  } : n(jQuery);
}(function (t) {
  (e = t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : e) && e.requirejs || (e ? n = e : e = {}, g = {}, m = {}, y = {}, v = {}, s = Object.prototype.hasOwnProperty, i = [].slice, _ = /\.js$/, h = function (e, t) {
    var n,
      s,
      i = c(e),
      o = i[0],
      t = t[1];
    return e = i[1], o && (n = x(o = l(o, t))), o ? e = n && n.normalize ? n.normalize(e, (s = t, function (e) {
      return l(e, s);
    })) : l(e, t) : (o = (i = c(e = l(e, t)))[0], e = i[1], o && (n = x(o))), {
      f: o ? o + "!" + e : e,
      n: e,
      pr: o,
      p: n
    };
  }, f = {
    require: function (e) {
      return w(e);
    },
    exports: function (e) {
      var t = g[e];
      return void 0 !== t ? t : g[e] = {};
    },
    module: function (e) {
      return {
        id: e,
        uri: "",
        exports: g[e],
        config: (t = e, function () {
          return y && y.config && y.config[t] || {};
        })
      };
      var t;
    }
  }, o = function (e, t, n, s) {
    var i,
      o,
      r,
      a,
      l,
      c = [],
      u = typeof n,
      d = A(s = s || e);
    if ("undefined" == u || "function" == u) {
      for (t = !t.length && n.length ? ["require", "exports", "module"] : t, a = 0; a < t.length; a += 1) if ("require" === (o = (r = h(t[a], d)).f)) c[a] = f.require(e);else if ("exports" === o) c[a] = f.exports(e), l = !0;else if ("module" === o) i = c[a] = f.module(e);else if (b(g, o) || b(m, o) || b(v, o)) c[a] = x(o);else {
        if (!r.p) throw new Error(e + " missing " + o);
        r.p.load(r.n, w(s, !0), function (t) {
          return function (e) {
            g[t] = e;
          };
        }(o), {}), c[a] = g[o];
      }
      u = n ? n.apply(g[e], c) : void 0, e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : u === p && l || (g[e] = u));
    } else e && (g[e] = n);
  }, a = n = r = function (e, t, n, s, i) {
    if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
    if (!e.splice) {
      if ((y = e).deps && r(y.deps, y.callback), !t) return;
      t.splice ? (e = t, t = n, n = null) : e = p;
    }
    return t = t || function () {}, "function" == typeof n && (n = s, s = i), s ? o(p, e, t, n) : setTimeout(function () {
      o(p, e, t, n);
    }, 4), r;
  }, r.config = function (e) {
    return r(e);
  }, a._defined = g, (u = function (e, t, n) {
    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
    t.splice || (n = t, t = []), b(g, e) || b(m, e) || (m[e] = [e, t, n]);
  }).amd = {
    jQuery: !0
  }, e.requirejs = a, e.require = n, e.define = u), e.define("almond", function () {}), e.define("jquery", [], function () {
    var e = t || $;
    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
  }), e.define("select2/utils", ["jquery"], function (o) {
    var s = {};
    function c(e) {
      var t,
        n = e.prototype,
        s = [];
      for (t in n) "function" == typeof n[t] && "constructor" !== t && s.push(t);
      return s;
    }
    s.Extend = function (e, t) {
      var n,
        s = {}.hasOwnProperty;
      function i() {
        this.constructor = e;
      }
      for (n in t) s.call(t, n) && (e[n] = t[n]);
      return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
    }, s.Decorate = function (s, i) {
      var e = c(i),
        t = c(s);
      function o() {
        var e = Array.prototype.unshift,
          t = i.prototype.constructor.length,
          n = s.prototype.constructor;
        0 < t && (e.call(arguments, s.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments);
      }
      i.displayName = s.displayName, o.prototype = new function () {
        this.constructor = o;
      }();
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        o.prototype[r] = s.prototype[r];
      }
      for (var a = 0; a < e.length; a++) {
        var l = e[a];
        o.prototype[l] = function (e) {
          var t = function () {},
            n = (e in o.prototype && (t = o.prototype[e]), i.prototype[e]);
          return function () {
            return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
          };
        }(l);
      }
      return o;
    };
    function e() {
      this.listeners = {};
    }
    e.prototype.on = function (e, t) {
      this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
    }, e.prototype.trigger = function (e) {
      var t = Array.prototype.slice,
        n = t.call(arguments, 1);
      this.listeners = this.listeners || {}, 0 === (n = null == n ? [] : n).length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
    }, e.prototype.invoke = function (e, t) {
      for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
    }, s.Observable = e, s.generateChars = function (e) {
      for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
      return t;
    }, s.bind = function (e, t) {
      return function () {
        e.apply(t, arguments);
      };
    }, s._convertData = function (e) {
      for (var t in e) {
        var n = t.split("-"),
          s = e;
        if (1 !== n.length) {
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s || (s[o] = {}), i == n.length - 1 && (s[o] = e[t]), s = s[o];
          }
          delete e[t];
        }
      }
      return e;
    }, s.hasScroll = function (e, t) {
      var n = o(t),
        s = t.style.overflowX,
        i = t.style.overflowY;
      return (s !== i || "hidden" !== i && "visible" !== i) && ("scroll" === s || "scroll" === i || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
    }, s.escapeMarkup = function (e) {
      var t = {
        "\\": "&#92;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#47;"
      };
      return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
        return t[e];
      });
    }, s.__cache = {};
    var n = 0;
    return s.GetUniqueElementId = function (e) {
      var t = e.getAttribute("data-select2-id");
      return null == t && (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + s.generateChars(4), e.setAttribute("data-select2-id", t)), t;
    }, s.StoreData = function (e, t, n) {
      e = s.GetUniqueElementId(e);
      s.__cache[e] || (s.__cache[e] = {}), s.__cache[e][t] = n;
    }, s.GetData = function (e, t) {
      var n = s.GetUniqueElementId(e);
      return t ? s.__cache[n] && null != s.__cache[n][t] ? s.__cache[n][t] : o(e).data(t) : s.__cache[n];
    }, s.RemoveData = function (e) {
      var t = s.GetUniqueElementId(e);
      null != s.__cache[t] && delete s.__cache[t], e.removeAttribute("data-select2-id");
    }, s.copyNonInternalCssClasses = function (e, t) {
      var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(function (e) {
          return 0 === e.indexOf("select2-");
        }),
        t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(function (e) {
          return 0 !== e.indexOf("select2-");
        }),
        n = n.concat(t);
      e.setAttribute("class", n.join(" "));
    }, s;
  }), e.define("select2/results", ["jquery", "./utils"], function (u, d) {
    function s(e, t, n) {
      this.$element = e, this.data = n, this.options = t, s.__super__.constructor.call(this);
    }
    return d.Extend(s, d.Observable), s.prototype.render = function () {
      var e = u('<ul class="select2-results__options" role="listbox"></ul>');
      return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
    }, s.prototype.clear = function () {
      this.$results.empty();
    }, s.prototype.displayMessage = function (e) {
      var t = this.options.get("escapeMarkup"),
        n = (this.clear(), this.hideLoading(), u('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')),
        s = this.options.get("translations").get(e.message);
      n.append(t(s(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
    }, s.prototype.hideMessages = function () {
      this.$results.find(".select2-results__message").remove();
    }, s.prototype.append = function (e) {
      this.hideLoading();
      var t = [];
      if (null == e.results || 0 === e.results.length) 0 === this.$results.children().length && this.trigger("results:message", {
        message: "noResults"
      });else {
        e.results = this.sort(e.results);
        for (var n = 0; n < e.results.length; n++) {
          var s = e.results[n],
            s = this.option(s);
          t.push(s);
        }
        this.$results.append(t);
      }
    }, s.prototype.position = function (e, t) {
      t.find(".select2-results").append(e);
    }, s.prototype.sort = function (e) {
      return this.options.get("sorter")(e);
    }, s.prototype.highlightFirstItem = function () {
      var e = this.$results.find(".select2-results__option--selectable"),
        t = e.filter(".select2-results__option--selected");
      (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible();
    }, s.prototype.setClasses = function () {
      var t = this;
      this.data.current(function (e) {
        var s = e.map(function (e) {
          return e.id.toString();
        });
        t.$results.find(".select2-results__option--selectable").each(function () {
          var e = u(this),
            t = d.GetData(this, "data"),
            n = "" + t.id;
          null != t.element && t.element.selected || null == t.element && -1 < s.indexOf(n) ? (this.classList.add("select2-results__option--selected"), e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), e.attr("aria-selected", "false"));
        });
      });
    }, s.prototype.showLoading = function (e) {
      this.hideLoading();
      e = {
        disabled: !0,
        loading: !0,
        text: this.options.get("translations").get("searching")(e)
      }, e = this.option(e);
      e.className += " loading-results", this.$results.prepend(e);
    }, s.prototype.hideLoading = function () {
      this.$results.find(".loading-results").remove();
    }, s.prototype.option = function (e) {
      var t,
        n = document.createElement("li"),
        s = (n.classList.add("select2-results__option"), n.classList.add("select2-results__option--selectable"), {
          role: "option"
        }),
        i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
      for (t in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (s["aria-disabled"] = "true", n.classList.remove("select2-results__option--selectable"), n.classList.add("select2-results__option--disabled")), null == e.id && n.classList.remove("select2-results__option--selectable"), null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (s.role = "group", s["aria-label"] = e.text, n.classList.remove("select2-results__option--selectable"), n.classList.add("select2-results__option--group")), s) n.setAttribute(t, s[t]);
      if (e.children) {
        for (var i = u(n), o = document.createElement("strong"), r = (o.className = "select2-results__group", this.template(e, o), []), a = 0; a < e.children.length; a++) {
          var l = e.children[a],
            l = this.option(l);
          r.push(l);
        }
        var c = u("<ul></ul>", {
          class: "select2-results__options select2-results__options--nested",
          role: "none"
        });
        c.append(r), i.append(o), i.append(c);
      } else this.template(e, n);
      return d.StoreData(n, "data", e), n;
    }, s.prototype.bind = function (t, e) {
      var i = this,
        n = t.id + "-results";
      this.$results.attr("id", n), t.on("results:all", function (e) {
        i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem());
      }), t.on("results:append", function (e) {
        i.append(e.data), t.isOpen() && i.setClasses();
      }), t.on("query", function (e) {
        i.hideMessages(), i.showLoading(e);
      }), t.on("select", function () {
        t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect")) && i.highlightFirstItem();
      }), t.on("unselect", function () {
        t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect")) && i.highlightFirstItem();
      }), t.on("open", function () {
        i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible();
      }), t.on("close", function () {
        i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant");
      }), t.on("results:toggle", function () {
        var e = i.getHighlightedResults();
        0 !== e.length && e.trigger("mouseup");
      }), t.on("results:select", function () {
        var e,
          t = i.getHighlightedResults();
        0 !== t.length && (e = d.GetData(t[0], "data"), t.hasClass("select2-results__option--selected") ? i.trigger("close", {}) : i.trigger("select", {
          data: e
        }));
      }), t.on("results:previous", function () {
        var e,
          t = i.getHighlightedResults(),
          n = i.$results.find(".select2-results__option--selectable"),
          s = n.index(t);
        s <= 0 || (s = s - 1, 0 === t.length && (s = 0), (t = n.eq(s)).trigger("mouseenter"), n = i.$results.offset().top, t = t.offset().top, e = i.$results.scrollTop() + (t - n), 0 === s ? i.$results.scrollTop(0) : t - n < 0 && i.$results.scrollTop(e));
      }), t.on("results:next", function () {
        var e,
          t,
          n = i.getHighlightedResults(),
          s = i.$results.find(".select2-results__option--selectable"),
          n = s.index(n) + 1;
        n >= s.length || ((s = s.eq(n)).trigger("mouseenter"), e = i.$results.offset().top + i.$results.outerHeight(!1), s = s.offset().top + s.outerHeight(!1), t = i.$results.scrollTop() + s - e, 0 === n ? i.$results.scrollTop(0) : e < s && i.$results.scrollTop(t));
      }), t.on("results:focus", function (e) {
        e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true");
      }), t.on("results:message", function (e) {
        i.displayMessage(e);
      }), u.fn.mousewheel && this.$results.on("mousewheel", function (e) {
        var t = i.$results.scrollTop(),
          n = i.$results.get(0).scrollHeight - t + e.deltaY,
          t = 0 < e.deltaY && t - e.deltaY <= 0,
          n = e.deltaY < 0 && n <= i.$results.height();
        t ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation());
      }), this.$results.on("mouseup", ".select2-results__option--selectable", function (e) {
        var t = u(this),
          n = d.GetData(this, "data");
        t.hasClass("select2-results__option--selected") ? i.options.get("multiple") ? i.trigger("unselect", {
          originalEvent: e,
          data: n
        }) : i.trigger("close", {
          originalEvent: e,
          data: n
        }) : i.trigger("select", {
          originalEvent: e,
          data: n
        });
      }), this.$results.on("mouseenter", ".select2-results__option--selectable", function (e) {
        var t = d.GetData(this, "data");
        i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), i.trigger("results:focus", {
          data: t,
          element: u(this)
        });
      });
    }, s.prototype.getHighlightedResults = function () {
      return this.$results.find(".select2-results__option--highlighted");
    }, s.prototype.destroy = function () {
      this.$results.remove();
    }, s.prototype.ensureHighlightVisible = function () {
      var e,
        t,
        n,
        s,
        i = this.getHighlightedResults();
      0 !== i.length && (e = this.$results.find(".select2-results__option--selectable").index(i), t = this.$results.offset().top, s = i.offset().top, n = this.$results.scrollTop() + (s - t), s = s - t, n -= 2 * i.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n));
    }, s.prototype.template = function (e, t) {
      var n = this.options.get("templateResult"),
        s = this.options.get("escapeMarkup"),
        n = n(e, t);
      null == n ? t.style.display = "none" : "string" == typeof n ? t.innerHTML = s(n) : u(t).append(n);
    }, s;
  }), e.define("select2/keys", [], function () {
    return {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      DELETE: 46
    };
  }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, s, i) {
    function o(e, t) {
      this.$element = e, this.options = t, o.__super__.constructor.call(this);
    }
    return s.Extend(o, s.Observable), o.prototype.render = function () {
      var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
      return this._tabindex = 0, null != s.GetData(this.$element[0], "old-tabindex") ? this._tabindex = s.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
    }, o.prototype.bind = function (e, t) {
      var n = this,
        s = e.id + "-results";
      this.container = e, this.$selection.on("focus", function (e) {
        n.trigger("focus", e);
      }), this.$selection.on("blur", function (e) {
        n._handleBlur(e);
      }), this.$selection.on("keydown", function (e) {
        n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault();
      }), e.on("results:focus", function (e) {
        n.$selection.attr("aria-activedescendant", e.data._resultId);
      }), e.on("selection:update", function (e) {
        n.update(e.data);
      }), e.on("open", function () {
        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", s), n._attachCloseHandler(e);
      }), e.on("close", function () {
        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
      }), e.on("enable", function () {
        n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
      }), e.on("disable", function () {
        n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
      });
    }, o.prototype._handleBlur = function (e) {
      var t = this;
      window.setTimeout(function () {
        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
      }, 1);
    }, o.prototype._attachCloseHandler = function (e) {
      n(document.body).on("mousedown.select2." + e.id, function (e) {
        var t = n(e.target).closest(".select2");
        n(".select2.select2-container--open").each(function () {
          this != t[0] && s.GetData(this, "element").select2("close");
        });
      });
    }, o.prototype._detachCloseHandler = function (e) {
      n(document.body).off("mousedown.select2." + e.id);
    }, o.prototype.position = function (e, t) {
      t.find(".selection").append(e);
    }, o.prototype.destroy = function () {
      this._detachCloseHandler(this.container);
    }, o.prototype.update = function (e) {
      throw new Error("The `update` method must be defined in child classes.");
    }, o.prototype.isEnabled = function () {
      return !this.isDisabled();
    }, o.prototype.isDisabled = function () {
      return this.options.get("disabled");
    }, o;
  }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, s) {
    function i() {
      i.__super__.constructor.apply(this, arguments);
    }
    return n.Extend(i, t), i.prototype.render = function () {
      var e = i.__super__.render.call(this);
      return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
    }, i.prototype.bind = function (t, e) {
      var n = this,
        s = (i.__super__.bind.apply(this, arguments), t.id + "-container");
      this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", s), this.$selection.attr("aria-controls", s), this.$selection.on("mousedown", function (e) {
        1 === e.which && n.trigger("toggle", {
          originalEvent: e
        });
      }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
        t.isOpen() || n.$selection.trigger("focus");
      });
    }, i.prototype.clear = function () {
      var e = this.$selection.find(".select2-selection__rendered");
      e.empty(), e.removeAttr("title");
    }, i.prototype.display = function (e, t) {
      var n = this.options.get("templateSelection");
      return this.options.get("escapeMarkup")(n(e, t));
    }, i.prototype.selectionContainer = function () {
      return e("<span></span>");
    }, i.prototype.update = function (e) {
      var t, n;
      0 === e.length ? this.clear() : (e = e[0], t = this.$selection.find(".select2-selection__rendered"), n = this.display(e, t), t.empty().append(n), (n = e.title || e.text) ? t.attr("title", n) : t.removeAttr("title"));
    }, i;
  }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, c) {
    function o(e, t) {
      o.__super__.constructor.apply(this, arguments);
    }
    return c.Extend(o, e), o.prototype.render = function () {
      var e = o.__super__.render.call(this);
      return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
    }, o.prototype.bind = function (e, t) {
      var n = this,
        s = (o.__super__.bind.apply(this, arguments), e.id + "-container");
      this.$selection.find(".select2-selection__rendered").attr("id", s), this.$selection.on("click", function (e) {
        n.trigger("toggle", {
          originalEvent: e
        });
      }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
        var t;
        n.isDisabled() || (t = i(this).parent(), t = c.GetData(t[0], "data"), n.trigger("unselect", {
          originalEvent: e,
          data: t
        }));
      }), this.$selection.on("keydown", ".select2-selection__choice__remove", function (e) {
        n.isDisabled() || e.stopPropagation();
      });
    }, o.prototype.clear = function () {
      var e = this.$selection.find(".select2-selection__rendered");
      e.empty(), e.removeAttr("title");
    }, o.prototype.display = function (e, t) {
      var n = this.options.get("templateSelection");
      return this.options.get("escapeMarkup")(n(e, t));
    }, o.prototype.selectionContainer = function () {
      return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
    }, o.prototype.update = function (e) {
      if (this.clear(), 0 !== e.length) {
        for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < e.length; s++) {
          var i = e[s],
            o = this.selectionContainer(),
            r = this.display(i, o),
            a = n + c.generateChars(4) + "-",
            r = (i.id ? a += i.id : a += c.generateChars(4), o.find(".select2-selection__choice__display").append(r).attr("id", a), i.title || i.text),
            r = (r && o.attr("title", r), this.options.get("translations").get("removeItem")),
            l = o.find(".select2-selection__choice__remove");
          l.attr("title", r()), l.attr("aria-label", r()), l.attr("aria-describedby", a), c.StoreData(o[0], "data", i), t.push(o);
        }
        this.$selection.find(".select2-selection__rendered").append(t);
      }
    }, o;
  }), e.define("select2/selection/placeholder", [], function () {
    function e(e, t, n) {
      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
    }
    return e.prototype.normalizePlaceholder = function (e, t) {
      return t = "string" == typeof t ? {
        id: "",
        text: t
      } : t;
    }, e.prototype.createPlaceholder = function (e, t) {
      var n = this.selectionContainer(),
        t = (n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice"), t.title || t.text || n.text());
      return this.$selection.find(".select2-selection__rendered").attr("title", t), n;
    }, e.prototype.update = function (e, t) {
      var n = 1 == t.length && t[0].id != this.placeholder.id;
      if (1 < t.length || n) return e.call(this, t);
      this.clear();
      n = this.createPlaceholder(this.placeholder);
      this.$selection.find(".select2-selection__rendered").append(n);
    }, e;
  }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (i, s, a) {
    function e() {}
    return e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
        s._handleClear(e);
      }), t.on("keypress", function (e) {
        s._handleKeyboardClear(e, t);
      });
    }, e.prototype._handleClear = function (e, t) {
      if (!this.isDisabled()) {
        var n = this.$selection.find(".select2-selection__clear");
        if (0 !== n.length) {
          t.stopPropagation();
          var s = a.GetData(n[0], "data"),
            i = this.$element.val(),
            o = (this.$element.val(this.placeholder.id), {
              data: s
            });
          if (this.trigger("clear", o), o.prevented) this.$element.val(i);else {
            for (var r = 0; r < s.length; r++) if (o = {
              data: s[r]
            }, this.trigger("unselect", o), o.prevented) return void this.$element.val(i);
            this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
          }
        }
      }
    }, e.prototype._handleKeyboardClear = function (e, t, n) {
      n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t);
    }, e.prototype.update = function (e, t) {
      var n, s;
      e.call(this, t), this.$selection.find(".select2-selection__clear").remove(), this.$selection[0].classList.remove("select2-selection--clearable"), 0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length || (e = this.$selection.find(".select2-selection__rendered").attr("id"), n = this.options.get("translations").get("removeAllItems"), (s = i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title", n()), s.attr("aria-label", n()), s.attr("aria-describedby", e), a.StoreData(s[0], "data", t), this.$selection.prepend(s), this.$selection[0].classList.add("select2-selection--clearable"));
    }, e;
  }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (s, a, l) {
    function e(e, t, n) {
      e.call(this, t, n);
    }
    return e.prototype.render = function (e) {
      var t = this.options.get("translations").get("search"),
        n = s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'),
        n = (this.$searchContainer = n, this.$search = n.find("textarea"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", t()), e.call(this));
      return this._transferTabIndex(), n.append(this.$searchContainer), n;
    }, e.prototype.bind = function (e, t, n) {
      var s = this,
        i = t.id + "-results",
        o = t.id + "-container",
        e = (e.call(this, t, n), s.$search.attr("aria-describedby", o), t.on("open", function () {
          s.$search.attr("aria-controls", i), s.$search.trigger("focus");
        }), t.on("close", function () {
          s.$search.val(""), s.resizeSearch(), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus");
        }), t.on("enable", function () {
          s.$search.prop("disabled", !1), s._transferTabIndex();
        }), t.on("disable", function () {
          s.$search.prop("disabled", !0);
        }), t.on("focus", function (e) {
          s.$search.trigger("focus");
        }), t.on("results:focus", function (e) {
          e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant");
        }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
          s.trigger("focus", e);
        }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
          s._handleBlur(e);
        }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
          var t;
          e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === s.$search.val() && 0 < (t = s.$selection.find(".select2-selection__choice").last()).length && (t = a.GetData(t[0], "data"), s.searchRemoveChoice(t), e.preventDefault());
        }), this.$selection.on("click", ".select2-search--inline", function (e) {
          s.$search.val() && e.stopPropagation();
        }), document.documentMode),
        r = e && e <= 11;
      this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
        r ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search");
      }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
        var t;
        r && "input" === e.type ? s.$selection.off("input.search input.searchcheck") : (t = e.which) != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && s.handleSearch(e);
      });
    }, e.prototype._transferTabIndex = function (e) {
      this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
    }, e.prototype.createPlaceholder = function (e, t) {
      this.$search.attr("placeholder", t.text);
    }, e.prototype.update = function (e, t) {
      var n = this.$search[0] == document.activeElement;
      this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus");
    }, e.prototype.handleSearch = function () {
      var e;
      this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger("query", {
        term: e
      })), this._keyUpPrevented = !1;
    }, e.prototype.searchRemoveChoice = function (e, t) {
      this.trigger("unselect", {
        data: t
      }), this.$search.val(t.text), this.handleSearch();
    }, e.prototype.resizeSearch = function () {
      this.$search.css("width", "25px");
      var e = "100%";
      "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e);
    }, e;
  }), e.define("select2/selection/selectionCss", ["../utils"], function (n) {
    function e() {}
    return e.prototype.render = function (e) {
      var e = e.call(this),
        t = this.options.get("selectionCssClass") || "";
      return -1 !== t.indexOf(":all:") && (t = t.replace(":all:", ""), n.copyNonInternalCssClasses(e[0], this.$element[0])), e.addClass(t), e;
    }, e;
  }), e.define("select2/selection/eventRelay", ["jquery"], function (r) {
    function e() {}
    return e.prototype.bind = function (e, t, n) {
      var s = this,
        i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
        o = ["opening", "closing", "selecting", "unselecting", "clearing"];
      e.call(this, t, n), t.on("*", function (e, t) {
        var n;
        -1 !== i.indexOf(e) && (n = r.Event("select2:" + e, {
          params: t = t || {}
        }), s.$element.trigger(n), -1 !== o.indexOf(e)) && (t.prevented = n.isDefaultPrevented());
      });
    }, e;
  }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
    function s(e) {
      this.dict = e || {};
    }
    return s.prototype.all = function () {
      return this.dict;
    }, s.prototype.get = function (e) {
      return this.dict[e];
    }, s.prototype.extend = function (e) {
      this.dict = t.extend({}, e.all(), this.dict);
    }, s._cache = {}, s.loadPath = function (e) {
      var t;
      return e in s._cache || (t = n(e), s._cache[e] = t), new s(s._cache[e]);
    }, s;
  }), e.define("select2/diacritics", [], function () {
    return {
      "Ⓐ": "A",
      "Ａ": "A",
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ầ": "A",
      "Ấ": "A",
      "Ẫ": "A",
      "Ẩ": "A",
      "Ã": "A",
      "Ā": "A",
      "Ă": "A",
      "Ằ": "A",
      "Ắ": "A",
      "Ẵ": "A",
      "Ẳ": "A",
      "Ȧ": "A",
      "Ǡ": "A",
      "Ä": "A",
      "Ǟ": "A",
      "Ả": "A",
      "Å": "A",
      "Ǻ": "A",
      "Ǎ": "A",
      "Ȁ": "A",
      "Ȃ": "A",
      "Ạ": "A",
      "Ậ": "A",
      "Ặ": "A",
      "Ḁ": "A",
      "Ą": "A",
      "Ⱥ": "A",
      "Ɐ": "A",
      "Ꜳ": "AA",
      "Æ": "AE",
      "Ǽ": "AE",
      "Ǣ": "AE",
      "Ꜵ": "AO",
      "Ꜷ": "AU",
      "Ꜹ": "AV",
      "Ꜻ": "AV",
      "Ꜽ": "AY",
      "Ⓑ": "B",
      "Ｂ": "B",
      "Ḃ": "B",
      "Ḅ": "B",
      "Ḇ": "B",
      "Ƀ": "B",
      "Ƃ": "B",
      "Ɓ": "B",
      "Ⓒ": "C",
      "Ｃ": "C",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "Ç": "C",
      "Ḉ": "C",
      "Ƈ": "C",
      "Ȼ": "C",
      "Ꜿ": "C",
      "Ⓓ": "D",
      "Ｄ": "D",
      "Ḋ": "D",
      "Ď": "D",
      "Ḍ": "D",
      "Ḑ": "D",
      "Ḓ": "D",
      "Ḏ": "D",
      "Đ": "D",
      "Ƌ": "D",
      "Ɗ": "D",
      "Ɖ": "D",
      "Ꝺ": "D",
      "Ǳ": "DZ",
      "Ǆ": "DZ",
      "ǲ": "Dz",
      "ǅ": "Dz",
      "Ⓔ": "E",
      "Ｅ": "E",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ề": "E",
      "Ế": "E",
      "Ễ": "E",
      "Ể": "E",
      "Ẽ": "E",
      "Ē": "E",
      "Ḕ": "E",
      "Ḗ": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ë": "E",
      "Ẻ": "E",
      "Ě": "E",
      "Ȅ": "E",
      "Ȇ": "E",
      "Ẹ": "E",
      "Ệ": "E",
      "Ȩ": "E",
      "Ḝ": "E",
      "Ę": "E",
      "Ḙ": "E",
      "Ḛ": "E",
      "Ɛ": "E",
      "Ǝ": "E",
      "Ⓕ": "F",
      "Ｆ": "F",
      "Ḟ": "F",
      "Ƒ": "F",
      "Ꝼ": "F",
      "Ⓖ": "G",
      "Ｇ": "G",
      "Ǵ": "G",
      "Ĝ": "G",
      "Ḡ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ǧ": "G",
      "Ģ": "G",
      "Ǥ": "G",
      "Ɠ": "G",
      "Ꞡ": "G",
      "Ᵹ": "G",
      "Ꝿ": "G",
      "Ⓗ": "H",
      "Ｈ": "H",
      "Ĥ": "H",
      "Ḣ": "H",
      "Ḧ": "H",
      "Ȟ": "H",
      "Ḥ": "H",
      "Ḩ": "H",
      "Ḫ": "H",
      "Ħ": "H",
      "Ⱨ": "H",
      "Ⱶ": "H",
      "Ɥ": "H",
      "Ⓘ": "I",
      "Ｉ": "I",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "İ": "I",
      "Ï": "I",
      "Ḯ": "I",
      "Ỉ": "I",
      "Ǐ": "I",
      "Ȉ": "I",
      "Ȋ": "I",
      "Ị": "I",
      "Į": "I",
      "Ḭ": "I",
      "Ɨ": "I",
      "Ⓙ": "J",
      "Ｊ": "J",
      "Ĵ": "J",
      "Ɉ": "J",
      "Ⓚ": "K",
      "Ｋ": "K",
      "Ḱ": "K",
      "Ǩ": "K",
      "Ḳ": "K",
      "Ķ": "K",
      "Ḵ": "K",
      "Ƙ": "K",
      "Ⱪ": "K",
      "Ꝁ": "K",
      "Ꝃ": "K",
      "Ꝅ": "K",
      "Ꞣ": "K",
      "Ⓛ": "L",
      "Ｌ": "L",
      "Ŀ": "L",
      "Ĺ": "L",
      "Ľ": "L",
      "Ḷ": "L",
      "Ḹ": "L",
      "Ļ": "L",
      "Ḽ": "L",
      "Ḻ": "L",
      "Ł": "L",
      "Ƚ": "L",
      "Ɫ": "L",
      "Ⱡ": "L",
      "Ꝉ": "L",
      "Ꝇ": "L",
      "Ꞁ": "L",
      "Ǉ": "LJ",
      "ǈ": "Lj",
      "Ⓜ": "M",
      "Ｍ": "M",
      "Ḿ": "M",
      "Ṁ": "M",
      "Ṃ": "M",
      "Ɱ": "M",
      "Ɯ": "M",
      "Ⓝ": "N",
      "Ｎ": "N",
      "Ǹ": "N",
      "Ń": "N",
      "Ñ": "N",
      "Ṅ": "N",
      "Ň": "N",
      "Ṇ": "N",
      "Ņ": "N",
      "Ṋ": "N",
      "Ṉ": "N",
      "Ƞ": "N",
      "Ɲ": "N",
      "Ꞑ": "N",
      "Ꞥ": "N",
      "Ǌ": "NJ",
      "ǋ": "Nj",
      "Ⓞ": "O",
      "Ｏ": "O",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Ồ": "O",
      "Ố": "O",
      "Ỗ": "O",
      "Ổ": "O",
      "Õ": "O",
      "Ṍ": "O",
      "Ȭ": "O",
      "Ṏ": "O",
      "Ō": "O",
      "Ṑ": "O",
      "Ṓ": "O",
      "Ŏ": "O",
      "Ȯ": "O",
      "Ȱ": "O",
      "Ö": "O",
      "Ȫ": "O",
      "Ỏ": "O",
      "Ő": "O",
      "Ǒ": "O",
      "Ȍ": "O",
      "Ȏ": "O",
      "Ơ": "O",
      "Ờ": "O",
      "Ớ": "O",
      "Ỡ": "O",
      "Ở": "O",
      "Ợ": "O",
      "Ọ": "O",
      "Ộ": "O",
      "Ǫ": "O",
      "Ǭ": "O",
      "Ø": "O",
      "Ǿ": "O",
      "Ɔ": "O",
      "Ɵ": "O",
      "Ꝋ": "O",
      "Ꝍ": "O",
      "Œ": "OE",
      "Ƣ": "OI",
      "Ꝏ": "OO",
      "Ȣ": "OU",
      "Ⓟ": "P",
      "Ｐ": "P",
      "Ṕ": "P",
      "Ṗ": "P",
      "Ƥ": "P",
      "Ᵽ": "P",
      "Ꝑ": "P",
      "Ꝓ": "P",
      "Ꝕ": "P",
      "Ⓠ": "Q",
      "Ｑ": "Q",
      "Ꝗ": "Q",
      "Ꝙ": "Q",
      "Ɋ": "Q",
      "Ⓡ": "R",
      "Ｒ": "R",
      "Ŕ": "R",
      "Ṙ": "R",
      "Ř": "R",
      "Ȑ": "R",
      "Ȓ": "R",
      "Ṛ": "R",
      "Ṝ": "R",
      "Ŗ": "R",
      "Ṟ": "R",
      "Ɍ": "R",
      "Ɽ": "R",
      "Ꝛ": "R",
      "Ꞧ": "R",
      "Ꞃ": "R",
      "Ⓢ": "S",
      "Ｓ": "S",
      "ẞ": "S",
      "Ś": "S",
      "Ṥ": "S",
      "Ŝ": "S",
      "Ṡ": "S",
      "Š": "S",
      "Ṧ": "S",
      "Ṣ": "S",
      "Ṩ": "S",
      "Ș": "S",
      "Ş": "S",
      "Ȿ": "S",
      "Ꞩ": "S",
      "Ꞅ": "S",
      "Ⓣ": "T",
      "Ｔ": "T",
      "Ṫ": "T",
      "Ť": "T",
      "Ṭ": "T",
      "Ț": "T",
      "Ţ": "T",
      "Ṱ": "T",
      "Ṯ": "T",
      "Ŧ": "T",
      "Ƭ": "T",
      "Ʈ": "T",
      "Ⱦ": "T",
      "Ꞇ": "T",
      "Ꜩ": "TZ",
      "Ⓤ": "U",
      "Ｕ": "U",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ũ": "U",
      "Ṹ": "U",
      "Ū": "U",
      "Ṻ": "U",
      "Ŭ": "U",
      "Ü": "U",
      "Ǜ": "U",
      "Ǘ": "U",
      "Ǖ": "U",
      "Ǚ": "U",
      "Ủ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ǔ": "U",
      "Ȕ": "U",
      "Ȗ": "U",
      "Ư": "U",
      "Ừ": "U",
      "Ứ": "U",
      "Ữ": "U",
      "Ử": "U",
      "Ự": "U",
      "Ụ": "U",
      "Ṳ": "U",
      "Ų": "U",
      "Ṷ": "U",
      "Ṵ": "U",
      "Ʉ": "U",
      "Ⓥ": "V",
      "Ｖ": "V",
      "Ṽ": "V",
      "Ṿ": "V",
      "Ʋ": "V",
      "Ꝟ": "V",
      "Ʌ": "V",
      "Ꝡ": "VY",
      "Ⓦ": "W",
      "Ｗ": "W",
      "Ẁ": "W",
      "Ẃ": "W",
      "Ŵ": "W",
      "Ẇ": "W",
      "Ẅ": "W",
      "Ẉ": "W",
      "Ⱳ": "W",
      "Ⓧ": "X",
      "Ｘ": "X",
      "Ẋ": "X",
      "Ẍ": "X",
      "Ⓨ": "Y",
      "Ｙ": "Y",
      "Ỳ": "Y",
      "Ý": "Y",
      "Ŷ": "Y",
      "Ỹ": "Y",
      "Ȳ": "Y",
      "Ẏ": "Y",
      "Ÿ": "Y",
      "Ỷ": "Y",
      "Ỵ": "Y",
      "Ƴ": "Y",
      "Ɏ": "Y",
      "Ỿ": "Y",
      "Ⓩ": "Z",
      "Ｚ": "Z",
      "Ź": "Z",
      "Ẑ": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "Ẓ": "Z",
      "Ẕ": "Z",
      "Ƶ": "Z",
      "Ȥ": "Z",
      "Ɀ": "Z",
      "Ⱬ": "Z",
      "Ꝣ": "Z",
      "ⓐ": "a",
      "ａ": "a",
      "ẚ": "a",
      "à": "a",
      "á": "a",
      "â": "a",
      "ầ": "a",
      "ấ": "a",
      "ẫ": "a",
      "ẩ": "a",
      "ã": "a",
      "ā": "a",
      "ă": "a",
      "ằ": "a",
      "ắ": "a",
      "ẵ": "a",
      "ẳ": "a",
      "ȧ": "a",
      "ǡ": "a",
      "ä": "a",
      "ǟ": "a",
      "ả": "a",
      "å": "a",
      "ǻ": "a",
      "ǎ": "a",
      "ȁ": "a",
      "ȃ": "a",
      "ạ": "a",
      "ậ": "a",
      "ặ": "a",
      "ḁ": "a",
      "ą": "a",
      "ⱥ": "a",
      "ɐ": "a",
      "ꜳ": "aa",
      "æ": "ae",
      "ǽ": "ae",
      "ǣ": "ae",
      "ꜵ": "ao",
      "ꜷ": "au",
      "ꜹ": "av",
      "ꜻ": "av",
      "ꜽ": "ay",
      "ⓑ": "b",
      "ｂ": "b",
      "ḃ": "b",
      "ḅ": "b",
      "ḇ": "b",
      "ƀ": "b",
      "ƃ": "b",
      "ɓ": "b",
      "ⓒ": "c",
      "ｃ": "c",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "ç": "c",
      "ḉ": "c",
      "ƈ": "c",
      "ȼ": "c",
      "ꜿ": "c",
      "ↄ": "c",
      "ⓓ": "d",
      "ｄ": "d",
      "ḋ": "d",
      "ď": "d",
      "ḍ": "d",
      "ḑ": "d",
      "ḓ": "d",
      "ḏ": "d",
      "đ": "d",
      "ƌ": "d",
      "ɖ": "d",
      "ɗ": "d",
      "ꝺ": "d",
      "ǳ": "dz",
      "ǆ": "dz",
      "ⓔ": "e",
      "ｅ": "e",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ề": "e",
      "ế": "e",
      "ễ": "e",
      "ể": "e",
      "ẽ": "e",
      "ē": "e",
      "ḕ": "e",
      "ḗ": "e",
      "ĕ": "e",
      "ė": "e",
      "ë": "e",
      "ẻ": "e",
      "ě": "e",
      "ȅ": "e",
      "ȇ": "e",
      "ẹ": "e",
      "ệ": "e",
      "ȩ": "e",
      "ḝ": "e",
      "ę": "e",
      "ḙ": "e",
      "ḛ": "e",
      "ɇ": "e",
      "ɛ": "e",
      "ǝ": "e",
      "ⓕ": "f",
      "ｆ": "f",
      "ḟ": "f",
      "ƒ": "f",
      "ꝼ": "f",
      "ⓖ": "g",
      "ｇ": "g",
      "ǵ": "g",
      "ĝ": "g",
      "ḡ": "g",
      "ğ": "g",
      "ġ": "g",
      "ǧ": "g",
      "ģ": "g",
      "ǥ": "g",
      "ɠ": "g",
      "ꞡ": "g",
      "ᵹ": "g",
      "ꝿ": "g",
      "ⓗ": "h",
      "ｈ": "h",
      "ĥ": "h",
      "ḣ": "h",
      "ḧ": "h",
      "ȟ": "h",
      "ḥ": "h",
      "ḩ": "h",
      "ḫ": "h",
      "ẖ": "h",
      "ħ": "h",
      "ⱨ": "h",
      "ⱶ": "h",
      "ɥ": "h",
      "ƕ": "hv",
      "ⓘ": "i",
      "ｉ": "i",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "ï": "i",
      "ḯ": "i",
      "ỉ": "i",
      "ǐ": "i",
      "ȉ": "i",
      "ȋ": "i",
      "ị": "i",
      "į": "i",
      "ḭ": "i",
      "ɨ": "i",
      "ı": "i",
      "ⓙ": "j",
      "ｊ": "j",
      "ĵ": "j",
      "ǰ": "j",
      "ɉ": "j",
      "ⓚ": "k",
      "ｋ": "k",
      "ḱ": "k",
      "ǩ": "k",
      "ḳ": "k",
      "ķ": "k",
      "ḵ": "k",
      "ƙ": "k",
      "ⱪ": "k",
      "ꝁ": "k",
      "ꝃ": "k",
      "ꝅ": "k",
      "ꞣ": "k",
      "ⓛ": "l",
      "ｌ": "l",
      "ŀ": "l",
      "ĺ": "l",
      "ľ": "l",
      "ḷ": "l",
      "ḹ": "l",
      "ļ": "l",
      "ḽ": "l",
      "ḻ": "l",
      "ſ": "l",
      "ł": "l",
      "ƚ": "l",
      "ɫ": "l",
      "ⱡ": "l",
      "ꝉ": "l",
      "ꞁ": "l",
      "ꝇ": "l",
      "ǉ": "lj",
      "ⓜ": "m",
      "ｍ": "m",
      "ḿ": "m",
      "ṁ": "m",
      "ṃ": "m",
      "ɱ": "m",
      "ɯ": "m",
      "ⓝ": "n",
      "ｎ": "n",
      "ǹ": "n",
      "ń": "n",
      "ñ": "n",
      "ṅ": "n",
      "ň": "n",
      "ṇ": "n",
      "ņ": "n",
      "ṋ": "n",
      "ṉ": "n",
      "ƞ": "n",
      "ɲ": "n",
      "ŉ": "n",
      "ꞑ": "n",
      "ꞥ": "n",
      "ǌ": "nj",
      "ⓞ": "o",
      "ｏ": "o",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "ồ": "o",
      "ố": "o",
      "ỗ": "o",
      "ổ": "o",
      "õ": "o",
      "ṍ": "o",
      "ȭ": "o",
      "ṏ": "o",
      "ō": "o",
      "ṑ": "o",
      "ṓ": "o",
      "ŏ": "o",
      "ȯ": "o",
      "ȱ": "o",
      "ö": "o",
      "ȫ": "o",
      "ỏ": "o",
      "ő": "o",
      "ǒ": "o",
      "ȍ": "o",
      "ȏ": "o",
      "ơ": "o",
      "ờ": "o",
      "ớ": "o",
      "ỡ": "o",
      "ở": "o",
      "ợ": "o",
      "ọ": "o",
      "ộ": "o",
      "ǫ": "o",
      "ǭ": "o",
      "ø": "o",
      "ǿ": "o",
      "ɔ": "o",
      "ꝋ": "o",
      "ꝍ": "o",
      "ɵ": "o",
      "œ": "oe",
      "ƣ": "oi",
      "ȣ": "ou",
      "ꝏ": "oo",
      "ⓟ": "p",
      "ｐ": "p",
      "ṕ": "p",
      "ṗ": "p",
      "ƥ": "p",
      "ᵽ": "p",
      "ꝑ": "p",
      "ꝓ": "p",
      "ꝕ": "p",
      "ⓠ": "q",
      "ｑ": "q",
      "ɋ": "q",
      "ꝗ": "q",
      "ꝙ": "q",
      "ⓡ": "r",
      "ｒ": "r",
      "ŕ": "r",
      "ṙ": "r",
      "ř": "r",
      "ȑ": "r",
      "ȓ": "r",
      "ṛ": "r",
      "ṝ": "r",
      "ŗ": "r",
      "ṟ": "r",
      "ɍ": "r",
      "ɽ": "r",
      "ꝛ": "r",
      "ꞧ": "r",
      "ꞃ": "r",
      "ⓢ": "s",
      "ｓ": "s",
      "ß": "s",
      "ś": "s",
      "ṥ": "s",
      "ŝ": "s",
      "ṡ": "s",
      "š": "s",
      "ṧ": "s",
      "ṣ": "s",
      "ṩ": "s",
      "ș": "s",
      "ş": "s",
      "ȿ": "s",
      "ꞩ": "s",
      "ꞅ": "s",
      "ẛ": "s",
      "ⓣ": "t",
      "ｔ": "t",
      "ṫ": "t",
      "ẗ": "t",
      "ť": "t",
      "ṭ": "t",
      "ț": "t",
      "ţ": "t",
      "ṱ": "t",
      "ṯ": "t",
      "ŧ": "t",
      "ƭ": "t",
      "ʈ": "t",
      "ⱦ": "t",
      "ꞇ": "t",
      "ꜩ": "tz",
      "ⓤ": "u",
      "ｕ": "u",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ũ": "u",
      "ṹ": "u",
      "ū": "u",
      "ṻ": "u",
      "ŭ": "u",
      "ü": "u",
      "ǜ": "u",
      "ǘ": "u",
      "ǖ": "u",
      "ǚ": "u",
      "ủ": "u",
      "ů": "u",
      "ű": "u",
      "ǔ": "u",
      "ȕ": "u",
      "ȗ": "u",
      "ư": "u",
      "ừ": "u",
      "ứ": "u",
      "ữ": "u",
      "ử": "u",
      "ự": "u",
      "ụ": "u",
      "ṳ": "u",
      "ų": "u",
      "ṷ": "u",
      "ṵ": "u",
      "ʉ": "u",
      "ⓥ": "v",
      "ｖ": "v",
      "ṽ": "v",
      "ṿ": "v",
      "ʋ": "v",
      "ꝟ": "v",
      "ʌ": "v",
      "ꝡ": "vy",
      "ⓦ": "w",
      "ｗ": "w",
      "ẁ": "w",
      "ẃ": "w",
      "ŵ": "w",
      "ẇ": "w",
      "ẅ": "w",
      "ẘ": "w",
      "ẉ": "w",
      "ⱳ": "w",
      "ⓧ": "x",
      "ｘ": "x",
      "ẋ": "x",
      "ẍ": "x",
      "ⓨ": "y",
      "ｙ": "y",
      "ỳ": "y",
      "ý": "y",
      "ŷ": "y",
      "ỹ": "y",
      "ȳ": "y",
      "ẏ": "y",
      "ÿ": "y",
      "ỷ": "y",
      "ẙ": "y",
      "ỵ": "y",
      "ƴ": "y",
      "ɏ": "y",
      "ỿ": "y",
      "ⓩ": "z",
      "ｚ": "z",
      "ź": "z",
      "ẑ": "z",
      "ż": "z",
      "ž": "z",
      "ẓ": "z",
      "ẕ": "z",
      "ƶ": "z",
      "ȥ": "z",
      "ɀ": "z",
      "ⱬ": "z",
      "ꝣ": "z",
      "Ά": "Α",
      "Έ": "Ε",
      "Ή": "Η",
      "Ί": "Ι",
      "Ϊ": "Ι",
      "Ό": "Ο",
      "Ύ": "Υ",
      "Ϋ": "Υ",
      "Ώ": "Ω",
      "ά": "α",
      "έ": "ε",
      "ή": "η",
      "ί": "ι",
      "ϊ": "ι",
      "ΐ": "ι",
      "ό": "ο",
      "ύ": "υ",
      "ϋ": "υ",
      "ΰ": "υ",
      "ώ": "ω",
      "ς": "σ",
      "’": "'"
    };
  }), e.define("select2/data/base", ["../utils"], function (n) {
    function s(e, t) {
      s.__super__.constructor.call(this);
    }
    return n.Extend(s, n.Observable), s.prototype.current = function (e) {
      throw new Error("The `current` method must be defined in child classes.");
    }, s.prototype.query = function (e, t) {
      throw new Error("The `query` method must be defined in child classes.");
    }, s.prototype.bind = function (e, t) {}, s.prototype.destroy = function () {}, s.prototype.generateResultId = function (e, t) {
      e = e.id + "-result-";
      return e += n.generateChars(4), null != t.id ? e += "-" + t.id.toString() : e += "-" + n.generateChars(4), e;
    }, s;
  }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
    function n(e, t) {
      this.$element = e, this.options = t, n.__super__.constructor.call(this);
    }
    return a.Extend(n, e), n.prototype.current = function (e) {
      var t = this;
      e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (e) {
        return t.item(l(e));
      }));
    }, n.prototype.select = function (i) {
      var e,
        o = this;
      i.selected = !0, null != i.element && "option" === i.element.tagName.toLowerCase() ? (i.element.selected = !0, this.$element.trigger("input").trigger("change")) : this.$element.prop("multiple") ? this.current(function (e) {
        var t = [];
        (i = [i]).push.apply(i, e);
        for (var n = 0; n < i.length; n++) {
          var s = i[n].id;
          -1 === t.indexOf(s) && t.push(s);
        }
        o.$element.val(t), o.$element.trigger("input").trigger("change");
      }) : (e = i.id, this.$element.val(e), this.$element.trigger("input").trigger("change"));
    }, n.prototype.unselect = function (i) {
      var o = this;
      this.$element.prop("multiple") && (i.selected = !1, null != i.element && "option" === i.element.tagName.toLowerCase() ? (i.element.selected = !1, this.$element.trigger("input").trigger("change")) : this.current(function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var s = e[n].id;
          s !== i.id && -1 === t.indexOf(s) && t.push(s);
        }
        o.$element.val(t), o.$element.trigger("input").trigger("change");
      }));
    }, n.prototype.bind = function (e, t) {
      var n = this;
      (this.container = e).on("select", function (e) {
        n.select(e.data);
      }), e.on("unselect", function (e) {
        n.unselect(e.data);
      });
    }, n.prototype.destroy = function () {
      this.$element.find("*").each(function () {
        a.RemoveData(this);
      });
    }, n.prototype.query = function (t, e) {
      var n = [],
        s = this;
      this.$element.children().each(function () {
        var e;
        "option" !== this.tagName.toLowerCase() && "optgroup" !== this.tagName.toLowerCase() || (e = l(this), e = s.item(e), null !== (e = s.matches(t, e)) && n.push(e));
      }), e({
        results: n
      });
    }, n.prototype.addOptions = function (e) {
      this.$element.append(e);
    }, n.prototype.option = function (e) {
      e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
      var t,
        e = this._normalizeItem(e);
      return e.element = t, a.StoreData(t, "data", e), l(t);
    }, n.prototype.item = function (e) {
      var t = {};
      if (null == (t = a.GetData(e[0], "data"))) {
        var n = e[0];
        if ("option" === n.tagName.toLowerCase()) t = {
          id: e.val(),
          text: e.text(),
          disabled: e.prop("disabled"),
          selected: e.prop("selected"),
          title: e.prop("title")
        };else if ("optgroup" === n.tagName.toLowerCase()) {
          for (var t = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            }, s = e.children("option"), i = [], o = 0; o < s.length; o++) {
            var r = l(s[o]),
              r = this.item(r);
            i.push(r);
          }
          t.children = i;
        }
        (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t);
      }
      return t;
    }, n.prototype._normalizeItem = function (e) {
      e !== Object(e) && (e = {
        id: e,
        text: e
      });
      return null != (e = l.extend({}, {
        text: ""
      }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, {
        selected: !1,
        disabled: !1
      }, e);
    }, n.prototype.matches = function (e, t) {
      return this.options.get("matcher")(e, t);
    }, n;
  }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, c) {
    function s(e, t) {
      this._dataToConvert = t.get("data") || [], s.__super__.constructor.call(this, e, t);
    }
    return t.Extend(s, e), s.prototype.bind = function (e, t) {
      s.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
    }, s.prototype.select = function (n) {
      var e;
      0 === this.$element.find("option").filter(function (e, t) {
        return t.value == n.id.toString();
      }).length && (e = this.option(n), this.addOptions(e)), s.__super__.select.call(this, n);
    }, s.prototype.convertToOptions = function (e) {
      var t = this,
        n = this.$element.find("option"),
        s = n.map(function () {
          return t.item(c(this)).id;
        }).get(),
        i = [];
      for (var o = 0; o < e.length; o++) {
        var r,
          a,
          l = this._normalizeItem(e[o]);
        0 <= s.indexOf(l.id) ? (r = n.filter(function (e) {
          return function () {
            return c(this).val() == e.id;
          };
        }(l)), a = this.item(r), a = c.extend(!0, {}, l, a), a = this.option(a), r.replaceWith(a)) : (r = this.option(l), l.children && (a = this.convertToOptions(l.children), r.append(a)), i.push(r));
      }
      return i;
    }, s;
  }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
    function n(e, t) {
      this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
    }
    return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
      return o.extend({}, {
        data: function (e) {
          return o.extend({}, e, {
            q: e.term
          });
        },
        transport: function (e, t, n) {
          e = o.ajax(e);
          return e.then(t), e.fail(n), e;
        }
      }, e, !0);
    }, n.prototype.processResults = function (e) {
      return e;
    }, n.prototype.query = function (t, n) {
      var s = this,
        i = (null != this._request && ("function" == typeof this._request.abort && this._request.abort(), this._request = null), o.extend({
          type: "GET"
        }, this.ajaxOptions));
      function e() {
        var e = i.transport(i, function (e) {
          e = s.processResults(e, t);
          s.options.get("debug") && window.console && console.error && (e && e.results && Array.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e);
        }, function () {
          e && "status" in e && (0 === e.status || "0" === e.status) || s.trigger("results:message", {
            message: "errorLoading"
          });
        });
        s._request = e;
      }
      "function" == typeof i.url && (i.url = i.url.call(this.$element, t)), "function" == typeof i.data && (i.data = i.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
    }, n;
  }), e.define("select2/data/tags", ["jquery"], function (t) {
    function e(e, t, n) {
      var s = n.get("tags"),
        i = n.get("createTag"),
        i = (void 0 !== i && (this.createTag = i), n.get("insertTag"));
      if (void 0 !== i && (this.insertTag = i), e.call(this, t, n), Array.isArray(s)) for (var o = 0; o < s.length; o++) {
        var r = s[o],
          r = this._normalizeItem(r),
          r = this.option(r);
        this.$element.append(r);
      }
    }
    return e.prototype.query = function (e, c, u) {
      var d = this;
      this._removeOldTags(), null == c.term || null != c.page ? e.call(this, c, u) : e.call(this, c, function e(t, n) {
        for (var s = t.results, i = 0; i < s.length; i++) {
          var o = s[i],
            r = null != o.children && !e({
              results: o.children
            }, !0);
          if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || r) return !n && (t.data = s, void u(t));
        }
        if (n) return !0;
        var a,
          l = d.createTag(c);
        null != l && ((a = d.option(l)).attr("data-select2-tag", "true"), d.addOptions([a]), d.insertTag(s, l)), t.results = s, u(t);
      });
    }, e.prototype.createTag = function (e, t) {
      return null == t.term || "" === (t = t.term.trim()) ? null : {
        id: t,
        text: t
      };
    }, e.prototype.insertTag = function (e, t, n) {
      t.unshift(n);
    }, e.prototype._removeOldTags = function (e) {
      this.$element.find("option[data-select2-tag]").each(function () {
        this.selected || t(this).remove();
      });
    }, e;
  }), e.define("select2/data/tokenizer", ["jquery"], function (c) {
    function e(e, t, n) {
      var s = n.get("tokenizer");
      void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
    }
    return e.prototype.bind = function (e, t, n) {
      e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
    }, e.prototype.query = function (e, t, n) {
      var s = this;
      t.term = t.term || "";
      var i = this.tokenizer(t, this.options, function (e) {
        var t = s._normalizeItem(e);
        s.$element.find("option").filter(function () {
          return c(this).val() === t.id;
        }).length || ((e = s.option(t)).attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([e])), s.trigger("select", {
          data: t
        });
      });
      i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n);
    }, e.prototype.tokenizer = function (e, t, n, s) {
      for (var i = n.get("tokenSeparators") || [], o = t.term, r = 0, a = this.createTag || function (e) {
          return {
            id: e.term,
            text: e.term
          };
        }; r < o.length;) {
        var l = o[r];
        -1 === i.indexOf(l) ? r++ : (l = o.substr(0, r), null == (l = a(c.extend({}, t, {
          term: l
        }))) ? r++ : (s(l), o = o.substr(r + 1) || "", r = 0));
      }
      return {
        term: o
      };
    }, e;
  }), e.define("select2/data/minimumInputLength", [], function () {
    function e(e, t, n) {
      this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
    }
    return e.prototype.query = function (e, t, n) {
      t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
        message: "inputTooShort",
        args: {
          minimum: this.minimumInputLength,
          input: t.term,
          params: t
        }
      }) : e.call(this, t, n);
    }, e;
  }), e.define("select2/data/maximumInputLength", [], function () {
    function e(e, t, n) {
      this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
    }
    return e.prototype.query = function (e, t, n) {
      t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
        message: "inputTooLong",
        args: {
          maximum: this.maximumInputLength,
          input: t.term,
          params: t
        }
      }) : e.call(this, t, n);
    }, e;
  }), e.define("select2/data/maximumSelectionLength", [], function () {
    function e(e, t, n) {
      this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
    }
    return e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("select", function () {
        s._checkIfMaximumSelected();
      });
    }, e.prototype.query = function (e, t, n) {
      var s = this;
      this._checkIfMaximumSelected(function () {
        e.call(s, t, n);
      });
    }, e.prototype._checkIfMaximumSelected = function (e, t) {
      var n = this;
      this.current(function (e) {
        e = null != e ? e.length : 0;
        0 < n.maximumSelectionLength && e >= n.maximumSelectionLength ? n.trigger("results:message", {
          message: "maximumSelected",
          args: {
            maximum: n.maximumSelectionLength
          }
        }) : t && t();
      });
    }, e;
  }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
    function n(e, t) {
      this.$element = e, this.options = t, n.__super__.constructor.call(this);
    }
    return e.Extend(n, e.Observable), n.prototype.render = function () {
      var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
      return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
    }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
      this.$dropdown.remove();
    }, n;
  }), e.define("select2/dropdown/search", ["jquery"], function (o) {
    function e() {}
    return e.prototype.render = function (e) {
      var e = e.call(this),
        t = this.options.get("translations").get("search"),
        n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
      return this.$searchContainer = n, this.$search = n.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", t()), e.prepend(n), e;
    }, e.prototype.bind = function (e, t, n) {
      var s = this,
        i = t.id + "-results";
      e.call(this, t, n), this.$search.on("keydown", function (e) {
        s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented();
      }), this.$search.on("input", function (e) {
        o(this).off("keyup");
      }), this.$search.on("keyup input", function (e) {
        s.handleSearch(e);
      }), t.on("open", function () {
        s.$search.attr("tabindex", 0), s.$search.attr("aria-controls", i), s.$search.trigger("focus"), window.setTimeout(function () {
          s.$search.trigger("focus");
        }, 0);
      }), t.on("close", function () {
        s.$search.attr("tabindex", -1), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.val(""), s.$search.trigger("blur");
      }), t.on("focus", function () {
        t.isOpen() || s.$search.trigger("focus");
      }), t.on("results:all", function (e) {
        null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove("select2-search--hide") : s.$searchContainer[0].classList.add("select2-search--hide"));
      }), t.on("results:focus", function (e) {
        e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant");
      });
    }, e.prototype.handleSearch = function (e) {
      var t;
      this._keyUpPrevented || (t = this.$search.val(), this.trigger("query", {
        term: t
      })), this._keyUpPrevented = !1;
    }, e.prototype.showSearch = function (e, t) {
      return !0;
    }, e;
  }), e.define("select2/dropdown/hidePlaceholder", [], function () {
    function e(e, t, n, s) {
      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, s);
    }
    return e.prototype.append = function (e, t) {
      t.results = this.removePlaceholder(t.results), e.call(this, t);
    }, e.prototype.normalizePlaceholder = function (e, t) {
      return t = "string" == typeof t ? {
        id: "",
        text: t
      } : t;
    }, e.prototype.removePlaceholder = function (e, t) {
      for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
        var i = t[s];
        this.placeholder.id === i.id && n.splice(s, 1);
      }
      return n;
    }, e;
  }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
    function e(e, t, n, s) {
      this.lastParams = {}, e.call(this, t, n, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
    }
    return e.prototype.append = function (e, t) {
      this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
    }, e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("query", function (e) {
        s.lastParams = e, s.loading = !0;
      }), t.on("query:append", function (e) {
        s.lastParams = e, s.loading = !0;
      }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
    }, e.prototype.loadMoreIfNeeded = function () {
      var e = n.contains(document.documentElement, this.$loadingMore[0]);
      !this.loading && e && (e = this.$results.offset().top + this.$results.outerHeight(!1), this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50) && this.loadMore();
    }, e.prototype.loadMore = function () {
      this.loading = !0;
      var e = n.extend({}, {
        page: 1
      }, this.lastParams);
      e.page++, this.trigger("query:append", e);
    }, e.prototype.showLoadingMore = function (e, t) {
      return t.pagination && t.pagination.more;
    }, e.prototype.createLoadingMore = function () {
      var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
        t = this.options.get("translations").get("loadingMore");
      return e.html(t(this.lastParams)), e;
    }, e;
  }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (u, r) {
    function e(e, t, n) {
      this.$dropdownParent = u(n.get("dropdownParent") || document.body), e.call(this, t, n);
    }
    return e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("open", function () {
        s._showDropdown(), s._attachPositioningHandler(t), s._bindContainerResultHandlers(t);
      }), t.on("close", function () {
        s._hideDropdown(), s._detachPositioningHandler(t);
      }), this.$dropdownContainer.on("mousedown", function (e) {
        e.stopPropagation();
      });
    }, e.prototype.destroy = function (e) {
      e.call(this), this.$dropdownContainer.remove();
    }, e.prototype.position = function (e, t, n) {
      t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({
        position: "absolute",
        top: -999999
      }), this.$container = n;
    }, e.prototype.render = function (e) {
      var t = u("<span></span>"),
        e = e.call(this);
      return t.append(e), this.$dropdownContainer = t;
    }, e.prototype._hideDropdown = function (e) {
      this.$dropdownContainer.detach();
    }, e.prototype._bindContainerResultHandlers = function (e, t) {
      var n;
      this._containerResultsHandlersBound || (n = this, t.on("results:all", function () {
        n._positionDropdown(), n._resizeDropdown();
      }), t.on("results:append", function () {
        n._positionDropdown(), n._resizeDropdown();
      }), t.on("results:message", function () {
        n._positionDropdown(), n._resizeDropdown();
      }), t.on("select", function () {
        n._positionDropdown(), n._resizeDropdown();
      }), t.on("unselect", function () {
        n._positionDropdown(), n._resizeDropdown();
      }), this._containerResultsHandlersBound = !0);
    }, e.prototype._attachPositioningHandler = function (e, t) {
      var n = this,
        s = "scroll.select2." + t.id,
        i = "resize.select2." + t.id,
        t = "orientationchange.select2." + t.id,
        o = this.$container.parents().filter(r.hasScroll);
      o.each(function () {
        r.StoreData(this, "select2-scroll-position", {
          x: u(this).scrollLeft(),
          y: u(this).scrollTop()
        });
      }), o.on(s, function (e) {
        var t = r.GetData(this, "select2-scroll-position");
        u(this).scrollTop(t.y);
      }), u(window).on(s + " " + i + " " + t, function (e) {
        n._positionDropdown(), n._resizeDropdown();
      });
    }, e.prototype._detachPositioningHandler = function (e, t) {
      var n = "scroll.select2." + t.id,
        s = "resize.select2." + t.id,
        t = "orientationchange.select2." + t.id;
      this.$container.parents().filter(r.hasScroll).off(n), u(window).off(n + " " + s + " " + t);
    }, e.prototype._positionDropdown = function () {
      var e = u(window),
        t = this.$dropdown[0].classList.contains("select2-dropdown--above"),
        n = this.$dropdown[0].classList.contains("select2-dropdown--below"),
        s = null,
        i = this.$container.offset(),
        o = (i.bottom = i.top + this.$container.outerHeight(!1), {
          height: this.$container.outerHeight(!1)
        });
      o.top = i.top, o.bottom = i.top + o.height;
      var r = this.$dropdown.outerHeight(!1),
        a = e.scrollTop(),
        e = e.scrollTop() + e.height(),
        a = a < i.top - r,
        e = e > i.bottom + r,
        i = {
          left: i.left,
          top: o.bottom
        },
        l = this.$dropdownParent,
        c = ("static" === l.css("position") && (l = l.offsetParent()), {
          top: 0,
          left: 0
        });
      (u.contains(document.body, l[0]) || l[0].isConnected) && (c = l.offset()), i.top -= c.top, i.left -= c.left, t || n || (s = "below"), e || !a || t ? !a && e && t && (s = "below") : s = "above", ("above" == s || t && "below" !== s) && (i.top = o.top - c.top - r), null != s && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + s), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + s)), this.$dropdownContainer.css(i);
    }, e.prototype._resizeDropdown = function () {
      var e = {
        width: this.$container.outerWidth(!1) + "px"
      };
      this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
    }, e.prototype._showDropdown = function (e) {
      this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
    }, e;
  }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
    function e(e, t, n, s) {
      this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, s);
    }
    return e.prototype.showSearch = function (e, t) {
      return !(function e(t) {
        for (var n = 0, s = 0; s < t.length; s++) {
          var i = t[s];
          i.children ? n += e(i.children) : n++;
        }
        return n;
      }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
    }, e;
  }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (n) {
    function e() {}
    return e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("close", function (e) {
        s._handleSelectOnClose(e);
      });
    }, e.prototype._handleSelectOnClose = function (e, t) {
      if (t && null != t.originalSelect2Event) {
        t = t.originalSelect2Event;
        if ("select" === t._type || "unselect" === t._type) return;
      }
      var t = this.getHighlightedResults();
      t.length < 1 || null != (t = n.GetData(t[0], "data")).element && t.element.selected || null == t.element && t.selected || this.trigger("select", {
        data: t
      });
    }, e;
  }), e.define("select2/dropdown/closeOnSelect", [], function () {
    function e() {}
    return e.prototype.bind = function (e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("select", function (e) {
        s._selectTriggered(e);
      }), t.on("unselect", function (e) {
        s._selectTriggered(e);
      });
    }, e.prototype._selectTriggered = function (e, t) {
      var n = t.originalEvent;
      n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
        originalEvent: n,
        originalSelect2Event: t
      });
    }, e;
  }), e.define("select2/dropdown/dropdownCss", ["../utils"], function (n) {
    function e() {}
    return e.prototype.render = function (e) {
      var e = e.call(this),
        t = this.options.get("dropdownCssClass") || "";
      return -1 !== t.indexOf(":all:") && (t = t.replace(":all:", ""), n.copyNonInternalCssClasses(e[0], this.$element[0])), e.addClass(t), e;
    }, e;
  }), e.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function (s) {
    function e() {}
    return e.prototype.highlightFirstItem = function (e) {
      var t = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
      if (0 < t.length) {
        var t = t.first(),
          n = s.GetData(t[0], "data").element;
        if (n && n.getAttribute && "true" === n.getAttribute("data-select2-tag")) return void t.trigger("mouseenter");
      }
      e.call(this);
    }, e;
  }), e.define("select2/i18n/en", [], function () {
    return {
      errorLoading: function () {
        return "The results could not be loaded.";
      },
      inputTooLong: function (e) {
        var e = e.input.length - e.maximum,
          t = "Please delete " + e + " character";
        return 1 != e && (t += "s"), t;
      },
      inputTooShort: function (e) {
        return "Please enter " + (e.minimum - e.input.length) + " or more characters";
      },
      loadingMore: function () {
        return "Loading more results…";
      },
      maximumSelected: function (e) {
        var t = "You can only select " + e.maximum + " item";
        return 1 != e.maximum && (t += "s"), t;
      },
      noResults: function () {
        return "No results found";
      },
      searching: function () {
        return "Searching…";
      },
      removeAllItems: function () {
        return "Remove all items";
      },
      removeItem: function () {
        return "Remove item";
      },
      search: function () {
        return "Search";
      }
    };
  }), e.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], function (l, o, r, a, c, u, d, p, h, f, g, t, m, y, v, _, b, $, w, x, A, D, S, E, O, C, L, T, q, I, e) {
    function n() {
      this.reset();
    }
    return n.prototype.apply = function (e) {
      null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = v : null != e.data ? e.dataAdapter = y : e.dataAdapter = m, 0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), null == e.resultsAdapter && (e.resultsAdapter = o, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)), e.tags) && (e.resultsAdapter = f.Decorate(e.resultsAdapter, I)), null == e.dropdownAdapter && (e.multiple ? e.dropdownAdapter = A : (t = f.Decorate(A, D), e.dropdownAdapter = t), 0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O)), null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = r, null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), e.language.push("en");
      for (var t, n = [], s = 0; s < e.language.length; s++) {
        var i = e.language[s];
        -1 === n.indexOf(i) && n.push(i);
      }
      return e.language = n, e.translations = this._processTranslations(e.language, e.debug), e;
    }, n.prototype.reset = function () {
      function a(e) {
        return e.replace(/[^\u0000-\u007E]/g, function (e) {
          return t[e] || e;
        });
      }
      this.defaults = {
        amdLanguageBase: "./i18n/",
        autocomplete: "off",
        closeOnSelect: !0,
        debug: !1,
        dropdownAutoWidth: !1,
        escapeMarkup: f.escapeMarkup,
        language: {},
        matcher: function e(t, n) {
          if (null == t.term || "" === t.term.trim()) return n;
          if (n.children && 0 < n.children.length) {
            for (var s = l.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) null == e(t, n.children[i]) && s.children.splice(i, 1);
            return 0 < s.children.length ? s : e(t, s);
          }
          var o = a(n.text).toUpperCase(),
            r = a(t.term).toUpperCase();
          return -1 < o.indexOf(r) ? n : null;
        },
        minimumInputLength: 0,
        maximumInputLength: 0,
        maximumSelectionLength: 0,
        minimumResultsForSearch: 0,
        selectOnClose: !1,
        scrollAfterSelect: !1,
        sorter: function (e) {
          return e;
        },
        templateResult: function (e) {
          return e.text;
        },
        templateSelection: function (e) {
          return e.text;
        },
        theme: "default",
        width: "resolve"
      };
    }, n.prototype.applyFromElement = function (e, t) {
      var n = e.language,
        s = this.defaults.language,
        i = t.prop("lang"),
        t = t.closest("[lang]").prop("lang"),
        i = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s), this._resolveLanguage(t));
      return e.language = i, e;
    }, n.prototype._resolveLanguage = function (e) {
      if (!e) return [];
      if (l.isEmptyObject(e)) return [];
      if (l.isPlainObject(e)) return [e];
      for (var t, n = Array.isArray(e) ? e : [e], s = [], i = 0; i < n.length; i++) s.push(n[i]), "string" == typeof n[i] && 0 < n[i].indexOf("-") && (t = n[i].split("-")[0], s.push(t));
      return s;
    }, n.prototype._processTranslations = function (e, t) {
      for (var n = new g(), s = 0; s < e.length; s++) {
        var i = new g(),
          o = e[s];
        if ("string" == typeof o) try {
          i = g.loadPath(o);
        } catch (e) {
          try {
            o = this.defaults.amdLanguageBase + o, i = g.loadPath(o);
          } catch (e) {
            t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.');
          }
        } else i = l.isPlainObject(o) ? new g(o) : o;
        n.extend(i);
      }
      return n;
    }, n.prototype.set = function (e, t) {
      var n = {},
        e = (n[l.camelCase(e)] = t, f._convertData(n));
      l.extend(!0, this.defaults, e);
    }, new n();
  }), e.define("select2/options", ["jquery", "./defaults", "./utils"], function (c, n, u) {
    function e(e, t) {
      this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), this.options = n.apply(this.options);
    }
    return e.prototype.fromElement = function (e) {
      var t = ["select2"],
        n = (null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), u.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")), u.StoreData(e[0], "tags", !0)), u.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")), u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl"))), {});
      function s(e, t) {
        return t.toUpperCase();
      }
      for (var i = 0; i < e[0].attributes.length; i++) {
        var o = e[0].attributes[i].name,
          r = "data-";
        o.substr(0, r.length) == r && (o = o.substring(r.length), r = u.GetData(e[0], o), n[o.replace(/-([a-z])/g, s)] = r);
      }
      c.fn.jquery && "1." == c.fn.jquery.substr(0, 2) && e[0].dataset && (n = c.extend(!0, {}, e[0].dataset, n));
      var a,
        l = c.extend(!0, {}, u.GetData(e[0]), n);
      for (a in l = u._convertData(l)) -1 < t.indexOf(a) || (c.isPlainObject(this.options[a]) ? c.extend(this.options[a], l[a]) : this.options[a] = l[a]);
      return this;
    }, e.prototype.get = function (e) {
      return this.options[e];
    }, e.prototype.set = function (e, t) {
      this.options[e] = t;
    }, e;
  }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, i, o, s) {
    function r(e, t) {
      null != o.GetData(e[0], "select2") && o.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), this.options = new i(t = t || {}, e), r.__super__.constructor.call(this);
      var t = e.attr("tabindex") || 0,
        t = (o.StoreData(e[0], "old-tabindex", t), e.attr("tabindex", "-1"), this.options.get("dataAdapter")),
        t = (this.dataAdapter = new t(e, this.options), this.render()),
        n = (this._placeContainer(t), this.options.get("selectionAdapter")),
        n = (this.selection = new n(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, t), this.options.get("dropdownAdapter")),
        n = (this.dropdown = new n(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, t), this.options.get("resultsAdapter")),
        s = (this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown), this);
      this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
        s.trigger("selection:update", {
          data: e
        });
      }), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), o.StoreData(e[0], "select2", this), e.data("select2", this);
    }
    return o.Extend(r, o.Observable), r.prototype._generateId = function (e) {
      return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + o.generateChars(2) : o.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
    }, r.prototype._placeContainer = function (e) {
      e.insertAfter(this.$element);
      var t = this._resolveWidth(this.$element, this.options.get("width"));
      null != t && e.css("width", t);
    }, r.prototype._resolveWidth = function (e, t) {
      var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
      if ("resolve" == t) return null != (s = this._resolveWidth(e, "style")) ? s : this._resolveWidth(e, "element");
      if ("element" == t) return (s = e.outerWidth(!1)) <= 0 ? "auto" : s + "px";
      if ("style" != t) return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t;
      var s = e.attr("style");
      if ("string" == typeof s) for (var i = s.split(";"), o = 0, r = i.length; o < r; o += 1) {
        var a = i[o].replace(/\s/g, "").match(n);
        if (null !== a && 1 <= a.length) return a[1];
      }
      return null;
    }, r.prototype._bindAdapters = function () {
      this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
    }, r.prototype._registerDomEvents = function () {
      var t = this;
      this.$element.on("change.select2", function () {
        t.dataAdapter.current(function (e) {
          t.trigger("selection:update", {
            data: e
          });
        });
      }), this.$element.on("focus.select2", function (e) {
        t.trigger("focus", e);
      }), this._syncA = o.bind(this._syncAttributes, this), this._syncS = o.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function (e) {
        t._syncA(), t._syncS(e);
      }), this._observer.observe(this.$element[0], {
        attributes: !0,
        childList: !0,
        subtree: !1
      });
    }, r.prototype._registerDataEvents = function () {
      var n = this;
      this.dataAdapter.on("*", function (e, t) {
        n.trigger(e, t);
      });
    }, r.prototype._registerSelectionEvents = function () {
      var n = this,
        s = ["toggle", "focus"];
      this.selection.on("toggle", function () {
        n.toggleDropdown();
      }), this.selection.on("focus", function (e) {
        n.focus(e);
      }), this.selection.on("*", function (e, t) {
        -1 === s.indexOf(e) && n.trigger(e, t);
      });
    }, r.prototype._registerDropdownEvents = function () {
      var n = this;
      this.dropdown.on("*", function (e, t) {
        n.trigger(e, t);
      });
    }, r.prototype._registerResultsEvents = function () {
      var n = this;
      this.results.on("*", function (e, t) {
        n.trigger(e, t);
      });
    }, r.prototype._registerEvents = function () {
      var n = this;
      this.on("open", function () {
        n.$container[0].classList.add("select2-container--open");
      }), this.on("close", function () {
        n.$container[0].classList.remove("select2-container--open");
      }), this.on("enable", function () {
        n.$container[0].classList.remove("select2-container--disabled");
      }), this.on("disable", function () {
        n.$container[0].classList.add("select2-container--disabled");
      }), this.on("blur", function () {
        n.$container[0].classList.remove("select2-container--focus");
      }), this.on("query", function (t) {
        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
          n.trigger("results:all", {
            data: e,
            query: t
          });
        });
      }), this.on("query:append", function (t) {
        this.dataAdapter.query(t, function (e) {
          n.trigger("results:append", {
            data: e,
            query: t
          });
        });
      }), this.on("keypress", function (e) {
        var t = e.which;
        n.isOpen() ? t === s.ESC || t === s.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === s.ENTER || t === s.TAB ? (n.trigger("results:select", {}), e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === s.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === s.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(), e.preventDefault());
      });
    }, r.prototype._syncAttributes = function () {
      this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
    }, r.prototype._isChangeMutation = function (e) {
      var t = this;
      if (e.addedNodes && 0 < e.addedNodes.length) {
        for (var n = 0; n < e.addedNodes.length; n++) if (e.addedNodes[n].selected) return !0;
      } else {
        if (e.removedNodes && 0 < e.removedNodes.length) return !0;
        if (Array.isArray(e)) return e.some(function (e) {
          return t._isChangeMutation(e);
        });
      }
      return !1;
    }, r.prototype._syncSubtree = function (e) {
      var e = this._isChangeMutation(e),
        t = this;
      e && this.dataAdapter.current(function (e) {
        t.trigger("selection:update", {
          data: e
        });
      });
    }, r.prototype.trigger = function (e, t) {
      var n = r.__super__.trigger,
        s = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting",
          clear: "clearing"
        };
      if (void 0 === t && (t = {}), e in s) {
        var i = {
          prevented: !1,
          name: e,
          args: t
        };
        if (n.call(this, s[e], i), i.prevented) return void (t.prevented = !0);
      }
      n.call(this, e, t);
    }, r.prototype.toggleDropdown = function () {
      this.isDisabled() || (this.isOpen() ? this.close() : this.open());
    }, r.prototype.open = function () {
      this.isOpen() || this.isDisabled() || this.trigger("query", {});
    }, r.prototype.close = function (e) {
      this.isOpen() && this.trigger("close", {
        originalEvent: e
      });
    }, r.prototype.isEnabled = function () {
      return !this.isDisabled();
    }, r.prototype.isDisabled = function () {
      return this.options.get("disabled");
    }, r.prototype.isOpen = function () {
      return this.$container[0].classList.contains("select2-container--open");
    }, r.prototype.hasFocus = function () {
      return this.$container[0].classList.contains("select2-container--focus");
    }, r.prototype.focus = function (e) {
      this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
    }, r.prototype.enable = function (e) {
      this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
      e = !(e = null != e && 0 !== e.length ? e : [!0])[0];
      this.$element.prop("disabled", e);
    }, r.prototype.data = function () {
      this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
      var t = [];
      return this.dataAdapter.current(function (e) {
        t = e;
      }), t;
    }, r.prototype.val = function (e) {
      if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
      e = e[0];
      Array.isArray(e) && (e = e.map(function (e) {
        return e.toString();
      })), this.$element.val(e).trigger("input").trigger("change");
    }, r.prototype.destroy = function () {
      o.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", o.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), o.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
    }, r.prototype.render = function () {
      var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
      return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), o.StoreData(e[0], "element", this.$element), e;
    }, r;
  }), e.define("jquery-mousewheel", ["jquery"], function (e) {
    return e;
  }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (i, e, o, t, r) {
    var a;
    return null == i.fn.select2 && (a = ["open", "close", "destroy"], i.fn.select2 = function (t) {
      if ("object" == typeof (t = t || {})) return this.each(function () {
        var e = i.extend(!0, {}, t);
        new o(i(this), e);
      }), this;
      var n, s;
      if ("string" == typeof t) return s = Array.prototype.slice.call(arguments, 1), this.each(function () {
        var e = r.GetData(this, "select2");
        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, s);
      }), -1 < a.indexOf(t) ? this : n;
      throw new Error("Invalid arguments for Select2: " + t);
    }), null == i.fn.select2.defaults && (i.fn.select2.defaults = t), o;
  });
  var e,
    n,
    p,
    o,
    r,
    h,
    f,
    g,
    m,
    y,
    v,
    s,
    i,
    _,
    a = {
      define: e.define,
      require: e.require
    };
  function b(e, t) {
    return s.call(e, t);
  }
  function l(e, t) {
    var n,
      s,
      i,
      o,
      r,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = y.map,
      f = h && h["*"] || {};
    if (e) {
      for (t = (e = e.split("/")).length - 1, y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")), "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), c = 0; c < e.length; c++) "." === (d = e[c]) ? (e.splice(c, 1), --c) : ".." !== d || 0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1] || 0 < c && (e.splice(c - 1, 2), c -= 2);
      e = e.join("/");
    }
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (s = n.slice(0, c).join("/"), p) for (u = p.length; 0 < u; --u) if (i = (i = h[p.slice(0, u).join("/")]) && i[s]) {
          o = i, r = c;
          break;
        }
        if (o) break;
        !a && f && f[s] && (a = f[s], l = c);
      }
      !o && a && (o = a, r = l), o && (n.splice(0, r, o), e = n.join("/"));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = i.call(arguments, 0);
      return "string" != typeof e[0] && 1 === e.length && e.push(null), r.apply(p, e.concat([t, n]));
    };
  }
  function x(e) {
    var t;
    if (b(m, e) && (t = m[e], delete m[e], v[e] = !0, o.apply(p, t)), b(g, e) || b(v, e)) return g[e];
    throw new Error("No " + e);
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = a.require("jquery.select2");
  return t.fn.select2.amd = a, u;
});
; /*! tooltipster v4.2.8 */
!function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a);
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery);
}(void 0, function (a) {
  function b(a) {
    this.$container, this.constraints = null, this.__$tooltip, this.__init(a);
  }
  function c(b, c) {
    var d = !0;
    return a.each(b, function (a, e) {
      return void 0 === c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0;
    }), d;
  }
  function d(b) {
    var c = b.attr("id"),
      d = c ? h.window.document.getElementById(c) : null;
    return d ? d === b[0] : a.contains(h.window.document.body, b[0]);
  }
  function e() {
    if (!g) return !1;
    var a = g.document.body || g.document.documentElement,
      b = a.style,
      c = "transition",
      d = ["Moz", "Webkit", "Khtml", "O", "ms"];
    if ("string" == typeof b[c]) return !0;
    c = c.charAt(0).toUpperCase() + c.substr(1);
    for (var e = 0; e < d.length; e++) if ("string" == typeof b[d[e] + c]) return !0;
    return !1;
  }
  var f = {
      animation: "fade",
      animationDuration: 350,
      content: null,
      contentAsHTML: !1,
      contentCloning: !1,
      debug: !0,
      delay: 300,
      delayTouch: [300, 500],
      functionInit: null,
      functionBefore: null,
      functionReady: null,
      functionAfter: null,
      functionFormat: null,
      IEmin: 6,
      interactive: !1,
      multiple: !1,
      parent: null,
      plugins: ["sideTip"],
      repositionOnScroll: !1,
      restoration: "none",
      selfDestruction: !0,
      theme: [],
      timer: 0,
      trackerInterval: 500,
      trackOrigin: !1,
      trackTooltip: !1,
      trigger: "hover",
      triggerClose: {
        click: !1,
        mouseleave: !1,
        originClick: !1,
        scroll: !1,
        tap: !1,
        touchleave: !1
      },
      triggerOpen: {
        click: !1,
        mouseenter: !1,
        tap: !1,
        touchstart: !1
      },
      updateAnimation: "rotate",
      zIndex: 9999999
    },
    g = "undefined" != typeof window ? window : null,
    h = {
      hasTouchCapability: !(!g || !("ontouchstart" in g || g.DocumentTouch && g.document instanceof g.DocumentTouch || g.navigator.maxTouchPoints)),
      hasTransitions: e(),
      IE: !1,
      semVer: "4.2.8",
      window: g
    },
    i = function () {
      this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = h;
    };
  i.prototype = {
    __bridge: function (b, c, d) {
      if (!c[d]) {
        var e = function () {};
        e.prototype = b;
        var g = new e();
        g.__init && g.__init(c), a.each(b, function (a, b) {
          0 != a.indexOf("__") && (c[a] ? f.debug && console.log("The " + a + " method of the " + d + " plugin conflicts with another plugin or native methods") : (c[a] = function () {
            return g[a].apply(g, Array.prototype.slice.apply(arguments));
          }, c[a].bridged = g));
        }), c[d] = g;
      }
      return this;
    },
    __setWindow: function (a) {
      return h.window = a, this;
    },
    _getRuler: function (a) {
      return new b(a);
    },
    _off: function () {
      return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _on: function () {
      return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _one: function () {
      return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _plugin: function (b) {
      var c = this;
      if ("string" == typeof b) {
        var d = b,
          e = null;
        return d.indexOf(".") > 0 ? e = c.__plugins[d] : a.each(c.__plugins, function (a, b) {
          return b.name.substring(b.name.length - d.length - 1) == "." + d ? (e = b, !1) : void 0;
        }), e;
      }
      if (b.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
      return c.__plugins[b.name] = b, b.core && c.__bridge(b.core, c, b.name), this;
    },
    _trigger: function () {
      var a = Array.prototype.slice.apply(arguments);
      return "string" == typeof a[0] && (a[0] = {
        type: a[0]
      }), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, a), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, a), this;
    },
    instances: function (b) {
      var c = [],
        d = b || ".tooltipstered";
      return a(d).each(function () {
        var b = a(this),
          d = b.data("tooltipster-ns");
        d && a.each(d, function (a, d) {
          c.push(b.data(d));
        });
      }), c;
    },
    instancesLatest: function () {
      return this.__instancesLatestArr;
    },
    off: function () {
      return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    on: function () {
      return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    one: function () {
      return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    origins: function (b) {
      var c = b ? b + " " : "";
      return a(c + ".tooltipstered").toArray();
    },
    setDefaults: function (b) {
      return a.extend(f, b), this;
    },
    triggerHandler: function () {
      return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    }
  }, a.tooltipster = new i(), a.Tooltipster = function (b, c) {
    this.__callbacks = {
      close: [],
      open: []
    }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
      close: [],
      open: null
    }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(b, c);
  }, a.Tooltipster.prototype = {
    __init: function (b, c) {
      var d = this;
      if (d._$origin = a(b), d.__options = a.extend(!0, {}, f, c), d.__optionsFormat(), !h.IE || h.IE >= d.__options.IEmin) {
        var e = null;
        if (void 0 === d._$origin.data("tooltipster-initialTitle") && (e = d._$origin.attr("title"), void 0 === e && (e = null), d._$origin.data("tooltipster-initialTitle", e)), null !== d.__options.content) d.__contentSet(d.__options.content);else {
          var g,
            i = d._$origin.attr("data-tooltip-content");
          i && (g = a(i)), g && g[0] ? d.__contentSet(g.first()) : d.__contentSet(e);
        }
        d._$origin.removeAttr("title").addClass("tooltipstered"), d.__prepareOrigin(), d.__prepareGC(), a.each(d.__options.plugins, function (a, b) {
          d._plug(b);
        }), h.hasTouchCapability && a(h.window.document.body).on("touchmove." + d.__namespace + "-triggerOpen", function (a) {
          d._touchRecordEvent(a);
        }), d._on("created", function () {
          d.__prepareTooltip();
        })._on("repositioned", function (a) {
          d.__lastPosition = a.position;
        });
      } else d.__options.disabled = !0;
    },
    __contentInsert: function () {
      var a = this,
        b = a._$tooltip.find(".tooltipster-content"),
        c = a.__Content,
        d = function (a) {
          c = a;
        };
      return a._trigger({
        type: "format",
        content: a.__Content,
        format: d
      }), a.__options.functionFormat && (c = a.__options.functionFormat.call(a, a, {
        origin: a._$origin[0]
      }, a.__Content)), "string" != typeof c || a.__options.contentAsHTML ? b.empty().append(c) : b.text(c), a;
    },
    __contentSet: function (b) {
      return b instanceof a && this.__options.contentCloning && (b = b.clone(!0)), this.__Content = b, this._trigger({
        type: "updated",
        content: b
      }), this;
    },
    __destroyError: function () {
      throw new Error("This tooltip has been destroyed and cannot execute your method call.");
    },
    __geometry: function () {
      var b = this,
        c = b._$origin,
        d = b._$origin.is("area");
      if (d) {
        var e = b._$origin.parent().attr("name");
        c = a('img[usemap="#' + e + '"]');
      }
      var f = c[0].getBoundingClientRect(),
        g = a(h.window.document),
        i = a(h.window),
        j = c,
        k = {
          available: {
            document: null,
            window: null
          },
          document: {
            size: {
              height: g.height(),
              width: g.width()
            }
          },
          window: {
            scroll: {
              left: h.window.scrollX || h.window.document.documentElement.scrollLeft,
              top: h.window.scrollY || h.window.document.documentElement.scrollTop
            },
            size: {
              height: i.height(),
              width: i.width()
            }
          },
          origin: {
            fixedLineage: !1,
            offset: {},
            size: {
              height: f.bottom - f.top,
              width: f.right - f.left
            },
            usemapImage: d ? c[0] : null,
            windowOffset: {
              bottom: f.bottom,
              left: f.left,
              right: f.right,
              top: f.top
            }
          }
        };
      if (d) {
        var l = b._$origin.attr("shape"),
          m = b._$origin.attr("coords");
        if (m && (m = m.split(","), a.map(m, function (a, b) {
          m[b] = parseInt(a);
        })), "default" != l) switch (l) {
          case "circle":
            var n = m[0],
              o = m[1],
              p = m[2],
              q = o - p,
              r = n - p;
            k.origin.size.height = 2 * p, k.origin.size.width = k.origin.size.height, k.origin.windowOffset.left += r, k.origin.windowOffset.top += q;
            break;
          case "rect":
            var s = m[0],
              t = m[1],
              u = m[2],
              v = m[3];
            k.origin.size.height = v - t, k.origin.size.width = u - s, k.origin.windowOffset.left += s, k.origin.windowOffset.top += t;
            break;
          case "poly":
            for (var w = 0, x = 0, y = 0, z = 0, A = "even", B = 0; B < m.length; B++) {
              var C = m[B];
              "even" == A ? (C > y && (y = C, 0 === B && (w = y)), w > C && (w = C), A = "odd") : (C > z && (z = C, 1 == B && (x = z)), x > C && (x = C), A = "even");
            }
            k.origin.size.height = z - x, k.origin.size.width = y - w, k.origin.windowOffset.left += w, k.origin.windowOffset.top += x;
        }
      }
      var D = function (a) {
        k.origin.size.height = a.height, k.origin.windowOffset.left = a.left, k.origin.windowOffset.top = a.top, k.origin.size.width = a.width;
      };
      for (b._trigger({
        type: "geometry",
        edit: D,
        geometry: {
          height: k.origin.size.height,
          left: k.origin.windowOffset.left,
          top: k.origin.windowOffset.top,
          width: k.origin.size.width
        }
      }), k.origin.windowOffset.right = k.origin.windowOffset.left + k.origin.size.width, k.origin.windowOffset.bottom = k.origin.windowOffset.top + k.origin.size.height, k.origin.offset.left = k.origin.windowOffset.left + k.window.scroll.left, k.origin.offset.top = k.origin.windowOffset.top + k.window.scroll.top, k.origin.offset.bottom = k.origin.offset.top + k.origin.size.height, k.origin.offset.right = k.origin.offset.left + k.origin.size.width, k.available.document = {
        bottom: {
          height: k.document.size.height - k.origin.offset.bottom,
          width: k.document.size.width
        },
        left: {
          height: k.document.size.height,
          width: k.origin.offset.left
        },
        right: {
          height: k.document.size.height,
          width: k.document.size.width - k.origin.offset.right
        },
        top: {
          height: k.origin.offset.top,
          width: k.document.size.width
        }
      }, k.available.window = {
        bottom: {
          height: Math.max(k.window.size.height - Math.max(k.origin.windowOffset.bottom, 0), 0),
          width: k.window.size.width
        },
        left: {
          height: k.window.size.height,
          width: Math.max(k.origin.windowOffset.left, 0)
        },
        right: {
          height: k.window.size.height,
          width: Math.max(k.window.size.width - Math.max(k.origin.windowOffset.right, 0), 0)
        },
        top: {
          height: Math.max(k.origin.windowOffset.top, 0),
          width: k.window.size.width
        }
      }; "html" != j[0].tagName.toLowerCase();) {
        if ("fixed" == j.css("position")) {
          k.origin.fixedLineage = !0;
          break;
        }
        j = j.parent();
      }
      return k;
    },
    __optionsFormat: function () {
      return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = a(h.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = a(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
        mouseenter: !0,
        touchstart: !0
      }, this.__options.triggerClose = {
        mouseleave: !0,
        originClick: !0,
        touchleave: !0
      }) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
        click: !0,
        tap: !0
      }, this.__options.triggerClose = {
        click: !0,
        tap: !0
      }), this._trigger("options"), this;
    },
    __prepareGC: function () {
      var b = this;
      return b.__options.selfDestruction ? b.__garbageCollector = setInterval(function () {
        var c = new Date().getTime();
        b.__touchEvents = a.grep(b.__touchEvents, function (a, b) {
          return c - a.time > 6e4;
        }), d(b._$origin) || b.close(function () {
          b.destroy();
        });
      }, 2e4) : clearInterval(b.__garbageCollector), b;
    },
    __prepareOrigin: function () {
      var a = this;
      if (a._$origin.off("." + a.__namespace + "-triggerOpen"), h.hasTouchCapability && a._$origin.on("touchstart." + a.__namespace + "-triggerOpen touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen", function (b) {
        a._touchRecordEvent(b);
      }), a.__options.triggerOpen.click || a.__options.triggerOpen.tap && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerOpen.click && (b += "click." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.tap && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
          a._touchIsMeaningfulEvent(b) && a._open(b);
        });
      }
      if (a.__options.triggerOpen.mouseenter || a.__options.triggerOpen.touchstart && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerOpen.mouseenter && (b += "mouseenter." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.touchstart && h.hasTouchCapability && (b += "touchstart." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
          !a._touchIsTouchEvent(b) && a._touchIsEmulatedEvent(b) || (a.__pointerIsOverOrigin = !0, a._openShortly(b));
        });
      }
      if (a.__options.triggerClose.mouseleave || a.__options.triggerClose.touchleave && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerClose.mouseleave && (b += "mouseleave." + a.__namespace + "-triggerOpen "), a.__options.triggerClose.touchleave && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function (b) {
          a._touchIsMeaningfulEvent(b) && (a.__pointerIsOverOrigin = !1);
        });
      }
      return a;
    },
    __prepareTooltip: function () {
      var b = this,
        c = b.__options.interactive ? "auto" : "";
      return b._$tooltip.attr("id", b.__namespace).css({
        "pointer-events": c,
        zIndex: b.__options.zIndex
      }), a.each(b.__previousThemes, function (a, c) {
        b._$tooltip.removeClass(c);
      }), a.each(b.__options.theme, function (a, c) {
        b._$tooltip.addClass(c);
      }), b.__previousThemes = a.merge([], b.__options.theme), b;
    },
    __scrollHandler: function (b) {
      var c = this;
      if (c.__options.triggerClose.scroll) c._close(b);else if (d(c._$origin) && d(c._$tooltip)) {
        var e = null;
        if (b.target === h.window.document) c.__Geometry.origin.fixedLineage || c.__options.repositionOnScroll && c.reposition(b);else {
          e = c.__geometry();
          var f = !1;
          if ("fixed" != c._$origin.css("position") && c.__$originParents.each(function (b, c) {
            var d = a(c),
              g = d.css("overflow-x"),
              h = d.css("overflow-y");
            if ("visible" != g || "visible" != h) {
              var i = c.getBoundingClientRect();
              if ("visible" != g && (e.origin.windowOffset.left < i.left || e.origin.windowOffset.right > i.right)) return f = !0, !1;
              if ("visible" != h && (e.origin.windowOffset.top < i.top || e.origin.windowOffset.bottom > i.bottom)) return f = !0, !1;
            }
            return "fixed" == d.css("position") ? !1 : void 0;
          }), f) c._$tooltip.css("visibility", "hidden");else if (c._$tooltip.css("visibility", "visible"), c.__options.repositionOnScroll) c.reposition(b);else {
            var g = e.origin.offset.left - c.__Geometry.origin.offset.left,
              i = e.origin.offset.top - c.__Geometry.origin.offset.top;
            c._$tooltip.css({
              left: c.__lastPosition.coord.left + g,
              top: c.__lastPosition.coord.top + i
            });
          }
        }
        c._trigger({
          type: "scroll",
          event: b,
          geo: e
        });
      }
      return c;
    },
    __stateSet: function (a) {
      return this.__state = a, this._trigger({
        type: "state",
        state: a
      }), this;
    },
    __timeoutsClear: function () {
      return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, a.each(this.__timeouts.close, function (a, b) {
        clearTimeout(b);
      }), this.__timeouts.close = [], this;
    },
    __trackerStart: function () {
      var a = this,
        b = a._$tooltip.find(".tooltipster-content");
      return a.__options.trackTooltip && (a.__contentBcr = b[0].getBoundingClientRect()), a.__tracker = setInterval(function () {
        if (d(a._$origin) && d(a._$tooltip)) {
          if (a.__options.trackOrigin) {
            var e = a.__geometry(),
              f = !1;
            c(e.origin.size, a.__Geometry.origin.size) && (a.__Geometry.origin.fixedLineage ? c(e.origin.windowOffset, a.__Geometry.origin.windowOffset) && (f = !0) : c(e.origin.offset, a.__Geometry.origin.offset) && (f = !0)), f || (a.__options.triggerClose.mouseleave ? a._close() : a.reposition());
          }
          if (a.__options.trackTooltip) {
            var g = b[0].getBoundingClientRect();
            g.height === a.__contentBcr.height && g.width === a.__contentBcr.width || (a.reposition(), a.__contentBcr = g);
          }
        } else a._close();
      }, a.__options.trackerInterval), a;
    },
    _close: function (b, c, d) {
      var e = this,
        f = !0;
      if (e._trigger({
        type: "close",
        event: b,
        stop: function () {
          f = !1;
        }
      }), f || d) {
        c && e.__callbacks.close.push(c), e.__callbacks.open = [], e.__timeoutsClear();
        var g = function () {
          a.each(e.__callbacks.close, function (a, c) {
            c.call(e, e, {
              event: b,
              origin: e._$origin[0]
            });
          }), e.__callbacks.close = [];
        };
        if ("closed" != e.__state) {
          var i = !0,
            j = new Date(),
            k = j.getTime(),
            l = k + e.__options.animationDuration[1];
          if ("disappearing" == e.__state && l > e.__closingTime && e.__options.animationDuration[1] > 0 && (i = !1), i) {
            e.__closingTime = l, "disappearing" != e.__state && e.__stateSet("disappearing");
            var m = function () {
              clearInterval(e.__tracker), e._trigger({
                type: "closing",
                event: b
              }), e._$tooltip.off("." + e.__namespace + "-triggerClose").removeClass("tooltipster-dying"), a(h.window).off("." + e.__namespace + "-triggerClose"), e.__$originParents.each(function (b, c) {
                a(c).off("scroll." + e.__namespace + "-triggerClose");
              }), e.__$originParents = null, a(h.window.document.body).off("." + e.__namespace + "-triggerClose"), e._$origin.off("." + e.__namespace + "-triggerClose"), e._off("dismissable"), e.__stateSet("closed"), e._trigger({
                type: "after",
                event: b
              }), e.__options.functionAfter && e.__options.functionAfter.call(e, e, {
                event: b,
                origin: e._$origin[0]
              }), g();
            };
            h.hasTransitions ? (e._$tooltip.css({
              "-moz-animation-duration": e.__options.animationDuration[1] + "ms",
              "-ms-animation-duration": e.__options.animationDuration[1] + "ms",
              "-o-animation-duration": e.__options.animationDuration[1] + "ms",
              "-webkit-animation-duration": e.__options.animationDuration[1] + "ms",
              "animation-duration": e.__options.animationDuration[1] + "ms",
              "transition-duration": e.__options.animationDuration[1] + "ms"
            }), e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), e.__options.animationDuration[1] > 0 && e._$tooltip.delay(e.__options.animationDuration[1]), e._$tooltip.queue(m)) : e._$tooltip.stop().fadeOut(e.__options.animationDuration[1], m);
          }
        } else g();
      }
      return e;
    },
    _off: function () {
      return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _on: function () {
      return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _one: function () {
      return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this;
    },
    _open: function (b, c) {
      var e = this;
      if (!e.__destroying && d(e._$origin) && e.__enabled) {
        var f = !0;
        if ("closed" == e.__state && (e._trigger({
          type: "before",
          event: b,
          stop: function () {
            f = !1;
          }
        }), f && e.__options.functionBefore && (f = e.__options.functionBefore.call(e, e, {
          event: b,
          origin: e._$origin[0]
        }))), f !== !1 && null !== e.__Content) {
          c && e.__callbacks.open.push(c), e.__callbacks.close = [], e.__timeoutsClear();
          var g,
            i = function () {
              "stable" != e.__state && e.__stateSet("stable"), a.each(e.__callbacks.open, function (a, b) {
                b.call(e, e, {
                  origin: e._$origin[0],
                  tooltip: e._$tooltip[0]
                });
              }), e.__callbacks.open = [];
            };
          if ("closed" !== e.__state) g = 0, "disappearing" === e.__state ? (e.__stateSet("appearing"), h.hasTransitions ? (e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i)) : e._$tooltip.stop().fadeIn(i)) : "stable" == e.__state && i();else {
            if (e.__stateSet("appearing"), g = e.__options.animationDuration[0], e.__contentInsert(), e.reposition(b, !0), h.hasTransitions ? (e._$tooltip.addClass("tooltipster-" + e.__options.animation).addClass("tooltipster-initial").css({
              "-moz-animation-duration": e.__options.animationDuration[0] + "ms",
              "-ms-animation-duration": e.__options.animationDuration[0] + "ms",
              "-o-animation-duration": e.__options.animationDuration[0] + "ms",
              "-webkit-animation-duration": e.__options.animationDuration[0] + "ms",
              "animation-duration": e.__options.animationDuration[0] + "ms",
              "transition-duration": e.__options.animationDuration[0] + "ms"
            }), setTimeout(function () {
              "closed" != e.__state && (e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i));
            }, 0)) : e._$tooltip.css("display", "none").fadeIn(e.__options.animationDuration[0], i), e.__trackerStart(), a(h.window).on("resize." + e.__namespace + "-triggerClose", function (b) {
              var c = a(document.activeElement);
              (c.is("input") || c.is("textarea")) && a.contains(e._$tooltip[0], c[0]) || e.reposition(b);
            }).on("scroll." + e.__namespace + "-triggerClose", function (a) {
              e.__scrollHandler(a);
            }), e.__$originParents = e._$origin.parents(), e.__$originParents.each(function (b, c) {
              a(c).on("scroll." + e.__namespace + "-triggerClose", function (a) {
                e.__scrollHandler(a);
              });
            }), e.__options.triggerClose.mouseleave || e.__options.triggerClose.touchleave && h.hasTouchCapability) {
              e._on("dismissable", function (a) {
                a.dismissable ? a.delay ? (m = setTimeout(function () {
                  e._close(a.event);
                }, a.delay), e.__timeouts.close.push(m)) : e._close(a) : clearTimeout(m);
              });
              var j = e._$origin,
                k = "",
                l = "",
                m = null;
              e.__options.interactive && (j = j.add(e._$tooltip)), e.__options.triggerClose.mouseleave && (k += "mouseenter." + e.__namespace + "-triggerClose ", l += "mouseleave." + e.__namespace + "-triggerClose "), e.__options.triggerClose.touchleave && h.hasTouchCapability && (k += "touchstart." + e.__namespace + "-triggerClose", l += "touchend." + e.__namespace + "-triggerClose touchcancel." + e.__namespace + "-triggerClose"), j.on(l, function (a) {
                if (e._touchIsTouchEvent(a) || !e._touchIsEmulatedEvent(a)) {
                  var b = "mouseleave" == a.type ? e.__options.delay : e.__options.delayTouch;
                  e._trigger({
                    delay: b[1],
                    dismissable: !0,
                    event: a,
                    type: "dismissable"
                  });
                }
              }).on(k, function (a) {
                !e._touchIsTouchEvent(a) && e._touchIsEmulatedEvent(a) || e._trigger({
                  dismissable: !1,
                  event: a,
                  type: "dismissable"
                });
              });
            }
            e.__options.triggerClose.originClick && e._$origin.on("click." + e.__namespace + "-triggerClose", function (a) {
              e._touchIsTouchEvent(a) || e._touchIsEmulatedEvent(a) || e._close(a);
            }), (e.__options.triggerClose.click || e.__options.triggerClose.tap && h.hasTouchCapability) && setTimeout(function () {
              if ("closed" != e.__state) {
                var b = "",
                  c = a(h.window.document.body);
                e.__options.triggerClose.click && (b += "click." + e.__namespace + "-triggerClose "), e.__options.triggerClose.tap && h.hasTouchCapability && (b += "touchend." + e.__namespace + "-triggerClose"), c.on(b, function (b) {
                  e._touchIsMeaningfulEvent(b) && (e._touchRecordEvent(b), e.__options.interactive && a.contains(e._$tooltip[0], b.target) || e._close(b));
                }), e.__options.triggerClose.tap && h.hasTouchCapability && c.on("touchstart." + e.__namespace + "-triggerClose", function (a) {
                  e._touchRecordEvent(a);
                });
              }
            }, 0), e._trigger("ready"), e.__options.functionReady && e.__options.functionReady.call(e, e, {
              origin: e._$origin[0],
              tooltip: e._$tooltip[0]
            });
          }
          if (e.__options.timer > 0) {
            var m = setTimeout(function () {
              e._close();
            }, e.__options.timer + g);
            e.__timeouts.close.push(m);
          }
        }
      }
      return e;
    },
    _openShortly: function (a) {
      var b = this,
        c = !0;
      if ("stable" != b.__state && "appearing" != b.__state && !b.__timeouts.open && (b._trigger({
        type: "start",
        event: a,
        stop: function () {
          c = !1;
        }
      }), c)) {
        var d = 0 == a.type.indexOf("touch") ? b.__options.delayTouch : b.__options.delay;
        d[0] ? b.__timeouts.open = setTimeout(function () {
          b.__timeouts.open = null, b.__pointerIsOverOrigin && b._touchIsMeaningfulEvent(a) ? (b._trigger("startend"), b._open(a)) : b._trigger("startcancel");
        }, d[0]) : (b._trigger("startend"), b._open(a));
      }
      return b;
    },
    _optionsExtract: function (b, c) {
      var d = this,
        e = a.extend(!0, {}, c),
        f = d.__options[b];
      return f || (f = {}, a.each(c, function (a, b) {
        var c = d.__options[a];
        void 0 !== c && (f[a] = c);
      })), a.each(e, function (b, c) {
        void 0 !== f[b] && ("object" != typeof c || c instanceof Array || null == c || "object" != typeof f[b] || f[b] instanceof Array || null == f[b] ? e[b] = f[b] : a.extend(e[b], f[b]));
      }), e;
    },
    _plug: function (b) {
      var c = a.tooltipster._plugin(b);
      if (!c) throw new Error('The "' + b + '" plugin is not defined');
      return c.instance && a.tooltipster.__bridge(c.instance, this, c.name), this;
    },
    _touchIsEmulatedEvent: function (a) {
      for (var b = !1, c = new Date().getTime(), d = this.__touchEvents.length - 1; d >= 0; d--) {
        var e = this.__touchEvents[d];
        if (!(c - e.time < 500)) break;
        e.target === a.target && (b = !0);
      }
      return b;
    },
    _touchIsMeaningfulEvent: function (a) {
      return this._touchIsTouchEvent(a) && !this._touchSwiped(a.target) || !this._touchIsTouchEvent(a) && !this._touchIsEmulatedEvent(a);
    },
    _touchIsTouchEvent: function (a) {
      return 0 == a.type.indexOf("touch");
    },
    _touchRecordEvent: function (a) {
      return this._touchIsTouchEvent(a) && (a.time = new Date().getTime(), this.__touchEvents.push(a)), this;
    },
    _touchSwiped: function (a) {
      for (var b = !1, c = this.__touchEvents.length - 1; c >= 0; c--) {
        var d = this.__touchEvents[c];
        if ("touchmove" == d.type) {
          b = !0;
          break;
        }
        if ("touchstart" == d.type && a === d.target) break;
      }
      return b;
    },
    _trigger: function () {
      var b = Array.prototype.slice.apply(arguments);
      return "string" == typeof b[0] && (b[0] = {
        type: b[0]
      }), b[0].instance = this, b[0].origin = this._$origin ? this._$origin[0] : null, b[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, b), a.tooltipster._trigger.apply(a.tooltipster, b), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, b), this;
    },
    _unplug: function (b) {
      var c = this;
      if (c[b]) {
        var d = a.tooltipster._plugin(b);
        d.instance && a.each(d.instance, function (a, d) {
          c[a] && c[a].bridged === c[b] && delete c[a];
        }), c[b].__destroy && c[b].__destroy(), delete c[b];
      }
      return c;
    },
    close: function (a) {
      return this.__destroyed ? this.__destroyError() : this._close(null, a), this;
    },
    content: function (a) {
      var b = this;
      if (void 0 === a) return b.__Content;
      if (b.__destroyed) b.__destroyError();else if (b.__contentSet(a), null !== b.__Content) {
        if ("closed" !== b.__state && (b.__contentInsert(), b.reposition(), b.__options.updateAnimation)) if (h.hasTransitions) {
          var c = b.__options.updateAnimation;
          b._$tooltip.addClass("tooltipster-update-" + c), setTimeout(function () {
            "closed" != b.__state && b._$tooltip.removeClass("tooltipster-update-" + c);
          }, 1e3);
        } else b._$tooltip.fadeTo(200, .5, function () {
          "closed" != b.__state && b._$tooltip.fadeTo(200, 1);
        });
      } else b._close();
      return b;
    },
    destroy: function () {
      var b = this;
      if (b.__destroyed) b.__destroyError();else {
        "closed" != b.__state ? b.option("animationDuration", 0)._close(null, null, !0) : b.__timeoutsClear(), b._trigger("destroy"), b.__destroyed = !0, b._$origin.removeData(b.__namespace).off("." + b.__namespace + "-triggerOpen"), a(h.window.document.body).off("." + b.__namespace + "-triggerOpen");
        var c = b._$origin.data("tooltipster-ns");
        if (c) if (1 === c.length) {
          var d = null;
          "previous" == b.__options.restoration ? d = b._$origin.data("tooltipster-initialTitle") : "current" == b.__options.restoration && (d = "string" == typeof b.__Content ? b.__Content : a("<div></div>").append(b.__Content).html()), d && b._$origin.attr("title", d), b._$origin.removeClass("tooltipstered"), b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle");
        } else c = a.grep(c, function (a, c) {
          return a !== b.__namespace;
        }), b._$origin.data("tooltipster-ns", c);
        b._trigger("destroyed"), b._off(), b.off(), b.__Content = null, b.__$emitterPrivate = null, b.__$emitterPublic = null, b.__options.parent = null, b._$origin = null, b._$tooltip = null, a.tooltipster.__instancesLatestArr = a.grep(a.tooltipster.__instancesLatestArr, function (a, c) {
          return b !== a;
        }), clearInterval(b.__garbageCollector);
      }
      return b;
    },
    disable: function () {
      return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this);
    },
    elementOrigin: function () {
      return this.__destroyed ? void this.__destroyError() : this._$origin[0];
    },
    elementTooltip: function () {
      return this._$tooltip ? this._$tooltip[0] : null;
    },
    enable: function () {
      return this.__enabled = !0, this;
    },
    hide: function (a) {
      return this.close(a);
    },
    instance: function () {
      return this;
    },
    off: function () {
      return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    on: function () {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    one: function () {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    },
    open: function (a) {
      return this.__destroyed ? this.__destroyError() : this._open(null, a), this;
    },
    option: function (b, c) {
      return void 0 === c ? this.__options[b] : (this.__destroyed ? this.__destroyError() : (this.__options[b] = c, this.__optionsFormat(), a.inArray(b, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === b && this.__prepareGC()), this);
    },
    reposition: function (a, b) {
      var c = this;
      return c.__destroyed ? c.__destroyError() : "closed" != c.__state && d(c._$origin) && (b || d(c._$tooltip)) && (b || c._$tooltip.detach(), c.__Geometry = c.__geometry(), c._trigger({
        type: "reposition",
        event: a,
        helper: {
          geo: c.__Geometry
        }
      })), c;
    },
    show: function (a) {
      return this.open(a);
    },
    status: function () {
      return {
        destroyed: this.__destroyed,
        enabled: this.__enabled,
        open: "closed" !== this.__state,
        state: this.__state
      };
    },
    triggerHandler: function () {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this;
    }
  }, a.fn.tooltipster = function () {
    var b = Array.prototype.slice.apply(arguments),
      c = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
    if (0 === this.length) return this;
    if ("string" == typeof b[0]) {
      var d = "#*$~&";
      return this.each(function () {
        var e = a(this).data("tooltipster-ns"),
          f = e ? a(this).data(e[0]) : null;
        if (!f) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
        if ("function" != typeof f[b[0]]) throw new Error('Unknown method "' + b[0] + '"');
        this.length > 1 && "content" == b[0] && (b[1] instanceof a || "object" == typeof b[1] && null != b[1] && b[1].tagName) && !f.__options.contentCloning && f.__options.debug && console.log(c);
        var g = f[b[0]](b[1], b[2]);
        return g !== f || "instance" === b[0] ? (d = g, !1) : void 0;
      }), "#*$~&" !== d ? d : this;
    }
    a.tooltipster.__instancesLatestArr = [];
    var e = b[0] && void 0 !== b[0].multiple,
      g = e && b[0].multiple || !e && f.multiple,
      h = b[0] && void 0 !== b[0].content,
      i = h && b[0].content || !h && f.content,
      j = b[0] && void 0 !== b[0].contentCloning,
      k = j && b[0].contentCloning || !j && f.contentCloning,
      l = b[0] && void 0 !== b[0].debug,
      m = l && b[0].debug || !l && f.debug;
    return this.length > 1 && (i instanceof a || "object" == typeof i && null != i && i.tagName) && !k && m && console.log(c), this.each(function () {
      var c = !1,
        d = a(this),
        e = d.data("tooltipster-ns"),
        f = null;
      e ? g ? c = !0 : m && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : c = !0, c && (f = new a.Tooltipster(this, b[0]), e || (e = []), e.push(f.__namespace), d.data("tooltipster-ns", e), d.data(f.__namespace, f), f.__options.functionInit && f.__options.functionInit.call(f, f, {
        origin: this
      }), f._trigger("init")), a.tooltipster.__instancesLatestArr.push(f);
    }), this;
  }, b.prototype = {
    __init: function (b) {
      this.__$tooltip = b, this.__$tooltip.css({
        left: 0,
        overflow: "hidden",
        position: "absolute",
        top: 0
      }).find(".tooltipster-content").css("overflow", "auto"), this.$container = a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body);
    },
    __forceRedraw: function () {
      var a = this.__$tooltip.parent();
      this.__$tooltip.detach(), this.__$tooltip.appendTo(a);
    },
    constrain: function (a, b) {
      return this.constraints = {
        width: a,
        height: b
      }, this.__$tooltip.css({
        display: "block",
        height: "",
        overflow: "auto",
        width: a
      }), this;
    },
    destroy: function () {
      this.__$tooltip.detach().find(".tooltipster-content").css({
        display: "",
        overflow: ""
      }), this.$container.remove();
    },
    free: function () {
      return this.constraints = null, this.__$tooltip.css({
        display: "",
        height: "",
        overflow: "visible",
        width: ""
      }), this;
    },
    measure: function () {
      this.__forceRedraw();
      var a = this.__$tooltip[0].getBoundingClientRect(),
        b = {
          size: {
            height: a.height || a.bottom - a.top,
            width: a.width || a.right - a.left
          }
        };
      if (this.constraints) {
        var c = this.__$tooltip.find(".tooltipster-content"),
          d = this.__$tooltip.outerHeight(),
          e = c[0].getBoundingClientRect(),
          f = {
            height: d <= this.constraints.height,
            width: a.width <= this.constraints.width && e.width >= c[0].scrollWidth - 1
          };
        b.fits = f.height && f.width;
      }
      return h.IE && h.IE <= 11 && b.size.width !== h.window.document.documentElement.clientWidth && (b.size.width = Math.ceil(b.size.width) + 1), b;
    }
  };
  var j = navigator.userAgent.toLowerCase();
  -1 != j.indexOf("msie") ? h.IE = parseInt(j.split("msie")[1]) : -1 !== j.toLowerCase().indexOf("trident") && -1 !== j.indexOf(" rv:11") ? h.IE = 11 : -1 != j.toLowerCase().indexOf("edge/") && (h.IE = parseInt(j.toLowerCase().split("edge/")[1]));
  var k = "tooltipster.sideTip";
  return a.tooltipster._plugin({
    name: k,
    instance: {
      __defaults: function () {
        return {
          arrow: !0,
          distance: 6,
          functionPosition: null,
          maxWidth: null,
          minIntersection: 16,
          minWidth: 0,
          position: null,
          side: "top",
          viewportAware: !0
        };
      },
      __init: function (a) {
        var b = this;
        b.__instance = a, b.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), b.__previousState = "closed", b.__options, b.__optionsFormat(), b.__instance._on("state." + b.__namespace, function (a) {
          "closed" == a.state ? b.__close() : "appearing" == a.state && "closed" == b.__previousState && b.__create(), b.__previousState = a.state;
        }), b.__instance._on("options." + b.__namespace, function () {
          b.__optionsFormat();
        }), b.__instance._on("reposition." + b.__namespace, function (a) {
          b.__reposition(a.event, a.helper);
        });
      },
      __close: function () {
        this.__instance.content() instanceof a && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null;
      },
      __create: function () {
        var b = a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
        this.__options.arrow || b.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && b.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && b.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = b, this.__instance._trigger("created");
      },
      __destroy: function () {
        this.__instance._off("." + self.__namespace);
      },
      __optionsFormat: function () {
        var b = this;
        if (b.__options = b.__instance._optionsExtract(k, b.__defaults()), b.__options.position && (b.__options.side = b.__options.position), "object" != typeof b.__options.distance && (b.__options.distance = [b.__options.distance]), b.__options.distance.length < 4 && (void 0 === b.__options.distance[1] && (b.__options.distance[1] = b.__options.distance[0]), void 0 === b.__options.distance[2] && (b.__options.distance[2] = b.__options.distance[0]), void 0 === b.__options.distance[3] && (b.__options.distance[3] = b.__options.distance[1])), b.__options.distance = {
          top: b.__options.distance[0],
          right: b.__options.distance[1],
          bottom: b.__options.distance[2],
          left: b.__options.distance[3]
        }, "string" == typeof b.__options.side) {
          var c = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          };
          b.__options.side = [b.__options.side, c[b.__options.side]], "left" == b.__options.side[0] || "right" == b.__options.side[0] ? b.__options.side.push("top", "bottom") : b.__options.side.push("right", "left");
        }
        6 === a.tooltipster._env.IE && b.__options.arrow !== !0 && (b.__options.arrow = !1);
      },
      __reposition: function (b, c) {
        var d,
          e = this,
          f = e.__targetFind(c),
          g = [];
        e.__instance._$tooltip.detach();
        var h = e.__instance._$tooltip.clone(),
          i = a.tooltipster._getRuler(h),
          j = !1,
          k = e.__instance.option("animation");
        switch (k && h.removeClass("tooltipster-" + k), a.each(["window", "document"], function (d, k) {
          var l = null;
          if (e.__instance._trigger({
            container: k,
            helper: c,
            satisfied: j,
            takeTest: function (a) {
              l = a;
            },
            results: g,
            type: "positionTest"
          }), 1 == l || 0 != l && 0 == j && ("window" != k || e.__options.viewportAware)) for (var d = 0; d < e.__options.side.length; d++) {
            var m = {
                horizontal: 0,
                vertical: 0
              },
              n = e.__options.side[d];
            "top" == n || "bottom" == n ? m.vertical = e.__options.distance[n] : m.horizontal = e.__options.distance[n], e.__sideChange(h, n), a.each(["natural", "constrained"], function (a, d) {
              if (l = null, e.__instance._trigger({
                container: k,
                event: b,
                helper: c,
                mode: d,
                results: g,
                satisfied: j,
                side: n,
                takeTest: function (a) {
                  l = a;
                },
                type: "positionTest"
              }), 1 == l || 0 != l && 0 == j) {
                var h = {
                    container: k,
                    distance: m,
                    fits: null,
                    mode: d,
                    outerSize: null,
                    side: n,
                    size: null,
                    target: f[n],
                    whole: null
                  },
                  o = "natural" == d ? i.free() : i.constrain(c.geo.available[k][n].width - m.horizontal, c.geo.available[k][n].height - m.vertical),
                  p = o.measure();
                if (h.size = p.size, h.outerSize = {
                  height: p.size.height + m.vertical,
                  width: p.size.width + m.horizontal
                }, "natural" == d ? c.geo.available[k][n].width >= h.outerSize.width && c.geo.available[k][n].height >= h.outerSize.height ? h.fits = !0 : h.fits = !1 : h.fits = p.fits, "window" == k && (h.fits ? "top" == n || "bottom" == n ? h.whole = c.geo.origin.windowOffset.right >= e.__options.minIntersection && c.geo.window.size.width - c.geo.origin.windowOffset.left >= e.__options.minIntersection : h.whole = c.geo.origin.windowOffset.bottom >= e.__options.minIntersection && c.geo.window.size.height - c.geo.origin.windowOffset.top >= e.__options.minIntersection : h.whole = !1), g.push(h), h.whole) j = !0;else if ("natural" == h.mode && (h.fits || h.size.width <= c.geo.available[k][n].width)) return !1;
              }
            });
          }
        }), e.__instance._trigger({
          edit: function (a) {
            g = a;
          },
          event: b,
          helper: c,
          results: g,
          type: "positionTested"
        }), g.sort(function (a, b) {
          if (a.whole && !b.whole) return -1;
          if (!a.whole && b.whole) return 1;
          if (a.whole && b.whole) {
            var c = e.__options.side.indexOf(a.side),
              d = e.__options.side.indexOf(b.side);
            return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
          }
          if (a.fits && !b.fits) return -1;
          if (!a.fits && b.fits) return 1;
          if (a.fits && b.fits) {
            var c = e.__options.side.indexOf(a.side),
              d = e.__options.side.indexOf(b.side);
            return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1;
          }
          return "document" == a.container && "bottom" == a.side && "natural" == a.mode ? -1 : 1;
        }), d = g[0], d.coord = {}, d.side) {
          case "left":
          case "right":
            d.coord.top = Math.floor(d.target - d.size.height / 2);
            break;
          case "bottom":
          case "top":
            d.coord.left = Math.floor(d.target - d.size.width / 2);
        }
        switch (d.side) {
          case "left":
            d.coord.left = c.geo.origin.windowOffset.left - d.outerSize.width;
            break;
          case "right":
            d.coord.left = c.geo.origin.windowOffset.right + d.distance.horizontal;
            break;
          case "top":
            d.coord.top = c.geo.origin.windowOffset.top - d.outerSize.height;
            break;
          case "bottom":
            d.coord.top = c.geo.origin.windowOffset.bottom + d.distance.vertical;
        }
        "window" == d.container ? "top" == d.side || "bottom" == d.side ? d.coord.left < 0 ? c.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? d.coord.left = 0 : d.coord.left = c.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : d.coord.left > c.geo.window.size.width - d.size.width && (c.geo.origin.windowOffset.left + this.__options.minIntersection <= c.geo.window.size.width ? d.coord.left = c.geo.window.size.width - d.size.width : d.coord.left = c.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - d.size.width) : d.coord.top < 0 ? c.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? d.coord.top = 0 : d.coord.top = c.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : d.coord.top > c.geo.window.size.height - d.size.height && (c.geo.origin.windowOffset.top + this.__options.minIntersection <= c.geo.window.size.height ? d.coord.top = c.geo.window.size.height - d.size.height : d.coord.top = c.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - d.size.height) : (d.coord.left > c.geo.window.size.width - d.size.width && (d.coord.left = c.geo.window.size.width - d.size.width), d.coord.left < 0 && (d.coord.left = 0)), e.__sideChange(h, d.side), c.tooltipClone = h[0], c.tooltipParent = e.__instance.option("parent").parent[0], c.mode = d.mode, c.whole = d.whole, c.origin = e.__instance._$origin[0], c.tooltip = e.__instance._$tooltip[0], delete d.container, delete d.fits, delete d.mode, delete d.outerSize, delete d.whole, d.distance = d.distance.horizontal || d.distance.vertical;
        var l = a.extend(!0, {}, d);
        if (e.__instance._trigger({
          edit: function (a) {
            d = a;
          },
          event: b,
          helper: c,
          position: l,
          type: "position"
        }), e.__options.functionPosition) {
          var m = e.__options.functionPosition.call(e, e.__instance, c, l);
          m && (d = m);
        }
        i.destroy();
        var n, o;
        "top" == d.side || "bottom" == d.side ? (n = {
          prop: "left",
          val: d.target - d.coord.left
        }, o = d.size.width - this.__options.minIntersection) : (n = {
          prop: "top",
          val: d.target - d.coord.top
        }, o = d.size.height - this.__options.minIntersection), n.val < this.__options.minIntersection ? n.val = this.__options.minIntersection : n.val > o && (n.val = o);
        var p;
        p = c.geo.origin.fixedLineage ? c.geo.origin.windowOffset : {
          left: c.geo.origin.windowOffset.left + c.geo.window.scroll.left,
          top: c.geo.origin.windowOffset.top + c.geo.window.scroll.top
        }, d.coord = {
          left: p.left + (d.coord.left - c.geo.origin.windowOffset.left),
          top: p.top + (d.coord.top - c.geo.origin.windowOffset.top)
        }, e.__sideChange(e.__instance._$tooltip, d.side), c.geo.origin.fixedLineage ? e.__instance._$tooltip.css("position", "fixed") : e.__instance._$tooltip.css("position", ""), e.__instance._$tooltip.css({
          left: d.coord.left,
          top: d.coord.top,
          height: d.size.height,
          width: d.size.width
        }).find(".tooltipster-arrow").css({
          left: "",
          top: ""
        }).css(n.prop, n.val), e.__instance._$tooltip.appendTo(e.__instance.option("parent")), e.__instance._trigger({
          type: "repositioned",
          event: b,
          position: d
        });
      },
      __sideChange: function (a, b) {
        a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + b);
      },
      __targetFind: function (a) {
        var b = {},
          c = this.__instance._$origin[0].getClientRects();
        if (c.length > 1) {
          var d = this.__instance._$origin.css("opacity");
          1 == d && (this.__instance._$origin.css("opacity", .99), c = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1));
        }
        if (c.length < 2) b.top = Math.floor(a.geo.origin.windowOffset.left + a.geo.origin.size.width / 2), b.bottom = b.top, b.left = Math.floor(a.geo.origin.windowOffset.top + a.geo.origin.size.height / 2), b.right = b.left;else {
          var e = c[0];
          b.top = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil(c.length / 2) - 1] : c[0], b.right = Math.floor(e.top + (e.bottom - e.top) / 2), e = c[c.length - 1], b.bottom = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil((c.length + 1) / 2) - 1] : c[c.length - 1], b.left = Math.floor(e.top + (e.bottom - e.top) / 2);
        }
        return b;
      }
    }
  }), a;
});
; // Authors: %Author Name%

$(function () {
  initSelectPlugin();
  initFormStyler();
  initFilterMenu();
  // initTab();
  asideControl();
  stickyClass();
  tableBtnMore();
  initTooltip();
});
$(window).on('resize', function () {});
$(window).on('load', function () {});
function initSelectPlugin() {
  $('.js-select-single').each(function () {
    let placeholderValue = $(this).data('placeholder');
    $(this).select2({
      placeholder: placeholderValue,
      dropdownAutoWidth: true,
      width: '100%'
    });
  });
  $('.js-select-multiple').select2({
    width: '100%',
    minimumResultsForSearch: -1
  });
}
function initFormStyler() {
  $('.js-checkbox, .js-radio').styler({});
  $('.js-file').styler({
    fileBrowse: 'Choose file',
    filePlaceholder: 'No file chosen'
  });
}
function initFilterMenu() {
  $('.js-filterBtn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('state_open');
    $('.js-filterMenu').toggleClass('state_open');
  });
  $(document).on('mouseup', function (e) {
    let container = $('.js-filterMenu');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.js-filterBtn, .js-filterMenu').removeClass('state_open');
    }
  });
}
function initTab() {
  $('.js-tabLink').on('click', function (e) {
    e.preventDefault();
    let controlIndex = $(this).parents('li').index();
    $('.js-tabLink').parents('.b-tableWrapper__tabControlItem').removeClass('-state_active');
    $(this).parents('.b-tableWrapper__tabControlItem').addClass('-state_active');
    $('.js-tabContent').hide();
    $('.js-tabContent').eq(controlIndex).show();
  });
}
function asideControl() {
  let asideControl = $('.js-asideControl');
  if (asideControl.length > 0) {
    asideControl.on('click', function () {
      $(this).toggleClass('is-active');
      $(this).parents('.b-asideControl').toggleClass('state_open');
      $('.js-aside').toggleClass('state_open');
    });
  }
}
function stickyClass() {
  if ($('.js-sticky').length > 0) {
    let stickyOffset = $('.js-sticky').offset();
    let $window = $(window);
    $window.scroll(function () {
      if ($window.scrollTop() >= stickyOffset.top) {
        $('.js-sticky').addClass('scrolled');
      }
    });
  }
}
function tableBtnMore() {
  $('.js-orderList-orderType-more').on('click', function () {
    $(this).toggleClass('state_open');
  });
}
function initTooltip(context) {
  $('.js-tooltip', context).tooltipster({
    maxWidth: 300,
    trigger: 'click',
    contentAsHTML: true,
    interactive: true
  });
}
