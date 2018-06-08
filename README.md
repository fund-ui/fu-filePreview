<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://avatars2.githubusercontent.com/u/37236679?s=200&v=4" alt="Vue logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://saucelabs.com/u/vuejs"><img src="https://saucelabs.com/browser-matrix/vuejs.svg" alt="Sauce Test Status"></a>
</p>

# FuFilePreview

一个简单好用的类似图片查看的文件预览组件 [示例](https://fund-ui.github.io/fu-filePreview/dist/index.html)

![Demo](./src/asset/demo.gif)

## 1. 简介

在文档管理系统中，我们上传 `PDF` `Word` 等格式的文档后，都希望通过在线预览的方式查看这些文档，目前主要有两种方式：

- 使用 Mozzilia 开源的 `PDF.js` 对文档进行查看，由于该插件使用的是 `HTML5` 技术，所以对低版本浏览器的支持并不友好，而且不支持 `Word`文件的在线预览。

- 编写服务端将已上传的 `PDF` `Word` 等格式的文档`解析拆分`成图片并存储，在前端预览时只需依次响应图片资源，前端通过类似`图片预加载`的方式，查看图片，达到同样的`文件预览效果`, 改方法浏览器兼容好，但是文件较大时，可能耗费较多的服务器性能去解析文件。

## 2. 快速开始

该项目已发布 `cdnjs`， 你可直接将插件引入页面使用

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/fu-filePreview/1.2.0/fu-filePreview.min.js"></script>
```
Tips: 这里无需单独引入 `css` 样式文件，因为我们已使用 `webpack` 将样式一并构建进 `javascript` 中

## 3. 安装

当然我们更加推荐你使用 `npm` 与 `nodejs` 在本地进行安装构建

``` npm
npm install fu-filePreview --save
```

## 4. 使用

你可以直接新建一个 `html` 页面并实例化组件，推荐`面向对象`的写法配置必备的参数

``` html
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>
        首页
    </title>
</head>
<body>
    <div id="app"></div>
</body>
<script>
    var myFilePreview = new FuFilePreview({
        fileId: "wj871287",
        fileName: "Redux指南.pdf",
        fileTotalPage: 50,
        fileDownloadUrl: "https://raw.githubusercontent.com/fund-ui/fu-filePreview/d570800bf87a87c464c4a266e58a933b71fb524a/src/asset/redux-in-chinese.pdf",
        fileSrcArr: [
            "https://github.com/fund-ui/fu-filePreview/blob/master/src/asset/img/1.jpeg",
            "https://github.com/fund-ui/fu-filePreview/blob/master/src/asset/img/2.jpeg",
            "https://github.com/fund-ui/fu-filePreview/blob/master/src/asset/img/3.jpeg",
            "https://github.com/fund-ui/fu-filePreview/blob/master/src/asset/img/4.jpeg",
            ...
        ]
    });
    myFilePreview.renderDOM(document.getElementById("app"));
    myFilePreview.init();
</script>
</html>
```



