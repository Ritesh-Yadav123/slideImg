let scrollContainer=document.querySelector(".gallary");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel",(call)=>{
    call.preventDefault();
    scrollContainer.scrollLeft += call.deltaY;
    scrollContainer.style.scrollBehavior="smooth";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=900;

});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
});
