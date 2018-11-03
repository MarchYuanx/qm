# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


- 文件上传
    云开发 云服务器 ip(cdn 绑定域名),硬盘(文件存储)
    CPU计算 数据存储功能(mongodb), node(npm node v8.0> koa) 
    运行环境及操作系统(linux centos)

- 云服务 全部sdk化
    数据存储 wx.cloud.database
    文件存储 wx.cloud.uploadFile
        文件流 出口(path) 入口(path)  深深的硬盘
        wx.cloud.uploadFile({
            cloudPath: ,//打开文件可写流
            filePath: ,//打开文件可读流
        })
    云函数 wx.cloud.callFunction
    wx.cloud.websdk



 