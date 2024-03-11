// Creating a JavaScript function that permits the creation of a hamburger object
function createHamBurger(bunType, garnishes, cheeses, sauces, meatType, pattyCount, toppings) {

    let hamburger = {
        bun: bunType,
        garnishes: garnishes,
        cheeses: cheeses,
        sauces: sauces,
        meat: meatType,
        pattyCount: pattyCount,
        toppings: toppings,
        describe: function () {
            // Generating a description of the hamburger
            let description = `This hamburger has:\n`;
            description += `- Bun: ${this.bun}\n`;
            description += `- Garnishes: ${this.garnishes.join(', ')}\n`;
            description += `- Cheeses: ${this.cheeses.join(', ')}\n`;
            description += `- Sauces: ${this.sauces.join(', ')}\n`;
            description += `- Meat Type: ${this.meat}\n`;
            description += `- Patty Count: ${this.pattyCount}\n`;
            description += `- Toppings: ${this.toppings.join(', ')}\n`;
            return description;
        }
    };
    return hamburger;
}

// Creating a hamburger object using the createHamburger function
let myHamburger = createHamBurger(
    "sesame seed bun",
    ["lettuce", "tomato", "onion"],
    ["cheddar"],
    ["ketchup", "mayonnaise"],
    "beef",
    1,
    ["pickles", "hot peppers"]
);

// Get the second <p> element with the id "output"
let outputParagraph = document.getElementById("output");

// Set the inner text of the output paragraph to the description of the hamburger
outputParagraph.innerText = myHamburger.describe();
