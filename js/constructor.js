/*
함수형 코드를 객체지향형 코드로 변경하는 순서 
 
1.모든 코드를 document.ready 구문 밖으로 뽑아낸다 
2. 생성자함수를 만듬 
3. 생성자함수의 프로토타입에 init, bindingEvent메서드 등록 
4. init메서드 안쪽에 모든 전역변수를 집어넣은 후 var 대신 this. 붙여줌
5. init 메서드에 상수값을 외부에서 전달받은 파라미터로 연결 
6. init메서드 생성자 함수 안쪽에서 호출 
7. 이벤트 바인딩 부분을 bindingEvent함수 안에 넣기 
8. bindingEvent안쪽에 있는 변수들을 this로 바꿔줌 
9. 주의사항 - bindingEvent안쪽에서 인스턴스를 this --> 지역변수에 옮겨담음 
10. 일반함수 정의부는 그냥 프로토타입에 등록 
11. 마지막으로 document.reay안쪽에서 new 연산자로 생성자 함수 활성화 
*/

function Tab(){
    this.init();
    this.bindingEvent();
}

Tab.prototype.init = function(){
    this.tabButton = $(".tab_menu ul li a");
    this.tabBox = $(".tab_menu .group > div");
}

Tab.prototype.bindingEvent = function(){
    var inst = this;

    inst.tabButton.on("click", function(e){
        e.preventDefault();
        inst.activation(this);
    })
}

Tab.prototype.activation = function(index){
    var target = $(index).attr("href");

    this.tabButton.removeClass("on");
    $(index).addClass("on");

    this.tabBox.hide();
    $(target).show();
}