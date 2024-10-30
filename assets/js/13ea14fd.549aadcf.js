"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[1769],{909212:function(e){e.exports=JSON.parse('{"operationId":"UsersController_removeRoles","parameters":[{"name":"uuid","required":true,"in":"path","description":"Unique identifier","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","example":["admin","user"],"items":{"type":"string"}}}}},"responses":{"200":{"description":""}},"tags":["Users"],"security":[{"JWT":[]}],"postman":{"name":"Users Controller remove Roles","description":{"type":"text/plain"},"url":{"path":["v1","users",":uuid","roles"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) Unique identifier","type":"text/plain"},"type":"any","value":"<string>","key":"uuid"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"DELETE","body":{"mode":"raw","raw":"[\\n    \\"<string>\\",\\n    \\"<string>\\"\\n]"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"UsersController_removeRoles","summary":"UsersController_removeRoles","method":"delete","path":"/v1/users/{uuid}/roles","hashId":"users-controller-remove-roles","servers":[],"permalink":"/api/rahat-core/users-controller-remove-roles","previous":{"title":"UsersController_addRoles","permalink":"/api/rahat-core/users-controller-add-roles"},"next":{"title":"VendorsController_registerVendor","permalink":"/api/rahat-core/vendors-controller-register-vendor"},"jsonRequestBodyExample":["admin","user"]}')}}]);