(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(34)},18:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(18),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterTextChange(e.target.value)}},{key:"handleInStockChange",value:function(e){this.props.onInStockChange(e.target.checked)}},{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search..",value:e,onChange:this.handleFilterTextChange.bind(this)}),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:t,onChange:this.handleInStockChange.bind(this)}),r.a.createElement("label",null,"Only show products in stock")))}}]),t}(r.a.Component),d=n(20),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.stocked?e.name:r.a.createElement("span",{style:{color:"red"}},e.name),n=e.price;return r.a.createElement("tr",null,r.a.createElement(d,{transitionName:"example",transitionAppear:!0,transitionEnterTimeout:500,transitionLeaveTimeout:500},r.a.createElement("td",null,t),r.a.createElement("td",null,n)))}}]),t}(r.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.category;return r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"1"},e))}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=null,n=this.props.filterText,a=this.props.inStockOnly;return this.props.products.forEach(function(c){-1!==c.name.indexOf(n)&&(a&&!c.stocked||(c.category!==t&&e.push(r.a.createElement(y,{category:c.category,key:c.category})),e.push(r.a.createElement(m,{product:c,key:c.name})),t=c.category))}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Price"))),r.a.createElement("tbody",null,e))}}]),t}(r.a.Component),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}],filterText:"",inStockOnly:!0},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e})}},{key:"handleInStockChange",value:function(e){this.setState({inStockOnly:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onFilterTextChange:this.handleFilterTextChange.bind(this),onInStockChange:this.handleInStockChange.bind(this)}),r.a.createElement(k,{products:this.state.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.c70056bc.chunk.js.map