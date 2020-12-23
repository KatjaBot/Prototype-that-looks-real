// Animates login form
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
 
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


// "Animates" buttons
function handleClick(element){
element.innerHTML = "Thanks for reading";
}

function openForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}