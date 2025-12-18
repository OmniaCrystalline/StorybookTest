import{j as e}from"./jsx-runtime-Bywvkw1S.js";import{r as o}from"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=({message:i,type:n="info",duration:s=3e3,onClose:f,showCloseButton:Y=!1,position:Z="bottom-right"})=>{const[ee,te]=o.useState(!0),[oe,ie]=o.useState(!1),y=o.useCallback(()=>{ie(!0),setTimeout(()=>{te(!1),f&&f()},300)},[f]);return o.useEffect(()=>{if(s>0&&s!==1/0){const ne=setTimeout(()=>{y()},s);return()=>clearTimeout(ne)}},[s,y]),ee?e.jsx("div",{className:`toast-container toast-${Z}`,children:e.jsxs("div",{className:`toast toast-${n} ${oe?"toast-exit":"toast-enter"}`,children:[e.jsx("span",{className:"toast-message",children:i}),Y&&e.jsx("button",{className:"toast-close-button",onClick:y,"aria-label":"Close",children:"×"})]})}):null};try{t.displayName="Toast",t.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},duration:{defaultValue:{value:"3000"},description:"",name:"duration",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"bottom-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'}]}}}}}catch{}const le={title:"Components/Toast",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{type:{control:"select",options:["success","error","warning","info"]},position:{control:"select",options:["bottom-right","bottom-left","top-right","top-left"]},duration:{control:"number"},showCloseButton:{control:"boolean"}}},r={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Operation completed successfully!",type:"success",position:"bottom-right",duration:1/0})})},a={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"An error occurred while performing the operation",type:"error",position:"bottom-right",duration:1/0})})},d={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Warning! Please check the entered data",type:"warning",position:"bottom-right",duration:1/0})})},l={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Information message",type:"info",position:"bottom-right",duration:1/0})})},h={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Message with close button",type:"info",position:"bottom-right",showCloseButton:!0,duration:1/0})})},p={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Message with long display duration (10 seconds)",type:"info",position:"bottom-right",duration:1e4,onClose:()=>{}})})},c={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Message without auto-dismiss",type:"info",position:"bottom-right",duration:1/0,showCloseButton:!0})})},m={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Toast in top left corner",type:"info",position:"top-left",duration:1/0})})},u={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Toast in top right corner",type:"success",position:"top-right",duration:1/0})})},g={render:()=>e.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",minHeight:"400px",overflowX:"hidden"},children:e.jsx(t,{message:"Toast in bottom left corner",type:"warning",position:"bottom-left",duration:1/0})})},se=()=>{const[i,n]=o.useState(!1);return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("button",{onClick:()=>n(!0),children:"Show Toast"}),i&&e.jsx(t,{message:"Interactive Toast with auto-close",type:"success",position:"bottom-right",duration:3e3,onClose:()=>n(!1)})]})},v={render:()=>e.jsx(se,{})};var w,x,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Operation completed successfully!" type="success" position="bottom-right" duration={Infinity} />
        </div>
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,I,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="An error occurred while performing the operation" type="error" position="bottom-right" duration={Infinity} />
        </div>
}`,...(j=(I=a.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var H,X,C;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Warning! Please check the entered data" type="warning" position="bottom-right" duration={Infinity} />
        </div>
}`,...(C=(X=d.parameters)==null?void 0:X.docs)==null?void 0:C.source}}};var S,B,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Information message" type="info" position="bottom-right" duration={Infinity} />
        </div>
}`,...(_=(B=l.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,N,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Message with close button" type="info" position="bottom-right" showCloseButton={true} duration={Infinity} />
        </div>
}`,...(P=(N=h.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var V,q,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Message with long display duration (10 seconds)" type="info" position="bottom-right" duration={10000} onClose={() => {}} />
        </div>
}`,...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,W,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Message without auto-dismiss" type="info" position="bottom-right" duration={Infinity} showCloseButton={true} />
        </div>
}`,...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var A,D,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Toast in top left corner" type="info" position="top-left" duration={Infinity} />
        </div>
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var R,$,z;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Toast in top right corner" type="success" position="top-right" duration={Infinity} />
        </div>
}`,...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '400px',
    overflowX: 'hidden'
  }}>
            <Toast message="Toast in bottom left corner" type="warning" position="bottom-left" duration={Infinity} />
        </div>
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <InteractiveToast />
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const he=["Success","ErrorToast","Warning","Info","WithCloseButton","LongDuration","NoAutoDismiss","TopLeftPosition","TopRightPosition","BottomLeftPosition","Interactive"];export{g as BottomLeftPosition,a as ErrorToast,l as Info,v as Interactive,p as LongDuration,c as NoAutoDismiss,r as Success,m as TopLeftPosition,u as TopRightPosition,d as Warning,h as WithCloseButton,he as __namedExportsOrder,le as default};
