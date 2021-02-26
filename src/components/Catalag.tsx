/**
 * IMPORTS
 */
import React from 'react'
import { useSelector } from 'react-redux';


/**
 * CODE
 */

 /**
  *  I render catalog component
  */
const Catalog: React.FC = () => {
    const catalog = useSelector(state => state);

    console.log(catalog)
    return (
        <h1>Catalog</h1>
    )
}


 /**
  * EXPORTS
  */
 export default Catalog;
