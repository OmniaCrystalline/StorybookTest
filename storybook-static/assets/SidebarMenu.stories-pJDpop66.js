import{j as n}from"./jsx-runtime-Bywvkw1S.js";import{r as h}from"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({items:r,defaultSelected:a,isOpen:x=!0,onClose:b})=>{const[P,V]=h.useState(a),[f,W]=h.useState(new Set),$=(e,t)=>{if(e.children&&e.children.length>0){t==null||t.stopPropagation();const s=new Set(f);s.has(e.id)?s.delete(e.id):s.add(e.id),W(s)}else V(e.id),e.onClick&&e.onClick()},T=e=>{e.target===e.currentTarget&&b&&b()},g=(e,t=0)=>{const s=e.children&&e.children.length>0,v=f.has(e.id),A=P===e.id;return n.jsxs("li",{className:"sidebar-menu-item",children:[n.jsxs("button",{className:`sidebar-menu-button ${A?"active":""} level-${t}`,onClick:u=>$(e,u),children:[e.icon&&n.jsx("span",{className:"sidebar-menu-icon",children:e.icon}),n.jsx("span",{className:"sidebar-menu-label",children:e.label}),s&&n.jsx("span",{className:`sidebar-menu-arrow ${v?"expanded":""}`,children:"▶"})]}),s&&v&&n.jsx("ul",{className:"sidebar-menu-sublist",children:e.children.map(u=>g(u,t+1))})]},e.id)};return x?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"sidebar-menu-backdrop",onClick:T,"aria-hidden":"true"}),n.jsx("nav",{className:`sidebar-menu ${x?"open":""}`,children:n.jsx("ul",{className:"sidebar-menu-list",children:r.map(e=>g(e))})})]}):null};try{i.displayName="SidebarMenu",i.__docgenInfo={description:"",displayName:"SidebarMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItem[]"}},defaultSelected:{defaultValue:null,description:"",name:"defaultSelected",required:!1,type:{name:"string"}},isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const R={title:"Components/SidebarMenu",component:i,parameters:{layout:"fullscreen"},tags:["autodocs"]},m=[{id:"1",label:"Home",icon:"🏠"},{id:"2",label:"Profile",icon:"👤"},{id:"3",label:"Settings",icon:"⚙️"},{id:"4",label:"Help",icon:"❓"}],D=[{id:"1",label:"Home",icon:"🏠",children:[{id:"1-1",label:"Dashboard"},{id:"1-2",label:"Analytics"}]},{id:"2",label:"Profile",icon:"👤",children:[{id:"2-1",label:"Personal Data"},{id:"2-2",label:"Security"},{id:"2-3",label:"Subscriptions"}]},{id:"3",label:"Settings",icon:"⚙️",children:[{id:"3-1",label:"General",children:[{id:"3-1-1",label:"Language"},{id:"3-1-2",label:"Theme"}]},{id:"3-2",label:"Notifications"}]},{id:"4",label:"Help",icon:"❓"}],d={render:()=>n.jsx("div",{style:{position:"relative",width:"100%",height:"700px",minHeight:"700px",overflowX:"hidden"},children:n.jsx(i,{items:m,isOpen:!0})})},l={render:()=>n.jsx("div",{style:{position:"relative",width:"100%",height:"700px",minHeight:"700px",overflowX:"hidden"},children:n.jsx(i,{items:m,isOpen:!1})})},o={render:()=>n.jsx("div",{style:{position:"relative",width:"100%",height:"700px",minHeight:"700px",overflowX:"hidden"},children:n.jsx(i,{items:m,defaultSelected:"2",isOpen:!0})})},c={render:()=>n.jsx("div",{style:{position:"relative",width:"100%",height:"700px",minHeight:"700px",overflowX:"hidden"},children:n.jsx(i,{items:D,isOpen:!0})})},B=()=>{const[r,a]=h.useState(!1);return n.jsxs("div",{style:{position:"relative",width:"100%",height:"700px",minHeight:"700px",padding:"2rem",overflowX:"hidden"},children:[n.jsx("button",{onClick:()=>a(!0),children:"Open Menu"}),n.jsx(i,{items:D,isOpen:r,onClose:()=>a(!1)})]})},p={render:()=>n.jsx(B,{})};var S,j,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '700px',
    minHeight: '700px',
    overflowX: 'hidden'
  }}>
            <SidebarMenu items={defaultItems} isOpen={true} />
        </div>
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,I,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '700px',
    minHeight: '700px',
    overflowX: 'hidden'
  }}>
            <SidebarMenu items={defaultItems} isOpen={false} />
        </div>
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var C,H,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '700px',
    minHeight: '700px',
    overflowX: 'hidden'
  }}>
            <SidebarMenu items={defaultItems} defaultSelected="2" isOpen={true} />
        </div>
}`,...(M=(H=o.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,_,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '100%',
    height: '700px',
    minHeight: '700px',
    overflowX: 'hidden'
  }}>
            <SidebarMenu items={nestedItems} isOpen={true} />
        </div>
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var X,E,q;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <InteractiveSidebar />
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const z=["Default","ClosedState","WithSelected","WithNestedMenu","Interactive"];export{l as ClosedState,d as Default,p as Interactive,c as WithNestedMenu,o as WithSelected,z as __namedExportsOrder,R as default};
