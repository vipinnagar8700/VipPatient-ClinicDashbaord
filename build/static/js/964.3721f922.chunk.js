(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[964],{36038:function(e,t,n){"use strict";var a=n(31843),i=n(85335),s=n(80184);t.Z=function(e){var t=e.color,n=e.legend;return(0,s.jsxs)(a.H,{children:[(0,s.jsx)(i.Lm,{color:t})," ",n]})}},47242:function(e,t,n){"use strict";var a=n(31843),i=n(80184);t.Z=function(e){var t=e.children,n=e.overlay;return(0,i.jsx)(a.a,{overlay:n,children:t})}},31843:function(e,t,n){"use strict";n.d(t,{H:function(){return r},a:function(){return s}});var a=n(28789),i=n(14161),s=a.default.ul.withConfig({componentId:"sc-1b2c687-0"})(["display:flex;flex-wrap:wrap;gap:8px 16px;",""],(function(e){return e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "})),r=a.default.li.withConfig({componentId:"sc-1b2c687-1"})(["display:flex;align-items:center;gap:8px;text-transform:uppercase;font-family:",";font-size:",";"],i.Rq.accent,i.iH[10])},75801:function(e,t,n){"use strict";var a=n(1413),i=n(15822),s=n(52899),r=n(13035),o=n(36862),c=n(6438),l=n(71856),p=n(34909),d=n(72791),u=n(72426),f=n.n(u),h=n(80184);t.Z=function(e){var t=e.variant,n=void 0===t?"doctor":t,u=e.data,m=e.animated,v=void 0!==m&&m,x=u.patient,y=u.doctor,g=u.type,b=u.date,j=u.payment,w=v?l.M:d.Fragment;return(0,h.jsx)(w,{children:(0,h.jsxs)(i.HC,(0,a.Z)((0,a.Z)({variant:n},v?{as:p.E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5}}:{}),{},{children:[(0,h.jsxs)(i.or,{children:[(0,h.jsx)(s.Z,{avatar:"patient"===n?y.avatar:x.avatar,alt:"patient"===n?y.name:x.name}),(0,h.jsxs)("div",{className:"info",children:[(0,h.jsx)(r.Z,{className:"name",text:"patient"===n?"Dr. ".concat(y.name):x.name}),(0,h.jsx)(r.Z,{className:"title",text:g})]}),"patient"!==n&&(0,h.jsx)(o.Z,{shape:"round",label:"Call",icon:"phone"})]}),(0,h.jsxs)(i.$_,{variant:n,children:[(0,h.jsx)("div",{className:"details",children:function(){switch(n){default:case"doctor":return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("span",{className:"details_item",children:[(0,h.jsx)("i",{className:"icon icon-clock"}),(0,h.jsx)("span",{children:f()(b).format("HH:mm")})]}),j&&(0,h.jsxs)("span",{className:"details_item",children:[(0,h.jsx)("i",{className:"icon icon-euro"}),(0,h.jsx)("span",{children:j.toFixed(2)})]})]});case"patient":return(0,h.jsxs)("span",{className:"details_item",children:[(0,h.jsx)("i",{className:"icon icon-clock"}),(0,h.jsx)("span",{children:f()(b).format("dddd, MMMM DD")})]})}}()}),(0,h.jsx)(c.Z,{})]})]}))})}},15822:function(e,t,n){"use strict";n.d(t,{$_:function(){return l},HC:function(){return o},or:function(){return c}});var a=n(28789),i=n(65484),s=n.n(i),r=n(14161),o=a.default.div.withConfig({componentId:"sc-9a2sh4-0"})(["padding-bottom:20px;margin-bottom:20px;&:last-of-type{margin-bottom:0;border-bottom:none;padding-bottom:0;}"]),c=a.default.div.withConfig({componentId:"sc-9a2sh4-1"})(["display:flex;align-items:center;gap:20px;margin-bottom:20px;.info{",";gap:4px;flex-grow:1;.name{font-size:",";}.title{font-weight:500;}}"],r.fU.col,r.iH[14]),l=a.default.div.withConfig({componentId:"sc-9a2sh4-2"})(["display:flex;",";padding-top:18px;border-top:",";.swiper{width:50px;}.details{display:flex;align-items:center;gap:30px;&_item{display:flex;align-items:center;gap:12px;font-size:",";font-weight:",";.icon{color:",";font-size:",";&-euro{font-size:",";}}}}"],r.fU.between,s()("theme",{light:r.Sz.dashedLight,dark:r.Sz.dashedDark}),(function(e){return"patient"===e.variant&&r.iH[14]}),(function(e){return"patient"!==e.variant&&500}),r.O9.gray,r.iH[16],r.iH[14])},47957:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(1413),i=n(45987),s=n(28789),r=n(65484),o=n.n(r),c=n(14161);n(72791);var l=n.p+"static/media/bar_mask.d2273c76110ea4768bc88c9eb034957c.svg",p=s.default.div.withConfig({componentId:"sc-1yzrirf-0"})(["display:flex;justify-content:space-between;gap:20px;overflow-x:auto;margin:20px -24px 0;padding:0 24px;user-select:none;"]),d=s.default.div.withConfig({componentId:"sc-1yzrirf-1"})(["",";align-items:center;gap:20px;font-family:",";font-size:",";text-transform:uppercase;height:fit-content;"," .track{background-color:",";height:228px;width:","px;border-radius:4px;display:flex;flex-direction:column-reverse;gap:","px;}"],c.fU.col,c.Rq.accent,c.iH[10],(function(e){return e.masked&&"\n    &:first-of-type {\n        align-items: flex-start;\n    }\n    \n    &:last-of-type {\n        align-items: flex-end;\n    }\n    \n    .track {\n        mask: url(".concat(l,") no-repeat center center / contain;\n     }\n  ")}),o()("theme",{light:function(e){return e.masked?c.R2.bodyBg:c.R2.highlight},dark:c._4.highlight}),(function(e){return e.masked?4:8}),(function(e){return e.masked?0:8})),u=n(34909),f=n(57770),h=n(80184),m=["data","masked"],v=function(e){var t=e.data,n=e.masked,s=void 0!==n&&n,r=(0,i.Z)(e,m);return(0,h.jsx)(p,(0,a.Z)((0,a.Z)({},r),{},{children:t.map((function(e){return(0,h.jsxs)(d,{masked:s,children:[(0,h.jsx)("div",{className:"track",children:Object.keys(e.values).map((function(t,n){var a=e.values[t],i=f.U.find((function(e){return e.cat===t})).color;return(0,h.jsx)(u.E.span,{style:{backgroundColor:c.O9[i],width:"100%",borderRadius:!s&&4,opacity:0},animate:{height:"".concat(a,"%"),opacity:1},transition:{duration:1,delay:.5,type:"tween",ease:"easeInOut"}},"".concat(e.label,"-").concat(t,"-").concat(n,"-").concat(a))}))}),(0,h.jsx)("span",{children:e.label})]},e.label)}))}))}},92889:function(e,t,n){"use strict";var a=n(36038),i=n(47242),s=n(57770),r=n(80184);t.Z=function(){return(0,r.jsx)(i.Z,{children:s.U.map((function(e){var t=e.cat,n=e.color;return"emergency"===t?null:(0,r.jsx)(a.Z,{legend:t,color:n},t)}))})}},13035:function(e,t,n){"use strict";var a=n(31182),i=n(45942),s=n.n(i),r=n(80184),o=s()()(a.Z);t.Z=function(e){var t=e.className,n=e.text,a=e.lines,i=void 0===a?1:a;return(0,r.jsx)(o,{className:t,text:n,maxLine:i,ellipsis:"...",trimRight:!0,basedOn:"letters"})}},99595:function(e,t,n){"use strict";n.d(t,{_:function(){return k}});var a=n(18949),i=n(67600),s=n(34514),r=n(80462),o=n(75498),c=n(22257),l=n(43783),p=n(61806),d=n(25104),u=n(84776),f=n(57310),h=n(75701),m=n(53122),v=n(47183),x=n(81984),y=n(12264),g=n(96739),b=n(96671),j=n(94244),w=n(37063),k=[{id:"smdIdn",patient:{name:"Corey Aguilar",avatar:{jpg:a,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"Kidney function test",payment:24.5,date:new Date(2022,0,1,9,0),phone:"12456789"},{id:"sdPkoef34",patient:{name:"Max Morales",avatar:{jpg:s,webp:r}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"Emergency appointment",payment:99.95,date:new Date(2022,0,1,9,30),phone:"12456789"},{id:"sdplc5ER",patient:{name:"Linda Adams",avatar:{jpg:l,webp:p}},doctor:{name:"Jessie Paul",avatar:{jpg:x,webp:y}},type:"Complementation test",payment:40.45,date:new Date(2022,0,1,10,30),phone:"12456789"},{id:"ssamcwBER",patient:{name:"Clyde Morales",avatar:{jpg:o,webp:c}},doctor:{name:"Mabel Perkins",avatar:{jpg:j,webp:w}},type:"USG + Consultation",payment:29.9,date:new Date(2022,0,1,11,30),phone:"12456789"},{id:"pnvb6Rtv",patient:{name:"Linda Smith",avatar:{jpg:f,webp:h}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"Emergency appointment",date:new Date(2022,0,1,12,30),phone:"12456789"},{id:"sdsdtu9",patient:{name:"Steeve Madden",avatar:{jpg:d,webp:u}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"USG",payment:19.15,date:new Date(2022,0,1,14,30),phone:"12456789"},{id:"cd7xbwsvGFs",patient:{name:"Corey Aguilar",avatar:{jpg:a,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"Kidney function test",payment:24.5,date:new Date(2022,6,12,9,0),phone:"12456789"},{id:"defbts78a",patient:{name:"Max Morales",avatar:{jpg:s,webp:r}},doctor:{name:"Shawn Hampton",avatar:{jpg:g,webp:b}},type:"Blood test",payment:99.95,date:new Date(2022,8,5,10,30),phone:"12456789"},{id:"smduBshba678",patient:{name:"Marta Bloom",avatar:{jpg:m,webp:v}},doctor:{name:"Jessie Paul",avatar:{jpg:x,webp:y}},type:"ECG",date:new Date(2022,1,12,11,30),phone:"12456789"}]},72120:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var a=n(71508),i=n(249),s=n(66150),r=n(20760),o=n(17707),c=n(19640),l=n(8281),p=n(75801),d=n(30133),u=n(25984),f=n(84483),h=n(72791),m=n(99595),v=n(80184),x=function(){var e=["year","month","week"],t=(0,h.useRef)(null),n=(0,h.useRef)(null),a=(0,f.Z)(t),x=function(){n.current.scrollTop=0};return(0,v.jsx)(i.Z,{name:"PatientAppointmentsHistory",mobile:600,children:(0,v.jsxs)(o.Z.Container,{defaultActiveKey:"year",transition:!0,children:[(0,v.jsx)(s.Z,{title:"Previous appointments",elRef:t,children:(0,v.jsx)(c.Z,{children:e.map((function(e){return(0,v.jsx)(l.Z,{eventKey:e,title:e,handler:x},(0,u.x0)(5))}))})}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(d.Z,{height:a,children:(0,v.jsx)("div",{className:"track",ref:n,children:(0,v.jsx)(o.Z.Content,{children:e.map((function(e){return(0,v.jsx)(o.Z.Pane,{eventKey:e,children:m._.map((function(e){return(0,v.jsx)(p.Z,{data:e,variant:"patient"},e.id)}))},(0,u.x0)(5))}))})})})})]})})},y=n(92889),g=n(47957),b=function(){return(0,v.jsxs)(i.Z,{name:"PatientOverallAppointments",shadow:!0,children:[(0,v.jsx)(s.Z,{title:"Overall appointments",flex:"column",style:{paddingBottom:8},children:(0,v.jsx)(y.Z,{})}),(0,v.jsx)(r.Z,{style:{justifyContent:"flex-end"},children:(0,v.jsx)(g.Z,{data:[{label:"Jan",values:{consultation:30,sick:10,test:50}},{label:"Feb",values:{checkup:10,sick:30}},{label:"Mar",values:{consultation:20}},{label:"Apr",values:{checkup:10,emergency:20}},{label:"May",values:{emergency:10,test:30}},{label:"Jun",values:{test:10}},{label:"Jul",values:{consultation:30,test:40}},{label:"Aug",values:{checkup:10}},{label:"Sep",values:{consultation:20}},{label:"Oct",values:{test:50,consultation:70}},{label:"Nov",values:{consultation:20}},{label:"Dec",values:{checkup:10,emergency:30}}],masked:!0})})]})},j=n(96027),w=n(11145),k=n(33479),Z=n(83255),C=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k.Z,{}),(0,v.jsx)(Z.Z,{}),(0,v.jsxs)(a.Z,{title:"Basic Patient Dashboard",children:[(0,v.jsx)("div",{children:(0,v.jsx)(x,{})},"patient-app-history"),(0,v.jsx)("div",{children:(0,v.jsx)(b,{})},"patient-overall-appointments"),(0,v.jsx)("div",{children:(0,v.jsx)(j.Z,{})},"radar"),(0,v.jsx)("div",{children:(0,v.jsx)(w.Z,{variant:"basic"})},"diagnoses-donut")]})]})}},16945:function(e,t,n){"use strict";function a(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function i(e){return e<10?"0"+e:e}n.d(t,{t:function(){return a},v:function(){return i}})},45942:function(e,t,n){var a=n(72791),i=n(48573);function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=s(a),o=s(i);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}var p=["innerRef"],d="undefined"!==typeof window;e.exports=function(e,t){return void 0===e&&(e=150),function(n){var a=function(a){var i,s;function u(n){var i;return(i=a.call(this,n)||this).state={winWidth:d?window.innerWidth:0},i.onResize=o.default(i.onResize.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i)),e,t),i}s=a,(i=u).prototype=Object.create(s.prototype),i.prototype.constructor=i,l(i,s);var f=u.prototype;return f.componentDidMount=function(){window.addEventListener("resize",this.onResize)},f.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.onResize.cancel()},f.onResize=function(){this.setState({winWidth:window.innerWidth})},f.render=function(){var e=this.props,t=e.innerRef,a=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,p);return r.default.createElement(n,c({ref:t},a,this.state))},u}(r.default.Component);return a.displayName="Responsive("+(n.displayName||n.name)+")",a.defaultProps={innerRef:function(){}},a}}},31182:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(15671),i=n(43144),s=n(11752),r=n(61120),o=n(60136),c=n(29388),l=n(72791);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var d={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},u=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];var f=["component","ellipsis","trimRight","className"];function h(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}var m={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow:function(){},text:"",trimRight:!0,winWidth:void 0},v=Object.keys(m),x=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).state={text:e.text,clamped:!1},i.units=[],i.maxLine=0,i.canvas=null,i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas),this.canvas=null}},{key:"setState",value:function(e,t){return"undefined"!==typeof e.clamped&&(this.clamped=e.clamped),(0,s.Z)((0,r.Z)(n.prototype),"setState",this).call(this,e,t)}},{key:"initCanvas",value:function(){if(!this.canvas){var e=this.canvas=document.createElement("div");e.className="LinesEllipsis-canvas ".concat(this.props.className),e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(d).forEach((function(t){e.style[t]=d[t]})),document.body.appendChild(e)}}},{key:"copyStyleToCanvas",value:function(){var e=this,t=window.getComputedStyle(this.target);u.forEach((function(n){e.canvas.style[n]=t[n]}))}},{key:"reflow",value:function(e){var t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error("Unsupported options basedOn: ".concat(t))}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((function(e){return"<span class='LinesEllipsis-unit'>".concat(e,"</span>")})).join("");var n=this.putEllipsis(this.calcIndexes()),a=n>-1,i={clamped:a,text:a?this.units.slice(0,n).join(""):e.text};this.setState(i,e.onReflow.bind(this,i))}},{key:"calcIndexes",value:function(){var e=[0],t=this.canvas.firstElementChild;if(!t)return e;for(var n=0,a=1,i=t.offsetTop;(t=t.nextElementSibling)&&(t.offsetTop>i&&(a++,e.push(n),i=t.offsetTop),n++,!(a>this.maxLine)););return e}},{key:"putEllipsis",value:function(e){if(e.length<=this.maxLine)return-1;var t=e[this.maxLine],n=this.units.slice(0,t),a=this.canvas.children[t].offsetTop;this.canvas.innerHTML=n.map((function(e,t){return"<span class='LinesEllipsis-unit'>".concat(e,"</span>")})).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>".concat(this.props.ellipsis,"</span>");for(var i=this.canvas.lastElementChild,s=h(i,2);s&&(i.offsetTop>a||i.offsetHeight>s.offsetHeight||i.offsetTop>s.offsetTop);)this.canvas.removeChild(s),s=h(i,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var e=this,t=this.state,n=t.text,a=t.clamped,i=this.props,s=i.component,r=i.ellipsis,o=i.trimRight,c=i.className,d=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(i,f);return l.createElement(s,p({className:"LinesEllipsis ".concat(a?"LinesEllipsis--clamped":""," ").concat(c),ref:function(t){return e.target=t}},function(e,t){if(!e||"object"!==typeof e)return e;var n={};return Object.keys(e).forEach((function(a){t.indexOf(a)>-1||(n[a]=e[a])})),n}(d,v)),a&&o?n.replace(/[\s\uFEFF\xA0]+$/,""):n,l.createElement("wbr",null),a&&l.createElement("span",{className:"LinesEllipsis-ellipsis"},r))}}]),n}(l.Component);x.defaultProps=m}}]);
//# sourceMappingURL=964.3721f922.chunk.js.map