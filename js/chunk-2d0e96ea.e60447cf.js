(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e96ea"],{"8e07":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticStyle:{width:"auto"},attrs:{absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[n("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.$vuetify.breakpoint.smAndDown?t.setAppDrawer(!t.appDrawer):t.$emit("input",!t.value)}}},[t.value?n("v-icon",[t._v("\n      mdi-view-quilt\n    ")]):n("v-icon",[t._v("\n      mdi-dots-vertical\n    ")])],1),n("v-toolbar-title",{staticClass:"hidden-sm-and-down",domProps:{textContent:t._s(t.$route.name)}}),n("v-spacer"),n("v-text-field",{staticClass:"mb-2",staticStyle:{"max-width":"165px"},attrs:{label:t.$t("search"),color:"secondary","hide-details":""},scopedSlots:t._u([t.$vuetify.breakpoint.mdAndUP?{key:"append-outer",fn:function(){return[n("v-btn",{staticClass:"mt-n2",attrs:{fab:"",small:""}},[n("v-icon",[t._v("mdi-magnify")])],1)]},proxy:!0}:null],null,!0)}),n("div",{staticClass:"mx-3"}),n("v-btn",{attrs:{"min-width":"0",text:""}},[n("v-icon",[t._v("mdi-view-dashboard")])],1),n("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",a,!1),r),[n("v-badge",{attrs:{color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[n("span",{staticClass:"caption"},[t._v("5")])]},proxy:!0}],null,!0)},[n("v-icon",[t._v("mdi-bell")])],1)],1)]}}])},[n("v-list",{attrs:{tile:!1,nav:""}},[n("div",t._l(t.notifications,(function(e,a){return n("app-bar-item",{key:"item-"+a},[n("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1)])],1),n("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({attrs:{"min-width":"0",text:""}},"v-btn",a,!1),r),[n("v-icon",[t._v("mdi-account")])],1)]}}])},[n("v-list",{attrs:{tile:!1,flat:"",nav:""}},[t._l(t.profile,(function(e,a){return[e.divider?n("v-divider",{key:"divider-"+a,staticClass:"mb-2 mt-2"}):n("app-bar-item",{key:"item-"+a,attrs:{to:"/"}},[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]}))],2)],1)],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("ce87"),s=n("da13"),l=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=Object(l["a"])("app"),u=d.mapGetters,v=d.mapActions,f={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(t){var e=this;return t(o["a"],{scopedSlots:{default:function(n){var a=n.hover;return t(s["a"],{attrs:e.$attrs,class:{"black--text":!a,"white--text secondary elevation-12":a},props:p({activeClass:"",dark:a,link:!0},e.$attrs)},e.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"],profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}]}},computed:p({},u(["appDrawer"])),methods:p({},v(["setAppDrawer"]))},m=f,b=n("2877"),h=n("6544"),w=n.n(h),y=n("40dc"),_=n("4ca6"),g=n("8336"),k=n("ce7e6"),O=n("132d"),x=n("8860"),P=n("5d23"),j=n("e449"),A=n("2fa4"),C=n("8654"),D=n("2a7f"),S=Object(b["a"])(m,a,r,!1,null,null,null);e["default"]=S.exports;w()(S,{VAppBar:y["a"],VBadge:_["a"],VBtn:g["a"],VDivider:k["a"],VIcon:O["a"],VList:x["a"],VListItemTitle:P["c"],VMenu:j["a"],VSpacer:A["a"],VTextField:C["a"],VToolbarTitle:D["a"]})}}]);