import React, { useEffect, useState } from 'react';
import {apiLink} from './apiLink'

const Activities = () => {
  const [activity, setActivity] = useState(''); 
  const [isLoading, setIsLoading] = useState(true)

  const fetchApi = () => {
    setIsLoading(true)
    fetch(apiLink)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json()
    })
    .then((data) => {
        setActivity(data.activity)
        setIsLoading(false)
    })
    .catch((error) => {
        console.log("error =>", error)
    })
  };

  useEffect(() => {fetchApi()}, []);


  return (
    <>
      <h1>Something Fun</h1>
      {isLoading ? <p>Loading....</p> : <p>{activity}</p>}
      <button onClick={fetchApi}>Load Another</button>
    </>
  );
};

export default Activities;
