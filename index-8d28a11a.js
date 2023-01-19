import{j as t}from"./index-7852c9e4.js";import{B as c}from"./index-6c6ebde7.js";const o=500,n=500,h={title:"Login",loginButton:"Login"},{title:a,loginButton:d}=h,r=()=>{const i=()=>{const e="http://localhost:5001/api",s=(screen.width-o)/2,l=(screen.height-n)/4;window.open(`${e}/auth`,"Google oAuth",`width=${o},
      height=${n},
      top=${l},
      left=${s}`)};return t.jsxs("div",{children:[a,t.jsx(c,{dataQaId:"login-btn",onClick:i,children:d})]})};export{r as default};
