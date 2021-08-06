
$(window).on("load", function () {
    var clickSub = document.querySelector('.sub1');
    var detail = document.querySelector('.detail1');
    console.log(detail);
    clickSub.addEventListener('click',function(){
        console.log('sf');
        detail.style.display="block";
        detail.style.left="0px";
        detail.style.opacity="1";
        // detail.className += "bar"; //클래스이름 바꾸는법
        AOS.init();
        detail.setAttribute("data-aos","fade-right");
        clickSub.style.display="none";
        
    })
    })
    
    
    
    
    
    
    
    