import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryGrid from '../organisms/countryGrid';
import {dbUpdate} from '../../actions/db';
import { useDispatch, useSelector } from 'react-redux';

const Countries = () => {
  let dispatch = useDispatch
  const db = useSelector(state => state.db)
  const [countries, setCountries] = useState([])

  useEffect(() => {
      axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        savedata(response.data)
      })
  }, [])

  const savedata = (data) => {
    if(db.lenght === 0) {
      dispatch(dbUpdate(data))
      setCountries(data)
    }
    else {
      setCountries(data)
    }
  }

  return (
    <CountryGrid countries={countries} /> 
  )
}

export default Countries;