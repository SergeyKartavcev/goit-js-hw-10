import './css/styles.css'
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix'
import { fetchCountries } from './js/fetchCountries'
import { renderCountryList } from './js/renderCountryList'
import { renderCountryInfo } from './js/renderCountryInfo'

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))

function onCountryInput() {
  const name = countryInput.value.trim()
  if (name === '') {
     countryList.innerHTML = '',
      countryInfo.innerHTML = ''
      Notiflix.Notify.info('please enter same name');
      return
  }

  fetchCountries(name)
    .then(countries => {
      countryList.innerHTML = ''
      countryInfo.innerHTML = ''
      if (countries.length === 1) {
        countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
        return
      } 
      else if (countries.length === 0) {
        Notiflix.Notify.info('please enter same name');
     }
      else if (countries.length >= 10) {
         Notiflix.Notify.failure("Too many matches found. Please enter a more specific name.")
      } else {
        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
      }
    })
    .catch(Notiflix.Notify.failure('Oops, there is no country with that name'))
}





