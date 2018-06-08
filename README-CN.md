# FuFilePreview

一个简单好用的类似图片查看的文件预览组件

[示例](https://fund-ui.github.io/fu-filePreview/dist/index.html)

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

## 3.安装

当然我们更加推荐你使用 `npm` 与 `nodejs` 在本地进行安装构建

``` npm
npm install fu-filePreview --save
```



