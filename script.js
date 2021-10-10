const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const greetingcard0 = document.querySelector('.greetingcard0')
const greetingcard1 = document.querySelector('.greetingcard1')
const greeting = document.getElementById('greeting')
const scrollPrompt = document.getElementById('scrollPrompt')

const projectcircle = document.querySelector('.projectcircle2')
const projectcontent = document.querySelector('.projectcontent')
const aboutcircle = document.querySelector('.aboutcircle2')
const aboutcontent = document.querySelector('.aboutcontent')
const techcircle = document.querySelector('.techcircle2')
const techcontent = document.querySelector('.techcontent')

let menuOpen = false;
let cardUnfold = false;

let projectOpen = false;
let aboutOpen = false;
let techOpen = false;

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

greetingcard0.addEventListener('click', () => {
    if(!cardUnfold){
        greetingcard0.classList.add('open')
        greetingcard1.classList.add('open')
        greeting.innerHTML = "I'm Nolan, nice to meet you."
        scrollPrompt.innerHTML = "Take a look around ---->"
        cardUnfold = true
    }
    else {
        greetingcard0.classList.remove('open')
        greetingcard1.classList.remove('open')
        greeting.innerHTML = "Hi,"
        scrollPrompt.innerHTML = " "
        cardUnfold = false
    }
})

greetingcard1.addEventListener('click', () => {
    if(!cardUnfold){
        greetingcard0.classList.add('open')
        greetingcard1.classList.add('open')
        greeting.innerHTML = "I'm Nolan, nice to meet you."
        scrollPrompt.innerHTML = "Take a look around ---->"
        cardUnfold = true
    }
    else {
        greetingcard0.classList.remove('open')
        greetingcard1.classList.remove('open')
        greeting.innerHTML = "Hi,"
        scrollPrompt.innerHTML = " "
        cardUnfold = false
    }
})

projectcircle.addEventListener('click', () => {
    if(!projectOpen){
        projectcontent.classList.add('open')
        projectOpen = true
    }
    else {
        projectcontent.classList.remove('open')
        projectOpen = false
    }
})


aboutcircle.addEventListener('click', () => {
    if(!techOpen){
        aboutcontent.classList.add('open')
        aboutOpen = true
    }
    else {
        aboutcontent.classList.remove('open')
        aboutOpen = false
    }
})

techcircle.addEventListener('click', () => {
    if(!techOpen){
        techcontent.classList.add('open')
        techOpen = true
    }
    else {
        techcontent.classList.remove('open')
        techOpen = false
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
  
