var recipes = [

{
title:"BBQ Pulled Pork",

image:"pizza.png",

description:"Slow-cooked tender pork in smoky barbecue sauce.",

rate:"4.7",

prepTime:"15 min",

cookTime:"240 min",

servings:"4 People",

ingredients:[
"Pork Shoulder",
"BBQ Sauce",
"Garlic",
"Salt",
"Black Pepper"
],

instructions:[
"Season the pork.",
"Cook for 4 hours.",
"Shred the meat.",
"Mix with BBQ sauce."
],

nutrition:[
"520 Calories",
"42g Protein",
"20g Fat"
],

tips:[
"Use fresh meat.",
"Cook slowly.",
"Serve with bread."
]

},

{

title:"Beef Burger",

image:"beef.png",

description:"Juicy grilled beef burger with cheese.",

rate:"4.8",

prepTime:"20 min",

cookTime:"15 min",

servings:"2 People",

ingredients:[
"Beef",
"Cheese",
"Burger Bread",
"Tomato",
"Lettuce"
],

instructions:[
"Grill the beef.",
"Toast the bread.",
"Add cheese.",
"Serve hot."
],

nutrition:[
"650 Calories",
"35g Protein",
"28g Fat"
],

tips:[
"Use fresh beef.",
"Don't overcook.",
"Add extra cheese."
]

},

{

title:"Chicken Pasta",

image:"pasta.png",

description:"Creamy chicken pasta with parmesan.",

rate:"4.9",

prepTime:"15 min",

cookTime:"30 min",

servings:"3 People",

ingredients:[
"Pasta",
"Chicken",
"Cream",
"Parmesan",
"Butter"
],

instructions:[
"Boil pasta.",
"Cook chicken.",
"Prepare sauce.",
"Mix together."
],

nutrition:[
"480 Calories",
"30g Protein",
"18g Fat"
],

tips:[
"Fresh parmesan tastes better.",
"Serve immediately.",
"Add parsley."
]

}

];

////////////////////////////////////////////////////////

function showRecipe(){

var random = Math.floor(Math.random()*recipes.length);

var recipe = recipes[random];

document.getElementById("recipeTitle").innerHTML = recipe.title;

document.getElementById("recipeImage").src = recipe.image;

document.getElementById("recipeDesc").innerHTML = recipe.description;

document.getElementById("recipeRate").innerHTML = recipe.rate;

document.getElementById("prepTime").innerHTML = recipe.prepTime;

document.getElementById("cookTime").innerHTML = recipe.cookTime;

document.getElementById("servings").innerHTML = recipe.servings;

//////////////////////////////////////////////////

var cartona="";

for(var i=0;i<recipe.ingredients.length;i++){

cartona += "<div class='item'><i class='fa-solid fa-circle-check'></i> "+recipe.ingredients[i]+"</div>";

}

document.getElementById("ingredients").innerHTML=cartona;

//////////////////////////////////////////////////

cartona="";

for(var i=0;i<recipe.instructions.length;i++){

cartona += "<div class='item'><i class='fa-solid fa-list'></i> "+recipe.instructions[i]+"</div>";

}

document.getElementById("instructions").innerHTML=cartona;

//////////////////////////////////////////////////

cartona="";

for(var i=0;i<recipe.nutrition.length;i++){

cartona += "<div class='item'><i class='fa-solid fa-heart'></i> "+recipe.nutrition[i]+"</div>";

}

document.getElementById("nutrition").innerHTML=cartona;

//////////////////////////////////////////////////

cartona="";

for(var i=0;i<recipe.tips.length;i++){

cartona += "<div class='item'><i class='fa-solid fa-lightbulb'></i> "+recipe.tips[i]+"</div>";

}

document.getElementById("tips").innerHTML=cartona;

}

////////////////////////////////////////////////////////

showRecipe();

////////////////////////////////////////////////////////

document.getElementById("nextRecipe").onclick = function(){

showRecipe();

};

document.getElementById("btnIngredients").onclick = function () {

    document.getElementById("ingredients").classList.add("active");
    document.getElementById("instructions").classList.remove("active");
    document.getElementById("nutrition").classList.remove("active");
    document.getElementById("tips").classList.remove("active");

};

document.getElementById("btnInstructions").onclick = function () {

    document.getElementById("ingredients").classList.remove("active");
    document.getElementById("instructions").classList.add("active");
    document.getElementById("nutrition").classList.remove("active");
    document.getElementById("tips").classList.remove("active");

};

document.getElementById("btnNutrition").onclick = function () {

    document.getElementById("ingredients").classList.remove("active");
    document.getElementById("instructions").classList.remove("active");
    document.getElementById("nutrition").classList.add("active");
    document.getElementById("tips").classList.remove("active");

};

document.getElementById("btnTips").onclick = function () {

    document.getElementById("ingredients").classList.remove("active");
    document.getElementById("instructions").classList.remove("active");
    document.getElementById("nutrition").classList.remove("active");
    document.getElementById("tips").classList.add("active");

};