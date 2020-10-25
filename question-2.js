// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getUrl() {
    try {
        const response = await fetch(url);

        const result = await response.json();
        console.log(result);

        const facts = result.results;
        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result">
            <p class="title"> Name: ${facts[i].name} </p>
            <p class="rating">Rating: ${facts[i].rating}</p>
            <p class="tags">Tags: ${facts[i].tags.length}</p>
            </div>`;
        }
    } catch (error) {
        console.log("An error occurred", error);
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
    finally {
        console.log("finally");
    }
}
getUrl();
