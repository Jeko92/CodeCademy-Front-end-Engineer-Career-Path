(function (e, t) {
  function i(e) {
    return new f(e);
  }
  function s(e) {
    if (Object.keys) return Object.keys(e);
    var t = [];
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    return t;
  }
  function o(e) {
    if (e.selector) return e.selector;
    if (e[0] && e[0].tagName) {
      var t = e[0].tagName.toLowerCase(),
        n = e.attr("id");
      n && (t += "#" + n);
      var r = e.attr("class");
      if (r) {
        r = r.split(" ");
        for (var i = 0; i < r.length; i++) t += "." + r[i];
      }
      return t;
    }
    return e;
  }
  function f(e, i, o) {
    (this.obj = e instanceof n ? e : r(e)), (this.flags = {});
    if (t !== o) {
      this.flags[i] = !0;
      for (var u in o.flags) o.flags.hasOwnProperty(u) && (this.flags[u] = !0);
    }
    var l = i ? a[i] : s(a),
      c = this;
    if (l)
      for (var h = 0, p = l.length; h < p; h++) {
        if (this.flags[l[h]]) continue;
        (function () {
          var e = l[h],
            t = new f(this.obj, e, this);
          if ("function" == typeof f.prototype[e]) {
            var n = this[e];
            this[e] = function () {
              return n.apply(c, arguments);
            };
            for (var i in f.prototype)
              f.prototype.hasOwnProperty(i) &&
                i !== e &&
                (this[e][i] = r.proxy(t[i], t));
          } else this[e] = t;
        }).call(this);
      }
  }
  function AssertionError(e) {
    Error.call(this),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, arguments.callee),
      (this.message = e),
      (this.name = "AssertionError");
  }
  function l(e) {
    return (
      (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)),
      "#" +
        ("0" + parseInt(e[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(e[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(e[3], 10).toString(16)).slice(-2)
    );
  }
  function c(e) {
    function t(e) {
      return e.toUpperCase() + e.toUpperCase();
    }
    return e
      ? e.match(/^#/)
        ? e.length === 4
          ? "#" + t(e.charAt(1)) + t(e.charAt(2)) + t(e.charAt(3))
          : e.toUpperCase()
        : e.match(/^rgb/)
        ? l(e).toUpperCase()
        : u[r.trim(e)]
      : "";
  }
  function h(e, t, n) {
    function s(e) {
      if (t.match(/^border/)) {
        var n = t.split(/-/);
        return n[0] + "-" + e + "-" + n[1];
      }
      return t + "-" + e;
    }
    var i = t.match(/color/);
    n = n.split(/\s/);
    var o = !0,
      u = r.map(["top", "right", "bottom", "left"], function (t, r) {
        var u = n[r] || n[r - 2] || n[0],
          a = e.css(s(t));
        return i ? c(u) !== (a = c(a)) && (o = !1) : u !== a && (o = !1), a;
      });
    return { passing: o, got: u.join(" ") };
  }
  function p(e, t, n) {
    n = n.split(/\s/);
    var i = !0,
      s = r.map(["width", "style", "color"], function (r, s) {
        var o = e.css(t + "-" + r);
        return (
          r === "color"
            ? (o = c(o)) !== c(n[s]) && (i = !1)
            : o !== n[s] && (i = !1),
          o
        );
      });
    return { passing: i, got: s.join(" ") };
  }
  function d(e) {
    return r
      .map(e, function (t, n) {
        return r.inArray(t, e) === n ? t : null;
      })
      .join(" ");
  }
  function v(e, t, n) {
    (this.deferred = e), (this.event = t), (this.args = n);
  }
  function m(e, t) {
    throw new v(e, t, [].slice.call(arguments, 2));
  }
  var n = e.jQuery,
    r = n;
  window.require && !n && ((n = r = require("jquery")), (module.exports = i));
  var u = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF ",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC ",
      crimson: "#DC143C ",
      cyan: "#00FFFF ",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9 ",
      darkgreen: "#006400 ",
      darkgrey: "#A9A9A9 ",
      darkkhaki: "#BDB76B ",
      darkmagenta: "#8B008B ",
      darkolivegreen: "#556B2F ",
      darkorange: "#FF8C00 ",
      darkorchid: "#9932CC ",
      darkred: "#8B0000",
      darksalmon: "#E9967A ",
      darkseagreen: "#8FBC8F ",
      darkslateblue: "#483D8B ",
      darkslategray: "#2F4F4F ",
      darkslategrey: "#2F4F4F ",
      darkturquoise: "#00CED1 ",
      darkviolet: "#9400D3 ",
      deeppink: "#FF1493 ",
      deepskyblue: "#00BFFF",
      dimgray: "#696969 ",
      dimgrey: "#696969 ",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222 ",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF ",
      gainsboro: "#DCDCDC ",
      ghostwhite: "#F8F8FF ",
      gold: "#FFD700 ",
      goldenrod: "#DAA520 ",
      gray: "#808080 ",
      green: "#008000 ",
      greenyellow: "#ADFF2F ",
      grey: "#808080 ",
      honeydew: "#F0FFF0 ",
      hotpink: "#FF69B4 ",
      indianred: "#CD5C5C",
      indigo: "#4B0082 ",
      ivory: "#FFFFF0 ",
      khaki: "#F0E68C ",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5 ",
      lawngreen: "#7CFC00 ",
      lemonchiffon: "#FFFACD ",
      lightblue: "#ADD8E6 ",
      lightcoral: "#F08080 ",
      lightcyan: "#E0FFFF ",
      lightgoldenrodyellow: "#FAFAD2 ",
      lightgray: "#D3D3D3 ",
      lightgreen: "#90EE90 ",
      lightgrey: "#D3D3D3 ",
      lightpink: "#FFB6C1 ",
      lightsalmon: "#FFA07A ",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA ",
      lightslategray: "#778899 ",
      lightslategrey: "#778899 ",
      lightsteelblue: "#B0C4DE ",
      lightyellow: "#FFFFE0 ",
      lime: "#00FF00 ",
      limegreen: "#32CD32 ",
      linen: "#FAF0E6 ",
      magenta: "#FF00FF ",
      maroon: "#800000 ",
      mediumaquamarine: "#66CDAA ",
      mediumblue: "#0000CD ",
      mediumorchid: "#BA55D3 ",
      mediumpurple: "#9370DB ",
      mediumseagreen: "#3CB371 ",
      mediumslateblue: "#7B68EE ",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC ",
      mediumvioletred: "#C71585 ",
      midnightblue: "#191970 ",
      mintcream: "#F5FFFA ",
      mistyrose: "#FFE4E1 ",
      moccasin: "#FFE4B5 ",
      navajowhite: "#FFDEAD",
      navy: "#000080 ",
      oldlace: "#FDF5E6 ",
      olive: "#808000 ",
      olivedrab: "#6B8E23 ",
      orange: "#FFA500 ",
      orangered: "#FF4500 ",
      orchid: "#DA70D6 ",
      palegoldenrod: "#EEE8AA ",
      palegreen: "#98FB98 ",
      paleturquoise: "#AFEEEE ",
      palevioletred: "#DB7093 ",
      papayawhip: "#FFEFD5 ",
      peachpuff: "#FFDAB9 ",
      peru: "#CD853F ",
      pink: "#FFC0CB ",
      plum: "#DDA0DD ",
      powderblue: "#B0E0E6 ",
      purple: "#800080 ",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072 ",
      sandybrown: "#F4A460 ",
      seagreen: "#2E8B57 ",
      seashell: "#FFF5EE ",
      sienna: "#A0522D ",
      silver: "#C0C0C0 ",
      skyblue: "#87CEEB ",
      slateblue: "#6A5ACD ",
      slategray: "#708090 ",
      slategrey: "#708090 ",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    },
    a = {
      not: ["to", "be", "have", "include", "only"],
      to: ["be", "have", "include", "match", "matchHtml", "not", "only"],
      be: [],
      is: [],
      are: [],
      have: [],
      has: [],
      any: [],
    };
  (AssertionError.prototype = new Error()),
    (AssertionError.prototype.constructor = AssertionError),
    (e.$expect = i),
    (i.Assertion = f),
    (i.AssertionError = AssertionError),
    (f.prototype.assert = function (e, t, n) {
      var i = this.flags.not ? !e : e;
      r.isFunction(t) && (n = t = t.call(this, !i)),
        (t = this.flags.not ? n : t);
      if (!i) throw new AssertionError(t);
      this.and = new f(this.obj);
    }),
    (f.prototype.exist = function (e) {
      return (
        this.assert(
          !!this.obj.length,
          e || "expected " + o(this.obj) + " to exist",
          e || "expected " + o(this.obj) + " not to exist"
        ),
        this
      );
    }),
    (f.prototype.elements =
      f.prototype.items =
      f.prototype.length =
        function (e, t) {
          var n = this.obj.length;
          return (
            this.assert(
              e === n,
              t ||
                "expected " +
                  o(this.obj) +
                  " to have a length of " +
                  e +
                  " but got " +
                  n,
              t || "expected " + o(this.obj) + " to not have a length of " + n
            ),
            this
          );
        }),
    (f.prototype.greaterThan = f.prototype.above =
      function (e, t) {
        return (
          this.assert(
            this.obj.length > e,
            t ||
              "expected " + o(this.obj) + " to have a length greater than " + e,
            t || "expected " + o(this.obj) + " to have a length less than " + e
          ),
          this
        );
      }),
    (f.prototype.lessThan = f.prototype.below =
      function (e, t) {
        return (
          this.assert(
            this.obj.length < e,
            t || "expected " + o(this.obj) + " to have a length less than " + e,
            t ||
              "expected " + o(this.obj) + " to have a length greater than " + e
          ),
          this
        );
      }),
    (f.prototype.eql = f.prototype.equal =
      function (e, t) {
        e = e instanceof n ? e : r(e);
        var i = function (e, t) {
            return e.length !== t.length
              ? !1
              : e.map(function (e, n) {
                  return r.inArray(n, t) > -1 ? !0 : null;
                }).length === e.length;
          },
          s = i(this.obj, e) && i(e, this.obj);
        return (
          this.assert(
            s,
            t || "expected " + o(this.obj) + " to equal " + o(e),
            t || "expected " + o(this.obj) + " to not equal " + o(e)
          ),
          this
        );
      }),
    (f.prototype.attr = function (e, n, r) {
      var i = this.obj.attr(e);
      return (
        t === n
          ? this.assert(
              t !== i,
              r || "expected " + o(this.obj) + " to have an attribute " + e,
              r || "expected " + o(this.obj) + " not to have attribute " + e
            )
          : this.assert(
              i === n,
              r ||
                "expected " +
                  o(this.obj) +
                  " to have an attribute " +
                  e +
                  " equals to " +
                  n,
              r ||
                "expected " +
                  o(this.obj) +
                  " to not have an attribute " +
                  e +
                  " equals to " +
                  n
            ),
        this
      );
    }),
    (f.prototype.css = function (e, t, n) {
      function l(n) {
        switch (e) {
          case "backgroundColor":
          case "background-color":
          case "color":
            f = (a = c(n.css(e))) === c(t);
            break;
          case "border-style":
          case "border-color":
          case "border-width":
          case "margin":
          case "padding":
            (a = h(n, e, t)), (f = a.passing), (a = a.got);
            break;
          case "border-top":
          case "border-right":
          case "border-left":
          case "border-bottom":
            (a = p(n, e, t)), (f = a.passing), (a = a.got);
            break;
          case "border":
            (f = !0),
              (a = r.map(["top", "right", "left", "bottom"], function (r) {
                var i = p(n, e + "-" + r, t);
                return i.passing || (f = !1), i.got;
              })),
              (a = d(a));
            break;
          case "border-radius":
            (a = []),
              (f =
                (a[0] = n.css("border-top-left-radius")) === t &&
                (a[1] = n.css("border-top-right-radius")) === t &&
                (a[2] = n.css("border-bottom-left-radius")) === t &&
                (a[3] = n.css("border-bottom-right-radius")) === t),
              (a = d(a));
            break;
          default:
            f = (a = n.css(e)) === t;
        }
        u.assert(f, s(a), s());
      }
      (e = r.trim(e)), (t = typeof t == "string" ? r.trim(t) : t);
      var i = this.obj,
        s = function (r) {
          return (
            n ||
            "expected " +
              o(i) +
              " to have its " +
              e +
              " style equal to " +
              t +
              (r ? " but got " + r : "")
          );
        },
        u = this,
        a,
        f;
      return (
        this.obj.each(function (e, t) {
          l(r(t));
        }),
        this
      );
    }),
    (f.prototype.text = function (e, t) {
      var n = this.obj.text();
      return (
        "number" == typeof e
          ? this.assert(
              n.length === e,
              t ||
                "expected " +
                  o(this.obj) +
                  " text to be of length " +
                  e +
                  " but got " +
                  n.length,
              t || "expected " + o(this.obj) + " text to not be of length " + e
            )
          : e instanceof RegExp
          ? this.assert(
              e.test(n),
              t || "expected " + o(this.obj) + " text to match " + String(e),
              t || "expected " + o(this.obj) + " text not to match " + String(e)
            )
          : null == e
          ? this.assert(
              !!n.length,
              t || "expected " + o(this.obj) + " to have text",
              t || "expected " + o(this.obj) + " to not have text"
            )
          : ((e = String(e)),
            this.assert(
              n === e,
              t ||
                "expected " +
                  o(this.obj) +
                  " text to be equal to " +
                  e +
                  " but got " +
                  n,
              t || "expected " + o(this.obj) + " text to not be equal to " + e
            )),
        this
      );
    }),
    (f.prototype.contain = function (e, t, n) {
      "boolean" != typeof t && ((n = t), (t = !1));
      var r = /[\.,-\/#!$%\^&\*;:{}=\-_`~()\s'"]/g,
        i;
      return (
        t
          ? (i = this.obj.is(":contains('" + e + "')"))
          : (i =
              this.obj
                .text()
                .replace(r, "")
                .toLowerCase()
                .indexOf(e.replace(r, "").toLowerCase()) > -1),
        this.assert(
          i,
          n || "expected " + o(this.obj) + ' to contain "' + e + '"',
          n || "expected " + o(this.obj) + ' not to contain "' + e + '"'
        ),
        this
      );
    }),
    r.each(
      [
        "width",
        "innerWidth",
        "outerWidth",
        "height",
        "innerHeight",
        "outerHeight",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, t) {
        f.prototype[t] = function (e, n) {
          var i = {
            ">": function (e, t) {
              return e > t;
            },
            ">=": function (e, t) {
              return e >= t;
            },
            "<": function (e, t) {
              return e < t;
            },
            "<=": function (e, t) {
              return e <= t;
            },
          };
          if (
            "string" == typeof e &&
            (i[r.trim(e).slice(0, 2)] || i[r.trim(e).charAt(0)])
          ) {
            e = r.trim(e);
            var s, u;
            if ((s = i[e.slice(0, 2)]))
              (u = e.slice(0, 2)), (e = parseFloat(e.slice(2)));
            else if ((s = i[e.charAt(0)]))
              (u = e.charAt(0)), (e = parseFloat(e.slice(1)));
            var a = this.obj[t]();
            this.assert(
              s(a, e),
              n ||
                "expected " +
                  o(this.obj) +
                  " to have a " +
                  t +
                  "  " +
                  u +
                  " " +
                  e,
              n ||
                "expected " +
                  o(this.obj) +
                  " not to have a " +
                  t +
                  "  " +
                  u +
                  " " +
                  e
            );
          } else {
            var f;
            this.assert(
              (f = this.obj[t]()) === e,
              n ||
                "expected " +
                  o(this.obj) +
                  " to have a " +
                  t +
                  " of " +
                  e +
                  " but got " +
                  f,
              n ||
                "expected " + o(this.obj) + " not to have a " + t + " of " + e
            );
          }
          return this;
        };
      }
    ),
    (f.prototype.value = f.prototype.val =
      function (e, t) {
        var n;
        this.assert(
          (n = this.obj.val()) === e,
          t ||
            "expected " + o(this.obj) + " to have value " + e + " but got " + n,
          t || "expected " + o(this.obj) + " not to have value " + e
        );
      }),
    (f.prototype.html = function (e, t) {
      var n;
      this.assert(
        (n = this.obj.html()) === e,
        t || "expected " + o(this.obj) + " to have HTML " + e + " but got " + n,
        t || "expected " + o(this.obj) + " not to have HTML " + e
      );
    }),
    r.each(
      [
        "children",
        "closest",
        "find",
        "next",
        "nextAll",
        "nextUntil",
        "offsetParent",
        "parent",
        "parents",
        "parentsUntil",
        "prev",
        "prevAll",
        "prevUntil",
        "siblings",
      ],
      function (e, t) {
        f.prototype[t] = function (e, n) {
          var r = this.obj[t](e);
          return (
            this.assert(
              !!r.length,
              n || "expected " + o(this.obj) + " to have " + t + " " + e,
              n || "expected " + o(this.obj) + " not to have " + t + " " + e
            ),
            (this.that = this.which = new f(r)),
            this
          );
        };
      }
    ),
    (f.prototype.have = f.prototype.find),
    (f.prototype.be =
      f.prototype.an =
      f.prototype.a =
        function (e, t) {
          return (
            this.assert(
              this.obj.is(e),
              t || "expected " + o(this.obj) + " to be " + o(e),
              t || "expected " + o(this.obj) + " not to be " + o(e)
            ),
            this
          );
        }),
    (f.prototype.matchHtml = function (e, t) {
      return (
        this.assert(
          e.exec(this.obj.html()),
          t || "expected " + o(this.obj) + " to match " + e,
          t || "expected " + o(this.obj) + " not to match " + e
        ),
        this
      );
    }),
    (f.prototype.match = function (e, t) {
      return this.text(e, t);
    }),
    (f.prototype.any = function (e, t) {
      if (e instanceof Function) {
        var n = 0;
        return (
          this.obj.each(function (t, r) {
            try {
              e(r);
            } catch (i) {
              if (!(i instanceof AssertionError)) throw i;
              n++;
            }
          }),
          this.assert(
            n < this.obj.length,
            t ||
              "expected " +
                o(this.obj) +
                " to have at least one " +
                "element that passed the any assertion",
            t ||
              "expected " +
                o(this.obj) +
                " to have no elements that " +
                "passed the any assertion"
          ),
          this
        );
      }
      throw TypeError(
        "The any assertion must be passed an assertion function as its first parameter."
      );
    }),
    (f.prototype.end = function () {
      return new f(this.obj.end());
    }),
    (v.prototype = new Error()),
    (i.DeferredSignal = v),
    (f.prototype.on = function (e, t) {
      var n = this.obj,
        i = r.Deferred(),
        s = function () {
          n.off(e, s);
          var r = null;
          try {
            (r = t.apply(this, arguments)), i.resolveWith(n, [null, r]);
          } catch (o) {
            i.rejectWith(n, [o, r]);
          }
          return r;
        };
      return this.obj.on(e, s), m(i, e, String(o(this.obj)));
    }),
    (i.wait = function (e, t) {
      var n = r.Deferred();
      return (
        setTimeout(function () {
          try {
            t(), n.resolve();
          } catch (e) {
            n.reject(e);
          }
        }, e),
        m(n, "wait", e)
      );
    }),
    (i.async = function (e) {
      var t = r.Deferred(),
        n = function (e) {
          if (e) {
            var n = new AssertionError(String(e));
            t.reject(n);
          } else t.resolve();
        };
      return (
        setTimeout(function () {
          try {
            e(n);
          } catch (r) {
            t.reject(r);
          }
        }, 0),
        m(t, "async")
      );
    }),
    r.each(
      [
        "blur",
        "change",
        "click",
        "dblclick",
        "error",
        "focus",
        "focusin",
        "focusout",
        "hover",
        "keydown",
        "keypress",
        "keyup",
        "load",
        "mousedown",
        "mouseenter",
        "mouseleave",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "resize",
        "select",
        "submit",
        "scroll",
      ],
      function (e, t) {
        f.prototype[t] = function (e) {
          this.on(t, e);
        };
      }
    ),
    (f.prototype["class"] = function (e, t) {
      this.above(0);
      var n = this;
      return (
        this.obj.each(function (i, s) {
          n.assert(
            r(s).hasClass(e),
            t || "expected " + o(n.obj) + " to have class " + e,
            t || "expected " + o(n.obj) + " not to have class " + e
          );
        }),
        this
      );
    }),
    r.each(
      ["visible", "hidden", "selected", "checked", "disabled", "empty"],
      function (e, t) {
        f.prototype[t] = function (e) {
          return (
            this.assert(
              this.obj.is(":" + t),
              e || "expected " + o(this.obj) + " to be " + t,
              e || "expected " + o(this.obj) + " not to be " + t
            ),
            this
          );
        };
      }
    );
})(this);
