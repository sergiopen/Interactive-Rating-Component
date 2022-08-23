let btn = document.getElementById("btn");
let btnNumbers = document.querySelectorAll(".card__numbers");

for(let i = 0; i < btnNumbers.length; i++){
    btnNumbers[i].addEventListener("click", (e) =>{
        var numFinal = btnNumbers[i].innerHTML;
        document.querySelector(".cardresult__result").textContent = "You selected " + numFinal + " out of 5";
    });
}

btn.addEventListener("click", () =>{
    document.querySelector(".card").classList.add("active");
    document.querySelector(".cardresult").classList.add("active");
});