import { SET_CATEGORIES, SET_PRODUCTS } from "./actions";

const initialState = {
    products: [], categories: []
};

const reducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case SET_CATEGORIES: {
            return { ...state, categories: payload, };

        }
        case SET_PRODUCTS: {
            return { ...state, products: payload, };

        }

        default:
            return state;
    }


};

export default reducer;