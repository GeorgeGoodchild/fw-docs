(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{250:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("2a448cc0",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(250)},271:function(t,e,r){var o=r(51)(!1);o.push([t.i,"input{border:2px solid#7a8fa2;border-radius:4px;margin:8px 0}.loader,input{padding:3px 10px}.loader{border-radius:50%;border:8px solid #f3f3f3;border-top-color:#7a8fa2;width:50px;height:50px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=o},295:function(t,e,r){"use strict";r.r(e);r(14),r(8),r(13),r(19),r(20);var o=r(5),n=r(21),c=r(167);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={computed:_(_({},Object(n.c)("flywire",{isBusy:function(t){return t.isBusy},error:function(t){return t.error},portal:function(t){return t.portal}})),Object(c.a)("flywire",{base:"search",fields:["code","isDemo"],action:"doSearch"})),created:function(){this.$store.dispatch("flywire/load",this.$route.query)}},d=(r(270),r(2)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"mb-8"},[r("div",{staticClass:"relative"},[r("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[r("IconSearch",{staticClass:"h-5 w-5 text-gray-500"})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"block w-6/12 pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800",attrs:{maxlength:"3",placeholder:"Enter your portal code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isDemo,expression:"isDemo"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isDemo)?t._i(t.isDemo,null)>-1:t.isDemo},on:{change:function(e){var r=t.isDemo,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,null);o.checked?c<0&&(t.isDemo=r.concat([null])):c>-1&&(t.isDemo=r.slice(0,c).concat(r.slice(c+1)))}else t.isDemo=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox"}},[t._v("Demo Environment")])])]),t._v(" "),t.error?r("div",[r("div",{staticClass:"mt-8 mb-8 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[r("div",{staticClass:"flex"},[r("div",{staticClass:"py-1"},[r("svg",{staticClass:"fill-current h-6 w-6 text-red-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._v(" "),t._m(0)])]),t._v(" "),r("p",[t._v("Please supply a valid portal code.")])]):t._e(),t._v(" "),t.isBusy?r("div",{staticClass:"flex items-center justify-center mt-8 mb-12"},[r("svg",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25 grey",attrs:{cx:"12",cy:"12",r:"10",stroke:"grey","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"grey",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]):t._e(),t._v(" "),t.portal?r("div",[t.portal.logo_url?r("div",[r("img",{attrs:{src:t.portal.logo_url}}),t._v("\n      "+t._s(t.portal.name)+"\n    ")]):t._e(),t._v(" "),r("h4",[t._v("\n       Portal Settings:\n    ")]),t._v(" "),r("table",[t._m(1),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Environment")]),t._v(" "),r("td",[t._v(t._s(t.isDemo?"Demo":"Prod"))])]),t._v(" "),r("tr",[t._m(2),t._v(" "),r("td",[t._v(t._s(t.code))])]),t._v(" "),r("tr",[r("td",[t._v("Subdomain")]),t._v(" "),r("td",[t._v(t._s(t.portal.subdomain))])]),t._v(" "),r("tr",[r("td",[t._v("Currency")]),t._v(" "),r("td",[t._v(t._s(t.portal.currency.name)+" ("+t._s(t.portal.currency.code)+")")])])])]),t._v(" "),r("h4",[t._v("\n       Payment Items:\n    ")]),t._v(" "),r("table",[t._m(3),t._v(" "),r("tbody",t._l(t.portal.items,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),t._v(" "),r("td",[t._v("numeric")]),t._v(" "),r("td",[t._v("true")]),t._v(" "),r("td",[t._v("\n              "+t._s(e.label)+" - expressed in the sub-units of the currency."),r("br"),t._v(" "),r("small",[t._v("(There are "+t._s(t.portal.currency.subunit_to_unit)+" sub-units per "+t._s(t.portal.currency.code)+")")])])])})),0)]),t._v(" "),r("h4",[t._v("\n       Custom Fields:\n    ")]),t._v(" "),r("table",[t._m(4),t._v(" "),r("tbody",t._l(t.portal.fields,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),t._v(" "),r("td",[r("span",[t._v(t._s(e.type))]),t._v(" "),e.format?r("span",[t._v(" - "+t._s(e.format))]):t._e()]),t._v(" "),r("td",[t._v(t._s(e.required))]),t._v(" "),r("td",[t._v(t._s(e.view_options.section_name)+" ")]),t._v(" "),r("td",[r("span",[t._v(t._s(e.view_options.label))]),t._v(" "),e.view_options.hint?r("span",[t._v(" - "+t._s(e.view_options.hint))]):t._e(),t._v(" "),e.pattern?r("pre",{staticClass:"portal-regex"},[t._v(" "+t._s(e.pattern)+" ")]):t._e()])])})),0)])]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"font-bold"},[t._v("Please supply a valid portal code")]),t._v(" "),r("p",{staticClass:"text-sm"},[t._v("\n            If you don't know your portal code, you can contact your Flywire\n            account manager.\n          ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Setting")]),t._v(" "),r("th",[t._v("Value")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[t._v("Code "),r("small",[t._v("(Recipient)")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Id")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Notes")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Id")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Section")]),t._v(" "),r("th",[t._v("Notes")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IconSearch:r(168).default})}}]);