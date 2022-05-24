import { ActionTypes } from "../contants/Action-types"


const initialState = {
    carts: [],
}

export const cartRecuder = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            return {
                ...state,

                carts: [...state.carts, payload]
            };
            case ActionTypes.REMOVE:
                const data = state.carts.filter((ele)=>ele.id !== payload)

                return{
                    ...state,
                    carts:data
                }
                return {};

        default:
            return state;

    }

}



