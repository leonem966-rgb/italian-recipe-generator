function generateRecipe(event) {
    event.preventDefault();

//let recipeElement = document.querySelector("#recipe");
//recipeElement.innerHTML = "Lasagna alla Bolognese";

new Typewriter("#recipe", {
    strings: ["Lasagna alla Bolognese"],
    autoStart: true,
    delay: 75,
    cursor: "",
});

}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);