let stackImages=["https://blog.coursera.org/wp-content/uploads/2017/07/coursera_320X320.png", "https://f33.vn/wp-content/uploads/2023/03/nhung-ung-dung-hoc-tap-hay-nhat-cho-hoc-sinh-va-sinh-vien-4.jpg", "https://i.ytimg.com/vi/tBtrzqYUhVI/maxresdefault.jpg"];
var counterA=0;
var counterB=0;
var counterC=0;
var counterD=0;
window.onload=function(){
    document.getElementById('buttonA').addEventListener("click", function(){
        counterA+=1;
        document.getElementById('likeA').innerHTML=counterA;
    });
    document.getElementById('buttonB').addEventListener("click", function(){
        counterB+=1;
        document.getElementById('likeB').innerHTML=counterB;
    });
    document.getElementById('buttonC').addEventListener("click", function(){
        counterC+=1;
        document.getElementById('likeC').innerHTML=counterC;
    });
    document.getElementById('buttonD').addEventListener("click", function(){
        counterD+=1;
        document.getElementById('likeD').innerHTML=counterD;
    });
}
