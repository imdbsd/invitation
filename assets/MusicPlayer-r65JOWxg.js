import{c as u,r as t,u as F,j as o,a as P}from"./index-D17qRFr3.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],m=u("pause",h);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],p=u("play",g),b=40,j=10,C=n=>{const s=t.useRef(null),[l,d]=t.useState(void 0),{isPlayingBGMusic:c,setPlayMedia:r}=F(),a=t.useCallback(e=>{s.current&&(e?s.current.play():s.current.pause())},[]),f=t.useCallback(()=>{const e=!c;r("music",e),a(e)},[c,r,a]),i=t.useCallback(()=>{var e;if((e=n.containerRef)!=null&&e.current){const x=n.containerRef.current.clientWidth,y=n.containerRef.current.offsetLeft+x-(b+j);d(y)}},[n]);return t.useEffect(()=>{s.current&&(s.current.volume=.5),i()},[i]),t.useEffect(()=>{a(c)},[c,a]),o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:f,className:"p-2 bg-[#F7CFD8] rounded-full cursor-pointer bottom-5 z-20 fixed",style:{left:l},children:c?o.jsx(m,{color:"#FFF",fill:"#FFF"}):o.jsx(p,{color:"#FFF",fill:"#FFF"})}),o.jsx("audio",{autoPlay:!0,ref:s,controls:!0,className:"hidden",loop:!0,preload:"metadata",children:o.jsx("source",{src:P("bg-audio-2.mp3"),type:"audio/mp3"})})]})};export{C as default};
