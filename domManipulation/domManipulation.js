const main = document.querySelector("#main");

const div1 = document.createElement("div");
div1.classList.add("content");
div1.textContent = "This is the glorious text-content!";
main.appendChild(div1);

const p1 = document.createElement("p");
p1.classList.add("content");
p1.textContent = "Hey I’m red!";
main.appendChild(p1);

const div2 = document.createElement("div");
div2.classList.add("content");
const h11 = document.createElement("h1");
h11.classList.add("content");
h11.textContent = "I'm in a div";
div2.appendChild(h11);
const p2 = document.createElement("p");
p2.classList.add("content");
p2.textContent = "ME TOO!";
div2.appendChild(p2);
main.appendChild(div2);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
	console.log(e.target);
	e.target.style.background = "blue";
	alert("Hello World");
});
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
	// and for each one we add a 'click' listener
	button.addEventListener("click", () => {
		alert(button.id);
	});
});
