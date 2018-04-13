# fu-filePreview

An ui component designed for file preview

## usage

``` html

<div id="app"></div>

```

``` js

var filePreview = new FuFilePreview("app");
filePreview.init({
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
})

```
