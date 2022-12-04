"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var h=n.createContext({}),i=function(e){var t=n.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,h=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=o,m=p["".concat(h,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,l={unversionedId:"Promises/Error Handling with Promises",id:"Promises/Error Handling with Promises",title:"Error Handling with Promises",description:"Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That\u2019s very convenient in practice.",source:"@site/docs/Promises/Error Handling with Promises.md",sourceDirName:"Promises",slug:"/Promises/Error Handling with Promises",permalink:"/anantblog/Promises/Error Handling with Promises",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/anantblog/Promises/Callbacks"},next:{title:"Microtasks",permalink:"/anantblog/Promises/Microtasks"}},h={},i=[],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That\u2019s very convenient in practice."),(0,o.kt)("p",null,"For instance, in the code below the URL to fetch is wrong (no such site) and .catch handles the error:"),(0,o.kt)("p",null,"fetch('",(0,o.kt)("a",{parentName:"p",href:"https://no-such-server.blabla'"},"https://no-such-server.blabla'"),") // rejects\n.then(response => response.json())\n.catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)\nAs you can see, the .catch doesn\u2019t have to be immediate. It may appear after one or maybe several .then."),(0,o.kt)("p",null,"Or, maybe, everything is all right with the site, but the response is not valid JSON. The easiest way to catch all errors is to append .catch to the end of chain:"),(0,o.kt)("p",null,"fetch('/article/promise-chaining/user.json')\n.then(response => response.json())\n.then(user => fetch(",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.github.com/users/${user.name}"),"))\n.then(response => response.json())\n.then(githubUser => new Promise((resolve, reject) => {\nlet img = document.createElement('img');\nimg.src = githubUser.avatar_url;\nimg.className = \"promise-avatar-example\";\ndocument.body.append(img);"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"setTimeout(() => {\n  img.remove();\n  resolve(githubUser);\n}, 3000);\n")),(0,o.kt)("p",null,"  }))\n.catch(error => alert(error.message));\nNormally, such .catch doesn\u2019t trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it."),(0,o.kt)("p",null,'Implicit try\u2026catch\nThe code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.'),(0,o.kt)("p",null,"For instance, this code:"),(0,o.kt)("p",null,'new Promise((resolve, reject) => {\nthrow new Error("Whoops!");\n}).catch(alert); // Error: Whoops!\n\u2026Works exactly the same as this:'),(0,o.kt)("p",null,'new Promise((resolve, reject) => {\nreject(new Error("Whoops!"));\n}).catch(alert); // Error: Whoops!\nThe "invisible try..catch" around the executor automatically catches the error and turns it into rejected promise.'),(0,o.kt)("p",null,"This happens not only in the executor function, but in its handlers as well. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler."),(0,o.kt)("p",null,"Here\u2019s an example:"),(0,o.kt)("p",null,'new Promise((resolve, reject) => {\nresolve("ok");\n}).then((result) => {\nthrow new Error("Whoops!"); // rejects the promise\n}).catch(alert); // Error: Whoops!\nThis happens for all errors, not just those caused by the throw statement. For example, a programming error:'),(0,o.kt)("p",null,'new Promise((resolve, reject) => {\nresolve("ok");\n}).then((result) => {\nblabla(); // no such function\n}).catch(alert); // ReferenceError: blabla is not defined\nThe final .catch not only catches explicit rejections, but also accidental errors in the handlers above.'),(0,o.kt)("p",null,"Rethrowing\nAs we already noticed, .catch at the end of the chain is similar to try..catch. We may have as many .then handlers as we want, and then use a single .catch at the end to handle errors in all of them."),(0,o.kt)("p",null,"In a regular try..catch we can analyze the error and maybe rethrow it if it can\u2019t be handled. The same thing is possible for promises."),(0,o.kt)("p",null,"If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler."),(0,o.kt)("p",null,"In the example below the .catch successfully handles the error:"),(0,o.kt)("p",null,"// the execution: catch -> then\nnew Promise((resolve, reject) => {"),(0,o.kt)("p",null,'  throw new Error("Whoops!");'),(0,o.kt)("p",null,"}).catch(function(error) {"),(0,o.kt)("p",null,'  alert("The error is handled, continue normally");'),(0,o.kt)("p",null,'}).then(() => alert("Next successful handler runs"));\nHere the .catch block finishes normally. So the next successful .then handler is called.'),(0,o.kt)("p",null,"In the example below we see the other situation with .catch. The handler (*) catches the error and just can\u2019t handle it (e.g. it only knows how to handle URIError), so it throws it again:"),(0,o.kt)("p",null,"// the execution: catch -> catch\nnew Promise((resolve, reject) => {"),(0,o.kt)("p",null,'  throw new Error("Whoops!");'),(0,o.kt)("p",null,"}).catch(function(error) { // (*)"),(0,o.kt)("p",null,'  if (error instanceof URIError) {\n// handle it\n} else {\nalert("Can\'t handle such error");'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"throw error; // throwing this or another error jumps to the next catch\n")),(0,o.kt)("p",null,"  }"),(0,o.kt)("p",null,"}).then(function() {\n/",(0,o.kt)("em",{parentName:"p"}," doesn't run here "),"/\n}).catch(error => { // (**)"),(0,o.kt)("p",null,"  alert(",(0,o.kt)("inlineCode",{parentName:"p"},"The unknown error has occurred: ${error}"),");\n// don't return anything => execution goes the normal way"),(0,o.kt)("p",null,"});\nThe execution jumps from the first .catch (*) to the next one (**) down the chain."),(0,o.kt)("p",null,"Unhandled rejections\nWhat happens when an error is not handled? For instance, we forgot to append .catch to the end of the chain, like here:"),(0,o.kt)("p",null,"new Promise(function() {\nnoSuchFunction(); // Error here (no such function)\n})\n.then(() => {\n// successful promise handlers, one or more\n}); // without .catch at the end!\nIn case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler. But there is none. So the error gets \u201cstuck\u201d. There\u2019s no code to handle it."),(0,o.kt)("p",null,"In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong."),(0,o.kt)("p",null,"What happens when a regular error occurs and is not caught by try..catch? The script dies with a message in the console. A similar thing happens with unhandled promise rejections."),(0,o.kt)("p",null,"The JavaScript engine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above."),(0,o.kt)("p",null,"In the browser we can catch such errors using the event unhandledrejection:"),(0,o.kt)("p",null,"window.addEventListener('unhandledrejection', function(event) {\n// the event object has two special properties:\nalert(event.promise); // ","[object Promise]"," - the promise that generated the error\nalert(event.reason); // Error: Whoops! - the unhandled error object\n});"),(0,o.kt)("p",null,'new Promise(function() {\nthrow new Error("Whoops!");\n}); // no catch to handle the error\nThe event is the part of the HTML standard.'),(0,o.kt)("p",null,"If an error occurs, and there\u2019s no .catch, the unhandledrejection handler triggers, and gets the event object with the information about the error, so we can do something."),(0,o.kt)("p",null,"Usually such errors are unrecoverable, so our best way out is to inform the user about the problem and probably report the incident to the server."),(0,o.kt)("p",null,"In non-browser environments like Node.js there are other ways to track unhandled errors."),(0,o.kt)("p",null,"Summary\n.catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.\n.then also catches errors in the same manner, if given the second argument (which is the error handler).\nWe should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).\nIt\u2019s ok not to use .catch at all, if there\u2019s no way to recover from an error.\nIn any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never \u201cjust dies\u201d.\nTasks\nError in setTimeout\nWhat do you think? Will the .catch trigger? Explain your answer."),(0,o.kt)("p",null,'new Promise(function(resolve, reject) {\nsetTimeout(() => {\nthrow new Error("Whoops!");\n}, 1000);\n}).catch(alert);\nsolution\nThe answer is: no, it won\u2019t:'),(0,o.kt)("p",null,'new Promise(function(resolve, reject) {\nsetTimeout(() => {\nthrow new Error("Whoops!");\n}, 1000);\n}).catch(alert);\nAs said in the chapter, there\u2019s an "implicit try..catch" around the function code. So all synchronous errors are handled.'),(0,o.kt)("p",null,"But here the error is generated not while the executor is running, but later. So the promise can\u2019t handle it."))}u.isMDXComponent=!0}}]);