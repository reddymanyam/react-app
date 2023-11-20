import React, { useEffect, useState } from 'react';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Random User App</h1>
      {userData && (
        <div className="user-container">
          <img src={userData.picture.large} alt="User" />
          <p>Name: {userData.name.first} {userData.name.last}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
