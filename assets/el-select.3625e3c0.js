var jl=Object.defineProperty,Ql=Object.defineProperties;var Gl=Object.getOwnPropertyDescriptors;var hl=Object.getOwnPropertySymbols;var Ul=Object.prototype.hasOwnProperty,Jl=Object.prototype.propertyIsEnumerable;var gl=(e,l,t)=>l in e?jl(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,Pe=(e,l)=>{for(var t in l||(l={}))Ul.call(l,t)&&gl(e,t,l[t]);if(hl)for(var t of hl(l))Jl.call(l,t)&&gl(e,t,l[t]);return e},tl=(e,l)=>Ql(e,Gl(l));import{ai as Yl,aj as sl,S as Xl,ak as Zl,N as Ml,t as N,u as $,O as xl,c as v,al as W,k as _l,h as R,L as ze,b as en,a as Ce,o as y,e as B,l as M,r as le,n as g,s as z,j as L,i as se,G as bl,f as P,g as _,am as Bl,w as Dl,P as fe,an as Pl,ao as Fe,ap as dl,aq as cl,a9 as V,ad as ye,ae as pl,ah as x,ag as K,aa as fl,a6 as yl,ar as be,as as ol,z as Cl,E as ln,at as nn,au as Vl,av as re,aw as tn,F as il,p as Sl,ax as q,ay as on,az as an,af as Ol,aA as zl}from"./index.a8fa77aa.js";import{i as Tl,U as ee,a as rn,C as Fl,E as sn}from"./el-input.3b7d04e2.js";import{a as Al,r as Wl,E as un,b as dn,u as cn}from"./el-popper.38e30641.js";import{g as Ae,h as wl,j as pn,_ as Se,d as Nl,u as ue,E as ul,k as fn,l as mn,f as vn,n as hn}from"./base.89b248b3.js";var gn=/\s/;function bn(e){for(var l=e.length;l--&&gn.test(e.charAt(l)););return l}var yn=/^\s+/;function Cn(e){return e&&e.slice(0,bn(e)+1).replace(yn,"")}var Il=0/0,Sn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Tn=/^0o[0-7]+$/i,wn=parseInt;function kl(e){if(typeof e=="number")return e;if(Yl(e))return Il;if(sl(e)){var l=typeof e.valueOf=="function"?e.valueOf():e;e=sl(l)?l+"":l}if(typeof e!="string")return e===0?e:+e;e=Cn(e);var t=On.test(e);return t||Tn.test(e)?wn(e.slice(2),t?2:8):Sn.test(e)?Il:+e}var In=function(){return Xl.Date.now()},al=In,kn="Expected a function",Ln=Math.max,En=Math.min;function Ll(e,l,t){var u,r,d,a,s,p,h=0,m=!1,C=!1,I=!0;if(typeof e!="function")throw new TypeError(kn);l=kl(l)||0,sl(t)&&(m=!!t.leading,C="maxWait"in t,d=C?Ln(kl(t.maxWait)||0,l):d,I="trailing"in t?!!t.trailing:I);function k(S){var O=u,j=r;return u=r=void 0,h=S,a=e.apply(j,O),a}function i(S){return h=S,s=setTimeout(w,l),m?k(S):a}function b(S){var O=S-p,j=S-h,de=l-O;return C?En(de,d-j):de}function T(S){var O=S-p,j=S-h;return p===void 0||O>=l||O<0||C&&j>=d}function w(){var S=al();if(T(S))return D(S);s=setTimeout(w,b(S))}function D(S){return s=void 0,I&&u?k(S):(u=r=void 0,a)}function ne(){s!==void 0&&clearTimeout(s),h=0,u=p=r=s=void 0}function me(){return s===void 0?a:D(al())}function U(){var S=al(),O=T(S);if(u=arguments,r=this,p=S,O){if(s===void 0)return i(p);if(C)return clearTimeout(s),s=setTimeout(w,l),k(p)}return s===void 0&&(s=setTimeout(w,l)),a}return U.cancel=ne,U.flush=me,U}const $n=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d");let Ve;const ft=()=>{var e;if(!Ae)return 0;if(Ve!==void 0)return Ve;const l=document.createElement("div");l.className="el-scrollbar__wrap",l.style.visibility="hidden",l.style.width="100px",l.style.position="absolute",l.style.top="-9999px",document.body.appendChild(l);const t=l.offsetWidth;l.style.overflow="scroll";const u=document.createElement("div");u.style.width="100%",l.appendChild(u);const r=u.offsetWidth;return(e=l.parentNode)==null||e.removeChild(l),Ve=t-r,Ve};function Mn(e,l){if(!Ae)return;if(!l){e.scrollTop=0;return}const t=[];let u=l.offsetParent;for(;u!==null&&e!==u&&e.contains(u);)t.push(u),u=u.offsetParent;const r=l.offsetTop+t.reduce((p,h)=>p+h.offsetTop,0),d=r+l.offsetHeight,a=e.scrollTop,s=a+e.clientHeight;r<a?e.scrollTop=r:d>s&&(e.scrollTop=d-e.clientHeight)}const Bn=["year","month","date","dates","week","datetime","datetimerange","daterange","monthrange"],ql=e=>Zl[e||"default"],Dn=e=>["",...Ml].includes(e),mt=e=>[...Bn].includes(e),Pn=({from:e,replacement:l,scope:t,version:u,ref:r,type:d="API"},a)=>{N(()=>$(a),s=>{},{immediate:!0})},Vn=e=>({focus:()=>{var l,t;(t=(l=e.value)==null?void 0:l.focus)==null||t.call(l)}});var zn={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Fn=e=>(l,t)=>An(l,t,$(e)),An=(e,l,t)=>W(t,e,e).replace(/\{(\w+)\}/g,(u,r)=>{var d;return`${(d=l==null?void 0:l[r])!=null?d:`{${r}}`}`}),Wn=e=>{const l=v(()=>$(e).name),t=_l(e)?e:R(e);return{lang:l,locale:t,t:Fn(e)}},ml=()=>{const e=xl("locale");return Wn(v(()=>e.value||zn))};function Nn(e,l){const t=ze(),u=v(()=>wl(t.props[l])?t.props[l]:t.props.teleported);return Pn({scope:e,from:l,replacement:"teleported",version:"2.1.0",ref:"https://element-plus.org/en-US/component/tooltip.html#attributes"},v(()=>wl(t.props[l]))),{compatTeleported:u}}const Z=new Map;let El;Ae&&(document.addEventListener("mousedown",e=>El=e),document.addEventListener("mouseup",e=>{for(const l of Z.values())for(const{documentHandler:t}of l)t(e,El)}));function $l(e,l){let t=[];return Array.isArray(l.arg)?t=l.arg:pn(l.arg)&&t.push(l.arg),function(u,r){const d=l.instance.popperRef,a=u.target,s=r==null?void 0:r.target,p=!l||!l.instance,h=!a||!s,m=e.contains(a)||e.contains(s),C=e===a,I=t.length&&t.some(i=>i==null?void 0:i.contains(a))||t.length&&t.includes(s),k=d&&(d.contains(a)||d.contains(s));p||h||m||C||I||k||l.value(u,r)}}const qn={beforeMount(e,l){Z.has(e)||Z.set(e,[]),Z.get(e).push({documentHandler:$l(e,l),bindingFn:l.value})},updated(e,l){Z.has(e)||Z.set(e,[]);const t=Z.get(e),u=t.findIndex(d=>d.bindingFn===l.oldValue),r={documentHandler:$l(e,l),bindingFn:l.value};u>=0?t.splice(u,1,r):t.push(r)},unmounted(e){Z.delete(e)}},Rl=en({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:Ml,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Rn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Hn={name:"ElTag"},Kn=Ce(tl(Pe({},Hn),{props:Rl,emits:Rn,setup(e,{emit:l}){const t=e,u=Nl(),r=ue("tag"),d=v(()=>{const{type:p,hit:h,effect:m,closable:C,round:I}=t;return[r.b(),r.is("closable",C),r.m(p),r.m(u.value),r.m(m),r.is("hit",h),r.is("round",I)]}),a=p=>{p.stopPropagation(),l("close",p)},s=p=>{l("click",p)};return(p,h)=>p.disableTransitions?(y(),z(Bl,{key:1,name:`${$(r).namespace.value}-zoom-in-center`},{default:L(()=>[M("span",{class:g($(d)),style:_({backgroundColor:p.color}),onClick:s},[M("span",{class:g($(r).e("content"))},[le(p.$slots,"default")],2),p.closable?(y(),z($(ul),{key:0,class:g($(r).e("close")),onClick:a},{default:L(()=>[se($(bl))]),_:1},8,["class"])):P("v-if",!0)],6)]),_:3},8,["name"])):(y(),B("span",{key:0,class:g($(d)),style:_({backgroundColor:p.color}),onClick:s},[M("span",{class:g($(r).e("content"))},[le(p.$slots,"default")],2),p.closable?(y(),z($(ul),{key:0,class:g($(r).e("close")),onClick:a},{default:L(()=>[se($(bl))]),_:1},8,["class"])):P("v-if",!0)],6))}}));var jn=Se(Kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Qn=Dl(jn),Hl="ElSelectGroup",We="ElSelect";function Gn(e,l){const t=fe(We),u=fe(Hl,{disabled:!1}),r=v(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),d=v(()=>t.props.multiple?C(t.props.modelValue,e.value):I(e.value,t.props.modelValue)),a=v(()=>{if(t.props.multiple){const b=t.props.modelValue||[];return!d.value&&b.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),s=v(()=>e.label||(r.value?"":e.value)),p=v(()=>e.value||e.label||""),h=v(()=>e.disabled||l.groupDisabled||a.value),m=ze(),C=(b=[],T)=>{if(r.value){const w=t.props.valueKey;return b&&b.some(D=>W(D,w)===W(T,w))}else return b&&b.includes(T)},I=(b,T)=>{if(r.value){const{valueKey:w}=t.props;return W(b,w)===W(T,w)}else return b===T},k=()=>{!e.disabled&&!u.disabled&&(t.hoverIndex=t.optionsArray.indexOf(m.proxy))};N(()=>s.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),N(()=>e.value,(b,T)=>{const{remote:w,valueKey:D}=t.props;if(!e.created&&!w){if(D&&typeof b=="object"&&typeof T=="object"&&b[D]===T[D])return;t.setSelected()}}),N(()=>u.disabled,()=>{l.groupDisabled=u.disabled},{immediate:!0});const{queryChange:i}=Pl(t);return N(i,b=>{const{query:T}=$(b),w=new RegExp($n(T),"i");l.visible=w.test(s.value)||e.created,l.visible||t.filteredOptionsCount--}),{select:t,currentLabel:s,currentValue:p,itemSelected:d,isDisabled:h,hoverItem:k}}const Un=Ce({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ue("select"),t=Fe({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:u,itemSelected:r,isDisabled:d,select:a,hoverItem:s}=Gn(e,t),{visible:p,hover:h}=dl(t),m=ze().proxy,C=m.value;a.onOptionCreate(m),cl(()=>{const{selected:k}=a,b=(a.props.multiple?k:[k]).some(T=>T.value===m.value);a.cachedOptions.get(C)===m&&!b&&V(()=>{a.cachedOptions.delete(C)}),a.onOptionDestroy(C,m)});function I(){e.disabled!==!0&&t.groupDisabled!==!0&&a.handleOptionSelect(m,!0)}return{ns:l,currentLabel:u,itemSelected:r,isDisabled:d,select:a,hoverItem:s,visible:p,hover:h,selectOptionClick:I,states:t}}});function Jn(e,l,t,u,r,d){return ye((y(),B("li",{class:g([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...a)=>e.hoverItem&&e.hoverItem(...a)),onClick:l[1]||(l[1]=K((...a)=>e.selectOptionClick&&e.selectOptionClick(...a),["stop"]))},[le(e.$slots,"default",{},()=>[M("span",null,x(e.currentLabel),1)])],34)),[[pl,e.visible]])}var vl=Se(Un,[["render",Jn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Yn=Ce({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=fe(We),l=ue("select"),t=v(()=>e.props.popperClass),u=v(()=>e.props.multiple),r=v(()=>e.props.fitInputWidth),d=R("");function a(){var s;d.value=`${(s=e.selectWrapper)==null?void 0:s.getBoundingClientRect().width}px`}return fl(()=>{a(),Al(e.selectWrapper,a)}),cl(()=>{Wl(e.selectWrapper,a)}),{ns:l,minWidth:d,popperClass:t,isMultiple:u,isFitInputWidth:r}}});function Xn(e,l,t,u,r,d){return y(),B("div",{class:g([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:_({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[le(e.$slots,"default")],6)}var Zn=Se(Yn,[["render",Xn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function xn(e){const{t:l}=ml();return Fe({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,initialInputHeight:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const _n=(e,l,t)=>{const{t:u}=ml(),r=ue("select"),d=R(null),a=R(null),s=R(null),p=R(null),h=R(null),m=R(null),C=R(-1),I=yl({query:""}),k=yl(""),i=fe(fn,{}),b=fe(mn,{}),T=v(()=>!e.filterable||e.multiple||!l.visible),w=v(()=>e.disabled||i.disabled),D=v(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!w.value&&l.inputHovering&&n}),ne=v(()=>e.remote&&e.filterable?"":e.suffixIcon),me=v(()=>r.is("reverse",ne.value&&l.visible)),U=v(()=>e.remote?300:0),S=v(()=>e.loading?e.loadingText||u("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||u("el.select.noMatch"):l.options.size===0?e.noDataText||u("el.select.noData"):null),O=v(()=>Array.from(l.options.values())),j=v(()=>Array.from(l.cachedOptions.values())),de=v(()=>{const n=O.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ve=Nl(),Ne=v(()=>["small"].includes(ve.value)?"small":"default"),qe=v({get(){return l.visible&&S.value!==!1},set(n){l.visible=n}});N(()=>w.value,()=>{V(()=>{H()})}),N(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),N(()=>e.modelValue,(n,o)=>{var c;e.multiple&&(H(),n&&n.length>0||a.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",J(l.query))),he(),e.filterable&&!e.multiple&&(l.inputLength=20),Tl(n,o)||(c=b.validate)==null||c.call(b,"change").catch(f=>vn())},{flush:"post",deep:!0}),N(()=>l.visible,n=>{var o,c,f;n?((c=(o=s.value)==null?void 0:o.updatePopper)==null||c.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(f=a.value)==null||f.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),J(l.query),!e.multiple&&!e.remote&&(I.value.query="",be(I),be(k)))):(a.value&&a.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Re(),V(()=>{a.value&&a.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),N(()=>l.options.entries(),()=>{var n,o,c;if(!Ae)return;(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H();const f=((c=h.value)==null?void 0:c.querySelectorAll("input"))||[];Array.from(f).includes(document.activeElement)||he(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Te()},{flush:"post"}),N(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(C.value=O.value[n]||{}),O.value.forEach(o=>{o.hover=C.value===o})});const H=()=>{e.collapseTags&&!e.filterable||V(()=>{var n,o;if(!d.value)return;const c=d.value.$el.querySelector("input"),f=p.value,E=l.initialInputHeight||ql(ve.value||i.size);c.style.height=l.selected.length===0?`${E}px`:`${Math.max(f?f.clientHeight+(f.clientHeight>E?6:0):0,E)}px`,l.tagInMultiLine=Number.parseFloat(c.style.height)>=E,l.visible&&S.value!==!1&&((o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n))})},J=n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,V(()=>{var o,c;l.visible&&((c=(o=s.value)==null?void 0:o.updatePopper)==null||c.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&V(()=>{const o=a.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Oe(),H()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),be(k)):(l.filteredOptionsCount=l.optionsCount,I.value.query=n,be(I),be(k)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Te()}},Oe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=a.value.value?"":l.cachedPlaceHolder)},Te=()=>{const n=O.value.filter(f=>f.visible&&!f.disabled&&!f.states.groupDisabled),o=n.find(f=>f.created),c=n[0];l.hoverIndex=ke(O.value,o||c)},he=()=>{var n;if(e.multiple)l.selectedLabel="";else{const c=we(e.modelValue);(n=c.props)!=null&&n.created?(l.createdLabel=c.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=c.currentLabel,l.selected=c,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(c=>{o.push(we(c))}),l.selected=o,V(()=>{H()})},we=n=>{let o;const c=ol(n).toLowerCase()==="object",f=ol(n).toLowerCase()==="null",E=ol(n).toLowerCase()==="undefined";for(let G=l.cachedOptions.size-1;G>=0;G--){const F=j.value[G];if(c?W(F,e.valueKey)===W(n,e.valueKey):F.value===n){o={value:n,currentLabel:F.currentLabel,isDisabled:F.isDisabled};break}}if(o)return o;const Y=c?n.label:!f&&!E?n:"",X={value:n,currentLabel:Y};return e.multiple&&(X.hitState=!1),X},Re=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>O.value.findIndex(c=>W(c,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=O.value.findIndex(o=>ie(o)===ie(l.selected))},300)},He=()=>{var n,o;Ke(),(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&H()},Ke=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.getBoundingClientRect().width},je=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,J(l.query))},Qe=Ll(()=>{je()},U.value),Ge=Ll(n=>{J(n.target.value)},U.value),te=n=>{Tl(e.modelValue,n)||t.emit(Fl,n)},Ue=n=>{if(n.target.value.length<=0&&!oe()){const o=e.modelValue.slice();o.pop(),t.emit(ee,o),te(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Q=(n,o)=>{const c=l.selected.indexOf(o);if(c>-1&&!w.value){const f=e.modelValue.slice();f.splice(c,1),t.emit(ee,f),te(f),t.emit("remove-tag",o.value)}n.stopPropagation()},Ie=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(typeof o!="string")for(const c of l.selected)c.isDisabled&&o.push(c.value);t.emit(ee,o),te(o),l.visible=!1,t.emit("clear")},ge=(n,o)=>{var c;if(e.multiple){const f=(e.modelValue||[]).slice(),E=ke(f,n.value);E>-1?f.splice(E,1):(e.multipleLimit<=0||f.length<e.multipleLimit)&&f.push(n.value),t.emit(ee,f),te(f),n.created&&(l.query="",J(""),l.inputLength=20),e.filterable&&((c=a.value)==null||c.focus())}else t.emit(ee,n.value),te(n.value),l.visible=!1;l.isSilentBlur=o,ce(),!l.visible&&V(()=>{pe(n)})},ke=(n=[],o)=>{if(!Cl(o))return n.indexOf(o);const c=e.valueKey;let f=-1;return n.some((E,Y)=>W(E,c)===W(o,c)?(f=Y,!0):!1),f},ce=()=>{l.softFocus=!0;const n=a.value||d.value;n&&(n==null||n.focus())},pe=n=>{var o,c,f,E,Y;const X=Array.isArray(n)?n[0]:n;let G=null;if(X!=null&&X.value){const F=O.value.filter(De=>De.value===X.value);F.length>0&&(G=F[0].$el)}if(s.value&&G){const F=(E=(f=(c=(o=s.value)==null?void 0:o.popperRef)==null?void 0:c.contentRef)==null?void 0:f.querySelector)==null?void 0:E.call(f,`.${r.be("dropdown","wrap")}`);F&&Mn(F,G)}(Y=m.value)==null||Y.handleScroll()},Je=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ye=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Xe=n=>{n.code!==hn.backspace&&oe(!1),l.inputLength=a.value.value.length*15+20,H()},oe=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(!!o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},Le=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,V(()=>J(o));else{const c=o[o.length-1]||"";l.isOnComposition=!rn(c)}},Ze=()=>{V(()=>pe(l.selected))},Ee=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",n))},xe=()=>{var n;l.visible=!1,(n=d.value)==null||n.blur()},_e=n=>{V(()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",n)}),l.softFocus=!1},el=n=>{Ie(n)},$e=()=>{l.visible=!1},Me=()=>{var n;e.automaticDropdown||w.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=a.value||d.value)==null||n.focus()))},ll=()=>{l.visible?O.value[l.hoverIndex]&&ge(O.value[l.hoverIndex],void 0):Me()},ie=n=>Cl(n.value)?W(n.value,e.valueKey):n.value,nl=v(()=>O.value.filter(n=>n.visible).every(n=>n.disabled)),Be=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!nl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=O.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Be(n),V(()=>pe(C.value))}};return{optionsArray:O,selectSize:ve,handleResize:He,debouncedOnInputChange:Qe,debouncedQueryChange:Ge,deletePrevTag:Ue,deleteTag:Q,deleteSelected:Ie,handleOptionSelect:ge,scrollToOption:pe,readonly:T,resetInputHeight:H,showClose:D,iconComponent:ne,iconReverse:me,showNewOption:de,collapseTagSize:Ne,setSelected:he,managePlaceholder:Oe,selectDisabled:w,emptyText:S,toggleLastOptionHitState:oe,resetInputState:Xe,handleComposition:Le,onOptionCreate:Je,onOptionDestroy:Ye,handleMenuEnter:Ze,handleFocus:Ee,blur:xe,handleBlur:_e,handleClearClick:el,handleClose:$e,toggleMenu:Me,selectOption:ll,getValueKey:ie,navigateOptions:Be,dropMenuVisible:qe,queryChange:I,groupQueryChange:k,reference:d,input:a,tooltipRef:s,tags:p,selectWrapper:h,scrollbar:m}},rl="ElSelect",et=Ce({name:rl,componentName:rl,components:{ElInput:sn,ElSelectMenu:Zn,ElOption:vl,ElTag:Qn,ElScrollbar:un,ElTooltip:dn,ElIcon:ul},directives:{ClickOutside:qn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Dn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},popperAppendToBody:{type:Boolean,default:void 0},teleported:cn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:ln},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:nn},tagType:tl(Pe({},Rl.type),{default:"info"})},emits:[ee,Fl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=ue("select"),u=ue("input"),{t:r}=ml(),d=xn(e),{optionsArray:a,selectSize:s,readonly:p,handleResize:h,collapseTagSize:m,debouncedOnInputChange:C,debouncedQueryChange:I,deletePrevTag:k,deleteTag:i,deleteSelected:b,handleOptionSelect:T,scrollToOption:w,setSelected:D,resetInputHeight:ne,managePlaceholder:me,showClose:U,selectDisabled:S,iconComponent:O,iconReverse:j,showNewOption:de,emptyText:ve,toggleLastOptionHitState:Ne,resetInputState:qe,handleComposition:H,onOptionCreate:J,onOptionDestroy:Oe,handleMenuEnter:Te,handleFocus:he,blur:we,handleBlur:Re,handleClearClick:He,handleClose:Ke,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:te,dropMenuVisible:Ue,reference:Q,input:Ie,tooltipRef:ge,tags:ke,selectWrapper:ce,scrollbar:pe,queryChange:Je,groupQueryChange:Ye}=_n(e,d,l),{focus:Xe}=Vn(Q),{inputWidth:oe,selected:Le,inputLength:Ze,filteredOptionsCount:Ee,visible:xe,softFocus:_e,selectedLabel:el,hoverIndex:$e,query:Me,inputHovering:ll,currentPlaceholder:ie,menuVisibleOnFocus:nl,isOnComposition:Be,isSilentBlur:n,options:o,cachedOptions:c,optionsCount:f,prefixWidth:E,tagInMultiLine:Y}=dl(d),X=v(()=>{const A=[t.b()],ae=$(s);return ae&&A.push(t.m(ae)),e.disabled&&A.push(t.m("disabled")),A}),G=v(()=>({maxWidth:`${$(oe)-32}px`,width:"100%"}));Vl(We,Fe({props:e,options:o,optionsArray:a,cachedOptions:c,optionsCount:f,filteredOptionsCount:Ee,hoverIndex:$e,handleOptionSelect:T,onOptionCreate:J,onOptionDestroy:Oe,selectWrapper:ce,selected:Le,setSelected:D,queryChange:Je,groupQueryChange:Ye})),fl(()=>{if(d.cachedPlaceHolder=ie.value=e.placeholder||r("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ie.value=""),Al(ce.value,h),Q.value&&Q.value.$el){const A=Q.value.input;d.initialInputHeight=A.getBoundingClientRect().height||ql(s.value)}e.remote&&e.multiple&&ne(),V(()=>{const A=Q.value&&Q.value.$el;if(!!A&&(oe.value=A.getBoundingClientRect().width,l.slots.prefix)){const ae=A.querySelector(`.${u.e("prefix")}`);E.value=Math.max(ae.getBoundingClientRect().width+5,30)}}),D()}),cl(()=>{Wl(ce.value,h)}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ee,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ee,"");const F=v(()=>{var A,ae;return(ae=(A=ge.value)==null?void 0:A.popperRef)==null?void 0:ae.contentRef}),{compatTeleported:De}=Nn(rl,"popperAppendToBody");return{tagInMultiLine:Y,prefixWidth:E,selectSize:s,readonly:p,handleResize:h,collapseTagSize:m,debouncedOnInputChange:C,debouncedQueryChange:I,deletePrevTag:k,deleteTag:i,deleteSelected:b,handleOptionSelect:T,scrollToOption:w,inputWidth:oe,selected:Le,inputLength:Ze,filteredOptionsCount:Ee,visible:xe,softFocus:_e,selectedLabel:el,hoverIndex:$e,query:Me,inputHovering:ll,currentPlaceholder:ie,menuVisibleOnFocus:nl,isOnComposition:Be,isSilentBlur:n,options:o,resetInputHeight:ne,managePlaceholder:me,showClose:U,selectDisabled:S,iconComponent:O,iconReverse:j,showNewOption:de,emptyText:ve,toggleLastOptionHitState:Ne,resetInputState:qe,handleComposition:H,handleMenuEnter:Te,handleFocus:he,blur:we,handleBlur:Re,handleClearClick:He,handleClose:Ke,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:te,dropMenuVisible:Ue,focus:Xe,reference:Q,input:Ie,tooltipRef:ge,popperPaneRef:F,tags:ke,selectWrapper:ce,scrollbar:pe,wrapperKls:X,selectTagsStyle:G,compatTeleported:De,nsSelect:t}}}),lt={class:"select-trigger"},nt=["disabled","autocomplete"],tt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function ot(e,l,t,u,r,d){const a=re("el-tag"),s=re("el-tooltip"),p=re("el-icon"),h=re("el-input"),m=re("el-option"),C=re("el-scrollbar"),I=re("el-select-menu"),k=tn("click-outside");return ye((y(),B("div",{ref:"selectWrapper",class:g(e.wrapperKls),onClick:l[24]||(l[24]=K((...i)=>e.toggleMenu&&e.toggleMenu(...i),["stop"]))},[se(s,{ref:"tooltipRef",visible:e.dropMenuVisible,"onUpdate:visible":l[23]||(l[23]=i=>e.dropMenuVisible=i),placement:"bottom-start",teleported:e.compatTeleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>[M("div",lt,[e.multiple?(y(),B("div",{key:0,ref:"tags",class:g(e.nsSelect.e("tags")),style:_(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(y(),B("span",{key:0,class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[se(a,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=i=>e.deleteTag(i,e.selected[0]))},{default:L(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:_({maxWidth:e.inputWidth-123+"px"})},x(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(y(),z(a,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(y(),z(s,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:L(()=>[M("span",{class:g(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-1),3)]),content:L(()=>[M("div",{class:g(e.nsSelect.e("collapse-tags"))},[(y(!0),B(il,null,Sl(e.selected,(i,b)=>(y(),B("div",{key:b,class:g(e.nsSelect.e("collapse-tag"))},[(y(),z(a,{key:e.getValueKey(i),class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:T=>e.deleteTag(T,i)},{default:L(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:_({maxWidth:e.inputWidth-75+"px"})},x(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect"])):(y(),B("span",{key:1,class:g(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-1),3))]),_:1},8,["size","type"])):P("v-if",!0)],2)):P("v-if",!0),P(" <div> "),e.collapseTags?P("v-if",!0):(y(),z(Bl,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[M("span",{class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(y(!0),B(il,null,Sl(e.selected,i=>(y(),z(a,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:b=>e.deleteTag(b,i)},{default:L(()=>[M("span",{class:g(e.nsSelect.e("tags-text")),style:_({maxWidth:e.inputWidth-75+"px"})},x(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),P(" </div> "),e.filterable?ye((y(),B("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=i=>e.query=i),type:"text",class:g([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:_({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[3]||(l[3]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[4]||(l[4]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[5]||(l[5]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[6]||(l[6]=q(K(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(K(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q(K(i=>e.visible=!1,["stop","prevent"]),["esc"])),l[9]||(l[9]=q(K((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[11]||(l[11]=q(i=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[14]||(l[14]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[15]||(l[15]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,nt)),[[on,e.query]]):P("v-if",!0)],6)):P("v-if",!0),se(h,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=i=>e.selectedLabel=i),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:g([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(K(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(K(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(K(e.selectOption,["stop","prevent"]),["enter"]),l[19]||(l[19]=q(K(i=>e.visible=!1,["stop","prevent"]),["esc"])),l[20]||(l[20]=q(i=>e.visible=!1,["tab"]))],onMouseenter:l[21]||(l[21]=i=>e.inputHovering=!0),onMouseleave:l[22]||(l[22]=i=>e.inputHovering=!1)},an({suffix:L(()=>[e.iconComponent&&!e.showClose?(y(),z(p,{key:0,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(y(),z(Ol(e.iconComponent)))]),_:1},8,["class"])):P("v-if",!0),e.showClose&&e.clearIcon?(y(),z(p,{key:1,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(y(),z(Ol(e.clearIcon)))]),_:1},8,["class","onClick"])):P("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[M("div",tt,[le(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:L(()=>[se(I,null,{default:L(()=>[ye(se(C,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:g([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:L(()=>[e.showNewOption?(y(),z(m,{key:0,value:e.query,created:!0},null,8,["value"])):P("v-if",!0),le(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[pl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(y(),B(il,{key:0},[e.$slots.empty?le(e.$slots,"empty",{key:0}):(y(),B("p",{key:1,class:g(e.nsSelect.be("dropdown","empty"))},x(e.emptyText),3))],2112)):P("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[k,e.handleClose,e.popperPaneRef]])}var it=Se(et,[["render",ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const at=Ce({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ue("select"),t=R(!0),u=ze(),r=R([]);Vl(Hl,Fe(Pe({},dl(e))));const d=fe(We);fl(()=>{r.value=a(u.subTree)});const a=p=>{const h=[];return Array.isArray(p.children)&&p.children.forEach(m=>{var C;m.type&&m.type.name==="ElOption"&&m.component&&m.component.proxy?h.push(m.component.proxy):(C=m.children)!=null&&C.length&&h.push(...a(m))}),h},{groupQueryChange:s}=Pl(d);return N(s,()=>{t.value=r.value.some(p=>p.visible===!0)}),{visible:t,ns:l}}});function rt(e,l,t,u,r,d){return ye((y(),B("ul",{class:g(e.ns.be("group","wrap"))},[M("li",{class:g(e.ns.be("group","title"))},x(e.label),3),M("li",null,[M("ul",{class:g(e.ns.b("group"))},[le(e.$slots,"default")],2)])],2)),[[pl,e.visible]])}var Kl=Se(at,[["render",rt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const vt=Dl(it,{Option:vl,OptionGroup:Kl}),ht=zl(vl);zl(Kl);export{qn as C,ht as E,vt as a,mt as b,Ll as d,ft as g,Dn as i,ml as u};
