let menu = document.querySelector('#menu-bars');
let header = document.querySelector('headers');
var element = document.getElementById("header");
var menubars = document.getElementById("menu-bars");
var menuclose = document.getElementById("menu-close");
  

menu.onclick =()=>{
    //menu.classlist.toggle('fa-times');
    //header.classlist.toggle('active');
    element.style.display = "block";
    element.classList.add("full_page");
    menubars.style.display = "none";
    menuclose.style.display = "block";
}

menuclose.onclick =()=>{
    //menu.classlist.toggle('fa-times');
    //header.classlist.toggle('active');
    element.style.display = "none";
    element.classList.remove("full_page");
    menubars.style.display = "block";
    menuclose.style.display = "none";
}
window.onscroll =( )=>{
    menu.classlist.remove('fa-times');
    header.classlist.remove('active');
}