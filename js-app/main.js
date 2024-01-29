const url = "https://localhost:5001/api";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
        .then(getAllCoffees)
        .then(coffees => {
            console.log(coffees)
        })
});

function getAllBeanVarieties() {
    return fetch(`${url}/beanvariety/`).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(`${url}/coffees/`).then(resp => resp.json());
}