import{R as u,r as x,i as Ct}from"./index-DMHHSPCc.js";import{R as Tt}from"./index-DzMfoZMH.js";function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},Y.apply(this,arguments)}var I=function(){return I=Object.assign||function(e){for(var o,i=1,r=arguments.length;i<r;i++){o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},I.apply(this,arguments)},ht=function(t){var e=document.createElement("div");return e.setAttribute("id",t),e},_t=function(t){return document.body.appendChild(t),t},S=I(I({},Tt),Ct),bt=S.version,J=S.render;S.unmountComponentAtNode;var $;try{var xt=Number((bt||"").split(".")[0]);xt>=18&&S.createRoot&&($=S.createRoot)}catch{}function st(t){var e=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&typeof e=="object"&&(e.usingClientEntryPoint=t)}var lt="__rc_react_root__";function Rt(t,e){st(!0);var o=e[lt]||$(e);st(!1),o.render(t),e[lt]=o}function yt(t,e){J==null||J(t,e)}function It(t,e){if($!=null){Rt(t,e);return}yt(t,e)}var St=function(){return Date.now()+Math.floor(Math.random()*1e16)},U=function(){return typeof window<"u"},Nt=function(t){for(var e=[],o=t.length-1;o>=0;o--)e.push(t[o]);return e},Lt=function(t,e){var o=t.replace(/[rgb(]|[)]/g,"").split(",").map(function(n){return n.trim()}),i=o[0],r=o[1],s=o[2];return"rgba(".concat(i,", ").concat(r,", ").concat(s,", ").concat(e,")")},ct=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")},kt=2147483647,dt={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",CENTER:"center"},w=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Ot(t){var e=t.color,o=t.children,i=e&&Lt(e,.3);return u.createElement("span",{className:"toast__spinner-wrap"},u.createElement("span",{className:"toast__spinner",style:{border:"2px solid ".concat(i),borderTopColor:e}},o))}var Q={enter:"toast__message--enter-active",exit:"toast__message--exit-active"};function ut(t){var e=t.id,o=t.message,i=t.className,r=t.clickable,s=t.clickClosable,n=t.position,E=t.isExit,g=t.render,v=t.theme,C=t.offsetX,T=t.offsetY,p=t.deltaOffsetX,l=t.deltaOffsetY,R=t.zIndex,f=t.loading,j=t.loadingText,H=t.onClick,B=t.onClose,W=t.onCloseStart,h=t._onEnter,N=r||s,d=x.useRef(null),L=n==null?void 0:n.includes("top"),z=n==null?void 0:n.includes("bottom"),k=n==null?void 0:n.includes("right"),a=n==null?void 0:n.includes("left"),V=n==null?void 0:n.includes("-center"),_=n===dt.CENTER,y=x.useState(!1),b=y[0],A=y[1],O=x.useState({transform:"translate(".concat(p,", ").concat(_?"calc(50% - 20px)":"".concat(parseInt(l||"0")+20*(L?-1:1),"px"),")")}),G=O[0],q=O[1],P=x.useState(!!f),tt=P[0],K=P[1],et=x.useState(),vt=et[0],mt=et[1],nt=_?"50%":L?T:void 0,ot=z?T:void 0,rt=k?C:void 0,at=V||_?"50%":a?C:void 0;w(function(){var m="translate(".concat(p,", ").concat(l,")");q({top:nt,right:rt,bottom:ot,left:at,zIndex:R,transform:m,WebkitTransform:m})},[p,l,R,nt,rt,ot,at]),w(function(){var m;if(!(((m=d.current)===null||m===void 0?void 0:m.clientHeight)==null||b)){var D=d.current.clientWidth,Et=d.current.clientHeight;d.current&&(h==null||h({target:d.current,width:D,height:Et})),A(!0)}},[b,h]),w(function(){if(d.current){var m=d.current.querySelector("span"),D=m&&window.getComputedStyle(m).color;D&&mt(D)}},[]),w(function(){if(f instanceof Promise){K(!0),f.then(function(){K(!1)});return}K(!!f)},[f]),w(function(){E&&W()},[E]);var it=ct("toast__message","toast__message--".concat(n||"bottom-center"),"toast__".concat(v,"-wrapper"),b?Q.enter:"",E?Q.exit:"",tt?"toast__message--loading":""),gt=ct("toast__content",N?"toast__content--clickable":"",!g&&v?"toast__".concat(v):"",!g&&v?"toast__theme-content":"",v||"",i),pt={onClick:H,tabIndex:0,role:"button"};return u.createElement("div",{ref:d,id:e.toString(),className:it,style:G,onTransitionEnd:function(){it.includes(Q.exit)&&B()}},u.createElement("div",Y({className:gt},N&&pt),tt&&u.createElement(Ot,{color:vt},j),g?g(o):o))}var X=function(t){return t&&typeof t=="object"?"message"in t||"duration"in t||"loading"in t:!1};function Pt(t){var e=t.toastComponentList,o=t.onToastEnter,i=function(r,s){e.forEach(function(n){n.id===r.id&&(n.startCloseTimer(),n.height=s.height)}),o()};return u.createElement(u.Fragment,null,e.map(function(r){var s=r.position.includes("top")?Nt(e):e,n=s.findIndex(function(l){return l.id===r.id}),E=s.slice(n+1).filter(function(l){return l.position===r.position&&!l.isExit}),g=E.reduce(function(l,R){var f;return l+((f=R.height)!==null&&f!==void 0?f:0)+r.gap},0),v=r.position.includes("left")||r.position.includes("right")?"0%":"-50%",C=r.position.includes("top")?1:-1,T=g*C,p=r.position==="center"?"calc(-50% - ".concat(T*-1,"px)"):"".concat(T,"px");return u.createElement(x.Fragment,{key:r.id},x.cloneElement(r.component,{isExit:r.isExit,deltaOffsetX:v,deltaOffsetY:p,_onEnter:function(l){return i(r,l)}}))}))}var c=[],wt=function(){var t=U()&&document.getElementById("#toast__container");U()&&!t&&_t(ht("#toast__container")),(!c||!Array.isArray(c))&&(c=[])},Z=function(){},ft={duration:3e3,className:"",position:"bottom-center",offsetX:30,offsetY:30,gap:10,clickClosable:!1,render:null,maxVisibleToasts:null,isReversedOrder:!1,theme:null,loadingText:"loading",zIndex:1e3,clickable:!1,onClick:Z,onClose:Z,onCloseStart:Z,loading:!1},Mt=function(t){var e=Object.values(dt);if(!e.includes(t))throw new Error("Invalid position value. Expected one of ".concat(e.join(", ")," but got ").concat(t));return!0},M=function(){if(U()){var t=document.getElementById("#toast__container");t&&It(u.createElement(Pt,{toastComponentList:c,onToastEnter:M}),t)}};function F(t){var e=c.findIndex(function(o){return o.id===t});c[e]&&(c[e].isExit=!0),M()}function Yt(t,e){var o={close:function(){return null},updateDuration:function(){return null},update:function(){return null}};if(!U())return o;var i,r=St(),s=I(I({},ft),e),n=s||{},E=n.loading,g=n.loadingText,v=n.onClose,C=n.onCloseStart,T=n.clickClosable,p=n.position,l=n.onClick,R=n.gap,f=n.theme,j=n.duration,H=n.isReversedOrder,B=n.maxVisibleToasts,W=j===void 0?ft.duration:j;Mt(p),wt();var h=function(a){T&&(i&&clearTimeout(i),F(r)),l==null||l(a)},N=function(){c=c.filter(function(a){return a.id!==r}),M(),v==null||v()},d=function(a){a===void 0&&(a=s.duration),!(a===null||a===0||a>kt)&&(i&&clearTimeout(i),i=window.setTimeout(function(){F(r)},a))},L={id:r,message:t,position:p,startCloseTimer:d,gap:R,component:u.createElement(ut,Y({},s,{id:r,message:t,onClick:h,onClose:N,onCloseStart:C}))};if(H?c.unshift(L):c.push(L),B)for(var z=c.length-B,k=0;k<z;k++)F(c[k].id);return M(),{close:function(){return F(r)},updateDuration:function(a){a===void 0&&(a=W),d(a)},update:function(a,V){var _,y,b=c.find(function(P){return P.id===r&&!P.isExit});if(b){var A=X(a)?a.duration:V,O=(_=X(a)?a.message:a)!==null&&_!==void 0?_:t,G=X(a)?(y=a.loading)!==null&&y!==void 0?y:E:!1,q=X(a)&&a.theme||f;b.message=O,b.component=u.createElement(ut,Y({},s,{id:r,message:O,theme:q,loading:G,loadingText:g,onClick:h,onClose:N,onCloseStart:C})),M(),A!==void 0&&d(A)}}}}function At(t,e){var o=typeof e=="number"||e===null?{duration:e}:e;return Yt(t,o)}export{At as t};
