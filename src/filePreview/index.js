import './index.less';
// 类-步骤条组件
export default class FuFilePreview {
    // 构造函数
    constructor(id) {
        this.id = id;
        this.info = {
            fileId: '875685863324321',
            fileName: '系统组件文档.pdf',
            fileTotalPage: 300,
            fileSrcArr: [
                'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg',
                'http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg',
                'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg',
            ]
        }
    }
    // 成员方法-初始化
    init(config) {
        this.info = {
            fileId: config.fileId,
            fileName: config.fileName,
            fileTotalPage: config.totalPage,
            fileSrcArr: [
                'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg',
                'http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg',
                'http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg',
            ]
        }
        this.render();
        this.loadImg();
    }
    // 加载图片
    loadImg() {
        let num = document.getElementsByTagName('img').length;
        let img = document.getElementsByTagName("img");
        let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
        lazyload(); //页面载入完毕加载可是区域内的图片
        window.onscroll = lazyload;
        function lazyload() { //监听页面滚动事件
            let seeHeight = document.documentElement.clientHeight; //可见区域高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
            for (let i = n; i < num; i++) {
                if (img[i].offsetTop < seeHeight + scrollTop) {
                    if (img[i].getAttribute("src") == "default.jpg") {
                        img[i].src = img[i].getAttribute("data-src");
                    }
                    n = i + 1;
                }
            }
        }
    }
    // 绘制HTML结构
    render() {
        let tag = 
        `<div id="fu_filePreview" class="fu-filePreview">
            <div class="fu-filePreview-top">
                <div class="fu-filePreview-info">
                    <div class="info-left">
                        <span class="imgIcon"><i class="fu-iconfont">&#xe6a8;</i></span>
                        总共
                        <span class="imgTotalPage">${this.info.fileTotalPage}</span>
                        页
                        <span class="imgName"></span>
                    </div>
                    <span class=fileName>${this.info.fileName}</span>
                    <div class="info-right">
                        <ul>
                            <li id="fu_filePreview_close" class="close"><i class="fu-iconfont">&#xe6b7;</i></li>
                            <li class="print" style="display: none"><i class="fu-iconfont">&#xe6c9;</i></li>
                            <li id="fu_filePreview_download" class="download"><i class="fu-iconfont">&#xe626;</i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fu-filePreview-content">
                <div class="fu-filePreview-img" >
                    <ul id="content-pages">
                        ${this.renderImg()}
                    </ul>
                </div>
            </div>
            <div class="fu-filePreview-toolbar">
                <ul>
                    <li class="pre"><i></i></li>
                    <li class="large"><i>+</i></li>
                    <li class="narrow"><i>-</i></li>
                    <li class="next"><i></i></li>
                </ul>
            </div>
            <div class="fu-filePreview-loading">
                <h2>loading...</h2>
            </div>
        </div>`;
        document.getElementById(this.id).innerHTML = tag;        
    }
    // 渲染图片
    renderImg() {
        let str='';  
        for (let i in this.info.fileSrcArr){  
            str += `<li><img src="default.jpg" data-src=${this.info.fileSrcArr[i]} alt="图片1" /><i>1</i></li>`;
        }  
        return str;
    } 
}