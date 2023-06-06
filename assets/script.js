const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');
const cercles = document.querySelectorAll('.dot')
let slider_img = document.querySelector('.banner-img');
let banner_txt = document.querySelector('#banner p');

console.log(banner_txt);




counter = 0;

console.log(counter)

console.log(slides[0]["image"]);




suivant.addEventListener('click', slideSuivante);


function slideSuivante(){
	console.log(slideSuivante);

	// SlideImage
	cercles[counter].classList.remove('dot_selected');

	counter++;
	if (counter > slides.length - 1) {
		counter = 0;
	}
	cercles[counter].classList.add('dot_selected');
	slider_img.src = `./assets/images/slideshow/${slides[counter]["image"]}`;
	banner_txt.innerHTML = slides[counter]["tagLine"];

}





// slides.forEach((el, index, array) => console.log(el, index, array))
// console.log(slides.findIndex(el => el === "slide2.jpg"));
console.log('slides');



slider_img.src = `./assets/images/slideshow/${slides[counter]["image"]}`;
precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
	console.log(slidePrecedente);

	// SlideImage

	cercles[counter].classList.remove('dot_selected');
	
	counter--;
	if (counter < 0 ) {
		counter = slides.length - 1;
	}
	cercles[counter].classList.add('dot_selected');
	slider_img.src = `./assets/images/slideshow/${slides[counter]["image"]}`;
	banner_txt.innerHTML = slides[counter]["tagLine"];
	
}







