// require("./printer.js");
// var add = require("./calc.js");
// console.log( add(2,2) );

document.addEventListener('DOMContentLoaded',function(){

    /*________________________SLIDER____________________________*/
var slides = document.querySelectorAll('.slider li');//all pictures here
var next = document.querySelector('.leftSlide');//buttons to be chosen
var prev = document.querySelector('.rightSlide');

var counter = 0;//used to determine which picture to show

slides[counter].classList.add('hidden')//initially hides first chair

next.addEventListener('click', function(){
    slides[counter].classList.remove('hidden')
    counter = (counter + 1)%slides.length;
    slides[counter].classList.add('hidden')
})

prev.addEventListener('click', function(){
    slides[counter].classList.remove('hidden')
    counter = (counter - 1 === -1) ? slides.length - 1 : --counter;
    slides[counter].classList.add('hidden')

})

/*_______________________HOVER__________________________*/
    var miniPicture = document.querySelectorAll('.sec2_div');
    var miniPicDescription = document.querySelectorAll('.sec2_div div')

for(let i=0; i<miniPicture.length;i++){
    miniPicture[i].addEventListener('mouseenter', function(){
        miniPicDescription[i].classList.toggle('hidden')
    })//hover event listener
}//for loop
for(let i=0; i<miniPicture.length;i++){
    miniPicture[i].addEventListener('mouseleave', function(){
        miniPicDescription[i].classList.toggle('hidden')
    })//hover event listener
}//for loop
/*____________________________CALCULATOR_________________________*/


})//DOM



