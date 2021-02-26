/**
 * IMPORTS
 */
import React from 'react';
import { Provider } from  'react-redux';
import Catalog from './components/Catalag';
import store from './store';


/**
 * CODE
 */

 /**
 * I render the app.
 *
 * :returns: app component
 */
function App() {
  return ( 

    // provider redux store
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}


/**
 * EXPORTS
 */
export default App;
