(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25745c8c"],{7496:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),i=(r("df86"),r("7560")),a=r("58df");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(a["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:c({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},a6dd:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("pages-core-app-bar"),r("pages-core-view"),r("pages-core-footer")],1)},i=[],a={name:"PagesIndex",components:{PagesCoreAppBar:function(){return Promise.all([r.e("chunk-66c59dc0"),r.e("chunk-5cef45d5")]).then(r.bind(null,"75b9"))},PagesCoreFooter:function(){return Promise.all([r.e("chunk-29d42f62"),r.e("chunk-364b5a76")]).then(r.bind(null,"1574"))},PagesCoreView:function(){return r.e("chunk-bdaba0fa").then(r.bind(null,"e402"))}},created:function(){this.$vuetify.theme.dark=!0},beforeDestroy:function(){this.$vuetify.theme.dark=!1}},o=a,c=r("2877"),s=r("6544"),u=r.n(s),p=r("7496"),f=Object(c["a"])(o,n,i,!1,null,null,null);t["default"]=f.exports;u()(f,{VApp:p["a"]})},df86:function(e,t,r){}}]);