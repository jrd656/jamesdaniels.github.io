if (self.CavalryLogger) { CavalryLogger.start_js(["zmHvW"]); }

__d("FBMoreLink.react",["ix","cx","fbt","FDSLink.react","FDSText.react","Image.react","Link.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isCollapsed:c.props.isInitiallyCollapsed!=null?c.props.isInitiallyCollapsed:!0},c.onClick=function(){var a=c.$1();c.setState({isCollapsed:!a});c.props.onClick&&c.props.onClick(!a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.$1();if(!this.props.allowToggle&&!a)return b("React").jsx("div",{children:b("React").jsx(b("React").Fragment,{children:this.props.children})});var c=this.props.moreLabel,d=g("117293");a||(c=this.props.lessLabel,d=g("117305"));d=this.props.hideToggleIcon?null:b("React").jsx(b("Image.react"),{className:"_554d",src:d});c=b("React").jsxs(b("React").Fragment,{children:[b("React").jsx("span",{className:this.props.useFDSLink?"":"_554b",children:c}),d]});return b("React").jsxs(b("React").Fragment,{children:[a?null:this.props.children,this.props.useFDSLink===!0?b("React").jsx(b("FDSText.react"),{children:b("React").jsx(b("FDSLink.react"),{onClick:this.onClick,children:c})}):b("React").jsx(b("Link.react"),babelHelpers["extends"]({},this.props,{onClick:this.onClick,children:c}))]})};d.$1=function(){return this.props.isCollapsed!=null?this.props.isCollapsed:this.state.isCollapsed};return c}(b("React").Component);c.propTypes={allowToggle:a.bool,hideToggleIcon:a.bool,moreLabel:a.node,lessLabel:a.node,isInitiallyCollapsed:a.bool,isCollapsed:a.bool,onClick:a.func,useFDSLink:a.bool,children:a.node};c.defaultProps=function(){var a=i._("More"),b=i._("Less");return{allowToggle:!1,moreLabel:a,lessLabel:b}}();e.exports=c}),null);
__d("EventsDashboardList",["CSS","DOM","FBJSON"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.setOrder=function(a){this.$2=a};c.setData=function(a){this.$3=a};c.setPlaceHolder=function(a){this.$4=a,this.$5()};c.setItems=function(a){this.$6=a,this.$5()};c.$5=function(){if(!this.$6||!this.$4)return;this.$7(this.$4,this.$6)};c.$7=function(a,c){__p&&__p();while(c.firstChild){var d=c.firstChild;if(b("CSS").hasClass(d,"fbEventsDashboardSectionHeader")){b("DOM").remove(d);continue}var e=this.$8(a,d);!e?b("DOM").appendContent(a,d):e.action=="merge"?(this.$7(e.node,d),b("DOM").remove(d)):e.action=="insertAfter"?b("DOM").insertAfter(e.node,d):e.action=="insertBefore"?b("DOM").insertBefore(e.node,d):b("DOM").remove(d)}b("DOM").remove(c)};c.$8=function(a,c){__p&&__p();if(!b("CSS").hasClass(c,"fbEventsDashboardSection"))return null;c=this.$9(c);for(var d=a.childNodes.length-1;d>=0;d--){var e=a.childNodes[d],f=this.$9(a.childNodes[d]);if(!f){if(b("CSS").hasClass(a.childNodes[d],"fbEventsDashboardSectionHeader"))return{action:"insertAfter",node:e};continue}if(f==c)return{action:"merge",node:e};else if(this.$2=="descent"&&f>c)return{action:"insertAfter",node:e};else if(this.$2=="ascent"&&f<c)return{action:"insertAfter",node:e}}return{action:"insertBefore",node:a.firstChild}};c.$9=function(a){if(!a.hasAttribute("data-store"))return null;a=b("FBJSON").parse(a.getAttribute("data-store"),e.id);return a.date};c.getListName=function(){return this.$1};return a}();e.exports=a}),null);
__d("XEventCreateDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/dialog/create/",{acontext:{type:"String",required:!0},page_id:{type:"Int"},group_id:{type:"Int"},actor_id:{type:"Int"},post_id:{type:"Int"},post_text:{type:"String"},event_id_for_copy:{type:"Int"},schema_org:{type:"String"},default_user_event_privacy_type:{type:"Enum",defaultValue:"private_event",enumType:1},intercept_session_id:{type:"String"},invite_ids:{type:"IntVector"},default_theme_id:{type:"Int"},default_title:{type:"String"},default_start_time:{type:"Int"},default_end_time:{type:"Int"},default_description:{type:"String"},default_cover_id:{type:"Int"},default_ticket_url:{type:"String"},friend_birthday_prompt_xout_id:{type:"FBID"},community_id:{type:"Int"},composer_id:{type:"String"},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},is_arena:{type:"Bool",defaultValue:!1},show_work_tour:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);
__d("XEventDashboardUpdateAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/ajax/dashboard/update/",{event_id:{type:"Int",required:!0},action:{type:"Enum",required:!0,enumType:1},params:{type:"StringToStringMap",defaultValue:{}}})}),null);
__d("EventsDashboardView",["AsyncDialog","AsyncRequest","EventsDashboardList","XEventCreateDialogController","XEventDashboardUpdateAsyncController"],(function(a,b,c,d,e,f){__p&&__p();a={addList:function(a,b,c){a=this._findList(a);a.setOrder(c);a.setPlaceHolder(b)},addItems:function(a,b,c){a=this._findList(a);a.setData(c);a.setItems(b)},setView:function(a,b){this._view_data||(this._view_data={}),this._view_data[a]=b},update:function(a,c,d){if(!this._view_data)return;var e={};a.forEach(function(a){e[a]=this._view_data[a]},this);a=b("XEventDashboardUpdateAsyncController").getURIBuilder().setInt("event_id",c).setEnum("action",d).setStringToStringMap("params",e).getURI();new(b("AsyncRequest"))(a).send()},showCreateDialog:function(a,c,d,e){a=b("XEventCreateDialogController").getURIBuilder().setString("acontext",a).setString("default_title",c).setInt("default_theme_id",d).setInt("default_start_time",e).getURI();b("AsyncDialog").send(new(b("AsyncRequest"))(a))},_findList:function(a){this._lists||(this._lists=[]);var c=null;for(var d=0;d<this._lists.length;d++)if(this._lists[d].getListName()==a){c=this._lists[d];break}c||(c=new(b("EventsDashboardList"))(a),this._lists.push(c));return c}};e.exports=a}),null);
__d("EventPermalinkURISetter",["PageTransitions","URI"],(function(a,b,c,d,e,f){__p&&__p();var g;a={setURI:function(a){if(window.location.search!==""){a=new(g||(g=b("URI")))(window.location.pathname+window.location.search);var c=a.getQueryData();c.event_time_id?a.setQueryData({event_time_id:c.event_time_id}):c.active_tab?a.setQueryData({active_tab:c.active_tab}):c.notif_t&&c.notif_id?a.setQueryData({notif_t:c.notif_t,notif_id:c.notif_id}):a.setQueryData({});c=a.toString();window.history.replaceState(c,document.title,c)}},updateURI:function(a){a="/events/"+a;window.history.pushState({subpath:a},document.title,a)},initHandler:function(){window.onpopstate=function(a){a.state&&a.state.subpath&&b("PageTransitions").go(a.state.subpath,!0)}}};e.exports=a}),null);
__d("EventsPermalinkTabBar",["csx","cx","CSS","DOMQuery","Event","Parent","React","ReactDOM","XUISpinner.react","collectDataAttributes","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="event_tabs",j="data-active-tab",k=null,l=null,m={setup:function(a){__p&&__p();b("Event").listen(a,"click",function(c){__p&&__p();var d=c.srcElement||c.target,e=b("DOMQuery").scry(a,"._45hc");e.forEach(function(a){b("CSS").removeClass(a,"_1hqh"),b("CSS").removeClass(a,"_5vwy")});e=b("Parent").bySelector(d,"._45hc");if(e){b("CSS").addClass(e,"_1hqh");b("CSS").addClass(e,"_5vwy");e=e.firstChild;if(e instanceof Element){e=e.getAttribute("href");e&&window.history.replaceState({},document.title,e)}}e=b("collectDataAttributes")(d,[],[j]);e.normal&&e.normal[j]&&m.setCurrentTab(e.normal[j]);m.showWait();c.preventDefault()})},showWait:function(){b("ReactDOM").render(b("React").jsx("div",{className:"_df9",children:b("React").jsx(b("XUISpinner.react"),{size:"large"})}),b("ge")(i))},getCurrentTab:function(){return k},getPermalinkID:function(){return l},setCurrentTab:function(a){k=a},setCurrentEventID:function(a){l=a}};e.exports=m}),null);
__d("EventsTimezoneUtility",["invariant","DateTime","Timezone","TimezoneNamesData","RulesTimezoneTransitionProvider","TimezoneRulesFrom2009"],(function(a,b,c,d,e,f,g){"use strict";b("Timezone").registerNamesModule(b("TimezoneNamesData"));b("Timezone").registerRulesModule(b("RulesTimezoneTransitionProvider"),b("TimezoneRulesFrom2009"));a={getClampedDateTime:function(a,c){a||g(0,4587);c=(c=b("Timezone").getByNameOrNull(c))!=null?c:0;return new(b("DateTime"))(b("Timezone").clampTimestamp(a,c),c)}};e.exports=a}),null);
__d("StyleSheet",["mapObject"],(function(a,b,c,d,e,f){"use strict";var g;a={create:function(a){return(g||(g=b("mapObject")))(a,function(a,c){return(g||(g=b("mapObject")))(a,function(a,b){return b==="lineHeight"&&typeof a==="number"?a+"px":a})})},hairlineWidth:1};e.exports=a}),null);
__d("XEventEditDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/dialog/edit/page/",{event_id:{type:"Int",required:!0},acontext:{type:"String",required:!0},active_tab:{type:"Enum",enumType:1},focus_field:{type:"Enum",enumType:1},extra_data:{type:"String"},force_reload:{type:"Bool",defaultValue:!1},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},viewer_status:{type:"Enum",defaultValue:"admin",enumType:1},show_work_tour:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);
__d("XEventInviteDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/ajax/invite/",{plan_id:{type:"Int",required:!0},session_id:{type:"Int"},invitees:{type:"StringVector"},extra_data:{type:"String"},acontext:{type:"StringToStringMap"},save_only:{type:"Bool",defaultValue:!1},is_private:{type:"Bool",defaultValue:!1},pagelets_to_update:{type:"StringSet"},entry_point:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("XEventTicketButtonOrURIClickedAsyncLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/ticket/",{event_id:{type:"FBID"},clicked_ticket_info_id:{type:"Int"},action_context:{type:"StringToStringMap"},is_onsite_ticket_click:{type:"Bool",defaultValue:!1}})}),null);
__d("XEventsPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/{?location_slug}/{?name_slug}/{event_id}/",{event_id:{type:"FBID",required:!0},location_slug:{type:"String"},name_slug:{type:"String"},event_time_id:{type:"FBID"},acontext:{type:"String"},active_tab:{type:"Enum",defaultValue:"about",enumType:1},end_cursor:{type:"String"},filter:{type:"String"},multi_permalinks:{type:"String"},post_id:{type:"Int"},view:{type:"Enum",enumType:1},ticket_order_id:{type:"FBID"},ref_page_id:{type:"FBID"},ti:{type:"String"},after_load_action:{type:"Enum",enumType:0}})}),null);
__d("XPagesProfileEventsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/events/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},open_create_event_dialog:{type:"Bool",defaultValue:!1},tour:{type:"FBID"},open_tour_create_dialog:{type:"Bool",defaultValue:!1},__nodl:{type:"Exists",defaultValue:!1},qr:{type:"String"},qr_code_id:{type:"FBID"},scan_session_id:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:!1},referrer:{type:"String"},msite_tab_async:{type:"Bool",defaultValue:!1},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);