"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[433],{67433:function(e,t,a){a.d(t,{Z:function(){return $}});var n=a(1413),o=a(29439),r=(a(45852),a(38052)),d=a(62014),s=a(54420),i=a(59086),l=a(72791),u=a(72426),c=a.n(u),h=a(16945),p=a(80184),m=function(e,t,a,o){var r=c()()-c()(e.value),d=r/6e4>0&&r/6e4<t,s=(new Date).getHours(),i=(new Date).getMinutes(),u=s+":"+(0,h.v)(i),m={};return d&&o&&(m.className="current-time",m.children=(0,p.jsx)("span",{className:"time-indicator",style:{top:"".concat(100/t*function(){var t,a=e.value.getMinutes();switch(a){default:case 0:t=a+i;break;case 30:t=Math.abs(a-i)}return t}(),"%")},children:(0,p.jsx)("span",{className:"label",children:u})})),(0,l.cloneElement)(e.children,(0,n.Z)({style:(0,n.Z)({},{}),"data-time":c()(e.value).format("HH:mm")},m))},f=function(e){var t=e.label;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("h2",{children:t})})},y=a(57293),v=a(13902),g=function(e){var t,a=e.date,n=e.setter,o=c()(a).week(),r=c()().week(),d=c()(a).startOf("year").week(),s=c()(a).endOf("year").week();return t=r===o?"This week":r+1===o?"Next week":r-1===o?"Last week":"Week "+o,(0,p.jsx)(v.Z,{handler:function(e){"prev"===e.currentTarget.dataset.direction?n(c()(a).subtract(1,"week").startOf("week").toDate()):n(c()(a).add(1,"week").startOf("week").toDate())},text:t,prevDisabled:o===d,nextDisabled:o===s})},D=a(72132),x=a(17711),b=function(e){var t=e.date,a=e.setter,n=(0,x.Uo)().map((function(e,t){return{value:t,label:"".concat(e.startLong," - ").concat(e.endLong)}})),r=(0,l.useState)(n[c()(t).week()-1]),d=(0,o.Z)(r,2),s=d[0],i=d[1];return(0,p.jsx)(D.Z,{variant:"basic",options:n,value:s,changeHandler:function(e){i(e),a(c()(t).week(e.value+1).startOf("week").toDate())}})},w=function(e){var t,a=e.date,n=e.setter,o=c()(a).month(),r=c()().month();return t=r===o?"This month":r+1===o?"Next month":r-1===o?"Last month":"".concat(c()(a).format("MMMM")),(0,p.jsx)(v.Z,{handler:function(e){"prev"===e.currentTarget.dataset.direction?n(c()(a).subtract(1,"month").toDate()):n(c()(a).add(1,"month").toDate())},text:t,prevDisabled:0===o,nextDisabled:11===o})},j=function(e){var t=e.date,a=e.setter,n=(0,x.Gn)().map((function(e){return{value:e.month,label:e.formatted}})),r=(0,l.useState)(n[c()(t).month()]),d=(0,o.Z)(r,2),s=d[0],i=d[1];return(0,p.jsx)(D.Z,{variant:"basic",options:n,value:s,changeHandler:function(e){i(e);var n=c()(e.value).month();a(c()(t).set({month:n,date:1}))}})},Z=a(47242),k=a(36038),S=a(28789),A=a(14161),M=a(65484),C=a.n(M);var R=a.p+"static/media/dashed.e8807695deb0ac9b5486cdad4debfd42.svg";var H=a.p+"static/media/dashed_dark.5b0662d7b0c867bc981bdd45e49eba46.svg",T=C()("theme",{light:"#fff",dark:"#2a2f32"}),F=S.default.div.withConfig({componentId:"sc-1i2cz8b-0"})(["position:absolute;background:",";box-shadow:0 1px 16px rgba(20,46,110,0.4);border-radius:8px;padding:20px;top:calc(50% + ","px - 40px);left:50%;transform:translate(-50%,calc(-50% - ","px));width:260px;transition:opacity var(--transition);opacity:0;visibility:hidden;margin-left:32px;","{margin-left:42px;top:calc(50% + ","px - 60px);}&.visible{opacity:1;visibility:visible;}.header{display:flex;",";gap:20px;.user .user-option{display:flex;align-items:center;gap:20px;span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;}}}.main{height:80px;background:",";position:relative;padding-top:25px;",";gap:6px;&:before,&:after{content:'';position:absolute;left:0;width:100%;height:20px;background:",";}&:before{top:0;transform:rotate(180deg);}&:after{bottom:0;}.track{height:8px;position:relative;border-radius:4px;background-color:",";span{position:absolute;height:8px;border-radius:4px;background-color:",";top:0;&:first-of-type{width:20%;left:0;}&:last-of-type{width:15%;right:10%;}}}.hours{display:flex;",";margin:0 -10px;span{width:16px;height:20px;border-radius:8px;background:",";font-size:",";font-family:",";display:flex;",";}}}","{width:374px;.header{.user .user-option span{max-width:200px;}}}"],T,(function(e){return e.top}),(function(e){return e.top/2}),A.AV.tablet,(function(e){return e.top}),A.fU.between,C()("theme",{light:"url(".concat(R,")"),dark:"url(".concat(H,")")}),A.fU.col,C()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 100%)",dark:"linear-gradient(180deg, rgba(42, 47, 50, 0.5) 0%, #2a2f32 100%)"}),C()("theme",{light:A.R2.bodyBg,dark:A.R2.text}),A.O9.blue,A.fU.between,T,A.iH[10],A.Rq.accent,A.fU.center,A.AV.tablet),N=(a(36862),a(21119),a(35498)),E=a(20890),z=a(94925),I=a(79431),_=a(36314),O=a(63027),W=a(59434),q=a(88329),P=a(96322),V=a(84483),B=a(61316),U=function(e){e.name;var t=e.open,a=e.handler,r=e.elemsHeight,d=(0,l.useState)(""),s=(0,o.Z)(d,2),i=s[0],u=s[1],c=(0,l.useState)(""),h=(0,o.Z)(c,2),m=h[0],f=h[1],y=(0,l.useState)(""),v=(0,o.Z)(y,2),g=v[0],D=v[1],x=(0,l.useState)(""),b=(0,o.Z)(x,2),w=b[0],j=b[1],Z=(0,l.useState)(""),k=(0,o.Z)(Z,2),S=k[0],A=k[1],M=(0,l.useState)({name:"Pending"}),C=(0,o.Z)(M,2),R=C[0],H=C[1],T=((0,W.v9)((function(e){return e.todos.todos})),(0,l.useState)(!1)),U=(0,o.Z)(T,2),G=(U[0],U[1],(0,l.useState)([])),L=(0,o.Z)(G,2),K=(L[0],L[1],(0,l.useState)(0)),X=(0,o.Z)(K,2),J=X[0],$=(X[1],(0,l.useState)(!1)),Q=(0,o.Z)($,2),Y=Q[0],ee=Q[1],te=(0,l.useState)(!1),ae=(0,o.Z)(te,2),ne=(ae[0],ae[1],(0,l.useState)(!1)),oe=(0,o.Z)(ne,2),re=(oe[0],oe[1],(0,l.useRef)(null)),de=(0,l.useRef)(null),se=((0,l.useRef)(null),(0,V.Z)(re,de),localStorage.getItem("provider")),ie=JSON.parse(se);console.log(ie,"AL Data AAAAAAAAAAAAAAAAAAAAA");ie.id,ie.company_id;var le=(0,l.useState)(""),ue=(0,o.Z)(le,2),ce=(ue[0],ue[1],(0,l.useState)(null)),he=(0,o.Z)(ce,2);he[0],he[1],(0,W.I0)(),Date.now();(0,l.useEffect)((function(){pe()}),[J]);var pe=function(){var e=(0,B.qM)();e&&e.then((function(e){console.log(e.result),ee(e.result)}))},me=(0,l.useState)(null),fe=(0,o.Z)(me,2),ye=(fe[0],fe[1],(0,l.useState)(!1)),ve=(0,o.Z)(ye,2);ve[0],ve[1];return(0,p.jsx)(N.Z,{isVisible:t,visibilityHandler:a,children:(0,p.jsx)(F,{className:t?"visible":"",top:r,children:(0,p.jsxs)(O.Z,{onSubmit:function(e){var t=q.Z.get("clinic");console.log(t,"This Is token for all Api's"),e.preventDefault();var a=new Headers;a.append("Accept","application/json"),a.append("Authorization","Bearer ".concat(t));var n=new FormData;n.append("id","70"),n.append("type_id",i),n.append("start_date",m),n.append("end_date",m),n.append("note",w),n.append("appointment_color",S),n.append("status",R.name);var o={method:"POST",headers:a,body:n,redirect:"follow"};return fetch("".concat(P.Z,"/api/update_appointment_inprovider"),o).then((function(e){return e.json()})).then((function(e){console.log(e,"anjkhgdchjm"),alert(e.messege),window.reload()})).catch((function(e){return console.log(e)}))},children:[(0,p.jsx)(E.Z,{children:"Patient Nagar"}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Select Status"}),(0,p.jsxs)("select",{style:{width:"100%",padding:10},onChange:function(e){H((0,n.Z)((0,n.Z)({},R),{},{name:e.target.value}))},labelId:"dropdown-label",fullWidth:!0,size:"small",required:!0,children:[(0,p.jsx)("option",{value:"pending",children:"pending"}),(0,p.jsx)("option",{value:"seen",children:"seen"}),(0,p.jsx)("option",{value:"cancel",children:"cancel"}),(0,p.jsx)("option",{value:"not-show",children:"not-show"})]}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Type"}),(0,p.jsx)("select",{style:{width:"100%",padding:10},labelId:"dropdown-label",fullWidth:!0,size:"small",value:i,onChange:function(e){return u(e.target.value)},required:!0,children:Y&&(null===Y||void 0===Y?void 0:Y.map((function(e){return(0,p.jsxs)("option",{value:e.id,children:[e.name,e.length]})})))}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Appointment Date/Time"}),(0,p.jsx)(I.Z,{value:m,onChange:function(e){return f(e.target.value)},required:!0,type:"datetime-local",placeholder:"Select Start Date",fullWidth:!0,size:"small"}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Appointment End Date/Time"}),(0,p.jsx)(I.Z,{value:g,onChange:function(e){return D(e.target.value)},required:!0,type:"datetime-local",placeholder:"Select End Date",fullWidth:!0,size:"small"}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Notes"}),(0,p.jsx)(I.Z,{size:"small",value:w,onChange:function(e){return j(e.target.value)},fullWidth:!0,required:!0}),(0,p.jsx)(z.Z,{sx:{margin:1},children:"Appointment Color"}),(0,p.jsx)(I.Z,{size:"small",value:S,onChange:function(e){return A(e.target.value)},fullWidth:!0,required:!0,type:"color",placeholder:"#RRGGBB"}),(0,p.jsxs)(_.Z,{direction:"row",sx:{justifyContent:"space-between",gap:5,marginTop:"20px"},gap:4,mt:2,children:[(0,p.jsx)("button",{style:{backgroundColor:"red",padding:10,color:"white",borderRadius:3},onClick:function(){return window.location.reload()},children:"Cancel"}),(0,p.jsx)("button",{style:{marginLeft:"20px",backgroundColor:"green",padding:10,color:"white",borderRadius:3},type:"submit",children:"Save Change"})]})]})})})},G=a(57770),L=a(22172),K=a(94397),X=[{start:c()().set({hour:12,minute:30,second:0}).toDate(),end:c()().set({hour:13,minute:0,second:0}).toDate(),type:"disabled"},{start:c()().add(1,"day").set({hour:10,minute:0,second:0}).toDate(),end:c()().add(1,"day").set({hour:10,minute:30,second:0}).toDate(),type:"disabled"},{start:c()().add(1,"day").set({hour:14,minute:0,second:0}).toDate(),end:c()().add(1,"day").set({hour:14,minute:30,second:0}).toDate(),type:"disabled"},{start:c()().add(2,"day").set({hour:9,minute:30,second:0}).toDate(),end:c()().add(2,"day").set({hour:10,minute:0,second:0}).toDate(),type:"disabled"},{start:c()().add(2,"day").set({hour:12,minute:30,second:0}).toDate(),end:c()().add(2,"day").set({hour:13,minute:0,second:0}).toDate(),type:"disabled"},{start:c()().add(4,"day").set({hour:14,minute:30,second:0}).toDate(),end:c()().add(4,"day").set({hour:15,minute:30,second:0}).toDate(),type:"disabled"}],J={doctor:[{name:"MRI",start:c()().set({hour:9,minute:30,second:0}).toDate(),end:c()().set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Runny nose",start:c()().set({hour:10,minute:30,second:0}).toDate(),end:c()().set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Keeping pregnant",start:c()().set({hour:11,minute:30,second:0}).toDate(),end:c()().set({hour:12,minute:0,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Ultrasound diagnostics",start:c()().set({hour:13,minute:30,second:0}).toDate(),end:c()().set({hour:14,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"EEG",start:c()().set({hour:15,minute:0,second:0}).toDate(),end:c()().set({hour:15,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"Routine checkup",start:c()().set({hour:15,minute:30,second:0}).toDate(),end:c()().set({hour:16,minute:0,second:0}).toDate(),allDay:!1,type:"checkup"},{name:"Blood test",start:c()().add(1,"day").set({hour:9,minute:30,second:0}).toDate(),end:c()().add(1,"day").set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Family appointment",start:c()().add(1,"day").set({hour:10,minute:30,second:0}).toDate(),end:c()().add(1,"day").set({hour:11,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Heartache",start:c()().add(1,"day").set({hour:12,minute:0,second:0}).toDate(),end:c()().add(1,"day").set({hour:12,minute:30,second:0}).toDate(),allDay:!1,type:"emergency"},{name:"First visit",start:c()().add(1,"day").set({hour:13,minute:0,second:0}).toDate(),end:c()().add(1,"day").set({hour:13,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Gastritis",start:c()().add(2,"day").set({hour:10,minute:0,second:0}).toDate(),end:c()().add(2,"day").set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Cardio checkup",start:c()().add(2,"day").set({hour:11,minute:30,second:0}).toDate(),end:c()().add(2,"day").set({hour:12,minute:0,second:0}).toDate(),allDay:!1,type:"checkup"},{name:"Stomachache",start:c()().add(2,"day").set({hour:14,minute:30,second:0}).toDate(),end:c()().add(2,"day").set({hour:15,minute:0,second:0}).toDate(),allDay:!1,type:"emergency"},{name:"MRI",start:c()().add(2,"day").set({hour:16,minute:0,second:0}).toDate(),end:c()().add(2,"day").set({hour:16,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"MRI",start:c()().add(4,"day").set({hour:9,minute:30,second:0}).toDate(),end:c()().add(4,"day").set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Family appointment",start:c()().add(4,"day").set({hour:10,minute:0,second:0}).toDate(),end:c()().add(4,"day").set({hour:10,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Keeping pregnant",start:c()().add(4,"day").set({hour:11,minute:0,second:0}).toDate(),end:c()().add(4,"day").set({hour:11,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Runny nose",start:c()().add(4,"day").set({hour:14,minute:0,second:0}).toDate(),end:c()().add(4,"day").set({hour:14,minute:30,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Heartache",start:c()().add(4,"day").set({hour:15,minute:30,second:0}).toDate(),end:c()().add(4,"day").set({hour:16,minute:0,second:0}).toDate(),allDay:!1,type:"emergency"}],patient:{general:[{name:"Bone Density Scan",start:c()().set({hour:10,minute:0,second:0}).toDate(),end:c()().set({hour:10,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"Surgeon consultation",start:c()().set({hour:10,minute:30,second:0}).toDate(),end:c()().set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Calcium Blood Test",start:c()().add(1,"day").set({hour:13,minute:30,second:0}).toDate(),end:c()().add(1,"day").set({hour:14,minute:0,second:0}).toDate(),allDay:!1,type:"test"}],disabled:X}},$=function(e){var t=e.viewChangeHandler,a=e.current,u=e.type,h=(0,K.Z)().width,v=(0,s.Zt)(c()),D=(0,l.useRef)(null),x=(0,l.useRef)(null),S=(0,l.useState)(0),A=(0,o.Z)(S,2),M=A[0],C=A[1];(0,l.useEffect)((function(){C(x.current.offsetHeight+D.current.offsetHeight)}),[x,D]);var R=(0,L.tV)(),H=(0,l.useState)(R[0]),T=(0,o.Z)(H,2),F=T[0],N=(T[1],(0,l.useState)(!1)),E=(0,o.Z)(N,2),z=E[0],I=E[1],_=(0,l.useState)(!1),O=(0,o.Z)(_,2),W=(O[0],O[1]);(0,l.useEffect)((function(){var e=(0,B.eD)();e&&e.then((function(e){console.log(e,"App ShedulerA"),W(null===e||void 0===e?void 0:e.result,"App ShedulerA")}))}),[]);var q=(0,l.useState)(c()().toDate()),P=(0,o.Z)(q,2),V=P[0],$=P[1],Q=["month","week","day"],Y=function(){return(0,p.jsx)(d.W2,{className:"tabs",children:Q.map((function(e){return(0,p.jsx)(d.ck,{children:(0,p.jsx)(d.zx,{className:a===e?"active":null,onClick:function(){return t(e)},children:e})},e)}))})},ee=function(e,t){switch(e){case"NEXT":$(c()(V).add(1,"day").toDate());break;case"PREV":$(c()(V).subtract(1,"day").toDate());break;default:$(t)}},te={as:s.f,localizer:v,startAccessor:"start",endAccessor:"end",views:Q,view:a,date:V,onView:t,onNavigate:ee,onDrillDown:function(e){return function(e){$(e),t("day")}(e)},events:"doctor"===u?J.doctor:"day"===a?J.patient.general:J.patient.disabled,backgroundEvents:"doctor"===u?X:[],min:c()().startOf("year").set({hour:9,minute:30}).toDate(),max:c()().endOf("year").set({hour:16,minute:30}).toDate(),timeslots:1,step:30,formats:{dayHeaderFormat:h<414?"dddd, MMM DD":"dddd, MMMM DD",dayFormat:function(){switch(!0){case h<768:return"D";case h<1600:return"ddd, D";default:return"dddd D MMMM"}}(),timeGutterFormat:"HH:mm"},components:{toolbar:function(e){var t=e.label,n=e.date;return(0,p.jsxs)(r.h4,{ref:x,view:a,children:["day"===a&&(0,p.jsx)(f,{label:"doctor"===u?t:"Daily appointments scheduler"}),(0,p.jsx)(Y,{}),"day"===a&&(0,p.jsx)(y.Z,{onNavigate:ee,date:n,label:t}),"week"===a&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{date:n,setter:$}),(0,p.jsx)(g,{date:n,setter:$})]}),"month"===a&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{date:n,setter:$}),(0,p.jsx)(w,{date:n,setter:$})]})]})},event:function(e){var t=e.event;return(0,p.jsx)(i.Z,{event:t,variant:a})},timeSlotWrapper:function(e){return m(e,30,1,!0)}},className:"calendar-".concat(a," calendar-").concat(u),messages:{showMore:function(e){return"+ ".concat(e)}},popup:!0,selectable:"patient"===u&&"day"!==a,onSelectSlot:"patient"===u&&"day"!==a&&function(){return I(!0)}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.W2,{children:[(0,p.jsx)(r.SS,(0,n.Z)({},te)),"patient"===u&&"day"!==a&&(0,p.jsx)(U,{elemsHeight:M,name:F.label||null,open:z,handler:I})]}),(0,p.jsx)(r.$_,{ref:D,children:(0,p.jsx)(Z.Z,{children:G.U.map((function(e){var t=e.cat,a=e.color,n=e.label;return(0,p.jsx)(k.Z,{color:a,legend:n},t)}))})})]})}},22172:function(e,t,a){a.d(t,{b_:function(){return d},i7:function(){return i},oF:function(){return s},tV:function(){return l}});var n=a(96576),o=a(52899),r=a(80184),d=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],s=[{value:"all",label:"All Departments"},{value:"family",label:"Family Doctors"},{value:"therapy",label:"Therapists"},{value:"dent",label:"Dentists"},{value:"cardio",label:"Cardiologists"}],i=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],l=function(){var e=[];return n.q.forEach((function(t){e.push({value:t.id,label:(0,r.jsxs)("div",{className:"user-option",children:[(0,r.jsx)(o.Z,{avatar:t.avatar,alt:t.name,size:40}),(0,r.jsx)("span",{children:t.name})]})})})),e}},16945:function(e,t,a){function n(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function o(e){return e<10?"0"+e:e}a.d(t,{t:function(){return n},v:function(){return o}})}}]);
//# sourceMappingURL=433.67d5c85d.chunk.js.map