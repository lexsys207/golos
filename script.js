var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");
var button_6 = document.getElementById("button_6");
var button_7 = document.getElementById("button_7");
var button_8 = document.getElementById("button_8");
var button_9 = document.getElementById("button_9");
var button_10 = document.getElementById("button_10");
var button_11 = document.getElementById("button_11");
var button_12 = document.getElementById("button_12");

var reset = document.getElementById("reset");
var header = document.getElementById("header");


var resultViev_1 = document.getElementById("result_1");
var resultViev_2 = document.getElementById("result_2");
var resultViev_3 = document.getElementById("result_3");
var resultViev_4 = document.getElementById("result_4");
var resultViev_5 = document.getElementById("result_5");
var resultViev_6 = document.getElementById("result_6");
var resultViev_7 = document.getElementById("result_7");
var resultViev_8 = document.getElementById("result_8");
var resultViev_9 = document.getElementById("result_9");
var resultViev_10 = document.getElementById("result_10");
var resultViev_11 = document.getElementById("result_11");
var resultViev_12 = document.getElementById("result_12");


var result_1 = 0;
var result_2 = 0;
var result_3 = 0;
var result_4 = 0;
var result_5 = 0;
var result_6 = 0;
var result_7 = 0;
var result_8 = 0;
var result_9 = 0;
var result_10 = 0;
var result_11 = 0;
var result_12 = 0;

function claerMessage () {
	header.innerHTML = "";
}

button_1.onclick = function() {
	result_1++;
	console.log(result_1);
	localStorage.setItem('result_1', result_1);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 1500);
};

button_2.onclick = function() {
	result_2++;
	console.log(result_2);
	localStorage.setItem('result_2', result_2);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_3.onclick = function() {
	result_3++;
	console.log(result_3);
	localStorage.setItem('result_3', result_3);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_4.onclick = function() {
	result_4++;
	console.log(result_4);
	localStorage.setItem('result_4', result_4);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_5.onclick = function() {
	result_5++;
	console.log(result_5);
	localStorage.setItem('result_5', result_5);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_6.onclick = function() {
	result_6++;
	console.log(result_6);
	localStorage.setItem('result_6', result_6);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_7.onclick = function() {
	result_7++;
	console.log(result_7);
	localStorage.setItem('result_7', result_7);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_8.onclick = function() {
	result_8++;
	console.log(result_8);
	localStorage.setItem('result_8', result_8);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_9.onclick = function() {
	result_9++;
	console.log(result_9);
	localStorage.setItem('result_9', result_9);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_10.onclick = function() {
	result_10++;
	console.log(result_10);
	localStorage.setItem('result_10', result_10);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_11.onclick = function() {
	result_11++;
	console.log(result_11);
	localStorage.setItem('result_11', result_11);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};

button_12.onclick = function() {
	result_12++;
	console.log(result_12);
	localStorage.setItem('result_12', result_12);
	header.innerHTML = "Голос засчитан!";
	setTimeout(() => { claerMessage() }, 2000);
};






// Result
resultViev_1.innerHTML = localStorage.getItem('result_1');
resultViev_2.innerHTML = localStorage.getItem('result_2');
resultViev_3.innerHTML = localStorage.getItem('result_3');
resultViev_4.innerHTML = localStorage.getItem('result_4');
resultViev_5.innerHTML = localStorage.getItem('result_5');
resultViev_6.innerHTML = localStorage.getItem('result_6');
resultViev_7.innerHTML = localStorage.getItem('result_7');
resultViev_8.innerHTML = localStorage.getItem('result_8');
resultViev_9.innerHTML = localStorage.getItem('result_9');
resultViev_10.innerHTML = localStorage.getItem('result_10');
resultViev_11.innerHTML = localStorage.getItem('result_11');
resultViev_12.innerHTML = localStorage.getItem('result_12');

reset.onclick = function () {
	localStorage.clear();
}