init(".tab_menu ul li a");
bindingEvent();

function init(el){
    tabButton = $(el);
    tabBox = $(".tab_menu .group > div ");
}

function bindingEvent(){
    tabButton.on("click", function(e){
        e.preventDefault();
        activation(this);
    })
}

function activation(i){
    var target = $(i).attr("href");

    tabButton.removeClass("on");
    $(i).addClass("on");

    tabBox.hide();
    $(target).show();
}