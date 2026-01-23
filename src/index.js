function displayRecipe(response) {
    console.log("recipe generated");
new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
});

}


function generateRecipe(event) {
    event.preventDefault();


let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "abtb6a92443361bbdo4b8fd76decc014";
let prompt = `User instructions: Generate an Italian recipe about ${instructionsInput.value}`;
let context = "You are an expert in Italian recipes. You love to write short Italian recipes with eight ingredients or less. Your mission is to generate an Italian recipes with 8 lines of ingredients or less in basic HTML. Make sure to follow the user intstructions. Sign the bottom of the recipe with SheCodes AI.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log ("Generating recipe");
console.log('Prompt: ${prompt}');
console.log('Context: ${context}');

axios.get(apiUrl).then(displayRecipe); 
}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

