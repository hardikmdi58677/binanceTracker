(this.webpackJsonpbinancetracker=this.webpackJsonpbinancetracker||[]).push([[0],{176:function(e,a,t){e.exports=t(315)},181:function(e,a,t){},182:function(e,a,t){},315:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),o=(t(181),t(31)),u=(t(182),t(327)),s=t(324),i=t(328),b=t(325),m=t(329),f=t(42),p=t(30),d=t.n(p),E=t(70),D=t(44),y=t.n(D),g=function(e,a,t){return function(){var n=Object(E.a)(d.a.mark((function n(l){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get("".concat(e,"?symbol=").concat(a));case 3:r=n.sent,l({type:"UPDATE_CRYPTO_PRICE",payload:{data:r.data,tableNo:t}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error message",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()};var h=Object(f.b)()((function(){var e=Object(f.c)(),a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],p=Object(n.useState)(""),D=Object(o.a)(p,2),h=D[0],O=D[1],k=Object(n.useState)(0),v=Object(o.a)(k,2),C=v[0],j=v[1],P=Object(f.d)((function(e){return e.crypto})),F=P&&P.url1Data?P.url1Data.map((function(e){return{key:e.symbol,text:e.symbol,value:e.symbol}})):[],w=P&&P.url2Data?P.url2Data.map((function(e){return{key:e.symbol,text:e.symbol,value:e.symbol}})):[],x=Object(n.useState)(!1),_=Object(o.a)(x,2),A=_[0],R=_[1],T=Object(n.useState)(""),H=Object(o.a)(T,2),S=H[0],B=H[1],I=Object(n.useState)(""),L=Object(o.a)(I,2),N=L[0],U=L[1],q=Object(n.useCallback)((function(a,t){a&&t&&e(function(e,a){return function(){var t=Object(E.a)(d.a.mark((function t(n){var l,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("".concat(e));case 3:return l=t.sent,t.next=6,y.a.get(a);case 6:r=t.sent,n({type:"FETCH_DATA",payload:{response1:l.data,response2:r.data}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("Error message : ",t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(a,t))}),[e]),G=Object(n.useCallback)((function(){if(P.table1Data)return P.table1Data.map((function(e){return l.a.createElement(u.a.Row,{key:e.symbol},l.a.createElement(u.a.Cell,null,e.symbol),l.a.createElement(u.a.Cell,null,e.bidPrice),l.a.createElement(u.a.Cell,null,e.askPrice))}))}),[P]),J=Object(n.useCallback)((function(){if(P.table2Data)return P.table2Data.map((function(e){return l.a.createElement(u.a.Row,{key:e.symbol},l.a.createElement(u.a.Cell,null,e.symbol),l.a.createElement(u.a.Cell,null,e.bidPrice),l.a.createElement(u.a.Cell,null,e.askPrice))}))}),[P]);return Object(n.useEffect)((function(){var a=null;return A&&(a=setInterval((function(){e(function(e,a,t){return function(){var n=Object(E.a)(d.a.mark((function n(l){var r,c,o,u,s,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get(e);case 3:return r=n.sent,n.next=6,y.a.get(a);case 6:c=n.sent,o=t.table1Data.map((function(e){return e.symbol})),u=t.table2Data.map((function(e){return e.symbol})),s=r.data.filter((function(e){return o.includes(e.symbol)})),i=c.data.filter((function(e){return u.includes(e.symbol)})),l({type:"UPDATE_DATA",payload:{tab1Response:s,tab2Response:i}}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.log("Error message",n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()}(S,N,P))}),500)),function(){return clearInterval(a)}}),[P,e,A,S,N]),l.a.createElement(s.a,null,r&&h&&l.a.createElement(i.a,{onDismiss:function(){return c(!r)},header:"Difference in Crypto price",content:h}),l.a.createElement(b.a,null,l.a.createElement(b.a.Field,null,l.a.createElement("label",null,"Link 1"),l.a.createElement("input",{placeholder:"Link 1",value:S,onChange:function(e){return B(e.target.value)}})),l.a.createElement(b.a.Field,null,l.a.createElement("label",null,"Link 2"),l.a.createElement("input",{placeholder:"Link 2",value:N,onChange:function(e){return U(e.target.value)}})),l.a.createElement(m.a,{onClick:function(){return q(S,N)}},"Fetch data"),!!Object.keys(P).length&&P.table1Data&&(!!P.table1Data.length||!!P.table2Data.length)&&l.a.createElement(m.a,{inverted:!0,color:A?"green":"red",onClick:function(){return R(!A)}},"Monitor :".concat(A?"ON":"OFF")),S&&N&&l.a.createElement(n.Fragment,null,l.a.createElement(b.a.Group,{widths:"equal"},l.a.createElement(b.a.Select,{fluid:!0,search:!0,label:"crypto 1",options:F,onChange:function(a,t){e(g(S,t.value,1))},placeholder:"crypto 1"}),l.a.createElement(b.a.Select,{fluid:!0,search:!0,label:"crypto 2",options:w,placeholder:"crypto 2",onChange:function(a,t){e(g(N,t.value,2))}}),l.a.createElement(b.a.Input,{type:"number",fluid:!0,label:"Difference %, greater than",placeholder:"Difference Percentage",value:C,onChange:function(e){return j(e.target.value)}})),l.a.createElement(b.a.Group,{widths:"equal"},!!Object.keys(P).length&&P.table1Data&&!!P.table1Data.length&&l.a.createElement(u.a,{celled:!0},l.a.createElement(u.a.Header,null,l.a.createElement(u.a.Row,null,l.a.createElement(u.a.HeaderCell,null,"Symbol"),l.a.createElement(u.a.HeaderCell,null,"Bid Price"),l.a.createElement(u.a.HeaderCell,null,"Ask Price"))),l.a.createElement(u.a.Body,null,G())),!!Object.keys(P).length&&P.table2Data&&!!P.table2Data.length&&l.a.createElement(u.a,{celled:!0,style:{margin:0}},l.a.createElement(u.a.Header,null,l.a.createElement(u.a.Row,null,l.a.createElement(u.a.HeaderCell,null,"Symbol"),l.a.createElement(u.a.HeaderCell,null,"Bid Price"),l.a.createElement(u.a.HeaderCell,null,"Ask Price"))),l.a.createElement(u.a.Body,null,J())),!!Object.keys(P).length&&P.table1Data&&P.table2Data&&!!P.table1Data.length&&!!P.table2Data.length&&l.a.createElement(u.a,{celled:!0,style:{margin:0}},l.a.createElement(u.a.Header,null,l.a.createElement(u.a.Row,null,l.a.createElement(u.a.HeaderCell,null,"A_B Diff %"),l.a.createElement(u.a.HeaderCell,null,"B_A Diff %"))),function(){if(P.table1Data&&P.table2Data){for(var e=[],a=0;a<=P.table2Data.length&&(!r||A);a++)if(P.table1Data[a]&&P.table2Data[a]){var t=100*(P.table1Data[a].askPrice-P.table2Data[a].bidPrice)/P.table1Data[a].askPrice,n=100*(P.table1Data[a].bidPrice-P.table2Data[a].askPrice)/P.table1Data[a].bidPrice;if(parseFloat(t)>=parseFloat(C)||parseFloat(n)>=parseFloat(C)){if(R(!1),c(!0),parseFloat(t).toFixed(5)>=parseFloat(C).toFixed(5)){O("Difference percentage for ".concat(P.table1Data[a].symbol," askPrice and ").concat(P.table2Data[a].symbol," bidPrice found to be ").concat(C));break}if(parseFloat(n).toFixed(5)>=parseFloat(C).toFixed(5)){O("Difference percentage for ".concat(P.table1Data[a].symbol," bidPrice and ").concat(P.table2Data[a].symbol," askPrice found to be ").concat(C));break}}e.push(l.a.createElement(u.a.Row,{key:P.table1Data[a].symbol},l.a.createElement(u.a.Cell,null,t),l.a.createElement(u.a.Cell,null,n)))}return e}}())))))})),O=(t(314),t(29)),k=t(13),v=t(163),C=t(97),j={url1Data:[],url2Data:[],table1Data:[],table2Data:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0,t=a.payload;switch(a.type){case"FETCH_DATA":var n=t.response1,l=t.response2;return{url1Data:n,url2Data:l};case"UPDATE_CRYPTO_PRICE":var r="table".concat(t.tableNo,"Data");return Object(C.a)({},e,Object(k.a)({},r,e[r]?e[r].find((function(e){return e.symbol===t.data.symbol}))?e[r].map((function(e){return e.symbol===t.data.symbol?t.data:e})):[].concat(Object(v.a)(e[r]),[t.data]):[].concat(t.data)));case"UPDATE_DATA":return Object(C.a)({},e,{table1Data:t.tab1Response,table2Data:t.tab2Response});default:return e}},F=t(161),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,x=Object(O.e)(Object(O.c)({crypto:P}),w(Object(O.a)(F.a)));c.a.render(l.a.createElement(f.a,{store:x},l.a.createElement(h,null)),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.a6fef1de.chunk.js.map