(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79374ff9"],{"20f6":function(e,s,c){},"4b85":function(e,s,c){},d9f7:function(e,s,c){"use strict";
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function a(){const e={};let s,c,a=arguments.length;while(a--)for(s of Object.keys(arguments[a]))switch(s){case"class":case"style":case"directives":Array.isArray(e[s])||(e[s]=[]),e[s]=e[s].concat(arguments[a][s]);break;case"staticClass":if(!arguments[a][s])break;void 0===e[s]&&(e[s]=""),e[s]&&(e[s]+=" "),e[s]+=arguments[a][s].trim();break;case"on":case"nativeOn":e[s]||(e[s]={});const t=e[s];for(c of Object.keys(arguments[a][s]||{}))t[c]?t[c]=Array().concat(t[c],arguments[a][s][c]):t[c]=arguments[a][s][c];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":e[s]||(e[s]={}),e[s]={...arguments[a][s],...e[s]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:e[s]||(e[s]=arguments[a][s])}return e}c.d(s,"a",function(){return a})}}]);