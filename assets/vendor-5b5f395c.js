/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_n=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,u=s>>2,b=(s&3)<<4|a>>4;let w=(a&15)<<2|h>>6,E=h&63;c||(E=64,o||(w=64)),r.push(t[u],t[b],t[w],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ot(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_n(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const b=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||h==null||b==null)throw new yn;const w=s<<2|a>>4;if(r.push(w),h!==64){const E=a<<4&240|h>>2;if(r.push(E),b!==64){const l=h<<6&192|b;r.push(l)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const En=function(n){const e=Ot(n);return kt.encodeByteArray(e,!0)},ye=function(n){return En(n).replace(/\./g,"")},vn=function(n){try{return kt.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=()=>bn().__FIREBASE_DEFAULTS__,wn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},An=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vn(n[1]);return e&&JSON.parse(e)},xt=()=>{try{return In()||wn()||An()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tn=n=>{var e,t;return(t=(e=xt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sn=n=>{const e=Tn(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lt=()=>{var n;return(n=xt())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ye(JSON.stringify(t)),ye(JSON.stringify(o)),a].join(".")}function Rn(){try{return typeof indexedDB=="object"}catch{return!1}}function Dn(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="FirebaseError";class te extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cn,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$t.prototype.create)}}class $t{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fn(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new te(i,a,r)}}function Fn(n,e){return n.replace(Nn,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nn=/\{\$([^}]+)}/g;function Le(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ut(s)&&ut(o)){if(!Le(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ut(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class ae{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xn(e))try{this.getOrInitializeService({instanceIdentifier:H})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kn(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kn(n){return n===H?void 0:n}function xn(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new On(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(I||(I={}));const $n={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Bn=I.INFO,Mn={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Un=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Mn[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bt{constructor(e){this.name=e,this._logLevel=Bn,this._logHandler=Un,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$n[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const qn=(n,e)=>e.some(t=>n instanceof t);let ht,dt;function jn(){return ht||(ht=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zn(){return dt||(dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mt=new WeakMap,$e=new WeakMap,Ut=new WeakMap,Fe=new WeakMap,Ge=new WeakMap;function Hn(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(U(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mt.set(t,n)}).catch(()=>{}),Ge.set(e,n),e}function Wn(n){if($e.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});$e.set(n,e)}let Be={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $e.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ut.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return U(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kn(n){Be=n(Be)}function Gn(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ne(this),e,...t);return Ut.set(r,e.sort?e.sort():[e]),U(r)}:zn().includes(n)?function(...e){return n.apply(Ne(this),e),U(Mt.get(this))}:function(...e){return U(n.apply(Ne(this),e))}}function Qn(n){return typeof n=="function"?Gn(n):(n instanceof IDBTransaction&&Wn(n),qn(n,jn())?new Proxy(n,Be):n)}function U(n){if(n instanceof IDBRequest)return Hn(n);if(Fe.has(n))return Fe.get(n);const e=Qn(n);return e!==n&&(Fe.set(n,e),Ge.set(e,n)),e}const Ne=n=>Ge.get(n);function Yn(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=U(o);return r&&o.addEventListener("upgradeneeded",c=>{r(U(o.result),c.oldVersion,c.newVersion,U(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Jn=["get","getKey","getAll","getAllKeys","count"],Xn=["put","add","delete","clear"],Oe=new Map;function ft(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oe.get(e))return Oe.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Xn.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jn.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),i&&c.done]))[0]};return Oe.set(e,s),s}Kn(n=>({...n,get:(e,t,r)=>ft(e,t)||n.get(e,t,r),has:(e,t)=>!!ft(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(er(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function er(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Me="@firebase/app",pt="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new Bt("@firebase/app"),tr="@firebase/app-compat",nr="@firebase/analytics-compat",rr="@firebase/analytics",ir="@firebase/app-check-compat",sr="@firebase/app-check",or="@firebase/auth",ar="@firebase/auth-compat",cr="@firebase/database",lr="@firebase/database-compat",ur="@firebase/functions",hr="@firebase/functions-compat",dr="@firebase/installations",fr="@firebase/installations-compat",pr="@firebase/messaging",mr="@firebase/messaging-compat",gr="@firebase/performance",_r="@firebase/performance-compat",yr="@firebase/remote-config",Er="@firebase/remote-config-compat",vr="@firebase/storage",br="@firebase/storage-compat",Ir="@firebase/firestore",wr="@firebase/vertexai-preview",Ar="@firebase/firestore-compat",Tr="firebase",Sr="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]",Pr={[Me]:"fire-core",[tr]:"fire-core-compat",[rr]:"fire-analytics",[nr]:"fire-analytics-compat",[sr]:"fire-app-check",[ir]:"fire-app-check-compat",[or]:"fire-auth",[ar]:"fire-auth-compat",[cr]:"fire-rtdb",[lr]:"fire-rtdb-compat",[ur]:"fire-fn",[hr]:"fire-fn-compat",[dr]:"fire-iid",[fr]:"fire-iid-compat",[pr]:"fire-fcm",[mr]:"fire-fcm-compat",[gr]:"fire-perf",[_r]:"fire-perf-compat",[yr]:"fire-rc",[Er]:"fire-rc-compat",[vr]:"fire-gcs",[br]:"fire-gcs-compat",[Ir]:"fire-fst",[Ar]:"fire-fst-compat",[wr]:"fire-vertex","fire-js":"fire-js",[Tr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,Vr=new Map,qe=new Map;function mt(n,e){try{n.container.addComponent(e)}catch(t){W.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ve(n){const e=n.name;if(qe.has(e))return W.debug(`There were multiple attempts to register component ${e}.`),!1;qe.set(e,n);for(const t of Ee.values())mt(t,n);for(const t of Vr.values())mt(t,n);return!0}function Rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},q=new $t("app","Firebase",Dr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=Sr;function Nr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ue,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw q.create("bad-app-name",{appName:String(i)});if(t||(t=Lt()),!t)throw q.create("no-options");const s=Ee.get(i);if(s){if(Le(t,s.options)&&Le(r,s.config))return s;throw q.create("duplicate-app",{appName:i})}const o=new Ln(i);for(const c of qe.values())o.addComponent(c);const a=new Cr(t,r,o);return Ee.set(i,a),a}function Or(n=Ue){const e=Ee.get(n);if(!e&&n===Ue&&Lt())return Nr();if(!e)throw q.create("no-app",{appName:n});return e}function Y(n,e,t){var r;let i=(r=Pr[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),W.warn(a.join(" "));return}ve(new ae(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="firebase-heartbeat-database",xr=1,ce="firebase-heartbeat-store";let ke=null;function qt(){return ke||(ke=Yn(kr,xr,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ce)}catch(t){console.warn(t)}}}}).catch(n=>{throw q.create("idb-open",{originalErrorMessage:n.message})})),ke}async function Lr(n){try{const t=(await qt()).transaction(ce),r=await t.objectStore(ce).get(jt(n));return await t.done,r}catch(e){if(e instanceof te)W.warn(e.message);else{const t=q.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});W.warn(t.message)}}}async function gt(n,e){try{const r=(await qt()).transaction(ce,"readwrite");await r.objectStore(ce).put(e,jt(n)),await r.done}catch(t){if(t instanceof te)W.warn(t.message);else{const r=q.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});W.warn(r.message)}}}function jt(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=1024,Br=30*24*60*60*1e3;class Mr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qr(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_t();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Br}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_t(),{heartbeatsToSend:r,unsentEntries:i}=Ur(this._heartbeatsCache.heartbeats),s=ye(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _t(){return new Date().toISOString().substring(0,10)}function Ur(n,e=$r){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yt(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),yt(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rn()?Dn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Lr(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yt(n){return ye(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){ve(new ae("platform-logger",e=>new Zn(e),"PRIVATE")),ve(new ae("heartbeat",e=>new Mr(e),"PRIVATE")),Y(Me,pt,n),Y(Me,pt,"esm2017"),Y("fire-js","")}jr("");var zr="firebase",Hr="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y(zr,Hr,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}F.UNAUTHENTICATED=new F(null),F.GOOGLE_CREDENTIALS=new F("google-credentials-uid"),F.FIRST_PARTY=new F("first-party-uid"),F.MOCK_USER=new F("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=new Bt("@firebase/firestore");function be(n,...e){if(X.logLevel<=I.DEBUG){const t=e.map(Ye);X.debug(`Firestore (${ne}): ${n}`,...t)}}function Qe(n,...e){if(X.logLevel<=I.ERROR){const t=e.map(Ye);X.error(`Firestore (${ne}): ${n}`,...t)}}function zt(n,...e){if(X.logLevel<=I.WARN){const t=e.map(Ye);X.warn(`Firestore (${ne}): ${n}`,...t)}}function Ye(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: `+n;throw Qe(e),new Error(e)}function j(n,e){n||S()}function Je(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="ok",Wr="cancelled",re="unknown",g="invalid-argument",Kr="deadline-exceeded",Ht="not-found",Gr="permission-denied",je="unauthenticated",Qr="resource-exhausted",Z="failed-precondition",Yr="aborted",Jr="out-of-range",Wt="unimplemented",Xr="internal",Zr="unavailable";class f extends te{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(F.UNAUTHENTICATED))}shutdown(){}}class ti{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ni{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(j(typeof e.accessToken=="string"),new Kt(e.accessToken,new F(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ri{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=F.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ii{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ri(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(F.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class si{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(j(typeof e.token=="string"),new si(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,i,s,o,a,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class le{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new le("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof le&&e.projectId===this.projectId&&e.database===this.database}}class ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&S(),r===void 0?r=e.length-t:r>e.length-t&&S(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends ue{construct(e,t,r){return new R(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new f(g,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new R(t)}static emptyPath(){return new R([])}}const ci=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends ue{construct(e,t,r){return new O(e,t,r)}static isValidIdentifier(e){return ci.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new O(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new f(g,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new f(g,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new f(g,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new f(g,"Unterminated ` in path: "+e);return new O(t)}static emptyPath(){return new O([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(R.fromString(e))}static fromName(e){return new C(R.fromString(e).popFirst(5))}static empty(){return new C(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new R(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e,t){if(!t)throw new f(g,`Function ${n}() cannot be called with an empty ${e}.`)}function vt(n){if(C.isDocumentKey(n))throw new f(g,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Re(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function Gt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new f(g,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Re(n);throw new f(g,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ui(n,e){if(e<=0)throw new f(g,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me=null;function hi(){return me===null?me=function(){return 268435456+Math.round(2147483648*Math.random())}():me++,"0x"+me.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){return n==null}function Ie(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,v;function It(n){if(n===void 0)return Qe("RPC_ERROR","HTTP error has no status"),re;switch(n){case 200:return Et;case 400:return Z;case 401:return je;case 403:return Gr;case 404:return Ht;case 409:return Yr;case 416:return Jr;case 429:return Qr;case 499:return Wr;case 500:return re;case 501:return Wt;case 503:return Zr;case 504:return Kr;default:return n>=200&&n<300?Et:n>=400&&n<500?Z:n>=500&&n<600?Xr:re}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(v=bt||(bt={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";class pi extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){const a=hi(),c=this.I(t,r.toUriEncodedString());be("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const h={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(h,s,o),this.p(t,c,h,i).then(u=>(be("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw zt("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}V(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ne}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}I(t,r){const i=fi[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(c){const h=c;throw new f(It(h.status),"Request failed with error: "+h.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const h=(s=c==null?void 0:c.error)===null||s===void 0?void 0:s.message;throw new f(It(a.status),`Request failed with error: ${h??a.statusText}`)}return a.json()}}function P(n,e){return n<e?-1:n>e?1:0}function mi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function De(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gi("Invalid base64 string: "+s):s}}(e);return new $(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");const _i=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(n){if(j(!!n),typeof n=="string"){let e=0;const t=_i.exec(n);if(j(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:T(n.seconds),nanos:T(n.nanos)}}function T(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function he(n){return typeof n=="string"?$.fromBase64String(n):$.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new f(g,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new f(g,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new f(g,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new f(g,"Timestamp seconds out of range: "+e)}static now(){return N.fromMillis(Date.now())}static fromDate(e){return N.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new N(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yt(n){const e=n.mapValue.fields.__previous_value__;return Xe(e)?Yt(e):e}function de(n){const e=K(n.mapValue.fields.__local_write_time__.timestampValue);return new N(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={fields:{__type__:{stringValue:"__max__"}}};function G(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xe(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:S()}function we(n,e){if(n===e)return!0;const t=G(n);if(t!==G(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return de(n).isEqual(de(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=K(i.timestampValue),a=K(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return he(i.bytesValue).isEqual(he(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return T(i.geoPointValue.latitude)===T(s.geoPointValue.latitude)&&T(i.geoPointValue.longitude)===T(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return T(i.integerValue)===T(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=T(i.doubleValue),a=T(s.doubleValue);return o===a?Ie(o)===Ie(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return mi(n.arrayValue.values||[],e.arrayValue.values||[],we);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wt(o)!==wt(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!we(o[c],a[c])))return!1;return!0}(n,e);default:return S()}}function fe(n,e){return(n.values||[]).find(t=>we(t,e))!==void 0}function Ae(n,e){if(n===e)return 0;const t=G(n),r=G(e);if(t!==r)return P(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=T(s.integerValue||s.doubleValue),c=T(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return At(n.timestampValue,e.timestampValue);case 4:return At(de(n),de(e));case 5:return P(n.stringValue,e.stringValue);case 6:return function(s,o){const a=he(s),c=he(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let h=0;h<a.length&&h<c.length;h++){const u=P(a[h],c[h]);if(u!==0)return u}return P(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=P(T(s.latitude),T(o.latitude));return a!==0?a:P(T(s.longitude),T(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let h=0;h<a.length&&h<c.length;++h){const u=Ae(a[h],c[h]);if(u)return u}return P(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ge&&o===ge)return 0;if(s===ge)return 1;if(o===ge)return-1;const a=s.fields||{},c=Object.keys(a),h=o.fields||{},u=Object.keys(h);c.sort(),u.sort();for(let b=0;b<c.length&&b<u.length;++b){const w=P(c[b],u[b]);if(w!==0)return w;const E=Ae(a[c[b]],h[u[b]]);if(E!==0)return E}return P(c.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function At(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return P(n,e);const t=K(n),r=K(e),i=P(t.seconds,r.seconds);return i!==0?i:P(t.nanos,r.nanos)}function Te(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jt(n){return!!n&&"arrayValue"in n}function Tt(n){return!!n&&"nullValue"in n}function St(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xe(n){return!!n&&"mapValue"in n}function ie(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return De(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ie(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ie(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Se{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{}class k extends Xt{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yi(e,t,r):t==="array-contains"?new bi(e,r):t==="in"?new Ii(e,r):t==="not-in"?new wi(e,r):t==="array-contains-any"?new Ai(e,r):new k(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ei(e,r):new vi(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ae(t,this.value)):t!==null&&G(this.value)===G(t)&&this.matchesComparison(Ae(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends Xt{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new pe(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class yi extends k{constructor(e,t,r){super(e,t,r),this.key=C.fromName(r.referenceValue)}matches(e){const t=C.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ei extends k{constructor(e,t){super(e,"in",t),this.keys=Zt("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vi extends k{constructor(e,t){super(e,"not-in",t),this.keys=Zt("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zt(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>C.fromName(r.referenceValue))}class bi extends k{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jt(t)&&fe(t.arrayValue,this.value)}}class Ii extends k{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fe(this.value.arrayValue,t)}}class wi extends k{constructor(e,t){super(e,"not-in",t)}matches(e){if(fe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fe(this.value.arrayValue,t)}}class Ai extends k{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new N(0,0))}static max(){return new D(new N(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||V.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,V.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,V.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _e(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _e(this.root,e,this.comparator,!1)}getReverseIterator(){return new _e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _e(this.root,e,this.comparator,!0)}}class _e{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class V{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??V.RED,this.left=i??V.EMPTY,this.right=s??V.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new V(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return V.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return V.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}V.EMPTY=null,V.RED=!0,V.BLACK=!1;V.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,r,i,s){return this}insert(e,t,r){return new V(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pt(this.data.getIterator())}getIteratorFrom(e){return new Pt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Pt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.value=e}static empty(){return new L({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ie(t)}setAll(e){let t=O.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ie(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());xe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];xe(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){De(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new L(ie(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new M(e,0,D.min(),D.min(),D.min(),L.empty(),0)}static newFoundDocument(e,t,r,i){return new M(e,1,t,D.min(),r,i,0)}static newNoDocument(e,t){return new M(e,2,t,D.min(),D.min(),L.empty(),0)}static newUnknownDocument(e,t){return new M(e,3,t,D.min(),D.min(),L.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=L.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=L.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof M&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new M(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Vt(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Ti(n,e,t,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function en(n){return n.collectionGroup!==null}function tn(n){const e=Je(n);if(e.S===null){e.S=[];const t=new Set;for(const s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ve(O.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new ze(s,r))}),t.has(O.keyField().canonicalString())||e.S.push(new ze(O.keyField(),r))}return e.S}function Si(n){const e=Je(n);return e.N||(e.N=Pi(e,tn(n))),e.N}function Pi(n,e){if(n.limitType==="F")return Vt(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ze(i.field,s)});const t=n.endAt?new Se(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Se(n.startAt.position,n.startAt.inclusive):null;return Vt(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function He(n,e){const t=n.filters.concat([e]);return new Ce(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ie(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ie(i)?"-0":i}}(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Di=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ci=(()=>({and:"AND",or:"OR"}))();class Fi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rt(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ni(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dt(n){return j(!!n),D.fromTimestamp(function(t){const r=K(t);return new N(r.seconds,r.nanos)}(n))}function nn(n,e){return We(n,e).canonicalString()}function We(n,e){const t=function(i){return new R(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Oi(n,e){const t=function(i){const s=R.fromString(i);return j(sn(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new f(g,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new f(g,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new C(function(i){return j(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function ki(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(h,u){return nn(h.databaseId,u)}(n,i);const s=function(h){if(h.length!==0)return rn(pe.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(u=>function(w){return{field:Q(w.field),direction:xi(w.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=function(h,u){return h.useProto3Json||di(u)?u:{value:u}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{B:t,parent:i}}function xi(n){return Ri[n]}function Li(n){return Di[n]}function $i(n){return Ci[n]}function Q(n){return{fieldPath:n.canonicalString()}}function rn(n){return n instanceof k?function(t){if(t.op==="=="){if(St(t.value))return{unaryFilter:{field:Q(t.field),op:"IS_NAN"}};if(Tt(t.value))return{unaryFilter:{field:Q(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(St(t.value))return{unaryFilter:{field:Q(t.field),op:"IS_NOT_NAN"}};if(Tt(t.value))return{unaryFilter:{field:Q(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Q(t.field),op:Li(t.op),value:t.value}}}(n):n instanceof pe?function(t){const r=t.getFilters().map(i=>rn(i));return r.length===1?r[0]:{compositeFilter:{op:$i(t.op),filters:r}}}(n):S()}function sn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return new Fi(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new f(Z,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,We(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===je&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new f(re,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,We(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===je&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new f(re,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Mi(n,e){const t=Je(n),{B:r,parent:i}=ki(t.serializer,Si(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,c,h){const u=Oi(a,c.name),b=Dt(c.updateTime),w=c.createTime?Dt(c.createTime):D.min(),E=new L({mapValue:{fields:c.fields}}),l=M.newFoundDocument(u,b,w,E);return h&&l.setHasCommittedMutations(),h?l.setHasCommittedMutations():l}(t.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Map;function Ui(n){if(n._terminated)throw new f(Z,"The client has already been terminated.");if(!se.has(n)){be("ComponentProvider","Initializing Datastore");const e=function(s){return new pi(s,fetch.bind(null))}(function(s,o,a,c){return new ai(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Qt(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Ze(n._databaseId),r=function(s,o,a,c){return new Bi(s,o,a,c)}(n._authCredentials,n._appCheckCredentials,e,t);se.set(n,r)}return se.get(n)}class Ct{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new f(g,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new f(g,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,c){if(o===!0&&c===!0)throw new f(g,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qt((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new f(g,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new f(g,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new f(g,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class et{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ct({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new f(Z,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new f(Z,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ct(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ei;switch(r.type){case"firstParty":return new ii(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new f(g,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=se.get(t);r&&(be("ComponentProvider","Removing Datastore"),se.delete(t),r.terminate())}(this),Promise.resolve()}}function is(n,e){const t=typeof n=="object"?n:Or(),r=typeof n=="string"?n:e||"(default)",i=Rr(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Sn("firestore");s&&qi(i,...s)}return i}function qi(n,e,t,r={}){var i;const s=(n=Gt(n,et))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=F.MOCK_USER;else{a=Vn(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new f(g,"mockUserToken must contain 'sub' or 'user_id' field!");c=new F(h)}n._authCredentials=new ti(new Kt(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new z(this.firestore,e,this._query)}}class B{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new J(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new B(this.firestore,e,this._key)}}class J extends z{constructor(e,t,r){super(e,t,function(s){return new Ce(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new B(this.firestore,null,new C(e))}withConverter(e){return new J(this.firestore,e,this._path)}}function ss(n,e,...t){if(n=oe(n),li("collection","path",e),n instanceof et){const r=R.fromString(e,...t);return vt(r),new J(n,null,r)}{if(!(n instanceof B||n instanceof J))throw new f(g,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return vt(r),new J(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ee($.fromBase64String(e))}catch(t){throw new f(g,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ee($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new f(g,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new f(g,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new f(g,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=/^__.*__$/;function cn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class nt{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new nt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Ke(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(cn(this.et)&&ji.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class zi{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ze(e)}ht(e,t,r,i=!1){return new nt({et:e,methodName:t,lt:r,path:O.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ln(n){const e=n._freezeSettings(),t=Ze(n._databaseId);return new zi(n._databaseId,!!e.ignoreUndefinedProperties,t)}function un(n,e,t,r=!1){return rt(t,n.ht(r?4:3,e))}function rt(n,e){if(hn(n=oe(n)))return Wi("Unsupported field value:",e,n),Hi(n,e);if(n instanceof an)return function(r,i){if(!cn(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=rt(a,i.ut(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vi(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=N.fromDate(r);return{timestampValue:Rt(i.serializer,s)}}if(r instanceof N){const s=new N(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rt(i.serializer,s)}}if(r instanceof tt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ee)return{bytesValue:Ni(i.serializer,r._byteString)};if(r instanceof B){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nn(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${Re(r)}`)}(n,e)}function Hi(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):De(n,(r,i)=>{const s=rt(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function hn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof N||n instanceof tt||n instanceof ee||n instanceof B||n instanceof an)}function Wi(n,e,t){if(!hn(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Re(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}const Ki=new RegExp("[~\\*/\\[\\]]");function Gi(n,e,t){if(e.search(Ki)>=0)throw Ke(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new on(...e.split("."))._internalPath}catch{throw Ke(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ke(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new f(g,a+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new B(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fn extends dn{data(){return super.data()}}class Qi{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Yi(n,e){return typeof e=="string"?Gi(n,e):e instanceof on?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{}class st extends it{}function os(n,e,...t){let r=[];e instanceof it&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof at).length,a=s.filter(c=>c instanceof ot).length;if(o>1||o>0&&a>0)throw new f(g,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ot extends st{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ot(e,t,r)}_apply(e){const t=this._parse(e);return pn(e._query,t),new z(e.firestore,e.converter,He(e._query,t))}_parse(e){const t=ln(e.firestore);return function(s,o,a,c,h,u,b){let w;if(h.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new f(g,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nt(b,u);const E=[];for(const l of b)E.push(Ft(c,s,l));w={arrayValue:{values:E}}}else w=Ft(c,s,b)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nt(b,u),w=un(a,o,b,u==="in"||u==="not-in");return k.create(h,u,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class at extends it{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new at(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:pe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)pn(o,c),o=He(o,c)}(e._query,t),new z(e.firestore,e.converter,He(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ct extends st{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ct(e,t,r)}_apply(e){return new z(e.firestore,e.converter,function(r,i,s){return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function as(n){return ui("limit",n),ct._create("limit",n,"F")}class lt extends st{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new lt(e,t,r)}_apply(e){const t=Ji(e,this.type,this._docOrFields,this._inclusive);return new z(e.firestore,e.converter,function(i,s){return new Ce(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function cs(...n){return lt._create("startAfter",n,!1)}function Ji(n,e,t,r){if(t[0]=oe(t[0]),t[0]instanceof dn)return function(s,o,a,c,h){if(!c)throw new f(Ht,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const b of tn(s))if(b.field.isKeyField())u.push(Te(o,c.key));else{const w=c.data.field(b.field);if(Xe(w))throw new f(g,'Invalid query. You are trying to start or end a query using a document for which the field "'+b.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const E=b.field.canonicalString();throw new f(g,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}u.push(w)}return new Se(u,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ln(n.firestore);return function(o,a,c,h,u,b){const w=o.explicitOrderBy;if(u.length>w.length)throw new f(g,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let l=0;l<u.length;l++){const d=u[l];if(w[l].field.isKeyField()){if(typeof d!="string")throw new f(g,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof d}`);if(!en(o)&&d.indexOf("/")!==-1)throw new f(g,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${d}' contains a slash.`);const p=o.path.child(R.fromString(d));if(!C.isDocumentKey(p))throw new f(g,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${p}' is not because it contains an odd number of segments.`);const m=new C(p);E.push(Te(a,m))}else{const p=un(c,h,d);E.push(p)}}return new Se(E,b)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ft(n,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new f(g,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!en(e)&&t.indexOf("/")!==-1)throw new f(g,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(R.fromString(t));if(!C.isDocumentKey(r))throw new f(g,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Te(n,new C(r))}if(t instanceof B)return Te(n,t._key);throw new f(g,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Re(t)}.`)}function Nt(n,e){if(!Array.isArray(n)||n.length===0)throw new f(g,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pn(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new f(g,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new f(g,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Xi extends class{convertValue(t,r="none"){switch(G(t)){case 0:return null;case 1:return t.booleanValue;case 2:return T(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw S()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return De(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(t){return new tt(T(t.latitude),T(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=Yt(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(de(t));default:return null}}convertTimestamp(t){const r=K(t);return new N(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=R.fromString(t);j(sn(i));const s=new le(i.get(1),i.get(3)),o=new C(i.popFirst(5));return s.isEqual(r)||Qe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ee(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}function us(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new f(Wt,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Gt(n,z))._query);const e=Ui(n.firestore),t=new Xi(n.firestore);return Mi(e,n._query).then(r=>{const i=r.map(s=>new fn(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new Qi(n,i)})}(function(){(function(t){ne=t})(`${Fr}_lite`),ve(new ae("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new et(new ni(e.getProvider("auth-internal")),new oi(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new f(g,'"projectId" not provided in firebase.initializeApp.');return new le(a.options.projectId,c)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Y("firestore-lite","4.6.3",""),Y("firestore-lite","4.6.3","esm2017")})();function Zi(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mn={exports:{}};(function(n){(function(e){var t=0,r=function i(s,o){var a=this,c=this,h=!1;if(Array.isArray(s))return!!s.length&&s.map(function(l){return new i(l,o)});var u={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},o);var l=typeof s=="string";this.container=l?document.querySelector(s):s,this.createDefinitions(),c.attachEvents()},createDefinitions:function(){var l=this,d=this.options,p=d.elementClass,m=d.openOnInit,y=d.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(E(p));this.elements=Array.from(y).filter(function(_){return _.classList&&_.classList.contains(p)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(_){return!_.classList.contains("js-enabled")}).forEach(function(_){_.classList.add("js-enabled"),l.generateIDs(_),l.setARIA(_),l.setTransition(_);var A=l.elements.indexOf(_);t++,m.includes(A)?l.showElement(_,!1):l.closeElement(_,!1)})},setTransition:function(l){var d=arguments.length>1&&arguments[1]!==void 0&&arguments[1],p=this.options,m=p.duration,y=p.panelClass,_=l.querySelector(E(y)),A=b("transitionDuration");_.style[A]=d?null:"".concat(m,"ms")},generateIDs:function(l){var d=this.options,p=d.triggerClass,m=d.panelClass,y=l.querySelector(E(p)),_=l.querySelector(E(m));l.setAttribute("id",l.id||"ac-".concat(t)),y.setAttribute("id",y.id||"ac-trigger-".concat(t)),_.setAttribute("id",_.id||"ac-panel-".concat(t))},removeIDs:function(l){var d=this.options,p=d.triggerClass,m=d.panelClass,y=l.querySelector(E(p)),_=l.querySelector(E(m));l.id.startsWith("ac-")&&l.removeAttribute("id"),y.id.startsWith("ac-")&&y.removeAttribute("id"),_.id.startsWith("ac-")&&_.removeAttribute("id")},setARIA:function(l){var d=this.options,p=d.ariaEnabled,m=d.triggerClass,y=d.panelClass;if(p){var _=l.querySelector(E(m)),A=l.querySelector(E(y));_.setAttribute("role","button"),_.setAttribute("aria-controls",A.id),_.setAttribute("aria-disabled",!1),_.setAttribute("aria-expanded",!1),A.setAttribute("role","region"),A.setAttribute("aria-labelledby",_.id)}},updateARIA:function(l,d){var p=d.ariaExpanded,m=d.ariaDisabled,y=this.options,_=y.ariaEnabled,A=y.triggerClass;if(_){var x=l.querySelector(E(A));x.setAttribute("aria-expanded",p),x.setAttribute("aria-disabled",m)}},removeARIA:function(l){var d=this.options,p=d.ariaEnabled,m=d.triggerClass,y=d.panelClass;if(p){var _=l.querySelector(E(m)),A=l.querySelector(E(y));_.removeAttribute("role"),_.removeAttribute("aria-controls"),_.removeAttribute("aria-disabled"),_.removeAttribute("aria-expanded"),A.removeAttribute("role"),A.removeAttribute("aria-labelledby")}},focus:function(l,d){l.preventDefault();var p=this.options.triggerClass;d.querySelector(E(p)).focus()},focusFirstElement:function(l){this.focus(l,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(l){this.focus(l,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(l){var d=this.currFocusedIdx+1;if(d>this.elements.length-1)return this.focusFirstElement(l);this.focus(l,this.elements[d]),this.currFocusedIdx=d},focusPrevElement:function(l){var d=this.currFocusedIdx-1;if(d<0)return this.focusLastElement(l);this.focus(l,this.elements[d]),this.currFocusedIdx=d},showElement:function(l){var d=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],p=this.options,m=p.panelClass,y=p.activeClass,_=p.collapse,A=p.beforeOpen;d&&A(l);var x=l.querySelector(E(m)),gn=x.scrollHeight;l.classList.add(y),requestAnimationFrame(function(){requestAnimationFrame(function(){x.style.height=d?"".concat(gn,"px"):"auto"})}),this.updateARIA(l,{ariaExpanded:!0,ariaDisabled:!_})},closeElement:function(l){var d=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],p=this.options,m=p.panelClass,y=p.activeClass,_=p.beforeClose,A=l.querySelector(E(m)),x=A.scrollHeight;l.classList.remove(y),d?(_(l),requestAnimationFrame(function(){A.style.height="".concat(x,"px"),requestAnimationFrame(function(){A.style.height=0})})):A.style.height=0,this.updateARIA(l,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(l){var d=this.options,p=d.activeClass,m=d.collapse,y=l.classList.contains(p);if(!y||m)return y?this.closeElement(l):this.showElement(l)},closeElements:function(){var l=this,d=this.options,p=d.activeClass;d.showMultiple||this.elements.forEach(function(m,y){m.classList.contains(p)&&y!==l.currFocusedIdx&&l.closeElement(m)})},handleClick:function(l){var d=this,p=l.currentTarget;this.elements.forEach(function(m,y){m.contains(p)&&l.target.nodeName!=="A"&&(d.currFocusedIdx=y,d.closeElements(),d.focus(l,m),d.toggleElement(m))})},handleKeydown:function(l){switch(l.key){case"ArrowUp":return this.focusPrevElement(l);case"ArrowDown":return this.focusNextElement(l);case"Home":return this.focusFirstElement(l);case"End":return this.focusLastElement(l);default:return null}},handleFocus:function(l){var d=l.currentTarget,p=this.elements.find(function(m){return m.contains(d)});this.currFocusedIdx=this.elements.indexOf(p)},handleTransitionEnd:function(l){if(l.stopPropagation(),l.propertyName==="height"){var d=this.options,p=d.onOpen,m=d.onClose,y=l.currentTarget,_=parseInt(y.style.height),A=this.elements.find(function(x){return x.contains(y)});_>0?(y.style.height="auto",p(A)):m(A)}}};this.attachEvents=function(){if(!h){var l=u.options,d=l.triggerClass,p=l.panelClass;u.handleClick=u.handleClick.bind(u),u.handleKeydown=u.handleKeydown.bind(u),u.handleFocus=u.handleFocus.bind(u),u.handleTransitionEnd=u.handleTransitionEnd.bind(u),u.elements.forEach(function(m){var y=m.querySelector(E(d)),_=m.querySelector(E(p));y.addEventListener("click",u.handleClick),y.addEventListener("keydown",u.handleKeydown),y.addEventListener("focus",u.handleFocus),_.addEventListener("webkitTransitionEnd",u.handleTransitionEnd),_.addEventListener("transitionend",u.handleTransitionEnd)}),h=!0}},this.detachEvents=function(){if(h){var l=u.options,d=l.triggerClass,p=l.panelClass;u.elements.forEach(function(m){var y=m.querySelector(E(d)),_=m.querySelector(E(p));y.removeEventListener("click",u.handleClick),y.removeEventListener("keydown",u.handleKeydown),y.removeEventListener("focus",u.handleFocus),_.removeEventListener("webkitTransitionEnd",u.handleTransitionEnd),_.removeEventListener("transitionend",u.handleTransitionEnd)}),h=!1}},this.toggle=function(l){var d=u.elements[l];d&&u.toggleElement(d)},this.open=function(l){var d=u.elements[l];d&&u.showElement(d)},this.openAll=function(){var l=u.options,d=l.activeClass,p=l.onOpen;u.elements.forEach(function(m){m.classList.contains(d)||(u.showElement(m,!1),p(m))})},this.close=function(l){var d=u.elements[l];d&&u.closeElement(d)},this.closeAll=function(){var l=u.options,d=l.activeClass,p=l.onClose;u.elements.forEach(function(m){m.classList.contains(d)&&(u.closeElement(m,!1),p(m))})},this.destroy=function(){a.detachEvents(),a.openAll(),u.elements.forEach(function(l){u.removeIDs(l),u.removeARIA(l),u.setTransition(l,!0)}),h=!0},this.update=function(){u.createDefinitions(),a.detachEvents(),a.attachEvents()};var b=function(l){return typeof document.documentElement.style[l]=="string"?l:(l=w(l),l="webkit".concat(l))},w=function(l){return l.charAt(0).toUpperCase()+l.slice(1)},E=function(l){return".".concat(CSS.escape(l))};u.init()};n.exports!==void 0?n.exports=r:e.Accordion=r})(window)})(mn);var es=mn.exports;const hs=Zi(es);export{hs as A,us as a,ss as c,is as g,Nr as i,as as l,os as q,cs as s};
//# sourceMappingURL=vendor-5b5f395c.js.map
