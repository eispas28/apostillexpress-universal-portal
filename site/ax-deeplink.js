window.AXDL={path:function(){return location.hash.replace(/^#\/?/,'')},
useRoute:function(React,route,apply){var first=React.useRef(true),ap=React.useRef(apply);ap.current=apply;
React.useEffect(function(){var f=first.current;first.current=false;var cur=AXDL.path();if(f&&cur&&!route)return;if(cur===route)return;history[f?'replaceState':'pushState'](null,'',location.pathname+location.search+(route?'#/'+route:''))},[route]);
React.useEffect(function(){var on=function(){ap.current(AXDL.path())};if(AXDL.path())on();window.addEventListener('popstate',on);window.addEventListener('hashchange',on);return function(){window.removeEventListener('popstate',on);window.removeEventListener('hashchange',on)}},[])}};
