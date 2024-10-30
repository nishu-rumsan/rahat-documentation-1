"use strict";(self.webpackChunkrahat_documentation=self.webpackChunkrahat_documentation||[]).push([[6270],{933404:function(e){e.exports=JSON.parse('{"operationId":"SettingsController_udpdate","parameters":[{"name":"name","required":true,"in":"path","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"type":"object","example":{"host":"smtp.gmail.com","Port":465,"secure":true,"username":"test","password":"test"},"description":"Settings value. Can be string | number | boolean | object"}},"required":["value"]}}}},"responses":{"200":{"description":""}},"postman":{"name":"Settings Controller udpdate","description":{"type":"text/plain"},"url":{"path":["v1","settings",":name"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"name"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n    \\"value\\": \\"<object>\\"\\n}"}},"description":"SettingsController_udpdate","summary":"SettingsController_udpdate","method":"patch","path":"/v1/settings/{name}","hashId":"settings-controller-udpdate","servers":[],"permalink":"/api/rahat-core/settings-controller-udpdate","previous":{"title":"SettingsController_getPublic","permalink":"/api/rahat-core/settings-controller-get-public"},"next":{"title":"UsersController_list","permalink":"/api/rahat-core/users-controller-list"},"jsonRequestBodyExample":{"value":{"host":"smtp.gmail.com","Port":465,"secure":true,"username":"test","password":"test"}}}')}}]);