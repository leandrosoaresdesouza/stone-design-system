var zr=Object.defineProperty;var a=(e,t)=>zr(e,"name",{value:t,configurable:!0});import{R as $e,r as d}from"./index.d55cd815.js";import{a as F,j as p,F as M}from"./jsx-runtime.66d502a2.js";import{_ as Y}from"./extends.bd401154.js";import{r as Tr}from"./index.5fc4010d.js";var j=a(function(){return j=Object.assign||a(function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},"__assign"),j.apply(this,arguments)},"__assign");function ve(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}a(ve,"__spreadArray");var I="-ms-",ye="-moz-",k="-webkit-",Dt="comm",Ge="rule",pt="decl",Mr="@import",Bt="@keyframes",jr="@layer",Ft=Math.abs,ht=String.fromCharCode,ot=Object.assign;function Dr(e,t){return L(e,0)^45?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}a(Dr,"hash");function Wt(e){return e.trim()}a(Wt,"trim");function G(e,t){return(e=t.exec(e))?e[0]:e}a(G,"match");function b(e,t,r){return e.replace(t,r)}a(b,"replace");function Me(e,t,r){return e.indexOf(t,r)}a(Me,"indexof");function L(e,t){return e.charCodeAt(t)|0}a(L,"charat");function ae(e,t,r){return e.slice(t,r)}a(ae,"substr");function U(e){return e.length}a(U,"strlen");function Ut(e){return e.length}a(Ut,"sizeof");function xe(e,t){return t.push(e),e}a(xe,"append");function Br(e,t){return e.map(t).join("")}a(Br,"combine");function wt(e,t){return e.filter(function(r){return!G(r,t)})}a(wt,"filter");var Ye=1,se=1,Ht=0,D=0,N=0,ue="";function Ve(e,t,r,n,o,i,s,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ye,column:se,length:s,return:"",siblings:c}}a(Ve,"node");function K(e,t){return ot(Ve("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}a(K,"copy");function oe(e){for(;e.root;)e=K(e.root,{children:[e]});xe(e,e.siblings)}a(oe,"lift");function Fr(){return N}a(Fr,"char");function Wr(){return N=D>0?L(ue,--D):0,se--,N===10&&(se=1,Ye--),N}a(Wr,"prev");function W(){return N=D<Ht?L(ue,D++):0,se++,N===10&&(se=1,Ye++),N}a(W,"next");function Q(){return L(ue,D)}a(Q,"peek");function je(){return D}a(je,"caret");function qe(e,t){return ae(ue,e,t)}a(qe,"slice");function it(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}a(it,"token");function Ur(e){return Ye=se=1,Ht=U(ue=e),D=0,[]}a(Ur,"alloc");function Hr(e){return ue="",e}a(Hr,"dealloc");function et(e){return Wt(qe(D-1,at(e===91?e+2:e===40?e+1:e)))}a(et,"delimit");function Gr(e){for(;(N=Q())&&N<33;)W();return it(e)>2||it(N)>3?"":" "}a(Gr,"whitespace");function Yr(e,t){for(;--t&&W()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return qe(e,je()+(t<6&&Q()==32&&W()==32))}a(Yr,"escaping");function at(e){for(;W();)switch(N){case e:return D;case 34:case 39:e!==34&&e!==39&&at(N);break;case 40:e===41&&at(e);break;case 92:W();break}return D}a(at,"delimiter");function Vr(e,t){for(;W()&&e+N!==47+10;)if(e+N===42+42&&Q()===47)break;return"/*"+qe(t,D-1)+"*"+ht(e===47?e:W())}a(Vr,"commenter");function qr(e){for(;!it(Q());)W();return qe(e,D)}a(qr,"identifier");function Kr(e){return Hr(De("",null,null,null,[""],e=Ur(e),0,[0],e))}a(Kr,"compile");function De(e,t,r,n,o,i,s,c,l){for(var u=0,h=0,f=s,m=0,g=0,x=0,w=1,_=1,P=1,E=0,$="",S=o,O=i,A=n,v=$;_;)switch(x=E,E=W()){case 40:if(x!=108&&L(v,f-1)==58){Me(v+=b(et(E),"&","&\f"),"&\f",Ft(u?c[u-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:v+=et(E);break;case 9:case 10:case 13:case 32:v+=Gr(x);break;case 92:v+=Yr(je()-1,7);continue;case 47:switch(Q()){case 42:case 47:xe(Xr(Vr(W(),je()),t,r,l),l);break;default:v+="/"}break;case 123*w:c[u++]=U(v)*P;case 125*w:case 59:case 0:switch(E){case 0:case 125:_=0;case 59+h:P==-1&&(v=b(v,/\f/g,"")),g>0&&U(v)-f&&xe(g>32?Ct(v+";",n,r,f-1,l):Ct(b(v," ","")+";",n,r,f-2,l),l);break;case 59:v+=";";default:if(xe(A=St(v,t,r,u,h,o,c,$,S=[],O=[],f,i),i),E===123)if(h===0)De(v,t,A,A,S,i,f,c,O);else switch(m===99&&L(v,3)===110?100:m){case 100:case 108:case 109:case 115:De(e,A,A,n&&xe(St(e,A,A,0,0,o,c,$,o,S=[],f,O),O),o,O,f,c,n?S:O);break;default:De(v,A,A,A,[""],O,0,c,O)}}u=h=g=0,w=P=1,$=v="",f=s;break;case 58:f=1+U(v),g=x;default:if(w<1){if(E==123)--w;else if(E==125&&w++==0&&Wr()==125)continue}switch(v+=ht(E),E*w){case 38:P=h>0?1:(v+="\f",-1);break;case 44:c[u++]=(U(v)-1)*P,P=1;break;case 64:Q()===45&&(v+=et(W())),m=Q(),h=f=U($=v+=qr(je())),E++;break;case 45:x===45&&U(v)==2&&(w=0)}}return i}a(De,"parse");function St(e,t,r,n,o,i,s,c,l,u,h,f){for(var m=o-1,g=o===0?i:[""],x=Ut(g),w=0,_=0,P=0;w<n;++w)for(var E=0,$=ae(e,m+1,m=Ft(_=s[w])),S=e;E<x;++E)(S=Wt(_>0?g[E]+" "+$:b($,/&\f/g,g[E])))&&(l[P++]=S);return Ve(e,t,r,o===0?Ge:c,l,u,h,f)}a(St,"ruleset");function Xr(e,t,r,n){return Ve(e,t,r,Dt,ht(Fr()),ae(e,2,-2),0,n)}a(Xr,"comment");function Ct(e,t,r,n,o){return Ve(e,t,r,pt,ae(e,0,n),ae(e,n+1,-1),n,o)}a(Ct,"declaration");function Gt(e,t,r){switch(Dr(e,t)){case 5103:return k+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+e+e;case 4789:return ye+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return k+e+ye+e+I+e+e;case 5936:switch(L(e,t+11)){case 114:return k+e+I+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return k+e+I+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return k+e+I+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return k+e+I+e+e;case 6165:return k+e+I+"flex-"+e+e;case 5187:return k+e+b(e,/(\w+).+(:[^]+)/,k+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return k+e+I+"flex-item-"+b(e,/flex-|-self/g,"")+(G(e,/flex-|baseline/)?"":I+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return k+e+I+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return k+e+I+b(e,"shrink","negative")+e;case 5292:return k+e+I+b(e,"basis","preferred-size")+e;case 6060:return k+"box-"+b(e,"-grow","")+k+e+I+b(e,"grow","positive")+e;case 4554:return k+b(e,/([^-])(transform)/g,"$1"+k+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,k+"$1"),/(image-set)/,k+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,k+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+k+e+e;case 4200:if(!G(e,/flex-|baseline/))return I+"grid-column-align"+ae(e,t)+e;break;case 2592:case 3360:return I+b(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,G(n.props,/grid-\w+-end/)})?~Me(e+(r=r[t].value),"span",0)?e:I+b(e,"-start","")+e+I+"grid-row-span:"+(~Me(r,"span",0)?G(r,/\d+/):+G(r,/\d+/)-+G(e,/\d+/))+";":I+b(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return G(n.props,/grid-\w+-start/)})?e:I+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,k+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(e)-1-t>6)switch(L(e,t+1)){case 109:if(L(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+k+"$2-$3$1"+ye+(L(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Me(e,"stretch",0)?Gt(b(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,c,l,u){return I+o+":"+i+u+(s?I+o+"-span:"+(c?l:+l-+i)+u:"")+e});case 4949:if(L(e,t+6)===121)return b(e,":",":"+k)+e;break;case 6444:switch(L(e,L(e,14)===45?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+k+(L(e,14)===45?"inline-":"")+"box$3$1"+k+"$2$3$1"+I+"$2box$3")+e;case 100:return b(e,":",":"+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}a(Gt,"prefix");function We(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}a(We,"serialize");function Zr(e,t,r,n){switch(e.type){case jr:if(e.children.length)break;case Mr:case pt:return e.return=e.return||e.value;case Dt:return"";case Bt:return e.return=e.value+"{"+We(e.children,n)+"}";case Ge:if(!U(e.value=e.props.join(",")))return""}return U(r=We(e.children,n))?e.return=e.value+"{"+r+"}":""}a(Zr,"stringify");function Jr(e){var t=Ut(e);return function(r,n,o,i){for(var s="",c=0;c<t;c++)s+=e[c](r,n,o,i)||"";return s}}a(Jr,"middleware");function Qr(e){return function(t){t.root||(t=t.return)&&e(t)}}a(Qr,"rulesheet");function en(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case pt:e.return=Gt(e.value,e.length,r);return;case Bt:return We([K(e,{value:b(e.value,"@","@"+k)})],n);case Ge:if(e.length)return Br(r=e.props,function(o){switch(G(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oe(K(e,{props:[b(o,/:(read-\w+)/,":"+ye+"$1")]})),oe(K(e,{props:[o]})),ot(e,{props:wt(r,n)});break;case"::placeholder":oe(K(e,{props:[b(o,/:(plac\w+)/,":"+k+"input-$1")]})),oe(K(e,{props:[b(o,/:(plac\w+)/,":"+ye+"$1")]})),oe(K(e,{props:[b(o,/:(plac\w+)/,I+"input-$1")]})),oe(K(e,{props:[o]})),ot(e,{props:wt(r,n)});break}return""})}}a(en,"prefixer");var tn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ce=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Yt="active",Vt="data-styled-version",Ke="6.1.8",mt=`/*!sc*/
`,gt=typeof window<"u"&&"HTMLElement"in window,rn=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Xe=Object.freeze([]),le=Object.freeze({});function nn(e,t,r){return r===void 0&&(r=le),e.theme!==r.theme&&e.theme||t||r.theme}a(nn,"I");var qt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),on=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,an=/(^-|-$)/g;function At(e){return e.replace(on,"-").replace(an,"")}a(At,"R");var sn=/(a)(d)/gi,Le=52,Pt=a(function(e){return String.fromCharCode(e+(e>25?39:97))},"j");function st(e){var t,r="";for(t=Math.abs(e);t>Le;t=t/Le|0)r=Pt(t%Le)+r;return(Pt(t%Le)+r).replace(sn,"$1-$2")}a(st,"x");var tt,Kt=5381,ie=a(function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},"M"),Xt=a(function(e){return ie(Kt,e)},"$");function Zt(e){return st(Xt(e)>>>0)}a(Zt,"z");function cn(e){return e.displayName||e.name||"Component"}a(cn,"B");function rt(e){return typeof e=="string"&&!0}a(rt,"L");var Jt=typeof Symbol=="function"&&Symbol.for,Qt=Jt?Symbol.for("react.memo"):60115,ln=Jt?Symbol.for("react.forward_ref"):60112,dn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},un={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},er={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fn=((tt={})[ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tt[Qt]=er,tt);function Et(e){return("type"in(t=e)&&t.type.$$typeof)===Qt?er:"$$typeof"in e?fn[e.$$typeof]:dn;var t}a(Et,"X");var pn=Object.defineProperty,hn=Object.getOwnPropertyNames,_t=Object.getOwnPropertySymbols,mn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,It=Object.prototype;function tr(e,t,r){if(typeof t!="string"){if(It){var n=gn(t);n&&n!==It&&tr(e,n,r)}var o=hn(t);_t&&(o=o.concat(_t(t)));for(var i=Et(e),s=Et(t),c=0;c<o.length;++c){var l=o[c];if(!(l in un||r&&r[l]||s&&l in s||i&&l in i)){var u=mn(t,l);try{pn(e,l,u)}catch{}}}}return e}a(tr,"oe");function de(e){return typeof e=="function"}a(de,"re");function bt(e){return typeof e=="object"&&"styledComponentId"in e}a(bt,"se");function J(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}a(J,"ie");function ct(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}a(ct,"ae");function ke(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}a(ke,"ce");function lt(e,t,r){if(r===void 0&&(r=!1),!r&&!ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=lt(e[n],t[n]);else if(ke(t))for(var n in t)e[n]=lt(e[n],t[n]);return e}a(lt,"le");function xt(e,t){Object.defineProperty(e,"toString",{value:t})}a(xt,"ue");function Se(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}a(Se,"he");var bn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return a(e,"e"),e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Se(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(mt);return r},e}(),Be=new Map,Ue=new Map,Fe=1,ze=a(function(e){if(Be.has(e))return Be.get(e);for(;Ue.has(Fe);)Fe++;var t=Fe++;return Be.set(e,t),Ue.set(t,e),t},"ge"),xn=a(function(e,t){Fe=t+1,Be.set(e,t),Ue.set(t,e)},"Se"),yn="style[".concat(ce,"][").concat(Vt,'="').concat(Ke,'"]'),$n=new RegExp("^".concat(ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vn=a(function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},"Ee"),kn=a(function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(mt),o=[],i=0,s=n.length;i<s;i++){var c=n[i].trim();if(c){var l=c.match($n);if(l){var u=0|parseInt(l[1],10),h=l[2];u!==0&&(xn(h,u),vn(e,h,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(c)}}},"Ne");function wn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}a(wn,"Pe");var rr=a(function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var l=Array.from(c.querySelectorAll("style[".concat(ce,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(ce,Yt),n.setAttribute(Vt,Ke);var s=wn();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},"_e"),Sn=function(){function e(t){this.element=rr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw Se(17)}(this.element),this.length=0}return a(e,"e"),e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Cn=function(){function e(t){this.element=rr(t),this.nodes=this.element.childNodes,this.length=0}return a(e,"e"),e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),An=function(){function e(t){this.rules=[],this.length=0}return a(e,"e"),e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rt=gt,Pn={isServer:!gt,useCSSOMInjection:!rn},nr=function(){function e(t,r,n){t===void 0&&(t=le),r===void 0&&(r={});var o=this;this.options=j(j({},Pn),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&gt&&Rt&&(Rt=!1,function(i){for(var s=document.querySelectorAll(yn),c=0,l=s.length;c<l;c++){var u=s[c];u&&u.getAttribute(ce)!==Yt&&(kn(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),xt(this,function(){return function(i){for(var s=i.getTag(),c=s.length,l="",u=function(f){var m=function(P){return Ue.get(P)}(f);if(m===void 0)return"continue";var g=i.names.get(m),x=s.getGroup(f);if(g===void 0||x.length===0)return"continue";var w="".concat(ce,".g").concat(f,'[id="').concat(m,'"]'),_="";g!==void 0&&g.forEach(function(P){P.length>0&&(_+="".concat(P,","))}),l+="".concat(x).concat(w,'{content:"').concat(_,'"}').concat(mt)},h=0;h<c;h++)u(h);return l}(o)})}return a(e,"e"),e.registerId=function(t){return ze(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(j(j({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new An(o):n?new Sn(o):new Cn(o)}(this.options),new bn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ze(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ze(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ze(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),En=/&/g,_n=/^\s*\/\/.*$/gm;function or(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=or(r.children,t)),r})}a(or,"je");function In(e){var t,r,n,o=e===void 0?le:e,i=o.options,s=i===void 0?le:i,c=o.plugins,l=c===void 0?Xe:c,u=a(function(m,g,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):m},"l"),h=l.slice();h.push(function(m){m.type===Ge&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(En,r).replace(n,u))}),s.prefix&&h.push(en),h.push(Zr);var f=a(function(m,g,x,w){g===void 0&&(g=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var _=m.replace(_n,""),P=Kr(x||g?"".concat(x," ").concat(g," { ").concat(_," }"):_);s.namespace&&(P=or(P,s.namespace));var E=[];return We(P,Jr(h.concat(Qr(function($){return E.push($)})))),E},"p");return f.hash=l.length?l.reduce(function(m,g){return g.name||Se(15),ie(m,g.name)},Kt).toString():"",f}a(In,"xe");var Rn=new nr,dt=In(),ir=$e.createContext({shouldForwardProp:void 0,styleSheet:Rn,stylis:dt});ir.Consumer;$e.createContext(void 0);function Nt(){return d.exports.useContext(ir)}a(Nt,"Be");var ar=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=dt);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,xt(this,function(){throw Se(12,String(n.name))})}return a(e,"e"),e.prototype.getName=function(t){return t===void 0&&(t=dt),this.name+t.hash},e}(),Nn=a(function(e){return e>="A"&&e<="Z"},"Ye");function Ot(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Nn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}a(Ot,"We");var sr=a(function(e){return e==null||e===!1||e===""},"qe"),cr=a(function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!sr(i)&&(Array.isArray(i)&&i.isCss||de(i)?n.push("".concat(Ot(o),":"),i,";"):ke(i)?n.push.apply(n,ve(ve(["".concat(o," {")],cr(i),!1),["}"],!1)):n.push("".concat(Ot(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in tn||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n},"He");function ee(e,t,r,n){if(sr(e))return[];if(bt(e))return[".".concat(e.styledComponentId)];if(de(e)){if(!de(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return ee(o,t,r,n)}var i;return e instanceof ar?r?(e.inject(r,n),[e.getName(n)]):[e]:ke(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(Xe,e.map(function(s){return ee(s,t,r,n)})):[e.toString()]}a(ee,"Ue");function On(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(de(r)&&!bt(r))return!1}return!0}a(On,"Je");var Ln=Xt(Ke),zn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&On(t),this.componentId=r,this.baseHash=ie(Ln,r),this.baseStyle=n,nr.registerId(r)}return a(e,"e"),e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=J(o,this.staticRulesId);else{var i=ct(ee(this.rules,t,r,n)),s=st(ie(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}o=J(o,s),this.staticRulesId=s}else{for(var l=ie(this.baseHash,n.hash),u="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")u+=f;else if(f){var m=ct(ee(f,t,r,n));l=ie(l,m+h),u+=m}}if(u){var g=st(l>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(u,".".concat(g),void 0,this.componentId)),o=J(o,g)}}return o},e}(),lr=$e.createContext(void 0);lr.Consumer;var nt={};function Tn(e,t,r){var n=bt(e),o=e,i=!rt(e),s=t.attrs,c=s===void 0?Xe:s,l=t.componentId,u=l===void 0?function(S,O){var A=typeof S!="string"?"sc":At(S);nt[A]=(nt[A]||0)+1;var v="".concat(A,"-").concat(Zt(Ke+A+nt[A]));return O?"".concat(O,"-").concat(v):v}(t.displayName,t.parentComponentId):l,h=t.displayName,f=h===void 0?function(S){return rt(S)?"styled.".concat(S):"Styled(".concat(cn(S),")")}(e):h,m=t.displayName&&t.componentId?"".concat(At(t.displayName),"-").concat(t.componentId):t.componentId||u,g=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,x=t.shouldForwardProp;if(n&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;x=a(function(S,O){return w(S,O)&&_(S,O)},"w")}else x=w}var P=new zn(r,m,n?o.componentStyle:void 0);function E(S,O){return function(A,v,he){var _e=A.attrs,Er=A.componentStyle,_r=A.defaultProps,Ir=A.foldedComponentIds,Rr=A.styledComponentId,Nr=A.target,Or=$e.useContext(lr),Lr=Nt(),Ze=A.shouldForwardProp||Lr.shouldForwardProp,vt=nn(v,Or,_r)||le,H=function(Re,ge,Ne){for(var be,Z=j(j({},ge),{className:void 0,theme:Ne}),Qe=0;Qe<Re.length;Qe+=1){var Oe=de(be=Re[Qe])?be(Z):be;for(var q in Oe)Z[q]=q==="className"?J(Z[q],Oe[q]):q==="style"?j(j({},Z[q]),Oe[q]):Oe[q]}return ge.className&&(Z.className=J(Z.className,ge.className)),Z}(_e,v,vt),Ie=H.as||Nr,me={};for(var V in H)H[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&H.theme===vt||(V==="forwardedAs"?me.as=H.forwardedAs:Ze&&!Ze(V,Ie)||(me[V]=H[V]));var kt=function(Re,ge){var Ne=Nt(),be=Re.generateAndInjectStyles(ge,Ne.styleSheet,Ne.stylis);return be}(Er,H),Je=J(Ir,Rr);return kt&&(Je+=" "+kt),H.className&&(Je+=" "+H.className),me[rt(Ie)&&!qt.has(Ie)?"class":"className"]=Je,me.ref=he,d.exports.createElement(Ie,me)}($,S,O)}a(E,"O"),E.displayName=f;var $=$e.forwardRef(E);return $.attrs=g,$.componentStyle=P,$.displayName=f,$.shouldForwardProp=x,$.foldedComponentIds=n?J(o.foldedComponentIds,o.styledComponentId):"",$.styledComponentId=m,$.target=n?o.target:e,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(O){for(var A=[],v=1;v<arguments.length;v++)A[v-1]=arguments[v];for(var he=0,_e=A;he<_e.length;he++)lt(O,_e[he],!0);return O}({},o.defaultProps,S):S}}),xt($,function(){return".".concat($.styledComponentId)}),i&&tr($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}a(Tn,"rt");function Lt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}a(Lt,"st");var zt=a(function(e){return Object.assign(e,{isCss:!0})},"it");function C(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(de(e)||ke(e))return zt(ee(Lt(Xe,ve([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ee(n):zt(ee(Lt(n,t)))}a(C,"at");function ut(e,t,r){if(r===void 0&&(r=le),!t)throw Se(1,t);var n=a(function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,C.apply(void 0,ve([o],i,!1)))},"s");return n.attrs=function(o){return ut(e,t,j(j({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return ut(e,t,j(j({},r),o))},n}a(ut,"ct");var dr=a(function(e){return ut(Tn,e)},"lt"),z=dr;qt.forEach(function(e){z[e]=dr(e)});function Ce(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ct(C.apply(void 0,ve([e],t,!1))),o=Zt(n);return new ar(o,n)}a(Ce,"ht");var Mn=d.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ur=a(function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function Tt(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}a(Tt,"_objectWithoutPropertiesLoose");var fr=d.exports.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,s=e.mirrored,c=e.children,l=e.renderPath,u=Tt(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=d.exports.useContext(Mn),f=h.color,m=f===void 0?"currentColor":f,g=h.size,x=h.weight,w=x===void 0?"regular":x,_=h.mirrored,P=_===void 0?!1:_,E=Tt(h,["color","size","weight","mirrored"]);return F("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:g,height:o!=null?o:g,fill:n!=null?n:m,viewBox:"0 0 256 256",transform:s||P?"scale(-1, 1)":void 0},E,u),children:[!!r&&p("title",{children:r}),c,p("rect",{width:"256",height:"256",fill:"none"}),l(i!=null?i:w,n!=null?n:m)]})});fr.displayName="IconBase";const pr=fr;var re=new Map;re.set("bold",function(e){return p(M,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});re.set("duotone",function(e){return p(M,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});re.set("fill",function(){return p(M,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});re.set("light",function(e){return p(M,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});re.set("thin",function(e){return p(M,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});re.set("regular",function(e){return p(M,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var jn=a(function(t,r){return ur(t,r,re)},"renderPath"),hr=d.exports.forwardRef(function(e,t){return p(pr,{...Object.assign({ref:t},e,{renderPath:jn})})});hr.displayName="Check";const Dn=hr;var ne=new Map;ne.set("bold",function(e){return F(M,{children:[p("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),p("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});ne.set("duotone",function(e){return F(M,{children:[p("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),p("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),p("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});ne.set("fill",function(){return p(M,{children:p("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});ne.set("light",function(e){return F(M,{children:[p("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),p("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});ne.set("thin",function(e){return F(M,{children:[p("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),p("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});ne.set("regular",function(e){return F(M,{children:[p("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),p("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var Bn=a(function(t,r){return ur(t,r,ne)},"renderPath"),mr=d.exports.forwardRef(function(e,t){return p(pr,{...Object.assign({ref:t},e,{renderPath:Bn})})});mr.displayName="User";const Fn=mr;function gr(e,t=[]){let r=[];function n(i,s){const c=d.exports.createContext(s),l=r.length;r=[...r,s];function u(f){const{scope:m,children:g,...x}=f,w=(m==null?void 0:m[e][l])||c,_=d.exports.useMemo(()=>x,Object.values(x));return d.exports.createElement(w.Provider,{value:_},g)}a(u,"Provider");function h(f,m){const g=(m==null?void 0:m[e][l])||c,x=d.exports.useContext(g);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${i}\``)}return a(h,"useContext"),u.displayName=i+"Provider",[u,h]}a(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=a(()=>{const i=r.map(s=>d.exports.createContext(s));return a(function(c){const l=(c==null?void 0:c[e])||i;return d.exports.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])},"useScope")},"createScope");return o.scopeName=e,[n,Wn(o,...t)]}a(gr,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Wn(...e){const t=e[0];if(e.length===1)return t;const r=a(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return a(function(i){const s=n.reduce((c,{useScope:l,scopeName:u})=>{const f=l(i)[`__scope${u}`];return{...c,...f}},{});return d.exports.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}a(Wn,"$c512c27ab02ef895$var$composeContextScopes");function yt(e){const t=d.exports.useRef(e);return d.exports.useEffect(()=>{t.current=e}),d.exports.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}a(yt,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const we=Boolean(globalThis==null?void 0:globalThis.document)?d.exports.useLayoutEffect:()=>{};function Un(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}a(Un,"$6ed0406888f73fc4$var$setRef");function br(...e){return t=>e.forEach(r=>Un(r,t))}a(br,"$6ed0406888f73fc4$export$43e446d32b3d21af");function xr(...e){return d.exports.useCallback(br(...e),e)}a(xr,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const yr=d.exports.forwardRef((e,t)=>{const{children:r,...n}=e,o=d.exports.Children.toArray(r),i=o.find(Gn);if(i){const s=i.props.children,c=o.map(l=>l===i?d.exports.Children.count(s)>1?d.exports.Children.only(null):d.exports.isValidElement(s)?s.props.children:null:l);return d.exports.createElement(ft,Y({},n,{ref:t}),d.exports.isValidElement(s)?d.exports.cloneElement(s,void 0,c):null)}return d.exports.createElement(ft,Y({},n,{ref:t}),r)});yr.displayName="Slot";const ft=d.exports.forwardRef((e,t)=>{const{children:r,...n}=e;return d.exports.isValidElement(r)?d.exports.cloneElement(r,{...Yn(n,r.props),ref:t?br(t,r.ref):r.ref}):d.exports.Children.count(r)>1?d.exports.Children.only(null):null});ft.displayName="SlotClone";const Hn=a(({children:e})=>d.exports.createElement(d.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Gn(e){return d.exports.isValidElement(e)&&e.type===Hn}a(Gn,"$5e63c961fc1ce211$var$isSlottable");function Yn(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...c)=>{i(...c),o(...c)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}a(Yn,"$5e63c961fc1ce211$var$mergeProps");const Vn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ae=Vn.reduce((e,t)=>{const r=d.exports.forwardRef((n,o)=>{const{asChild:i,...s}=n,c=i?yr:t;return d.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.exports.createElement(c,Y({},s,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),$r="Avatar",[qn,ti]=gr($r),[Kn,vr]=qn($r),Xn=d.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=d.exports.useState("idle");return d.exports.createElement(Kn,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},d.exports.createElement(Ae.span,Y({},n,{ref:t})))}),Zn="AvatarImage",Jn=d.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=a(()=>{},"onLoadingStatusChange"),...i}=e,s=vr(Zn,r),c=to(n),l=yt(u=>{o(u),s.onImageLoadingStatusChange(u)});return we(()=>{c!=="idle"&&l(c)},[c,l]),c==="loaded"?d.exports.createElement(Ae.img,Y({},i,{ref:t,src:n})):null}),Qn="AvatarFallback",eo=d.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=vr(Qn,r),[s,c]=d.exports.useState(n===void 0);return d.exports.useEffect(()=>{if(n!==void 0){const l=window.setTimeout(()=>c(!0),n);return()=>window.clearTimeout(l)}},[n]),s&&i.imageLoadingStatus!=="loaded"?d.exports.createElement(Ae.span,Y({},o,{ref:t})):null});function to(e){const[t,r]=d.exports.useState("idle");return we(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=a(s=>()=>{!n||r(s)},"updateStatus");return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}a(to,"$cddcb0b647441e34$var$useImageLoadingStatus");const ro=Xn,no=Jn,oo=eo,io="#4fa94d",ao={"aria-busy":!0,role:"progressbar"},so=z.div`
  display: ${e=>e.$visible?"flex":"none"};
`,co="http://www.w3.org/2000/svg",B=242.776657104492,lo=1.6,uo=Ce`
12.5% {
  stroke-dasharray: ${B*.14}px, ${B}px;
  stroke-dashoffset: -${B*.11}px;
}
43.75% {
  stroke-dasharray: ${B*.35}px, ${B}px;
  stroke-dashoffset: -${B*.35}px;
}
100% {
  stroke-dasharray: ${B*.01}px, ${B}px;
  stroke-dashoffset: -${B*.99}px;
}
`;z.path`
  stroke-dasharray: ${B*.01}px, ${B};
  stroke-dashoffset: 0;
  animation: ${uo} ${lo}s linear infinite;
`;const fo=Ce`
to {
   transform: rotate(360deg);
 }
`;z.svg`
  animation: ${fo} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;z.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const po=a(({height:e=80,width:t=80,strokeWidth:r=2,radius:n=1,color:o=io,ariaLabel:i="tail-spin-loading",wrapperStyle:s,wrapperClass:c,visible:l=!0})=>{const u=parseInt(String(r)),h=u+36,f=u/2,m=f+parseInt(String(n))-1;return p(so,{style:s,$visible:l,className:c,"data-testid":"tail-spin-loading","aria-label":i,...ao,children:F("svg",{width:t,height:e,viewBox:`0 0 ${h} ${h}`,xmlns:co,"data-testid":"tail-spin-svg",children:[p("defs",{children:F("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[p("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),p("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),p("stop",{stopColor:o,offset:"100%"})]})}),p("g",{fill:"none",fillRule:"evenodd",children:F("g",{transform:`translate(${f} ${f})`,children:[p("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:r,children:p("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),p("circle",{fill:"#fff",cx:"36",cy:"18",r:m,children:p("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})},"$56d89154a59e79d3$export$f8e5ae7506d65b32"),ho=Ce`
to {
   stroke-dashoffset: 136;
 }
`;z.polygon`
  stroke-dasharray: 17;
  animation: ${ho} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;z.svg`
  transform-origin: 50% 65%;
`;function Mt(e,t,{checkForDefaultPrevented:r=!0}={}){return a(function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}a(Mt,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function mo({prop:e,defaultProp:t,onChange:r=a(()=>{},"onChange")}){const[n,o]=go({defaultProp:t,onChange:r}),i=e!==void 0,s=i?e:n,c=yt(r),l=d.exports.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&c(f)}else o(u)},[i,e,o,c]);return[s,l]}a(mo,"$71cd76cc60e0454e$export$6f32135080cb4c3");function go({defaultProp:e,onChange:t}){const r=d.exports.useState(e),[n]=r,o=d.exports.useRef(n),i=yt(t);return d.exports.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}a(go,"$71cd76cc60e0454e$var$useUncontrolledState");function bo(e){const t=d.exports.useRef({value:e,previous:e});return d.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(bo,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function xo(e){const[t,r]=d.exports.useState(void 0);return we(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,c;if("borderBoxSize"in i){const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,c=u.blockSize}else s=e.offsetWidth,c=e.offsetHeight;r({width:s,height:c})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}a(xo,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function yo(e,t){return d.exports.useReducer((r,n)=>{const o=t[r][n];return o!=null?o:r},e)}a(yo,"$fe963b355347cc68$export$3e6543de14f8614f");const kr=a(e=>{const{present:t,children:r}=e,n=$o(t),o=typeof r=="function"?r({present:n.isPresent}):d.exports.Children.only(r),i=xr(n.ref,o.ref);return typeof r=="function"||n.isPresent?d.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");kr.displayName="Presence";function $o(e){const[t,r]=d.exports.useState(),n=d.exports.useRef({}),o=d.exports.useRef(e),i=d.exports.useRef("none"),s=e?"mounted":"unmounted",[c,l]=yo(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.exports.useEffect(()=>{const u=Te(n.current);i.current=c==="mounted"?u:"none"},[c]),we(()=>{const u=n.current,h=o.current;if(h!==e){const m=i.current,g=Te(u);e?l("MOUNT"):g==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(h&&m!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),we(()=>{if(t){const u=a(f=>{const g=Te(n.current).includes(f.animationName);f.target===t&&g&&Tr.exports.flushSync(()=>l("ANIMATION_END"))},"handleAnimationEnd"),h=a(f=>{f.target===t&&(i.current=Te(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:d.exports.useCallback(u=>{u&&(n.current=getComputedStyle(u)),r(u)},[])}}a($o,"$921a889cee6df7e8$var$usePresence");function Te(e){return(e==null?void 0:e.animationName)||"none"}a(Te,"$921a889cee6df7e8$var$getAnimationName");const wr="Checkbox",[vo,ri]=gr(wr),[ko,wo]=vo(wr),So=d.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:s,disabled:c,value:l="on",onCheckedChange:u,...h}=e,[f,m]=d.exports.useState(null),g=xr(t,$=>m($)),x=d.exports.useRef(!1),w=f?Boolean(f.closest("form")):!0,[_=!1,P]=mo({prop:o,defaultProp:i,onChange:u}),E=d.exports.useRef(_);return d.exports.useEffect(()=>{const $=f==null?void 0:f.form;if($){const S=a(()=>P(E.current),"reset");return $.addEventListener("reset",S),()=>$.removeEventListener("reset",S)}},[f,P]),d.exports.createElement(ko,{scope:r,state:_,disabled:c},d.exports.createElement(Ae.button,Y({type:"button",role:"checkbox","aria-checked":te(_)?"mixed":_,"aria-required":s,"data-state":Sr(_),"data-disabled":c?"":void 0,disabled:c,value:l},h,{ref:g,onKeyDown:Mt(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:Mt(e.onClick,$=>{P(S=>te(S)?!0:!S),w&&(x.current=$.isPropagationStopped(),x.current||$.stopPropagation())})})),w&&d.exports.createElement(Po,{control:f,bubbles:!x.current,name:n,value:l,checked:_,required:s,disabled:c,style:{transform:"translateX(-100%)"}}))}),Co="CheckboxIndicator",Ao=d.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=wo(Co,r);return d.exports.createElement(kr,{present:n||te(i.state)||i.state===!0},d.exports.createElement(Ae.span,Y({"data-state":Sr(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Po=a(e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=d.exports.useRef(null),s=bo(r),c=xo(t);return d.exports.useEffect(()=>{const l=i.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(s!==r&&f){const m=new Event("click",{bubbles:n});l.indeterminate=te(r),f.call(l,te(r)?!1:r),l.dispatchEvent(m)}},[s,r,n]),d.exports.createElement("input",Y({type:"checkbox","aria-hidden":!0,defaultChecked:te(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function te(e){return e==="indeterminate"}a(te,"$e698a72e93240346$var$isIndeterminate");function Sr(e){return te(e)?"indeterminate":e?"checked":"unchecked"}a(Sr,"$e698a72e93240346$var$getState");const Eo=So,_o=Ao;var Io=Object.defineProperty,Ro=Object.defineProperties,No=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,jt=a((e,t,r)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),X=a((e,t)=>{for(var r in t||(t={}))Cr.call(t,r)&&jt(e,r,t[r]);if(He)for(var r of He(t))Ar.call(t,r)&&jt(e,r,t[r]);return e},"__spreadValues"),Pe=a((e,t)=>Ro(e,No(t)),"__spreadProps"),fe=a((e,t)=>{var r={};for(var n in e)Cr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&He)for(var n of He(e))t.indexOf(n)<0&&Ar.call(e,n)&&(r[n]=e[n]);return r},"__objRest"),y={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",stone300:"#05a867",stone500:"#03814f",stone700:"#015F43",stone900:"#00291D"},T={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},pe={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Ee={default:"Roboto, sans-serif",code:"monospace"},R={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},$t={regular:"400",medium:"500",bold:"700"},Pr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},Oo=z.div`
  padding: ${T[6]};
  border-radius: ${pe.md};
  background-color: ${y.white};
  border: solid 1px ${y.gray100};
`;function ni(e){var t=e,{as:r,children:n}=t,o=fe(t,["as","children"]);return p(M,{children:p(Oo,Pe(X({},o),{as:r,children:n}))})}a(ni,"Box");var Lo={xxs:C`
    font-size: ${R.xxs};
  `,xs:C`
    font-size: ${R.xs};
  `,sm:C`
    font-size: ${R.sm};
  `,md:C`
    font-size: ${R.md};
  `,lg:C`
    font-size: ${R.lg};
  `,xl:C`
    font-size: ${R.xl};
  `,"2xl":C`
    font-size: ${R["2xl"]};
  `,"4xl":C`
    font-size: ${R["4xl"]};
  `,"5xl":C`
    font-size: ${R["5xl"]};
  `,"6xl":C`
    font-size: ${R["6xl"]};
  `,"7xl":C`
    font-size: ${R["7xl"]};
  `,"8xl":C`
    font-size: ${R["8xl"]};
  `,"9xl":C`
    font-size: ${R["9xl"]};
  `},zo=z.p`
  font-family: ${Ee.default};
  line-height: ${Pr.base};
  margin: 0;
  color: ${y.gray800};

  ${({size:e})=>e&&Lo[e]}
`;function oi(e){var t=e,{size:r="xl",as:n,children:o}=t,i=fe(t,["size","as","children"]);return p(zo,Pe(X({size:r},i),{as:n,children:o}))}a(oi,"Text");var To={sm:C`
    font-size: ${R.xl};
  `,md:C`
    font-size: ${R["2xl"]};
  `,lg:C`
    font-size: ${R["4xl"]};
  `,xl:C`
    font-size: ${R["5xl"]};
  `,"2xl":C`
    font-size: ${R["6xl"]};
  `,"4xl":C`
    font-size: ${R["7xl"]};
  `,"5xl":C`
    font-size: ${R["8xl"]};
  `,"6xl":C`
    font-size: ${R["9xl"]};
  `},Mo=z.h2`
  font-family: ${Ee.default};
  line-height: ${Pr.shorter};
  margin: 0;
  color: ${y.gray800};

  ${({size:e})=>e&&To[e]}
`;function ii(e){var t=e,{size:r="md",as:n,children:o}=t,i=fe(t,["size","as","children"]);return p(Mo,Pe(X({size:r},i),{as:n,children:o}))}a(ii,"Heading");var jo=z(ro)`
  border-radius: ${pe.full};
  display: inline-block;
  width: ${T[12]};
  height: ${T[12]};
  overflow: hidden;
`,Do=z(no)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; // inherits from father
`,Bo=z(oo)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${y.gray200};
  color: ${y.gray800};

  svg {
    width: ${T[6]};
    height: ${T[6]};
    color: ${y.white};
  }
`;function ai(e){return F(jo,{children:[p(Do,X({},e)),p(Bo,{delayMs:600,children:p(Fn,{})})]})}a(ai,"Avatar2");var Fo={primary:C`
    color: ${y.white};
    background-color: ${y.stone300};

    &:not(:disabled):hover {
      background-color: ${y.stone500};
    }

    &:disabled {
      background-color: ${y.gray200};
    }
  `,secondary:C`
    color: ${y.stone500};
    border: solid 2px ${y.stone500};

    &:not(:disabled):hover {
      color: ${y.white};
      background-color: ${y.stone500};
    }

    &:disabled {
      color: ${y.gray200};
      border-color: ${y.gray200};
    }
  `,tertiary:C`
    color: ${y.gray700};

    &:not(:disabled):hover {
      color: ${y.gray900};
    }

    &:disabled {
      color: ${y.gray200};
    }
  `},Wo={sm:C`
    height: 38px;
  `,md:C`
    height: 46px;
  `},Uo=z.button`
  all: unset;
  border-radius: ${pe.sm};
  font-size: ${R.sm};
  font-weight: ${$t.medium};
  font-family: ${Ee.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${T[4]};
  transition: 0.3s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${T[2]};

  cursor: pointer;

  svg {
    width: ${T[4]};
    height: ${T[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${y.gray100};
  }

  ${({variant:e})=>e&&Fo[e]}
  ${({size:e})=>e&&Wo[e]}
`;function si(e){var t=e,{isLoading:r,variant:n="primary",size:o="md",children:i}=t,s=fe(t,["isLoading","variant","size","children"]);return p(Uo,Pe(X({variant:n,size:o},s),{children:r?F(M,{children:[i,p(po,{color:y.stone300,ariaLabel:"tail-spin-loading",radius:"4"})]}):p(M,{children:i})}))}a(si,"Button");var Ho=z.input`
  background-color: ${y.white};
  padding: ${T[3]} ${T[4]};
  border-radius: ${pe.sm};
  box-sizing: 'border-box';
  border: solid 2px ${y.gray200};

  font-family: ${Ee.default};
  font-size: ${R.sm};
  color: ${y.gray500};
  font-weight: ${$t.regular};

  &:focus {
    border-color: ${y.stone300};
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${y.gray400};
  }
`;function ci(e){var t=fe(e,[]);return p(Ho,X({},t))}a(ci,"TextInput");var Go=z.textarea`
  background-color: ${y.white};
  padding: ${T[3]} ${T[4]};
  border-radius: ${pe.sm};
  box-sizing: 'border-box';
  border: solid 2px ${y.gray200};

  font-family: ${Ee.default};
  font-size: ${R.sm};
  color: ${y.gray500};
  font-weight: ${$t.regular};
  resize: vertical;
  min-height: 80px;

  &:focus {
    border-color: ${y.stone300};
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${y.gray400};
  }
`;function li(e){var t=fe(e,[]);return p(Go,X({},t))}a(li,"TextArea");var Yo=z(Eo)`
  all: unset;
  width: ${T[6]};
  height: ${T[6]};
  background-color: ${y.gray100};
  border-radius: ${pe.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${y.gray200};

  &[data-state='checked'] {
    background-color: ${y.stone300};
  }

  &:focus,
  &[data-state='checked'] {
    border: solid 2px ${y.stone300};
  }
`,Vo=Ce({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),qo=Ce({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Ko=z(_o)`
  color: ${y.white};
  width: ${T[4]};
  height: ${T[4]};

  &[data-state='checked'] {
    animation: ${Vo} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${qo} 200ms ease-out;
  }
`;function di(e){return p(Yo,Pe(X({},e),{children:p(Ko,{asChild:!0,children:p(Dn,{weight:"bold"})})}))}a(di,"Checkbox2");export{ai as A,ni as B,di as C,ii as H,pr as I,oi as T,si as a,li as b,ci as c,ur as r};
//# sourceMappingURL=index.a87963b3.js.map
