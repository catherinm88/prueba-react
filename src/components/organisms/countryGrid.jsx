import React from 'react';
import withLoader from '../HOC/withLoader';
import CountryCard from '../molecules/countryCard'

const CountryGrid = ({countries}) => (
    <div className="country__grid">
        {
            countries.map( c => 
                <CountryCard 
                    image={c.flag} 
                    name={c.name} 
                    population={c.population} 
                    region={c.region}
                    capital={c.capital}
                /> 
            ) 
        }
    </div>
)

export default withLoader("countries",CountryGrid);