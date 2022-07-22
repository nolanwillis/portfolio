const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const card0 = document.querySelector('.card0')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
const card5 = document.querySelector('.card5')
const greeting = document.getElementById('greeting')
let menuOpen = false;
let greetingDeckUnfold = false;
let p1DeckUnfold = false;
let p2DeckUnfold = false;
let p3DeckUnfold = false;
let p4DeckUnfold = false;
let p5DeckUnfold = false;
let p6DeckUnfold = false;


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open')
        menu.classList.add('open')
        menuOpen = true
    }
    else {
        menuBtn.classList.remove('open')
        menu.classList.remove('open')
        menuOpen = false
    }
})


card0.addEventListener('click', () => {
    if(!greetingDeckUnfold){
        card0.classList.add('open')
        card1.classList.add('open')
        greeting.innerHTML = "I'm Nolan, nice to meet you."
        /* scrollPrompt.innerHTML = "Take a look around ---->" */
        greetingDeckUnfold = true
    }
    else {
        card0.classList.remove('open')
        card1.classList.remove('open')
        greeting.innerHTML = "Hi,"
        /* scrollPrompt.innerHTML = " " */ 
        greetingDeckUnfold = false
    }
})

card1.addEventListener('click', () => {
    if(!greetingDeckUnfold){
        card0.classList.add('open')
        card1.classList.add('open')
        greeting.innerHTML = "I'm Nolan, nice to meet you."
        /* scrollPrompt.innerHTML = "Take a look around ---->" */ 
        greetingDeckUnfold = true
    }
    else {
        card0.classList.remove('open')
        card1.classList.remove('open')
        greeting.innerHTML = "Hi,"
        /* scrollPrompt.innerHTML = " " */
        greetingDeckUnfold = false
    }
})
/* Portfolio */
card2.addEventListener('click', () => {
  if(!p1DeckUnfold){
      card2.classList.add('open')
      card3.classList.add('open')
      p1DeckUnfold = true;
  }
  else {
      card2.classList.remove('open')
      card3.classList.remove('open')
      p1DeckUnfold = false;
  }
})
card3.addEventListener('click', () => {
  if(!p1DeckUnfold){
      card2.classList.add('open')
      card3.classList.add('open')
      p1DeckUnfold = true;
  }
  else {
      card2.classList.remove('open')
      card3.classList.remove('open')
      p1DeckUnfold = false;
  }
})

/* Hungry */
card4.addEventListener('click', () => {
  if(!p2DeckUnfold){
      card4.classList.add('open')
      card5.classList.add('open')
      p2DeckUnfold = true;
  }
  else {
      card4.classList.remove('open')
      card5.classList.remove('open')
      p2DeckUnfold = false;
  }
})
card5.addEventListener('click', () => {
  if(!p2DeckUnfold){
      card4.classList.add('open')
      card5.classList.add('open')
      p2DeckUnfold = true;
  }
  else {
      card4.classList.remove('open')
      card5.classList.remove('open')
      p2DeckUnfold = false;
  }
})

/* Graphics */
card6.addEventListener('click', () => {
  if(!p3DeckUnfold){
      card6.classList.add('open')
      card7.classList.add('open')
      p3DeckUnfold = true;
  }
  else {
      card6.classList.remove('open')
      card7.classList.remove('open')
      p3DeckUnfold = false;
  }
})

card7.addEventListener('click', () => {
  if(!p3DeckUnfold){
      card6.classList.add('open')
      card7.classList.add('open')
      p3DeckUnfold = true;
  }
  else {
      card6.classList.remove('open')
      card7.classList.remove('open')
      p3DeckUnfold = false;
  }
})

/* Dungeon Defender */
card8.addEventListener('click', () => {
  if(!p4DeckUnfold){
      card8.classList.add('open')
      card9.classList.add('open')
      p4DeckUnfold = true;
  }
  else {
      card8.classList.remove('open')
      card9.classList.remove('open')
      p4DeckUnfold = false;
  }
})

card9.addEventListener('click', () => {
  if(!p4DeckUnfold){
      card8.classList.add('open')
      card9.classList.add('open')
      p4DeckUnfold = true;
  }
  else {
      card8.classList.remove('open')
      card9.classList.remove('open')
      p4DeckUnfold = false;
  }
})



window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  
