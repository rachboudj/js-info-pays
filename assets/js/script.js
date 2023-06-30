let infos = document.querySelector("section")

let capitalDiv = document.createElement('div');
let flagDiv = document.createElement('div');
let countryDiv = document.createElement('div');
let continentDiv = document.createElement('div');

function search() {
    let textCountry = document.querySelector(".text").value

    let url = "https://restcountries.com/v3.1/name/" + textCountry;

    fetch(url)
        .then(res => res.json()
        .then(data => { 

            console.log(data);
            const country = data[0];
            const capital = country.capital;
            const continent = country.continents;
            const flag = country.flags.svg;


            flagDiv.innerHTML = `<h2>Drapeau</h2><img src="${flag}">`
            countryDiv.innerHTML = `<h2>Pays</h2><p>${textCountry}</p>`
            capitalDiv.innerHTML = `<h2>Capital</h2><p>${capital}</p>`
            continentDiv.innerHTML = `<h2>Continent</h2><p>${continent}</p>`

            infos.append(flagDiv, countryDiv, capitalDiv, continentDiv)
            // infos.appendChild(continentDiv)
            // infos.appendChild(capitalDiv)
            // infos.appendChild(flagDiv)
        }))
}
