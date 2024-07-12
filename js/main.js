'use strict'

$(function () {
    $('.header_slider').slick({
        vertical: true,
        verticalSwiping: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        
        
    })
});

$('.main').click(function(){
    $('.img_trade').slideDown('slow');
});

$("#project").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".project").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});
$("#news").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".news").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});
$("#contact").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".contact").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$(window).scroll(function(){
  if($(window).scrollTop()>600){
  $('.img_trade').show('slow');
  }
})
$(window).scroll(function(){
  if($(window).scrollTop()>1100){
  $('.img_commerce').show('slow');
  }
})

$('.inf_btn1').click(function () {
  $('.text1').toggle('slow', function () { });
})

$('.inf_btn2').click(function () {
  $('.text2').toggle('slow', function () { });
})
  
  

  // $(window).scroll(function(){
  //   if($(window).scrollTop()>900){
  //     $(".img_trade").addClass("myclass");

  //   }
    
  //   })

  



$(function(){
    $('.news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 1000
    })
})

// let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    });
    }

//----------------------------

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    
    //if (error === 0){
      form.classList.add('sending');
      let responce = await fetch('form.php', {
        method: 'POST',
        body: formData
      });
      if(responce.ok){
        let result = await responce.json();
        alert(result.message);
        form.rezet();
        form.classList.remove('sending');
      } 
      else{
        //alert('Error');
        //form.classList.remove('sending');
      }

    // } else{
    //   alert('Enter correct inf')
    // }
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for(let index=0; index<formReq.length; index++){
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('email')){
        if(emailTest(input)){
          formAddError(input);
          //error++;
        }
      } else 
      if(input.value === ''){
        formAddError(input);
        //error++;
      }
      
    }
  }
  function formAddError(input){
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }
  function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});