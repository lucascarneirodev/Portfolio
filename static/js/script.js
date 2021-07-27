function show(id) {
  if (document.getElementById(id).style.display != 'flex') {
    document.getElementById(id).style.display = 'flex';
    childs = document.getElementById(id).childElementCount;
    for (let i = 0; i < childs; i++) {
      document.getElementById(id).children[i].style.display = 'flex';
      if (document.getElementById(id).children[i].id === 'contact') {
        document.getElementById(id).children[i].style.display = 'none';
      }
    }
  } else {
    console.log('else');
    document.getElementById(id).style.display = 'none';
  }
  if (id === 'about') {
    typeWriter();
  }
}

function open(){
  openValue;
}
function hideAll() {
  lenght = document.getElementsByTagName("section").length;
  for (let i = 0; i < lenght; i++) {
    x = document.getElementsByTagName("SECTION")[i].style.display;
    document.getElementsByTagName("SECTION")[i].style.display = 'none';
  }
}
var i = 0;
var txt = `class Person:
%####def_init_(self,name,birth,city,about):
%####self.__name = name
%####self.__birth = birth
%####self.__city = city
%####self.__about = about
%                                  
%
@property
%def name(self, name):
%####self.__name = name
%
%@property
%def birth(self, birth):
%####self.__birth = birth
%
%@property
%def city(self, city):
%####self.__city = city
%
%@property
%def about(self, about):
%####self.__about = about
%
%
%programmer = Person
%programmer.name = "Lucas Carneiro"
%programmer.birth=1996
%programmer.city="Rio de Janeiro - RJ"
%programmer.about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet, ligula in fringilla pretium, libero ligula interdum nibh, eget semper purus sapien eget elit. Sed ultricies augue sapien, at ullamcorper sem vestibulum quis. Duis pulvinar, risus eget ultricies dignissim, metus justo commodo diam, vitae ornare lectus felis at magna. Ut quis gravida ex, id iaculis ipsum. Vivamus euismod tellus eu.;"`;

var speed = 25;

function typeWriter() {
  if (i < txt.length) {
    char = txt.charAt(i);

    if (char === '#') {
      char = '&nbsp';
    }
    if (char === '%') {
      char = '<br>';
    }
    document.getElementById("type").innerHTML += char;
    i++;
    setTimeout(typeWriter, speed)

  } else {
    document.getElementById("type").innerHTML = '';
    i = 0;
    typeWriter();
  }
}

let firstname = document.querySelector('#firstname')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let btnSend = document.getElementById("send")
let nomeOk = false
let emailOk = false
let msgOk = false
btnSend.disabled = true

firstname.addEventListener('keyup', () => {
   if (firstname.value.length < 3) {
      firstname.style.borderColor = 'red'
      nomeOk = false
   } else {
      firstname.style.borderColor = 'green'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnSend.disabled = false
   } else {
      btnSend.disabled = true
   }
})

phone.addEventListener('keyup', () => {
  if (phone.value.length < 3) {
     phone.style.borderColor = 'red'
     phoneOk = false
  } else {
     phone.style.borderColor = 'green'
     phoneOk = true
  }

  if (phoneOk && emailOk && msgOk) {
     btnSend.disabled = false
  } else {
     btnSend.disabled = true
  }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = 'green'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnSend.disabled = false
   } else {
      btnSend.disabled = true
   }
})

message.addEventListener('keyup', () => {
   if (message.value.length > 500) {
      message.style.borderColor = 'red'
      msgOk = false
   } else {
      message.style.borderColor = 'green'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnSend.disabled = false
   } else {
      btnSend.disabled = true
   }
})


btnSend.addEventListener('click', () => {
   /* Mostra a div de carregamento */
   let carregamento = document.querySelector('#loading')
   carregamento.style.display = 'flex'

   /* Esconde o Form */
   let form = document.querySelector('form')
   form.style.display = 'none'
})
