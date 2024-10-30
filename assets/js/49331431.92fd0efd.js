"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[3408],{632596:function(e){e.exports=JSON.parse('{"operationId":"RolesController_createRole","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","example":"Manager"},"isSystem":{"type":"boolean","example":false},"permissions":{"type":"object","example":"{\\"user\\":[\\"manage\\",\\"read\\"]}"}},"required":["name","isSystem","permissions"]}}}},"responses":{"201":{"description":""}},"tags":["Roles & Permissions"],"security":[{"JWT":[]}],"postman":{"name":"Roles Controller create Role","description":{"type":"text/plain"},"url":{"path":["v1","roles"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"name\\": \\"<string>\\",\\n    \\"isSystem\\": \\"<boolean>\\",\\n    \\"permissions\\": \\"<object>\\"\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"RolesController_createRole","summary":"RolesController_createRole","method":"post","path":"/v1/roles","hashId":"roles-controller-create-role","servers":[],"permalink":"/api/rahat-core/roles-controller-create-role","previous":{"title":"RumsanAppController_listConstants","permalink":"/api/rahat-core/rumsan-app-controller-list-constants"},"next":{"title":"RolesController_listRoles","permalink":"/api/rahat-core/roles-controller-list-roles"},"jsonRequestBodyExample":{"name":"Manager","isSystem":false,"permissions":"{\\"user\\":[\\"manage\\",\\"read\\"]}"}}')}}]);