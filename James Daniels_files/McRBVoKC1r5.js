if (self.CavalryLogger) { CavalryLogger.start_js(["5+s7Z"]); }

__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(b("React").Component);c.propTypes={use:a.oneOf(["special","confirm","default"]),size:a.oneOf(["medium","large"]),suppressed:a.bool};e.exports=c}),null);
__d("VideoWithMetadataOverlay.react",["DOMContainer.react","React","VideoMetadataOverlay.react"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.overlay;a=a.vpc;return b("React").jsx(b("VideoMetadataOverlay.react"),{overlay:b("React").jsx(b("DOMContainer.react"),{children:c}),vpc:a})}e.exports=a}),null);
__d("VideoPlayerFairplayLicenseHandler",["EventEmitter","EventListener","URI","VideoPlayerWindowUtils","XHRRequest","unrecoverableViolation"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){var g;g=a.call(this)||this;g.$VideoPlayerFairplayLicenseHandler1=d;g.$VideoPlayerFairplayLicenseHandler2=c;g.$VideoPlayerFairplayLicenseHandler3=e;g.$VideoPlayerFairplayLicenseHandler4=f;b("EventListener").listen(d,"webkitneedkey",g.$VideoPlayerFairplayLicenseHandler5.bind(babelHelpers.assertThisInitialized(g)));return g}var d=c.prototype;d.$VideoPlayerFairplayLicenseHandler5=function(a){__p&&__p();var c=this;a=a.initData;var d=new Uint16Array(a.buffer);d=String.fromCharCode.apply(null,d).substring(8);var e,f=this.$VideoPlayerFairplayLicenseHandler1;if(f.webkitKeys==null){var g=b("VideoPlayerWindowUtils").WebKitMediaKeys;if(g!=null&&g.isTypeSupported("com.apple.fps.1_0","video/mp4"))e="com.apple.fps.1_0";else throw b("unrecoverableViolation")("Key System not supported","FairplayLicenseHandler");this.$VideoPlayerFairplayLicenseHandler1.webkitSetMediaKeys(new g(e))}if(f.webkitKeys==null)throw b("unrecoverableViolation")("Could not create MediaKeys","FairplayLicenseHandler");g=this.concatInitDataIdAndCertificate(a,d);e=this.$VideoPlayerFairplayLicenseHandler1.webkitKeys.createSession("video/mp4",g);if(!e)throw b("unrecoverableViolation")("Could not create key session",e);e.contentId=d;b("EventListener").listen(e,"webkitkeymessage",this.$VideoPlayerFairplayLicenseHandler6.bind(this));b("EventListener").listen(e,"webkitkeyerror",function(a){c.emit("error",{error:"webkitkeyerror"})})};d.concatInitDataIdAndCertificate=function(a,b){__p&&__p();var c=new Uint16Array(new ArrayBuffer(b.length*2));for(var d=0,e=b.length;d<e;d++)c[d]=b.charCodeAt(d);b=window.atob(this.$VideoPlayerFairplayLicenseHandler2);d=new Uint8Array(new ArrayBuffer(b.length));for(var e=0;e<b.length;e++)d[e]=b.charCodeAt(e);e=0;b=new ArrayBuffer(a.byteLength+4+c.byteLength+4+d.byteLength);var f=new DataView(b),g=new Uint8Array(b,e,a.byteLength);g.set(a);e+=a.byteLength;f.setUint32(e,c.byteLength,!0);e+=4;g=new Uint16Array(b,e,c.byteLength/2);g.set(c);e+=g.byteLength;f.setUint32(e,d.byteLength,!0);e+=4;a=new Uint8Array(b,e,d.byteLength);a.set(d);return new Uint8Array(b,0,b.byteLength)};d.$VideoPlayerFairplayLicenseHandler6=function(a){var c=this,d=a.target;a=a.message;a=window.btoa(String.fromCharCode.apply(null,new Uint8Array(a)));var e=this.$VideoPlayerFairplayLicenseHandler4[d.contentId];new(b("XHRRequest"))(new(g||(g=b("URI")))(e)).setMethod("POST").setRawData(a).setResponseType("text").setResponseHandler(function(a){c.$VideoPlayerFairplayLicenseHandler7(a,d)}).setRequestHeader("Content-type","application/x-www-form-urlencoded").setErrorHandler(function(){c.$VideoPlayerFairplayLicenseHandler8()}).send()};d.$VideoPlayerFairplayLicenseHandler7=function(a,b){a=window.atob(a);var c=new Uint8Array(new ArrayBuffer(a.length*2));for(var d=0,e=a.length;d<e;d++)c[d]=a.charCodeAt(d);b.update(c)};d.$VideoPlayerFairplayLicenseHandler8=function(){this.emit("error",{error:"Fairplay License fetch failed"})};return c}(b("EventEmitter"));e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("invariant-2.2.4",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a="production",b=function(b,c,d,e,f,g,h,i){__p&&__p();if(a!=="production"&&c===void 0)throw new Error("invariant requires an error message argument");if(!b){if(c===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var j=[d,e,f,g,h,i],k=0;b=new Error(c.replace(/%s/g,function(){return j[k++]}));b.name="Invariant Violation"}b.framesToPop=1;throw b}};g.exports=b}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
__d("XGamesVideoStreamerDashboardController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gaming/streamer/",{star_alerts:{type:"Bool",defaultValue:!0},share_alerts:{type:"Bool",defaultValue:!0},reaction_alerts:{type:"Bool",defaultValue:!1},star_sounds:{type:"Enum",enumType:1},stream_chain_alerts:{type:"Bool",defaultValue:!0},supporter_alerts:{type:"Bool",defaultValue:!0},charitable_donation_alerts:{type:"Bool",defaultValue:!0},clip_alerts:{type:"Bool",defaultValue:!0},page:{type:"String"},ref_key:{type:"String"},ref:{type:"String"},external_ref:{type:"String"},no_cs_redirect:{type:"Bool",defaultValue:!1},use_tabbed_layout:{type:"Enum",enumType:1}})}),null);
__d("XLiveVideoBroadcastLaunchComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_map/composer_config/",{default_input_source:{type:"String"},composer_entry_point:{type:"String",required:!0},page_id:{type:"FBID"},game_id:{type:"FBID"},hide_input_toggle:{type:"Bool",defaultValue:!1},default_message:{type:"String"},is_rehearsal:{type:"Bool",defaultValue:!1}})}),null);
__d("XWoodhengeSignupFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/dialog/",{page_id:{type:"FBID",required:!0},surface:{type:"String"},entrypoint_surface:{type:"String"},post_id:{type:"String"}})}),null);