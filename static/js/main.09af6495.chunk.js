(this["webpackJsonptip-calculator-frontendmentor"]=this["webpackJsonptip-calculator-frontendmentor"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var r,c=t(1),i=t.n(c),o=t(9),a=t.n(o),s=(t(17),t(2)),l=t(4),b=(t(18),t(3)),d=t(0);var p,j,u=b.a.div(r||(r=Object(s.a)(["\n  .error-message{\n    background-color:pink;\n    margin-bottom:5px;\n    padding:5px;\n    border-radius:5px\n  }\n  .bill{\n    position:relative;\n    background-color:hsl(189, 41%, 93%);\n    border-radius:5px;\n    height:30px;\n    padding:5px;\n    input{\n      position:absolute;\n      top:0;\n      right:0;\n      width:100%;\n      height:100%;\n      border:none;\n      background-color:transparent;\n      text-align:right;\n      border-radius:inherit;\n    }\n  }\n\n"]))),h=function(e){var n=e.bill,t=e.setBill,r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],a=i[1];return Object(d.jsxs)(u,{children:[Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("label",{htmlFor:"bill",children:"Bill"})," "]}),o&&Object(d.jsx)("div",{className:"error-message",children:"not a number"}),Object(d.jsxs)("div",{className:"bill",children:[" $ ",Object(d.jsx)("input",{value:n,onClick:function(e){e.target.select()},type:"text",id:"bill",onChange:function(e){t(e.target.value),a(isNaN(e.target.value))}})," "]})]})};function x(e){var n=e.setTip,t=e.tip,r=e.active;return Object(d.jsx)(O,{value:100*t,className:r&&"active",onClick:function(e){e.target.select()},type:"text",onChange:function(e){n(.01*e.target.value)}})}var g,O=b.a.input(p||(p=Object(s.a)(["\n  flex:1 1 120px;\n  width:100%;\n  font-size:1.5em;\n  font-weight:bold;\n  color:hsl(186, 14%, 43%);\n  border-radius:5px;\n  border:none;\n  background-color:hsl(189, 41%, 93%);\n  text-align:center;\n\n  &.active{\n\n    background-color: hsl(172, 67%, 45%);\n  }\n"]))),f=b.a.button(j||(j=Object(s.a)(["\n  flex: 1 1 120px;\n  background-color:hsl(183, 100%, 15%);\n  color:white;\n  font-size:1.5em;\n  font-weight:bold;\n  border:none;\n  border-radius:5px;\n  \n\n  &:hover{\n    background-color: hsl(172, 67%, 45%);\n  }\n  &.active{\n    background-color: hsl(172, 67%, 45%);\n  }\n"]))),v=function(e){var n=e.setTip,t=e.tip,r=e.active;return isNaN(t)?Object(d.jsx)(O,{className:r&&"active",type:"text",onChange:function(e){n(.01*e.target.value)}}):Object(d.jsxs)(f,{className:r&&"active",onClick:function(){n(.01*t)},children:[t,"%"]})};var m,w=b.a.div(g||(g=Object(s.a)(["\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:space-between;\n  gap:15px;\n\n\n"]))),k=function(e){var n=e.setTip,t=e.tip,r=[5,10,15,25,50];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:" Select Tip % "}),Object(d.jsxs)(w,{children:[r.map((function(e){return Object(d.jsx)(v,{active:t==.01*e,tip:e,setTip:n},e)})),Object(d.jsx)(x,{tip:t,active:!r.includes(100*t),setTip:n})]})]})};var N=b.a.div(m||(m=Object(s.a)(["\n  input{\n    width:100%;\n    font-size:1.5em;\n    font-weight:bold;\n    color:hsl(186, 14%, 43%);\n    border-radius:5px;\n    border:none;\n    background-color:hsl(189, 41%, 93%);\n    text-align:center;\n  }\n\n"]))),C=function(e){var n=e.setPerson,t=e.person,r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],a=i[1];return Object(d.jsxs)(N,{children:[Object(d.jsx)("p",{children:" Number of People "}),o&&Object(d.jsx)("div",{className:"error-message",children:"not a number"}),Object(d.jsx)("div",{className:"person",children:Object(d.jsx)("input",{value:t,type:"text",id:"person",onClick:function(e){e.target.select()},onChange:function(e){n(e.target.value),a(isNaN(e.target.value))}})})]})};var T,y,S=function(e){var n=e.tip,t=e.setTip,r=e.bill,c=e.setBill,i=e.person,o=e.setPerson;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{setBill:c,bill:r}),Object(d.jsx)(k,{setTip:t,tip:n}),Object(d.jsx)(C,{setPerson:o,person:i})]})};var B,F,P=b.a.button(T||(T=Object(s.a)(["\n\n  flex: 1 1 120px;\n  background-color: hsl(172, 67%, 45%);\n  color:white;\n  font-size:1.5em;\n  font-weight:bold;\n  border:none;\n  border-radius:5px;\n  width:100%;\n  color: hsl(183, 100%, 15%);\n\n  &:hover{\n    background-color:hsl(183, 40%, 15%);\n  }\n"]))),z=b.a.div(y||(y=Object(s.a)(["\n  background-color: hsl(183, 100%, 15%);\n  border-radius:1em;\n  color:white;\n  padding:1em;\n"]))),J=function(e){var n=e.bill,t=e.tip,r=e.person,c=e.reset;return Object(d.jsxs)(z,{children:[Object(d.jsx)("p",{children:"Tip Amount"}),Object(d.jsxs)("p",{children:[Math.round(n*t/r*100)/100," / person"]}),Object(d.jsx)("p",{children:"Total"}),Object(d.jsxs)("p",{children:[Math.round(n*(1+t)/r*100)/100," / person"]}),Object(d.jsx)(P,{onClick:c,children:"Reset"})]})};var M=b.a.header(B||(B=Object(s.a)(["\n  text-align:center;\n  text-transform:uppercase;\n  font-weight:900;\n  font-size:30px;\n  color:hsl(186, 14%, 43%);\n  letter-spacing:30px;\n"]))),L=b.a.main(F||(F=Object(s.a)(["\n  display:flex;\n  flex-wrap:wrap;\n  gap:1em;\n  background-color:white;\n  border-radius:15px;\n  padding:2em;\n  margin:auto;\n  max-width:1000px;\n  &>*{\n    flex:1 1 300px;\n  }\n"]))),A=function(){var e=Object(c.useState)(0),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(1),o=Object(l.a)(i,2),a=o[0],s=o[1],b=Object(c.useState)(0),p=Object(l.a)(b,2),j=p[0],u=p[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(M,{children:[Object(d.jsx)("p",{children:"spli"}),Object(d.jsx)("p",{children:"tter"})]}),Object(d.jsxs)(L,{children:[Object(d.jsx)(S,{setBill:r,setPerson:s,setTip:u,bill:t,tip:j,person:a}),Object(d.jsx)(J,{bill:t,reset:function(){r(0),u(0),s(1)},tip:j,person:a})]}),Object(d.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(d.jsx)("a",{href:"https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(d.jsx)("a",{href:"#",children:"Vira Lok"}),"."]})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.09af6495.chunk.js.map