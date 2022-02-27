//라이트 박스
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 300,
    progressBar: true
});

//윈도우 팝업
$(".window").click(function(e) {
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scroollbars, fullscreen
    window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scroollbars=0, menubar=0");
});

//레이어 팝업
$(".layer").click(function(e) {
    e.preventDefault();
    //$("#layer").css("display", "block"); 디스플레이 속성을 block로 바꿈.
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slideDown();
});
$("#layer .close").click(function(e) {
    e.preventDefault();
    //$("#layer").css("display", "block"); 디스플레이 속성을 block로 바꿈.
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slidUp();
});

//탭메뉴 
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide(); //tab_menu에 있는 ul을 숨김.
$tab_list.find("li.active > ul").show(); //tab_menu에 있는 active 밑에 있는 ul은 보여줌.

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    //클릭시 클릭한 ul을 보여주고 li태그에 active란 클래스를 부여후 다른 li에서 active를 지우고 그 안에 있는 ul에 적힌 내용을 숨김.
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
//작업 순서 : html 마크업 셋팅 -> css 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$(".play").click(function() {
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function() {
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function() {
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function() {
    $(".gallery_img").slick("slickNext");
});


//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault(); //클릭시 스크롤바 이동하는것을 차단함.
    //$("#cont_nav").css("display", "block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn(); //서서히 나타나는 효과
    //$("#cont_nav").slideDown(); //슬라이드 애니메이션
    //$("#cont_nav").toggle(); //나타나다가 없어짐.
    //$("#cont_nav").fadeToggle(); //서서히 나타나다가 없어짐.
    $("#cont_nav").slideToggle(200); //서서히 나타나다가 없어지는 슬라이드 애니메이션
    $(this).toggleClass("on"); //클래스에 on붙이기.
});