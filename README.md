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

### react component 组件化构建

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
