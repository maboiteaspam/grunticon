/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
(function(e){"use strict";var t=e.document,n=e.navigator,a=e.Image,r=!(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===n.userAgent.indexOf("Chrome")||-1!==n.userAgent.indexOf("Series40")),o=function(n,a){a=a||function(){};var r=t.createElement("link"),o=t.getElementsByTagName("script")[0];r.rel="stylesheet",r.href=n,r.media="only x",r.onload=a,o.parentNode.insertBefore(r,o),e.setTimeout(function(){r.media="all"})},i=function(e,n){if(e&&3===e.length){var A=new a;A.onerror=function(){i.method="png",o(e[2])},A.onload=function(){var t=1===A.width&&1===A.height,a=e[t&&r?0:t?1:2];i.method=t&&r?"svg":t?"datapng":"png",i.href=a,o(a,n)},A.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.documentElement.className=t.documentElement.className+" grunticon"}};i.loadCSS=o,e.grunticon=i})(this);(function(e,t){"use strict";var n=t.document,r="grunticon:",a=function(e){if(n.attachEvent?"complete"===n.readyState:"loading"!==n.readyState)e();else{var t=!1;n.addEventListener("readystatechange",function(){t||(t=!0,e())},!1)}},o=function(e){for(var t,a,o,i,c,s,l={},u=n.styleSheets,g=0;u.length>g;g++)if(u[g].href&&u[g].href.indexOf(e)>-1){t=u[g];break}if(!t)return l;for(a=t.cssRules?t.cssRules:t.rules,g=0;a.length>g;g++)o=a[g].cssText,i=r+a[g].selectorText,c=o.split(");")[0].match(/US\-ASCII\,([^"']+)/),c&&c[1]&&(s=decodeURIComponent(c[1]),l[i]=s);return l},i=function(e){var t,a,o;a="data-grunticon-embed";for(var i in e)if(o=i.slice(r.length),t=n.querySelectorAll(o+"["+a+"]"),t.length)for(var c=0;t.length>c;c++)t[c].innerHTML=e[i],t[c].style.backgroundImage="none",t[c].removeAttribute(a);return t},c=function(){a(function(){i(o(e.href))})};e.embedIcons=i,e.getIcons=o,e.ready=a,e.svgLoadedCallback=c})(grunticon,this);