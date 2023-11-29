"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[492],{22226:function(e,i,c){var t=c(28789),n=c(14161),r=t.default.div.withConfig({componentId:"sc-1ftixr9-0"})(["text-transform:uppercase;margin:0 24px;display:flex;"," font-family:",";font-size:",";"],n.fU.between,n.Rq.accent,n.iH[10]);i.Z=r},54664:function(e,i,c){c.d(i,{g0:function(){return r},iL:function(){return n},ty:function(){return t}});var t=[{name:"January",cured:100,sick:80},{name:"February",cured:120,sick:100},{name:"March",cured:140,sick:120},{name:"April",cured:190,sick:170},{name:"May",cured:280,sick:260},{name:"June",cured:200,sick:180},{name:"July",cured:180,sick:160},{name:"August",cured:160,sick:120},{name:"September",cured:140,sick:80},{name:"October",cured:90,sick:150},{name:"November",cured:120,sick:90},{name:"December",cured:300,sick:164}],n=[{name:"1",cured:90,sick:135},{name:"2",cured:150,sick:120},{name:"3",cured:180,sick:90},{name:"4",cured:190,sick:170},{name:"5",cured:280,sick:260},{name:"6",cured:200,sick:150},{name:"7",cured:180,sick:160},{name:"8",cured:160,sick:120},{name:"9",cured:219,sick:80},{name:"10",cured:90,sick:150},{name:"11",cured:315,sick:300},{name:"12",cured:250,sick:164},{name:"13",cured:210,sick:75},{name:"14",cured:350,sick:300},{name:"15",cured:450,sick:400}],r=[{name:"sun",cured:450,sick:350},{name:"mon",cured:300,sick:250},{name:"tue",cured:200,sick:150},{name:"wed",cured:278,sick:198},{name:"thu",cured:189,sick:99},{name:"fri",cured:239,sick:139},{name:"sat",cured:349,sick:249}]},22594:function(e,i,c){c.r(i),c.d(i,{default:function(){return v}});var t=c(71508),n=c(84594),r=c(1413),a=c(14161),s=c(22226),d=c(249),o=c(66150),l=c(20760),u=c(47242),p=c(36038),h=c(85741),x=c(54664),k=c(80184),f=function(){var e={type:"monotone",strokeWidth:3,fillOpacity:.8},i=[(0,r.Z)((0,r.Z)({},e),{},{dataKey:"cured",stroke:a.O9.peach,fill:a.O9.peach,activeDot:{r:5,fill:a.O9.peach,strokeWidth:0}}),(0,r.Z)((0,r.Z)({},e),{},{dataKey:"sick",stroke:a.O9.purple,fill:a.O9.purple,activeDot:{r:5,fill:a.O9.purple,strokeWidth:0}})];return(0,k.jsxs)(d.Z,{name:"EpiContextAreaChart",children:[(0,k.jsx)(o.Z,{title:"Epidemiological context",children:(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(p.Z,{legend:"sick",color:"purple"}),(0,k.jsx)(p.Z,{legend:"cured",color:"peach"})]})}),(0,k.jsxs)(l.Z,{style:{padding:0,overflow:"hidden",justifyContent:"space-between"},children:[(0,k.jsx)(s.Z,{children:x.g0.map((function(e){return(0,k.jsx)("span",{children:e.name},e.name)}))}),(0,k.jsx)(h.Z,{id:"EpiContextAreaChart",data:x.g0,elems:i,variant:"area",height:300})]})]})},m=c(96027),g=c(87670),b=c(11145),v=function(){return(0,k.jsxs)(t.Z,{title:"Dashboard",children:[(0,k.jsx)("div",{children:(0,k.jsx)(n.Z,{})},"events-compact"),(0,k.jsx)("div",{children:(0,k.jsx)(f,{})},"epi-context-area"),(0,k.jsx)("div",{children:(0,k.jsx)(m.Z,{})},"radar"),(0,k.jsx)("div",{children:(0,k.jsx)(g.Z,{variant:"health"})},"health-index-compact"),(0,k.jsx)("div",{children:(0,k.jsx)(b.Z,{variant:"wide"})},"diagnoses-donut")]})}},16945:function(e,i,c){function t(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function n(e){return e<10?"0"+e:e}c.d(i,{t:function(){return t},v:function(){return n}})},84594:function(e,i,c){c.d(i,{Z:function(){return f}});var t=c(1413),n=c(29439),r=c(40309),a=c(249),s=c(46866),d=(c(9111),c(28789)),o=c(14161),l=c(24343),u=c(80184),p=(d.default.button.withConfig({componentId:"sc-lsaq1a-0"})(["min-width:20px;min-height:20px;padding:2px;border-radius:50%;background-color:",";color:#fff;display:flex;",";position:absolute;top:-10px;right:-10px;font-size:",";line-height:1;will-change:transform;z-index:10;transition:background-color var(--transition),transform var(--transition);&:hover{background-color:",";transform:scale(1.1);}.icon{margin-top:-1px;}"],o.O9.error,o.fU.center,o.iH[12],(0,l._j)(.1,o.O9.error)),c(72791)),h=(c(25984),c(72426)),x=c.n(h),k=c(20890),f=function(){var e=(0,p.useState)(null),i=(0,n.Z)(e,2),c=(i[0],i[1]),d=(0,p.useState)(!1),o=(0,n.Z)(d,2),l=(o[0],o[1]),h=((0,p.useRef)(null),[{date:x()(),title:"Medical conference"}]),f=function(e){return h.filter((function(i){return x()(i.date).isSame(e,"day")})).length>0},m={as:s.ZP,locale:"en-US",navigationLabel:function(e){var i=e.date;return"".concat(x()(i).format("MMMM, YYYY"))},navigationAriaLabel:"Current month",prevLabel:(0,u.jsx)("i",{className:"icon icon-chevron-left"}),nextLabel:(0,u.jsx)("i",{className:"icon icon-chevron-right"}),prev2Label:null,next2Label:null,nextAriaLabel:"Next month",prevAriaLabel:"Previous month",tileContent:function(e){var i=e.date;return f(i)?(0,u.jsx)("span",{className:"bar"}):null},tileClassName:function(e){var i=e.date;return f(i)?"active":null},onClickDay:function(e){c(e),l(!0)}};return(0,u.jsx)(a.Z,{name:"EventsCompactCalendar",children:(0,u.jsxs)(r.W2,{children:[(0,u.jsx)(k.Z,{m:1,sx:{fontSize:22,fontWeight:600},children:"Quick Calender"}),(0,u.jsx)(r.D8,(0,t.Z)({},m))]})})}},40309:function(e,i,c){c.d(i,{D8:function(){return d},W2:function(){return s}});var t=c(28789),n=c(65484),r=c.n(n),a=c(14161),s=t.default.div.withConfig({componentId:"sc-2nb4wf-0"})(["position:relative;height:100%;",";align-items:center;"],a.fU.col),d=(t.default.div.withConfig({componentId:"sc-2nb4wf-1"})(["position:relative;z-index:2;background-color:",";padding:20px;border-radius:8px;",";gap:16px;margin:auto;width:calc(100% - 40px);max-width:320px;"],r()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg}),a.fU.col),t.default.div.withConfig({componentId:"sc-2nb4wf-2"})(["position:absolute;bottom:0;display:flex;width:100%;height:calc(100% - 40px);"]),t.default.div.withConfig({componentId:"sc-2nb4wf-3"})(["",";gap:8px;position:relative;z-index:1;width:100%;margin:2px;flex-grow:1;.react-calendar{flex-grow:1;height:100%;&__navigation{background-color:",";border-radius:8px;min-height:40px;padding:10px 22px;display:flex;",";font-size:",";margin:0 2px;&__label{pointer-events:none;}}&__viewContainer{",";flex-grow:1;}&__tile{font-size:",";font-family:",";.bar{opacity:0;transition:opacity var(--transition);}}&__year-view__months{gap:20px 0;margin-top:20px;}&__month-view{height:100%;& > div{height:100%;align-items:stretch;}& > div > div{",";gap:8px;justify-content:space-between;height:100%;padding:0 24px 20px;}&__weekdays{text-transform:uppercase;font-size:",";font-family:",";text-align:center;order:1;display:grid !important;grid-template-columns:repeat(7,minmax(0,1fr));justify-items:center;abbr{text-decoration:none;}","{gap:8px;&__weekday{width:40px;}}}&__days{display:grid !important;grid-template-columns:repeat(7,minmax(0,1fr));grid-gap:20px 0;justify-items:center;&__day{&.active{color:",";cursor:pointer;}&:not(&.active){pointer-events:none;}&--neighboringMonth{opacity:.5;}}","{grid-gap:8px;&__day{width:40px;height:40px;border-radius:4px;background-color:",";position:relative;&.active{color:inherit;.bar{opacity:1;display:block;position:absolute;left:50%;bottom:8px;border-radius:2px;width:16px;height:2px;background-color:",";transform:translateX(-50%);}}}}}}}"],a.fU.col,r()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg}),a.fU.between,a.iH[14],a.fU.col,a.iH[14],a.Rq.accent,a.fU.col,a.iH[10],a.Rq.accent,a.AV.mobileL,a.O9.blue,a.AV.mobileL,r()("theme",{light:a.R2.highlight,dark:a._4.highlight}),a.O9.blue))},87670:function(e,i,c){c.d(i,{Z:function(){return N}});var t=c(45987),n=c(14161),r=c(28789),a=c(65484),s=c.n(a),d=r.default.div.withConfig({componentId:"sc-ocgsqb-0"})(["height:100%;",";justify-content:space-between;.total{display:flex;gap:40px;margin:-4px 24px 0;position:relative;&_block{font-size:",";.counter{position:absolute;top:0;left:0;}.spacer{opacity:0;}.hidden{display:none;}&--cured .h1{color:",";}&--sick{position:relative;.h1{color:",";}&:before{content:'';height:100%;width:1px;background:",";position:absolute;top:0;left:-20px;}}}","{.total_block{font-size:",";.hidden{display:inline;}}}","{.total_block{font-size:",";}}}"],n.fU.col,n.iH[12],n.O9.azure,n.O9.peach,s()("theme",{light:"#A2C0D4",dark:"#383D40"}),n.AV.tablet,n.iH[14],n.AV.laptop,n.iH[16]),o=c(249),l=c(90004),u=c(20760),p=c(20601),h=c(5749),x=c(64694),k=c(41048),f=c(35667),m=c(47242),g=c(36038),b=c(22426),v=c(40835),j=c(54561),y=c(17350),w=[{cured:314,sick:200},{cured:200,sick:400},{cured:265,sick:120},{cured:156,sick:300},{cured:412,sick:200},{cured:280,sick:500},{cured:251,sick:130},{cured:180,sick:300},{cured:304,sick:150},{cured:505,sick:408},{cured:328,sick:200},{cured:254,sick:90},{cured:301,sick:566},{cured:459,sick:189},{cured:354,sick:480},{cured:264,sick:400},{cured:309,sick:200},{cured:185,sick:500}],_=[{cured:450,sick:250},{cured:150,sick:380},{cured:370,sick:200},{cured:300,sick:180},{cured:500,sick:250},{cured:400,sick:600},{cured:200,sick:300},{cured:400,sick:150},{cured:348,sick:130},{cured:400,sick:280},{cured:200,sick:400},{cured:300,sick:241},{cured:380,sick:480},{cured:200,sick:380},{cured:400,sick:200},{cured:500,sick:250},{cured:400,sick:300},{cured:300,sick:450}],Z=[{cured:200,sick:300},{cured:250,sick:350},{cured:390,sick:240},{cured:450,sick:320},{cured:550,sick:250},{cured:420,sick:200},{cured:368,sick:198},{cured:250,sick:370},{cured:322,sick:200},{cured:450,sick:270},{cured:210,sick:394},{cured:180,sick:270},{cured:380,sick:480},{cured:390,sick:550},{cured:450,sick:210},{cured:470,sick:360},{cured:360,sick:190},{cured:300,sick:250}],C=c(80184),O=["cx","cy","fill"],N=function(e){var i=e.variant,c=(0,r.useTheme)().theme,a=(0,y.Z)().periods,s=(0,j.Z)(a),N=s.index,z=s.navigate,U=[{cured:75.08,sick:45.27},{cured:84.51,sick:33.12},{cured:67.14,sick:48.65}],A=function(){switch(N){default:case 0:return w;case 1:return _;case 2:return Z}}(),L=function(e){var r=e.cx,a=e.cy,s=e.fill,d=(0,t.Z)(e,O),o="both"===i?d.dom===d.dataKey:"cured"===d.dataKey;return(0,C.jsxs)("svg",{width:"10",height:"222",viewBox:"0 0 10 222",x:r,y:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o&&(0,C.jsx)("path",{opacity:"0.5",d:"M5 28.3799V220.38",stroke:"url(#scatter_".concat(d.dataKey,")"),strokeWidth:"2",strokeLinecap:"round"}),(0,C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:s}),(0,C.jsxs)("defs",{children:[(0,C.jsxs)("linearGradient",{id:"scatter_cured",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,C.jsx)("stop",{stopColor:"light"===c?n.R2.widgetBg:n._4.widgetBg}),(0,C.jsx)("stop",{offset:"1",stopColor:n.O9.azure})]}),(0,C.jsxs)("linearGradient",{id:"scatter_sick",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,C.jsx)("stop",{stopColor:"light"===c?n.R2.widgetBg:n._4.widgetBg}),(0,C.jsx)("stop",{offset:"1",stopColor:n.O9.peach})]})]})]})};return(0,C.jsxs)(o.Z,{name:"HealthIndexChart",children:[(0,C.jsx)(l.Z,{sx:{fontSize:22,fontWeight:600},title:"Clinic Growth",handler:z}),(0,C.jsx)(u.Z,{style:{padding:0,overflow:"hidden"},children:(0,C.jsxs)(d,{children:[(0,C.jsxs)("div",{className:"total",children:[(0,C.jsxs)("div",{className:"total_block total_block--cured",children:[(0,C.jsx)("span",{className:"spacer h1",children:U[N].cured}),(0,C.jsx)(v.ZP,{className:"counter h1",end:U[N].cured,duration:2,decimals:2}),(0,C.jsxs)("span",{children:[(0,C.jsx)("span",{className:"hidden",children:"New"})," Patients"]})]}),"both"===i&&(0,C.jsxs)("div",{className:"total_block total_block--sick",children:[(0,C.jsx)("span",{className:"spacer h1",children:U[N].sick}),(0,C.jsx)(v.ZP,{className:"counter h1",end:U[N].sick,duration:2,decimals:2}),(0,C.jsxs)("span",{children:[(0,C.jsx)("span",{className:"hidden",children:"New"})," Certificates"]})]})]}),(0,C.jsx)(p.h,{width:"100%",height:250,children:(0,C.jsxs)(h.G,{margin:!1,data:A,children:["both"===i&&(0,C.jsx)(x.b,{dataKey:"sick",shape:L,children:A.map((function(e,i){return(0,C.jsx)(k.b,{fill:n.O9.peach,dom:e.sick>e.cured?"sick":"cured",dataKey:"sick"},"cell-".concat(i))}))}),(0,C.jsx)(x.b,{dataKey:"cured",shape:L,children:A.map((function(e,i){return(0,C.jsx)(k.b,{fill:n.O9.azure,dom:e.cured>e.sick?"cured":"sick",dataKey:"cured"},"cell-".concat(i))}))}),(0,C.jsx)(f.u,{cursor:!1,content:(0,C.jsx)(b.Z,{right:!0})})]})}),(0,C.jsxs)(m.Z,{overlay:!0,children:[(0,C.jsx)(g.Z,{color:"azure",legend:"New Patients"}),"both"===i&&(0,C.jsx)(g.Z,{color:"peach",legend:"New Certificates"})]})]})})]})}}}]);
//# sourceMappingURL=492.97232832.chunk.js.map