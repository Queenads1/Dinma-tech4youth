// dom tree
// let item = document.body
// item = item.parentElement
// console.log(item)

let btns1 = document.getElementById("btns1")

btns1.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});

let btns2 = document.getElementById("btns2")

btns2.addEventListener("click", function() { alert ("welcome to javascript");
});

// let studentnames = document.getElementById("studentnames")
// studentnames.addEventListener("input", function() {
//     studentnames.textContent = studentnames.value;
// });

let studentName = document.getElementById("studentName")
studentName.addEventListener("input", function() {
    displayName.textContent = studentName.value;
});