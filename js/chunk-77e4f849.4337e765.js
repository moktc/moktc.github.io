(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e4f849"],{"33f3":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticStyle:{width:"auto"},attrs:{absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[a("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.$vuetify.breakpoint.smAndDown?t.setAppDrawer(!t.appDrawer):t.$emit("input",!t.value)}}},[t.value?a("v-icon",[t._v("\n      mdi-view-quilt\n    ")]):a("v-icon",[t._v("\n      mdi-dots-vertical\n    ")])],1),a("v-toolbar-title",{staticClass:"hidden-sm-and-down",domProps:{textContent:t._s(t.toolbarTitle)}}),a("v-spacer"),a("v-text-field",{staticClass:"mb-2",staticStyle:{"max-width":"165px"},attrs:{label:t.$t("search"),color:"secondary","hide-details":""},scopedSlots:t._u([t.$vuetify.breakpoint.mdAndUp?{key:"append-outer",fn:function(){return[a("v-btn",{staticClass:"mt-n2",attrs:{fab:"",small:""}},[a("v-icon",[t._v("mdi-magnify")])],1)]},proxy:!0}:null],null,!0)}),a("div",{staticClass:"mx-3"}),a("v-btn",{attrs:{"min-width":"0",text:""}},[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[a("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[a("v-badge",{attrs:{color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",{staticClass:"caption"},[t._v("5")])]},proxy:!0}],null,!0)},[a("v-icon",[t._v("mdi-bell")])],1)],1)]}}])},[a("v-list",{attrs:{tile:!1,nav:""}},[a("div",t._l(t.notifications,(function(e,o){return a("app-bar-item",{key:"item-"+o},[a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1)])],1),a("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[a("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-account")])],1)]}}])},[a("v-list",{attrs:{tile:!1,flat:"",nav:""}},[t._l(t.profile,(function(e,o){return[e.divider?a("v-divider",{key:"divider-"+o,staticClass:"mb-2 mt-2"}):a("app-bar-item",{key:"item-"+o,attrs:{to:"/"}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]}))],2)],1)],1)},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),r=a("16b7"),s=a("f2e7"),l=a("58df"),c=a("d9bd"),d=Object(l["a"])(r["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),u=a("da13"),p=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b=Object(p["a"])("app"),m=b.mapGetters,h=b.mapActions,y={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(t){var e=this;return t(d,{scopedSlots:{default:function(a){var o=a.hover;return t(u["a"],{attrs:e.$attrs,class:{"black--text":!o,"white--text secondary elevation-12":o},props:f({activeClass:"",dark:o,link:!0},e.$attrs)},e.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"],profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}]}},computed:f({},m(["appDrawer","customerInfo"]),{toolbarTitle:function(){return this.$route.name+" "+this.customerInfo.customerName}}),methods:f({},h(["setAppDrawer"]))},g=y,w=a("2877"),_=a("6544"),O=a.n(_),k=a("40dc"),x=(a("ff44"),a("a9ad")),j=a("fe6c"),A=a("f40d"),S=Object(l["a"])(x["a"],s["a"],Object(j["b"])(["left","bottom"]),A["a"]).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes:function(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render:function(t){var e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e):e])}}),$=a("8336"),C=a("ce7e6"),D=a("132d"),P=a("8860"),V=a("5d23"),B=a("e449"),M=a("2fa4"),T=a("8654"),E=a("2a7f"),I=Object(w["a"])(g,o,n,!1,null,null,null);e["default"]=I.exports;O()(I,{VAppBar:k["a"],VBadge:S,VBtn:$["a"],VDivider:C["a"],VIcon:D["a"],VList:P["a"],VListItemTitle:V["c"],VMenu:B["a"],VSpacer:M["a"],VTextField:T["a"],VToolbarTitle:E["b"]})},ff44:function(t,e,a){}}]);