"use strict";(self.webpackChunktc_chinese_tutor=self.webpackChunktc_chinese_tutor||[]).push([[262],{8647:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294);const l="heroBanner_jsEf",n="heroTitle_FGBM",s="heroSubtitle_JZTr",o="underline_nuEI";var c=a(6010);const u=e=>{let{title:t,body:a,extra:u}=e;return r.createElement("header",{className:(0,c.Z)("hero hero--primary",l)},r.createElement("div",{className:"container"},r.createElement("h1",{className:(0,c.Z)("hero__title",n)},t),r.createElement("div",{className:"padding-bottom--lg",style:{display:"flex",justifyContent:"center"}}," ",r.createElement("div",{className:o})),r.createElement("p",{className:(0,c.Z)("hero__subtitle",s)},a),u))}},5863:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(7294),l=a(3285),n=a(8647),s=a(6010);const o="form_N9qP",c="input_VNcB",u="button_yCQ2";var i=a(6154);const m=()=>{const[e,t]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[n,m]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),[p,E]=(0,r.useState)(!1);(0,r.useEffect)((()=>{E(!1),e&&a&&n&&E(!0)}),[e,a,n,d]);return r.createElement("section",null,r.createElement("div",{className:"container margin-bottom--xl center"},r.createElement("div",{className:(0,s.Z)("row",o)},r.createElement("input",{type:"text",placeholder:"Youtube Code",value:e,onChange:e=>t(e.target.value),className:(0,s.Z)(c)}),r.createElement("textarea",{type:"text",placeholder:"Title",value:a,onChange:e=>l(e.target.value),className:(0,s.Z)(c)}),r.createElement("textarea",{type:"text",placeholder:"Description",value:n,onChange:e=>m(e.target.value),className:(0,s.Z)(c),rows:"4"}),r.createElement("textarea",{type:"text",placeholder:"Answer",value:d,onChange:e=>h(e.target.value),className:(0,s.Z)(c),rows:"4"}),r.createElement("button",{disabled:!p,onClick:async()=>{try{await i.Z.post("https://2413-24-188-229-60.ngrok-free.app/functions/v1/youtube-videos",{youtubeCode:e,title:a,description:n,answer:d})}catch(t){console.error(t),console.error(t.response.data),console.error(t.response.status),console.error(t.response.headers)}},className:(0,s.Z)(u)},"Submit"))))},d=()=>r.createElement(l.Z,null,r.createElement(n.Z,{title:"Manage Youtube Videos",body:"Fill out this form to add more Youtube videos to the website"}),r.createElement("main",null,r.createElement(m,null)))}}]);