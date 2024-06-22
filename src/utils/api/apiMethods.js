import api from ".";
import PATHS from "./paths"


export function getAllProductsMethod(search) {
    let path = PATHS.GET_ALL_PRODUCTS
    if (search)
        path += "?search=" + search
    return api(path, null, "GET");
}

export function getAllCategoriesMethod() {
    return api(PATHS.GET_ALL_CATEGORIES, null, "GET");
}