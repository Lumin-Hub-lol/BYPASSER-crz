"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [765], {
        646: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("CircleCheckBig", [
                ["path", {
                    d: "M21.801 10A10 10 0 1 1 17 3.335",
                    key: "yps3ct"
                }],
                ["path", {
                    d: "m9 11 3 3L22 4",
                    key: "1pflzl"
                }]
            ])
        },
        968: (e, t, r) => {
            r.d(t, {
                b: () => a
            });
            var n = r(2115),
                o = r(3655),
                l = r(5155),
                i = n.forwardRef((e, t) => (0, l.jsx)(o.sG.label, { ...e,
                    ref: t,
                    onMouseDown: t => {
                        var r;
                        t.target.closest("button, input, select, textarea") || (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
                    }
                }));
            i.displayName = "Label";
            var a = i
        },
        1366: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("MessageCircle", [
                ["path", {
                    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
                    key: "vv11sd"
                }]
            ])
        },
        2085: (e, t, r) => {
            r.d(t, {
                F: () => i
            });
            var n = r(2596);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                l = n.$,
                i = (e, t) => r => {
                    var n;
                    if ((null == t ? void 0 : t.variants) == null) return l(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: i,
                        defaultVariants: a
                    } = t, s = Object.keys(i).map(e => {
                        let t = null == r ? void 0 : r[e],
                            n = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let l = o(t) || o(n);
                        return i[e][l]
                    }), c = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return l(e, s, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...a,
                                ...c
                            }[t]) : ({ ...a,
                                ...c
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        2596: (e, t, r) => {
            r.d(t, {
                $: () => n
            });

            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var l = t.length;
                            for (r = 0; r < l; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                        } else
                            for (n in t) t[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
        },
        3655: (e, t, r) => {
            r.d(t, {
                hO: () => s,
                sG: () => a
            });
            var n = r(2115),
                o = r(7650),
                l = r(9708),
                i = r(5155),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, a = n ? l.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function s(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        4454: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Cookie", [
                ["path", {
                    d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
                    key: "laymnq"
                }],
                ["path", {
                    d: "M8.5 8.5v.01",
                    key: "ue8clq"
                }],
                ["path", {
                    d: "M16 15.5v.01",
                    key: "14dtrp"
                }],
                ["path", {
                    d: "M12 12v.01",
                    key: "u5ubse"
                }],
                ["path", {
                    d: "M11 17v.01",
                    key: "1hyl5a"
                }],
                ["path", {
                    d: "M7 14v.01",
                    key: "uct60s"
                }]
            ])
        },
        5196: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        5339: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("CircleAlert", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "8",
                    y2: "12",
                    key: "1pkeuh"
                }],
                ["line", {
                    x1: "12",
                    x2: "12.01",
                    y1: "16",
                    y2: "16",
                    key: "4dfq90"
                }]
            ])
        },
        6101: (e, t, r) => {
            r.d(t, {
                s: () => i,
                t: () => l
            });
            var n = r(2115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function l(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = o(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
                }
            }

            function i(...e) {
                return n.useCallback(l(...e), e)
            }
        },
        6474: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        7580: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Users", [
                ["path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                    key: "1yyitq"
                }],
                ["circle", {
                    cx: "9",
                    cy: "7",
                    r: "4",
                    key: "nufk8"
                }],
                ["path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87",
                    key: "kshegd"
                }],
                ["path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75",
                    key: "1da9ce"
                }]
            ])
        },
        7863: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("ChevronUp", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        },
        8550: (e, t, r) => {
            r.d(t, {
                UC: () => ns,
                YJ: () => nu,
                In: () => ni,
                q7: () => nf,
                VF: () => nh,
                p4: () => np,
                JU: () => nd,
                ZL: () => na,
                bL: () => nn,
                wn: () => nv,
                PP: () => nm,
                wv: () => ng,
                l9: () => no,
                WT: () => nl,
                LM: () => nc
            });
            var n, o, l = r(2115),
                i = r.t(l, 2),
                a = r(7650);

            function s(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }

            function c(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            var u = r(5155);

            function d(e, t = []) {
                let r = [],
                    n = () => {
                        let t = r.map(e => l.createContext(e));
                        return function(r) {
                            let n = r ? .[e] || t;
                            return l.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: n
                                }
                            }), [r, n])
                        }
                    };
                return n.scopeName = e, [function(t, n) {
                    let o = l.createContext(n),
                        i = r.length;
                    r = [...r, n];
                    let a = t => {
                        let {
                            scope: r,
                            children: n,
                            ...a
                        } = t, s = r ? .[e] ? .[i] || o, c = l.useMemo(() => a, Object.values(a));
                        return (0, u.jsx)(s.Provider, {
                            value: c,
                            children: n
                        })
                    };
                    return a.displayName = t + "Provider", [a, function(r, a) {
                        let s = a ? .[e] ? .[i] || o,
                            c = l.useContext(s);
                        if (c) return c;
                        if (void 0 !== n) return n;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let n = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return l.useMemo(() => ({
                                [`__scope${t.scopeName}`]: n
                            }), [n])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(n, ...t)]
            }
            var f = r(6101),
                p = r(9708),
                h = l.createContext(void 0),
                m = r(3655);

            function v(e) {
                let t = l.useRef(e);
                return l.useEffect(() => {
                    t.current = e
                }), l.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var g = "dismissableLayer.update",
                y = l.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                b = l.forwardRef((e, t) => {
                    var r, o;
                    let {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: d,
                        onInteractOutside: p,
                        onDismiss: h,
                        ...b
                    } = e, E = l.useContext(y), [k, S] = l.useState(null), C = null !== (o = null == k ? void 0 : k.ownerDocument) && void 0 !== o ? o : null === (r = globalThis) || void 0 === r ? void 0 : r.document, [, R] = l.useState({}), A = (0, f.s)(t, e => S(e)), P = Array.from(E.layers), [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), j = P.indexOf(T), L = k ? P.indexOf(k) : -1, M = E.layersWithOutsidePointerEventsDisabled.size > 0, N = L >= j, O = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            n = v(e),
                            o = l.useRef(!1),
                            i = l.useRef(() => {});
                        return l.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                x("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (r.removeEventListener("click", i.current), i.current = t, r.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else r.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    r.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), r.removeEventListener("pointerdown", e), r.removeEventListener("click", i.current)
                            }
                        }, [r, n]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...E.branches].some(e => e.contains(t));
                        !N || r || (null == s || s(e), null == p || p(e), e.defaultPrevented || null == h || h())
                    }, C), D = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            n = v(e),
                            o = l.useRef(!1);
                        return l.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && x("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
                        }, [r, n]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...E.branches].some(e => e.contains(t)) || (null == d || d(e), null == p || p(e), e.defaultPrevented || null == h || h())
                    }, C);
                    return ! function(e, t = globalThis ? .document) {
                        let r = v(e);
                        l.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [r, t])
                    }(e => {
                        L === E.layers.size - 1 && (null == a || a(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
                    }, C), l.useEffect(() => {
                        if (k) return i && (0 === E.layersWithOutsidePointerEventsDisabled.size && (n = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(k)), E.layers.add(k), w(), () => {
                            i && 1 === E.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = n)
                        }
                    }, [k, C, i, E]), l.useEffect(() => () => {
                        k && (E.layers.delete(k), E.layersWithOutsidePointerEventsDisabled.delete(k), w())
                    }, [k, E]), l.useEffect(() => {
                        let e = () => R({});
                        return document.addEventListener(g, e), () => document.removeEventListener(g, e)
                    }, []), (0, u.jsx)(m.sG.div, { ...b,
                        ref: A,
                        style: {
                            pointerEvents: M ? N ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: c(e.onFocusCapture, D.onFocusCapture),
                        onBlurCapture: c(e.onBlurCapture, D.onBlurCapture),
                        onPointerDownCapture: c(e.onPointerDownCapture, O.onPointerDownCapture)
                    })
                });

            function w() {
                let e = new CustomEvent(g);
                document.dispatchEvent(e)
            }

            function x(e, t, r, n) {
                let {
                    discrete: o
                } = n, l = r.originalEvent.target, i = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: r
                });
                t && l.addEventListener(e, t, {
                    once: !0
                }), o ? (0, m.hO)(l, i) : l.dispatchEvent(i)
            }
            b.displayName = "DismissableLayer", l.forwardRef((e, t) => {
                let r = l.useContext(y),
                    n = l.useRef(null),
                    o = (0, f.s)(t, n);
                return l.useEffect(() => {
                    let e = n.current;
                    if (e) return r.branches.add(e), () => {
                        r.branches.delete(e)
                    }
                }, [r.branches]), (0, u.jsx)(m.sG.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var E = 0;

            function k() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var S = "focusScope.autoFocusOnMount",
                C = "focusScope.autoFocusOnUnmount",
                R = {
                    bubbles: !1,
                    cancelable: !0
                },
                A = l.forwardRef((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...a
                    } = e, [s, c] = l.useState(null), d = v(o), p = v(i), h = l.useRef(null), g = (0, f.s)(t, e => c(e)), y = l.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    l.useEffect(() => {
                        if (n) {
                            let e = function(e) {
                                    if (y.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? h.current = t : j(h.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (y.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null === t || s.contains(t) || j(h.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && j(s)
                            });
                            return s && r.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                            }
                        }
                    }, [n, s, y.paused]), l.useEffect(() => {
                        if (s) {
                            L.add(y);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(S, R);
                                s.addEventListener(S, d), s.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = document.activeElement;
                                    for (let n of e)
                                        if (j(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(P(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && j(s))
                            }
                            return () => {
                                s.removeEventListener(S, d), setTimeout(() => {
                                    let t = new CustomEvent(C, R);
                                    s.addEventListener(C, p), s.dispatchEvent(t), t.defaultPrevented || j(null != e ? e : document.body, {
                                        select: !0
                                    }), s.removeEventListener(C, p), L.remove(y)
                                }, 0)
                            }
                        }
                    }, [s, d, p, y]);
                    let b = l.useCallback(e => {
                        if (!r && !n || y.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, l] = function(e) {
                                    let t = P(e);
                                    return [T(t, e), T(t.reverse(), e)]
                                }(t);
                            n && l ? e.shiftKey || o !== l ? e.shiftKey && o === n && (e.preventDefault(), r && j(l, {
                                select: !0
                            })) : (e.preventDefault(), r && j(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, y.paused]);
                    return (0, u.jsx)(m.sG.div, {
                        tabIndex: -1,
                        ...a,
                        ref: g,
                        onKeyDown: b
                    })
                });

            function P(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function T(e, t) {
                for (let r of e)
                    if (! function(e, t) {
                            let {
                                upTo: r
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === r || e !== r);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function j(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            A.displayName = "FocusScope";
            var L = function() {
                let e = [];
                return {
                    add(t) {
                        let r = e[0];
                        t !== r && (null == r || r.pause()), (e = M(e, t)).unshift(t)
                    },
                    remove(t) {
                        var r;
                        null === (r = (e = M(e, t))[0]) || void 0 === r || r.resume()
                    }
                }
            }();

            function M(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            var N = globalThis ? .document ? l.useLayoutEffect : () => {},
                O = i["useId".toString()] || (() => void 0),
                D = 0;

            function z(e) {
                let [t, r] = l.useState(O());
                return N(() => {
                    e || r(e => e ? ? String(D++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let I = ["top", "right", "bottom", "left"],
                W = Math.min,
                F = Math.max,
                H = Math.round,
                B = Math.floor,
                _ = e => ({
                    x: e,
                    y: e
                }),
                G = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                V = {
                    start: "end",
                    end: "start"
                };

            function K(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function $(e) {
                return e.split("-")[0]
            }

            function q(e) {
                return e.split("-")[1]
            }

            function X(e) {
                return "x" === e ? "y" : "x"
            }

            function U(e) {
                return "y" === e ? "height" : "width"
            }
            let Y = new Set(["top", "bottom"]);

            function Z(e) {
                return Y.has($(e)) ? "y" : "x"
            }

            function J(e) {
                return e.replace(/start|end/g, e => V[e])
            }
            let Q = ["left", "right"],
                ee = ["right", "left"],
                et = ["top", "bottom"],
                er = ["bottom", "top"];

            function en(e) {
                return e.replace(/left|right|bottom|top/g, e => G[e])
            }

            function eo(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function el(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function ei(e, t, r) {
                let n, {
                        reference: o,
                        floating: l
                    } = e,
                    i = Z(t),
                    a = X(Z(t)),
                    s = U(a),
                    c = $(t),
                    u = "y" === i,
                    d = o.x + o.width / 2 - l.width / 2,
                    f = o.y + o.height / 2 - l.height / 2,
                    p = o[s] / 2 - l[s] / 2;
                switch (c) {
                    case "top":
                        n = {
                            x: d,
                            y: o.y - l.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - l.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (q(t)) {
                    case "start":
                        n[a] -= p * (r && u ? -1 : 1);
                        break;
                    case "end":
                        n[a] += p * (r && u ? -1 : 1)
                }
                return n
            }
            let ea = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: l = [],
                    platform: i
                } = r, a = l.filter(Boolean), s = await (null == i.isRTL ? void 0 : i.isRTL(t)), c = await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: u,
                    y: d
                } = ei(c, n, s), f = n, p = {}, h = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: l,
                        fn: m
                    } = a[r], {
                        x: v,
                        y: g,
                        data: y,
                        reset: b
                    } = await m({
                        x: u,
                        y: d,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: i,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    u = null != v ? v : u, d = null != g ? g : d, p = { ...p,
                        [l]: { ...p[l],
                            ...y
                        }
                    }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (c = !0 === b.rects ? await i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: u,
                        y: d
                    } = ei(c, f, s)), r = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function es(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: l,
                    rects: i,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = K(t, e), h = eo(p), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = el(await l.getClippingRect({
                    element: null == (r = await (null == l.isElement ? void 0 : l.isElement(m))) || r ? m : m.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s
                })), g = "floating" === d ? {
                    x: n,
                    y: o,
                    width: i.floating.width,
                    height: i.floating.height
                } : i.reference, y = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)), b = await (null == l.isElement ? void 0 : l.isElement(y)) && await (null == l.getScale ? void 0 : l.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = el(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: g,
                    offsetParent: y,
                    strategy: s
                }) : g);
                return {
                    top: (v.top - w.top + h.top) / b.y,
                    bottom: (w.bottom - v.bottom + h.bottom) / b.y,
                    left: (v.left - w.left + h.left) / b.x,
                    right: (w.right - v.right + h.right) / b.x
                }
            }

            function ec(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function eu(e) {
                return I.some(t => e[t] >= 0)
            }
            let ed = new Set(["left", "top"]);
            async function ef(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, l = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), i = $(r), a = q(r), s = "y" === Z(r), c = ed.has(i) ? -1 : 1, u = l && s ? -1 : 1, d = K(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return a && "number" == typeof h && (p = "end" === a ? -1 * h : h), s ? {
                    x: p * u,
                    y: f * c
                } : {
                    x: f * c,
                    y: p * u
                }
            }

            function ep() {
                return "undefined" != typeof window
            }

            function eh(e) {
                return eg(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function em(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function ev(e) {
                var t;
                return null == (t = (eg(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function eg(e) {
                return !!ep() && (e instanceof Node || e instanceof em(e).Node)
            }

            function ey(e) {
                return !!ep() && (e instanceof Element || e instanceof em(e).Element)
            }

            function eb(e) {
                return !!ep() && (e instanceof HTMLElement || e instanceof em(e).HTMLElement)
            }

            function ew(e) {
                return !!ep() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof em(e).ShadowRoot)
            }
            let ex = new Set(["inline", "contents"]);

            function eE(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = eN(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !ex.has(o)
            }
            let ek = new Set(["table", "td", "th"]),
                eS = [":popover-open", ":modal"];

            function eC(e) {
                return eS.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let eR = ["transform", "translate", "scale", "rotate", "perspective"],
                eA = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                eP = ["paint", "layout", "strict", "content"];

            function eT(e) {
                let t = ej(),
                    r = ey(e) ? eN(e) : e;
                return eR.some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || eA.some(e => (r.willChange || "").includes(e)) || eP.some(e => (r.contain || "").includes(e))
            }

            function ej() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let eL = new Set(["html", "body", "#document"]);

            function eM(e) {
                return eL.has(eh(e))
            }

            function eN(e) {
                return em(e).getComputedStyle(e)
            }

            function eO(e) {
                return ey(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function eD(e) {
                if ("html" === eh(e)) return e;
                let t = e.assignedSlot || e.parentNode || ew(e) && e.host || ev(e);
                return ew(t) ? t.host : t
            }

            function ez(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = eD(t);
                        return eM(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : eb(r) && eE(r) ? r : e(r)
                    }(e),
                    l = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = em(o);
                if (l) {
                    let e = eI(i);
                    return t.concat(i, i.visualViewport || [], eE(o) ? o : [], e && r ? ez(e) : [])
                }
                return t.concat(o, ez(o, [], r))
            }

            function eI(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function eW(e) {
                let t = eN(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = eb(e),
                    l = o ? e.offsetWidth : r,
                    i = o ? e.offsetHeight : n,
                    a = H(r) !== l || H(n) !== i;
                return a && (r = l, n = i), {
                    width: r,
                    height: n,
                    $: a
                }
            }

            function eF(e) {
                return ey(e) ? e : e.contextElement
            }

            function eH(e) {
                let t = eF(e);
                if (!eb(t)) return _(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: l
                    } = eW(t),
                    i = (l ? H(r.width) : r.width) / n,
                    a = (l ? H(r.height) : r.height) / o;
                return i && Number.isFinite(i) || (i = 1), a && Number.isFinite(a) || (a = 1), {
                    x: i,
                    y: a
                }
            }
            let eB = _(0);

            function e_(e) {
                let t = em(e);
                return ej() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eB
            }

            function eG(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let l = e.getBoundingClientRect(),
                    i = eF(e),
                    a = _(1);
                t && (n ? ey(n) && (a = eH(n)) : a = eH(e));
                let s = (void 0 === (o = r) && (o = !1), n && (!o || n === em(i)) && o) ? e_(i) : _(0),
                    c = (l.left + s.x) / a.x,
                    u = (l.top + s.y) / a.y,
                    d = l.width / a.x,
                    f = l.height / a.y;
                if (i) {
                    let e = em(i),
                        t = n && ey(n) ? em(n) : n,
                        r = e,
                        o = eI(r);
                    for (; o && n && t !== r;) {
                        let e = eH(o),
                            t = o.getBoundingClientRect(),
                            n = eN(o),
                            l = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            i = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        c *= e.x, u *= e.y, d *= e.x, f *= e.y, c += l, u += i, o = eI(r = em(o))
                    }
                }
                return el({
                    width: d,
                    height: f,
                    x: c,
                    y: u
                })
            }

            function eV(e, t) {
                let r = eO(e).scrollLeft;
                return t ? t.left + r : eG(ev(e)).left + r
            }

            function eK(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - (r ? 0 : eV(e, n)),
                    y: n.top + t.scrollTop
                }
            }
            let e$ = new Set(["absolute", "fixed"]);

            function eq(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = em(e),
                        n = ev(e),
                        o = r.visualViewport,
                        l = n.clientWidth,
                        i = n.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        l = o.width, i = o.height;
                        let e = ej();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: l,
                        height: i,
                        x: a,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = ev(e),
                        r = eO(e),
                        n = e.ownerDocument.body,
                        o = F(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        l = F(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        i = -r.scrollLeft + eV(e),
                        a = -r.scrollTop;
                    return "rtl" === eN(n).direction && (i += F(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: l,
                        x: i,
                        y: a
                    }
                }(ev(e));
                else if (ey(t)) n = function(e, t) {
                    let r = eG(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        l = eb(e) ? eH(e) : _(1),
                        i = e.clientWidth * l.x,
                        a = e.clientHeight * l.y;
                    return {
                        width: i,
                        height: a,
                        x: o * l.x,
                        y: n * l.y
                    }
                }(t, r);
                else {
                    let r = e_(e);
                    n = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return el(n)
            }

            function eX(e) {
                return "static" === eN(e).position
            }

            function eU(e, t) {
                if (!eb(e) || "fixed" === eN(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return ev(e) === r && (r = r.ownerDocument.body), r
            }

            function eY(e, t) {
                var r;
                let n = em(e);
                if (eC(e)) return n;
                if (!eb(e)) {
                    let t = eD(e);
                    for (; t && !eM(t);) {
                        if (ey(t) && !eX(t)) return t;
                        t = eD(t)
                    }
                    return n
                }
                let o = eU(e, t);
                for (; o && (r = o, ek.has(eh(r))) && eX(o);) o = eU(o, t);
                return o && eM(o) && eX(o) && !eT(o) ? n : o || function(e) {
                    let t = eD(e);
                    for (; eb(t) && !eM(t);) {
                        if (eT(t)) return t;
                        if (eC(t)) break;
                        t = eD(t)
                    }
                    return null
                }(e) || n
            }
            let eZ = async function(e) {
                    let t = this.getOffsetParent || eY,
                        r = this.getDimensions,
                        n = await r(e.floating);
                    return {
                        reference: function(e, t, r) {
                            let n = eb(t),
                                o = ev(t),
                                l = "fixed" === r,
                                i = eG(e, !0, l, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = _(0);
                            if (n || !n && !l) {
                                if (("body" !== eh(t) || eE(o)) && (a = eO(t)), n) {
                                    let e = eG(t, !0, l, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = eV(o))
                            }
                            l && !n && o && (s.x = eV(o));
                            let c = !o || n || l ? _(0) : eK(o, a);
                            return {
                                x: i.left + a.scrollLeft - s.x - c.x,
                                y: i.top + a.scrollTop - s.y - c.y,
                                width: i.width,
                                height: i.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }
                },
                eJ = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: r,
                            offsetParent: n,
                            strategy: o
                        } = e, l = "fixed" === o, i = ev(n), a = !!t && eC(t.floating);
                        if (n === i || a && l) return r;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = _(1),
                            u = _(0),
                            d = eb(n);
                        if ((d || !d && !l) && (("body" !== eh(n) || eE(i)) && (s = eO(n)), eb(n))) {
                            let e = eG(n);
                            c = eH(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
                        }
                        let f = !i || d || l ? _(0) : eK(i, s, !0);
                        return {
                            width: r.width * c.x,
                            height: r.height * c.y,
                            x: r.x * c.x - s.scrollLeft * c.x + u.x + f.x,
                            y: r.y * c.y - s.scrollTop * c.y + u.y + f.y
                        }
                    },
                    getDocumentElement: ev,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: n,
                            strategy: o
                        } = e, l = [..."clippingAncestors" === r ? eC(t) ? [] : function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let n = ez(e, [], !1).filter(e => ey(e) && "body" !== eh(e)),
                                o = null,
                                l = "fixed" === eN(e).position,
                                i = l ? eD(e) : e;
                            for (; ey(i) && !eM(i);) {
                                let t = eN(i),
                                    r = eT(i);
                                r || "fixed" !== t.position || (o = null), (l ? !r && !o : !r && "static" === t.position && !!o && e$.has(o.position) || eE(i) && !r && function e(t, r) {
                                    let n = eD(t);
                                    return !(n === r || !ey(n) || eM(n)) && ("fixed" === eN(n).position || e(n, r))
                                }(e, i)) ? n = n.filter(e => e !== i) : o = t, i = eD(i)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(r), n], i = l[0], a = l.reduce((e, r) => {
                            let n = eq(t, r, o);
                            return e.top = F(n.top, e.top), e.right = W(n.right, e.right), e.bottom = W(n.bottom, e.bottom), e.left = F(n.left, e.left), e
                        }, eq(t, i, o));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: eY,
                    getElementRects: eZ,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: r
                        } = eW(e);
                        return {
                            width: t,
                            height: r
                        }
                    },
                    getScale: eH,
                    isElement: ey,
                    isRTL: function(e) {
                        return "rtl" === eN(e).direction
                    }
                };

            function eQ(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let e0 = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: l,
                            platform: i,
                            elements: a,
                            middlewareData: s
                        } = t, {
                            element: c,
                            padding: u = 0
                        } = K(e, t) || {};
                        if (null == c) return {};
                        let d = eo(u),
                            f = {
                                x: r,
                                y: n
                            },
                            p = X(Z(o)),
                            h = U(p),
                            m = await i.getDimensions(c),
                            v = "y" === p,
                            g = v ? "clientHeight" : "clientWidth",
                            y = l.reference[h] + l.reference[p] - f[p] - l.floating[h],
                            b = f[p] - l.reference[p],
                            w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c)),
                            x = w ? w[g] : 0;
                        x && await (null == i.isElement ? void 0 : i.isElement(w)) || (x = a.floating[g] || l.floating[h]);
                        let E = x / 2 - m[h] / 2 - 1,
                            k = W(d[v ? "top" : "left"], E),
                            S = W(d[v ? "bottom" : "right"], E),
                            C = x - m[h] - S,
                            R = x / 2 - m[h] / 2 + (y / 2 - b / 2),
                            A = F(k, W(R, C)),
                            P = !s.arrow && null != q(o) && R !== A && l.reference[h] / 2 - (R < k ? k : S) - m[h] / 2 < 0,
                            T = P ? R < k ? R - k : R - C : 0;
                        return {
                            [p]: f[p] + T,
                            data: {
                                [p]: A,
                                centerOffset: R - A - T,
                                ...P && {
                                    alignmentOffset: T
                                }
                            },
                            reset: P
                        }
                    }
                }),
                e1 = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: eJ,
                            ...r
                        },
                        l = { ...o.platform,
                            _c: n
                        };
                    return ea(e, t, { ...o,
                        platform: l
                    })
                };
            var e2 = "undefined" != typeof document ? l.useLayoutEffect : function() {};

            function e5(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!e5(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !e5(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function e6(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function e4(e, t) {
                let r = e6(e);
                return Math.round(t * r) / r
            }

            function e9(e) {
                let t = l.useRef(e);
                return e2(() => {
                    t.current = e
                }), t
            }
            let e3 = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? e0({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? e0({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                e8 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let {
                                    x: o,
                                    y: l,
                                    placement: i,
                                    middlewareData: a
                                } = t, s = await ef(t, e);
                                return i === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: l + s.y,
                                    data: { ...s,
                                        placement: i
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e7 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o
                                } = t, {
                                    mainAxis: l = !0,
                                    crossAxis: i = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...s
                                } = K(e, t), c = {
                                    x: r,
                                    y: n
                                }, u = await es(t, s), d = Z($(o)), f = X(d), p = c[f], h = c[d];
                                if (l) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        r = p + u[e],
                                        n = p - u[t];
                                    p = F(r, W(p, n))
                                }
                                if (i) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        r = h + u[e],
                                        n = h - u[t];
                                    h = F(r, W(h, n))
                                }
                                let m = a.fn({ ...t,
                                    [f]: p,
                                    [d]: h
                                });
                                return { ...m,
                                    data: {
                                        x: m.x - r,
                                        y: m.y - n,
                                        enabled: {
                                            [f]: l,
                                            [d]: i
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                te = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o,
                                    rects: l,
                                    middlewareData: i
                                } = t, {
                                    offset: a = 0,
                                    mainAxis: s = !0,
                                    crossAxis: c = !0
                                } = K(e, t), u = {
                                    x: r,
                                    y: n
                                }, d = Z(o), f = X(d), p = u[f], h = u[d], m = K(a, t), v = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (s) {
                                    let e = "y" === f ? "height" : "width",
                                        t = l.reference[f] - l.floating[e] + v.mainAxis,
                                        r = l.reference[f] + l.reference[e] - v.mainAxis;
                                    p < t ? p = t : p > r && (p = r)
                                }
                                if (c) {
                                    var g, y;
                                    let e = "y" === f ? "width" : "height",
                                        t = ed.has($(o)),
                                        r = l.reference[d] - l.floating[e] + (t && (null == (g = i.offset) ? void 0 : g[d]) || 0) + (t ? 0 : v.crossAxis),
                                        n = l.reference[d] + l.reference[e] + (t ? 0 : (null == (y = i.offset) ? void 0 : y[d]) || 0) - (t ? v.crossAxis : 0);
                                    h < r ? h = r : h > n && (h = n)
                                }
                                return {
                                    [f]: p,
                                    [d]: h
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tt = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var r, n, o, l, i;
                                let {
                                    placement: a,
                                    middlewareData: s,
                                    rects: c,
                                    initialPlacement: u,
                                    platform: d,
                                    elements: f
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: m,
                                    fallbackStrategy: v = "bestFit",
                                    fallbackAxisSideDirection: g = "none",
                                    flipAlignment: y = !0,
                                    ...b
                                } = K(e, t);
                                if (null != (r = s.arrow) && r.alignmentOffset) return {};
                                let w = $(a),
                                    x = Z(u),
                                    E = $(u) === u,
                                    k = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                                    S = m || (E || !y ? [en(u)] : function(e) {
                                        let t = en(e);
                                        return [J(e), t, J(t)]
                                    }(u)),
                                    C = "none" !== g;
                                !m && C && S.push(... function(e, t, r, n) {
                                    let o = q(e),
                                        l = function(e, t, r) {
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? ee : Q;
                                                    return t ? Q : ee;
                                                case "left":
                                                case "right":
                                                    return t ? et : er;
                                                default:
                                                    return []
                                            }
                                        }($(e), "start" === r, n);
                                    return o && (l = l.map(e => e + "-" + o), t && (l = l.concat(l.map(J)))), l
                                }(u, y, g, k));
                                let R = [u, ...S],
                                    A = await es(t, b),
                                    P = [],
                                    T = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                                if (p && P.push(A[w]), h) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = q(e),
                                            o = X(Z(e)),
                                            l = U(o),
                                            i = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[l] > t.floating[l] && (i = en(i)), [i, en(i)]
                                    }(a, c, k);
                                    P.push(A[e[0]], A[e[1]])
                                }
                                if (T = [...T, {
                                        placement: a,
                                        overflows: P
                                    }], !P.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = R[e];
                                    if (t && ("alignment" !== h || x === Z(t) || T.every(e => e.overflows[0] > 0 && Z(e.placement) === x))) return {
                                        data: {
                                            index: e,
                                            overflows: T
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let r = null == (l = T.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
                                    if (!r) switch (v) {
                                        case "bestFit":
                                            {
                                                let e = null == (i = T.filter(e => {
                                                    if (C) {
                                                        let t = Z(e.placement);
                                                        return t === x || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : i[0];e && (r = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            r = u
                                    }
                                    if (a !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tr = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let o, l;
                                let {
                                    placement: i,
                                    rects: a,
                                    platform: s,
                                    elements: c
                                } = t, {
                                    apply: u = () => {},
                                    ...d
                                } = K(e, t), f = await es(t, d), p = $(i), h = q(i), m = "y" === Z(i), {
                                    width: v,
                                    height: g
                                } = a.floating;
                                "top" === p || "bottom" === p ? (o = p, l = h === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (l = p, o = "end" === h ? "top" : "bottom");
                                let y = g - f.top - f.bottom,
                                    b = v - f.left - f.right,
                                    w = W(g - f[o], y),
                                    x = W(v - f[l], b),
                                    E = !t.middlewareData.shift,
                                    k = w,
                                    S = x;
                                if (null != (r = t.middlewareData.shift) && r.enabled.x && (S = b), null != (n = t.middlewareData.shift) && n.enabled.y && (k = y), E && !h) {
                                    let e = F(f.left, 0),
                                        t = F(f.right, 0),
                                        r = F(f.top, 0),
                                        n = F(f.bottom, 0);
                                    m ? S = v - 2 * (0 !== e || 0 !== t ? e + t : F(f.left, f.right)) : k = g - 2 * (0 !== r || 0 !== n ? r + n : F(f.top, f.bottom))
                                }
                                await u({ ...t,
                                    availableWidth: S,
                                    availableHeight: k
                                });
                                let C = await s.getDimensions(c.floating);
                                return v !== C.width || g !== C.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tn = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: r
                                } = t, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = K(e, t);
                                switch (n) {
                                    case "referenceHidden":
                                        {
                                            let e = ec(await es(t, { ...o,
                                                elementContext: "reference"
                                            }), r.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: e,
                                                    referenceHidden: eu(e)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let e = ec(await es(t, { ...o,
                                                altBoundary: !0
                                            }), r.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: e,
                                                    escaped: eu(e)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                to = (e, t) => ({ ...e3(e),
                    options: [e, t]
                });
            var tl = l.forwardRef((e, t) => {
                let {
                    children: r,
                    width: n = 10,
                    height: o = 5,
                    ...l
                } = e;
                return (0, u.jsx)(m.sG.svg, { ...l,
                    ref: t,
                    width: n,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? r : (0, u.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            tl.displayName = "Arrow";
            var ti = "Popper",
                [ta, ts] = d(ti),
                [tc, tu] = ta(ti),
                td = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = l.useState(null);
                    return (0, u.jsx)(tc, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o,
                        children: r
                    })
                };
            td.displayName = ti;
            var tf = "PopperAnchor",
                tp = l.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...o
                    } = e, i = tu(tf, r), a = l.useRef(null), s = (0, f.s)(t, a);
                    return l.useEffect(() => {
                        i.onAnchorChange((null == n ? void 0 : n.current) || a.current)
                    }), n ? null : (0, u.jsx)(m.sG.div, { ...o,
                        ref: s
                    })
                });
            tp.displayName = tf;
            var th = "PopperContent",
                [tm, tv] = ta(th),
                tg = l.forwardRef((e, t) => {
                    var r, n, o, i, s, c, d, p;
                    let {
                        __scopePopper: h,
                        side: g = "bottom",
                        sideOffset: y = 0,
                        align: b = "center",
                        alignOffset: w = 0,
                        arrowPadding: x = 0,
                        avoidCollisions: E = !0,
                        collisionBoundary: k = [],
                        collisionPadding: S = 0,
                        sticky: C = "partial",
                        hideWhenDetached: R = !1,
                        updatePositionStrategy: A = "optimized",
                        onPlaced: P,
                        ...T
                    } = e, j = tu(th, h), [L, M] = l.useState(null), O = (0, f.s)(t, e => M(e)), [D, z] = l.useState(null), I = function(e) {
                        let [t, r] = l.useState(void 0);
                        return N(() => {
                            if (e) {
                                r({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let n, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let l = t[0];
                                    if ("borderBoxSize" in l) {
                                        let e = l.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        n = t.inlineSize, o = t.blockSize
                                    } else n = e.offsetWidth, o = e.offsetHeight;
                                    r({
                                        width: n,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            r(void 0)
                        }, [e]), t
                    }(D), H = null !== (d = null == I ? void 0 : I.width) && void 0 !== d ? d : 0, _ = null !== (p = null == I ? void 0 : I.height) && void 0 !== p ? p : 0, G = "number" == typeof S ? S : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...S
                    }, V = Array.isArray(k) ? k : [k], K = V.length > 0, $ = {
                        padding: G,
                        boundary: V.filter(tx),
                        altBoundary: K
                    }, {
                        refs: q,
                        floatingStyles: X,
                        placement: U,
                        isPositioned: Y,
                        middlewareData: Z
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: i,
                                floating: s
                            } = {},
                            transform: c = !0,
                            whileElementsMounted: u,
                            open: d
                        } = e, [f, p] = l.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [h, m] = l.useState(n);
                        e5(h, n) || m(n);
                        let [v, g] = l.useState(null), [y, b] = l.useState(null), w = l.useCallback(e => {
                            e !== S.current && (S.current = e, g(e))
                        }, []), x = l.useCallback(e => {
                            e !== C.current && (C.current = e, b(e))
                        }, []), E = i || v, k = s || y, S = l.useRef(null), C = l.useRef(null), R = l.useRef(f), A = null != u, P = e9(u), T = e9(o), j = e9(d), L = l.useCallback(() => {
                            if (!S.current || !C.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: h
                            };
                            T.current && (e.platform = T.current), e1(S.current, C.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== j.current
                                };
                                M.current && !e5(R.current, t) && (R.current = t, a.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [h, t, r, T, j]);
                        e2(() => {
                            !1 === d && R.current.isPositioned && (R.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let M = l.useRef(!1);
                        e2(() => (M.current = !0, () => {
                            M.current = !1
                        }), []), e2(() => {
                            if (E && (S.current = E), k && (C.current = k), E && k) {
                                if (P.current) return P.current(E, k, L);
                                L()
                            }
                        }, [E, k, L, P, A]);
                        let N = l.useMemo(() => ({
                                reference: S,
                                floating: C,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            O = l.useMemo(() => ({
                                reference: E,
                                floating: k
                            }), [E, k]),
                            D = l.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!O.floating) return e;
                                let t = e4(O.floating, f.x),
                                    n = e4(O.floating, f.y);
                                return c ? { ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...e6(O.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, c, O.floating, f.x, f.y]);
                        return l.useMemo(() => ({ ...f,
                            update: L,
                            refs: N,
                            elements: O,
                            floatingStyles: D
                        }), [f, L, N, O, D])
                    }({
                        strategy: "fixed",
                        placement: g + ("center" !== b ? "-" + b : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return function(e, t, r, n) {
                                let o;
                                void 0 === n && (n = {});
                                let {
                                    ancestorScroll: l = !0,
                                    ancestorResize: i = !0,
                                    elementResize: a = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: c = !1
                                } = n, u = eF(e), d = l || i ? [...u ? ez(u) : [], ...ez(t)] : [];
                                d.forEach(e => {
                                    l && e.addEventListener("scroll", r, {
                                        passive: !0
                                    }), i && e.addEventListener("resize", r)
                                });
                                let f = u && s ? function(e, t) {
                                        let r, n = null,
                                            o = ev(e);

                                        function l() {
                                            var e;
                                            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                        }
                                        return ! function i(a, s) {
                                            void 0 === a && (a = !1), void 0 === s && (s = 1), l();
                                            let c = e.getBoundingClientRect(),
                                                {
                                                    left: u,
                                                    top: d,
                                                    width: f,
                                                    height: p
                                                } = c;
                                            if (a || t(), !f || !p) return;
                                            let h = B(d),
                                                m = B(o.clientWidth - (u + f)),
                                                v = {
                                                    rootMargin: -h + "px " + -m + "px " + -B(o.clientHeight - (d + p)) + "px " + -B(u) + "px",
                                                    threshold: F(0, W(1, s)) || 1
                                                },
                                                g = !0;

                                            function y(t) {
                                                let n = t[0].intersectionRatio;
                                                if (n !== s) {
                                                    if (!g) return i();
                                                    n ? i(!1, n) : r = setTimeout(() => {
                                                        i(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== n || eQ(c, e.getBoundingClientRect()) || i(), g = !1
                                            }
                                            try {
                                                n = new IntersectionObserver(y, { ...v,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                n = new IntersectionObserver(y, v)
                                            }
                                            n.observe(e)
                                        }(!0), l
                                    }(u, r) : null,
                                    p = -1,
                                    h = null;
                                a && (h = new ResizeObserver(e => {
                                    let [n] = e;
                                    n && n.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = h) || e.observe(t)
                                    })), r()
                                }), u && !c && h.observe(u), h.observe(t));
                                let m = c ? eG(e) : null;
                                return c && function t() {
                                    let n = eG(e);
                                    m && !eQ(m, n) && r(), m = n, o = requestAnimationFrame(t)
                                }(), r(), () => {
                                    var e;
                                    d.forEach(e => {
                                        l && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                                    }), null == f || f(), null == (e = h) || e.disconnect(), h = null, c && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === A
                            })
                        },
                        elements: {
                            reference: j.anchor
                        },
                        middleware: [e8({
                            mainAxis: y + _,
                            alignmentAxis: w
                        }), E && e7({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === C ? te() : void 0,
                            ...$
                        }), E && tt({ ...$
                        }), tr({ ...$,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: r,
                                    availableWidth: n,
                                    availableHeight: o
                                } = e, {
                                    width: l,
                                    height: i
                                } = r.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(n, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(l, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(i, "px"))
                            }
                        }), D && to({
                            element: D,
                            padding: x
                        }), tE({
                            arrowWidth: H,
                            arrowHeight: _
                        }), R && tn({
                            strategy: "referenceHidden",
                            ...$
                        })]
                    }), [J, Q] = tk(U), ee = v(P);
                    N(() => {
                        Y && (null == ee || ee())
                    }, [Y, ee]);
                    let et = null === (r = Z.arrow) || void 0 === r ? void 0 : r.x,
                        er = null === (n = Z.arrow) || void 0 === n ? void 0 : n.y,
                        en = (null === (o = Z.arrow) || void 0 === o ? void 0 : o.centerOffset) !== 0,
                        [eo, el] = l.useState();
                    return N(() => {
                        L && el(window.getComputedStyle(L).zIndex)
                    }, [L]), (0, u.jsx)("div", {
                        ref: q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...X,
                            transform: Y ? X.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eo,
                            "--radix-popper-transform-origin": [null === (i = Z.transformOrigin) || void 0 === i ? void 0 : i.x, null === (s = Z.transformOrigin) || void 0 === s ? void 0 : s.y].join(" "),
                            ...(null === (c = Z.hide) || void 0 === c ? void 0 : c.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, u.jsx)(tm, {
                            scope: h,
                            placedSide: J,
                            onArrowChange: z,
                            arrowX: et,
                            arrowY: er,
                            shouldHideArrow: en,
                            children: (0, u.jsx)(m.sG.div, {
                                "data-side": J,
                                "data-align": Q,
                                ...T,
                                ref: O,
                                style: { ...T.style,
                                    animation: Y ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            tg.displayName = th;
            var ty = "PopperArrow",
                tb = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tw = l.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = tv(ty, r), l = tb[o.placedSide];
                    return (0, u.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [l]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, u.jsx)(tl, { ...n,
                            ref: t,
                            style: { ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function tx(e) {
                return null !== e
            }
            tw.displayName = ty;
            var tE = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, l, i;
                    let {
                        placement: a,
                        rects: s,
                        middlewareData: c
                    } = t, u = (null === (r = c.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, f = u ? 0 : e.arrowHeight, [p, h] = tk(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (l = null === (n = c.arrow) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0) + d / 2, g = (null !== (i = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== i ? i : 0) + f / 2, y = "", b = "";
                    return "bottom" === p ? (y = u ? m : "".concat(v, "px"), b = "".concat(-f, "px")) : "top" === p ? (y = u ? m : "".concat(v, "px"), b = "".concat(s.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), b = u ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(s.floating.width + f, "px"), b = u ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function tk(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var tS = l.forwardRef((e, t) => {
                var r, n;
                let {
                    container: o,
                    ...i
                } = e, [s, c] = l.useState(!1);
                N(() => c(!0), []);
                let d = o || s && (null === (n = globalThis) || void 0 === n ? void 0 : null === (r = n.document) || void 0 === r ? void 0 : r.body);
                return d ? a.createPortal((0, u.jsx)(m.sG.div, { ...i,
                    ref: t
                }), d) : null
            });

            function tC({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [n, o] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = l.useState(e),
                        [n] = r,
                        o = l.useRef(n),
                        i = v(t);
                    return l.useEffect(() => {
                        o.current !== n && (i(n), o.current = n)
                    }, [n, o, i]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), i = void 0 !== e, a = i ? e : n, s = v(r);
                return [a, l.useCallback(t => {
                    if (i) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && s(r)
                    } else o(t)
                }, [i, e, o, s])]
            }
            tS.displayName = "Portal";
            var tR = l.forwardRef((e, t) => (0, u.jsx)(m.sG.span, { ...e,
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            }));
            tR.displayName = "VisuallyHidden";
            var tA = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                tP = new WeakMap,
                tT = new WeakMap,
                tj = {},
                tL = 0,
                tM = function(e) {
                    return e && (e.host || tM(e.parentNode))
                },
                tN = function(e, t, r, n) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var r = tM(e);
                        return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    tj[r] || (tj[r] = new WeakMap);
                    var l = tj[r],
                        i = [],
                        a = new Set,
                        s = new Set(o),
                        c = function(e) {
                            !(!e || a.has(e)) && (a.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var u = function(e) {
                        !(!e || s.has(e)) && Array.prototype.forEach.call(e.children, function(e) {
                            if (a.has(e)) u(e);
                            else try {
                                var t = e.getAttribute(n),
                                    o = null !== t && "false" !== t,
                                    s = (tP.get(e) || 0) + 1,
                                    c = (l.get(e) || 0) + 1;
                                tP.set(e, s), l.set(e, c), i.push(e), 1 === s && o && tT.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return u(t), a.clear(), tL++,
                        function() {
                            i.forEach(function(e) {
                                var t = tP.get(e) - 1,
                                    o = l.get(e) - 1;
                                tP.set(e, t), l.set(e, o), t || (tT.has(e) || e.removeAttribute(n), tT.delete(e)), o || e.removeAttribute(r)
                            }), --tL || (tP = new WeakMap, tP = new WeakMap, tT = new WeakMap, tj = {})
                        }
                },
                tO = function(e, t, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var n = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || tA(e);
                    return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), tN(n, o, r, "aria-hidden")) : function() {
                        return null
                    }
                },
                tD = function() {
                    return (tD = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function tz(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r
            }
            Object.create;
            Object.create;
            var tI = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
                tW = "width-before-scroll-bar";

            function tF(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var tH = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                tB = new WeakMap;

            function t_(e) {
                return e
            }
            var tG = function(e) {
                    void 0 === e && (e = {});
                    var t, r, n, o, l = (t = null, void 0 === r && (r = t_), n = [], o = !1, {
                        read: function() {
                            if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return n.length ? n[n.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = r(e, o);
                            return n.push(t),
                                function() {
                                    n = n.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (o = !0; n.length;) {
                                var t = n;
                                n = [], t.forEach(e)
                            }
                            n = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return n
                                }
                            }
                        },
                        assignMedium: function(e) {
                            o = !0;
                            var t = [];
                            if (n.length) {
                                var r = n;
                                n = [], r.forEach(e), t = n
                            }
                            var l = function() {
                                    var r = t;
                                    t = [], r.forEach(e)
                                },
                                i = function() {
                                    return Promise.resolve().then(l)
                                };
                            i(), n = {
                                push: function(e) {
                                    t.push(e), i()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), n
                                }
                            }
                        }
                    });
                    return l.options = tD({
                        async: !0,
                        ssr: !1
                    }, e), l
                }(),
                tV = function() {},
                tK = l.forwardRef(function(e, t) {
                    var r, n, o, i, a = l.useRef(null),
                        s = l.useState({
                            onScrollCapture: tV,
                            onWheelCapture: tV,
                            onTouchMoveCapture: tV
                        }),
                        c = s[0],
                        u = s[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        g = e.sideCar,
                        y = e.noRelative,
                        b = e.noIsolation,
                        w = e.inert,
                        x = e.allowPinchZoom,
                        E = e.as,
                        k = e.gapMode,
                        S = tz(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        C = (r = [a, t], n = function(e) {
                            return r.forEach(function(t) {
                                return tF(t, e)
                            })
                        }, (o = (0, l.useState)(function() {
                            return {
                                value: null,
                                callback: n,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = n, i = o.facade, tH(function() {
                            var e = tB.get(i);
                            if (e) {
                                var t = new Set(e),
                                    n = new Set(r),
                                    o = i.current;
                                t.forEach(function(e) {
                                    n.has(e) || tF(e, null)
                                }), n.forEach(function(e) {
                                    t.has(e) || tF(e, o)
                                })
                            }
                            tB.set(i, r)
                        }, [r]), i),
                        R = tD(tD({}, S), c);
                    return l.createElement(l.Fragment, null, m && l.createElement(g, {
                        sideCar: tG,
                        removeScrollBar: h,
                        shards: v,
                        noRelative: y,
                        noIsolation: b,
                        inert: w,
                        setCallbacks: u,
                        allowPinchZoom: !!x,
                        lockRef: a,
                        gapMode: k
                    }), d ? l.cloneElement(l.Children.only(f), tD(tD({}, R), {
                        ref: C
                    })) : l.createElement(void 0 === E ? "div" : E, tD({}, R, {
                        className: p,
                        ref: C
                    }), f))
                });
            tK.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, tK.classNames = {
                fullWidth: tW,
                zeroRight: tI
            };
            var t$ = function(e) {
                var t = e.sideCar,
                    r = tz(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var n = t.read();
                if (!n) throw Error("Sidecar medium not found");
                return l.createElement(n, tD({}, r))
            };
            t$.isSideCarExport = !0;
            var tq = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || r.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var l, i;
                                (l = t).styleSheet ? l.styleSheet.cssText = n : l.appendChild(document.createTextNode(n)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                tX = function() {
                    var e = tq();
                    return function(t, r) {
                        l.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && r])
                    }
                },
                tU = function() {
                    var e = tX();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                tY = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                tZ = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                tJ = function(e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [tZ(r), tZ(n), tZ(o)]
                },
                tQ = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return tY;
                    var t = tJ(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, n - r + t[2] - t[0])
                    }
                },
                t0 = tU(),
                t1 = "data-scroll-locked",
                t2 = function(e, t, r, n) {
                    var o = e.left,
                        l = e.top,
                        i = e.right,
                        a = e.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(a, "px ").concat(n, ";\n  }\n  body[").concat(t1, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(l, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(a, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tI, " {\n    right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tW, " {\n    margin-right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tI, " .").concat(tI, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(tW, " .").concat(tW, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(t1, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                t5 = function() {
                    var e = parseInt(document.body.getAttribute(t1) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                t6 = function() {
                    l.useEffect(function() {
                        return document.body.setAttribute(t1, (t5() + 1).toString()),
                            function() {
                                var e = t5() - 1;
                                e <= 0 ? document.body.removeAttribute(t1) : document.body.setAttribute(t1, e.toString())
                            }
                    }, [])
                },
                t4 = function(e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        o = void 0 === n ? "margin" : n;
                    t6();
                    var i = l.useMemo(function() {
                        return tQ(o)
                    }, [o]);
                    return l.createElement(t0, {
                        styles: t2(i, !t, o, r ? "" : "!important")
                    })
                },
                t9 = !1;
            if ("undefined" != typeof window) try {
                var t3 = Object.defineProperty({}, "passive", {
                    get: function() {
                        return t9 = !0, !0
                    }
                });
                window.addEventListener("test", t3, t3), window.removeEventListener("test", t3, t3)
            } catch (e) {
                t9 = !1
            }
            var t8 = !!t9 && {
                    passive: !1
                },
                t7 = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
                },
                re = function(e, t) {
                    var r = t.ownerDocument,
                        n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), rt(e, n)) {
                            var o = rr(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body);
                    return !1
                },
                rt = function(e, t) {
                    return "v" === e ? t7(t, "overflowY") : t7(t, "overflowX")
                },
                rr = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                rn = function(e, t, r, n, o) {
                    var l, i = (l = window.getComputedStyle(t).direction, "h" === e && "rtl" === l ? -1 : 1),
                        a = i * n,
                        s = r.target,
                        c = t.contains(s),
                        u = !1,
                        d = a > 0,
                        f = 0,
                        p = 0;
                    do {
                        if (!s) break;
                        var h = rr(e, s),
                            m = h[0],
                            v = h[1] - h[2] - i * m;
                        (m || v) && rt(e, s) && (f += v, p += m);
                        var g = s.parentNode;
                        s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
                    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
                    return d && (o && 1 > Math.abs(f) || !o && a > f) ? u = !0 : !d && (o && 1 > Math.abs(p) || !o && -a > p) && (u = !0), u
                },
                ro = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                rl = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ri = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ra = 0,
                rs = [];
            let rc = (tG.useMedium(function(e) {
                var t = l.useRef([]),
                    r = l.useRef([0, 0]),
                    n = l.useRef(),
                    o = l.useState(ra++)[0],
                    i = l.useState(tU)[0],
                    a = l.useRef(e);
                l.useEffect(function() {
                    a.current = e
                }, [e]), l.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, r) {
                            if (r || 2 == arguments.length)
                                for (var n, o = 0, l = t.length; o < l; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                            return e.concat(n || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(ri), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var s = l.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                        var o, l = ro(e),
                            i = r.current,
                            s = "deltaX" in e ? e.deltaX : i[0] - l[0],
                            c = "deltaY" in e ? e.deltaY : i[1] - l[1],
                            u = e.target,
                            d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === u.type) return !1;
                        var f = re(d, u);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = re(d, u)), !f) return !1;
                        if (!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o) return !0;
                        var p = n.current || o;
                        return rn(p, t, e, "h" === p ? s : c, !0)
                    }, []),
                    c = l.useCallback(function(e) {
                        if (rs.length && rs[rs.length - 1] === i) {
                            var r = "deltaY" in e ? rl(e) : ro(e),
                                n = t.current.filter(function(t) {
                                    var n;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                                })[0];
                            if (n && n.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!n) {
                                var o = (a.current.shards || []).map(ri).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    u = l.useCallback(function(e, r, n, o) {
                        var l = {
                            name: e,
                            delta: r,
                            target: n,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(n)
                        };
                        t.current.push(l), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== l
                            })
                        }, 1)
                    }, []),
                    d = l.useCallback(function(e) {
                        r.current = ro(e), n.current = void 0
                    }, []),
                    f = l.useCallback(function(t) {
                        u(t.type, rl(t), t.target, s(t, e.lockRef.current))
                    }, []),
                    p = l.useCallback(function(t) {
                        u(t.type, ro(t), t.target, s(t, e.lockRef.current))
                    }, []);
                l.useEffect(function() {
                    return rs.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", c, t8), document.addEventListener("touchmove", c, t8), document.addEventListener("touchstart", d, t8),
                        function() {
                            rs = rs.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", c, t8), document.removeEventListener("touchmove", c, t8), document.removeEventListener("touchstart", d, t8)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return l.createElement(l.Fragment, null, m ? l.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? l.createElement(t4, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode
                }) : null)
            }), t$);
            var ru = l.forwardRef(function(e, t) {
                return l.createElement(tK, tD({}, e, {
                    ref: t,
                    sideCar: rc
                }))
            });
            ru.classNames = tK.classNames;
            var rd = [" ", "Enter", "ArrowUp", "ArrowDown"],
                rf = [" ", "Enter"],
                rp = "Select",
                [rh, rm, rv] = function(e) {
                    let t = e + "CollectionProvider",
                        [r, n] = d(t),
                        [o, i] = r(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        a = e => {
                            let {
                                scope: t,
                                children: r
                            } = e, n = l.useRef(null), i = l.useRef(new Map).current;
                            return (0, u.jsx)(o, {
                                scope: t,
                                itemMap: i,
                                collectionRef: n,
                                children: r
                            })
                        };
                    a.displayName = t;
                    let s = e + "CollectionSlot",
                        c = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n
                            } = e, o = i(s, r), l = (0, f.s)(t, o.collectionRef);
                            return (0, u.jsx)(p.DX, {
                                ref: l,
                                children: n
                            })
                        });
                    c.displayName = s;
                    let h = e + "CollectionItemSlot",
                        m = "data-radix-collection-item",
                        v = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n,
                                ...o
                            } = e, a = l.useRef(null), s = (0, f.s)(t, a), c = i(h, r);
                            return l.useEffect(() => (c.itemMap.set(a, {
                                ref: a,
                                ...o
                            }), () => void c.itemMap.delete(a))), (0, u.jsx)(p.DX, {
                                [m]: "",
                                ref: s,
                                children: n
                            })
                        });
                    return v.displayName = h, [{
                        Provider: a,
                        Slot: c,
                        ItemSlot: v
                    }, function(t) {
                        let r = i(e + "CollectionConsumer", t);
                        return l.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                        }, [r.collectionRef, r.itemMap])
                    }, n]
                }(rp),
                [rg, ry] = d(rp, [rv, ts]),
                rb = ts(),
                [rw, rx] = rg(rp),
                [rE, rk] = rg(rp),
                rS = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: n,
                        defaultOpen: o,
                        onOpenChange: i,
                        value: a,
                        defaultValue: s,
                        onValueChange: c,
                        dir: d,
                        name: f,
                        autoComplete: p,
                        disabled: m,
                        required: v,
                        form: g
                    } = e, y = rb(t), [b, w] = l.useState(null), [x, E] = l.useState(null), [k, S] = l.useState(!1), C = function(e) {
                        let t = l.useContext(h);
                        return e || t || "ltr"
                    }(d), [R = !1, A] = tC({
                        prop: n,
                        defaultProp: o,
                        onChange: i
                    }), [P, T] = tC({
                        prop: a,
                        defaultProp: s,
                        onChange: c
                    }), j = l.useRef(null), L = !b || g || !!b.closest("form"), [M, N] = l.useState(new Set), O = Array.from(M).map(e => e.props.value).join(";");
                    return (0, u.jsx)(td, { ...y,
                        children: (0, u.jsxs)(rw, {
                            required: v,
                            scope: t,
                            trigger: b,
                            onTriggerChange: w,
                            valueNode: x,
                            onValueNodeChange: E,
                            valueNodeHasChildren: k,
                            onValueNodeHasChildrenChange: S,
                            contentId: z(),
                            value: P,
                            onValueChange: T,
                            open: R,
                            onOpenChange: A,
                            dir: C,
                            triggerPointerDownPosRef: j,
                            disabled: m,
                            children: [(0, u.jsx)(rh.Provider, {
                                scope: t,
                                children: (0, u.jsx)(rE, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: l.useCallback(e => {
                                        N(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: l.useCallback(e => {
                                        N(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), L ? (0, u.jsxs)(ne, {
                                "aria-hidden": !0,
                                required: v,
                                tabIndex: -1,
                                name: f,
                                autoComplete: p,
                                value: P,
                                onChange: e => T(e.target.value),
                                disabled: m,
                                form: g,
                                children: [void 0 === P ? (0, u.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(M)]
                            }, O) : null]
                        })
                    })
                };
            rS.displayName = rp;
            var rC = "SelectTrigger",
                rR = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: n = !1,
                        ...o
                    } = e, i = rb(r), a = rx(rC, r), s = a.disabled || n, d = (0, f.s)(t, a.onTriggerChange), p = rm(r), h = l.useRef("touch"), [v, g, y] = nt(e => {
                        let t = p().filter(e => !e.disabled),
                            r = t.find(e => e.value === a.value),
                            n = nr(t, e, r);
                        void 0 !== n && a.onValueChange(n.value)
                    }), b = e => {
                        s || (a.onOpenChange(!0), y()), e && (a.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, u.jsx)(tp, {
                        asChild: !0,
                        ...i,
                        children: (0, u.jsx)(m.sG.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": a.contentId,
                            "aria-expanded": a.open,
                            "aria-required": a.required,
                            "aria-autocomplete": "none",
                            dir: a.dir,
                            "data-state": a.open ? "open" : "closed",
                            disabled: s,
                            "data-disabled": s ? "" : void 0,
                            "data-placeholder": r7(a.value) ? "" : void 0,
                            ...o,
                            ref: d,
                            onClick: c(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== h.current && b(e)
                            }),
                            onPointerDown: c(o.onPointerDown, e => {
                                h.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (b(e), e.preventDefault())
                            }),
                            onKeyDown: c(o.onKeyDown, e => {
                                let t = "" !== v.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || g(e.key), (!t || " " !== e.key) && rd.includes(e.key) && (b(), e.preventDefault())
                            })
                        })
                    })
                });
            rR.displayName = rC;
            var rA = "SelectValue",
                rP = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        children: l,
                        placeholder: i = "",
                        ...a
                    } = e, s = rx(rA, r), {
                        onValueNodeHasChildrenChange: c
                    } = s, d = void 0 !== l, p = (0, f.s)(t, s.onValueNodeChange);
                    return N(() => {
                        c(d)
                    }, [c, d]), (0, u.jsx)(m.sG.span, { ...a,
                        ref: p,
                        style: {
                            pointerEvents: "none"
                        },
                        children: r7(s.value) ? (0, u.jsx)(u.Fragment, {
                            children: i
                        }) : l
                    })
                });
            rP.displayName = rA;
            var rT = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...o
                } = e;
                return (0, u.jsx)(m.sG.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: n || "▼"
                })
            });
            rT.displayName = "SelectIcon";
            var rj = e => (0, u.jsx)(tS, {
                asChild: !0,
                ...e
            });
            rj.displayName = "SelectPortal";
            var rL = "SelectContent",
                rM = l.forwardRef((e, t) => {
                    let r = rx(rL, e.__scopeSelect),
                        [n, o] = l.useState();
                    return (N(() => {
                        o(new DocumentFragment)
                    }, []), r.open) ? (0, u.jsx)(rD, { ...e,
                        ref: t
                    }) : n ? a.createPortal((0, u.jsx)(rN, {
                        scope: e.__scopeSelect,
                        children: (0, u.jsx)(rh.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, u.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), n) : null
                });
            rM.displayName = rL;
            var [rN, rO] = rg(rL), rD = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: n = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    side: s,
                    sideOffset: d,
                    align: h,
                    alignOffset: m,
                    arrowPadding: v,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: w,
                    hideWhenDetached: x,
                    avoidCollisions: S,
                    ...C
                } = e, R = rx(rL, r), [P, T] = l.useState(null), [j, L] = l.useState(null), M = (0, f.s)(t, e => T(e)), [N, O] = l.useState(null), [D, z] = l.useState(null), I = rm(r), [W, F] = l.useState(!1), H = l.useRef(!1);
                l.useEffect(() => {
                    if (P) return tO(P)
                }, [P]), l.useEffect(() => {
                    var e, t;
                    let r = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : k()), document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : k()), E++, () => {
                        1 === E && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), E--
                    }
                }, []);
                let B = l.useCallback(e => {
                        let [t, ...r] = I().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                        for (let r of e)
                            if (r === o || (null == r || r.scrollIntoView({
                                    block: "nearest"
                                }), r === t && j && (j.scrollTop = 0), r === n && j && (j.scrollTop = j.scrollHeight), null == r || r.focus(), document.activeElement !== o)) return
                    }, [I, j]),
                    _ = l.useCallback(() => B([N, P]), [B, N, P]);
                l.useEffect(() => {
                    W && _()
                }, [W, _]);
                let {
                    onOpenChange: G,
                    triggerPointerDownPosRef: V
                } = R;
                l.useEffect(() => {
                    if (P) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var r, n, o, l;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null !== (o = null === (r = V.current) || void 0 === r ? void 0 : r.x) && void 0 !== o ? o : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null !== (l = null === (n = V.current) || void 0 === n ? void 0 : n.y) && void 0 !== l ? l : 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : P.contains(r.target) || G(!1), document.removeEventListener("pointermove", t), V.current = null
                            };
                        return null !== V.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [P, G, V]), l.useEffect(() => {
                    let e = () => G(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [G]);
                let [K, $] = nt(e => {
                    let t = I().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = nr(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), q = l.useCallback((e, t, r) => {
                    let n = !H.current && !r;
                    (void 0 !== R.value && R.value === t || n) && (O(e), n && (H.current = !0))
                }, [R.value]), X = l.useCallback(() => null == P ? void 0 : P.focus(), [P]), U = l.useCallback((e, t, r) => {
                    let n = !H.current && !r;
                    (void 0 !== R.value && R.value === t || n) && z(e)
                }, [R.value]), Y = "popper" === n ? rI : rz, Z = Y === rI ? {
                    side: s,
                    sideOffset: d,
                    align: h,
                    alignOffset: m,
                    arrowPadding: v,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: w,
                    hideWhenDetached: x,
                    avoidCollisions: S
                } : {};
                return (0, u.jsx)(rN, {
                    scope: r,
                    content: P,
                    viewport: j,
                    onViewportChange: L,
                    itemRefCallback: q,
                    selectedItem: N,
                    onItemLeave: X,
                    itemTextRefCallback: U,
                    focusSelectedItem: _,
                    selectedItemText: D,
                    position: n,
                    isPositioned: W,
                    searchRef: K,
                    children: (0, u.jsx)(ru, {
                        as: p.DX,
                        allowPinchZoom: !0,
                        children: (0, u.jsx)(A, {
                            asChild: !0,
                            trapped: R.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: c(o, e => {
                                var t;
                                null === (t = R.trigger) || void 0 === t || t.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, u.jsx)(b, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: a,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => R.onOpenChange(!1),
                                children: (0, u.jsx)(Y, {
                                    role: "listbox",
                                    id: R.contentId,
                                    "data-state": R.open ? "open" : "closed",
                                    dir: R.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...C,
                                    ...Z,
                                    onPlaced: () => F(!0),
                                    ref: M,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...C.style
                                    },
                                    onKeyDown: c(C.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = I().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => B(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            rD.displayName = "SelectContentImpl";
            var rz = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: n,
                    ...o
                } = e, i = rx(rL, r), a = rO(rL, r), [c, d] = l.useState(null), [p, h] = l.useState(null), v = (0, f.s)(t, e => h(e)), g = rm(r), y = l.useRef(!1), b = l.useRef(!0), {
                    viewport: w,
                    selectedItem: x,
                    selectedItemText: E,
                    focusSelectedItem: k
                } = a, S = l.useCallback(() => {
                    if (i.trigger && i.valueNode && c && p && w && x && E) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = p.getBoundingClientRect(),
                            r = i.valueNode.getBoundingClientRect(),
                            o = E.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let n = o.left - t.left,
                                l = r.left - n,
                                i = e.left - l,
                                a = e.width + i,
                                u = Math.max(a, t.width),
                                d = s(l, [10, Math.max(10, window.innerWidth - 10 - u)]);
                            c.style.minWidth = a + "px", c.style.left = d + "px"
                        } else {
                            let n = t.right - o.right,
                                l = window.innerWidth - r.right - n,
                                i = window.innerWidth - e.right - l,
                                a = e.width + i,
                                u = Math.max(a, t.width),
                                d = s(l, [10, Math.max(10, window.innerWidth - 10 - u)]);
                            c.style.minWidth = a + "px", c.style.right = d + "px"
                        }
                        let l = g(),
                            a = window.innerHeight - 20,
                            u = w.scrollHeight,
                            d = window.getComputedStyle(p),
                            f = parseInt(d.borderTopWidth, 10),
                            h = parseInt(d.paddingTop, 10),
                            m = parseInt(d.borderBottomWidth, 10),
                            v = f + h + u + parseInt(d.paddingBottom, 10) + m,
                            b = Math.min(5 * x.offsetHeight, v),
                            k = window.getComputedStyle(w),
                            S = parseInt(k.paddingTop, 10),
                            C = parseInt(k.paddingBottom, 10),
                            R = e.top + e.height / 2 - 10,
                            A = x.offsetHeight / 2,
                            P = f + h + (x.offsetTop + A);
                        if (P <= R) {
                            let e = l.length > 0 && x === l[l.length - 1].ref.current;
                            c.style.bottom = "0px";
                            let t = Math.max(a - R, A + (e ? C : 0) + (p.clientHeight - w.offsetTop - w.offsetHeight) + m);
                            c.style.height = P + t + "px"
                        } else {
                            let e = l.length > 0 && x === l[0].ref.current;
                            c.style.top = "0px";
                            let t = Math.max(R, f + w.offsetTop + (e ? S : 0) + A);
                            c.style.height = t + (v - P) + "px", w.scrollTop = P - R + w.offsetTop
                        }
                        c.style.margin = "".concat(10, "px 0"), c.style.minHeight = b + "px", c.style.maxHeight = a + "px", null == n || n(), requestAnimationFrame(() => y.current = !0)
                    }
                }, [g, i.trigger, i.valueNode, c, p, w, x, E, i.dir, n]);
                N(() => S(), [S]);
                let [C, R] = l.useState();
                N(() => {
                    p && R(window.getComputedStyle(p).zIndex)
                }, [p]);
                let A = l.useCallback(e => {
                    e && !0 === b.current && (S(), null == k || k(), b.current = !1)
                }, [S, k]);
                return (0, u.jsx)(rW, {
                    scope: r,
                    contentWrapper: c,
                    shouldExpandOnScrollRef: y,
                    onScrollButtonChange: A,
                    children: (0, u.jsx)("div", {
                        ref: d,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: C
                        },
                        children: (0, u.jsx)(m.sG.div, { ...o,
                            ref: v,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...o.style
                            }
                        })
                    })
                })
            });
            rz.displayName = "SelectItemAlignedPosition";
            var rI = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: o = 10,
                    ...l
                } = e, i = rb(r);
                return (0, u.jsx)(tg, { ...i,
                    ...l,
                    ref: t,
                    align: n,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...l.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            rI.displayName = "SelectPopperPosition";
            var [rW, rF] = rg(rL, {}), rH = "SelectViewport", rB = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: n,
                    ...o
                } = e, i = rO(rH, r), a = rF(rH, r), s = (0, f.s)(t, i.onViewportChange), d = l.useRef(0);
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: n
                    }), (0, u.jsx)(rh.Slot, {
                        scope: r,
                        children: (0, u.jsx)(m.sG.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: s,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: c(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = a;
                                if ((null == n ? void 0 : n.current) && r) {
                                    let e = Math.abs(d.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (o < n) {
                                            let l = o + e,
                                                i = Math.min(n, l),
                                                a = l - i;
                                            r.style.height = i + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                d.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            rB.displayName = rH;
            var r_ = "SelectGroup",
                [rG, rV] = rg(r_),
                rK = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = z();
                    return (0, u.jsx)(rG, {
                        scope: r,
                        id: o,
                        children: (0, u.jsx)(m.sG.div, {
                            role: "group",
                            "aria-labelledby": o,
                            ...n,
                            ref: t
                        })
                    })
                });
            rK.displayName = r_;
            var r$ = "SelectLabel",
                rq = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, o = rV(r$, r);
                    return (0, u.jsx)(m.sG.div, {
                        id: o.id,
                        ...n,
                        ref: t
                    })
                });
            rq.displayName = r$;
            var rX = "SelectItem",
                [rU, rY] = rg(rX),
                rZ = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: n,
                        disabled: o = !1,
                        textValue: i,
                        ...a
                    } = e, s = rx(rX, r), d = rO(rX, r), p = s.value === n, [h, v] = l.useState(null != i ? i : ""), [g, y] = l.useState(!1), b = (0, f.s)(t, e => {
                        var t;
                        return null === (t = d.itemRefCallback) || void 0 === t ? void 0 : t.call(d, e, n, o)
                    }), w = z(), x = l.useRef("touch"), E = () => {
                        o || (s.onValueChange(n), s.onOpenChange(!1))
                    };
                    if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, u.jsx)(rU, {
                        scope: r,
                        value: n,
                        disabled: o,
                        textId: w,
                        isSelected: p,
                        onItemTextChange: l.useCallback(e => {
                            v(t => {
                                var r;
                                return t || (null !== (r = null == e ? void 0 : e.textContent) && void 0 !== r ? r : "").trim()
                            })
                        }, []),
                        children: (0, u.jsx)(rh.ItemSlot, {
                            scope: r,
                            value: n,
                            disabled: o,
                            textValue: h,
                            children: (0, u.jsx)(m.sG.div, {
                                role: "option",
                                "aria-labelledby": w,
                                "data-highlighted": g ? "" : void 0,
                                "aria-selected": p && g,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...a,
                                ref: b,
                                onFocus: c(a.onFocus, () => y(!0)),
                                onBlur: c(a.onBlur, () => y(!1)),
                                onClick: c(a.onClick, () => {
                                    "mouse" !== x.current && E()
                                }),
                                onPointerUp: c(a.onPointerUp, () => {
                                    "mouse" === x.current && E()
                                }),
                                onPointerDown: c(a.onPointerDown, e => {
                                    x.current = e.pointerType
                                }),
                                onPointerMove: c(a.onPointerMove, e => {
                                    if (x.current = e.pointerType, o) {
                                        var t;
                                        null === (t = d.onItemLeave) || void 0 === t || t.call(d)
                                    } else "mouse" === x.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: c(a.onPointerLeave, e => {
                                    if (e.currentTarget === document.activeElement) {
                                        var t;
                                        null === (t = d.onItemLeave) || void 0 === t || t.call(d)
                                    }
                                }),
                                onKeyDown: c(a.onKeyDown, e => {
                                    var t;
                                    ((null === (t = d.searchRef) || void 0 === t ? void 0 : t.current) === "" || " " !== e.key) && (rf.includes(e.key) && E(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            rZ.displayName = rX;
            var rJ = "SelectItemText",
                rQ = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        ...i
                    } = e, s = rx(rJ, r), c = rO(rJ, r), d = rY(rJ, r), p = rk(rJ, r), [h, v] = l.useState(null), g = (0, f.s)(t, e => v(e), d.onItemTextChange, e => {
                        var t;
                        return null === (t = c.itemTextRefCallback) || void 0 === t ? void 0 : t.call(c, e, d.value, d.disabled)
                    }), y = null == h ? void 0 : h.textContent, b = l.useMemo(() => (0, u.jsx)("option", {
                        value: d.value,
                        disabled: d.disabled,
                        children: y
                    }, d.value), [d.disabled, d.value, y]), {
                        onNativeOptionAdd: w,
                        onNativeOptionRemove: x
                    } = p;
                    return N(() => (w(b), () => x(b)), [w, x, b]), (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(m.sG.span, {
                            id: d.textId,
                            ...i,
                            ref: g
                        }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? a.createPortal(i.children, s.valueNode) : null]
                    })
                });
            rQ.displayName = rJ;
            var r0 = "SelectItemIndicator",
                r1 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return rY(r0, r).isSelected ? (0, u.jsx)(m.sG.span, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    }) : null
                });
            r1.displayName = r0;
            var r2 = "SelectScrollUpButton",
                r5 = l.forwardRef((e, t) => {
                    let r = rO(r2, e.__scopeSelect),
                        n = rF(r2, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, f.s)(t, n.onScrollButtonChange);
                    return N(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    i(t.scrollTop > 0)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, u.jsx)(r9, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            r5.displayName = r2;
            var r6 = "SelectScrollDownButton",
                r4 = l.forwardRef((e, t) => {
                    let r = rO(r6, e.__scopeSelect),
                        n = rF(r6, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, f.s)(t, n.onScrollButtonChange);
                    return N(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    i(Math.ceil(t.scrollTop) < e)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, u.jsx)(r9, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            r4.displayName = r6;
            var r9 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        onAutoScroll: n,
                        ...o
                    } = e, i = rO("SelectScrollButton", r), a = l.useRef(null), s = rm(r), d = l.useCallback(() => {
                        null !== a.current && (window.clearInterval(a.current), a.current = null)
                    }, []);
                    return l.useEffect(() => () => d(), [d]), N(() => {
                        var e;
                        let t = s().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [s]), (0, u.jsx)(m.sG.div, {
                        "aria-hidden": !0,
                        ...o,
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...o.style
                        },
                        onPointerDown: c(o.onPointerDown, () => {
                            null === a.current && (a.current = window.setInterval(n, 50))
                        }),
                        onPointerMove: c(o.onPointerMove, () => {
                            var e;
                            null === (e = i.onItemLeave) || void 0 === e || e.call(i), null === a.current && (a.current = window.setInterval(n, 50))
                        }),
                        onPointerLeave: c(o.onPointerLeave, () => {
                            d()
                        })
                    })
                }),
                r3 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return (0, u.jsx)(m.sG.div, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    })
                });
            r3.displayName = "SelectSeparator";
            var r8 = "SelectArrow";

            function r7(e) {
                return "" === e || void 0 === e
            }
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = rb(r), l = rx(r8, r), i = rO(r8, r);
                return l.open && "popper" === i.position ? (0, u.jsx)(tw, { ...o,
                    ...n,
                    ref: t
                }) : null
            }).displayName = r8;
            var ne = l.forwardRef((e, t) => {
                let {
                    value: r,
                    ...n
                } = e, o = l.useRef(null), i = (0, f.s)(t, o), a = function(e) {
                    let t = l.useRef({
                        value: e,
                        previous: e
                    });
                    return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                }(r);
                return l.useEffect(() => {
                    let e = o.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (a !== r && t) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [a, r]), (0, u.jsx)(tR, {
                    asChild: !0,
                    children: (0, u.jsx)("select", { ...n,
                        ref: i,
                        defaultValue: r
                    })
                })
            });

            function nt(e) {
                let t = v(e),
                    r = l.useRef(""),
                    n = l.useRef(0),
                    o = l.useCallback(e => {
                        let o = r.current + e;
                        t(o),
                            function e(t) {
                                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    i = l.useCallback(() => {
                        r.current = "", window.clearTimeout(n.current)
                    }, []);
                return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
            }

            function nr(e, t, r) {
                var n, o;
                let l = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    i = r ? e.indexOf(r) : -1,
                    a = (n = e, o = Math.max(i, 0), n.map((e, t) => n[(o + t) % n.length]));
                1 === l.length && (a = a.filter(e => e !== r));
                let s = a.find(e => e.textValue.toLowerCase().startsWith(l.toLowerCase()));
                return s !== r ? s : void 0
            }
            ne.displayName = "BubbleSelect";
            var nn = rS,
                no = rR,
                nl = rP,
                ni = rT,
                na = rj,
                ns = rM,
                nc = rB,
                nu = rK,
                nd = rq,
                nf = rZ,
                np = rQ,
                nh = r1,
                nm = r5,
                nv = r4,
                ng = r3
        },
        8833: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("CirclePlay", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polygon", {
                    points: "10 8 16 12 10 16 10 8",
                    key: "1cimsy"
                }]
            ])
        },
        8883: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Mail", [
                ["rect", {
                    width: "20",
                    height: "16",
                    x: "2",
                    y: "4",
                    rx: "2",
                    key: "18n3k1"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                    key: "1ocrg3"
                }]
            ])
        },
        9688: (e, t, r) => {
            r.d(t, {
                QP: () => U
            });
            let n = e => {
                    let t = a(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || i(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let o = r[e] || [];
                            return t && n[e] ? [...o, ...n[e]] : o
                        }
                    }
                },
                o = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        n = t.nextPart.get(r),
                        l = n ? o(e.slice(1), n) : void 0;
                    if (l) return l;
                    if (0 === t.validators.length) return;
                    let i = e.join("-");
                    return t.validators.find(({
                        validator: e
                    }) => e(i)) ? .classGroupId
                },
                l = /^\[(.+)\]$/,
                i = e => {
                    if (l.test(e)) {
                        let t = l.exec(e)[1],
                            r = t ? .substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                a = e => {
                    let {
                        theme: t,
                        prefix: r
                    } = e, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    return d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
                        s(r, n, e, t)
                    }), n
                },
                s = (e, t, r, n) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : c(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) {
                            if (u(e)) {
                                s(e(n), t, r, n);
                                return
                            }
                            t.validators.push({
                                validator: e,
                                classGroupId: r
                            });
                            return
                        }
                        Object.entries(e).forEach(([e, o]) => {
                            s(o, c(t, e), r, n)
                        })
                    })
                },
                c = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                u = e => e.isThemeGetter,
                d = (e, t) => t ? e.map(([e, r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [t + e, r])) : e)]) : e,
                f = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        n = new Map,
                        o = (o, l) => {
                            r.set(o, l), ++t > e && (t = 0, n = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : o(e, t)
                        }
                    }
                },
                p = e => {
                    let {
                        separator: t,
                        experimentalParseClassName: r
                    } = e, n = 1 === t.length, o = t[0], l = t.length, i = e => {
                        let r;
                        let i = [],
                            a = 0,
                            s = 0;
                        for (let c = 0; c < e.length; c++) {
                            let u = e[c];
                            if (0 === a) {
                                if (u === o && (n || e.slice(c, c + l) === t)) {
                                    i.push(e.slice(s, c)), s = c + l;
                                    continue
                                }
                                if ("/" === u) {
                                    r = c;
                                    continue
                                }
                            }
                            "[" === u ? a++ : "]" === u && a--
                        }
                        let c = 0 === i.length ? e : e.substring(s),
                            u = c.startsWith("!"),
                            d = u ? c.substring(1) : c;
                        return {
                            modifiers: i,
                            hasImportantModifier: u,
                            baseClassName: d,
                            maybePostfixModifierPosition: r && r > s ? r - s : void 0
                        }
                    };
                    return r ? e => r({
                        className: e,
                        parseClassName: i
                    }) : i
                },
                h = e => {
                    if (e.length <= 1) return e;
                    let t = [],
                        r = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                    }), t.push(...r.sort()), t
                },
                m = e => ({
                    cache: f(e.cacheSize),
                    parseClassName: p(e),
                    ...n(e)
                }),
                v = /\s+/,
                g = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: n,
                        getConflictingClassGroupIds: o
                    } = t, l = [], i = e.trim().split(v), a = "";
                    for (let e = i.length - 1; e >= 0; e -= 1) {
                        let t = i[e],
                            {
                                modifiers: s,
                                hasImportantModifier: c,
                                baseClassName: u,
                                maybePostfixModifierPosition: d
                            } = r(t),
                            f = !!d,
                            p = n(f ? u.substring(0, d) : u);
                        if (!p) {
                            if (!f || !(p = n(u))) {
                                a = t + (a.length > 0 ? " " + a : a);
                                continue
                            }
                            f = !1
                        }
                        let m = h(s).join(":"),
                            v = c ? m + "!" : m,
                            g = v + p;
                        if (l.includes(g)) continue;
                        l.push(g);
                        let y = o(p, f);
                        for (let e = 0; e < y.length; ++e) {
                            let t = y[e];
                            l.push(v + t)
                        }
                        a = t + (a.length > 0 ? " " + a : a)
                    }
                    return a
                };

            function y() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = b(e)) && (n && (n += " "), n += t);
                return n
            }
            let b = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let r = "";
                    for (let n = 0; n < e.length; n++) e[n] && (t = b(e[n])) && (r && (r += " "), r += t);
                    return r
                },
                w = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                x = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                E = /^\d+\/\d+$/,
                k = new Set(["px", "full", "screen"]),
                S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                C = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                R = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                A = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                P = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                T = e => L(e) || k.has(e) || E.test(e),
                j = e => V(e, "length", K),
                L = e => !!e && !Number.isNaN(Number(e)),
                M = e => V(e, "number", L),
                N = e => !!e && Number.isInteger(Number(e)),
                O = e => e.endsWith("%") && L(e.slice(0, -1)),
                D = e => x.test(e),
                z = e => S.test(e),
                I = new Set(["length", "size", "percentage"]),
                W = e => V(e, I, $),
                F = e => V(e, "position", $),
                H = new Set(["image", "url"]),
                B = e => V(e, H, X),
                _ = e => V(e, "", q),
                G = () => !0,
                V = (e, t, r) => {
                    let n = x.exec(e);
                    return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
                },
                K = e => C.test(e) && !R.test(e),
                $ = () => !1,
                q = e => A.test(e),
                X = e => P.test(e);
            Symbol.toStringTag;
            let U = function(e, ...t) {
                let r, n, o;
                let l = function(a) {
                    return n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get, o = r.cache.set, l = i, i(a)
                };

                function i(e) {
                    let t = n(e);
                    if (t) return t;
                    let l = g(e, r);
                    return o(e, l), l
                }
                return function() {
                    return l(y.apply(null, arguments))
                }
            }(() => {
                let e = w("colors"),
                    t = w("spacing"),
                    r = w("blur"),
                    n = w("brightness"),
                    o = w("borderColor"),
                    l = w("borderRadius"),
                    i = w("borderSpacing"),
                    a = w("borderWidth"),
                    s = w("contrast"),
                    c = w("grayscale"),
                    u = w("hueRotate"),
                    d = w("invert"),
                    f = w("gap"),
                    p = w("gradientColorStops"),
                    h = w("gradientColorStopPositions"),
                    m = w("inset"),
                    v = w("margin"),
                    g = w("opacity"),
                    y = w("padding"),
                    b = w("saturate"),
                    x = w("scale"),
                    E = w("sepia"),
                    k = w("skew"),
                    S = w("space"),
                    C = w("translate"),
                    R = () => ["auto", "contain", "none"],
                    A = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    P = () => ["auto", D, t],
                    I = () => [D, t],
                    H = () => ["", T, j],
                    V = () => ["auto", L, D],
                    K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    $ = () => ["solid", "dashed", "dotted", "double", "none"],
                    q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    U = () => ["", "0", D],
                    Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Z = () => [L, D];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [G],
                        spacing: [T, j],
                        blur: ["none", "", z, D],
                        brightness: Z(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", z, D],
                        borderSpacing: I(),
                        borderWidth: H(),
                        contrast: Z(),
                        grayscale: U(),
                        hueRotate: Z(),
                        invert: U(),
                        gap: I(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [O, j],
                        inset: P(),
                        margin: P(),
                        opacity: Z(),
                        padding: I(),
                        saturate: Z(),
                        scale: Z(),
                        sepia: U(),
                        skew: Z(),
                        space: I(),
                        translate: I()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", D]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [z]
                        }],
                        "break-after": [{
                            "break-after": Y()
                        }],
                        "break-before": [{
                            "break-before": Y()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...K(), D]
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: R()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": R()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": R()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", N, D]
                        }],
                        basis: [{
                            basis: P()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", D]
                        }],
                        grow: [{
                            grow: U()
                        }],
                        shrink: [{
                            shrink: U()
                        }],
                        order: [{
                            order: ["first", "last", "none", N, D]
                        }],
                        "grid-cols": [{
                            "grid-cols": [G]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", N, D]
                            }, D]
                        }],
                        "col-start": [{
                            "col-start": V()
                        }],
                        "col-end": [{
                            "col-end": V()
                        }],
                        "grid-rows": [{
                            "grid-rows": [G]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [N, D]
                            }, D]
                        }],
                        "row-start": [{
                            "row-start": V()
                        }],
                        "row-end": [{
                            "row-end": V()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", D]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", D]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...X()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...X(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...X(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [y]
                        }],
                        px: [{
                            px: [y]
                        }],
                        py: [{
                            py: [y]
                        }],
                        ps: [{
                            ps: [y]
                        }],
                        pe: [{
                            pe: [y]
                        }],
                        pt: [{
                            pt: [y]
                        }],
                        pr: [{
                            pr: [y]
                        }],
                        pb: [{
                            pb: [y]
                        }],
                        pl: [{
                            pl: [y]
                        }],
                        m: [{
                            m: [v]
                        }],
                        mx: [{
                            mx: [v]
                        }],
                        my: [{
                            my: [v]
                        }],
                        ms: [{
                            ms: [v]
                        }],
                        me: [{
                            me: [v]
                        }],
                        mt: [{
                            mt: [v]
                        }],
                        mr: [{
                            mr: [v]
                        }],
                        mb: [{
                            mb: [v]
                        }],
                        ml: [{
                            ml: [v]
                        }],
                        "space-x": [{
                            "space-x": [S]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [S]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t]
                        }],
                        "min-w": [{
                            "min-w": [D, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [D, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [z]
                            }, z]
                        }],
                        h: [{
                            h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [D, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", z, j]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", M]
                        }],
                        "font-family": [{
                            font: [G]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", L, M]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", T, D]
                        }],
                        "list-image": [{
                            "list-image": ["none", D]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", D]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [g]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [g]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...$(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", T, j]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", T, D]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: I()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", D]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [g]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...K(), F]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", W]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, B]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [h]
                        }],
                        "gradient-via-pos": [{
                            via: [h]
                        }],
                        "gradient-to-pos": [{
                            to: [h]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [a]
                        }],
                        "border-w-x": [{
                            "border-x": [a]
                        }],
                        "border-w-y": [{
                            "border-y": [a]
                        }],
                        "border-w-s": [{
                            "border-s": [a]
                        }],
                        "border-w-e": [{
                            "border-e": [a]
                        }],
                        "border-w-t": [{
                            "border-t": [a]
                        }],
                        "border-w-r": [{
                            "border-r": [a]
                        }],
                        "border-w-b": [{
                            "border-b": [a]
                        }],
                        "border-w-l": [{
                            "border-l": [a]
                        }],
                        "border-opacity": [{
                            "border-opacity": [g]
                        }],
                        "border-style": [{
                            border: [...$(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [a]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [a]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [g]
                        }],
                        "divide-style": [{
                            divide: $()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-s": [{
                            "border-s": [o]
                        }],
                        "border-color-e": [{
                            "border-e": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...$()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [T, D]
                        }],
                        "outline-w": [{
                            outline: [T, j]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: H()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [g]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [T, j]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", z, _]
                        }],
                        "shadow-color": [{
                            shadow: [G]
                        }],
                        opacity: [{
                            opacity: [g]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...q(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": q()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [s]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", z, D]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [d]
                        }],
                        saturate: [{
                            saturate: [b]
                        }],
                        sepia: [{
                            sepia: [E]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [s]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [d]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [g]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [b]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [E]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
                        }],
                        duration: [{
                            duration: Z()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", D]
                        }],
                        delay: [{
                            delay: Z()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", D]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [x]
                        }],
                        "scale-x": [{
                            "scale-x": [x]
                        }],
                        "scale-y": [{
                            "scale-y": [x]
                        }],
                        rotate: [{
                            rotate: [N, D]
                        }],
                        "translate-x": [{
                            "translate-x": [C]
                        }],
                        "translate-y": [{
                            "translate-y": [C]
                        }],
                        "skew-x": [{
                            "skew-x": [k]
                        }],
                        "skew-y": [{
                            "skew-y": [k]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": I()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": I()
                        }],
                        "scroll-my": [{
                            "scroll-my": I()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": I()
                        }],
                        "scroll-me": [{
                            "scroll-me": I()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": I()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": I()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": I()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": I()
                        }],
                        "scroll-p": [{
                            "scroll-p": I()
                        }],
                        "scroll-px": [{
                            "scroll-px": I()
                        }],
                        "scroll-py": [{
                            "scroll-py": I()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": I()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": I()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": I()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": I()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": I()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": I()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", D]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [T, j, M]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        9708: (e, t, r) => {
            r.d(t, {
                DX: () => i
            });
            var n = r(2115),
                o = r(6101),
                l = r(5155),
                i = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, i = n.Children.toArray(r), s = i.find(c);
                    if (s) {
                        let e = s.props.children,
                            r = i.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, l.jsx)(a, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, l.jsx)(a, { ...o,
                        ref: t,
                        children: r
                    })
                });
            i.displayName = "Slot";
            var a = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...l
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            r = t && "isReactWarning" in t && t.isReactWarning;
                        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(r);
                    return n.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    l = t[n];
                                /^on[A-Z]/.test(n) ? o && l ? r[n] = (...e) => {
                                    l(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...l
                                } : "className" === n && (r[n] = [o, l].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(l, r.props),
                        ref: t ? (0, o.t)(t, e) : e
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            var s = ({
                children: e
            }) => (0, l.jsx)(l.Fragment, {
                children: e
            });

            function c(e) {
                return n.isValidElement(e) && e.type === s
            }
        },
        9803: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(9946).A)("Key", [
                ["path", {
                    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
                    key: "g0fldk"
                }],
                ["path", {
                    d: "m21 2-9.6 9.6",
                    key: "1j0ho8"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "15.5",
                    r: "5.5",
                    key: "yqb3hr"
                }]
            ])
        },
        9946: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r(2115);
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                l = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let a = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: o = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: s,
                        className: c = "",
                        children: u,
                        iconNode: d,
                        ...f
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...i,
                        width: o,
                        height: o,
                        stroke: r,
                        strokeWidth: s ? 24 * Number(a) / Number(o) : a,
                        className: l("lucide", c),
                        ...f
                    }, [...d.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(u) ? u : [u]])
                }),
                s = (e, t) => {
                    let r = (0, n.forwardRef)((r, i) => {
                        let {
                            className: s,
                            ...c
                        } = r;
                        return (0, n.createElement)(a, {
                            ref: i,
                            iconNode: t,
                            className: l("lucide-".concat(o(e)), s),
                            ...c
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        }
    }
]);