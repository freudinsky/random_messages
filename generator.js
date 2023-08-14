import { msgCollection } from "./msg-parse.js";

const btn = document.querySelector(".btn");
const outputBg = document.querySelector(".output");
const output = document.querySelector(".output>p");

function randomMsg(nr) {
	return msgCollection[nr];
}
function writeMsg() {
	let random = Math.floor(Math.random() * 100 - 1);
	outputBg.removeAttribute("class", "output");
	outputBg.setAttribute("class", "output-on");
	output.append(`"${randomMsg(random)}"`);
}

function btnClick() {
	output.textContent = "";
	writeMsg();
}

btn.addEventListener("click", () => btnClick());
