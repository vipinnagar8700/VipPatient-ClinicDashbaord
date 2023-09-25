"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[679],{14028:function(e,a,t){var n=t(28789),r=t(65484),l=t.n(r),i=t(14161),o=t(94397),s=t(80184),c=n.default.form.withConfig({componentId:"sc-16z6cbi-0"})(["height:40px;margin:0 24px;border-radius:8px;padding:0 22px;background-color:",";display:flex;flex-grow:1;align-items:center;","{height:60px;margin:0 2px;}label{font-size:",";margin-right:24px;color:",";}input{width:100%;font-size:",";font-family:",";&::placeholder{color:",';}}button[type="reset"]{opacity:0;transition:opacity var(--transition);&.visible{opacity:1;}}'],l()("theme",{light:i.R2.bodyBg,dark:i._4.bodyBg}),i.AV.tablet,i.iH[12],i.O9.gray,i.iH[16],i.Rq.accent,i.R2.text);a.Z=function(e){var a=e.placeholder,t=e.handler,n=e.value,r=(0,o.Z)().width<767.98;return(0,s.jsxs)(c,{action:"#",method:"get",children:[(0,s.jsx)("label",{className:"search_bar-label",htmlFor:"widgetSearch",children:(0,s.jsx)("i",{className:"icon icon-search"})}),(0,s.jsx)("input",{type:"search",id:"widgetSearch",value:n,placeholder:r?"Search":a,onChange:function(e){return t(e.target.value)}}),(0,s.jsx)("button",{className:""!==n?"visible":"",type:"reset",onClick:function(){return t("")},children:(0,s.jsx)("i",{className:"icon icon-close"})})]})}},6378:function(e,a,t){var n=t(62014),r=t(25984),l=t(80184),i=function(e){var a=e.state,t=e.filter,r=e.handler,i=a.value===t.value;return(0,l.jsx)(n.zx,{className:i?"active":"",onClick:function(){return r({value:t.value,label:t.label})},children:t.label})};a.Z=function(e){var a=e.state,t=e.handler;return(0,l.jsx)(n.W2,{as:"ul",className:"gender",children:[{value:"all",label:"all"},{value:"male",label:"Men"},{value:"female",label:"Women"}].map((function(e){return(0,l.jsx)(n.ck,{children:(0,l.jsx)(i,{state:a,filter:e,handler:t})},(0,r.x0)(3))}))})}},48611:function(e,a,t){var n=t(28789),r=t(14161),l=t(60169),i=t(80184),o=n.default.ul.withConfig({componentId:"sc-xjmjes-0"})(["",";gap:20px;margin:20px;"],r.fU.col);a.Z=function(e){var a=e.arr,t=e.type,n=e.gender,r=e.deps,s=r||{search:"",category:""},c=s.search,d=s.category;return(0,i.jsx)(o,{children:a.map((function(e,a){return(0,i.jsx)(l.Z,{data:e,type:t},"".concat(e.id,"-").concat(n,"-").concat(c,"-").concat(d))}))})}},22172:function(e,a,t){t.d(a,{b_:function(){return i},i7:function(){return s},oF:function(){return o},tV:function(){return c}});var n=t(96576),r=t(52899),l=t(80184),i=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All Departments"},{value:"family",label:"Family Doctors"},{value:"therapy",label:"Therapists"},{value:"dent",label:"Dentists"},{value:"cardio",label:"Cardiologists"}],s=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],c=function(){var e=[];return n.q.forEach((function(a){e.push({value:a.id,label:(0,l.jsxs)("div",{className:"user-option",children:[(0,l.jsx)(r.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,l.jsx)("span",{children:a.name})]})})})),e}},84628:function(e,a,t){var n=t(29439),r=t(72791);a.Z=function(e){var a=(0,r.useState)({value:"all",label:"all"}),t=(0,n.Z)(a,2);return{genderArr:function(a){return e.filter((function(e){return e.gender===a.value}))},gender:t[0],setGender:t[1]}}},15679:function(e,a,t){t.r(a);var n=t(71508),r=t(56092),l=t(80184);a.default=function(){return(0,l.jsx)(n.Z,{title:"Medical staff",children:(0,l.jsx)(r.Z,{variant:"staff"})})}},56092:function(e,a,t){t.d(a,{Z:function(){return B}});var n=t(29439),r=t(28789),l=t(14161),i=t(51899),o=t(249),s=t(20760),c=t(72132),d=t(6378),u=t(14028),p=t(93433),m=t(45987),f=t(87025),v=t(48611),b=t(22172),g=t(80184),h=["arr","variant"];function x(e){var a=e.arr,t=e.variant,n=(0,m.Z)(e,h),r=(0,p.Z)(new Set(a.flatMap((function(e){return e.department.map((function(e){return e.id}))})))),l=function(e){return a.filter((function(a){return a.department.some((function(a){return a.id===e}))}))};return(0,g.jsx)(g.Fragment,{children:r.map((function(e){var a=b.oF.find((function(a){return a.value===e})).label;return(0,g.jsxs)("div",{children:[(0,g.jsx)(f.Z,{text:a}),(0,g.jsx)(v.Z,{arr:l(e),type:t,gender:n.gender,deps:n.deps})]},e)}))})}var j=t(25277),w=t(72791),y=t(84628),N=t(25984),Z=t(81984),C=t(12264),k=t(96739),S=t(96671),F=t(94244),L=t(37063),D=t(40649),M=t(65539),I=t(79964),T=t(47974),z=t(28997),A=t(67160),P=t(65777),R=t(66507),V=[{id:(0,N.x0)(7),firstName:"Eva",lastName:"Graves",gender:"female",avatar:{jpg:Z,webp:C},rating:4,booked:80,department:[{id:"family",label:"Family practice doctor"}],online:!0},{id:(0,N.x0)(7),firstName:"Martha",lastName:"Simmons",gender:"female",avatar:{jpg:F,webp:L},rating:2,booked:20,department:[{id:"family",label:"Family practice doctor"},{id:"therapy",label:"Therapist"}]},{id:(0,N.x0)(7),firstName:"Lucas",lastName:"Cane",gender:"male",avatar:{jpg:k,webp:S},rating:4.85,booked:71,department:[{id:"dent",label:"Dentist"}],online:!0},{id:(0,N.x0)(7),firstName:"John",lastName:"Williams",gender:"male",avatar:{jpg:D,webp:M},rating:4.14,booked:50,department:[{id:"dent",label:"Dentist"}]},{id:(0,N.x0)(7),firstName:"Lisa",lastName:"Mabel",gender:"female",avatar:{jpg:z,webp:A},rating:3.25,booked:20,department:[{id:"dent",label:"Dentist"}],online:!0},{id:(0,N.x0)(7),firstName:"Hannah",lastName:"Blue",gender:"female",avatar:{jpg:I,webp:T},rating:4.11,booked:38,department:[{id:"dent",label:"Dentist"}]},{id:(0,N.x0)(7),firstName:"Shaun",lastName:"Simmons",gender:"male",avatar:{jpg:P,webp:R},rating:5,booked:55,department:[{id:"cardio",label:"Cardiologist"},{id:"family",label:"Family practice doctor"}]}],_=(0,r.default)(i.h4).withConfig({componentId:"sc-1c4tlpq-0"})(["padding:24px 0 20px;.wrapper{padding:0 24px;",";gap:20px;}.wrapper,form{flex-grow:1;width:100%;}","{.wrapper{flex-direction:row;",";.gender{width:300px;}}}"],l.fU.col,l.AV.tablet,l.fU.between),B=function(e){var a=e.variant,t=(0,w.useState)(b.oF[0]),r=(0,n.Z)(t,2),l=r[0],i=r[1],p=(0,w.useState)(""),m=(0,n.Z)(p,2),f=m[0],v=m[1],h=(0,y.Z)(),N=h.gender,Z=h.setGender,C=V.filter((function(e){var a="".concat(e.firstName," ").concat(e.lastName),t=e.department.map((function(e){return e.label})).join(" "),n=e.department.map((function(e){return e.id})).join(" "),r=a.toLowerCase().includes(f.toLowerCase())||t.toLowerCase().includes(f.toLowerCase()),i="all"===l.value||n.toLowerCase().includes(l.value.toLowerCase()),o="all"===N.value||e.gender===N.value;return r&&i&&o}));return(0,g.jsxs)(o.Z,{name:"DoctorsList",children:[(0,g.jsxs)(_,{children:[(0,g.jsxs)("div",{className:"wrapper",children:[(0,g.jsx)(c.Z,{options:b.oF,variant:"minimal",value:l,changeHandler:i}),(0,g.jsx)(d.Z,{state:N,handler:Z})]}),(0,g.jsx)(u.Z,{placeholder:"Search a doctor or medical department",handler:v,value:f})]}),(0,g.jsx)(s.Z,{style:{padding:0},children:0!==C.length?(0,g.jsx)(x,{arr:C,variant:a,gender:N.value,deps:{category:l.value,search:f}}):(0,g.jsx)(j.Z,{})})]})}}}]);
//# sourceMappingURL=679.236ea4df.chunk.js.map