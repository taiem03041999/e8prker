(function(){var t=window,c=t.Intercom;if(typeof c=="function")c("reattach_activator"),c("update",t.intercomSettings);else{var o=document,n=function(){n.c(arguments)};n.q=[],n.c=function(e){n.q.push(e)},t.Intercom=n;var a=function(){var e=o.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://"+t.intercomSettings.app_id+".intercom-chat.com/shim.latest.js";var r=o.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)};t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}})();const i=document.querySelectorAll(".live-chat-button");for(const t of i)t.addEventListener("click",c=>{window.Intercom("show")});window.location.search.includes("livechat=true")&&window.Intercom("show");