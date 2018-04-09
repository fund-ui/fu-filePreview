import FuFilePreview from './filePreview';

var filePreview = new FuFilePreview("app");
filePreview.init({
    url: '/FileManage/Preview',
    fileId: '27ye382d7gwuiid22',
    fileName: '小邓体检.pdf',
    fileDownloadUrl: '/FileManage/DownLoadByFileId',
    totalPage: 30,
    allowDownload: false,
    x_y: 1 //初始宽高比
})