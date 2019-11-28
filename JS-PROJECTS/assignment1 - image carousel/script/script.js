var index = 0;
var sliderContent = document.getElementById('image-carousel-wrapper');
var sliderImage = document.getElementById('image');
var images= document.getElementsByTagName('img');

var imageWidth = images[index].width;    
var imageHeight = images[index].height;    
var length = images.length;
var totalWidth = length * imageWidth;
var left = 0;
var currentPosition = 0;

init(imageWidth, imageHeight);

function init(x,y) {
    var container = document.querySelector('.main-container');
    container.style.width = x + 'px';
    container.style.height = y + 'px';
    
    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.margin = 0 + 'px auto';
    
    sliderContent.style.width = totalWidth + 'px';
    sliderContent.style.position = "absolute";
    sliderContent.style.fontSize = 0 + 'px';
    sliderImage.style.float = "left";

}
function slideImage(){
    currentPosition = left + index * imageWidth;
    sliderContent.style.left = -currentPosition+'px';
    sliderContent.style.transition = "left 1s ease";
    index++;    
    if(currentPosition == (totalWidth- imageWidth)){
        index = 0;
    }
}


setInterval(function(){
     slideImage();
},3000);


function changeImage(direction){
    currentPosition = currentPosition + direction * imageWidth;
    if(currentPosition<0){
        currentPosition= totalWidth - imageWidth;
    }
    else if(currentPosition >= totalWidth){
        currentPosition= 0;
    }
    sliderContent.style.left = -currentPosition + 'px';  
}
