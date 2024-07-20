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
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener("click", () => {
    arrowChange("left")
})
arrowRight.addEventListener("click", () => {
    arrowChange("right")
})

let index = 0
bulletPoints()
function bulletPoints (){
    for (let i= 0; i<slides.length; i++){
        let dots = document.querySelector(".dots")
        let dotDiv = document.createElement("div")
        dotDiv.classList.add("dot")
		dotDiv.classList.add("dot-"+i)
        dots.appendChild(dotDiv)
        if (i === index){
            dotDiv.classList.add("dot_selected")
        }
    }

}
function bulletPointsUpdate(){
	//au clique sur la flèche je rentre dans cette fonction et je dois 
	//sur quel je me trouve et sur quel dot je dois aller
	let dotSelected = document.querySelector(".dot_selected")
	dotSelected.classList.remove("dot_selected")
	let dotNext = document.querySelector(".dot-"+index)
	dotNext.classList.add("dot_selected")
}
function updateSlide() {
    let imageChange = document.querySelector(".banner-img") 
    imageChange.setAttribute("src", `./assets/images/slideshow/${slides[index].image}`) 

    let tagLineElement = document.querySelector("#banner p") 
    tagLineElement.innerHTML = slides[index].tagLine 

    bulletPointsUpdate() 
}

function arrowChange(direction) {
    if (direction === "right") {
        index = (index + 1) % slides.length 
    } else if (direction === "left") {
        index = (index - 1 + slides.length) % slides.length 
    }
    updateSlide() 
}


