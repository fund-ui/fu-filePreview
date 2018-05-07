# fu-filePreview

An ui component designed for file preview

## usage

``` html

<div id="app"></div>

```

### 全局引入

```html
<script src="https://dufozrddxzwdn.cloudfront.net/2.0.3/fu-filePreview.min.js"></script>
<script src="https://dufozrddxzwdn.cloudfront.net/2.0.3/fu-filePreview.js"></script>
```
### with pure js

``` js
var myFilePreview = new FilePreview({
    fileName: '小邓体检.pdf',
    totalPage: 100,
    downLoad: 'http://douban-img/hdh/ddjd?fileId=832983hjj',
    print: false,
    share: false,
    page: [{
        index: 1,
        url: 'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg'
    }, {
        index: 2,
        url: 'http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg'
    }, {
        index: 3,
        url: 'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg'
    }]
});
myFilePreview.renderDOM(document.getElementById("app"));
myFilePreview.init()


```

### with jquery

```js
    $('#app').filePreview({
        ...
    })
```

### with react

``` js

import 'fu-filePreview/asset/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FilePreview from 'fu-FilePreview';

const handle = () => {
    return "hi i react"
}
class FuFilePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: [{...}],
        };
    }
    render() {
        return (
            <div className="fu-filePreview">
                <FilePreview></FilePreview>
            <div>
        );
    }
}

ReactDOM.render(
    <FuFilePreview fileName="小邓体检.pdf" totalPage={100} ></FuFilePreview>,
    document.getElementById("app"))

```

## cshtml

``` html
@{
    ViewBag.Title = "FilePreview";
    Layout = null;
}
<title>@ViewBag.FileName</title>
<link rel="icon" type="image/png" href="/Images/faviconCEIAM.ico">
<div id="app"></div>
<script src="~/Scripts/fu-filePreview/dist/filePreview.js"></script>
<script>
    var myFilePreview = new FilePreview({
        fileId: "@ViewBag.FileId",
        fileName: "@ViewBag.FileName",
        fileTotalPage: "@ViewBag.TotalPage",
        fileDownloadUrl: "./DownLoadByFileId?fileId=" + "@ViewBag.FileId",
        fileSrcArr: (function (fileTotalPage) {
            var item = './Preview?fileId=' + "@ViewBag.FileId" + "&page=";
            var fileSrcArr = new Array();
            for (var index = 0; index < fileTotalPage; index++) {
                fileSrcArr.push(item + (index + 1));
            }
            return fileSrcArr;
        })("@ViewBag.TotalPage")
    });
    myFilePreview.renderDOM(document.getElementById("app"));
    myFilePreview.init();
</script>
```
