$(document).ready(function(){
    $('.btn-primary').on('click', function(){
        $('html').bind('mousewheel', function(event){
            if(event.originalEvent.wheelDelta /120 > 0) {
                //console.log('scrolling up !');
                $('body').toggleClass('bg-dark');
                $('table').toggleClass('bg-dark');
            }
            else{
                //console.log('scrolling down !');
                $('body').toggleClass('bg-dark');
                $('table').toggleClass('bg-dark');
            }
        });
        navWidth();
        $('.geografie').attr('src', 'img/crop-1181470-p201604210609401_800x5401.jpg');
        $('.geografie').bind('click', imgChange);
        titleColor();
        fontSize();
        titleEffect();
        tablePadding();
        boriiiiis();
        titlebgOpacity();
    });
});


function navWidth(){
    let deviceWidth = window.innerWidth - 16.6;
    //console.log(deviceWidth);
    $('.navbar').css({"margin-left":"0"});
    $('nav').animate({width: deviceWidth}, 2000).animate({width: deviceWidth / 4}, 2000);
    //console.log(deviceWidth);
    setTimeout(navWidth, 4000);
}

function imgChange() {
    $('.geografie').attr('src', 'img/5241815_kralovna-alzbeta-ii-zhave-drby-pes-smrt-v21.jpg');
    $('.img-rotate').toggleClass('img-hidden').addClass('spinEffect');
    imgMove();
}

function imgMove() {
    let deviceWidth = window.innerWidth - 16.6;
    $('.img-rotate').delay(500).animate({bottom: '2700px'}, 800).delay(500).animate({left: deviceWidth - deviceWidth / 2}, 400).delay(500).animate({bottom: '0px'}, 800).delay(500).animate({left: '0px'}, 400);
    setTimeout(imgMove, 4400);
}

function titleColor() {
    $('h2').toggleClass('secondary-title aside-title bg-danger');
    setTimeout(titleColor, 500);
}

function fontSize() {
    $('.parent').children('div').addClass('fontSizeEffect');
}

function titleEffect() {
    $('.title').text('Velká británie');
    setTimeout(function(){$('.title').text('vElká británie').css({"color":"black"})},200);
    setTimeout(function(){$('.title').text('veLká británie').css({"color":"yellow"})},400);
    setTimeout(function(){$('.title').text('velKá británie').css({"color":"orange"})},600);
    setTimeout(function(){$('.title').text('velkÁ británie').css({"color":"pink"})},800);
    setTimeout(function(){$('.title').text('velká Británie').css({"color":"red"})},1000);
    setTimeout(function(){$('.title').text('velká bRitánie').css({"color":"green"})},1200);
    setTimeout(function(){$('.title').text('velká brItánie').css({"color":"darkblue"})},1400);
    setTimeout(function(){$('.title').text('velká briTánie').css({"color":"gold"})},1600);
    setTimeout(function(){$('.title').text('velká britÁnie').css({"color":"wheat"})},1800);
    setTimeout(function(){$('.title').text('velká britáNie').css({"color":"indianred"})},2000);
    setTimeout(function(){$('.title').text('velká británIe').css({"color":"orchid"})},2200);
    setTimeout(function(){$('.title').text('velká britániE').css({"color":"saddlebrown"})},2400);
    setTimeout(function(){titleEffect()},2600);
}

function tablePadding() {
    $('th, td').addClass('paddingEffect');
}

function boriiiiis() {
    $('.vlajka').attr('src', 'img/giphy.gif').addClass('teaEffect');
    $('.znak').attr('src', 'img/3759869088_d330f0b955_b.jpg').addClass('borisEffect');
    $('.vlajka-text').text('Čaj o páté');
    $('.znak-text').text('Boriiiiiiis');
}

function titlebgOpacity() {
    $('header').addClass('opacityEffect');
}