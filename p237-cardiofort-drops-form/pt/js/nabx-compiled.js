function AbxTracker(e){function t(t){return(e[t]||"unknown").toString()}function n(t,e,n){var o,i="on"+e;t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent(i,n):(o=t[i])!==undefined?t[i]=function(){n.apply(this,arguments),"function"==typeof o&&o.apply(this,arguments)}:t[i]=n}function d(t){return"array"===(e=t,Object.prototype.toString.call(e).split(" ").pop().replace("]","").toLowerCase());var e}if("object"!=typeof e)return!1;var o=(new Date).getTime(),i=t("uid"),r=t("hid"),a=t("viewId"),c={},u=function(){var t={},e=document.cookie.split(";");if(d(e))for(var n=0;n<e.length;n+=1){var o,i,r=e[n].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").split("=");d(r)&&2===r.length&&(o=r.shift(),i=r.shift(),o&&(t[o]=i))}return t}(),w=function(t){var e,n;t!=={}&&(e=function(t){var e,n,o=[];for(e in t)if("object"==typeof t[e]&&null!==t[e])for(n in t[e])o.push(e+"["+n+"]="+t[e][n]);else o.push(e+"="+t[e]);return 0<o.length?o.join("&"):""}(t),(n=document.createElement("img")).onload=function(){n.parentNode.removeChild(n)},n.setAttribute("width","1"),n.setAttribute("height","1"),n.setAttribute("border","0"),n.setAttribute("src","https://testsabx.com/static/p.gif?"+e),window.document.body.appendChild(n))},l=!1,f=function(){if(!l){l=!0,w(h());for(var t=(new Date).getTime();!(50<(new Date).getTime()-t););}},h=function(){var t={};return t.u=i,t.h=r,t.v=a,t.ho=window.location.host.toString(),t.ur=window.location.pathname,t.a=u.hasOwnProperty("_aabp")?u._aabp.toString():undefined,t.s=c,t.t=(new Date).getTime()-o,t};return n(window,"scroll",function(t){var e,n,o,i=5*Math.floor((e=window.innerHeight||window.document.documentElement.clientHeight||window.document.body.clientHeight||0,n=window.pageYOffset||window.document.body.scrollTop||window.document.documentElement.scrollTop||0,o=[window.document.body.scrollHeight||0,window.document.documentElement.scrollHeight||0,window.document.body.offsetHeight||0,window.document.documentElement.offsetHeight||0,window.document.body.clientHeight||0,window.document.documentElement.clientHeight||0],100*(n+e)/Math.max.apply(Math,o)/5));c.hasOwnProperty(i)||(c[i]=(new Date).getTime())}),n(window,"beforeunload",f),n(window,"unload",f),!0}