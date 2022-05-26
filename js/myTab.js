/* 
1. 즉시실행함수로 생성자함수코드 모두를 감싸준다  
2. 플러그인코드를 생성하고 생성자함수의 인스턴스를 생성
3-1. index에서 플러그인 호출구문 작성하고 선택자를 넣는다 
3-2. 플러그인 코드에서 this로 매칭 
4. 생성자함수에서 selector부분을 $("#tab1")에 매칭해서 수정 - $(selector) -> selector   
 
5. option 추가하기 위해서 $.default로 옵션만들고 플러그인안에서 $.extend로 옵션합치기 
6. 파라미터에 opt추가하고, 생성자함수에도 option파라미터 추가
*/


(function ($) {
    $.default = {
        active_class :"active"
    }

    $.fn.myTab = function(opt){
        option = $.extend({}, $.defaults, opt);

        new Tab(this, option);
        return this;
    }

    function Tab(selector, option) {
        this.init(selector, option);
        this.bindingEvent();
    }

    Tab.prototype.init = function(selector, option){
        this.opt = option;
        this.tabButton = selector;
        this.tabBox = $(".tab_menu .group > div");
    }

    Tab.prototype.bindingEvent = function () {
        var inst = this;

        inst.tabButton.on("click", function (e) {
            e.preventDefault();
            inst.activation(this);
        })
    }

    Tab.prototype.activation = function (index) {
        var target = $(index).attr("href");

        this.tabButton.removeClass("on");
        $(index).addClass("on");

        this.tabBox.hide();
        $(target).show();
    }

})(jQuery);