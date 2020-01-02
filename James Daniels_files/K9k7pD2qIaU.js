if (self.CavalryLogger) { CavalryLogger.start_js(["0YDjt"]); }

__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(a,d){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d!==null&&d!==void 0&&d!==""?d:b("BizSiteIdentifier.brands").getBusinessID();d!==null&&d!==void 0&&d!==""&&a.addQueryData("business_id",d);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b){return new h(a,b)};a.BusinessURI=h;e.exports=a}),null);
__d("NotificationBeeperConst",["keyMirror"],(function(a,b,c,d,e,f){a={IDLE_DELAY:1e4,ACTIVE_DELAY_LONG:4e3,FADE_OUT_LENGTH:1500,BeepStates:b("keyMirror")({PENDING:!0,RENDERED:!0,READY_TO_HIDE:!0,FADING_OUT:!0})};e.exports=a}),null);
__d("XReferer",["Base64","Cookie","FBJSON","URI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h={update:function(a,c,d){__p&&__p();if(!d){b("Cookie").set("x-referer","");return}a!=null&&(a=h.truncatePath(a));c!=null&&(c=h.truncatePath(c));var e=window.location.pathname+window.location.search;d=(g||(g=b("URI"))).getRequestURI();var f=d.getSubdomain();c!=null&&h._setCookie(c,e,f);a!=null&&b("setTimeoutAcrossTransitions")(function(){a!=null&&h._setCookie(a,e,f)},0)},_setCookie:function(a,c,d){a={r:a,h:c,s:d};c=b("Base64").encode(b("FBJSON").stringify(a));b("Cookie").set("x-referer",c)},truncatePath:function(a){var b=1024;a&&a.length>b&&(a=a.substring(0,b)+"...");return a}};e.exports=h}),null);
__d("HistoryManager",["Env","Event","SprinkleConfig","URI","UserAgent_DEPRECATED","XReferer","emptyFunction","gkx","goOrReplace","isInIframe","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i={history:null,current:0,fragment:null,isInitialized:function(){return!!i._initialized},init:function(){__p&&__p();if(!(g||(g=b("Env"))).ALLOW_TRANSITION_IN_IFRAME&&b("isInIframe")())return;if(i._initialized)return i;var a=new(h||(h=b("URI")))(window.location.href),c=a.getFragment()||"";c.charAt(0)==="!"&&(c=c.substr(1),a.setFragment(c));Object.assign(i,{_initialized:!0,fragment:c,orig_fragment:c,history:[a],callbacks:[],lastChanged:Date.now(),canonical:new h("#"),user:0,enabled:!0,debug:b("emptyFunction")});if(window.history&&window.history.pushState){this.lastURI=document.URL;c=new(h||(h=b("URI")))(this.lastURI);a=c.getQueryData();a.__md__=void 0;a.__xts__=void 0;a.fb_dtsg_ag=void 0;a[b("SprinkleConfig").param_name]=void 0;this.lastURI=c.setQueryData(a).toString();try{window.history.state&&b("gkx")("819236")?window.history.replaceState(window.history.state,null,this.lastURI):window.history.replaceState(this.lastURI,null,this.lastURI)}catch(a){if(!(a.number===-2147467259))throw a}b("Event").listen(window,"popstate",function(a){var c=a&&a.state&&typeof a.state==="string";c&&i.lastURI!=a.state&&(i.lastURI=document.URL,i.lastChanged=Date.now(),i.notify(new(h||(h=b("URI")))(a.state).getUnqualifiedURI().toString()))}.bind(i));(b("UserAgent_DEPRECATED").webkit()<534||b("UserAgent_DEPRECATED").chrome()<=13)&&(b("setIntervalAcrossTransitions")(i.checkURI,42),i._updateRefererURI(this.lastURI));return i}i._updateRefererURI(h.getRequestURI(!1));if(b("UserAgent_DEPRECATED").webkit()<500||b("UserAgent_DEPRECATED").firefox()<2){i.enabled=!1;return i}"onhashchange"in window?b("Event").listen(window,"hashchange",function(){window.setTimeout(i.checkURI.bind(i),0)}):b("setIntervalAcrossTransitions")(i.checkURI,42);return i},registerURIHandler:function(a){i.callbacks.push(a);return i},setCanonicalLocation:function(a){i.canonical=new(h||(h=b("URI")))(a);return i},notify:function(a){a==i.orig_fragment&&(a=i.canonical.getFragment());for(var b=0;b<i.callbacks.length;b++)try{if(i.callbacks[b](a))return!0}catch(a){}return!1},checkURI:function(){__p&&__p();if(Date.now()-i.lastChanged<400)return;if(window.history&&window.history.pushState){var a=new(h||(h=b("URI")))(document.URL).removeQueryData("ref").toString(),c=new h(i.lastURI).removeQueryData("ref").toString();a!=c&&(i.lastChanged=Date.now(),i.lastURI=a,b("UserAgent_DEPRECATED").webkit()<534&&i._updateRefererURI(a),i.notify(new(h||(h=b("URI")))(a).getUnqualifiedURI().toString()));return}if(b("UserAgent_DEPRECATED").webkit()&&window.history.length==200){i.warned||(i.warned=!0);return}c=new(h||(h=b("URI")))(window.location.href).getFragment();c.charAt(0)=="!"&&(c=c.substr(1));c=c.replace(/%23/g,"#");if(c!=i.fragment.replace(/%23/g,"#")){i.debug([c," vs ",i.fragment,"whl: ",window.history.length,"QHL: ",i.history.length].join(" "));for(var a=i.history.length-1;a>=0;--a)if(i.history[a].getFragment().replace(/%23/g,"#")==c)break;++i.user;a>=0?i.go(a-i.current):i.go("#"+c);--i.user}},_updateRefererURI:function(a){a instanceof(h||(h=b("URI")))&&(a=a.toString()),b("XReferer").update(a,null,!0)},go:function(a,c,d){__p&&__p();if(window.history&&window.history.pushState){c||typeof a==="number";var e=new(h||(h=b("URI")))(a).removeQueryData(["ref","messaging_source","ajaxpipe_fetch_stream","fb_dtsg_ag",b("SprinkleConfig").param_name]).toString();i.lastChanged=Date.now();this.lastURI=e;d?window.history.replaceState(a,null,e):window.history.pushState(a,null,e);b("UserAgent_DEPRECATED").webkit()<534&&i._updateRefererURI(a);return!1}i.debug("go: "+a);c===void 0&&(c=!0);if(!i.enabled&&!c)return!1;if(typeof a==="number"){if(!a)return!1;e=a+i.current;var f=Math.max(0,Math.min(i.history.length-1,e));i.current=f;e=i.history[f].getFragment()||i.orig_fragment;e=new(h||(h=b("URI")))(e).removeQueryData("ref").getUnqualifiedURI().toString();i.fragment=e;i.lastChanged=Date.now();i.user||b("goOrReplace")(window.location,window.location.href.split("#")[0]+"#!"+e,d);c&&i.notify(e);i._updateRefererURI(e);return!1}a=new(h||(h=b("URI")))(a);a.getDomain()==new(h||(h=b("URI")))(window.location.href).getDomain()&&(a=new(h||(h=b("URI")))("#"+a.getUnqualifiedURI()));f=i.history[i.current].getFragment();e=a.getFragment();if(e==f||f==i.orig_fragment&&e==i.canonical.getFragment()){c&&i.notify(e);i._updateRefererURI(e);return!1}d&&i.current--;f=i.history.length-i.current-1;i.history.splice(i.current+1,f);i.history.push(new h(a));return i.go(1,c,d)},getCurrentFragment:function(){var a=(h||(h=b("URI"))).getRequestURI(!1).getFragment();return a==i.orig_fragment?i.canonical.getFragment():a}};e.exports=i}),null);
__d("escapeJSQuotes",[],(function(a,b,c,d,e,f){function a(a){return typeof a==="undefined"||a==null||!a.valueOf()?"":a.toString().replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\"/g,"\\x22").replace(/\'/g,"\\'").replace(/</g,"\\x3c").replace(/>/g,"\\x3e").replace(/&/g,"\\x26")}e.exports=a}),null);
__d("PageTransitionsBlue",["fbt","invariant","Arbiter","BlueCompatBroker","BlueCompatRouter","Bootloader","DOMQuery","DOMScroll","Env","ErrorUtils","Event","FbtResultBase","HistoryManager","JSLogger","LayerHideOnEscape","PageHooks","PageNavigationStageLogger","PageTransitionsConfig","PageTransitionsRegistrar","React","ScriptPath","URI","Vector","areEqual","clickRefAction","escapeJSQuotes","ge","goOrReplace","isFacebookURI","isInIframe","setTimeout"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j,k,l,m=["cquick","ctarget","cquick_token","mh_","killabyte","tfc_","tfi_"],n={};function o(a,b){a&&(n[a.getUnqualifiedURI().toString()]=b)}function p(a){return n[a.getUnqualifiedURI().toString()]}function q(a){delete n[a.getUnqualifiedURI().toString()]}function r(){var a={};window.location.search.slice(1).split("&").forEach(function(b){b=b.split("=");var c=b[0];b=b[1];b=b===void 0?null:b;m.some(function(a){return c.startsWith(a)})&&(a[c]=b)});return a}var s=null,t=!1,u=new(i||(i=b("URI")))(""),v=null,w=new i(),x=null,y=!1,z=!1,A=!1,B={isInitialized:function(){return t},init:function(){B._init()},_init:function(){__p&&__p();if(b("isInIframe")())return!1;if(t)return!0;var a=b("PageTransitionsRegistrar").getMostRecentURI();s=a;u=a;v=null;w=a;var c=(j||(j=b("ErrorUtils"))).applyWithGuard(function(a){return new(i||(i=b("URI")))(a)},null,[document.referrer]);x=document.referrer&&c&&b("isFacebookURI")(c)?c:null;t=!0;c=(i||(i=b("URI"))).getRequestURI(!1);c.getFragment().startsWith("/")?c=c.getFragment():c=a.toString();b("HistoryManager").init().setCanonicalLocation("#"+c).registerURIHandler(B._historyManagerHandler);b("Event").listen(window,"scroll",function(){y||o(s,b("Vector").getScrollPosition())});return!0},registerHandler:b("PageTransitionsRegistrar").registerHandler,removeHandler:b("PageTransitionsRegistrar").removeHandler,getCurrentURI:function(a){a===void 0&&(a=!1);this._init();return!s&&!a?new(i||(i=b("URI")))(u):new(i||(i=b("URI")))(s)},isTransitioning:function(){this._init();return!s},getNextURI:function(){this._init();return w},getNextReferrerURI:function(){this._init();return v},getReferrerURI:function(){this._init();return x},getMostRecentURI:function(){this._init();return new(i||(i=b("URI")))(u)},go:function(a,c){__p&&__p();c===void 0&&(c=!1);if(b("BlueCompatRouter").goFragment(a)){var d=new(i||(i=b("URI")))(a);if(B.restoreScrollPosition(d)){s=u=d;return}}if(b("BlueCompatRouter").go(a,c))return;this.goBase(a,c)},goBase:function(a,c){c===void 0&&(c=!1);this._init();var d=r(),e=new(i||(i=b("URI")))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();b("JSLogger").create("pagetransition").debug("go",{uri:e.toString()});q(e);c||b("clickRefAction")("uri",{href:e.toString()},null,"INDIRECT");B._loadPage(e,function(a){a?b("HistoryManager").go(e.toString(),!1,c):(b("PageNavigationStageLogger").setNote("pt_not_handled"),b("PageNavigationStageLogger").updateCookie(),b("goOrReplace")(window.location,e,c))})},_historyManagerHandler:function(a){if(a.charAt(0)!="/")return!1;b("clickRefAction")("h",{href:a});b("ScriptPath").getClickPointInfo()||b("ScriptPath").setClickPointInfo({click:"back"});B._loadPage(new(i||(i=b("URI")))(a),function(c){c||(b("PageNavigationStageLogger").setNote("hist_manager_fallback"),b("goOrReplace")(window.location,a,!0))});return!0},_loadPage:function(a,c){__p&&__p();if(new(i||(i=b("URI")))(a).getFragment()&&(k||(k=b("areEqual")))(new(i||(i=b("URI")))(a).setFragment("").getQualifiedURI(),new(i||(i=b("URI")))(s).setFragment("").getQualifiedURI())){b("Arbiter").inform("pre_page_fragment_transition",{from:new(i||(i=b("URI")))(s).getFragment(),to:new i(a).getFragment()});if(B.restoreScrollPosition(a)){s=u=a;b("Arbiter").inform("page_fragment_transition",{fragment:new(i||(i=b("URI")))(a).getFragment()});return}}b("PageNavigationStageLogger").setCookieForNavigation(a);var d;s&&(d=p(s));var e=function(){d&&s&&o(s,d);v=B.getMostRecentURI();s=null;w=a;d&&b("DOMScroll").scrollTo(d,!1);y=!0;var e=B._handleTransition(a);c&&(e===b("PageTransitionsRegistrar").DELAY_HISTORY?b("setTimeout")(function(){return c&&c(e)},0):c(e))},f=w;w=a;var g=b("PageHooks").runHooks("onbeforeleavehooks");w=f;g?B._warnBeforeLeaving(g,e):e()},_handleTransition:function(c){__p&&__p();window.onbeforeleavehooks=void 0;if(z||!c.isSameOrigin()){b("PageNavigationStageLogger").setNote("pt_disabled");return!1}var d=b("PageTransitionsConfig").reloadOnBootloadError&&this._hasBootloadErrors();if(d){b("PageNavigationStageLogger").setNote("bl_err");return!1}var e;d=a.AsyncRequest;d&&(e=d.getLastID());b("Arbiter").inform("pre_page_transition",{from:B.getMostRecentURI(),to:c});d=b("PageTransitionsRegistrar")._getTransitionHandlers();for(var f=d.length-1;f>=0;--f){var g=d[f];if(!g)continue;for(var h=g.length-1;h>=0;--h){var i=g[h](c);if(i===!0||i===b("PageTransitionsRegistrar").DELAY_HISTORY){var j={sender:this,uri:c,id:e};try{b("Arbiter").inform("page_transition",j)}catch(a){}return i}else g.splice(h,1)}}return!1},disableTransitions:function(){z=!0},disableScrollAnimation:function(){A=!0},_hasBootloadErrors:function(){return b("Bootloader").getErrorUrls().size>0},unifyURI:function(){this._init(),s=u=w,x=v},transitionComplete:function(a){a===void 0&&(a=!1);this._init();y=!1;B._executeCompletionCallbacks();B.unifyURI();a||s&&B.restoreScrollPosition(s);try{document.activeElement&&document.activeElement.nodeName==="A"&&document.activeElement.blur()}catch(a){}},_executeCompletionCallbacks:function(){var a=b("PageTransitionsRegistrar")._getCompletionCallbacks();a.length>0&&(b("PageTransitionsRegistrar")._resetCompletionCallbacks(),a.forEach(function(a){return a()}))},registerCompletionCallback:b("PageTransitionsRegistrar").registerCompletionCallback,rewriteCurrentURI:function(a,c){__p&&__p();this._init();var d=b("PageTransitionsRegistrar")._getTransitionHandlers(),e=d.length||1,f=!1;b("PageTransitionsRegistrar").registerHandler(function(){if(a&&a.toString()==B.getMostRecentURI().getUnqualifiedURI().toString()){B.transitionComplete();return!0}f=!0},e);B.go(c,!0);d.length===e+1&&d[e].length===(f?0:1)||h(0,1302);d.length=e},_warnBeforeLeaving:function(a,c){b("Bootloader").loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(d,e,f,h,i,j){var k=typeof a==="string"||a instanceof String||a instanceof b("FbtResultBase")?{body:a,highlightStay:!1,leaveButtonText:g._("Leave this Page"),showCloseButton:!1,stayButtonText:g._("Stay on This Page"),title:g._("Leave page?")}:a;e=b("React").jsx(e,{showCloseButton:k.showCloseButton,children:k.title});h=k.highlightStay?[b("React").jsx(h,{action:"confirm",label:k.leaveButtonText},"confirm"),b("React").jsx(h,{action:"cancel",use:"confirm",label:k.stayButtonText},"cancel")]:[b("React").jsx(h,{action:"cancel",label:k.stayButtonText},"cancel"),b("React").jsx(h,{action:"confirm",use:"confirm",label:k.leaveButtonText},"confirm")];var l=new d({width:450,addedBehaviors:[b("LayerHideOnEscape")]},b("React").jsxs("div",{children:[e,b("React").jsx(f,{children:b("React").jsx(j,{shade:"medium",size:"medium",children:k.body})}),b("React").jsx(i,{children:h})]}));l.subscribe("confirm",function(){l.hide(),c()});l.show()},"PageTransitionsBlue")},restoreScrollPosition:function(a){__p&&__p();var c=p(a);if(c){b("DOMScroll").scrollTo(c,!1);return!0}function d(a){if(!a)return null;var c="a[name='"+b("escapeJSQuotes")(a)+"']";return b("DOMQuery").scry(document.body,c)[0]||b("ge")(a)}c=d(new(i||(i=b("URI")))(a).getFragment());if(c){d=!A;b("DOMScroll").scrollTo(c,d);return!0}return!1}};(l||(l=b("Env"))).isCQuick&&(b("BlueCompatBroker").init(),b("BlueCompatBroker").register("transitionpage",function(c){c=b("BlueCompatBroker").getMessageEventString(c,"uri");if(window.location.href===c)return;var d=a.AsyncRequest;d&&d.ignoreUpdate();B.goBase(c,!1)}));e.exports=B;a.PageTransitions=B}),null);
__d("TidyArbiter",["TidyArbiterMixin"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("TidyArbiterMixin"));e.exports=a}),null);
__d("NotificationSound",["Sound"],(function(a,b,c,d,e,f){__p&&__p();var g=5e3;b("Sound").init(["audio/mpeg"]);function a(a){this._soundPath=a,this._lastPlayed=0}Object.assign(a.prototype,{play:function(a){if(!this._soundPath)return;var c=Date.now();if(c-this._lastPlayed<g)return;this._lastPlayed=c;b("Sound").playOnlyIfImmediate(this._soundPath,a,!1)}});e.exports=a}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this._input=a,this._listener=null}var c=a.prototype;c.enable=function(){this._registerListener()};c._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Search")}})};c.disable=function(){this._listener&&this._listener.remove(),this._listener=null};c._handleKeydown=function(a){this._input.focus();return!1};return a}();e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){__p&&__p();var f=this;this.reset();this.subscriptions=new(b("SubscriptionsHandler"))();this.placeholder=d;this.searchInput=a;this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a);this.loadingIndicator=c;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){f.requestSearch(),f.showLoadingIndicator()}),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(a){return a.preventDefault()}));e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this)));b("Run").onUnload(this.reset.bind(this));this.isInitialized=!0;(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(2966,g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("StoreBasedStateMixinHelper",["invariant","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a,this.$2=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.subscribeCallback=function(a,b){__p&&__p();var c=this.$1.map(function(c){__p&&__p();var d=b!=null?function(d){b&&b(c);return a(d)}:a;if(c.hasChanged&&c.getDispatchToken&&c.addListener)return c.addListener(d);else if(c.subscribe)return c.subscribe("change",d);else if(c.addListener)return c.addListener("change",d);else g(0,574)});this.$1.length>0&&this.$2.addSubscriptions.apply(this.$2,c)};c.release=function(){this.$2.release()};return a}();e.exports=a}),null);
__d("ServiceWorkerLoginAndLogout",["ClientServiceWorkerMessage"],(function(a,b,c,d,e,f){function g(a){new(b("ClientServiceWorkerMessage"))(a,null).sendViaController()}a={login:function(){g("login")},logout:function(){g("logout")}};e.exports=a}),null);