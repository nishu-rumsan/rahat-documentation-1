"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9643],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},941288:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=r(487462),n=r(263366),i=(r(667294),r(603905)),o=["components"],l={id:"rip_guide"},s="\ud83c\udf10 Rahat Improvement Proposal (RIP) Guide",p={unversionedId:"rip_guide",id:"version-2.1/rip_guide",isDocsHomePage:!1,title:"\ud83c\udf10 Rahat Improvement Proposal (RIP) Guide",description:"\ud83d\udcdc Licensed by CC-BY-4.0",source:"@site/versioned_docs/version-2.1/Rahat_Improvement_Proposal.md",sourceDirName:".",slug:"/rip_guide",permalink:"/docs/rip_guide",editUrl:"https://github.com/rahataid?tab=repositories/versioned_docs/version-2.1/Rahat_Improvement_Proposal.md",tags:[],version:"2.1",frontMatter:{id:"rip_guide"},sidebar:"version-2.1/tutorialSidebar",previous:{title:"Contribution Guideline",permalink:"/docs/contributing_guidelines"},next:{title:"Code of Conduct",permalink:"/docs/code_of_conduct"}},u=[{value:"\ud83d\udcd6 What is RIP?",id:"-what-is-rip",children:[],level:2},{value:"\ud83c\udfaf Purpose of RIP",id:"-purpose-of-rip",children:[],level:2},{value:"Why Contribute to Rahat?",id:"why-contribute-to-rahat",children:[],level:2},{value:"\ud83d\udcdd How to Submit a Rahat Improvement Proposal (RIP)",id:"-how-to-submit-a-rahat-improvement-proposal-rip",children:[{value:"Who Can Submit?",id:"who-can-submit",children:[],level:3},{value:"How to Submit",id:"how-to-submit",children:[],level:3}],level:2},{value:"\ud83d\udcc1 Categories of RIPs",id:"-categories-of-rips",children:[],level:2},{value:"\ud83d\udee0\ufe0f Detailed RIP Review Process",id:"\ufe0f-detailed-rip-review-process",children:[],level:2}],m={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-rahat-improvement-proposal-rip-guide"},"\ud83c\udf10 Rahat Improvement Proposal (RIP) Guide"),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("strong",{parentName:"p"},"Licensed by CC-BY-4.0")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-what-is-rip"},"\ud83d\udcd6 What is RIP?"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Rahat Improvement Proposal (RIP)")," system is a structured approach for proposing new features, enhancements, or process improvements within Rahat. It enables community members to submit ideas, ensuring transparency and alignment with the platform\u2019s goals."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-purpose-of-rip"},"\ud83c\udfaf Purpose of RIP"),(0,i.kt)("p",null,"The RIP process is designed to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udee0\ufe0f Provide a method for community-driven changes."),(0,i.kt)("li",{parentName:"ul"},"\ud83e\udd1d Encourage collaboration among stakeholders and developers."),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc40 Maintain transparency in decision-making."),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf9b\ufe0f Ensure quality control over platform updates.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"why-contribute-to-rahat"},"Why Contribute to Rahat?"),(0,i.kt)("p",null,"Your contributions are the foundation of Rahat\u2019s growth! Here\u2019s what you gain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shape the Platform\u2019s Future")," \ud83c\udf1f: Your ideas could lead Rahat\u2019s next humanitarian innovation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gain Recognition")," \ud83c\udfc6: Stand out with shoutouts and community visibility."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Build Your Portfolio")," \ud83d\udcc8: Contributions here build skills and credibility.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Plus, active contributors receive:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf89 ",(0,i.kt)("strong",{parentName:"li"},"Special shoutouts")," on social platforms"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf81 ",(0,i.kt)("strong",{parentName:"li"},"Exclusive Rahat swag")),(0,i.kt)("li",{parentName:"ul"},"\ud83e\uddd1\u200d\ud83d\udcbb ",(0,i.kt)("strong",{parentName:"li"},"Opportunities to collaborate with core teams"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-how-to-submit-a-rahat-improvement-proposal-rip"},"\ud83d\udcdd How to Submit a Rahat Improvement Proposal (RIP)"),(0,i.kt)("h3",{id:"who-can-submit"},"Who Can Submit?"),(0,i.kt)("p",null,"\ud83d\udc65 Anyone in the Rahat community\u2014developers, users, or contributors\u2014can submit an RIP."),(0,i.kt)("h3",{id:"how-to-submit"},"How to Submit"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Navigate to Issues")," in Rahat\u2019s GitHub repository."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select the RIP Proposal Template")," and fill in essential fields like title, motivation, and description."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Submit")," the issue, which will be reviewed at the next Open Source Committee meeting.")),(0,i.kt)("p",null,"For a ",(0,i.kt)("strong",{parentName:"p"},"detailed guide"),", ",(0,i.kt)("a",{parentName:"p",href:"#"},"click here"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-categories-of-rips"},"\ud83d\udcc1 Categories of RIPs"),(0,i.kt)("p",null,"RIPs are grouped based on their platform impact:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83e\udde9 Core"),": Fundamental platform functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udc65 BMT (Beneficiary Management Tool)"),": For managing beneficiaries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udce1 AA (Anticipatory Action)"),": Early warning and response systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udcb1 Crypto"),": Cryptocurrency management and integration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udd17 Referral"),": Enhancements for referral or voucher systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udce6 Others"),": Other platform modules or tools.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\ufe0f-detailed-rip-review-process"},"\ud83d\udee0\ufe0f Detailed RIP Review Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Proposal Submission")," ",(0,i.kt)("em",{parentName:"p"},"(Status: Proposed)"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Community members submit an RIP through GitHub Issues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": Issue created with essential fields (Title, Abstract, Motivation, Example Usage, Pitch)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\udd0d Open Source Committee Review (Bi-weekly Meetings)"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": The committee reviews the proposal\u2019s alignment with Rahat\u2019s goals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": Meeting notes, feedback requests, and a decision to move forward or revise."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\udcc8 In-depth Stakeholder Review"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Stakeholders assess feasibility, technical requirements, and impact."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": Stakeholder feedback, possible adjustments, and decision to proceed or modify."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\udcac GitHub Discussion Creation"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Open community discussion thread for feedback and recommendations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": Community insights, identified risks, and a refined proposal."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\udccb Final Requirements Gathering"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Finalize requirements based on all feedback."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": Complete list of requirements and stakeholder agreement."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\uddc2\ufe0f Project Specification Document (PSD) Creation"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Formalized requirements in a PSD with steps, milestones, and technical details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": PSD including timelines, testing, security considerations, and approval."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\udd17 GitHub Issue for Development Tracking"),"  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": Track feature development with a GitHub Issue, coordinating developers, QA, and project leads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deliverables"),": GitHub Issue with implementation steps, links to PSD, and assigned tasks.")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Rahat Improvement Proposal (RIP) Guide enables anyone in the community to help shape the platform\u2019s future. Through a clear, structured submission process, each proposal is valued and reviewed, fostering a collaborative and impactful environment. By contributing, you\u2019re helping drive real change\u2014your next idea could be the one that makes a difference! \ud83c\udf89"))}c.isMDXComponent=!0}}]);