(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(4),o=n(123),l=n(10),c=n.n(l),s=n(11),d=n.n(s),u=n(16),p=n.n(u),m=n(17),h=n.n(m),f=n(18),g=n.n(f),b=n(134),v=n.n(b),x=Object(a.b)("div",{target:"etwdjng0"})("flex:1;"),y=function(e){function t(e){var n;return c()(this,t),(n=p()(this,h()(t).call(this,e))).map=null,n.marker=null,n.tileLayerUrl="https://{s}.tile.osm.org/{z}/{x}/{y}.png",n}return g()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.build()}},{key:"componentDidUpdate",value:function(){var e=this.props.popupText;this.marker&&e&&this.marker.bindPopup(e).openPopup()}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"build",value:function(){var e=this,t=this.props.coord;this.map=v.a.map("map"),v.a.tileLayer(this.tileLayerUrl,{attribution:'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',maxZoom:18}).addTo(this.map),this.setMarker({lat:t.lat,lng:t.lon}),this.map.on("click",function(t){var n=t.latlng;void 0!==e.marker&&e.map.removeLayer(e.marker),e.setMarker(n,function(){e.whenMarkerSet(n)})})}},{key:"setMarker",value:function(e,t){this.map.setView(e,13),this.marker=v.a.marker(e).addTo(this.map),"function"==typeof t&&t()}},{key:"whenMarkerSet",value:function(e){var t=e.lat,n=e.lng;this.props.onClick({lat:t,lon:n})}},{key:"destroy",value:function(){this.map.remove()}},{key:"render",value:function(){return r.a.createElement(x,{id:"map"})}}]),t}(i.PureComponent),k=n(109),j=n.n(k),E=n(124),O=n(9),w=Object(a.b)("div",{target:"e58h14i0"})("flex:0 0 240px;padding:15px;border:1px solid rgba(0,0,0,.3);border-radius:12px;background-color:rgb(245,245,245);@media (max-height:",O.a.xs,") and (orientation:landscape){padding:8px;}"),S=Object(a.b)("div",{target:"e58h14i1"})("display:flex;justify-content:flex-start;align-items:center;margin-bottom:10px;"),M=Object(a.b)("img",{target:"e58h14i2"})("width:50px;height:50px;margin-right:20px;border-radius:50%;background-color:#d3d3d3;"),W=Object(a.b)("div",{target:"e58h14i3"})("font-size:16px;font-weight:bold;"),z=Object(a.b)("div",{target:"e58h14i4"})("font-size:14px;font-weight:bold;"),q=Object(a.b)("div",{target:"e58h14i5"})("@media (max-height:",O.a.xs,") and (orientation:landscape){display:none;}"),C=Object(a.b)(q,{target:"e58h14i6"})("font-size:16px;"),L=Object(a.b)(q,{target:"e58h14i7"})(),U=Object(i.memo)(function(e){var t=e.day;return r.a.createElement(w,null,r.a.createElement(S,null,r.a.createElement(M,{src:"https://openweathermap.org/img/w/".concat(t.main.icon,".png"),alt:t.main.icon}),r.a.createElement("div",null,r.a.createElement(W,null,j.a.unix(t.date).format("ddd, MMM Do")),r.a.createElement(z,null,t.main.description))),r.a.createElement(C,null,r.a.createElement("strong",null,r.a.createElement(E.a,{temp:t.temp.max})),"| ",r.a.createElement(E.a,{temp:t.temp.min})),r.a.createElement(L,null,r.a.createElement("div",null,"humidity: ",t.humidity," %"),r.a.createElement("div",null,"speed: ",t.speed," mps")))}),D=n(59),P=n.n(D),T=n(136),F=n.n(T),A=Object(a.b)("div",{target:"efi3lnq0"})("position:relative;width:100%;overflow:hidden;"),X=Object(a.b)("div",{target:"efi3lnq1"})("display:flex;margin:20px 0;transition:",function(e){return e.sliding?"none":"transform .4s ease"},";transform:",function(e){var t=e.sliding,n=e.slotWidth,i=e.direction;return t?"prev"===i?"translateX(calc(2 * (".concat(-n,"% - 20px)))"):"translateX(0%)":"translateX(calc(".concat(-n,"% - 20px))")}),B=Object(a.b)("div",{target:"efi3lnq2"})("flex:1 0 100%;flex-basis:20%;order:",function(e){return e.order},";min-width:240px;margin:0 10px;@media (max-width:1279px){flex-basis:30%;}@media (max-width:959px){flex-basis:40%;}@media (max-width:599px){flex-basis:80%;}"),J=Object(a.b)("div",{target:"efi3lnq3"})("display:flex;justify-content:center;align-items:center;margin-bottom:20px;"),N=Object(a.b)("button",{target:"efi3lnq4"})("margin:0 10px;padding:2px 38px;font-family:Arial;font-size:30px;border:1px solid rgba(0,0,0,.3);border-radius:20px;background-color:rgb(245,245,245);cursor:pointer;&::-moz-focus-inner{border:0;}"),_=function(e){function t(e){var n;return c()(this,t),(n=p()(this,h()(t).call(this,e))).state={position:0,direction:"next",sliding:!1},n.nextSlide=n.nextSlide.bind(P()(P()(n))),n.prevSlide=n.prevSlide.bind(P()(P()(n))),n}return g()(t,e),d()(t,[{key:"getOrder",value:function(e){var t=this.state.position,n=this.props.children.length||1;return(n+1-t+e)%n}},{key:"nextSlide",value:function(){var e=this.state.position,t=this.props.children.length||1;this.doSliding("next",e===t-1?0:e+1)}},{key:"prevSlide",value:function(){var e=this.state.position,t=this.props.children.length;this.doSliding("prev",0===e?t-1:e-1)}},{key:"doSliding",value:function(e,t){var n=this;this.setState({sliding:!0,direction:e,position:t}),setTimeout(function(){n.setState({sliding:!1})},50)}},{key:"handleSwipe",value:function(e){e?this.nextSlide():this.prevSlide()}},{key:"render",value:function(){var e=this,n=this.props,i=n.children,a=(n.request,this.state),o=a.sliding,l=a.direction,c=!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=t.getSlotWidth();return r.a.createElement("div",null,r.a.createElement(F.a,{onSwipedLeft:function(){return e.handleSwipe(!0)},onSwipedRight:function(){return e.handleSwipe()}},r.a.createElement(A,null,r.a.createElement(X,{sliding:o,direction:l,slotWidth:s},i.map(function(t,n){return r.a.createElement(B,{key:t.key,order:e.getOrder(n)},t)})))),c?r.a.createElement(J,null,r.a.createElement(N,{onClick:this.prevSlide},"←"),r.a.createElement(N,{onClick:this.nextSlide},"→")):null)}}],[{key:"getSlotWidth",value:function(){var e=document.body.clientWidth;return e<=599?80:e<=959?40:e<=1279?30:20}}]),t}(i.Component),I=n(37),R=n(125),V=Object(a.b)(I.b,{target:"e1gpzjg50"})("min-height:110px;");t.default=Object(o.a)(function(e){var t=e.list,n=e.city,a=e.request,o=e.error,l=e.getWeather;return r.a.createElement(i.Fragment,null,r.a.createElement(y,{onClick:l,popupText:n.name,coord:n.coord}),r.a.createElement(V,{showLoader:a},r.a.createElement(_,null,t.map(function(e){return r.a.createElement(U,{day:e,key:e.date})}))),r.a.createElement(R.a,{error:o}))})},123:function(e,t,n){"use strict";var i=n(20),r=n.n(i),a=n(10),o=n.n(a),l=n(11),c=n.n(l),s=n(16),d=n.n(s),u=n(17),p=n.n(u),m=n(18),h=n.n(m),f=n(59),g=n.n(f),b=n(1),v=n.n(b),x=n(15),y=n(34),k=n(30);t.a=Object(x.d)(Object(y.b)(function(e){var t=e.weatherList;return{city:t.city,list:t.list,request:t.request,error:t.error}},function(e){return{fetch:function(t){e(Object(k.c)(t))},cancelFetch:function(){e(Object(k.a)())},clear:function(){e(Object(k.b)())}}}),function(e){return function(t){function n(e){var t;return o()(this,n),(t=d()(this,p()(n).call(this,e))).getWeather=t.getWeather.bind(g()(g()(t))),t}return h()(n,t),c()(n,[{key:"componentDidMount",value:function(){var e=this.props.city;e.id&&this.getWeather({id:e.id})}},{key:"componentWillUnmount",value:function(){this.props.cancelFetch()}},{key:"getWeather",value:function(e){this.props.fetch(e)}},{key:"render",value:function(){var t=this.props,n=this.getWeather;return v.a.createElement(e,r()({getWeather:n},t))}}]),n}(b.Component)})},124:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(1),r=Object(i.memo)(function(e){return e.temp.toFixed()+"℃"})},125:function(e,t,n){"use strict";var i=n(1),r=n.n(i),a=n(4),o=Object(a.b)("div",{target:"ef4kh5i0"})("width:100%;box-sizing:border-box;padding:8px 10px;color:#9a0200;border:1px solid #9a0200;background-color:#ffb5b4;"),l=Object(i.memo)(function(e){var t=e.error;return t?r.a.createElement(o,null,"Ошибка: ",t.message||"Error is not recognized"):null});t.a=l},126:function(e,t,n){var i={"./en-au":116,"./en-au.js":116,"./en-ca":117,"./en-ca.js":117,"./en-gb":118,"./en-gb.js":118,"./en-ie":119,"./en-ie.js":119,"./en-il":120,"./en-il.js":120,"./en-nz":121,"./en-nz.js":121};function r(e){var t=a(e);return n(t)}function a(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=126}}]);