(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f22e1e84"],{"0fd9":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),n=s("d9f7"),o=s("80d2");const a=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return a.reduce((s,i)=>{return s[t+Object(o["C"])(i)]=e(),s},{})}const c=t=>[...r,"baseline","stretch"].includes(t),h=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:d})),p=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(h),justify:Object.keys(u),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,s){let i=m[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const b=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:s,children:i}){let o="";for(const n in e)o+=String(e[n]);let a=b.get(o);if(!a){let t;for(t in a=[],v)v[t].forEach(s=>{const i=e[s],n=g(t,s,i);n&&a.push(n)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(o,a)}return t(e.tag,Object(n["a"])(s,{staticClass:"row",class:a}),i)}})},"13b3":function(t,e,s){},"1bfb":function(t,e,s){},"2b56":function(t,e,s){"use strict";var i=s("f6b3"),n=s.n(i);n.a},"3a7f":function(t,e,s){var i,n;(function(o,a){i=[s("ba48")],n=function(t){return o.returnExportsGlobal=a(t)}.apply(e,i),void 0===n||(t.exports=n)})(this,function(t){return function(t,e,s){"use strict";var i={pointClipOffset:5};function n(t){t.attr({style:"display:none"})}function o(t){t.attr({style:"display:block"})}function a(t,e){var s=t.x,i=t.y,n=e.x-s,o=e.y-i;return n<0&&(n=-n,s=e.x),o<0&&(o=-o,i=e.y),{x:s,y:i,width:n,height:o}}function r(t,e){return l(t.clientX,t.clientY,e)}function l(t,e,s){var i="svg"===s.tagName?s:s.ownerSVGElement,n=i.getScreenCTM(),o=i.createSVGPoint();return o.x=t,o.y=e,o=o.matrixTransform(n.inverse()),o||{x:0,y:0}}function c(t,e){var s=e.bounds||e.range,i=s.max,n=s.min;if(e.scale&&"log"===e.scale.type){var o=e.scale.base;return Math.pow(o,t*h(i/n,o)/e.axisLength)*n}var a=s.range||i-n;return t*a/e.axisLength+n}function h(t,e){return Math.log(t)/Math.log(e)}s.plugins=s.plugins||{},s.plugins.zoom=function(t){return t=s.extend({},i,t),function(e){if(e instanceof s.Line){var i,l,h,d,u,p,f=t.onZoom,v=[];e.on("draw",function(t){var e=t.type;"line"!==e&&"bar"!==e&&"area"!==e||t.element.attr({"clip-path":"url(#line-mask)"})}),e.on("created",function(s){h=s.axisX,d=s.axisY,u=s.chartRect,l=s.svg._node,i=s.svg.elem("rect",{x:10,y:10,width:100,height:100},"ct-zoom-rect"),n(i);var o=s.svg.querySelector("defs")||s.svg.elem("defs"),a=u.width(),r=u.height();function c(t,e){o.elem("clipPath",{id:t}).elem("rect",{x:u.x1-e,y:u.y2-e,width:a+e+e,height:r+e+e,fill:"white"})}c("line-mask",0),c("point-mask",t.pointClipOffset);var p=e.svg.querySelectorAll("."+s.options.classNames.series);p=p?p.svgElements:[];for(var f=0;f<p.length;++f)p[f].attr({"clip-path":"url(#point-mask)"});function v(t,e){l.addEventListener(t,e)}v("mousedown",$),v("mouseup",M),v("mousemove",O),v("touchstart",w),v("touchmove",x),v("touchend",T),v("touchcancel",y)});var m=function(){e.options.axisX.highLow=null,e.options.axisY.highLow=null,e.update(e.data,e.options)}}function g(t){var e=r(t,l);return e.id=t.identifier,e}function b(t){for(var e=0;e<v.length;e++){var s=v[e].id;if(s===t)return e}return-1}function w(t){for(var e=t.changedTouches,s=0;s<e.length;s++)v.push(g(e[s]));v.length>1&&(i.attr(a(v[0],v[1])),o(i))}function x(t){for(var e=t.changedTouches,s=0;s<e.length;s++){var n=b(e[s].identifier);v.splice(n,1,g(e[s]))}v.length>1&&(i.attr(a(v[0],v[1])),o(i),t.preventDefault())}function y(t){C(t.changedTouches)}function C(t){for(var e=0;e<t.length;e++){var s=b(t[e].identifier);s>=0&&v.splice(s,1)}}function T(t){v.length>1&&I(a(v[0],v[1])),C(t.changedTouches),n(i)}function $(t){if(0===t.button){var e=r(t,l);S(e,u)&&(p=e,i.attr(a(p,p)),o(i),t.preventDefault())}}function S(t,e){return t.x>=e.x1&&t.x<=e.x2&&t.y>=e.y2&&t.y<=e.y1}function M(e){if(0===e.button&&p){var s=a(p,r(e,l));I(s),p=null,n(i)}else t.resetOnRightMouseBtn&&2===e.button&&(m(),e.preventDefault())}function I(t){if(t.width>5&&t.height>5){var s=Math.max(0,t.x-u.x1),i=Math.min(u.width(),s+t.width),n=Math.min(u.height(),u.y1-t.y),o=Math.max(0,n-t.height);e.options.axisX.highLow={low:c(s,h),high:c(i,h)},e.options.axisY.highLow={low:c(o,d),high:c(n,d)},e.update(e.data,e.options),f&&f(e,m)}}function O(t){if(p){var e=r(t,l);S(e,u)&&(i.attr(a(p,e)),t.preventDefault())}}}}}(window,document,t),t.plugins.zoom})},"608c":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),n=s("d9f7"),o=s("80d2");const a=["sm","md","lg","xl"],r=(()=>{return a.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return a.reduce((t,e)=>{return t["offset"+Object(o["C"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return a.reduce((t,e)=>{return t["order"+Object(o["C"])(e)]={type:[String,Number],default:null},t},{})})(),h={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const u=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:o}){let a="";for(const n in e)a+=String(e[n]);let r=u.get(a);if(!r){let t;for(t in r=[],h)h[t].forEach(s=>{const i=e[s],n=d(t,s,i);n&&r.push(n)});const s=r.some(t=>t.startsWith("col-"));r.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(a,r)}return t(e.tag,Object(n["a"])(s,{class:r}),i)}})},7277:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",lg:"2"}},[s("material-stats-card",{attrs:{color:"green",icon:"mdi-store",title:"Current Month Total",value:t.currentMonthTotal,"sub-text":t.currentMonthLabel},scopedSlots:t._u([{key:"sub-text-right",fn:function(){return[s("span",{staticClass:"caption font-weight-light"},[t._v("\n            "+t._s(t.currentMonthIncreasePercent)+"\n          ")]),s("v-icon",{attrs:{color:"green",small:""}},[t._v("\n            "+t._s(t.currentMonthIncreaseIcon)+"\n          ")])]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"12",sm:"6",lg:"2"}},[s("material-stats-card",{attrs:{color:"orange",icon:"mdi-content-copy",title:"Mobile Count",value:t.mobileCount,"sub-icon":"mdi-alert","sub-icon-color":"error","sub-text":t.activeMobile,"sub-text-color":"text-primary"},scopedSlots:t._u([{key:"sub-text-right",fn:function(){return[s("span",{staticClass:"caption font-weight-light"},[t._v("\n            Usage "+t._s(t.activeDomesticMobileSum)+"\n          ")])]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"12",sm:"6",lg:"2"}},[s("material-stats-card",{attrs:{color:"red",icon:"mdi-information-outline",title:"Number of Accounts",value:t.acctCount,"sub-icon":"mdi-tag","sub-text":t.activeCIDNCount}})],1),s("v-col",{attrs:{cols:"12",sm:"6",lg:"2"}},[s("material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"National Data Usage",value:t.domesticDataExcessSum,"sub-icon":"mdi-update","sub-text":t.domesticDataCountLabel},scopedSlots:t._u([{key:"sub-text-right",fn:function(){return[s("span",{staticClass:"caption font-weight-light"},[t._v("\n            "+t._s(t.domesticDataUsageLabel)+"\n          ")])]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"12",sm:"6",lg:"2"}},[s("material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"International",value:t.overseasDataExcessSum,"sub-icon":"mdi-update","sub-text":t.overseasDataCountLabel},scopedSlots:t._u([{key:"sub-text-right",fn:function(){return[s("span",{staticClass:"caption font-weight-light"},[t._v("\n            "+t._s(t.overseasDataUsageLabel)+"\n          ")])]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"12",lg:"4"}},[s("material-chart-card",{attrs:{data:t.billTotal12Months,options:t.billTotal12MonthsChartOptions.options,color:"info",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),s("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 4 minutes ago")]),s("div",{staticClass:"flex-grow-1"}),t.storeBillTotalZoomIcon?s("v-icon",{staticClass:"mr-2",attrs:{large:""},on:{click:t.resetBillTotalZoom}},[t._v("\n            mdi-magnify-minus-outline\n          ")]):t._e()]},proxy:!0}])},[s("h4",{staticClass:"title font-weight-light"},[t._v("\n          12 months Total\n        ")]),s("p",{staticClass:"category d-inline-flex font-weight-light"},[s("v-icon",{attrs:{color:"green",small:""}},[t._v("\n            mdi-arrow-up\n          ")]),s("span",{staticClass:"green--text"},[t._v("55%")]),t._v(" \n          increase in today's sales\n        ")],1)])],1),s("v-col",{attrs:{cols:"12",lg:"4"}},[s("material-chart-card",{attrs:{data:t.domesticDataTotal12Months,options:t.domesticData12MonthsChartOptions.options,color:"red",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),s("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 10 minutes ago")])]},proxy:!0}])},[s("h4",{staticClass:"title font-weight-light"},[t._v("\n          12 months Data Usage\n        ")]),s("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("\n          Domestic Data\n        ")])])],1),s("v-col",{attrs:{cols:"12",lg:"4"}},[s("material-chart-card",{attrs:{data:t.domesticVoiceTotal12Months,options:t.domesticVoice12MonthsChartOptions.options,color:"green",type:"Line"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),s("span",{staticClass:"caption grey--text font-weight-light"},[t._v("campaign sent 26 minutes ago")])]},proxy:!0}])},[s("h3",{staticClass:"title font-weight-light"},[t._v("\n          12 months Call count\n        ")]),s("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("\n          Domestic Voice Usage\n        ")])])],1),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("material-card",{attrs:{color:"orange",title:"Equipment"}},[s("v-card-title",[s("div",{staticClass:"flex-grow-1"}),s("v-text-field",{attrs:{label:"Search","single-line":"","hide-details":""},model:{value:t.searchEquipment,callback:function(e){t.searchEquipment=e},expression:"searchEquipment"}})],1),s("v-data-table",{attrs:{headers:t.deviceSummaryHeaders,items:t.deviceSummaryList,"items-per-page":5,search:t.searchEquipment}})],1)],1),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("material-card",{staticClass:"card-tabs",attrs:{color:"green"},scopedSlots:t._u([{key:"header",fn:function(){return[s("v-tabs",{attrs:{"background-color":"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("span",{staticClass:"subheading font-weight-light mx-3",staticStyle:{"align-self":"center"}},[t._v("Top Ten:")]),s("v-tab",{staticClass:"mr-3"},[s("v-icon",{staticClass:"mr-2"},[t._v("\n                mdi-bug\n              ")]),t._v("\n              Local calls\n            ")],1),s("v-tab",{staticClass:"mr-3"},[s("v-icon",{staticClass:"mr-2"},[t._v("\n                mdi-code-tags\n              ")]),t._v("\n              Local Usage\n            ")],1),s("v-tab",{staticClass:"mr-3"},[s("v-icon",{staticClass:"mr-2"},[t._v("\n                mdi-code-tags\n              ")]),t._v("\n              Duration\n            ")],1),s("v-tab",[s("v-icon",{staticClass:"mr-2"},[t._v("\n                mdi-cloud\n              ")]),t._v("\n              International\n            ")],1)],1)]},proxy:!0}])},[s("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("v-tab-item",[s("v-data-table",{attrs:{headers:t.topTenHeaders,items:t.topTenDomesticCall,"items-per-page":5}},[s("template",{slot:"no-data"},[t._v("\n                Loading top ten\n              ")])],2)],1),s("v-tab-item",[s("v-data-table",{attrs:{headers:t.topTenHeaders,items:t.topTenDomesticUsage,"items-per-page":5}})],1),s("v-tab-item",[s("v-data-table",{attrs:{headers:t.topTenHeaders,items:t.topTenDomesticDuration,"items-per-page":5}})],1),s("v-tab-item",[s("v-data-table",{attrs:{headers:t.topTenHeaders,items:t.topTenOverseasCall,"items-per-page":5}})],1)],1)],1)],1)],1)],1)},n=[],o=s("4360"),a=s("2f62"),r=s("2ef0"),l=s.n(r),c=s("c1df"),h=s.n(c);s("3a7f");const{mapGetters:d}=Object(a["a"])("dashboard");var u={computed:{...d(["currentMonthTotal","currentMonthLabel","currentMonthIncrease","mobileCount","refreshRequired","activeMobile","activeDomesticMobileCount","activeDomesticMobileSum","domesticDataCount","domesticDataSum","domesticDataExcessSum","domesticDataUsageLabel","overseasDataCount","overseasDataSum","overseasDataExcessSum","overseasDataUsageLabel","internationalDataUsage","acctCount","cidnCount","activeCIDNCount","dataUsage","billTotal12Months","domesticVoiceTotal12Months","domesticDataTotal12Months","deviceSummaryList","topTenLoading","topTenDomesticCall","topTenDomesticUsage","topTenDomesticDuration","topTenOverseasCall"])},watch:{billTotal12Months:{handler(){this.update12MonthsTotal()}},currentMonthIncrease:{handler(){this.currentMonthIncrease>0?this.currentMonthIncreaseIcon="mdi-arrow-up":this.currentMonthIncrease<0?this.currentMonthIncreaseIcon="mdi-arrow-down":this.currentMonthIncreaseIcon="",this.currentMonthIncreasePercent=this.currentMonthIncrease+"%"}},domesticVoiceTotal12Months:{handler(){this.updateDomesticVoice12MonthsTotal()}},domesticDataTotal12Months:{handler(){this.updateDomesticData12MonthsTotal()}},domesticDataCount:{handler(){this.domesticDataCountLabel="Count "+this.domesticDataCount}},overseasDataCount:{handler(){this.overseasDataCountLabel="Travelled "+this.overseasDataCount}}},mounted(){console.log("Dashboard.vue mounted refreshRequired "+this.refreshRequired),this.refreshRequired?(o["a"].dispatch("app/setProgress",!0),o["a"].dispatch("dashboard/loadData"),o["a"].dispatch("dashboard/loadTopTen")):(this.update12MonthsTotal(),this.updateDomesticVoice12MonthsTotal())},data(){return{storeBillTotalZoomIcon:!1,resetBillTotal:function(){},mobileCountTotalActive:"Total Active 0",currentMonthIncreasePercent:"0%",currentMonthIncreaseIcon:"mdi-arrow-up",domesticDataCountLabel:"Count 0",searchEquipment:"",overseasDataCountLabel:"Travelled 0",billTotal12MonthsChartOptions:{options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:430,high:570,axisX:{type:this.$chartist.FixedScaleAxis,divisor:5,labelInterpolationFnc:function(t){const e=h()(t).format("MMM");return e}},axisY:{type:this.$chartist.AutoScaleAxis},plugins:[this.$chartist.plugins.zoom({onZoom:this.storeBillTotalZoomReset,pointClipOffset:10})],chartPadding:{top:0,right:10,bottom:0,left:0}}},domesticVoice12MonthsChartOptions:{options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:430,high:570,chartPadding:{top:0,right:0,bottom:0,left:0},axisX:{type:this.$chartist.FixedScaleAxis,divisor:5,labelInterpolationFnc:function(t){const e=h()(t).format("MMM");return e}},series:{call:{lineSmooth:this.$chartist.Interpolation.step()},duration:{lineSmooth:this.$chartist.Interpolation.simple()}}}},domesticData12MonthsChartOptions:{options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:430,high:570,chartPadding:{top:0,right:0,bottom:0,left:0},axisX:{type:this.$chartist.FixedScaleAxis,divisor:5,labelInterpolationFnc:function(t){const e=h()(t).format("MMM");return e}},series:{call:{lineSmooth:this.$chartist.Interpolation.step()},duration:{lineSmooth:this.$chartist.Interpolation.simple()}}}},topTenHeaders:[{sortable:!1,text:"Mobile",value:"sn"},{sortable:!1,text:"Value",value:"qty",align:"right"}],deviceSummaryHeaders:[{sortable:!1,text:"Device",value:"device"},{sortable:!1,text:"Make",value:"make",align:"right"},{sortable:!1,text:"Model",value:"model",align:"right"},{sortable:!1,text:"Qty",value:"qty",align:"right"}],tabs:0,list:{0:!1,1:!1,2:!1}}},methods:{complete(t){this.list[t]=!this.list[t]},storeBillTotalZoomReset(t,e){this.resetBillTotal=e,this.storeBillTotalZoomIcon=!0,console.log("storeReset called "+this.resetBillTotal)},resetBillTotalZoom(){this.resetBillTotal(),this.storeBillTotalZoomIcon=!1,console.log("resetBillTotalZoom called ")},update12MonthsTotal(){const t=l.a.min(this.billTotal12Months.series[0]),e=l.a.max(this.billTotal12Months.series[0]);this.billTotal12MonthsChartOptions.options.high=e+30,this.billTotal12MonthsChartOptions.options.low=t-10},updateDomesticVoice12MonthsTotal(){const t=l.a.min(this.domesticVoiceTotal12Months.series[1]),e=l.a.max(this.domesticVoiceTotal12Months.series[0]);this.domesticVoice12MonthsChartOptions.options.high=e+2,this.domesticVoice12MonthsChartOptions.options.low=t},updateDomesticData12MonthsTotal(){console.log("updateDomesticData12MonthsTotal started"),console.log(this.domesticDataTotal12Months.series[1]);const t=l.a.min(this.domesticDataTotal12Months.series[1]),e=l.a.max(this.domesticDataTotal12Months.series[0]);this.domesticData12MonthsChartOptions.options.high=e+2,this.domesticData12MonthsChartOptions.options.low=t}}},p=u,f=(s("2b56"),s("2877")),v=s("6544"),m=s.n(v),g=s("99d9"),b=s("62ad"),w=s("a523"),x=s("8fea"),y=s("132d"),C=s("0fd9"),T=s("4e82"),$=s("1c87"),S=s("7560"),M=s("80d2"),I=s("58df");const O=Object(I["a"])($["a"],Object(T["a"])("tabsBar"),S["a"]);var _=O.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...$["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:t=>{t.keyCode===M["w"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),D=s("9d65"),k=s("c3f0");const B=Object(I["a"])(D["a"],Object(T["a"])("windowGroup","v-window-item","v-window"));var A=B.extend().extend().extend({name:"v-window-item",directives:{Touch:k["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0!==this.windowGroup.transitionCount||this.windowGroup.noHeightReset||(this.windowGroup.internalHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.internalHeight=Object(M["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.internalHeight=Object(M["f"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}}),j=A.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=A.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),L=(s("1bfb"),s("608c"),s("9d26")),E=s("0789"),V=s("604c"),R=s("dc22");const N=Object(I["a"])(V["a"]).extend({name:"base-slide-group",directives:{Resize:R["a"],Touch:k["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$vuetify.icons.next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$vuetify.icons.prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...V["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(L["a"],{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(E["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,o=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const n=t.clientWidth,o=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const a=e.wrapper+i,r=n+o,l=.4*n;return o<i?i=Math.max(o-l,0):a<r&&(i=Math.min(i-(a-r-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});N.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var P=s("d10f"),X=Object(I["a"])(N,P["a"],S["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...N.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=N.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let o=!1,a=!1;for(const r of s)if(r.to===i?o=!0:r.to===n&&(a=!0),o&&a)break;!o&&a&&(this.internalValue=void 0)}},render(t){const e=N.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),H=(s("13b3"),s("afdd")),W=V["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:k["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,noHeightReset:!1,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...V["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?"-reverse":"";return`v-window-${t}${e}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>{return this.internalValue===this.getValue(t,e)})},internalReverse(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},t)},genIcon(t,e,s){return this.$createElement("div",{staticClass:`v-window__${t}`},[this.$createElement(H["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},on:{click:()=>{this.changedByDelimiters=!0,s()}}},[this.$createElement(L["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),z=W.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...W.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||V["a"].options.methods.getValue.call(this,t,e)}}}),G=s("a9ad"),q=Object(I["a"])(G["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),Y=s("a452");const U=Object(I["a"])(G["a"],Y["a"],S["a"]);var Z=U.extend().extend({name:"v-tabs",directives:{Resize:R["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$vuetify.icons.next"},optional:Boolean,prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(M["f"])(this.slider.height),left:this.isReversed?void 0:Object(M["f"])(this.slider.left),right:this.isReversed?Object(M["f"])(this.slider.right):void 0,top:this.vertical?Object(M["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(M["f"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(M["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(X,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(z,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(q,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],o=n.length;for(let a=0;a<o;a++){const o=n[a];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":s.push(o);break;default:i.push(o)}else i.push(o)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),F=s("8654"),J=Object(f["a"])(p,i,n,!1,null,null,null);e["default"]=J.exports;m()(J,{VCardTitle:g["c"],VCol:b["a"],VContainer:w["a"],VDataTable:x["a"],VIcon:y["a"],VRow:C["a"],VTab:_,VTabItem:j,VTabs:Z,VTabsItems:z,VTextField:F["a"]})},c3f0:function(t,e,s){"use strict";var i=s("80d2");const n=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t,o=.5,a=16;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&s<e-a&&t.left(t),t.right&&s>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&n<i-a&&t.up(t),t.down&&n>i+a&&t.down(t))};function o(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function r(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>o(t,e),touchend:t=>a(t,e),touchmove:t=>r(t,e)}}function c(t,e,s){const n=e.value,o=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!o)return;const r=l(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[s.context._uid]=r,Object(i["x"])(r).forEach(t=>{o.addEventListener(t,r[t],a)})}function h(t,e,s){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const o=n._touchHandlers[s.context._uid];Object(i["x"])(o).forEach(t=>{n.removeEventListener(t,o[t])}),delete n._touchHandlers[s.context._uid]}const d={inserted:c,unbind:h};e["a"]=d},d10f:function(t,e,s){"use strict";var i=s("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},f6b3:function(t,e,s){}}]);