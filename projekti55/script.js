const smallCups = document.querySelectorAll(".cup-small");

const percentage = document.getElementById("percentage");

const remained = document.getElementById("liters");

const small = document.querySelector("small");

drankCups = [];

smallCups.forEach((smallCup, index) => {

    smallCup.addEventListener("click", () => {

    		let lastCup = drankCups[drankCups.length - 1];

        if (!smallCup.classList.contains("full")) {

            for (let i = 0; i <= index; i++) {

                smallCups[i].classList.add("full");
                    
            }

        }

        else if (smallCup === lastCup) {

        	smallCup.classList.remove('full');
        }
        
        else {

            for (let i = index + 1; i < smallCups.length; i++ ) {

                let x = i + 1;

                smallCups[i].classList.remove("full");
                
            }

        } 

            drankCups = document.querySelectorAll(".full");

            addWater(drankCups.length)
    
    })

})

function addWater(drankCups) { 

    let i = 12.5;

    percentage.style.height = (drankCups * i) + "%";

    percentage.innerText = (drankCups * i) + "%";

    remained.innerText = 2 - (drankCups * i / 50)+ "L";

    if (remained.innerText === "0L") {

        remained.innerText = "";

        small.innerText = "";

    } else {

        small.innerText = "Remained";

    }

    if (percentage.innerText === "0%") {

        percentage.innerText = "";

    }

}