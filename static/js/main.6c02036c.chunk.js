(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),o=s(5),c=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),y=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return i.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&i.reverse(),i}(j,{sortType:s,isReversed:e});return Object(y.jsxs)("div",{className:"section content",children:[Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":this.state.sortType!==n.ALPHABET}),onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(y.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":this.state.sortType!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(y.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!this.state.isReversed}),onClick:this.reverse,children:"Reverse"}),(this.state.isReversed||this.state.sortType!==n.NONE)&&Object(y.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(y.jsx)("ul",{children:r.map((function(t){return Object(y.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(b.a.Component);i.a.render(Object(y.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6c02036c.chunk.js.map