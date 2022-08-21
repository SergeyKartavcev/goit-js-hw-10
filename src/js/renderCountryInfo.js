export function renderCountryInfo(countries) {
    const markup = countries
      .map(({ capital, population, languages, name, flags}) => {
        return `
          <ul class="country-info__list">
          <li class="country-list__item">
          <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
          <h2 class="country-list__name">${name.official}</h2></li>
          <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
          <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
          <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
          </ul>
          `
      })
      .join('')
    return markup
    
  }