const menuIcon=document.querySelector(".menu-icon");
const xBtn = document.querySelector('.x-btn');
const navigation = document.querySelector('.navigation');


menuIcon.addEventListener("click", ()=>{
    navigation.classList.add("navigate"); 
}); 


xBtn.addEventListener('click', () => {
    navigation.classList.remove('navigate');
  });

window.addEventListener("scroll",()=>{
    const about= document.querySelector(".about")
    if(window.pageYOffset>= 200){
        about.classList.add("change")
    }
    else{
        about.classList.remove("change")
    }
    console.log(window.pageYOffset)
})