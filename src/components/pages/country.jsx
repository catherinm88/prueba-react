import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { startdb } from "../../actions/db";
import {useDispatch} from "react-redux";

const Country = ({match}) => {
    const db = useSelector(state => state.db)
    const dispatch = useDispatch();
    const [state, setState] = useState({})

    useEffect(() => {
        dispatch(startdb())
        axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
        .then(response => {
            setState(response.data[0])})
    }, [])
    console.log('mememem', db);
    return (
        <div className="countryInfo">
            {
                state.topLevelDomain ? (
                    <>
                        <div className="countryInfo__image">
                            <img src={ state.flag } alt={ state.name } />
                        </div>
                        <div className="countryInfo__text">    
                            <h1 className="countryInfo__text__title">
                                { state.name }
                            </h1>
                            <div className="countryInfo__text__column">
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Native Name:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { state.nativeName }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Population:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { state.population }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Region:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { state.region }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Sub Region:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { state.subregion }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Capital:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { state.capital }
                                    </div>
                                </div>
                            </div>
                            <div className="countryInfo__text__column">
                            <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Top Level Domain:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                       { 
                                            state.topLevelDomain.map( item => {
                                                return `${item}, `;
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Currencies:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { 
                                            state.currencies.map( item => {
                                                return `${item.name}, `;
                                            })   
                                        }
                                    </div>
                                </div>
                                <div className="countryInfo__text__description"> 
                                    <div className="countryInfo__text__description__field">
                                        Languages:
                                    </div>
                                    <div className="countryInfo__text__description__value">
                                        { 
                                            state.languages.map( item => {
                                                return `${item.name}, `;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="countryInfo__text__extra">
                                <div className="countryInfo__text__extra__title">
                                    Border Countries: 
                                </div>
                                <div className="countryInfo__text__description__value">
                                    { 
                                        state.borders.map( item => {
                                            return `${item}, `;
                                        })
                                    } 
                                </div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <h1>Cargando...</h1>
                )
            }

        </div>
    )
}

/* export default withLoader("state", Country); */
export default  Country;