(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{142:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(0),c=a.n(n),o=a(21),i=a.n(o),s=a(14),l=(a(142),Object(n.createContext)()),d=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(r.jsx)(l.Provider,{value:Object(n.useReducer)(t,a),children:c})},u=function(){return Object(n.useContext)(l)},h=a(227),j=a(458),b=a(459),m=a(441),f=a(461),O=a(411),p=a(444),x=a(445),y=Object(m.a)((function(e){return{nav:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"1.2rem 2.3rem",borderBottom:"solid 0.1rem ".concat(e.palette.primary.dark," "),background:e.palette.primary.dark,"@media (max-width: 500px)":{flexDirection:"column",padding:"2rem 2rem 1rem 2.3rem",alignItems:"flex-start"}},header__text:{fontSize:"2.6rem",fontWeight:600,"@media (max-width: 800px)":{fontSize:"2.2rem"}},darkMode__label:{fontSize:"1.5rem"}}}));var v=function(){var e=u(),t=Object(s.a)(e,2),a=t[0].darkMode,n=t[1],c=y();return Object(r.jsxs)(f.a,{component:"nav",className:c.nav,children:[Object(r.jsx)(O.a,{variant:"h1",color:"textSecondary",className:c.header__text,children:"Covid-19 Comparator"}),Object(r.jsx)(p.a,{control:Object(r.jsx)(x.a,{color:"secondary",checked:a,onChange:function(){n(a?{type:"CHANGE_THEME",payload:!1}:{type:"CHANGE_THEME",payload:!0})}}),label:Object(r.jsx)(O.a,{variant:"body1",className:c.darkMode__label,children:"Dark Mode"}),color:"primary"})]})},g=a(32),k=a.n(g),w=a(65),S=a(455),_=a(452),C=a(453),M=a(95),T=a(469),N=a(446),W=a(450),D=a(93),E=a(94),z=a(115),Y=a(113),I=a(224),P=a(62),B=a.n(P),G=a(86),F=a.n(G),R={color:{orange:"#ec7554",pink:"#cf477b",green:"#229e6f",purple:"#8884d8"},tooltip:{fontSize:"14px",fontWeight:"600",border:"none",borderRadius:"5px",backgroundColor:"rgba(28,29,29,0.8)"}},H=function(e){for(var t=[],a=Object.keys(e).sort((function(t,a){return e[t]-e[a]})),r=0;r<a.length;r++){var n={date:a[r],number:e[a[r]]};t.push(n)}return t},K=function(e){return e>=1e3?B()(e).format("0.0a"):e},L=function(e){return F()(e,"M/D/YY").format("D/M/YY")};var A=function(e){var t=e.data,a=u(),n=Object(s.a)(a,2),c=n[0],o=c.country1,i=c.country2,l=c.showWorldWide,d=c.darkMode,h=(n[1],d?"#9ea0a8":"#293853"),j=d?"#293853":"#9ea0a8";return Object(r.jsx)(T.a,{width:"100%",height:"90%",children:Object(r.jsxs)(N.a,{data:t,margin:{top:10,right:25,left:5,bottom:10},children:[Object(r.jsx)(W.a,{stroke:j,strokeDasharray:"2 0",vertical:!1}),Object(r.jsx)(D.a,{dataKey:"date",tick:{fontSize:13,fill:"".concat(h)},stroke:h,minTickGap:40,tickFormatter:function(e){return L(e)}}),Object(r.jsx)(E.a,{tick:{fontSize:13,fill:"".concat(h)},tickFormatter:function(e){return K(e)},stroke:h}),Object(r.jsx)(z.a,{cursor:{stroke:"white"},labelStyle:{color:"white"},contentStyle:R.tooltip,formatter:function(e){return B()(e).format("0,0")},labelFormatter:function(e){return F()(e,"M/D/YY").format("MMM Do, YYYY")}}),Object(r.jsx)(Y.a,{iconSize:20,wrapperStyle:{fontSize:"15px",fontWeight:"500"}}),l&&Object(r.jsx)(I.a,{dot:!1,type:"monotone",dataKey:"Global",stroke:R.color.purple,activeDot:{r:5},strokeWidth:3}),o&&Object(r.jsx)(I.a,{dot:!1,type:"monotone",dataKey:o,stroke:R.color.orange,activeDot:{r:5},strokeWidth:3}),i&&Object(r.jsx)(I.a,{dot:!1,type:"monotone",dataKey:i,stroke:R.color.pink,activeDot:{r:5},strokeWidth:3})]})})},U=a(451),q=a(226);var J=function(e){var t=e.data,a=u(),n=Object(s.a)(a,2),c=n[0],o=c.country1,i=c.country2,l=c.showWorldWide,d=c.darkMode,h=(n[1],d?"#9ea0a8":"#293853"),j=d?"#293853":"#9ea0a8";return Object(r.jsx)(T.a,{width:"100%",height:"90%",children:Object(r.jsxs)(U.a,{data:t,margin:{top:10,right:25,left:5,bottom:10},children:[Object(r.jsx)(W.a,{stroke:j,strokeDasharray:"2 0",vertical:!1}),Object(r.jsx)(D.a,{dataKey:"date",tick:{fontSize:13,fill:"".concat(h)},stroke:h,minTickGap:40,tickFormatter:function(e){return L(e)}}),Object(r.jsx)(E.a,{tick:{fontSize:13,fill:"".concat(h)},tickFormatter:function(e){return K(e)},stroke:h}),Object(r.jsx)(z.a,{cursor:{stroke:"white"},labelStyle:{color:"white"},contentStyle:R.tooltip,formatter:function(e){return B()(e).format("0,0")},labelFormatter:function(e){return F()(e,"M/D/YY").format("MMM Do, YYYY")}}),Object(r.jsx)(Y.a,{iconSize:20,wrapperStyle:{fontSize:"15px",fontWeight:"500"}}),l&&Object(r.jsx)(q.a,{dot:!1,type:"monotone",dataKey:"Global",stroke:R.color.purple,fill:R.color.purple,activeDot:{r:5},strokeWidth:3,stackId:"1"}),o&&Object(r.jsx)(q.a,{dot:!1,type:"monotone",dataKey:o,stroke:R.color.orange,fill:R.color.orange,activeDot:{r:5},strokeWidth:3,stackId:"1"}),i&&Object(r.jsx)(q.a,{dot:!1,type:"monotone",dataKey:i,stroke:R.color.pink,fill:R.color.pink,activeDot:{r:5},strokeWidth:3,stackId:"1"})]})})},V=Object(m.a)((function(e){return{chart:{width:"100%",height:"100%",background:e.palette.secondary.light},loading:{width:"100%",height:"100%",background:e.palette.secondary.light,display:"grid",placeItems:"center"},chart__area:{width:"100%",height:"100%",textAlign:"center"},chart__title:{width:"100%",height:"10%"}}}));var X=function(e){var t=e.data,a=e.name,n=V(),c=u(),o=Object(s.a)(c,2),i=o[0],l=i.country1,d=i.country2,h=i.showWorldWide,j=i.darkMode,b=i.casesChartType,m=(o[1],j?"#ffffff":"#293853");return l||d||h?Object(r.jsx)(_.a,{className:n.chart,children:Object(r.jsxs)(C.a,{className:n.chart__area,children:[Object(r.jsx)(O.a,{variant:"h4",className:n.chart__title,children:a}),"Line chart"===b?Object(r.jsx)(A,{data:t}):Object(r.jsx)(J,{data:t})]})}):Object(r.jsx)(_.a,{className:n.loading,children:Object(r.jsx)(M.RingLoader,{size:55,color:m})})},Z=a(454),Q=a(229),$=Object(m.a)((function(e){return{chart:{width:"100%",height:"100%",background:e.palette.secondary.light},loading:{width:"100%",height:"100%",background:e.palette.secondary.light,display:"grid",placeItems:"center"},chart__area:{width:"100%",height:"100%",textAlign:"center"},chart__title:{width:"100%",height:"10%"}}}));var ee=function(){var e=$(),t=u(),a=Object(s.a)(t,2),c=a[0],o=c.country1,i=c.country2,l=c.showWorldWide,d=c.darkMode,h=c.overviewChartType,j=(a[1],d?"#9ea0a8":"#293853"),b=d?"#293853":"#9ea0a8",m=d?"#ffffff":"#293853",f=Object(n.useState)([]),p=Object(s.a)(f,2),x=p[0],y=p[1],v=Object(n.useState)({}),g=Object(s.a)(v,2),S=g[0],N=g[1],I=Object(n.useState)({}),P=Object(s.a)(I,2),G=P[0],F=P[1],H=Object(n.useState)({}),L=Object(s.a)(H,2),A=L[0],U=L[1],q=function(){var e=Object(w.a)(k.a.mark((function e(){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r={name:"Global",Cases:a.casesPerOneMillion,Deaths:a.deathsPerOneMillion,Recovered:a.recoveredPerOneMillion},N(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n={name:r.country,Cases:r.casesPerOneMillion,Deaths:r.deathsPerOneMillion,Recovered:r.recoveredPerOneMillion},t===o?F(n):U(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){q()}),[]),Object(n.useEffect)((function(){o&&J(o),i&&J(i)}),[o,i]),Object(n.useEffect)((function(){!function(){for(var e=[],t=["Cases","Deaths","Recovered"],a=0;a<t.length;a++)e[a]=new Object,e[a].name=t[a],e[a].Global=l?S[t[a]]:null,e[a][o]=G?G[t[a]]:null,e[a][i]=A?A[t[a]]:null;y(e)}()}),[S,G,A,l]),o||i||l?Object(r.jsx)(_.a,{className:e.chart,children:Object(r.jsxs)(C.a,{className:e.chart__area,children:[Object(r.jsxs)(O.a,{variant:"h4",className:e.chart__title,children:["Overview ",Object(r.jsx)("br",{}),Object(r.jsx)(O.a,{variant:"body1",style:{fontSize:"14px"},children:"(per one million)"})]}),Object(r.jsx)(T.a,{width:"100%",height:"90%",children:Object(r.jsxs)(Z.a,{data:x,margin:{top:15,right:20,left:5,bottom:10},children:[Object(r.jsx)(W.a,{stroke:b,strokeDasharray:"2 0",vertical:!1}),Object(r.jsx)(D.a,{dataKey:"name",tick:{fontSize:13,fill:"".concat(j)},stroke:j}),Object(r.jsx)(E.a,{tickFormatter:function(e){return K(e)},tick:{fontSize:13,fill:"".concat(j)},stroke:j}),Object(r.jsx)(z.a,{cursor:{fill:"rgba(86, 109, 153, 0.6)"},labelStyle:{color:"white"},contentStyle:R.tooltip,formatter:function(e){return e>=1e3?B()(e).format("0,0"):e},labelFormatter:function(e){return e+" /1M pop"}}),Object(r.jsx)(Y.a,{iconSize:20,wrapperStyle:{fontSize:"15px",fontWeight:"500"}}),l&&Object(r.jsx)(Q.a,{dataKey:"Global",stackId:"Stacked Bar"===h&&"a",fill:R.color.purple}),o&&Object(r.jsx)(Q.a,{dataKey:o,stackId:"Stacked Bar"===h&&"a",fill:R.color.orange}),i&&Object(r.jsx)(Q.a,{dataKey:i,stackId:"Stacked Bar"===h&&"a",fill:R.color.pink})]})})]})}):Object(r.jsx)(_.a,{className:e.loading,children:Object(r.jsx)(M.RingLoader,{size:55,color:m})})},te=Object(m.a)((function(e){return{charts__container:{padding:"5%",overflow:"hidden",position:"relative",width:"100%"},loading__container:{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:"120px",height:"50px"},grid__item:{width:"100%",minHeight:"40rem",height:"40vh"},item__overview:{width:"100%",minHeight:"70rem",height:"70vh"}}}));var ae=function(){var e=te(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!0),l=Object(s.a)(i,2),d=l[0],h=l[1],j=Object(n.useState)([]),b=Object(s.a)(j,2),m=b[0],O=b[1],p=Object(n.useState)([]),x=Object(s.a)(p,2),y=x[0],v=x[1],g=Object(n.useState)([]),_=Object(s.a)(g,2),C=_[0],T=_[1],N=Object(n.useState)([]),W=Object(s.a)(N,2),D=W[0],E=W[1],z=Object(n.useState)([]),Y=Object(s.a)(z,2),I=Y[0],P=Y[1],B=Object(n.useState)([]),G=Object(s.a)(B,2),F=G[0],R=G[1],K=Object(n.useState)([]),L=Object(s.a)(K,2),A=L[0],U=L[1],q=Object(n.useState)([]),J=Object(s.a)(q,2),V=J[0],Z=J[1],Q=u(),$=Object(s.a)(Q,2),ae=$[0],re=ae.country1,ne=ae.country2,ce=ae.showWorldWide,oe=ae.darkMode,ie=$[1],se=oe?"#ffffff":"#293853",le=function(){var e=Object(w.a)(k.a.mark((function e(t,a){var r,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=all"));case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,r.ok?(c=H(n.timeline[a]),"cases"===a?t==re?E(c):P(c):t==re?U(c):Z(c)):(t==re?(E([]),U([]),ie({type:"SET_COUNTRY",payload:{country:"country1",name:""}})):(P([]),Z([]),ie({type:"SET_COUNTRY",payload:{country:"country2",name:""}})),alert("There's no data for this country. Please choose another one."));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=H(r[t]),"cases"===t?T(n):R(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){de("cases"),de("deaths"),o(!0)}),[]),Object(n.useEffect)((function(){c&&(re&&le(re,"cases"),re&&le(re,"deaths"),ne&&le(ne,"cases"),ne&&le(ne,"deaths"))}),[re,ne]),Object(n.useEffect)((function(){return function(){for(var e=[],t=0;t<C.length;t++)e[t]=new Object,e[t].date=C[t].date,e[t].Global=ce?C[t].number:null,e[t][re]=D.length>0?D[t].number:null,e[t][ne]=I.length>0?I[t].number:null;O(e)}(),function(){for(var e=[],t=0;t<F.length;t++)e[t]=new Object,e[t].date=F[t].date,e[t].Global=ce?F[t].number:null,e[t][re]=A.length>0?A[t].number:null,e[t][ne]=V.length>0?V[t].number:null;v(e)}(),function(){h(!1)}}),[C,F,D,A,I,V,ce]),Object(r.jsxs)(f.a,{className:e.charts__container,children:[d&&Object(r.jsx)(f.a,{className:e.loading__container,children:Object(r.jsx)(M.PacmanLoader,{color:se})}),!d&&Object(r.jsxs)(S.a,{container:!0,spacing:6,children:[Object(r.jsx)(S.a,{item:!0,xs:12,lg:6,className:e.grid__item,children:Object(r.jsx)(X,{data:m,name:"Total Cases"})}),Object(r.jsx)(S.a,{item:!0,xs:12,lg:6,className:e.grid__item,children:Object(r.jsx)(X,{data:y,name:"Total Deaths"})}),Object(r.jsx)(S.a,{item:!0,xs:12,className:e.item__overview,children:Object(r.jsx)(ee,{})})]})]})},re=a(465),ne=a(456),ce=a(457),oe=a(460),ie=a(467),se=a(413),le=a(466),de=a(464),ue=Object(m.a)((function(e){return{radio:{transform:"scale(1.2)",marginLeft:"0.2rem"},radioGroup:{marginTop:"0.8rem"}}}));var he=function(e){var t=e.label,a=e.value,n=e.radioBtn,c=e.handleChange,o=ue();return Object(r.jsxs)(ne.a,{component:"fieldset",children:[Object(r.jsx)(se.a,{component:"legend",children:Object(r.jsx)(O.a,{variant:"h4",color:"textSecondary",children:t})}),Object(r.jsx)(le.a,{"aria-label":t,name:t,value:a,row:!0,onChange:c,className:o.radioGroup,children:n.map((function(e,t){return Object(r.jsx)(p.a,{value:e,control:Object(r.jsx)(de.a,{className:o.radio}),label:e},t)}))})]})},je=["Anguilla","Aruba","Bermuda","British Virgin Islands","Caribbean Netherlands","Cayman Islands","Channel Islands","Cura\xe7ao","Diamond Princess","Falkland Islands (Malvinas)","Faroe Islands","French Guiana","French Polynesia","Gibraltar","Greenland","Guadeloupe","Holy See (Vatican City State)","Hong Kong","Isle of Man","MS Zaandam","Macao","Martinique","Mayotte","Montserrat","Myanmar","New Caledonia","Palestine","R\xe9union","Saint Martin","Saint Pierre Miquelon","Sint Maarten","St. Barth","Turks and Caicos Islands","Wallis and Futuna","Western Sahara"],be=Object(m.a)((function(e){return{container:{width:"35rem",background:e.palette.primary.main,minHeight:"100vh",height:"100%","@media (max-width: 800px)":{width:"100%",height:"fit-content",minHeight:"30rem"}},formBox:{marginTop:"0.5rem"},formControl:{marginBottom:"1.2rem",width:"85%",maxWidth:"40rem"},select__countries:{background:e.palette.secondary.light,height:"4rem",fontSize:"1.6rem"},select__items:{color:e.palette.text.secondary,fontSize:"1.5rem"},checkbox:{color:e.palette.text.primary,transform:"scale(1.4)",marginLeft:"0.4rem"},box:{width:"100%",borderBottom:"0.1rem solid ".concat(e.palette.primary.light),padding:"2.2rem 2.3rem 1.8rem"},link:{textDecoration:"none",color:e.palette.text.primary}}}));var me=function(){var e=u(),t=Object(s.a)(e,2),a=t[0],c=a.casesChartType,o=a.overviewChartType,i=a.showWorldWide,l=t[1],d=Object(n.useState)([]),h=Object(s.a)(d,2),j=h[0],b=h[1],m=Object(n.useState)(""),x=Object(s.a)(m,2),y=x[0],v=x[1],g=Object(n.useState)(""),S=Object(s.a)(g,2),_=S[0],C=S[1],M=je;Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var t,a,r,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r=a.filter((function(e){return!M.includes(e.country)})),n=r.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),b(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(e){l({type:"CHART_TYPE",payload:{chart:e.currentTarget.name,type:e.target.value}})},N=be();return Object(r.jsxs)(f.a,{className:N.container,children:[Object(r.jsxs)(f.a,{className:N.box,children:[Object(r.jsx)(O.a,{variant:"h4",color:"textSecondary",children:"Select Countries"}),Object(r.jsx)(p.a,{control:Object(r.jsx)(re.a,{className:N.checkbox,color:"secondary",onChange:function(e){l({type:"SHOW_WORLDWIDE",payload:e.target.checked})},name:"worldwide",checked:i}),label:Object(r.jsx)(O.a,{variant:"h5",color:"textPrimary",children:"Worldwide Data"}),style:{marginTop:"1.3rem",marginBottom:"0.6rem"}}),Object(r.jsxs)(f.a,{className:N.formBox,children:[Object(r.jsxs)(ne.a,{className:N.formControl,children:[Object(r.jsx)(ce.a,{children:Object(r.jsx)(O.a,{variant:"h5",color:"textPrimary",children:"Country 1"})}),Object(r.jsx)(oe.a,{value:y,onChange:function(e){var t=e.target.value;t!==_?(v(t),l({type:"SET_COUNTRY",payload:{country:"country1",name:t}})):alert("This country is already on the chart. Please choose a different one!")},className:N.select__countries,color:"secondary",children:j.map((function(e,t){return Object(r.jsx)(ie.a,{className:N.select__items,value:e.value,children:e.name},t)}))})]}),Object(r.jsxs)(ne.a,{className:N.formControl,children:[Object(r.jsx)(ce.a,{children:Object(r.jsx)(O.a,{variant:"h5",color:"textPrimary",children:"Country 2"})}),Object(r.jsx)(oe.a,{value:_,onChange:function(e){var t=e.target.value;t!==y?(C(t),l({type:"SET_COUNTRY",payload:{country:"country2",name:t}})):alert("This country is already on the chart. Please choose a different one!")},className:N.select__countries,color:"secondary",children:j.map((function(e,t){return Object(r.jsx)(ie.a,{className:N.select__items,value:e.value,children:e.name},t)}))})]}),Object(r.jsxs)(O.a,{variant:"body1",style:{fontSize:"12px",marginTop:"0.5rem"},children:["Countries/ territories without daily updated data have been excluded from this list. ",Object(r.jsx)("br",{}),"Data source: \xa0",Object(r.jsx)("a",{href:"https://disease.sh/",rel:"noreferrer",target:"_blank",className:N.link,children:"disease.sh"})]})]})]}),Object(r.jsx)(f.a,{className:N.box,children:Object(r.jsx)(he,{label:"Cases Charts",value:c,radioBtn:["Line chart","Area chart"],handleChange:T})}),Object(r.jsx)(f.a,{className:N.box,children:Object(r.jsx)(he,{label:"Overview Chart",value:o,radioBtn:["Bar chart","Stacked Bar"],handleChange:T})})]})},fe=Object(m.a)((function(e){return{main__container:{width:"100%",display:"grid",gridTemplateColumns:"35rem 1fr","@media (max-width: 800px)":{gridTemplateColumns:"1fr"}}}}));var Oe=function(){var e=fe();return Object(r.jsxs)(f.a,{className:e.main__container,children:[Object(r.jsx)(me,{}),Object(r.jsx)(ae,{})]})},pe={palette:{primary:{main:"#CBCCD1",light:"#9fa3af",dark:"#babdc5"},secondary:{main:"#9d7bee",light:"rgba(120, 133, 168, 0.1)"},background:{default:"#D4D5D8"},text:{primary:"#2d3d5e",secondary:"#262c38"}}},xe={palette:{primary:{main:"#213141",light:"#2f557c",dark:"#172736"},secondary:{main:"#9d7bee",light:"rgba(89,115,135, 0.2)"},background:{default:"#283c50"},text:{primary:"#fcfcfc",secondary:"#578fb1"}}};var ye=function(){var e=u(),t=Object(s.a)(e,2),a=t[0].darkMode,n=(t[1],Object(h.a)(a?xe:pe));return Object(r.jsxs)(j.a,{theme:n,children:[Object(r.jsx)(b.a,{}),Object(r.jsx)(v,{}),Object(r.jsx)(Oe,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,470)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))},ge=a(57);i.a.render(Object(r.jsxs)(c.a.StrictMode,{children:[Object(r.jsx)(d,{initialState:{darkMode:!0,country1:"",country2:"",showWorldWide:!0,casesChartType:"Line chart",overviewChartType:"Bar chart"},reducer:function(e,t){switch(t.type){case"CHANGE_THEME":return Object(ge.a)(Object(ge.a)({},e),{},{darkMode:t.payload});case"SHOW_WORLDWIDE":return Object(ge.a)(Object(ge.a)({},e),{},{showWorldWide:t.payload});case"CHART_TYPE":var a=e.casesChartType,r=e.overviewChartType;return"Cases Charts"==t.payload.chart&&(a=t.payload.type),"Overview Chart"==t.payload.chart&&(r=t.payload.type),Object(ge.a)(Object(ge.a)({},e),{},{casesChartType:a,overviewChartType:r});case"SET_COUNTRY":var n=e.country1,c=e.country2;return"country1"===t.payload.country?n=t.payload.name:c=t.payload.name,Object(ge.a)(Object(ge.a)({},e),{},{country1:n,country2:c});default:return e}},children:Object(r.jsx)(ye,{})})," "]}),document.getElementById("root")),ve()}},[[408,1,2]]]);
//# sourceMappingURL=main.b8f74e8d.chunk.js.map