import './index.less';
import default_Img from '../asset/default.png';
import $ from 'jquery';

export default class FilePreview {
    constructor(option){
        this.config = {
            fileId: '875685863324321',
            fileName: '系统组件文档.pdf',
            fileTotalPage: 100,
            fileSrcArr: [],
            x_y: 1
        }; 
        this.cache = '';
        this.config = $.extend(this.config, option || {});
    }
    // 绘制DOM节点
    renderDOM(dom){
        let tag =
            `<div id="fu_filePreview" class="fu-filePreview">
            <div class="fu-filePreview-top">
                <div class="fu-filePreview-info">
                    <div class="info-left">
                        <span class="imgIcon"><i class="fu-iconfont">&#xe6a8;</i></span>
                        总共
                        <span class="imgTotalPage">${this.config.fileTotalPage}</span>
                        页
                        <span class="imgName"></span>
                    </div>
                    <span class=fileName>${this.config.fileName}</span>
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
                        ${this._renderImg()}
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
        dom.innerHTML = tag;
    }
    // 初始化
    init(){
        this._setXY();
        this._onChangeSize();
        this._onDownLoad();
        this._onClose();
        this._lazyload();
        window.onscroll = this._throttle(this._lazyload, 500, 1000);
    }
    // 渲染图片
    _renderImg() {
        let str = '';
        for (let i in this.config.fileSrcArr) {
            str += `<li><img id=${i} class='my-photo' src=${default_Img} data-src=${this.config.fileSrcArr[i]} alt="图片1" /><i>1</i></li>`;
        }
        return str;
    }
    // 获取初始宽高比
    _setXY() {
        let img = document.getElementsByTagName("img")[0];
        img.onload = () => {
            //获取宽高比例
            let nWidth, nHeight;
            if (img.naturalWidth) {
                // 现代浏览器
                nWidth = img.naturalWidth;
                nHeight = img.naturalHeight;
            } else {
                // IE6/7/8
                nWidth = img.width;
                nHeight = img.height;
            }
            this.config.x_y = nHeight / nWidth;
            $('img').css('width', 900);
            $('img').css('height', 900 * this.config.x_y);
        }
    }
    // 成员方法-放大缩小功能
    _onChangeSize() {
        let cunrrentH = $('img').height();
        $('.large').on('click', () => {
            if (cunrrentH < 1800) {
                cunrrentH = cunrrentH + 100
            } else {
                cunrrentH = cunrrentH
            }
            $('img').css('width', cunrrentH / this.config.x_y)
            $('img').css('height', cunrrentH)
        })
        $('.narrow').on('click', () => {
            if (cunrrentH > 1200) {
                cunrrentH = cunrrentH - 100
            } else {
                cunrrentH = cunrrentH
            }
            $('img').css('width', cunrrentH / this.config.x_y)
            $('img').css('height', cunrrentH)
        })
    }
    // 成员方法-绑定文件下载事件
    _onDownLoad() {
        let downLoadDOM = document.getElementById('fu_filePreview_download');
        downLoadDOM.addEventListener('click', (event) => {
            location.href = this.config.fileDownloadUrl;
        })
    }
    // 成员方法-绑定关闭预览事件
    _onClose() {
        let closeDOM = document.getElementById('fu_filePreview_close');
        closeDOM.addEventListener('click', (event) => {
            window.opener = null;
            window.open('', '_self');
            window.close();
        })
    }
    // 成员方法-懒加载
    _lazyload() {
        let num = document.getElementsByTagName('img').length;
        let img = document.getElementsByTagName("img");
        let n = 0; // 图片加载到的位置，避免每一次从第一张图片开始
        let seeHeight = window.innerHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条距离顶部高度
        let preLoadHeight = 1200;
        for (let i = n; i < num; i++) {
            if ($(img).eq(i).offset().top < seeHeight + scrollTop + preLoadHeight) {
                let logs = preLoadHeight;
                console.log($('img').eq(i).offset().top, seeHeight, scrollTop, preLoadHeight);
                if (img[i].getAttribute("src") == default_Img) {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
    }
    // 成员方法-函数节流
    _throttle(fun, delay, time) {
        let timeout,
            startTime = new Date();
        return function () {
            let context = this,
                args = arguments,
                curTime = new Date();
            clearTimeout(timeout);
            // 如果达到了规定的触发时间间隔，触发 handler
            if (curTime - startTime >= time) {
                fun.apply(context, args);
                startTime = curTime;
                // 没达到触发间隔，重新设定定时器
            } else {
                timeout = setTimeout(function () {
                    fun.apply(context, args);
                }, delay);
            }
        };
    }
}