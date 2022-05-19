const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const nexts = document.querySelectorAll(".next");
const prevs = document.querySelectorAll(".prev");
slides.forEach(function(slide,index){
      slide.style.left = `${index * 100}%`;
})

let count = 0;
nexts.forEach(function(next){
      next.onclick = function(){
            count++;
            carousel();
      }
})
prevs.forEach(function(prev){
      prev.onclick = function(){
            count--;
            carousel();
      }
})

function carousel(){
      if(count === slides.length){
            count = 0;
      }
      if(count < 0){
            count = slides.length - 1;
      }
      slides.forEach(function(slide){
            slide.style.transform = `translateX(-${count * 100}%)`;
      })
}

let counter = 0;
nextBtn.onclick = function(){
      counter++;
      carousel2();
      console.log(counter);
}
prevBtn.onclick = function(){
      counter--;
      carousel2();
      console.log(counter);
}
function carousel2(){
      if(counter === slides.length){
            counter = 0;
      }
      if(counter < 0){
            counter = slides.length - 1;
      }
      if(counter < slides.length - 1){
            nextBtn.style.display = "block";
      }
      else{
            nextBtn.style.display = "none";
      }
      if (counter > 0) {
            prevBtn.style.display = "block";
      } else {
            prevBtn.style.display = "none";
      }
      slides.forEach(function(slide){
            slide.style.transform = `translateX(-${counter * 100}%)`;
      })
}
prevBtn.style.display = "none";
