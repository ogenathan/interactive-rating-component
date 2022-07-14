const submitBtn =document.querySelector(".submit-btn");
const cards= document.querySelector(".bg");
const numBtn = document.querySelectorAll(".btn");
let alertMsg = document.querySelector(".alert-message");
let rating = document.querySelector(".rating");

numBtn.forEach((btn) => {
     btn.addEventListener('click', function(){
     // let selected = btn.innerHTML;
     rating.innerHTML = btn.innerHTML;
    })
});


submitBtn.addEventListener("click", function () { 
  if(!rating.innerHTML){
    cards.classList.toggle("show-alert")
} else{
  cards.classList.toggle("show-card")
};
 
});