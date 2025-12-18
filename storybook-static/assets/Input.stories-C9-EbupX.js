import{j as e}from"./jsx-runtime-Bywvkw1S.js";import{r as y}from"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=({label:b,error:h,className:Q="",type:f="text",clearable:X=!1,value:a,onChange:t,...Y})=>{const[s,Z]=y.useState(!1),[ee,g]=y.useState(a||""),r=a!==void 0,E=r?a:ee;y.useEffect(()=>{r&&a!==void 0&&g(a)},[a,r]);const v=f==="password",ae=v&&s?"text":f,re=String(E||"").length>0,te=w=>{r||g(w.target.value),t&&t(w)},se=()=>{r||g(""),t&&t({target:{value:""},currentTarget:{value:""}})},le=()=>{Z(!s)};return e.jsxs("div",{className:`input-wrapper ${Q}`,children:[b&&e.jsx("label",{className:"input-label",children:b}),e.jsxs("div",{className:"input-container",children:[e.jsx("input",{className:`input ${h?"input-error":""}`,type:ae,value:E,onChange:te,...Y}),e.jsxs("div",{className:"input-actions",children:[v&&e.jsx("button",{type:"button",className:"input-action-button",onClick:le,"aria-label":s?"Hide password":"Show password",children:s?"👁️":"👁️‍🗨️"}),X&&re&&e.jsx("button",{type:"button",className:"input-action-button",onClick:se,"aria-label":"Clear",children:"✕"})]})]}),h&&e.jsx("span",{className:"input-error-message",children:h})]})};try{x.displayName="Input",x.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"search"'}]}}}}}catch{}const pe={title:"Components/Input",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","number","email","tel","url","search"]},clearable:{control:"boolean"}}},l={args:{label:"Text",placeholder:"Enter text...",type:"text",clearable:!1}},n={args:{label:"Text with clear",placeholder:"Enter text...",type:"text",clearable:!0}},o={args:{label:"Password (with eye icon)",placeholder:"Enter password",type:"password",clearable:!1}},c={args:{label:"Password with clear",placeholder:"Enter password",type:"password",clearable:!0}},p={args:{label:"Number",placeholder:"Enter number",type:"number",clearable:!1}},i={args:{label:"Number with clear",placeholder:"Enter number",type:"number",clearable:!0}},d={args:{label:"Username",placeholder:"Enter username",type:"text"}},u={args:{label:"Email",placeholder:"Enter email",type:"email",error:"Invalid email format"}},m={args:{label:"Disabled field",placeholder:"Unavailable",disabled:!0}};var N,S,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Text',
    placeholder: 'Enter text...',
    type: 'text',
    clearable: false
  }
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var C,T,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Text with clear',
    placeholder: 'Enter text...',
    type: 'text',
    clearable: true
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var W,_,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Password (with eye icon)',
    placeholder: 'Enter password',
    type: 'password',
    clearable: false
  }
}`,...(V=(_=o.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var I,q,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Password with clear',
    placeholder: 'Enter password',
    type: 'password',
    clearable: true
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var U,k,L;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Number',
    placeholder: 'Enter number',
    type: 'number',
    clearable: false
  }
}`,...(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var $,H,O;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Number with clear',
    placeholder: 'Enter number',
    type: 'number',
    clearable: true
  }
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var R,z,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    type: 'text'
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,F,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    type: 'email',
    error: 'Invalid email format'
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    placeholder: 'Unavailable',
    disabled: true
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ie=["Text","TextWithClearable","Password","PasswordWithClearable","Number","NumberWithClearable","WithLabel","WithError","Disabled"];export{m as Disabled,p as Number,i as NumberWithClearable,o as Password,c as PasswordWithClearable,l as Text,n as TextWithClearable,u as WithError,d as WithLabel,ie as __namedExportsOrder,pe as default};
