/**
 * IMPORT
 */
import { createStore } from 'redux';
import rootReducer from '../modules/rootReducer';


/**
 * CODE
 */

/**
 *  I create store
 */
 const store = createStore(rootReducer);


 /**
  * EXPORT
  */
 export default store;
