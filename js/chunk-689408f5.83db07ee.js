(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-689408f5"],{"0cbd":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"validation-forms",fluid:"",tag:"section"}},[r("base-v-component",{attrs:{heading:"Forms",link:"components/forms"}}),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("base-material-card",{staticClass:"py-3 px-5",attrs:{color:"success",icon:"mdi-mail",title:"Register Form"}},[r("v-form",[r("v-text-field",{attrs:{color:"secondary",label:"Email Address*"}}),r("v-text-field",{attrs:{label:"Password*","append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show=!t.show}}}),r("v-text-field",{attrs:{label:"Confirm Password*","append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show2=!t.show2}}}),r("div",{staticClass:"body-2 font-weight-light"},[t._v("\n            * Required Fields\n          ")]),r("v-card-actions",{staticClass:"pa-0"},[r("v-checkbox",{attrs:{label:"Subscribe to newsletter"}}),r("v-spacer"),r("v-btn",{attrs:{default:"",color:"success"}},[t._v("\n              Register\n            ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("base-material-card",{staticClass:"py-3 px-5",attrs:{color:"success",icon:"mdi-camera-account",title:"Login Form"}},[r("v-form",[r("v-text-field",{attrs:{color:"secondary",label:"Email Address*"}}),r("v-text-field",{attrs:{label:"Password*","append-icon":t.show3?"mdi-eye":"mdi-eye-off",type:t.show3?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show3=!t.show3}}}),r("v-card-actions",{staticClass:"pa-0"},[r("v-spacer"),r("v-btn",{attrs:{default:"",color:"success"}},[t._v("\n              Login\n            ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("form",{attrs:{action:"","data-vv-scope":"form-1"},on:{submit:function(e){return e.preventDefault(),t.validateForm("form-1")}}},[r("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",inline:"",title:"Type Validation"}},[r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Required Text\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("form-1.required"),color:"secondary","data-vv-name":"required"},model:{value:t.required,callback:function(e){t.required=e},expression:"required"}})],1),r("v-col",[r("code",[t._v("required")])])],1),r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Email\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("form-1.email"),color:"secondary","data-vv-name":"email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("v-col",[r("code",[t._v('type="email"')])])],1),r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Number\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],attrs:{"error-messages":t.errors.collect("form-1.number"),"data-vv-name":"number",color:"secondary",type:"number"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),r("v-col",[r("code",[t._v('type="number"')])])],1),r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Url\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],attrs:{color:"secondary","data-vv-name":"url",type:"url","error-messages":t.errors.collect("form-1.url")},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),r("v-col",[r("code",[t._v('type="url"')])])],1),r("div",{staticClass:"pa-3 text-center"},[r("v-btn",{attrs:{color:"success",default:"",type:"submit"}},[t._v("\n              Validate Inputs\n            ")])],1)],1)],1)]),r("v-col",{attrs:{cols:"12"}},[r("form",{attrs:{action:"","data-vv-scope":"form-2"},on:{submit:function(e){return e.preventDefault(),t.validateForm("form-2")}}},[r("base-material-card",{attrs:{color:"success",inline:"",title:"Range Validation"}},[r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Min Length\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{"error-messages":t.errors.collect("form-2.min-length"),color:"secondary","data-vv-name":"min-length"},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}})],1),r("v-col",[r("code",[t._v('minLength="5"')])])],1),r("v-row",{attrs:{align:"center",dense:""}},[r("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Max Length\n            ")]),r("v-col",{attrs:{cols:"8"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:5",expression:"'required|max:5'"}],attrs:{"error-messages":t.errors.collect("form-2.max-length"),color:"secondary","data-vv-name":"max-length"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})],1),r("v-col",[r("code",[t._v('maxLength="5"')])])],1),r("div",{staticClass:"pa-3 text-center"},[r("v-btn",{attrs:{color:"success",default:"",type:"submit"}},[t._v("\n              Validate Inputs\n            ")])],1)],1)],1)])],1)],1)},s=[],i={name:"DashboardFormsValidationForms",$_veeValidate:{validator:"new"},data:function(){return{email:"",max:"",min:"",number:null,url:"",required:"",show:!1,show2:!1,show3:!1}},methods:{validateForm:function(t){this.$validator.validateAll(t).then((function(t){t&&alert("Form Submitted!")}))}}},n=i,o=r("2877"),c=r("6544"),l=r.n(c),d=r("8336"),u=r("99d9"),v=r("ac7c"),m=r("62ad"),f=r("a523"),p=r("4bd4"),h=r("0fd9"),b=r("2fa4"),g=r("8654"),y=Object(o["a"])(n,a,s,!1,null,null,null);e["default"]=y.exports;l()(y,{VBtn:d["a"],VCardActions:u["a"],VCheckbox:v["a"],VCol:m["a"],VContainer:f["a"],VForm:p["a"],VRow:h["a"],VSpacer:b["a"],VTextField:g["a"]})},"4bd4":function(t,e,r){"use strict";r("8e6e"),r("456d");var a=r("bd86"),s=(r("7514"),r("ac6a"),r("8615"),r("6762"),r("2fdb"),r("58df")),i=r("7e2b"),n=r("3206");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(s["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},8547:function(t,e,r){"use strict";var a=r("2b0e"),s=r("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["k"]}}})},a523:function(t,e,r){"use strict";r("f559"),r("ac6a"),r("456d"),r("20f6"),r("4b85");var a=r("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var a=r.props,s=r.data,i=r.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var n=s.attrs;if(n){s.attrs={};var o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,i)}})}var i=r("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,a=e.props,s=e.data,n=e.children,o=s.attrs;return o&&(s.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(i["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),n)}})}}]);