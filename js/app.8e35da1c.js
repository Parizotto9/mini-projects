(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],v=0,u=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1ce3":function(t,e,a){"use strict";a("59d3")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"bgHeader",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"40"}})],1),n("v-spacer")],1),n("v-main",{staticClass:"main 12"},[n("Calendar",{staticClass:"alo"})],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"oi",attrs:{fluid:""}},[t.$vuetify.breakpoint.xsOnly?a("section",{staticClass:"calendar"},[a("div",{staticClass:"month",class:t.color},[a("v-icon",{attrs:{"x-large":"",color:"white"},on:{click:function(e){return t.changeMonth(!1)}}},[t._v("mdi-chevron-left")]),a("div",[a("h2",[t._v(t._s(t.months[t.month]))]),a("h3",[t._v(t._s(new Date(t.date).getFullYear()))])]),a("v-icon",{attrs:{"x-large":"",color:"white"},on:{click:function(e){return t.changeMonth(!0)}}},[t._v("mdi-chevron-right")])],1),t._m(1),a("div",{staticClass:"days"},[t._l(t.divDays,(function(e,n){return a("div",{key:n,staticClass:"dayDivMob",class:e.class,staticStyle:{position:"relative"},on:{click:function(a){return t.editEvent(e,e.Nday)}}},[e.data?a("div",{staticClass:"eventClass",class:e.data.color}):t._e(),t._v(" "+t._s(e.Nday)+" ")])})),a("v-btn",{staticClass:"red--text btnAdd",attrs:{text:""},on:{click:function(e){t.dialogEvent=!0,t.edit={}}}},[t._v("Adicionar evento")])],2)]):a("section",{staticClass:"calendarDesk",attrs:{"min-width":"500px"}},[a("div",{staticClass:"month",class:t.color},[a("v-icon",{attrs:{"x-large":"",color:"white"},on:{click:function(e){return t.changeMonth(!1)}}},[t._v("mdi-chevron-left")]),a("div",[a("h2",[t._v(t._s(t.months[t.month]))]),a("h3",[t._v(t._s(new Date(t.date).getFullYear()))])]),a("v-icon",{attrs:{"x-large":"",color:"white"},on:{click:function(e){return t.changeMonth(!0)}}},[t._v("mdi-chevron-right")])],1),t._m(0),a("div",{staticClass:"daysDesk justify-space-between"},t._l(t.divDays,(function(e,n){return a("div",{key:n,staticClass:"pa-0 dayDesk",class:e.class,staticStyle:{position:"relative"},on:{click:function(a){return t.editEvent(e,e.Nday)}}},[e.data?a("div",{staticClass:"eventClassDesk",class:e.data.color}):t._e(),t._v(" "+t._s(e.Nday)+" ")])})),0),a("v-btn",{staticClass:"red--text btnAdd",attrs:{text:""},on:{click:function(e){t.dialogEvent=!0,t.edit={}}}},[t._v("Adicionar evento")])],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 lighten-2 text-center",class:t.edit.color||"grey"},[t._v(" "+t._s(new Date(t.edit.date).toDateString())+" "),a("v-spacer"),t.editing?t._e():a("v-btn",{attrs:{icon:""},on:{click:function(e){t.editing=!0}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1),a("v-card-text",{staticClass:"mt-6 text-h6"},[a("h3",{staticClass:"text-center"},[t._v("Appointment")]),a("div",{staticClass:"d-flex align-center"},[a("strong",{staticClass:"mr-2",attrs:{color:"black--text"}},[t._v("Pacient:")]),t.editing?a("v-text-field",{model:{value:t.edit.pacient,callback:function(e){t.$set(t.edit,"pacient",e)},expression:"edit.pacient"}}):a("span",[t._v(" "+t._s(t.edit.pacient))])],1),a("br"),a("strong",{attrs:{color:"black--text"}},[t._v("Observation: ")]),t.editing?a("div",{staticClass:"pa-0"},[a("v-textarea",{attrs:{label:""},model:{value:t.edit.observation,callback:function(e){t.$set(t.edit,"observation",e)},expression:"edit.observation"}})],1):a("p",[t._v(" "+t._s(t.edit.observation||"Sem observações")+" ")]),a("div",{staticClass:"col-7 pa-0 d-flex align-center",attrs:{"max-width":"150px"}},[a("strong",{staticClass:"mr-2"},[t._v(" Color:")]),t.editing?t._e():a("span",[t._v(" "+t._s(t.edit.color))]),t.editing?a("v-select",{staticClass:"text-h6",attrs:{items:t.items},model:{value:t.edit.color,callback:function(e){t.$set(t.edit,"color",e)},expression:"edit.color"}}):t._e()],1)]),a("v-divider"),a("v-card-actions",[t.editing?t._e():a("v-btn",{attrs:{text:"",color:"red"},on:{click:function(e){t.sheet=!0}}},[t._v("Delete")]),a("v-spacer"),t.editing?a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.saveEvent()}}},[t._v(" Save ")]):a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogEvent,callback:function(e){t.dialogEvent=e},expression:"dialogEvent"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 lighten-2 text-center",class:t.edit.color||"grey"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.newDate,callback:function(e){t.newDate=e},expression:"newDate"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.newDate,callback:function(e){t.newDate=e},expression:"newDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.newDate)}}},[t._v(" OK ")])],1)],1)],1),a("v-spacer")],1),a("v-card-text",{staticClass:"mt-6 text-h6"},[a("h3",{staticClass:"text-center"},[t._v("Appointment")]),a("div",{staticClass:"d-flex align-center"},[a("strong",{staticClass:"mr-2",attrs:{color:"black--text"}},[t._v("Pacient:")]),a("v-text-field",{model:{value:t.edit.pacient,callback:function(e){t.$set(t.edit,"pacient",e)},expression:"edit.pacient"}})],1),a("br"),a("strong",{attrs:{color:"black--text"}},[t._v("Observation: ")]),a("div",{staticClass:"pa-0"},[a("v-textarea",{attrs:{label:""},model:{value:t.edit.observation,callback:function(e){t.$set(t.edit,"observation",e)},expression:"edit.observation"}})],1),a("div",{staticClass:"col-7 pa-0 d-flex align-center",attrs:{"max-width":"150px"}},[a("strong",{staticClass:"mr-2"},[t._v(" Color:")]),a("v-select",{staticClass:"text-h6",attrs:{items:t.items},model:{value:t.edit.color,callback:function(e){t.$set(t.edit,"color",e)},expression:"edit.color"}})],1)]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialogEvent=!1}}},[t._v(" Close ")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"green"},on:{click:function(e){return t.newEvent()}}},[t._v("Create")])],1)],1)],1),a("v-bottom-sheet",{attrs:{width:t.$vuetify.breakpoint.mdAndUp?"20%":"60%"},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[a("v-sheet",{staticClass:"text-center rounded-t-lg",attrs:{height:"150px"}},[a("div",{staticClass:"pt-5"},[t._v("Delete Event?")]),a("v-btn",{staticClass:"mt-6 mr-2",attrs:{color:"error"},on:{click:function(e){return t.deleteEvent()}}},[t._v("Delete")]),a("v-btn",{staticClass:"mt-6 ml-2",attrs:{color:"indigo",dark:""},on:{click:function(e){t.sheet=!t.sheet}}},[t._v(" Close ")])],1)],1),a("v-snackbar",{attrs:{color:t.snackbarColor,timeout:3e3},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" FECHAR ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weekDays"},[a("div",[t._v("Sun")]),a("div",[t._v("Mon")]),a("div",[t._v("Tue")]),a("div",[t._v("Wen")]),a("div",[t._v("Thu")]),a("div",[t._v("Fri")]),a("div",[t._v("Sat")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weekDays"},[a("div",[t._v("Sun")]),a("div",[t._v("Mon")]),a("div",[t._v("Tue")]),a("div",[t._v("Wen")]),a("div",[t._v("Thu")]),a("div",[t._v("Fri")]),a("div",[t._v("Sat")])])}],c=a("1da1"),l=(a("96cf"),a("ac1f"),a("1276"),a("4de4"),a("d3b7"),a("bc3a")),d=a.n(l),v=d.a.create({baseURL:"http://localhost:3000/"}),u=v,h={name:"HelloWorld",data:function(){return{newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date:"",snackbar:!1,snackbarColor:"",snackbarText:"",menu:!1,dialogEvent:!1,sheet:!1,events:[],filteredEvents:[],editing:!1,dialog:!1,edit:{},items:["blue-grey","red","pink","purple","indigo","blue","cyan","teal","green","lime","yellow","orange","brwon"],month:"",color:"",divDays:[],lastDay:"",lastMLDay:"",months:["January","February","March","April","May","June","July","August","September","October","November","December"],dateString:"",date2:""}},mounted:function(){this.date=new Date,this.getEvents(),this.month=this.date.getMonth(),this.dateString=this.date.toDateString()},watch:{month:function(){switch(this.month){case 0:this.color="deep-purple";break;case 1:this.color="purple";break;case 2:this.color="blue-grey";break;case 3:this.color="blue";break;case 4:this.color="yellow";break;case 5:this.color="red";break;case 6:this.color="orange";break;case 7:this.color="deep-purple";break;case 8:this.color="teal";break;case 9:this.color="pink";break;case 10:this.color="cyan";break;case 11:this.color="lime";break}}},methods:{teste:function(){console.log(new Date("June 21 2022"))},newEvent:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.newDate.split("-"),t.edit.date=t.months[a[1]-1]+" "+a[2]+" "+a[0],console.log(t.edit),e.next=5,u.post("eventos",t.edit).then((function(){t.snackbar=!0,t.snackbarText="Event registered successfully!",t.snackbarColor="green darken-3",t.edit={},t.getEvents(),t.dialogEvent=!1})).catch((function(e){t.snackbar=!0,t.snackbarText="Failed to register event, check if there is already an event for the requested date!",t.snackbarColor="red darken-3",console.log(e.message)}));case 5:case"end":return e.stop()}}),e)})))()},deleteEvent:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.delete("eventos/".concat(t.edit._id)).then((function(){t.snackbar=!0,t.snackbarText="Event successfully deleted!",t.snackbarColor="green darken-3",t.edit={},t.getEvents(),t.dialog=!1,t.sheet=!1})).catch((function(){t.snackbar=!0,t.snackbarText="Failed to delete event!",t.snackbarColor="red darken-3"}));case 2:case"end":return e.stop()}}),e)})))()},saveEvent:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.edit._id){e.next=5;break}return e.next=3,u.put("eventos/".concat(t.edit._id),t.edit).then((function(){t.snackbar=!0,t.snackbarText="Event successfully edited!",t.snackbarColor="green darken-3",t.getEvents(),t.dialog=!1,t.editing=!1})).catch((function(){t.snackbar=!0,t.snackbarText="Failed to edit event!",t.snackbarColor="red darken-3"}));case 3:e.next=7;break;case 5:return e.next=7,u.post("eventos",t.edit).then((function(){t.snackbar=!0,t.snackbarText="Event registered successfully",t.snackbarColor="green darken-3",t.getEvents(),t.dialog=!1,t.editing=!1})).catch((function(){t.snackbar=!0,t.snackbarText="Failed to register event!",t.snackbarColor="red darken-3"}));case 7:case"end":return e.stop()}}),e)})))()},editEvent:function(t,e){if("current"===t.month){if(t.data)this.editing=!1,this.edit=t.data;else{var a=this.date;a.setDate(e),this.editing=!0,this.edit={color:"blue-grey",date:a}}this.dialog=!0}else"prev"===t.month?this.changeMonth(!1):this.changeMonth(!0)},getEvents:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.date=new Date(t.date),e.next=3,u.get("eventos").then((function(e){t.events=e.data,t.filterEvents()}));case 3:case"end":return e.stop()}}),e)})))()},filterEvents:function(){for(var t=new Date(this.date).getMonth(),e=new Date(this.date).getFullYear(),a=[],n=0;n<this.events.length;n++)new Date(this.events[n].date).getMonth()===t&&new Date(this.events[n].date).getFullYear()===e&&a.push(this.events[n]);this.filteredEvents=a,this.loadCalendar()},changeMonth:function(t){t?this.date.setMonth(this.date.getMonth()+1):this.date.setMonth(this.date.getMonth()-1),this.dateString=this.date.toDateString(),this.month=this.date.getMonth(),this.getEvents()},loadCalendar:function(){var t=this;this.date.setDate(1),this.divDays=[],this.lastDay=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();var e=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();this.lastMLDay=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();for(var a=this.date.getDay(),n=7-this.lastDay-1,r=a;r>0;r--){var i={Nday:this.lastMLDay-r+1,class:"greyy dayDiv",month:"prev"};this.divDays.push(i)}for(var s=function(e){if(e===(new Date).getDate()&&t.date.getMonth()===(new Date).getMonth()){var a={Nday:e,class:"today dayDiv",month:"current"},n=t.filteredEvents.filter((function(t){if(new Date(t.date).getDate()===e)return t}));a=n?{Nday:e,class:"today dayDiv",data:n[0],month:"current"}:{Nday:e,class:"today dayDiv",month:"current"},t.divDays.push(a)}else{var r={Nday:e,class:"dayDiv"},i=t.filteredEvents.filter((function(t){if(new Date(t.date).getDate()===e)return t}));r=i?{Nday:e,class:"dayDiv",data:i[0],month:"current"}:{Nday:e,class:"dayDiv",month:"current"},t.divDays.push(r)}},o=1;e>=o;o++)s(o);for(var c=1;c<=n;c++){var l={Nday:c,class:"greyy dayDiv",month:"next"};this.divDays.push(l)}}}},f=h,p=(a("1ce3"),a("2877")),g=a("6544"),b=a.n(g),m=a("288c"),k=a("8336"),y=a("b0af"),x=a("99d9"),_=a("62ad"),D=a("2e4b"),w=a("169a"),C=a("ce7e"),E=a("132d"),M=a("e449"),S=a("b974"),V=a("8dd9"),O=a("2db4"),T=a("2fa4"),j=a("8654"),F=a("a844"),A=Object(p["a"])(f,s,o,!1,null,"16ad5154",null),$=A.exports;b()(A,{VBottomSheet:m["a"],VBtn:k["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:_["a"],VDatePicker:D["a"],VDialog:w["a"],VDivider:C["a"],VIcon:E["a"],VMenu:M["a"],VSelect:S["a"],VSheet:V["a"],VSnackbar:O["a"],VSpacer:T["a"],VTextField:j["a"],VTextarea:F["a"]});var N={name:"App",components:{Calendar:$},data:function(){return{}}},P=N,R=(a("034f"),a("7496")),Y=a("40dc"),J=a("adda"),L=a("f6c4"),B=Object(p["a"])(P,r,i,!1,null,null,null),H=B.exports;b()(B,{VApp:R["a"],VAppBar:Y["a"],VImg:J["a"],VMain:L["a"],VSpacer:T["a"]});var I=a("f309");n["a"].use(I["a"]);var W=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:W,render:function(t){return t(H)}}).$mount("#app")},"59d3":function(t,e,a){},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.c9786613.png"}});
//# sourceMappingURL=app.8e35da1c.js.map