(function(window){var svgSprite='<svg><symbol id="icon-mail" viewBox="0 0 1024 1024"><path d="M831.936 768L192 768.192V378.304l302.816 192.704a32.096 32.096 0 0 0 34.4 0L832 378.304 831.936 768zM192 255.776l0.096 0.224L832 255.776v46.656L512 506.048 192 302.432v-46.656zM831.936 192h-639.84A64 64 0 0 0 128 255.776v512.416C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.192V255.776A64 64 0 0 0 831.936 192z" fill="" ></path></symbol><symbol id="icon-mail_fill" viewBox="0 0 1024 1024"><path d="M512 576a32 32 0 0 1-17.184-4.992L128 337.568v430.656A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V337.888l-366.816 233.12A32.096 32.096 0 0 1 512 576" fill="" ></path><path d="M831.936 192H192.064A64 64 0 0 0 128 255.808v4.896L512 506.08l384-244.032v-6.24A64 64 0 0 0 831.936 192" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)