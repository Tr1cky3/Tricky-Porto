const BtnGoal = document.getElementById('BtnGoal');
const sidebar2 = document.querySelector('.sidebar2');
const sidebar1 = document.querySelector('.sidebar1');
const BtnPro = document.getElementById('BtnPro');
const BtnCnt = document.getElementById('BtnCnt');
const BtnMe = document.getElementById('BtnMe');
const iframe = document.querySelector('iframe');

BtnGoal.addEventListener('click', function(){
    if(sidebar2.style.display === 'none'){
        sidebar2.style.display = 'block';
    } else{
        sidebar2.style.display = 'none';
    }
})
BtnPro.addEventListener('click', function(){
    if(sidebar1.style.display === 'none'){
        sidebar1.style.display = 'block';
    } else{
        sidebar1.style.display = 'none';
    }
})
BtnMe.addEventListener('click', function(){
    if(iframe.style.display === 'none'){
        iframe.style.display = 'block';
        iframe.src = "https://www.youtube.com/embed/0hTb6Yv_PV4?autoplay=1&mute=0";
    } else{
        iframe.style.display = 'none';
        iframe.src = "";
    }
})
BtnCnt.addEventListener('click', function(){
    window.open("https://linktr.ee/mrtricky", "_blank");
})