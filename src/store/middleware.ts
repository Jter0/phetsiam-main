import {
  getAllProductsMethod,
  getAllCategoriesMethod,
} from "@/utils/api/apiMethods";
import { SET_CATEGORIES, SET_PRODUCTS } from "./actions";

export const _getAllProducts = () => async (dispatch: any) => {
  const res = await getAllProductsMethod();
  if (res?.length) {
    dispatch({ type: SET_PRODUCTS, payload: res });
  }
};

export const _getAllCategories = () => async (dispatch: any) => {
  const res = await getAllCategoriesMethod();
  if (res?.length) {
    dispatch({ type: SET_CATEGORIES, payload: res });
  }
};
