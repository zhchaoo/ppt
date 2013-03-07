// 在前面显示的元素，隐藏在后面的元素
var eleBack =null, eleFront =null, eleList =null;
// 纸牌元素们 
eleList = $(".list");

// 确定前面与后面元素
var funBackOrFront = function()
{
    eleList.each(function()
            {
                if($(this).hasClass("out")) {
                    eleBack = $(this);
                } else {
                    eleFront = $(this);
                }
            });
};
funBackOrFront();

var boxList = $(".box");
boxList.each(function()
        {
            $(this).bind("click", function(){
                // 切换的顺序如下
                // 1. 当前在前显示的元素翻转90度隐藏, 动画时间225毫秒
                // 2. 结束后，之前显示在后面的元素逆向90度翻转显示
                // 3. 完成翻面效果
                eleList = $(this).find(".list");

                funBackOrFront();

                eleFront.addClass("out").removeClass("in");
                setTimeout(function(){
                    eleBack.addClass("in").removeClass("out");
                    // 重新确定正反元素
                    funBackOrFront();
                }, 225);
                return false;
            });
        });
