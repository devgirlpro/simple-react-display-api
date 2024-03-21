import React, { useEffect, useState } from 'react';
import { apiLink } from './apiLink';

const Activities = () => {
  const [activity, setActivity] = useState('');
  const [isLoading, setIsLoading] = useState(true);

    function loadActivity() {
        setIsLoading(true)
      fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity)
        setIsLoading(false)
      })
    }

//   const loadActivity = () => {
//     setIsLoading(true);
//     console.log('1 =>', isLoading);
//     fetch(apiLink)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setActivity(data.activity);
//         setIsLoading(false);
//         console.log('2 =>', isLoading);
//       })
//       .catch((error) => {
//         console.log('error =>', error);
//         setIsLoading(false);
//         console.log('2 =>', isLoading);
//       });
//     setIsLoading(false);
//     console.log('3 =>', isLoading);
//   };

  useEffect(() => {
    loadActivity();
  }, []);


//   if(isLoading) {
//     return <p>Loading ...</p>
//   }

  return (
    <>
      <h1>Something Fun</h1>
      {isLoading ? <p>Loading ...</p> : <p>{activity}</p>}
      <button onClick={loadActivity}>Load Another</button>
    </>
  );
};

export default Activities;
