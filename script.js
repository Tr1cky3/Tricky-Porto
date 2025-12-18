const BtnGoal = document.getElementById('BtnGoal');
const sidebar2 = document.querySelector('.sidebar2');

BtnGoal.addEventListener('click', function(){
    if(sidebar2.style.display === 'none'){
        sidebar2.style.display = 'block';
    } else{
        sidebar2.style.display = 'none';
    }
})