(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7873167c"],{"0e51":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"wizard",tag:"section"}},[i("base-material-wizard",{staticClass:"mx-auto",attrs:{"available-steps":t.availableSteps,items:t.tabs},on:{"click:next":t.next,"click:prev":function(e){t.tab--}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",{staticClass:"pb-12"},[i("form",{attrs:{action:"","data-vv-scope":"about"}},[i("div",{staticClass:"text-center display-1 font-weight-light mb-6"},[t._v("\n          Let's start with basic information (with validation)\n        ")]),i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"},attrs:{justify:"space-around"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"auto"}},[i("input",{ref:"file",staticClass:"d-none",attrs:{type:"file"},on:{change:t.onChange}}),i("v-card",{staticClass:"mx-auto mt-0 d-inline-flex v-card--account",class:t.image?"success--text":"grey--text",attrs:{outlined:"",height:"106",width:"106"},on:{click:function(e){return t.$refs.file.click()}}},[t.image?i("v-img",{attrs:{src:t.image,height:"100%",width:"100%"}}):i("v-icon",{staticClass:"mx-auto",attrs:{size:"96"}},[t._v("\n                mdi-account\n              ")])],1),i("div",{staticClass:"font-weight-bold grey--text"},[t._v("\n              CHOOSE PICTURE\n            ")])],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.first"),color:"secondary","data-vv-name":"first",label:"First Name*","prepend-icon":"mdi-face","validate-on-blur":""},model:{value:t.first,callback:function(e){t.first=e},expression:"first"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.last"),color:"secondary","data-vv-name":"last",label:"Last Name*","prepend-icon":"mdi-account","validate-on-blur":""},model:{value:t.last,callback:function(e){t.last=e},expression:"last"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.email"),color:"secondary","data-vv-name":"email",label:"Email*","prepend-icon":"mdi-email","validate-on-blur":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)]),i("v-tab-item",{staticClass:"pb-12"},[i("form",{attrs:{action:"","data-vv-scope":"account"}},[i("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[i("div",{staticClass:"text-center display-1 grey--text font-weight-light mb-6"},[t._v("\n            What are you doing? (checkboxes)\n          ")]),i("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden","data-vv-name":"type"},domProps:{value:t.stringAccount}}),i("v-item-group",{staticClass:"row",attrs:{multiple:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}},t._l(t.accounts,(function(e,a){return i("v-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var n=a.active,s=a.toggle;return[i("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[i("v-card",{staticClass:"mb-6 mx-auto pa-10 d-inline-block v-card--account",class:n?"success--text":"grey--text",attrs:{outlined:""},on:{click:s}},[i("v-icon",{attrs:{large:""},domProps:{textContent:t._s(e.icon)}})],1),i("div",{staticClass:"text-uppercase subtitle-2 text--primary",domProps:{textContent:t._s(e.type)}})],1)]}}],null,!0)})})),1)],1)],1)]),i("v-tab-item",{staticClass:"pb-12"},[i("div",{staticClass:"text-center display-1 grey--text font-weight-light mb-6"},[t._v("\n        Are you living in a nice area?\n      ")]),i("form",{attrs:{action:"","data-vv-scope":"address"}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"},attrs:{justify:"space-around"}},[i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.address"),color:"secondary","data-vv-name":"address",label:"Street Name*","validate-on-blur":""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.street"),color:"secondary","data-vv-name":"street",label:"Street Number*","validate-on-blur":""},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.city"),color:"secondary","data-vv-name":"city",label:"City*","validate-on-blur":""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{autocomplete:Date.now(),"error-messages":t.errors.collect("address.state"),items:t.states,color:"secondary","data-vv-name":"state",label:"State*","validate-on-blur":""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1)],1)])],1)],1)},n=[],s=(i("6762"),{name:"DashboardFormsWizard",data:function(){return{account:[],accounts:[{icon:"mdi-pencil",type:"design"},{icon:"mdi-code-tags",type:"code"},{icon:"mdi-laptop",type:"develop"}],address:"",city:"",email:"",first:"",image:null,last:"",state:"",states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],street:"",tab:0,tabs:["About","Account","Address"]}},computed:{stringAccount:function(){return this.account.join(",")},scope:function(){return 0===this.tab?"about":2===this.tab?"address":"account"},availableSteps:function(){var t=[0];return this.first&&this.last&&this.email&&t.push(1),this.stringAccount&&t.includes(1)&&t.push(2),this.address&&this.street&&this.city&&this.state&&t.includes(2)&&t.push(3),t}},methods:{next:function(){var t=this;this.validateForm(this.scope).then((function(e){e&&(t.tab===t.tabs.length-1?alert("Form finished"):t.tab++)}))},onChange:function(t){var e=t.target.files[0];if(!e)return this.image=null;this.image=URL.createObjectURL(e)},validateForm:function(t){return this.$validator.validateAll(t)}}}),r=s,o=(i("4d2a"),i("2877")),c=i("6544"),l=i.n(c),u=i("c6a6"),d=i("b0af"),h=i("62ad"),f=i("a523"),p=i("132d"),v=i("adda"),m=i("d903"),g=i("604c"),b=i("6b53"),y=i("0fd9"),x=i("c671"),w=i("8654"),I=Object(o["a"])(r,a,n,!1,null,null,null);e["default"]=I.exports;l()(I,{VAutocomplete:u["a"],VCard:d["a"],VCol:h["a"],VContainer:f["a"],VIcon:p["a"],VImg:v["a"],VItem:m["a"],VItemGroup:g["b"],VResponsive:b["a"],VRow:y["a"],VTabItem:x["a"],VTextField:w["a"]})},"0fd9":function(t,e,i){"use strict";i("8e6e");var a=i("bd86"),n=(i("5df3"),i("f400"),i("a481"),i("ac6a"),i("456d"),i("6762"),i("2fdb"),i("4b85"),i("2b0e")),s=i("d9f7"),r=i("80d2");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return l.reduce((function(i,a){return i[t+Object(r["E"])(a)]=e(),i}),{})}var h=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},v=d("justify",(function(){return{type:String,default:null,validator:p}})),m=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,i){var a=y[t];if(null!=i){if(e){var n=e.replace(t,"");a+="-".concat(n)}return a+="-".concat(i),a.toLowerCase()}}var w=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},f,{justify:{type:String,default:null,validator:p}},v,{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var i=e.props,n=e.data,r=e.children,o="";for(var c in i)o+=String(i[c]);var l=w.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var a=i[t],n=x(e,t,a);n&&l.push(n)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(t,"align-".concat(i.align),i.align),Object(a["a"])(t,"justify-".concat(i.justify),i.justify),Object(a["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),w.set(o,l)}(),t(i.tag,Object(s["a"])(n,{staticClass:"row",class:l}),r)}})},"1e6c":function(t,e,i){"use strict";var a=i("9d65"),n=i("4e82"),s=i("c3f0"),r=i("80d2"),o=i("58df"),c=Object(o["a"])(a["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(r["f"])(t.clientHeight))}))}},render:function(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}})},"2bfd":function(t,e,i){},"4d2a":function(t,e,i){"use strict";var a=i("b51a"),n=i.n(a);n.a},b51a:function(t,e,i){},c671:function(t,e,i){"use strict";var a=i("1e6c");e["a"]=a["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=a["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},c6a6:function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("6762"),i("2fdb"),i("7514");var a=i("bd86"),n=(i("2bfd"),i("b974")),s=i("8654"),r=i("80d2");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=c({},n["b"],{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return c({},n["a"].options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),c({},l,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=c({},t.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){if(!this.searchIsDirty&&this.multiple&&[r["x"].backspace,r["x"].left,r["x"].right,r["x"].delete].includes(t)){var e=this.selectedItems.length-1;if(t===r["x"].left)-1===this.selectedIndex?this.selectedIndex=e:this.selectedIndex--;else if(t===r["x"].right)this.selectedIndex>=e?this.selectedIndex=-1:this.selectedIndex++;else if(-1===this.selectedIndex)return void(this.selectedIndex=e);var i=this.selectedItems[this.selectedIndex];if([r["x"].backspace,r["x"].delete].includes(t)&&!this.getDisabled(i)){var a=this.selectedIndex===e?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===a?this.setValue(this.multiple?[]:void 0):this.selectItem(i),this.selectedIndex=a}}},clearableCallback:function(){this.internalSearch=void 0,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"disabled",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(){this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],i=this.getText(e);t.clipboardData.setData("text/plain",i),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},d903:function(t,e,i){"use strict";var a=i("bd86"),n=i("4e82"),s=i("58df"),r=i("d9bd"),o=i("2b0e"),c=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(a["a"])({},this.activeClass,this.isActive)}),t):(Object(r["c"])("v-item should only contain a single element",this),t)):(Object(r["c"])("v-item is missing a default scopedSlot",this),null);var t}});e["a"]=Object(s["a"])(c,Object(n["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})}}]);