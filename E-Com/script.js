// 
function toggleMenu(){
	const bar = document.querySelector("#close");
	const nav = document.querySelector("#navbar");
	bar.classList.toggle("active");
	nav.classList.toggle("active");

}


let mainImage = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smaall-img");

smallImg[0].onclick = function() {
	mainImage.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
	mainImage.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
	mainImage.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
	mainImage.src = smallImg[3].src;
}