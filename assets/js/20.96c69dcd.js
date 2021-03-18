(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{331:function(e,t,s){e.exports=s.p+"assets/img/eventmesh-test-structure.74a6b4c8.png"},403:function(e,t,s){"use strict";s.r(t);var a=s(42),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",[e._v("如何运行eventmesh-sdk-java演示")]),e._v(" "),a("blockquote",[a("p",[e._v("Eventmesh-sdk-java作为客户端，与eventmesh-runtime通信，用于完成消息的发送和接收。")]),e._v(" "),a("p",[e._v("Eventmesh-sdk-java支持异步消息和广播消息。异步消息表示生产者只发送消息，不关心回复消息。广播消息表示生产者发送一次消息，所有订阅广播主题的消费者都将收到消息")]),e._v(" "),a("p",[e._v("Eventmesh-sdk-java支持HTTP和TCP协议。")])]),e._v(" "),a("p",[e._v("TCP 和 Http 示例都在"),a("strong",[e._v("eventmesh-test")]),e._v("模块下")]),e._v(" "),a("p",[a("strong",[e._v("注意")]),e._v(":下载了源代码后，需要将"),a("code",[e._v("/conf/application.properties")]),e._v(" 和 "),a("code",[e._v("/conf/log4j2.xml")]),e._v(" 复制到 "),a("code",[e._v("resources")]),e._v(" 目录下")]),e._v(" "),a("p",[a("img",{attrs:{src:s(331),alt:"image-test-structure"}})]),e._v(" "),a("h3",{attrs:{id:"_1-tcp-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp-demo"}},[e._v("#")]),e._v(" 1. TCP DEMO")]),e._v(" "),a("h4",[e._v("异步消息")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建主题FT0-e-80010000-01-1,可以通过rocketmq-console或者rocketmq tools 命令")])]),e._v(" "),a("li",[a("p",[e._v("启动消费者，订阅上一步骤已经创建的Topic")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.tcp.demo.AsyncSubscribe的主要方法\n")])])]),a("ul",[a("li",[e._v("启动发送端，发送消息")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.tcp.demo.AsyncPublish的主要方法\n")])])]),a("h4",[e._v("广播消息")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建主题FT0-e-80030000-01-3,可以通过rocketmq-console或者rocketmq tools 命令")])]),e._v(" "),a("li",[a("p",[e._v("启动消费端，订阅上一步骤已经创建的Topic")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.tcp.demo.AsyncSubscribeBroadcast的主要方法\n")])])]),a("ul",[a("li",[e._v("启动发送端，发送广播消息")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.tcp.demo.AsyncPublishBroadcast的主要方法\n")])])]),a("h3",{attrs:{id:"_2-http演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http演示"}},[e._v("#")]),e._v(" 2. HTTP演示")]),e._v(" "),a("blockquote",[a("p",[e._v("对于http，eventmesh-sdk-java对对于异步事件实现了发送与订阅")]),e._v(" "),a("p",[e._v("在演示中，Java类"),a("code",[e._v("LiteMessage")]),e._v("的"),a("code",[e._v("content")]),e._v("字段表示一个特殊的协议，因此，如果您要使用eventmesh-sdk-java的http-client，则只需设计协议的内容并在同一时间提供消费者的应用程序。")])]),e._v(" "),a("h4",[e._v("异步事件")]),e._v(" "),a("blockquote",[a("p",[e._v("生产者将事件发送给下游即可，无需等待响应")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("启动消费端，订阅Topic")]),e._v(" "),a("p",[e._v("异步事件消费端为spring boot demo，运行demo即可启动服务并完成Topic订阅")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.http.demo.sub.SpringBootDemoApplication的主要方法\n")])])]),a("ul",[a("li",[e._v("启动发送端，发送消息")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("运行com.webank.eventmesh.http.demo.AsyncPublishInstance的主要方法\n")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);