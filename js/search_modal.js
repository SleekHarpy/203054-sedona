var link = document.querySelector(".btn_search_hotels");
  
var popup = document.querySelector(".search_modal");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var leave = popup.querySelector("[name=leave]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";
  
try {
	storage = localStorage.getItem("adults");
} catch (err) {
	isStorageSupport = false;
  }
  
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("search_modal_show");
	
	if (storage) {
		adults.value = storage;
	}
	
	arrival.focus();
  });
  
form.addEventListener("submit", function (evt) {
	if (!arrival.value || !leave.value || !adults.value || !children.value) {
	evt.preventDefault();
	console.log("Нужно заполнить поля");
	} 	else {
		if (isStorageSupport) {
			localStorage.setItem("adults", adults.value);
		}
	}
});