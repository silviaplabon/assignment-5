// searchDetails section
const searchDetails = () => {
    //hiding details pf previous section
    displayNone('rowDiv');
    displayNone('imageShow');
    displayNone('detailsSection');
    displayNone('errorInfo');
    const input = document.getElementById('inputText').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))
        .catch(err => displayError());
}
//displayDetails section using bootstrap
const displayDetails = meals => {
    const rowDiv = document.getElementById('rowDiv');
    meals.forEach(meal => {
        console.log(meal);
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        const currentInfo = `
                <div class="card h-100" onclick="detailsFoodItem('${meal.idMeal}')" >
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body cardDesign">
                            <h5 class="card-title text-center ">${meal.strMeal}</h5>
                        </div>
                </div>`;
        colDiv.innerHTML = currentInfo;
        rowDiv.appendChild(colDiv);
    })
}

//details food item section 
const detailsFoodItem = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayIngredient(data.meals[0]))
}

const displayIngredient = meal => {
    displayNone('imageShow');
    displayNone('detailsSection');
    const imageDiv = document.getElementById('imageShow');
    imageDiv.innerHTML=`<img src="${meal.strMealThumb}" class="w-100 ingredientImg" alt="image not Showing">`;
    const detailsSection=document.getElementById('detailsSection');
    detailsSection.innerHTML=`
    <h2 class="mt-4">${meal.strMeal}</h2>
    <h4  class="mt-3"> Ingredients</h4>
    <ul class="list-group" id="detailsIngredient"></ul>`
    //detailsingredient element for showing
    const ulNode = document.getElementById('detailsIngredient');
    ulNode.innerHTML = "";
    for (let i = 1; i < 20; i++) {
        const value = `${meal[`${`strMeasure${i}`}`]} ${meal[`${`strIngredient${i}`}`]}`;//dynamically accessing strMeasure and strIngredient value.
        if (value !== "null null" && value.length > 2) {
            const liNode = document.createElement('li');
            liNode.className = "list-group-item";
            liNode.innerHTML =
                `<i class="fas fa-check-square" style="color:#F06C4E;"></i> ${value}`
            ulNode.appendChild(liNode);
        }
    }
}

//erro handling section
const displayError = () => {
    displayNone('rowDiv');
    const errorTag = document.getElementById('errorInfo');
    errorTag.innerHTML = `<h1 class="display-4 mt-5 text-center">You are providing a wrong food item ,please try to provide a right value!!!</h1>`;
}
const displayNone = (id) => {
    const Node = document.getElementById(id);
    Node.innerHTML = "";
}