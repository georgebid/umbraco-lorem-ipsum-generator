(function(P){typeof define=="function"&&define.amd?define(P):P()})(function(){"use strict";var P={},h={},k;function D(){if(k)return h;k=1,Object.defineProperty(h,"__esModule",{value:!0}),h.FORMAT_PLAIN=h.FORMAT_HTML=h.FORMATS=void 0;var e="html";h.FORMAT_HTML=e;var t="plain";h.FORMAT_PLAIN=t;var n=[e,t];return h.FORMATS=n,h}var p={},x;function ie(){if(x)return p;x=1,Object.defineProperty(p,"__esModule",{value:!0}),p.UNIT_WORDS=p.UNIT_WORD=p.UNIT_SENTENCES=p.UNIT_SENTENCE=p.UNIT_PARAGRAPHS=p.UNIT_PARAGRAPH=p.UNITS=void 0;var e="words";p.UNIT_WORDS=e;var t="word";p.UNIT_WORD=t;var n="sentences";p.UNIT_SENTENCES=n;var m="sentence";p.UNIT_SENTENCE=m;var f="paragraphs";p.UNIT_PARAGRAPHS=f;var u="paragraph";p.UNIT_PARAGRAPH=u;var v=[e,t,n,m,f,u];return p.UNITS=v,p}var y={},C;function F(){if(C)return y;C=1,Object.defineProperty(y,"__esModule",{value:!0}),y.WORDS=void 0;var e=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];return y.WORDS=e,y}var A={},N={},G;function ue(){if(G)return N;G=1,Object.defineProperty(N,"__esModule",{value:!0}),N.LINE_ENDINGS=void 0;var e={POSIX:`
`,WIN32:`\r
`};return N.LINE_ENDINGS=e,N}var T={},b={},E={},B;function oe(){return B||(B=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(f){var u=f.trim();return u.charAt(0).toUpperCase()+u.slice(1)},n=t;e.default=n}(E)),E}var S={exports:{}},$;function se(){return $||($=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return!!e.exports},m=n;t.default=m}(S,S.exports)),S.exports}var M={},j;function fe(){return j||(j=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var f=!1;try{f=navigator.product==="ReactNative"}catch{f=!1}return f},n=t;e.default=n}(M)),M}var L={},I={},H;function de(){if(H)return I;H=1,Object.defineProperty(I,"__esModule",{value:!0}),I.SUPPORTED_PLATFORMS=void 0;var e={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};return I.SUPPORTED_PLATFORMS=e,I}var z;function ce(){return z||(z=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=de(),n=function(){var u=!1;try{u=process.platform===t.SUPPORTED_PLATFORMS.WIN32}catch{u=!1}return u},m=n;e.default=m}(L)),L}var U={},X;function J(){return X||(X=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(f)).map(function(u,v){return v})},n=t;e.default=n}(U)),U}var q={},K;function le(){return K||(K=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(J());function n(u){return u&&u.__esModule?u:{default:u}}var m=function(v,c){var o=(0,t.default)(v);return o.map(function(){return c()})},f=m;e.default=f}(q)),q}var Q;function V(){return Q||(Q=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return v.default}});var t=c(oe()),n=c(se()),m=c(fe()),f=c(ce()),u=c(J()),v=c(le());function c(o){return o&&o.__esModule?o:{default:o}}}(b)),b}var Y;function me(){return Y||(Y=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=F(),n=V();function m(g,s){if(!(g instanceof s))throw new TypeError("Cannot call a class as a function")}function f(g,s){for(var d=0;d<s.length;d++){var r=s[d];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(g,r.key,r)}}function u(g,s,d){return s&&f(g.prototype,s),Object.defineProperty(g,"prototype",{writable:!1}),g}function v(g,s,d){return s in g?Object.defineProperty(g,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):g[s]=d,g}var c=function(){function g(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=s.sentencesPerParagraph,r=d===void 0?{max:7,min:3}:d,i=s.wordsPerSentence,a=i===void 0?{max:15,min:5}:i,l=s.random;s.seed;var _=s.words,R=_===void 0?t.WORDS:_;if(m(this,g),v(this,"sentencesPerParagraph",void 0),v(this,"wordsPerSentence",void 0),v(this,"random",void 0),v(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(a.min>a.max)throw new Error("Minimum number of words per sentence (".concat(a.min,") cannot exceed maximum (").concat(a.max,")."));this.sentencesPerParagraph=r,this.words=R,this.wordsPerSentence=a,this.random=l||Math.random}return u(g,[{key:"generateRandomInteger",value:function(d,r){return Math.floor(this.random()*(r-d+1)+d)}},{key:"generateRandomWords",value:function(d){var r=this,i=this.wordsPerSentence,a=i.min,l=i.max,_=d||this.generateRandomInteger(a,l);return(0,n.makeArrayOfLength)(_).reduce(function(R,w){return"".concat(r.pluckRandomWord()," ").concat(R)},"").trim()}},{key:"generateRandomSentence",value:function(d){return"".concat((0,n.capitalize)(this.generateRandomWords(d)),".")}},{key:"generateRandomParagraph",value:function(d){var r=this,i=this.sentencesPerParagraph,a=i.min,l=i.max,_=d||this.generateRandomInteger(a,l);return(0,n.makeArrayOfLength)(_).reduce(function(R,w){return"".concat(r.generateRandomSentence()," ").concat(R)},"").trim()}},{key:"pluckRandomWord",value:function(){var d=0,r=this.words.length-1,i=this.generateRandomInteger(d,r);return this.words[i]}}]),g}(),o=c;e.default=o}(T)),T}var Z;function ve(){return Z||(Z=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=D(),n=ue(),m=u(me()),f=V();function u(r){return r&&r.__esModule?r:{default:r}}function v(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function c(r,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function o(r,i,a){return i&&c(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),r}function g(r,i,a){return i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}var s=function(){function r(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.FORMAT_PLAIN,l=arguments.length>2?arguments[2]:void 0;if(v(this,r),this.format=a,this.suffix=l,g(this,"generator",void 0),t.FORMATS.indexOf(a.toLowerCase())===-1)throw new Error("".concat(a," is an invalid format. Please use ").concat(t.FORMATS.join(" or "),"."));this.generator=new m.default(i)}return o(r,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,f.isReactNative)()&&(0,f.isNode)()&&(0,f.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(a){return this.format===t.FORMAT_HTML?"<p>".concat(a,"</p>"):a}},{key:"formatStrings",value:function(a){var l=this;return a.map(function(_){return l.formatString(_)})}},{key:"generateWords",value:function(a){return this.formatString(this.generator.generateRandomWords(a))}},{key:"generateSentences",value:function(a){return this.formatString(this.generator.generateRandomParagraph(a))}},{key:"generateParagraphs",value:function(a){var l=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,f.makeArrayOfStrings)(a,l)).join(this.getLineEnding())}}]),r}(),d=s;e.default=d}(A)),A}var ee;function ge(){return ee||(ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return f.default}}),e.loremIpsum=void 0;var t=D(),n=ie(),m=F(),f=u(ve());function u(c){return c&&c.__esModule?c:{default:c}}var v=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=o.count,s=g===void 0?1:g,d=o.format,r=d===void 0?t.FORMAT_PLAIN:d,i=o.paragraphLowerBound,a=i===void 0?3:i,l=o.paragraphUpperBound,_=l===void 0?7:l,R=o.random,w=o.sentenceLowerBound,pe=w===void 0?5:w,re=o.sentenceUpperBound,_e=re===void 0?15:re,ne=o.units,he=ne===void 0?n.UNIT_SENTENCES:ne,te=o.words,Re=te===void 0?m.WORDS:te,ae=o.suffix,Pe=ae===void 0?"":ae,ye={random:R,sentencesPerParagraph:{max:_,min:a},words:Re,wordsPerSentence:{max:_e,min:pe}},W=new f.default(ye,r,Pe);switch(he){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return W.generateParagraphs(s);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return W.generateSentences(s);case n.UNIT_WORDS:case n.UNIT_WORD:return W.generateWords(s);default:return""}};e.loremIpsum=v}(P)),P}var O=ge();(function(){function e(t){t.PluginManager.add("lorem-ipsum",function(n){return n.ui.registry.addMenuButton("loremIpsumButton",{text:"Add Lorem Ipsum",fetch:m=>{m([{type:"menuitem",text:"Short sentence",icon:"horizontal-rule",onAction:()=>n.insertContent(O.loremIpsum({count:1,units:"sentences"}))},{type:"menuitem",text:"1 paragraph",icon:"border-style",onAction:()=>n.insertContent(O.loremIpsum({count:1,units:"paragraphs"}))},{type:"menuitem",text:"Enter number of characters",icon:"text",onAction:()=>{n.windowManager.open({title:"Generate Lorem Ipsum",body:{type:"panel",items:[{type:"input",name:"count",label:"Specify number of characters",inputMode:"numeric"}]},buttons:[{type:"submit",text:"Insert"},{type:"cancel",text:"Cancel"}],onSubmit:u=>{const v=u.getData(),c=parseInt(v.count,10)||50,o=O.loremIpsum({count:c,units:"words",format:"plain"});n.insertContent(o.substring(0,c)),u.close()}})}},{type:"menuitem",text:"Enter custom number of sentences",icon:"border-width",onAction:()=>{n.windowManager.open({title:"Generate Lorem Ipsum",body:{type:"panel",items:[{type:"input",name:"count",label:"Number of sentences",inputMode:"numeric"}]},buttons:[{type:"submit",text:"Insert"},{type:"cancel",text:"Cancel"}],onSubmit:u=>{const v=u.getData(),c=parseInt(v.count,10)||1;n.insertContent(O.loremIpsum({count:c,units:"sentences"})),u.close()}})}}])}}),{getMetadata:function(){return{name:"Custom Lorem Ipsum",url:"http://exampleplugindocs"}}}})}tinymce.init({selector:"#editor",plugins:"lorem-ipsum",toolbar:"loremIpsumButton",setup:t=>{t.on("init",()=>{console.log("TinyMCE Initialized:",t),console.log("UI Registry:",t.ui.registry)})}}),window&&"tinymce"in window&&e(window.tinymce)})()});
