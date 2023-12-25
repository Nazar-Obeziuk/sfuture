import{a as Oe,b as Ie,c as Pe,d as C,e as Ne,f as xe,g as Ce,h as ve,i as De,j as H,k as Le,l as Be,m as Me,n as Fe,o as qe,p as I,q as $e,r as He,u as je}from"./chunk-5EGWKPCX.js";import{D as $,G as Ae,T as Se,c as K,d as Te,k as we,l as ye,r as ke,s as Ee,w as Ue}from"./chunk-QJIXC3RR.js";var Ye="firebasestorage.googleapis.com",Je="storageBucket",yt=2*60*1e3,kt=10*60*1e3,Et=1e3;var d=class t extends Pe{constructor(e,n,s=0){super(ne(e),`Firebase Storage: ${n} (${ne(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ne(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},l=function(t){return t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment",t}(l||{});function ne(t){return"storage/"+t}function he(){let t="An unknown error occurred, please check the error payload for server response.";return new d(l.UNKNOWN,t)}function Ut(t){return new d(l.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function At(t){return new d(l.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function St(){let t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(l.UNAUTHENTICATED,t)}function Ot(){return new d(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function It(t){return new d(l.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qe(){return new d(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function et(){return new d(l.CANCELED,"User canceled the upload/download.")}function Pt(t){return new d(l.INVALID_URL,"Invalid URL '"+t+"'.")}function Nt(t){return new d(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xt(){return new d(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Je+"' property when initializing the app?")}function tt(){return new d(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ct(){return new d(l.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function vt(){return new d(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dt(t){return new d(l.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function re(t){return new d(l.INVALID_ARGUMENT,t)}function nt(){return new d(l.APP_DELETED,"The Firebase app was deleted.")}function Lt(t){return new d(l.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new d(l.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function j(t){throw new d(l.INTERNAL_ERROR,"Internal error: "+t)}var k=class t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=t.makeFromUrl(e,n)}catch{return new t(e,"")}if(s.path==="")return s;throw Nt(e)}static makeFromUrl(e,n){let s=null,r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}let i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}let h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${_}`,"i"),g={bucket:1,path:3},y=n===Ye?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",U=new RegExp(`^https?://${y}/${r}/${p}`,"i"),T=[{regex:u,indices:a,postModify:o},{regex:m,indices:g,postModify:c},{regex:U,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){let N=T[b],x=N.regex.exec(e);if(x){let ee=x[N.indices.bucket],q=x[N.indices.path];q||(q=""),s=new t(ee,q),N.postModify(s);break}}if(s==null)throw Pt(e);return s}},oe=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function Bt(t,e,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return u===2}let c=!1;function h(...p){c||(c=!0,e.apply(null,p))}function f(p){r=setTimeout(()=>{r=null,t(m,a())},p)}function _(){o&&clearTimeout(o)}function m(p,...U){if(c){_();return}if(p){_(),h.call(null,p,...U);return}if(a()||i){_(),h.call(null,p,...U);return}s<64&&(s*=2);let T;u===1?(u=2,T=0):T=(s+Math.random())*1e3,f(T)}let g=!1;function y(p){g||(g=!0,_(),!c&&(r!==null?(p||(u=2),clearTimeout(r),f(0)):p||(u=1)))}return f(0),o=setTimeout(()=>{i=!0,y(!0)},n),y}function Mt(t){t(!1)}function Ft(t){return t!==void 0}function qt(t){return typeof t=="function"}function $t(t){return typeof t=="object"&&!Array.isArray(t)}function Q(t){return typeof t=="string"||t instanceof String}function ze(t){return de()&&t instanceof Blob}function de(){return typeof Blob<"u"}function Ge(t,e,n,s){if(s<e)throw re(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw re(`Invalid value for '${t}'. Expected ${n} or less.`)}function F(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function st(t){let e=encodeURIComponent,n="?";for(let s in t)if(t.hasOwnProperty(s)){let r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var L=function(t){return t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT",t}(L||{});function rt(t,e){let n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}var ie=class{constructor(e,n,s,r,o,i,u,a,c,h,f,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){let e=(s,r)=>{if(r){s(!1,new D(!1,null,!0));return}let o=this.connectionFactory_();this.pendingConnection_=o;let i=u=>{let a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;let u=o.getErrorCode()===L.NO_ERROR,a=o.getStatus();if(!u||rt(a,this.additionalRetryCodes_)&&this.retry){let h=o.getErrorCode()===L.ABORT;s(!1,new D(!1,null,h));return}let c=this.successCodes_.indexOf(a)!==-1;s(!0,new D(c,o))})},n=(s,r)=>{let o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{let a=this.callback_(u,u.getResponse());Ft(a)?o(a):o()}catch(a){i(a)}else if(u!==null){let a=he();a.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,a)):i(a)}else if(r.canceled){let a=this.appDelete_?nt():et();i(a)}else{let a=Qe();i(a)}};this.canceled_?n(!1,new D(!1,null,!0)):this.backoffId_=Bt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},D=class{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}};function Ht(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Gt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Vt(t,e,n,s,r,o,i=!0){let u=st(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return zt(c,e),Ht(c,n),jt(c,o),Gt(c,s),new ie(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}function Wt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xt(...t){let e=Wt();if(e!==void 0){let n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(de())return new Blob(t);throw new d(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Kt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function Zt(t){if(typeof atob>"u")throw Dt("base-64");return atob(t)}var E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},G=class{constructor(e,n){this.data=e,this.contentType=n||null}};function Yt(t,e){switch(t){case E.RAW:return new G(ot(e));case E.BASE64:case E.BASE64URL:return new G(it(t,e));case E.DATA_URL:return new G(Qt(e),en(e))}throw he()}function ot(t){let e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{let o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Jt(t){let e;try{e=decodeURIComponent(t)}catch{throw z(E.DATA_URL,"Malformed data URL.")}return ot(e)}function it(t,e){switch(t){case E.BASE64:{let r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{let r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zt(e)}catch(r){throw r.message.includes("polyfill")?r:z(t,"Invalid character found")}let s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}var Y=class{constructor(e){this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let s=n[1]||null;s!=null&&(this.base64=tn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}};function Qt(t){let e=new Y(t);return e.base64?it(E.BASE64,e.rest):Jt(e.rest)}function en(t){return new Y(t).contentType}function tn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}var J=class t{constructor(e,n){let s=0,r="";ze(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ze(this.data_)){let s=this.data_,r=Kt(s,e,n);return r===null?null:new t(r)}else{let s=new Uint8Array(this.data_.buffer,e,n-e);return new t(s,!0)}}static getBlob(...e){if(de()){let n=e.map(s=>s instanceof t?s.data_:s);return new t(Xt.apply(null,n))}else{let n=e.map(i=>Q(i)?Yt(E.RAW,i).data:i.data_),s=0;n.forEach(i=>{s+=i.byteLength});let r=new Uint8Array(s),o=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)r[o++]=i[u]}),new t(r,!0)}}uploadData(){return this.data_}};function at(t){let e;try{e=JSON.parse(t)}catch{return null}return $t(e)?e:null}function nn(t){if(t.length===0)return null;let e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sn(t,e){let n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ut(t){let e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}function rn(t,e){return e}var R=class{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||rn}},Z=null;function on(t){return!Q(t)||t.length<2?t:ut(t)}function ct(){if(Z)return Z;let t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(o,i){return on(i)}let n=new R("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}let r=new R("size");return r.xform=s,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),Z=t,Z}function an(t,e){function n(){let s=t.bucket,r=t.fullPath,o=new k(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function un(t,e,n){let s={};s.type="file";let r=n.length;for(let o=0;o<r;o++){let i=n[o];s[i.local]=i.xform(s,e[i.server])}return an(s,t),s}function lt(t,e,n){let s=at(e);return s===null?null:un(t,s,n)}function cn(t,e,n,s){let r=at(e);if(r===null||!Q(r.downloadTokens))return null;let o=r.downloadTokens;if(o.length===0)return null;let i=encodeURIComponent;return o.split(",").map(c=>{let h=t.bucket,f=t.fullPath,_="/b/"+i(h)+"/o/"+i(f),m=F(_,n,s),g=st({alt:"media",token:c});return m+g})[0]}function ht(t,e){let n={},s=e.length;for(let r=0;r<s;r++){let o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}var O=class{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function S(t){if(!t)throw he()}function fe(t,e){function n(s,r){let o=lt(t,r,e);return S(o!==null),o}return n}function ln(t,e){function n(s,r){let o=lt(t,r,e);return S(o!==null),cn(o,r,t.host,t._protocol)}return n}function W(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ot():r=St():n.getStatus()===402?r=At(t.bucket):n.getStatus()===403?r=It(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function pe(t){let e=W(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=Ut(t.path)),o.serverResponse=r.serverResponse,o}return n}function hn(t,e,n){let s=e.fullServerUrl(),r=F(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new O(r,o,fe(t,n),i);return u.errorHandler=pe(e),u}function dn(t,e,n){let s=e.fullServerUrl(),r=F(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new O(r,o,ln(t,n),i);return u.errorHandler=pe(e),u}function fn(t,e){let n=e.fullServerUrl(),s=F(n,t.host,t._protocol),r="DELETE",o=t.maxOperationRetryTime;function i(a,c){}let u=new O(s,r,i,o);return u.successCodes=[200,204],u.errorHandler=pe(e),u}function pn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dt(t,e,n){let s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=pn(null,e)),s}function _n(t,e,n,s,r){let o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}let a=u();i["Content-Type"]="multipart/related; boundary="+a;let c=dt(e,s,r),h=ht(c,n),f="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+a+"--",m=J.getBlob(f,s,_);if(m===null)throw tt();let g={name:c.fullPath},y=F(o,t.host,t._protocol),p="POST",U=t.maxUploadRetryTime,A=new O(y,p,fe(t,n),U);return A.urlParams=g,A.headers=i,A.body=m.uploadData(),A.errorHandler=W(e),A}var B=class{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}};function _e(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{S(!1)}return S(!!n&&(e||["active"]).indexOf(n)!==-1),n}function mn(t,e,n,s,r){let o=e.bucketOnlyServerUrl(),i=dt(e,s,r),u={name:i.fullPath},a=F(o,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},f=ht(i,n),_=t.maxUploadRetryTime;function m(y){_e(y);let p;try{p=y.getResponseHeader("X-Goog-Upload-URL")}catch{S(!1)}return S(Q(p)),p}let g=new O(a,c,m,_);return g.urlParams=u,g.headers=h,g.body=f,g.errorHandler=W(e),g}function gn(t,e,n,s){let r={"X-Goog-Upload-Command":"query"};function o(c){let h=_e(c,["active","final"]),f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{S(!1)}f||S(!1);let _=Number(f);return S(!isNaN(_)),new B(_,s.size(),h==="final")}let i="POST",u=t.maxUploadRetryTime,a=new O(n,i,o,u);return a.headers=r,a.errorHandler=W(e),a}var Ve=256*1024;function bn(t,e,n,s,r,o,i,u){let a=new B(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw Ct();let c=a.total-a.current,h=c;r>0&&(h=Math.min(h,r));let f=a.current,_=f+h,m="";h===0?m="finalize":c===h?m="upload, finalize":m="upload";let g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},y=s.slice(f,_);if(y===null)throw tt();function p(b,N){let x=_e(b,["active","final"]),ee=a.current+h,q=s.size(),te;return x==="final"?te=fe(e,o)(b,N):te=null,new B(ee,q,x==="final",te)}let U="POST",A=e.maxUploadRetryTime,T=new O(n,U,p,A);return T.headers=g,T.body=y.uploadData(),T.progressCallback=u||null,T.errorHandler=W(t),T}var w={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function se(t){switch(t){case"running":case"pausing":case"canceling":return w.RUNNING;case"paused":return w.PAUSED;case"success":return w.SUCCESS;case"canceled":return w.CANCELED;case"error":return w.ERROR;default:return w.ERROR}}var ae=class{constructor(e,n,s){if(qt(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{let o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}};function v(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}var We=null,ue=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(let o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}},ce=class extends ue{initXhr(){this.xhr_.responseType="text"}};function P(){return We?We():new ce}var le=class{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=ct(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(l.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let o=this.isExponentialBackoffExpired();if(rt(r.status,[]))if(o)r=Qe();else{this.sleepTime=Math.max(this.sleepTime*2,Et),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(l.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{let s=mn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,P,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((n,s)=>{let r=gn(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,P,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=Ve*this._chunkMultiplier,n=new B(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=bn(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}let u=this._ref.storage._makeRequest(i,P,r,o,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ve*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{let s=hn(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,P,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{let s=_n(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,P,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=et(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){let e=se(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){let o=new ae(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(se(this._state)){case w.SUCCESS:v(this._resolve.bind(null,this.snapshot))();break;case w.CANCELED:case w.ERROR:let n=this._reject;v(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(se(this._state)){case w.RUNNING:case w.PAUSED:e.next&&v(e.next.bind(e,this.snapshot))();break;case w.SUCCESS:e.complete&&v(e.complete.bind(e))();break;case w.CANCELED:case w.ERROR:e.error&&v(e.error.bind(e,this._error))();break;default:e.error&&v(e.error.bind(e,this._error))()}}resume(){let e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){let e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){let e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}};var M=class t{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new t(e,n)}get root(){let e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ut(this._location.path)}get storage(){return this._service}get parent(){let e=nn(this._location.path);if(e===null)return null;let n=new k(this._location.bucket,e);return new t(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Lt(e)}};function Rn(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new le(t,new J(e),n)}function Tn(t){t._throwIfRoot("getDownloadURL");let e=dn(t.storage,t._location,ct());return t.storage.makeRequestWithTokens(e,P).then(n=>{if(n===null)throw vt();return n})}function wn(t){t._throwIfRoot("deleteObject");let e=fn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,P)}function yn(t,e){let n=sn(t._location.path,e),s=new k(t._location.bucket,n);return new M(t.storage,s)}function kn(t){return/^[A-Za-z]+:\/\//.test(t)}function En(t,e){return new M(t,e)}function ft(t,e){if(t instanceof V){let n=t;if(n._bucket==null)throw xt();let s=new M(n,n._bucket);return e!=null?ft(s,e):s}else return e!==void 0?yn(t,e):t}function Un(t,e){if(e&&kn(e)){if(t instanceof V)return En(t,e);throw re("To use ref(service, url), the first argument must be a Storage instance.")}else return ft(t,e)}function Xe(t,e){let n=e?.[Je];return n==null?null:k.makeFromBucketSpec(n,t)}function An(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Ie(r,t.app.options.projectId))}var V=class{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Ye,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yt,this._maxUploadRetryTime=kt,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=Xe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=Xe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ge("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ge("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return K(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let n=yield e.getToken();if(n!==null)return n.accessToken}return null})}_getAppCheckToken(){return K(this,null,function*(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new M(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new oe(nt());{let i=Vt(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(e,n){return K(this,null,function*(){let[s,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()})}},Ke="@firebase/storage",Ze="0.12.0";var pt="storage";function me(t,e,n){return t=C(t),Rn(t,e,n)}function ge(t){return t=C(t),Tn(t)}function _t(t){return t=C(t),wn(t)}function mt(t,e){return t=C(t),Un(t,e)}function gt(t=De(),e){t=C(t);let s=Ce(t,pt).getImmediate({identifier:e}),r=Oe("storage");return r&&bt(s,...r),s}function bt(t,e,n,s={}){An(t,e,n,s)}function Sn(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new V(n,s,r,e,ve)}function On(){xe(new Ne(pt,Sn,"PUBLIC").setMultipleInstances(!0)),H(Ke,Ze,""),H(Ke,Ze,"esm2017")}On();function Rt(t){return new Te(function(e){var n=null,s=!1,r=!1,o=null,i=function(c){n=c,a()},u=null,a=function(){u||(u=setTimeout(function(){u=null,n&&e.next(n),s&&e.complete(),r&&e.error(o)}))};e.add(function(){u&&clearTimeout(u)}),i(t.snapshot),e.add(t.on("state_changed",i)),e.add(we(t).subscribe({next:i,error:function(c){r=!0,o=c,a()},complete:function(){s=!0,a()}}))})}function Tt(t){return Rt(t).pipe(ye(function(e){return{progress:e.bytesTransferred/e.totalBytes*100,snapshot:e}}))}var X=class{constructor(e){return e}},wt="storage",be=class{constructor(){return Me(wt)}};var Re=new Ee("angularfire2.storage-instances");function Nn(t,e){let n=Be(wt,t,e);return n&&new X(n)}function xn(t){return(e,n)=>{let s=e.runOutsideAngular(()=>t(n));return new X(s)}}var Cn={provide:be,deps:[[new $,Re]]},vn={provide:X,useFactory:Nn,deps:[[new $,Re],$e]},Dn=(()=>{class t{constructor(){H("angularfire",Le.full,"gcs")}static \u0275fac=function(s){return new(s||t)};static \u0275mod=Ue({type:t});static \u0275inj=ke({providers:[vn,Cn]})}return t})();function ls(t,...e){return{ngModule:Dn,providers:[{provide:Re,useFactory:xn(t),multi:!0,deps:[Se,Ae,qe,He,[new $,je],[new $,Fe],...e]}]}}var hs=I(Tt,!0);var ds=I(_t,!0);var fs=I(ge,!0);var ps=I(gt,!0);var _s=I(mt,!0);var ms=I(me,!0);export{X as a,ls as b,hs as c,ds as d,fs as e,ps as f,_s as g,ms as h};