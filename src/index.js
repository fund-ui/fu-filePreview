import FilePreview from './filePreview';

var myFilePreview = new FilePreview({
    fileId: '875685863324321',
    fileName: 'Doker实践指南.pdf',
    fileLazyLoad: true,
    fileTotalPage: 371,
    fileSrcArr: (function (fileTotalPage) {
        var item = 'http://10.1.1.21:4000/FileManage/Preview?fileId=5f438842-03c0-460c-8062-9623bf156a4e&page='
        var fileSrcArr = new Array();
        for (let index = 0; index < fileTotalPage; index++) {
            fileSrcArr.push(item + (index + 1));
        }
        return fileSrcArr;
    })(371)
});
myFilePreview.renderDOM(document.getElementById("app"));
myFilePreview.init();