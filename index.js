var stato=0;
var w;
var row=$("#row_photos");
var n="photos";
var h=$("#"+n);


/*--- LOADING ----*/

$(".fin_1 > img").ready(loading)


function loading(){
  $("#wait").css('display', 'none');

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

  $(row).css('visibility', 'visible');
  $(row).css('opacity', '1');
  $(row).css('display', 'block');
  $(h).css('border-left', '2px solid black').css('border-right', '2px solid black')

}
function body_color(){

  $("body").css("background-color", "white")


}



/* ---- MENù CON COMPARSA CONTENUTI --*/



var m;



$(".menu").on("click", function(){
m=row;

$(m).css('visibility', 'hidden');
$(m).css('opacity', '0.1');
$(m).css('display', 'none');
$(h).css('border-left', '2px solid transparent').css('border-right', '2px solid transparent');
n=this.id;
row=$("#row_" + n);
h=$("#"+n);
$(row).css('visibility', 'visible');
$(row).css('opacity', '1');
$(row).css('display', 'block');
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
  row=$("#row_photos");
}

$(".fin_1 > img").ready(loading, 3000)


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

var img_sorgente = $("> div > .row_general > img" , row);
var img_click;
var xy = $(".slideshow > .img-zoom-container > img");
var slideIndex;
var img_src;


$(".row_general > img").on("click", function(){
  $("#slideshow").css('display', 'block');
  var $this = this;
  img_sorgente = $("> div > .row_general > img" , row);
  img_click=img_sorgente.index($this);
  slideIndex = img_click;
  img_src = $(img_sorgente[slideIndex]).attr('src');

  showDivs(slideIndex);













})

$(".exit_slide").on("click", function(){
  $("#slideshow").css('display', 'none')
  $(".zoomImg").remove();
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
       $(".zoomImg").remove();
       return false;

    }
});





function plusDivs(n) {
  img_click += n;
  if (img_click < 0) {img_click = img_sorgente.length-1}
  if (img_click > img_sorgente.length-1) {img_click = 0}
  slideIndex = img_click;
  img_src = $(img_sorgente[slideIndex]).attr('src');


  $(".zoomImg").remove();
  showDivs(slideIndex);



}

function showDivs(n) {
  xy[0].style.display = "block";

  $(xy[0]).attr('src', img_src);
  $(document).ready(function(){

    $('#img_slide').zoom({ on:'click', magnify:"1.5" });

  });





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
