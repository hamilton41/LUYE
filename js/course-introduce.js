let choiceMainSectionBtn = document.getElementById("choice-main-section-btn");
let choiceMainSectionList = document.getElementById("choice-main-section-list");
document.getElementById("choice-main-section-activity").addEventListener("click",function(){
    choiceMainSectionBtn.classList.toggle("active");
    choiceMainSectionList.classList.toggle("active");
});

function openBottom(){
    document.getElementById("reserve-bottom-active").classList.add("active");
    document.getElementById("btn-reserve").innerHTML='<a href="./fill-imformation.html" class="text-center">課程預約 <img src="../image/btn-arrow.png" alt=""></a>';
    document.querySelector(".course-introduce-btn-side").style="display:none;";
}
document.getElementById("subtract").addEventListener("click",function(){
    let num = document.getElementById("buy-num");
    if(parseInt(num.innerHTML)==1){
        return;
    }
    else{
        num.innerHTML=parseInt(num.innerHTML)-1;
        document.getElementById("total-count-num").innerHTML=num.innerHTML;
    document.getElementById("total-count-price").innerHTML=3500*parseInt(num.innerHTML);
    }
});
document.getElementById("plus").addEventListener("click",function(){
    let num = document.getElementById("buy-num");
    num.innerHTML=parseInt(num.innerHTML)+1;
    document.getElementById("total-count-num").innerHTML=num.innerHTML;
    document.getElementById("total-count-price").innerHTML=3500*parseInt(num.innerHTML);
});