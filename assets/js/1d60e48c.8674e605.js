"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[9865],{716041:function(e){e.exports=JSON.parse('{"operationId":"UsersController_create","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","example":"Jane","description":"The full name of the User"},"gender":{"type":"string","example":"FEMALE","description":"Gender of the User"},"email":{"type":"string","example":"jane@rumsan.com","description":"Email of the User"},"phone":{"type":"string","example":"9841234567","description":"Phone number of the User"},"wallet":{"type":"string","example":"0x1234567890abcdef","description":"Wallet address of the User"},"roles":{"example":["admin","user"],"description":"Roles of the User","type":"array","items":{"type":"string"}}},"required":["name","gender","email","phone","wallet","roles"]}}}},"responses":{"201":{"description":""}},"tags":["Users"],"security":[{"JWT":[]}],"postman":{"name":"Users Controller create","description":{"type":"text/plain"},"url":{"path":["v1","users"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"name\\": \\"<string>\\",\\n    \\"gender\\": \\"<string>\\",\\n    \\"email\\": \\"<string>\\",\\n    \\"phone\\": \\"<string>\\",\\n    \\"wallet\\": \\"<string>\\",\\n    \\"roles\\": [\\n        \\"<string>\\",\\n        \\"<string>\\"\\n    ]\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"UsersController_create","summary":"UsersController_create","method":"post","path":"/v1/users","hashId":"users-controller-create","servers":[],"permalink":"/api/rahat-core/users-controller-create","previous":{"title":"UsersController_list","permalink":"/api/rahat-core/users-controller-list"},"next":{"title":"UsersController_getMe","permalink":"/api/rahat-core/users-controller-get-me"},"jsonRequestBodyExample":{"name":"Jane","gender":"FEMALE","email":"jane@rumsan.com","phone":"9841234567","wallet":"0x1234567890abcdef","roles":["admin","user"]}}')}}]);