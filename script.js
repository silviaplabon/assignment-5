// searchDetails section
const searchDetails = () => {
    const input = document.getElementById('inputText').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))
        .catch(error =>displayError());
}
//displayDetails section
const displayDetails = meals => {
    const parentNode = document.getElementById("detailsInfo");
    parentNode.innerHTML = "";
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row row-cols-1 row-cols-md-4 g-4';
    meals.forEach(meal => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        const currentInfo = `
                <div class="card h-100" onclick="detailsFoodItem('${meal.idMeal}')" >
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${meal.strMeal}</h5>
                        </div>
                </div>`;
        colDiv.innerHTML = currentInfo;
        rowDiv.appendChild(colDiv);
    })
    parentNode.appendChild(rowDiv);
}

//datails food item 
const detailsFoodItem = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayIngredient(data.meals[0]))
}
const displayIngredient = meal => {
    console.log(meal);
    var array = [];
    array.push(meal.strMeasure1 + " " + meal.strIngredient1);
    array.push(meal.strMeasure2 + " " + meal.strIngredient2);
    array.push(meal.strMeasure3 + " " + meal.strIngredient3);
    array.push(meal.strMeasure4 + " " + meal.strIngredient4);
    array.push(meal.strMeasure5 + " " + meal.strIngredient5);
    array.push(meal.strMeasure6 + " " + meal.strIngredient6);
    array.push(meal.strMeasure7 + " " + meal.strIngredient7);
    array.push(meal.strMeasure8 + " " + meal.strIngredient8);
    array.push(meal.strMeasure9 + " " + meal.strIngredient9);
    array.push(meal.strMeasure10 + " " + meal.strIngredient10);
    array.push(meal.strMeasure11 + " " + meal.strIngredient11);
    array.push(meal.strMeasure12 + " " + meal.strIngredient12);
    array.push(meal.strMeasure13 + " " + meal.strIngredient13);
    array.push(meal.strMeasure14 + " " + meal.strIngredient14);
    array.push(meal.strMeasure15 + " " + meal.strIngredient15);
    array.push(meal.strMeasure16 + " " + meal.strIngredient16);
    array.push(meal.strMeasure17 + " " + meal.strIngredient17);
    array.push(meal.strMeasure18 + " " + meal.strIngredient18);
    array.push(meal.strMeasure19 + " " + meal.strIngredient19);
    array.push(meal.strMeasure20 + " " + meal.strIngredient20);

    document.getElementById('title').innerText = "";
    const imageDiv = document.getElementById('imageShow');
    imageDiv.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", `${meal.strMealThumb}`);
    img.className = "w-100";
    img.setAttribute('style',"height:400px;");
    imageDiv.appendChild(img);
    document.getElementById('title').innerText = `${meal.strMeal}`;
    document.getElementById('subtitle').innerText = "Ingredients";

    //detailsingredient element for showing
    const ulNode = document.getElementById('detailsIngredient');
    ulNode.innerHTML = "";
    array.forEach(item => {
        if (item.length > 2 && item !== "null null") {
            const liNode = document.createElement('li');
            liNode.className = "list-group-item";
            liNode.innerHTML =
                `<i class="fas fa-check-square" style="color:#F06C4E;"></i> ${item}`
            ulNode.appendChild(liNode);
        }
    })
}
//erro handling section
const displayError = () => {
    const errorTag = document.getElementById('detailsInfo');
    errorTag.innerHTML = `<h1 class="display-4 mt-5 text-center">Something Went Wrong ,please try again later!!!</h1>`;
}