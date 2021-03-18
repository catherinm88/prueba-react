import {types} from "../types/types";

const initialState = {
    db: []
}

export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updatedb:
            return {
                ...state,
                db: action.payload
            };
        default:
            return state;
    }
}