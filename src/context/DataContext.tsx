import React, {useEffect } from 'react'
import { createContext, useState } from 'react';
import { data } from 'react-router-dom';

export const DataContext = createContext();

export default function DataProvider({ children}) {
    const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('https://fakestoreapi.com/products')  // Fetching data from the API
    .then(response => response.json())  // Parsing the response to JSON         
    .then(data => setProducts(data) )  // Setting the products state with the fetched data
    .catch(error => console.error('Error fetching data:', error));  // Handling errors  
    
}, []);  // Empty dependency array to run the effect only once on mount

console.log(products);  // Logging the products to the console for debugging

  return (
   <DataContext.Provider value={{products}}>
    {children}                                                              
    </DataContext.Provider>
  )
}
