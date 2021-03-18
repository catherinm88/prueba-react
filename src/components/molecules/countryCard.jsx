import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//const Curso = props => (
const CountryCard = ({image, name, population, region, capital}) => (
    <article className="country__item">
        <div className="country__item__image">
            <Link to={`/${name}`}>
                <img src={image} alt={name} />
            </Link>
        </div>
        <div className="country__text">
            <h3 className="country__text__title">
                {name}
            </h3>
            <div className="country__text__description"> 
                <div className="country__text__description__field">
                    Population:
                </div>
                <div className="country__text__description__value">
                    {population}
                </div>
            </div>
            <div className="country__text__description"> 
                <div className="country__text__description__field">
                    Region:
                </div>
                <div className="country__text__description__value">
                    {region}
                </div>
            </div>
            <div className="country__text__description"> 
                <div className="country__text__description__field">
                    Capital:
                </div>
                <div className="country__text__description__value">
                    {capital}
                </div>
            </div>
        </div>
    </article>
) 

CountryCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    population: PropTypes.number
}

CountryCard.defaultProps = {
    name: "No se encontró título",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Taipei_Skyline_2015.jpg/1200px-Taipei_Skyline_2015.jpg",
    population: 0
}

export default CountryCard;