"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[8010],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},559552:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(487462),o=r(263366),i=(r(667294),r(603905)),a=["components"],s={id:"prerequisites"},l="Prerequisites",u={unversionedId:"prerequisites",id:"version-2.1/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Before you begin, ensure your system has the following dependencies installed:",source:"@site/versioned_docs/version-2.1/Prerequisites.md",sourceDirName:".",slug:"/prerequisites",permalink:"/docs/prerequisites",editUrl:"https://github.com/rahataid?tab=repositories/versioned_docs/version-2.1/Prerequisites.md",tags:[],version:"2.1",frontMatter:{id:"prerequisites"},sidebar:"version-2.1/tutorialSidebar",previous:{title:"System Overview",permalink:"/docs/system_overview"},next:{title:"Installation",permalink:"/docs/installation"}},c=[{value:"Setting Up Development Environment",id:"setting-up-development-environment",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you begin, ensure your system has the following dependencies installed:"),(0,i.kt)("p",null,"Docker: Version 20.10.7 or higher\nNode.js: Version 20.10.0 or higher\npnpm (Package Manager): Version 6.16.1 or higher"),(0,i.kt)("h2",{id:"setting-up-development-environment"},"Setting Up Development Environment"),(0,i.kt)("p",null,"To set up the development environment for Rahat, we need the following services to br available on your local machine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"graph-node"),(0,i.kt)("li",{parentName:"ul"},"postgres"),(0,i.kt)("li",{parentName:"ul"},"redis"),(0,i.kt)("li",{parentName:"ul"},"ganache")),(0,i.kt)("p",null,"The best way to setup all of these services is thourgh docker. You can use the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rahataid/rahat-platform-nx/tree/main/tools/docker-compose"},"docker-compose file")," to setup all the services."))}m.isMDXComponent=!0}}]);