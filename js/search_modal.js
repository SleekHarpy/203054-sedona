var link = document.querySelector(".btn_search_hotels");

var popup = document.querySelector(".search_modal");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var leave = popup.querySelector("[name=leave]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

popup.classList.add('search_modal_hidden');

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search_modal_show");
    popup.classList.remove("search_modal_error");
    arrival.focus();
});

form.addEventListener("submit", function(evt) {
    if (!arrival.value || !leave.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.add("search_modal_error");
    }
});