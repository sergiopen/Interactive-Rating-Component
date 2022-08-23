let btn = document.getElementById("btn");
let btnNumbers = document.querySelectorAll(".card__numbers");
let numFinal;

for(let i = 0; i < btnNumbers.length; i++){
    btnNumbers[i].addEventListener("click", (e) =>{
        numFinal = btnNumbers[i].innerHTML;
        document.querySelector(".cardresult__result").textContent = "You selected " + numFinal + " out of 5";
    });
}

btn.addEventListener("click", () =>{
    if(numFinal == null){
        alert("You need select one number");
    }
    else{
        document.querySelector(".card").classList.add("active");
    document.querySelector(".cardresult").classList.add("active");
    }
});