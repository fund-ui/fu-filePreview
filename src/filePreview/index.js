import './index.less';
import $ from 'jquery';
import LazyLoad from 'vanilla-lazyload';

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
        this._lazyload();
        this._setXY();
        this._changeImgSize();
    }
    // 渲染图片
    _renderImg() {
        let str = '';
        for (let i in this.config.fileSrcArr) {
            str += `<li><img class='my-photo' data-src=${this.config.fileSrcArr[i]} alt="图片1" /><i>1</i></li>`;
        }
        return str;
    }
    // 实例化懒加载插件
    _lazyload() {
        new LazyLoad({
            callback_load: (img) => {
                //console.log(img)
            }
        });
    }
    // 获取初始宽高比
    _setXY() {
        let img = document.getElementsByTagName("img")[0];
        img.onload = () => {
            //获取宽高比例
            let nWidth, nHeight;
            if (img.naturalWidth) { // 现代浏览器
                nWidth = img.naturalWidth;
                nHeight = img.naturalHeight;
            } else { // IE6/7/8
                nWidth = img.width;
                nHeight = img.height;
            }
            this.config.x_y = nHeight / nWidth;
            $('img').css('width', nWidth);
            $('img').css('height', nHeight);
        }
    }
    // 交互-放大缩小值在900px到1200px之间
    _changeImgSize() {
        var cunrrentH = $('img').height();
        $('.large').on('click', () => {
            if (cunrrentH < 1500) {
                cunrrentH = cunrrentH + 100
            } else {
                cunrrentH = cunrrentH
            }
            $('img').css('width', cunrrentH / this.config.x_y)
            $('img').css('height', cunrrentH)
            console.log(this.config.x_y)
        })
        $('.narrow').on('click', () => {
            if (cunrrentH > 1200) {
                cunrrentH = cunrrentH - 100
            } else {
                cunrrentH = cunrrentH
            }
            $('img').css('width', cunrrentH/this.config.x_y)
            $('img').css('height', cunrrentH)
        })
    }
}