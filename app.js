const navSlide=()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.navbar2');
    const navlinks=document.querySelectorAll('.navbar2 ul li');

    burger.addEventListener('click',()=>{
        //toggling navbar
        nav.classList.toggle('nav-active');
        //links animation
        navlinks.forEach((link,index) => {
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else{
                link.style.animation=`navLinkFade .5s ease forwards ${index/7+1.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
     
}

navSlide();