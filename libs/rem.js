/**
 * Created by lenovo on 2016/10/27.
 * 动态布局
 */
export  default (function () {
    //字体比例--------18.75--------
  // eslint-disable-next-line
    var fontRatio = 18.75
        , windowWidth
        , rootFontSize
        ;
    function modifyRootFontSize()
    {
        windowWidth = document.documentElement.clientWidth;  /*body对应的宽度*/
        if(windowWidth > 640) windowWidth=640;
        rootFontSize = windowWidth / 12;
        document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + rootFontSize + 'px';
    }
    modifyRootFontSize();
    window.onresize = function ()    /*窗口改变时候执行*/
    {
        modifyRootFontSize();
    }
})();
