"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6570],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},706994:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(487462),a=n(263366),o=(n(667294),n(603905)),l=["components"],i={id:"community-tool"},u="Overview",p={unversionedId:"community-tool",id:"version-2.1/community-tool",isDocsHomePage:!1,title:"Overview",description:"Community-tool",source:"@site/versioned_docs/version-2.1/Beneficiary_management-tool.md",sourceDirName:".",slug:"/community-tool",permalink:"/docs/community-tool",editUrl:"https://github.com/rahataid?tab=repositories/versioned_docs/version-2.1/Beneficiary_management-tool.md",tags:[],version:"2.1",frontMatter:{id:"community-tool"},sidebar:"version-2.1/tutorialSidebar",previous:{title:"Integration",permalink:"/docs/integration"},next:{title:"apps",permalink:"/docs/sdk-documentation/apps"}},c=[{value:"Community-tool",id:"community-tool",children:[],level:2},{value:"Environment Variables",id:"environment-variables",children:[],level:2},{value:"Run Locally",id:"run-locally",children:[],level:2},{value:"SDK",id:"sdk",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Getting Started",id:"getting-started",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"community-tool"},"Community-tool"),(0,o.kt)("p",null,"The Community Tool is designed to facilitate efficient management of beneficiary data, ensuring accuracy, reliability, and security. It provides targeting, grouping, and reporting capabilities for beneficiaries based on geographical, social, economic, and physical indicators."),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"To run this project, you will need to add the following environment variables to your .env file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PORT=5505\nPORT_BEN=5501\nPRIVATE_KEY=FILL_WITH_YOUR_PRIVATE_KEY\nKOBO_URL= FILL_WITH_YOUR_KOBO_TOOL_URL\nAUTH_TOKEN=FILL_WITH_YOUR_AUTH_TOKEN\n")),(0,o.kt)("p",null,"JWT setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"JWT_SECRET_KEY=FILL_WITH_YOUR_SECRET_KEY\nJWT_EXPIRATION_TIME=604800000\nJWT_EXPIRATION_LONG_TIME=604800000\n")),(0,o.kt)("p",null,"OTP time duration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"OTP_DURATION_IN_SECS=300\n\n")),(0,o.kt)("p",null,"Redis setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REDIS_HOST= FILL_WITH_YOUR_REDIS_HOST\nREDIS_PORT= FILL_WITH_YOUR_REDIS_PORT\nREDIS_PASSWORD=FILL_WITH_YOUR_REDIS_PASSSWORD\n")),(0,o.kt)("p",null,"Postgres database config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DB_HOST=FILL_WITH_YOUR_DB_HOST\nDB_PORT=5432\nDB_USERNAME= FILL_WITH_YOUR_USERNAME\nDB_PASSWORD=FILL_WITH_YOUR_PASSWORD\nDB_NAME= FILL_WITH_YOUR_DB_NAME\n")),(0,o.kt)("p",null,"Prisma database connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public\n")),(0,o.kt)("p",null,"SMTP setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Mailing Service\nSMTP_HOST=smtp.gmail.com\nSMTP_PORT=465\nSMTP_USERNAME= FILL_WITH_YOUR_USERNAME\nSMTP_PASSWORD= FILL_WITH_YOUR_PASSWORD\n")),(0,o.kt)("h2",{id:"run-locally"},"Run Locally"),(0,o.kt)("p",null,"Clone the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/rahataid/rahat-beneficiary-mgmt.git\n")),(0,o.kt)("p",null,"Go to the project directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  cd rahat-beneficiary-mgmt\n")),(0,o.kt)("p",null,"Install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  pnpm install\n")),(0,o.kt)("p",null,"Prisma migration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," npx prisma migrate dev\n")),(0,o.kt)("p",null,"Start the server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  pnpm dev\n")),(0,o.kt)("h2",{id:"sdk"},"SDK"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install the SDK via pnpm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install @rahataid/community-tool-sdk\n")),(0,o.kt)("p",null,"You need to install rumsan/react-query package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install @rumsan/react-query\n")),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To get started with SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import client function it in your project from the SDK module you installed :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  import { clientName } from '@rahataid/community-tool-sdk/clients'\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import required hook from the ",(0,o.kt)("inlineCode",{parentName:"li"},"@tanstack/react-query"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import {\n  UseQueryResult,\n  useMutation,\n  useQuery,\n  useQueryClient,\n} from '@tanstack/react-query';\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import hooks ",(0,o.kt)("strong",{parentName:"li"},"useRSQuery")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"rumsan/react-query")," package :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import {  useRSQuery } from '@rumsan/react-query'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Import other hooks, function, types/interface and constants from the varios modules and package as required")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a custom hook that uses React Query to fetch the application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Initialize the service from ",(0,o.kt)("strong",{parentName:"p"},"useRSQuery")," hook"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  const { queryClient, rumsanService } = useRSQuery();\n\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's take an example for the ",(0,o.kt)("inlineCode",{parentName:"p"},"appClient")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { getAppClient } from '@rahataid/community-tool-sdk/clients';\nimport { useQuery, useRSQuery } from '@rumsan/react-query';\nimport { FilterStatsDto } from '@rahataid/community-tool-sdk/app';\n\nexport const useAppStatsList = (data?: FilterStatsDto) => {\n  // Get queryClient and rumsanService from useRSQuery hook\n  const { queryClient, rumsanService } = useRSQuery();\n\n  // Get appStatsClient using getAppClient function from SDK\n  const appStatsClient = getAppClient(rumsanService.client);\n\n  // Define query using useQuery hook from react-query\n  const query = useQuery(\n    {\n      queryKey: [\"GET_DASHBOARD\", data], // Unique key for the query\n      queryFn: () => appStatsClient.getAppStats(data), // Function to fetch data\n    },\n    queryClient, // Provide queryClient instance\n  );\n\n  return query; // Return the query object\n};\n\n")))}m.isMDXComponent=!0}}]);