"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6965],{466934:function(e){e.exports=JSON.parse('{"operationId":"ProjectController_listBeneficiaries","parameters":[{"name":"sort","required":true,"in":"query","example":"ENROLLED","schema":{"type":"string"}},{"name":"order","required":true,"in":"query","example":"ENROLLED","schema":{"type":"string"}},{"name":"page","required":true,"in":"query","example":1,"schema":{"type":"number"}},{"name":"perPage","required":true,"in":"query","example":10,"schema":{"type":"number"}},{"name":"status","required":true,"in":"query","example":"ENROLLED","schema":{"type":"string"}},{"name":"type","required":true,"in":"query","example":"NOT_ASSIGNED","schema":{"type":"string"}},{"name":"projectId","required":true,"in":"query","example":"d8f61ebb-ae83-4a8b-8f36-ed756aa27d12","schema":{"type":"string"}},{"name":"uuid","required":true,"in":"path","schema":{}}],"responses":{"200":{"description":""}},"tags":["Projects"],"postman":{"name":"Project Controller list Beneficiaries","description":{"type":"text/plain"},"url":{"path":["v1","projects",":uuid","beneficiaries"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"(Required) ","type":"text/plain"},"key":"sort","value":"<string>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"order","value":"<string>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"page","value":"<number>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"perPage","value":"<number>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"status","value":"<string>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"type","value":"<string>"},{"description":{"content":"(Required) ","type":"text/plain"},"key":"projectId","value":"<string>"}],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"schema type not provided","key":"uuid"}]},"method":"GET"},"description":"ProjectController_listBeneficiaries","summary":"ProjectController_listBeneficiaries","method":"get","path":"/v1/projects/{uuid}/beneficiaries","hashId":"project-controller-list-beneficiaries","servers":[],"permalink":"/api/rahat-core/project-controller-list-beneficiaries","previous":{"title":"ProjectController_updateStatus","permalink":"/api/rahat-core/project-controller-update-status"},"next":{"title":"ProjectController_addSettings","permalink":"/api/rahat-core/project-controller-add-settings"}}')}}]);