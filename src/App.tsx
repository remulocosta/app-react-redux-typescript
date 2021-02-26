/**
 * IMPORTS
 */
import React from 'react';
import { Provider } from  'react-redux';
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
      <h1>Projeto redux</h1>
    </Provider>
  );
}


/**
 * EXPORTS
 */
export default App;
