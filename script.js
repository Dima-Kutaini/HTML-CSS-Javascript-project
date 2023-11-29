const menuIcon=document.querySelector(".menu-icon");
const xBtn = document.querySelector('.x-btn');
const navigation = document.querySelector('.navigation');


menuIcon.addEventListener("click", ()=>{
    navigation.classList.add("navigate"); 
}); 


xBtn.addEventListener('click', () => {
    navigation.classList.remove('navigate');
  });

