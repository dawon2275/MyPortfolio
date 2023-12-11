$('.hom').on('mouseover',function(){
    $('.tree').attr('src','img/palm2.png')
})
$('.hom').on('mouseout',function(){
    $('.tree').attr('src','img/palm.png')
})


$(function() {
    let tab = $('.tab li');

    tab.on('click', function(){
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);

        //console.log(idx)
        //console.log(tab_cont)
        //1. 클릭된 li에 on 클래스 추가
        $(this).addClass('on');

        //현재 클릭된 li의 형제요소들은 클래스 제거
        $(this).siblings().removeClass('on')

        //tab_content에도 add/remove클래스 적용
        tab_cont.addClass('on')
        tab_cont.siblings().removeClass('on');
    })
    
    $(function() {
        $('.tab_content').stop().animate({
            top: 0,
            opacity: 1
        },1000)
    })
    

});

/* var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
}); */

$(function () {
    $('.menu-trigger').on('click', function (){
        $(this).css('display','none')
        $('.moMenuBg').css('display','block')
        $('.moMenuList').stop().animate({
            right : '0'
        },200)
        $('.close').css('display', 'block')
    })
    $('.close').on('click', function (){
        $('.menu-trigger').css('display','block')
        $('.moMenuBg').css('display','none')
        $('.moMenuList').stop().animate({
            right : '-45%'
        },200)
        $('.close').css('display', 'none')
    })
})