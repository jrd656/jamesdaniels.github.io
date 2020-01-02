if (self.CavalryLogger) { CavalryLogger.start_js(["qGjBw"]); }

__d("HomepagePanelPageInsights.react",["cx","fbt","FacepileRounded.react","InlineBlock.react","Link.react","List.react","PagesEventObserver","React","XUIButton.react","XUIButtonGroup.react","intlNumUtils"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=32,j=Object.freeze({LIKE:"like",VIEW:"view",POST:"post"});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={selectedTab:j.LIKE},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){return b("React").jsxs(b("XUIButtonGroup.react"),{className:"_2n5z",children:[b("React").jsx(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.LIKE?" _2n60":""),label:b("React").jsx(b("React").Fragment,{children:h._("Likes")}),onClick:this.$2.bind(this,j.LIKE)}),b("React").jsx(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.VIEW?" _2n60":""),label:b("React").jsx(b("React").Fragment,{children:h._("Views")}),onClick:this.$2.bind(this,j.VIEW)}),b("React").jsx(b("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===j.POST?" _2n60":""),label:b("React").jsx(b("React").Fragment,{children:h._("Posts")}),onClick:this.$2.bind(this,j.POST)})]})};d.$3=function(){__p&&__p();var a=b("React").jsx("div",{className:"_1oso",children:b("React").jsx(b("InlineBlock.react"),{children:this.props.date_range})});switch(this.state.selectedTab){case j.LIKE:return b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{className:"_2n66",children:b("React").jsx(b("Link.react"),{className:"_2n67",href:this.props.insights_uri.pageLikesURI,children:this.props.total_likes})}),b("React").jsx("li",{className:"_2n68",children:b("React").jsx(b("Link.react"),{className:"_2n69"+(this.props.new_likes===0?" _21t8":""),href:this.props.insights_uri.pageLikesURI,children:h._({"*":"{number} new likes this week","_1":"1 new like this week"},[h._plural(this.props.new_likes,"number")])})}),b("React").jsx("li",{className:"_2n6a",children:b("React").jsx(b("Link.react"),{ajaxify:this.props.friend_inviter_uri,"aria-label":"People who recently liked this Page",rel:"dialog",children:b("React").jsx(b("FacepileRounded.react"),{hoverBehavior:"name",imageSize:i,profiles:this.$4()})})})]});case j.VIEW:var c=b("React").jsx(b("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.pageViewsURI,children:b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_views)}),d=b("React").jsx(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.pageViewsURI,children:h._({"*":"Page views","_1":"Page view"},[h._plural(this.props.new_views)])}),e=b("React").jsx(b("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.postReachURI,children:b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_engagements)}),f=b("React").jsx(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI,children:h._({"*":"Post engagements","_1":"Post engagement"},[h._plural(this.props.new_engagements)])});return b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:a}),b("React").jsx("li",{className:"_1os-",children:b("React").jsxs(b("List.react"),{border:"light",direction:"horizontal",spacing:"none",children:[b("React").jsx("li",{className:"_1os_",children:b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:c}),b("React").jsx("li",{children:d})]})}),b("React").jsx("li",{className:"_1os_",children:b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:e}),b("React").jsx("li",{children:f})]})})]})})]});case j.POST:c=b("React").jsx(b("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI,children:b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_comments)});d=b("React").jsx(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI,children:h._({"*":"Comments","_1":"Comment"},[h._plural(this.props.new_comments)])});e=b("React").jsx(b("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI,children:b("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_shares)});f=b("React").jsx(b("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI,children:h._({"*":"Shares","_1":"Share"},[h._plural(this.props.new_shares)])});return b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:a}),b("React").jsx("li",{className:"_1os-",children:b("React").jsxs(b("List.react"),{border:"light",direction:"horizontal",spacing:"none",children:[b("React").jsx("li",{className:"_1os_",children:b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:c}),b("React").jsx("li",{children:d})]})}),b("React").jsx("li",{className:"_1os_",children:b("React").jsxs(b("List.react"),{border:"none",spacing:"none",children:[b("React").jsx("li",{children:e}),b("React").jsx("li",{children:f})]})})]})})]});default:return b("React").jsx("div",{})}};d.$4=function(){var a=this.props.friends_data;return Object.keys(a).map(function(b){return{image_src:"https://graph.facebook.com/"+a[b].uniqueID+"/picture?height="+i*2+"&width="+i*2,name:a[b].name}})};d.$2=function(a){this.setState({selectedTab:a}),b("PagesEventObserver").notify("visit_insights_tab",this.props.page_id,{ref:"aymt_homepage_panel"})};d.render=function(){return b("React").jsxs("div",{children:[this.$1(),this.$3()]})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("legacy:SettingsRemovableOptions",["SettingsRemovableOptions"],(function(a,b,c,d,e,f){a.SettingsRemovableOptions=b("SettingsRemovableOptions")}),3);