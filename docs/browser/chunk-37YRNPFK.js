var h=Object.defineProperty,y=(e,r)=>{for(var t in r)h(e,t,{get:r[t],enumerable:!0})},p=(()=>{for(var e=new Uint8Array(128),r=0;r<64;r++)e[r<26?r+65:r<52?r+71:r<62?r-4:r*4-205]=r;return t=>{for(var a=t.length,n=new Uint8Array((a-(t[a-1]=="=")-(t[a-2]=="="))*3/4|0),o=0,v=0;o<a;){var _=e[t.charCodeAt(o++)],d=e[t.charCodeAt(o++)],A=e[t.charCodeAt(o++)],f=e[t.charCodeAt(o++)];n[v++]=_<<2|d>>4,n[v++]=d<<4|A>>2,n[v++]=A<<6|f}return n}})();export{y as a,p as b};
