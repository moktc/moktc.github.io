(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dea9a92"],{"0fd9":function(t,e,n){"use strict";n("4b85");var r=n("2b0e"),a=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return i.reduce((n,r)=>{return n[t+Object(s["C"])(r)]=e(),n},{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:u})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:g})),h={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(p)},v={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){let r=v[t];if(null!=n){if(e){const n=e.replace(t,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const y=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:r}){let s="";for(const a in e)s+=String(e[a]);let i=y.get(s);if(!i){let t;for(t in i=[],h)h[t].forEach(n=>{const r=e[n],a=b(t,n,r);a&&i.push(a)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(s,i)}return t(e.tag,Object(a["a"])(n,{staticClass:"row",class:i}),r)}})},"62ad":function(t,e,n){"use strict";n("4b85");var r=n("2b0e"),a=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=(()=>{return i.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return i.reduce((t,e)=>{return t["offset"+Object(s["C"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return i.reduce((t,e)=>{return t["order"+Object(s["C"])(e)]={type:[String,Number],default:null},t},{})})(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");r+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:r,parent:s}){let i="";for(const a in e)i+=String(e[a]);let o=f.get(i);if(!o){let t;for(t in o=[],d)d[t].forEach(n=>{const r=e[n],a=u(t,n,r);a&&o.push(a)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(i,o)}return t(e.tag,Object(a["a"])(n,{class:o}),r)}})},9198:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("material-card",{attrs:{color:"primary",title:"Vue Material Dashboard PRO",text:"Are you looking for more components? Please check our Premium Version of Vue Material Dashboard."}},[n("table",{staticClass:"v-table"},[n("thead",[n("tr",[n("th"),n("th",{staticClass:"subheading font-weight-light"},[t._v("\n                Free\n              ")]),n("th",{staticClass:"subheading font-weight-light"},[t._v("\n                PRO\n              ")])])]),n("tbody",{staticClass:"text-center"},[n("tr",[n("th",{staticClass:"text-left font-weight-light subheading"},[t._v("\n                Components\n              ")]),n("td",[t._v("60")]),n("td",[t._v("200")])]),n("tr",[n("th",{staticClass:"text-left font-weight-light subheading"},[t._v("\n                Plugins\n              ")]),n("td",[t._v("2")]),n("td",[t._v("4")])]),n("tr",[n("th",{staticClass:"text-left font-weight-light subheading"},[t._v("\n                Example Pages\n              ")]),n("td",[t._v("3")]),n("td",[t._v("8")])]),n("tr",[n("th",{staticClass:"text-left font-weight-light subheading"},[t._v("\n                Login, Register, Pricing, Lock Pages\n              ")]),n("td",[n("v-icon",{attrs:{color:"error"}},[t._v("\n                  mdi-close\n                ")])],1),n("td",[n("v-icon",{attrs:{color:"success"}},[t._v("\n                  mdi-check\n                ")])],1)]),n("tr",[n("th",{staticClass:"text-left font-weight-light subheading"},[t._v("\n                Premium Support\n              ")]),n("td",[n("v-icon",{attrs:{color:"error"}},[t._v("\n                  mdi-close\n                ")])],1),n("td",[n("v-icon",{attrs:{color:"success"}},[t._v("\n                  mdi-check\n                ")])],1)]),n("tr",[n("th"),n("td",[t._v("Free")]),n("td",[t._v("Just $79")])]),n("tr",[n("th"),n("td",[n("v-btn",{staticClass:"subheading white--text font-weight-light",attrs:{rounded:"",large:"",color:"grey",disabled:""}},[t._v("\n                  Current Version\n                ")])],1),n("td",[n("v-btn",{staticClass:"subheading white--text font-weight-light",attrs:{rounded:"",large:"",color:"cyan",link:"",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro"}},[t._v("\n                  Upgrade to Pro\n                ")])],1)])])])])],1)],1)],1)},a=[],s=n("2877"),i=n("6544"),o=n.n(i),l=n("8336"),c=n("62ad"),d=n("a523"),u=n("132d"),f=n("0fd9"),g={},p=Object(s["a"])(g,r,a,!1,null,null,null);e["default"]=p.exports;o()(p,{VBtn:l["a"],VCol:c["a"],VContainer:d["a"],VIcon:u["a"],VRow:f["a"]})},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var r=n("e8f2"),a=n("d9f7");e["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:r}){let s;const{attrs:i}=n;return i&&(n.attrs={},s=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(a["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),r)}})},e8f2:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("2b0e");function a(t){return r["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:r,children:a}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=` ${t.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,a)}})}}}]);