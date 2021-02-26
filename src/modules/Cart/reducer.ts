/**
 * IMPORTS
 */
import { Reducer } from "redux";
import { ICartState } from "./types";

/**
 * CONSTANTS AND DEFINITIONS
 */
const INITIAL_STATE: ICartState = {
    items: []
};


/**
 * CODE
 */

/**
 * I create cart reducer 
 */
const cart: Reducer<ICartState> = () => {
    return INITIAL_STATE;
}


/**
 * EXPORT
 */
export default cart;
