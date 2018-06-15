var stato=0;
var w;
var a=$("#row_photos");
var n="photos";
var h=$("#"+n);


/*--- LOADING ----*/


$("#fin, .fin_1, .fin_1 > img").ready(setTimeout(loading, 900))

function loading(){
  $("#wait").css('display', 'none');
  $(".fin_4").css('background-color', 'white');
}


/* CLICK INIZIALE */

$("#go-inside, #fin").on("click", function(){


  $("#titolo").removeClass("titolo_1").addClass("titolo_2");
  $("#go-inside").hide();
  $("#fin").removeClass("fin_1");
  $("#titolo").css('background-color', 'white');
  setTimeout(bordi, 1200);
  $("#fin_2").queue(function(){$("#fin_2").removeClass("fin_4").addClass("fin_5")});
  $(".slideshow_1").css('display', 'none');
  w=120;

  /*setTimeout(fin_3, 800);*/
  setTimeout(mostra_generale, 00);
  setTimeout(body_color, 900);

})

function bordi(){
  $("#fin").css('box-sizing', 'content-box').css('border', 'none').removeClass(".fin_1")
}


function fin_3(){
  $("#fin").removeClass("fin_2").addClass("fin_3");
}

function mostra_generale(){
  $(".topnav").css('display', 'block');

  $(a).css('visibility', 'visible');
  $(a).css('opacity', '1');
  $(a).css('display', 'block');
  $(h).css('border-left', '2px solid black').css('border-right', '2px solid black')

}
function body_color(){

  $("body").css("background-color", "white")


}



/* ---- MENù CON COMPARSA CONTENUTI --*/



var m;



$(".menu").on("click", function(){
m=a;

$(m).css('visibility', 'hidden');
$(m).css('opacity', '0.1');
$(m).css('display', 'none');
$(h).css('border-left', '2px solid transparent').css('border-right', '2px solid transparent');
n=this.id;
a=$("#row_" + n);
h=$("#"+n);
$(a).css('visibility', 'visible');
$(a).css('opacity', '1');
$(a).css('display', 'block');
$(h).css('border-left', '2px solid black').css('border-right', '2px solid black');

})


/* --- SLIDESHOW 1---*/

var i;
var j = $(".fin_1 > img");
var k = $("#Ph_n1 > .row_general > img");
var y = $("#Ph_n2 > .row_general > img");
$(j[0]).attr("src", $(y[8]).attr('src'))
$(j[1]).attr("src", $(y[9]).attr('src'))
$(j[2]).attr("src", $(y[0]).attr('src'))
$(j[3]).attr("src", $(y[2]).attr('src'))
$(j[4]).attr("src", $(y[5]).attr('src'))

if(j[slide_1-1]){
  a=$("#row_photos");
}



var slide_1 = 1;

showDiv(slide_1);


function showDiv(n) {

    for (i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }

    slide_1++;
    if (slide_1 > j.length) {slide_1 = 1}
    j[slide_1-1].style.display = "block";
if(w==120){
  $(".slideshow_1").css('display', 'none');
}
else {
  setTimeout(showDiv, 750);
}




}




/* --- SLIDESHOW 2---*/

var s = $("> div > .row_general > img" , a);
var c;
var x = $(".slideshow > img");
var slideIndex;
var d;


$(".row_general > img").on("click", function(){
  $("#slideshow").css('display', 'block');
  var $this = this;
  s = $("> div > .row_general > img" , a);
  c=s.index($this);
  slideIndex = c;
  d = $(s[slideIndex]).attr('src');
  showDivs(slideIndex);
})

$(".exit_slide").on("click", function(){
  $("#slideshow").css('display', 'none')
})

$(".exit_slide").on("click", function(){
  $("#slideshow").css('display', 'none')
})



$(".slideshow > img").on("click", function(){
  plusDivs(+1);
})



$(document).keydown(function(e){
    if (e.keyCode == 37) {
       plusDivs(-1);
       return false;
    }
    if (e.keyCode == 39) {
       plusDivs(+1);
       return false;
    }

    if (e.keyCode == 27) {
       $("#slideshow").css('display', 'none')
       return false;
    }
});





function plusDivs(n) {
  c += n;
  if (c < 0) {c = s.length-1}
  if (c > s.length-1) {c = 0}
  slideIndex = c;
  d = $(s[slideIndex]).attr('src');
  showDivs(slideIndex);

}

function showDivs(n) {
  x[0].style.display = "block";
  $(x[0]).attr('src', d);



}




$('.mail').on('click',function(){
       window.location.href = "mailto:finvidia@gmail.com";
    });










/*var scroll = $(window).scrollTop();




$.fn.followTo = function () {
  console.log("called")
    var $this = this,
        $window = $(window);

    $(window).scroll(function (e) {
        console.log("sto scrollando...")
        if ($("#Ph_n1").scrollTop() + $("#Ph_n1").innerHeight()>=$("#Ph_n1")[0].scrollHeight) {
            console.log("oioi");
            $this.css({
                position: 'absolute',
                top: scroll
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#menu_sx').followTo();*/
