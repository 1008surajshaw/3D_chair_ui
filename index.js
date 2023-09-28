//const box =document.querySelectorAll(".sqr");
const click =document.querySelector(".discription");
const detail =document.querySelector(".detail");
const disc =document.querySelector(".desc");
const details =document.querySelector(".details");
disc.addEventListener("click",function(){
    detail.classList.add("desc-sec");
})
details.addEventListener("click",function(){
    click.classList.add("desc-sec");
    detail.classList.remove("desc-sec")

})