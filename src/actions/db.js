import {types} from "../types/types";
import axios from "axios";


export const startdb = () => {
    return async (dispatch) => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
          dispatch(dbUpdate(response.data))
        })
    }
}

export const dbUpdate = (db) => ({
    type: types.updatedb,
    payload: db
})