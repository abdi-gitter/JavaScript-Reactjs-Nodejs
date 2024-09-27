// set up event listeners for buttons for search and clear
// Searching elements


document.getElementById('search').addEventListener('click', () => {
    const search = document.getElementById('input').value
    console.log(search)
    searchCountry(search)
})

// Clear the countries container:

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('country-container').innerHTML = ""
})


// search for a country
// here we need to fetch data, 
// and determine whether to append the country or render an error

const searchCountry = async (countryName) => {
    try {
        // request country data from API:
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        console.log(response)

        if (!response.ok) {
            throw new Error('Country not found')
        }

        const data = await response.json()
        console.log(data)

        // Data is an array of objects.  Each object is a country that matches our search.
        // We only want the first element in this array.//

        let countryData = data.length > 1 ?data.filter(country => country.name.common.toLowerCase() === countryName.toLowerCase())[0] : data[0]
        // Loop through this countryData array, and filter out all countries that don't have the common name matching the search value.
        
        console.log(countryData)
        // RENDER COUNTRY!!!
        renderCountry(countryData)

    } catch (error) {
        console.log(error)
        // render an error message by calling the renderError function
        renderError(error)
    }
}

// render and append a country to the dom
// here, we create a country element and append it to the countries container

const renderCountry = (country) => {

    const {
        name : { common: countryName },
        flags: {svg: flag},
        continents,
        capital,
        population,
        languages
    } = country

    console.log(countryName)

    // Object Values returns an array of the values of the object
    console.log(Object.values(languages).join(', '))

    const card = document.createElement('div')
    card.classList = "card country-card col-10 col-sm-6 col-lg-3 p-2 mx-2 my-3"

    card.innerHTML = `
    <img
      src="${flag}"
      class="card-img-top border border-secondary"
      alt="Flag"
    />
    <div class="card-body">
      <h5 class="card-title">${countryName}</h5>
      <p class="card-text">${continents[0]}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span><i class="fas fa-2x fa-landmark"></i>${capital}</span>
      </li>
      <li class="list-group-item">
        <span
          ><i class="fas fa-lg fa-users"></i>
          ${(population/1000000).toFixed(2)} Million
        </span>
      </li>
      <li class="list-group-item">
        <span
          ><i class="fas fa-lg fa-comments"></i>
          ${Object.values(languages).join(', ')}
        </span>
      </li>
    </ul>
    `

    const container = document.getElementById('country-container')
    container.appendChild(card)
}

// render an error message

// here, we create an error element and append it to the countries container
// remove after 3 seconds
const renderError = (msg) => {
    const headerContainer = document.getElementById("header-container");
    const errorHtml = document.createElement("div");
  
    errorHtml.classList.add("alert", "alert-danger", "alert-container");
    errorHtml.innerText = msg;
    headerContainer.insertAdjacentElement("beforeend", errorHtml);
    // errorHtml.remove();
    setTimeout(() => {
      errorHtml.remove();
    }, 3000);
  };
