var tabButton = $(".tab_menu ul li a");
var tabBox = $(".tab_menu .group > div ")

tabButton.on("click", function (e) {
    // 클릭 이벤트 - 기본 동작 방지
    e.preventDefault();

    // 클릭한 버튼의 속성 값을 구해서
    // 해당 값을 변수에 담아 박스 요소에 이용
    var target = $(this).attr("href"); // ex) #tab1, #tab2, #tab3 

    // 클릭한 버튼은 활성화, 다른 버튼은 비활성화
    tabButton.removeClass("on");
    $(this).addClass("on");

    // 해당 박스는 활성화, 다른 박스는 비활성화
    tabBox.hide();
    $(target).show();
    // 변수를 활용해 박스 불러옴
    // tab1 탭을 누르면 #tab1에 들어가게 됨
});