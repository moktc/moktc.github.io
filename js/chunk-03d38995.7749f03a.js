(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d38995"],{"0fd9":function(t,e,i){"use strict";i("4b85");var a=i("2b0e"),n=i("d9f7"),s=i("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,a)=>{return i[t+Object(s["E"])(a)]=e(),i},{})}const c=t=>[...r,"baseline","stretch"].includes(t),p=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...r,"space-between","space-around","stretch"].includes(t),h=l("alignContent",()=>({type:String,default:null,validator:f})),g={align:Object.keys(p),justify:Object.keys(u),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let a=b[t];if(null!=i){if(e){const i=e.replace(t,"");a+=`-${i}`}return a+=`-${i}`,a.toLowerCase()}}const m=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...p,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:f},...h},render(t,{props:e,data:i,children:a}){let s="";for(const n in e)s+=String(e[n]);let o=m.get(s);if(!o){let t;for(t in o=[],g)g[t].forEach(i=>{const a=e[i],n=v(t,i,a);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(s,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),a)}})},1574:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"pages-core-footer",absolute:"",color:"transparent",dark:""}},[i("v-container",[i("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,function(e,a){return i("v-col",{key:a,staticClass:"text-center",attrs:{cols:"6",md:"auto"}},[i("a",{staticClass:"mr-0",attrs:{href:e.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(e.text)}})])}),i("v-spacer",{staticClass:"hidden-sm-and-down"}),i("v-col",{attrs:{cols:"12",md:"auto"}},[i("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v("\n          © 2019, made with\n          "),i("v-icon",{attrs:{size:"20"}},[t._v("\n            mdi-heart\n          ")]),t._v("\n          by Creative Tim for a better web.\n        ")],1)])],2)],1)],1)},n=[],s={name:"PagesCoreFooter",data:()=>({links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]})},o=s,r=(i("b86b"),i("2877")),l=i("6544"),c=i.n(l),p=i("62ad"),d=i("a523"),u=i("553a"),f=i("132d"),h=i("0fd9"),g=i("2fa4"),b=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=b.exports;c()(b,{VCol:p["a"],VContainer:d["a"],VFooter:u["a"],VIcon:f["a"],VRow:h["a"],VSpacer:g["a"]})},"3a66":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i("fe6c"),n=i("58df");function s(t,e=[]){return Object(n["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"553a":function(t,e,i){"use strict";i("b5b6");var a=i("3a66"),n=i("8dd9"),s=i("d10f"),o=i("58df"),r=i("80d2");e["a"]=Object(o["a"])(n["a"],Object(a["a"])("footer",["height","inset"]),s["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...n["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...n["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(r["f"])(t),left:Object(r["f"])(this.computedLeft),right:Object(r["f"])(this.computedRight),bottom:Object(r["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}})},"7fbe":function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("e8f2"),n=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let s;const{attrs:o}=i;return o&&(i.attrs={},s=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),a)}})},b5b6:function(t,e,i){},b86b:function(t,e,i){"use strict";var a=i("7fbe"),n=i.n(a);n.a},e8f2:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i("2b0e");function n(t){return a["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:a,children:n}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=` ${t.join(" ")}`)}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,n)}})}}}]);