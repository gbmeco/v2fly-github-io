(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{330:function(t,r,o){},367:function(t,r,o){"use strict";var i=o(330);o.n(i).a},379:function(t,r,o){"use strict";o.r(r);o(172),o(171),o(45),o(68);var i=["win","mac","linux","android","ios"],s={methods:{platformToImagePath:function(t){return{win:"/tools/win.svg",mac:"/tools/apple.svg",linux:"/tools/linux.svg",android:"/tools/android.svg",ios:"tools/ios.svg"}[t]},urlToRepo:function(t){return t.replace("https://github.com/","")}},props:{name:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},platforms:{type:Array,required:!0,validator:function(t){return!!t&&(t instanceof Array&&!t.some((function(t){return-1===!i.indexOf(t)})))}}}},n=(o(367),o(18)),e=Object(n.a)(s,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("section",[o("h3",[o("a",{attrs:{href:t.url}},[t._v(t._s(t.name))]),t._v(" "),o("span",t._l(t.platforms,(function(r){return o("img",{staticClass:"platform-logo",attrs:{src:t.platformToImagePath(r)}})})),0),t._v(" "),o("span",[o("img",{attrs:{src:"https://img.shields.io/github/commit-activity/m/"+t.urlToRepo(t.url)+"?color=informational&label=commits&style=social"}}),t._v(" "),o("img",{attrs:{src:"https://img.shields.io/github/stars/"+t.urlToRepo(t.url)+"?style=social"}})])]),t._v(" "),o("p",[t._v(t._s(t.description))])])}),[],!1,null,"52be53d0",null);r.default=e.exports}}]);