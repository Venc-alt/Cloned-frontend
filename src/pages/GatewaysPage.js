// // src/pages/GatewaysPage.js
// import React from 'react';
// import GatewayList from '../components/GatewayList';

// const GatewaysPage = () => {
//   return (
//     <div>
//       <h2>Gateways Page</h2>
//       <GatewayList />
//     </div>
//   );
// };

// export default GatewaysPage;

// src/pages/GatewaysPage.js
import React, { useEffect, useState } from 'react';
import GatewayList from '../components/GatewayList';
import { getReturns } from '../api/api';

const GatewaysPage = () => {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchReturns = async () => {
      try {
        const response = await getReturns();
        setReturns(response.data);
      } catch (error) {
        console.error('Error fetching returns:', error);
      }
    };

    fetchReturns();
  }, []);

  return (
    <div>
      <h2>Gateways Page</h2>
      <GatewayList />
      
      <h3 className="mt-4">Returns</h3>
      {returns.length > 0 ? (
        <ul className="list-group">
          {returns.map((returnItem) => (
            <li key={returnItem._id} className="list-group-item">
              {returnItem.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No returns available.</p>
      )}
    </div>
  );
};

export default GatewaysPage;
