var E=Object.defineProperty;var f=(n,i)=>E(n,"name",{value:i,configurable:!0});import{B as F,C as O,D as x,p as R,E as S,F as N,G as C}from"./iframe.b9b19e6b.js";var T=x,j=F,D=O,q=RangeError,V=f(function(i){var r=j(D(this)),e="",t=T(i);if(t<0||t===1/0)throw new q("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},"repeat"),k=R,$=S,z=x,B=C,G=V,d=N,M=RangeError,I=String,y=Math.floor,w=$(G),b=$("".slice),g=$(1 .toFixed),s=f(function(n,i,r){return i===0?r:i%2===1?s(n,i-1,r*n):s(n*n,i/2,r)},"pow"),U=f(function(n){for(var i=0,r=n;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},"log"),u=f(function(n,i,r){for(var e=-1,t=r;++e<6;)t+=i*n[e],n[e]=t%1e7,t=y(t/1e7)},"multiply"),p=f(function(n,i){for(var r=6,e=0;--r>=0;)e+=n[r],n[r]=y(e/i),e=e%i*1e7},"divide"),m=f(function(n){for(var i=6,r="";--i>=0;)if(r!==""||i===0||n[i]!==0){var e=I(n[i]);r=r===""?e:r+w("0",7-e.length)+e}return r},"dataToString"),W=d(function(){return g(8e-5,3)!=="0.000"||g(.9,0)!=="1"||g(1.255,2)!=="1.25"||g(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!d(function(){g({})});k({target:"Number",proto:!0,forced:W},{toFixed:f(function(i){var r=B(this),e=z(i),t=[0,0,0,0,0,0],h="",a="0",o,c,v,l;if(e<0||e>20)throw new M("Incorrect fraction digits");if(r!==r)return"NaN";if(r<=-1e21||r>=1e21)return I(r);if(r<0&&(h="-",r=-r),r>1e-21)if(o=U(r*s(2,69,1))-69,c=o<0?r*s(2,-o,1):r/s(2,o,1),c*=4503599627370496,o=52-o,o>0){for(u(t,0,c),v=e;v>=7;)u(t,1e7,0),v-=7;for(u(t,s(10,v,1),0),v=o-1;v>=23;)p(t,1<<23),v-=23;p(t,1<<v),u(t,1,1),p(t,2),a=m(t)}else u(t,0,c),u(t,1<<-o,0),a=m(t)+w("0",e);return e>0?(l=a.length,a=h+(l<=e?"0."+w("0",e-l)+a:b(a,0,l-e)+"."+b(a,l-e))):a=h+a,a},"toFixed")});export{V as s};
//# sourceMappingURL=es.number.to-fixed.1ccc7ff5.js.map
