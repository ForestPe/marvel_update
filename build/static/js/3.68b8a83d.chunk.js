(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{35:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",r=c(2);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},36:function(e,t,c){"use strict";var n=c(4),r=c.n(n),a=c(6),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=fdaca32c78165a624969e27dbb327137",j=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"No description of this character.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,10)}},f=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:t,error:n,clearError:o,getAllCharacters:j,getCharacter:b,getAllComics:h,getComic:d}}},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c(0),a=c(19),s=c(35),i=c(36),o=(c(37),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",rel:"noreferrer noopener",target:"_blank",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",rel:"noreferrer noopener",target:"_blank",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),c=t[0],j=t[1],b=Object(i.a)(),h=b.loading,d=b.error,m=b.getCharacter,f=b.clearError;Object(r.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){j(e)},O=function(){f();var e=Math.floor(400*Math.random()+1011e3);m(e).then(p)},v=d?Object(l.jsx)(s.a,{}):null,_=h?Object(l.jsx)(a.a,{}):null,x=h||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,_,x,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?!"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:O,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(7),h=(c(38),function(e){var t=Object(r.useState)([]),c=Object(n.a)(t,2),o=c[0],u=c[1],j=Object(r.useState)(!1),h=Object(n.a)(j,2),d=h[0],m=h[1],f=Object(r.useState)(210),p=Object(n.a)(f,2),O=p[0],v=p[1],_=Object(r.useState)(!1),x=Object(n.a)(_,2),g=x[0],N=x[1],k=Object(i.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(r.useEffect)((function(){E(O,!0)}),[]);var E=function(e,t){m(!t),C(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),m((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(r.useRef)([]),I=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var A=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(o),R=w?Object(l.jsx)(s.a,{}):null,T=y&&!d?Object(l.jsx)(a.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[R,T,A,Object(l.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return E(O)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=c(10),m=(c(39),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),f=(c(40),function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i=t.comics,o=(t.id,{objectFit:"cover"});"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"unset"});var u=i?"Comics:":"Comics: no comics";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",rel:"noreferrer noopener",target:"_blank",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",rel:"noreferrer noopener",target:"_blank",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:u}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(d.b,{to:"/comics/".concat(e.resourceURI.slice(43)),children:e.name})},t)}))]})]})}),p=function(e){var t=Object(r.useState)(null),c=Object(n.a)(t,2),o=c[0],u=c[1],j=Object(i.a)(),b=j.loading,h=j.error,d=j.getCharacter,p=j.clearError;Object(r.useEffect)((function(){O()}),[e.charId]);var O=function(){var t=e.charId;t&&(p(),d(t).then(v))},v=function(e){u(e)},_=o||b||h?null:Object(l.jsx)(m,{}),x=h?Object(l.jsx)(s.a,{}):null,g=b?Object(l.jsx)(a.a,{}):null,N=b||h||!o?null:Object(l.jsx)(f,{char:o});return Object(l.jsxs)("div",{className:"char__info",children:[_,x,g,N]})},O=c(9),v=c(13),_=c(14),x=c(15),g=function(e){Object(_.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(v.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(s.a,{}):this.props.children}}]),c}(r.Component),N=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(g,{children:Object(l.jsx)(h,{onCharSelected:function(e){a(e)}})}),Object(l.jsx)(g,{children:Object(l.jsx)(p,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.68b8a83d.chunk.js.map