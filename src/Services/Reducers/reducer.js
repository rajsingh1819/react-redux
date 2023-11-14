import { ADD_TO_CART } from "../Constants";

const initialState = {
    cardData: []
}

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer ", action);
            return [
                ...state,
                { cardData: action.data }
            ]

        default:
            return state
    }
}