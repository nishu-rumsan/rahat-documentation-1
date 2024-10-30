"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[5930],{786424:function(e){e.exports=JSON.parse('{"operationId":"UsersController_changePassword","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","example":"Jane","description":"The full name of the User"},"gender":{"type":"string","example":"FEMALE","description":"Gender of the User"},"email":{"type":"string","example":"jane@rumsan.com","description":"Email of the User"},"phone":{"type":"string","example":"9841234567","description":"Phone number of the User"},"wallet":{"type":"string","example":"0x1234567890abcdef","description":"Wallet address of the User"}},"required":["name","gender","email","phone","wallet"]}}}},"responses":{"200":{"description":""}},"tags":["Users"],"security":[{"JWT":[]}],"postman":{"name":"Users Controller change Password","description":{"type":"text/plain"},"url":{"path":["v1","users","me","update-auth"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n    \\"name\\": \\"<string>\\",\\n    \\"gender\\": \\"<string>\\",\\n    \\"email\\": \\"<string>\\",\\n    \\"phone\\": \\"<string>\\",\\n    \\"wallet\\": \\"<string>\\"\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"UsersController_changePassword","summary":"UsersController_changePassword","method":"patch","path":"/v1/users/me/update-auth","hashId":"users-controller-change-password","servers":[],"permalink":"/api/rahat-core/users-controller-change-password","previous":{"title":"UsersController_updateMe","permalink":"/api/rahat-core/users-controller-update-me"},"next":{"title":"UsersController_get","permalink":"/api/rahat-core/users-controller-get"},"jsonRequestBodyExample":{"name":"Jane","gender":"FEMALE","email":"jane@rumsan.com","phone":"9841234567","wallet":"0x1234567890abcdef"}}')}}]);