(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d208bfd":"cacc7881","chunk-7bcc6a72":"8df693df","chunk-016a3514":"078c7579","chunk-48045110":"f4a914f3","chunk-1d331ef2":"c44c47df","chunk-2d213afc":"25932b1d","chunk-4b901e7f":"3cf77096","chunk-2d21b46e":"3766d6dd","chunk-ca433c10":"761e29ab","chunk-c6b804dc":"0806c07c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-7bcc6a72":1,"chunk-016a3514":1,"chunk-48045110":1,"chunk-1d331ef2":1,"chunk-4b901e7f":1,"chunk-ca433c10":1,"chunk-c6b804dc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d208bfd":"31d6cfe0","chunk-7bcc6a72":"6005197f","chunk-016a3514":"1579ff77","chunk-48045110":"80184877","chunk-1d331ef2":"0e3ddb5e","chunk-2d213afc":"31d6cfe0","chunk-4b901e7f":"9d21c0d7","chunk-2d21b46e":"31d6cfe0","chunk-ca433c10":"b9997a9e","chunk-c6b804dc":"7d3958a8"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("ac1f"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r,a,i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.mainMenu,callback:function(t){e.mainMenu=t},expression:"mainMenu"}},[n("v-list-item",{attrs:{href:"https://vircadia.com/"}},[n("v-list-item-icon",[n("v-avatar",[n("img",{attrs:{src:"/assets/vircadia-icon-256.png"}})])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Vircadia Home")])],1)],1),n("v-divider"),n("v-list",[n("v-list-item-group",{attrs:{mandatory:""},model:{value:e.mainMenuModel,callback:function(t){e.mainMenuModel=t},expression:"mainMenuModel"}},e._l(e.getRoutes,(function(t){return n("v-list-item",{key:t.name,nativeOn:{click:function(n){return e.$router.push({name:t.name})}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)],1),n("v-app-bar",{directives:[{name:"show",rawName:"v-show",value:e.showAppBar,expression:"showAppBar"}],attrs:{app:"",color:"primary",src:"/assets/1920_bar.png"}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.mainMenu=!e.mainMenu}}}),n("v-toolbar-title",{staticClass:"mr-4"},[e._v(" "+e._s(e.$store.state.metaverseConfig.nickname)+" ")]),e.$store.state.account.isLoggedIn?n("span",{staticClass:"mr-4"},[e._v(" Hello, "+e._s(e.$store.state.account.username)+"! ")]):e._e(),e.$store.state.account.isAdmin?n("span",{staticClass:"mt-5"},[n("v-switch",{attrs:{row:"",color:"input",label:"Admin View"},model:{value:e.useAsAdminStore,callback:function(t){e.useAsAdminStore=t},expression:"useAsAdminStore"}})],1):e._e(),n("v-spacer"),n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.isLoggedIn,expression:"isLoggedIn"}],attrs:{icon:""},on:{click:e.logout}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-export")])],1)]}}])},[n("span",[e._v("Logout")])])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.dialog.show?n(e.dialog.which,{tag:"component",on:{"close-dialog":e.closeDialog}}):e._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in","hide-on-leave":"true"}},[n("router-view")],1),n("v-footer",{directives:[{name:"show",rawName:"v-show",value:e.showFooter,expression:"showFooter"}],attrs:{color:"primary",app:""}},[n("span",{staticClass:"white--text"},[e._v("Iamus Dashboard "+e._s(e.$store.state.globalConsts.DASHBOARD_VERSION)+" | Vircadia | "),n("a",{staticClass:"white--text",attrs:{href:"https://github.com/vircadia/project-iamus-dashboard/issues"}},[e._v("Feedback")])]),n("v-spacer"),n("span",{staticClass:"white--text"},[e._v("Metaverse: "),n("b",[e._v(e._s(e.$store.state.metaverseConfig.server))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.metaverseConfig.serverVersion,expression:"$store.state.metaverseConfig.serverVersion"}],staticClass:"white--text ml-4"},[e._v("Version: "+e._s(e.$store.state.metaverseConfig.serverVersion["npm-package-version"]))])],1)],1)},c=[],u=(n("4de4"),n("d3b7"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("8552")),l=n("8e00");u["a"].$on("open-dialog",(function(e){o.openDialog(e.which,e.shouldShow)}));var d={name:"App",components:{ErrorOccurred:l["a"]},computed:{updateAccountSession:function(){return this.$store.state.account},updatePlacesSettings:function(){return this.$store.state.places},updateAccessToken:function(){return this.$store.state.account.accessToken},metaverseServerChanged:function(){return this.$store.state.metaverseConfig.server},getRoutes:function(){var e=this.$router.options.routes;return e=e.filter((function(e){return!0===e.meta.showOnMenu})),e=this.$store.state.account.isLoggedIn?e.filter((function(e){return"Login"!==e.name})):e.filter((function(e){return"Login"===e.name})),e},useAsAdminStore:{get:function(){return this.$store.state.account.useAsAdmin},set:function(e){this.$store.commit("mutate",{update:!0,property:"account",with:{useAsAdmin:e}})}},isLoggedIn:function(){return this.$store.state.account.isLoggedIn}},watch:{updateAccountSession:{handler:function(e){for(var t in e)null!==e[t]&&localStorage.setItem(t,e[t])},deep:!0},updatePlacesSettings:{handler:function(e){for(var t in e)null!==e[t]&&localStorage.setItem(t,e[t])},deep:!0},updateAccessToken:{handler:function(){console.info("Setting new access token header..."),window.$.ajaxSetup({beforeSend:function(e){e.setRequestHeader("x-vircadia-error-handle","badrequest"),e.setRequestHeader("Authorization","Bearer "+o.$store.state.account.accessToken)}})}},useAsAdminStore:{handler:function(){location.reload()}},metaverseServerChanged:{handler:function(e){localStorage.setItem("metaverseConfig.server",e),this.retrieveMetaverseConfig(e),e!==r.account.metaverseServer&&this.logout()}},isLoggedIn:{handler:function(e){!0===e&&r.router.awaitingRouteOnLogin&&this.$router.push(r.router.routeOnLogin)}}},methods:{openDialog:function(e,t){this.dialog.which="",this.dialog.show=!1,this.dialog.which=e,this.dialog.show=t},closeDialog:function(){this.dialog.which="",this.dialog.show=!1},retrieveMetaverseConfig:function(e){console.info("Bootstrapping metaverse config for",e),window.$.ajax({type:"GET",url:e+"/api/metaverse_info"}).done((function(e){o.$store.commit("mutate",{property:"metaverseConfig",with:{name:e.metaverse_name,nickname:e.metaverse_nick_name,server:e.metaverse_url,iceServer:e.ice_server_url,serverVersion:e.metaverse_server_version}})})).fail((function(t){console.info("Failed: ",t),o.$store.commit("mutate",{property:"error",with:{title:"Failed to Retrieve Metaverse Information",code:"1",full:"We were unable to retrieve the metaverse information for "+e}}),o.openDialog("ErrorOccurred",!0)}))},logout:function(){o.$store.commit("mutate",{update:!0,property:"account",with:{isLoggedIn:!1,isAdmin:!1,accessToken:null,refreshToken:null}}),this.$router.push({name:"Login"})}},created:function(){o=this,r=this.$store.state,a=r.metaverseConfig.server;var e=new URLSearchParams(window.location.search);e.has("metaverse")?this.retrieveMetaverseConfig(e.get("metaverse")):this.retrieveMetaverseConfig(a),a!==r.account.metaverseServer&&this.logout(),"true"===e.get("appMode")&&(this.showAppBar=!1,this.showFooter=!1,this.mainMenu=!1)},data:function(){return{mainMenu:null,mainMenuModel:null,showAppBar:!0,showFooter:!0,dialog:{show:!1,which:""}}}},m=d,p=n("2877"),h=n("6544"),v=n.n(h),f=n("7496"),g=n("40dc"),w=n("5bc1"),b=n("8212"),k=n("8336"),_=n("ce7e"),y=n("553a"),S=n("132d"),A=n("8860"),I=n("da13"),C=n("5d23"),O=n("1baa"),T=n("34c3"),V=n("f774"),L=n("2fa4"),x=n("b73d"),$=n("2a7f"),M=n("3a2f"),E=Object(p["a"])(m,s,c,!1,null,null,null),P=E.exports;v()(E,{VApp:f["a"],VAppBar:g["a"],VAppBarNavIcon:w["a"],VAvatar:b["a"],VBtn:k["a"],VDivider:_["a"],VFooter:y["a"],VIcon:S["a"],VList:A["a"],VListItem:I["a"],VListItemContent:C["a"],VListItemGroup:O["a"],VListItemIcon:T["a"],VListItemTitle:C["c"],VNavigationDrawer:V["a"],VSpacer:L["a"],VSwitch:x["a"],VToolbarTitle:$["a"],VTooltip:M["a"]});var j,F,D,R=n("8c4f"),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{xl:"4",lg:"4",md:"4",xs:"12",sm:"12"}},[n("MetaverseStats")],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center"},[n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({attrs:{href:e.source,icon:"",large:"",target:"_blank"}},o),[n("v-icon",{attrs:{large:""}},[e._v("mdi-heart")])],1)]}}])},[n("span",[n("v-avatar",{staticClass:"mr-2",attrs:{color:"pink",size:"72"}},[n("v-img",{attrs:{src:"/assets/231352681.png"}})],1),e._v(" I hope you are having a wonderful day, "+e._s(e.$store.state.account.username)+"! ")],1)])],1)],1)],1)],1)],1)},N=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(" Metaverse Stats for "+e._s(e.$store.state.metaverseConfig.nickname)+" ")]),n("v-list-item",{staticClass:"mb-4",attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-4"},[e._v(" "+e._s(e.metaverse.activeDomains)+" active domains ")]),n("v-list-item-title",{staticClass:"headline mb-4"},[e._v(" "+e._s(e.metaverse.totalOnline)+" online users ")])],1)],1)],1)},H=[],U={name:"MetaverseStats",props:{source:String},data:function(){return{metaverse:{activeDomains:0,domainAnonUsers:0,domainTotalUsers:0,totalOnline:0}}},watch:{},created:function(){j=this,F=this.$store.state,D=F.metaverseConfig.server,this.initialize()},computed:{},methods:{initialize:function(){this.getAllStats()},sendEvent:function(e,t){u["a"].$emit(e,t)},getAllStats:function(){var e=window.$.param({asAdmin:F.account.useAsAdmin});e="?"+e,window.$.ajax({type:"GET",url:D+"/api/v1/stats/category/metaverse"+e,contentType:"application/json"}).done((function(e){console.info("Successfully retrieved metaverse stats:",e),j.metaverse.activeDomains=e.data.metaverse.activeDomains.value,j.metaverse.domainAnonUsers=e.data.metaverse.domainAnonUsers.value,j.metaverse.domainTotalUsers=e.data.metaverse.domainTotalUsers.value,j.metaverse.totalOnline=e.data.metaverse.totalOnline.value})).fail((function(e){console.info("Failed to get metaverse stats:",e),j.generatedToken=e.responseJSON.error,j.generatedTokenText="",j.$store.commit("mutate",{property:"error",with:{title:"Failed to get metaverse stats.",code:"3",full:e.responseJSON.error}}),j.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))}}},z=U,J=n("b0af"),G=n("99d9"),W=Object(p["a"])(z,B,H,!1,null,null,null),Y=W.exports;v()(W,{VCard:J["a"],VCardTitle:G["c"],VListItem:I["a"],VListItemContent:C["a"],VListItemTitle:C["c"]});var K={name:"Home",props:{source:String},components:{MetaverseStats:Y}},Q=K,X=n("62ad"),Z=n("a523"),ee=n("adda"),te=n("f6c4"),ne=n("0fd9"),oe=Object(p["a"])(Q,q,N,!1,null,null,null),re=oe.exports;v()(oe,{VApp:f["a"],VAvatar:b["a"],VBtn:k["a"],VCol:X["a"],VContainer:Z["a"],VIcon:S["a"],VImg:ee["a"],VMain:te["a"],VRow:ne["a"],VTooltip:M["a"]}),i["a"].use(R["a"]);var ae=[{path:"/login",name:"Login",icon:"mdi-login",meta:{showOnMenu:!0,requiresLogin:!1},component:function(){return Promise.all([n.e("chunk-7bcc6a72"),n.e("chunk-016a3514"),n.e("chunk-ca433c10")]).then(n.bind(null,"a55b"))}},{path:"/",name:"Home",icon:"mdi-home",meta:{showOnMenu:!0,requiresLogin:!0},component:re},{path:"/people",name:"People",icon:"mdi-account-group",meta:{showOnMenu:!0,requiresLogin:!0},component:function(){return Promise.all([n.e("chunk-7bcc6a72"),n.e("chunk-016a3514"),n.e("chunk-48045110"),n.e("chunk-4b901e7f"),n.e("chunk-2d21b46e")]).then(n.bind(null,"bea6"))}},{path:"/places",name:"Places",icon:"mdi-map-marker-multiple-outline",meta:{showOnMenu:!0,requiresLogin:!0},component:function(){return Promise.all([n.e("chunk-7bcc6a72"),n.e("chunk-016a3514"),n.e("chunk-48045110"),n.e("chunk-1d331ef2")]).then(n.bind(null,"d377"))}},{path:"/domain",name:"Domain",icon:"mdi-earth",meta:{showOnMenu:!0,requiresLogin:!0},component:function(){return Promise.all([n.e("chunk-7bcc6a72"),n.e("chunk-016a3514"),n.e("chunk-48045110"),n.e("chunk-2d213afc")]).then(n.bind(null,"ae79"))}},{path:"/profile/:user?",name:"Profile",icon:"mdi-account-circle",meta:{showOnMenu:!0,requiresLogin:!1},component:function(){return Promise.all([n.e("chunk-7bcc6a72"),n.e("chunk-4b901e7f"),n.e("chunk-c6b804dc")]).then(n.bind(null,"4a39"))}},{path:"/404",name:"PageNotFound",icon:"mdi-help",meta:{showOnMenu:!1,requiresLogin:!1},component:function(){return n.e("chunk-2d208bfd").then(n.bind(null,"a5b5"))}}],ie=new R["a"]({mode:"history",base:"/",routes:ae}),se=ie,ce=n("2f62");i["a"].use(ce["a"]);var ue=new ce["a"].Store({state:{globalConsts:{SAFETY_BEFORE_SESSION_TIMEOUT:21600,DASHBOARD_VERSION:"1.2.1"},router:{debugging:!0,awaitingRouteOnLogin:!1,routeOnLogin:""},initialized:!1,metaverseConfig:{name:"",nickname:"",server:"https://metaverse.vircadia.com/live",iceServer:"",serverVersion:""},error:{title:"",code:"",full:""},account:{isLoggedIn:!1,isAdmin:!1,useAsAdmin:!1,username:null,accountRoles:null,accountId:null,metaverseServer:null,accessToken:null,refreshToken:null,tokenType:null,createdAt:null,expiresIn:null,scope:null},places:{showOnlyMine:!1}},mutations:{mutate:function(e,t){if(t.update)for(var n in t.with)Object.prototype.hasOwnProperty.call(e[t.property],n)&&(e[t.property][n]=t.with[n]);else e[t.property]=t.with;console.info("Payload:",t.property,"with:",t.with,"state is now:",this.state)}},actions:{},modules:{}}),le=n("f309"),de=n("fcf4");i["a"].use(le["a"]);var me=new le["a"]({theme:{dark:!0,themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",input:de["a"].purple},dark:{primary:de["a"].purple.darken3,input:de["a"].purple}}}});n("d5e8"),n("5363");function pe(){window.$.ajaxSetup({beforeSend:function(e){e.setRequestHeader("x-vircadia-error-handle","badrequest"),e.setRequestHeader("Authorization","Bearer "+ue.state.account.accessToken)}})}function he(){var e=Math.floor((new Date).getTime()/1e3),t=parseInt(ue.state.account.createdAt)+parseInt(ue.state.account.expiresIn);return e>t||e-ue.state.globalConsts.SAFETY_BEFORE_SESSION_TIMEOUT>t}function ve(e){var t,n=localStorage.getItem(e);if(n&&"undefined"!==n)try{t=JSON.parse(n)}catch(o){console.info("Error retrieving",e,"from storage. Parsing error:",o)}else t=void 0;return t}function fe(){var e={server:localStorage.getItem("metaverseConfig.server")};console.info("Initing metaverseConfig.server",e.server),null!==e.server&&(console.info("metaverseConfigItems.server !== null"),ue.commit("mutate",{update:!0,property:"metaverseConfig",with:{server:e.server}}));var t={isLoggedIn:ve("isLoggedIn"),isAdmin:ve("isAdmin"),useAsAdmin:ve("useAsAdmin"),username:localStorage.getItem("username"),accountId:localStorage.getItem("accountId"),metaverseServer:localStorage.getItem("metaverseServer"),accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken"),tokenType:localStorage.getItem("tokenType"),createdAt:ve("createdAt"),expiresIn:ve("expiresIn"),scope:localStorage.getItem("scope")};ue.commit("mutate",{property:"account",with:t});var n={showOnlyMine:ve("showOnlyMine")};ue.commit("mutate",{property:"places",with:n}),ue.commit("mutate",{property:"initialized",with:!0})}function ge(e,t){window.$.ajax({type:"POST",url:ue.state.metaverseConfig.server+"/oauth/token",contentType:"application/x-www-form-urlencoded;charset=UTF-8",data:{grant_type:"refresh_token",scope:ue.state.account.scope,refresh_token:ue.state.account.refreshToken}}).done((function(n){ue.commit("mutate",{update:!0,property:"account",with:{isLoggedIn:!0,accessToken:n.access_token,tokenType:n.token_type,createdAt:n.created_at,expiresIn:n.expires_in,refreshToken:n.refresh_token,scope:n.scope}}),console.info("Token refresh successful, routing to",t),e()})).fail((function(t){console.info("Refresh failed, re-routing to login."),ue.commit("mutate",{update:!0,property:"account",with:{isLoggedIn:!1}}),e({name:"Login"})}))}window.$=window.jQuery=n("1157"),i["a"].config.productionTip=!1,i["a"].mixin({methods:{checkNeedsTokenRefresh:he,parseFromStorage:ve}}),se.beforeEach((function(e,t,n){console.info("Is the store initialized?",ue.state.initialized),!1===ue.state.initialized&&(fe(),pe());var o=ue.state.router.debugging,r=e,a=ue.state.account.isLoggedIn,i=Object.assign({},r.query);if(i.page){var s=i.page;return o&&console.info("?page parameter set for",s),delete i.page,se.replace({query:i}),void se.push({path:s})}return o&&console.info("Is the user logged in?",a),o&&console.info("Requested route",r),0===r.matched.length?(o&&console.info("Requested route does not exist",r),o&&console.info("Routing to 404 page."),ue.commit("mutate",{property:"error",with:{title:"Oops.",code:"404",full:"We couldn't find the page you're looking for."}}),void n({name:"PageNotFound"})):he()?(o&&console.info("Token refresh needed, attempting to refresh token."),void ge(n,e)):r.meta.requiresLogin&&!a?(o&&console.info("Page requires login and user is not logged in, routing to login."),ue.commit("mutate",{update:!0,property:"router",with:{awaitingRouteOnLogin:!0,routeOnLogin:r.name}}),void n({name:"Login"})):(o&&console.info("All router guards cleared, attempting to continue route to",r.name),void n())})),new i["a"]({router:se,store:ue,vuetify:me,render:function(e){return e(P)}}).$mount("#app")},8552:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("2b0e"),r=new o["a"]},"8e00":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.showDialogInternal,callback:function(t){e.showDialogInternal=t},expression:"showDialogInternal"}},[n("v-card",[n("v-card-title",{staticClass:"headline",attrs:{"primary-title":"",dark:""}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"red"}},[e._v("mdi-comment-question")]),e._v(" "+e._s(this.$store.state.error.title)+" ")],1),n("v-card-text",[e._v(" Error code "),n("code",[e._v(e._s(this.$store.state.error.code))]),e._v(" "),n("br"),e._v(" The full error is shown below: "),n("br"),n("code",[e._v(e._s(this.$store.state.error.full))])]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v(" Close ")])],1)],1)],1)},r=[],a={name:"ErrorOccurred",methods:{},data:function(){return{showDialogInternal:!0}},created:function(){}},i=a,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),d=n("b0af"),m=n("99d9"),p=n("169a"),h=n("ce7e"),v=n("132d"),f=n("2fa4"),g=Object(s["a"])(i,o,r,!1,null,null,null);t["a"]=g.exports;u()(g,{VBtn:l["a"],VCard:d["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:p["a"],VDivider:h["a"],VIcon:v["a"],VSpacer:f["a"]})}});
//# sourceMappingURL=app.fd36ac85.js.map