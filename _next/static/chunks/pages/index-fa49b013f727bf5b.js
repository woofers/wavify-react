(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2292)}])},2292:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return F}});var d,e,f=c(5893),g=c(7294),h=c(4689);function i(){return(i=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function j(a,b){return(j=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function k(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}var l=["style","className","fill","paused","children","id","d","ref"],m=function(a){function b(b){var c;return(c=a.call(this,b)||this).t=function(){return c.i.current.offsetWidth},c.h=function(){return c.i.current.offsetHeight},c.i=g.createRef(),c.state={path:""},c.u=0,c.o=0,c.l=0,c.v=c.v.bind(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(c)),c}d=a,(c=b).prototype=Object.create(d.prototype),c.prototype.constructor=c,j(c,d);var c,d,e=b.prototype;return e.p=function(){for(var a=[],b=0;b<=Math.max(this.props.points,1);b++){var c=b/this.props.points*this.t(),d=(this.l+(b+b%this.props.points))*this.props.speed*100,e=Math.sin(d/100)*this.props.amplitude,f=Math.sin(d/100)*e+this.props.height;a.push({x:c,y:f})}return a},e.m=function(a){var b="M "+a[0].x+" "+a[0].y,c={x:(a[1].x-a[0].x)/2,y:a[1].y-a[0].y+a[0].y+(a[1].y-a[0].y)},d=function(a,b){return" C "+a.x+" "+a.y+" "+a.x+" "+a.y+" "+b.x+" "+b.y};b+=d(c,a[1]);for(var e=c,f=1;f<a.length-1;f++)b+=d(e={x:a[f].x-e.x+a[f].x,y:a[f].y-e.y+a[f].y},a[f+1]);return(b+=" L "+this.t()+" "+this.h())+" L 0 "+this.h()+" Z"},e.g=function(){this.setState({path:this.m(this.p())})},e.j=function(){if(!this.props.paused){var a=new Date;this.o+=a-this.u,this.u=a}this.l=this.o*Math.PI/1e3,this.g()},e.v=function(){this.j(),this.M&&this.O()},e.O=function(){this.M=window.requestAnimationFrame(this.v),this.u=new Date},e.componentDidMount=function(){this.M||this.O()},e.componentWillUnmount=function(){window.cancelAnimationFrame(this.M),this.M=0},e.render=function(){var a=this.props,b=a.style,c=a.className,d=a.fill,e=a.children,f=a.id,h=k(a,l);return g.createElement("div",{style:i({width:"100%",display:"inline-block"},b),className:c,id:f,ref:this.i},g.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e,g.createElement("path",i({d:this.state.path,fill:d},h))))},b}(g.Component),n=["options"],o={height:20,amplitude:20,speed:.15,points:3},p=function(a){var b=a.options,c=k(a,n);return g.createElement(m,i({},o,b,c))};p.defaultProps={paused:!1,fill:"#fff"};var q=p;function r(){return(r=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var s=function(a){return g.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a),d||(d=g.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"})))};function t(){return(t=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}c.p;var u=function(a){return g.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a),e||(e=g.createElement("path",{fill:"currentColor",d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"})))};function v(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.p;var w=(0,h.zo)("button",{fontSize:"75px",border:"0",color:"$primary",backgroundColor:"transparent","&:hover":{color:"$primaryHover"},"> svg":{width:"0.875em"}}),x=function(a){var b=a.color,c=a.paused,d=a.onClick,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","paused","onClick"]),g=function(){d()},h=c?"Play":"Pause";return(0,f.jsx)(w,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){v(a,b,c[b])})}return a}({css:{color:b},onKeyPress:function(a){var b=a.eventCode||a.which;(13===b||32===b)&&g()},onMouseDown:g,title:h,"aria-label":h},e,{children:c?(0,f.jsx)(s,{}):(0,f.jsx)(u,{})}))},y=(0,h.zY)({"@import":["url('https://fonts.googleapis.com/css?family=Quicksecondary:400,700')"],"::selection":{background:"$selection"}}),z=(0,h.zo)("span",{fontFamily:"$title",fontWeight:700,fontSize:"5.5em",marginTop:0,marginBottom:0}),A=(0,h.zo)("div",{background:"$blue",position:"fixed",top:0,bottom:0,left:0,right:0,opacity:1}),B=(0,h.zo)("div",{background:"$secondary",width:"100%",position:"absolute",zIndex:-1,height:"300px","@sm":{height:"400px"}}),C=(0,h.zo)("div",{display:"flex",justifyContent:"center"}),D=(0,h.zo)("div",{display:"flex",justifyContent:"center",marginTop:"3.5em",marginBottom:"1.6em","@sm":{marginTop:"5.5em",marginBottom:"2.5em"}}),E=(0,h.zo)("a",{textDecoration:"none",fontSize:"0.5em",color:"$primary","&:hover":{color:"$primaryHover"},"@xsm":{fontSize:"0.75em"},"@sm":{fontSize:"16px"}}),F=function(){var a=(0,g.useState)(),b=a[0],c=a[1];return y(),(0,f.jsx)(A,{children:(0,f.jsxs)(B,{children:[(0,f.jsx)(D,{children:(0,f.jsx)(E,{href:"https://github.com/woofers/react-wavify",children:(0,f.jsx)(z,{children:"react-wavify"})})}),(0,f.jsx)(C,{children:(0,f.jsx)(x,{onClick:function(){return c(!b)},paused:b})}),(0,f.jsx)(q,{paused:b,fill:"var(--colors-blue)",options:{height:20,amplitude:20,speed:.2,points:4}})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=8581)}),_N_E=a.O()}])