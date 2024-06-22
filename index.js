var slider=document.querySelectorAll(".slide");
var goNext=document.getElementById("next");
var goPrev=document.getElementById("prev");
var counter=0;


slider.forEach(
    (slide, index )=>{

        slide.style.left= `${index * 100}%`;

    }

);

var slideImage=()=>{
    slider.forEach(
(slide)=>{
    slide.style.transform =`translateX(-${counter * 100}%)`
}


)
};


 goNext.addEventListener('click', function(){
   


    counter++


   
    slideImage()
});

goPrev.addEventListener('click', function(){
    
        counter--
    slideImage()
});

    


    

