const firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

const secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

const secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

const thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];
thirdCanvas.setAttribute("style","display:none");

const Heart = 
document.getElementsByClassName("heart-container")[0];
Heart.setAttribute("style","display:none");

const poppers = 
document.getElementsByClassName("circle--stuff--2")[0];
poppers.setAttribute("style","display:none");

const photos =
document.getElementsByClassName("slider-container")[0];
photos.setAttribute("style","display:none");

const containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	Heart.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);

const removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	document.getElementsByClassName("heart-container")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

const removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	poppers.setAttribute("style","display:none");
	photos.setAttribute("style","display:none");
	Heart.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block");
},9800);

const ToggleHeart = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	poppers.setAttribute("style","display:none");
	photos.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block");
	Heart.setAttribute("style","animation:displayHeart 5s ease");
},16000);

const TogglePoppers = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	photos.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block");
	Heart.setAttribute("style","animation:displayHeart 5s ease");
	poppers.setAttribute("style","display:block");
},17000);

const TogglePhotos = setTimeout(function (){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block");
	Heart.setAttribute("style","animation:displayHeart 5s ease");
	poppers.setAttribute("style","display:block");
	photos.setAttribute("style","animation:displayPhotos 5s linear forwards");

	let sliderContainer = document.querySelector('.slider-container');
	let currentImageIndex = 0;
	let images = sliderContainer.children;	
	function autoplay() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
		for (let i = 0; i < images.length; i++) {
			images[i].style.opacity = i === currentImageIndex ? 1 : 0;
		}
	}
	setInterval(autoplay, 2000);
},19000);