


const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}

const root = document.querySelector(":root");
var individualproject = document.getElementById("individual-project");
var individualproject2 = document.getElementById("individual-project2");
var individualproject3 = document.getElementById("individual-project3");
var individualproject4 = document.getElementById("individual-project4");

var project = document.getElementById('projects');
var contact = document.getElementById('contact');
var cv = document.getElementById('cv');
var welcomemessage = document.getElementById("welcome-message");


$(document).ready(function () {
  $(project).click(function () {

    if (individualproject.style.display === "none" || individualproject2.style.display === "block" || individualproject4.style.display === "block" || individualproject3.style.display === "block") {

      $(individualproject).toggle("show");
      welcomemessage.style.display = "none";
      individualproject3.style.display = "none";
      individualproject2.style.display = "none";


    }
    else {
      $(individualproject).toggle("hide");
      $(welcomemessage).toggle("show");
    }

  });



  $(contact).click(function () {

    if (individualproject.style.display === "block" || welcomemessage.style.display === "block" || individualproject4.style.display === "block" || individualproject3.style.display === "block") {
      $(individualproject2).toggle("show");
      individualproject.style.display = "none";
      welcomemessage.style.display = "none";

     
      individualproject4.style.display = "none";
      individualproject3.style.display = "none";
    }
    else {
      $(individualproject2).toggle("hide");
      $(welcomemessage).toggle("show");

    }
  });


  $(indira).click(function () {

    if (individualproject.style.display === "block" || welcomemessage.style.display === "block" || individualproject4.style.display === "block" || individualproject2.style.display === "block") {
      $(individualproject3).toggle("show");
      individualproject.style.display = "none";
      individualproject2.style.display = "none";
      welcomemessage.style.display = "none";


      individualproject4.style.display = "none";
    }
    else {
      $(individualproject3).toggle("hide");
      $(welcomemessage).toggle("show");

    }
  });


});


function calltabs3() {
  if (individualproject2.style.display === "block" || welcomemessage.style.display === "block" || individualproject4.style.display === "block" || individualproject.style.display === "block") {
    
    individualproject2.style.display = "none";
    welcomemessage.style.display = "none";
    individualproject4.style.display = "none";
    individualproject.style.display = "none";

  } else {
    welcomemessage.style.display = "block";
    

  }
}



// cv.addEventListener("click", calltabs3);



let colors = ["rgb(165,78,160)", "rgb(174,155,108)", "rgb(123,80,142)", "rgb(212,136,89)", "rgb(85,99,172)"]

$("#color-click").click(function (event) {
  $(".cornersvg").find('#grad1 stop').eq(0).css('stop-color', colors[Math.floor(Math.random() * 5)]);
  $(".cornersvg").find('#grad1 stop').eq(1).css('stop-color', colors[Math.floor(Math.random() * 5)]);
  $(".cornersvg").find('#grad1 stop').eq(2).css('stop-color', colors[Math.floor(Math.random() * 5)]);



  let pw = document.getElementById('pw');
  let mainMessage = document.getElementById('main-message');

  let css_of_before = window.getComputedStyle(pw, '::before');

  console.log(css_of_before.backgroundColor);
  pw.style.setProperty('--grad-1', colors[Math.floor(Math.random() * 5)]);
  pw.style.setProperty('--grad-2', colors[Math.floor(Math.random() * 5)]);


  mainMessage.style.setProperty('--grad-1', colors[Math.floor(Math.random() * 5)]);
  mainMessage.style.setProperty('--grad-2', colors[Math.floor(Math.random() * 5)]);


  $(event.target).attr('fill', 'url(#grad1)');
});


$('.tablinks').click(function () {
  // animate content
  $('.main-message').addClass('animate_content');


  // chnage color of svgs and before selectors

  $(".cornersvg").find('#grad1 stop').eq(0).css('stop-color', colors[Math.floor(Math.random() * 5)]);
  $(".cornersvg").find('#grad1 stop').eq(1).css('stop-color', colors[Math.floor(Math.random() * 5)]);
  $(".cornersvg").find('#grad1 stop').eq(2).css('stop-color', colors[Math.floor(Math.random() * 5)]);


  let pw = document.getElementById('pw');
  let mainMessage = document.getElementById('main-message');

  let css_of_before = window.getComputedStyle(pw, '::before');

  console.log(css_of_before.backgroundColor);
  pw.style.setProperty('--grad-1', colors[Math.floor(Math.random() * 5)]);
  pw.style.setProperty('--grad-2', colors[Math.floor(Math.random() * 5)]);


  mainMessage.style.setProperty('--grad-1', colors[Math.floor(Math.random() * 5)]);
  mainMessage.style.setProperty('--grad-2', colors[Math.floor(Math.random() * 5)]);



  setTimeout(function () {
    $('.main-message').removeClass('animate_content');
  }, 2000);

});

$('.switch').hover(function () {
  $(this).find('.change').hide();
  $(this).find('.showme').show();
  $('.showme').css('animation', 'animatetext .5s ease-in-out ');
}, function () {
  $(this).find('.showme').hide();
  $(this).find('.change').show();
});

$('.showme').click(function () {

  $('.main').css('display', 'block');
  $('.frontPage').css('display', 'none');
  $('.main').addClass('animate_content');

});

$('.backhome').click(function () {

  $('.main').css('display', 'none');
  $('.frontPage').css('display', 'block');

});



















