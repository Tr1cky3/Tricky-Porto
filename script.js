const BtnGoal = document.getElementById('BtnGoal');
const sidebar2 = document.querySelector('.sidebar2');
const sidebar1 = document.querySelector('.sidebar1');
const BtnPro = document.getElementById('BtnPro');
const BtnCnt = document.getElementById('BtnCnt');

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
BtnCnt.addEventListener('click', function(){
    window.location.href = "https://linktr.ee/mrtricky";
})