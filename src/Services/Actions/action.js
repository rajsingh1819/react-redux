import { ADD_TO_CART } from "../Constants"
import { REMOVE_TO_CART } from "../Constants"

export const add_to_cart = (data) => {
    console.log("action ", data);
    return {
        type: ADD_TO_CART,
        data: data,

    }

}


// export const remove_to_cart = (data) => {
//     return {
//         type: REMOVE_TO_CART,
//         data: data,

//     }

// }