import './polyfills.server.mjs';
import{$b as Te,Ca as K,E as oe,Ic as be,N as ie,Q as ae,R as ce,T as D,W as b,Y as v,Z as g,Za as fe,Zb as me,_a as pe,_b as ge,c as G,fa as le,fb as ye,i as re,ia as de,j as V,ja as he,n as F,rc as we,v as te,vc as Ee,y as se,za as ue}from"./chunk-4YRJDS4A.mjs";import{a as q,d as ne,h as W}from"./chunk-VVCT4QZE.mjs";var L=class{},U=class{},E=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Y=class{encodeKey(n){return ve(n)}encodeValue(n){return ve(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function _e(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,o)),n.decodeValue(s.slice(o+1))],h=t.get(a)||[];h.push(i),t.set(a,h)}),t}var Je=/%(\d[a-f0-9])/gi,$e={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ve(e){return encodeURIComponent(e).replace(Je,(n,t)=>$e[t]??n)}function X(e){return`${e}`}var R=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new Y,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=_e(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(X):[X(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(X(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(X(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var Z=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function qe(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Pe(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Re(e){return typeof Blob<"u"&&e instanceof Blob}function Ne(e){return typeof FormData<"u"&&e instanceof FormData}function We(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var j=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let o;if(qe(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new E,this.context??=new Z,!this.params)this.params=new R,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let i=t.indexOf("?"),h=i===-1?"?":i<t.length-1?"&":"";this.urlWithParams=t+h+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Pe(this.body)||Re(this.body)||Ne(this.body)||We(this.body)?this.body:this.body instanceof R?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ne(this.body)?null:Re(this.body)?this.body.type||null:Pe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof R?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,o=n.transferCache??this.transferCache,a=n.body!==void 0?n.body:this.body,i=n.withCredentials??this.withCredentials,h=n.reportProgress??this.reportProgress,c=n.headers||this.headers,f=n.params||this.params,u=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((p,T)=>p.set(T,n.setHeaders[T]),c)),n.setParams&&(f=Object.keys(n.setParams).reduce((p,T)=>p.set(T,n.setParams[T]),f)),new e(t,r,a,{params:f,headers:c,context:u,reportProgress:h,responseType:s,withCredentials:i,transferCache:o})}},N=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(N||{}),B=class{constructor(n,t=z.Ok,r="OK"){this.headers=n.headers||new E,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},J=class e extends B{constructor(n={}){super(n),this.type=N.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},I=class e extends B{constructor(n={}){super(n),this.type=N.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},P=class extends B{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},z=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(z||{});function S(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ge=(()=>{let n=class n{constructor(r){this.handler=r}request(r,s,o={}){let a;if(r instanceof j)a=r;else{let c;o.headers instanceof E?c=o.headers:c=new E(o.headers);let f;o.params&&(o.params instanceof R?f=o.params:f=new R({fromObject:o.params})),a=new j(r,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=V(a).pipe(se(c=>this.handler.handle(c)));if(r instanceof j||o.observe==="events")return i;let h=i.pipe(te(c=>c instanceof I));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return h.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return h.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return h.pipe(F(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return h.pipe(F(c=>c.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(r,s={}){return this.request("DELETE",r,s)}get(r,s={}){return this.request("GET",r,s)}head(r,s={}){return this.request("HEAD",r,s)}jsonp(r,s){return this.request("JSONP",r,{params:new R().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,s={}){return this.request("OPTIONS",r,s)}patch(r,s,o={}){return this.request("PATCH",r,S(o,s))}post(r,s,o={}){return this.request("POST",r,S(o,s))}put(r,s,o={}){return this.request("PUT",r,S(o,s))}};n.\u0275fac=function(s){return new(s||n)(v(L))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),Ke=/^\)\]\}',?\n/,Se="X-Request-URL";function Ae(e){if(e.url)return e.url;let n=Se.toLocaleLowerCase();return e.headers.get(n)}var C=(()=>{let n=class n{constructor(){this.fetchImpl=g(Q,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=g(pe)}handle(r){return new G(s=>{let o=new AbortController;return this.doRequest(r,o.signal,s).then(H,a=>s.error(new P({error:a}))),()=>o.abort()})}doRequest(r,s,o){return W(this,null,function*(){let a=this.createRequestInit(r),i;try{let m=this.fetchImpl(r.urlWithParams,q({signal:s},a));Ce(m),o.next({type:N.Sent}),i=yield m}catch(m){o.error(new P({error:m,status:m.status??0,statusText:m.statusText,url:r.urlWithParams,headers:m.headers}));return}let h=new E(i.headers),c=i.statusText,f=Ae(i)??r.urlWithParams,u=i.status,p=null;if(r.reportProgress&&o.next(new J({headers:h,status:u,statusText:c,url:f})),i.body){let m=i.headers.get("content-length"),A=[],d=i.body.getReader(),l=0,w,M,y=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>W(this,null,function*(){for(;;){let{done:O,value:k}=yield d.read();if(O)break;if(A.push(k),l+=k.length,r.reportProgress){M=r.responseType==="text"?(M??"")+(w??=new TextDecoder).decode(k,{stream:!0}):void 0;let ee=()=>o.next({type:N.DownloadProgress,total:m?+m:void 0,loaded:l,partialText:M});y?y.run(ee):ee()}}}));let x=this.concatChunks(A,l);try{let O=i.headers.get("Content-Type")??"";p=this.parseBody(r,x,O)}catch(O){o.error(new P({error:O,headers:new E(i.headers),status:i.status,statusText:i.statusText,url:Ae(i)??r.urlWithParams}));return}}u===0&&(u=p?z.Ok:0),u>=200&&u<300?(o.next(new I({body:p,headers:h,status:u,statusText:c,url:f})),o.complete()):o.error(new P({error:p,headers:h,status:u,statusText:c,url:f}))})}parseBody(r,s,o){switch(r.responseType){case"json":let a=new TextDecoder().decode(s).replace(Ke,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(s);case"blob":return new Blob([s],{type:o});case"arraybuffer":return s.buffer}}createRequestInit(r){let s={},o=r.withCredentials?"include":void 0;if(r.headers.forEach((a,i)=>s[a]=i.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){let a=r.detectContentTypeHeader();a!==null&&(s["Content-Type"]=a)}return{body:r.serializeBody(),method:r.method,headers:s,credentials:o}}concatChunks(r,s){let o=new Uint8Array(s),a=0;for(let i of r)o.set(i,a),a+=i.length;return o}};n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),Q=class{};function H(){}function Ce(e){e.then(H,H)}function Ye(e,n){return n(e)}function Ze(e,n,t){return(r,s)=>he(t,()=>n(r,o=>e(o,s)))}var Ue=new b(""),Be=new b(""),ze=new b("");var Oe=(()=>{let n=class n extends L{constructor(r,s){super(),this.backend=r,this.injector=s,this.chain=null,this.pendingTasks=g(ye);let o=g(ze,{optional:!0});this.backend=o??r}handle(r){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(Ue),...this.injector.get(Be,[])]));this.chain=o.reduceRight((a,i)=>Ze(a,i,this.injector),Ye)}let s=this.pendingTasks.add();return this.chain(r,o=>this.backend.handle(o)).pipe(oe(()=>this.pendingTasks.remove(s)))}};n.\u0275fac=function(s){return new(s||n)(v(U),v(de))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})();var Qe=/^\)\]\}',?\n/;function He(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Ie=(()=>{let n=class n{constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new ce(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?re(s.\u0275loadImpl()):V(null)).pipe(ie(()=>new G(a=>{let i=s.build();if(i.open(r.method,r.urlWithParams),r.withCredentials&&(i.withCredentials=!0),r.headers.forEach((d,l)=>i.setRequestHeader(d,l.join(","))),r.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){let d=r.detectContentTypeHeader();d!==null&&i.setRequestHeader("Content-Type",d)}if(r.responseType){let d=r.responseType.toLowerCase();i.responseType=d!=="json"?d:"text"}let h=r.serializeBody(),c=null,f=()=>{if(c!==null)return c;let d=i.statusText||"OK",l=new E(i.getAllResponseHeaders()),w=He(i)||r.url;return c=new J({headers:l,status:i.status,statusText:d,url:w}),c},u=()=>{let{headers:d,status:l,statusText:w,url:M}=f(),y=null;l!==z.NoContent&&(y=typeof i.response>"u"?i.responseText:i.response),l===0&&(l=y?z.Ok:0);let x=l>=200&&l<300;if(r.responseType==="json"&&typeof y=="string"){let O=y;y=y.replace(Qe,"");try{y=y!==""?JSON.parse(y):null}catch(k){y=O,x&&(x=!1,y={error:k,text:y})}}x?(a.next(new I({body:y,headers:d,status:l,statusText:w,url:M||void 0})),a.complete()):a.error(new P({error:y,headers:d,status:l,statusText:w,url:M||void 0}))},p=d=>{let{url:l}=f(),w=new P({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:l||void 0});a.error(w)},T=!1,m=d=>{T||(a.next(f()),T=!0);let l={type:N.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),r.responseType==="text"&&i.responseText&&(l.partialText=i.responseText),a.next(l)},A=d=>{let l={type:N.UploadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),a.next(l)};return i.addEventListener("load",u),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),r.reportProgress&&(i.addEventListener("progress",m),h!==null&&i.upload&&i.upload.addEventListener("progress",A)),i.send(h),a.next({type:N.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",u),i.removeEventListener("timeout",p),r.reportProgress&&(i.removeEventListener("progress",m),h!==null&&i.upload&&i.upload.removeEventListener("progress",A)),i.readyState!==i.DONE&&i.abort()}})))}};n.\u0275fac=function(s){return new(s||n)(v(be))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),Ve=new b(""),en="XSRF-TOKEN",nn=new b("",{providedIn:"root",factory:()=>en}),rn="X-XSRF-TOKEN",tn=new b("",{providedIn:"root",factory:()=>rn}),$=class{},sn=(()=>{let n=class n{constructor(r,s,o){this.doc=r,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ee(r,this.cookieName),this.lastCookieString=r),this.lastToken}};n.\u0275fac=function(s){return new(s||n)(v(we),v(ue),v(nn))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})();function on(e,n){let t=e.url.toLowerCase();if(!g(Ve)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=g($).getToken(),s=g(tn);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}var Xe=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Xe||{});function an(e,n){return{\u0275kind:e,\u0275providers:n}}function Mn(...e){let n=[Ge,Ie,Oe,{provide:L,useExisting:Oe},{provide:U,useExisting:Ie},{provide:Ue,useValue:on,multi:!0},{provide:Ve,useValue:!0},{provide:$,useClass:sn}];for(let t of e)n.push(...t.\u0275providers);return le(n)}function Dn(){return an(Xe.Fetch,[C,{provide:U,useExisting:C},{provide:ze,useExisting:C}])}var Me="b",De="h",xe="s",ke="st",Fe="u",je="rt",_=new b(""),cn=["GET","HEAD"];function ln(e,n){let f=g(_),{isCacheActive:t}=f,r=ne(f,["isCacheActive"]),{transferCache:s,method:o}=e;if(!t||o==="POST"&&!r.includePostRequests&&!s||o!=="POST"&&!cn.includes(o)||s===!1||r.filter?.(e)===!1)return n(e);let a=g(K),i=hn(e),h=a.get(i,null),c=r.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(c=s.includeHeaders),h){let{[Me]:u,[je]:p,[De]:T,[xe]:m,[ke]:A,[Fe]:d}=h,l=u;switch(p){case"arraybuffer":l=new TextEncoder().encode(u).buffer;break;case"blob":l=new Blob([u]);break}let w=new E(T);return V(new I({body:l,headers:w,status:m,statusText:A,url:d}))}return n(e).pipe(ae(u=>{u instanceof I&&a.set(i,{[Me]:u.body,[De]:dn(u.headers,c),[xe]:u.status,[ke]:u.statusText,[Fe]:u.url||"",[je]:e.responseType})}))}function dn(e,n){if(!n)return{};let t={};for(let r of n){let s=e.getAll(r);s!==null&&(t[r]=s)}return t}function Le(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function hn(e){let{params:n,method:t,responseType:r,url:s}=e,o=Le(n),a=e.serializeBody();a instanceof URLSearchParams?a=Le(a):typeof a!="string"&&(a="");let i=[t,r,s,a,o].join("|"),h=un(i);return h}function un(e){let n=0;for(let t of e)n=Math.imul(31,n)+t.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function xn(e){return[{provide:_,useFactory:()=>(fe("NgHttpTransferCache"),q({isCacheActive:!0},e))},{provide:Be,useValue:ln,multi:!0,deps:[K,_]},{provide:me,multi:!0,useFactory:()=>{let n=g(ge),t=g(_);return()=>{Te(n).then(()=>{t.isCacheActive=!1})}}}]}export{Ge as a,Be as b,Mn as c,Dn as d,xn as e};
