import React, { useEffect, useState } from 'react';
import { apiLink } from './apiLink';

const ListOfActivities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  function getActivities() {
    setIsLoading(true);
    fetch(apiLink)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setActivities([...activities, data]);
        console.log("data => ", data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`something went wrong ${error}`);
      });
  }

  useEffect(() => {
    getActivities();
  }, []);

  if(activities.length === 0) {
    return <p>Loading ....</p>
  }

  return (
    <>
      <br />
      <hr />
      <h2>List of activities</h2>
      <button disabled={isLoading} onClick={getActivities}>Load Another</button>
     <ol>
      {activities.map((activity) => {
        return <li key={activity.key}>{activity.activity
        }</li>
      })}
     </ol>
    </>
  );
};

export default ListOfActivities;
