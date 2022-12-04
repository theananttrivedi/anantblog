"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,s={unversionedId:"Promises/Callbacks",id:"Promises/Callbacks",title:"Callbacks",description:"We use browser methods in examples here",source:"@site/docs/Promises/Callbacks.md",sourceDirName:"Promises",slug:"/Promises/Callbacks",permalink:"/anantblog/Promises/Callbacks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async await",permalink:"/anantblog/Promises/Async await"},next:{title:"Error Handling with Promises",permalink:"/anantblog/Promises/Error Handling with Promises"}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We use browser methods in examples here\nTo demonstrate the use of callbacks, promises and other abstract concepts, we\u2019ll be using some browser methods: specifically, loading scripts and performing simple document manipulations."),(0,a.kt)("p",null,"If you\u2019re not familiar with these methods, and their usage in the examples is confusing, you may want to read a few chapters from the next part of the tutorial."),(0,a.kt)("p",null,"Although, we\u2019ll try to make things clear anyway. There won\u2019t be anything really complex browser-wise."),(0,a.kt)("p",null,"Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later."),(0,a.kt)("p",null,"For instance, one such function is the setTimeout function."),(0,a.kt)("p",null,"There are other real-world examples of asynchronous actions, e.g. loading scripts and modules (we\u2019ll cover them in later chapters)."),(0,a.kt)("p",null,"Take a look at the function loadScript(src), that loads a script with the given src:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function loadScript(src) {\n  // creates a <script> tag and append it to the page\n  // this causes the script with given src to start loading and run when complete\n  let script = document.createElement('script');\n  script.src = src;\n  document.head.append(script);\n}\n")),(0,a.kt)("p",null,"It inserts into the document a new, dynamically created, tag ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="\u2026">')," with the given src. The browser automatically starts loading it and executes when complete."),(0,a.kt)("p",null,"We can use this function like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// load and execute the script at the given path\nloadScript('/my/script.js');\n")),(0,a.kt)("p",null,"The script is executed \u201casynchronously\u201d, as it starts loading now, but runs later, when the function has already finished."),(0,a.kt)("p",null,"If there\u2019s any code below loadScript(\u2026), it doesn\u2019t wait until the script loading finishes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"loadScript('/my/script.js');\n// the code below loadScript\n// doesn't wait for the script loading to finish\n// ...\n")),(0,a.kt)("p",null,"Let\u2019s say we need to use the new script as soon as it loads. It declares new functions, and we want to run them."),(0,a.kt)("p",null,"But if we do that immediately after the loadScript(\u2026) call, that wouldn\u2019t work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"loadScript('/my/script.js'); // the script has \"function newFunction() {\u2026}\"\n")),(0,a.kt)("p",null,"newFunction(); // no such function!\nNaturally, the browser probably didn\u2019t have time to load the script. As of now, the loadScript function doesn\u2019t provide a way to track the load completion. The script loads and eventually runs, that\u2019s all. But we\u2019d like to know when it happens, to use new functions and variables from that script."),(0,a.kt)("p",null,"Let\u2019s add a callback function as a second argument to loadScript that should execute when the script loads:"),(0,a.kt)("p",null,"function loadScript(src, callback) {\nlet script = document.createElement('script');\nscript.src = src;"),(0,a.kt)("p",null,"  script.onload = () => callback(script);"),(0,a.kt)("p",null,"  document.head.append(script);\n}\nThe onload event is described in the article Resource loading: onload and onerror, it basically executes a function after the script is loaded and executed."),(0,a.kt)("p",null,"Now if we want to call new functions from the script, we should write that in the callback:"),(0,a.kt)("p",null,"loadScript('/my/script.js', function() {\n// the callback runs after the script is loaded\nnewFunction(); // so now it works\n...\n});\nThat\u2019s the idea: the second argument is a function (usually anonymous) that runs when the action is completed."),(0,a.kt)("p",null,"Here\u2019s a runnable example with a real script:"),(0,a.kt)("p",null,"function loadScript(src, callback) {\nlet script = document.createElement('script');\nscript.src = src;\nscript.onload = () => callback(script);\ndocument.head.append(script);\n}"),(0,a.kt)("p",null,"loadScript('",(0,a.kt)("a",{parentName:"p",href:"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'"},"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'"),", script => {\nalert(",(0,a.kt)("inlineCode",{parentName:"p"},"Cool, the script ${script.src} is loaded"),");\nalert( ",(0,a.kt)("em",{parentName:"p"}," ); // ")," is a function declared in the loaded script\n});\nThat\u2019s called a \u201ccallback-based\u201d style of asynchronous programming. A function that does something asynchronously should provide a callback argument where we put the function to run after it\u2019s complete."),(0,a.kt)("p",null,"Here we did it in loadScript, but of course it\u2019s a general approach."),(0,a.kt)("p",null,"Callback in callback\nHow can we load two scripts sequentially: the first one, and then the second one after it?"),(0,a.kt)("p",null,"The natural solution would be to put the second loadScript call inside the callback, like this:"),(0,a.kt)("p",null,"loadScript('/my/script.js', function(script) {"),(0,a.kt)("p",null,"  alert(",(0,a.kt)("inlineCode",{parentName:"p"},"Cool, the ${script.src} is loaded, let's load one more"),");"),(0,a.kt)("p",null,"  loadScript('/my/script2.js', function(script) {\nalert(",(0,a.kt)("inlineCode",{parentName:"p"},"Cool, the second script is loaded"),");\n});"),(0,a.kt)("p",null,"});\nAfter the outer loadScript is complete, the callback initiates the inner one."),(0,a.kt)("p",null,"What if we want one more script\u2026?"),(0,a.kt)("p",null,"loadScript('/my/script.js', function(script) {"),(0,a.kt)("p",null,"  loadScript('/my/script2.js', function(script) {"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"loadScript('/my/script3.js', function(script) {\n  // ...continue after all scripts are loaded\n});\n")),(0,a.kt)("p",null,"  });"),(0,a.kt)("p",null,"});\nSo, every new action is inside a callback. That\u2019s fine for few actions, but not good for many, so we\u2019ll see other variants soon."),(0,a.kt)("p",null,"Handling errors\nIn the above examples we didn\u2019t consider errors. What if the script loading fails? Our callback should be able to react on that."),(0,a.kt)("p",null,"Here\u2019s an improved version of loadScript that tracks loading errors:"),(0,a.kt)("p",null,"function loadScript(src, callback) {\nlet script = document.createElement('script');\nscript.src = src;"),(0,a.kt)("p",null,"  script.onload = () => callback(null, script);\nscript.onerror = () => callback(new Error(",(0,a.kt)("inlineCode",{parentName:"p"},"Script load error for ${src}"),"));"),(0,a.kt)("p",null,"  document.head.append(script);\n}\nIt calls callback(null, script) for successful load and callback(error) otherwise."),(0,a.kt)("p",null,"The usage:"),(0,a.kt)("p",null,"loadScript('/my/script.js', function(error, script) {\nif (error) {\n// handle error\n} else {\n// script loaded successfully\n}\n});\nOnce again, the recipe that we used for loadScript is actually quite common. It\u2019s called the \u201cerror-first callback\u201d style."),(0,a.kt)("p",null,"The convention is:"),(0,a.kt)("p",null,"The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.\nThe second argument (and the next ones if needed) are for the successful result. Then callback(null, result1, result2\u2026) is called.\nSo the single callback function is used both for reporting errors and passing back results."),(0,a.kt)("p",null,"Pyramid of Doom\nAt first glance, it looks like a viable approach to asynchronous coding. And indeed it is. For one or maybe two nested calls it looks fine."),(0,a.kt)("p",null,"But for multiple asynchronous actions that follow one after another, we\u2019ll have code like this:"),(0,a.kt)("p",null,"loadScript('1.js', function(error, script) {"),(0,a.kt)("p",null,"  if (error) {\nhandleError(error);\n} else {\n// ...\nloadScript('2.js', function(error, script) {\nif (error) {\nhandleError(error);\n} else {\n// ...\nloadScript('3.js', function(error, script) {\nif (error) {\nhandleError(error);\n} else {\n// ...continue after all scripts are loaded (*)\n}\n});"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  }\n});\n")),(0,a.kt)("p",null,"  }\n});\nIn the code above:"),(0,a.kt)("p",null,"We load 1.js, then if there\u2019s no error\u2026\nWe load 2.js, then if there\u2019s no error\u2026\nWe load 3.js, then if there\u2019s no error \u2013 do something else (*).\nAs calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of ... that may include more loops, conditional statements and so on."),(0,a.kt)("p",null,"That\u2019s sometimes called \u201ccallback hell\u201d or \u201cpyramid of doom.\u201d"),(0,a.kt)("p",null,"The \u201cpyramid\u201d of nested calls grows to the right with every asynchronous action. Soon it spirals out of control."),(0,a.kt)("p",null,"So this way of coding isn\u2019t very good."),(0,a.kt)("p",null,"We can try to alleviate the problem by making every action a standalone function, like this:"),(0,a.kt)("p",null,"loadScript('1.js', step1);"),(0,a.kt)("p",null,"function step1(error, script) {\nif (error) {\nhandleError(error);\n} else {\n// ...\nloadScript('2.js', step2);\n}\n}"),(0,a.kt)("p",null,"function step2(error, script) {\nif (error) {\nhandleError(error);\n} else {\n// ...\nloadScript('3.js', step3);\n}\n}"),(0,a.kt)("p",null,"function step3(error, script) {\nif (error) {\nhandleError(error);\n} else {\n// ...continue after all scripts are loaded (*)\n}\n}\nSee? It does the same thing, and there\u2019s no deep nesting now because we made every action a separate top-level function."),(0,a.kt)("p",null,"It works, but the code looks like a torn apart spreadsheet. It\u2019s difficult to read, and you probably noticed that one needs to eye-jump between pieces while reading it. That\u2019s inconvenient, especially if the reader is not familiar with the code and doesn\u2019t know where to eye-jump."),(0,a.kt)("p",null,"Also, the functions named step* are all of single use, they are created only to avoid the \u201cpyramid of doom.\u201d No one is going to reuse them outside of the action chain. So there\u2019s a bit of namespace cluttering here."))}d.isMDXComponent=!0}}]);