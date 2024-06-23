var slider=document.querySelectorAll(".slide");
var goNext=document.getElementById("next");
var goPrev=document.getElementById("prev");
var intervalId;
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
   

if(counter===12){
        counter=0

    }
    else{
        counter++;
    }

   
    slideImage()
});

intervalId = setInterval(function() {
    if (counter===12) {
        counter = 0;
    } else {
        counter++;
    }

    slideImage() 
}, 3000);

goPrev.addEventListener('click', function(){
    if(counter===0){
        counter=12

    }
    else{
        counter--;
    }
    slideImage()
});

    


    

