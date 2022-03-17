import React from 'react';
import './country.css';

const Country = (props) => {
    console.log(props);
    const {name, population, area, continents, translations} = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <h4>Population: {population}</h4>
            <h3>Area: {area}</h3>
            <p>continent: {continents[0]}</p>
            <p>translations: {translations.ara.official}</p>
            
        </div>
    );
};

export default Country;