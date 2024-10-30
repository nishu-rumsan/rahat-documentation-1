"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[7971],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},346057:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(487462),o=r(263366),i=(r(667294),r(603905)),a=["components"],s={id:"crypto_transfer_project"},l="Crypto Transfer Project",c={unversionedId:"crypto_transfer_project",id:"version-2.1/crypto_transfer_project",isDocsHomePage:!1,title:"Crypto Transfer Project",description:"The Rahat Project C2C is a monorepo designed to facilitate a Crypto-2-Crypto Cash Voucher Assistance (CVA) flow. It includes features such as a deposit token feature with a QR code, user roles and permissions with whitelisting for disbursement transactions, disbursement approvals with detailed execution information, and a multi-sig disbursement flow directed back to the safe wallet. This project is dependent on the rahat-core project, which must be set up and running before starting the Rahat Project C2C.",source:"@site/versioned_docs/version-2.1/Crypto_transfer_project.md",sourceDirName:".",slug:"/crypto_transfer_project",permalink:"/docs/crypto_transfer_project",editUrl:"https://github.com/rahataid?tab=repositories/versioned_docs/version-2.1/Crypto_transfer_project.md",tags:[],version:"2.1",frontMatter:{id:"crypto_transfer_project"},sidebar:"version-2.1/tutorialSidebar",previous:{title:"Communication Tool",permalink:"/docs/communication-tool"},next:{title:"Cash Voucher Project",permalink:"/docs/cash_voucher_project"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Setup and Running Locally",id:"setup-and-running-locally",children:[{value:"Step 1: Clone the Project",id:"step-1-clone-the-project",children:[],level:3},{value:"Step 2: Navigate to the Project Directory and Bootstrap the Project",id:"step-2-navigate-to-the-project-directory-and-bootstrap-the-project",children:[],level:3},{value:"Step 3: Run the Project",id:"step-3-run-the-project",children:[],level:3}],level:2},{value:"Description",id:"description",children:[{value:"Crypto-2-Crypto CVA Flow",id:"crypto-2-crypto-cva-flow",children:[{value:"Deposit Token Feature",id:"deposit-token-feature",children:[],level:4},{value:"User Roles and Permissions",id:"user-roles-and-permissions",children:[],level:4},{value:"Disbursement Approvals",id:"disbursement-approvals",children:[],level:4},{value:"Multi-Sig Disbursement",id:"multi-sig-disbursement",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crypto-transfer-project"},"Crypto Transfer Project"),(0,i.kt)("p",null,"The Rahat Project C2C is a monorepo designed to facilitate a Crypto-2-Crypto Cash Voucher Assistance (CVA) flow. It includes features such as a deposit token feature with a QR code, user roles and permissions with whitelisting for disbursement transactions, disbursement approvals with detailed execution information, and a multi-sig disbursement flow directed back to the safe wallet. This project is dependent on the ",(0,i.kt)("inlineCode",{parentName:"p"},"rahat-core")," project, which must be set up and running before starting the Rahat Project C2C."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Ensure your system has the following dependencies installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker: Version 20.10.7 or higher"),(0,i.kt)("li",{parentName:"ul"},"Node.js: Version 20.10.0 or higher"),(0,i.kt)("li",{parentName:"ul"},"pnpm (Package Manager): Version 6.16.1 or higher")),(0,i.kt)("p",null,"Before beginning, ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"rahat-core")," project is set up and running by following the instructions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rahat-core")," repository."),(0,i.kt)("h2",{id:"setup-and-running-locally"},"Setup and Running Locally"),(0,i.kt)("h3",{id:"step-1-clone-the-project"},"Step 1: Clone the Project"),(0,i.kt)("p",null,"Clone the Rahat Project C2C repository using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:rahataid/rahat-project-c2c.git\n")),(0,i.kt)("h3",{id:"step-2-navigate-to-the-project-directory-and-bootstrap-the-project"},"Step 2: Navigate to the Project Directory and Bootstrap the Project"),(0,i.kt)("p",null,"Navigate to the project directory and bootstrap the project using pnpm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm bootstrap\n")),(0,i.kt)("h3",{id:"step-3-run-the-project"},"Step 3: Run the Project"),(0,i.kt)("p",null,"Start the project using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm start\n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"crypto-2-crypto-cva-flow"},"Crypto-2-Crypto CVA Flow"),(0,i.kt)("h4",{id:"deposit-token-feature"},"Deposit Token Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"QR Code Feature:")," Consider adding a QR code feature that can be shared. Offer users the option to deposit via wallet or generate a QR code.")),(0,i.kt)("h4",{id:"user-roles-and-permissions"},"User Roles and Permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Whitelisting:")," Implement whitelisting for users who can access disbursement transactions.")),(0,i.kt)("h4",{id:"disbursement-approvals"},"Disbursement Approvals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution Details:")," Include the person who executed the last transaction and add a timestamp instead of just the date.")),(0,i.kt)("h4",{id:"multi-sig-disbursement"},"Multi-Sig Disbursement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disbursement Flow:")," Identify the flow for directing multi-sig disbursements back to the safe wallet.")),(0,i.kt)("p",null,"By following these instructions, you will be able to set up and run the Rahat Project C2C locally, and leverage its features for Crypto-2-Crypto Cash Voucher Assistance."),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);