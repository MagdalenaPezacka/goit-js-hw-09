const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let d=null;t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=e}),1e3),console.log(d)})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b0204890.js.map
