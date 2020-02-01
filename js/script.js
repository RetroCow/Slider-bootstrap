var preview = document.querySelector('.preview');
var buttonShow = document.querySelector('.buttonShow');
var slider = document.querySelector('.slider');

function showSlider() {
	setTimeout(	function (){ 
		slider.classList.remove('d-none');
		slider.classList.add('d-flex');
		preview.classList.remove('d-flex');
		preview.classList.add('d-none');
	}, 5000);
}

buttonShow.addEventListener('click', function(){
	showSlider();
});

var firstSlide = slider.querySelector('.first-slide');
var secondSlide = slider.querySelector('.second-slide');
var thirdSlide = slider.querySelector('.third-slide');
var fourthSlide = slider.querySelector('.fourth-slide');
var slideToggle = slider.querySelector('.slide-toggle');
var slideToggleLarge = slider.querySelector('.slide-toggle-lg');
var toggleItemFirst = slideToggleLarge.querySelector('.toggle-item-first');
var toggleItemSecond = slideToggleLarge.querySelector('.toggle-item-second');
var toggleItemThird = slideToggleLarge.querySelector('.toggle-item-third');
var toggleItemFourth = slideToggleLarge.querySelector('.toggle-item-fourth');
var toggleFirst = slideToggle.querySelector('.first-toggle');
var toggleSecond = slideToggle.querySelector('.second-toggle');
var toggleThird = slideToggle.querySelector('.third-toggle');
var toggleFourth = slideToggle.querySelector('.fourth-toggle');

function removeActive() {
	firstSlide.classList.add('d-none');
	secondSlide.classList.add('d-none');
	thirdSlide.classList.add('d-none');
	fourthSlide.classList.add('d-none');
	toggleItemFirst.classList.remove('active');
	toggleItemSecond.classList.remove('active');
	toggleItemThird.classList.remove('active');
	toggleItemFourth.classList.remove('active');
	toggleFirst.classList.remove('active');
	toggleSecond.classList.remove('active');
	toggleThird.classList.remove('active');
	toggleFourth.classList.remove('active');
}

function firstActive() {
	removeActive();
	firstSlide.classList.remove('d-none');
	toggleItemFirst.classList.add('active');
	toggleFirst.classList.add('active');
}

function secondActive() {
	removeActive();
	secondSlide.classList.remove('d-none');
	toggleItemSecond.classList.add('active');
	toggleSecond.classList.add('active');
}

function thirdActive() {
	removeActive();
	thirdSlide.classList.remove('d-none');
	toggleItemThird.classList.add('active');
	toggleThird.classList.add('active');
}

function fourthActive() {
	removeActive();
	fourthSlide.classList.remove('d-none');
	toggleItemFourth.classList.add('active');
	toggleFourth.classList.add('active');
}

toggleItemFirst.addEventListener('click', function(){
	removeActive();
	firstActive()
})

toggleFirst.addEventListener('click', function(){
	removeActive();
	firstActive()
})

toggleItemSecond.addEventListener('click', function(){
	removeActive();
	secondActive()
})

toggleSecond.addEventListener('click', function(){
	removeActive();
	secondActive()
})

toggleItemThird.addEventListener('click', function(){
	removeActive();
	thirdActive()
})

toggleThird.addEventListener('click', function(){
	removeActive();
	thirdActive()
})

toggleItemFourth.addEventListener('click', function(){
	removeActive();
	fourthActive()
})

toggleFourth.addEventListener('click', function(){
	removeActive();
	fourthActive()
})

var slides = document.querySelectorAll('.slide-item');
var slideTogglesLarge = slideToggleLarge.querySelectorAll('.toggle-item');
var nextButton = document.querySelector('.slide-next');
var backButton = document.querySelector('.slide-back');
var currentSlide = 0;

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].classList.add('d-none');
	slides[currentSlide].classList.remove('active');
	slideTogglesLarge[currentSlide].classList.remove('active');
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].classList.add('active');
	slides[currentSlide].classList.remove('d-none');
	slideTogglesLarge[currentSlide].classList.add('active');
}

nextButton.addEventListener('click', function(){
	nextSlide();
});

backButton.addEventListener('click', function(){
	previousSlide();
});
