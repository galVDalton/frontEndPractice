//gets 1st button from html
const button = document.querySelector("button")
//adds eventlistener for button when clicked
button.addEventListener("click", searchResults);

async function searchResults() {
    //const response = await fetch("https://catfact.ninja/fact");
    //const response = await fetch("https://www.boredapi.com/api/activity");
    let name = document.getElementById("name").value
    let status = document.getElementById("status").value
    //?name=rick&status=alive
    let url = "https://rickandmortyapi.com/api/character"
                + `?name=${name}&status=${status}`;
    
    const response = await fetch(url);
    //const response = await fetch("http://placekitten.com/g/200/300");
    const jsonData = await response.json();
    const results = jsonData.results;
    //console.log(jsonData.results[0].name);
    
    const charDiv = document.querySelector("#results");
    //empty div of previous results
     charDiv.innerHTML = ""
    for(var i=0; i < results.length; i++){
        // console.log(results[i]);
        charDiv.innerHTML += `<div>${results[i].name}`;
        charDiv.innerHTML += `<img src="${results[i].image}"></div>`;
    }

}
 