!function(g, A) {
    "object"==typeof exports&&"undefined" !=typeof module?A(exports):"function"==typeof define&&define.amd?define(["exports"], A):A((g="undefined" !=typeof globalThis?globalThis:g||self).vis=g.vis|| {}

    )
}

(this, (function(g) {
            var A="undefined" !=typeof globalThis?globalThis:"undefined" !=typeof window?window:"undefined" !=typeof global?global:"undefined" !=typeof self?self: {}

            , t=function(g) {
                return g&&g.Math==Math&&g
            }

            , e=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof A&&A)||function() {
                return this
            }

            ()||Function("return this")(), C= {}

            , I=function(g) {
                try {
                    return ! !g()
                }

                catch(g) {
                    return !0
                }
            }

            , i= !I((function() {
                        return 7 !=Object.defineProperty( {}

                            , 1, {
                                get:function() {
                                    return 7
                                }
                            }

                        )[1]
                    }

                )), o= {}

            , n= {}

            .propertyIsEnumerable, r=Object.getOwnPropertyDescriptor, s=r&& !n.call( {
                    1:2
                }

                , 1); o.f=s?function(g) {
                var A=r(this, g); return ! !A&&A.enumerable
            }

            :n; var a, d, h=function(g, A) {
                return {
                    enumerable: !(1&g), configurable: !(2&g), writable: !(4&g), value:A
                }
            }

            , l= {}

            .toString, c=function(g) {
                return l.call(g).slice(8, -1)
            }

            , u=c, p="".split, f=I((function() {
                        return !Object("z").propertyIsEnumerable(0)
                    }

                ))?function(g) {
                return"String"==u(g)?p.call(g, ""):Object(g)
            }

            :Object, v=function(g) {
                if(null==g)throw TypeError("Can't call method on "+g); return g
            }

            , y=f, m=v, b=function(g) {
                return y(m(g))
            }

            , w=function(g) {
                return"object"==typeof g?null !==g:"function"==typeof g
            }

            , k= {}

            , x=k, E=e, O=function(g) {
                return"function"==typeof g?g:void 0
            }

            , T=function(g, A) {
                return arguments.length<2?O(x[g])||O(E[g]):x[g]&&x[g][A]||E[g]&&E[g][A]
            }

            , D=T("navigator", "userAgent")||"", N=e, R=D, P=N.process, M=N.Deno, B=P&&P.versions||M&&M.version, z=B&&B.v8; z?d=(a=z.split("."))[0]<4?1:a[0]+a[1]:R&&( !(a=R.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=R.match(/Chrome\/(\d+)/))&&(d=a[1]); var Z=d&&+d, S=Z, F=I, G= ! !Object.getOwnPropertySymbols&& !F((function() {
                        var g=Symbol(); return !String(g)|| !(Object(g)instanceof Symbol)|| !Symbol.sham&&S&&S<41
                    }

                )), L=G&& !Symbol.sham&&"symbol"==typeof Symbol.iterator, j=T, V=L?function(g) {
                return"symbol"==typeof g
            }

            :function(g) {
                var A=j("Symbol"); return"function"==typeof A&&Object(g)instanceof A
            }

            , Y=w, W= {
                exports: {}
            }

            , Q=e, U=function(g, A) {
                try {
                    Object.defineProperty(Q, g, {
                            value:A, configurable: !0, writable: !0
                        }

                    )
                }

                catch(t) {
                    Q[g]=A
                }

                return A
            }

            , _="__core-js_shared__", H=e[_]||U(_, {}

            ), K=H; (W.exports=function(g, A) {
                    return K[g]||(K[g]=void 0 !==A?A: {}

                    )
                }

            )("versions", []).push( {
                    version:"3.16.1", mode:"pure", copyright:"© 2021 Denis Pushkarev (zloirock.ru)"
                }

            ); var X=v, J=function(g) {
                return Object(X(g))
            }

            , q=J, $= {}

            .hasOwnProperty, gg=Object.hasOwn||function(g, A) {
                return $.call(q(g), A)
            }

            , Ag=0, tg=Math.random(), eg=function(g) {
                return"Symbol("+String(void 0===g?"":g)+")_"+(++Ag+tg).toString(36)
            }

            , Cg=e, Ig=W.exports, ig=gg, og=eg, ng=G, rg=L, sg=Ig("wks"), ag=Cg.Symbol, dg=rg?ag:ag&&ag.withoutSetter||og, hg=function(g) {
                return ig(sg, g)&&(ng||"string"==typeof sg[g])||(ng&&ig(ag, g)?sg[g]=ag[g]:sg[g]=dg("Symbol."+g)), sg[g]
            }

            , lg=w, cg=V, ug=function(g, A) {
                var t, e; if("string"===A&&"function"==typeof(t=g.toString)&& !Y(e=t.call(g)))return e; if("function"==typeof(t=g.valueOf)&& !Y(e=t.call(g)))return e; if("string" !==A&&"function"==typeof(t=g.toString)&& !Y(e=t.call(g)))return e; throw TypeError("Can't convert object to primitive value")
            }

            , pg=hg("toPrimitive"), fg=function(g, A) {
                if( !lg(g)||cg(g))return g; var t, e=g[pg]; if(void 0 !==e) {
                    if(void 0===A&&(A="default"), t=e.call(g, A),  !lg(t)||cg(t))return t; throw TypeError("Can't convert object to primitive value")
                }

                return void 0===A&&(A="number"), ug(g, A)
            }

            , vg=V, yg=function(g) {
                var A=fg(g, "string"); return vg(A)?A:String(A)
            }

            , mg=w, bg=e.document, wg=mg(bg)&&mg(bg.createElement), kg=function(g) {
                return wg?bg.createElement(g): {}
            }

            , xg=kg, Eg= !i&& !I((function() {
                        return 7 !=Object.defineProperty(xg("div"), "a", {
                                get:function() {
                                    return 7
                                }
                            }

                        ).a
                    }

                )), Og=i, Tg=o, Dg=h, Ng=b, Rg=yg, Pg=gg, Mg=Eg, Bg=Object.getOwnPropertyDescriptor; C.f=Og?Bg:function(g, A) {
                if(g=Ng(g), A=Rg(A), Mg)try {
                    return Bg(g, A)
                }

                catch(g) {}

                if(Pg(g, A))return Dg( !Tg.f.call(g, A), g[A])
            }

            ; var zg=I, Zg=/#|\.prototype\./, Sg=function(g, A) {
                var t=Gg[Fg(g)]; return t==jg||t !=Lg&&("function"==typeof A?zg(A): ! !A)
            }

            , Fg=Sg.normalize=function(g) {
                return String(g).replace(Zg, ".").toLowerCase()
            }

            , Gg=Sg.data= {}

            , Lg=Sg.NATIVE="N", jg=Sg.POLYFILL="P", Vg=Sg, Yg=function(g) {
                if("function" !=typeof g)throw TypeError(String(g)+" is not a function"); return g
            }

            , Wg=Yg, Qg=function(g, A, t) {
                if(Wg(g), void 0===A)return g; switch(t) {
                    case 0:return function() {
                        return g.call(A)
                    }

                    ; case 1:return function(t) {
                        return g.call(A, t)
                    }

                    ; case 2:return function(t, e) {
                        return g.call(A, t, e)
                    }

                    ; case 3:return function(t, e, C) {
                        return g.call(A, t, e, C)
                    }
                }

                return function() {
                    return g.apply(A, arguments)
                }
            }

            , Ug= {}

            , _g=w, Hg=function(g) {
                if( !_g(g))throw TypeError(String(g)+" is not an object"); return g
            }

            , Kg=i, Xg=Eg, Jg=Hg, qg=yg, $g=Object.defineProperty; Ug.f=Kg?$g:function(g, A, t) {
                if(Jg(g), A=qg(A), Jg(t), Xg)try {
                    return $g(g, A, t)
                }

                catch(g) {}

                if("get"in t||"set"in t)throw TypeError("Accessors not supported"); return"value"in t&&(g[A]=t.value), g
            }

            ; var gA=Ug, AA=h, tA=i?function(g, A, t) {
                return gA.f(g, A, AA(1, t))
            }

            :function(g, A, t) {
                return g[A]=t, g
            }

            , eA=e, CA=C.f, IA=Vg, iA=k, oA=Qg, nA=tA, rA=gg, sA=function(g) {
                var A=function(A, t, e) {
                    if(this instanceof g) {
                        switch(arguments.length) {
                            case 0:return new g; case 1:return new g(A); case 2:return new g(A, t)
                        }

                        return new g(A, t, e)
                    }

                    return g.apply(this, arguments)
                }

                ; return A.prototype=g.prototype, A
            }

            , aA=function(g, A) {
                var t, e, C, I, i, o, n, r, s=g.target, a=g.global, d=g.stat, h=g.proto, l=a?eA:d?eA[s]:(eA[s]|| {}

                ).prototype, c=a?iA:iA[s]||(iA[s]= {}

                ), u=c.prototype; for(C in A)t= !IA(a?C:s+(d?".":"#")+C, g.forced)&&l&&rA(l, C), i=c[C], t&&(o=g.noTargetGet?(r=CA(l, C))&&r.value:l[C]), I=t&&o?o:A[C], t&&typeof i==typeof I||(n=g.bind&&t?oA(I, eA):g.wrap&&t?sA(I):h&&"function"==typeof I?oA(Function.call, I):I, (g.sham||I&&I.sham||i&&i.sham)&&nA(n, "sham",  !0), c[C]=n, h&&(rA(iA, e=s+"Prototype")||nA(iA, e, {}

                        ), iA[e][C]=I, g.real&&u&& !u[C]&&nA(u, C, I)))
            }

            , dA=Math.ceil, hA=Math.floor, lA=function(g) {
                return isNaN(g=+g)?0:(g>0?hA:dA)(g)
            }

            , cA=lA, uA=Math.min, pA=function(g) {
                return g>0?uA(cA(g), 9007199254740991):0
            }

            , fA=lA, vA=Math.max, yA=Math.min, mA=function(g, A) {
                var t=fA(g); return t<0?vA(t+A, 0):yA(t, A)
            }

            , bA=b, wA=pA, kA=mA, xA=function(g) {
                return function(A, t, e) {
                    var C, I=bA(A), i=wA(I.length), o=kA(e, i); if(g&&t !=t) {
                        for(; i>o; )if((C=I[o++]) !=C)return !0
                    }

                    else for(; i>o; o++)if((g||o in I)&&I[o]===t)return g||o||0; return !g&&-1
                }
            }

            , EA= {
                includes:xA( !0), indexOf:xA( !1)
            }

            , OA= {}

            , TA=gg, DA=b, NA=EA.indexOf, RA=OA, PA=function(g, A) {
                var t, e=DA(g), C=0, I=[]; for(t in e) !TA(RA, t)&&TA(e, t)&&I.push(t); for(; A.length>C; )TA(e, t=A[C++])&&(~NA(I, t)||I.push(t)); return I
            }

            , MA=["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], BA=PA, zA=MA, ZA=Object.keys||function(g) {
                return BA(g, zA)
            }

            , SA= {}

            ; SA.f=Object.getOwnPropertySymbols; var FA=i, GA=I, LA=ZA, jA=SA, VA=o, YA=J, WA=f, QA=Object.assign, UA=Object.defineProperty, _A= !QA||GA((function() {
                        if(FA&&1 !==QA( {
                                    b:1
                                }

                                , QA(UA( {}

                                        , "a", {
                                            enumerable: !0, get:function() {
                                                UA(this, "b", {
                                                        value:3, enumerable: !1
                                                    }

                                                )
                                            }
                                        }

                                    ), {
                                        b:2
                                    }

                                )).b)return !0; var g= {}

                        , A= {}

                        , t=Symbol(), e="abcdefghijklmnopqrst"; return g[t]=7, e.split("").forEach((function(g) {
                                    A[g]=g
                                }

                            )), 7 !=QA( {}

                            , g)[t]||LA(QA( {}

                                , A)).join("") !=e
                    }

                ))?function(g, A) {
                for(var t=YA(g), e=arguments.length, C=1, I=jA.f, i=VA.f; e>C; )for(var o, n=WA(arguments[C++]), r=I?LA(n).concat(I(n)):LA(n), s=r.length, a=0; s>a; )o=r[a++], FA&& !i.call(n, o)||(t[o]=n[o]); return t
            }

            :QA; aA( {
                    target:"Object", stat: !0, forced:Object.assign !==_A
                }

                , {
                    assign:_A
                }

            ); var HA=k.Object.assign, KA=Yg, XA=w, JA=[].slice, qA= {}

            , $A=function(g, A, t) {
                if( !(A in qA)) {
                    for(var e=[], C=0; C<A; C++)e[C]="a["+C+"]"; qA[A]=Function("C,a", "return new C("+e.join(",")+")")
                }

                return qA[A](g, t)
            }

            , gt=Function.bind||function(g) {
                var A=KA(this), t=JA.call(arguments, 1), e=function() {
                    var C=t.concat(JA.call(arguments)); return this instanceof e?$A(A, C.length, C):A.apply(g, C)
                }

                ; return XA(A.prototype)&&(e.prototype=A.prototype), e
            }

            ; aA( {
                    target:"Function", proto: !0
                }

                , {
                    bind:gt
                }

            ); var At=k, tt=function(g) {
                return At[g+"Prototype"]
            }

            , et=tt("Function").bind, Ct=Function.prototype, It=function(g) {
                var A=g.bind; return g===Ct||g instanceof Function&&A===Ct.bind?et:A
            }

            ; function it(g, A, t, e) {
                g.beginPath(), g.arc(A, t, e, 0, 2*Math.PI,  !1), g.closePath()
            }

            function ot(g, A, t, e, C, I) {
                var i=Math.PI/180; e-2*I<0&&(I=e/2), C-2*I<0&&(I=C/2), g.beginPath(), g.moveTo(A+I, t), g.lineTo(A+e-I, t), g.arc(A+e-I, t+I, I, 270*i, 360*i,  !1), g.lineTo(A+e, t+C-I), g.arc(A+e-I, t+C-I, I, 0, 90*i,  !1), g.lineTo(A+I, t+C), g.arc(A+I, t+C-I, I, 90*i, 180*i,  !1), g.lineTo(A, t+I), g.arc(A+I, t+I, I, 180*i, 270*i,  !1), g.closePath()
            }

            function nt(g, A, t, e, C) {
                var I=.5522848, i=e/2*I, o=C/2*I, n=A+e, r=t+C, s=A+e/2, a=t+C/2; g.beginPath(), g.moveTo(A, a), g.bezierCurveTo(A, a-o, s-i, t, s, t), g.bezierCurveTo(s+i, t, n, a-o, n, a), g.bezierCurveTo(n, a+o, s+i, r, s, r), g.bezierCurveTo(s-i, r, A, a+o, A, a), g.closePath()
            }

            function rt(g, A, t, e, C) {
                var I=C*(1/3), i=.5522848, o=e/2*i, n=I/2*i, r=A+e, s=t+I, a=A+e/2, d=t+I/2, h=t+(C-I/2), l=t+C; g.beginPath(), g.moveTo(r, d), g.bezierCurveTo(r, d+n, a+o, s, a, s), g.bezierCurveTo(a-o, s, A, d+n, A, d), g.bezierCurveTo(A, d-n, a-o, t, a, t), g.bezierCurveTo(a+o, t, r, d-n, r, d), g.lineTo(r, h), g.bezierCurveTo(r, h+n, a+o, l, a, l), g.bezierCurveTo(a-o, l, A, h+n, A, h), g.lineTo(A, d)
            }

            function st(g, A, t, e, C, I) {
                g.beginPath(), g.moveTo(A, t); for(var i=I.length, o=e-A, n=C-t, r=n/o, s=Math.sqrt(o*o+n*n), a=0, d= !0, h=0, l=+I[0]; s>=.1; )(l=+I[a++%i])>s&&(l=s), h=Math.sqrt(l*l/(1+r*r)), A+=h=o<0?-h:h, t+=r*h,  !0===d?g.lineTo(A, t):g.moveTo(A, t), s-=l, d= !d
            }

            var at= {
                circle:it, dashedLine:st, database:rt, diamond:function(g, A, t, e) {
                    g.beginPath(), g.lineTo(A, t+e), g.lineTo(A+e, t), g.lineTo(A, t-e), g.lineTo(A-e, t), g.closePath()
                }

                , ellipse:nt, ellipse_vis:nt, hexagon:function(g, A, t, e) {
                    g.beginPath(); var C=2*Math.PI/6; g.moveTo(A+e, t); for(var I=1; I<6; I++)g.lineTo(A+e*Math.cos(C*I), t+e*Math.sin(C*I)); g.closePath()
                }

                , roundRect:ot, square:function(g, A, t, e) {
                    g.beginPath(), g.rect(A-e, t-e, 2*e, 2*e), g.closePath()
                }

                , star:function(g, A, t, e) {
                    g.beginPath(), t+=.1*(e*=.82); for(var C=0; C<10; C++) {
                        var I=C%2==0?1.3*e:.5*e; g.lineTo(A+I*Math.sin(2*C*Math.PI/10), t-I*Math.cos(2*C*Math.PI/10))
                    }

                    g.closePath()
                }

                , triangle:function(g, A, t, e) {
                    g.beginPath(), t+=.275*(e*=1.15); var C=2*e, I=C/2, i=Math.sqrt(3)/6*C, o=Math.sqrt(C*C-I*I); g.moveTo(A, t-(o-i)), g.lineTo(A+I, t+i), g.lineTo(A-I, t+i), g.lineTo(A, t-(o-i)), g.closePath()
                }

                , triangleDown:function(g, A, t, e) {
                    g.beginPath(), t-=.275*(e*=1.15); var C=2*e, I=C/2, i=Math.sqrt(3)/6*C, o=Math.sqrt(C*C-I*I); g.moveTo(A, t+(o-i)), g.lineTo(A+I, t-i), g.lineTo(A-I, t-i), g.lineTo(A, t+(o-i)), g.closePath()
                }
            }

            ; function dt(g, A) {
                void 0===A&&(A= {}

                ); var t=A.insertAt; if(g&&"undefined" !=typeof document) {
                    var e=document.head||document.getElementsByTagName("head")[0], C=document.createElement("style"); C.type="text/css", "top"===t&&e.firstChild?e.insertBefore(C, e.firstChild):e.appendChild(C), C.styleSheet?C.styleSheet.cssText=g:C.appendChild(document.createTextNode(g))
                }
            }

            dt(".vis-overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10}.vis-active{box-shadow:0 0 10px #86d5f8}"); dt(".vis [class*=span]{min-height:0;width:auto}"); dt('div.vis-color-picker{position:absolute;top:0;left:30px;margin-top:-140px;margin-left:30px;width:310px;height:444px;z-index:1;padding:10px;border-radius:15px;background-color:#fff;display:none;box-shadow:0 0 10px 0 rgba(0,0,0,.5)}div.vis-color-picker div.vis-arrow{position:absolute;top:147px;left:5px}div.vis-color-picker div.vis-arrow:after,div.vis-color-picker div.vis-arrow:before{right:100%;top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}div.vis-color-picker div.vis-arrow:after{border-color:hsla(0,0%,100%,0) #fff hsla(0,0%,100%,0) hsla(0,0%,100%,0);border-width:30px;margin-top:-30px}div.vis-color-picker div.vis-color{position:absolute;width:289px;height:289px;cursor:pointer}div.vis-color-picker div.vis-brightness{position:absolute;top:313px}div.vis-color-picker div.vis-opacity{position:absolute;top:350px}div.vis-color-picker div.vis-selector{position:absolute;top:137px;left:137px;width:15px;height:15px;border-radius:15px;border:1px solid #fff;background:#4c4c4c;background:-moz-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#4c4c4c),color-stop(12%,#595959),color-stop(25%,#666),color-stop(39%,#474747),color-stop(50%,#2c2c2c),color-stop(51%,#000),color-stop(60%,#111),color-stop(76%,#2b2b2b),color-stop(91%,#1c1c1c),color-stop(100%,#131313));background:-webkit-linear-gradient(top,#4c4c4c,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);background:-o-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-ms-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:linear-gradient(180deg,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#4c4c4c",endColorstr="#131313",GradientType=0)}div.vis-color-picker div.vis-new-color{left:159px;text-align:right;padding-right:2px}div.vis-color-picker div.vis-initial-color,div.vis-color-picker div.vis-new-color{position:absolute;width:140px;height:20px;border:1px solid rgba(0,0,0,.1);border-radius:5px;top:380px;font-size:10px;color:rgba(0,0,0,.4);vertical-align:middle;line-height:20px}div.vis-color-picker div.vis-initial-color{left:10px;text-align:left;padding-left:2px}div.vis-color-picker div.vis-label{position:absolute;width:300px;left:10px}div.vis-color-picker div.vis-label.vis-brightness{top:300px}div.vis-color-picker div.vis-label.vis-opacity{top:338px}div.vis-color-picker div.vis-button{position:absolute;width:68px;height:25px;border-radius:10px;vertical-align:middle;text-align:center;line-height:25px;top:410px;border:2px solid #d9d9d9;background-color:#f7f7f7;cursor:pointer}div.vis-color-picker div.vis-button.vis-cancel{left:5px}div.vis-color-picker div.vis-button.vis-load{left:82px}div.vis-color-picker div.vis-button.vis-apply{left:159px}div.vis-color-picker div.vis-button.vis-save{left:236px}div.vis-color-picker input.vis-range{width:290px;height:20px}'); dt('div.vis-configuration{position:relative;display:block;float:left;font-size:12px}div.vis-configuration-wrapper{display:block;width:700px}div.vis-configuration-wrapper:after{clear:both;content:"";display:block}div.vis-configuration.vis-config-option-container{display:block;width:495px;background-color:#fff;border:2px solid #f7f8fa;border-radius:4px;margin-top:20px;left:10px;padding-left:5px}div.vis-configuration.vis-config-button{display:block;width:495px;height:25px;vertical-align:middle;line-height:25px;background-color:#f7f8fa;border:2px solid #ceced0;border-radius:4px;margin-top:20px;left:10px;padding-left:5px;cursor:pointer;margin-bottom:30px}div.vis-configuration.vis-config-button.hover{background-color:#4588e6;border:2px solid #214373;color:#fff}div.vis-configuration.vis-config-item{display:block;float:left;width:495px;height:25px;vertical-align:middle;line-height:25px}div.vis-configuration.vis-config-item.vis-config-s2{left:10px;background-color:#f7f8fa;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-item.vis-config-s3{left:20px;background-color:#e4e9f0;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-item.vis-config-s4{left:30px;background-color:#cfd8e6;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-header{font-size:18px;font-weight:700}div.vis-configuration.vis-config-label{width:120px;height:25px;line-height:25px}div.vis-configuration.vis-config-label.vis-config-s3{width:110px}div.vis-configuration.vis-config-label.vis-config-s4{width:100px}div.vis-configuration.vis-config-colorBlock{top:1px;width:30px;height:19px;border:1px solid #444;border-radius:2px;padding:0;margin:0;cursor:pointer}input.vis-configuration.vis-config-checkbox{left:-5px}input.vis-configuration.vis-config-rangeinput{position:relative;top:-5px;width:60px;padding:1px;margin:0;pointer-events:none}input.vis-configuration.vis-config-range{-webkit-appearance:none;border:0 solid #fff;background-color:transparent;width:300px;height:20px}input.vis-configuration.vis-config-range::-webkit-slider-runnable-track{width:300px;height:5px;background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);border:1px solid #999;box-shadow:0 0 3px 0 #aaa;border-radius:3px}input.vis-configuration.vis-config-range::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid #14334b;height:17px;width:17px;border-radius:50%;background:#3876c2;background:-moz-linear-gradient(top,#3876c2 0,#385380 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3876c2),color-stop(100%,#385380));background:-webkit-linear-gradient(top,#3876c2,#385380);background:-o-linear-gradient(top,#3876c2 0,#385380 100%);background:-ms-linear-gradient(top,#3876c2 0,#385380 100%);background:linear-gradient(180deg,#3876c2 0,#385380);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#3876c2",endColorstr="#385380",GradientType=0);box-shadow:0 0 1px 0 #111927;margin-top:-7px}input.vis-configuration.vis-config-range:focus{outline:none}input.vis-configuration.vis-config-range:focus::-webkit-slider-runnable-track{background:#9d9d9d;background:-moz-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9d9d9d),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#9d9d9d,#c8c8c8 99%);background:-o-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:linear-gradient(180deg,#9d9d9d 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#9d9d9d",endColorstr="#c8c8c8",GradientType=0)}input.vis-configuration.vis-config-range::-moz-range-track{width:300px;height:10px;background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);border:1px solid #999;box-shadow:0 0 3px 0 #aaa;border-radius:3px}input.vis-configuration.vis-config-range::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#385380}input.vis-configuration.vis-config-range:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.vis-configuration.vis-config-range::-ms-track{width:300px;height:5px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input.vis-configuration.vis-config-range::-ms-fill-lower{background:#777;border-radius:10px}input.vis-configuration.vis-config-range::-ms-fill-upper{background:#ddd;border-radius:10px}input.vis-configuration.vis-config-range::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#385380}input.vis-configuration.vis-config-range:focus::-ms-fill-lower{background:#888}input.vis-configuration.vis-config-range:focus::-ms-fill-upper{background:#ccc}.vis-configuration-popup{position:absolute;background:rgba(57,76,89,.85);border:2px solid #f2faff;line-height:30px;height:30px;width:150px;text-align:center;color:#fff;font-size:14px;border-radius:4px;-webkit-transition:opacity .3s ease-in-out;-moz-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.vis-configuration-popup:after,.vis-configuration-popup:before{left:100%;top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.vis-configuration-popup:after{border-color:rgba(136,183,213,0) rgba(136,183,213,0) rgba(136,183,213,0) rgba(57,76,89,.85);border-width:8px;margin-top:-8px}.vis-configuration-popup:before{border-color:rgba(194,225,245,0) rgba(194,225,245,0) rgba(194,225,245,0) #f2faff;border-width:12px;margin-top:-12px}'); dt("div.vis-tooltip{position:absolute;visibility:hidden;padding:5px;white-space:nowrap;font-family:verdana;font-size:14px;color:#000;background-color:#f5f4ed;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:1px solid #808074;box-shadow:3px 3px 10px rgba(0,0,0,.2);pointer-events:none;z-index:5}"); var ht= {
                exports: {}
            }

            ;  !function(g) {
                function A(g) {
                    if(g)return function(g) {
                        for(var t in A.prototype)g[t]=A.prototype[t]; return g
                    }

                    (g)
                }

                g.exports=A, A.prototype.on=A.prototype.addEventListener=function(g, A) {
                    return this._callbacks=this._callbacks|| {}

                    , (this._callbacks["$"+g]=this._callbacks["$"+g]||[]).push(A), this
                }

                , A.prototype.once=function(g, A) {
                    function t() {
                        this.off(g, t), A.apply(this, arguments)
                    }

                    return t.fn=A, this.on(g, t), this
                }

                , A.prototype.off=A.prototype.removeListener=A.prototype.removeAllListeners=A.prototype.removeEventListener=function(g, A) {
                    if(this._callbacks=this._callbacks|| {}

                        , 0==arguments.length)return this._callbacks= {}

                    , this; var t, e=this._callbacks["$"+g]; if( !e)return this; if(1==arguments.length)return delete this._callbacks["$"+g], this; for(var C=0; C<e.length; C++)if((t=e[C])===A||t.fn===A) {
                        e.splice(C, 1); break
                    }

                    return 0===e.length&&delete this._callbacks["$"+g], this
                }

                , A.prototype.emit=function(g) {
                    this._callbacks=this._callbacks|| {}

                    ; for(var A=new Array(arguments.length-1), t=this._callbacks["$"+g], e=1; e<arguments.length; e++)A[e-1]=arguments[e]; if(t) {
                        e=0; for(var C=(t=t.slice(0)).length; e<C; ++e)t[e].apply(this, A)
                    }

                    return this
                }

                , A.prototype.listeners=function(g) {
                    return this._callbacks=this._callbacks|| {}

                    , this._callbacks["$"+g]||[]
                }

                , A.prototype.hasListeners=function(g) {
                    return ! !this.listeners(g).length
                }
            }

            (ht); var lt=ht.exports, ct=V, ut=function(g) {
                if(ct(g))throw TypeError("Cannot convert a Symbol value to a string"); return String(g)
            }

            , pt=lA, ft=ut, vt=v, yt=function(g) {
                return function(A, t) {
                    var e, C, I=ft(vt(A)), i=pt(t), o=I.length; return i<0||i>=o?g?"":void 0:(e=I.charCodeAt(i))<55296||e>56319||i+1===o||(C=I.charCodeAt(i+1))<56320||C>57343?g?I.charAt(i):e:g?I.slice(i, i+2):C-56320+(e-55296<<10)+65536
                }
            }

            , mt= {
                codeAt:yt( !1), charAt:yt( !0)
            }

            , bt=H, wt=Function.toString; "function" !=typeof bt.inspectSource&&(bt.inspectSource=function(g) {
                    return wt.call(g)
                }

            ); var kt, xt, Et, Ot=bt.inspectSource, Tt=e.WeakMap, Dt="function"==typeof Tt&&/native code/.test(Ot(Tt)), Nt=W.exports, Rt=eg, Pt=Nt("keys"), Mt=function(g) {
                return Pt[g]||(Pt[g]=Rt(g))
            }

            , Bt=Dt, zt=w, Zt=tA, St=gg, Ft=H, Gt=Mt, Lt=OA, jt="Object already initialized", Vt=e.WeakMap; if(Bt||Ft.state) {
                var Yt=Ft.state||(Ft.state=new Vt), Wt=Yt.get, Qt=Yt.has, Ut=Yt.set; kt=function(g, A) {
                    if(Qt.call(Yt, g))throw new TypeError(jt); return A.facade=g, Ut.call(Yt, g, A), A
                }

                , xt=function(g) {
                    return Wt.call(Yt, g)|| {}
                }

                , Et=function(g) {
                    return Qt.call(Yt, g)
                }
            }

            else {
                var _t=Gt("state"); Lt[_t]= !0, kt=function(g, A) {
                    if(St(g, _t))throw new TypeError(jt); return A.facade=g, Zt(g, _t, A), A
                }

                , xt=function(g) {
                    return St(g, _t)?g[_t]: {}
                }

                , Et=function(g) {
                    return St(g, _t)
                }
            }

            var Ht, Kt, Xt, Jt= {
                set:kt, get:xt, has:Et, enforce:function(g) {
                    return Et(g)?xt(g):kt(g, {}

                    )
                }

                , getterFor:function(g) {
                    return function(A) {
                        var t; if( !zt(A)||(t=xt(A)).type !==g)throw TypeError("Incompatible receiver, "+g+" required"); return t
                    }
                }
            }

            , qt= !I((function() {
                        function g() {}

                        return g.prototype.constructor=null, Object.getPrototypeOf(new g) !==g.prototype
                    }

                )), $t=gg, ge=J, Ae=qt, te=Mt("IE_PROTO"), ee=Object.prototype, Ce=Ae?Object.getPrototypeOf:function(g) {
                return g=ge(g), $t(g, te)?g[te]:"function"==typeof g.constructor&&g instanceof g.constructor?g.constructor.prototype:g instanceof Object?ee:null
            }

            , Ie=I, ie=Ce, oe=tA, ne=gg, re=hg("iterator"), se= !1; [].keys&&("next"in(Xt=[].keys())?(Kt=ie(ie(Xt))) !==Object.prototype&&(Ht=Kt):se= !0); var ae=null==Ht||Ie((function() {
                        var g= {}

                        ; return Ht[re].call(g) !==g
                    }

                )); ae&&(Ht= {}

            ), ae&& !ne(Ht, re)&&oe(Ht, re, (function() {
                        return this
                    }

                )); var de, he= {
                IteratorPrototype:Ht, BUGGY_SAFARI_ITERATORS:se
            }

            , le=Ug, ce=Hg, ue=ZA, pe=i?Object.defineProperties:function(g, A) {
                ce(g); for(var t, e=ue(A), C=e.length, I=0; C>I; )le.f(g, t=e[I++], A[t]); return g
            }

            , fe=T("document", "documentElement"), ve=Hg, ye=pe, me=MA, be=OA, we=fe, ke=kg, xe=Mt("IE_PROTO"), Ee=function() {}

            , Oe=function(g) {
                return"<script>"+g+"</"+"script>"
            }

            , Te=function(g) {
                g.write(Oe("")), g.close(); var A=g.parentWindow.Object; return g=null, A
            }

            , De=function() {
                try {
                    de=new ActiveXObject("htmlfile")
                }

                catch(g) {}

                De=document.domain&&de?Te(de):function() {
                    var g, A=ke("iframe"); if(A.style)return A.style.display="none", we.appendChild(A), A.src=String("javascript:"), (g=A.contentWindow.document).open(), g.write(Oe("document.F=Object")), g.close(), g.F
                }

                ()||Te(de); for(var g=me.length; g--; )delete De.prototype[me[g]]; return De()
            }

            ; be[xe]= !0; var Ne=Object.create||function(g, A) {
                var t; return null !==g?(Ee.prototype=ve(g), t=new Ee, Ee.prototype=null, t[xe]=g):t=De(), void 0===A?t:ye(t, A)
            }

            , Re= {}

            ; Re[hg("toStringTag")]="z"; var Pe="[object z]"===String(Re), Me=Pe, Be=c, ze=hg("toStringTag"), Ze="Arguments"==Be(function() {
                    return arguments
                }

                ()), Se=Me?Be:function(g) {
                var A, t, e; return void 0===g?"Undefined":null===g?"Null":"string"==typeof(t=function(g, A) {
                        try {
                            return g[A]
                        }

                        catch(g) {}
                    }

                    (A=Object(g), ze))?t:Ze?Be(A):"Object"==(e=Be(A))&&"function"==typeof A.callee?"Arguments":e
            }

            , Fe=Se, Ge=Pe? {}

            .toString:function() {
                return"[object "+Fe(this)+"]"
            }

            , Le=Pe, je=Ug.f, Ve=tA, Ye=gg, We=Ge, Qe=hg("toStringTag"), Ue=function(g, A, t, e) {
                if(g) {
                    var C=t?g:g.prototype; Ye(C, Qe)||je(C, Qe, {
                            configurable: !0, value:A
                        }

                    ), e&& !Le&&Ve(C, "toString", We)
                }
            }

            , _e= {}

            , He=he.IteratorPrototype, Ke=Ne, Xe=h, Je=Ue, qe=_e, $e=function() {
                return this
            }

            , gC=w, AC=Hg, tC=function(g) {
                if( !gC(g)&&null !==g)throw TypeError("Can't set "+String(g)+" as a prototype"); return g
            }

            , eC=Object.setPrototypeOf||("__proto__"in {}

                ?function() {
                    var g, A= !1, t= {}

                    ; try {
                        (g=Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), A=t instanceof Array
                    }

                    catch(g) {}

                    return function(t, e) {
                        return AC(t), tC(e), A?g.call(t, e):t.__proto__=e, t
                    }
                }

                ():void 0), CC=tA, IC=function(g, A, t, e) {
                e&&e.enumerable?g[A]=t:CC(g, A, t)
            }

            , iC=aA, oC=function(g, A, t) {
                var e=A+" Iterator"; return g.prototype=Ke(He, {
                        next:Xe(1, t)
                    }

                ), Je(g, e,  !1,  !0), qe[e]=$e, g
            }

            , nC=Ce, rC=Ue, sC=tA, aC=IC, dC=_e, hC=he.IteratorPrototype, lC=he.BUGGY_SAFARI_ITERATORS, cC=hg("iterator"), uC="keys", pC="values", fC="entries", vC=function() {
                return this
            }

            , yC=function(g, A, t, e, C, I, i) {
                oC(t, A, e); var o, n, r, s=function(g) {
                    if(g===C&&c)return c; if( !lC&&g in h)return h[g]; switch(g) {
                        case uC:case pC:case fC:return function() {
                            return new t(this, g)
                        }
                    }

                    return function() {
                        return new t(this)
                    }
                }

                , a=A+" Iterator", d= !1, h=g.prototype, l=h[cC]||h["@@iterator"]||C&&h[C], c= !lC&&l||s(C), u="Array"==A&&h.entries||l; if(u&&(o=nC(u.call(new g)), hC !==Object.prototype&&o.next&&(rC(o, a,  !0,  !0), dC[a]=vC)), C==pC&&l&&l.name !==pC&&(d= !0, c=function() {
                            return l.call(this)
                        }

                    ), i&&h[cC] !==c&&sC(h, cC, c), dC[A]=c, C)if(n= {
                        values:s(pC), keys:I?c:s(uC), entries:s(fC)
                    }

                    , i)for(r in n)(lC||d|| !(r in h))&&aC(h, r, n[r]); else iC( {
                        target:A, proto: !0, forced:lC||d
                    }

                    , n); return n
            }

            , mC=mt.charAt, bC=ut, wC=Jt, kC=yC, xC="String Iterator", EC=wC.set, OC=wC.getterFor(xC); kC(String, "String", (function(g) {
                        EC(this, {
                                type:xC, string:bC(g), index:0
                            }

                        )
                    }

                ), (function() {
                        var g, A=OC(this), t=A.string, e=A.index; return e>=t.length? {
                            value:void 0, done: !0
                        }

                        :(g=mC(t, e), A.index+=g.length, {
                                value:g, done: !1
                            }

                        )
                    }

                )); var TC=Hg, DC=function(g) {
                var A=g.return; if(void 0 !==A)return TC(A.call(g)).value
            }

            , NC=Hg, RC=DC, PC=_e, MC=hg("iterator"), BC=Array.prototype, zC=function(g) {
                return void 0 !==g&&(PC.Array===g||BC[MC]===g)
            }

            , ZC=yg, SC=Ug, FC=h, GC=function(g, A, t) {
                var e=ZC(A); e in g?SC.f(g, e, FC(0, t)):g[e]=t
            }

            , LC=Se, jC=_e, VC=hg("iterator"), YC=function(g) {
                if(null !=g)return g[VC]||g["@@iterator"]||jC[LC(g)]
            }

            , WC=Qg, QC=J, UC=function(g, A, t, e) {
                try {
                    return e?A(NC(t)[0], t[1]):A(t)
                }

                catch(A) {
                    throw RC(g), A
                }
            }

            , _C=zC, HC=pA, KC=GC, XC=YC, JC=hg("iterator"), qC= !1; try {
                var $C=0, gI= {
                    next:function() {
                        return {
                            done: ! !$C++
                        }
                    }

                    , return:function() {
                        qC= !0
                    }
                }

                ; gI[JC]=function() {
                    return this
                }

                , Array.from(gI, (function() {
                            throw 2
                        }

                    ))
            }

            catch(g) {}

            var AI=function(g) {
                var A, t, e, C, I, i, o=QC(g), n="function"==typeof this?this:Array, r=arguments.length, s=r>1?arguments[1]:void 0, a=void 0 !==s, d=XC(o), h=0; if(a&&(s=WC(s, r>2?arguments[2]:void 0, 2)), null==d||n==Array&&_C(d))for(t=new n(A=HC(o.length)); A>h; h++)i=a?s(o[h], h):o[h], KC(t, h, i); else for(I=(C=d.call(o)).next, t=new n;  !(e=I.call(C)).done; h++)i=a?UC(C, s, [e.value, h],  !0):e.value, KC(t, h, i); return t.length=h, t
            }

            ; aA( {
                    target:"Array", stat: !0, forced: !function(g, A) {
                        if( !A&& !qC)return !1; var t= !1; try {
                            var e= {}

                            ; e[JC]=function() {
                                return {
                                    next:function() {
                                        return {
                                            done:t= !0
                                        }
                                    }
                                }
                            }

                            , g(e)
                        }

                        catch(g) {}

                        return t
                    }

                    ((function(g) {
                                Array.from(g)
                            }

                        ))
                }

                , {
                    from:AI
                }

            ); var tI=k.Array.from, eI=tI, CI=b, II=_e, iI=Jt, oI=yC, nI="Array Iterator", rI=iI.set, sI=iI.getterFor(nI); oI(Array, "Array", (function(g, A) {
                        rI(this, {
                                type:nI, target:CI(g), index:0, kind:A
                            }

                        )
                    }

                ), (function() {
                        var g=sI(this), A=g.target, t=g.kind, e=g.index++; return !A||e>=A.length?(g.target=void 0, {
                                value:void 0, done: !0
                            }

                        ):"keys"==t? {
                            value:e, done: !1
                        }

                        :"values"==t? {
                            value:A[e], done: !1
                        }

                        : {
                            value:[e, A[e]], done: !1
                        }
                    }

                ), "values"), II.Arguments=II.Array; var aI=YC, dI= {
                CSSRuleList:0, CSSStyleDeclaration:0, CSSValueList:0, ClientRectList:0, DOMRectList:0, DOMStringList:0, DOMTokenList:1, DataTransferItemList:0, FileList:0, HTMLAllCollection:0, HTMLCollection:0, HTMLFormElement:0, HTMLSelectElement:0, MediaList:0, MimeTypeArray:0, NamedNodeMap:0, NodeList:1, PaintRequestList:0, Plugin:0, PluginArray:0, SVGLengthList:0, SVGNumberList:0, SVGPathSegList:0, SVGPointList:0, SVGStringList:0, SVGTransformList:0, SourceBufferList:0, StyleSheetList:0, TextTrackCueList:0, TextTrackList:0, TouchList:0
            }

            , hI=e, lI=Se, cI=tA, uI=_e, pI=hg("toStringTag"); for(var fI in dI) {
                var vI=hI[fI], yI=vI&&vI.prototype; yI&&lI(yI) !==pI&&cI(yI, pI, fI), uI[fI]=uI.Array
            }

            var mI=aI, bI=c, wI=Array.isArray||function(g) {
                return"Array"==bI(g)
            }

            , kI= {}

            , xI=PA, EI=MA.concat("length", "prototype"); kI.f=Object.getOwnPropertyNames||function(g) {
                return xI(g, EI)
            }

            ; var OI= {}

            , TI=b, DI=kI.f, NI= {}

            .toString, RI="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]; OI.f=function(g) {
                return RI&&"[object Window]"==NI.call(g)?function(g) {
                    try {
                        return DI(g)
                    }

                    catch(g) {
                        return RI.slice()
                    }
                }

                (g):DI(TI(g))
            }

            ; var PI= {}

            , MI=hg; PI.f=MI; var BI=k, zI=gg, ZI=PI, SI=Ug.f, FI=function(g) {
                var A=BI.Symbol||(BI.Symbol= {}

                ); zI(A, g)||SI(A, g, {
                        value:ZI.f(g)
                    }

                )
            }

            , GI=w, LI=wI, jI=hg("species"), VI=function(g) {
                var A; return LI(g)&&("function" !=typeof(A=g.constructor)||A !==Array&& !LI(A.prototype)?GI(A)&&null===(A=A[jI])&&(A=void 0):A=void 0), void 0===A?Array:A
            }

            , YI=function(g, A) {
                return new(VI(g))(0===A?0:A)
            }

            , WI=Qg, QI=f, UI=J, _I=pA, HI=YI, KI=[].push, XI=function(g) {
                var A=1==g, t=2==g, e=3==g, C=4==g, I=6==g, i=7==g, o=5==g||I; return function(n, r, s, a) {
                    for(var d, h, l=UI(n), c=QI(l), u=WI(r, s, 3), p=_I(c.length), f=0, v=a||HI, y=A?v(n, p):t||i?v(n, 0):void 0; p>f; f++)if((o||f in c)&&(h=u(d=c[f], f, l), g))if(A)y[f]=h; else if(h)switch(g) {
                        case 3:return !0; case 5:return d; case 6:return f; case 2:KI.call(y, d)
                    }

                    else switch(g) {
                        case 4:return !1; case 7:KI.call(y, d)
                    }

                    return I?-1:e||C?C:y
                }
            }

            , JI= {
                forEach:XI(0), map:XI(1), filter:XI(2), some:XI(3), every:XI(4), find:XI(5), findIndex:XI(6), filterReject:XI(7)
            }

            , qI=aA, $I=e, gi=T, Ai=i, ti=G, ei=I, Ci=gg, Ii=wI, ii=w, oi=V, ni=Hg, ri=J, si=b, ai=yg, di=ut, hi=h, li=Ne, ci=ZA, ui=kI, pi=OI, fi=SA, vi=C, yi=Ug, mi=o, bi=tA, wi=IC, ki=W.exports, xi=OA, Ei=eg, Oi=hg, Ti=PI, Di=FI, Ni=Ue, Ri=Jt, Pi=JI.forEach, Mi=Mt("hidden"), Bi="Symbol", zi=Oi("toPrimitive"), Zi=Ri.set, Si=Ri.getterFor(Bi), Fi=Object.prototype, Gi=$I.Symbol, Li=gi("JSON", "stringify"), ji=vi.f, Vi=yi.f, Yi=pi.f, Wi=mi.f, Qi=ki("symbols"), Ui=ki("op-symbols"), _i=ki("string-to-symbol-registry"), Hi=ki("symbol-to-string-registry"), Ki=ki("wks"), Xi=$I.QObject, Ji= !Xi|| !Xi.prototype|| !Xi.prototype.findChild, qi=Ai&&ei((function() {
                        return 7 !=li(Vi( {}

                                , "a", {
                                    get:function() {
                                        return Vi(this, "a", {
                                                value:7
                                            }

                                        ).a
                                    }
                                }

                            )).a
                    }

                ))?function(g, A, t) {
                var e=ji(Fi, A); e&&delete Fi[A], Vi(g, A, t), e&&g !==Fi&&Vi(Fi, A, e)
            }

            :Vi, $i=function(g, A) {
                var t=Qi[g]=li(Gi.prototype); return Zi(t, {
                        type:Bi, tag:g, description:A
                    }

                ), Ai||(t.description=A), t
            }

            , go=function(g, A, t) {
                g===Fi&&go(Ui, A, t), ni(g); var e=ai(A); return ni(t), Ci(Qi, e)?(t.enumerable?(Ci(g, Mi)&&g[Mi][e]&&(g[Mi][e]= !1), t=li(t, {
                                enumerable:hi(0,  !1)
                            }

                        )):(Ci(g, Mi)||Vi(g, Mi, hi(1, {}

                            )), g[Mi][e]= !0), qi(g, e, t)):Vi(g, e, t)
            }

            , Ao=function(g, A) {
                ni(g); var t=si(A), e=ci(t).concat(Io(t)); return Pi(e, (function(A) {
                            Ai&& !to.call(t, A)||go(g, A, t[A])
                        }

                    )), g
            }

            , to=function(g) {
                var A=ai(g), t=Wi.call(this, A); return !(this===Fi&&Ci(Qi, A)&& !Ci(Ui, A))&&( !(t|| !Ci(this, A)|| !Ci(Qi, A)||Ci(this, Mi)&&this[Mi][A])||t)
            }

            , eo=function(g, A) {
                var t=si(g), e=ai(A); if(t !==Fi|| !Ci(Qi, e)||Ci(Ui, e)) {
                    var C=ji(t, e); return !C|| !Ci(Qi, e)||Ci(t, Mi)&&t[Mi][e]||(C.enumerable= !0), C
                }
            }

            , Co=function(g) {
                var A=Yi(si(g)), t=[]; return Pi(A, (function(g) {
                            Ci(Qi, g)||Ci(xi, g)||t.push(g)
                        }

                    )), t
            }

            , Io=function(g) {
                var A=g===Fi, t=Yi(A?Ui:si(g)), e=[]; return Pi(t, (function(g) {
                             !Ci(Qi, g)||A&& !Ci(Fi, g)||e.push(Qi[g])
                        }

                    )), e
            }

            ; (ti||(wi((Gi=function() {
                                if(this instanceof Gi)throw TypeError("Symbol is not a constructor"); var g=arguments.length&&void 0 !==arguments[0]?di(arguments[0]):void 0, A=Ei(g), t=function(g) {
                                    this===Fi&&t.call(Ui, g), Ci(this, Mi)&&Ci(this[Mi], A)&&(this[Mi][A]= !1), qi(this, A, hi(1, g))
                                }

                                ; return Ai&&Ji&&qi(Fi, A, {
                                        configurable: !0, set:t
                                    }

                                ), $i(A, g)
                            }

                        ).prototype, "toString", (function() {
                                return Si(this).tag
                            }

                        )), wi(Gi, "withoutSetter", (function(g) {
                                return $i(Ei(g), g)
                            }

                        )), mi.f=to, yi.f=go, vi.f=eo, ui.f=pi.f=Co, fi.f=Io, Ti.f=function(g) {
                        return $i(Oi(g), g)
                    }

                    , Ai&&Vi(Gi.prototype, "description", {
                            configurable: !0, get:function() {
                                return Si(this).description
                            }
                        }

                    )), qI( {
                        global: !0, wrap: !0, forced: !ti, sham: !ti
                    }

                    , {
                        Symbol:Gi
                    }

                ), Pi(ci(Ki), (function(g) {
                            Di(g)
                        }

                    )), qI( {
                        target:Bi, stat: !0, forced: !ti
                    }

                    , {
                        for:function(g) {
                            var A=di(g); if(Ci(_i, A))return _i[A]; var t=Gi(A); return _i[A]=t, Hi[t]=A, t
                        }

                        , keyFor:function(g) {
                            if( !oi(g))throw TypeError(g+" is not a symbol"); if(Ci(Hi, g))return Hi[g]
                        }

                        , useSetter:function() {
                            Ji= !0
                        }

                        , useSimple:function() {
                            Ji= !1
                        }
                    }

                ), qI( {
                        target:"Object", stat: !0, forced: !ti, sham: !Ai
                    }

                    , {
                        create:function(g, A) {
                            return void 0===A?li(g):Ao(li(g), A)
                        }

                        , defineProperty:go, defineProperties:Ao, getOwnPropertyDescriptor:eo
                    }

                ), qI( {
                        target:"Object", stat: !0, forced: !ti
                    }

                    , {
                        getOwnPropertyNames:Co, getOwnPropertySymbols:Io
                    }

                ), qI( {
                        target:"Object", stat: !0, forced:ei((function() {
                                    fi.f(1)
                                }

                            ))
                    }

                    , {
                        getOwnPropertySymbols:function(g) {
                            return fi.f(ri(g))
                        }
                    }

                ), Li)&&qI( {
                    target:"JSON", stat: !0, forced: !ti||ei((function() {
                                var g=Gi(); return"[null]" !=Li([g])||"{}" !=Li( {
                                        a:g
                                    }

                                )||"{}" !=Li(Object(g))
                            }

                        ))
                }

                , {
                    stringify:function(g, A, t) {
                        for(var e, C=[g], I=1; arguments.length>I; )C.push(arguments[I++]); if(e=A, (ii(A)||void 0 !==g)&& !oi(g))return Ii(A)||(A=function(g, A) {
                                if("function"==typeof e&&(A=e.call(this, g, A)),  !oi(A))return A
                            }

                        ), C[1]=A, Li.apply(null, C)
                    }
                }

            ); Gi.prototype[zi]||bi(Gi.prototype, zi, Gi.prototype.valueOf), Ni(Gi, Bi), xi[Mi]= !0; var io=k.Object.getOwnPropertySymbols, oo= {
                exports: {}
            }

            , no=aA, ro=I, so=b, ao=C.f, ho=i, lo=ro((function() {
                        ao(1)
                    }

                )); no( {
                    target:"Object", stat: !0, forced: !ho||lo, sham: !ho
                }

                , {
                    getOwnPropertyDescriptor:function(g, A) {
                        return ao(so(g), A)
                    }
                }

            ); var co=k.Object, uo=oo.exports=function(g, A) {
                return co.getOwnPropertyDescriptor(g, A)
            }

            ; co.getOwnPropertyDescriptor.sham&&(uo.sham= !0); var po=oo.exports, fo=po, vo=kI, yo=SA, mo=Hg, bo=T("Reflect", "ownKeys")||function(g) {
                var A=vo.f(mo(g)), t=yo.f; return t?A.concat(t(g)):A
            }

            , wo=bo, ko=b, xo=C, Eo=GC; aA( {
                    target:"Object", stat: !0, sham: !i
                }

                , {
                    getOwnPropertyDescriptors:function(g) {
                        for(var A, t, e=ko(g), C=xo.f, I=wo(e), i= {}

                            , o=0; I.length>o; )void 0 !==(t=C(e, A=I[o++]))&&Eo(i, A, t); return i
                    }
                }

            ); var Oo=k.Object.getOwnPropertyDescriptors, To= {
                exports: {}
            }

            ; aA( {
                    target:"Object", stat: !0, forced: !i, sham: !i
                }

                , {
                    defineProperties:pe
                }

            ); var Do=k.Object, No=To.exports=function(g, A) {
                return Do.defineProperties(g, A)
            }

            ; Do.defineProperties.sham&&(No.sham= !0); var Ro=To.exports, Po= {
                exports: {}
            }

            ; aA( {
                    target:"Object", stat: !0, forced: !i, sham: !i
                }

                , {
                    defineProperty:Ug.f
                }

            ); var Mo=k.Object, Bo=Po.exports=function(g, A, t) {
                return Mo.defineProperty(g, A, t)
            }

            ; Mo.defineProperty.sham&&(Bo.sham= !0); var zo=Po.exports, Zo=zo; function So(g, A) {
                if( !(g instanceof A))throw new TypeError("Cannot call a class as a function")
            }

            var Fo=zo; function Go(g, A) {
                for(var t=0; t<A.length; t++) {
                    var e=A[t]; e.enumerable=e.enumerable|| !1, e.configurable= !0, "value"in e&&(e.writable= !0), Fo(g, e.key, e)
                }
            }

            function Lo(g, A, t) {
                return A&&Go(g.prototype, A), t&&Go(g, t), g
            }

            function jo(g, A, t) {
                return A in g?Fo(g, A, {
                        value:t, enumerable: !0, configurable: !0, writable: !0
                    }

                ):g[A]=t, g
            }

            aA( {
                    target:"Array", stat: !0
                }

                , {
                    isArray:wI
                }

            ); var Vo=k.Array.isArray, Yo=Vo; var Wo=I, Qo=Z, Uo=hg("species"), _o=function(g) {
                return Qo>=51|| !Wo((function() {
                            var A=[]; return(A.constructor= {}

                            )[Uo]=function() {
                                return {
                                    foo:1
                                }
                            }

                            , 1 !==A[g](Boolean).foo
                        }

                    ))
            }

            , Ho=aA, Ko=I, Xo=wI, Jo=w, qo=J, $o=pA, gn=GC, An=YI, tn=_o, en=Z, Cn=hg("isConcatSpreadable"), In=9007199254740991, on="Maximum allowed index exceeded", nn=en>=51|| !Ko((function() {
                        var g=[]; return g[Cn]= !1, g.concat()[0] !==g
                    }

                )), rn=tn("concat"), sn=function(g) {
                if( !Jo(g))return !1; var A=g[Cn]; return void 0 !==A? ! !A:Xo(g)
            }

            ; Ho( {
                    target:"Array", proto: !0, forced: !nn|| !rn
                }

                , {
                    concat:function(g) {
                        var A, t, e, C, I, i=qo(this), o=An(i, 0), n=0; for(A=-1, e=arguments.length; A<e; A++)if(sn(I=-1===A?i:arguments[A])) {
                            if(n+(C=$o(I.length))>In)throw TypeError(on); for(t=0; t<C; t++, n++)t in I&&gn(o, n, I[t])
                        }

                        else {
                            if(n>=In)throw TypeError(on); gn(o, n++, I)
                        }

                        return o.length=n, o
                    }
                }

            ), FI("asyncIterator"), FI("hasInstance"), FI("isConcatSpreadable"), FI("iterator"), FI("match"), FI("matchAll"), FI("replace"), FI("search"), FI("species"), FI("split"), FI("toPrimitive"), FI("toStringTag"), FI("unscopables"), Ue(e.JSON, "JSON",  !0); var an=k.Symbol; FI("asyncDispose"), FI("dispose"), FI("matcher"), FI("metadata"), FI("observable"), FI("patternMatch"), FI("replaceAll"); var dn=an; var hn=aA, ln=w, cn=wI, un=mA, pn=pA, fn=b, vn=GC, yn=hg, mn=_o("slice"), bn=yn("species"), wn=[].slice, kn=Math.max; hn( {
                    target:"Array", proto: !0, forced: !mn
                }

                , {
                    slice:function(g, A) {
                        var t, e, C, I=fn(this), i=pn(I.length), o=un(g, i), n=un(void 0===A?i:A, i); if(cn(I)&&("function" !=typeof(t=I.constructor)||t !==Array&& !cn(t.prototype)?ln(t)&&null===(t=t[bn])&&(t=void 0):t=void 0, t===Array||void 0===t))return wn.call(I, o, n); for(e=new(void 0===t?Array:t)(kn(n-o, 0)), C=0; o<n; o++, C++)o in I&&vn(e, C, I[o]); return e.length=C, e
                    }
                }

            ); var xn=tt("Array").slice, En=Array.prototype, On=function(g) {
                var A=g.slice; return g===En||g instanceof Array&&A===En.slice?xn:A
            }

            , Tn=On, Dn=tI; function Nn(g, A) {
                (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
            }

            function Rn(g, A) {
                var t; if(g) {
                    if("string"==typeof g)return Nn(g, A); var e=Tn(t=Object.prototype.toString.call(g)).call(t, 8, -1); return"Object"===e&&g.constructor&&(e=g.constructor.name), "Map"===e||"Set"===e?Dn(g):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Nn(g, A):void 0
                }
            }

            function Pn(g, A) {
                return function(g) {
                    if(Yo(g))return g
                }

                (g)||function(g, A) {
                    var t=null==g?null:void 0 !==dn&&mI(g)||g["@@iterator"]; if(null !=t) {
                        var e, C, I=[], i= !0, o= !1; try {
                            for(t=t.call(g);  !(i=(e=t.next()).done)&&(I.push(e.value),  !A||I.length !==A); i= !0);
                        }

                        catch(g) {
                            o= !0, C=g
                        }

                        finally {
                            try {
                                i||null==t.return||t.return()
                            }

                            finally {
                                if(o)throw C
                            }
                        }

                        return I
                    }
                }

                (g, A)||Rn(g, A)||function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                ()
            }

            var Mn=PI.f("iterator"), Bn=Mn; function zn(g) {
                return(zn="function"==typeof dn&&"symbol"==typeof Bn?function(g) {
                        return typeof g
                    }

                    :function(g) {
                        return g&&"function"==typeof dn&&g.constructor===dn&&g !==dn.prototype?"symbol":typeof g
                    }

                )(g)
            }

            function Zn(g) {
                return function(g) {
                    if(Yo(g))return Nn(g)
                }

                (g)||function(g) {
                    if(void 0 !==dn&&null !=mI(g)||null !=g["@@iterator"])return Dn(g)
                }

                (g)||Rn(g)||function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                ()
            }

            var Sn=an, Fn=tt("Array").concat, Gn=Array.prototype, Ln=function(g) {
                var A=g.concat; return g===Gn||g instanceof Array&&A===Gn.concat?Fn:A
            }

            , jn=On; aA( {
                    target:"Reflect", stat: !0
                }

                , {
                    ownKeys:bo
                }

            ); var Vn=k.Reflect.ownKeys, Yn=Vo, Wn=JI.map; aA( {
                    target:"Array", proto: !0, forced: !_o("map")
                }

                , {
                    map:function(g) {
                        return Wn(this, g, arguments.length>1?arguments[1]:void 0)
                    }
                }

            ); var Qn=tt("Array").map, Un=Array.prototype, _n=function(g) {
                var A=g.map; return g===Un||g instanceof Array&&A===Un.map?Qn:A
            }

            , Hn=J, Kn=ZA; aA( {
                    target:"Object", stat: !0, forced:I((function() {
                                Kn(1)
                            }

                        ))
                }

                , {
                    keys:function(g) {
                        return Kn(Hn(g))
                    }
                }

            ); var Xn=k.Object.keys; aA( {
                    target:"Date", stat: !0
                }

                , {
                    now:function() {
                        return(new Date).getTime()
                    }
                }

            ); var Jn=k.Date.now, qn=I, $n=function(g, A) {
                var t=[][g]; return ! !t&&qn((function() {
                            t.call(null, A||function() {
                                    throw 1
                                }

                                , 1)
                        }

                    ))
            }

            , gr=JI.forEach, Ar=$n("forEach")?[].forEach:function(g) {
                return gr(this, g, arguments.length>1?arguments[1]:void 0)
            }

            ; aA( {
                    target:"Array", proto: !0, forced:[].forEach !=Ar
                }

                , {
                    forEach:Ar
                }

            ); var tr=tt("Array").forEach, er=Se, Cr=Array.prototype, Ir= {
                DOMTokenList: !0, NodeList: !0
            }

            , ir=function(g) {
                var A=g.forEach; return g===Cr||g instanceof Array&&A===Cr.forEach||Ir.hasOwnProperty(er(g))?tr:A
            }

            , or=wI, nr=[].reverse, rr=[1, 2]; aA( {
                    target:"Array", proto: !0, forced:String(rr)===String(rr.reverse())
                }

                , {
                    reverse:function() {
                        return or(this)&&(this.length=this.length), nr.call(this)
                    }
                }

            ); var sr=tt("Array").reverse, ar=Array.prototype, dr=function(g) {
                var A=g.reverse; return g===ar||g instanceof Array&&A===ar.reverse?sr:A
            }

            , hr=aA, lr=mA, cr=lA, ur=pA, pr=J, fr=YI, vr=GC, yr=_o("splice"), mr=Math.max, br=Math.min, wr=9007199254740991, kr="Maximum allowed length exceeded"; hr( {
                    target:"Array", proto: !0, forced: !yr
                }

                , {
                    splice:function(g, A) {
                        var t, e, C, I, i, o, n=pr(this), r=ur(n.length), s=lr(g, r), a=arguments.length; if(0===a?t=e=0:1===a?(t=0, e=r-s):(t=a-2, e=br(mr(cr(A), 0), r-s)), r+t-e>wr)throw TypeError(kr); for(C=fr(n, e), I=0; I<e; I++)(i=s+I)in n&&vr(C, I, n[i]); if(C.length=e, t<e) {
                            for(I=s; I<r-e; I++)o=I+t, (i=I+e)in n?n[o]=n[i]:delete n[o]; for(I=r; I>r-e+t; I--)delete n[I-1]
                        }

                        else if(t>e)for(I=r-e; I>s; I--)o=I+t-1, (i=I+e-1)in n?n[o]=n[i]:delete n[o]; for(I=0; I<t; I++)n[I+s]=arguments[I+2]; return n.length=r-e+t, C
                    }
                }

            ); var xr=tt("Array").splice, Er=Array.prototype, Or=function(g) {
                var A=g.splice; return g===Er||g instanceof Array&&A===Er.splice?xr:A
            }

            , Tr=EA.includes; aA( {
                    target:"Array", proto: !0
                }

                , {
                    includes:function(g) {
                        return Tr(this, g, arguments.length>1?arguments[1]:void 0)
                    }
                }

            ); var Dr=tt("Array").includes, Nr=w, Rr=c, Pr=hg("match"), Mr=function(g) {
                var A; return Nr(g)&&(void 0 !==(A=g[Pr])? ! !A:"RegExp"==Rr(g))
            }

            , Br=hg("match"), zr=function(g) {
                if(Mr(g))throw TypeError("The method doesn't accept regular expressions"); return g
            }

            , Zr=v, Sr=ut; aA( {
                    target:"String", proto: !0, forced: !function(g) {
                        var A=/./; try {
                            "/./"[g](A)
                        }

                        catch(t) {
                            try {
                                return A[Br]= !1, "/./"[g](A)
                            }

                            catch(g) {}
                        }

                        return !1
                    }

                    ("includes")
                }

                , {
                    includes:function(g) {
                        return ! !~Sr(Zr(this)).indexOf(Sr(zr(g)), arguments.length>1?arguments[1]:void 0)
                    }
                }

            ); var Fr=tt("String").includes, Gr=Dr, Lr=Fr, jr=Array.prototype, Vr=String.prototype, Yr=function(g) {
                var A=g.includes; return g===jr||g instanceof Array&&A===jr.includes?Gr:"string"==typeof g||g===Vr||g instanceof String&&A===Vr.includes?Lr:A
            }

            , Wr=J, Qr=Ce, Ur=qt; aA( {
                    target:"Object", stat: !0, forced:I((function() {
                                Qr(1)
                            }

                        )), sham: !Ur
                }

                , {
                    getPrototypeOf:function(g) {
                        return Qr(Wr(g))
                    }
                }

            ); var _r=k.Object.getPrototypeOf, Hr=_r, Kr=JI.filter; aA( {
                    target:"Array", proto: !0, forced: !_o("filter")
                }

                , {
                    filter:function(g) {
                        return Kr(this, g, arguments.length>1?arguments[1]:void 0)
                    }
                }

            ); var Xr=tt("Array").filter, Jr=Array.prototype, qr=function(g) {
                var A=g.filter; return g===Jr||g instanceof Array&&A===Jr.filter?Xr:A
            }

            , $r=i, gs=ZA, As=b, ts=o.f, es=function(g) {
                return function(A) {
                    for(var t, e=As(A), C=gs(e), I=C.length, i=0, o=[]; I>i; )t=C[i++], $r&& !ts.call(e, t)||o.push(g?[t, e[t]]:e[t]); return o
                }
            }

            , Cs= {
                entries:es( !0), values:es( !1)
            }

            .values; aA( {
                    target:"Object", stat: !0
                }

                , {
                    values:function(g) {
                        return Cs(g)
                    }
                }

            ), k.Object.values; var Is="\t\n\v\f\r                　\u2028\u2029\ufeff", is=v, os=ut, ns="[\t\n\v\f\r                　\u2028\u2029\ufeff]", rs=RegExp("^"+ns+ns+"*"), ss=RegExp(ns+ns+"*$"), as=function(g) {
                return function(A) {
                    var t=os(is(A)); return 1&g&&(t=t.replace(rs, "")), 2&g&&(t=t.replace(ss, "")), t
                }
            }

            , ds= {
                start:as(1), end:as(2), trim:as(3)
            }

            , hs=ut, ls=ds.trim, cs=Is, us=e.parseInt, ps=/^[+-]?0[Xx]/, fs=8 !==us(cs+"08")||22 !==us(cs+"0x16")?function(g, A) {
                var t=ls(hs(g)); return us(t, A>>>0||(ps.test(t)?16:10))
            }

            :us; aA( {
                    global: !0, forced:parseInt !=fs
                }

                , {
                    parseInt:fs
                }

            ); var vs=k.parseInt, ys=aA, ms=EA.indexOf, bs=$n, ws=[].indexOf, ks= ! !ws&&1/[1].indexOf(1, -0)<0, xs=bs("indexOf"); ys( {
                    target:"Array", proto: !0, forced:ks|| !xs
                }

                , {
                    indexOf:function(g) {
                        return ks?ws.apply(this, arguments)||0:ms(this, g, arguments.length>1?arguments[1]:void 0)
                    }
                }

            ); var Es=tt("Array").indexOf, Os=Array.prototype, Ts=function(g) {
                var A=g.indexOf; return g===Os||g instanceof Array&&A===Os.indexOf?Es:A
            }

            , Ds=I, Ns=Is, Rs=ds.trim; aA( {
                    target:"String", proto: !0, forced:function(g) {
                        return Ds((function() {
                                    return ! !Ns[g]()||"​᠎" !="​᠎"[g]()||Ns[g].name !==g
                                }

                            ))
                    }

                    ("trim")
                }

                , {
                    trim:function() {
                        return Rs(this)
                    }
                }

            ), tt("String").trim, aA( {
                    target:"Object", stat: !0, sham: !i
                }

                , {
                    create:Ne
                }

            ); var Ps=k.Object, Ms=function(g, A) {
                return Ps.create(g, A)
            }

            , Bs=Ms, zs=aA, Zs=I, Ss=T("JSON", "stringify"), Fs=/[\uD800-\uDFFF]/g, Gs=/^[\uD800-\uDBFF]$/, Ls=/^[\uDC00-\uDFFF]$/, js=function(g, A, t) {
                var e=t.charAt(A-1), C=t.charAt(A+1); return Gs.test(g)&& !Ls.test(C)||Ls.test(g)&& !Gs.test(e)?"\\u"+g.charCodeAt(0).toString(16):g
            }

            , Vs=Zs((function() {
                        return'"\\udf06\\ud834"' !==Ss("\udf06\ud834")||'"\\udead"' !==Ss("\udead")
                    }

                )); Ss&&zs( {
                    target:"JSON", stat: !0, forced:Vs
                }

                , {
                    stringify:function(g, A, t) {
                        var e=Ss.apply(null, arguments); return"string"==typeof e?e.replace(Fs, js):e
                    }
                }

            ); var Ys=k; Ys.JSON||(Ys.JSON= {
                    stringify:JSON.stringify
                }

            ); var Ws=function(g, A, t) {
                return Ys.JSON.stringify.apply(null, arguments)
            }

            , Qs=e, Us=[].slice, _s=function(g) {
                return function(A, t) {
                    var e=arguments.length>2, C=e?Us.call(arguments, 2):void 0; return g(e?function() {
                            ("function"==typeof A?A:Function(A)).apply(this, C)
                        }

                        :A, t)
                }
            }

            ; aA( {
                    global: !0, bind: !0, forced:/MSIE .\./.test(D)
                }

                , {
                    setTimeout:_s(Qs.setTimeout), setInterval:_s(Qs.setInterval)
                }

            ); var Hs=k.setTimeout, Ks=J, Xs=mA, Js=pA; aA( {
                    target:"Array", proto: !0
                }

                , {
                    fill:function(g) {
                        for(var A=Ks(this), t=Js(A.length), e=arguments.length, C=Xs(e>1?arguments[1]:void 0, t), I=e>2?arguments[2]:void 0, i=void 0===I?t:Xs(I, t); i>C; )A[C++]=g; return A
                    }
                }

            ); var qs=tt("Array").fill, $s=Array.prototype, ga=function(g) {
                var A=g.fill; return g===$s||g instanceof Array&&A===$s.fill?qs:A
            }

            ;

            /*! Hammer.JS - v2.0.17-rc - 2019-12-16
	 * http://naver.github.io/egjs
	 *
	 * Forked By Naver egjs
	 * Copyright (c) hammerjs
	 * Licensed under the MIT license */
            function Aa() {
                return(Aa=Object.assign||function(g) {
                        for(var A=1; A<arguments.length; A++) {
                            var t=arguments[A]; for(var e in t)Object.prototype.hasOwnProperty.call(t, e)&&(g[e]=t[e])
                        }

                        return g
                    }

                ).apply(this, arguments)
            }

            function ta(g, A) {
                g.prototype=Object.create(A.prototype), g.prototype.constructor=g, g.__proto__=A
            }

            function ea(g) {
                if(void 0===g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return g
            }

            var Ca, Ia="function" !=typeof Object.assign?function(g) {
                if(null==g)throw new TypeError("Cannot convert undefined or null to object"); for(var A=Object(g), t=1; t<arguments.length; t++) {
                    var e=arguments[t]; if(null !=e)for(var C in e)e.hasOwnProperty(C)&&(A[C]=e[C])
                }

                return A
            }

            :Object.assign, ia=["", "webkit", "Moz", "MS", "ms", "o"], oa="undefined"==typeof document? {
                style: {}
            }

            :document.createElement("div"), na=Math.round, ra=Math.abs, sa=Date.now; function aa(g, A) {
                for(var t, e, C=A[0].toUpperCase()+A.slice(1), I=0; I<ia.length; ) {
                    if((e=(t=ia[I])?t+C:A)in g)return e; I++
                }
            }

            Ca="undefined"==typeof window? {}

            :window; var da=aa(oa.style, "touchAction"), ha=void 0 !==da; var la="compute", ca="auto", ua="manipulation", pa="none", fa="pan-x", va="pan-y", ya=function() {
                if( !ha)return !1; var g= {}

                , A=Ca.CSS&&Ca.CSS.supports; return["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(t) {
                            return g[t]= !A||Ca.CSS.supports("touch-action", t)
                        }

                    )), g
            }

            (), ma="ontouchstart"in Ca, ba=void 0 !==aa(Ca, "PointerEvent"), wa=ma&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), ka="touch", xa="mouse", Ea=16, Oa=24, Ta=["x", "y"], Da=["clientX", "clientY"]; function Na(g, A, t) {
                var e; if(g)if(g.forEach)g.forEach(A, t); else if(void 0 !==g.length)for(e=0; e<g.length; )A.call(t, g[e], e, g), e++; else for(e in g)g.hasOwnProperty(e)&&A.call(t, g[e], e, g)
            }

            function Ra(g, A) {
                return"function"==typeof g?g.apply(A&&A[0]||void 0, A):g
            }

            function Pa(g, A) {
                return g.indexOf(A)>-1
            }

            var Ma=function() {
                function g(g, A) {
                    this.manager=g, this.set(A)
                }

                var A=g.prototype; return A.set=function(g) {
                    g===la&&(g=this.compute()), ha&&this.manager.element.style&&ya[g]&&(this.manager.element.style[da]=g), this.actions=g.toLowerCase().trim()
                }

                , A.update=function() {
                    this.set(this.manager.options.touchAction)
                }

                , A.compute=function() {
                    var g=[]; return Na(this.manager.recognizers, (function(A) {
                                Ra(A.options.enable, [A])&&(g=g.concat(A.getTouchAction()))
                            }

                        )), function(g) {
                        if(Pa(g, pa))return pa; var A=Pa(g, fa), t=Pa(g, va); return A&&t?pa:A||t?A?fa:va:Pa(g, ua)?ua:ca
                    }

                    (g.join(" "))
                }

                , A.preventDefaults=function(g) {
                    var A=g.srcEvent, t=g.offsetDirection; if(this.manager.session.prevented)A.preventDefault(); else {
                        var e=this.actions, C=Pa(e, pa)&& !ya.none, I=Pa(e, va)&& !ya["pan-y"], i=Pa(e, fa)&& !ya["pan-x"]; if(C) {
                            var o=1===g.pointers.length, n=g.distance<2, r=g.deltaTime<250; if(o&&n&&r)return
                        }

                        if( !i|| !I)return C||I&&6&t||i&&t&Oa?this.preventSrc(A):void 0
                    }
                }

                , A.preventSrc=function(g) {
                    this.manager.session.prevented= !0, g.preventDefault()
                }

                , g
            }

            (); function Ba(g, A) {
                for(; g; ) {
                    if(g===A)return !0; g=g.parentNode
                }

                return !1
            }

            function za(g) {
                var A=g.length; if(1===A)return {
                    x:na(g[0].clientX), y:na(g[0].clientY)
                }

                ; for(var t=0, e=0, C=0; C<A; )t+=g[C].clientX, e+=g[C].clientY, C++; return {
                    x:na(t/A), y:na(e/A)
                }
            }

            function Za(g) {
                for(var A=[], t=0; t<g.pointers.length; )A[t]= {
                    clientX:na(g.pointers[t].clientX), clientY:na(g.pointers[t].clientY)
                }

                , t++; return {
                    timeStamp:sa(), pointers:A, center:za(A), deltaX:g.deltaX, deltaY:g.deltaY
                }
            }

            function Sa(g, A, t) {
                t||(t=Ta); var e=A[t[0]]-g[t[0]], C=A[t[1]]-g[t[1]]; return Math.sqrt(e*e+C*C)
            }

            function Fa(g, A, t) {
                t||(t=Ta); var e=A[t[0]]-g[t[0]], C=A[t[1]]-g[t[1]]; return 180*Math.atan2(C, e)/Math.PI
            }

            function Ga(g, A) {
                return g===A?1:ra(g)>=ra(A)?g<0?2:4:A<0?8:Ea
            }

            function La(g, A, t) {
                return {
                    x:A/g||0, y:t/g||0
                }
            }

            function ja(g, A) {
                var t=g.session, e=A.pointers, C=e.length; t.firstInput||(t.firstInput=Za(A)), C>1&& !t.firstMultiple?t.firstMultiple=Za(A):1===C&&(t.firstMultiple= !1); var I=t.firstInput, i=t.firstMultiple, o=i?i.center:I.center, n=A.center=za(e); A.timeStamp=sa(), A.deltaTime=A.timeStamp-I.timeStamp, A.angle=Fa(o, n), A.distance=Sa(o, n), function(g, A) {
                    var t=A.center, e=g.offsetDelta|| {}

                    , C=g.prevDelta|| {}

                    , I=g.prevInput|| {}

                    ; 1 !==A.eventType&&4 !==I.eventType||(C=g.prevDelta= {
                            x:I.deltaX||0, y:I.deltaY||0
                        }

                        , e=g.offsetDelta= {
                            x:t.x, y:t.y
                        }

                    ), A.deltaX=C.x+(t.x-e.x), A.deltaY=C.y+(t.y-e.y)
                }

                (t, A), A.offsetDirection=Ga(A.deltaX, A.deltaY); var r, s, a=La(A.deltaTime, A.deltaX, A.deltaY); A.overallVelocityX=a.x, A.overallVelocityY=a.y, A.overallVelocity=ra(a.x)>ra(a.y)?a.x:a.y, A.scale=i?(r=i.pointers, Sa((s=e)[0], s[1], Da)/Sa(r[0], r[1], Da)):1, A.rotation=i?function(g, A) {
                    return Fa(A[1], A[0], Da)+Fa(g[1], g[0], Da)
                }

                (i.pointers, e):0, A.maxPointers=t.prevInput?A.pointers.length>t.prevInput.maxPointers?A.pointers.length:t.prevInput.maxPointers:A.pointers.length, function(g, A) {
                    var t, e, C, I, i=g.lastInterval||A, o=A.timeStamp-i.timeStamp; if(8 !==A.eventType&&(o>25||void 0===i.velocity)) {
                        var n=A.deltaX-i.deltaX, r=A.deltaY-i.deltaY, s=La(o, n, r); e=s.x, C=s.y, t=ra(s.x)>ra(s.y)?s.x:s.y, I=Ga(n, r), g.lastInterval=A
                    }

                    else t=i.velocity, e=i.velocityX, C=i.velocityY, I=i.direction; A.velocity=t, A.velocityX=e, A.velocityY=C, A.direction=I
                }

                (t, A); var d, h=g.element, l=A.srcEvent; Ba(d=l.composedPath?l.composedPath()[0]:l.path?l.path[0]:l.target, h)&&(h=d), A.target=h
            }

            function Va(g, A, t) {
                var e=t.pointers.length, C=t.changedPointers.length, I=1&A&&e-C==0, i=12&A&&e-C==0; t.isFirst= ! !I, t.isFinal= ! !i, I&&(g.session= {}

                ), t.eventType=A, ja(g, t), g.emit("hammer.input", t), g.recognize(t), g.session.prevInput=t
            }

            function Ya(g) {
                return g.trim().split(/\s+/g)
            }

            function Wa(g, A, t) {
                Na(Ya(A), (function(A) {
                            g.addEventListener(A, t,  !1)
                        }

                    ))
            }

            function Qa(g, A, t) {
                Na(Ya(A), (function(A) {
                            g.removeEventListener(A, t,  !1)
                        }

                    ))
            }

            function Ua(g) {
                var A=g.ownerDocument||g; return A.defaultView||A.parentWindow||window
            }

            var _a=function() {
                function g(g, A) {
                    var t=this; this.manager=g, this.callback=A, this.element=g.element, this.target=g.options.inputTarget, this.domHandler=function(A) {
                        Ra(g.options.enable, [g])&&t.handler(A)
                    }

                    , this.init()
                }

                var A=g.prototype; return A.handler=function() {}

                , A.init=function() {
                    this.evEl&&Wa(this.element, this.evEl, this.domHandler), this.evTarget&&Wa(this.target, this.evTarget, this.domHandler), this.evWin&&Wa(Ua(this.element), this.evWin, this.domHandler)
                }

                , A.destroy=function() {
                    this.evEl&&Qa(this.element, this.evEl, this.domHandler), this.evTarget&&Qa(this.target, this.evTarget, this.domHandler), this.evWin&&Qa(Ua(this.element), this.evWin, this.domHandler)
                }

                , g
            }

            (); function Ha(g, A, t) {
                if(g.indexOf&& !t)return g.indexOf(A); for(var e=0; e<g.length; ) {
                    if(t&&g[e][t]==A|| !t&&g[e]===A)return e; e++
                }

                return-1
            }

            var Ka= {
                pointerdown:1, pointermove:2, pointerup:4, pointercancel:8, pointerout:8
            }

            , Xa= {
                2:ka, 3:"pen", 4:xa, 5:"kinect"
            }

            , Ja="pointerdown", qa="pointermove pointerup pointercancel"; Ca.MSPointerEvent&& !Ca.PointerEvent&&(Ja="MSPointerDown", qa="MSPointerMove MSPointerUp MSPointerCancel"); var $a=function(g) {
                function A() {
                    var t, e=A.prototype; return e.evEl=Ja, e.evWin=qa, (t=g.apply(this, arguments)||this).store=t.manager.session.pointerEvents=[], t
                }

                return ta(A, g), A.prototype.handler=function(g) {
                    var A=this.store, t= !1, e=g.type.toLowerCase().replace("ms", ""), C=Ka[e], I=Xa[g.pointerType]||g.pointerType, i=I===ka, o=Ha(A, g.pointerId, "pointerId"); 1&C&&(0===g.button||i)?o<0&&(A.push(g), o=A.length-1):12&C&&(t= !0), o<0||(A[o]=g, this.callback(this.manager, C, {
                                pointers:A, changedPointers:[g], pointerType:I, srcEvent:g
                            }

                        ), t&&A.splice(o, 1))
                }

                , A
            }

            (_a); function gd(g) {
                return Array.prototype.slice.call(g, 0)
            }

            function Ad(g, A, t) {
                for(var e=[], C=[], I=0; I<g.length; ) {
                    var i=A?g[I][A]:g[I]; Ha(C, i)<0&&e.push(g[I]), C[I]=i, I++
                }

                return t&&(e=A?e.sort((function(g, t) {
                                return g[A]>t[A]
                            }

                        )):e.sort()), e
            }

            var td= {
                touchstart:1, touchmove:2, touchend:4, touchcancel:8
            }

            , ed="touchstart touchmove touchend touchcancel", Cd=function(g) {
                function A() {
                    var t; return A.prototype.evTarget=ed, (t=g.apply(this, arguments)||this).targetIds= {}

                    , t
                }

                return ta(A, g), A.prototype.handler=function(g) {
                    var A=td[g.type], t=Id.call(this, g, A); t&&this.callback(this.manager, A, {
                            pointers:t[0], changedPointers:t[1], pointerType:ka, srcEvent:g
                        }

                    )
                }

                , A
            }

            (_a); function Id(g, A) {
                var t, e, C=gd(g.touches), I=this.targetIds; if(3&A&&1===C.length)return I[C[0].identifier]= !0, [C, C]; var i=gd(g.changedTouches), o=[], n=this.target; if(e=C.filter((function(g) {
                                return Ba(g.target, n)
                            }

                        )), 1===A)for(t=0; t<e.length; )I[e[t].identifier]= !0, t++; for(t=0; t<i.length; )I[i[t].identifier]&&o.push(i[t]), 12&A&&delete I[i[t].identifier], t++; return o.length?[Ad(e.concat(o), "identifier",  !0), o]:void 0
            }

            var id= {
                mousedown:1, mousemove:2, mouseup:4
            }

            , od="mousedown", nd="mousemove mouseup", rd=function(g) {
                function A() {
                    var t, e=A.prototype; return e.evEl=od, e.evWin=nd, (t=g.apply(this, arguments)||this).pressed= !1, t
                }

                return ta(A, g), A.prototype.handler=function(g) {
                    var A=id[g.type]; 1&A&&0===g.button&&(this.pressed= !0), 2&A&&1 !==g.which&&(A=4), this.pressed&&(4&A&&(this.pressed= !1), this.callback(this.manager, A, {
                                pointers:[g], changedPointers:[g], pointerType:xa, srcEvent:g
                            }

                        ))
                }

                , A
            }

            (_a); function sd(g) {
                var A=g.changedPointers[0]; if(A.identifier===this.primaryTouch) {
                    var t= {
                        x:A.clientX, y:A.clientY
                    }

                    , e=this.lastTouches; this.lastTouches.push(t); setTimeout((function() {
                                var g=e.indexOf(t); g>-1&&e.splice(g, 1)
                            }

                        ), 2500)
                }
            }

            function ad(g, A) {
                1&g?(this.primaryTouch=A.changedPointers[0].identifier, sd.call(this, A)):12&g&&sd.call(this, A)
            }

            function dd(g) {
                for(var A=g.srcEvent.clientX, t=g.srcEvent.clientY, e=0; e<this.lastTouches.length; e++) {
                    var C=this.lastTouches[e], I=Math.abs(A-C.x), i=Math.abs(t-C.y); if(I<=25&&i<=25)return !0
                }

                return !1
            }

            var hd=function() {
                return function(g) {
                    function A(A, t) {
                        var e; return(e=g.call(this, A, t)||this).handler=function(g, A, t) {
                            var C=t.pointerType===ka, I=t.pointerType===xa; if( !(I&&t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents)) {
                                if(C)ad.call(ea(ea(e)), A, t); else if(I&&dd.call(ea(ea(e)), t))return; e.callback(g, A, t)
                            }
                        }

                        , e.touch=new Cd(e.manager, e.handler), e.mouse=new rd(e.manager, e.handler), e.primaryTouch=null, e.lastTouches=[], e
                    }

                    return ta(A, g), A.prototype.destroy=function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }

                    , A
                }

                (_a)
            }

            (); function ld(g, A, t) {
                return ! !Array.isArray(g)&&(Na(g, t[A], t),  !0)
            }

            var cd=32, ud=1; function pd(g, A) {
                var t=A.manager; return t?t.get(g):g
            }

            function fd(g) {
                return 16&g?"cancel":8&g?"end":4&g?"move":2&g?"start":""
            }

            var vd=function() {
                function g(g) {
                    void 0===g&&(g= {}

                    ), this.options=Aa( {
                            enable: !0
                        }

                        , g), this.id=ud++, this.manager=null, this.state=1, this.simultaneous= {}

                    , this.requireFail=[]
                }

                var A=g.prototype; return A.set=function(g) {
                    return Ia(this.options, g), this.manager&&this.manager.touchAction.update(), this
                }

                , A.recognizeWith=function(g) {
                    if(ld(g, "recognizeWith", this))return this; var A=this.simultaneous; return A[(g=pd(g, this)).id]||(A[g.id]=g, g.recognizeWith(this)), this
                }

                , A.dropRecognizeWith=function(g) {
                    return ld(g, "dropRecognizeWith", this)||(g=pd(g, this), delete this.simultaneous[g.id]), this
                }

                , A.requireFailure=function(g) {
                    if(ld(g, "requireFailure", this))return this; var A=this.requireFail; return-1===Ha(A, g=pd(g, this))&&(A.push(g), g.requireFailure(this)), this
                }

                , A.dropRequireFailure=function(g) {
                    if(ld(g, "dropRequireFailure", this))return this; g=pd(g, this); var A=Ha(this.requireFail, g); return A>-1&&this.requireFail.splice(A, 1), this
                }

                , A.hasRequireFailures=function() {
                    return this.requireFail.length>0
                }

                , A.canRecognizeWith=function(g) {
                    return ! !this.simultaneous[g.id]
                }

                , A.emit=function(g) {
                    var A=this, t=this.state; function e(t) {
                        A.manager.emit(t, g)
                    }

                    t<8&&e(A.options.event+fd(t)), e(A.options.event), g.additionalEvent&&e(g.additionalEvent), t>=8&&e(A.options.event+fd(t))
                }

                , A.tryEmit=function(g) {
                    if(this.canEmit())return this.emit(g); this.state=cd
                }

                , A.canEmit=function() {
                    for(var g=0; g<this.requireFail.length; ) {
                        if( !(33&this.requireFail[g].state))return !1; g++
                    }

                    return !0
                }

                , A.recognize=function(g) {
                    var A=Ia( {}

                        , g); if( !Ra(this.options.enable, [this, A]))return this.reset(), void(this.state=cd); 56&this.state&&(this.state=1), this.state=this.process(A), 30&this.state&&this.tryEmit(A)
                }

                , A.process=function(g) {}

                , A.getTouchAction=function() {}

                , A.reset=function() {}

                , g
            }

            (), yd=function(g) {
                function A(A) {
                    var t; return void 0===A&&(A= {}

                    ), (t=g.call(this, Aa( {
                                    event:"tap", pointers:1, taps:1, interval:300, time:250, threshold:9, posThreshold:10
                                }

                                , A))||this).pTime= !1, t.pCenter= !1, t._timer=null, t._input=null, t.count=0, t
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    return[ua]
                }

                , t.process=function(g) {
                    var A=this, t=this.options, e=g.pointers.length===t.pointers, C=g.distance<t.threshold, I=g.deltaTime<t.time; if(this.reset(), 1&g.eventType&&0===this.count)return this.failTimeout(); if(C&&I&&e) {
                        if(4 !==g.eventType)return this.failTimeout(); var i= !this.pTime||g.timeStamp-this.pTime<t.interval, o= !this.pCenter||Sa(this.pCenter, g.center)<t.posThreshold; if(this.pTime=g.timeStamp, this.pCenter=g.center, o&&i?this.count+=1:this.count=1, this._input=g, 0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function() {
                                        A.state=8, A.tryEmit()
                                    }

                                ), t.interval), 2):8
                    }

                    return cd
                }

                , t.failTimeout=function() {
                    var g=this; return this._timer=setTimeout((function() {
                                g.state=cd
                            }

                        ), this.options.interval), cd
                }

                , t.reset=function() {
                    clearTimeout(this._timer)
                }

                , t.emit=function() {
                    8===this.state&&(this._input.tapCount=this.count, this.manager.emit(this.options.event, this._input))
                }

                , A
            }

            (vd), md=function(g) {
                function A(A) {
                    return void 0===A&&(A= {}

                    ), g.call(this, Aa( {
                                pointers:1
                            }

                            , A))||this
                }

                ta(A, g); var t=A.prototype; return t.attrTest=function(g) {
                    var A=this.options.pointers; return 0===A||g.pointers.length===A
                }

                , t.process=function(g) {
                    var A=this.state, t=g.eventType, e=6&A, C=this.attrTest(g); return e&&(8&t|| !C)?16|A:e||C?4&t?8|A:2&A?4|A:2:cd
                }

                , A
            }

            (vd); function bd(g) {
                return g===Ea?"down":8===g?"up":2===g?"left":4===g?"right":""
            }

            var wd=function(g) {
                function A(A) {
                    var t; return void 0===A&&(A= {}

                    ), (t=g.call(this, Aa( {
                                    event:"pan", threshold:10, pointers:1, direction:30
                                }

                                , A))||this).pX=null, t.pY=null, t
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    var g=this.options.direction, A=[]; return 6&g&&A.push(va), g&Oa&&A.push(fa), A
                }

                , t.directionTest=function(g) {
                    var A=this.options, t= !0, e=g.distance, C=g.direction, I=g.deltaX, i=g.deltaY; return C&A.direction||(6&A.direction?(C=0===I?1:I<0?2:4, t=I !==this.pX, e=Math.abs(g.deltaX)):(C=0===i?1:i<0?8:Ea, t=i !==this.pY, e=Math.abs(g.deltaY))), g.direction=C, t&&e>A.threshold&&C&A.direction
                }

                , t.attrTest=function(g) {
                    return md.prototype.attrTest.call(this, g)&&(2&this.state|| !(2&this.state)&&this.directionTest(g))
                }

                , t.emit=function(A) {
                    this.pX=A.deltaX, this.pY=A.deltaY; var t=bd(A.direction); t&&(A.additionalEvent=this.options.event+t), g.prototype.emit.call(this, A)
                }

                , A
            }

            (md), kd=function(g) {
                function A(A) {
                    return void 0===A&&(A= {}

                    ), g.call(this, Aa( {
                                event:"swipe", threshold:10, velocity:.3, direction:30, pointers:1
                            }

                            , A))||this
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    return wd.prototype.getTouchAction.call(this)
                }

                , t.attrTest=function(A) {
                    var t, e=this.options.direction; return 30&e?t=A.overallVelocity:6&e?t=A.overallVelocityX:e&Oa&&(t=A.overallVelocityY), g.prototype.attrTest.call(this, A)&&e&A.offsetDirection&&A.distance>this.options.threshold&&A.maxPointers===this.options.pointers&&ra(t)>this.options.velocity&&4&A.eventType
                }

                , t.emit=function(g) {
                    var A=bd(g.offsetDirection); A&&this.manager.emit(this.options.event+A, g), this.manager.emit(this.options.event, g)
                }

                , A
            }

            (md), xd=function(g) {
                function A(A) {
                    return void 0===A&&(A= {}

                    ), g.call(this, Aa( {
                                event:"pinch", threshold:0, pointers:2
                            }

                            , A))||this
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    return[pa]
                }

                , t.attrTest=function(A) {
                    return g.prototype.attrTest.call(this, A)&&(Math.abs(A.scale-1)>this.options.threshold||2&this.state)
                }

                , t.emit=function(A) {
                    if(1 !==A.scale) {
                        var t=A.scale<1?"in":"out"; A.additionalEvent=this.options.event+t
                    }

                    g.prototype.emit.call(this, A)
                }

                , A
            }

            (md), Ed=function(g) {
                function A(A) {
                    return void 0===A&&(A= {}

                    ), g.call(this, Aa( {
                                event:"rotate", threshold:0, pointers:2
                            }

                            , A))||this
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    return[pa]
                }

                , t.attrTest=function(A) {
                    return g.prototype.attrTest.call(this, A)&&(Math.abs(A.rotation)>this.options.threshold||2&this.state)
                }

                , A
            }

            (md), Od=function(g) {
                function A(A) {
                    var t; return void 0===A&&(A= {}

                    ), (t=g.call(this, Aa( {
                                    event:"press", pointers:1, time:251, threshold:9
                                }

                                , A))||this)._timer=null, t._input=null, t
                }

                ta(A, g); var t=A.prototype; return t.getTouchAction=function() {
                    return[ca]
                }

                , t.process=function(g) {
                    var A=this, t=this.options, e=g.pointers.length===t.pointers, C=g.distance<t.threshold, I=g.deltaTime>t.time; if(this._input=g,  !C|| !e||12&g.eventType&& !I)this.reset(); else if(1&g.eventType)this.reset(), this._timer=setTimeout((function() {
                                A.state=8, A.tryEmit()
                            }

                        ), t.time); else if(4&g.eventType)return 8; return cd
                }

                , t.reset=function() {
                    clearTimeout(this._timer)
                }

                , t.emit=function(g) {
                    8===this.state&&(g&&4&g.eventType?this.manager.emit(this.options.event+"up", g):(this._input.timeStamp=sa(), this.manager.emit(this.options.event, this._input)))
                }

                , A
            }

            (vd), Td= {
                domEvents: !1, touchAction:la, enable: !0, inputTarget:null, inputClass:null, cssProps: {
                    userSelect:"none", touchSelect:"none", touchCallout:"none", contentZooming:"none", userDrag:"none", tapHighlightColor:"rgba(0,0,0,0)"
                }
            }

            , Dd=[[Ed, {
                enable: !1
            }

            ], [xd, {
                enable: !1
            }

            , ["rotate"]], [kd, {
                direction:6
            }

            ], [wd, {
                direction:6
            }

            , ["swipe"]], [yd], [yd, {
                event:"doubletap", taps:2
            }

            , ["tap"]], [Od]]; function Nd(g, A) {
                var t, e=g.element; e.style&&(Na(g.options.cssProps, (function(C, I) {
                                t=aa(e.style, I), A?(g.oldCssProps[t]=e.style[t], e.style[t]=C):e.style[t]=g.oldCssProps[t]||""
                            }

                        )), A||(g.oldCssProps= {}

                    ))
            }

            var Rd=function() {
                function g(g, A) {
                    var t, e=this; this.options=Ia( {}

                        , Td, A|| {}

                    ), this.options.inputTarget=this.options.inputTarget||g, this.handlers= {}

                    , this.session= {}

                    , this.recognizers=[], this.oldCssProps= {}

                    , this.element=g, this.input=new((t=this).options.inputClass||(ba?$a:wa?Cd:ma?hd:rd))(t, Va), this.touchAction=new Ma(this, this.options.touchAction), Nd(this,  !0), Na(this.options.recognizers, (function(g) {
                                var A=e.add(new g[0](g[1])); g[2]&&A.recognizeWith(g[2]), g[3]&&A.requireFailure(g[3])
                            }

                        ), this)
                }

                var A=g.prototype; return A.set=function(g) {
                    return Ia(this.options, g), g.touchAction&&this.touchAction.update(), g.inputTarget&&(this.input.destroy(), this.input.target=g.inputTarget, this.input.init()), this
                }

                , A.stop=function(g) {
                    this.session.stopped=g?2:1
                }

                , A.recognize=function(g) {
                    var A=this.session; if( !A.stopped) {
                        var t; this.touchAction.preventDefaults(g); var e=this.recognizers, C=A.curRecognizer; ( !C||C&&8&C.state)&&(A.curRecognizer=null, C=null); for(var I=0; I<e.length; )t=e[I], 2===A.stopped||C&&t !==C&& !t.canRecognizeWith(C)?t.reset():t.recognize(g),  !C&&14&t.state&&(A.curRecognizer=t, C=t), I++
                    }
                }

                , A.get=function(g) {
                    if(g instanceof vd)return g; for(var A=this.recognizers, t=0; t<A.length; t++)if(A[t].options.event===g)return A[t]; return null
                }

                , A.add=function(g) {
                    if(ld(g, "add", this))return this; var A=this.get(g.options.event); return A&&this.remove(A), this.recognizers.push(g), g.manager=this, this.touchAction.update(), g
                }

                , A.remove=function(g) {
                    if(ld(g, "remove", this))return this; var A=this.get(g); if(g) {
                        var t=this.recognizers, e=Ha(t, A); -1 !==e&&(t.splice(e, 1), this.touchAction.update())
                    }

                    return this
                }

                , A.on=function(g, A) {
                    if(void 0===g||void 0===A)return this; var t=this.handlers; return Na(Ya(g), (function(g) {
                                t[g]=t[g]||[], t[g].push(A)
                            }

                        )), this
                }

                , A.off=function(g, A) {
                    if(void 0===g)return this; var t=this.handlers; return Na(Ya(g), (function(g) {
                                A?t[g]&&t[g].splice(Ha(t[g], A), 1):delete t[g]
                            }

                        )), this
                }

                , A.emit=function(g, A) {
                    this.options.domEvents&&function(g, A) {
                        var t=document.createEvent("Event"); t.initEvent(g,  !0,  !0), t.gesture=A, A.target.dispatchEvent(t)
                    }

                    (g, A); var t=this.handlers[g]&&this.handlers[g].slice(); if(t&&t.length) {
                        A.type=g, A.preventDefault=function() {
                            A.srcEvent.preventDefault()
                        }

                        ; for(var e=0; e<t.length; )t[e](A), e++
                    }
                }

                , A.destroy=function() {
                    this.element&&Nd(this,  !1), this.handlers= {}

                    , this.session= {}

                    , this.input.destroy(), this.element=null
                }

                , g
            }

            (), Pd= {
                touchstart:1, touchmove:2, touchend:4, touchcancel:8
            }

            , Md="touchstart", Bd="touchstart touchmove touchend touchcancel", zd=function(g) {
                function A() {
                    var t, e=A.prototype; return e.evTarget=Md, e.evWin=Bd, (t=g.apply(this, arguments)||this).started= !1, t
                }

                return ta(A, g), A.prototype.handler=function(g) {
                    var A=Pd[g.type]; if(1===A&&(this.started= !0), this.started) {
                        var t=Zd.call(this, g, A); 12&A&&t[0].length-t[1].length==0&&(this.started= !1), this.callback(this.manager, A, {
                                pointers:t[0], changedPointers:t[1], pointerType:ka, srcEvent:g
                            }

                        )
                    }
                }

                , A
            }

            (_a); function Zd(g, A) {
                var t=gd(g.touches), e=gd(g.changedTouches); return 12&A&&(t=Ad(t.concat(e), "identifier",  !0)), [t, e]
            }

            function Sd(g, A, t) {
                var e="DEPRECATED METHOD: "+A+"\n"+t+" AT \n"; return function() {
                    var A=new Error("get-stack-trace"), t=A&&A.stack?A.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@"):"Unknown Stack Trace", C=window.console&&(window.console.warn||window.console.log); return C&&C.call(window.console, e, t), g.apply(this, arguments)
                }
            }

            var Fd=Sd((function(g, A, t) {
                        for(var e=Object.keys(A), C=0; C<e.length; )( !t||t&&void 0===g[e[C]])&&(g[e[C]]=A[e[C]]), C++; return g
                    }

                ), "extend", "Use `assign`."), Gd=Sd((function(g, A) {
                        return Fd(g, A,  !0)
                    }

                ), "merge", "Use `assign`."); function Ld(g, A, t) {
                var e, C=A.prototype; (e=g.prototype=Object.create(C)).constructor=g, e._super=C, t&&Ia(e, t)
            }

            function jd(g, A) {
                return function() {
                    return g.apply(A, arguments)
                }
            }

            var Vd=function() {
                var g=function(g, A) {
                    return void 0===A&&(A= {}

                    ), new Rd(g, Aa( {
                                recognizers:Dd.concat()
                            }

                            , A))
                }

                ; return g.VERSION="2.0.17-rc", g.DIRECTION_ALL=30, g.DIRECTION_DOWN=Ea, g.DIRECTION_LEFT=2, g.DIRECTION_RIGHT=4, g.DIRECTION_UP=8, g.DIRECTION_HORIZONTAL=6, g.DIRECTION_VERTICAL=Oa, g.DIRECTION_NONE=1, g.DIRECTION_DOWN=Ea, g.INPUT_START=1, g.INPUT_MOVE=2, g.INPUT_END=4, g.INPUT_CANCEL=8, g.STATE_POSSIBLE=1, g.STATE_BEGAN=2, g.STATE_CHANGED=4, g.STATE_ENDED=8, g.STATE_RECOGNIZED=8, g.STATE_CANCELLED=16, g.STATE_FAILED=cd, g.Manager=Rd, g.Input=_a, g.TouchAction=Ma, g.TouchInput=Cd, g.MouseInput=rd, g.PointerEventInput=$a, g.TouchMouseInput=hd, g.SingleTouchInput=zd, g.Recognizer=vd, g.AttrRecognizer=md, g.Tap=yd, g.Pan=wd, g.Swipe=kd, g.Pinch=xd, g.Rotate=Ed, g.Press=Od, g.on=Wa, g.off=Qa, g.each=Na, g.merge=Gd, g.extend=Fd, g.bindFn=jd, g.assign=Ia, g.inherit=Ld, g.bindFn=jd, g.prefixed=aa, g.toArray=gd, g.inArray=Ha, g.uniqueArray=Ad, g.splitStr=Ya, g.boolOrFn=Ra, g.hasParent=Ba, g.addEventListeners=Wa, g.removeEventListeners=Qa, g.defaults=Ia( {}

                    , Td, {
                        preset:Dd
                    }

                ), g
            }

            (); function Yd(g, A) {
                var t=void 0 !==Sn&&mI(g)||g["@@iterator"]; if( !t) {
                    if(Yn(g)||(t=function(g, A) {
                                var t; if( !g)return; if("string"==typeof g)return Wd(g, A); var e=jn(t=Object.prototype.toString.call(g)).call(t, 8, -1); "Object"===e&&g.constructor&&(e=g.constructor.name); if("Map"===e||"Set"===e)return eI(g); if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wd(g, A)
                            }

                            (g))||A&&g&&"number"==typeof g.length) {
                        t&&(g=t); var e=0, C=function() {}

                        ; return {
                            s:C, n:function() {
                                return e>=g.length? {
                                    done: !0
                                }

                                : {
                                    done: !1, value:g[e++]
                                }
                            }

                            , e:function(g) {
                                throw g
                            }

                            , f:C
                        }
                    }

                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                var I, i= !0, o= !1; return {
                    s:function() {
                        t=t.call(g)
                    }

                    , n:function() {
                        var g=t.next(); return i=g.done, g
                    }

                    , e:function(g) {
                        o= !0, I=g
                    }

                    , f:function() {
                        try {
                            i||null==t.return||t.return()
                        }

                        finally {
                            if(o)throw I
                        }
                    }
                }
            }

            function Wd(g, A) {
                (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
            }

            var Qd=Sn("DELETE"); function Ud() {
                var g=_d.apply(void 0, arguments); return Kd(g), g
            }

            function _d() {
                for(var g=arguments.length, A=new Array(g), t=0; t<g; t++)A[t]=arguments[t]; if(A.length<2)return A[0]; var e; if(A.length>2)return _d.apply(void 0, Ln(e=[Ud(A[0], A[1])]).call(e, Zn(jn(A).call(A, 2)))); var C, I=A[0], i=A[1], o=Yd(Vn(i)); try {
                    for(o.s();  !(C=o.n()).done; ) {
                        var n=C.value; Object.prototype.propertyIsEnumerable.call(i, n)&&(i[n]===Qd?delete I[n]:null===I[n]||null===i[n]||"object" !==zn(I[n])||"object" !==zn(i[n])||Yn(I[n])||Yn(i[n])?I[n]=Hd(i[n]):I[n]=_d(I[n], i[n]))
                    }
                }

                catch(g) {
                    o.e(g)
                }

                finally {
                    o.f()
                }

                return I
            }

            function Hd(g) {
                return Yn(g)?_n(g).call(g, (function(g) {
                            return Hd(g)
                        }

                    )):"object"===zn(g)&&null !==g?_d( {}

                    , g):g
            }

            function Kd(g) {
                for(var A=0, t=Xn(g); A<t.length; A++) {
                    var e=t[A]; g[e]===Qd?delete g[e]:"object"===zn(g[e])&&null !==g[e]&&Kd(g[e])
                }
            }

            function Xd() {
                for(var g=arguments.length, A=new Array(g), t=0; t<g; t++)A[t]=arguments[t]; return Jd(A.length?A:[Jn()])
            }

            function Jd(g) {
                var A=Pn(function() {
                        for(var g=qd(), A=g(" "), t=g(" "), e=g(" "), C=0; C<arguments.length; C++)(A-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(A+=1), (t-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(t+=1), (e-=g(C<0||arguments.length<=C?void 0:arguments[C]))<0&&(e+=1); return[A, t, e]
                    }

                    (g), 3), t=A[0], e=A[1], C=A[2], I=1, i=function() {
                    var g=2091639*t+2.3283064365386963e-10*I; return t=e, e=C, C=g-(I=0|g)
                }

                ; return i.uint32=function() {
                    return 4294967296*i()
                }

                , i.fract53=function() {
                    return i()+11102230246251565e-32*(2097152*i()|0)
                }

                , i.algorithm="Alea", i.seed=g, i.version="0.9", i
            }

            function qd() {
                var g=4022871197; return function(A) {
                    for(var t=A.toString(), e=0; e<t.length; e++) {
                        var C=.02519603282416938*(g+=t.charCodeAt(e)); C-=g=C>>>0, g=(C*=g)>>>0, g+=4294967296*(C-=g)
                    }

                    return 2.3283064365386963e-10*(g>>>0)
                }
            }

            var $d="undefined" !=typeof window?window.Hammer||Vd:function() {
                return {
                    on:g=function() {}

                    , off:g, destroy:g, emit:g, get:function() {
                        return {
                            set:g
                        }
                    }
                }

                ; var g
            }

            ; function gh(g) {
                var A, t=this; this._cleanupQueue=[], this.active= !1, this._dom= {
                    container:g, overlay:document.createElement("div")
                }

                , this._dom.overlay.classList.add("vis-overlay"), this._dom.container.appendChild(this._dom.overlay), this._cleanupQueue.push((function() {
                            t._dom.overlay.parentNode.removeChild(t._dom.overlay)
                        }

                    )); var e=$d(this._dom.overlay); e.on("tap", It(A=this._onTapOverlay).call(A, this)), this._cleanupQueue.push((function() {
                            e.destroy()
                        }

                    )); var C=["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"]; ir(C).call(C, (function(g) {
                            e.on(g, (function(g) {
                                        g.srcEvent.stopPropagation()
                                    }

                                ))
                        }

                    )), document&&document.body&&(this._onClick=function(A) {
                        (function(g, A) {
                                for(; g; ) {
                                    if(g===A)return !0; g=g.parentNode
                                }

                                return !1
                            }

                        )(A.target, g)||t.deactivate()
                    }

                    , document.body.addEventListener("click", this._onClick), this._cleanupQueue.push((function() {
                                document.body.removeEventListener("click", t._onClick)
                            }

                        ))), this._escListener=function(g) {
                    ("key"in g?"Escape"===g.key:27===g.keyCode)&&t.deactivate()
                }
            }

            lt(gh.prototype), gh.current=null, gh.prototype.destroy=function() {
                var g, A; this.deactivate(); var t, e=Yd(dr(g=Or(A=this._cleanupQueue).call(A, 0)).call(g)); try {
                    for(e.s();  !(t=e.n()).done; ) {
                        (0, t.value)()
                    }
                }

                catch(g) {
                    e.e(g)
                }

                finally {
                    e.f()
                }
            }

            , gh.prototype.activate=function() {
                gh.current&&gh.current.deactivate(), gh.current=this, this.active= !0, this._dom.overlay.style.display="none", this._dom.container.classList.add("vis-active"), this.emit("change"), this.emit("activate"), document.body.addEventListener("keydown", this._escListener)
            }

            , gh.prototype.deactivate=function() {
                this.active= !1, this._dom.overlay.style.display="block", this._dom.container.classList.remove("vis-active"), document.body.removeEventListener("keydown", this._escListener), this.emit("change"), this.emit("deactivate")
            }

            , gh.prototype._onTapOverlay=function(g) {
                this.activate(), g.srcEvent.stopPropagation()
            }

            ; var Ah=/^#?([a-f\d] {
                    2
                }

            )([a-f\d] {
                    2
                }

            )([a-f\d] {
                    2
                }

            )$/i, th=/^#?([a-f\d])([a-f\d])([a-f\d])$/i, eh=/^rgb\( *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *, *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *, *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *\)$/i, Ch=/^rgba\( *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *, *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *, *(1?\d {
                    1, 2
                }

                |2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i; function Ih(g) {
                if(g)for(;  !0===g.hasChildNodes(); ) {
                    var A=g.firstChild; A&&(Ih(A), g.removeChild(A))
                }
            }

            function ih(g) {
                return g instanceof String||"string"==typeof g
            }

            function oh(g) {
                return"object"===zn(g)&&null !==g
            }

            function nh(g, A, t, e) {
                var C= !1;  !0===e&&(C=null===A[t]&&void 0 !==g[t]), C?delete g[t]:g[t]=A[t]
            }

            function rh(g, A) {
                var t=arguments.length>2&&void 0 !==arguments[2]&&arguments[2]; for(var e in g)if(void 0 !==A[e])if(null===A[e]||"object" !==zn(A[e]))nh(g, A, e, t); else {
                    var C=g[e], I=A[e]; oh(C)&&oh(I)&&rh(C, I, t)
                }
            }

            function sh(g, A, t) {
                var e=arguments.length>3&&void 0 !==arguments[3]&&arguments[3]; if(Yn(t))throw new TypeError("Arrays are not supported by deepExtend"); for(var C=0; C<g.length; C++) {
                    var I=g[C]; if(Object.prototype.hasOwnProperty.call(t, I))if(t[I]&&t[I].constructor===Object)void 0===A[I]&&(A[I]= {}

                    ), A[I].constructor===Object?dh(A[I], t[I],  !1, e):nh(A, t, I, e); else {
                        if(Yn(t[I]))throw new TypeError("Arrays are not supported by deepExtend"); nh(A, t, I, e)
                    }
                }

                return A
            }

            function ah(g, A, t) {
                var e=arguments.length>3&&void 0 !==arguments[3]&&arguments[3]; if(Yn(t))throw new TypeError("Arrays are not supported by deepExtend"); for(var C in t)if(Object.prototype.hasOwnProperty.call(t, C)&& !Yr(g).call(g, C))if(t[C]&&t[C].constructor===Object)void 0===A[C]&&(A[C]= {}

                ), A[C].constructor===Object?dh(A[C], t[C]):nh(A, t, C, e); else if(Yn(t[C])) {
                    A[C]=[]; for(var I=0; I<t[C].length; I++)A[C].push(t[C][I])
                }

                else nh(A, t, C, e); return A
            }

            function dh(g, A) {
                var t=arguments.length>2&&void 0 !==arguments[2]&&arguments[2], e=arguments.length>3&&void 0 !==arguments[3]&&arguments[3]; for(var C in A)if(Object.prototype.hasOwnProperty.call(A, C)|| !0===t)if("object"===zn(A[C])&&null !==A[C]&&Hr(A[C])===Object.prototype)void 0===g[C]?g[C]=dh( {}

                    , A[C], t):"object"===zn(g[C])&&null !==g[C]&&Hr(g[C])===Object.prototype?dh(g[C], A[C], t):nh(g, A, C, e); else if(Yn(A[C])) {
                    var I; g[C]=jn(I=A[C]).call(I)
                }

                else nh(g, A, C, e); return g
            }

            function hh(g, A) {
                var t; return Ln(t=[]).call(t, Zn(g), [A])
            }

            function lh(g) {
                return jn(g).call(g)
            }

            function ch(g) {
                return g.getBoundingClientRect().top
            }

            function uh(g, A) {
                if(Yn(g))for(var t=g.length, e=0; e<t; e++)A(g[e], e, g); else for(var C in g)Object.prototype.hasOwnProperty.call(g, C)&&A(g[C], C, g)
            }

            function ph(g) {
                var A; switch(g.length) {
                    case 3:case 4:return(A=th.exec(g))? {
                        r:vs(A[1]+A[1], 16), g:vs(A[2]+A[2], 16), b:vs(A[3]+A[3], 16)
                    }

                    :null; case 6:case 7:return(A=Ah.exec(g))? {
                        r:vs(A[1], 16), g:vs(A[2], 16), b:vs(A[3], 16)
                    }

                    :null; default:return null
                }
            }

            function fh(g, A) {
                if(Yr(g).call(g, "rgba"))return g; if(Yr(g).call(g, "rgb")) {
                    var t=g.substr(Ts(g).call(g, "(")+1).replace(")", "").split(","); return"rgba("+t[0]+","+t[1]+","+t[2]+","+A+")"
                }

                var e=ph(g); return null==e?g:"rgba("+e.r+","+e.g+","+e.b+","+A+")"
            }

            function vh(g, A, t) {
                var e; return"#"+jn(e=((1<<24)+(g<<16)+(A<<8)+t).toString(16)).call(e, 1)
            }

            function yh(g, A) {
                if(ih(g)) {
                    var t=g; if(xh(t)) {
                        var e, C=_n(e=t.substr(4).substr(0, t.length-5).split(",")).call(e, (function(g) {
                                    return vs(g)
                                }

                            )); t=vh(C[0], C[1], C[2])
                    }

                    if( !0===kh(t)) {
                        var I=function(g) {
                            var A=ph(g); if( !A)throw new TypeError("'".concat(g, "' is not a valid color.")); return mh(A.r, A.g, A.b)
                        }

                        (t), i= {
                            h:I.h, s:.8*I.s, v:Math.min(1, 1.02*I.v)
                        }

                        , o= {
                            h:I.h, s:Math.min(1, 1.25*I.s), v:.8*I.v
                        }

                        , n=wh(o.h, o.s, o.v), r=wh(i.h, i.s, i.v); return {
                            background:t, border:n, highlight: {
                                background:r, border:n
                            }

                            , hover: {
                                background:r, border:n
                            }
                        }
                    }

                    return {
                        background:t, border:t, highlight: {
                            background:t, border:t
                        }

                        , hover: {
                            background:t, border:t
                        }
                    }
                }

                return A? {
                    background:g.background||A.background, border:g.border||A.border, highlight:ih(g.highlight)? {
                        border:g.highlight, background:g.highlight
                    }

                    : {
                        background:g.highlight&&g.highlight.background||A.highlight.background, border:g.highlight&&g.highlight.border||A.highlight.border
                    }

                    , hover:ih(g.hover)? {
                        border:g.hover, background:g.hover
                    }

                    : {
                        border:g.hover&&g.hover.border||A.hover.border, background:g.hover&&g.hover.background||A.hover.background
                    }
                }

                : {
                    background:g.background||void 0, border:g.border||void 0, highlight:ih(g.highlight)? {
                        border:g.highlight, background:g.highlight
                    }

                    : {
                        background:g.highlight&&g.highlight.background||void 0, border:g.highlight&&g.highlight.border||void 0
                    }

                    , hover:ih(g.hover)? {
                        border:g.hover, background:g.hover
                    }

                    : {
                        border:g.hover&&g.hover.border||void 0, background:g.hover&&g.hover.background||void 0
                    }
                }
            }

            function mh(g, A, t) {
                g/=255, A/=255, t/=255; var e=Math.min(g, Math.min(A, t)), C=Math.max(g, Math.max(A, t)); return e===C? {
                    h:0, s:0, v:e
                }

                : {
                    h:60*((g===e?3:t===e?1:5)-(g===e?A-t:t===e?g-A:t-g)/(C-e))/360, s:(C-e)/C, v:C
                }
            }

            function bh(g, A, t) {
                var e, C, I, i=Math.floor(6*g), o=6*g-i, n=t*(1-A), r=t*(1-o*A), s=t*(1-(1-o)*A); switch(i%6) {
                    case 0:e=t, C=s, I=n; break; case 1:e=r, C=t, I=n; break; case 2:e=n, C=t, I=s; break; case 3:e=n, C=r, I=t; break; case 4:e=s, C=n, I=t; break; case 5:e=t, C=n, I=r
                }

                return {
                    r:Math.floor(255*e), g:Math.floor(255*C), b:Math.floor(255*I)
                }
            }

            function wh(g, A, t) {
                var e=bh(g, A, t); return vh(e.r, e.g, e.b)
            }

            function kh(g) {
                return/(^#[0-9A-F] {
                        6
                    }

                    $)|(^#[0-9A-F] {
                        3
                    }

                    $)/i.test(g)
            }

            function xh(g) {
                return eh.test(g)
            }

            function Eh(g) {
                return Ch.test(g)
            }

            function Oh(g) {
                if(null===g||"object" !==zn(g))return null; if(g instanceof Element)return g; var A=Bs(g); for(var t in g)Object.prototype.hasOwnProperty.call(g, t)&&"object"==zn(g[t])&&(A[t]=Oh(g[t])); return A
            }

            function Th(g, A, t) {
                var e=arguments.length>3&&void 0 !==arguments[3]?arguments[3]: {}

                , C=function(g) {
                    return null !=g
                }

                , I=function(g) {
                    return null !==g&&"object"===zn(g)
                }

                , i=function(g) {
                    for(var A in g)if(Object.prototype.hasOwnProperty.call(g, A))return !1; return !0
                }

                ; if( !I(g))throw new Error("Parameter mergeTarget must be an object"); if( !I(A))throw new Error("Parameter options must be an object"); if( !C(t))throw new Error("Parameter option must have a value"); if( !I(e))throw new Error("Parameter globalOptions must be an object"); var o=function(g, A, t) {
                    I(g[t])||(g[t]= {}

                    ); var e=A[t], C=g[t]; for(var i in e)Object.prototype.hasOwnProperty.call(e, i)&&(C[i]=e[i])
                }

                , n=A[t], r=I(e)&& !i(e), s=r?e[t]:void 0, a=s?s.enabled:void 0; if(void 0 !==n) {
                    if("boolean"==typeof n)return I(g[t])||(g[t]= {}

                    ), void(g[t].enabled=n); if(null===n&& !I(g[t])) {
                        if( !C(s))return; g[t]=Bs(s)
                    }

                    if(I(n)) {
                        var d= !0; void 0 !==n.enabled?d=n.enabled:void 0 !==a&&(d=s.enabled), o(g, A, t), g[t].enabled=d
                    }
                }
            }

            var Dh= {
                linear:function(g) {
                    return g
                }

                , easeInQuad:function(g) {
                    return g*g
                }

                , easeOutQuad:function(g) {
                    return g*(2-g)
                }

                , easeInOutQuad:function(g) {
                    return g<.5?2*g*g:(4-2*g)*g-1
                }

                , easeInCubic:function(g) {
                    return g*g*g
                }

                , easeOutCubic:function(g) {
                    return--g*g*g+1
                }

                , easeInOutCubic:function(g) {
                    return g<.5?4*g*g*g:(g-1)*(2*g-2)*(2*g-2)+1
                }

                , easeInQuart:function(g) {
                    return g*g*g*g
                }

                , easeOutQuart:function(g) {
                    return 1- --g*g*g*g
                }

                , easeInOutQuart:function(g) {
                    return g<.5?8*g*g*g*g:1-8*--g*g*g*g
                }

                , easeInQuint:function(g) {
                    return g*g*g*g*g
                }

                , easeOutQuint:function(g) {
                    return 1+--g*g*g*g*g
                }

                , easeInOutQuint:function(g) {
                    return g<.5?16*g*g*g*g*g:1+16*--g*g*g*g*g
                }
            }

            ; function Nh(g, A) {
                var t; Yn(A)||(A=[A]); var e, C=Yd(g); try {
                    for(C.s();  !(e=C.n()).done; ) {
                        var I=e.value; if(I) {
                            t=I[A[0]]; for(var i=1; i<A.length; i++)t&&(t=t[A[i]]); if(void 0 !==t)break
                        }
                    }
                }

                catch(g) {
                    C.e(g)
                }

                finally {
                    C.f()
                }

                return t
            }

            var Rh= {
                black:"#000000", navy:"#000080", darkblue:"#00008B", mediumblue:"#0000CD", blue:"#0000FF", darkgreen:"#006400", green:"#008000", teal:"#008080", darkcyan:"#008B8B", deepskyblue:"#00BFFF", darkturquoise:"#00CED1", mediumspringgreen:"#00FA9A", lime:"#00FF00", springgreen:"#00FF7F", aqua:"#00FFFF", cyan:"#00FFFF", midnightblue:"#191970", dodgerblue:"#1E90FF", lightseagreen:"#20B2AA", forestgreen:"#228B22", seagreen:"#2E8B57", darkslategray:"#2F4F4F", limegreen:"#32CD32", mediumseagreen:"#3CB371", turquoise:"#40E0D0", royalblue:"#4169E1", steelblue:"#4682B4", darkslateblue:"#483D8B", mediumturquoise:"#48D1CC", indigo:"#4B0082", darkolivegreen:"#556B2F", cadetblue:"#5F9EA0", cornflowerblue:"#6495ED", mediumaquamarine:"#66CDAA", dimgray:"#696969", slateblue:"#6A5ACD", olivedrab:"#6B8E23", slategray:"#708090", lightslategray:"#778899", mediumslateblue:"#7B68EE", lawngreen:"#7CFC00", chartreuse:"#7FFF00", aquamarine:"#7FFFD4", maroon:"#800000", purple:"#800080", olive:"#808000", gray:"#808080", skyblue:"#87CEEB", lightskyblue:"#87CEFA", blueviolet:"#8A2BE2", darkred:"#8B0000", darkmagenta:"#8B008B", saddlebrown:"#8B4513", darkseagreen:"#8FBC8F", lightgreen:"#90EE90", mediumpurple:"#9370D8", darkviolet:"#9400D3", palegreen:"#98FB98", darkorchid:"#9932CC", yellowgreen:"#9ACD32", sienna:"#A0522D", brown:"#A52A2A", darkgray:"#A9A9A9", lightblue:"#ADD8E6", greenyellow:"#ADFF2F", paleturquoise:"#AFEEEE", lightsteelblue:"#B0C4DE", powderblue:"#B0E0E6", firebrick:"#B22222", darkgoldenrod:"#B8860B", mediumorchid:"#BA55D3", rosybrown:"#BC8F8F", darkkhaki:"#BDB76B", silver:"#C0C0C0", mediumvioletred:"#C71585", indianred:"#CD5C5C", peru:"#CD853F", chocolate:"#D2691E", tan:"#D2B48C", lightgrey:"#D3D3D3", palevioletred:"#D87093", thistle:"#D8BFD8", orchid:"#DA70D6", goldenrod:"#DAA520", crimson:"#DC143C", gainsboro:"#DCDCDC", plum:"#DDA0DD", burlywood:"#DEB887", lightcyan:"#E0FFFF", lavender:"#E6E6FA", darksalmon:"#E9967A", violet:"#EE82EE", palegoldenrod:"#EEE8AA", lightcoral:"#F08080", khaki:"#F0E68C", aliceblue:"#F0F8FF", honeydew:"#F0FFF0", azure:"#F0FFFF", sandybrown:"#F4A460", wheat:"#F5DEB3", beige:"#F5F5DC", whitesmoke:"#F5F5F5", mintcream:"#F5FFFA", ghostwhite:"#F8F8FF", salmon:"#FA8072", antiquewhite:"#FAEBD7", linen:"#FAF0E6", lightgoldenrodyellow:"#FAFAD2", oldlace:"#FDF5E6", red:"#FF0000", fuchsia:"#FF00FF", magenta:"#FF00FF", deeppink:"#FF1493", orangered:"#FF4500", tomato:"#FF6347", hotpink:"#FF69B4", coral:"#FF7F50", darkorange:"#FF8C00", lightsalmon:"#FFA07A", orange:"#FFA500", lightpink:"#FFB6C1", pink:"#FFC0CB", gold:"#FFD700", peachpuff:"#FFDAB9", navajowhite:"#FFDEAD", moccasin:"#FFE4B5", bisque:"#FFE4C4", mistyrose:"#FFE4E1", blanchedalmond:"#FFEBCD", papayawhip:"#FFEFD5", lavenderblush:"#FFF0F5", seashell:"#FFF5EE", cornsilk:"#FFF8DC", lemonchiffon:"#FFFACD", floralwhite:"#FFFAF0", snow:"#FFFAFA", yellow:"#FFFF00", lightyellow:"#FFFFE0", ivory:"#FFFFF0", white:"#FFFFFF"
            }

            , Ph=function() {
                function g() {
                    var A=arguments.length>0&&void 0 !==arguments[0]?arguments[0]:1; So(this, g), this.pixelRatio=A, this.generated= !1, this.centerCoordinates= {
                        x:144.5, y:144.5
                    }

                    , this.r=289*.49, this.color= {
                        r:255, g:255, b:255, a:1
                    }

                    , this.hueCircle=void 0, this.initialColor= {
                        r:255, g:255, b:255, a:1
                    }

                    , this.previousColor=void 0, this.applied= !1, this.updateCallback=function() {}

                    , this.closeCallback=function() {}

                    , this._create()
                }

                return Lo(g, [ {
                        key:"insertTo", value:function(g) {
                            void 0 !==this.hammer&&(this.hammer.destroy(), this.hammer=void 0), this.container=g, this.container.appendChild(this.frame), this._bindHammer(), this._setSize()
                        }
                    }

                    , {
                        key:"setUpdateCallback", value:function(g) {
                            if("function" !=typeof g)throw new Error("Function attempted to set as colorPicker update callback is not a function."); this.updateCallback=g
                        }
                    }

                    , {
                        key:"setCloseCallback", value:function(g) {
                            if("function" !=typeof g)throw new Error("Function attempted to set as colorPicker closing callback is not a function."); this.closeCallback=g
                        }
                    }

                    , {
                        key:"_isColorString", value:function(g) {
                            if("string"==typeof g)return Rh[g]
                        }
                    }

                    , {
                        key:"setColor", value:function(g) {
                            var A= !(arguments.length>1&&void 0 !==arguments[1])||arguments[1]; if("none" !==g) {
                                var t, e=this._isColorString(g); if(void 0 !==e&&(g=e),  !0===ih(g)) {
                                    if( !0===xh(g)) {
                                        var C=g.substr(4).substr(0, g.length-5).split(","); t= {
                                            r:C[0], g:C[1], b:C[2], a:1
                                        }
                                    }

                                    else if( !0===Eh(g)) {
                                        var I=g.substr(5).substr(0, g.length-6).split(","); t= {
                                            r:I[0], g:I[1], b:I[2], a:I[3]
                                        }
                                    }

                                    else if( !0===kh(g)) {
                                        var i=ph(g); t= {
                                            r:i.r, g:i.g, b:i.b, a:1
                                        }
                                    }
                                }

                                else if(g instanceof Object&&void 0 !==g.r&&void 0 !==g.g&&void 0 !==g.b) {
                                    var o=void 0 !==g.a?g.a:"1.0"; t= {
                                        r:g.r, g:g.g, b:g.b, a:o
                                    }
                                }

                                if(void 0===t)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+Ws(g)); this._setColor(t, A)
                            }
                        }
                    }

                    , {
                        key:"show", value:function() {
                            void 0 !==this.closeCallback&&(this.closeCallback(), this.closeCallback=void 0), this.applied= !1, this.frame.style.display="block", this._generateHueCircle()
                        }
                    }

                    , {
                        key:"_hide", value:function() {
                            var g=this, A= !(arguments.length>0&&void 0 !==arguments[0])||arguments[0];  !0===A&&(this.previousColor=HA( {}

                                    , this.color)),  !0===this.applied&&this.updateCallback(this.initialColor), this.frame.style.display="none", Hs((function() {
                                        void 0 !==g.closeCallback&&(g.closeCallback(), g.closeCallback=void 0)
                                    }

                                ), 0)
                        }
                    }

                    , {
                        key:"_save", value:function() {
                            this.updateCallback(this.color), this.applied= !1, this._hide()
                        }
                    }

                    , {
                        key:"_apply", value:function() {
                            this.applied= !0, this.updateCallback(this.color), this._updatePicker(this.color)
                        }
                    }

                    , {
                        key:"_loadLast", value:function() {
                            void 0 !==this.previousColor?this.setColor(this.previousColor,  !1):alert("There is no last color to load...")
                        }
                    }

                    , {
                        key:"_setColor", value:function(g) {
                            var A= !(arguments.length>1&&void 0 !==arguments[1])||arguments[1];  !0===A&&(this.initialColor=HA( {}

                                    , g)), this.color=g; var t=mh(g.r, g.g, g.b), e=2*Math.PI, C=this.r*t.s, I=this.centerCoordinates.x+C*Math.sin(e*t.h), i=this.centerCoordinates.y+C*Math.cos(e*t.h); this.colorPickerSelector.style.left=I-.5*this.colorPickerSelector.clientWidth+"px", this.colorPickerSelector.style.top=i-.5*this.colorPickerSelector.clientHeight+"px", this._updatePicker(g)
                        }
                    }

                    , {
                        key:"_setOpacity", value:function(g) {
                            this.color.a=g/100, this._updatePicker(this.color)
                        }
                    }

                    , {
                        key:"_setBrightness", value:function(g) {
                            var A=mh(this.color.r, this.color.g, this.color.b); A.v=g/100; var t=bh(A.h, A.s, A.v); t.a=this.color.a, this.color=t, this._updatePicker()
                        }
                    }

                    , {
                        key:"_updatePicker", value:function() {
                            var g=arguments.length>0&&void 0 !==arguments[0]?arguments[0]:this.color, A=mh(g.r, g.g, g.b), t=this.colorPickerCanvas.getContext("2d"); void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0); var e=this.colorPickerCanvas.clientWidth, C=this.colorPickerCanvas.clientHeight; t.clearRect(0, 0, e, C), t.putImageData(this.hueCircle, 0, 0), t.fillStyle="rgba(0,0,0,"+(1-A.v)+")", t.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), ga(t).call(t), this.brightnessRange.value=100*A.v, this.opacityRange.value=100*g.a, this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")", this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
                        }
                    }

                    , {
                        key:"_setSize", value:function() {
                            this.colorPickerCanvas.style.width="100%", this.colorPickerCanvas.style.height="100%", this.colorPickerCanvas.width=289*this.pixelRatio, this.colorPickerCanvas.height=289*this.pixelRatio
                        }
                    }

                    , {
                        key:"_create", value:function() {
                            var g, A, t, e; if(this.frame=document.createElement("div"), this.frame.className="vis-color-picker", this.colorPickerDiv=document.createElement("div"), this.colorPickerSelector=document.createElement("div"), this.colorPickerSelector.className="vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas=document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
                                var C=this.colorPickerCanvas.getContext("2d"); this.pixelRatio=(window.devicePixelRatio||1)/(C.webkitBackingStorePixelRatio||C.mozBackingStorePixelRatio||C.msBackingStorePixelRatio||C.oBackingStorePixelRatio||C.backingStorePixelRatio||1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
                            }

                            else {
                                var I=document.createElement("DIV"); I.style.color="red", I.style.fontWeight="bold", I.style.padding="10px", I.innerText="Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(I)
                            }

                            this.colorPickerDiv.className="vis-color", this.opacityDiv=document.createElement("div"), this.opacityDiv.className="vis-opacity", this.brightnessDiv=document.createElement("div"), this.brightnessDiv.className="vis-brightness", this.arrowDiv=document.createElement("div"), this.arrowDiv.className="vis-arrow", this.opacityRange=document.createElement("input"); try {
                                this.opacityRange.type="range", this.opacityRange.min="0", this.opacityRange.max="100"
                            }

                            catch(g) {}

                            this.opacityRange.value="100", this.opacityRange.className="vis-range", this.brightnessRange=document.createElement("input"); try {
                                this.brightnessRange.type="range", this.brightnessRange.min="0", this.brightnessRange.max="100"
                            }

                            catch(g) {}

                            this.brightnessRange.value="100", this.brightnessRange.className="vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange); var i=this; this.opacityRange.onchange=function() {
                                i._setOpacity(this.value)
                            }

                            , this.opacityRange.oninput=function() {
                                i._setOpacity(this.value)
                            }

                            , this.brightnessRange.onchange=function() {
                                i._setBrightness(this.value)
                            }

                            , this.brightnessRange.oninput=function() {
                                i._setBrightness(this.value)
                            }

                            , this.brightnessLabel=document.createElement("div"), this.brightnessLabel.className="vis-label vis-brightness", this.brightnessLabel.innerText="brightness:", this.opacityLabel=document.createElement("div"), this.opacityLabel.className="vis-label vis-opacity", this.opacityLabel.innerText="opacity:", this.newColorDiv=document.createElement("div"), this.newColorDiv.className="vis-new-color", this.newColorDiv.innerText="new", this.initialColorDiv=document.createElement("div"), this.initialColorDiv.className="vis-initial-color", this.initialColorDiv.innerText="initial", this.cancelButton=document.createElement("div"), this.cancelButton.className="vis-button vis-cancel", this.cancelButton.innerText="cancel", this.cancelButton.onclick=It(g=this._hide).call(g, this,  !1), this.applyButton=document.createElement("div"), this.applyButton.className="vis-button vis-apply", this.applyButton.innerText="apply", this.applyButton.onclick=It(A=this._apply).call(A, this), this.saveButton=document.createElement("div"), this.saveButton.className="vis-button vis-save", this.saveButton.innerText="save", this.saveButton.onclick=It(t=this._save).call(t, this), this.loadButton=document.createElement("div"), this.loadButton.className="vis-button vis-load", this.loadButton.innerText="load last", this.loadButton.onclick=It(e=this._loadLast).call(e, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton)
                        }
                    }

                    , {
                        key:"_bindHammer", value:function() {
                            var g=this; this.drag= {}

                            , this.pinch= {}

                            , this.hammer=new $d(this.colorPickerCanvas), this.hammer.get("pinch").set( {
                                    enable: !0
                                }

                            ), this.hammer.on("hammer.input", (function(A) {
                                        A.isFirst&&g._moveSelector(A)
                                    }

                                )), this.hammer.on("tap", (function(A) {
                                        g._moveSelector(A)
                                    }

                                )), this.hammer.on("panstart", (function(A) {
                                        g._moveSelector(A)
                                    }

                                )), this.hammer.on("panmove", (function(A) {
                                        g._moveSelector(A)
                                    }

                                )), this.hammer.on("panend", (function(A) {
                                        g._moveSelector(A)
                                    }

                                ))
                        }
                    }

                    , {
                        key:"_generateHueCircle", value:function() {
                            if( !1===this.generated) {
                                var g=this.colorPickerCanvas.getContext("2d"); void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(g.webkitBackingStorePixelRatio||g.mozBackingStorePixelRatio||g.msBackingStorePixelRatio||g.oBackingStorePixelRatio||g.backingStorePixelRatio||1)), g.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0); var A, t, e, C, I=this.colorPickerCanvas.clientWidth, i=this.colorPickerCanvas.clientHeight; g.clearRect(0, 0, I, i), this.centerCoordinates= {
                                    x:.5*I, y:.5*i
                                }

                                , this.r=.49*I; var o, n=2*Math.PI/360, r=1/this.r; for(e=0; e<360; e++)for(C=0; C<this.r; C++)A=this.centerCoordinates.x+C*Math.sin(n*e), t=this.centerCoordinates.y+C*Math.cos(n*e), o=bh(.002777777777777778*e, C*r, 1), g.fillStyle="rgb("+o.r+","+o.g+","+o.b+")", g.fillRect(A-.5, t-.5, 2, 2); g.strokeStyle="rgba(0,0,0,1)", g.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), g.stroke(), this.hueCircle=g.getImageData(0, 0, I, i)
                            }

                            this.generated= !0
                        }
                    }

                    , {
                        key:"_moveSelector", value:function(g) {
                            var A=this.colorPickerDiv.getBoundingClientRect(), t=g.center.x-A.left, e=g.center.y-A.top, C=.5*this.colorPickerDiv.clientHeight, I=.5*this.colorPickerDiv.clientWidth, i=t-I, o=e-C, n=Math.atan2(i, o), r=.98*Math.min(Math.sqrt(i*i+o*o), I), s=Math.cos(n)*r+C, a=Math.sin(n)*r+I; this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px", this.colorPickerSelector.style.left=a-.5*this.colorPickerSelector.clientWidth+"px"; var d=n/(2*Math.PI); d=d<0?d+1:d; var h=r/this.r, l=mh(this.color.r, this.color.g, this.color.b); l.h=d, l.s=h; var c=bh(l.h, l.s, l.v); c.a=this.color.a, this.color=c, this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")", this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
                        }
                    }

                    ]), g
            }

            (); function Mh() {
                for(var g=arguments.length, A=new Array(g), t=0; t<g; t++)A[t]=arguments[t]; if(A.length<1)throw new TypeError("Invalid arguments."); if(1===A.length)return document.createTextNode(A[0]); var e=document.createElement(A[0]); return e.appendChild(Mh.apply(void 0, Zn(jn(A).call(A, 1)))), e
            }

            var Bh, zh= !1, Zh="background: #FFeeee; color: #dd0000", Sh=gh, Fh=function() {
                function g(A, t, e) {
                    var C=arguments.length>3&&void 0 !==arguments[3]?arguments[3]:1, I=arguments.length>4&&void 0 !==arguments[4]?arguments[4]:function() {
                        return !1
                    }

                    ; So(this, g), this.parent=A, this.changedOptions=[], this.container=t, this.allowCreation= !1, this.hideOption=I, this.options= {}

                    , this.initialized= !1, this.popupCounter=0, this.defaultOptions= {
                        enabled: !1, filter: !0, container:void 0, showButton: !0
                    }

                    , HA(this.options, this.defaultOptions), this.configureOptions=e, this.moduleOptions= {}

                    , this.domElements=[], this.popupDiv= {}

                    , this.popupLimit=5, this.popupHistory= {}

                    , this.colorPicker=new Ph(C), this.wrapper=void 0
                }

                return Lo(g, [ {
                        key:"setOptions", value:function(g) {
                            if(void 0 !==g) {
                                this.popupHistory= {}

                                , this._removePopup(); var A= !0; if("string"==typeof g)this.options.filter=g; else if(Yn(g))this.options.filter=g.join(); else if("object"===zn(g)) {
                                    if(null==g)throw new TypeError("options cannot be null"); void 0 !==g.container&&(this.options.container=g.container), void 0 !==qr(g)&&(this.options.filter=qr(g)), void 0 !==g.showButton&&(this.options.showButton=g.showButton), void 0 !==g.enabled&&(A=g.enabled)
                                }

                                else"boolean"==typeof g?(this.options.filter= !0, A=g):"function"==typeof g&&(this.options.filter=g, A= !0);  !1===qr(this.options)&&(A= !1), this.options.enabled=A
                            }

                            this._clean()
                        }
                    }

                    , {
                        key:"setModuleOptions", value:function(g) {
                            this.moduleOptions=g,  !0===this.options.enabled&&(this._clean(), void 0 !==this.options.container&&(this.container=this.options.container), this._create())
                        }
                    }

                    , {
                        key:"_create", value:function() {
                            this._clean(), this.changedOptions=[]; var g=qr(this.options), A=0, t= !1; for(var e in this.configureOptions)Object.prototype.hasOwnProperty.call(this.configureOptions, e)&&(this.allowCreation= !1, t= !1, "function"==typeof g?t=(t=g(e, []))||this._handleObject(this.configureOptions[e], [e],  !0): !0 !==g&&-1===Ts(g).call(g, e)||(t= !0),  !1 !==t&&(this.allowCreation= !0, A>0&&this._makeItem([]), this._makeHeader(e), this._handleObject(this.configureOptions[e], [e])), A++); this._makeButton(), this._push()
                        }
                    }

                    , {
                        key:"_push", value:function() {
                            this.wrapper=document.createElement("div"), this.wrapper.className="vis-configuration-wrapper", this.container.appendChild(this.wrapper); for(var g=0; g<this.domElements.length; g++)this.wrapper.appendChild(this.domElements[g]); this._showPopupIfNeeded()
                        }
                    }

                    , {
                        key:"_clean", value:function() {
                            for(var g=0; g<this.domElements.length; g++)this.wrapper.removeChild(this.domElements[g]); void 0 !==this.wrapper&&(this.container.removeChild(this.wrapper), this.wrapper=void 0), this.domElements=[], this._removePopup()
                        }
                    }

                    , {
                        key:"_getValue", value:function(g) {
                            for(var A=this.moduleOptions, t=0; t<g.length; t++) {
                                if(void 0===A[g[t]]) {
                                    A=void 0; break
                                }

                                A=A[g[t]]
                            }

                            return A
                        }
                    }

                    , {
                        key:"_makeItem", value:function(g) {
                            if( !0===this.allowCreation) {
                                var A=document.createElement("div"); A.className="vis-configuration vis-config-item vis-config-s"+g.length; for(var t=arguments.length, e=new Array(t>1?t-1:0), C=1; C<t; C++)e[C-1]=arguments[C]; return ir(e).call(e, (function(g) {
                                            A.appendChild(g)
                                        }

                                    )), this.domElements.push(A), this.domElements.length
                            }

                            return 0
                        }
                    }

                    , {
                        key:"_makeHeader", value:function(g) {
                            var A=document.createElement("div"); A.className="vis-configuration vis-config-header", A.innerText=g, this._makeItem([], A)
                        }
                    }

                    , {
                        key:"_makeLabel", value:function(g, A) {
                            var t=arguments.length>2&&void 0 !==arguments[2]&&arguments[2], e=document.createElement("div"); if(e.className="vis-configuration vis-config-label vis-config-s"+A.length,  !0===t) {
                                for(; e.firstChild; )e.removeChild(e.firstChild); e.appendChild(Mh("i", "b", g))
                            }

                            else e.innerText=g+":"; return e
                        }
                    }

                    , {
                        key:"_makeDropdown", value:function(g, A, t) {
                            var e=document.createElement("select"); e.className="vis-configuration vis-config-select"; var C=0; void 0 !==A&&-1 !==Ts(g).call(g, A)&&(C=Ts(g).call(g, A)); for(var I=0; I<g.length; I++) {
                                var i=document.createElement("option"); i.value=g[I], I===C&&(i.selected="selected"), i.innerText=g[I], e.appendChild(i)
                            }

                            var o=this; e.onchange=function() {
                                o._update(this.value, t)
                            }

                            ; var n=this._makeLabel(t[t.length-1], t); this._makeItem(t, n, e)
                        }
                    }

                    , {
                        key:"_makeRange", value:function(g, A, t) {
                            var e=g[0], C=g[1], I=g[2], i=g[3], o=document.createElement("input"); o.className="vis-configuration vis-config-range"; try {
                                o.type="range", o.min=C, o.max=I
                            }

                            catch(g) {}

                            o.step=i; var n="", r=0; if(void 0 !==A) {
                                var s=1.2; A<0&&A*s<C?(o.min=Math.ceil(A*s), r=o.min, n="range increased"):A/s<C&&(o.min=Math.ceil(A/s), r=o.min, n="range increased"), A*s>I&&1 !==I&&(o.max=Math.ceil(A*s), r=o.max, n="range increased"), o.value=A
                            }

                            else o.value=e; var a=document.createElement("input"); a.className="vis-configuration vis-config-rangeinput", a.value=o.value; var d=this; o.onchange=function() {
                                a.value=this.value, d._update(Number(this.value), t)
                            }

                            , o.oninput=function() {
                                a.value=this.value
                            }

                            ; var h=this._makeLabel(t[t.length-1], t), l=this._makeItem(t, h, o, a); "" !==n&&this.popupHistory[l] !==r&&(this.popupHistory[l]=r, this._setupPopup(n, l))
                        }
                    }

                    , {
                        key:"_makeButton", value:function() {
                            var g=this; if( !0===this.options.showButton) {
                                var A=document.createElement("div"); A.className="vis-configuration vis-config-button", A.innerText="generate options", A.onclick=function() {
                                    g._printOptions()
                                }

                                , A.onmouseover=function() {
                                    A.className="vis-configuration vis-config-button hover"
                                }

                                , A.onmouseout=function() {
                                    A.className="vis-configuration vis-config-button"
                                }

                                , this.optionsContainer=document.createElement("div"), this.optionsContainer.className="vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(A)
                            }
                        }
                    }

                    , {
                        key:"_setupPopup", value:function(g, A) {
                            var t=this; if( !0===this.initialized&& !0===this.allowCreation&&this.popupCounter<this.popupLimit) {
                                var e=document.createElement("div"); e.id="vis-configuration-popup", e.className="vis-configuration-popup", e.innerText=g, e.onclick=function() {
                                    t._removePopup()
                                }

                                , this.popupCounter+=1, this.popupDiv= {
                                    html:e, index:A
                                }
                            }
                        }
                    }

                    , {
                        key:"_removePopup", value:function() {
                            void 0 !==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv= {}

                            )
                        }
                    }

                    , {
                        key:"_showPopupIfNeeded", value:function() {
                            var g=this; if(void 0 !==this.popupDiv.html) {
                                var A=this.domElements[this.popupDiv.index].getBoundingClientRect(); this.popupDiv.html.style.left=A.left+"px", this.popupDiv.html.style.top=A.top-30+"px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout=Hs((function() {
                                            g.popupDiv.html.style.opacity=0
                                        }

                                    ), 1500), this.popupDiv.deleteTimeout=Hs((function() {
                                            g._removePopup()
                                        }

                                    ), 1800)
                            }
                        }
                    }

                    , {
                        key:"_makeCheckbox", value:function(g, A, t) {
                            var e=document.createElement("input"); e.type="checkbox", e.className="vis-configuration vis-config-checkbox", e.checked=g, void 0 !==A&&(e.checked=A, A !==g&&("object"===zn(g)?A !==g.enabled&&this.changedOptions.push( {
                                            path:t, value:A
                                        }

                                    ):this.changedOptions.push( {
                                            path:t, value:A
                                        }

                                    ))); var C=this; e.onchange=function() {
                                C._update(this.checked, t)
                            }

                            ; var I=this._makeLabel(t[t.length-1], t); this._makeItem(t, I, e)
                        }
                    }

                    , {
                        key:"_makeTextInput", value:function(g, A, t) {
                            var e=document.createElement("input"); e.type="text", e.className="vis-configuration vis-config-text", e.value=A, A !==g&&this.changedOptions.push( {
                                    path:t, value:A
                                }

                            ); var C=this; e.onchange=function() {
                                C._update(this.value, t)
                            }

                            ; var I=this._makeLabel(t[t.length-1], t); this._makeItem(t, I, e)
                        }
                    }

                    , {
                        key:"_makeColorField", value:function(g, A, t) {
                            var e=this, C=g[1], I=document.createElement("div"); "none" !==(A=void 0===A?C:A)?(I.className="vis-configuration vis-config-colorBlock", I.style.backgroundColor=A):I.className="vis-configuration vis-config-colorBlock none", A=void 0===A?C:A, I.onclick=function() {
                                e._showColorPicker(A, I, t)
                            }

                            ; var i=this._makeLabel(t[t.length-1], t); this._makeItem(t, i, I)
                        }
                    }

                    , {
                        key:"_showColorPicker", value:function(g, A, t) {
                            var e=this; A.onclick=function() {}

                            , this.colorPicker.insertTo(A), this.colorPicker.show(), this.colorPicker.setColor(g), this.colorPicker.setUpdateCallback((function(g) {
                                        var C="rgba("+g.r+","+g.g+","+g.b+","+g.a+")"; A.style.backgroundColor=C, e._update(C, t)
                                    }

                                )), this.colorPicker.setCloseCallback((function() {
                                        A.onclick=function() {
                                            e._showColorPicker(g, A, t)
                                        }
                                    }

                                ))
                        }
                    }

                    , {
                        key:"_handleObject", value:function(g) {
                            var A=arguments.length>1&&void 0 !==arguments[1]?arguments[1]:[], t=arguments.length>2&&void 0 !==arguments[2]&&arguments[2], e= !1, C=qr(this.options), I= !1; for(var i in g)if(Object.prototype.hasOwnProperty.call(g, i)) {
                                e= !0; var o=g[i], n=hh(A, i); if("function"==typeof C&& !1===(e=C(i, A))&& !Yn(o)&&"string" !=typeof o&&"boolean" !=typeof o&&o instanceof Object&&(this.allowCreation= !1, e=this._handleObject(o, n,  !0), this.allowCreation= !1===t),  !1 !==e) {
                                    I= !0; var r=this._getValue(n); if(Yn(o))this._handleArray(o, r, n); else if("string"==typeof o)this._makeTextInput(o, r, n); else if("boolean"==typeof o)this._makeCheckbox(o, r, n); else if(o instanceof Object) {
                                        if( !this.hideOption(A, i, this.moduleOptions))if(void 0 !==o.enabled) {
                                            var s=hh(n, "enabled"), a=this._getValue(s); if( !0===a) {
                                                var d=this._makeLabel(i, n,  !0); this._makeItem(n, d), I=this._handleObject(o, n)||I
                                            }

                                            else this._makeCheckbox(o, a, n)
                                        }

                                        else {
                                            var h=this._makeLabel(i, n,  !0); this._makeItem(n, h), I=this._handleObject(o, n)||I
                                        }
                                    }

                                    else console.error("dont know how to handle", o, i, n)
                                }
                            }

                            return I
                        }
                    }

                    , {
                        key:"_handleArray", value:function(g, A, t) {
                            "string"==typeof g[0]&&"color"===g[0]?(this._makeColorField(g, A, t), g[1] !==A&&this.changedOptions.push( {
                                        path:t, value:A
                                    }

                                )):"string"==typeof g[0]?(this._makeDropdown(g, A, t), g[0] !==A&&this.changedOptions.push( {
                                        path:t, value:A
                                    }

                                )):"number"==typeof g[0]&&(this._makeRange(g, A, t), g[0] !==A&&this.changedOptions.push( {
                                        path:t, value:Number(A)
                                    }

                                ))
                        }
                    }

                    , {
                        key:"_update", value:function(g, A) {
                            var t=this._constructOptions(g, A); this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange", t), this.initialized= !0, this.parent.setOptions(t)
                        }
                    }

                    , {
                        key:"_constructOptions", value:function(g, A) {
                            var t=arguments.length>2&&void 0 !==arguments[2]?arguments[2]: {}

                            , e=t; g="false" !==(g="true"===g||g)&&g; for(var C=0; C<A.length; C++)"global" !==A[C]&&(void 0===e[A[C]]&&(e[A[C]]= {}

                                ), C !==A.length-1?e=e[A[C]]:e[A[C]]=g); return t
                        }
                    }

                    , {
                        key:"_printOptions", value:function() {
                            for(var g=this.getOptions(); this.optionsContainer.firstChild; )this.optionsContainer.removeChild(this.optionsContainer.firstChild); this.optionsContainer.appendChild(Mh("pre", "const options = "+Ws(g, null, 2)))
                        }
                    }

                    , {
                        key:"getOptions", value:function() {
                            for(var g= {}

                                , A=0; A<this.changedOptions.length; A++)this._constructOptions(this.changedOptions[A].value, this.changedOptions[A].path, g); return g
                        }
                    }

                    ]), g
            }

            (), Gh=$d, Lh=function() {
                function g(A, t) {
                    So(this, g), this.container=A, this.overflowMethod=t||"cap", this.x=0, this.y=0, this.padding=5, this.hidden= !1, this.frame=document.createElement("div"), this.frame.className="vis-tooltip", this.container.appendChild(this.frame)
                }

                return Lo(g, [ {
                        key:"setPosition", value:function(g, A) {
                            this.x=vs(g), this.y=vs(A)
                        }
                    }

                    , {
                        key:"setText", value:function(g) {
                            if(g instanceof Element) {
                                for(; this.frame.firstChild; )this.frame.removeChild(this.frame.firstChild); this.frame.appendChild(g)
                            }

                            else this.frame.innerText=g
                        }
                    }

                    , {
                        key:"show", value:function(g) {
                            if(void 0===g&&(g= !0),  !0===g) {
                                var A=this.frame.clientHeight, t=this.frame.clientWidth, e=this.frame.parentNode.clientHeight, C=this.frame.parentNode.clientWidth, I=0, i=0; if("flip"==this.overflowMethod) {
                                    var o= !1, n= !0; this.y-A<this.padding&&(n= !1), this.x+t>C-this.padding&&(o= !0), I=o?this.x-t:this.x, i=n?this.y-A:this.y
                                }

                                else(i=this.y-A)+A+this.padding>e&&(i=e-A-this.padding), i<this.padding&&(i=this.padding), (I=this.x)+t+this.padding>C&&(I=C-t-this.padding), I<this.padding&&(I=this.padding); this.frame.style.left=I+"px", this.frame.style.top=i+"px", this.frame.style.visibility="visible", this.hidden= !1
                            }

                            else this.hide()
                        }
                    }

                    , {
                        key:"hide", value:function() {
                            this.hidden= !0, this.frame.style.left="0", this.frame.style.top="0", this.frame.style.visibility="hidden"
                        }
                    }

                    , {
                        key:"destroy", value:function() {
                            this.frame.parentNode.removeChild(this.frame)
                        }
                    }

                    ]), g
            }

            (), jh=Zh, Vh=function() {
                function g() {
                    So(this, g)
                }

                return Lo(g, null, [ {
                        key:"validate", value:function(A, t, e) {
                            zh= !1, Bh=t; var C=t; return void 0 !==e&&(C=t[e]), g.parse(A, C, []), zh
                        }
                    }

                    , {
                        key:"parse", value:function(A, t, e) {
                            for(var C in A)Object.prototype.hasOwnProperty.call(A, C)&&g.check(C, A, t, e)
                        }
                    }

                    , {
                        key:"check", value:function(A, t, e, C) {
                            if(void 0 !==e[A]||void 0 !==e.__any__) {
                                var I=A, i= !0; void 0===e[A]&&void 0 !==e.__any__&&(I="__any__", i="object"===g.getType(t[A])); var o=e[I]; i&&void 0 !==o.__type__&&(o=o.__type__), g.checkFields(A, t, e, I, o, C)
                            }

                            else g.getSuggestion(A, e, C)
                        }
                    }

                    , {
                        key:"checkFields", value:function(A, t, e, C, I, i) {
                            var o=function(t) {
                                console.error("%c"+t+g.printLocation(i, A), Zh)
                            }

                            , n=g.getType(t[A]), r=I[n]; void 0 !==r?"array"===g.getType(r)&&-1===Ts(r).call(r, t[A])?(o('Invalid option detected in "'+A+'". Allowed values are:'+g.print(r)+' not "'+t[A]+'". '), zh= !0):"object"===n&&"__any__" !==C&&(i=hh(i, A), g.parse(t[A], e[C], i)):void 0===I.any&&(o('Invalid type received for "'+A+'". Expected: '+g.print(Xn(I))+". Received ["+n+'] "'+t[A]+'"'), zh= !0)
                        }
                    }

                    , {
                        key:"getType", value:function(g) {
                            var A=zn(g); return"object"===A?null===g?"null":g instanceof Boolean?"boolean":g instanceof Number?"number":g instanceof String?"string":Yn(g)?"array":g instanceof Date?"date":void 0 !==g.nodeType?"dom": !0===g._isAMomentObject?"moment":"object":"number"===A?"number":"boolean"===A?"boolean":"string"===A?"string":void 0===A?"undefined":A
                        }
                    }

                    , {
                        key:"getSuggestion", value:function(A, t, e) {
                            var C, I=g.findInOptions(A, t, e,  !1), i=g.findInOptions(A, Bh, [],  !0); C=void 0 !==I.indexMatch?" in "+g.printLocation(I.path, A, "")+'Perhaps it was incomplete? Did you mean: "'+I.indexMatch+'"?\n\n':i.distance<=4&&I.distance>i.distance?" in "+g.printLocation(I.path, A, "")+"Perhaps it was misplaced? Matching option found at: "+g.printLocation(i.path, i.closestMatch, ""):I.distance<=8?'. Did you mean "'+I.closestMatch+'"?'+g.printLocation(I.path, A):". Did you mean one of these: "+g.print(Xn(t))+g.printLocation(e, A), console.error('%cUnknown option detected: "'+A+'"'+C, Zh), zh= !0
                        }
                    }

                    , {
                        key:"findInOptions", value:function(A, t, e) {
                            var C=arguments.length>3&&void 0 !==arguments[3]&&arguments[3], I=1e9, i="", o=[], n=A.toLowerCase(), r=void 0; for(var s in t) {
                                var a=void 0; if(void 0 !==t[s].__type__&& !0===C) {
                                    var d=g.findInOptions(A, t[s], hh(e, s)); I>d.distance&&(i=d.closestMatch, o=d.path, I=d.distance, r=d.indexMatch)
                                }

                                else {
                                    var h; -1 !==Ts(h=s.toLowerCase()).call(h, n)&&(r=s), I>(a=g.levenshteinDistance(A, s))&&(i=s, o=lh(e), I=a)
                                }
                            }

                            return {
                                closestMatch:i, path:o, distance:I, indexMatch:r
                            }
                        }
                    }

                    , {
                        key:"printLocation", value:function(g, A) {
                            for(var t=arguments.length>2&&void 0 !==arguments[2]?arguments[2]:"Problem value found at: \n", e="\n\n"+t+"options = {\n", C=0; C<g.length; C++) {
                                for(var I=0; I<C+1; I++)e+="  "; e+=g[C]+": {\n"
                            }

                            for(var i=0; i<g.length+1; i++)e+="  "; e+=A+"\n"; for(var o=0; o<g.length+1; o++) {
                                for(var n=0; n<g.length-o; n++)e+="  "; e+="}\n"
                            }

                            return e+"\n\n"
                        }
                    }

                    , {
                        key:"print", value:function(g) {
                            return Ws(g).replace(/(")|(\[)|(\])|(,"__type__")/g,"").replace(/(,)/g,", ")}},{key:"levenshteinDistance",value:function(g,A){if(0===g.length)return A.length;if(0===A.length)return g.length;var t,e,C=[];for(t=0;t<=A.length;t++)C[t]=[t];for(e=0;e<=g.length;e++)C[0][e]=e;for(t=1;t<=A.length;t++)for(e=1;e<=g.length;e++)A.charAt(t-1)==g.charAt(e-1)?C[t][e]=C[t-1][e-1]:C[t][e]=Math.min(C[t-1][e-1]+1,Math.min(C[t][e-1]+1,C[t-1][e]+1));return C[A.length][g.length]}}]),g}();function Yh(g){return Jh=g,function(){var g={};qh=0,void($h=Jh.charAt(0)),sl(),"strict"===gl&&(g.strict=!0,sl());"graph"!==gl&&"digraph"!==gl||(g.type=gl,sl());Al===Hh&&(g.id=gl,sl());if(" {
                                        "!=gl)throw ul("Angle bracket {
                                            expected");if(sl(),al(g),"
                                        }

                                        "!=gl)throw ul("Angle bracket
                                    }

                                    expected");if(sl(),""!==gl)throw ul("End of file expected");return sl(),delete g.node,delete g.edge,delete g.graph,g}()}var Wh={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},Qh=Bs(Wh);Qh.color="color.color",Qh.style="dashes";var Uh=0,_h=1,Hh=2,Kh=3,Xh={" {
                                        ":!0,"
                                    }

                                    ":!0,"[":!0,"]":!0,"; ":!0,"=":!0,", ":!0,"->":!0,"--":!0},Jh="",qh=0,$h="",gl="",Al=Uh;function tl(){qh++,$h=Jh.charAt(qh)}function el(){return Jh.charAt(qh+1)}function Cl(g){var A=g.charCodeAt(0);return A<47?35===A||46===A:A<59?A>47:A<91?A>64:A<96?95===A:A<123&&A>96}function Il(g,A){if(g||(g={}),A)for(var t in A)A.hasOwnProperty(t)&&(g[t]=A[t]);return g}function il(g,A,t){for(var e=A.split("."),C=g;e.length;){var I=e.shift();e.length?(C[I]||(C[I]={}),C=C[I]):C[I]=t}}function ol(g,A){for(var t,e,C=null,I=[g],i=g;i.parent;)I.push(i.parent),i=i.parent;if(i.nodes)for(t=0,e=i.nodes.length;t<e;t++)if(A.id===i.nodes[t].id){C=i.nodes[t];break}for(C||(C={id:A.id},g.node&&(C.attr=Il(C.attr,g.node))),t=I.length-1;t>=0;t--){var o,n=I[t];n.nodes||(n.nodes=[]),-1===Ts(o=n.nodes).call(o,C)&&n.nodes.push(C)}A.attr&&(C.attr=Il(C.attr,A.attr))}function nl(g,A){if(g.edges||(g.edges=[]),g.edges.push(A),g.edge){var t=Il({},g.edge);A.attr=Il(t,A.attr)}}function rl(g,A,t,e,C){var I={from:A,to:t,type:e};return g.edge&&(I.attr=Il({},g.edge)),I.attr=Il(I.attr||{},C),null!=C&&C.hasOwnProperty("arrows")&&null!=C.arrows&&(I.arrows={to:{enabled:!0,type:C.arrows.type}},C.arrows=null),I}function sl(){for(Al=Uh,gl="";""===$h||"\t"===$h||"\n"===$h||"\r"===$h;)tl();do{var g=!1;if("#"===$h){for(var A=qh-1;""===Jh.charAt(A)||"\t"===Jh.charAt(A);)A--;if("\n"===Jh.charAt(A)||""===Jh.charAt(A)){for(;""!=$h&&"\n"!=$h;)tl();g=!0}}if("/"===$h&&"/"===el()){for(;""!=$h&&"\n"!=$h;)tl();g=!0}if("/"===$h&&"*"===el()){for(;""!=$h;){if("*"===$h&&"/"===el()){tl(),tl();break}tl()}g=!0}for(;""===$h||"\t"===$h||"\n"===$h||"\r"===$h;)tl()}while(g);if(""!==$h){var t=$h+el();if(Xh[t])return Al=_h,gl=t,tl(),void tl();if(Xh[$h])return Al=_h,gl=$h,void tl();if(Cl($h)||"-"===$h){for(gl+=$h,tl();Cl($h);)gl+=$h,tl();return"false"===gl?gl=!1:"true"===gl?gl=!0:isNaN(Number(gl))||(gl=Number(gl)),void(Al=Hh)}if('"'===$h){for(tl();""!=$h&&('"'!=$h||'"'===$h&&'"'===el());)'"'===$h?(gl+=$h,tl()):"\\"===$h&&"n"===el()?(gl+="\n",tl()):gl+=$h,tl();if('"'!=$h)throw ul('End of string "expected');return tl(),void(Al=Hh)}for(Al=Kh;""!=$h;)gl+=$h,tl();throw new SyntaxError('Syntax error in part "'+pl(gl,30)+'"')}Al=_h}function al(g){for(;""!==gl&&"}"!=gl;)dl(g),";"===gl&&sl()}function dl(g){var A=hl(g);if(A)ll(g,A);else if(!function(g){if("node"===gl)return sl(),g.node=cl(),"node";if("edge"===gl)return sl(),g.edge=cl(),"edge";if("graph"===gl)return sl(),g.graph=cl(),"graph";return null}(g)){if(Al!=Hh)throw ul("Identifier expected");var t=gl;if(sl(),"="===gl){if(sl(),Al!=Hh)throw ul("Identifier expected");g[t]=gl,sl()}else!function(g,A){var t={id:A},e=cl();e&&(t.attr=e);ol(g,t),ll(g,A)}(g,t)}}function hl(g){var A=null;if("subgraph"===gl&&((A={}).type="subgraph",sl(),Al===Hh&&(A.id=gl,sl())),"{"===gl){if(sl(),A||(A={}),A.parent=g,A.node=g.node,A.edge=g.edge,A.graph=g.graph,al(A),"}"!=gl)throw ul("Angle bracket } expected");sl(),delete A.node,delete A.edge,delete A.graph,delete A.parent,g.subgraphs||(g.subgraphs=[]),g.subgraphs.push(A)}return A}function ll(g,A){for(;"->"===gl||"--"===gl;){var t,e=gl;sl();var C=hl(g);if(C)t=C;else{if(Al!=Hh)throw ul("Identifier or subgraph expected");ol(g,{id:t=gl}),sl()}nl(g,rl(g,A,t,e,cl())),A=t}}function cl(){for(var g,A,t=null,e={dashed:!0,solid:!1,dotted:[1,5]},C={dot:"circle",box:"box",crow:"crow",curve:"curve",icurve:"inv_curve",normal:"triangle",inv:"inv_triangle",diamond:"diamond",tee:"bar",vee:"vee"},I=new Array,i=new Array;"["===gl;){for(sl(),t={};""!==gl&&"]"!=gl;){if(Al!=Hh)throw ul("Attribute name expected");var o=gl;if(sl(),"="!=gl)throw ul("Equal sign = expected");if(sl(),Al!=Hh)throw ul("Attribute value expected");var n=gl;"style"===o&&(n=e[n]),"arrowhead"===o&&(o="arrows",n={to:{enabled:!0,type:C[n]}}),"arrowtail"===o&&(o="arrows",n={from:{enabled:!0,type:C[n]}}),I.push({attr:t,name:o,value:n}),i.push(o),sl(),","==gl&&sl()}if("]"!=gl)throw ul("Bracket ] expected");sl()}if(Yr(i).call(i,"dir")){var r={arrows:{}};for(g=0;g<I.length;g++)if("arrows"===I[g].name)if(null!=I[g].value.to)r.arrows.to=g;else{if(null==I[g].value.from)throw ul("Invalid value of arrows");r.arrows.from=g}else"dir"===I[g].name&&(r.dir=g);var s,a,d=I[r.dir].value;if(!Yr(i).call(i,"arrows"))if("both"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),r.arrows.to=I.length-1,I.push({attr:I[r.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),r.arrows.from=I.length-1;else if("forward"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),r.arrows.to=I.length-1;else if("back"===d)I.push({attr:I[r.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),r.arrows.from=I.length-1;else{if("none"!==d)throw ul('Invalid dir type "'+d+'"');I.push({attr:I[r.dir].attr,name:"arrows",value:""}),r.arrows.to=I.length-1}if("both"===d)r.arrows.to&&r.arrows.from?(a=I[r.arrows.to].value.to.type,s=I[r.arrows.from].value.from.type,I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}},Or(I).call(I,r.arrows.from,1)):r.arrows.to?(a=I[r.arrows.to].value.to.type,s="arrow",I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="arrow",s=I[r.arrows.from].value.from.type,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}});else if("back"===d)r.arrows.to&&r.arrows.from?(a="",s=I[r.arrows.from].value.from.type,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.to?(a="",s="arrow",r.arrows.from=r.arrows.to,I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="",s=I[r.arrows.from].value.from.type,I[r.arrows.to]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}),I[r.arrows.from]={attr:I[r.arrows.from].attr,name:I[r.arrows.from].name,value:{from:{enabled:!0,type:I[r.arrows.from].value.from.type}}};else if("none"===d){var h;I[h=r.arrows.to?r.arrows.to:r.arrows.from]={attr:I[h].attr,name:I[h].name,value:""}}else{if("forward"!==d)throw ul('Invalid dir type "'+d+'"');r.arrows.to&&r.arrows.from||r.arrows.to?(a=I[r.arrows.to].value.to.type,s="",I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}):r.arrows.from&&(a="arrow",s="",r.arrows.to=r.arrows.from,I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:a},from:{enabled:!0,type:s}}}),I[r.arrows.to]={attr:I[r.arrows.to].attr,name:I[r.arrows.to].name,value:{to:{enabled:!0,type:I[r.arrows.to].value.to.type}}}}Or(I).call(I,r.dir,1)}if(Yr(i).call(i,"penwidth")){var l=[];for(A=I.length,g=0;g<A;g++)"width"!==I[g].name&&("penwidth"===I[g].name&&(I[g].name="width"),l.push(I[g]));I=l}for(A=I.length,g=0;g<A;g++)il(I[g].attr,I[g].name,I[g].value);return t}function ul(g){return new SyntaxError(g+', got "'+pl(gl,30)+'"(char '+qh+")")}function pl(g,A){return g.length<=A?g:g.substr(0,27)+"..."}function fl(g,A,t){for(var e=A.split("."),C=e.pop(),I=g,i=0;i<e.length;i++){var o=e[i];o in I||(I[o]={}),I=I[o]}return I[C]=t,g}function vl(g,A){var t={};for(var e in g)if(g.hasOwnProperty(e)){var C=A[e];Yn(C)?ir(C).call(C,(function(A){fl(t,A,g[e])})):fl(t,"string"==typeof C?C:e,g[e])}return t}function yl(g){var A,t=Yh(g),e={nodes:[],edges:[],options:{}};t.nodes&&ir(A=t.nodes).call(A,(function(g){var A={id:g.id,label:String(g.label||g.id)};Il(A,vl(g.attr,Wh)),A.image&&(A.shape="image"),e.nodes.push(A)}));if(t.edges){var C,I=function(g){var A={from:g.from,to:g.to};return Il(A,vl(g.attr,Qh)),null==A.arrows&&"->"===g.type&&(A.arrows="to"),A};ir(C=t.edges).call(C,(function(g){var A,t,C,i,o,n,r;(A=g.from instanceof Object?g.from.nodes:{id:g.from},t=g.to instanceof Object?g.to.nodes:{id:g.to},g.from instanceof Object&&g.from.edges)&&ir(C=g.from.edges).call(C,(function(g){var A=I(g);e.edges.push(A)}));(o=t,n=function(A,t){var C=rl(e,A.id,t.id,g.type,g.attr),i=I(C);e.edges.push(i)},Yn(i=A)?ir(i).call(i,(function(g){Yn(o)?ir(o).call(o,(function(A){n(g,A)})):n(g,o)})):Yn(o)?ir(o).call(o,(function(g){n(i,g)})):n(i,o),g.to instanceof Object&&g.to.edges)&&ir(r=g.to.edges).call(r,(function(g){var A=I(g);e.edges.push(A)}))}))}return t.attr&&(e.options=t.attr),e}var ml=Object.freeze({__proto__:null,parseDOT:Yh,DOTToGraph:yl});function bl(g,A){var t,e={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};null!=A&&(null!=A.fixed&&(e.nodes.fixed=A.fixed),null!=A.parseColor&&(e.nodes.parseColor=A.parseColor),null!=A.inheritColor&&(e.edges.inheritColor=A.inheritColor));var C=g.edges,I=_n(C).call(C,(function(g){var A={from:g.source,id:g.id,to:g.target};return null!=g.attributes&&(A.attributes=g.attributes),null!=g.label&&(A.label=g.label),null!=g.attributes&&null!=g.attributes.title&&(A.title=g.attributes.title),"Directed"===g.type&&(A.arrows="to"),g.color&&!1===e.edges.inheritColor&&(A.color=g.color),A}));return{nodes:_n(t=g.nodes).call(t,(function(g){var A={id:g.id,fixed:e.nodes.fixed&&null!=g.x&&null!=g.y};return null!=g.attributes&&(A.attributes=g.attributes),null!=g.label&&(A.label=g.label),null!=g.size&&(A.size=g.size),null!=g.attributes&&null!=g.attributes.title&&(A.title=g.attributes.title),null!=g.title&&(A.title=g.title),null!=g.x&&(A.x=g.x),null!=g.y&&(A.y=g.y),null!=g.color&&(!0===e.nodes.parseColor?A.color=g.color:A.color={background:g.color,border:g.color,highlight:{background:g.color,border:g.color},hover:{background:g.color,border:g.color}}),A})),edges:I}}var wl=Object.freeze({__proto__:null,parseGephi:bl}),kl=Object.freeze({__proto__:null,en:{addDescription:"Click in an empty space to place a new node.",addEdge:"Add Edge",addNode:"Add Node",back:"Back",close:"Close",createEdgeError:"Cannot link edges to a cluster.",del:"Delete selected",deleteClusterError:"Clusters cannot be deleted.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",edit:"Edit",editClusterError:"Clusters cannot be edited.",editEdge:"Edit Edge",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",editNode:"Edit Node"},de:{addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",addEdge:"Kante hinzufügen",addNode:"Knoten hinzufügen",back:"Zurück",close:"Schließen",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",del:"Lösche Auswahl",deleteClusterError:"Cluster können nicht gelöscht werden.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",edit:"Editieren",editClusterError:"Cluster können nicht editiert werden.",editEdge:"Kante editieren",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",editNode:"Knoten editieren"},es:{addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",addEdge:"Añadir arista",addNode:"Añadir nodo",back:"Atrás",close:"Cerrar",createEdgeError:"No se puede conectar una arista a un grupo.",del:"Eliminar selección",deleteClusterError:"No es posible eliminar grupos.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",edit:"Editar",editClusterError:"No es posible editar grupos.",editEdge:"Editar arista",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",editNode:"Editar nodo"},it:{addDescription:"Clicca per aggiungere un nuovo nodo",addEdge:"Aggiungi un vertice",addNode:"Aggiungi un nodo",back:"Indietro",close:"Chiudere",createEdgeError:"Non si possono collegare vertici ad un cluster",del:"Cancella la selezione",deleteClusterError:"I cluster non possono essere cancellati",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",edit:"Modifica",editClusterError:"I clusters non possono essere modificati.",editEdge:"Modifica il vertice",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",editNode:"Modifica il nodo"},nl:{addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",addEdge:"Link toevoegen",addNode:"Node toevoegen",back:"Terug",close:"Sluiten",createEdgeError:"Kan geen link maken naar een cluster.",del:"Selectie verwijderen",deleteClusterError:"Clusters kunnen niet worden verwijderd.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",edit:"Wijzigen",editClusterError:"Clusters kunnen niet worden aangepast.",editEdge:"Link wijzigen",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",editNode:"Node wijzigen"},pt:{addDescription:"Clique em um espaço em branco para adicionar um novo nó",addEdge:"Adicionar aresta",addNode:"Adicionar nó",back:"Voltar",close:"Fechar",createEdgeError:"Não foi possível linkar arestas a um cluster.",del:"Remover selecionado",deleteClusterError:"Clusters não puderam ser removidos.",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",edit:"Editar",editClusterError:"Clusters não puderam ser editados.",editEdge:"Editar aresta",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",editNode:"Editar nó"},ru:{addDescription:"Кликните в свободное место, чтобы добавить новый узел.",addEdge:"Добавить ребро",addNode:"Добавить узел",back:"Назад",close:"Закрывать",createEdgeError:"Невозможно соединить ребра в кластер.",del:"Удалить выбранное",deleteClusterError:"Кластеры не могут быть удалены",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",edit:"Редактировать",editClusterError:"Кластеры недоступны для редактирования.",editEdge:"Редактировать ребро",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",editNode:"Редактировать узел"},cn:{addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",addNode:"添加节点",back:"返回",close:"關閉",createEdgeError:"无法将连接线连接到群集。",del:"删除选定",deleteClusterError:"无法删除群集。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",edit:"编辑",editClusterError:"无法编辑群集。",editEdge:"编辑连接线",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",editNode:"编辑节点"},uk:{addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",addEdge:"Додати край",addNode:"Додати вузол",back:"Назад",close:"Закрити",createEdgeError:"Не можливо об'єднати краї в групу.",del:"Видалити обране",deleteClusterError:"Групи не можуть бути видалені.",edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",edit:"Редагувати",editClusterError:"Групи недоступні для редагування.",editEdge:"Редагувати край",editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",editNode:"Редагувати вузол"},fr:{addDescription:"Cliquez dans un endroit vide pour placer un nœud.",addEdge:"Ajouter un lien",addNode:"Ajouter un nœud",back:"Retour",close:"Fermer",createEdgeError:"Impossible de créer un lien vers un cluster.",del:"Effacer la sélection",deleteClusterError:"Les clusters ne peuvent pas être effacés.",edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",edit:"Éditer",editClusterError:"Les clusters ne peuvent pas être édités.",editEdge:"Éditer le lien",editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",editNode:"Éditer le nœud"},cs:{addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",addEdge:"Přidat hranu",addNode:"Přidat vrchol",back:"Zpět",close:"Zavřít",createEdgeError:"Nelze připojit hranu ke shluku.",del:"Smazat výběr",deleteClusterError:"Nelze mazat shluky.",edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",edit:"Upravit",editClusterError:"Nelze upravovat shluky.",editEdge:"Upravit hranu",editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",editNode:"Upravit vrchol"}});var xl=function(){function g(){So(this,g),this.NUM_ITERATIONS=4,this.image=new Image,this.canvas=document.createElement("canvas")}return Lo(g,[{key:"init",value:function(){if(!this.initialized()){this.src=this.image.src;var g=this.image.width,A=this.image.height;this.width=g,this.height=A;var t=Math.floor(A/2),e=Math.floor(A/4),C=Math.floor(A/8),I=Math.floor(A/16),i=Math.floor(g/2),o=Math.floor(g/4),n=Math.floor(g/8),r=Math.floor(g/16);this.canvas.width=3*o,this.canvas.height=t,this.coordinates=[[0,0,i,t],[i,0,o,e],[i,e,n,C],[5*n,e,r,I]],this._fillMipMap()}}},{key:"initialized",value:function(){return void 0!==this.coordinates}},{key:"_fillMipMap",value:function(){var g=this.canvas.getContext("2d"),A=this.coordinates[0];g.drawImage(this.image,A[0],A[1],A[2],A[3]);for(var t=1;t<this.NUM_ITERATIONS;t++){var e=this.coordinates[t-1],C=this.coordinates[t];g.drawImage(this.canvas,e[0],e[1],e[2],e[3],C[0],C[1],C[2],C[3])}}},{key:"drawImageAtPosition",value:function(g,A,t,e,C,I){if(this.initialized())if(A>2){A*=.5;for(var i=0;A>2&&i<this.NUM_ITERATIONS;)A*=.5,i+=1;i>=this.NUM_ITERATIONS&&(i=this.NUM_ITERATIONS-1);var o=this.coordinates[i];g.drawImage(this.canvas,o[0],o[1],o[2],o[3],t,e,C,I)}else g.drawImage(this.image,t,e,C,I)}}]),g}(),El=function(){function g(A){So(this,g),this.images={},this.imageBroken={},this.callback=A}return Lo(g,[{key:"_tryloadBrokenUrl",value:function(g,A,t){void 0!==g&&void 0!==t&&(void 0!==A?(t.image.onerror=function(){console.error("Could not load brokenImage:",A)},t.image.src=A):console.warn("No broken url image defined"))}},{key:"_redrawWithImage",value:function(g){this.callback&&this.callback(g)}},{key:"load",value:function(g,A){var t=this,e=this.images[g];if(e)return e;var C=new xl;return this.images[g]=C,C.image.onload=function(){t._fixImageCoordinates(C.image),C.init(),t._redrawWithImage(C)},C.image.onerror=function(){console.error("Could not load image:",g),t._tryloadBrokenUrl(g,A,C)},C.image.src=g,C}},{key:"_fixImageCoordinates",value:function(g){0===g.width&&(document.body.appendChild(g),g.width=g.offsetWidth,g.height=g.offsetHeight,document.body.removeChild(g))}}]),g}(),Ol={exports:{}},Tl=!I((function(){return Object.isExtensible(Object.preventExtensions({}))})),Dl=aA,Nl=OA,Rl=w,Pl=gg,Ml=Ug.f,Bl=kI,zl=OI,Zl=Tl,Sl=!1,Fl=eg("meta"),Gl=0,Ll=Object.isExtensible||function(){return!0},jl=function(g){Ml(g,Fl,{value:{objectID:"O"+Gl++,weakData:{}}})},Vl=Ol.exports={enable:function(){Vl.enable=function(){},Sl=!0;var g=Bl.f,A=[].splice,t={};t[Fl]=1,g(t).length&&(Bl.f=function(t){for(var e=g(t),C=0,I=e.length;C<I;C++)if(e[C]===Fl){A.call(e,C,1);break}return e},Dl({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:zl.f}))},fastKey:function(g,A){if(!Rl(g))return"symbol"==typeof g?g:("string"==typeof g?"S":"P")+g;if(!Pl(g,Fl)){if(!Ll(g))return"F";if(!A)return"E";jl(g)}return g[Fl].objectID},getWeakData:function(g,A){if(!Pl(g,Fl)){if(!Ll(g))return!0;if(!A)return!1;jl(g)}return g[Fl].weakData},onFreeze:function(g){return Zl&&Sl&&Ll(g)&&!Pl(g,Fl)&&jl(g),g}};Nl[Fl]=!0;var Yl=Hg,Wl=zC,Ql=pA,Ul=Qg,_l=YC,Hl=DC,Kl=function(g,A){this.stopped=g,this.result=A},Xl=function(g,A,t){var e,C,I,i,o,n,r,s=t&&t.that,a=!(!t||!t.AS_ENTRIES),d=!(!t||!t.IS_ITERATOR),h=!(!t||!t.INTERRUPTED),l=Ul(A,s,1+a+h),c=function(g){return e&&Hl(e),new Kl(!0,g)},u=function(g){return a?(Yl(g),h?l(g[0],g[1],c):l(g[0],g[1])):h?l(g,c):l(g)};if(d)e=g;else{if("function"!=typeof(C=_l(g)))throw TypeError("Target is not iterable");if(Wl(C)){for(I=0,i=Ql(g.length);i>I;I++)if((o=u(g[I]))&&o instanceof Kl)return o;return new Kl(!1)}e=C.call(g)}for(n=e.next;!(r=n.call(e)).done;){try{o=u(r.value)}catch(g){throw Hl(e),g}if("object"==typeof o&&o&&o instanceof Kl)return o}return new Kl(!1)},Jl=function(g,A,t){if(!(g instanceof A))throw TypeError("Incorrect "+(t?t+" ":"")+"invocation");return g},ql=aA,$l=e,gc=Ol.exports,Ac=I,tc=tA,ec=Xl,Cc=Jl,Ic=w,ic=Ue,oc=Ug.f,nc=JI.forEach,rc=i,sc=Jt.set,ac=Jt.getterFor,dc=function(g,A,t){var e,C=-1!==g.indexOf("Map"),I=-1!==g.indexOf("Weak"),i=C?"set":"add",o=$l[g],n=o&&o.prototype,r={};if(rc&&"function"==typeof o&&(I||n.forEach&&!Ac((function(){(new o).entries().next()})))){e=A((function(A,t){sc(Cc(A,e,g),{type:g,collection:new o}),null!=t&&ec(t,A[i],{that:A,AS_ENTRIES:C})}));var s=ac(g);nc(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(g){var A="add"==g||"set"==g;!(g in n)||I&&"clear"==g||tc(e.prototype,g,(function(t,e){var C=s(this).collection;if(!A&&I&&!Ic(t))return"get"==g&&void 0;var i=C[g](0===t?0:t,e);return A?this:i}))})),I||oc(e.prototype,"size",{configurable:!0,get:function(){return s(this).collection.size}})}else e=t.getConstructor(A,g,C,i),gc.enable();return ic(e,g,!1,!0),r[g]=e,ql({global:!0,forced:!0},r),I||t.setStrong(e,g,C),e},hc=IC,lc=function(g,A,t){for(var e in A)t&&t.unsafe&&g[e]?g[e]=A[e]:hc(g,e,A[e],t);return g},cc=T,uc=Ug,pc=i,fc=hg("species"),vc=Ug.f,yc=Ne,mc=lc,bc=Qg,wc=Jl,kc=Xl,xc=yC,Ec=function(g){var A=cc(g),t=uc.f;pc&&A&&!A[fc]&&t(A,fc,{configurable:!0,get:function(){return this}})},Oc=i,Tc=Ol.exports.fastKey,Dc=Jt.set,Nc=Jt.getterFor,Rc={getConstructor:function(g,A,t,e){var C=g((function(g,I){wc(g,C,A),Dc(g,{type:A,index:yc(null),first:void 0,last:void 0,size:0}),Oc||(g.size=0),null!=I&&kc(I,g[e],{that:g,AS_ENTRIES:t})})),I=Nc(A),i=function(g,A,t){var e,C,i=I(g),n=o(g,A);return n?n.value=t:(i.last=n={index:C=Tc(A,!0),key:A,value:t,previous:e=i.last,next:void 0,removed:!1},i.first||(i.first=n),e&&(e.next=n),Oc?i.size++:g.size++,"F"!==C&&(i.index[C]=n)),g},o=function(g,A){var t,e=I(g),C=Tc(A);if("F"!==C)return e.index[C];for(t=e.first;t;t=t.next)if(t.key==A)return t};return mc(C.prototype,{clear:function(){for(var g=I(this),A=g.index,t=g.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete A[t.index],t=t.next;g.first=g.last=void 0,Oc?g.size=0:this.size=0},delete:function(g){var A=this,t=I(A),e=o(A,g);if(e){var C=e.next,i=e.previous;delete t.index[e.index],e.removed=!0,i&&(i.next=C),C&&(C.previous=i),t.first==e&&(t.first=C),t.last==e&&(t.last=i),Oc?t.size--:A.size--}return!!e},forEach:function(g){for(var A,t=I(this),e=bc(g,arguments.length>1?arguments[1]:void 0,3);A=A?A.next:t.first;)for(e(A.value,A.key,this);A&&A.removed;)A=A.previous},has:function(g){return!!o(this,g)}}),mc(C.prototype,t?{get:function(g){var A=o(this,g);return A&&A.value},set:function(g,A){return i(this,0===g?0:g,A)}}:{add:function(g){return i(this,g=0===g?0:g,g)}}),Oc&&vc(C.prototype,"size",{get:function(){return I(this).size}}),C},setStrong:function(g,A,t){var e=A+" Iterator",C=Nc(A),I=Nc(e);xc(g,A,(function(g,A){Dc(this,{type:e,target:g,state:C(g),kind:A,last:void 0})}),(function(){for(var g=I(this),A=g.kind,t=g.last;t&&t.removed;)t=t.previous;return g.target&&(g.last=t=t?t.next:g.state.first)?"keys"==A?{value:t.key,done:!1}:"values"==A?{value:t.value,done:!1}:{value:[t.key,t.value],done:!1}:(g.target=void 0,{value:void 0,done:!0})}),t?"entries":"values",!t,!0),Ec(A)}};dc("Map",(function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}}),Rc);var Pc=k.Map,Mc=function(){function g(){So(this,g),this.clear(),this._defaultIndex=0,this._groupIndex=0,this._defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},HA(this.options,this.defaultOptions)}return Lo(g,[{key:"setOptions",value:function(g){var A=["useDefaultGroups"];if(void 0!==g)for(var t in g)if(Object.prototype.hasOwnProperty.call(g,t)&&-1===Ts(A).call(A,t)){var e=g[t];this.add(t,e)}}},{key:"clear",value:function(){this._groups=new Pc,this._groupNames=[]}},{key:"get",value:function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this._groups.get(g);if(void 0===t&&A)if(!1===this.options.useDefaultGroups&&this._groupNames.length>0){var e=this._groupIndex%this._groupNames.length;++this._groupIndex,(t={}).color=this._groups.get(this._groupNames[e]),this._groups.set(g,t)}else{var C=this._defaultIndex%this._defaultGroups.length;this._defaultIndex++,(t={}).color=this._defaultGroups[C],this._groups.set(g,t)}return t}},{key:"add",value:function(g,A){return this._groups.has(g)||this._groupNames.push(g),this._groups.set(g,A),A}}]),g}();aA({target:"Number",stat:!0},{isNaN:function(g){return g!=g}});var Bc=k.Number.isNaN,zc=e.isFinite;aA({target:"Number",stat:!0},{isFinite:Number.isFinite||function(g){return"number"==typeof g&&zc(g)}});var Zc=k.Number.isFinite,Sc=JI.some;aA({target:"Array",proto:!0,forced:!$n("some")},{some:function(g){return Sc(this,g,arguments.length>1?arguments[1]:void 0)}});var Fc=tt("Array").some,Gc=Array.prototype,Lc=function(g){var A=g.some;return g===Gc||g instanceof Array&&A===Gc.some?Fc:A},jc=aA,Vc=Yg,Yc=Hg,Wc=w,Qc=Ne,Uc=gt,_c=I,Hc=T("Reflect","construct"),Kc=_c((function(){function g(){}return!(Hc((function(){}),[],g)instanceof g)})),Xc=!_c((function(){Hc((function(){}))})),Jc=Kc||Xc;jc({target:"Reflect",stat:!0,forced:Jc,sham:Jc},{construct:function(g,A){Vc(g),Yc(A);var t=arguments.length<3?g:Vc(arguments[2]);if(Xc&&!Kc)return Hc(g,A,t);if(g==t){switch(A.length){case 0:return new g;case 1:return new g(A[0]);case 2:return new g(A[0],A[1]);case 3:return new g(A[0],A[1],A[2]);case 4:return new g(A[0],A[1],A[2],A[3])}var e=[null];return e.push.apply(e,A),new(Uc.apply(g,e))}var C=t.prototype,I=Qc(Wc(C)?C:Object.prototype),i=Function.apply.call(g,I,A);return Wc(i)?i:I}});var qc=k.Reflect.construct;function $c(g){if(void 0===g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}var gu=Ms;aA({target:"Object",stat:!0},{setPrototypeOf:eC});var Au=k.Object.setPrototypeOf;function tu(g,A){return(tu=Au||function(g,A){return g.__proto__=A,g})(g,A)}function eu(g,A){if("function"!=typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function");g.prototype=gu(A&&A.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),A&&tu(g,A)}function Cu(g,A){if(A&&("object"===zn(A)||"function"==typeof A))return A;if(void 0!==A)throw new TypeError("Derived constructors may only return object or undefined");return $c(g)}var Iu=_r;function iu(g){return(iu=Au?Iu:function(g){return g.__proto__||Iu(g)})(g)}var ou={exports:{}};!function(g){var A=function(g){var A,t=Object.prototype,e=t.hasOwnProperty,C="function"==typeof Symbol?Symbol:{},I=C.iterator||"@@iterator",i=C.asyncIterator||"@@asyncIterator",o=C.toStringTag||"@@toStringTag";function n(g,A,t){return Object.defineProperty(g,A,{value:t,enumerable:!0,configurable:!0,writable:!0}),g[A]}try{n({},"")}catch(g){n=function(g,A,t){return g[A]=t}}function r(g,A,t,e){var C=A&&A.prototype instanceof u?A:u,I=Object.create(C.prototype),i=new T(e||[]);return I._invoke=function(g,A,t){var e=a;return function(C,I){if(e===h)throw new Error("Generator is already running");if(e===l){if("throw"===C)throw I;return N()}for(t.method=C,t.arg=I;;){var i=t.delegate;if(i){var o=x(i,t);if(o){if(o===c)continue;return o}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(e===a)throw e=l,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e=h;var n=s(g,A,t);if("normal"===n.type){if(e=t.done?l:d,n.arg===c)continue;return{value:n.arg,done:t.done}}"throw"===n.type&&(e=l,t.method="throw",t.arg=n.arg)}}}(g,t,i),I}function s(g,A,t){try{return{type:"normal",arg:g.call(A,t)}}catch(g){return{type:"throw",arg:g}}}g.wrap=r;var a="suspendedStart",d="suspendedYield",h="executing",l="completed",c={};function u(){}function p(){}function f(){}var v={};v[I]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(D([])));m&&m!==t&&e.call(m,I)&&(v=m);var b=f.prototype=u.prototype=Object.create(v);function w(g){["next","throw","return"].forEach((function(A){n(g,A,(function(g){return this._invoke(A,g)}))}))}function k(g,A){function t(C,I,i,o){var n=s(g[C],g,I);if("throw"!==n.type){var r=n.arg,a=r.value;return a&&"object"==typeof a&&e.call(a,"__await")?A.resolve(a.__await).then((function(g){t("next",g,i,o)}),(function(g){t("throw",g,i,o)})):A.resolve(a).then((function(g){r.value=g,i(r)}),(function(g){return t("throw",g,i,o)}))}o(n.arg)}var C;this._invoke=function(g,e){function I(){return new A((function(A,C){t(g,e,A,C)}))}return C=C?C.then(I,I):I()}}function x(g,t){var e=g.iterator[t.method];if(e===A){if(t.delegate=null,"throw"===t.method){if(g.iterator.return&&(t.method="return",t.arg=A,x(g,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var C=s(e,g.iterator,t.arg);if("throw"===C.type)return t.method="throw",t.arg=C.arg,t.delegate=null,c;var I=C.arg;return I?I.done?(t[g.resultName]=I.value,t.next=g.nextLoc,"return"!==t.method&&(t.method="next",t.arg=A),t.delegate=null,c):I:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(g){var A={tryLoc:g[0]};1 in g&&(A.catchLoc=g[1]),2 in g&&(A.finallyLoc=g[2],A.afterLoc=g[3]),this.tryEntries.push(A)}function O(g){var A=g.completion||{};A.type="normal",delete A.arg,g.completion=A}function T(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(E,this),this.reset(!0)}function D(g){if(g){var t=g[I];if(t)return t.call(g);if("function"==typeof g.next)return g;if(!isNaN(g.length)){var C=-1,i=function t(){for(;++C<g.length;)if(e.call(g,C))return t.value=g[C],t.done=!1,t;return t.value=A,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:A,done:!0}}return p.prototype=b.constructor=f,f.constructor=p,p.displayName=n(f,o,"GeneratorFunction"),g.isGeneratorFunction=function(g){var A="function"==typeof g&&g.constructor;return!!A&&(A===p||"GeneratorFunction"===(A.displayName||A.name))},g.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,f):(g.__proto__=f,n(g,o,"GeneratorFunction")),g.prototype=Object.create(b),g},g.awrap=function(g){return{__await:g}},w(k.prototype),k.prototype[i]=function(){return this},g.AsyncIterator=k,g.async=function(A,t,e,C,I){void 0===I&&(I=Promise);var i=new k(r(A,t,e,C),I);return g.isGeneratorFunction(t)?i:i.next().then((function(g){return g.done?g.value:i.next()}))},w(b),n(b,o,"Generator"),b[I]=function(){return this},b.toString=function(){return"[object Generator]"},g.keys=function(g){var A=[];for(var t in g)A.push(t);return A.reverse(),function t(){for(;A.length;){var e=A.pop();if(e in g)return t.value=e,t.done=!1,t}return t.done=!0,t}},g.values=D,T.prototype={constructor:T,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=A,this.done=!1,this.delegate=null,this.method="next",this.arg=A,this.tryEntries.forEach(O),!g)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=A)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if("throw"===g.type)throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var t=this;function C(e,C){return o.type="throw",o.arg=g,t.next=e,C&&(t.method="next",t.arg=A),!!C}for(var I=this.tryEntries.length-1;I>=0;--I){var i=this.tryEntries[I],o=i.completion;if("root"===i.tryLoc)return C("end");if(i.tryLoc<=this.prev){var n=e.call(i,"catchLoc"),r=e.call(i,"finallyLoc");if(n&&r){if(this.prev<i.catchLoc)return C(i.catchLoc,!0);if(this.prev<i.finallyLoc)return C(i.finallyLoc)}else if(n){if(this.prev<i.catchLoc)return C(i.catchLoc,!0)}else{if(!r)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return C(i.finallyLoc)}}}},abrupt:function(g,A){for(var t=this.tryEntries.length-1;t>=0;--t){var C=this.tryEntries[t];if(C.tryLoc<=this.prev&&e.call(C,"finallyLoc")&&this.prev<C.finallyLoc){var I=C;break}}I&&("break"===g||"continue"===g)&&I.tryLoc<=A&&A<=I.finallyLoc&&(I=null);var i=I?I.completion:{};return i.type=g,i.arg=A,I?(this.method="next",this.next=I.finallyLoc,c):this.complete(i)},complete:function(g,A){if("throw"===g.type)throw g.arg;return"break"===g.type||"continue"===g.type?this.next=g.arg:"return"===g.type?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):"normal"===g.type&&A&&(this.next=A),c},finish:function(g){for(var A=this.tryEntries.length-1;A>=0;--A){var t=this.tryEntries[A];if(t.finallyLoc===g)return this.complete(t.completion,t.afterLoc),O(t),c}},catch:function(g){for(var A=this.tryEntries.length-1;A>=0;--A){var t=this.tryEntries[A];if(t.tryLoc===g){var e=t.completion;if("throw"===e.type){var C=e.arg;O(t)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(g,t,e){return this.delegate={iterator:D(g),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=A),c}},g}(g.exports);try{regeneratorRuntime=A}catch(g){Function("r","regeneratorRuntime = r")(A)}}(ou);var nu=ou.exports,ru=Yg,su=J,au=f,du=pA,hu=function(g){return function(A,t,e,C){ru(t);var I=su(A),i=au(I),o=du(I.length),n=g?o-1:0,r=g?-1:1;if(e<2)for(;;){if(n in i){C=i[n],n+=r;break}if(n+=r,g?n<0:o<=n)throw TypeError("Reduce of empty array with no initial value")}for(;g?n>=0:o>n;n+=r)n in i&&(C=t(C,i[n],n,I));return C}},lu={left:hu(!1),right:hu(!0)},cu="process"==c(e.process),uu=lu.left,pu=Z,fu=cu;aA({target:"Array",proto:!0,forced:!$n("reduce")||!fu&&pu>79&&pu<83},{reduce:function(g){return uu(this,g,arguments.length,arguments.length>1?arguments[1]:void 0)}});var vu=tt("Array").reduce,yu=Array.prototype,mu=function(g){var A=g.reduce;return g===yu||g instanceof Array&&A===yu.reduce?vu:A},bu=wI,wu=pA,ku=Qg,xu=function(g,A,t,e,C,I,i,o){for(var n,r=C,s=0,a=!!i&&ku(i,o,3);s<e;){if(s in t){if(n=a?a(t[s],s,A):t[s],I>0&&bu(n))r=xu(g,A,n,wu(n.length),r,I-1)-1;else{if(r>=9007199254740991)throw TypeError("Exceed the acceptable array length");g[r]=n}r++}s++}return r},Eu=xu,Ou=J,Tu=pA,Du=Yg,Nu=YI;aA({target:"Array",proto:!0},{flatMap:function(g){var A,t=Ou(this),e=Tu(t.length);return Du(g),(A=Nu(t,0)).length=Eu(A,t,t,e,0,1,g,arguments.length>1?arguments[1]:void 0),A}});var Ru=tt("Array").flatMap,Pu=Array.prototype,Mu=function(g){var A=g.flatMap;return g===Pu||g instanceof Array&&A===Pu.flatMap?Ru:A};dc("Set",(function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}}),Rc);var Bu=k.Set,zu=Mn,Zu=Hg,Su=YC,Fu=function(g){var A=Su(g);if("function"!=typeof A)throw TypeError(String(g)+" is not iterable");return Zu(A.call(g))},Gu=Math.floor,Lu=function(g,A){var t=g.length,e=Gu(t/2);return t<8?ju(g,A):Vu(Lu(g.slice(0,e),A),Lu(g.slice(e),A),A)},ju=function(g,A){for(var t,e,C=g.length,I=1;I<C;){for(e=I,t=g[I];e&&A(g[e-1],t)>0;)g[e]=g[--e];e!==I++&&(g[e]=t)}return g},Vu=function(g,A,t){for(var e=g.length,C=A.length,I=0,i=0,o=[];I<e||i<C;)I<e&&i<C?o.push(t(g[I],A[i])<=0?g[I++]:A[i++]):o.push(I<e?g[I++]:A[i++]);return o},Yu=Lu,Wu=D.match(/firefox\/(\d+)/i),Qu=!!Wu&&+Wu[1],Uu=/MSIE|Trident/.test(D),_u=D.match(/AppleWebKit\/(\d+)\./),Hu=!!_u&&+_u[1],Ku=aA,Xu=Yg,Ju=J,qu=pA,$u=ut,gp=I,Ap=Yu,tp=$n,ep=Qu,Cp=Uu,Ip=Z,ip=Hu,op=[],np=op.sort,rp=gp((function(){op.sort(void 0)})),sp=gp((function(){op.sort(null)})),ap=tp("sort"),dp=!gp((function(){if(Ip)return Ip<70;if(!(ep&&ep>3)){if(Cp)return!0;if(ip)return ip<603;var g,A,t,e,C="";for(g=65;g<76;g++){switch(A=String.fromCharCode(g),g){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(e=0;e<47;e++)op.push({k:A+e,v:t})}for(op.sort((function(g,A){return A.v-g.v})),e=0;e<op.length;e++)A=op[e].k.charAt(0),C.charAt(C.length-1)!==A&&(C+=A);return"DGBEFHACIJK"!==C}}));Ku({target:"Array",proto:!0,forced:rp||!sp||!ap||!dp},{sort:function(g){void 0!==g&&Xu(g);var A=Ju(this);if(dp)return void 0===g?np.call(A):np.call(A,g);var t,e,C=[],I=qu(A.length);for(e=0;e<I;e++)e in A&&C.push(A[e]);for(t=(C=Ap(C,function(g){return function(A,t){return void 0===t?-1:void 0===A?1:void 0!==g?+g(A,t)||0:$u(A)>$u(t)?1:-1}}(g))).length,e=0;e<t;)A[e]=C[e++];for(;e<I;)delete A[e++];return A}});var hp,lp=tt("Array").sort,cp=Array.prototype,up=function(g){var A=g.sort;return g===cp||g instanceof Array&&A===cp.sort?lp:A},pp=tt("Array").keys,fp=Se,vp=Array.prototype,yp={DOMTokenList:!0,NodeList:!0},mp=function(g){var A=g.keys;return g===vp||g instanceof Array&&A===vp.keys||yp.hasOwnProperty(fp(g))?pp:A},bp=tt("Array").values,wp=Se,kp=Array.prototype,xp={DOMTokenList:!0,NodeList:!0},Ep=function(g){var A=g.values;return g===kp||g instanceof Array&&A===kp.values||xp.hasOwnProperty(wp(g))?bp:A},Op=tt("Array").entries,Tp=Se,Dp=Array.prototype,Np={DOMTokenList:!0,NodeList:!0},Rp=function(g){var A=g.entries;return g===Dp||g instanceof Array&&A===Dp.entries||Np.hasOwnProperty(Tp(g))?Op:A},Pp=new Uint8Array(16);function Mp(){if(!hp&&!(hp="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return hp(Pp)}var Bp=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function zp(g){return"string"==typeof g&&Bp.test(g)}for(var Zp=[],Sp=0;Sp<256;++Sp)Zp.push((Sp+256).toString(16).substr(1));function Fp(g,A,t){var e=(g=g||{}).random||(g.rng||Mp)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,A){t=t||0;for(var C=0;C<16;++C)A[t+C]=e[C];return A}return function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(Zp[g[A+0]]+Zp[g[A+1]]+Zp[g[A+2]]+Zp[g[A+3]]+"-"+Zp[g[A+4]]+Zp[g[A+5]]+"-"+Zp[g[A+6]]+Zp[g[A+7]]+"-"+Zp[g[A+8]]+Zp[g[A+9]]+"-"+Zp[g[A+10]]+Zp[g[A+11]]+Zp[g[A+12]]+Zp[g[A+13]]+Zp[g[A+14]]+Zp[g[A+15]]).toLowerCase();if(!zp(t))throw TypeError("Stringified UUID is invalid");return t}(e)}function Gp(g,A){var t=Xn(g);if(io){var e=io(g);A&&(e=qr(e).call(e,(function(A){return fo(g,A).enumerable}))),t.push.apply(t,e)}return t}function Lp(g){for(var A=1;A<arguments.length;A++){var t,e=null!=arguments[A]?arguments[A]:{};if(A%2)ir(t=Gp(Object(e),!0)).call(t,(function(A){jo(g,A,e[A])}));else if(Oo)Ro(g,Oo(e));else{var C;ir(C=Gp(Object(e))).call(C,(function(A){Zo(g,A,fo(e,A))}))}}return g}function jp(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}function Vp(g,A){var t=void 0!==Sn&&mI(g)||g["@@iterator"];if(!t){if(Yn(g)||(t=function(g,A){var t;if(!g)return;if("string"==typeof g)return Yp(g,A);var e=jn(t=Object.prototype.toString.call(g)).call(t,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return eI(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Yp(g,A)}(g))||A&&g&&"number"==typeof g.length){t&&(g=t);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){t=t.call(g)},n:function(){var g=t.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw I}}}}function Yp(g,A){(null==A||A>g.length)&&(A=g.length);for(var t=0,e=new Array(A);t<A;t++)e[t]=g[t];return e}var Wp=function(){function g(A,t,e){var C,I,i;So(this,g),this._source=A,this._transformers=t,this._target=e,this._listeners={add:It(C=this._add).call(C,this),remove:It(I=this._remove).call(I,this),update:It(i=this._update).call(i,this)}}return Lo(g,[{key:"all",value:function(){return this._target.update(this._transformItems(this._source.get())),this}},{key:"start",value:function(){return this._source.on("add",this._listeners.add),this._source.on("remove",this._listeners.remove),this._source.on("update",this._listeners.update),this}},{key:"stop",value:function(){return this._source.off("add",this._listeners.add),this._source.off("remove",this._listeners.remove),this._source.off("update",this._listeners.update),this}},{key:"_transformItems",value:function(g){var A;return mu(A=this._transformers).call(A,(function(g,A){return A(g)}),g)}},{key:"_add",value:function(g,A){null!=A&&this._target.add(this._transformItems(this._source.get(A.items)))}},{key:"_update",value:function(g,A){null!=A&&this._target.update(this._transformItems(this._source.get(A.items)))}},{key:"_remove",value:function(g,A){null!=A&&this._target.remove(this._transformItems(A.oldData))}}]),g}(),Qp=function(){function g(A){So(this,g),this._source=A,this._transformers=[]}return Lo(g,[{key:"filter",value:function(g){return this._transformers.push((function(A){return qr(A).call(A,g)})),this}},{key:"map",value:function(g){return this._transformers.push((function(A){return _n(A).call(A,g)})),this}},{key:"flatMap",value:function(g){return this._transformers.push((function(A){return Mu(A).call(A,g)})),this}},{key:"to",value:function(g){return new Wp(this._source,this._transformers,g)}}]),g}();function Up(g){return"string"==typeof g||"number"==typeof g}var _p=function(){function g(A){So(this,g),this._queue=[],this._timeout=null,this._extended=null,this.delay=null,this.max=1/0,this.setOptions(A)}return Lo(g,[{key:"setOptions",value:function(g){g&&void 0!==g.delay&&(this.delay=g.delay),g&&void 0!==g.max&&(this.max=g.max),this._flushIfNeeded()}},{key:"destroy",value:function(){if(this.flush(),this._extended){for(var g=this._extended.object,A=this._extended.methods,t=0;t<A.length;t++){var e=A[t];e.original?g[e.name]=e.original:delete g[e.name]}this._extended=null}}},{key:"replace",value:function(g,A){var t=this,e=g[A];if(!e)throw new Error("Method "+A+" undefined");g[A]=function(){for(var g=arguments.length,A=new Array(g),C=0;C<g;C++)A[C]=arguments[C];t.queue({args:A,fn:e,context:this})}}},{key:"queue",value:function(g){"function"==typeof g?this._queue.push({fn:g}):this._queue.push(g),this._flushIfNeeded()}},{key:"_flushIfNeeded",value:function(){var g=this;this._queue.length>this.max&&this.flush(),null!=this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this.queue.length>0&&"number"==typeof this.delay&&(this._timeout=Hs((function(){g.flush()}),this.delay))}},{key:"flush",value:function(){var g,A;ir(g=Or(A=this._queue).call(A,0)).call(g,(function(g){g.fn.apply(g.context||g.fn,g.args||[])}))}}],[{key:"extend",value:function(A,t){var e=new g(t);if(void 0!==A.flush)throw new Error("Target object already has a property flush");A.flush=function(){e.flush()};var C=[{name:"flush",original:void 0}];if(t&&t.replace)for(var I=0;I<t.replace.length;I++){var i=t.replace[I];C.push({name:i,original:A[i]}),e.replace(A,i)}return e._extended={object:A,methods:C},e}}]),g}(),Hp=function(){function g(){So(this,g),this._subscribers={"*":[],add:[],remove:[],update:[]},this.subscribe=g.prototype.on,this.unsubscribe=g.prototype.off}return Lo(g,[{key:"_trigger",value:function(g,A,t){var e,C;if("*"===g)throw new Error("Cannot trigger event *");ir(e=Ln(C=[]).call(C,Zn(this._subscribers[g]),Zn(this._subscribers["*"]))).call(e,(function(e){e(g,A,null!=t?t:null)}))}},{key:"on",value:function(g,A){"function"==typeof A&&this._subscribers[g].push(A)}},{key:"off",value:function(g,A){var t;this._subscribers[g]=qr(t=this._subscribers[g]).call(t,(function(g){return g!==A}))}}]),g}(),Kp=function(g){function A(g){So(this,A),this._pairs=g}return Lo(A,[{key:g,value:nu.mark((function g(){var A,t,e,C,I;return nu.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:A=Vp(this._pairs),g.prev=1,A.s();case 3:if((t=A.n()).done){g.next=9;break}return e=Pn(t.value,2),C=e[0],I=e[1],g.next=7,[C,I];case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),A.e(g.t0);case 14:return g.prev=14,A.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"entries",value:nu.mark((function g(){var A,t,e,C,I;return nu.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:A=Vp(this._pairs),g.prev=1,A.s();case 3:if((t=A.n()).done){g.next=9;break}return e=Pn(t.value,2),C=e[0],I=e[1],g.next=7,[C,I];case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),A.e(g.t0);case 14:return g.prev=14,A.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"keys",value:nu.mark((function g(){var A,t,e,C;return nu.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:A=Vp(this._pairs),g.prev=1,A.s();case 3:if((t=A.n()).done){g.next=9;break}return e=Pn(t.value,1),C=e[0],g.next=7,C;case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),A.e(g.t0);case 14:return g.prev=14,A.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"values",value:nu.mark((function g(){var A,t,e,C;return nu.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:A=Vp(this._pairs),g.prev=1,A.s();case 3:if((t=A.n()).done){g.next=9;break}return e=Pn(t.value,2),C=e[1],g.next=7,C;case 7:g.next=3;break;case 9:g.next=14;break;case 11:g.prev=11,g.t0=g.catch(1),A.e(g.t0);case 14:return g.prev=14,A.f(),g.finish(14);case 17:case"end":return g.stop()}}),g,this,[[1,11,14,17]])}))},{key:"toIdArray",value:function(){var g;return _n(g=Zn(this._pairs)).call(g,(function(g){return g[0]}))}},{key:"toItemArray",value:function(){var g;return _n(g=Zn(this._pairs)).call(g,(function(g){return g[1]}))}},{key:"toEntryArray",value:function(){return Zn(this._pairs)}},{key:"toObjectMap",value:function(){var g,A=Bs(null),t=Vp(this._pairs);try{for(t.s();!(g=t.n()).done;){var e=Pn(g.value,2),C=e[0],I=e[1];A[C]=I}}catch(g){t.e(g)}finally{t.f()}return A}},{key:"toMap",value:function(){return new Pc(this._pairs)}},{key:"toIdSet",value:function(){return new Bu(this.toIdArray())}},{key:"toItemSet",value:function(){return new Bu(this.toItemArray())}},{key:"cache",value:function(){return new A(Zn(this._pairs))}},{key:"distinct",value:function(g){var A,t=new Bu,e=Vp(this._pairs);try{for(e.s();!(A=e.n()).done;){var C=Pn(A.value,2),I=C[0],i=C[1];t.add(g(i,I))}}catch(g){e.e(g)}finally{e.f()}return t}},{key:"filter",value:function(g){var t=this._pairs;return new A(jo({},zu,nu.mark((function A(){var e,C,I,i,o;return nu.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:e=Vp(t),A.prev=1,e.s();case 3:if((C=e.n()).done){A.next=10;break}if(I=Pn(C.value,2),i=I[0],o=I[1],!g(o,i)){A.next=8;break}return A.next=8,[i,o];case 8:A.next=3;break;case 10:A.next=15;break;case 12:A.prev=12,A.t0=A.catch(1),e.e(A.t0);case 15:return A.prev=15,e.f(),A.finish(15);case 18:case"end":return A.stop()}}),A,null,[[1,12,15,18]])}))))}},{key:"forEach",value:function(g){var A,t=Vp(this._pairs);try{for(t.s();!(A=t.n()).done;){var e=Pn(A.value,2),C=e[0];g(e[1],C)}}catch(g){t.e(g)}finally{t.f()}}},{key:"map",value:function(g){var t=this._pairs;return new A(jo({},zu,nu.mark((function A(){var e,C,I,i,o;return nu.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:e=Vp(t),A.prev=1,e.s();case 3:if((C=e.n()).done){A.next=9;break}return I=Pn(C.value,2),i=I[0],o=I[1],A.next=7,[i,g(o,i)];case 7:A.next=3;break;case 9:A.next=14;break;case 11:A.prev=11,A.t0=A.catch(1),e.e(A.t0);case 14:return A.prev=14,e.f(),A.finish(14);case 17:case"end":return A.stop()}}),A,null,[[1,11,14,17]])}))))}},{key:"max",value:function(g){var A=Fu(this._pairs),t=A.next();if(t.done)return null;for(var e=t.value[1],C=g(t.value[1],t.value[0]);!(t=A.next()).done;){var I=Pn(t.value,2),i=I[0],o=I[1],n=g(o,i);n>C&&(C=n,e=o)}return e}},{key:"min",value:function(g){var A=Fu(this._pairs),t=A.next();if(t.done)return null;for(var e=t.value[1],C=g(t.value[1],t.value[0]);!(t=A.next()).done;){var I=Pn(t.value,2),i=I[0],o=I[1],n=g(o,i);n<C&&(C=n,e=o)}return e}},{key:"reduce",value:function(g,A){var t,e=Vp(this._pairs);try{for(e.s();!(t=e.n()).done;){var C=Pn(t.value,2),I=C[0];A=g(A,C[1],I)}}catch(g){e.e(g)}finally{e.f()}return A}},{key:"sort",value:function(g){var t=this;return new A(jo({},zu,(function(){var A;return Fu(up(A=Zn(t._pairs)).call(A,(function(A,t){var e=Pn(A,2),C=e[0],I=e[1],i=Pn(t,2),o=i[0],n=i[1];return g(I,n,C,o)})))})))}}]),A}(zu);var Xp=function(g){eu(t,g);var A=jp(t);function t(g,e){var C;return So(this,t),(C=A.call(this))._queue=null,g&&!Yn(g)&&(e=g,g=[]),C._options=e||{},C._data=new Pc,C.length=0,C._idProp=C._options.fieldId||"id",g&&g.length&&C.add(g),C.setOptions(e),C}return Lo(t,[{key:"idProp",get:function(){return this._idProp}},{key:"setOptions",value:function(g){g&&void 0!==g.queue&&(!1===g.queue?this._queue&&(this._queue.destroy(),this._queue=null):(this._queue||(this._queue=_p.extend(this,{replace:["add","update","remove"]})),g.queue&&"object"===zn(g.queue)&&this._queue.setOptions(g.queue)))}},{key:"add",value:function(g,A){var t,e=this,C=[];if(Yn(g)){var I=_n(g).call(g,(function(g){return g[e._idProp]}));if(Lc(I).call(I,(function(g){return e._data.has(g)})))throw new Error("A duplicate id was found in the parameter array.");for(var i=0,o=g.length;i<o;i++)t=this._addItem(g[i]),C.push(t)}else{if(!g||"object"!==zn(g))throw new Error("Unknown dataType");t=this._addItem(g),C.push(t)}return C.length&&this._trigger("add",{items:C},A),C}},{key:"update",value:function(g,A){var t=this,e=[],C=[],I=[],i=[],o=this._idProp,n=function(g){var A=g[o];if(null!=A&&t._data.has(A)){var n=g,r=HA({},t._data.get(A)),s=t._updateItem(n);C.push(s),i.push(n),I.push(r)}else{var a=t._addItem(g);e.push(a)}};if(Yn(g))for(var r=0,s=g.length;r<s;r++)g[r]&&"object"===zn(g[r])?n(g[r]):console.warn("Ignoring input item, which is not an object at index "+r);else{if(!g||"object"!==zn(g))throw new Error("Unknown dataType");n(g)}if(e.length&&this._trigger("add",{items:e},A),C.length){var a={items:C,oldData:I,data:i};this._trigger("update",a,A)}return Ln(e).call(e,C)}},{key:"updateOnly",value:function(g,A){var t,e=this;Yn(g)||(g=[g]);var C=_n(t=_n(g).call(g,(function(g){var A=e._data.get(g[e._idProp]);if(null==A)throw new Error("Updating non-existent items is not allowed.");return{oldData:A,update:g}}))).call(t,(function(g){var A=g.oldData,t=g.update,C=A[e._idProp],I=function(g){for(var A,t=arguments.length,e=new Array(t>1?t-1:0),C=1;C<t;C++)e[C-1]=arguments[C];return Ud.apply(void 0,Ln(A=[{},g]).call(A,e))}(A,t);return e._data.set(C,I),{id:C,oldData:A,updatedData:I}}));if(C.length){var I={items:_n(C).call(C,(function(g){return g.id})),oldData:_n(C).call(C,(function(g){return g.oldData})),data:_n(C).call(C,(function(g){return g.updatedData}))};return this._trigger("update",I,A),I.items}return[]}},{key:"get",value:function(g,A){var t=void 0,e=void 0,C=void 0;Up(g)?(t=g,C=A):Yn(g)?(e=g,C=A):C=g;var I,i=C&&"Object"===C.returnType?"Object":"Array",o=C&&qr(C),n=[],r=void 0,s=void 0,a=void 0;if(null!=t)(r=this._data.get(t))&&o&&!o(r)&&(r=void 0);else if(null!=e)for(var d=0,h=e.length;d<h;d++)null==(r=this._data.get(e[d]))||o&&!o(r)||n.push(r);else for(var l,c=0,u=(s=Zn(mp(l=this._data).call(l))).length;c<u;c++)a=s[c],null==(r=this._data.get(a))||o&&!o(r)||n.push(r);if(C&&C.order&&null==t&&this._sort(n,C.order),C&&C.fields){var p=C.fields;if(null!=t&&null!=r)r=this._filterFields(r,p);else for(var f=0,v=n.length;f<v;f++)n[f]=this._filterFields(n[f],p)}if("Object"==i){for(var y={},m=0,b=n.length;m<b;m++){var w=n[m];y[w[this._idProp]]=w}return y}return null!=t?null!==(I=r)&&void 0!==I?I:null:n}},{key:"getIds",value:function(g){var A=this._data,t=g&&qr(g),e=g&&g.order,C=Zn(mp(A).call(A)),I=[];if(t)if(e){for(var i=[],o=0,n=C.length;o<n;o++){var r=C[o],s=this._data.get(r);null!=s&&t(s)&&i.push(s)}this._sort(i,e);for(var a=0,d=i.length;a<d;a++)I.push(i[a][this._idProp])}else for(var h=0,l=C.length;h<l;h++){var c=C[h],u=this._data.get(c);null!=u&&t(u)&&I.push(u[this._idProp])}else if(e){for(var p=[],f=0,v=C.length;f<v;f++){var y=C[f];p.push(A.get(y))}this._sort(p,e);for(var m=0,b=p.length;m<b;m++)I.push(p[m][this._idProp])}else for(var w=0,k=C.length;w<k;w++){var x=C[w],E=A.get(x);null!=E&&I.push(E[this._idProp])}return I}},{key:"getDataSet",value:function(){return this}},{key:"forEach",value:function(g,A){var t=A&&qr(A),e=this._data,C=Zn(mp(e).call(e));if(A&&A.order)for(var I=this.get(A),i=0,o=I.length;i<o;i++){var n=I[i];g(n,n[this._idProp])}else for(var r=0,s=C.length;r<s;r++){var a=C[r],d=this._data.get(a);null==d||t&&!t(d)||g(d,a)}}},{key:"map",value:function(g,A){for(var t=A&&qr(A),e=[],C=this._data,I=Zn(mp(C).call(C)),i=0,o=I.length;i<o;i++){var n=I[i],r=this._data.get(n);null==r||t&&!t(r)||e.push(g(r,n))}return A&&A.order&&this._sort(e,A.order),e}},{key:"_filterFields",value:function(g,A){var t;return g?mu(t=Yn(A)?A:Xn(A)).call(t,(function(A,t){return A[t]=g[t],A}),{}):g}},{key:"_sort",value:function(g,A){if("string"==typeof A){var t=A;up(g).call(g,(function(g,A){var e=g[t],C=A[t];return e>C?1:e<C?-1:0}))}else{if("function"!=typeof A)throw new TypeError("Order must be a function or a string");up(g).call(g,A)}}},{key:"remove",value:function(g,A){for(var t=[],e=[],C=Yn(g)?g:[g],I=0,i=C.length;I<i;I++){var o=this._remove(C[I]);if(o){var n=o[this._idProp];null!=n&&(t.push(n),e.push(o))}}return t.length&&this._trigger("remove",{items:t,oldData:e},A),t}},{key:"_remove",value:function(g){var A;if(Up(g)?A=g:g&&"object"===zn(g)&&(A=g[this._idProp]),null!=A&&this._data.has(A)){var t=this._data.get(A)||null;return this._data.delete(A),--this.length,t}return null}},{key:"clear",value:function(g){for(var A,t=Zn(mp(A=this._data).call(A)),e=[],C=0,I=t.length;C<I;C++)e.push(this._data.get(t[C]));return this._data.clear(),this.length=0,this._trigger("remove",{items:t,oldData:e},g),t}},{key:"max",value:function(g){var A,t,e=null,C=null,I=Vp(Ep(A=this._data).call(A));try{for(I.s();!(t=I.n()).done;){var i=t.value,o=i[g];"number"==typeof o&&(null==C||o>C)&&(e=i,C=o)}}catch(g){I.e(g)}finally{I.f()}return e||null}},{key:"min",value:function(g){var A,t,e=null,C=null,I=Vp(Ep(A=this._data).call(A));try{for(I.s();!(t=I.n()).done;){var i=t.value,o=i[g];"number"==typeof o&&(null==C||o<C)&&(e=i,C=o)}}catch(g){I.e(g)}finally{I.f()}return e||null}},{key:"distinct",value:function(g){for(var A=this._data,t=Zn(mp(A).call(A)),e=[],C=0,I=0,i=t.length;I<i;I++){for(var o=t[I],n=A.get(o)[g],r=!1,s=0;s<C;s++)if(e[s]==n){r=!0;break}r||void 0===n||(e[C]=n,C++)}return e}},{key:"_addItem",value:function(g){var A=function(g,A){return null==g[A]&&(g[A]=Fp()),g}(g,this._idProp),t=A[this._idProp];if(this._data.has(t))throw new Error("Cannot add item: item with id "+t+" already exists");return this._data.set(t,A),++this.length,t}},{key:"_updateItem",value:function(g){var A=g[this._idProp];if(null==A)throw new Error("Cannot update item: item has no id (item: "+Ws(g)+")");var t=this._data.get(A);if(!t)throw new Error("Cannot update item: no item with id "+A+" found");return this._data.set(A,Lp(Lp({},t),g)),A}},{key:"stream",value:function(g){if(g){var A=this._data;return new Kp(jo({},zu,nu.mark((function t(){var e,C,I,i;return nu.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Vp(g),t.prev=1,e.s();case 3:if((C=e.n()).done){t.next=11;break}if(I=C.value,null==(i=A.get(I))){t.next=9;break}return t.next=9,[I,i];case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.e(t.t0);case 16:return t.prev=16,e.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))))}var t;return new Kp(jo({},zu,It(t=Rp(this._data)).call(t,this._data)))}}]),t}(Hp),Jp=function(g){eu(t,g);var A=jp(t);function t(g,e){var C,I;return So(this,t),(I=A.call(this)).length=0,I._ids=new Bu,I._options=e||{},I._listener=It(C=I._onEvent).call(C,$c(I)),I.setData(g),I}return Lo(t,[{key:"idProp",get:function(){return this.getDataSet().idProp}},{key:"setData",value:function(g){if(this._data){this._data.off&&this._data.off("*",this._listener);var A=this._data.getIds({filter:qr(this._options)}),t=this._data.get(A);this._ids.clear(),this.length=0,this._trigger("remove",{items:A,oldData:t})}if(null!=g){this._data=g;for(var e=this._data.getIds({filter:qr(this._options)}),C=0,I=e.length;C<I;C++){var i=e[C];this._ids.add(i)}this.length=e.length,this._trigger("add",{items:e})}else this._data=new Xp;this._data.on&&this._data.on("*",this._listener)}},{key:"refresh",value:function(){for(var g=this._data.getIds({filter:qr(this._options)}),A=Zn(this._ids),t={},e=[],C=[],I=[],i=0,o=g.length;i<o;i++){var n=g[i];t[n]=!0,this._ids.has(n)||(e.push(n),this._ids.add(n))}for(var r=0,s=A.length;r<s;r++){var a=A[r],d=this._data.get(a);null==d?console.error("If you see this, report it please."):t[a]||(C.push(a),I.push(d),this._ids.delete(a))}this.length+=e.length-C.length,e.length&&this._trigger("add",{items:e}),C.length&&this._trigger("remove",{items:C,oldData:I})}},{key:"get",value:function(g,A){if(null==this._data)return null;var t,e=null;Up(g)||Yn(g)?(e=g,t=A):t=g;var C=HA({},this._options,t),I=qr(this._options),i=t&&qr(t);return I&&i&&(C.filter=function(g){return I(g)&&i(g)}),null==e?this._data.get(C):this._data.get(e,C)}},{key:"getIds",value:function(g){if(this._data.length){var A,t=qr(this._options),e=null!=g?qr(g):null;return A=e?t?function(g){return t(g)&&e(g)}:e:t,this._data.getIds({filter:A,order:g&&g.order})}return[]}},{key:"forEach",value:function(g,A){if(this._data){var t,e,C=qr(this._options),I=A&&qr(A);e=I?C?function(g){return C(g)&&I(g)}:I:C,ir(t=this._data).call(t,g,{filter:e,order:A&&A.order})}}},{key:"map",value:function(g,A){if(this._data){var t,e,C=qr(this._options),I=A&&qr(A);return e=I?C?function(g){return C(g)&&I(g)}:I:C,_n(t=this._data).call(t,g,{filter:e,order:A&&A.order})}return[]}},{key:"getDataSet",value:function(){return this._data.getDataSet()}},{key:"stream",value:function(g){var A;return this._data.stream(g||jo({},zu,It(A=mp(this._ids)).call(A,this._ids)))}},{key:"dispose",value:function(){var g;null!==(g=this._data)&&void 0!==g&&g.off&&this._data.off("*",this._listener);var A,e="This data view has already been disposed of.",C={get:function(){throw new Error(e)},set:function(){throw new Error(e)},configurable:!1},I=Vp(Vn(t.prototype));try{for(I.s();!(A=I.n()).done;){var i=A.value;Zo(this,i,C)}}catch(g){I.e(g)}finally{I.f()}}},{key:"_onEvent",value:function(g,A,t){if(A&&A.items&&this._data){var e=A.items,C=[],I=[],i=[],o=[],n=[],r=[];switch(g){case"add":for(var s=0,a=e.length;s<a;s++){var d=e[s];this.get(d)&&(this._ids.add(d),C.push(d))}break;case"update":for(var h=0,l=e.length;h<l;h++){var c=e[h];this.get(c)?this._ids.has(c)?(I.push(c),n.push(A.data[h]),o.push(A.oldData[h])):(this._ids.add(c),C.push(c)):this._ids.has(c)&&(this._ids.delete(c),i.push(c),r.push(A.oldData[h]))}break;case"remove":for(var u=0,p=e.length;u<p;u++){var f=e[u];this._ids.has(f)&&(this._ids.delete(f),i.push(f),r.push(A.oldData[u]))}}this.length+=C.length-i.length,C.length&&this._trigger("add",{items:C},t),I.length&&this._trigger("update",{items:I,oldData:o,data:n},t),i.length&&this._trigger("remove",{items:i,oldData:r},t)}}}]),t}(Hp);function qp(g,A){return"object"===zn(A)&&null!==A&&g===A.idProp&&"function"==typeof A.add&&"function"==typeof A.clear&&"function"==typeof A.distinct&&"function"==typeof ir(A)&&"function"==typeof A.get&&"function"==typeof A.getDataSet&&"function"==typeof A.getIds&&"number"==typeof A.length&&"function"==typeof _n(A)&&"function"==typeof A.max&&"function"==typeof A.min&&"function"==typeof A.off&&"function"==typeof A.on&&"function"==typeof A.remove&&"function"==typeof A.setOptions&&"function"==typeof A.stream&&"function"==typeof A.update&&"function"==typeof A.updateOnly}function $p(g,A){return"object"===zn(A)&&null!==A&&g===A.idProp&&"function"==typeof ir(A)&&"function"==typeof A.get&&"function"==typeof A.getDataSet&&"function"==typeof A.getIds&&"number"==typeof A.length&&"function"==typeof _n(A)&&"function"==typeof A.off&&"function"==typeof A.on&&"function"==typeof A.stream&&qp(g,A.getDataSet())}var gf=Object.freeze({__proto__:null,DELETE:Qd,DataSet:Xp,DataStream:Kp,DataView:Jp,Queue:_p,createNewDataPipeFrom:function(g){return new Qp(g)},isDataSetLike:qp,isDataViewLike:$p}),Af=ut,tf=ds.trim,ef=e.parseFloat,Cf=1/ef("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0?function(g){var A=tf(Af(g)),t=ef(A);return 0===t&&"-"==A.charAt(0)?-0:t}:ef;aA({global:!0,forced:parseFloat!=Cf},{parseFloat:Cf});var If=k.parseFloat,of=aA,nf=I,rf=OI.f;of({target:"Object",stat:!0,forced:nf((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:rf});var sf=k.Object,af=function(g){return sf.getOwnPropertyNames(g)};function df(g,A){var t=["node","edge","label"],e=!0,C=Nh(A,"chosen");if("boolean"==typeof C)e=C;else if("object"===zn(C)){if(-1===Ts(t).call(t,g))throw new Error("choosify: subOption '"+g+"' should be one of '"+t.join("', '")+"'");var I=Nh(A,["chosen",g]);"boolean"!=typeof I&&"function"!=typeof I||(e=I)}return e}function hf(g,A,t){if(g.width<=0||g.height<=0)return!1;if(void 0!==t){var e={x:A.x-t.x,y:A.y-t.y};if(0!==t.angle){var C=-t.angle;A={x:Math.cos(C)*e.x-Math.sin(C)*e.y,y:Math.sin(C)*e.x+Math.cos(C)*e.y}}else A=e}var I=g.x+g.width,i=g.y+g.width;return g.left<A.x&&I>A.x&&g.top<A.y&&i>A.y}function lf(g){return"string"==typeof g&&""!==g}function cf(g,A,t,e){var C=e.x,I=e.y;if("function"==typeof e.distanceToBorder){var i=e.distanceToBorder(g,A),o=Math.sin(A)*i,n=Math.cos(A)*i;n===i?(C+=i,I=e.y):o===i?(C=e.x,I-=i):(C+=n,I-=o)}else e.shape.width>e.shape.height?(C=e.x+.5*e.shape.width,I=e.y-t):(C=e.x+t,I=e.y-.5*e.shape.height);return{x:C,y:I}}var uf=function(){function g(A){So(this,g),this.measureText=A,this.current=0,this.width=0,this.height=0,this.lines=[]}return Lo(g,[{key:"_add",value:function(g,A){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";void 0===this.lines[g]&&(this.lines[g]={width:0,height:0,blocks:[]});var e=A;void 0!==A&&""!==A||(e=" ");var C=this.measureText(e,t),I=HA({},Ep(C));I.text=A,I.width=C.width,I.mod=t,void 0!==A&&""!==A||(I.width=0),this.lines[g].blocks.push(I),this.lines[g].width+=I.width}},{key:"curWidth",value:function(){var g=this.lines[this.current];return void 0===g?0:g.width}},{key:"append",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,g,A)}},{key:"newLine",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,g,A),this.current++}},{key:"determineLineHeights",value:function(){for(var g=0;g<this.lines.length;g++){var A=this.lines[g],t=0;if(void 0!==A.blocks)for(var e=0;e<A.blocks.length;e++){var C=A.blocks[e];t<C.height&&(t=C.height)}A.height=t}}},{key:"determineLabelSize",value:function(){for(var g=0,A=0,t=0;t<this.lines.length;t++){var e=this.lines[t];e.width>g&&(g=e.width),A+=e.height}this.width=g,this.height=A}},{key:"removeEmptyBlocks",value:function(){for(var g=[],A=0;A<this.lines.length;A++){var t=this.lines[A];if(0!==t.blocks.length&&(A!==this.lines.length-1||0!==t.width)){var e={};HA(e,t),e.blocks=[];for(var C=void 0,I=[],i=0;i<t.blocks.length;i++){var o=t.blocks[i];0!==o.width?I.push(o):void 0===C&&(C=o)}0===I.length&&void 0!==C&&I.push(C),e.blocks=I,g.push(e)}}return g}},{key:"finalize",value:function(){this.determineLineHeights(),this.determineLabelSize();var g=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:g}}}]),g}(),pf={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,"</code>":/<\/code>/,"*":/\*/,_:/_/,"`":/`/,afterBold:/[^*]/,afterItal:/[^_]/,afterMono:/[^`]/},ff=function(){function g(A){So(this,g),this.text=A,this.bold=!1,this.ital=!1,this.mono=!1,this.spacing=!1,this.position=0,this.buffer="",this.modStack=[],this.blocks=[]}return Lo(g,[{key:"mod",value:function(){return 0===this.modStack.length?"normal":this.modStack[0]}},{key:"modName",value:function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0}},{key:"emitBlock",value:function(){this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(this.blocks.push({text:this.buffer,mod:this.modName()}),this.buffer="")}},{key:"add",value:function(g){" "===g&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=g&&(this.buffer+=g)}},{key:"parseWS",value:function(g){return!!/[ \t]/.test(g)&&(this.mono?this.add(g):this.spacing=!0,!0)}},{key:"setTag",value:function(g){this.emitBlock(),this[g]=!0,this.modStack.unshift(g)}},{key:"unsetTag",value:function(g){this.emitBlock(),this[g]=!1,this.modStack.shift()}},{key:"parseStartTag",value:function(g,A){return!(this.mono||this[g]||!this.match(A))&&(this.setTag(g),!0)}},{key:"match",value:function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.prepareRegExp(g),e=Pn(t,2),C=e[0],I=e[1],i=C.test(this.text.substr(this.position,I));return i&&A&&(this.position+=I-1),i}},{key:"parseEndTag",value:function(g,A,t){var e=this.mod()===g;return!(!(e="mono"===g?e&&this.mono:e&&!this.mono)||!this.match(A))&&(void 0!==t?(this.position===this.text.length-1||this.match(t,!1))&&this.unsetTag(g):this.unsetTag(g),!0)}},{key:"replace",value:function(g,A){return!!this.match(g)&&(this.add(A),this.position+=length-1,!0)}},{key:"prepareRegExp",value:function(g){var A,t;if(g instanceof RegExp)t=g,A=1;else{var e=pf[g];t=void 0!==e?e:new RegExp(g),A=g.length}return[t,A]}}]),g}(),vf=function(){function g(A,t,e,C){var I=this;So(this,g),this.ctx=A,this.parent=t,this.selected=e,this.hover=C;this.lines=new uf((function(g,t){if(void 0===g)return 0;var i=I.parent.getFormattingValues(A,e,C,t),o=0;""!==g&&(o=I.ctx.measureText(g).width);return{width:o,values:i}}))}return Lo(g,[{key:"process",value:function(g){if(!lf(g))return this.lines.finalize();var A=this.parent.fontOptions;g=(g=g.replace(/\r\n/g,"\n")).replace(/\r/g,"\n");var t=String(g).split("\n"),e=t.length;if(A.multi)for(var C=0;C<e;C++){var I=this.splitBlocks(t[C],A.multi);if(void 0!==I)if(0!==I.length){if(A.maxWdt>0)for(var i=0;i<I.length;i++){var o=I[i].mod,n=I[i].text;this.splitStringIntoLines(n,o,!0)}else for(var r=0;r<I.length;r++){var s=I[r].mod,a=I[r].text;this.lines.append(a,s)}this.lines.newLine()}else this.lines.newLine("")}else if(A.maxWdt>0)for(var d=0;d<e;d++)this.splitStringIntoLines(t[d]);else for(var h=0;h<e;h++)this.lines.newLine(t[h]);return this.lines.finalize()}},{key:"decodeMarkupSystem",value:function(g){var A="none";return"markdown"===g||"md"===g?A="markdown":!0!==g&&"html"!==g||(A="html"),A}},{key:"splitHtmlBlocks",value:function(g){for(var A=new ff(g),t=function(g){return!!/&/.test(g)&&(A.replace(A.text,"&lt;","<")||A.replace(A.text,"&amp;","&")||A.add("&"),!0)};A.position<A.text.length;){var e=A.text.charAt(A.position);A.parseWS(e)||/</.test(e)&&(A.parseStartTag("bold","<b>")||A.parseStartTag("ital","<i>")||A.parseStartTag("mono","<code>")||A.parseEndTag("bold","</b>")||A.parseEndTag("ital","</i>")||A.parseEndTag("mono","</code>"))||t(e)||A.add(e),A.position++}return A.emitBlock(),A.blocks}},{key:"splitMarkdownBlocks",value:function(g){for(var A=this,t=new ff(g),e=!0,C=function(g){return!!/\\/.test(g)&&(t.position<A.text.length+1&&(t.position++,g=A.text.charAt(t.position),/ \t/.test(g)?t.spacing=!0:(t.add(g),e=!1)),!0)};t.position<t.text.length;){var I=t.text.charAt(t.position);t.parseWS(I)||C(I)||(e||t.spacing)&&(t.parseStartTag("bold","*")||t.parseStartTag("ital","_")||t.parseStartTag("mono","`"))||t.parseEndTag("bold","*","afterBold")||t.parseEndTag("ital","_","afterItal")||t.parseEndTag("mono","`","afterMono")||(t.add(I),e=!1),t.position++}return t.emitBlock(),t.blocks}},{key:"splitBlocks",value:function(g,A){var t=this.decodeMarkupSystem(A);return"none"===t?[{text:g,mod:"normal"}]:"markdown"===t?this.splitMarkdownBlocks(g):"html"===t?this.splitHtmlBlocks(g):void 0}},{key:"overMaxWidth",value:function(g){var A=this.ctx.measureText(g).width;return this.lines.curWidth()+A>this.parent.fontOptions.maxWdt}},{key:"getLongestFit",value:function(g){for(var A="",t=0;t<g.length;){var e=A+(""===A?"":" ")+g[t];if(this.overMaxWidth(e))break;A=e,t++}return t}},{key:"getLongestFitWord",value:function(g){for(var A=0;A<g.length&&!this.overMaxWidth(jn(g).call(g,0,A));)A++;return A}},{key:"splitStringIntoLines",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.parent.getFormattingValues(this.ctx,this.selected,this.hover,A);for(var e=(g=(g=g.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");e.length>0;){var C=this.getLongestFit(e);if(0===C){var I=e[0],i=this.getLongestFitWord(I);this.lines.newLine(jn(I).call(I,0,i),A),e[0]=jn(I).call(I,i)}else{var o=C;" "===e[C-1]?C--:" "===e[o]&&o++;var n=jn(e).call(e,0,C).join("");C==e.length&&t?this.lines.append(n,A):this.lines.newLine(n,A),e=jn(e).call(e,o)}}}}]),g}(),yf=["bold","ital","boldital","mono"],mf=function(){function g(A,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];So(this,g),this.body=A,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(t),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=e}return Lo(g,[{key:"setOptions",value:function(g){if(this.elementOptions=g,this.initFontOptions(g.font),lf(g.label)?this.labelDirty=!0:g.label=void 0,void 0!==g.font&&null!==g.font)if("string"==typeof g.font)this.baseSize=this.fontOptions.size;else if("object"===zn(g.font)){var A=g.font.size;void 0!==A&&(this.baseSize=A)}}},{key:"initFontOptions",value:function(A){var t=this;uh(yf,(function(g){t.fontOptions[g]={}})),g.parseFontString(this.fontOptions,A)?this.fontOptions.vadjust=0:uh(A,(function(g,A){null!=g&&"object"!==zn(g)&&(t.fontOptions[A]=g)}))}},{key:"constrain",value:function(g){var A={constrainWidth:!1,maxWdt:-1,minWdt:-1,constrainHeight:!1,minHgt:-1,valign:"middle"},t=Nh(g,"widthConstraint");if("number"==typeof t)A.maxWdt=Number(t),A.minWdt=Number(t);else if("object"===zn(t)){var e=Nh(g,["widthConstraint","maximum"]);"number"==typeof e&&(A.maxWdt=Number(e));var C=Nh(g,["widthConstraint","minimum"]);"number"==typeof C&&(A.minWdt=Number(C))}var I=Nh(g,"heightConstraint");if("number"==typeof I)A.minHgt=Number(I);else if("object"===zn(I)){var i=Nh(g,["heightConstraint","minimum"]);"number"==typeof i&&(A.minHgt=Number(i));var o=Nh(g,["heightConstraint","valign"]);"string"==typeof o&&("top"!==o&&"bottom"!==o||(A.valign=o))}return A}},{key:"update",value:function(g,A){this.setOptions(g,!0),this.propagateFonts(A),dh(this.fontOptions,this.constrain(A)),this.fontOptions.chooser=df("label",A)}},{key:"adjustSizes",value:function(g){var A=g?g.right+g.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=A,this.fontOptions.minWdt-=A);var t=g?g.top+g.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=t)}},{key:"addFontOptionsToPile",value:function(g,A){for(var t=0;t<A.length;++t)this.addFontToPile(g,A[t])}},{key:"addFontToPile",value:function(g,A){if(void 0!==A&&void 0!==A.font&&null!==A.font){var t=A.font;g.push(t)}}},{key:"getBasicOptions",value:function(A){for(var t={},e=0;e<A.length;++e){var C=A[e],I={};g.parseFontString(I,C)&&(C=I),uh(C,(function(g,A){void 0!==g&&(Object.prototype.hasOwnProperty.call(t,A)||(-1!==Ts(yf).call(yf,A)?t[A]={}:t[A]=g))}))}return t}},{key:"getFontOption",value:function(A,t,e){for(var C,I=0;I<A.length;++I){var i=A[I];if(Object.prototype.hasOwnProperty.call(i,t)){if(null==(C=i[t]))continue;var o={};if(g.parseFontString(o,C)&&(C=o),Object.prototype.hasOwnProperty.call(C,e))return C[e]}}if(Object.prototype.hasOwnProperty.call(this.fontOptions,e))return this.fontOptions[e];throw new Error("Did not find value for multi-font for property: '"+e+"'")}},{key:"getFontOptions",value:function(g,A){for(var t={},e=["color","size","face","mod","vadjust"],C=0;C<e.length;++C){var I=e[C];t[I]=this.getFontOption(g,A,I)}return t}},{key:"propagateFonts",value:function(g){var A=this,t=[];this.addFontOptionsToPile(t,g),this.fontOptions=this.getBasicOptions(t);for(var e=function(g){var e=yf[g],C=A.fontOptions[e];uh(A.getFontOptions(t,e),(function(g,A){C[A]=g})),C.size=Number(C.size),C.vadjust=Number(C.vadjust)},C=0;C<yf.length;++C)e(C)}},{key:"draw",value:function(g,A,t,e,C){var I=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var i=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&i<this.elementOptions.scaling.label.drawThreshold-1||(i>=this.elementOptions.scaling.label.maxVisible&&(i=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),this.calculateLabelSize(g,e,C,A,t,I),this._drawBackground(g),this._drawText(g,A,this.size.yLine,I,i))}}},{key:"_drawBackground",value:function(g){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){g.fillStyle=this.fontOptions.background;var A=this.getSize();g.fillRect(A.left,A.top,A.width,A.height)}}},{key:"_drawText",value:function(g,A,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",C=arguments.length>4?arguments[4]:void 0,I=this._setAlignment(g,A,t,e),i=Pn(I,2);A=i[0],t=i[1],g.textAlign="left",A-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(t-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(t+=(this.size.height-this.size.labelHeight)/2));for(var o=0;o<this.lineCount;o++){var n=this.lines[o];if(n&&n.blocks){var r=0;this.isEdgeLabel||"center"===this.fontOptions.align?r+=(this.size.width-n.width)/2:"right"===this.fontOptions.align&&(r+=this.size.width-n.width);for(var s=0;s<n.blocks.length;s++){var a=n.blocks[s];g.font=a.font;var d=this._getColor(a.color,C,a.strokeColor),h=Pn(d,2),l=h[0],c=h[1];a.strokeWidth>0&&(g.lineWidth=a.strokeWidth,g.strokeStyle=c,g.lineJoin="round"),g.fillStyle=l,a.strokeWidth>0&&g.strokeText(a.text,A+r,t+a.vadjust),g.fillText(a.text,A+r,t+a.vadjust),r+=a.width}t+=n.height}}}},{key:"_setAlignment",value:function(g,A,t,e){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf){A=0,t=0;"top"===this.fontOptions.align?(g.textBaseline="alphabetic",t-=4):"bottom"===this.fontOptions.align?(g.textBaseline="hanging",t+=4):g.textBaseline="middle"}else g.textBaseline=e;return[A,t]}},{key:"_getColor",value:function(g,A,t){var e=g||"#000000",C=t||"#ffffff";if(A<=this.elementOptions.scaling.label.drawThreshold){var I=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-A)));e=fh(e,I),C=fh(C,I)}return[e,C]}},{key:"getTextSize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(g,A,t),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"getSize",value:function(){var g=this.size.left,A=this.size.top-1;if(this.isEdgeLabel){var t=.5*-this.size.width;switch(this.fontOptions.align){case"middle":g=t,A=.5*-this.size.height;break;case"top":g=t,A=-(this.size.height+2);break;case"bottom":g=t,A=2}}return{left:g,top:A,width:this.size.width,height:this.size.height}}},{key:"calculateLabelSize",value:function(g,A,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,I=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this._processLabel(g,A,t),this.size.left=e-.5*this.size.width,this.size.top=C-.5*this.size.height,this.size.yLine=C+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===I&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4)}},{key:"getFormattingValues",value:function(g,A,t,e){var C=function(g,A,t){return"normal"===A?"mod"===t?"":g[t]:void 0!==g[A][t]?g[A][t]:g[t]},I={color:C(this.fontOptions,e,"color"),size:C(this.fontOptions,e,"size"),face:C(this.fontOptions,e,"face"),mod:C(this.fontOptions,e,"mod"),vadjust:C(this.fontOptions,e,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(A||t)&&("normal"===e&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?I.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(I,this.elementOptions.id,A,t));var i="";return void 0!==I.mod&&""!==I.mod&&(i+=I.mod+" "),i+=I.size+"px "+I.face,g.font=i.replace(/"/g,""),I.font=g.font,I.height=I.size,I}},{key:"differentState",value:function(g,A){return g!==this.selectedState||A!==this.hoverState}},{key:"_processLabelText",value:function(g,A,t,e){return new vf(g,this,A,t).process(e)}},{key:"_processLabel",value:function(g,A,t){if(!1!==this.labelDirty||this.differentState(A,t)){var e=this._processLabelText(g,A,t,this.elementOptions.label);this.fontOptions.minWdt>0&&e.width<this.fontOptions.minWdt&&(e.width=this.fontOptions.minWdt),this.size.labelHeight=e.height,this.fontOptions.minHgt>0&&e.height<this.fontOptions.minHgt&&(e.height=this.fontOptions.minHgt),this.lines=e.lines,this.lineCount=e.lines.length,this.size.width=e.width,this.size.height=e.height,this.selectedState=A,this.hoverState=t,this.labelDirty=!1}}},{key:"visible",value:function(){return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)}}],[{key:"parseFontString",value:function(g,A){if(!A||"string"!=typeof A)return!1;var t=A.split(" ");return g.size=+t[0].replace("px",""),g.face=t[1],g.color=t[2],!0}}]),g}(),bf=function(){function g(A,t,e){So(this,g),this.body=t,this.labelModule=e,this.setOptions(A),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.refreshNeeded=!0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return Lo(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"_setMargins",value:function(g){this.margin={},this.options.margin&&("object"==zn(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),g.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(g,A){var t=this.options.borderWidth;return g&&this.resize(g),Math.min(Math.abs(this.width/2/Math.cos(A)),Math.abs(this.height/2/Math.sin(A)))+t}},{key:"enableShadow",value:function(g,A){A.shadow&&(g.shadowColor=A.shadowColor,g.shadowBlur=A.shadowSize,g.shadowOffsetX=A.shadowX,g.shadowOffsetY=A.shadowY)}},{key:"disableShadow",value:function(g,A){A.shadow&&(g.shadowColor="rgba(0,0,0,0)",g.shadowBlur=0,g.shadowOffsetX=0,g.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(g,A){if(!1!==A.borderDashes)if(void 0!==g.setLineDash){var t=A.borderDashes;!0===t&&(t=[5,15]),g.setLineDash(t)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,A.borderDashes=!1}},{key:"disableBorderDashes",value:function(g,A){!1!==A.borderDashes&&(void 0!==g.setLineDash?g.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,A.borderDashes=!1))}},{key:"needsRefresh",value:function(g,A){return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(g,A)}},{key:"initContextForDraw",value:function(g,A){var t=A.borderWidth/this.body.view.scale;g.lineWidth=Math.min(this.width,t),g.strokeStyle=A.borderColor,g.fillStyle=A.color}},{key:"performStroke",value:function(g,A){var t=A.borderWidth/this.body.view.scale;g.save(),t>0&&(this.enableBorderDashes(g,A),g.stroke(),this.disableBorderDashes(g,A)),g.restore()}},{key:"performFill",value:function(g,A){g.save(),g.fillStyle=A.color,this.enableShadow(g,A),ga(g).call(g),this.disableShadow(g,A),g.restore(),this.performStroke(g,A)}},{key:"_addBoundingBoxMargin",value:function(g){this.boundingBox.left-=g,this.boundingBox.top-=g,this.boundingBox.bottom+=g,this.boundingBox.right+=g}},{key:"_updateBoundingBox",value:function(g,A,t,e,C){void 0!==t&&this.resize(t,e,C),this.left=g-this.width/2,this.top=A-this.height/2,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"updateBoundingBox",value:function(g,A,t,e,C){this._updateBoundingBox(g,A,t,e,C)}},{key:"getDimensionsFromLabel",value:function(g,A,t){this.textSize=this.labelModule.getTextSize(g,A,t);var e=this.textSize.width,C=this.textSize.height;return 0===e&&(e=14,C=14),{width:e,height:C}}}]),g}();function wf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var kf=function(g){eu(t,g);var A=wf(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._setMargins(C),I}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(A,t)){var e=this.getDimensionsFromLabel(g,A,t);this.width=e.width+this.margin.right+this.margin.left,this.height=e.height+this.margin.top+this.margin.bottom,this.radius=this.width/2}}},{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C),this.left=A-this.width/2,this.top=t-this.height/2,this.initContextForDraw(g,I),ot(g,this.left,this.top,this.width,this.height,I.borderRadius),this.performFill(g,I),this.updateBoundingBox(A,t,g,e,C),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C)}},{key:"updateBoundingBox",value:function(g,A,t,e,C){this._updateBoundingBox(g,A,t,e,C);var I=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(I)}},{key:"distanceToBorder",value:function(g,A){g&&this.resize(g);var t=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(A)),Math.abs(this.height/2/Math.sin(A)))+t}}]),t}(bf);function xf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Ef=function(g){eu(t,g);var A=xf(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C)).labelOffset=0,I.selected=!1,I}return Lo(t,[{key:"setOptions",value:function(g,A,t){this.options=g,void 0===A&&void 0===t||this.setImages(A,t)}},{key:"setImages",value:function(g,A){A&&this.selected?(this.imageObj=A,this.imageObjAlt=g):(this.imageObj=g,this.imageObjAlt=A)}},{key:"switchImages",value:function(g){var A=g&&!this.selected||!g&&this.selected;if(this.selected=g,void 0!==this.imageObjAlt&&A){var t=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=t}}},{key:"_getImagePadding",value:function(){var g={top:0,right:0,bottom:0,left:0};if(this.options.imagePadding){var A=this.options.imagePadding;"object"==zn(A)?(g.top=A.top,g.right=A.right,g.bottom=A.bottom,g.left=A.left):(g.top=A,g.right=A,g.bottom=A,g.left=A)}return g}},{key:"_resizeImage",value:function(){var g,A;if(!1===this.options.shapeProperties.useImageSize){var t=1,e=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?t=this.imageObj.width/this.imageObj.height:e=this.imageObj.height/this.imageObj.width),g=2*this.options.size*t,A=2*this.options.size*e}else{var C=this._getImagePadding();g=this.imageObj.width+C.left+C.right,A=this.imageObj.height+C.top+C.bottom}this.width=g,this.height=A,this.radius=.5*this.width}},{key:"_drawRawCircle",value:function(g,A,t,e){this.initContextForDraw(g,e),it(g,A,t,e.size),this.performFill(g,e)}},{key:"_drawImageAtPosition",value:function(g,A){if(0!=this.imageObj.width){g.globalAlpha=void 0!==A.opacity?A.opacity:1,this.enableShadow(g,A);var t=1;!0===this.options.shapeProperties.interpolation&&(t=this.imageObj.width/this.width/this.body.view.scale);var e=this._getImagePadding(),C=this.left+e.left,I=this.top+e.top,i=this.width-e.left-e.right,o=this.height-e.top-e.bottom;this.imageObj.drawImageAtPosition(g,t,C,I,i,o),this.disableShadow(g,A)}}},{key:"_drawImageLabel",value:function(g,A,t,e,C){var I=0;if(void 0!==this.height){I=.5*this.height;var i=this.labelModule.getTextSize(g,e,C);i.lineCount>=1&&(I+=i.height/2)}var o=t+I;this.options.label&&(this.labelOffset=I),this.labelModule.draw(g,A,o,e,C,"hanging")}}]),t}(bf);function Of(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Tf=function(g){eu(t,g);var A=Of(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._setMargins(C),I}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(A,t)){var e=this.getDimensionsFromLabel(g,A,t),C=Math.max(e.width+this.margin.right+this.margin.left,e.height+this.margin.top+this.margin.bottom);this.options.size=C/2,this.width=C,this.height=C,this.radius=this.width/2}}},{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C),this.left=A-this.width/2,this.top=t-this.height/2,this._drawRawCircle(g,A,t,I),this.updateBoundingBox(A,t),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,t,e,C)}},{key:"updateBoundingBox",value:function(g,A){this.boundingBox.top=A-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=A+this.options.size}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),.5*this.width}}]),t}(Ef);function Df(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Nf=function(g){eu(t,g);var A=Df(t);function t(g,e,C,I,i){var o;return So(this,t),(o=A.call(this,g,e,C)).setImages(I,i),o}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,e=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(e){var C=2*this.options.size;return this.width=C,this.height=C,void(this.radius=.5*this.width)}this.needsRefresh(A,t)&&this._resizeImage()}},{key:"draw",value:function(g,A,t,e,C,I){this.switchImages(e),this.resize();var i=A,o=t;"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=A,this.top=t,i+=this.width/2,o+=this.height/2):(this.left=A-this.width/2,this.top=t-this.height/2),this._drawRawCircle(g,i,o,I),g.save(),g.clip(),this._drawImageAtPosition(g,I),g.restore(),this._drawImageLabel(g,i,o,e,C),this.updateBoundingBox(A,t)}},{key:"updateBoundingBox",value:function(g,A){"top-left"===this.options.shapeProperties.coordinateOrigin?(this.boundingBox.top=A,this.boundingBox.left=g,this.boundingBox.right=g+2*this.options.size,this.boundingBox.bottom=A+2*this.options.size):(this.boundingBox.top=A-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=A+this.options.size),this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),.5*this.width}}]),t}(Ef);function Rf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Pf=function(g){eu(t,g);var A=Rf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:this.options.size};if(this.needsRefresh(A,t)){var C,I;this.labelModule.getTextSize(g,A,t);var i=2*e.size;this.width=null!==(C=this.customSizeWidth)&&void 0!==C?C:i,this.height=null!==(I=this.customSizeHeight)&&void 0!==I?I:i,this.radius=.5*this.width}}},{key:"_drawShape",value:function(g,A,t,e,C,I,i,o){var n,r=this;return this.resize(g,I,i,o),this.left=e-this.width/2,this.top=C-this.height/2,this.initContextForDraw(g,o),(n=A,Object.prototype.hasOwnProperty.call(at,n)?at[n]:function(g){for(var A=arguments.length,t=new Array(A>1?A-1:0),e=1;e<A;e++)t[e-1]=arguments[e];CanvasRenderingContext2D.prototype[n].call(g,t)})(g,e,C,o.size),this.performFill(g,o),void 0!==this.options.icon&&void 0!==this.options.icon.code&&(g.font=(I?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),g.fillStyle=this.options.icon.color||"black",g.textAlign="center",g.textBaseline="middle",g.fillText(this.options.icon.code,e,C)),{drawExternalLabel:function(){if(void 0!==r.options.label){r.labelModule.calculateLabelSize(g,I,i,e,C,"hanging");var A=C+.5*r.height+.5*r.labelModule.size.height;r.labelModule.draw(g,e,A,I,i,"hanging")}r.updateBoundingBox(e,C)}}}},{key:"updateBoundingBox",value:function(g,A){this.boundingBox.top=A-this.options.size,this.boundingBox.left=g-this.options.size,this.boundingBox.right=g+this.options.size,this.boundingBox.bottom=A+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))}}]),t}(bf);function Mf(g,A){var t=Xn(g);if(io){var e=io(g);A&&(e=qr(e).call(e,(function(A){return fo(g,A).enumerable}))),t.push.apply(t,e)}return t}function Bf(g){for(var A=1;A<arguments.length;A++){var t,e=null!=arguments[A]?arguments[A]:{};if(A%2)ir(t=Mf(Object(e),!0)).call(t,(function(A){jo(g,A,e[A])}));else if(Oo)Ro(g,Oo(e));else{var C;ir(C=Mf(Object(e))).call(C,(function(A){Zo(g,A,fo(e,A))}))}}return g}function zf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Zf=function(g){eu(t,g);var A=zf(t);function t(g,e,C,I){var i;return So(this,t),(i=A.call(this,g,e,C,I)).ctxRenderer=I,i}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C,I),this.left=A-this.width/2,this.top=t-this.height/2,g.save();var i=this.ctxRenderer({ctx:g,id:this.options.id,x:A,y:t,state:{selected:e,hover:C},style:Bf({},I),label:this.options.label});if(null!=i.drawNode&&i.drawNode(),g.restore(),i.drawExternalLabel){var o=i.drawExternalLabel;i.drawExternalLabel=function(){g.save(),o(),g.restore()}}return i.nodeDimensions&&(this.customSizeWidth=i.nodeDimensions.width,this.customSizeHeight=i.nodeDimensions.height),i}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function Sf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Ff=function(g){eu(t,g);var A=Sf(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._setMargins(C),I}return Lo(t,[{key:"resize",value:function(g,A,t){if(this.needsRefresh(A,t)){var e=this.getDimensionsFromLabel(g,A,t).width+this.margin.right+this.margin.left;this.width=e,this.height=e,this.radius=this.width/2}}},{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C),this.left=A-this.width/2,this.top=t-this.height/2,this.initContextForDraw(g,I),rt(g,A-this.width/2,t-this.height/2,this.width,this.height),this.performFill(g,I),this.updateBoundingBox(A,t,g,e,C),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(bf);function Gf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Lf=function(g){eu(t,g);var A=Gf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"diamond",4,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function jf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Vf=function(g){eu(t,g);var A=jf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"circle",2,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g){return g&&this.resize(g),this.options.size}}]),t}(Pf);function Yf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Wf=function(g){eu(t,g);var A=Yf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(A,t)){var e=this.getDimensionsFromLabel(g,A,t);this.height=2*e.height,this.width=e.width+e.height,this.radius=.5*this.width}}},{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C),this.left=A-.5*this.width,this.top=t-.5*this.height,this.initContextForDraw(g,I),nt(g,this.left,this.top,this.width,this.height),this.performFill(g,I),this.updateBoundingBox(A,t,g,e,C),this.labelModule.draw(g,A,t,e,C)}},{key:"distanceToBorder",value:function(g,A){g&&this.resize(g);var t=.5*this.width,e=.5*this.height,C=Math.sin(A)*t,I=Math.cos(A)*e;return t*e/Math.sqrt(C*C+I*I)}}]),t}(bf);function Qf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Uf=function(g){eu(t,g);var A=Qf(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._setMargins(C),I}return Lo(t,[{key:"resize",value:function(g,A,t){this.needsRefresh(A,t)&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(g,A,t,e,C,I){var i=this;return this.resize(g,e,C),this.options.icon.size=this.options.icon.size||50,this.left=A-this.width/2,this.top=t-this.height/2,this._icon(g,A,t,e,C,I),{drawExternalLabel:function(){if(void 0!==i.options.label){i.labelModule.draw(g,i.left+i.iconSize.width/2+i.margin.left,t+i.height/2+5,e)}i.updateBoundingBox(A,t)}}}},{key:"updateBoundingBox",value:function(g,A){if(this.boundingBox.top=A-.5*this.options.icon.size,this.boundingBox.left=g-.5*this.options.icon.size,this.boundingBox.right=g+.5*this.options.icon.size,this.boundingBox.bottom=A+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(g,A,t,e,C,I){var i=Number(this.options.icon.size);void 0!==this.options.icon.code?(g.font=[null!=this.options.icon.weight?this.options.icon.weight:e?"bold":"",(null!=this.options.icon.weight&&e?5:0)+i+"px",this.options.icon.face].join(" "),g.fillStyle=this.options.icon.color||"black",g.textAlign="center",g.textBaseline="middle",this.enableShadow(g,I),g.fillText(this.options.icon.code,A,t),this.disableShadow(g,I)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(bf);function _f(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Hf=function(g){eu(t,g);var A=_f(t);function t(g,e,C,I,i){var o;return So(this,t),(o=A.call(this,g,e,C)).setImages(I,i),o}return Lo(t,[{key:"resize",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,e=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(e){var C=2*this.options.size;return this.width=C,void(this.height=C)}this.needsRefresh(A,t)&&this._resizeImage()}},{key:"draw",value:function(g,A,t,e,C,I){g.save(),this.switchImages(e),this.resize();var i=A,o=t;if("top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=A,this.top=t,i+=this.width/2,o+=this.height/2):(this.left=A-this.width/2,this.top=t-this.height/2),!0===this.options.shapeProperties.useBorderWithImage){var n=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth,s=(e?r:n)/this.body.view.scale;g.lineWidth=Math.min(this.width,s),g.beginPath();var a=e?this.options.color.highlight.border:C?this.options.color.hover.border:this.options.color.border,d=e?this.options.color.highlight.background:C?this.options.color.hover.background:this.options.color.background;void 0!==I.opacity&&(a=fh(a,I.opacity),d=fh(d,I.opacity)),g.strokeStyle=a,g.fillStyle=d,g.rect(this.left-.5*g.lineWidth,this.top-.5*g.lineWidth,this.width+g.lineWidth,this.height+g.lineWidth),ga(g).call(g),this.performStroke(g,I),g.closePath()}this._drawImageAtPosition(g,I),this._drawImageLabel(g,i,o,e,C),this.updateBoundingBox(A,t),g.restore()}},{key:"updateBoundingBox",value:function(g,A){this.resize(),"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=g,this.top=A):(this.left=g-this.width/2,this.top=A-this.height/2),this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Ef);function Kf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Xf=function(g){eu(t,g);var A=Kf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"square",2,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function Jf(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var qf=function(g){eu(t,g);var A=Jf(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"hexagon",4,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function $f(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var gv=function(g){eu(t,g);var A=$f(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"star",4,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function Av(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var tv=function(g){eu(t,g);var A=Av(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._setMargins(C),I}return Lo(t,[{key:"resize",value:function(g,A,t){this.needsRefresh(A,t)&&(this.textSize=this.labelModule.getTextSize(g,A,t),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(g,A,t,e,C,I){this.resize(g,e,C),this.left=A-this.width/2,this.top=t-this.height/2,this.enableShadow(g,I),this.labelModule.draw(g,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,e,C),this.disableShadow(g,I),this.updateBoundingBox(A,t,g,e,C)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(bf);function ev(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Cv=function(g){eu(t,g);var A=ev(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"triangle",3,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function Iv(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var iv=function(g){eu(t,g);var A=Iv(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"draw",value:function(g,A,t,e,C,I){return this._drawShape(g,"triangleDown",3,A,t,e,C,I)}},{key:"distanceToBorder",value:function(g,A){return this._distanceToBorder(g,A)}}]),t}(Pf);function ov(g,A){var t=Xn(g);if(io){var e=io(g);A&&(e=qr(e).call(e,(function(A){return fo(g,A).enumerable}))),t.push.apply(t,e)}return t}function nv(g){for(var A=1;A<arguments.length;A++){var t,e=null!=arguments[A]?arguments[A]:{};if(A%2)ir(t=ov(Object(e),!0)).call(t,(function(A){jo(g,A,e[A])}));else if(Oo)Ro(g,Oo(e));else{var C;ir(C=ov(Object(e))).call(C,(function(A){Zo(g,A,fo(e,A))}))}}return g}var rv=function(){function g(A,t,e,C,I,i){So(this,g),this.options=Oh(I),this.globalOptions=I,this.defaultOptions=i,this.body=t,this.edges=[],this.id=void 0,this.imagelist=e,this.grouplist=C,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new mf(this.body,this.options,!1),this.setOptions(A)}return Lo(g,[{key:"attachEdge",value:function(g){var A;-1===Ts(A=this.edges).call(A,g)&&this.edges.push(g)}},{key:"detachEdge",value:function(g){var A,t,e=Ts(A=this.edges).call(A,g);-1!=e&&Or(t=this.edges).call(t,e,1)}},{key:"setOptions",value:function(A){var t=this.options.shape;if(A){if(void 0!==A.color&&(this._localColor=A.color),void 0!==A.id&&(this.id=A.id),void 0===this.id)throw new Error("Node must have an id");g.checkMass(A,this.id),void 0!==A.x&&(null===A.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=vs(A.x),this.predefinedPosition=!0)),void 0!==A.y&&(null===A.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=vs(A.y),this.predefinedPosition=!0)),void 0!==A.size&&(this.baseSize=A.size),void 0!==A.value&&(A.value=If(A.value)),g.parseOptions(this.options,A,!0,this.globalOptions,this.grouplist);var e=[A,this.options,this.defaultOptions];return this.chooser=df("node",e),this._load_images(),this.updateLabelModule(A),void 0!==A.opacity&&g.checkOpacity(A.opacity)&&(this.options.opacity=A.opacity),this.updateShape(t),void 0!==A.hidden||void 0!==A.physics}}},{key:"_load_images",value:function(){if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(void 0!==this.options.image){if(void 0===this.imagelist)throw new Error("Internal Error: No images provided");if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(void 0===this.options.image.unselected)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}},{key:"getFormattingValues",value:function(){var g={color:this.options.color.background,opacity:this.options.opacity,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};if(this.selected||this.hover?!0===this.chooser?this.selected?(null!=this.options.borderWidthSelected?g.borderWidth=this.options.borderWidthSelected:g.borderWidth*=2,g.color=this.options.color.highlight.background,g.borderColor=this.options.color.highlight.border,g.shadow=this.options.shadow.enabled):this.hover&&(g.color=this.options.color.hover.background,g.borderColor=this.options.color.hover.border,g.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(g,this.options.id,this.selected,this.hover),!1===g.shadow&&(g.shadowColor===this.options.shadow.color&&g.shadowSize===this.options.shadow.size&&g.shadowX===this.options.shadow.x&&g.shadowY===this.options.shadow.y||(g.shadow=!0))):g.shadow=this.options.shadow.enabled,void 0!==this.options.opacity){var A=this.options.opacity;g.borderColor=fh(g.borderColor,A),g.color=fh(g.color,A),g.shadowColor=fh(g.shadowColor,A)}return g}},{key:"updateLabelModule",value:function(A){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),g.updateGroupOptions(this.options,nv(nv({},A),{},{color:A&&A.color||this._localColor||void 0}),this.grouplist);var t=this.grouplist.get(this.options.group,!1),e=[A,this.options,t,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(g){if(g===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new kf(this.options,this.body,this.labelModule);break;case"circle":this.shape=new Tf(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new Nf(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"custom":this.shape=new Zf(this.options,this.body,this.labelModule,this.options.ctxRenderer);break;case"database":this.shape=new Ff(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new Lf(this.options,this.body,this.labelModule);break;case"dot":this.shape=new Vf(this.options,this.body,this.labelModule);break;case"ellipse":this.shape=new Wf(this.options,this.body,this.labelModule);break;case"icon":this.shape=new Uf(this.options,this.body,this.labelModule);break;case"image":this.shape=new Hf(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new Xf(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new qf(this.options,this.body,this.labelModule);break;case"star":this.shape=new gv(this.options,this.body,this.labelModule);break;case"text":this.shape=new tv(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new Cv(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new iv(this.options,this.body,this.labelModule);break;default:this.shape=new Wf(this.options,this.body,this.labelModule)}this.needsRefresh()}},{key:"select",value:function(){this.selected=!0,this.needsRefresh()}},{key:"unselect",value:function(){this.selected=!1,this.needsRefresh()}},{key:"needsRefresh",value:function(){this.shape.refreshNeeded=!0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(g,A){return this.shape.distanceToBorder(g,A)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"getLabelSize",value:function(){return this.labelModule.size()}},{key:"setValueRange",value:function(g,A,t){if(void 0!==this.options.value){var e=this.options.scaling.customScalingFunction(g,A,t,this.options.value),C=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var I=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+e*I}this.options.size=this.options.scaling.min+e*C}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(g){var A=this.getFormattingValues();return this.shape.draw(g,this.x,this.y,this.selected,this.hover,A)||{}}},{key:"updateBoundingBox",value:function(g){this.shape.updateBoundingBox(this.x,this.y,g)}},{key:"resize",value:function(g){var A=this.getFormattingValues();this.shape.resize(g,this.selected,this.hover,A)}},{key:"getItemsOnPoint",value:function(g){var A=[];return this.labelModule.visible()&&hf(this.labelModule.getSize(),g)&&A.push({nodeId:this.id,labelId:0}),hf(this.shape.boundingBox,g)&&A.push({nodeId:this.id}),A}},{key:"isOverlappingWith",value:function(g){return this.shape.left<g.right&&this.shape.left+this.shape.width>g.left&&this.shape.top<g.bottom&&this.shape.top+this.shape.height>g.top}},{key:"isBoundingBoxOverlappingWith",value:function(g){return this.shape.boundingBox.left<g.right&&this.shape.boundingBox.right>g.left&&this.shape.boundingBox.top<g.bottom&&this.shape.boundingBox.bottom>g.top}}],[{key:"checkOpacity",value:function(g){return 0<=g&&g<=1}},{key:"checkCoordinateOrigin",value:function(g){return void 0===g||"center"===g||"top-left"===g}},{key:"updateGroupOptions",value:function(A,t,e){var C;if(void 0!==e){var I=A.group;if(void 0!==t&&void 0!==t.group&&I!==t.group)throw new Error("updateGroupOptions: group values in options don't match.");if("number"==typeof I||"string"==typeof I&&""!=I){var i=e.get(I);void 0!==i.opacity&&void 0===t.opacity&&(g.checkOpacity(i.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+i.opacity),i.opacity=void 0));var o=qr(C=af(t)).call(C,(function(g){return null!=t[g]}));o.push("font"),ah(o,A,i),A.color=yh(A.color)}}}},{key:"parseOptions",value:function(A,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],C=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},I=arguments.length>4?arguments[4]:void 0,i=["color","fixed","shadow"];if(ah(i,A,t,e),g.checkMass(t),void 0!==A.opacity&&(g.checkOpacity(A.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+A.opacity),A.opacity=void 0)),void 0!==t.opacity&&(g.checkOpacity(t.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity),t.opacity=void 0)),t.shapeProperties&&!g.checkCoordinateOrigin(t.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+t.shapeProperties.coordinateOrigin),Th(A,t,"shadow",C),void 0!==t.color&&null!==t.color){var o=yh(t.color);rh(A.color,o)}else!0===e&&null===t.color&&(A.color=Oh(C.color));void 0!==t.fixed&&null!==t.fixed&&("boolean"==typeof t.fixed?(A.fixed.x=t.fixed,A.fixed.y=t.fixed):(void 0!==t.fixed.x&&"boolean"==typeof t.fixed.x&&(A.fixed.x=t.fixed.x),void 0!==t.fixed.y&&"boolean"==typeof t.fixed.y&&(A.fixed.y=t.fixed.y))),!0===e&&null===t.font&&(A.font=Oh(C.font)),g.updateGroupOptions(A,t,I),void 0!==t.scaling&&Th(A.scaling,t.scaling,"label",C.scaling)}},{key:"checkMass",value:function(g,A){if(void 0!==g.mass&&g.mass<=0){var t="";void 0!==A&&(t="in node id: "+A),console.error("%cNegative or zero mass disallowed"+t+", setting mass to 1.",jh),g.mass=1}}}]),g}();function sv(g,A){var t=void 0!==Sn&&mI(g)||g["@@iterator"];if(!t){if(Yn(g)||(t=function(g,A){var t;if(!g)return;if("string"==typeof g)return av(g,A);var e=jn(t=Object.prototype.toString.call(g)).call(t,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return eI(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return av(g,A)}(g))||A&&g&&"number"==typeof g.length){t&&(g=t);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){t=t.call(g)},n:function(){var g=t.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw I}}}}function av(g,A){(null==A||A>g.length)&&(A=g.length);for(var t=0,e=new Array(A);t<A;t++)e[t]=g[t];return e}var dv=function(){function g(A,t,e,C){var I,i=this;if(So(this,g),this.body=A,this.images=t,this.groups=e,this.layoutEngine=C,this.body.functions.createNode=It(I=this.create).call(I,this),this.nodesListeners={add:function(g,A){i.add(A.items)},update:function(g,A){i.update(A.items,A.data,A.oldData)},remove:function(g,A){i.remove(A.items)}},this.defaultOptions={borderWidth:1,borderWidthSelected:void 0,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},opacity:void 0,fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,imagePadding:{top:0,right:0,bottom:0,left:0},label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(g,A,t,e){if(A===g)return.5;var C=1/(A-g);return Math.max(0,(e-g)*C)}},shadow:{enabled:!1,color:"rgba(0, 0, 0, 0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1,coordinateOrigin:"center"},size:25,title:void 0,value:void 0,x:void 0,y:void 0},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=Oh(this.defaultOptions),this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g,A,t=this;this.body.emitter.on("refreshNodes",It(g=this.refresh).call(g,this)),this.body.emitter.on("refresh",It(A=this.refresh).call(A,this)),this.body.emitter.on("destroy",(function(){uh(t.nodesListeners,(function(g,A){t.body.data.nodes&&t.body.data.nodes.off(A,g)})),delete t.body.functions.createNode,delete t.nodesListeners.add,delete t.nodesListeners.update,delete t.nodesListeners.remove,delete t.nodesListeners}))}},{key:"setOptions",value:function(g){if(void 0!==g){if(rv.parseOptions(this.options,g),void 0!==g.opacity&&(Bc(g.opacity)||!Zc(g.opacity)||g.opacity<0||g.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+g.opacity):this.options.opacity=g.opacity),void 0!==g.shape)for(var A in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,A)&&this.body.nodes[A].updateShape();if(void 0!==g.font||void 0!==g.widthConstraint||void 0!==g.heightConstraint)for(var t=0,e=Xn(this.body.nodes);t<e.length;t++){var C=e[t];this.body.nodes[C].updateLabelModule(),this.body.nodes[C].needsRefresh()}if(void 0!==g.size)for(var I in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,I)&&this.body.nodes[I].needsRefresh();void 0===g.hidden&&void 0===g.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this.body.data.nodes;if($p("id",g))this.body.data.nodes=g;else if(Yn(g))this.body.data.nodes=new Xp,this.body.data.nodes.add(g);else{if(g)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new Xp}if(t&&uh(this.nodesListeners,(function(g,A){t.off(A,g)})),this.body.nodes={},this.body.data.nodes){var e=this;uh(this.nodesListeners,(function(g,A){e.body.data.nodes.on(A,g)}));var C=this.body.data.nodes.getIds();this.add(C,!0)}!1===A&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(g){for(var A,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=[],C=0;C<g.length;C++){A=g[C];var I=this.body.data.nodes.get(A),i=this.create(I);e.push(i),this.body.nodes[A]=i}this.layoutEngine.positionInitially(e),!1===t&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(g,A,t){for(var e=this.body.nodes,C=!1,I=0;I<g.length;I++){var i=g[I],o=e[i],n=A[I];void 0!==o?o.setOptions(n)&&(C=!0):(C=!0,o=this.create(n),e[i]=o)}C||void 0===t||(C=Lc(A).call(A,(function(g,A){var e=t[A];return e&&e.level!==g.level}))),!0===C?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(g){for(var A=this.body.nodes,t=0;t<g.length;t++){delete A[g[t]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rv;return new A(g,this.body,this.images,this.groups,this.options,this.defaultOptions)}},{key:"refresh",value:function(){var g=this,A=arguments.length>0&&void 0!==arguments[0]&&arguments[0];uh(this.body.nodes,(function(t,e){var C=g.body.data.nodes.get(e);void 0!==C&&(!0===A&&t.setOptions({x:null,y:null}),t.setOptions({fixed:!1}),t.setOptions(C))}))}},{key:"getPositions",value:function(g){var A={};if(void 0!==g){if(!0===Yn(g)){for(var t=0;t<g.length;t++)if(void 0!==this.body.nodes[g[t]]){var e=this.body.nodes[g[t]];A[g[t]]={x:Math.round(e.x),y:Math.round(e.y)}}}else if(void 0!==this.body.nodes[g]){var C=this.body.nodes[g];A[g]={x:Math.round(C.x),y:Math.round(C.y)}}}else for(var I=0;I<this.body.nodeIndices.length;I++){var i=this.body.nodes[this.body.nodeIndices[I]];A[this.body.nodeIndices[I]]={x:Math.round(i.x),y:Math.round(i.y)}}return A}},{key:"getPosition",value:function(g){if(null==g)throw new TypeError("No id was specified for getPosition method.");if(null==this.body.nodes[g])throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(g));return{x:Math.round(this.body.nodes[g].x),y:Math.round(this.body.nodes[g].y)}}},{key:"storePositions",value:function(){var g,A=[],t=this.body.data.nodes.getDataSet(),e=sv(t.get());try{for(e.s();!(g=e.n()).done;){var C=g.value,I=C.id,i=this.body.nodes[I],o=Math.round(i.x),n=Math.round(i.y);C.x===o&&C.y===n||A.push({id:I,x:o,y:n})}}catch(g){e.e(g)}finally{e.f()}t.update(A)}},{key:"getBoundingBox",value:function(g){if(void 0!==this.body.nodes[g])return this.body.nodes[g].shape.boundingBox}},{key:"getConnectedNodes",value:function(g,A){var t=[];if(void 0!==this.body.nodes[g])for(var e=this.body.nodes[g],C={},I=0;I<e.edges.length;I++){var i=e.edges[I];"to"!==A&&i.toId==e.id?void 0===C[i.fromId]&&(t.push(i.fromId),C[i.fromId]=!0):"from"!==A&&i.fromId==e.id&&void 0===C[i.toId]&&(t.push(i.toId),C[i.toId]=!0)}return t}},{key:"getConnectedEdges",value:function(g){var A=[];if(void 0!==this.body.nodes[g])for(var t=this.body.nodes[g],e=0;e<t.edges.length;e++)A.push(t.edges[e].id);else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ",g);return A}},{key:"moveNode",value:function(g,A,t){var e=this;void 0!==this.body.nodes[g]?(this.body.nodes[g].x=Number(A),this.body.nodes[g].y=Number(t),Hs((function(){e.body.emitter.emit("startSimulation")}),0)):console.error("Node id supplied to moveNode does not exist. Provided: ",g)}}]),g}(),hv=w,lv=Hg,cv=gg,uv=C,pv=Ce;aA({target:"Reflect",stat:!0},{get:function g(A,t){var e,C,I=arguments.length<3?A:arguments[2];return lv(A)===I?A[t]:(e=uv.f(A,t))?cv(e,"value")?e.value:void 0===e.get?void 0:e.get.call(I):hv(C=pv(A))?g(C,t,I):void 0}});var fv=k.Reflect.get,vv=po;function yv(g,A,t){return(yv="undefined"!=typeof Reflect&&fv?fv:function(g,A,t){var e=function(g,A){for(;!Object.prototype.hasOwnProperty.call(g,A)&&null!==(g=iu(g)););return g}(g,A);if(e){var C=vv(e,A);return C.get?C.get.call(t):C.value}})(g,A,t||g)}var mv=aA,bv=Math.hypot,wv=Math.abs,kv=Math.sqrt;mv({target:"Math",stat:!0,forced:!!bv&&bv(1/0,NaN)!==1/0},{hypot:function(g,A){for(var t,e,C=0,I=0,i=arguments.length,o=0;I<i;)o<(t=wv(arguments[I++]))?(C=C*(e=o/t)*e+1,o=t):C+=t>0?(e=t/o)*e:t;return o===1/0?1/0:o*kv(C)}});var xv=k.Math.hypot;function Ev(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Ov=function(){function g(){So(this,g)}return Lo(g,null,[{key:"transform",value:function(g,A){Yn(g)||(g=[g]);for(var t=A.point.x,e=A.point.y,C=A.angle,I=A.length,i=0;i<g.length;++i){var o=g[i],n=o.x*Math.cos(C)-o.y*Math.sin(C),r=o.x*Math.sin(C)+o.y*Math.cos(C);o.x=t+I*n,o.y=e+I*r}}},{key:"drawPath",value:function(g,A){g.beginPath(),g.moveTo(A[0].x,A[0].y);for(var t=1;t<A.length;++t)g.lineTo(A[t].x,A[t].y);g.closePath()}}]),g}(),Tv=function(g){eu(t,g);var A=Ev(t);function t(){return So(this,t),A.apply(this,arguments)}return Lo(t,null,[{key:"draw",value:function(g,A){if(A.image){g.save(),g.translate(A.point.x,A.point.y),g.rotate(Math.PI/2+A.angle);var t=null!=A.imageWidth?A.imageWidth:A.image.width,e=null!=A.imageHeight?A.imageHeight:A.image.height;A.image.drawImageAtPosition(g,1,-t/2,0,t,e),g.restore()}return!1}}]),t}(Ov),Dv=function(g){eu(t,g);var A=Ev(t);function t(){return So(this,t),A.apply(this,arguments)}return Lo(t,null,[{key:"draw",value:function(g,A){var t=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),t}(Ov),Nv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,y:-.3}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Rv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t={x:-.4,y:0};Ov.transform(t,A),g.strokeStyle=g.fillStyle,g.fillStyle="rgba(0, 0, 0, 0)";var e=Math.PI,C=A.angle-e/2,I=A.angle+e/2;return g.beginPath(),g.arc(t.x,t.y,.4*A.length,C,I,!1),g.stroke(),!0}}]),g}(),Pv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t={x:-.3,y:0};Ov.transform(t,A),g.strokeStyle=g.fillStyle,g.fillStyle="rgba(0, 0, 0, 0)";var e=Math.PI,C=A.angle+e/2,I=A.angle+3*e/2;return g.beginPath(),g.arc(t.x,t.y,.4*A.length,C,I,!1),g.stroke(),!0}}]),g}(),Mv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:.02,y:0},{x:-1,y:.3},{x:-1,y:-.3}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Bv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),zv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t={x:-.4,y:0};return Ov.transform(t,A),it(g,t.x,t.y,.4*A.length),!0}}]),g}(),Zv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Sv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{x:-.6,y:.3}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Fv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,y:.3}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Gv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,y:0}];return Ov.transform(t,A),Ov.drawPath(g,t),!0}}]),g}(),Lv=function(){function g(){So(this,g)}return Lo(g,null,[{key:"draw",value:function(g,A){var t;switch(A.type&&(t=A.type.toLowerCase()),t){case"image":return Tv.draw(g,A);case"circle":return zv.draw(g,A);case"box":return Sv.draw(g,A);case"crow":return Nv.draw(g,A);case"curve":return Rv.draw(g,A);case"diamond":return Fv.draw(g,A);case"inv_curve":return Pv.draw(g,A);case"triangle":return Mv.draw(g,A);case"inv_triangle":return Bv.draw(g,A);case"bar":return Zv.draw(g,A);case"vee":return Gv.draw(g,A);case"arrow":default:return Dv.draw(g,A)}}}]),g}();function jv(g,A){var t=Xn(g);if(io){var e=io(g);A&&(e=qr(e).call(e,(function(A){return fo(g,A).enumerable}))),t.push.apply(t,e)}return t}function Vv(g){for(var A=1;A<arguments.length;A++){var t,e=null!=arguments[A]?arguments[A]:{};if(A%2)ir(t=jv(Object(e),!0)).call(t,(function(A){jo(g,A,e[A])}));else if(Oo)Ro(g,Oo(e));else{var C;ir(C=jv(Object(e))).call(C,(function(A){Zo(g,A,fo(e,A))}))}}return g}var Yv=function(){function g(A,t,e){So(this,g),this._body=t,this._labelModule=e,this.color={},this.colorDirty=!0,this.hoverWidth=1.5,this.selectionWidth=2,this.setOptions(A),this.fromPoint=this.from,this.toPoint=this.to}return Lo(g,[{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(g){this.options=g,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(g,A,t,e){var C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.getViaNode();g.strokeStyle=this.getColor(g,A),g.lineWidth=A.width,!1!==A.dashes?this._drawDashedLine(g,A,C):this._drawLine(g,A,C)}},{key:"_drawLine",value:function(g,A,t,e,C){if(this.from!=this.to)this._line(g,A,t,e,C);else{var I=Pn(this._getCircleData(g),3),i=I[0],o=I[1],n=I[2];this._circle(g,A,i,o,n)}}},{key:"_drawDashedLine",value:function(g,A,t,e,C){g.lineCap="round";var I=Yn(A.dashes)?A.dashes:[5,5];if(void 0!==g.setLineDash){if(g.save(),g.setLineDash(I),g.lineDashOffset=0,this.from!=this.to)this._line(g,A,t);else{var i=Pn(this._getCircleData(g),3),o=i[0],n=i[1],r=i[2];this._circle(g,A,o,n,r)}g.setLineDash([0]),g.lineDashOffset=0,g.restore()}else{if(this.from!=this.to)st(g,this.from.x,this.from.y,this.to.x,this.to.y,I);else{var s=Pn(this._getCircleData(g),3),a=s[0],d=s[1],h=s[2];this._circle(g,A,a,d,h)}this.enableShadow(g,A),g.stroke(),this.disableShadow(g,A)}}},{key:"findBorderPosition",value:function(g,A,t){return this.from!=this.to?this._findBorderPosition(g,A,t):this._findBorderPositionCircle(g,A,t)}},{key:"findBorderPositions",value:function(g){if(this.from!=this.to)return{from:this._findBorderPosition(this.from,g),to:this._findBorderPosition(this.to,g)};var A,t=Pn(jn(A=this._getCircleData(g)).call(A,0,2),2),e=t[0],C=t[1];return{from:this._findBorderPositionCircle(this.from,g,{x:e,y:C,low:.25,high:.6,direction:-1}),to:this._findBorderPositionCircle(this.from,g,{x:e,y:C,low:.6,high:.8,direction:1})}}},{key:"_getCircleData",value:function(g){var A=this.options.selfReference.size;void 0!==g&&void 0===this.from.shape.width&&this.from.shape.resize(g);var t=cf(g,this.options.selfReference.angle,A,this.from);return[t.x,t.y,A]}},{key:"_pointOnCircle",value:function(g,A,t,e){var C=2*e*Math.PI;return{x:g+t*Math.cos(C),y:A-t*Math.sin(C)}}},{key:"_findBorderPositionCircle",value:function(g,A,t){var e,C=t.x,I=t.y,i=t.low,o=t.high,n=t.direction,r=this.options.selfReference.size,s=.5*(i+o),a=0;!0===this.options.arrowStrikethrough&&(-1===n?a=this.options.endPointOffset.from:1===n&&(a=this.options.endPointOffset.to));var d=0;do{s=.5*(i+o),e=this._pointOnCircle(C,I,r,s);var h=Math.atan2(g.y-e.y,g.x-e.x),l=g.distanceToBorder(A,h)+a-Math.sqrt(Math.pow(e.x-g.x,2)+Math.pow(e.y-g.y,2));if(Math.abs(l)<.05)break;l>0?n>0?i=s:o=s:n>0?o=s:i=s,++d}while(i<=o&&d<10);return Vv(Vv({},e),{},{t:s})}},{key:"getLineWidth",value:function(g,A){return!0===g?Math.max(this.selectionWidth,.3/this._body.view.scale):!0===A?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)}},{key:"getColor",value:function(g,A){if(!1!==A.inheritsColor){if("both"===A.inheritsColor&&this.from.id!==this.to.id){var t=g.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),e=this.from.options.color.highlight.border,C=this.to.options.color.highlight.border;return!1===this.from.selected&&!1===this.to.selected?(e=fh(this.from.options.color.border,A.opacity),C=fh(this.to.options.color.border,A.opacity)):!0===this.from.selected&&!1===this.to.selected?C=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(e=this.from.options.color.border),t.addColorStop(0,e),t.addColorStop(1,C),t}return"to"===A.inheritsColor?fh(this.to.options.color.border,A.opacity):fh(this.from.options.color.border,A.opacity)}return fh(A.color,A.opacity)}},{key:"_circle",value:function(g,A,t,e,C){this.enableShadow(g,A);var I=0,i=2*Math.PI;if(!this.options.selfReference.renderBehindTheNode){var o=this.options.selfReference.angle,n=this.options.selfReference.angle+Math.PI,r=this._findBorderPositionCircle(this.from,g,{x:t,y:e,low:o,high:n,direction:-1}),s=this._findBorderPositionCircle(this.from,g,{x:t,y:e,low:o,high:n,direction:1});I=Math.atan2(r.y-e,r.x-t),i=Math.atan2(s.y-e,s.x-t)}g.beginPath(),g.arc(t,e,C,I,i,!1),g.stroke(),this.disableShadow(g,A)}},{key:"getDistanceToEdge",value:function(g,A,t,e,C,I){if(this.from!=this.to)return this._getDistanceToEdge(g,A,t,e,C,I);var i=Pn(this._getCircleData(void 0),3),o=i[0],n=i[1],r=i[2],s=o-C,a=n-I;return Math.abs(Math.sqrt(s*s+a*a)-r)}},{key:"_getDistanceToLine",value:function(g,A,t,e,C,I){var i=t-g,o=e-A,n=((C-g)*i+(I-A)*o)/(i*i+o*o);n>1?n=1:n<0&&(n=0);var r=g+n*i-C,s=A+n*o-I;return Math.sqrt(r*r+s*s)}},{key:"getArrowData",value:function(g,A,t,e,C,I){var i,o,n,r,s,a,d,h=I.width;"from"===A?(n=this.from,r=this.to,s=I.fromArrowScale<0,a=Math.abs(I.fromArrowScale),d=I.fromArrowType):"to"===A?(n=this.to,r=this.from,s=I.toArrowScale<0,a=Math.abs(I.toArrowScale),d=I.toArrowType):(n=this.to,r=this.from,s=I.middleArrowScale<0,a=Math.abs(I.middleArrowScale),d=I.middleArrowType);var l=15*a+3*h;if(n!=r){var c=l/xv(n.x-r.x,n.y-r.y);if("middle"!==A)if(!0===this.options.smooth.enabled){var u=this._findBorderPosition(n,g,{via:t}),p=this.getPoint(u.t+c*("from"===A?1:-1),t);i=Math.atan2(u.y-p.y,u.x-p.x),o=u}else i=Math.atan2(n.y-r.y,n.x-r.x),o=this._findBorderPosition(n,g);else{var f=(s?-c:c)/2,v=this.getPoint(.5+f,t),y=this.getPoint(.5-f,t);i=Math.atan2(v.y-y.y,v.x-y.x),o=this.getPoint(.5,t)}}else{var m=Pn(this._getCircleData(g),3),b=m[0],w=m[1],k=m[2];if("from"===A){var x=this.options.selfReference.angle,E=this.options.selfReference.angle+Math.PI,O=this._findBorderPositionCircle(this.from,g,{x:b,y:w,low:x,high:E,direction:-1});i=-2*O.t*Math.PI+1.5*Math.PI+.1*Math.PI,o=O}else if("to"===A){var T=this.options.selfReference.angle,D=this.options.selfReference.angle+Math.PI,N=this._findBorderPositionCircle(this.from,g,{x:b,y:w,low:T,high:D,direction:1});i=-2*N.t*Math.PI+1.5*Math.PI-1.1*Math.PI,o=N}else{var R=this.options.selfReference.angle/(2*Math.PI);o=this._pointOnCircle(b,w,k,R),i=-2*R*Math.PI+1.5*Math.PI+.1*Math.PI}}return{point:o,core:{x:o.x-.9*l*Math.cos(i),y:o.y-.9*l*Math.sin(i)},angle:i,length:l,type:d}}},{key:"drawArrowHead",value:function(g,A,t,e,C){g.strokeStyle=this.getColor(g,A),g.fillStyle=g.strokeStyle,g.lineWidth=A.width,Lv.draw(g,C)&&(this.enableShadow(g,A),ga(g).call(g),this.disableShadow(g,A))}},{key:"enableShadow",value:function(g,A){!0===A.shadow&&(g.shadowColor=A.shadowColor,g.shadowBlur=A.shadowSize,g.shadowOffsetX=A.shadowX,g.shadowOffsetY=A.shadowY)}},{key:"disableShadow",value:function(g,A){!0===A.shadow&&(g.shadowColor="rgba(0, 0, 0, 0)",g.shadowBlur=0,g.shadowOffsetX=0,g.shadowOffsetY=0)}},{key:"drawBackground",value:function(g,A){if(!1!==A.background){var t={strokeStyle:g.strokeStyle,lineWidth:g.lineWidth,dashes:g.dashes};g.strokeStyle=A.backgroundColor,g.lineWidth=A.backgroundSize,this.setStrokeDashed(g,A.backgroundDashes),g.stroke(),g.strokeStyle=t.strokeStyle,g.lineWidth=t.lineWidth,g.dashes=t.dashes,this.setStrokeDashed(g,A.dashes)}}},{key:"setStrokeDashed",value:function(g,A){if(!1!==A)if(void 0!==g.setLineDash){var t=Yn(A)?A:[5,5];g.setLineDash(t)}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else void 0!==g.setLineDash?g.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")}}]),g}();function Wv(g,A){var t=Xn(g);if(io){var e=io(g);A&&(e=qr(e).call(e,(function(A){return fo(g,A).enumerable}))),t.push.apply(t,e)}return t}function Qv(g){for(var A=1;A<arguments.length;A++){var t,e=null!=arguments[A]?arguments[A]:{};if(A%2)ir(t=Wv(Object(e),!0)).call(t,(function(A){jo(g,A,e[A])}));else if(Oo)Ro(g,Oo(e));else{var C;ir(C=Wv(Object(e))).call(C,(function(A){Zo(g,A,fo(e,A))}))}}return g}function Uv(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var _v=function(g){eu(t,g);var A=Uv(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_findBorderPositionBezier",value:function(g,A){var t,e,C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),I=10,i=.2,o=!1,n=1,r=0,s=this.to,a=this.options.endPointOffset?this.options.endPointOffset.to:0;g.id===this.from.id&&(s=this.from,o=!0,a=this.options.endPointOffset?this.options.endPointOffset.from:0),!1===this.options.arrowStrikethrough&&(a=0);var d=0;do{e=.5*(r+n),t=this.getPoint(e,C);var h=Math.atan2(s.y-t.y,s.x-t.x),l=s.distanceToBorder(A,h)+a,c=Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2)),u=l-c;if(Math.abs(u)<i)break;u<0?!1===o?r=e:n=e:!1===o?n=e:r=e,++d}while(r<=n&&d<I);return Qv(Qv({},t),{},{t:e})}},{key:"_getDistanceToBezierEdge",value:function(g,A,t,e,C,I,i){var o,n,r,s,a,d=1e9,h=g,l=A;for(n=1;n<10;n++)r=.1*n,s=Math.pow(1-r,2)*g+2*r*(1-r)*i.x+Math.pow(r,2)*t,a=Math.pow(1-r,2)*A+2*r*(1-r)*i.y+Math.pow(r,2)*e,n>0&&(d=(o=this._getDistanceToLine(h,l,s,a,C,I))<d?o:d),h=s,l=a;return d}},{key:"_bezierCurve",value:function(g,A,t,e){g.beginPath(),g.moveTo(this.fromPoint.x,this.fromPoint.y),null!=t&&null!=t.x?null!=e&&null!=e.x?g.bezierCurveTo(t.x,t.y,e.x,e.y,this.toPoint.x,this.toPoint.y):g.quadraticCurveTo(t.x,t.y,this.toPoint.x,this.toPoint.y):g.lineTo(this.toPoint.x,this.toPoint.y),this.drawBackground(g,A),this.enableShadow(g,A),g.stroke(),this.disableShadow(g,A)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}}]),t}(Yv);function Hv(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Kv=function(g){eu(t,g);var A=Hv(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C)).via=I.via,I._boundFunction=function(){I.positionBezierNode()},I._body.emitter.on("_repositionBezierNodes",I._boundFunction),I}return Lo(t,[{key:"setOptions",value:function(g){yv(iu(t.prototype),"setOptions",this).call(this,g);var A=!1;this.options.physics!==g.physics&&(A=!0),this.options=g,this.id=this.options.id,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.setupSupportNode(),this.connect(),!0===A&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],void 0===this.from||void 0===this.to||!1===this.options.physics||this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this._body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var g="edgeId:"+this.id,A=this._body.functions.createNode({id:g,shape:"circle",physics:!0,hidden:!0});this._body.nodes[g]=A,this.via=A,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(g,A,t){this._bezierCurve(g,A,t)}},{key:"_getViaCoordinates",value:function(){return this.via}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via;if(this.from===this.to){var t=this._getCircleData(),e=Pn(t,3),C=e[0],I=e[1],i=e[2],o=2*Math.PI*(1-g);return{x:C+i*Math.sin(o),y:I+i-i*(1-Math.cos(o))}}return{x:Math.pow(1-g,2)*this.fromPoint.x+2*g*(1-g)*A.x+Math.pow(g,2)*this.toPoint.x,y:Math.pow(1-g,2)*this.fromPoint.y+2*g*(1-g)*A.y+Math.pow(g,2)*this.toPoint.y}}},{key:"_findBorderPosition",value:function(g,A){return this._findBorderPositionBezier(g,A,this.via)}},{key:"_getDistanceToEdge",value:function(g,A,t,e,C,I){return this._getDistanceToBezierEdge(g,A,t,e,C,I,this.via)}}]),t}(_v);function Xv(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var Jv=function(g){eu(t,g);var A=Xv(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_line",value:function(g,A,t){this._bezierCurve(g,A,t)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var g,A,t=this.options.smooth.roundness,e=this.options.smooth.type,C=Math.abs(this.from.x-this.to.x),I=Math.abs(this.from.y-this.to.y);if("discrete"===e||"diagonalCross"===e){var i,o;i=o=C<=I?t*I:t*C,this.from.x>this.to.x&&(i=-i),this.from.y>=this.to.y&&(o=-o);var n=this.from.x+i,r=this.from.y+o;return"discrete"===e&&(C<=I?n=C<t*I?this.from.x:n:r=I<t*C?this.from.y:r),{x:n,y:r}}if("straightCross"===e){var s=(1-t)*C,a=(1-t)*I;return C<=I?(s=0,this.from.y<this.to.y&&(a=-a)):(this.from.x<this.to.x&&(s=-s),a=0),{x:this.to.x+s,y:this.to.y+a}}if("horizontal"===e){var d=(1-t)*C;return this.from.x<this.to.x&&(d=-d),{x:this.to.x+d,y:this.from.y}}if("vertical"===e){var h=(1-t)*I;return this.from.y<this.to.y&&(h=-h),{x:this.from.x,y:this.to.y+h}}if("curvedCW"===e){C=this.to.x-this.from.x,I=this.from.y-this.to.y;var l=Math.sqrt(C*C+I*I),c=Math.PI,u=(Math.atan2(I,C)+(.5*t+.5)*c)%(2*c);return{x:this.from.x+(.5*t+.5)*l*Math.sin(u),y:this.from.y+(.5*t+.5)*l*Math.cos(u)}}if("curvedCCW"===e){C=this.to.x-this.from.x,I=this.from.y-this.to.y;var p=Math.sqrt(C*C+I*I),f=Math.PI,v=(Math.atan2(I,C)+(.5*-t+.5)*f)%(2*f);return{x:this.from.x+(.5*t+.5)*p*Math.sin(v),y:this.from.y+(.5*t+.5)*p*Math.cos(v)}}g=A=C<=I?t*I:t*C,this.from.x>this.to.x&&(g=-g),this.from.y>=this.to.y&&(A=-A);var y=this.from.x+g,m=this.from.y+A;return C<=I?y=this.from.x<=this.to.x?this.to.x<y?this.to.x:y:this.to.x>y?this.to.x:y:m=this.from.y>=this.to.y?this.to.y>m?this.to.y:m:this.to.y<m?this.to.y:m,{x:y,y:m}}},{key:"_findBorderPosition",value:function(g,A){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(g,A,t.via)}},{key:"_getDistanceToEdge",value:function(g,A,t,e,C,I){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(g,A,t,e,C,I,i)}},{key:"getPoint",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),t=g,e=Math.pow(1-t,2)*this.fromPoint.x+2*t*(1-t)*A.x+Math.pow(t,2)*this.toPoint.x,C=Math.pow(1-t,2)*this.fromPoint.y+2*t*(1-t)*A.y+Math.pow(t,2)*this.toPoint.y;return{x:e,y:C}}}]),t}(_v);function qv(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}function $v(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var gy=function(g){eu(t,g);var A=$v(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_line",value:function(g,A,t){var e=t[0],C=t[1];this._bezierCurve(g,A,e,C)}},{key:"_getViaCoordinates",value:function(){var g,A,t,e,C=this.from.x-this.to.x,I=this.from.y-this.to.y,i=this.options.smooth.roundness;return(Math.abs(C)>Math.abs(I)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(A=this.from.y,e=this.to.y,g=this.from.x-i*C,t=this.to.x+i*C):(A=this.from.y-i*I,e=this.to.y+i*I,g=this.from.x,t=this.to.x),[{x:g,y:A},{x:t,y:e}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(g,A){return this._findBorderPositionBezier(g,A)}},{key:"_getDistanceToEdge",value:function(g,A,t,e,C,I){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),o=Pn(i,2),n=o[0],r=o[1];return this._getDistanceToBezierEdge2(g,A,t,e,C,I,n,r)}},{key:"getPoint",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),t=Pn(A,2),e=t[0],C=t[1],I=g,i=[Math.pow(1-I,3),3*I*Math.pow(1-I,2),3*Math.pow(I,2)*(1-I),Math.pow(I,3)],o=i[0]*this.fromPoint.x+i[1]*e.x+i[2]*C.x+i[3]*this.toPoint.x,n=i[0]*this.fromPoint.y+i[1]*e.y+i[2]*C.y+i[3]*this.toPoint.y;return{x:o,y:n}}}]),t}(function(g){eu(t,g);var A=qv(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_getDistanceToBezierEdge2",value:function(g,A,t,e,C,I,i,o){for(var n=1e9,r=g,s=A,a=[0,0,0,0],d=1;d<10;d++){var h=.1*d;a[0]=Math.pow(1-h,3),a[1]=3*h*Math.pow(1-h,2),a[2]=3*Math.pow(h,2)*(1-h),a[3]=Math.pow(h,3);var l=a[0]*g+a[1]*i.x+a[2]*o.x+a[3]*t,c=a[0]*A+a[1]*i.y+a[2]*o.y+a[3]*e;if(d>0){var u=this._getDistanceToLine(r,s,l,c,C,I);n=u<n?u:n}r=l,s=c}return n}}]),t}(_v));function Ay(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var ty=function(g){eu(t,g);var A=Ay(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_line",value:function(g,A){g.beginPath(),g.moveTo(this.fromPoint.x,this.fromPoint.y),g.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(g,A),g.stroke(),this.disableShadow(g,A)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(g){return{x:(1-g)*this.fromPoint.x+g*this.toPoint.x,y:(1-g)*this.fromPoint.y+g*this.toPoint.y}}},{key:"_findBorderPosition",value:function(g,A){var t=this.to,e=this.from;g.id===this.from.id&&(t=this.from,e=this.to);var C=Math.atan2(t.y-e.y,t.x-e.x),I=t.x-e.x,i=t.y-e.y,o=Math.sqrt(I*I+i*i),n=(o-g.distanceToBorder(A,C))/o;return{x:(1-n)*e.x+n*t.x,y:(1-n)*e.y+n*t.y,t:0}}},{key:"_getDistanceToEdge",value:function(g,A,t,e,C,I){return this._getDistanceToLine(g,A,t,e,C,I)}}]),t}(Yv),ey=function(){function g(A,t,e,C,I){if(So(this,g),void 0===t)throw new Error("No body provided");this.options=Oh(C),this.globalOptions=C,this.defaultOptions=I,this.body=t,this.imagelist=e,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new mf(this.body,this.options,!0),this.setOptions(A)}return Lo(g,[{key:"setOptions",value:function(A){if(A){var t=void 0!==A.physics&&this.options.physics!==A.physics||void 0!==A.hidden&&(this.options.hidden||!1)!==(A.hidden||!1)||void 0!==A.from&&this.options.from!==A.from||void 0!==A.to&&this.options.to!==A.to;g.parseOptions(this.options,A,!0,this.globalOptions),void 0!==A.id&&(this.id=A.id),void 0!==A.from&&(this.fromId=A.from),void 0!==A.to&&(this.toId=A.to),void 0!==A.title&&(this.title=A.title),void 0!==A.value&&(A.value=If(A.value));var e=[A,this.options,this.defaultOptions];return this.chooser=df("edge",e),this.updateLabelModule(A),t=this.updateEdgeType()||t,this._setInteractionWidths(),this.connect(),t}}},{key:"getFormattingValues",value:function(){var g=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,A=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,t=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,e=this.options.color.inherit,C={toArrow:g,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,toArrowSrc:this.options.arrows.to.src,toArrowImageWidth:this.options.arrows.to.imageWidth,toArrowImageHeight:this.options.arrows.to.imageHeight,middleArrow:t,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,middleArrowSrc:this.options.arrows.middle.src,middleArrowImageWidth:this.options.arrows.middle.imageWidth,middleArrowImageHeight:this.options.arrows.middle.imageHeight,fromArrow:A,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,fromArrowSrc:this.options.arrows.from.src,fromArrowImageWidth:this.options.arrows.from.imageWidth,fromArrowImageHeight:this.options.arrows.from.imageHeight,arrowStrikethrough:this.options.arrowStrikethrough,color:e?void 0:this.options.color.color,inheritsColor:e,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width,background:this.options.background.enabled,backgroundColor:this.options.background.color,backgroundSize:this.options.background.size,backgroundDashes:this.options.background.dashes};if(this.selected||this.hover)if(!0===this.chooser){if(this.selected){var I=this.options.selectionWidth;"function"==typeof I?C.width=I(C.width):"number"==typeof I&&(C.width+=I),C.width=Math.max(C.width,.3/this.body.view.scale),C.color=this.options.color.highlight,C.shadow=this.options.shadow.enabled}else if(this.hover){var i=this.options.hoverWidth;"function"==typeof i?C.width=i(C.width):"number"==typeof i&&(C.width+=i),C.width=Math.max(C.width,.3/this.body.view.scale),C.color=this.options.color.hover,C.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(C,this.options.id,this.selected,this.hover),void 0!==C.color&&(C.inheritsColor=!1),!1===C.shadow&&(C.shadowColor===this.options.shadow.color&&C.shadowSize===this.options.shadow.size&&C.shadowX===this.options.shadow.x&&C.shadowY===this.options.shadow.y||(C.shadow=!0)));else C.shadow=this.options.shadow.enabled,C.width=Math.max(C.width,.3/this.body.view.scale);return C}},{key:"updateLabelModule",value:function(g){var A=[g,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,A),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var g=this.options.smooth,A=!1,t=!0;return void 0!==this.edgeType&&((this.edgeType instanceof Kv&&!0===g.enabled&&"dynamic"===g.type||this.edgeType instanceof gy&&!0===g.enabled&&"cubicBezier"===g.type||this.edgeType instanceof Jv&&!0===g.enabled&&"dynamic"!==g.type&&"cubicBezier"!==g.type||this.edgeType instanceof ty&&!1===g.type.enabled)&&(t=!1),!0===t&&(A=this.cleanup())),!0===t?!0===g.enabled?"dynamic"===g.type?(A=!0,this.edgeType=new Kv(this.options,this.body,this.labelModule)):"cubicBezier"===g.type?this.edgeType=new gy(this.options,this.body,this.labelModule):this.edgeType=new Jv(this.options,this.body,this.labelModule):this.edgeType=new ty(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),A}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,!0===this.connected?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(g,A,t){if(void 0!==this.options.value){var e=this.options.scaling.customScalingFunction(g,A,t,this.options.value),C=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var I=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+e*I}this.options.width=this.options.scaling.min+e*C}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(g){var A=this.getFormattingValues();if(!A.hidden){var t=this.edgeType.getViaNode();this.edgeType.drawLine(g,A,this.selected,this.hover,t),this.drawLabel(g,t)}}},{key:"drawArrows",value:function(g){var A=this.getFormattingValues();if(!A.hidden){var t=this.edgeType.getViaNode(),e={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,A.fromArrow&&(e.from=this.edgeType.getArrowData(g,"from",t,this.selected,this.hover,A),!1===A.arrowStrikethrough&&(this.edgeType.fromPoint=e.from.core),A.fromArrowSrc&&(e.from.image=this.imagelist.load(A.fromArrowSrc)),A.fromArrowImageWidth&&(e.from.imageWidth=A.fromArrowImageWidth),A.fromArrowImageHeight&&(e.from.imageHeight=A.fromArrowImageHeight)),A.toArrow&&(e.to=this.edgeType.getArrowData(g,"to",t,this.selected,this.hover,A),!1===A.arrowStrikethrough&&(this.edgeType.toPoint=e.to.core),A.toArrowSrc&&(e.to.image=this.imagelist.load(A.toArrowSrc)),A.toArrowImageWidth&&(e.to.imageWidth=A.toArrowImageWidth),A.toArrowImageHeight&&(e.to.imageHeight=A.toArrowImageHeight)),A.middleArrow&&(e.middle=this.edgeType.getArrowData(g,"middle",t,this.selected,this.hover,A),A.middleArrowSrc&&(e.middle.image=this.imagelist.load(A.middleArrowSrc)),A.middleArrowImageWidth&&(e.middle.imageWidth=A.middleArrowImageWidth),A.middleArrowImageHeight&&(e.middle.imageHeight=A.middleArrowImageHeight)),A.fromArrow&&this.edgeType.drawArrowHead(g,A,this.selected,this.hover,e.from),A.middleArrow&&this.edgeType.drawArrowHead(g,A,this.selected,this.hover,e.middle),A.toArrow&&this.edgeType.drawArrowHead(g,A,this.selected,this.hover,e.to)}}},{key:"drawLabel",value:function(g,A){if(void 0!==this.options.label){var t,e=this.from,C=this.to;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(g,this.selected,this.hover),e.id!=C.id){this.labelModule.pointToSelf=!1,t=this.edgeType.getPoint(.5,A),g.save();var I=this._getRotation(g);0!=I.angle&&(g.translate(I.x,I.y),g.rotate(I.angle)),this.labelModule.draw(g,t.x,t.y,this.selected,this.hover),g.restore()}else{this.labelModule.pointToSelf=!0;var i=cf(g,this.options.selfReference.angle,this.options.selfReference.size,e);t=this._pointOnCircle(i.x,i.y,this.options.selfReference.size,this.options.selfReference.angle),this.labelModule.draw(g,t.x,t.y,this.selected,this.hover)}}}},{key:"getItemsOnPoint",value:function(g){var A=[];if(this.labelModule.visible()){var t=this._getRotation();hf(this.labelModule.getSize(),g,t)&&A.push({edgeId:this.id,labelId:0})}var e={left:g.x,top:g.y};return this.isOverlappingWith(e)&&A.push({edgeId:this.id}),A}},{key:"isOverlappingWith",value:function(g){if(this.connected){var A=this.from.x,t=this.from.y,e=this.to.x,C=this.to.y,I=g.left,i=g.top;return this.edgeType.getDistanceToEdge(A,t,e,C,I,i)<10}return!1}},{key:"_getRotation",value:function(g){var A=this.edgeType.getViaNode(),t=this.edgeType.getPoint(.5,A);void 0!==g&&this.labelModule.calculateLabelSize(g,this.selected,this.hover,t.x,t.y);var e={x:t.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return e;if("horizontal"===this.options.font.align)return e;var C=this.from.y-this.to.y,I=this.from.x-this.to.x,i=Math.atan2(C,I);return(i<-1&&I<0||i>0&&I<0)&&(i+=Math.PI),e.angle=i,e}},{key:"_pointOnCircle",value:function(g,A,t,e){return{x:g+t*Math.cos(e),y:A-t*Math.sin(e)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}},{key:"remove",value:function(){this.cleanup(),this.disconnect(),delete this.body.edges[this.id]}},{key:"endPointsValid",value:function(){return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]}}],[{key:"parseOptions",value:function(g,A){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},C=arguments.length>4&&void 0!==arguments[4]&&arguments[4],I=["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"];if(sh(I,g,A,t),void 0!==A.endPointOffset&&void 0!==A.endPointOffset.from&&(Zc(A.endPointOffset.from)?g.endPointOffset.from=A.endPointOffset.from:(g.endPointOffset.from=void 0!==e.endPointOffset.from?e.endPointOffset.from:0,console.error("endPointOffset.from is not a valid number"))),void 0!==A.endPointOffset&&void 0!==A.endPointOffset.to&&(Zc(A.endPointOffset.to)?g.endPointOffset.to=A.endPointOffset.to:(g.endPointOffset.to=void 0!==e.endPointOffset.to?e.endPointOffset.to:0,console.error("endPointOffset.to is not a valid number"))),lf(A.label)?g.label=A.label:lf(g.label)||(g.label=void 0),Th(g,A,"smooth",e),Th(g,A,"shadow",e),Th(g,A,"background",e),void 0!==A.dashes&&null!==A.dashes?g.dashes=A.dashes:!0===t&&null===A.dashes&&(g.dashes=Bs(e.dashes)),void 0!==A.scaling&&null!==A.scaling?(void 0!==A.scaling.min&&(g.scaling.min=A.scaling.min),void 0!==A.scaling.max&&(g.scaling.max=A.scaling.max),Th(g.scaling,A.scaling,"label",e.scaling)):!0===t&&null===A.scaling&&(g.scaling=Bs(e.scaling)),void 0!==A.arrows&&null!==A.arrows)if("string"==typeof A.arrows){var i=A.arrows.toLowerCase();g.arrows.to.enabled=-1!=Ts(i).call(i,"to"),g.arrows.middle.enabled=-1!=Ts(i).call(i,"middle"),g.arrows.from.enabled=-1!=Ts(i).call(i,"from")}else{if("object"!==zn(A.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+Ws(A.arrows));Th(g.arrows,A.arrows,"to",e.arrows),Th(g.arrows,A.arrows,"middle",e.arrows),Th(g.arrows,A.arrows,"from",e.arrows)}else!0===t&&null===A.arrows&&(g.arrows=Bs(e.arrows));if(void 0!==A.color&&null!==A.color){var o=ih(A.color)?{color:A.color,highlight:A.color,hover:A.color,inherit:!1,opacity:1}:A.color,n=g.color;if(C)dh(n,e.color,!1,t);else for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&delete n[r];if(ih(n))n.color=n,n.highlight=n,n.hover=n,n.inherit=!1,void 0===o.opacity&&(n.opacity=1);else{var s=!1;void 0!==o.color&&(n.color=o.color,s=!0),void 0!==o.highlight&&(n.highlight=o.highlight,s=!0),void 0!==o.hover&&(n.hover=o.hover,s=!0),void 0!==o.inherit&&(n.inherit=o.inherit),void 0!==o.opacity&&(n.opacity=Math.min(1,Math.max(0,o.opacity))),!0===s?n.inherit=!1:void 0===n.inherit&&(n.inherit="from")}}else!0===t&&null===A.color&&(g.color=Oh(e.color));!0===t&&null===A.font&&(g.font=Oh(e.font)),Object.prototype.hasOwnProperty.call(A,"selfReferenceSize")&&(console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference: {
                                            size:30, angle:Math.PI / 4
                                        }

                                        "),g.selfReference.size=A.selfReferenceSize)}}]),g}(),Cy=function(){function g(A,t,e){var C,I=this;So(this,g),this.body=A,this.images=t,this.groups=e,this.body.functions.createEdge=It(C=this.create).call(C,this),this.edgesListeners={add:function(g,A){I.add(A.items)},update:function(g,A){I.update(A.items)},remove:function(g,A){I.remove(A.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},endPointOffset:{from:0,to:0},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(g,A,t,e){if(A===g)return.5;var C=1/(A-g);return Math.max(0,(e-g)*C)}},selectionWidth:1.5,selfReference:{size:20,angle:Math.PI/4,renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0, 0, 0, 0.5)",size:10,x:5,y:5},background:{enabled:!1,color:"rgba(111, 111, 111, 1)",size:10,dashes:!1},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},dh(this.options,this.defaultOptions),this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g,A,t=this;this.body.emitter.on("_forceDisableDynamicCurves",(function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"dynamic"===g&&(g="continuous");var e=!1;for(var C in t.body.edges)if(Object.prototype.hasOwnProperty.call(t.body.edges,C)){var I=t.body.edges[C],i=t.body.data.edges.get(C);if(null!=i){var o=i.smooth;void 0!==o&&!0===o.enabled&&"dynamic"===o.type&&(void 0===g?I.setOptions({smooth:!1}):I.setOptions({smooth:{type:g}}),e=!0)}}!0===A&&!0===e&&t.body.emitter.emit("_dataChanged")})),this.body.emitter.on("_dataUpdated",(function(){t.reconnectEdges()})),this.body.emitter.on("refreshEdges",It(g=this.refresh).call(g,this)),this.body.emitter.on("refresh",It(A=this.refresh).call(A,this)),this.body.emitter.on("destroy",(function(){uh(t.edgesListeners,(function(g,A){t.body.data.edges&&t.body.data.edges.off(A,g)})),delete t.body.functions.createEdge,delete t.edgesListeners.add,delete t.edgesListeners.update,delete t.edgesListeners.remove,delete t.edgesListeners}))}},{key:"setOptions",value:function(g){if(void 0!==g){ey.parseOptions(this.options,g,!0,this.defaultOptions,!0);var A=!1;if(void 0!==g.smooth)for(var t in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,t)&&(A=this.body.edges[t].updateEdgeType()||A);if(void 0!==g.font)for(var e in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,e)&&this.body.edges[e].updateLabelModule();void 0===g.hidden&&void 0===g.physics&&!0!==A||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(g){var A=this,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this.body.data.edges;if($p("id",g))this.body.data.edges=g;else if(Yn(g))this.body.data.edges=new Xp,this.body.data.edges.add(g);else{if(g)throw new TypeError("Array or DataSet expected");this.body.data.edges=new Xp}if(e&&uh(this.edgesListeners,(function(g,A){e.off(A,g)})),this.body.edges={},this.body.data.edges){uh(this.edgesListeners,(function(g,t){A.body.data.edges.on(t,g)}));var C=this.body.data.edges.getIds();this.add(C,!0)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===t&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(g){for(var A=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this.body.edges,e=this.body.data.edges,C=0;C<g.length;C++){var I=g[C],i=t[I];i&&i.disconnect();var o=e.get(I,{showInternalIds:!0});t[I]=this.create(o)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===A&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(g){for(var A=this.body.edges,t=this.body.data.edges,e=!1,C=0;C<g.length;C++){var I=g[C],i=t.get(I),o=A[I];void 0!==o?(o.disconnect(),e=o.setOptions(i)||e,o.connect()):(this.body.edges[I]=this.create(i),e=!0)}!0===e?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0!==g.length){var t=this.body.edges;uh(g,(function(g){var A=t[g];void 0!==A&&A.remove()})),A&&this.body.emitter.emit("_dataChanged")}}},{key:"refresh",value:function(){var g=this;uh(this.body.edges,(function(A,t){var e=g.body.data.edges.get(t);void 0!==e&&A.setOptions(e)}))}},{key:"create",value:function(g){return new ey(g,this.body,this.images,this.options,this.defaultOptions)}},{key:"reconnectEdges",value:function(){var g,A=this.body.nodes,t=this.body.edges;for(g in A)Object.prototype.hasOwnProperty.call(A,g)&&(A[g].edges=[]);for(g in t)if(Object.prototype.hasOwnProperty.call(t,g)){var e=t[g];e.from=null,e.to=null,e.connect()}}},{key:"getConnectedNodes",value:function(g){var A=[];if(void 0!==this.body.edges[g]){var t=this.body.edges[g];void 0!==t.fromId&&A.push(t.fromId),void 0!==t.toId&&A.push(t.toId)}return A}},{key:"_updateState",value:function(){this._addMissingEdges(),this._removeInvalidEdges()}},{key:"_removeInvalidEdges",value:function(){var g=this,A=[];uh(this.body.edges,(function(t,e){var C=g.body.nodes[t.toId],I=g.body.nodes[t.fromId];void 0!==C&&!0===C.isCluster||void 0!==I&&!0===I.isCluster||void 0!==C&&void 0!==I||A.push(e)})),this.remove(A,!1)}},{key:"_addMissingEdges",value:function(){var g=this.body.data.edges;if(null!=g){var A=this.body.edges,t=[];ir(g).call(g,(function(g,e){void 0===A[e]&&t.push(e)})),this.add(t,!0)}}}]),g}(),Iy=function(){function g(A,t,e){So(this,g),this.body=A,this.physicsBody=t,this.barnesHutTree,this.setOptions(e),this._rng=Xd("BARNES HUT SOLVER")}return Lo(g,[{key:"setOptions",value:function(g){this.options=g,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var g,A=this.body.nodes,t=this.physicsBody.physicsNodeIndices,e=t.length,C=this._formBarnesHutTree(A,t);this.barnesHutTree=C;for(var I=0;I<e;I++)(g=A[t[I]]).options.mass>0&&this._getForceContributions(C.root,g)}}},{key:"_getForceContributions",value:function(g,A){this._getForceContribution(g.children.NW,A),this._getForceContribution(g.children.NE,A),this._getForceContribution(g.children.SW,A),this._getForceContribution(g.children.SE,A)}},{key:"_getForceContribution",value:function(g,A){if(g.childrenCount>0){var t=g.centerOfMass.x-A.x,e=g.centerOfMass.y-A.y,C=Math.sqrt(t*t+e*e);C*g.calcSize>this.thetaInversed?this._calculateForces(C,t,e,A,g):4===g.childrenCount?this._getForceContributions(g,A):g.children.data.id!=A.id&&this._calculateForces(C,t,e,A,g)}}},{key:"_calculateForces",value:function(g,A,t,e,C){0===g&&(A=g=.1),this.overlapAvoidanceFactor<1&&e.shape.radius&&(g=Math.max(.1+this.overlapAvoidanceFactor*e.shape.radius,g-e.shape.radius));var I=this.options.gravitationalConstant*C.mass*e.options.mass/Math.pow(g,3),i=A*I,o=t*I;this.physicsBody.forces[e.id].x+=i,this.physicsBody.forces[e.id].y+=o}},{key:"_formBarnesHutTree",value:function(g,A){for(var t,e=A.length,C=g[A[0]].x,I=g[A[0]].y,i=g[A[0]].x,o=g[A[0]].y,n=1;n<e;n++){var r=g[A[n]],s=r.x,a=r.y;r.options.mass>0&&(s<C&&(C=s),s>i&&(i=s),a<I&&(I=a),a>o&&(o=a))}var d=Math.abs(i-C)-Math.abs(o-I);d>0?(I-=.5*d,o+=.5*d):(C+=.5*d,i-=.5*d);var h=Math.max(1e-5,Math.abs(i-C)),l=.5*h,c=.5*(C+i),u=.5*(I+o),p={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:c-l,maxX:c+l,minY:u-l,maxY:u+l},size:h,calcSize:1/h,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(p.root);for(var f=0;f<e;f++)(t=g[A[f]]).options.mass>0&&this._placeInTree(p.root,t);return p}},{key:"_updateBranchMass",value:function(g,A){var t=g.centerOfMass,e=g.mass+A.options.mass,C=1/e;t.x=t.x*g.mass+A.x*A.options.mass,t.x*=C,t.y=t.y*g.mass+A.y*A.options.mass,t.y*=C,g.mass=e;var I=Math.max(Math.max(A.height,A.radius),A.width);g.maxWidth=g.maxWidth<I?I:g.maxWidth}},{key:"_placeInTree",value:function(g,A,t){1==t&&void 0!==t||this._updateBranchMass(g,A);var e,C=g.children.NW.range;e=C.maxX>A.x?C.maxY>A.y?"NW":"SW":C.maxY>A.y?"NE":"SE",this._placeInRegion(g,A,e)}},{key:"_placeInRegion",value:function(g,A,t){var e=g.children[t];switch(e.childrenCount){case 0:e.children.data=A,e.childrenCount=1,this._updateBranchMass(e,A);break;case 1:e.children.data.x===A.x&&e.children.data.y===A.y?(A.x+=this._rng(),A.y+=this._rng()):(this._splitBranch(e),this._placeInTree(e,A));break;case 4:this._placeInTree(e,A)}}},{key:"_splitBranch",value:function(g){var A=null;1===g.childrenCount&&(A=g.children.data,g.mass=0,g.centerOfMass.x=0,g.centerOfMass.y=0),g.childrenCount=4,g.children.data=null,this._insertRegion(g,"NW"),this._insertRegion(g,"NE"),this._insertRegion(g,"SW"),this._insertRegion(g,"SE"),null!=A&&this._placeInTree(g,A)}},{key:"_insertRegion",value:function(g,A){var t,e,C,I,i=.5*g.size;switch(A){case"NW":t=g.range.minX,e=g.range.minX+i,C=g.range.minY,I=g.range.minY+i;break;case"NE":t=g.range.minX+i,e=g.range.maxX,C=g.range.minY,I=g.range.minY+i;break;case"SW":t=g.range.minX,e=g.range.minX+i,C=g.range.minY+i,I=g.range.maxY;break;case"SE":t=g.range.minX+i,e=g.range.maxX,C=g.range.minY+i,I=g.range.maxY}g.children[A]={centerOfMass:{x:0,y:0},mass:0,range:{minX:t,maxX:e,minY:C,maxY:I},size:.5*g.size,calcSize:2*g.calcSize,children:{data:null},maxWidth:0,level:g.level+1,childrenCount:0}}},{key:"_debug",value:function(g,A){void 0!==this.barnesHutTree&&(g.lineWidth=1,this._drawBranch(this.barnesHutTree.root,g,A))}},{key:"_drawBranch",value:function(g,A,t){void 0===t&&(t="#FF0000"),4===g.childrenCount&&(this._drawBranch(g.children.NW,A),this._drawBranch(g.children.NE,A),this._drawBranch(g.children.SE,A),this._drawBranch(g.children.SW,A)),A.strokeStyle=t,A.beginPath(),A.moveTo(g.range.minX,g.range.minY),A.lineTo(g.range.maxX,g.range.minY),A.stroke(),A.beginPath(),A.moveTo(g.range.maxX,g.range.minY),A.lineTo(g.range.maxX,g.range.maxY),A.stroke(),A.beginPath(),A.moveTo(g.range.maxX,g.range.maxY),A.lineTo(g.range.minX,g.range.maxY),A.stroke(),A.beginPath(),A.moveTo(g.range.minX,g.range.maxY),A.lineTo(g.range.minX,g.range.minY),A.stroke()}}]),g}(),iy=function(){function g(A,t,e){So(this,g),this._rng=Xd("REPULSION SOLVER"),this.body=A,this.physicsBody=t,this.setOptions(e)}return Lo(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,A,t,e,C,I,i,o,n=this.body.nodes,r=this.physicsBody.physicsNodeIndices,s=this.physicsBody.forces,a=this.options.nodeDistance,d=-2/3/a,h=0;h<r.length-1;h++){i=n[r[h]];for(var l=h+1;l<r.length;l++)g=(o=n[r[l]]).x-i.x,A=o.y-i.y,0===(t=Math.sqrt(g*g+A*A))&&(g=t=.1*this._rng()),t<2*a&&(I=t<.5*a?1:d*t+1.3333333333333333,e=g*(I/=t),C=A*I,s[i.id].x-=e,s[i.id].y-=C,s[o.id].x+=e,s[o.id].y+=C)}}}]),g}(),oy=function(){function g(A,t,e){So(this,g),this.body=A,this.physicsBody=t,this.setOptions(e)}return Lo(g,[{key:"setOptions",value:function(g){this.options=g,this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))}},{key:"solve",value:function(){for(var g=this.body.nodes,A=this.physicsBody.physicsNodeIndices,t=this.physicsBody.forces,e=this.options.nodeDistance,C=0;C<A.length-1;C++)for(var I=g[A[C]],i=C+1;i<A.length;i++){var o=g[A[i]];if(I.level===o.level){var n=e+this.overlapAvoidanceFactor*((I.shape.radius||0)/2+(o.shape.radius||0)/2),r=o.x-I.x,s=o.y-I.y,a=Math.sqrt(r*r+s*s),d=void 0;d=a<n?-Math.pow(.05*a,2)+Math.pow(.05*n,2):0,0!==a&&(d/=a);var h=r*d,l=s*d;t[I.id].x-=h,t[I.id].y-=l,t[o.id].x+=h,t[o.id].y+=l}}}}]),g}(),ny=function(){function g(A,t,e){So(this,g),this.body=A,this.physicsBody=t,this.setOptions(e)}return Lo(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,A,t,e,C,I=this.physicsBody.physicsEdgeIndices,i=this.body.edges,o=0;o<I.length;o++)!0===(A=i[I[o]]).connected&&A.toId!==A.fromId&&void 0!==this.body.nodes[A.toId]&&void 0!==this.body.nodes[A.fromId]&&(void 0!==A.edgeType.via?(g=void 0===A.options.length?this.options.springLength:A.options.length,t=A.to,e=A.edgeType.via,C=A.from,this._calculateSpringForce(t,e,.5*g),this._calculateSpringForce(e,C,.5*g)):(g=void 0===A.options.length?1.5*this.options.springLength:A.options.length,this._calculateSpringForce(A.from,A.to,g)))}},{key:"_calculateSpringForce",value:function(g,A,t){var e=g.x-A.x,C=g.y-A.y,I=Math.max(Math.sqrt(e*e+C*C),.01),i=this.options.springConstant*(t-I)/I,o=e*i,n=C*i;void 0!==this.physicsBody.forces[g.id]&&(this.physicsBody.forces[g.id].x+=o,this.physicsBody.forces[g.id].y+=n),void 0!==this.physicsBody.forces[A.id]&&(this.physicsBody.forces[A.id].x-=o,this.physicsBody.forces[A.id].y-=n)}}]),g}(),ry=function(){function g(A,t,e){So(this,g),this.body=A,this.physicsBody=t,this.setOptions(e)}return Lo(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,A,t,e,C,I,i,o,n,r,s=this.body.edges,a=.5,d=this.physicsBody.physicsEdgeIndices,h=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,c=0;c<h.length;c++){var u=h[c];l[u].springFx=0,l[u].springFy=0}for(var p=0;p<d.length;p++)!0===(A=s[d[p]]).connected&&(g=void 0===A.options.length?this.options.springLength:A.options.length,t=A.from.x-A.to.x,e=A.from.y-A.to.y,o=0===(o=Math.sqrt(t*t+e*e))?.01:o,C=t*(i=this.options.springConstant*(g-o)/o),I=e*i,A.to.level!=A.from.level?(void 0!==l[A.toId]&&(l[A.toId].springFx-=C,l[A.toId].springFy-=I),void 0!==l[A.fromId]&&(l[A.fromId].springFx+=C,l[A.fromId].springFy+=I)):(void 0!==l[A.toId]&&(l[A.toId].x-=a*C,l[A.toId].y-=a*I),void 0!==l[A.fromId]&&(l[A.fromId].x+=a*C,l[A.fromId].y+=a*I)));i=1;for(var f=0;f<h.length;f++){var v=h[f];n=Math.min(i,Math.max(-i,l[v].springFx)),r=Math.min(i,Math.max(-i,l[v].springFy)),l[v].x+=n,l[v].y+=r}for(var y=0,m=0,b=0;b<h.length;b++){var w=h[b];y+=l[w].x,m+=l[w].y}for(var k=y/h.length,x=m/h.length,E=0;E<h.length;E++){var O=h[E];l[O].x-=k,l[O].y-=x}}}]),g}(),sy=function(){function g(A,t,e){So(this,g),this.body=A,this.physicsBody=t,this.setOptions(e)}return Lo(g,[{key:"setOptions",value:function(g){this.options=g}},{key:"solve",value:function(){for(var g,A,t,e,C=this.body.nodes,I=this.physicsBody.physicsNodeIndices,i=this.physicsBody.forces,o=0;o<I.length;o++){g=-(e=C[I[o]]).x,A=-e.y,t=Math.sqrt(g*g+A*A),this._calculateForces(t,g,A,i,e)}}},{key:"_calculateForces",value:function(g,A,t,e,C){var I=0===g?0:this.options.centralGravity/g;e[C.id].x=A*I,e[C.id].y=t*I}}]),g}();function ay(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var dy=function(g){eu(t,g);var A=ay(t);function t(g,e,C){var I;return So(this,t),(I=A.call(this,g,e,C))._rng=Xd("FORCE ATLAS 2 BASED REPULSION SOLVER"),I}return Lo(t,[{key:"_calculateForces",value:function(g,A,t,e,C){0===g&&(A=g=.1*this._rng()),this.overlapAvoidanceFactor<1&&e.shape.radius&&(g=Math.max(.1+this.overlapAvoidanceFactor*e.shape.radius,g-e.shape.radius));var I=e.edges.length+1,i=this.options.gravitationalConstant*C.mass*e.options.mass*I/Math.pow(g,2),o=A*i,n=t*i;this.physicsBody.forces[e.id].x+=o,this.physicsBody.forces[e.id].y+=n}}]),t}(Iy);function hy(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var ly=function(g){eu(t,g);var A=hy(t);function t(g,e,C){return So(this,t),A.call(this,g,e,C)}return Lo(t,[{key:"_calculateForces",value:function(g,A,t,e,C){if(g>0){var I=C.edges.length+1,i=this.options.centralGravity*I*C.options.mass;e[C.id].x=A*i,e[C.id].y=t*i}}}]),t}(sy),cy=function(){function g(A){So(this,g),this.body=A,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0,wind:{x:0,y:0}},HA(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g=this;this.body.emitter.on("initPhysics",(function(){g.initPhysics()})),this.body.emitter.on("_layoutFailed",(function(){g.layoutFailed=!0})),this.body.emitter.on("resetPhysics",(function(){g.stopSimulation(),g.ready=!1})),this.body.emitter.on("disablePhysics",(function(){g.physicsEnabled=!1,g.stopSimulation()})),this.body.emitter.on("restorePhysics",(function(){g.setOptions(g.options),!0===g.ready&&g.startSimulation()})),this.body.emitter.on("startSimulation",(function(){!0===g.ready&&g.startSimulation()})),this.body.emitter.on("stopSimulation",(function(){g.stopSimulation()})),this.body.emitter.on("destroy",(function(){g.stopSimulation(!1),g.body.emitter.off()})),this.body.emitter.on("_dataChanged",(function(){g.updatePhysicsData()}))}},{key:"setOptions",value:function(g){if(void 0!==g)if(!1===g)this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation();else if(!0===g)this.options.enabled=!0,this.physicsEnabled=!0,this.startSimulation();else{this.physicsEnabled=!0,ah(["stabilization"],this.options,g),Th(this.options,g,"stabilization"),void 0===g.enabled&&(this.options.enabled=!0),!1===this.options.enabled&&(this.physicsEnabled=!1,this.stopSimulation());var A=this.options.wind;A&&(("number"!=typeof A.x||Bc(A.x))&&(A.x=0),("number"!=typeof A.y||Bc(A.y))&&(A.y=0)),this.timestep=this.options.timestep}this.init()}},{key:"init",value:function(){var g;"forceAtlas2Based"===this.options.solver?(g=this.options.forceAtlas2Based,this.nodesSolver=new dy(this.body,this.physicsBody,g),this.edgesSolver=new ny(this.body,this.physicsBody,g),this.gravitySolver=new ly(this.body,this.physicsBody,g)):"repulsion"===this.options.solver?(g=this.options.repulsion,this.nodesSolver=new iy(this.body,this.physicsBody,g),this.edgesSolver=new ny(this.body,this.physicsBody,g),this.gravitySolver=new sy(this.body,this.physicsBody,g)):"hierarchicalRepulsion"===this.options.solver?(g=this.options.hierarchicalRepulsion,this.nodesSolver=new oy(this.body,this.physicsBody,g),this.edgesSolver=new ry(this.body,this.physicsBody,g),this.gravitySolver=new sy(this.body,this.physicsBody,g)):(g=this.options.barnesHut,this.nodesSolver=new Iy(this.body,this.physicsBody,g),this.edgesSolver=new ny(this.body,this.physicsBody,g),this.gravitySolver=new sy(this.body,this.physicsBody,g)),this.modelOptions=g}},{key:"initPhysics",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){var g;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=It(g=this.simulationStep).call(g,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var g=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,!0===g&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,!0===g&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var g=Jn();this.physicsTick(),(Jn()-g<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),this.runDoubleSpeed=!0),!0===this.stabilized&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var g=this,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||!0===this.startedStabilization)&&Hs((function(){g.body.emitter.emit("stabilized",{iterations:A}),g.startedStabilization=!1,g.stabilizationIterations=0}),0)}},{key:"physicsStep",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve(),this.moveNodes()}},{key:"adjustTimeStep",value:function(){!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))}},{key:"physicsTick",value:function(){if(this._startStabilizing(),!0!==this.stabilized){if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled)this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.physicsStep(),this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),this.physicsStep(),this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1;else this.timestep=this.options.timestep,this.physicsStep();!0===this.stabilized&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var g=this.body.nodes,A=this.body.edges;for(var t in g)Object.prototype.hasOwnProperty.call(g,t)&&!0===g[t].options.physics&&this.physicsBody.physicsNodeIndices.push(g[t].id);for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&!0===A[e].options.physics&&this.physicsBody.physicsEdgeIndices.push(A[e].id);for(var C=0;C<this.physicsBody.physicsNodeIndices.length;C++){var I=this.physicsBody.physicsNodeIndices[C];this.physicsBody.forces[I]={x:0,y:0},void 0===this.physicsBody.velocities[I]&&(this.physicsBody.velocities[I]={x:0,y:0})}for(var i in this.physicsBody.velocities)void 0===g[i]&&delete this.physicsBody.velocities[i]}},{key:"revert",value:function(){var g=Xn(this.previousStates),A=this.body.nodes,t=this.physicsBody.velocities;this.referenceState={};for(var e=0;e<g.length;e++){var C=g[e];void 0!==A[C]?!0===A[C].options.physics&&(this.referenceState[C]={positions:{x:A[C].x,y:A[C].y}},t[C].x=this.previousStates[C].vx,t[C].y=this.previousStates[C].vy,A[C].x=this.previousStates[C].x,A[C].y=this.previousStates[C].y):delete this.previousStates[C]}}},{key:"_evaluateStepQuality",value:function(){var g,A,t=this.body.nodes,e=this.referenceState;for(var C in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,C)&&void 0!==t[C]&&(g=t[C].x-e[C].positions.x,A=t[C].y-e[C].positions.y,Math.sqrt(Math.pow(g,2)+Math.pow(A,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var g=this.physicsBody.physicsNodeIndices,A=0,t=0,e=0;e<g.length;e++){var C=g[e],I=this._performStep(C);A=Math.max(A,I),t+=I}this.adaptiveTimestepEnabled=t/g.length<5,this.stabilized=A<this.options.minVelocity}},{key:"calculateComponentVelocity",value:function(g,A,t){g+=(A-this.modelOptions.damping*g)/t*this.timestep;var e=this.options.maxVelocity||1e9;return Math.abs(g)>e&&(g=g>0?e:-e),g}},{key:"_performStep",value:function(g){var A=this.body.nodes[g],t=this.physicsBody.forces[g];this.options.wind&&(t.x+=this.options.wind.x,t.y+=this.options.wind.y);var e=this.physicsBody.velocities[g];return this.previousStates[g]={x:A.x,y:A.y,vx:e.x,vy:e.y},!1===A.options.fixed.x?(e.x=this.calculateComponentVelocity(e.x,t.x,A.options.mass),A.x+=e.x*this.timestep):(t.x=0,e.x=0),!1===A.options.fixed.y?(e.y=this.calculateComponentVelocity(e.y,t.y,A.options.mass),A.y+=e.y*this.timestep):(t.y=0,e.y=0),Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}},{key:"_freezeNodes",value:function(){var g=this.body.nodes;for(var A in g)if(Object.prototype.hasOwnProperty.call(g,A)&&g[A].x&&g[A].y){var t=g[A].options.fixed;this.freezeCache[A]={x:t.x,y:t.y},t.x=!0,t.y=!0}}},{key:"_restoreFrozenNodes",value:function(){var g=this.body.nodes;for(var A in g)Object.prototype.hasOwnProperty.call(g,A)&&void 0!==this.freezeCache[A]&&(g[A].options.fixed.x=this.freezeCache[A].x,g[A].options.fixed.y=this.freezeCache[A].y);this.freezeCache={}}},{key:"stabilize",value:function(){var g=this,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;"number"!=typeof A&&(A=this.options.stabilization.iterations,console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ",A)),0!==this.physicsBody.physicsNodeIndices.length?(this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=A,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),this.stabilizationIterations=0,Hs((function(){return g._stabilizationBatch()}),0)):this.ready=!0}},{key:"_startStabilizing",value:function(){return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0,!0)}},{key:"_stabilizationBatch",value:function(){var g=this,A=function(){return!1===g.stabilized&&g.stabilizationIterations<g.targetIterations},t=function(){g.body.emitter.emit("stabilizationProgress",{iterations:g.stabilizationIterations,total:g.targetIterations})};this._startStabilizing()&&t();for(var e,C=0;A()&&C<this.options.stabilization.updateInterval;)this.physicsTick(),C++;(t(),A())?Hs(It(e=this._stabilizationBatch).call(e,this),0):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),!0===this.stabilized?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(g){for(var A=0;A<this.physicsBody.physicsNodeIndices.length;A++){var t=this.physicsBody.physicsNodeIndices[A],e=this.body.nodes[t],C=this.physicsBody.forces[t],I=Math.sqrt(Math.pow(C.x,2)+Math.pow(C.x,2)),i=Math.min(Math.max(5,I),15),o=3*i,n=wh((180-180*Math.min(1,Math.max(0,.03*I)))/360,1,1),r={x:e.x+20*C.x,y:e.y+20*C.y};g.lineWidth=i,g.strokeStyle=n,g.beginPath(),g.moveTo(e.x,e.y),g.lineTo(r.x,r.y),g.stroke();var s=Math.atan2(C.y,C.x);g.fillStyle=n,Lv.draw(g,{type:"arrow",point:r,angle:s,length:o}),ga(g).call(g)}}}]),g}(),uy=function(){function g(){So(this,g)}return Lo(g,null,[{key:"getRange",value:function(g){var A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=1e9,C=-1e9,I=1e9,i=-1e9;if(t.length>0)for(var o=0;o<t.length;o++)I>(A=g[t[o]]).shape.boundingBox.left&&(I=A.shape.boundingBox.left),i<A.shape.boundingBox.right&&(i=A.shape.boundingBox.right),e>A.shape.boundingBox.top&&(e=A.shape.boundingBox.top),C<A.shape.boundingBox.bottom&&(C=A.shape.boundingBox.bottom);return 1e9===I&&-1e9===i&&1e9===e&&-1e9===C&&(e=0,C=0,I=0,i=0),{minX:I,maxX:i,minY:e,maxY:C}}},{key:"getRangeCore",value:function(g){var A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=1e9,C=-1e9,I=1e9,i=-1e9;if(t.length>0)for(var o=0;o<t.length;o++)I>(A=g[t[o]]).x&&(I=A.x),i<A.x&&(i=A.x),e>A.y&&(e=A.y),C<A.y&&(C=A.y);return 1e9===I&&-1e9===i&&1e9===e&&-1e9===C&&(e=0,C=0,I=0,i=0),{minX:I,maxX:i,minY:e,maxY:C}}},{key:"findCenter",value:function(g){return{x:.5*(g.maxX+g.minX),y:.5*(g.maxY+g.minY)}}},{key:"cloneOptions",value:function(g,A){var t={};return void 0===A||"node"===A?(dh(t,g.options,!0),t.x=g.x,t.y=g.y,t.amountOfConnections=g.edges.length):dh(t,g.options,!0),t}}]),g}();function py(g){var A=function(){if("undefined"==typeof Reflect||!qc)return!1;if(qc.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(qc(Boolean,[],(function(){}))),!0}catch(g){return!1}}();return function(){var t,e=iu(g);if(A){var C=iu(this).constructor;t=qc(e,arguments,C)}else t=e.apply(this,arguments);return Cu(this,t)}}var fy=function(g){eu(t,g);var A=py(t);function t(g,e,C,I,i,o){var n;return So(this,t),(n=A.call(this,g,e,C,I,i,o)).isCluster=!0,n.containedNodes={},n.containedEdges={},n}return Lo(t,[{key:"_openChildCluster",value:function(g){var A=this,t=this.body.nodes[g];if(void 0===this.containedNodes[g])throw new Error("node with id: "+g+"not in current cluster");if(!t.isCluster)throw new Error("node with id: "+g+"is not a cluster");delete this.containedNodes[g],uh(t.edges,(function(g){delete A.containedEdges[g.id]})),uh(t.containedNodes,(function(g,t){A.containedNodes[t]=g})),t.containedNodes={},uh(t.containedEdges,(function(g,t){A.containedEdges[t]=g})),t.containedEdges={},uh(t.edges,(function(g){uh(A.edges,(function(t){var e,C,I=Ts(e=t.clusteringEdgeReplacingIds).call(e,g.id);-1!==I&&(uh(g.clusteringEdgeReplacingIds,(function(g){t.clusteringEdgeReplacingIds.push(g),A.body.edges[g].edgeReplacedById=t.id})),Or(C=t.clusteringEdgeReplacingIds).call(C,I,1))}))})),t.edges=[]}}]),t}(rv),vy=function(){function g(A){var t=this;So(this,g),this.body=A,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},HA(this.options,this.defaultOptions),this.body.emitter.on("_resetData",(function(){t.clusteredNodes={},t.clusteredEdges={}}))}return Lo(g,[{key:"clusterByHubsize",value:function(g,A){void 0===g?g=this._getHubSize():"object"===zn(g)&&(A=this._checkOptions(g),g=this._getHubSize());for(var t=[],e=0;e<this.body.nodeIndices.length;e++){var C=this.body.nodes[this.body.nodeIndices[e]];C.edges.length>=g&&t.push(C.id)}for(var I=0;I<t.length;I++)this.clusterByConnection(t[I],A,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var g=this,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===A.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");A=this._checkOptions(A);var e={},C={};uh(this.body.nodes,(function(t,I){t.options&&!0===A.joinCondition(t.options)&&(e[I]=t,uh(t.edges,(function(A){void 0===g.clusteredEdges[A.id]&&(C[A.id]=A)})))})),this._cluster(e,C,A,t)}},{key:"clusterByEdgeCount",value:function(g,A){var t=this,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];A=this._checkOptions(A);for(var C,I,i,o=[],n={},r=function(e){var r={},s={},a=t.body.nodeIndices[e],d=t.body.nodes[a];if(void 0===n[a]){i=0,I=[];for(var h=0;h<d.edges.length;h++)C=d.edges[h],void 0===t.clusteredEdges[C.id]&&(C.toId!==C.fromId&&i++,I.push(C));if(i===g){for(var l=function(g){if(void 0===A.joinCondition||null===A.joinCondition)return!0;var t=uy.cloneOptions(g);return A.joinCondition(t)},c=!0,u=0;u<I.length;u++){C=I[u];var p=t._getConnectedId(C,a);if(!l(d)){c=!1;break}s[C.id]=C,r[a]=d,r[p]=t.body.nodes[p],n[a]=!0}if(Xn(r).length>0&&Xn(s).length>0&&!0===c){var f=function(){for(var g=0;g<o.length;++g)for(var A in r)if(void 0!==o[g].nodes[A])return o[g]}();if(void 0!==f){for(var v in r)void 0===f.nodes[v]&&(f.nodes[v]=r[v]);for(var y in s)void 0===f.edges[y]&&(f.edges[y]=s[y])}else o.push({nodes:r,edges:s})}}}},s=0;s<this.body.nodeIndices.length;s++)r(s);for(var a=0;a<o.length;a++)this._cluster(o[a].nodes,o[a].edges,A,!1);!0===e&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,g,A)}},{key:"clusterBridges",value:function(g){var A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,g,A)}},{key:"clusterByConnection",value:function(g,A){var t,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===g)throw new Error("No nodeId supplied to clusterByConnection !");if(void 0===this.body.nodes[g])throw new Error("The nodeId given to clusterByConnection does not exist !");var C=this.body.nodes[g];void 0===(A=this._checkOptions(A,C)).clusterNodeProperties.x&&(A.clusterNodeProperties.x=C.x),void 0===A.clusterNodeProperties.y&&(A.clusterNodeProperties.y=C.y),void 0===A.clusterNodeProperties.fixed&&(A.clusterNodeProperties.fixed={},A.clusterNodeProperties.fixed.x=C.options.fixed.x,A.clusterNodeProperties.fixed.y=C.options.fixed.y);var I={},i={},o=C.id,n=uy.cloneOptions(C);I[o]=C;for(var r=0;r<C.edges.length;r++){var s=C.edges[r];if(void 0===this.clusteredEdges[s.id]){var a=this._getConnectedId(s,o);if(void 0===this.clusteredNodes[a])if(a!==o)if(void 0===A.joinCondition)i[s.id]=s,I[a]=this.body.nodes[a];else{var d=uy.cloneOptions(this.body.nodes[a]);!0===A.joinCondition(n,d)&&(i[s.id]=s,I[a]=this.body.nodes[a])}else i[s.id]=s}}var h=_n(t=Xn(I)).call(t,(function(g){return I[g].id}));for(var l in I)if(Object.prototype.hasOwnProperty.call(I,l))for(var c=I[l],u=0;u<c.edges.length;u++){var p=c.edges[u];Ts(h).call(h,this._getConnectedId(p,c.id))>-1&&(i[p.id]=p)}this._cluster(I,i,A,e)}},{key:"_createClusterEdges",value:function(g,A,t,e){for(var C,I,i,o,n,r,s=Xn(g),a=[],d=0;d<s.length;d++){i=g[I=s[d]];for(var h=0;h<i.edges.length;h++)C=i.edges[h],void 0===this.clusteredEdges[C.id]&&(C.toId==C.fromId?A[C.id]=C:C.toId==I?(o=t.id,r=n=C.fromId):(o=C.toId,n=t.id,r=o),void 0===g[r]&&a.push({edge:C,fromId:n,toId:o}))}for(var l=[],c=function(g){for(var A=0;A<l.length;A++){var t=l[A],e=g.fromId===t.fromId&&g.toId===t.toId,C=g.fromId===t.toId&&g.toId===t.fromId;if(e||C)return t}return null},u=0;u<a.length;u++){var p=a[u],f=p.edge,v=c(p);null===v?(v=this._createClusteredEdge(p.fromId,p.toId,f,e),l.push(v)):v.clusteringEdgeReplacingIds.push(f.id),this.body.edges[f.id].edgeReplacedById=v.id,this._backupEdgeOptions(f),f.setOptions({physics:!1})}}},{key:"_checkOptions",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===g.clusterEdgeProperties&&(g.clusterEdgeProperties={}),void 0===g.clusterNodeProperties&&(g.clusterNodeProperties={}),g}},{key:"_cluster",value:function(g,A,t){var e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],C=[];for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&void 0!==this.clusteredNodes[I]&&C.push(I);for(var i=0;i<C.length;++i)delete g[C[i]];if(0!=Xn(g).length&&(1!=Xn(g).length||1==t.clusterNodeProperties.allowSingleNodeCluster)){var o=dh({},t.clusterNodeProperties);if(void 0!==t.processProperties){var n=[];for(var r in g)if(Object.prototype.hasOwnProperty.call(g,r)){var s=uy.cloneOptions(g[r]);n.push(s)}var a=[];for(var d in A)if(Object.prototype.hasOwnProperty.call(A,d)&&"clusterEdge:"!==d.substr(0,12)){var h=uy.cloneOptions(A[d],"edge");a.push(h)}if(!(o=t.processProperties(o,n,a)))throw new Error("The processProperties function does not return properties !")}void 0===o.id&&(o.id="cluster:"+Fp());var l=o.id;void 0===o.label&&(o.label="cluster");var c=void 0;void 0===o.x&&(c=this._getClusterPosition(g),o.x=c.x),void 0===o.y&&(void 0===c&&(c=this._getClusterPosition(g)),o.y=c.y),o.id=l;var u=this.body.functions.createNode(o,fy);u.containedNodes=g,u.containedEdges=A,u.clusterEdgeProperties=t.clusterEdgeProperties,this.body.nodes[o.id]=u,this._clusterEdges(g,A,o,t.clusterEdgeProperties),o.id=void 0,!0===e&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(g){void 0===this.clusteredEdges[g.id]&&(this.clusteredEdges[g.id]={physics:g.options.physics})}},{key:"_restoreEdge",value:function(g){var A=this.clusteredEdges[g.id];void 0!==A&&(g.setOptions({physics:A.physics}),delete this.clusteredEdges[g.id])}},{key:"isCluster",value:function(g){return void 0!==this.body.nodes[g]?!0===this.body.nodes[g].isCluster:(console.error("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(g){for(var A,t=Xn(g),e=g[t[0]].x,C=g[t[0]].x,I=g[t[0]].y,i=g[t[0]].y,o=1;o<t.length;o++)e=(A=g[t[o]]).x<e?A.x:e,C=A.x>C?A.x:C,I=A.y<I?A.y:I,i=A.y>i?A.y:i;return{x:.5*(e+C),y:.5*(I+i)}}},{key:"openCluster",value:function(g,A){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===g)throw new Error("No clusterNodeId supplied to openCluster.");var e=this.body.nodes[g];if(void 0===e)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(!0!==e.isCluster||void 0===e.containedNodes||void 0===e.containedEdges)throw new Error("The node:"+g+"is not a valid cluster.");var C=this.findNode(g),I=Ts(C).call(C,g)-1;if(I>=0){var i=C[I],o=this.body.nodes[i];return o._openChildCluster(g),delete this.body.nodes[g],void(!0===t&&this.body.emitter.emit("_dataChanged"))}var n=e.containedNodes,r=e.containedEdges;if(void 0!==A&&void 0!==A.releaseFunction&&"function"==typeof A.releaseFunction){var s={},a={x:e.x,y:e.y};for(var d in n)if(Object.prototype.hasOwnProperty.call(n,d)){var h=this.body.nodes[d];s[d]={x:h.x,y:h.y}}var l=A.releaseFunction(a,s);for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){var u=this.body.nodes[c];void 0!==l[c]&&(u.x=void 0===l[c].x?e.x:l[c].x,u.y=void 0===l[c].y?e.y:l[c].y)}}else uh(n,(function(g){!1===g.options.fixed.x&&(g.x=e.x),!1===g.options.fixed.y&&(g.y=e.y)}));for(var p in n)if(Object.prototype.hasOwnProperty.call(n,p)){var f=this.body.nodes[p];f.vx=e.vx,f.vy=e.vy,f.setOptions({physics:!0}),delete this.clusteredNodes[p]}for(var v=[],y=0;y<e.edges.length;y++)v.push(e.edges[y]);for(var m=0;m<v.length;m++){for(var b=v[m],w=this._getConnectedId(b,g),k=this.clusteredNodes[w],x=0;x<b.clusteringEdgeReplacingIds.length;x++){var E=b.clusteringEdgeReplacingIds[x],O=this.body.edges[E];if(void 0!==O)if(void 0!==k){var T=this.body.nodes[k.clusterId];T.containedEdges[O.id]=O,delete r[O.id];var D=O.fromId,N=O.toId;O.toId==w?N=k.clusterId:D=k.clusterId,this._createClusteredEdge(D,N,O,T.clusterEdgeProperties,{hidden:!1,physics:!0})}else this._restoreEdge(O)}b.remove()}for(var R in r)Object.prototype.hasOwnProperty.call(r,R)&&this._restoreEdge(r[R]);delete this.body.nodes[g],!0===t&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(g){var A=[];if(!0===this.isCluster(g)){var t=this.body.nodes[g].containedNodes;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&A.push(this.body.nodes[e].id)}return A}},{key:"findNode",value:function(g){for(var A,t=[],e=0;void 0!==this.clusteredNodes[g]&&e<100;){if(void 0===(A=this.body.nodes[g]))return[];t.push(A.id),g=this.clusteredNodes[g].clusterId,e++}return void 0===(A=this.body.nodes[g])?[]:(t.push(A.id),dr(t).call(t),t)}},{key:"updateClusteredNode",value:function(g,A){if(void 0===g)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===A)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[g])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[g].setOptions(A),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(g,A){if(void 0===g)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===A)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[g])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var t=this.getClusteredEdges(g),e=0;e<t.length;e++){this.body.edges[t[e]].setOptions(A)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(g){for(var A=[],t=0;void 0!==g&&void 0!==this.body.edges[g]&&t<100;)A.push(this.body.edges[g].id),g=this.body.edges[g].edgeReplacedById,t++;return dr(A).call(A),A}},{key:"getBaseEdge",value:function(g){return this.getBaseEdges(g)[0]}},{key:"getBaseEdges",value:function(g){for(var A=[g],t=[],e=[],C=0;A.length>0&&C<100;){var I=A.pop();if(void 0!==I){var i=this.body.edges[I];if(void 0!==i){C++;var o=i.clusteringEdgeReplacingIds;if(void 0===o)e.push(I);else for(var n=0;n<o.length;++n){var r=o[n];-1===Ts(A).call(A,o)&&-1===Ts(t).call(t,o)&&A.push(r)}t.push(I)}}}return e}},{key:"_getConnectedId",value:function(g,A){return g.toId!=A?g.toId:(g.fromId,g.fromId)}},{key:"_getHubSize",value:function(){for(var g=0,A=0,t=0,e=0,C=0;C<this.body.nodeIndices.length;C++){var I=this.body.nodes[this.body.nodeIndices[C]];I.edges.length>e&&(e=I.edges.length),g+=I.edges.length,A+=Math.pow(I.edges.length,2),t+=1}g/=t;var i=(A/=t)-Math.pow(g,2),o=Math.sqrt(i),n=Math.floor(g+2*o);return n>e&&(n=e),n}},{key:"_createClusteredEdge",value:function(g,A,t,e,C){var I=uy.cloneOptions(t,"edge");dh(I,e),I.from=g,I.to=A,I.id="clusterEdge:"+Fp(),void 0!==C&&dh(I,C);var i=this.body.functions.createEdge(I);return i.clusteringEdgeReplacingIds=[t.id],i.connect(),this.body.edges[i.id]=i,i}},{key:"_clusterEdges",value:function(g,A,t,e){if(A instanceof ey){var C=A,I={};I[C.id]=C,A=I}if(g instanceof rv){var i=g,o={};o[i.id]=i,g=o}if(null==t)throw new Error("_clusterEdges: parameter clusterNode required");for(var n in void 0===e&&(e=t.clusterEdgeProperties),this._createClusterEdges(g,A,t,e),A)if(Object.prototype.hasOwnProperty.call(A,n)&&void 0!==this.body.edges[n]){var r=this.body.edges[n];this._backupEdgeOptions(r),r.setOptions({physics:!1})}for(var s in g)Object.prototype.hasOwnProperty.call(g,s)&&(this.clusteredNodes[s]={clusterId:t.id,node:this.body.nodes[s]},this.body.nodes[s].setOptions({physics:!1}))}},{key:"_getClusterNodeForNode",value:function(g){if(void 0!==g){var A=this.clusteredNodes[g];if(void 0!==A){var t=A.clusterId;if(void 0!==t)return this.body.nodes[t]}}}},{key:"_filter",value:function(g,A){var t=[];return uh(g,(function(g){A(g)&&t.push(g)})),t}},{key:"_updateState",value:function(){var g,A=this,t=[],e={},C=function(g){uh(A.body.nodes,(function(A){!0===A.isCluster&&g(A)}))};for(g in this.clusteredNodes){if(Object.prototype.hasOwnProperty.call(this.clusteredNodes,g))void 0===this.body.nodes[g]&&t.push(g)}C((function(g){for(var A=0;A<t.length;A++)delete g.containedNodes[t[A]]}));for(var I=0;I<t.length;I++)delete this.clusteredNodes[t[I]];uh(this.clusteredEdges,(function(g){var t=A.body.edges[g];void 0!==t&&t.endPointsValid()||(e[g]=g)})),C((function(g){uh(g.containedEdges,(function(g,A){g.endPointsValid()||e[A]||(e[A]=A)}))})),uh(this.body.edges,(function(g,t){var C=!0,I=g.clusteringEdgeReplacingIds;if(void 0!==I){var i=0;uh(I,(function(g){var t=A.body.edges[g];void 0!==t&&t.endPointsValid()&&(i+=1)})),C=i>0}g.endPointsValid()&&C||(e[t]=t)})),C((function(g){uh(e,(function(t){delete g.containedEdges[t],uh(g.edges,(function(C,I){C.id!==t?C.clusteringEdgeReplacingIds=A._filter(C.clusteringEdgeReplacingIds,(function(g){return!e[g]})):g.edges[I]=null})),g.edges=A._filter(g.edges,(function(g){return null!==g}))}))})),uh(e,(function(g){delete A.clusteredEdges[g]})),uh(e,(function(g){delete A.body.edges[g]})),uh(Xn(this.body.edges),(function(g){var t=A.body.edges[g],e=A._isClusteredNode(t.fromId)||A._isClusteredNode(t.toId);if(e!==A._isClusteredEdge(t.id))if(e){var C=A._getClusterNodeForNode(t.fromId);void 0!==C&&A._clusterEdges(A.body.nodes[t.fromId],t,C);var I=A._getClusterNodeForNode(t.toId);void 0!==I&&A._clusterEdges(A.body.nodes[t.toId],t,I)}else delete A._clusterEdges[g],A._restoreEdge(t)}));for(var i=!1,o=!0,n=function(){var g=[];C((function(A){var t=Xn(A.containedNodes).length,e=!0===A.options.allowSingleNodeCluster;(e&&t<1||!e&&t<2)&&g.push(A.id)}));for(var t=0;t<g.length;++t)A.openCluster(g[t],{},!1);o=g.length>0,i=i||o};o;)n();i&&this._updateState()}},{key:"_isClusteredNode",value:function(g){return void 0!==this.clusteredNodes[g]}},{key:"_isClusteredEdge",value:function(g){return void 0!==this.clusteredEdges[g]}}]),g}();function yy(g,A){var t=void 0!==Sn&&mI(g)||g["@@iterator"];if(!t){if(Yn(g)||(t=function(g,A){var t;if(!g)return;if("string"==typeof g)return my(g,A);var e=jn(t=Object.prototype.toString.call(g)).call(t,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return eI(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return my(g,A)}(g))||A&&g&&"number"==typeof g.length){t&&(g=t);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){t=t.call(g)},n:function(){var g=t.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw I}}}}function my(g,A){(null==A||A>g.length)&&(A=g.length);for(var t=0,e=new Array(A);t<A;t++)e[t]=g[t];return e}var by=function(){function g(A,t){var e;So(this,g),void 0!==window&&(e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),window.requestAnimationFrame=void 0===e?function(g){g()}:e,this.body=A,this.canvas=t,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,this.dragging=!1,this.zooming=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1},HA(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g,A=this;this.body.emitter.on("dragStart",(function(){A.dragging=!0})),this.body.emitter.on("dragEnd",(function(){A.dragging=!1})),this.body.emitter.on("zoom",(function(){A.zooming=!0,window.clearTimeout(A.zoomTimeoutId),A.zoomTimeoutId=Hs((function(){var g;A.zooming=!1,It(g=A._requestRedraw).call(g,A)()}),250)})),this.body.emitter.on("_resizeNodes",(function(){A._resizeNodes()})),this.body.emitter.on("_redraw",(function(){!1===A.renderingActive&&A._redraw()})),this.body.emitter.on("_blockRedraw",(function(){A.allowRedraw=!1})),this.body.emitter.on("_allowRedraw",(function(){A.allowRedraw=!0,A.redrawRequested=!1})),this.body.emitter.on("_requestRedraw",It(g=this._requestRedraw).call(g,this)),this.body.emitter.on("_startRendering",(function(){A.renderRequests+=1,A.renderingActive=!0,A._startRendering()})),this.body.emitter.on("_stopRendering",(function(){A.renderRequests-=1,A.renderingActive=A.renderRequests>0,A.renderTimer=void 0})),this.body.emitter.on("destroy",(function(){A.renderRequests=0,A.allowRedraw=!1,A.renderingActive=!1,!0===A.requiresTimeout?clearTimeout(A.renderTimer):window.cancelAnimationFrame(A.renderTimer),A.body.emitter.off()}))}},{key:"setOptions",value:function(g){if(void 0!==g){sh(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,g)}}},{key:"_requestNextFrame",value:function(g,A){if("undefined"!=typeof window){var t,e=window;return!0===this.requiresTimeout?t=Hs(g,A):e.requestAnimationFrame&&(t=e.requestAnimationFrame(g)),t}}},{key:"_startRendering",value:function(){var g;!0===this.renderingActive&&(void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(It(g=this._renderStep).call(g,this),this.simulationInterval)))}},{key:"_renderStep",value:function(){!0===this.renderingActive&&(this.renderTimer=void 0,!0===this.requiresTimeout&&this._startRendering(),this._redraw(),!1===this.requiresTimeout&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var g=this;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,this._requestNextFrame((function(){g._redraw(!1)}),0))}},{key:"_redraw",value:function(){var g=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===this.allowRedraw){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1;var A={drawExternalLabels:null};0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.canvas.setTransform();var t=this.canvas.getContext(),e=this.canvas.frame.canvas.clientWidth,C=this.canvas.frame.canvas.clientHeight;if(t.clearRect(0,0,e,C),0===this.canvas.frame.clientWidth)return;if(t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale),t.beginPath(),this.body.emitter.emit("beforeDrawing",t),t.closePath(),!1===g&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(t),!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag){var I=this._drawNodes(t,g),i=I.drawExternalLabels;A.drawExternalLabels=i}!1===g&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawArrows(t),null!=A.drawExternalLabels&&A.drawExternalLabels(),!1===g&&this._drawSelectionBox(t),t.beginPath(),this.body.emitter.emit("afterDrawing",t),t.closePath(),t.restore(),!0===g&&t.clearRect(0,0,e,C)}}},{key:"_resizeNodes",value:function(){this.canvas.setTransform();var g=this.canvas.getContext();g.save(),g.translate(this.body.view.translation.x,this.body.view.translation.y),g.scale(this.body.view.scale,this.body.view.scale);var A,t=this.body.nodes;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&((A=t[e]).resize(g),A.updateBoundingBox(g,A.selected));g.restore()}},{key:"_drawNodes",value:function(g){for(var A,t,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],C=this.body.nodes,I=this.body.nodeIndices,i=[],o=[],n=20,r=this.canvas.DOMtoCanvas({x:-n,y:-n}),s=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+n,y:this.canvas.frame.canvas.clientHeight+n}),a={top:r.y,left:r.x,bottom:s.y,right:s.x},d=[],h=0;h<I.length;h++)if((A=C[I[h]]).hover)o.push(I[h]);else if(A.isSelected())i.push(I[h]);else if(!0===e){var l=A.draw(g);null!=l.drawExternalLabel&&d.push(l.drawExternalLabel)}else if(!0===A.isBoundingBoxOverlappingWith(a)){var c=A.draw(g);null!=c.drawExternalLabel&&d.push(c.drawExternalLabel)}else A.updateBoundingBox(g,A.selected);var u=i.length,p=o.length;for(t=0;t<u;t++){var f=(A=C[i[t]]).draw(g);null!=f.drawExternalLabel&&d.push(f.drawExternalLabel)}for(t=0;t<p;t++){var v=(A=C[o[t]]).draw(g);null!=v.drawExternalLabel&&d.push(v.drawExternalLabel)}return{drawExternalLabels:function(){var g,A=yy(d);try{for(A.s();!(g=A.n()).done;){(0,g.value)()}}catch(g){A.e(g)}finally{A.f()}}}}},{key:"_drawEdges",value:function(g){for(var A=this.body.edges,t=this.body.edgeIndices,e=0;e<t.length;e++){var C=A[t[e]];!0===C.connected&&C.draw(g)}}},{key:"_drawArrows",value:function(g){for(var A=this.body.edges,t=this.body.edgeIndices,e=0;e<t.length;e++){var C=A[t[e]];!0===C.connected&&C.drawArrows(g)}}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var g=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,(-1!=Ts(g).call(g,"msie 9.0")||-1!=Ts(g).call(g,"safari")&&Ts(g).call(g,"chrome")<=-1)&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}},{key:"_drawSelectionBox",value:function(g){if(this.body.selectionBox.show){g.beginPath();var A=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x,t=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y;g.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,A,t),g.fillStyle="rgba(151, 194, 252, 0.2)",g.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,A,t),g.strokeStyle="rgba(151, 194, 252, 1)",g.stroke()}else g.closePath()}}]),g}(),wy=k.setInterval;function ky(g,A){A.inputHandler=function(g){g.isFirst&&A(g)},g.on("hammer.input",A.inputHandler)}function xy(g,A){return A.inputHandler=function(g){g.isFinal&&A(g)},g.on("hammer.input",A.inputHandler)}var Ey=function(){function g(A){So(this,g),this.body=A,this.pixelRatio=1,this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this._cleanupCallbacks=[],this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},HA(this.options,this.defaultOptions),this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g,A=this;this.body.emitter.once("resize",(function(g){0!==g.width&&(A.body.view.translation.x=.5*g.width),0!==g.height&&(A.body.view.translation.y=.5*g.height)})),this.body.emitter.on("setSize",It(g=this.setSize).call(g,this)),this.body.emitter.on("destroy",(function(){A.hammerFrame.destroy(),A.hammer.destroy(),A._cleanUp()}))}},{key:"setOptions",value:function(g){var A,t,e,C,I,i=this;if(void 0!==g){sh(["width","height","autoResize"],this.options,g)}if(this._cleanUp(),!0===this.options.autoResize){var o;if(window.ResizeObserver){var n=new ResizeObserver((function(){!0===i.setSize()&&i.body.emitter.emit("_requestRedraw")})),r=this.frame;n.observe(r),this._cleanupCallbacks.push((function(){n.unobserve(r)}))}else{var s=wy((function(){!0===i.setSize()&&i.body.emitter.emit("_requestRedraw")}),1e3);this._cleanupCallbacks.push((function(){clearInterval(s)}))}var a=It(o=this._onResize).call(o,this);A=window,t="resize",e=a,A.addEventListener?(void 0===C&&(C=!1),"mousewheel"===t&&Yr(I=navigator.userAgent).call(I,"Firefox")&&(t="DOMMouseScroll"),A.addEventListener(t,e,C)):A.attachEvent("on"+t,e),this._cleanupCallbacks.push((function(){!function(g,A,t,e){var C;g.removeEventListener?(void 0===e&&(e=!1),"mousewheel"===A&&Yr(C=navigator.userAgent).call(C,"Firefox")&&(A="DOMMouseScroll"),g.removeEventListener(A,t,e)):g.detachEvent("on"+A,t)}(window,"resize",a)}))}}},{key:"_cleanUp",value:function(){var g,A,t;ir(g=dr(A=Or(t=this._cleanupCallbacks).call(t,0)).call(A)).call(g,(function(g){try{g()}catch(g){console.error(g)}}))}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/g,this.cameraState.previousHeight=this.frame.canvas.height/g,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/g,y:.5*this.frame.canvas.height/g}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){var g=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,A=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,t=this.cameraState.scale;1!=g&&1!=A?t=.5*this.cameraState.scale*(g+A):1!=g?t=this.cameraState.scale*g:1!=A&&(t=this.cameraState.scale*A),this.body.view.scale=t;var e=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),C={x:e.x-this.cameraState.position.x,y:e.y-this.cameraState.position.y};this.body.view.translation.x+=C.x*this.body.view.scale,this.body.view.translation.y+=C.y*this.body.view.scale}}},{key:"_prepareValue",value:function(g){if("number"==typeof g)return g+"px";if("string"==typeof g){if(-1!==Ts(g).call(g,"%")||-1!==Ts(g).call(g,"px"))return g;if(-1===Ts(g).call(g,"%"))return g+"px"}throw new Error("Could not use the value supplied for width or height:"+g)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=0,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext)this._setPixelRatio(),this.setTransform();else{var g=document.createElement("DIV");g.style.color="red",g.style.fontWeight="bold",g.style.padding="10px",g.innerText="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(g)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var g=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new Gh(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:Gh.DIRECTION_ALL}),ky(this.hammer,(function(A){g.body.eventListeners.onTouch(A)})),this.hammer.on("tap",(function(A){g.body.eventListeners.onTap(A)})),this.hammer.on("doubletap",(function(A){g.body.eventListeners.onDoubleTap(A)})),this.hammer.on("press",(function(A){g.body.eventListeners.onHold(A)})),this.hammer.on("panstart",(function(A){g.body.eventListeners.onDragStart(A)})),this.hammer.on("panmove",(function(A){g.body.eventListeners.onDrag(A)})),this.hammer.on("panend",(function(A){g.body.eventListeners.onDragEnd(A)})),this.hammer.on("pinch",(function(A){g.body.eventListeners.onPinch(A)})),this.frame.canvas.addEventListener("wheel",(function(A){g.body.eventListeners.onMouseWheel(A)})),this.frame.canvas.addEventListener("mousemove",(function(A){g.body.eventListeners.onMouseMove(A)})),this.frame.canvas.addEventListener("contextmenu",(function(A){g.body.eventListeners.onContext(A)})),this.hammerFrame=new Gh(this.frame),xy(this.hammerFrame,(function(A){g.body.eventListeners.onRelease(A)}))}},{key:"setSize",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;g=this._prepareValue(g),A=this._prepareValue(A);var t=!1,e=this.frame.canvas.width,C=this.frame.canvas.height,I=this.pixelRatio;if(this._setPixelRatio(),g!=this.options.width||A!=this.options.height||this.frame.style.width!=g||this.frame.style.height!=A)this._getCameraState(I),this.frame.style.width=g,this.frame.style.height=A,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=g,this.options.height=A,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},t=!0;else{var i=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),o=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.frame.canvas.width===i&&this.frame.canvas.height===o||this._getCameraState(I),this.frame.canvas.width!==i&&(this.frame.canvas.width=i,t=!0),this.frame.canvas.height!==o&&(this.frame.canvas.height=o,t=!0)}return!0===t&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(e/this.pixelRatio),oldHeight:Math.round(C/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,t}},{key:"getContext",value:function(){return this.frame.canvas.getContext("2d")}},{key:"_determinePixelRatio",value:function(){var g=this.getContext();if(void 0===g)throw new Error("Could not get canvax context");var A=1;return"undefined"!=typeof window&&(A=window.devicePixelRatio||1),A/(g.webkitBackingStorePixelRatio||g.mozBackingStorePixelRatio||g.msBackingStorePixelRatio||g.oBackingStorePixelRatio||g.backingStorePixelRatio||1)}},{key:"_setPixelRatio",value:function(){this.pixelRatio=this._determinePixelRatio()}},{key:"setTransform",value:function(){var g=this.getContext();if(void 0===g)throw new Error("Could not get canvax context");g.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}},{key:"_XconvertDOMtoCanvas",value:function(g){return(g-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(g){return g*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(g){return(g-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(g){return g*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(g){return{x:this._XconvertCanvasToDOM(g.x),y:this._YconvertCanvasToDOM(g.y)}}},{key:"DOMtoCanvas",value:function(g){return{x:this._XconvertDOMtoCanvas(g.x),y:this._YconvertDOMtoCanvas(g.y)}}}]),g}();function Oy(g,A){var t=HA({nodes:A,minZoomLevel:Number.MIN_VALUE,maxZoomLevel:1},null!=g?g:{});if(!Yn(t.nodes))throw new TypeError("Nodes has to be an array of ids.");if(0===t.nodes.length&&(t.nodes=A),!("number"==typeof t.minZoomLevel&&t.minZoomLevel>0))throw new TypeError("Min zoom level has to be a number higher than zero.");if(!("number"==typeof t.maxZoomLevel&&t.minZoomLevel<=t.maxZoomLevel))throw new TypeError("Max zoom level has to be a number higher than min zoom level.");return t}var Ty=function(){function g(A,t){var e,C,I=this;So(this,g),this.body=A,this.canvas=t,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",It(e=this.fit).call(e,this)),this.body.emitter.on("animationFinished",(function(){I.body.emitter.emit("_stopRendering")})),this.body.emitter.on("unlockNode",It(C=this.releaseNode).call(C,this))}return Lo(g,[{key:"setOptions",value:function(){var g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=g}},{key:"fit",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g=Oy(g,this.body.nodeIndices);var t,e,C=this.canvas.frame.canvas.clientWidth,I=this.canvas.frame.canvas.clientHeight;if(0===C||0===I)e=1,t=uy.getRange(this.body.nodes,g.nodes);else if(!0===A){var i=0;for(var o in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,o)){var n=this.body.nodes[o];!0===n.predefinedPosition&&(i+=1)}if(i>.5*this.body.nodeIndices.length)return void this.fit(g,!1);t=uy.getRange(this.body.nodes,g.nodes);var r=this.body.nodeIndices.length;e=12.662/(r+7.4147)+.0964822;var s=Math.min(C/600,I/600);e*=s}else{this.body.emitter.emit("_resizeNodes"),t=uy.getRange(this.body.nodes,g.nodes);var a=1.1*Math.abs(t.maxX-t.minX),d=1.1*Math.abs(t.maxY-t.minY),h=C/a,l=I/d;e=h<=l?h:l}e>g.maxZoomLevel?e=g.maxZoomLevel:e<g.minZoomLevel&&(e=g.minZoomLevel);var c=uy.findCenter(t),u={position:c,scale:e,animation:g.animation};this.moveTo(u)}},{key:"focus",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[g]){var t={x:this.body.nodes[g].x,y:this.body.nodes[g].y};A.position=t,A.lockedOnNode=g,this.moveTo(A)}else console.error("Node: "+g+"cannot be found.")}},{key:"moveTo",value:function(g){if(void 0!==g){if(null!=g.offset){if(null!=g.offset.x){if(g.offset.x=+g.offset.x,!Zc(g.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')}else g.offset.x=0;if(null!=g.offset.y){if(g.offset.y=+g.offset.y,!Zc(g.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')}else g.offset.x=0}else g.offset={x:0,y:0};if(null!=g.position){if(null!=g.position.x){if(g.position.x=+g.position.x,!Zc(g.position.x))throw new TypeError('The option "position.x" has to be a finite number.')}else g.position.x=0;if(null!=g.position.y){if(g.position.y=+g.position.y,!Zc(g.position.y))throw new TypeError('The option "position.y" has to be a finite number.')}else g.position.x=0}else g.position=this.getViewPosition();if(null!=g.scale){if(g.scale=+g.scale,!(g.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')}else g.scale=this.body.view.scale;void 0===g.animation&&(g.animation={duration:0}),!1===g.animation&&(g.animation={duration:0}),!0===g.animation&&(g.animation={}),void 0===g.animation.duration&&(g.animation.duration=1e3),void 0===g.animation.easingFunction&&(g.animation.easingFunction="easeInOutQuad"),this.animateView(g)}else g={}}},{key:"animateView",value:function(g){if(void 0!==g){this.animationEasingFunction=g.animation.easingFunction,this.releaseNode(),!0===g.locked&&(this.lockedOnNodeId=g.lockedOnNode,this.lockedOnNodeOffset=g.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=g.scale,this.body.view.scale=this.targetScale;var A,t,e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),C=e.x-g.position.x,I=e.y-g.position.y;if(this.targetTranslation={x:this.sourceTranslation.x+C*this.targetScale+g.offset.x,y:this.sourceTranslation.y+I*this.targetScale+g.offset.y},0===g.animation.duration)if(null!=this.lockedOnNodeId)this.viewFunction=It(A=this._lockedRedraw).call(A,this),this.body.emitter.on("initRedraw",this.viewFunction);else this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw");else this.animationSpeed=1/(60*g.animation.duration*.001)||1/60,this.animationEasingFunction=g.animation.easingFunction,this.viewFunction=It(t=this._transitionRedraw).call(t,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering")}}},{key:"_lockedRedraw",value:function(){var g=this.body.nodes[this.lockedOnNodeId].x,A=this.body.nodes[this.lockedOnNodeId].y,t=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),e=t.x-g,C=t.y-A,I=this.body.view.translation,i={x:I.x+e*this.body.view.scale+this.lockedOnNodeOffset.x,y:I.y+C*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=i}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var g=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=!0===g?1:this.easingTime;var A=Dh[this.animationEasingFunction](this.easingTime);if(this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*A,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*A,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*A},this.easingTime>=1){var t;if(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,null!=this.lockedOnNodeId)this.viewFunction=It(t=this._lockedRedraw).call(t,this),this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("animationFinished")}}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),g}();function Dy(g){var A,t=g&&g.preventDefault||!1,e=g&&g.container||window,C={},I={keydown:{},keyup:{}},i={};for(A=97;A<=122;A++)i[String.fromCharCode(A)]={code:A-97+65,shift:!1};for(A=65;A<=90;A++)i[String.fromCharCode(A)]={code:A,shift:!0};for(A=0;A<=9;A++)i[""+A]={code:48+A,shift:!1};for(A=1;A<=12;A++)i["F"+A]={code:111+A,shift:!1};for(A=0;A<=9;A++)i["num"+A]={code:96+A,shift:!1};i["num*"]={code:106,shift:!1},i["num+"]={code:107,shift:!1},i["num-"]={code:109,shift:!1},i["num/"]={code:111,shift:!1},i["num."]={code:110,shift:!1},i.left={code:37,shift:!1},i.up={code:38,shift:!1},i.right={code:39,shift:!1},i.down={code:40,shift:!1},i.space={code:32,shift:!1},i.enter={code:13,shift:!1},i.shift={code:16,shift:void 0},i.esc={code:27,shift:!1},i.backspace={code:8,shift:!1},i.tab={code:9,shift:!1},i.ctrl={code:17,shift:!1},i.alt={code:18,shift:!1},i.delete={code:46,shift:!1},i.pageup={code:33,shift:!1},i.pagedown={code:34,shift:!1},i["="]={code:187,shift:!1},i["-"]={code:189,shift:!1},i["]"]={code:221,shift:!1},i["["]={code:219,shift:!1};var o=function(g){r(g,"keydown")},n=function(g){r(g,"keyup")},r=function(g,A){if(void 0!==I[A][g.keyCode]){for(var e=I[A][g.keyCode],C=0;C<e.length;C++)(void 0===e[C].shift||1==e[C].shift&&1==g.shiftKey||0==e[C].shift&&0==g.shiftKey)&&e[C].fn(g);1==t&&g.preventDefault()}};return C.bind=function(g,A,t){if(void 0===t&&(t="keydown"),void 0===i[g])throw new Error("unsupported key: "+g);void 0===I[t][i[g].code]&&(I[t][i[g].code]=[]),I[t][i[g].code].push({fn:A,shift:i[g].shift})},C.bindAll=function(g,A){for(var t in void 0===A&&(A="keydown"),i)i.hasOwnProperty(t)&&C.bind(t,g,A)},C.getKey=function(g){for(var A in i)if(i.hasOwnProperty(A)){if(1==g.shiftKey&&1==i[A].shift&&g.keyCode==i[A].code)return A;if(0==g.shiftKey&&0==i[A].shift&&g.keyCode==i[A].code)return A;if(g.keyCode==i[A].code&&"shift"==A)return A}return"unknown key, currently not supported"},C.unbind=function(g,A,t){if(void 0===t&&(t="keydown"),void 0===i[g])throw new Error("unsupported key: "+g);if(void 0!==A){var e=[],C=I[t][i[g].code];if(void 0!==C)for(var o=0;o<C.length;o++)C[o].fn==A&&C[o].shift==i[g].shift||e.push(I[t][i[g].code][o]);I[t][i[g].code]=e}else I[t][i[g].code]=[]},C.reset=function(){I={keydown:{},keyup:{}}},C.destroy=function(){I={keydown:{},keyup:{}},e.removeEventListener("keydown",o,!0),e.removeEventListener("keyup",n,!0)},e.addEventListener("keydown",o,!0),e.addEventListener("keyup",n,!0),C}dt('div.vis-network div.vis-navigation div.vis-button{width:34px;height:34px;-moz-border-radius:17px;border-radius:17px;position:absolute;display:inline-block;background-position:2px 2px;background-repeat:no-repeat;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.vis-network div.vis-navigation div.vis-button:hover{box-shadow:0 0 3px 3px rgba(56,207,21,.3)}div.vis-network div.vis-navigation div.vis-button:active{box-shadow:0 0 1px 3px rgba(56,207,21,.95)}div.vis-network div.vis-navigation div.vis-button.vis-up{background-image:url("data:image/png; base64, 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");bottom:50px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-down{background-image:url("data:image/png;base64,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");bottom:10px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-left{background-image:url("data:image/png;base64,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");bottom:10px;left:15px}div.vis-network div.vis-navigation div.vis-button.vis-right{background-image:url("data:image/png;base64,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");bottom:10px;left:95px}div.vis-network div.vis-navigation div.vis-button.vis-zoomIn{background-image:url("data:image/png;base64,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");bottom:10px;right:15px}div.vis-network div.vis-navigation div.vis-button.vis-zoomOut{background-image:url("data:image/png;base64,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");bottom:10px;right:55px}div.vis-network div.vis-navigation div.vis-button.vis-zoomExtends{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABptJREFUeNqsl21QlNcVx///cx9hIipuAJHasgHlRdw0xay7yK7smg6sb2DSdtqZduLUNENmOk1tQuM4U7UzTvshSRlFZzoNCWSSSTJp+6VNkLCAeQHBoCCgqNBE0wUqL+KuwIiiZZ9+eHa3aAS3Sf8zO8/L3nt+95x7z7n3YWlpKUQEJAEgch9+Jola9xEC2ADBVgAOKqwCYAqKDgUJBIHPBWwFWQNdbyZFBwAC0GGIAHQSj3/8HHRdhzYbdDfwg4IjAsGvICgXAroYBiCEDkBBACBZoyST4gDwQqh7mQ4cEkhQD0EBIIggRMQAh2EiEvEYAGrdR3YSqIYCIEDaotVDeYnu/ryEjSOr43PHl8WmTBPA6PRQ7IWJrvhT/ubkU/7m1EvX+1KEUh7Ug+WkPEXgdUSkR+xrd0NJ4qjr8AEI9pGAI7mo78mHfnF+Y/K2K7iHUheuvJG6cOUNz/LvDwPobrpSl/Ruf2VOy9UPs4RSTSANwH4Y449EVdnt9ojHIeghCHYLgR+n/7zt4Np32tIWZU4hSpnjVk1t/caPfOO3/f++MNH5TVJcisoEoo4ksgbsXwYfdR1+kQplQuCFNS82Pp/9+158RTkTC0ce0OKutQeOp5PME0qcUBqyBmwGOC8vz4AWVOyE4CUqYO/Dh+p3pj//Bb6mHllqCyxd8ODVT69+uFKoOYTSnzFg7SJpzHFNQYWiQrUIsCN9V+uOh375zz179pSGI1FSUuK12+2+aGDt7e3muro6T/h57969lZdvDrT+ZbA6n0B1nfPVN7e0PjMjIgIIdkEAR1JR329yDvaE0+l/hQKA1Wr1bd682SsikUW7K+O3PesTNvaSAiXaLhGBvO86RFEoJ4Adac+eDxsgiZKSEm9NTY3n5MmT5mjBHR0d5vr6es+mTZu8SqnI+x+s+Ol5jRo0auX1jtepQaEAADKWWIbcy7ZGUmb79u1eu93uI+mtra31HLj5TGDs9rBJICCNn1GRCKGCUJAUuzzw6CfbTB6Px7t27VofAG/YXl6Ceyw9LmvIN3UxZUafKRACWyCELcHVP3vk4fDabDZf+2N/D9g+fsLEEFSooFGDogZNFkBRgSCsTcWm066jgRAU4et/F5u9nxRosmCLRmE+QdgSXCNzhW/s9rDJ63wVJx77V+V8YS6UNaW8BdOcqzx+3Ujt0F8Bcr1GMIMU5CzJHZ+rg6IGCYV2PimoyIK6lzIWrxkPTVGmRoqJFCyLTZmeq4MB5f3BVADnbpcQkzStUQMAk0YKBPfzxlhA95NQQe43QBotBECAFFyZHo6dz6CKCizAPFPivzUWqxm2AqIgnwkFvZNn4uczGK3Hah7wpet98UZ85R8aKScIcXYEWpMLkx8fvleHpNjlAWtTsakQa0pVKGcJQqMGUqCHBvfdjp/gTP6xwFzg85PdyaH2J4SUowKiw3889e4KBACnT582W5uKTV2uusAdUFlgzBcFQoFGDT35HwW+82mhqaenxwwA4WtYfRNnUkMZUqsJpEkn8cXU5yktYw2JjsTCMQDwer0ekt6GhgZPUVGRd3fu7qjqdU9Mj7mlpcVD0tvS0uKxWCyVANB5rS3x8s3BFEUFgTTLtuZndQHLBMSfB6pyZtfqMDQ3NzfqTcJisficTqc3BI+8bxh9L8corarM3fnDoIT+rACAU/7m7MOfHbCEwQDQ2Njo6erqinqTOHfuXNjjiI23+ystZ8c7smmkWgVJcN++fRARfLDhlacEUqVEQ1nm77xPrHjSh/+Djo3WmN/s/6OHEOgIPr2h63tVuq5Dud1ukETWoK3zorkzTiiONn/TKlNM4lj24m+Pf13o2wOVHqGA5MsAXjKPrDaqnMvlQnjTzhy0Nlw0d5oI5p3yN62amrk+ve5B5+hXgb47WGX52+V3NgoFOvQKAGUkkTqcbZy5XC7XHYf4zEFr3aXU7jih5uidPPOtvsmzixZr8VMrHjBHddLsHj+Z9Fb/n9a1+T/JDaXey0IpEzEKkHnU8Jj79++PeEwSSimQRGP+Gz8j5DVFBVKQtjBj6JGlNt/D8Y+OpMdlTphiEqcB4tqtsVjfjUtLLkx0J/dOnjWPTg+lEARIEHwaQJVQIYggACC/qxi6rn8ZHL4XETSsf0MU1HOk/CFGYgAwskUqY5eBitRxzn7/a0V1EEBwdqkN6jPI7y4xPmHmC5unbWdQRMqP2d86qANOksU6gvmArNQRNClqABnQgYuK0krI+wCOAyH3DK/vqOXhaf3PAO7mIRjDNV25AAAAAElFTkSuQmCC");bottom:50px;right:15px}');var Ny=function(){function g(A,t){var e=this;So(this,g),this.body=A,this.canvas=t,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",(function(){e.activated=!0,e.configureKeyboardBindings()})),this.body.emitter.on("deactivate",(function(){e.activated=!1,e.configureKeyboardBindings()})),this.body.emitter.on("destroy",(function(){void 0!==e.keycharm&&e.keycharm.destroy()})),this.options={}}return Lo(g,[{key:"setOptions",value:function(g){void 0!==g&&(this.options=g,this.create())}},{key:"create",value:function(){!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var g=0;g<this.navigationHammers.length;g++)this.navigationHammers[g].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var g=this;this.cleanNavigation(),this.navigationDOM={};var A=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],t=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var e=0;e<A.length;e++){this.navigationDOM[A[e]]=document.createElement("div"),this.navigationDOM[A[e]].className="vis-button vis-"+A[e],this.navigationDOM.wrapper.appendChild(this.navigationDOM[A[e]]);var C,I,i=new Gh(this.navigationDOM[A[e]]);if("_fit"===t[e])ky(i,It(C=this._fit).call(C,this));else ky(i,It(I=this.bindToRedraw).call(I,this,t[e]));this.navigationHammers.push(i)}var o=new Gh(this.canvas.frame);xy(o,(function(){g._stopMovement()})),this.navigationHammers.push(o),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(g){var A;void 0===this.boundFunctions[g]&&(this.boundFunctions[g]=It(A=this[g]).call(A,this),this.body.emitter.on("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(g){void 0!==this.boundFunctions[g]&&(this.body.emitter.off("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[g])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var g in this.boundFunctions)Object.prototype.hasOwnProperty.call(this.boundFunctions,g)&&(this.body.emitter.off("initRedraw",this.boundFunctions[g]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var g=this.body.view.scale,A=this.body.view.scale*(1+this.options.keyboard.speed.zoom),t=this.body.view.translation,e=A/g,C=(1-e)*this.canvas.canvasViewCenter.x+t.x*e,I=(1-e)*this.canvas.canvasViewCenter.y+t.y*e;this.body.view.scale=A,this.body.view.translation={x:C,y:I},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var g=this.body.view.scale,A=this.body.view.scale/(1+this.options.keyboard.speed.zoom),t=this.body.view.translation,e=A/g,C=(1-e)*this.canvas.canvasViewCenter.x+t.x*e,I=(1-e)*this.canvas.canvasViewCenter.y+t.y*e;this.body.view.scale=A,this.body.view.translation={x:C,y:I},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var g,A,t,e,C,I,i,o,n,r,s,a,d,h,l,c,u,p,f,v,y,m,b,w,k=this;(void 0!==this.keycharm&&this.keycharm.destroy(),!0===this.options.keyboard.enabled)&&(!0===this.options.keyboard.bindToWindow?this.keycharm=Dy({container:window,preventDefault:!0}):this.keycharm=Dy({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),!0===this.activated&&(It(g=this.keycharm).call(g,"up",(function(){k.bindToRedraw("_moveUp")}),"keydown"),It(A=this.keycharm).call(A,"down",(function(){k.bindToRedraw("_moveDown")}),"keydown"),It(t=this.keycharm).call(t,"left",(function(){k.bindToRedraw("_moveLeft")}),"keydown"),It(e=this.keycharm).call(e,"right",(function(){k.bindToRedraw("_moveRight")}),"keydown"),It(C=this.keycharm).call(C,"=",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),It(I=this.keycharm).call(I,"num+",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),It(i=this.keycharm).call(i,"num-",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),It(o=this.keycharm).call(o,"-",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),It(n=this.keycharm).call(n,"[",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),It(r=this.keycharm).call(r,"]",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),It(s=this.keycharm).call(s,"pageup",(function(){k.bindToRedraw("_zoomIn")}),"keydown"),It(a=this.keycharm).call(a,"pagedown",(function(){k.bindToRedraw("_zoomOut")}),"keydown"),It(d=this.keycharm).call(d,"up",(function(){k.unbindFromRedraw("_moveUp")}),"keyup"),It(h=this.keycharm).call(h,"down",(function(){k.unbindFromRedraw("_moveDown")}),"keyup"),It(l=this.keycharm).call(l,"left",(function(){k.unbindFromRedraw("_moveLeft")}),"keyup"),It(c=this.keycharm).call(c,"right",(function(){k.unbindFromRedraw("_moveRight")}),"keyup"),It(u=this.keycharm).call(u,"=",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),It(p=this.keycharm).call(p,"num+",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),It(f=this.keycharm).call(f,"num-",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),It(v=this.keycharm).call(v,"-",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),It(y=this.keycharm).call(y,"[",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup"),It(m=this.keycharm).call(m,"]",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),It(b=this.keycharm).call(b,"pageup",(function(){k.unbindFromRedraw("_zoomIn")}),"keyup"),It(w=this.keycharm).call(w,"pagedown",(function(){k.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),g}();function Ry(g,A){var t=void 0!==Sn&&mI(g)||g["@@iterator"];if(!t){if(Yn(g)||(t=function(g,A){var t;if(!g)return;if("string"==typeof g)return Py(g,A);var e=jn(t=Object.prototype.toString.call(g)).call(t,8,-1);"Object"===e&&g.constructor&&(e=g.constructor.name);if("Map"===e||"Set"===e)return eI(g);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Py(g,A)}(g))||A&&g&&"number"==typeof g.length){t&&(g=t);var e=0,C=function(){};return{s:C,n:function(){return e>=g.length?{done:!0}:{done:!1,value:g[e++]}},e:function(g){throw g},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,i=!0,o=!1;return{s:function(){t=t.call(g)},n:function(){var g=t.next();return i=g.done,g},e:function(g){o=!0,I=g},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw I}}}}function Py(g,A){(null==A||A>g.length)&&(A=g.length);for(var t=0,e=new Array(A);t<A;t++)e[t]=g[t];return e}var My=function(){function g(A,t,e){var C,I,i,o,n,r,s,a,d,h,l,c,u;So(this,g),this.body=A,this.canvas=t,this.selectionHandler=e,this.navigationHandler=new Ny(A,t),this.body.eventListeners.onTap=It(C=this.onTap).call(C,this),this.body.eventListeners.onTouch=It(I=this.onTouch).call(I,this),this.body.eventListeners.onDoubleTap=It(i=this.onDoubleTap).call(i,this),this.body.eventListeners.onHold=It(o=this.onHold).call(o,this),this.body.eventListeners.onDragStart=It(n=this.onDragStart).call(n,this),this.body.eventListeners.onDrag=It(r=this.onDrag).call(r,this),this.body.eventListeners.onDragEnd=It(s=this.onDragEnd).call(s,this),this.body.eventListeners.onMouseWheel=It(a=this.onMouseWheel).call(a,this),this.body.eventListeners.onPinch=It(d=this.onPinch).call(d,this),this.body.eventListeners.onMouseMove=It(h=this.onMouseMove).call(h,this),this.body.eventListeners.onRelease=It(l=this.onRelease).call(l,this),this.body.eventListeners.onContext=It(c=this.onContext).call(c,this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=It(u=this.getPointer).call(u,this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0,autoFocus:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0,zoomSpeed:1},HA(this.options,this.defaultOptions),this.bindEventListeners()}return Lo(g,[{key:"bindEventListeners",value:function(){var g=this;this.body.emitter.on("destroy",(function(){clearTimeout(g.popupTimer),delete g.body.functions.getPointer}))}},{key:"setOptions",value:function(g){if(void 0!==g){ah(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,g),Th(this.options,g,"keyboard"),g.tooltip&&(HA(this.options.tooltip,g.tooltip),g.tooltip.color&&(this.options.tooltip.color=yh(g.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(g){return{x:g.x-(A=this.canvas.frame.canvas,A.getBoundingClientRect().left),y:g.y-ch(this.canvas.frame.canvas)};var A}},{key:"onTouch",value:function(g){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(g.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(g){var A=this.getPointer(g.center),t=this.selectionHandler.options.multiselect&&(g.changedPointers[0].ctrlKey||g.changedPointers[0].metaKey);this.checkSelectionChanges(A,t),this.selectionHandler.commitAndEmit(A,g),this.selectionHandler.generateClickEvent("click",g,A)}},{key:"onDoubleTap",value:function(g){var A=this.getPointer(g.center);this.selectionHandler.generateClickEvent("doubleClick",g,A)}},{key:"onHold",value:function(g){var A=this.getPointer(g.center),t=this.selectionHandler.options.multiselect;this.checkSelectionChanges(A,t),this.selectionHandler.commitAndEmit(A,g),this.selectionHandler.generateClickEvent("click",g,A),this.selectionHandler.generateClickEvent("hold",g,A)}},{key:"onRelease",value:function(g){if((new Date).valueOf()-this.touchTime>10){var A=this.getPointer(g.center);this.selectionHandler.generateClickEvent("release",g,A),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(g){var A=this.getPointer({x:g.clientX,y:g.clientY});this.selectionHandler.generateClickEvent("oncontext",g,A)}},{key:"checkSelectionChanges",value:function(g){var A=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===A?this.selectionHandler.selectAdditionalOnPoint(g):this.selectionHandler.selectOnPoint(g)}},{key:"_determineDifference",value:function(g,A){var t=function(g,A){for(var t=[],e=0;e<g.length;e++){var C=g[e];-1===Ts(A).call(A,C)&&t.push(C)}return t};return{nodes:t(g.nodes,A.nodes),edges:t(g.edges,A.edges)}}},{key:"onDragStart",value:function(g){if(!this.drag.dragging){void 0===this.drag.pointer&&this.onTouch(g);var A=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=HA({},this.body.view.translation),this.drag.nodeId=void 0,g.srcEvent.shiftKey){this.body.selectionBox.show=!0;var t=this.getPointer(g.center);this.body.selectionBox.position.start={x:this.canvas._XconvertDOMtoCanvas(t.x),y:this.canvas._YconvertDOMtoCanvas(t.y)},this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(t.x),y:this.canvas._YconvertDOMtoCanvas(t.y)}}if(void 0!==A&&!0===this.options.dragNodes){this.drag.nodeId=A.id,!1===A.isSelected()&&(this.selectionHandler.unselectAll(),this.selectionHandler.selectObject(A)),this.selectionHandler.generateClickEvent("dragStart",g,this.drag.pointer);var e,C=Ry(this.selectionHandler.getSelectedNodes());try{for(C.s();!(e=C.n()).done;){var I=e.value,i={id:I.id,node:I,x:I.x,y:I.y,xFixed:I.options.fixed.x,yFixed:I.options.fixed.y};I.options.fixed.x=!0,I.options.fixed.y=!0,this.drag.selection.push(i)}}catch(g){C.e(g)}finally{C.f()}}else this.selectionHandler.generateClickEvent("dragStart",g,this.drag.pointer,void 0,!0)}}},{key:"onDrag",value:function(g){var A=this;if(!0!==this.drag.pinched){this.body.emitter.emit("unlockNode");var t=this.getPointer(g.center),e=this.drag.selection;if(e&&e.length&&!0===this.options.dragNodes){this.selectionHandler.generateClickEvent("dragging",g,t);var C=t.x-this.drag.pointer.x,I=t.y-this.drag.pointer.y;ir(e).call(e,(function(g){var t=g.node;!1===g.xFixed&&(t.x=A.canvas._XconvertDOMtoCanvas(A.canvas._XconvertCanvasToDOM(g.x)+C)),!1===g.yFixed&&(t.y=A.canvas._YconvertDOMtoCanvas(A.canvas._YconvertCanvasToDOM(g.y)+I))})),this.body.emitter.emit("startSimulation")}else{if(g.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",g,t,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(g);this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(t.x),y:this.canvas._YconvertDOMtoCanvas(t.y)},this.body.emitter.emit("_requestRedraw")}if(!0===this.options.dragView&&!g.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",g,t,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(g);var i=t.x-this.drag.pointer.x,o=t.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+i,y:this.drag.translation.y+o},this.body.emitter.emit("_requestRedraw")}}}}},{key:"onDragEnd",value:function(g){var A=this;if(this.drag.dragging=!1,this.body.selectionBox.show){var t;this.body.selectionBox.show=!1;var e=this.body.selectionBox.position,C={minX:Math.min(e.start.x,e.end.x),minY:Math.min(e.start.y,e.end.y),maxX:Math.max(e.start.x,e.end.x),maxY:Math.max(e.start.y,e.end.y)},I=qr(t=this.body.nodeIndices).call(t,(function(g){var t=A.body.nodes[g];return t.x>=C.minX&&t.x<=C.maxX&&t.y>=C.minY&&t.y<=C.maxY}));ir(I).call(I,(function(g){return A.selectionHandler.selectObject(A.body.nodes[g])}));var i=this.getPointer(g.center);this.selectionHandler.commitAndEmit(i,g),this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center),void 0,!0),this.body.emitter.emit("_requestRedraw")}else{var o=this.drag.selection;o&&o.length?(ir(o).call(o,(function(g){g.node.options.fixed.x=g.xFixed,g.node.options.fixed.y=g.yFixed})),this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler.generateClickEvent("dragEnd",g,this.getPointer(g.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}}},{key:"onPinch",value:function(g){var A=this.getPointer(g.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var t=this.pinch.scale*g.scale;this.zoom(t,A)}},{key:"zoom",value:function(g,A){if(!0===this.options.zoomView){var t=this.body.view.scale;g<1e-5&&(g=1e-5),g>10&&(g=10);var e=void 0;void 0!==this.drag&&!0===this.drag.dragging&&(e=this.canvas.DOMtoCanvas(this.drag.pointer));var C=this.body.view.translation,I=g/t,i=(1-I)*A.x+C.x*I,o=(1-I)*A.y+C.y*I;if(this.body.view.scale=g,this.body.view.translation={x:i,y:o},null!=e){var n=this.canvas.canvasToDOM(e);this.drag.pointer.x=n.x,this.drag.pointer.y=n.y}this.body.emitter.emit("_requestRedraw"),t<g?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:A}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:A})}}},{key:"onMouseWheel",value:function(g){if(!0===this.options.zoomView){if(0!==g.deltaY){var A=this.body.view.scale;A*=1+(g.deltaY<0?1:-1)*(.1*this.options.zoomSpeed);var t=this.getPointer({x:g.clientX,y:g.clientY});this.zoom(A,t)}g.preventDefault()}}},{key:"onMouseMove",value:function(g){var A=this,t=this.getPointer({x:g.clientX,y:g.clientY}),e=!1;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(t),!1===this.popup.hidden&&(e=!0,this.popup.setPosition(t.x+3,t.y-5),this.popup.show())),this.options.keyboard.autoFocus&&!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),!1===e&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=Hs((function(){return A._checkShowPopup(t)}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(g,t)}},{key:"_checkShowPopup",value:function(g){var A=this.canvas._XconvertDOMtoCanvas(g.x),t=this.canvas._YconvertDOMtoCanvas(g.y),e={left:A,top:t,right:A,bottom:t},C=void 0===this.popupObj?void 0:this.popupObj.id,I=!1,i="node";if(void 0===this.popupObj){for(var o,n=this.body.nodeIndices,r=this.body.nodes,s=[],a=0;a<n.length;a++)!0===(o=r[n[a]]).isOverlappingWith(e)&&(I=!0,void 0!==o.getTitle()&&s.push(n[a]));s.length>0&&(this.popupObj=r[s[s.length-1]],I=!0)}if(void 0===this.popupObj&&!1===I){for(var d,h=this.body.edgeIndices,l=this.body.edges,c=[],u=0;u<h.length;u++)!0===(d=l[h[u]]).isOverlappingWith(e)&&!0===d.connected&&void 0!==d.getTitle()&&c.push(h[u]);c.length>0&&(this.popupObj=l[c[c.length-1]],i="edge")}void 0!==this.popupObj?this.popupObj.id!==C&&(void 0===this.popup&&(this.popup=new Lh(this.canvas.frame)),this.popup.popupTargetType=i,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(g.x+3,g.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(g){var A=this.selectionHandler._pointerToPositionObject(g),t=!1;if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(t=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(A))){var e=this.selectionHandler.getNodeAt(g);t=void 0!==e&&e.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(g)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(t=this.body.edges[this.popup.popupTargetId].isOverlappingWith(A));!1===t&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),g}(),By=lc,zy=Ol.exports.getWeakData,Zy=Hg,Sy=w,Fy=Jl,Gy=Xl,Ly=gg,jy=Jt.set,Vy=Jt.getterFor,Yy=JI.find,Wy=JI.findIndex,Qy=0,Uy=function(g){return g.frozen||(g.frozen=new _y)},_y=function(){this.entries=[]},Hy=function(g,A){return Yy(g.entries,(function(g){return g[0]===A}))};_y.prototype={get:function(g){var A=Hy(this,g);if(A)return A[1]},has:function(g){return!!Hy(this,g)},set:function(g,A){var t=Hy(this,g);t?t[1]=A:this.entries.push([g,A])},delete:function(g){var A=Wy(this.entries,(function(A){return A[0]===g}));return~A&&this.entries.splice(A,1),!!~A}};var Ky,Xy={getConstructor:function(g,A,t,e){var C=g((function(g,I){Fy(g,C,A),jy(g,{type:A,id:Qy++,frozen:void 0}),null!=I&&Gy(I,g[e],{that:g,AS_ENTRIES:t})})),I=Vy(A),i=function(g,A,t){var e=I(g),C=zy(Zy(A),!0);return!0===C?Uy(e).set(A,t):C[e.id]=t,g};return By(C.prototype,{delete:function(g){var A=I(this);if(!Sy(g))return!1;var t=zy(g);return!0===t?Uy(A).delete(g):t&&Ly(t,A.id)&&delete t[A.id]},has:function(g){var A=I(this);if(!Sy(g))return!1;var t=zy(g);return!0===t?Uy(A).has(g):t&&Ly(t,A.id)}}),By(C.prototype,t?{get:function(g){var A=I(this);if(Sy(g)){var t=zy(g);return!0===t?Uy(A).get(g):t?t[A.id]:void 0}},set:function(g,A){return i(this,g,A)}}:{add:function(g){return i(this,g,!0)}}),C}},Jy=e,qy=lc,$y=Ol.exports,gm=dc,Am=Xy,tm=w,em=Jt.enforce,Cm=Dt,Im=!Jy.ActiveXObject&&"ActiveXObject"in Jy,im=Object.isExtensible,om=function(g){return function(){return g(this,arguments.length?arguments[0]:void 0)}},nm=gm("WeakMap",om,Am);if(Cm&&Im){Ky=Am.getConstructor(om,"WeakMap",!0),$y.enable();var rm=nm.prototype,sm=rm.delete,am=rm.has,dm=rm.get,hm=rm.set;qy(rm,{delete:function(g){if(tm(g)&&!im(g)){var A=em(this);return A.frozen||(A.frozen=new Ky),sm.call(this,g)||A.frozen.delete(g)}return sm.call(this,g)},has:function(g){if(tm(g)&&!im(g)){var A=em(this);return A.frozen||(A.frozen=new Ky),am.call(this,g)||A.frozen.has(g)}return am.call(this,g)},get:function(g){if(tm(g)&&!im(g)){var A=em(this);return A.frozen||(A.frozen=new Ky),am.call(this,g)?dm.call(this,g):A.frozen.get(g)}return dm.call(this,g)},set:function(g,A){if(tm(g)&&!im(g)){var t=em(this);t.frozen||(t.frozen=new Ky),am.call(this,g)?hm.call(this,g,A):t.frozen.set(g,A)}else hm.call(this,g,A);return this}})}var lm,cm,um,pm,fm,vm=k.WeakMap;

                                        /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
                                        function ym(g, A, t, e) {
                                            if("a"===t&& !e)throw new TypeError("Private accessor was defined without a getter"); if("function"==typeof A?g !==A|| !e: !A.has(g))throw new TypeError("Cannot read private member from an object whose class did not declare it"); return"m"===t?e:"a"===t?e.call(g):e?e.value:A.get(g)
                                        }

                                        function mm(g, A, t, e, C) {
                                            if("m"===e)throw new TypeError("Private method is not writable"); if("a"===e&& !C)throw new TypeError("Private accessor was defined without a setter"); if("function"==typeof A?g !==A|| !C: !A.has(g))throw new TypeError("Cannot write private member to an object whose class did not declare it"); return"a"===e?C.call(g, t):C?C.value=t:A.set(g, t), t
                                        }

                                        function bm(g, A) {
                                            var t=void 0 !==Sn&&mI(g)||g["@@iterator"]; if( !t) {
                                                if(Yn(g)||(t=function(g, A) {
                                                            var t; if( !g)return; if("string"==typeof g)return wm(g, A); var e=jn(t=Object.prototype.toString.call(g)).call(t, 8, -1); "Object"===e&&g.constructor&&(e=g.constructor.name); if("Map"===e||"Set"===e)return eI(g); if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return wm(g, A)
                                                        }

                                                        (g))||A&&g&&"number"==typeof g.length) {
                                                    t&&(g=t); var e=0, C=function() {}

                                                    ; return {
                                                        s:C, n:function() {
                                                            return e>=g.length? {
                                                                done: !0
                                                            }

                                                            : {
                                                                done: !1, value:g[e++]
                                                            }
                                                        }

                                                        , e:function(g) {
                                                            throw g
                                                        }

                                                        , f:C
                                                    }
                                                }

                                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }

                                            var I, i= !0, o= !1; return {
                                                s:function() {
                                                    t=t.call(g)
                                                }

                                                , n:function() {
                                                    var g=t.next(); return i=g.done, g
                                                }

                                                , e:function(g) {
                                                    o= !0, I=g
                                                }

                                                , f:function() {
                                                    try {
                                                        i||null==t.return||t.return()
                                                    }

                                                    finally {
                                                        if(o)throw I
                                                    }
                                                }
                                            }
                                        }

                                        function wm(g, A) {
                                            (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
                                        }

                                        function km(g, A) {
                                            var t, e=new Bu, C=bm(A); try {
                                                for(C.s();  !(t=C.n()).done; ) {
                                                    var I=t.value; g.has(I)||e.add(I)
                                                }
                                            }

                                            catch(g) {
                                                C.e(g)
                                            }

                                            finally {
                                                C.f()
                                            }

                                            return e
                                        }

                                        var xm=function() {
                                            function g() {
                                                So(this, g), lm.set(this, new Bu), cm.set(this, new Bu)
                                            }

                                            return Lo(g, [ {
                                                    key:"size", get:function() {
                                                        return ym(this, cm, "f").size
                                                    }
                                                }

                                                , {
                                                    key:"add", value:function() {
                                                        for(var g=arguments.length, A=new Array(g), t=0; t<g; t++)A[t]=arguments[t]; for(var e=0, C=A; e<C.length; e++) {
                                                            var I=C[e]; ym(this, cm, "f").add(I)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"delete", value:function() {
                                                        for(var g=arguments.length, A=new Array(g), t=0; t<g; t++)A[t]=arguments[t]; for(var e=0, C=A; e<C.length; e++) {
                                                            var I=C[e]; ym(this, cm, "f").delete(I)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"clear", value:function() {
                                                        ym(this, cm, "f").clear()
                                                    }
                                                }

                                                , {
                                                    key:"getSelection", value:function() {
                                                        return Zn(ym(this, cm, "f"))
                                                    }
                                                }

                                                , {
                                                    key:"getChanges", value:function() {
                                                        return {
                                                            added:Zn(km(ym(this, lm, "f"), ym(this, cm, "f"))), deleted:Zn(km(ym(this, cm, "f"), ym(this, lm, "f"))), previous:Zn(new Bu(ym(this, lm, "f"))), current:Zn(new Bu(ym(this, cm, "f")))
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"commit", value:function() {
                                                        var g=this.getChanges(); mm(this, lm, ym(this, cm, "f"), "f"), mm(this, cm, new Bu(ym(this, lm, "f")), "f"); var A, t=bm(g.added); try {
                                                            for(t.s();  !(A=t.n()).done; ) {
                                                                A.value.select()
                                                            }
                                                        }

                                                        catch(g) {
                                                            t.e(g)
                                                        }

                                                        finally {
                                                            t.f()
                                                        }

                                                        var e, C=bm(g.deleted); try {
                                                            for(C.s();  !(e=C.n()).done; ) {
                                                                e.value.unselect()
                                                            }
                                                        }

                                                        catch(g) {
                                                            C.e(g)
                                                        }

                                                        finally {
                                                            C.f()
                                                        }

                                                        return g
                                                    }
                                                }

                                                ]), g
                                        }

                                        (); lm=new vm, cm=new vm; var Em=function() {
                                            function g() {
                                                var A=arguments.length>0&&void 0 !==arguments[0]?arguments[0]:function() {}

                                                ; So(this, g), um.set(this, new xm), pm.set(this, new xm), fm.set(this, void 0), mm(this, fm, A, "f")
                                            }

                                            return Lo(g, [ {
                                                    key:"sizeNodes", get:function() {
                                                        return ym(this, um, "f").size
                                                    }
                                                }

                                                , {
                                                    key:"sizeEdges", get:function() {
                                                        return ym(this, pm, "f").size
                                                    }
                                                }

                                                , {
                                                    key:"getNodes", value:function() {
                                                        return ym(this, um, "f").getSelection()
                                                    }
                                                }

                                                , {
                                                    key:"getEdges", value:function() {
                                                        return ym(this, pm, "f").getSelection()
                                                    }
                                                }

                                                , {
                                                    key:"addNodes", value:function() {
                                                        var g; (g=ym(this, um, "f")).add.apply(g, arguments)
                                                    }
                                                }

                                                , {
                                                    key:"addEdges", value:function() {
                                                        var g; (g=ym(this, pm, "f")).add.apply(g, arguments)
                                                    }
                                                }

                                                , {
                                                    key:"deleteNodes", value:function(g) {
                                                        ym(this, um, "f").delete(g)
                                                    }
                                                }

                                                , {
                                                    key:"deleteEdges", value:function(g) {
                                                        ym(this, pm, "f").delete(g)
                                                    }
                                                }

                                                , {
                                                    key:"clear", value:function() {
                                                        ym(this, um, "f").clear(), ym(this, pm, "f").clear()
                                                    }
                                                }

                                                , {
                                                    key:"commit", value:function() {
                                                        for(var g, A, t= {
                                                                nodes:ym(this, um, "f").commit(), edges:ym(this, pm, "f").commit()
                                                            }

                                                            , e=arguments.length, C=new Array(e), I=0; I<e; I++)C[I]=arguments[I]; return(g=ym(this, fm, "f")).call.apply(g, Ln(A=[this, t]).call(A, C)), t
                                                    }
                                                }

                                                ]), g
                                        }

                                        (); function Om(g, A) {
                                            var t=void 0 !==Sn&&mI(g)||g["@@iterator"]; if( !t) {
                                                if(Yn(g)||(t=function(g, A) {
                                                            var t; if( !g)return; if("string"==typeof g)return Tm(g, A); var e=jn(t=Object.prototype.toString.call(g)).call(t, 8, -1); "Object"===e&&g.constructor&&(e=g.constructor.name); if("Map"===e||"Set"===e)return eI(g); if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Tm(g, A)
                                                        }

                                                        (g))||A&&g&&"number"==typeof g.length) {
                                                    t&&(g=t); var e=0, C=function() {}

                                                    ; return {
                                                        s:C, n:function() {
                                                            return e>=g.length? {
                                                                done: !0
                                                            }

                                                            : {
                                                                done: !1, value:g[e++]
                                                            }
                                                        }

                                                        , e:function(g) {
                                                            throw g
                                                        }

                                                        , f:C
                                                    }
                                                }

                                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }

                                            var I, i= !0, o= !1; return {
                                                s:function() {
                                                    t=t.call(g)
                                                }

                                                , n:function() {
                                                    var g=t.next(); return i=g.done, g
                                                }

                                                , e:function(g) {
                                                    o= !0, I=g
                                                }

                                                , f:function() {
                                                    try {
                                                        i||null==t.return||t.return()
                                                    }

                                                    finally {
                                                        if(o)throw I
                                                    }
                                                }
                                            }
                                        }

                                        function Tm(g, A) {
                                            (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
                                        }

                                        um=new vm, pm=new vm, fm=new vm; var Dm=function() {
                                            function g(A, t) {
                                                var e=this; So(this, g), this.body=A, this.canvas=t, this._selectionAccumulator=new Em, this.hoverObj= {
                                                    nodes: {}

                                                    , edges: {}
                                                }

                                                , this.options= {}

                                                , this.defaultOptions= {
                                                    multiselect: !1, selectable: !0, selectConnectedEdges: !0, hoverConnectedEdges: !0
                                                }

                                                , HA(this.options, this.defaultOptions), this.body.emitter.on("_dataChanged", (function() {
                                                            e.updateSelection()
                                                        }

                                                    ))
                                            }

                                            return Lo(g, [ {
                                                    key:"setOptions", value:function(g) {
                                                        if(void 0 !==g) {
                                                            sh(["multiselect", "hoverConnectedEdges", "selectable", "selectConnectedEdges"], this.options, g)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"selectOnPoint", value:function(g) {
                                                        var A= !1; if( !0===this.options.selectable) {
                                                            var t=this.getNodeAt(g)||this.getEdgeAt(g); this.unselectAll(), void 0 !==t&&(A=this.selectObject(t)), this.body.emitter.emit("_requestRedraw")
                                                        }

                                                        return A
                                                    }
                                                }

                                                , {
                                                    key:"selectAdditionalOnPoint", value:function(g) {
                                                        var A= !1; if( !0===this.options.selectable) {
                                                            var t=this.getNodeAt(g)||this.getEdgeAt(g); void 0 !==t&&(A= !0,  !0===t.isSelected()?this.deselectObject(t):this.selectObject(t), this.body.emitter.emit("_requestRedraw"))
                                                        }

                                                        return A
                                                    }
                                                }

                                                , {
                                                    key:"_initBaseEvent", value:function(g, A) {
                                                        var t= {}

                                                        ; return t.pointer= {
                                                            DOM: {
                                                                x:A.x, y:A.y
                                                            }

                                                            , canvas:this.canvas.DOMtoCanvas(A)
                                                        }

                                                        , t.event=g, t
                                                    }
                                                }

                                                , {
                                                    key:"generateClickEvent", value:function(g, A, t, e) {
                                                        var C=arguments.length>4&&void 0 !==arguments[4]&&arguments[4], I=this._initBaseEvent(A, t); if( !0===C)I.nodes=[], I.edges=[]; else {
                                                            var i=this.getSelection(); I.nodes=i.nodes, I.edges=i.edges
                                                        }

                                                        void 0 !==e&&(I.previousSelection=e), "click"==g&&(I.items=this.getClickedItems(t)), void 0 !==A.controlEdge&&(I.controlEdge=A.controlEdge), this.body.emitter.emit(g, I)
                                                    }
                                                }

                                                , {
                                                    key:"selectObject", value:function(g) {
                                                        var A=arguments.length>1&&void 0 !==arguments[1]?arguments[1]:this.options.selectConnectedEdges; if(void 0 !==g) {
                                                            if(g instanceof rv) {
                                                                var t; if( !0===A)(t=this._selectionAccumulator).addEdges.apply(t, Zn(g.edges)); this._selectionAccumulator.addNodes(g)
                                                            }

                                                            else this._selectionAccumulator.addEdges(g); return !0
                                                        }

                                                        return !1
                                                    }
                                                }

                                                , {
                                                    key:"deselectObject", value:function(g) {
                                                         !0===g.isSelected()&&(g.selected= !1, this._removeFromSelection(g))
                                                    }
                                                }

                                                , {
                                                    key:"_getAllNodesOverlappingWith", value:function(g) {
                                                        for(var A=[], t=this.body.nodes, e=0; e<this.body.nodeIndices.length; e++) {
                                                            var C=this.body.nodeIndices[e]; t[C].isOverlappingWith(g)&&A.push(C)
                                                        }

                                                        return A
                                                    }
                                                }

                                                , {
                                                    key:"_pointerToPositionObject", value:function(g) {
                                                        var A=this.canvas.DOMtoCanvas(g); return {
                                                            left:A.x-1, top:A.y+1, right:A.x+1, bottom:A.y-1
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"getNodeAt", value:function(g) {
                                                        var A= !(arguments.length>1&&void 0 !==arguments[1])||arguments[1], t=this._pointerToPositionObject(g), e=this._getAllNodesOverlappingWith(t); return e.length>0? !0===A?this.body.nodes[e[e.length-1]]:e[e.length-1]:void 0
                                                    }
                                                }

                                                , {
                                                    key:"_getEdgesOverlappingWith", value:function(g, A) {
                                                        for(var t=this.body.edges, e=0; e<this.body.edgeIndices.length; e++) {
                                                            var C=this.body.edgeIndices[e]; t[C].isOverlappingWith(g)&&A.push(C)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_getAllEdgesOverlappingWith", value:function(g) {
                                                        var A=[]; return this._getEdgesOverlappingWith(g, A), A
                                                    }
                                                }

                                                , {
                                                    key:"getEdgeAt", value:function(g) {
                                                        for(var A= !(arguments.length>1&&void 0 !==arguments[1])||arguments[1], t=this.canvas.DOMtoCanvas(g), e=10, C=null, I=this.body.edges, i=0; i<this.body.edgeIndices.length; i++) {
                                                            var o=this.body.edgeIndices[i], n=I[o]; if(n.connected) {
                                                                var r=n.from.x, s=n.from.y, a=n.to.x, d=n.to.y, h=n.edgeType.getDistanceToEdge(r, s, a, d, t.x, t.y); h<e&&(C=o, e=h)
                                                            }
                                                        }

                                                        return null !==C? !0===A?this.body.edges[C]:C:void 0
                                                    }
                                                }

                                                , {
                                                    key:"_addToHover", value:function(g) {
                                                        g instanceof rv?this.hoverObj.nodes[g.id]=g:this.hoverObj.edges[g.id]=g
                                                    }
                                                }

                                                , {
                                                    key:"_removeFromSelection", value:function(g) {
                                                        var A; g instanceof rv?(this._selectionAccumulator.deleteNodes(g), (A=this._selectionAccumulator).deleteEdges.apply(A, Zn(g.edges))):this._selectionAccumulator.deleteEdges(g)
                                                    }
                                                }

                                                , {
                                                    key:"unselectAll", value:function() {
                                                        this._selectionAccumulator.clear()
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedNodeCount", value:function() {
                                                        return this._selectionAccumulator.sizeNodes
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedEdgeCount", value:function() {
                                                        return this._selectionAccumulator.sizeEdges
                                                    }
                                                }

                                                , {
                                                    key:"_hoverConnectedEdges", value:function(g) {
                                                        for(var A=0; A<g.edges.length; A++) {
                                                            var t=g.edges[A]; t.hover= !0, this._addToHover(t)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"emitBlurEvent", value:function(g, A, t) {
                                                        var e=this._initBaseEvent(g, A);  !0===t.hover&&(t.hover= !1, t instanceof rv?(e.node=t.id, this.body.emitter.emit("blurNode", e)):(e.edge=t.id, this.body.emitter.emit("blurEdge", e)))
                                                    }
                                                }

                                                , {
                                                    key:"emitHoverEvent", value:function(g, A, t) {
                                                        var e=this._initBaseEvent(g, A), C= !1; return !1===t.hover&&(t.hover= !0, this._addToHover(t), C= !0, t instanceof rv?(e.node=t.id, this.body.emitter.emit("hoverNode", e)):(e.edge=t.id, this.body.emitter.emit("hoverEdge", e))), C
                                                    }
                                                }

                                                , {
                                                    key:"hoverObject", value:function(g, A) {
                                                        var t=this.getNodeAt(A); void 0===t&&(t=this.getEdgeAt(A)); var e= !1; for(var C in this.hoverObj.nodes)Object.prototype.hasOwnProperty.call(this.hoverObj.nodes, C)&&(void 0===t||t instanceof rv&&t.id !=C||t instanceof ey)&&(this.emitBlurEvent(g, A, this.hoverObj.nodes[C]), delete this.hoverObj.nodes[C], e= !0); for(var I in this.hoverObj.edges)Object.prototype.hasOwnProperty.call(this.hoverObj.edges, I)&&( !0===e?(this.hoverObj.edges[I].hover= !1, delete this.hoverObj.edges[I]):(void 0===t||t instanceof ey&&t.id !=I||t instanceof rv&& !t.hover)&&(this.emitBlurEvent(g, A, this.hoverObj.edges[I]), delete this.hoverObj.edges[I], e= !0)); if(void 0 !==t) {
                                                            var i=Xn(this.hoverObj.edges).length, o=Xn(this.hoverObj.nodes).length; (e||t instanceof ey&&0===i&&0===o||t instanceof rv&&0===i&&0===o)&&(e=this.emitHoverEvent(g, A, t)), t instanceof rv&& !0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(t)
                                                        }

                                                         !0===e&&this.body.emitter.emit("_requestRedraw")
                                                    }
                                                }

                                                , {
                                                    key:"commitWithoutEmitting", value:function() {
                                                        this._selectionAccumulator.commit()
                                                    }
                                                }

                                                , {
                                                    key:"commitAndEmit", value:function(g, A) {
                                                        var t= !1, e=this._selectionAccumulator.commit(), C= {
                                                            nodes:e.nodes.previous, edges:e.edges.previous
                                                        }

                                                        ; e.edges.deleted.length>0&&(this.generateClickEvent("deselectEdge", A, g, C), t= !0), e.nodes.deleted.length>0&&(this.generateClickEvent("deselectNode", A, g, C), t= !0), e.nodes.added.length>0&&(this.generateClickEvent("selectNode", A, g), t= !0), e.edges.added.length>0&&(this.generateClickEvent("selectEdge", A, g), t= !0),  !0===t&&this.generateClickEvent("select", A, g)
                                                    }
                                                }

                                                , {
                                                    key:"getSelection", value:function() {
                                                        return {
                                                            nodes:this.getSelectedNodeIds(), edges:this.getSelectedEdgeIds()
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedNodes", value:function() {
                                                        return this._selectionAccumulator.getNodes()
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedEdges", value:function() {
                                                        return this._selectionAccumulator.getEdges()
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedNodeIds", value:function() {
                                                        var g; return _n(g=this._selectionAccumulator.getNodes()).call(g, (function(g) {
                                                                    return g.id
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"getSelectedEdgeIds", value:function() {
                                                        var g; return _n(g=this._selectionAccumulator.getEdges()).call(g, (function(g) {
                                                                    return g.id
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"setSelection", value:function(g) {
                                                        var A=arguments.length>1&&void 0 !==arguments[1]?arguments[1]: {}

                                                        ; if( !g|| !g.nodes&& !g.edges)throw new TypeError("Selection must be an object with nodes and/or edges properties"); if((A.unselectAll||void 0===A.unselectAll)&&this.unselectAll(), g.nodes) {
                                                            var t, e=Om(g.nodes); try {
                                                                for(e.s();  !(t=e.n()).done; ) {
                                                                    var C=t.value, I=this.body.nodes[C]; if( !I)throw new RangeError('Node with id "'+C+'" not found'); this.selectObject(I, A.highlightEdges)
                                                                }
                                                            }

                                                            catch(g) {
                                                                e.e(g)
                                                            }

                                                            finally {
                                                                e.f()
                                                            }
                                                        }

                                                        if(g.edges) {
                                                            var i, o=Om(g.edges); try {
                                                                for(o.s();  !(i=o.n()).done; ) {
                                                                    var n=i.value, r=this.body.edges[n]; if( !r)throw new RangeError('Edge with id "'+n+'" not found'); this.selectObject(r)
                                                                }
                                                            }

                                                            catch(g) {
                                                                o.e(g)
                                                            }

                                                            finally {
                                                                o.f()
                                                            }
                                                        }

                                                        this.body.emitter.emit("_requestRedraw"), this._selectionAccumulator.commit()
                                                    }
                                                }

                                                , {
                                                    key:"selectNodes", value:function(g) {
                                                        var A= !(arguments.length>1&&void 0 !==arguments[1])||arguments[1]; if( !g||void 0===g.length)throw"Selection must be an array with ids"; this.setSelection( {
                                                                nodes:g
                                                            }

                                                            , {
                                                                highlightEdges:A
                                                            }

                                                        )
                                                    }
                                                }

                                                , {
                                                    key:"selectEdges", value:function(g) {
                                                        if( !g||void 0===g.length)throw"Selection must be an array with ids"; this.setSelection( {
                                                                edges:g
                                                            }

                                                        )
                                                    }
                                                }

                                                , {
                                                    key:"updateSelection", value:function() {
                                                        for(var g in this._selectionAccumulator.getNodes())Object.prototype.hasOwnProperty.call(this.body.nodes, g.id)||this._selectionAccumulator.deleteNodes(g); for(var A in this._selectionAccumulator.getEdges())Object.prototype.hasOwnProperty.call(this.body.edges, A.id)||this._selectionAccumulator.deleteEdges(A)
                                                    }
                                                }

                                                , {
                                                    key:"getClickedItems", value:function(g) {
                                                        for(var A=this.canvas.DOMtoCanvas(g), t=[], e=this.body.nodeIndices, C=this.body.nodes, I=e.length-1; I>=0; I--) {
                                                            var i=C[e[I]].getItemsOnPoint(A); t.push.apply(t, i)
                                                        }

                                                        for(var o=this.body.edgeIndices, n=this.body.edges, r=o.length-1; r>=0; r--) {
                                                            var s=n[o[r]].getItemsOnPoint(A); t.push.apply(t, s)
                                                        }

                                                        return t
                                                    }
                                                }

                                                ]), g
                                        }

                                        (), Nm= {}

                                        ;  !function(g) {
                                             !function(g) {
                                                function A(g, A) {
                                                    if( !(g instanceof A))throw new TypeError("Cannot call a class as a function")
                                                }

                                                g.__esModule= !0, g.sort=c; var t=32, e=7, C=256, I=[1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9]; function i(g) {
                                                    return g<1e5?g<100?g<10?0:1:g<1e4?g<1e3?2:3:4:g<1e7?g<1e6?5:6:g<1e9?g<1e8?7:8:9
                                                }

                                                function o(g, A) {
                                                    if(g===A)return 0; if(~~g===g&&~~A===A) {
                                                        if(0===g||0===A)return g<A?-1:1; if(g<0||A<0) {
                                                            if(A>=0)return-1; if(g>=0)return 1; g=-g, A=-A
                                                        }

                                                        var t=i(g), e=i(A), C=0; return t<e?(g*=I[e-t-1], A/=10, C=-1):t>e&&(A*=I[t-e-1], g/=10, C=1), g===A?C:g<A?-1:1
                                                    }

                                                    var o=String(g), n=String(A); return o===n?0:o<n?-1:1
                                                }

                                                function n(g) {
                                                    for(var A=0; g>=t; )A|=1&g, g>>=1; return g+A
                                                }

                                                function r(g, A, t, e) {
                                                    var C=A+1; if(C===t)return 1; if(e(g[C++], g[A])<0) {
                                                        for(; C<t&&e(g[C], g[C-1])<0; )C++; s(g, A, C)
                                                    }

                                                    else for(; C<t&&e(g[C], g[C-1])>=0; )C++; return C-A
                                                }

                                                function s(g, A, t) {
                                                    for(t--; A<t; ) {
                                                        var e=g[A]; g[A++]=g[t], g[t--]=e
                                                    }
                                                }

                                                function a(g, A, t, e, C) {
                                                    for(e===A&&e++; e<t; e++) {
                                                        for(var I=g[e], i=A, o=e; i<o; ) {
                                                            var n=i+o>>>1; C(I, g[n])<0?o=n:i=n+1
                                                        }

                                                        var r=e-i; switch(r) {
                                                            case 3:g[i+3]=g[i+2]; case 2:g[i+2]=g[i+1]; case 1:g[i+1]=g[i]; break; default:for(; r>0; )g[i+r]=g[i+r-1], r--
                                                        }

                                                        g[i]=I
                                                    }
                                                }

                                                function d(g, A, t, e, C, I) {
                                                    var i=0, o=0, n=1; if(I(g, A[t+C])>0) {
                                                        for(o=e-C; n<o&&I(g, A[t+C+n])>0; )i=n, (n=1+(n<<1))<=0&&(n=o); n>o&&(n=o), i+=C, n+=C
                                                    }

                                                    else {
                                                        for(o=C+1; n<o&&I(g, A[t+C-n])<=0; )i=n, (n=1+(n<<1))<=0&&(n=o); n>o&&(n=o); var r=i; i=C-n, n=C-r
                                                    }

                                                    for(i++; i<n; ) {
                                                        var s=i+(n-i>>>1); I(g, A[t+s])>0?i=s+1:n=s
                                                    }

                                                    return n
                                                }

                                                function h(g, A, t, e, C, I) {
                                                    var i=0, o=0, n=1; if(I(g, A[t+C])<0) {
                                                        for(o=C+1; n<o&&I(g, A[t+C-n])<0; )i=n, (n=1+(n<<1))<=0&&(n=o); n>o&&(n=o); var r=i; i=C-n, n=C-r
                                                    }

                                                    else {
                                                        for(o=e-C; n<o&&I(g, A[t+C+n])>=0; )i=n, (n=1+(n<<1))<=0&&(n=o); n>o&&(n=o), i+=C, n+=C
                                                    }

                                                    for(i++; i<n; ) {
                                                        var s=i+(n-i>>>1); I(g, A[t+s])<0?n=s:i=s+1
                                                    }

                                                    return n
                                                }

                                                var l=function() {
                                                    function g(t, I) {
                                                        A(this, g), this.array=null, this.compare=null, this.minGallop=e, this.length=0, this.tmpStorageLength=C, this.stackLength=0, this.runStart=null, this.runLength=null, this.stackSize=0, this.array=t, this.compare=I, this.length=t.length, this.length<2*C&&(this.tmpStorageLength=this.length>>>1), this.tmp=new Array(this.tmpStorageLength), this.stackLength=this.length<120?5:this.length<1542?10:this.length<119151?19:40, this.runStart=new Array(this.stackLength), this.runLength=new Array(this.stackLength)
                                                    }

                                                    return g.prototype.pushRun=function(g, A) {
                                                        this.runStart[this.stackSize]=g, this.runLength[this.stackSize]=A, this.stackSize+=1
                                                    }

                                                    , g.prototype.mergeRuns=function() {
                                                        for(; this.stackSize>1; ) {
                                                            var g=this.stackSize-2; if(g>=1&&this.runLength[g-1]<=this.runLength[g]+this.runLength[g+1]||g>=2&&this.runLength[g-2]<=this.runLength[g]+this.runLength[g-1])this.runLength[g-1]<this.runLength[g+1]&&g--; else if(this.runLength[g]>this.runLength[g+1])break; this.mergeAt(g)
                                                        }
                                                    }

                                                    , g.prototype.forceMergeRuns=function() {
                                                        for(; this.stackSize>1; ) {
                                                            var g=this.stackSize-2; g>0&&this.runLength[g-1]<this.runLength[g+1]&&g--, this.mergeAt(g)
                                                        }
                                                    }

                                                    , g.prototype.mergeAt=function(g) {
                                                        var A=this.compare, t=this.array, e=this.runStart[g], C=this.runLength[g], I=this.runStart[g+1], i=this.runLength[g+1]; this.runLength[g]=C+i, g===this.stackSize-3&&(this.runStart[g+1]=this.runStart[g+2], this.runLength[g+1]=this.runLength[g+2]), this.stackSize--; var o=h(t[I], t, e, C, 0, A); e+=o, 0 !=(C-=o)&&0 !==(i=d(t[e+C-1], t, I, i, i-1, A))&&(C<=i?this.mergeLow(e, C, I, i):this.mergeHigh(e, C, I, i))
                                                    }

                                                    , g.prototype.mergeLow=function(g, A, t, C) {
                                                        var I=this.compare, i=this.array, o=this.tmp, n=0; for(n=0; n<A; n++)o[n]=i[g+n]; var r=0, s=t, a=g; if(i[a++]=i[s++], 0 !=--C)if(1 !==A) {
                                                            for(var l=this.minGallop; ; ) {
                                                                var c=0, u=0, p= !1; do {
                                                                    if(I(i[s], o[r])<0) {
                                                                        if(i[a++]=i[s++], u++, c=0, 0==--C) {
                                                                            p= !0; break
                                                                        }
                                                                    }

                                                                    else if(i[a++]=o[r++], c++, u=0, 1==--A) {
                                                                        p= !0; break
                                                                    }
                                                                }

                                                                while((c|u)<l); if(p)break; do {
                                                                    if(0 !==(c=h(i[s], o, r, A, 0, I))) {
                                                                        for(n=0; n<c; n++)i[a+n]=o[r+n]; if(a+=c, r+=c, (A-=c)<=1) {
                                                                            p= !0; break
                                                                        }
                                                                    }

                                                                    if(i[a++]=i[s++], 0==--C) {
                                                                        p= !0; break
                                                                    }

                                                                    if(0 !==(u=d(o[r], i, s, C, 0, I))) {
                                                                        for(n=0; n<u; n++)i[a+n]=i[s+n]; if(a+=u, s+=u, 0==(C-=u)) {
                                                                            p= !0; break
                                                                        }
                                                                    }

                                                                    if(i[a++]=o[r++], 1==--A) {
                                                                        p= !0; break
                                                                    }

                                                                    l--
                                                                }

                                                                while(c>=e||u>=e); if(p)break; l<0&&(l=0), l+=2
                                                            }

                                                            if(this.minGallop=l, l<1&&(this.minGallop=1), 1===A) {
                                                                for(n=0; n<C; n++)i[a+n]=i[s+n]; i[a+C]=o[r]
                                                            }

                                                            else {
                                                                if(0===A)throw new Error("mergeLow preconditions were not respected"); for(n=0; n<A; n++)i[a+n]=o[r+n]
                                                            }
                                                        }

                                                        else {
                                                            for(n=0; n<C; n++)i[a+n]=i[s+n]; i[a+C]=o[r]
                                                        }

                                                        else for(n=0; n<A; n++)i[a+n]=o[r+n]
                                                    }

                                                    , g.prototype.mergeHigh=function(g, A, t, C) {
                                                        var I=this.compare, i=this.array, o=this.tmp, n=0; for(n=0; n<C; n++)o[n]=i[t+n]; var r=g+A-1, s=C-1, a=t+C-1, l=0, c=0; if(i[a--]=i[r--], 0 !=--A)if(1 !==C) {
                                                            for(var u=this.minGallop; ; ) {
                                                                var p=0, f=0, v= !1; do {
                                                                    if(I(o[s], i[r])<0) {
                                                                        if(i[a--]=i[r--], p++, f=0, 0==--A) {
                                                                            v= !0; break
                                                                        }
                                                                    }

                                                                    else if(i[a--]=o[s--], f++, p=0, 1==--C) {
                                                                        v= !0; break
                                                                    }
                                                                }

                                                                while((p|f)<u); if(v)break; do {
                                                                    if(0 !=(p=A-h(o[s], i, g, A, A-1, I))) {
                                                                        for(A-=p, c=1+(a-=p), l=1+(r-=p), n=p-1; n>=0; n--)i[c+n]=i[l+n]; if(0===A) {
                                                                            v= !0; break
                                                                        }
                                                                    }

                                                                    if(i[a--]=o[s--], 1==--C) {
                                                                        v= !0; break
                                                                    }

                                                                    if(0 !=(f=C-d(i[r], o, 0, C, C-1, I))) {
                                                                        for(C-=f, c=1+(a-=f), l=1+(s-=f), n=0; n<f; n++)i[c+n]=o[l+n]; if(C<=1) {
                                                                            v= !0; break
                                                                        }
                                                                    }

                                                                    if(i[a--]=i[r--], 0==--A) {
                                                                        v= !0; break
                                                                    }

                                                                    u--
                                                                }

                                                                while(p>=e||f>=e); if(v)break; u<0&&(u=0), u+=2
                                                            }

                                                            if(this.minGallop=u, u<1&&(this.minGallop=1), 1===C) {
                                                                for(c=1+(a-=A), l=1+(r-=A), n=A-1; n>=0; n--)i[c+n]=i[l+n]; i[a]=o[s]
                                                            }

                                                            else {
                                                                if(0===C)throw new Error("mergeHigh preconditions were not respected"); for(l=a-(C-1), n=0; n<C; n++)i[l+n]=o[n]
                                                            }
                                                        }

                                                        else {
                                                            for(c=1+(a-=A), l=1+(r-=A), n=A-1; n>=0; n--)i[c+n]=i[l+n]; i[a]=o[s]
                                                        }

                                                        else for(l=a-(C-1), n=0; n<C; n++)i[l+n]=o[n]
                                                    }

                                                    , g
                                                }

                                                (); function c(g, A, e, C) {
                                                    if( !Array.isArray(g))throw new TypeError("Can only sort arrays"); A?"function" !=typeof A&&(C=e, e=A, A=o):A=o, e||(e=0), C||(C=g.length); var I=C-e; if( !(I<2)) {
                                                        var i=0; if(I<t)a(g, e, C, e+(i=r(g, e, C, A)), A); else {
                                                            var s=new l(g, A), d=n(I); do {
                                                                if((i=r(g, e, C, A))<d) {
                                                                    var h=I; h>d&&(h=d), a(g, e, e+h, e+i, A), i=h
                                                                }

                                                                s.pushRun(e, i), s.mergeRuns(), I-=i, e+=i
                                                            }

                                                            while(0 !==I); s.forceMergeRuns()
                                                        }
                                                    }
                                                }
                                            }

                                            (g)
                                        }

                                        (Nm); var Rm=Nm; function Pm(g) {
                                            var A=function() {
                                                if("undefined"==typeof Reflect|| !qc)return !1; if(qc.sham)return !1; if("function"==typeof Proxy)return !0; try {
                                                    return Boolean.prototype.valueOf.call(qc(Boolean, [], (function() {}

                                                            ))),  !0
                                                }

                                                catch(g) {
                                                    return !1
                                                }
                                            }

                                            (); return function() {
                                                var t, e=iu(g); if(A) {
                                                    var C=iu(this).constructor; t=qc(e, arguments, C)
                                                }

                                                else t=e.apply(this, arguments); return Cu(this, t)
                                            }
                                        }

                                        var Mm=function() {
                                            function g() {
                                                So(this, g)
                                            }

                                            return Lo(g, [ {
                                                    key:"abstract", value:function() {
                                                        throw new Error("Can't instantiate abstract class!")
                                                    }
                                                }

                                                , {
                                                    key:"fake_use", value:function() {}
                                                }

                                                , {
                                                    key:"curveType", value:function() {
                                                        return this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"getPosition", value:function(g) {
                                                        return this.fake_use(g), this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"setPosition", value:function(g, A) {
                                                        var t=arguments.length>2&&void 0 !==arguments[2]?arguments[2]:void 0; this.fake_use(g, A, t), this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"getTreeSize", value:function(g) {
                                                        return this.fake_use(g), this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"sort", value:function(g) {
                                                        this.fake_use(g), this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"fix", value:function(g, A) {
                                                        this.fake_use(g, A), this.abstract()
                                                    }
                                                }

                                                , {
                                                    key:"shift", value:function(g, A) {
                                                        this.fake_use(g, A), this.abstract()
                                                    }
                                                }

                                                ]), g
                                        }

                                        (), Bm=function(g) {
                                            eu(t, g); var A=Pm(t); function t(g) {
                                                var e; return So(this, t), (e=A.call(this)).layout=g, e
                                            }

                                            return Lo(t, [ {
                                                    key:"curveType", value:function() {
                                                        return"horizontal"
                                                    }
                                                }

                                                , {
                                                    key:"getPosition", value:function(g) {
                                                        return g.x
                                                    }
                                                }

                                                , {
                                                    key:"setPosition", value:function(g, A) {
                                                        var t=arguments.length>2&&void 0 !==arguments[2]?arguments[2]:void 0; void 0 !==t&&this.layout.hierarchical.addToOrdering(g, t), g.x=A
                                                    }
                                                }

                                                , {
                                                    key:"getTreeSize", value:function(g) {
                                                        var A=this.layout.hierarchical.getTreeSize(this.layout.body.nodes, g); return {
                                                            min:A.min_x, max:A.max_x
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"sort", value:function(g) {
                                                        Rm.sort(g, (function(g, A) {
                                                                    return g.x-A.x
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"fix", value:function(g, A) {
                                                        g.y=this.layout.options.hierarchical.levelSeparation*A, g.options.fixed.y= !0
                                                    }
                                                }

                                                , {
                                                    key:"shift", value:function(g, A) {
                                                        this.layout.body.nodes[g].x+=A
                                                    }
                                                }

                                                ]), t
                                        }

                                        (Mm), zm=function(g) {
                                            eu(t, g); var A=Pm(t); function t(g) {
                                                var e; return So(this, t), (e=A.call(this)).layout=g, e
                                            }

                                            return Lo(t, [ {
                                                    key:"curveType", value:function() {
                                                        return"vertical"
                                                    }
                                                }

                                                , {
                                                    key:"getPosition", value:function(g) {
                                                        return g.y
                                                    }
                                                }

                                                , {
                                                    key:"setPosition", value:function(g, A) {
                                                        var t=arguments.length>2&&void 0 !==arguments[2]?arguments[2]:void 0; void 0 !==t&&this.layout.hierarchical.addToOrdering(g, t), g.y=A
                                                    }
                                                }

                                                , {
                                                    key:"getTreeSize", value:function(g) {
                                                        var A=this.layout.hierarchical.getTreeSize(this.layout.body.nodes, g); return {
                                                            min:A.min_y, max:A.max_y
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"sort", value:function(g) {
                                                        Rm.sort(g, (function(g, A) {
                                                                    return g.y-A.y
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"fix", value:function(g, A) {
                                                        g.x=this.layout.options.hierarchical.levelSeparation*A, g.options.fixed.x= !0
                                                    }
                                                }

                                                , {
                                                    key:"shift", value:function(g, A) {
                                                        this.layout.body.nodes[g].y+=A
                                                    }
                                                }

                                                ]), t
                                        }

                                        (Mm), Zm=JI.every; aA( {
                                                target:"Array", proto: !0, forced: !$n("every")
                                            }

                                            , {
                                                every:function(g) {
                                                    return Zm(this, g, arguments.length>1?arguments[1]:void 0)
                                                }
                                            }

                                        ); var Sm=tt("Array").every, Fm=Array.prototype, Gm=function(g) {
                                            var A=g.every; return g===Fm||g instanceof Array&&A===Fm.every?Sm:A
                                        }

                                        ; function Lm(g, A) {
                                            var t=void 0 !==Sn&&mI(g)||g["@@iterator"]; if( !t) {
                                                if(Yn(g)||(t=function(g, A) {
                                                            var t; if( !g)return; if("string"==typeof g)return jm(g, A); var e=jn(t=Object.prototype.toString.call(g)).call(t, 8, -1); "Object"===e&&g.constructor&&(e=g.constructor.name); if("Map"===e||"Set"===e)return eI(g); if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return jm(g, A)
                                                        }

                                                        (g))||A&&g&&"number"==typeof g.length) {
                                                    t&&(g=t); var e=0, C=function() {}

                                                    ; return {
                                                        s:C, n:function() {
                                                            return e>=g.length? {
                                                                done: !0
                                                            }

                                                            : {
                                                                done: !1, value:g[e++]
                                                            }
                                                        }

                                                        , e:function(g) {
                                                            throw g
                                                        }

                                                        , f:C
                                                    }
                                                }

                                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }

                                            var I, i= !0, o= !1; return {
                                                s:function() {
                                                    t=t.call(g)
                                                }

                                                , n:function() {
                                                    var g=t.next(); return i=g.done, g
                                                }

                                                , e:function(g) {
                                                    o= !0, I=g
                                                }

                                                , f:function() {
                                                    try {
                                                        i||null==t.return||t.return()
                                                    }

                                                    finally {
                                                        if(o)throw I
                                                    }
                                                }
                                            }
                                        }

                                        function jm(g, A) {
                                            (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
                                        }

                                        function Vm(g, A) {
                                            var t=new Bu; return ir(g).call(g, (function(g) {
                                                        var A; ir(A=g.edges).call(A, (function(g) {
                                                                    g.connected&&t.add(g)
                                                                }

                                                            ))
                                                    }

                                                )), ir(t).call(t, (function(g) {
                                                        var t=g.from.id, e=g.to.id; null==A[t]&&(A[t]=0), (null==A[e]||A[t]>=A[e])&&(A[e]=A[t]+1)
                                                    }

                                                )), A
                                        }

                                        function Ym(g, A, t, e) {
                                            var C, I, i=Bs(null), o=mu(C=Zn(Ep(e).call(e))).call(C, (function(g, A) {
                                                        return g+1+A.edges.length
                                                    }

                                                ), 0), n=t+"Id", r="to"===t?1:-1, s=Lm(e); try {
                                                var a=function() {
                                                    var C=Pn(I.value, 2), s=C[0], a=C[1]; if( !e.has(s)|| !g(a))return"continue"; i[s]=0; for(var d=[a], h=0, l=void 0, c=function() {
                                                            var g, C; if( !e.has(s))return"continue"; var I=i[l.id]+r; if(ir(g=qr(C=l.edges).call(C, (function(g) {
                                                                                return g.connected&&g.to !==g.from&&g[t] !==l&&e.has(g.toId)&&e.has(g.fromId)
                                                                            }

                                                                        ))).call(g, (function(g) {
                                                                            var e=g[n], C=i[e]; (null==C||A(I, C))&&(i[e]=I, d.push(g[t]))
                                                                        }

                                                                    )), h>o)return {
                                                                v: {
                                                                    v:Vm(e, i)
                                                                }
                                                            }

                                                            ; ++h
                                                        }

                                                        ; l=d.pop(); ) {
                                                        var u=c(); if("continue" !==u&&"object"===zn(u))return u.v
                                                    }
                                                }

                                                ; for(s.s();  !(I=s.n()).done; ) {
                                                    var d=a(); if("continue" !==d&&"object"===zn(d))return d.v
                                                }
                                            }

                                            catch(g) {
                                                s.e(g)
                                            }

                                            finally {
                                                s.f()
                                            }

                                            return i
                                        }

                                        var Wm=function() {
                                            function g() {
                                                So(this, g), this.childrenReference= {}

                                                , this.parentReference= {}

                                                , this.trees= {}

                                                , this.distributionOrdering= {}

                                                , this.levels= {}

                                                , this.distributionIndex= {}

                                                , this.isTree= !1, this.treeIndex=-1
                                            }

                                            return Lo(g, [ {
                                                    key:"addRelation", value:function(g, A) {
                                                        void 0===this.childrenReference[g]&&(this.childrenReference[g]=[]), this.childrenReference[g].push(A), void 0===this.parentReference[A]&&(this.parentReference[A]=[]), this.parentReference[A].push(g)
                                                    }
                                                }

                                                , {
                                                    key:"checkIfTree", value:function() {
                                                        for(var g in this.parentReference)if(this.parentReference[g].length>1)return void(this.isTree= !1); this.isTree= !0
                                                    }
                                                }

                                                , {
                                                    key:"numTrees", value:function() {
                                                        return this.treeIndex+1
                                                    }
                                                }

                                                , {
                                                    key:"setTreeIndex", value:function(g, A) {
                                                        void 0 !==A&&void 0===this.trees[g.id]&&(this.trees[g.id]=A, this.treeIndex=Math.max(A, this.treeIndex))
                                                    }
                                                }

                                                , {
                                                    key:"ensureLevel", value:function(g) {
                                                        void 0===this.levels[g]&&(this.levels[g]=0)
                                                    }
                                                }

                                                , {
                                                    key:"getMaxLevel", value:function(g) {
                                                        var A=this, t= {}

                                                        ; return function g(e) {
                                                            if(void 0 !==t[e])return t[e]; var C=A.levels[e]; if(A.childrenReference[e]) {
                                                                var I=A.childrenReference[e]; if(I.length>0)for(var i=0; i<I.length; i++)C=Math.max(C, g(I[i]))
                                                            }

                                                            return t[e]=C, C
                                                        }

                                                        (g)
                                                    }
                                                }

                                                , {
                                                    key:"levelDownstream", value:function(g, A) {
                                                        void 0===this.levels[A.id]&&(void 0===this.levels[g.id]&&(this.levels[g.id]=0), this.levels[A.id]=this.levels[g.id]+1)
                                                    }
                                                }

                                                , {
                                                    key:"setMinLevelToZero", value:function(g) {
                                                        var A=1e9; for(var t in g)Object.prototype.hasOwnProperty.call(g, t)&&void 0 !==this.levels[t]&&(A=Math.min(this.levels[t], A)); for(var e in g)Object.prototype.hasOwnProperty.call(g, e)&&void 0 !==this.levels[e]&&(this.levels[e]-=A)
                                                    }
                                                }

                                                , {
                                                    key:"getTreeSize", value:function(g, A) {
                                                        var t=1e9, e=-1e9, C=1e9, I=-1e9; for(var i in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees, i)&&this.trees[i]===A) {
                                                            var o=g[i]; t=Math.min(o.x, t), e=Math.max(o.x, e), C=Math.min(o.y, C), I=Math.max(o.y, I)
                                                        }

                                                        return {
                                                            min_x:t, max_x:e, min_y:C, max_y:I
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"hasSameParent", value:function(g, A) {
                                                        var t=this.parentReference[g.id], e=this.parentReference[A.id]; if(void 0===t||void 0===e)return !1; for(var C=0; C<t.length; C++)for(var I=0; I<e.length; I++)if(t[C]==e[I])return !0; return !1
                                                    }
                                                }

                                                , {
                                                    key:"inSameSubNetwork", value:function(g, A) {
                                                        return this.trees[g.id]===this.trees[A.id]
                                                    }
                                                }

                                                , {
                                                    key:"getLevels", value:function() {
                                                        return Xn(this.distributionOrdering)
                                                    }
                                                }

                                                , {
                                                    key:"addToOrdering", value:function(g, A) {
                                                        void 0===this.distributionOrdering[A]&&(this.distributionOrdering[A]=[]); var t= !1, e=this.distributionOrdering[A]; for(var C in e)if(e[C]===g) {
                                                            t= !0; break
                                                        }

                                                        t||(this.distributionOrdering[A].push(g), this.distributionIndex[g.id]=this.distributionOrdering[A].length-1)
                                                    }
                                                }

                                                ]), g
                                        }

                                        (), Qm=function() {
                                            function g(A) {
                                                So(this, g), this.body=A, this._resetRNG(Math.random()+":"+Jn()), this.setPhysics= !1, this.options= {}

                                                , this.optionsBackup= {
                                                    physics: {}
                                                }

                                                , this.defaultOptions= {
                                                    randomSeed:void 0, improvedLayout: !0, clusterThreshold:150, hierarchical: {
                                                        enabled: !1, levelSeparation:150, nodeSpacing:100, treeSpacing:200, blockShifting: !0, edgeMinimization: !0, parentCentralization: !0, direction:"UD", sortMethod:"hubsize"
                                                    }
                                                }

                                                , HA(this.options, this.defaultOptions), this.bindEventListeners()
                                            }

                                            return Lo(g, [ {
                                                    key:"bindEventListeners", value:function() {
                                                        var g=this; this.body.emitter.on("_dataChanged", (function() {
                                                                    g.setupHierarchicalLayout()
                                                                }

                                                            )), this.body.emitter.on("_dataLoaded", (function() {
                                                                    g.layoutNetwork()
                                                                }

                                                            )), this.body.emitter.on("_resetHierarchicalLayout", (function() {
                                                                    g.setupHierarchicalLayout()
                                                                }

                                                            )), this.body.emitter.on("_adjustEdgesForHierarchicalLayout", (function() {
                                                                    if( !0===g.options.hierarchical.enabled) {
                                                                        var A=g.direction.curveType(); g.body.emitter.emit("_forceDisableDynamicCurves", A,  !1)
                                                                    }
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"setOptions", value:function(g, A) {
                                                        if(void 0 !==g) {
                                                            var t=this.options.hierarchical, e=t.enabled; if(sh(["randomSeed", "improvedLayout", "clusterThreshold"], this.options, g), Th(this.options, g, "hierarchical"), void 0 !==g.randomSeed&&this._resetRNG(g.randomSeed),  !0===t.enabled)return !0===e&&this.body.emitter.emit("refresh",  !0), "RL"===t.direction||"DU"===t.direction?t.levelSeparation>0&&(t.levelSeparation*=-1):t.levelSeparation<0&&(t.levelSeparation*=-1), this.setDirectionStrategy(), this.body.emitter.emit("_resetHierarchicalLayout"), this.adaptAllOptionsForHierarchicalLayout(A); if( !0===e)return this.body.emitter.emit("refresh"), dh(A, this.optionsBackup)
                                                        }

                                                        return A
                                                    }
                                                }

                                                , {
                                                    key:"_resetRNG", value:function(g) {
                                                        this.initialRandomSeed=g, this._rng=Xd(this.initialRandomSeed)
                                                    }
                                                }

                                                , {
                                                    key:"adaptAllOptionsForHierarchicalLayout", value:function(g) {
                                                        if( !0===this.options.hierarchical.enabled) {
                                                            var A=this.optionsBackup.physics; void 0===g.physics|| !0===g.physics?(g.physics= {
                                                                    enabled:void 0===A.enabled||A.enabled, solver:"hierarchicalRepulsion"
                                                                }

                                                                , A.enabled=void 0===A.enabled||A.enabled, A.solver=A.solver||"barnesHut"):"object"===zn(g.physics)?(A.enabled=void 0===g.physics.enabled||g.physics.enabled, A.solver=g.physics.solver||"barnesHut", g.physics.solver="hierarchicalRepulsion"): !1 !==g.physics&&(A.solver="barnesHut", g.physics= {
                                                                    solver:"hierarchicalRepulsion"
                                                                }

                                                            ); var t=this.direction.curveType(); if(void 0===g.edges)this.optionsBackup.edges= {
                                                                smooth: {
                                                                    enabled: !0, type:"dynamic"
                                                                }
                                                            }

                                                            , g.edges= {
                                                                smooth: !1
                                                            }

                                                            ; else if(void 0===g.edges.smooth)this.optionsBackup.edges= {
                                                                smooth: {
                                                                    enabled: !0, type:"dynamic"
                                                                }
                                                            }

                                                            , g.edges.smooth= !1; else if("boolean"==typeof g.edges.smooth)this.optionsBackup.edges= {
                                                                smooth:g.edges.smooth
                                                            }

                                                            , g.edges.smooth= {
                                                                enabled:g.edges.smooth, type:t
                                                            }

                                                            ; else {
                                                                var e=g.edges.smooth; void 0 !==e.type&&"dynamic" !==e.type&&(t=e.type), this.optionsBackup.edges= {
                                                                    smooth: {
                                                                        enabled:void 0===e.enabled||e.enabled, type:void 0===e.type?"dynamic":e.type, roundness:void 0===e.roundness?.5:e.roundness, forceDirection:void 0 !==e.forceDirection&&e.forceDirection
                                                                    }
                                                                }

                                                                , g.edges.smooth= {
                                                                    enabled:void 0===e.enabled||e.enabled, type:t, roundness:void 0===e.roundness?.5:e.roundness, forceDirection:void 0 !==e.forceDirection&&e.forceDirection
                                                                }
                                                            }

                                                            this.body.emitter.emit("_forceDisableDynamicCurves", t)
                                                        }

                                                        return g
                                                    }
                                                }

                                                , {
                                                    key:"positionInitially", value:function(g) {
                                                        if( !0 !==this.options.hierarchical.enabled) {
                                                            this._resetRNG(this.initialRandomSeed); for(var A=g.length+50, t=0; t<g.length; t++) {
                                                                var e=g[t], C=2*Math.PI*this._rng(); void 0===e.x&&(e.x=A*Math.cos(C)), void 0===e.y&&(e.y=A*Math.sin(C))
                                                            }
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"layoutNetwork", value:function() {
                                                        if( !0 !==this.options.hierarchical.enabled&& !0===this.options.improvedLayout) {
                                                            for(var g=this.body.nodeIndices, A=0, t=0; t<g.length; t++) {
                                                                 !0===this.body.nodes[g[t]].predefinedPosition&&(A+=1)
                                                            }

                                                            if(A<.5*g.length) {
                                                                var e=0, C=this.options.clusterThreshold, I= {
                                                                    clusterNodeProperties: {
                                                                        shape:"ellipse", label:"", group:"", font: {
                                                                            multi: !1
                                                                        }
                                                                    }

                                                                    , clusterEdgeProperties: {
                                                                        label:"", font: {
                                                                            multi: !1
                                                                        }

                                                                        , smooth: {
                                                                            enabled: !1
                                                                        }
                                                                    }
                                                                }

                                                                ; if(g.length>C) {
                                                                    for(var i=g.length; g.length>C&&e<=10; ) {
                                                                        e+=1; var o=g.length; if(e%3==0?this.body.modules.clustering.clusterBridges(I):this.body.modules.clustering.clusterOutliers(I), o==g.length&&e%3 !=0)return this._declusterAll(), this.body.emitter.emit("_layoutFailed"), void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")
                                                                    }

                                                                    this.body.modules.kamadaKawai.setOptions( {
                                                                            springLength:Math.max(150, 2*i)
                                                                        }

                                                                    )
                                                                }

                                                                e>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."), this.body.modules.kamadaKawai.solve(g, this.body.edgeIndices,  !0), this._shiftToCenter(); for(var n=0; n<g.length; n++) {
                                                                    var r=this.body.nodes[g[n]];  !1===r.predefinedPosition&&(r.x+=70*(.5-this._rng()), r.y+=70*(.5-this._rng()))
                                                                }

                                                                this._declusterAll(), this.body.emitter.emit("_repositionBezierNodes")
                                                            }
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_shiftToCenter", value:function() {
                                                        for(var g=uy.getRangeCore(this.body.nodes, this.body.nodeIndices), A=uy.findCenter(g), t=0; t<this.body.nodeIndices.length; t++) {
                                                            var e=this.body.nodes[this.body.nodeIndices[t]]; e.x-=A.x, e.y-=A.y
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_declusterAll", value:function() {
                                                        for(var g= !0;  !0===g; ) {
                                                            g= !1; for(var A=0; A<this.body.nodeIndices.length; A++) !0===this.body.nodes[this.body.nodeIndices[A]].isCluster&&(g= !0, this.body.modules.clustering.openCluster(this.body.nodeIndices[A], {}

                                                                    ,  !1));  !0===g&&this.body.emitter.emit("_dataChanged")
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"getSeed", value:function() {
                                                        return this.initialRandomSeed
                                                    }
                                                }

                                                , {
                                                    key:"setupHierarchicalLayout", value:function() {
                                                        if( !0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0) {
                                                            var g, A, t= !1, e= !1; for(A in this.lastNodeOnLevel= {}

                                                                , this.hierarchical=new Wm, this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes, A)&&(void 0 !==(g=this.body.nodes[A]).options.level?(t= !0, this.hierarchical.levels[A]=g.options.level):e= !0); if( !0===e&& !0===t)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes."); if( !0===e) {
                                                                var C=this.options.hierarchical.sortMethod; "hubsize"===C?this._determineLevelsByHubsize():"directed"===C?this._determineLevelsDirected():"custom"===C&&this._determineLevelsCustomCallback()
                                                            }

                                                            for(var I in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes, I)&&this.hierarchical.ensureLevel(I); var i=this._getDistribution(); this._generateMap(), this._placeNodesByHierarchy(i), this._condenseHierarchy(), this._shiftToCenter()
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_condenseHierarchy", value:function() {
                                                        var g=this, A= !1, t= {}

                                                        , e=function(A, t) {
                                                            var e=g.hierarchical.trees; for(var C in e)Object.prototype.hasOwnProperty.call(e, C)&&e[C]===A&&g.direction.shift(C, t)
                                                        }

                                                        , C=function() {
                                                            for(var A=[], t=0; t<g.hierarchical.numTrees(); t++)A.push(g.direction.getTreeSize(t)); return A
                                                        }

                                                        , I=function A(t, e) {
                                                            if( !e[t.id]&&(e[t.id]= !0, g.hierarchical.childrenReference[t.id])) {
                                                                var C=g.hierarchical.childrenReference[t.id]; if(C.length>0)for(var I=0; I<C.length; I++)A(g.body.nodes[C[I]], e)
                                                            }
                                                        }

                                                        , i=function(A) {
                                                            var t=arguments.length>1&&void 0 !==arguments[1]?arguments[1]:1e9, e=1e9, C=1e9, I=1e9, i=-1e9; for(var o in A)if(Object.prototype.hasOwnProperty.call(A, o)) {
                                                                var n=g.body.nodes[o], r=g.hierarchical.levels[n.id], s=g.direction.getPosition(n), a=g._getSpaceAroundNode(n, A), d=Pn(a, 2), h=d[0], l=d[1]; e=Math.min(h, e), C=Math.min(l, C), r<=t&&(I=Math.min(s, I), i=Math.max(s, i))
                                                            }

                                                            return[I, i, e, C]
                                                        }

                                                        , o=function(A, t) {
                                                            var e=g.hierarchical.getMaxLevel(A.id), C=g.hierarchical.getMaxLevel(t.id); return Math.min(e, C)
                                                        }

                                                        , n=function(A, t, e) {
                                                            for(var C=g.hierarchical, I=0; I<t.length; I++) {
                                                                var i=t[I], o=C.distributionOrdering[i]; if(o.length>1)for(var n=0; n<o.length-1; n++) {
                                                                    var r=o[n], s=o[n+1]; C.hasSameParent(r, s)&&C.inSameSubNetwork(r, s)&&A(r, s, e)
                                                                }
                                                            }
                                                        }

                                                        , r=function(t, e) {
                                                            var C=arguments.length>2&&void 0 !==arguments[2]&&arguments[2], n=g.direction.getPosition(t), r=g.direction.getPosition(e), s=Math.abs(r-n), a=g.options.hierarchical.nodeSpacing; if(s>a) {
                                                                var d= {}

                                                                , h= {}

                                                                ; I(t, d), I(e, h); var l=o(t, e), c=i(d, l), u=i(h, l), p=c[1], f=u[0], v=u[2], y=Math.abs(p-f); if(y>a) {
                                                                    var m=p-f+a; m<-v+a&&(m=-v+a), m<0&&(g._shiftBlock(e.id, m), A= !0,  !0===C&&g._centerParent(e))
                                                                }
                                                            }
                                                        }

                                                        , s=function(e, C) {
                                                            for(var o=C.id, n=C.edges, r=g.hierarchical.levels[C.id], s=g.options.hierarchical.levelSeparation*g.options.hierarchical.levelSeparation, a= {}

                                                                , d=[], h=0; h<n.length; h++) {
                                                                var l=n[h]; if(l.toId !=l.fromId) {
                                                                    var c=l.toId==o?l.from:l.to; a[n[h].id]=c, g.hierarchical.levels[c.id]<r&&d.push(l)
                                                                }
                                                            }

                                                            var u=function(A, t) {
                                                                for(var e=0, C=0; C<t.length; C++)if(void 0 !==a[t[C].id]) {
                                                                    var I=g.direction.getPosition(a[t[C].id])-A; e+=I/Math.sqrt(I*I+s)
                                                                }

                                                                return e
                                                            }

                                                            , p=function(A, t) {
                                                                for(var e=0, C=0; C<t.length; C++)if(void 0 !==a[t[C].id]) {
                                                                    var I=g.direction.getPosition(a[t[C].id])-A; e-=s*Math.pow(I*I+s, -1.5)
                                                                }

                                                                return e
                                                            }

                                                            , f=function(A, t) {
                                                                for(var e=g.direction.getPosition(C), I= {}

                                                                    , i=0; i<A; i++) {
                                                                    var o=u(e, t), n=p(e, t); if(void 0 !==I[e-=Math.max(-40, Math.min(40, Math.round(o/n)))])break; I[e]=i
                                                                }

                                                                return e
                                                            }

                                                            , v=f(e, d);  !function(e) {
                                                                var o=g.direction.getPosition(C); if(void 0===t[C.id]) {
                                                                    var n= {}

                                                                    ; I(C, n), t[C.id]=n
                                                                }

                                                                var r=i(t[C.id]), s=r[2], a=r[3], d=e-o, h=0; d>0?h=Math.min(d, a-g.options.hierarchical.nodeSpacing):d<0&&(h=-Math.min(-d, s-g.options.hierarchical.nodeSpacing)), 0 !=h&&(g._shiftBlock(C.id, h), A= !0)
                                                            }

                                                            (v), function(t) {
                                                                var e=g.direction.getPosition(C), I=Pn(g._getSpaceAroundNode(C), 2), i=I[0], o=I[1], n=t-e, r=e; n>0?r=Math.min(e+(o-g.options.hierarchical.nodeSpacing), t):n<0&&(r=Math.max(e-(i-g.options.hierarchical.nodeSpacing), t)), r !==e&&(g.direction.setPosition(C, r), A= !0)
                                                            }

                                                            (v=f(e, n))
                                                        }

                                                        ;  !0===this.options.hierarchical.blockShifting&&(function(t) {
                                                                var e=g.hierarchical.getLevels(); e=dr(e).call(e); for(var C=0; C<t&&(A= !1, n(r, e,  !0),  !0===A); C++);
                                                            }

                                                            (5), function() {
                                                                for(var A in g.body.nodes)Object.prototype.hasOwnProperty.call(g.body.nodes, A)&&g._centerParent(g.body.nodes[A])
                                                            }

                                                            ()),  !0===this.options.hierarchical.edgeMinimization&&function(t) {
                                                            var e=g.hierarchical.getLevels(); e=dr(e).call(e); for(var C=0; C<t; C++) {
                                                                A= !1; for(var I=0; I<e.length; I++)for(var i=e[I], o=g.hierarchical.distributionOrdering[i], n=0; n<o.length; n++)s(1e3, o[n]); if( !0 !==A)break
                                                            }
                                                        }

                                                        (20),  !0===this.options.hierarchical.parentCentralization&&function() {
                                                            var A=g.hierarchical.getLevels(); A=dr(A).call(A); for(var t=0; t<A.length; t++)for(var e=A[t], C=g.hierarchical.distributionOrdering[e], I=0; I<C.length; I++)g._centerParent(C[I])
                                                        }

                                                        (), function() {
                                                            for(var A=C(), t=0, I=0; I<A.length-1; I++) {
                                                                t+=A[I].max-A[I+1].min+g.options.hierarchical.treeSpacing, e(I+1, t)
                                                            }
                                                        }

                                                        ()
                                                    }
                                                }

                                                , {
                                                    key:"_getSpaceAroundNode", value:function(g, A) {
                                                        var t= !0; void 0===A&&(t= !1); var e=this.hierarchical.levels[g.id]; if(void 0 !==e) {
                                                            var C=this.hierarchical.distributionIndex[g.id], I=this.direction.getPosition(g), i=this.hierarchical.distributionOrdering[e], o=1e9, n=1e9; if(0 !==C) {
                                                                var r=i[C-1]; if( !0===t&&void 0===A[r.id]|| !1===t)o=I-this.direction.getPosition(r)
                                                            }

                                                            if(C !=i.length-1) {
                                                                var s=i[C+1]; if( !0===t&&void 0===A[s.id]|| !1===t) {
                                                                    var a=this.direction.getPosition(s); n=Math.min(n, a-I)
                                                                }
                                                            }

                                                            return[o, n]
                                                        }

                                                        return[0, 0]
                                                    }
                                                }

                                                , {
                                                    key:"_centerParent", value:function(g) {
                                                        if(this.hierarchical.parentReference[g.id])for(var A=this.hierarchical.parentReference[g.id], t=0; t<A.length; t++) {
                                                            var e=A[t], C=this.body.nodes[e], I=this.hierarchical.childrenReference[e]; if(void 0 !==I) {
                                                                var i=this._getCenterPosition(I), o=this.direction.getPosition(C), n=Pn(this._getSpaceAroundNode(C), 2), r=n[0], s=n[1], a=o-i; (a<0&&Math.abs(a)<s-this.options.hierarchical.nodeSpacing||a>0&&Math.abs(a)<r-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(C, i)
                                                            }
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_placeNodesByHierarchy", value:function(g) {
                                                        for(var A in this.positionedNodes= {}

                                                            , g)if(Object.prototype.hasOwnProperty.call(g, A)) {
                                                            var t, e=Xn(g[A]); e=this._indexArrayToNodes(e), up(t=this.direction).call(t, e); for(var C=0, I=0; I<e.length; I++) {
                                                                var i=e[I]; if(void 0===this.positionedNodes[i.id]) {
                                                                    var o=this.options.hierarchical.nodeSpacing, n=o*C; C>0&&(n=this.direction.getPosition(e[I-1])+o), this.direction.setPosition(i, n, A), this._validatePositionAndContinue(i, A, n), C++
                                                                }
                                                            }
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_placeBranchNodes", value:function(g, A) {
                                                        var t, e=this.hierarchical.childrenReference[g]; if(void 0 !==e) {
                                                            for(var C=[], I=0; I<e.length; I++)C.push(this.body.nodes[e[I]]); up(t=this.direction).call(t, C); for(var i=0; i<C.length; i++) {
                                                                var o=C[i], n=this.hierarchical.levels[o.id]; if( !(n>A&&void 0===this.positionedNodes[o.id]))return; var r=this.options.hierarchical.nodeSpacing, s=void 0; s=0===i?this.direction.getPosition(this.body.nodes[g]):this.direction.getPosition(C[i-1])+r, this.direction.setPosition(o, s, n), this._validatePositionAndContinue(o, n, s)
                                                            }

                                                            var a=this._getCenterPosition(C); this.direction.setPosition(this.body.nodes[g], a, A)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_validatePositionAndContinue", value:function(g, A, t) {
                                                        if(this.hierarchical.isTree) {
                                                            if(void 0 !==this.lastNodeOnLevel[A]) {
                                                                var e=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[A]]); if(t-e<this.options.hierarchical.nodeSpacing) {
                                                                    var C=e+this.options.hierarchical.nodeSpacing-t, I=this._findCommonParent(this.lastNodeOnLevel[A], g.id); this._shiftBlock(I.withChild, C)
                                                                }
                                                            }

                                                            this.lastNodeOnLevel[A]=g.id, this.positionedNodes[g.id]= !0, this._placeBranchNodes(g.id, A)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_indexArrayToNodes", value:function(g) {
                                                        for(var A=[], t=0; t<g.length; t++)A.push(this.body.nodes[g[t]]); return A
                                                    }
                                                }

                                                , {
                                                    key:"_getDistribution", value:function() {
                                                        var g, A, t= {}

                                                        ; for(g in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes, g)) {
                                                            A=this.body.nodes[g]; var e=void 0===this.hierarchical.levels[g]?0:this.hierarchical.levels[g]; this.direction.fix(A, e), void 0===t[e]&&(t[e]= {}

                                                            ), t[e][g]=A
                                                        }

                                                        return t
                                                    }
                                                }

                                                , {
                                                    key:"_getActiveEdges", value:function(g) {
                                                        var A=this, t=[]; return uh(g.edges, (function(g) {
                                                                    var e; -1 !==Ts(e=A.body.edgeIndices).call(e, g.id)&&t.push(g)
                                                                }

                                                            )), t
                                                    }
                                                }

                                                , {
                                                    key:"_getHubSizes", value:function() {
                                                        var g=this, A= {}

                                                        ; uh(this.body.nodeIndices, (function(t) {
                                                                    var e=g.body.nodes[t], C=g._getActiveEdges(e).length; A[C]= !0
                                                                }

                                                            )); var t=[]; return uh(A, (function(g) {
                                                                    t.push(Number(g))
                                                                }

                                                            )), up(Rm).call(Rm, t, (function(g, A) {
                                                                    return A-g
                                                                }

                                                            )), t
                                                    }
                                                }

                                                , {
                                                    key:"_determineLevelsByHubsize", value:function() {
                                                        for(var g=this, A=function(A, t) {
                                                                g.hierarchical.levelDownstream(A, t)
                                                            }

                                                            , t=this._getHubSizes(), e=function(e) {
                                                                var C=t[e]; if(0===C)return"break"; uh(g.body.nodeIndices, (function(t) {
                                                                            var e=g.body.nodes[t]; C===g._getActiveEdges(e).length&&g._crawlNetwork(A, t)
                                                                        }

                                                                    ))
                                                            }

                                                            , C=0; C<t.length; ++C) {
                                                            if("break"===e(C))break
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_determineLevelsCustomCallback", value:function() {
                                                        var g=this; this._crawlNetwork((function(A, t, e) {
                                                                    var C=g.hierarchical.levels[A.id]; void 0===C&&(C=g.hierarchical.levels[A.id]=1e5); var I=(uy.cloneOptions(A, "node"), uy.cloneOptions(t, "node"), void uy.cloneOptions(e, "edge")); g.hierarchical.levels[t.id]=C+I
                                                                }

                                                            )), this.hierarchical.setMinLevelToZero(this.body.nodes)
                                                    }
                                                }

                                                , {
                                                    key:"_determineLevelsDirected", value:function() {
                                                        var g, A=this, t=mu(g=this.body.nodeIndices).call(g, (function(g, t) {
                                                                    return g.set(t, A.body.nodes[t]), g
                                                                }

                                                            ), new Pc); "roots"===this.options.hierarchical.shakeTowards?this.hierarchical.levels=function(g) {
                                                            return Ym((function(A) {
                                                                        var t, e; return Gm(t=qr(e=A.edges).call(e, (function(A) {
                                                                                        return g.has(A.toId)
                                                                                    }

                                                                                ))).call(t, (function(g) {
                                                                                    return g.from===A
                                                                                }

                                                                            ))
                                                                    }

                                                                ), (function(g, A) {
                                                                        return A<g
                                                                    }

                                                                ), "to", g)
                                                        }

                                                        (t):this.hierarchical.levels=function(g) {
                                                            return Ym((function(A) {
                                                                        var t, e; return Gm(t=qr(e=A.edges).call(e, (function(A) {
                                                                                        return g.has(A.toId)
                                                                                    }

                                                                                ))).call(t, (function(g) {
                                                                                    return g.to===A
                                                                                }

                                                                            ))
                                                                    }

                                                                ), (function(g, A) {
                                                                        return A>g
                                                                    }

                                                                ), "from", g)
                                                        }

                                                        (t), this.hierarchical.setMinLevelToZero(this.body.nodes)
                                                    }
                                                }

                                                , {
                                                    key:"_generateMap", value:function() {
                                                        var g=this; this._crawlNetwork((function(A, t) {
                                                                    g.hierarchical.levels[t.id]>g.hierarchical.levels[A.id]&&g.hierarchical.addRelation(A.id, t.id)
                                                                }

                                                            )), this.hierarchical.checkIfTree()
                                                    }
                                                }

                                                , {
                                                    key:"_crawlNetwork", value:function() {
                                                        var g=this, A=arguments.length>0&&void 0 !==arguments[0]?arguments[0]:function() {}

                                                        , t=arguments.length>1?arguments[1]:void 0, e= {}

                                                        , C=function t(C, I) {
                                                            if(void 0===e[C.id]) {
                                                                var i; g.hierarchical.setTreeIndex(C, I), e[C.id]= !0; for(var o=g._getActiveEdges(C), n=0; n<o.length; n++) {
                                                                    var r=o[n];  !0===r.connected&&(i=r.toId==C.id?r.from:r.to, C.id !=i.id&&(A(C, i, r), t(i, I)))
                                                                }
                                                            }
                                                        }

                                                        ; if(void 0===t)for(var I=0, i=0; i<this.body.nodeIndices.length; i++) {
                                                            var o=this.body.nodeIndices[i]; if(void 0===e[o]) {
                                                                var n=this.body.nodes[o]; C(n, I), I+=1
                                                            }
                                                        }

                                                        else {
                                                            var r=this.body.nodes[t]; if(void 0===r)return void console.error("Node not found:", t); C(r)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_shiftBlock", value:function(g, A) {
                                                        var t=this, e= {}

                                                        ;  !function g(C) {
                                                            if( !e[C]) {
                                                                e[C]= !0, t.direction.shift(C, A); var I=t.hierarchical.childrenReference[C]; if(void 0 !==I)for(var i=0; i<I.length; i++)g(I[i])
                                                            }
                                                        }

                                                        (g)
                                                    }
                                                }

                                                , {
                                                    key:"_findCommonParent", value:function(g, A) {
                                                        var t=this, e= {}

                                                        ; return function g(A, e) {
                                                            var C=t.hierarchical.parentReference[e]; if(void 0 !==C)for(var I=0; I<C.length; I++) {
                                                                var i=C[I]; A[i]= !0, g(A, i)
                                                            }
                                                        }

                                                        (e, g), function g(A, e) {
                                                            var C=t.hierarchical.parentReference[e]; if(void 0 !==C)for(var I=0; I<C.length; I++) {
                                                                var i=C[I]; if(void 0 !==A[i])return {
                                                                    foundParent:i, withChild:e
                                                                }

                                                                ; var o=g(A, i); if(null !==o.foundParent)return o
                                                            }

                                                            return {
                                                                foundParent:null, withChild:e
                                                            }
                                                        }

                                                        (e, A)
                                                    }
                                                }

                                                , {
                                                    key:"setDirectionStrategy", value:function() {
                                                        var g="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction; this.direction=g?new Bm(this):new zm(this)
                                                    }
                                                }

                                                , {
                                                    key:"_getCenterPosition", value:function(g) {
                                                        for(var A=1e9, t=-1e9, e=0; e<g.length; e++) {
                                                            var C=void 0; if(void 0 !==g[e].id)C=g[e]; else {
                                                                var I=g[e]; C=this.body.nodes[I]
                                                            }

                                                            var i=this.direction.getPosition(C); A=Math.min(A, i), t=Math.max(t, i)
                                                        }

                                                        return.5*(A+t)
                                                    }
                                                }

                                                ]), g
                                        }

                                        (); function Um(g, A) {
                                            var t=void 0 !==Sn&&mI(g)||g["@@iterator"]; if( !t) {
                                                if(Yn(g)||(t=function(g, A) {
                                                            var t; if( !g)return; if("string"==typeof g)return _m(g, A); var e=jn(t=Object.prototype.toString.call(g)).call(t, 8, -1); "Object"===e&&g.constructor&&(e=g.constructor.name); if("Map"===e||"Set"===e)return eI(g); if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _m(g, A)
                                                        }

                                                        (g))||A&&g&&"number"==typeof g.length) {
                                                    t&&(g=t); var e=0, C=function() {}

                                                    ; return {
                                                        s:C, n:function() {
                                                            return e>=g.length? {
                                                                done: !0
                                                            }

                                                            : {
                                                                done: !1, value:g[e++]
                                                            }
                                                        }

                                                        , e:function(g) {
                                                            throw g
                                                        }

                                                        , f:C
                                                    }
                                                }

                                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }

                                            var I, i= !0, o= !1; return {
                                                s:function() {
                                                    t=t.call(g)
                                                }

                                                , n:function() {
                                                    var g=t.next(); return i=g.done, g
                                                }

                                                , e:function(g) {
                                                    o= !0, I=g
                                                }

                                                , f:function() {
                                                    try {
                                                        i||null==t.return||t.return()
                                                    }

                                                    finally {
                                                        if(o)throw I
                                                    }
                                                }
                                            }
                                        }

                                        function _m(g, A) {
                                            (null==A||A>g.length)&&(A=g.length); for(var t=0, e=new Array(A); t<A; t++)e[t]=g[t]; return e
                                        }

                                        dt('div.vis-network div.vis-manipulation{box-sizing:content-box;border:0 solid #d6d9d8;border-bottom:1px;background:#fff;background:-moz-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(48%,#fcfcfc),color-stop(50%,#fafafa),color-stop(100%,#fcfcfc));background:-webkit-linear-gradient(top,#fff,#fcfcfc 48%,#fafafa 50%,#fcfcfc);background:-o-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-ms-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:linear-gradient(180deg,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#fcfcfc",GradientType=0);padding-top:4px;position:absolute;left:0;top:0;width:100%;height:28px}div.vis-network button.vis-edit-mode,div.vis-network div.vis-edit-mode{position:absolute;left:0;top:5px;height:30px}div.vis-network button.vis-close{position:absolute;right:0;top:0;width:30px;height:30px;background-color:transparent;background-position:20px 3px;background-repeat:no-repeat;background-image:url("data:image/png;base64,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/GMzLdsAADvGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wMi0xNFQxMjowNToxNyswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5ODJjNjBiMC1lM2YzLTA5NDAtODI1NC0xYmU5YjVhNGUxODM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjIxODYxNmM2LTM1MWMtNDI0OS04YWFkLWJkZDQ2ZTczNWE0NDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0xNFQxMTo1NTozNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+cZUZMwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA2ElEQVR42gDLADT/AS0tLUQFBQUVFxcXtPHx8fPl5eUNCAgITCkpKesEHx8fGgYGBjH+/v4a+Pj4qgQEBFU6OjodMTExzwQUFBSvEBAQEfX19SD19fVqNDQ0CElJSd/9/f2vAwEBAfrn5+fkBwcHLRYWFgsXFxfz29vbo9LS0uwDDQ0NDfPz81orKysXIyMj+ODg4Avh4eEa/f391gMkJCRYPz8/KUhISOMCAgKh8fHxHRsbGx4UFBQQBDk5OeY7Ozv7CAgItPb29vMEBASaJSUlTQ0NDesDAEwpT0Ko8Ri2AAAAAElFTkSuQmCC");border:none;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.vis-network button.vis-close:hover{opacity:.6}div.vis-network div.vis-edit-mode button.vis-button,div.vis-network div.vis-manipulation button.vis-button{float:left;font-family:verdana;font-size:12px;border:none;box-sizing:content-box;-moz-border-radius:15px;border-radius:15px;background-color:transparent;background-position:0 0;background-repeat:no-repeat;height:24px;margin-left:10px;cursor:pointer;padding:0 8px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.vis-network div.vis-manipulation button.vis-button:hover{box-shadow:1px 1px 8px rgba(0,0,0,.2)}div.vis-network div.vis-manipulation button.vis-button:active{box-shadow:1px 1px 8px rgba(0,0,0,.5)}div.vis-network div.vis-manipulation button.vis-button.vis-back{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpmOWQ3OGY4ZC1lNzY0LTc1NDgtODZiNy1iNmQ1OGMzZDg2OTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmY5ZDc4ZjhkLWU3NjQtNzU0OC04NmI3LWI2ZDU4YzNkODY5Nzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4jq1U/AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVTSURBVHjanFVfTFNnFP+d77ve8qeVFbBrpcVgRrCRFikFByLxwSAaE32oRCHD6JMxxhhn8G2RxxH3MsOTbyYsmCAxPMmMMYtkIUYmK60OO0qAK23BFlNob0uh3x7WS5jLZPpLbm6+k/P9zrm5v9855PF4UFhYCABgjIExBgAgIqRSqRIi6gDQRkQ1RGTB3wgR0e8AHgH4Sa/XR/EBiAiJRAJ04cIF5Ofng4g2n0gkUkxENwF0c843LzHGQEQQQkCLExEA9ALotVgsUQAQQmgNQhJCbF5kjCEUCl0moj4t5na7fTU1NUpVVVXUYrEkASAcDhe8efOmxOfzWScmJqoBdBNR99LS0hWz2dynNSSEAF28eBGFhYVgjCEcDn9HRD1EhIMHD3o9Hs9kWVlZAh9BKBQqGB4edr58+dKZ+6JbJpOpBwBWV1fB6+rqIMsyIpHIFcZYL2MMra2tY5cuXRrfuXNnBtvAYDBk3G63oqpqZm5uzgrgSDKZjBoMhueZTAbc5XIhFouVEtFTxhiOHTs2dv78eS8+Efv374+oqpqZnZ21cs5PJJPJPlmWkyynnBuMMTQ0NHi7uro+mVyDx+Pxulwu71ZOlkqlSonoJhGhvb39s8k1nDx50ss5hyRJN9PpdKlERB2aWjSVaEilUvzBgwcORVEs5eXloXPnzk1sV8BkMiUdDofP7/dXZ7PZDilnIhw4cGBeS1pbW2P37t1zBwKBikQiUUREWFhYsHHO0d7evm0Ru90+/+rVq2rO+XGJiJxEhMrKyhgAjI6OWoeHh5tWVla+4JzDZrO9bW5unhwcHGzz+/32np4e+xaDbfoHAMxmc6ijo2O0oqIiJkkSNjY2HBIRmRljMJvNyWfPnln7+/tPMMZQXl6+0NbW9qK2tjYcj8floaEhqKpq+HCkbD3PzMwYBgYG0NXV9UuusFna2kEgELAQEQ4dOvSis7PzN41Ar9dnrl27NqCNkv/C3bt3zy4tLVmICJxzEBFJRBQmorLFxcWCqqqq0Pj4eO3Y2JhbUZTdra2tL2pra8OJRGLHnTt3zkqS9K+huHU4EhHMZnMoGo0W5OIh7nK5jjLGKq1W69vDhw8rRqMxMjc3t2t5eXnX5ORklc/nM+fl5SWnpqa+0uv1K/n5+Ws6nW5NluXNd15e3ppOp1uz2WyzZ86cGQ0Gg6ZAIFCZzWZ/lYjokRDiuN/vt7W0tMw3NTUpbrd78P79++5gMFgRiUTKHj58WMYYQ3V19etTp05tq6Lp6Wkb5xxCiEfc7XZPM8a6FxcXTfX19a/1en2Gcy5qamreNjY2/qGq6joRZe12+9Tp06e3JY/FYgWPHz8+mhvr3/CWlpbk+vp6PmOseWVlBS6XS9GSJUkSdrs93NDQ8Oe+ffvC/8fJIyMjddFo9Esi6pVleVjT2m0A8Hq9zqGhIefnjoknT544A4GAM/eDbxMReFNTE0pKSpKqqsaI6Pj8/LxVVdWM3W6PfCr5xMTE1zllXS0uLn6aSqXAGxsbodPpoNfrn6uqCs75EUVRrJFIZMfevXsXdTrdxseIE4mEPDIyUu/3++tynd8yGo29RIR0Og26fv06ioqKwBgD5xzv3r27zBjrIyJIkgSHwzFZWVmp7NmzJ1ZaWpoAgGg0WqgoSvHMzIw1GAw6tvjhitFo7NPW5fv370Hd3d0oKCgA53zTQMvLy+VCiKuSJH0rSdLmztZytIWv5RPRD0T0Y3Fx8dzWfby6ugopHo//w4mcc8iyPMc5v5FOp7/PZrOdQohWInIC2C2EgBBigYi8Qoifs9lsv06nWyIiaFxagXg8jr8GAGxuIe7LBeWhAAAAAElFTkSuQmCC")}div.vis-network div.vis-manipulation div.vis-none:hover{box-shadow:1px 1px 8px transparent;cursor:default}div.vis-network div.vis-manipulation div.vis-none:active{box-shadow:1px 1px 8px transparent}div.vis-network div.vis-manipulation div.vis-none{padding:0;line-height:23px}div.vis-network div.vis-manipulation div.notification{margin:2px;font-weight:700}div.vis-network div.vis-manipulation button.vis-button.vis-add{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0YjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2OWVmYWE1NS01ZTI5LTIzNGUtYTUzMy0xNDkxYjM1NDNmYmE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0Yjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjY5ZWZhYTU1LTVlMjktMjM0ZS1hNTMzLTE0OTFiMzU0M2ZiYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5WKqp9AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYXSURBVHjafFZtUFTXGX7e9z27sveuMCwYV8ElrA7YSFYHtJUPkaaI0aRqG8wP00zUzljDINNSA/2ROtpO24SxnahlxjYd7SSjmUkymcxYlDhQPzHGisEVp8HwYWCVVVgEsrsuLnL74+5uqTF9Z+7cO/d8PO95zvO851BlZSV0XQcAMDOYGQBARDhX3JRmMDYZwLPMWAzGHACYIgwS46oBNBNwtOL8CwE8EkSEUCgE2rJlC2w2G4go8Zwo/bMDgnoG6gxLfAAAYvPDMCCszKTAMIAGAhrWnf15AAAMwwARIRKJgDZv3gy73Q4iAjPjxIr9VVOMRhbAYKB8zvrO0llrfEsdKwLZek6YAPSFvtSu3GtLawu0ZJ6625SHGBQB1T88t6MxvopgMAjaunUrdF0HM+P4yv27DMYeJmB1RqW3Jnf3tQX2p0L4P9EXuqEd7PmDp+XuMU9sRbvXnnt1TxxACgoKYLVacbzsQDUJGkSATe6qi28uPtzusM6Kxie6NHLGUX3lxVUNX9StPHnn4wy3njuUYcu6n2pNi66avcEXnByP/nv8aiaIyrqz2gO5A9+9FI1GIfn5+WhZdTAdjFMkwMvZOy7uWnTAOz3L4Yk71m3t69fdfTDoUGTBeHTUfiHQ6lo7Z2OXJvpDAChKe+aOCdKRKWxZ2+1qb3yyd3GYmRkQ7GQBVs99wfv6on3eR2k4PdTkDEbH7IuS8/svld/561PJS/pDk1/bzwx94pze7xc5v/H+YPY6r5BAkdrJzODTK46lE6PeYEJt7u+8j+OZwCBiEAgAoNgKJoEQf6PvNvdrXgtZoNhSf7q0KZ3B2AQmVMze0Jmt54S/DcDCVig2NcvEUGxJAE4Pl+YOr0iv6BRSIPAmBeBZAmHlE2sH4p1uhrq1s0MnnEQMBsf8wRASAICQQCCITN1X7/sOuc0kgOVp3/fPs2WHv+coG7gQOJUnLGsUCTxEjPzUohEA+NfIWUdtx0+efzA1kSSkIGyBAQNCKgHAEBAJ3u79U7kiAcWoem/gb5Fd33nrH3kp+SMWtuAB+GllMJxMjCx9QRgA3uiqL5kwHiTlpxb3smlfMDGYGPP1hcMAkJvs8ScpfdJspdj+MK6Pf+5+u29vyb4lR4+BGEziVESAkEpw6Av1OhUpHCz4qOXbzFWz4Ncdj/v/o08Lt92ODDgZDCEFJYoUGH4mzugP92puPTf0pD3H7wvfdFZdqSxnMtWjoGAAmG9fOLxjwesdjT2/XzIQ7ks3sycYMSEwGHNtWf5bkX5NkYCJBxUBXiGV0XHvosOt54Zey33j/K+8P33++vjnbiGJbbLE+J9SANAb6nJ2B79wcUwETAwQQ7fMjPzMvfP8ja87HUIKMOiaAqMZhrGmLdAy78eZrwwsTS0eObTs+IdtgVanxBUExqGbb5VzrIISGIoUXsmqbgEhJldCQWqRf27SvPAn/o8XmgLhZsUkR4ll37mhk3n94Z4OlzY/7NLcYZfm7o1z2zT4vsvUNSXqprBCkmiTFbPX90/fh8GIT2sf+zTPdDMf4dVnNg4z+E0ixsGeBs9jd5ViSgLHjCb/peaR+MD3d4/ZJg2llyuG2Vwy7QWAs8PNnn1f7vkGSGxAzE6mk+kxkx/p/4unffSCR0hAoL1EBCYiPNdWNcwkNQTCR7feWX6g+7f/A7I8rcw/U6UEe0Ndrhc/W7mtL9ztmqlSgstSS/zTJ28dalpOpkRryrwbhwBACgsLMWPGDOT4ll3qyeqAkJTdCF7P/CrUY/GkLL1rE+2hTbSH8+0Lb/WEuhzhyaA905blf9Vd/895WnZwLHrPevir/cvOB1oLYpTtLrm6oYGIMDExAaqtrUVKSgqYGSKCk0WHq5ikkWEWtNL0imv5qUW+RclLRjJsrhBAuH1/QL8R7HR4xy5nescuP23E6hOA6mLv+sb4uTw6Ogqqq6uDpmkQkcStorX4XRcM1FjZ+kvFFjCJKU1WpkNJJUqIMtX1RyLeX3JtQ0JRhmGYZ/L27duRnJycuFGISOJ9pqh5lrB6iYgqGOxRrOaa54DcZmKvkJxk8JHC9rKh+KVhOsD4+Dj+MwADIf8n5m4xGwAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit,div.vis-network div.vis-manipulation button.vis-button.vis-edit{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozOWNhNzE5ZC03YzNlLTUyNGEtYmY1NS03NGVmMmM1MzE0YTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjM5Y2E3MTlkLTdjM2UtNTI0YS1iZjU1LTc0ZWYyYzUzMTRhNzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ykninAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYpSURBVHjafFZtTFvnFX7Oea+NudiY2Hwam4CBlgQwXdKREDKUoYg0jbRJ29RJ2VZ1mjRFUxSpA3VTfkzJfkQbS7spU6rtx5Z2UtppScjaHxvLuiatWi2jLEoMIUDCh23g2gbj7+tPuPvhOurawPl1dc99n+c55z33fV46ceIEZFkGADAziAgAQERoe/9ZK4GPM/AcgbsIXAcABCgMvkfAqAa89eDoJyF8LogIqqqChoaGYDAYHr8kItS8uc8iIH6iAa9IkAo5EAQX8pqmgUVBCBggYFgDhv0/GAsBgKZpICJkMhnQ4OAgZFkGEYGZUXmp+0cS+CKBwWA0DVRPOg5Zl2q6zaHyJlnVAMQXVTkwHrUqH0Xsvn+tdQAAMQDgpPLS2MViFY8rkGUZzIzaS/t/xqCzGggtz9e697zsnKhoLUtim4jOq/LE6x7X0nsh16dEZ5a/O3a2SCAOHjwInU6Hujd6ThJ4mCDQ+b2G232v7v6vwarPbQn8MGlMr+X0kpE3Wr5Zt5hL5HPhqYSdQIfKJ+yhxDPKWC6Xg+jt7UXD5b5KBt1kCHS85Ljd8/On3NupfnhFaZj4rWff1B98B1R/hnUmKd36bdtCNl4g0en4edNE/cXwLq8qMTMIPAQwmo/WuHvObA8+9c58k/dKtD0TyZWXN5YGA7ej7epKxspM//7SoNOdWc/Jyq2wiwhDzPxT8cP0jys3VMM7OmL0/77zn4Ydui3b8uiK0jD7RrA77c9Wd57cefPpF+2T6bWsFPWkaiPTCWvTsZpHFU+XrS+8G3AR08F6X+1FJvBxQQzHQOWk2SmrW4FPX/U2LVwPuDZj+fJKl2khPpeyAqA9rzR/YqwuiWXX8taN/CabGkrVuq9YJlkQQDjOAJ5jAhz9Vt9W4N5/rNp8I+vtMV/aZm4zLnUNNt0urdYnF68HWoJj4Wo1mLGUNRr8LEgDgNqeCh8xQIKOsgC7iAjVe83rT9zQa8uNM28u70kspessu8q8zq/V3NcZpVzb9+0zmVhOvvvrhaMVzrJg0zeq7xMVCCwdpnWSGBqjUyJwLTFgbvxie3w31uoWR1Y74r60rdxZqrR8q85t2W2MGCp12bm/KC3hyaSTiMhxuGrKcahqpbjOaDOoEhOEoFqJQCCJvqA85I6bfTdDjQlf2lbxVNlS6wt19yy7jRHZZlDnrinNj/6sHMhnNw2Ogco7O79e5fm/xQywRBBCEAuwn4gQ96bkYj4Vyuq9N1Z3Bj4Od5bs0MXt/dZZ21ctiqFan174q985P+Lfp+U1g7XDON/1ctP458WlVjLyJhOISZE0wM0S1QfuRC3lTjkJAKKEtNC9eIOhSh9xHLZOJRZTFuXDsEoStLkR/768ummsaJG9Pb9oe+9J+xaeSVokiQDSJphAo5uaBuWjiKP4QTqS1cUWU7ayesN66wu22frD1vmVW6GW6T8u9eVjGyZzs+w78Nqu0a2mbvVu1KEJQAgeZRL0liQYyx+GOmKeQpu0rMYsAJPNEFGD2dLodLIy6c9Ys7G8yeSUl3tf2/X3rcBVJSOv34l3sCBogi7z1LH/rBHjl4IJ93/ncQFAnjeImJD0Z8zuCwu9q3djDXqTlAKID5xv+9t2R8n8VcUFBljQ8Gyfe40BYBM4DwDLt8Kue79ZcFkbzfEdbUbv+oN4c9KTtsfm1MbYQqqh+2zrVZYKs/7Ef+byimt1POYiJhDhPBFBIiIEXhxfs7/dfYoIF+auBfYTE/pebx/V8hqBP2ODvD34yvuh/WCAmU75Bx6sIgaI/v5+6PV6JLqUsYr7dpDAoehs0h73pHTWrvKgThYbRSt9UmSjef3MpaUvBz4O72UmADgTOPJguGiZor+/HyUlJWBmJFz+D8xTtlUiOpbwpmrmrweeSXrT+g11k4SBN3RGKUcAVCVdFhyP1nreDbY//NPyEXUlU/Pp4XYycGT6V0Ux2WwWdO7cOZSWlkII8diX7SPPNgDaKdbxoNAxwATBAEkEEgSWCEQAqPAMwqvMdCEwMO0tVqZpWsGTT58+DaPR+PhGIYQAAAgh0P7B3ioW/B0iGiCGiwXbCuOHFSJys6AbYFye2T+xWhT3WYJEIoH/DQBMw3kes8OJPgAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit.vis-edit-mode{background-color:#fcfcfc;border:1px solid #ccc}div.vis-network div.vis-manipulation button.vis-button.vis-connect{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3ZWRhMjI0MC0yYTQxLTNlNDQtYWM2My1iNzNiYTE5OWI3Y2E8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdlZGEyMjQwLTJhNDEtM2U0NC1hYzYzLWI3M2JhMTk5YjdjYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ubxs+AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUtSURBVHjajJZ/bNT1Gcdfz/P53PV6B4W7VltLqdAaplIOiMOoyxxJCSs/Gv/yB4gzJroAosmmDklwkYWR0bQsdmkykoojTpcsWYLxD/lRZdMQkTHRtkLZRqG0tIVe7662vTu43n32x/VKZ/jh89cn38/zvN7P5/l88zwf2blzJz6fDwARQUSm1n8s31CM0/VAnbNmsUPuAsDpgEO+Bg4C7//iyv5hvmMiQiqVQpqamvB6vVNwEeG1JZtCBrYi/MrkAwDNgjhwAlbzICBLA0rDb0+/839C6XQaaWxspLCw8Dp86cbNmqVFJQddE6KzdjZ9D89g+B6fSyCOcyn1nxil+O9xKg5HqWFSHGXLjrP7W/ICqVQK2bNnDz6fDxFh65KNvxbHDhF4rJj2bXPo+IGfcW5h5xL4f99P+FCEMIAob75x9t0dAMlkElNXV4e1lteXbNqiQoMaeOFOjrdU868SD2luYyEP6dUh+sYmSHeOU6GO5Z8VLx5+NNZxIpPJ5AS2L3upROCoCvz8Lo7vnkf77cAHhpiz/zIL9vWz8L8p/NvupmM0Q7pjnAoLqz8tDrc8MnQqYVUVhVdF4LEg7b+rvDn8wDDlH0WoPpukLJImSBaMwjcJqmwWts2jPZLG/8kwYVFeVdXXZcFf4yVDc2cNKfBFmD9X+0ncCP58F48eG+Feo2CAUkvs4dl0V/uJvdXLiiV+ut++n7YLSfxPfMMG54ChzB3WIesVWB2i82bw1AR6fJR7C4VsfYiv6u/k3A9nEgP4zXke8DiYHyAOMK+QxPIgnZ9GqSHr1itQJ8DK2fTerDQ+S/bHRXQJaHSCwNIZ2Xh+7+S3VAmwNMBA/tuPZtErgKquUmdMWIFlRURvdamRNEXGwIWrlP47pTMzLiunxghGMwTLvcTWlHAp77s4QNSrYMQtss6ZMgWqCm5cHoDHO1nbk6K8zEN8+3zatv2Hn1b59EqJZdxmYUERg9P9KwpIiAOTdWUWBXuLzB/vZG3P1Un4PNp2d1MbmyD45TWCxuCsQm0x56bHGHFYEZwxok7toAA9Sfw3hCcoL/NOwi9QO5wmWO1j4JEgZxTkodmcWRGkf3pcX0r8xoAaBixKu4U5/xwndM+0tpAvS6mP+PZK2nb1UBvPEKwKMLDvPj4ESGc55lGy303sdJKQdZB2rkMdctAB/4gzN+/Q2ENNd4LyUi/xN+bTtquX2thk5nk4wI3gAF+OMNcA1nFQDfK+BY5GqbkwWabTY5QZhXWlnNx1ntrY1Rz87fuvw29m/Sn8J+PUGAFj5T19baA1IspuBZp7cx1x4SwG1cEf+lgRSROs8jGwb+Ht4QB/GSSsAhYano39LWIBxNEIbP14hPDuiyS2VtJuHXQlKKvxM/jiXDq/D/xPlwifGMkJZB2NIoKpr69nxeiZxLHicFSFVWfGqBidIP3LSjrWltD94CyufF/4kQgPuVz2Lz93+dDRa9eu5QQ8Hg8/iXee+Dy4CKMs7xqn4nwKz9IirhQqmVuB42m8ey+x7LMoD6iAON782eChhqmRuXfvXgKBAKqKqtI0/8nNKrQI4BVYXkzHgzPpC88gWuHL/caXrhLoGiN0apSKr0ZZRBZM7q2w5ZnLR1oAnHOMjY0hra2tFBQUYIyZmstvVT1Z6eDlAuEVq7merxmwueNPDXy9PvybjKP5mctHLk4/XTKZRJqbm/H7/VNw1VyEMYbW4FN3WNWnnchKoy5sHeVGBRX6VWi3ymFx7r11Ix8MTX/y5C2RSPC/AQB61erowbpqSwAAAABJRU5ErkJggg==")}div.vis-network div.vis-manipulation button.vis-button.vis-delete{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowNmE3NWYwMy04MDdhLWUzNGYtYjk1Zi1jZGU2MjM0Mzg4OGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjA2YTc1ZjAzLTgwN2EtZTM0Zi1iOTVmLWNkZTYyMzQzODg4Zjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4aYJzYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYGSURBVHjalJZ7UJTnFcZ/73m/72PdJY1RbhoQp6lkXRAvmIYxdCUadLVOozPNtGObap1JsKipjiShbdoRbeKEiQHpQK3xj0xa03aamTbaTGyAYV1QGeqFi+JyiZFLAlmESBkWRmS3fyzslGkmnZ5/v/M873Oe75zzvqqoqAibzQaAiKCUAkApRdHIK/NFsx2NR91nOSILADDoJyzNaM4xxbtvPHh0iC+JiYkJ1OHDh4mJiUEpFSXPv/ziPC28TIiXDCOSrAClQDSEpsCwJPIhrEBRQpiSytXlQwDhcBilFPfu3UMVFxdjt9ujFTzfcLBADCoEEAFr1ZbrrNjch2vtEImPBgHob7fTcWE+bVXJNJ/NiFQlEGLvieXHKmYqGB8fRx05cgSbzYaIsPvywV8pKFaA7fGtLTzz61YWpo/xVTHQbufsq5lcez9zWuWhk5mvFwMEg0H0+vXrMU2Tn1wp3CtCiQ5DjGd3A/m/v8IDCZP8r4iNmyRrWx/j/5qktykZpXKzAjVDVxPzGqemptDr1q1jX3NRnIJarcDKK2hgR2ULXRfncv7UYv7xpovhnhiW5Mz+kefeSKO6LJ1A1xzEuk/Ojm4mRibpuZaMZW3OCtRUND60NmiICCIUShisx7a2sLMiQn4s77uEQgIabnqdfHIlgT1/qQeg8vs5dHhdCNB1wYn3RIiC995j26stjAbsNH+YiZJCESnS1Y/XxIXu8r4YIPv/VkVs3CTnTy2ms34xro1+sp9po6sxlTu34ultmsPVvy6is86FCHgO+DDs49zpjufBpCG+seYOC9OHaTidieicb9ouVAhKtouAseI710ma7pLuqwmgYfHqAFt+6WdLoQ/LBl11Lm7VudAa8vb72PCin9TlAWIsGGhLACD+kSAZnusYBii1XQAPYWDllt6ov2lrBkDBR2+6Ofuak2//3M+G/T4wAAPW7fPhKfRTVeqk9qQbFKRmDUTxS3N7QYGYmwzCkqklBGlPDEcTNv+sg9tNCbTXuvBWujE0bHrZj9JE1B/wU1Pm5PwJN6YBS9a2kVvQEcWnrh5GTFD3lxkYkqRMgYQlwVldUvDnen73LHTUuqitdKM0eAr9AFQfd1J/yo2aJn+2sn4Wdn5qEFODJskgBIjx5T0uCrQA08pnIjS9PERDjPnfOKXAMEBECUoGEIHBj+2zkt76UQ6dXheGAev3+cg74Kf6uJPqcicbfuond7cPy4SOiy7+tD9nFvZurx00KOk3CNEC+mE+vjSPBc7IWqgqTaPT60IMcO/xsXGa3HfKjRgRdbl7/KDg0jtubje6aHj7c7J3dgLQ2zoPwwQ91SooOQdAW1VKVMHty0kA5Bb48BycJn/LjWFGbLv4thvvb53kFvjJ+XEdWkPfjQVR/CcNKYgGMc8JWt5Fa2j+MIPPuyI2pa4IoHSkt6vLIuRaQ9q32khzt4GCxtNu6k46GeiIR2lIfDQQsafPzq1LGRGL9Gk9d+vrwewvfHPQOoexQVjxdB/auk/zmaUMdsfz6bVUtIalT7bxveP1ZHh6GPDPYeSzeD69kcpIfxymFWLNrka+ljhBTWkWwz2JiJT84YHnz2iPx0P20PkmRF5i6HYiwZFJsn/YzdezbzE3cQibY5xV266z6RfXohakb+xB9CjanCD9qTbW7Grk4WV38VZm0l6dhQiEw9taHSuDqrS0FIfDwXM3X9mHMsvRAk/sauDpQy38P+GtzOTGB9mEpkD0C2dS8n8zOjqK9ng8WJZFU+JTjasGvaCNXPpvJBPoMlm0OoDNMfWVxONfWNSUPUZ7TUQ56tCZlPwSgMnJSVRpaSmxsbFE1raw82ZxAZZRQUiBYUKGp5UlOX2krBzmoUVjiIKhHge9rfPo+Wcy3ZeXIYASgL1/X5RfMXMvj46OosrLy7HZbGitUUohIuzoem0RofALaOsghgWGjky0MiJTL8b0lOvI8hN1DKXKP0jd3TNTWDgcJhgMoo4ePYrD4Yi+KmaeLlprnrtXFo9h/AAlG1AqE8yFmBrC+jO0bgH9EVpO/1F2Dc5g//OAsbEx/j0Af+USsQynL1UAAAAASUVORK5CYII=")}div.vis-network div.vis-edit-mode div.vis-label,div.vis-network div.vis-manipulation div.vis-label{margin:0 0 0 23px;line-height:25px}div.vis-network div.vis-manipulation div.vis-separator-line{float:left;display:inline-block;width:1px;height:21px;background-color:#bdbdbd;margin:0 7px 0 15px}'); var Hm=function() {
                                            function g(A, t, e, C) {
                                                var I, i, o=this; So(this, g), this.body=A, this.canvas=t, this.selectionHandler=e, this.interactionHandler=C, this.editMode= !1, this.manipulationDiv=void 0, this.editModeDiv=void 0, this.closeDiv=void 0, this._domEventListenerCleanupQueue=[], this.temporaryUIFunctions= {}

                                                , this.temporaryEventFunctions=[], this.touchTime=0, this.temporaryIds= {
                                                    nodes:[], edges:[]
                                                }

                                                , this.guiEnabled= !1, this.inMode= !1, this.selectedControlNode=void 0, this.options= {}

                                                , this.defaultOptions= {
                                                    enabled: !1, initiallyActive: !1, addNode: !0, addEdge: !0, editNode:void 0, editEdge: !0, deleteNode: !0, deleteEdge: !0, controlNodeStyle: {
                                                        shape:"dot", size:6, color: {
                                                            background:"#ff0000", border:"#3c3c3c", highlight: {
                                                                background:"#07f968", border:"#3c3c3c"
                                                            }
                                                        }

                                                        , borderWidth:2, borderWidthSelected:2
                                                    }
                                                }

                                                , HA(this.options, this.defaultOptions), this.body.emitter.on("destroy", (function() {
                                                            o._clean()
                                                        }

                                                    )), this.body.emitter.on("_dataChanged", It(I=this._restore).call(I, this)), this.body.emitter.on("_resetData", It(i=this._restore).call(i, this))
                                            }

                                            return Lo(g, [ {
                                                    key:"_restore", value:function() {
                                                         !1 !==this.inMode&&( !0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())
                                                    }
                                                }

                                                , {
                                                    key:"setOptions", value:function(g, A, t) {
                                                        void 0 !==A&&(void 0 !==A.locale?this.options.locale=A.locale:this.options.locale=t.locale, void 0 !==A.locales?this.options.locales=A.locales:this.options.locales=t.locales), void 0 !==g&&("boolean"==typeof g?this.options.enabled=g:(this.options.enabled= !0, dh(this.options, g)),  !0===this.options.initiallyActive&&(this.editMode= !0), this._setup())
                                                    }
                                                }

                                                , {
                                                    key:"toggleEditMode", value:function() {
                                                         !0===this.editMode?this.disableEditMode():this.enableEditMode()
                                                    }
                                                }

                                                , {
                                                    key:"enableEditMode", value:function() {
                                                        this.editMode= !0, this._clean(),  !0===this.guiEnabled&&(this.manipulationDiv.style.display="block", this.closeDiv.style.display="block", this.editModeDiv.style.display="none", this.showManipulatorToolbar())
                                                    }
                                                }

                                                , {
                                                    key:"disableEditMode", value:function() {
                                                        this.editMode= !1, this._clean(),  !0===this.guiEnabled&&(this.manipulationDiv.style.display="none", this.closeDiv.style.display="none", this.editModeDiv.style.display="block", this._createEditButton())
                                                    }
                                                }

                                                , {
                                                    key:"showManipulatorToolbar", value:function() {
                                                        if(this._clean(), this.manipulationDOM= {}

                                                            ,  !0===this.guiEnabled) {
                                                            var g, A; this.editMode= !0, this.manipulationDiv.style.display="block", this.closeDiv.style.display="block"; var t=this.selectionHandler.getSelectedNodeCount(), e=this.selectionHandler.getSelectedEdgeCount(), C=t+e, I=this.options.locales[this.options.locale], i= !1;  !1 !==this.options.addNode&&(this._createAddNodeButton(I), i= !0),  !1 !==this.options.addEdge&&( !0===i?this._createSeperator(1):i= !0, this._createAddEdgeButton(I)), 1===t&&"function"==typeof this.options.editNode?( !0===i?this._createSeperator(2):i= !0, this._createEditNodeButton(I)):1===e&&0===t&& !1 !==this.options.editEdge&&( !0===i?this._createSeperator(3):i= !0, this._createEditEdgeButton(I)), 0 !==C&&(t>0&& !1 !==this.options.deleteNode||0===t&& !1 !==this.options.deleteEdge)&&( !0===i&&this._createSeperator(4), this._createDeleteButton(I)), this._bindElementEvents(this.closeDiv, It(g=this.toggleEditMode).call(g, this)), this._temporaryBindEvent("select", It(A=this.showManipulatorToolbar).call(A, this))
                                                        }

                                                        this.body.emitter.emit("_redraw")
                                                    }
                                                }

                                                , {
                                                    key:"addNodeMode", value:function() {
                                                        var g; if( !0 !==this.editMode&&this.enableEditMode(), this._clean(), this.inMode="addNode",  !0===this.guiEnabled) {
                                                            var A, t=this.options.locales[this.options.locale]; this.manipulationDOM= {}

                                                            , this._createBackButton(t), this._createSeperator(), this._createDescription(t.addDescription||this.options.locales.en.addDescription), this._bindElementEvents(this.closeDiv, It(A=this.toggleEditMode).call(A, this))
                                                        }

                                                        this._temporaryBindEvent("click", It(g=this._performAddNode).call(g, this))
                                                    }
                                                }

                                                , {
                                                    key:"editNode", value:function() {
                                                        var g=this;  !0 !==this.editMode&&this.enableEditMode(), this._clean(); var A=this.selectionHandler.getSelectedNodes()[0]; if(void 0 !==A) {
                                                            if(this.inMode="editNode", "function" !=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes."); if( !0 !==A.isCluster) {
                                                                var t=dh( {}

                                                                    , A.options,  !1); if(t.x=A.x, t.y=A.y, 2 !==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)"); this.options.editNode(t, (function(A) {
                                                                            null !=A&&"editNode"===g.inMode&&g.body.data.nodes.getDataSet().update(A), g.showManipulatorToolbar()
                                                                        }

                                                                    ))
                                                            }

                                                            else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)
                                                        }

                                                        else this.showManipulatorToolbar()
                                                    }
                                                }

                                                , {
                                                    key:"addEdgeMode", value:function() {
                                                        var g, A, t, e, C; if( !0 !==this.editMode&&this.enableEditMode(), this._clean(), this.inMode="addEdge",  !0===this.guiEnabled) {
                                                            var I, i=this.options.locales[this.options.locale]; this.manipulationDOM= {}

                                                            , this._createBackButton(i), this._createSeperator(), this._createDescription(i.edgeDescription||this.options.locales.en.edgeDescription), this._bindElementEvents(this.closeDiv, It(I=this.toggleEditMode).call(I, this))
                                                        }

                                                        this._temporaryBindUI("onTouch", It(g=this._handleConnect).call(g, this)), this._temporaryBindUI("onDragEnd", It(A=this._finishConnect).call(A, this)), this._temporaryBindUI("onDrag", It(t=this._dragControlNode).call(t, this)), this._temporaryBindUI("onRelease", It(e=this._finishConnect).call(e, this)), this._temporaryBindUI("onDragStart", It(C=this._dragStartEdge).call(C, this)), this._temporaryBindUI("onHold", (function() {}

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"editEdgeMode", value:function() {
                                                        if( !0 !==this.editMode&&this.enableEditMode(), this._clean(), this.inMode="editEdge", "object" !==zn(this.options.editEdge)||"function" !=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0], void 0===this.edgeBeingEditedId)) {
                                                            if( !0===this.guiEnabled) {
                                                                var g, A=this.options.locales[this.options.locale]; this.manipulationDOM= {}

                                                                , this._createBackButton(A), this._createSeperator(), this._createDescription(A.editEdgeDescription||this.options.locales.en.editEdgeDescription), this._bindElementEvents(this.closeDiv, It(g=this.toggleEditMode).call(g, this))
                                                            }

                                                            if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0], void 0 !==this.edgeBeingEditedId) {
                                                                var t, e, C, I, i=this.body.edges[this.edgeBeingEditedId], o=this._getNewTargetNode(i.from.x, i.from.y), n=this._getNewTargetNode(i.to.x, i.to.y); this.temporaryIds.nodes.push(o.id), this.temporaryIds.nodes.push(n.id), this.body.nodes[o.id]=o, this.body.nodeIndices.push(o.id), this.body.nodes[n.id]=n, this.body.nodeIndices.push(n.id), this._temporaryBindUI("onTouch", It(t=this._controlNodeTouch).call(t, this)), this._temporaryBindUI("onTap", (function() {}

                                                                    )), this._temporaryBindUI("onHold", (function() {}

                                                                    )), this._temporaryBindUI("onDragStart", It(e=this._controlNodeDragStart).call(e, this)), this._temporaryBindUI("onDrag", It(C=this._controlNodeDrag).call(C, this)), this._temporaryBindUI("onDragEnd", It(I=this._controlNodeDragEnd).call(I, this)), this._temporaryBindUI("onMouseMove", (function() {}

                                                                    )), this._temporaryBindEvent("beforeDrawing", (function(g) {
                                                                            var A=i.edgeType.findBorderPositions(g);  !1===o.selected&&(o.x=A.from.x, o.y=A.from.y),  !1===n.selected&&(n.x=A.to.x, n.y=A.to.y)
                                                                        }

                                                                    )), this.body.emitter.emit("_redraw")
                                                            }

                                                            else this.showManipulatorToolbar()
                                                        }

                                                        else {
                                                            var r=this.body.edges[this.edgeBeingEditedId]; this._performEditEdge(r.from.id, r.to.id)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"deleteSelected", value:function() {
                                                        var g=this;  !0 !==this.editMode&&this.enableEditMode(), this._clean(), this.inMode="delete"; var A=this.selectionHandler.getSelectedNodeIds(), t=this.selectionHandler.getSelectedEdgeIds(), e=void 0; if(A.length>0) {
                                                            for(var C=0; C<A.length; C++)if( !0===this.body.nodes[A[C]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError); "function"==typeof this.options.deleteNode&&(e=this.options.deleteNode)
                                                        }

                                                        else t.length>0&&"function"==typeof this.options.deleteEdge&&(e=this.options.deleteEdge); if("function"==typeof e) {
                                                            var I= {
                                                                nodes:A, edges:t
                                                            }

                                                            ; if(2 !==e.length)throw new Error("The function for delete does not support two arguments (data, callback)"); e(I, (function(A) {
                                                                        null !=A&&"delete"===g.inMode?(g.body.data.edges.getDataSet().remove(A.edges), g.body.data.nodes.getDataSet().remove(A.nodes), g.body.emitter.emit("startSimulation"), g.showManipulatorToolbar()):(g.body.emitter.emit("startSimulation"), g.showManipulatorToolbar())
                                                                    }

                                                                ))
                                                        }

                                                        else this.body.data.edges.getDataSet().remove(t), this.body.data.nodes.getDataSet().remove(A), this.body.emitter.emit("startSimulation"), this.showManipulatorToolbar()
                                                    }
                                                }

                                                , {
                                                    key:"_setup", value:function() {
                                                         !0===this.options.enabled?(this.guiEnabled= !0, this._createWrappers(),  !1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(), this.guiEnabled= !1)
                                                    }
                                                }

                                                , {
                                                    key:"_createWrappers", value:function() {
                                                        var g, A; (void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"), this.manipulationDiv.className="vis-manipulation",  !0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none", this.canvas.frame.appendChild(this.manipulationDiv)), void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"), this.editModeDiv.className="vis-edit-mode",  !0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block", this.canvas.frame.appendChild(this.editModeDiv)), void 0===this.closeDiv)&&(this.closeDiv=document.createElement("button"), this.closeDiv.className="vis-close", this.closeDiv.setAttribute("aria-label", null !==(g=null===(A=this.options.locales[this.options.locale])||void 0===A?void 0:A.close)&&void 0 !==g?g:this.options.locales.en.close), this.closeDiv.style.display=this.manipulationDiv.style.display, this.canvas.frame.appendChild(this.closeDiv))
                                                    }
                                                }

                                                , {
                                                    key:"_getNewTargetNode", value:function(g, A) {
                                                        var t=dh( {}

                                                            , this.options.controlNodeStyle); t.id="targetNode"+Fp(), t.hidden= !1, t.physics= !1, t.x=g, t.y=A; var e=this.body.functions.createNode(t); return e.shape.boundingBox= {
                                                            left:g, right:g, top:A, bottom:A
                                                        }

                                                        , e
                                                    }
                                                }

                                                , {
                                                    key:"_createEditButton", value:function() {
                                                        var g; this._clean(), this.manipulationDOM= {}

                                                        , Ih(this.editModeDiv); var A=this.options.locales[this.options.locale], t=this._createButton("editMode", "vis-edit vis-edit-mode", A.edit||this.options.locales.en.edit); this.editModeDiv.appendChild(t), this._bindElementEvents(t, It(g=this.toggleEditMode).call(g, this))
                                                    }
                                                }

                                                , {
                                                    key:"_clean", value:function() {
                                                        this.inMode= !1,  !0===this.guiEnabled&&(Ih(this.editModeDiv), Ih(this.manipulationDiv), this._cleanupDOMEventListeners()), this._cleanupTemporaryNodesAndEdges(), this._unbindTemporaryUIs(), this._unbindTemporaryEvents(), this.body.emitter.emit("restorePhysics")
                                                    }
                                                }

                                                , {
                                                    key:"_cleanupDOMEventListeners", value:function() {
                                                        var g, A, t=Um(Or(g=this._domEventListenerCleanupQueue).call(g, 0)); try {
                                                            for(t.s();  !(A=t.n()).done; ) {
                                                                (0, A.value)()
                                                            }
                                                        }

                                                        catch(g) {
                                                            t.e(g)
                                                        }

                                                        finally {
                                                            t.f()
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_removeManipulationDOM", value:function() {
                                                        this._clean(), Ih(this.manipulationDiv), Ih(this.editModeDiv), Ih(this.closeDiv), this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv), this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv), this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv), this.manipulationDiv=void 0, this.editModeDiv=void 0, this.closeDiv=void 0
                                                    }
                                                }

                                                , {
                                                    key:"_createSeperator", value:function() {
                                                        var g=arguments.length>0&&void 0 !==arguments[0]?arguments[0]:1; this.manipulationDOM["seperatorLineDiv"+g]=document.createElement("div"), this.manipulationDOM["seperatorLineDiv"+g].className="vis-separator-line", this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+g])
                                                    }
                                                }

                                                , {
                                                    key:"_createAddNodeButton", value:function(g) {
                                                        var A, t=this._createButton("addNode", "vis-add", g.addNode||this.options.locales.en.addNode); this.manipulationDiv.appendChild(t), this._bindElementEvents(t, It(A=this.addNodeMode).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createAddEdgeButton", value:function(g) {
                                                        var A, t=this._createButton("addEdge", "vis-connect", g.addEdge||this.options.locales.en.addEdge); this.manipulationDiv.appendChild(t), this._bindElementEvents(t, It(A=this.addEdgeMode).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createEditNodeButton", value:function(g) {
                                                        var A, t=this._createButton("editNode", "vis-edit", g.editNode||this.options.locales.en.editNode); this.manipulationDiv.appendChild(t), this._bindElementEvents(t, It(A=this.editNode).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createEditEdgeButton", value:function(g) {
                                                        var A, t=this._createButton("editEdge", "vis-edit", g.editEdge||this.options.locales.en.editEdge); this.manipulationDiv.appendChild(t), this._bindElementEvents(t, It(A=this.editEdgeMode).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createDeleteButton", value:function(g) {
                                                        var A, t; t=this.options.rtl?"vis-delete-rtl":"vis-delete"; var e=this._createButton("delete", t, g.del||this.options.locales.en.del); this.manipulationDiv.appendChild(e), this._bindElementEvents(e, It(A=this.deleteSelected).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createBackButton", value:function(g) {
                                                        var A, t=this._createButton("back", "vis-back", g.back||this.options.locales.en.back); this.manipulationDiv.appendChild(t), this._bindElementEvents(t, It(A=this.showManipulatorToolbar).call(A, this))
                                                    }
                                                }

                                                , {
                                                    key:"_createButton", value:function(g, A, t) {
                                                        var e=arguments.length>3&&void 0 !==arguments[3]?arguments[3]:"vis-label"; return this.manipulationDOM[g+"Div"]=document.createElement("button"), this.manipulationDOM[g+"Div"].className="vis-button "+A, this.manipulationDOM[g+"Label"]=document.createElement("div"), this.manipulationDOM[g+"Label"].className=e, this.manipulationDOM[g+"Label"].innerText=t, this.manipulationDOM[g+"Div"].appendChild(this.manipulationDOM[g+"Label"]), this.manipulationDOM[g+"Div"]
                                                    }
                                                }

                                                , {
                                                    key:"_createDescription", value:function(g) {
                                                        this.manipulationDOM.descriptionLabel=document.createElement("div"), this.manipulationDOM.descriptionLabel.className="vis-none", this.manipulationDOM.descriptionLabel.innerText=g, this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel)
                                                    }
                                                }

                                                , {
                                                    key:"_temporaryBindEvent", value:function(g, A) {
                                                        this.temporaryEventFunctions.push( {
                                                                event:g, boundFunction:A
                                                            }

                                                        ), this.body.emitter.on(g, A)
                                                    }
                                                }

                                                , {
                                                    key:"_temporaryBindUI", value:function(g, A) {
                                                        if(void 0===this.body.eventListeners[g])throw new Error("This UI function does not exist. Typo? You tried: "+g+" possible are: "+Ws(Xn(this.body.eventListeners))); this.temporaryUIFunctions[g]=this.body.eventListeners[g], this.body.eventListeners[g]=A
                                                    }
                                                }

                                                , {
                                                    key:"_unbindTemporaryUIs", value:function() {
                                                        for(var g in this.temporaryUIFunctions)Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions, g)&&(this.body.eventListeners[g]=this.temporaryUIFunctions[g], delete this.temporaryUIFunctions[g]); this.temporaryUIFunctions= {}
                                                    }
                                                }

                                                , {
                                                    key:"_unbindTemporaryEvents", value:function() {
                                                        for(var g=0; g<this.temporaryEventFunctions.length; g++) {
                                                            var A=this.temporaryEventFunctions[g].event, t=this.temporaryEventFunctions[g].boundFunction; this.body.emitter.off(A, t)
                                                        }

                                                        this.temporaryEventFunctions=[]
                                                    }
                                                }

                                                , {
                                                    key:"_bindElementEvents", value:function(g, A) {
                                                        var t=new Gh(g, {}

                                                        ); ky(t, A), this._domEventListenerCleanupQueue.push((function() {
                                                                    t.destroy()
                                                                }

                                                            )); var e=function(g) {
                                                            var t=g.keyCode, e=g.key; "Enter" !==e&&" " !==e&&13 !==t&&32 !==t||A()
                                                        }

                                                        ; g.addEventListener("keyup", e,  !1), this._domEventListenerCleanupQueue.push((function() {
                                                                    g.removeEventListener("keyup", e,  !1)
                                                                }

                                                            ))
                                                    }
                                                }

                                                , {
                                                    key:"_cleanupTemporaryNodesAndEdges", value:function() {
                                                        for(var g=0; g<this.temporaryIds.edges.length; g++) {
                                                            var A; this.body.edges[this.temporaryIds.edges[g]].disconnect(), delete this.body.edges[this.temporaryIds.edges[g]]; var t, e=Ts(A=this.body.edgeIndices).call(A, this.temporaryIds.edges[g]); if(-1 !==e)Or(t=this.body.edgeIndices).call(t, e, 1)
                                                        }

                                                        for(var C=0; C<this.temporaryIds.nodes.length; C++) {
                                                            var I; delete this.body.nodes[this.temporaryIds.nodes[C]]; var i, o=Ts(I=this.body.nodeIndices).call(I, this.temporaryIds.nodes[C]); if(-1 !==o)Or(i=this.body.nodeIndices).call(i, o, 1)
                                                        }

                                                        this.temporaryIds= {
                                                            nodes:[], edges:[]
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_controlNodeTouch", value:function(g) {
                                                        this.selectionHandler.unselectAll(), this.lastTouch=this.body.functions.getPointer(g.center), this.lastTouch.translation=HA( {}

                                                            , this.body.view.translation)
                                                    }
                                                }

                                                , {
                                                    key:"_controlNodeDragStart", value:function() {
                                                        var g=this.lastTouch, A=this.selectionHandler._pointerToPositionObject(g), t=this.body.nodes[this.temporaryIds.nodes[0]], e=this.body.nodes[this.temporaryIds.nodes[1]], C=this.body.edges[this.edgeBeingEditedId]; this.selectedControlNode=void 0; var I=t.isOverlappingWith(A), i=e.isOverlappingWith(A);  !0===I?(this.selectedControlNode=t, C.edgeType.from=t): !0===i&&(this.selectedControlNode=e, C.edgeType.to=e), void 0 !==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode), this.body.emitter.emit("_redraw")
                                                    }
                                                }

                                                , {
                                                    key:"_controlNodeDrag", value:function(g) {
                                                        this.body.emitter.emit("disablePhysics"); var A=this.body.functions.getPointer(g.center), t=this.canvas.DOMtoCanvas(A); void 0 !==this.selectedControlNode?(this.selectedControlNode.x=t.x, this.selectedControlNode.y=t.y):this.interactionHandler.onDrag(g), this.body.emitter.emit("_redraw")
                                                    }
                                                }

                                                , {
                                                    key:"_controlNodeDragEnd", value:function(g) {
                                                        var A=this.body.functions.getPointer(g.center), t=this.selectionHandler._pointerToPositionObject(A), e=this.body.edges[this.edgeBeingEditedId]; if(void 0 !==this.selectedControlNode) {
                                                            this.selectionHandler.unselectAll(); for(var C=this.selectionHandler._getAllNodesOverlappingWith(t), I=void 0, i=C.length-1; i>=0; i--)if(C[i] !==this.selectedControlNode.id) {
                                                                I=this.body.nodes[C[i]]; break
                                                            }

                                                            if(void 0 !==I&&void 0 !==this.selectedControlNode)if( !0===I.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError); else {
                                                                var o=this.body.nodes[this.temporaryIds.nodes[0]]; this.selectedControlNode.id===o.id?this._performEditEdge(I.id, e.to.id):this._performEditEdge(e.from.id, I.id)
                                                            }

                                                            else e.updateEdgeType(), this.body.emitter.emit("restorePhysics"); this.body.emitter.emit("_redraw")
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_handleConnect", value:function(g) {
                                                        if((new Date).valueOf()-this.touchTime>100) {
                                                            this.lastTouch=this.body.functions.getPointer(g.center), this.lastTouch.translation=HA( {}

                                                                , this.body.view.translation), this.interactionHandler.drag.pointer=this.lastTouch, this.interactionHandler.drag.translation=this.lastTouch.translation; var A=this.lastTouch, t=this.selectionHandler.getNodeAt(A); if(void 0 !==t)if( !0===t.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError); else {
                                                                var e=this._getNewTargetNode(t.x, t.y); this.body.nodes[e.id]=e, this.body.nodeIndices.push(e.id); var C=this.body.functions.createEdge( {
                                                                        id:"connectionEdge"+Fp(), from:t.id, to:e.id, physics: !1, smooth: {
                                                                            enabled: !0, type:"continuous", roundness:.5
                                                                        }
                                                                    }

                                                                ); this.body.edges[C.id]=C, this.body.edgeIndices.push(C.id), this.temporaryIds.nodes.push(e.id), this.temporaryIds.edges.push(C.id)
                                                            }

                                                            this.touchTime=(new Date).valueOf()
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_dragControlNode", value:function(g) {
                                                        var A=this.body.functions.getPointer(g.center), t=this.selectionHandler._pointerToPositionObject(A), e=void 0; void 0 !==this.temporaryIds.edges[0]&&(e=this.body.edges[this.temporaryIds.edges[0]].fromId); for(var C=this.selectionHandler._getAllNodesOverlappingWith(t), I=void 0, i=C.length-1; i>=0; i--) {
                                                            var o; if(-1===Ts(o=this.temporaryIds.nodes).call(o, C[i])) {
                                                                I=this.body.nodes[C[i]]; break
                                                            }
                                                        }

                                                        if(g.controlEdge= {
                                                                from:e, to:I?I.id:void 0
                                                            }

                                                            , this.selectionHandler.generateClickEvent("controlNodeDragging", g, A), void 0 !==this.temporaryIds.nodes[0]) {
                                                            var n=this.body.nodes[this.temporaryIds.nodes[0]]; n.x=this.canvas._XconvertDOMtoCanvas(A.x), n.y=this.canvas._YconvertDOMtoCanvas(A.y), this.body.emitter.emit("_redraw")
                                                        }

                                                        else this.interactionHandler.onDrag(g)
                                                    }
                                                }

                                                , {
                                                    key:"_finishConnect", value:function(g) {
                                                        var A=this.body.functions.getPointer(g.center), t=this.selectionHandler._pointerToPositionObject(A), e=void 0; void 0 !==this.temporaryIds.edges[0]&&(e=this.body.edges[this.temporaryIds.edges[0]].fromId); for(var C=this.selectionHandler._getAllNodesOverlappingWith(t), I=void 0, i=C.length-1; i>=0; i--) {
                                                            var o; if(-1===Ts(o=this.temporaryIds.nodes).call(o, C[i])) {
                                                                I=this.body.nodes[C[i]]; break
                                                            }
                                                        }

                                                        this._cleanupTemporaryNodesAndEdges(), void 0 !==I&&( !0===I.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0 !==this.body.nodes[e]&&void 0 !==this.body.nodes[I.id]&&this._performAddEdge(e, I.id)), g.controlEdge= {
                                                            from:e, to:I?I.id:void 0
                                                        }

                                                        , this.selectionHandler.generateClickEvent("controlNodeDragEnd", g, A), this.body.emitter.emit("_redraw")
                                                    }
                                                }

                                                , {
                                                    key:"_dragStartEdge", value:function(g) {
                                                        var A=this.lastTouch; this.selectionHandler.generateClickEvent("dragStart", g, A, void 0,  !0)
                                                    }
                                                }

                                                , {
                                                    key:"_performAddNode", value:function(g) {
                                                        var A=this, t= {
                                                            id:Fp(), x:g.pointer.canvas.x, y:g.pointer.canvas.y, label:"new"
                                                        }

                                                        ; if("function"==typeof this.options.addNode) {
                                                            if(2 !==this.options.addNode.length)throw this.showManipulatorToolbar(), new Error("The function for add does not support two arguments (data,callback)"); this.options.addNode(t, (function(g) {
                                                                        null !=g&&"addNode"===A.inMode&&A.body.data.nodes.getDataSet().add(g), A.showManipulatorToolbar()
                                                                    }

                                                                ))
                                                        }

                                                        else this.body.data.nodes.getDataSet().add(t), this.showManipulatorToolbar()
                                                    }
                                                }

                                                , {
                                                    key:"_performAddEdge", value:function(g, A) {
                                                        var t=this, e= {
                                                            from:g, to:A
                                                        }

                                                        ; if("function"==typeof this.options.addEdge) {
                                                            if(2 !==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)"); this.options.addEdge(e, (function(g) {
                                                                        null !=g&&"addEdge"===t.inMode&&(t.body.data.edges.getDataSet().add(g), t.selectionHandler.unselectAll(), t.showManipulatorToolbar())
                                                                    }

                                                                ))
                                                        }

                                                        else this.body.data.edges.getDataSet().add(e), this.selectionHandler.unselectAll(), this.showManipulatorToolbar()
                                                    }
                                                }

                                                , {
                                                    key:"_performEditEdge", value:function(g, A) {
                                                        var t=this, e= {
                                                            id:this.edgeBeingEditedId, from:g, to:A, label:this.body.data.edges.get(this.edgeBeingEditedId).label
                                                        }

                                                        , C=this.options.editEdge; if("object"===zn(C)&&(C=C.editWithoutDrag), "function"==typeof C) {
                                                            if(2 !==C.length)throw new Error("The function for edit does not support two arguments (data, callback)"); C(e, (function(g) {
                                                                        null==g||"editEdge" !==t.inMode?(t.body.edges[e.id].updateEdgeType(), t.body.emitter.emit("_redraw"), t.showManipulatorToolbar()):(t.body.data.edges.getDataSet().update(g), t.selectionHandler.unselectAll(), t.showManipulatorToolbar())
                                                                    }

                                                                ))
                                                        }

                                                        else this.body.data.edges.getDataSet().update(e), this.selectionHandler.unselectAll(), this.showManipulatorToolbar()
                                                    }
                                                }

                                                ]), g
                                        }

                                        (), Km="string", Xm="boolean", Jm="number", qm="array", $m="object", gb=["arrow", "bar", "box", "circle", "crow", "curve", "diamond", "image", "inv_curve", "inv_triangle", "triangle", "vee"], Ab= {
                                            borderWidth: {
                                                number:Jm
                                            }

                                            , borderWidthSelected: {
                                                number:Jm, undefined:"undefined"
                                            }

                                            , brokenImage: {
                                                string:Km, undefined:"undefined"
                                            }

                                            , chosen: {
                                                label: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , node: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm
                                                }
                                            }

                                            , color: {
                                                border: {
                                                    string:Km
                                                }

                                                , background: {
                                                    string:Km
                                                }

                                                , highlight: {
                                                    border: {
                                                        string:Km
                                                    }

                                                    , background: {
                                                        string:Km
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , hover: {
                                                    border: {
                                                        string:Km
                                                    }

                                                    , background: {
                                                        string:Km
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , __type__: {
                                                    object:$m, string:Km
                                                }
                                            }

                                            , opacity: {
                                                number:Jm, undefined:"undefined"
                                            }

                                            , fixed: {
                                                x: {
                                                    boolean:Xm
                                                }

                                                , y: {
                                                    boolean:Xm
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm
                                                }
                                            }

                                            , font: {
                                                align: {
                                                    string:Km
                                                }

                                                , color: {
                                                    string:Km
                                                }

                                                , size: {
                                                    number:Jm
                                                }

                                                , face: {
                                                    string:Km
                                                }

                                                , background: {
                                                    string:Km
                                                }

                                                , strokeWidth: {
                                                    number:Jm
                                                }

                                                , strokeColor: {
                                                    string:Km
                                                }

                                                , vadjust: {
                                                    number:Jm
                                                }

                                                , multi: {
                                                    boolean:Xm, string:Km
                                                }

                                                , bold: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , face: {
                                                        string:Km
                                                    }

                                                    , mod: {
                                                        string:Km
                                                    }

                                                    , vadjust: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , boldital: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , face: {
                                                        string:Km
                                                    }

                                                    , mod: {
                                                        string:Km
                                                    }

                                                    , vadjust: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , ital: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , face: {
                                                        string:Km
                                                    }

                                                    , mod: {
                                                        string:Km
                                                    }

                                                    , vadjust: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , mono: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , face: {
                                                        string:Km
                                                    }

                                                    , mod: {
                                                        string:Km
                                                    }

                                                    , vadjust: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , __type__: {
                                                    object:$m, string:Km
                                                }
                                            }

                                            , group: {
                                                string:Km, number:Jm, undefined:"undefined"
                                            }

                                            , heightConstraint: {
                                                minimum: {
                                                    number:Jm
                                                }

                                                , valign: {
                                                    string:Km
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm, number:Jm
                                                }
                                            }

                                            , hidden: {
                                                boolean:Xm
                                            }

                                            , icon: {
                                                face: {
                                                    string:Km
                                                }

                                                , code: {
                                                    string:Km
                                                }

                                                , size: {
                                                    number:Jm
                                                }

                                                , color: {
                                                    string:Km
                                                }

                                                , weight: {
                                                    string:Km, number:Jm
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , id: {
                                                string:Km, number:Jm
                                            }

                                            , image: {
                                                selected: {
                                                    string:Km, undefined:"undefined"
                                                }

                                                , unselected: {
                                                    string:Km, undefined:"undefined"
                                                }

                                                , __type__: {
                                                    object:$m, string:Km
                                                }
                                            }

                                            , imagePadding: {
                                                top: {
                                                    number:Jm
                                                }

                                                , right: {
                                                    number:Jm
                                                }

                                                , bottom: {
                                                    number:Jm
                                                }

                                                , left: {
                                                    number:Jm
                                                }

                                                , __type__: {
                                                    object:$m, number:Jm
                                                }
                                            }

                                            , label: {
                                                string:Km, undefined:"undefined"
                                            }

                                            , labelHighlightBold: {
                                                boolean:Xm
                                            }

                                            , level: {
                                                number:Jm, undefined:"undefined"
                                            }

                                            , margin: {
                                                top: {
                                                    number:Jm
                                                }

                                                , right: {
                                                    number:Jm
                                                }

                                                , bottom: {
                                                    number:Jm
                                                }

                                                , left: {
                                                    number:Jm
                                                }

                                                , __type__: {
                                                    object:$m, number:Jm
                                                }
                                            }

                                            , mass: {
                                                number:Jm
                                            }

                                            , physics: {
                                                boolean:Xm
                                            }

                                            , scaling: {
                                                min: {
                                                    number:Jm
                                                }

                                                , max: {
                                                    number:Jm
                                                }

                                                , label: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , min: {
                                                        number:Jm
                                                    }

                                                    , max: {
                                                        number:Jm
                                                    }

                                                    , maxVisible: {
                                                        number:Jm
                                                    }

                                                    , drawThreshold: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , customScalingFunction: {
                                                    function:"function"
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , shadow: {
                                                enabled: {
                                                    boolean:Xm
                                                }

                                                , color: {
                                                    string:Km
                                                }

                                                , size: {
                                                    number:Jm
                                                }

                                                , x: {
                                                    number:Jm
                                                }

                                                , y: {
                                                    number:Jm
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm
                                                }
                                            }

                                            , shape: {
                                                string:["custom", "ellipse", "circle", "database", "box", "text", "image", "circularImage", "diamond", "dot", "star", "triangle", "triangleDown", "square", "icon", "hexagon"]
                                            }

                                            , ctxRenderer: {
                                                function:"function"
                                            }

                                            , shapeProperties: {
                                                borderDashes: {
                                                    boolean:Xm, array:qm
                                                }

                                                , borderRadius: {
                                                    number:Jm
                                                }

                                                , interpolation: {
                                                    boolean:Xm
                                                }

                                                , useImageSize: {
                                                    boolean:Xm
                                                }

                                                , useBorderWithImage: {
                                                    boolean:Xm
                                                }

                                                , coordinateOrigin: {
                                                    string:["center", "top-left"]
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , size: {
                                                number:Jm
                                            }

                                            , title: {
                                                string:Km, dom:"dom", undefined:"undefined"
                                            }

                                            , value: {
                                                number:Jm, undefined:"undefined"
                                            }

                                            , widthConstraint: {
                                                minimum: {
                                                    number:Jm
                                                }

                                                , maximum: {
                                                    number:Jm
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm, number:Jm
                                                }
                                            }

                                            , x: {
                                                number:Jm
                                            }

                                            , y: {
                                                number:Jm
                                            }

                                            , __type__: {
                                                object:$m
                                            }
                                        }

                                        , tb= {
                                            configure: {
                                                enabled: {
                                                    boolean:Xm
                                                }

                                                , filter: {
                                                    boolean:Xm, string:Km, array:qm, function:"function"
                                                }

                                                , container: {
                                                    dom:"dom"
                                                }

                                                , showButton: {
                                                    boolean:Xm
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm, string:Km, array:qm, function:"function"
                                                }
                                            }

                                            , edges: {
                                                arrows: {
                                                    to: {
                                                        enabled: {
                                                            boolean:Xm
                                                        }

                                                        , scaleFactor: {
                                                            number:Jm
                                                        }

                                                        , type: {
                                                            string:gb
                                                        }

                                                        , imageHeight: {
                                                            number:Jm
                                                        }

                                                        , imageWidth: {
                                                            number:Jm
                                                        }

                                                        , src: {
                                                            string:Km
                                                        }

                                                        , __type__: {
                                                            object:$m, boolean:Xm
                                                        }
                                                    }

                                                    , middle: {
                                                        enabled: {
                                                            boolean:Xm
                                                        }

                                                        , scaleFactor: {
                                                            number:Jm
                                                        }

                                                        , type: {
                                                            string:gb
                                                        }

                                                        , imageWidth: {
                                                            number:Jm
                                                        }

                                                        , imageHeight: {
                                                            number:Jm
                                                        }

                                                        , src: {
                                                            string:Km
                                                        }

                                                        , __type__: {
                                                            object:$m, boolean:Xm
                                                        }
                                                    }

                                                    , from: {
                                                        enabled: {
                                                            boolean:Xm
                                                        }

                                                        , scaleFactor: {
                                                            number:Jm
                                                        }

                                                        , type: {
                                                            string:gb
                                                        }

                                                        , imageWidth: {
                                                            number:Jm
                                                        }

                                                        , imageHeight: {
                                                            number:Jm
                                                        }

                                                        , src: {
                                                            string:Km
                                                        }

                                                        , __type__: {
                                                            object:$m, boolean:Xm
                                                        }
                                                    }

                                                    , __type__: {
                                                        string:["from", "to", "middle"], object:$m
                                                    }
                                                }

                                                , endPointOffset: {
                                                    from: {
                                                        number:Jm
                                                    }

                                                    , to: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, number:Jm
                                                    }
                                                }

                                                , arrowStrikethrough: {
                                                    boolean:Xm
                                                }

                                                , background: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , dashes: {
                                                        boolean:Xm, array:qm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , chosen: {
                                                    label: {
                                                        boolean:Xm, function:"function"
                                                    }

                                                    , edge: {
                                                        boolean:Xm, function:"function"
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , color: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , highlight: {
                                                        string:Km
                                                    }

                                                    , hover: {
                                                        string:Km
                                                    }

                                                    , inherit: {
                                                        string:["from", "to", "both"], boolean:Xm
                                                    }

                                                    , opacity: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , dashes: {
                                                    boolean:Xm, array:qm
                                                }

                                                , font: {
                                                    color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , face: {
                                                        string:Km
                                                    }

                                                    , background: {
                                                        string:Km
                                                    }

                                                    , strokeWidth: {
                                                        number:Jm
                                                    }

                                                    , strokeColor: {
                                                        string:Km
                                                    }

                                                    , align: {
                                                        string:["horizontal", "top", "middle", "bottom"]
                                                    }

                                                    , vadjust: {
                                                        number:Jm
                                                    }

                                                    , multi: {
                                                        boolean:Xm, string:Km
                                                    }

                                                    , bold: {
                                                        color: {
                                                            string:Km
                                                        }

                                                        , size: {
                                                            number:Jm
                                                        }

                                                        , face: {
                                                            string:Km
                                                        }

                                                        , mod: {
                                                            string:Km
                                                        }

                                                        , vadjust: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m, string:Km
                                                        }
                                                    }

                                                    , boldital: {
                                                        color: {
                                                            string:Km
                                                        }

                                                        , size: {
                                                            number:Jm
                                                        }

                                                        , face: {
                                                            string:Km
                                                        }

                                                        , mod: {
                                                            string:Km
                                                        }

                                                        , vadjust: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m, string:Km
                                                        }
                                                    }

                                                    , ital: {
                                                        color: {
                                                            string:Km
                                                        }

                                                        , size: {
                                                            number:Jm
                                                        }

                                                        , face: {
                                                            string:Km
                                                        }

                                                        , mod: {
                                                            string:Km
                                                        }

                                                        , vadjust: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m, string:Km
                                                        }
                                                    }

                                                    , mono: {
                                                        color: {
                                                            string:Km
                                                        }

                                                        , size: {
                                                            number:Jm
                                                        }

                                                        , face: {
                                                            string:Km
                                                        }

                                                        , mod: {
                                                            string:Km
                                                        }

                                                        , vadjust: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m, string:Km
                                                        }
                                                    }

                                                    , __type__: {
                                                        object:$m, string:Km
                                                    }
                                                }

                                                , hidden: {
                                                    boolean:Xm
                                                }

                                                , hoverWidth: {
                                                    function:"function", number:Jm
                                                }

                                                , label: {
                                                    string:Km, undefined:"undefined"
                                                }

                                                , labelHighlightBold: {
                                                    boolean:Xm
                                                }

                                                , length: {
                                                    number:Jm, undefined:"undefined"
                                                }

                                                , physics: {
                                                    boolean:Xm
                                                }

                                                , scaling: {
                                                    min: {
                                                        number:Jm
                                                    }

                                                    , max: {
                                                        number:Jm
                                                    }

                                                    , label: {
                                                        enabled: {
                                                            boolean:Xm
                                                        }

                                                        , min: {
                                                            number:Jm
                                                        }

                                                        , max: {
                                                            number:Jm
                                                        }

                                                        , maxVisible: {
                                                            number:Jm
                                                        }

                                                        , drawThreshold: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m, boolean:Xm
                                                        }
                                                    }

                                                    , customScalingFunction: {
                                                        function:"function"
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , selectionWidth: {
                                                    function:"function", number:Jm
                                                }

                                                , selfReferenceSize: {
                                                    number:Jm
                                                }

                                                , selfReference: {
                                                    size: {
                                                        number:Jm
                                                    }

                                                    , angle: {
                                                        number:Jm
                                                    }

                                                    , renderBehindTheNode: {
                                                        boolean:Xm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , shadow: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , color: {
                                                        string:Km
                                                    }

                                                    , size: {
                                                        number:Jm
                                                    }

                                                    , x: {
                                                        number:Jm
                                                    }

                                                    , y: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , smooth: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , type: {
                                                        string:["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"]
                                                    }

                                                    , roundness: {
                                                        number:Jm
                                                    }

                                                    , forceDirection: {
                                                        string:["horizontal", "vertical", "none"], boolean:Xm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , title: {
                                                    string:Km, undefined:"undefined"
                                                }

                                                , width: {
                                                    number:Jm
                                                }

                                                , widthConstraint: {
                                                    maximum: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm, number:Jm
                                                    }
                                                }

                                                , value: {
                                                    number:Jm, undefined:"undefined"
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , groups: {
                                                useDefaultGroups: {
                                                    boolean:Xm
                                                }

                                                , __any__:Ab, __type__: {
                                                    object:$m
                                                }
                                            }

                                            , interaction: {
                                                dragNodes: {
                                                    boolean:Xm
                                                }

                                                , dragView: {
                                                    boolean:Xm
                                                }

                                                , hideEdgesOnDrag: {
                                                    boolean:Xm
                                                }

                                                , hideEdgesOnZoom: {
                                                    boolean:Xm
                                                }

                                                , hideNodesOnDrag: {
                                                    boolean:Xm
                                                }

                                                , hover: {
                                                    boolean:Xm
                                                }

                                                , keyboard: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , speed: {
                                                        x: {
                                                            number:Jm
                                                        }

                                                        , y: {
                                                            number:Jm
                                                        }

                                                        , zoom: {
                                                            number:Jm
                                                        }

                                                        , __type__: {
                                                            object:$m
                                                        }
                                                    }

                                                    , bindToWindow: {
                                                        boolean:Xm
                                                    }

                                                    , autoFocus: {
                                                        boolean:Xm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , multiselect: {
                                                    boolean:Xm
                                                }

                                                , navigationButtons: {
                                                    boolean:Xm
                                                }

                                                , selectable: {
                                                    boolean:Xm
                                                }

                                                , selectConnectedEdges: {
                                                    boolean:Xm
                                                }

                                                , hoverConnectedEdges: {
                                                    boolean:Xm
                                                }

                                                , tooltipDelay: {
                                                    number:Jm
                                                }

                                                , zoomView: {
                                                    boolean:Xm
                                                }

                                                , zoomSpeed: {
                                                    number:Jm
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , layout: {
                                                randomSeed: {
                                                    undefined:"undefined", number:Jm, string:Km
                                                }

                                                , improvedLayout: {
                                                    boolean:Xm
                                                }

                                                , clusterThreshold: {
                                                    number:Jm
                                                }

                                                , hierarchical: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , levelSeparation: {
                                                        number:Jm
                                                    }

                                                    , nodeSpacing: {
                                                        number:Jm
                                                    }

                                                    , treeSpacing: {
                                                        number:Jm
                                                    }

                                                    , blockShifting: {
                                                        boolean:Xm
                                                    }

                                                    , edgeMinimization: {
                                                        boolean:Xm
                                                    }

                                                    , parentCentralization: {
                                                        boolean:Xm
                                                    }

                                                    , direction: {
                                                        string:["UD", "DU", "LR", "RL"]
                                                    }

                                                    , sortMethod: {
                                                        string:["hubsize", "directed"]
                                                    }

                                                    , shakeTowards: {
                                                        string:["leaves", "roots"]
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , manipulation: {
                                                enabled: {
                                                    boolean:Xm
                                                }

                                                , initiallyActive: {
                                                    boolean:Xm
                                                }

                                                , addNode: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , addEdge: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , editNode: {
                                                    function:"function"
                                                }

                                                , editEdge: {
                                                    editWithoutDrag: {
                                                        function:"function"
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm, function:"function"
                                                    }
                                                }

                                                , deleteNode: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , deleteEdge: {
                                                    boolean:Xm, function:"function"
                                                }

                                                , controlNodeStyle:Ab, __type__: {
                                                    object:$m, boolean:Xm
                                                }
                                            }

                                            , nodes:Ab, physics: {
                                                enabled: {
                                                    boolean:Xm
                                                }

                                                , barnesHut: {
                                                    theta: {
                                                        number:Jm
                                                    }

                                                    , gravitationalConstant: {
                                                        number:Jm
                                                    }

                                                    , centralGravity: {
                                                        number:Jm
                                                    }

                                                    , springLength: {
                                                        number:Jm
                                                    }

                                                    , springConstant: {
                                                        number:Jm
                                                    }

                                                    , damping: {
                                                        number:Jm
                                                    }

                                                    , avoidOverlap: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , forceAtlas2Based: {
                                                    theta: {
                                                        number:Jm
                                                    }

                                                    , gravitationalConstant: {
                                                        number:Jm
                                                    }

                                                    , centralGravity: {
                                                        number:Jm
                                                    }

                                                    , springLength: {
                                                        number:Jm
                                                    }

                                                    , springConstant: {
                                                        number:Jm
                                                    }

                                                    , damping: {
                                                        number:Jm
                                                    }

                                                    , avoidOverlap: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , repulsion: {
                                                    centralGravity: {
                                                        number:Jm
                                                    }

                                                    , springLength: {
                                                        number:Jm
                                                    }

                                                    , springConstant: {
                                                        number:Jm
                                                    }

                                                    , nodeDistance: {
                                                        number:Jm
                                                    }

                                                    , damping: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , hierarchicalRepulsion: {
                                                    centralGravity: {
                                                        number:Jm
                                                    }

                                                    , springLength: {
                                                        number:Jm
                                                    }

                                                    , springConstant: {
                                                        number:Jm
                                                    }

                                                    , nodeDistance: {
                                                        number:Jm
                                                    }

                                                    , damping: {
                                                        number:Jm
                                                    }

                                                    , avoidOverlap: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , maxVelocity: {
                                                    number:Jm
                                                }

                                                , minVelocity: {
                                                    number:Jm
                                                }

                                                , solver: {
                                                    string:["barnesHut", "repulsion", "hierarchicalRepulsion", "forceAtlas2Based"]
                                                }

                                                , stabilization: {
                                                    enabled: {
                                                        boolean:Xm
                                                    }

                                                    , iterations: {
                                                        number:Jm
                                                    }

                                                    , updateInterval: {
                                                        number:Jm
                                                    }

                                                    , onlyDynamicEdges: {
                                                        boolean:Xm
                                                    }

                                                    , fit: {
                                                        boolean:Xm
                                                    }

                                                    , __type__: {
                                                        object:$m, boolean:Xm
                                                    }
                                                }

                                                , timestep: {
                                                    number:Jm
                                                }

                                                , adaptiveTimestep: {
                                                    boolean:Xm
                                                }

                                                , wind: {
                                                    x: {
                                                        number:Jm
                                                    }

                                                    , y: {
                                                        number:Jm
                                                    }

                                                    , __type__: {
                                                        object:$m
                                                    }
                                                }

                                                , __type__: {
                                                    object:$m, boolean:Xm
                                                }
                                            }

                                            , autoResize: {
                                                boolean:Xm
                                            }

                                            , clickToUse: {
                                                boolean:Xm
                                            }

                                            , locale: {
                                                string:Km
                                            }

                                            , locales: {
                                                __any__: {
                                                    any:"any"
                                                }

                                                , __type__: {
                                                    object:$m
                                                }
                                            }

                                            , height: {
                                                string:Km
                                            }

                                            , width: {
                                                string:Km
                                            }

                                            , __type__: {
                                                object:$m
                                            }
                                        }

                                        , eb= {
                                            nodes: {
                                                borderWidth:[1, 0, 10, 1], borderWidthSelected:[2, 0, 10, 1], color: {
                                                    border:["color", "#2B7CE9"], background:["color", "#97C2FC"], highlight: {
                                                        border:["color", "#2B7CE9"], background:["color", "#D2E5FF"]
                                                    }

                                                    , hover: {
                                                        border:["color", "#2B7CE9"], background:["color", "#D2E5FF"]
                                                    }
                                                }

                                                , opacity:[0, 0, 1, .1], fixed: {
                                                    x: !1, y: !1
                                                }

                                                , font: {
                                                    color:["color", "#343434"], size:[14, 0, 100, 1], face:["arial", "verdana", "tahoma"], background:["color", "none"], strokeWidth:[0, 0, 50, 1], strokeColor:["color", "#ffffff"]
                                                }

                                                , hidden: !1, labelHighlightBold: !0, physics: !0, scaling: {
                                                    min:[10, 0, 200, 1], max:[30, 0, 200, 1], label: {
                                                        enabled: !1, min:[14, 0, 200, 1], max:[30, 0, 200, 1], maxVisible:[30, 0, 200, 1], drawThreshold:[5, 0, 20, 1]
                                                    }
                                                }

                                                , shadow: {
                                                    enabled: !1, color:"rgba(0,0,0,0.5)", size:[10, 0, 20, 1], x:[5, -30, 30, 1], y:[5, -30, 30, 1]
                                                }

                                                , shape:["ellipse", "box", "circle", "database", "diamond", "dot", "square", "star", "text", "triangle", "triangleDown", "hexagon"], shapeProperties: {
                                                    borderDashes: !1, borderRadius:[6, 0, 20, 1], interpolation: !0, useImageSize: !1
                                                }

                                                , size:[25, 0, 200, 1]
                                            }

                                            , edges: {
                                                arrows: {
                                                    to: {
                                                        enabled: !1, scaleFactor:[1, 0, 3, .05], type:"arrow"
                                                    }

                                                    , middle: {
                                                        enabled: !1, scaleFactor:[1, 0, 3, .05], type:"arrow"
                                                    }

                                                    , from: {
                                                        enabled: !1, scaleFactor:[1, 0, 3, .05], type:"arrow"
                                                    }
                                                }

                                                , endPointOffset: {
                                                    from:[0, -10, 10, 1], to:[0, -10, 10, 1]
                                                }

                                                , arrowStrikethrough: !0, color: {
                                                    color:["color", "#848484"], highlight:["color", "#848484"], hover:["color", "#848484"], inherit:["from", "to", "both",  !0,  !1], opacity:[1, 0, 1, .05]
                                                }

                                                , dashes: !1, font: {
                                                    color:["color", "#343434"], size:[14, 0, 100, 1], face:["arial", "verdana", "tahoma"], background:["color", "none"], strokeWidth:[2, 0, 50, 1], strokeColor:["color", "#ffffff"], align:["horizontal", "top", "middle", "bottom"]
                                                }

                                                , hidden: !1, hoverWidth:[1.5, 0, 5, .1], labelHighlightBold: !0, physics: !0, scaling: {
                                                    min:[1, 0, 100, 1], max:[15, 0, 100, 1], label: {
                                                        enabled: !0, min:[14, 0, 200, 1], max:[30, 0, 200, 1], maxVisible:[30, 0, 200, 1], drawThreshold:[5, 0, 20, 1]
                                                    }
                                                }

                                                , selectionWidth:[1.5, 0, 5, .1], selfReferenceSize:[20, 0, 200, 1], selfReference: {
                                                    size:[20, 0, 200, 1], angle:[Math.PI/2, -6*Math.PI, 6*Math.PI, Math.PI/8], renderBehindTheNode: !0
                                                }

                                                , shadow: {
                                                    enabled: !1, color:"rgba(0,0,0,0.5)", size:[10, 0, 20, 1], x:[5, -30, 30, 1], y:[5, -30, 30, 1]
                                                }

                                                , smooth: {
                                                    enabled: !0, type:["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"], forceDirection:["horizontal", "vertical", "none"], roundness:[.5, 0, 1, .05]
                                                }

                                                , width:[1, 0, 30, 1]
                                            }

                                            , layout: {
                                                hierarchical: {
                                                    enabled: !1, levelSeparation:[150, 20, 500, 5], nodeSpacing:[100, 20, 500, 5], treeSpacing:[200, 20, 500, 5], blockShifting: !0, edgeMinimization: !0, parentCentralization: !0, direction:["UD", "DU", "LR", "RL"], sortMethod:["hubsize", "directed"], shakeTowards:["leaves", "roots"]
                                                }
                                            }

                                            , interaction: {
                                                dragNodes: !0, dragView: !0, hideEdgesOnDrag: !1, hideEdgesOnZoom: !1, hideNodesOnDrag: !1, hover: !1, keyboard: {
                                                    enabled: !1, speed: {
                                                        x:[10, 0, 40, 1], y:[10, 0, 40, 1], zoom:[.02, 0, .1, .005]
                                                    }

                                                    , bindToWindow: !0, autoFocus: !0
                                                }

                                                , multiselect: !1, navigationButtons: !1, selectable: !0, selectConnectedEdges: !0, hoverConnectedEdges: !0, tooltipDelay:[300, 0, 1e3, 25], zoomView: !0, zoomSpeed:[1, .1, 2, .1]
                                            }

                                            , manipulation: {
                                                enabled: !1, initiallyActive: !1
                                            }

                                            , physics: {
                                                enabled: !0, barnesHut: {
                                                    theta:[.5, .1, 1, .05], gravitationalConstant:[-2e3, -3e4, 0, 50], centralGravity:[.3, 0, 10, .05], springLength:[95, 0, 500, 5], springConstant:[.04, 0, 1.2, .005], damping:[.09, 0, 1, .01], avoidOverlap:[0, 0, 1, .01]
                                                }

                                                , forceAtlas2Based: {
                                                    theta:[.5, .1, 1, .05], gravitationalConstant:[-50, -500, 0, 1], centralGravity:[.01, 0, 1, .005], springLength:[95, 0, 500, 5], springConstant:[.08, 0, 1.2, .005], damping:[.4, 0, 1, .01], avoidOverlap:[0, 0, 1, .01]
                                                }

                                                , repulsion: {
                                                    centralGravity:[.2, 0, 10, .05], springLength:[200, 0, 500, 5], springConstant:[.05, 0, 1.2, .005], nodeDistance:[100, 0, 500, 5], damping:[.09, 0, 1, .01]
                                                }

                                                , hierarchicalRepulsion: {
                                                    centralGravity:[.2, 0, 10, .05], springLength:[100, 0, 500, 5], springConstant:[.01, 0, 1.2, .005], nodeDistance:[120, 0, 500, 5], damping:[.09, 0, 1, .01], avoidOverlap:[0, 0, 1, .01]
                                                }

                                                , maxVelocity:[50, 0, 150, 1], minVelocity:[.1, .01, .5, .01], solver:["barnesHut", "forceAtlas2Based", "repulsion", "hierarchicalRepulsion"], timestep:[.5, .01, 1, .01], wind: {
                                                    x:[0, -10, 10, .1], y:[0, -10, 10, .1]
                                                }
                                            }
                                        }

                                        , Cb=function(g, A, t) {
                                            var e; return !( !Yr(g).call(g, "physics")|| !Yr(e=eb.physics.solver).call(e, A)||t.physics.solver===A||"wind"===A)
                                        }

                                        , Ib=Object.freeze( {
                                                __proto__:null, configuratorHideOption:Cb, allOptions:tb, configureOptions:eb
                                            }

                                        ), ib=function() {
                                            function g() {
                                                So(this, g)
                                            }

                                            return Lo(g, [ {
                                                    key:"getDistances", value:function(g, A, t) {
                                                        for(var e= {}

                                                            , C=g.edges, I=0; I<A.length; I++) {
                                                            var i= {}

                                                            ; e[A[I]]=i; for(var o=0; o<A.length; o++)i[A[o]]=I==o?0:1e9
                                                        }

                                                        for(var n=0; n<t.length; n++) {
                                                            var r=C[t[n]];  !0===r.connected&&void 0 !==e[r.fromId]&&void 0 !==e[r.toId]&&(e[r.fromId][r.toId]=1, e[r.toId][r.fromId]=1)
                                                        }

                                                        for(var s=A.length, a=0; a<s; a++)for(var d=A[a], h=e[d], l=0; l<s-1; l++)for(var c=A[l], u=e[c], p=l+1; p<s; p++) {
                                                            var f=A[p], v=e[f], y=Math.min(u[f], u[d]+h[f]); u[f]=y, v[c]=y
                                                        }

                                                        return e
                                                    }
                                                }

                                                ]), g
                                        }

                                        (), ob=function() {
                                            function g(A, t, e) {
                                                So(this, g), this.body=A, this.springLength=t, this.springConstant=e, this.distanceSolver=new ib
                                            }

                                            return Lo(g, [ {
                                                    key:"setOptions", value:function(g) {
                                                        g&&(g.springLength&&(this.springLength=g.springLength), g.springConstant&&(this.springConstant=g.springConstant))
                                                    }
                                                }

                                                , {
                                                    key:"solve", value:function(g, A) {
                                                        var t=arguments.length>2&&void 0 !==arguments[2]&&arguments[2], e=this.distanceSolver.getDistances(this.body, g, A); this._createL_matrix(e), this._createK_matrix(e), this._createE_matrix(); for(var C=.01, I=1, i=0, o=Math.max(1e3, Math.min(10*this.body.nodeIndices.length, 6e3)), n=5, r=1e9, s=0, a=0, d=0, h=0, l=0; r>C&&i<o; ) {
                                                            i+=1; var c=this._getHighestEnergyNode(t), u=Pn(c, 4); for(s=u[0], r=u[1], a=u[2], d=u[3], h=r, l=0; h>I&&l<n; ) {
                                                                l+=1, this._moveNode(s, a, d); var p=this._getEnergy(s), f=Pn(p, 3); h=f[0], a=f[1], d=f[2]
                                                            }
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_getHighestEnergyNode", value:function(g) {
                                                        for(var A=this.body.nodeIndices, t=this.body.nodes, e=0, C=A[0], I=0, i=0, o=0; o<A.length; o++) {
                                                            var n=A[o]; if( !0 !==t[n].predefinedPosition|| !0===t[n].isCluster&& !0===g|| !0 !==t[n].options.fixed.x|| !0 !==t[n].options.fixed.y) {
                                                                var r=Pn(this._getEnergy(n), 3), s=r[0], a=r[1], d=r[2]; e<s&&(e=s, C=n, I=a, i=d)
                                                            }
                                                        }

                                                        return[C, e, I, i]
                                                    }
                                                }

                                                , {
                                                    key:"_getEnergy", value:function(g) {
                                                        var A=Pn(this.E_sums[g], 2), t=A[0], e=A[1]; return[Math.sqrt(Math.pow(t, 2)+Math.pow(e, 2)), t, e]
                                                    }
                                                }

                                                , {
                                                    key:"_moveNode", value:function(g, A, t) {
                                                        for(var e=this.body.nodeIndices, C=this.body.nodes, I=0, i=0, o=0, n=C[g].x, r=C[g].y, s=this.K_matrix[g], a=this.L_matrix[g], d=0; d<e.length; d++) {
                                                            var h=e[d]; if(h !==g) {
                                                                var l=C[h].x, c=C[h].y, u=s[h], p=a[h], f=1/Math.pow(Math.pow(n-l, 2)+Math.pow(r-c, 2), 1.5); I+=u*(1-p*Math.pow(r-c, 2)*f), i+=u*(p*(n-l)*(r-c)*f), o+=u*(1-p*Math.pow(n-l, 2)*f)
                                                            }
                                                        }

                                                        var v=(A/I+t/i)/(i/I-o/i), y=-(i*v+A)/I; C[g].x+=y, C[g].y+=v, this._updateE_matrix(g)
                                                    }
                                                }

                                                , {
                                                    key:"_createL_matrix", value:function(g) {
                                                        var A=this.body.nodeIndices, t=this.springLength; this.L_matrix=[]; for(var e=0; e<A.length; e++) {
                                                            this.L_matrix[A[e]]= {}

                                                            ; for(var C=0; C<A.length; C++)this.L_matrix[A[e]][A[C]]=t*g[A[e]][A[C]]
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_createK_matrix", value:function(g) {
                                                        var A=this.body.nodeIndices, t=this.springConstant; this.K_matrix=[]; for(var e=0; e<A.length; e++) {
                                                            this.K_matrix[A[e]]= {}

                                                            ; for(var C=0; C<A.length; C++)this.K_matrix[A[e]][A[C]]=t*Math.pow(g[A[e]][A[C]], -2)
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_createE_matrix", value:function() {
                                                        var g=this.body.nodeIndices, A=this.body.nodes; this.E_matrix= {}

                                                        , this.E_sums= {}

                                                        ; for(var t=0; t<g.length; t++)this.E_matrix[g[t]]=[]; for(var e=0; e<g.length; e++) {
                                                            for(var C=g[e], I=A[C].x, i=A[C].y, o=0, n=0, r=e; r<g.length; r++) {
                                                                var s=g[r]; if(s !==C) {
                                                                    var a=A[s].x, d=A[s].y, h=1/Math.sqrt(Math.pow(I-a, 2)+Math.pow(i-d, 2)); this.E_matrix[C][r]=[this.K_matrix[C][s]*(I-a-this.L_matrix[C][s]*(I-a)*h), this.K_matrix[C][s]*(i-d-this.L_matrix[C][s]*(i-d)*h)], this.E_matrix[s][e]=this.E_matrix[C][r], o+=this.E_matrix[C][r][0], n+=this.E_matrix[C][r][1]
                                                                }
                                                            }

                                                            this.E_sums[C]=[o, n]
                                                        }
                                                    }
                                                }

                                                , {
                                                    key:"_updateE_matrix", value:function(g) {
                                                        for(var A=this.body.nodeIndices, t=this.body.nodes, e=this.E_matrix[g], C=this.K_matrix[g], I=this.L_matrix[g], i=t[g].x, o=t[g].y, n=0, r=0, s=0; s<A.length; s++) {
                                                            var a=A[s]; if(a !==g) {
                                                                var d=e[s], h=d[0], l=d[1], c=t[a].x, u=t[a].y, p=1/Math.sqrt(Math.pow(i-c, 2)+Math.pow(o-u, 2)), f=C[a]*(i-c-I[a]*(i-c)*p), v=C[a]*(o-u-I[a]*(o-u)*p); e[s]=[f, v], n+=f, r+=v; var y=this.E_sums[a]; y[0]+=f-h, y[1]+=v-l
                                                            }
                                                        }

                                                        this.E_sums[g]=[n, r]
                                                    }
                                                }

                                                ]), g
                                        }

                                        (); function nb(g, A, t) {
                                            var e, C, I, i, o=this; if( !(this instanceof nb))throw new SyntaxError("Constructor must be called with the new operator"); this.options= {}

                                            , this.defaultOptions= {
                                                locale:"en", locales:kl, clickToUse: !1
                                            }

                                            , HA(this.options, this.defaultOptions), this.body= {
                                                container:g, nodes: {}

                                                , nodeIndices:[], edges: {}

                                                , edgeIndices:[], emitter: {
                                                    on:It(e=this.on).call(e, this), off:It(C=this.off).call(C, this), emit:It(I=this.emit).call(I, this), once:It(i=this.once).call(i, this)
                                                }

                                                , eventListeners: {
                                                    onTap:function() {}

                                                    , onTouch:function() {}

                                                    , onDoubleTap:function() {}

                                                    , onHold:function() {}

                                                    , onDragStart:function() {}

                                                    , onDrag:function() {}

                                                    , onDragEnd:function() {}

                                                    , onMouseWheel:function() {}

                                                    , onPinch:function() {}

                                                    , onMouseMove:function() {}

                                                    , onRelease:function() {}

                                                    , onContext:function() {}
                                                }

                                                , data: {
                                                    nodes:null, edges:null
                                                }

                                                , functions: {
                                                    createNode:function() {}

                                                    , createEdge:function() {}

                                                    , getPointer:function() {}
                                                }

                                                , modules: {}

                                                , view: {
                                                    scale:1, translation: {
                                                        x:0, y:0
                                                    }
                                                }

                                                , selectionBox: {
                                                    show: !1, position: {
                                                        start: {
                                                            x:0, y:0
                                                        }

                                                        , end: {
                                                            x:0, y:0
                                                        }
                                                    }
                                                }
                                            }

                                            , this.bindEventListeners(), this.images=new El((function() {
                                                        return o.body.emitter.emit("_requestRedraw")
                                                    }

                                                )), this.groups=new Mc, this.canvas=new Ey(this.body), this.selectionHandler=new Dm(this.body, this.canvas), this.interactionHandler=new My(this.body, this.canvas, this.selectionHandler), this.view=new Ty(this.body, this.canvas), this.renderer=new by(this.body, this.canvas), this.physics=new cy(this.body), this.layoutEngine=new Qm(this.body), this.clustering=new vy(this.body), this.manipulation=new Hm(this.body, this.canvas, this.selectionHandler, this.interactionHandler), this.nodesHandler=new dv(this.body, this.images, this.groups, this.layoutEngine), this.edgesHandler=new Cy(this.body, this.images, this.groups), this.body.modules.kamadaKawai=new ob(this.body, 150, .05), this.body.modules.clustering=this.clustering, this.canvas._create(), this.setOptions(t), this.setData(A)
                                        }

                                        lt(nb.prototype), nb.prototype.setOptions=function(g) {
                                            var A=this; if(null===g&&(g=void 0), void 0 !==g) {
                                                 !0===Vh.validate(g, tb)&&console.error("%cErrors have been found in the supplied options object.", jh); if(sh(["locale", "locales", "clickToUse"], this.options, g), void 0 !==g.locale&&(g.locale=function(g, A) {
                                                            try {
                                                                var t=Pn(A.split(/[-_ /]/, 2), 2), e=t[0], C=t[1], I=null !=e?e.toLowerCase():null, i=null !=C?C.toUpperCase():null; if(I&&i) {
                                                                    var o, n=I+"-"+i; if(Object.prototype.hasOwnProperty.call(g, n))return n; console.warn(Ln(o="Unknown variant ".concat(i, " of language ")).call(o, I, "."))
                                                                }

                                                                if(I) {
                                                                    var r=I; if(Object.prototype.hasOwnProperty.call(g, r))return r; console.warn("Unknown language ".concat(I))
                                                                }

                                                                return console.warn("Unknown locale ".concat(A, ", falling back to English.")), "en"
                                                            }

                                                            catch(g) {
                                                                return console.error(g), console.warn("Unexpected error while normalizing locale ".concat(A, ", falling back to English.")), "en"
                                                            }
                                                        }

                                                        (g.locales||this.options.locales, g.locale)), g=this.layoutEngine.setOptions(g.layout, g), this.canvas.setOptions(g), this.groups.setOptions(g.groups), this.nodesHandler.setOptions(g.nodes), this.edgesHandler.setOptions(g.edges), this.physics.setOptions(g.physics), this.manipulation.setOptions(g.manipulation, g, this.options), this.interactionHandler.setOptions(g.interaction), this.renderer.setOptions(g.interaction), this.selectionHandler.setOptions(g.interaction), void 0 !==g.groups&&this.body.emitter.emit("refreshNodes"), "configure"in g&&(this.configurator||(this.configurator=new Fh(this, this.body.container, eb, this.canvas.pixelRatio, Cb)), this.configurator.setOptions(g.configure)), this.configurator&& !0===this.configurator.options.enabled) {
                                                    var t= {
                                                        nodes: {}

                                                        , edges: {}

                                                        , layout: {}

                                                        , interaction: {}

                                                        , manipulation: {}

                                                        , physics: {}

                                                        , global: {}
                                                    }

                                                    ; dh(t.nodes, this.nodesHandler.options), dh(t.edges, this.edgesHandler.options), dh(t.layout, this.layoutEngine.options), dh(t.interaction, this.selectionHandler.options), dh(t.interaction, this.renderer.options), dh(t.interaction, this.interactionHandler.options), dh(t.manipulation, this.manipulation.options), dh(t.physics, this.physics.options), dh(t.global, this.canvas.options), dh(t.global, this.options), this.configurator.setModuleOptions(t)
                                                }

                                                void 0 !==g.clickToUse? !0===g.clickToUse?void 0===this.activator&&(this.activator=new Sh(this.canvas.frame), this.activator.on("change", (function() {
                                                                A.body.emitter.emit("activate")
                                                            }

                                                        ))):(void 0 !==this.activator&&(this.activator.destroy(), delete this.activator), this.body.emitter.emit("activate")):this.body.emitter.emit("activate"), this.canvas.setSize(), this.body.emitter.emit("startSimulation")
                                            }
                                        }

                                        , nb.prototype._updateVisibleIndices=function() {
                                            var g=this.body.nodes, A=this.body.edges; for(var t in this.body.nodeIndices=[], this.body.edgeIndices=[], g)Object.prototype.hasOwnProperty.call(g, t)&&(this.clustering._isClusteredNode(t)|| !1 !==g[t].options.hidden||this.body.nodeIndices.push(g[t].id)); for(var e in A)if(Object.prototype.hasOwnProperty.call(A, e)) {
                                                var C=A[e], I=g[C.fromId], i=g[C.toId], o=void 0 !==I&&void 0 !==i;  !this.clustering._isClusteredEdge(e)&& !1===C.options.hidden&&o&& !1===I.options.hidden&& !1===i.options.hidden&&this.body.edgeIndices.push(C.id)
                                            }
                                        }

                                        , nb.prototype.bindEventListeners=function() {
                                            var g=this; this.body.emitter.on("_dataChanged", (function() {
                                                        g.edgesHandler._updateState(), g.body.emitter.emit("_dataUpdated")
                                                    }

                                                )), this.body.emitter.on("_dataUpdated", (function() {
                                                        g.clustering._updateState(), g._updateVisibleIndices(), g._updateValueRange(g.body.nodes), g._updateValueRange(g.body.edges), g.body.emitter.emit("startSimulation"), g.body.emitter.emit("_requestRedraw")
                                                    }

                                                ))
                                        }

                                        , nb.prototype.setData=function(g) {
                                            if(this.body.emitter.emit("resetPhysics"), this.body.emitter.emit("_resetData"), this.selectionHandler.unselectAll(), g&&g.dot&&(g.nodes||g.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.'); if(this.setOptions(g&&g.options), g&&g.dot) {
                                                console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);"); var A=yl(g.dot); this.setData(A)
                                            }

                                            else if(g&&g.gephi) {
                                                console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);"); var t=bl(g.gephi); this.setData(t)
                                            }

                                            else this.nodesHandler.setData(g&&g.nodes,  !0), this.edgesHandler.setData(g&&g.edges,  !0), this.body.emitter.emit("_dataChanged"), this.body.emitter.emit("_dataLoaded"), this.body.emitter.emit("initPhysics")
                                        }

                                        , nb.prototype.destroy=function() {
                                            for(var g in this.body.emitter.emit("destroy"), this.body.emitter.off(), this.off(), delete this.groups, delete this.canvas, delete this.selectionHandler, delete this.interactionHandler, delete this.view, delete this.renderer, delete this.physics, delete this.layoutEngine, delete this.clustering, delete this.manipulation, delete this.nodesHandler, delete this.edgesHandler, delete this.configurator, delete this.images, this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes, g)&&delete this.body.nodes[g]; for(var A in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges, A)&&delete this.body.edges[A]; Ih(this.body.container)
                                        }

                                        , nb.prototype._updateValueRange=function(g) {
                                            var A, t=void 0, e=void 0, C=0; for(A in g)if(Object.prototype.hasOwnProperty.call(g, A)) {
                                                var I=g[A].getValue(); void 0 !==I&&(t=void 0===t?I:Math.min(I, t), e=void 0===e?I:Math.max(I, e), C+=I)
                                            }

                                            if(void 0 !==t&&void 0 !==e)for(A in g)Object.prototype.hasOwnProperty.call(g, A)&&g[A].setValueRange(t, e, C)
                                        }

                                        , nb.prototype.isActive=function() {
                                            return !this.activator||this.activator.active
                                        }

                                        , nb.prototype.setSize=function() {
                                            return this.canvas.setSize.apply(this.canvas, arguments)
                                        }

                                        , nb.prototype.canvasToDOM=function() {
                                            return this.canvas.canvasToDOM.apply(this.canvas, arguments)
                                        }

                                        , nb.prototype.DOMtoCanvas=function() {
                                            return this.canvas.DOMtoCanvas.apply(this.canvas, arguments)
                                        }

                                        , nb.prototype.findNode=function() {
                                            return this.clustering.findNode.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.isCluster=function() {
                                            return this.clustering.isCluster.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.openCluster=function() {
                                            return this.clustering.openCluster.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.cluster=function() {
                                            return this.clustering.cluster.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.getNodesInCluster=function() {
                                            return this.clustering.getNodesInCluster.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.clusterByConnection=function() {
                                            return this.clustering.clusterByConnection.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.clusterByHubsize=function() {
                                            return this.clustering.clusterByHubsize.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.updateClusteredNode=function() {
                                            return this.clustering.updateClusteredNode.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.getClusteredEdges=function() {
                                            return this.clustering.getClusteredEdges.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.getBaseEdge=function() {
                                            return this.clustering.getBaseEdge.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.getBaseEdges=function() {
                                            return this.clustering.getBaseEdges.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.updateEdge=function() {
                                            return this.clustering.updateEdge.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.clusterOutliers=function() {
                                            return this.clustering.clusterOutliers.apply(this.clustering, arguments)
                                        }

                                        , nb.prototype.getSeed=function() {
                                            return this.layoutEngine.getSeed.apply(this.layoutEngine, arguments)
                                        }

                                        , nb.prototype.enableEditMode=function() {
                                            return this.manipulation.enableEditMode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.disableEditMode=function() {
                                            return this.manipulation.disableEditMode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.addNodeMode=function() {
                                            return this.manipulation.addNodeMode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.editNode=function() {
                                            return this.manipulation.editNode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.editNodeMode=function() {
                                            return console.warn("Deprecated: Please use editNode instead of editNodeMode."), this.manipulation.editNode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.addEdgeMode=function() {
                                            return this.manipulation.addEdgeMode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.editEdgeMode=function() {
                                            return this.manipulation.editEdgeMode.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.deleteSelected=function() {
                                            return this.manipulation.deleteSelected.apply(this.manipulation, arguments)
                                        }

                                        , nb.prototype.getPositions=function() {
                                            return this.nodesHandler.getPositions.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.getPosition=function() {
                                            return this.nodesHandler.getPosition.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.storePositions=function() {
                                            return this.nodesHandler.storePositions.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.moveNode=function() {
                                            return this.nodesHandler.moveNode.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.getBoundingBox=function() {
                                            return this.nodesHandler.getBoundingBox.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.getConnectedNodes=function(g) {
                                            return void 0 !==this.body.nodes[g]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler, arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler, arguments)
                                        }

                                        , nb.prototype.getConnectedEdges=function() {
                                            return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler, arguments)
                                        }

                                        , nb.prototype.startSimulation=function() {
                                            return this.physics.startSimulation.apply(this.physics, arguments)
                                        }

                                        , nb.prototype.stopSimulation=function() {
                                            return this.physics.stopSimulation.apply(this.physics, arguments)
                                        }

                                        , nb.prototype.stabilize=function() {
                                            return this.physics.stabilize.apply(this.physics, arguments)
                                        }

                                        , nb.prototype.getSelection=function() {
                                            return this.selectionHandler.getSelection.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.setSelection=function() {
                                            return this.selectionHandler.setSelection.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.getSelectedNodes=function() {
                                            return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.getSelectedEdges=function() {
                                            return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.getNodeAt=function() {
                                            var g=this.selectionHandler.getNodeAt.apply(this.selectionHandler, arguments); return void 0 !==g&&void 0 !==g.id?g.id:g
                                        }

                                        , nb.prototype.getEdgeAt=function() {
                                            var g=this.selectionHandler.getEdgeAt.apply(this.selectionHandler, arguments); return void 0 !==g&&void 0 !==g.id?g.id:g
                                        }

                                        , nb.prototype.selectNodes=function() {
                                            return this.selectionHandler.selectNodes.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.selectEdges=function() {
                                            return this.selectionHandler.selectEdges.apply(this.selectionHandler, arguments)
                                        }

                                        , nb.prototype.unselectAll=function() {
                                            this.selectionHandler.unselectAll.apply(this.selectionHandler, arguments), this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler), this.redraw()
                                        }

                                        , nb.prototype.redraw=function() {
                                            return this.renderer.redraw.apply(this.renderer, arguments)
                                        }

                                        , nb.prototype.getScale=function() {
                                            return this.view.getScale.apply(this.view, arguments)
                                        }

                                        , nb.prototype.getViewPosition=function() {
                                            return this.view.getViewPosition.apply(this.view, arguments)
                                        }

                                        , nb.prototype.fit=function() {
                                            return this.view.fit.apply(this.view, arguments)
                                        }

                                        , nb.prototype.moveTo=function() {
                                            return this.view.moveTo.apply(this.view, arguments)
                                        }

                                        , nb.prototype.focus=function() {
                                            return this.view.focus.apply(this.view, arguments)
                                        }

                                        , nb.prototype.releaseNode=function() {
                                            return this.view.releaseNode.apply(this.view, arguments)
                                        }

                                        , nb.prototype.getOptionsFromConfigurator=function() {
                                            var g= {}

                                            ; return this.configurator&&(g=this.configurator.getOptions.apply(this.configurator)), g
                                        }

                                        ; var rb=yl; g.DataSet=Xp, g.DataView=Jp, g.Network=nb, g.NetworkImages=El, g.Queue=_p, g.data=gf, g.networkDOTParser=ml, g.networkGephiParser=wl, g.networkOptions=Ib, g.parseDOTNetwork=rb, g.parseGephiNetwork=bl, Object.defineProperty(g, "__esModule", {
                                                value: !0
                                            }

                                        )
                                    }

                                ));
                            //# sourceMappingURL=vis-network.min.js.map