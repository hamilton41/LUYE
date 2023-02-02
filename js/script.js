let headerBtn = document.querySelectorAll("#link-list-btn");
let headerList = document.querySelectorAll("#link-list");

for(let i=0;i<headerBtn.length;i++){
    headerBtn[i].addEventListener("click",function(){
        if(headerBtn[i].classList.contains("active")){
            headerList[i].classList.remove("active");
            headerBtn[i].classList.remove("active");
        }
        else{
            for(let j=0;j<headerList.length;j++){
                headerList[j].classList.remove("active");
                headerBtn[j].classList.remove("active");
            }
            headerList[i].classList.add("active");
            headerBtn[i].classList.add("active");
        }
        

        

    })
}

document.getElementById("btn-gotop").addEventListener("click",function(){
    scrollToTop()
})


function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 4);
    } else clearTimeout(scrollAnimation);
}