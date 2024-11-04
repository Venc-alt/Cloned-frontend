
// import React, { useEffect, useState } from 'react';
// import GatewayList from '../components/GatewayList';
// import { getReturns } from '../api/api';

// const GatewaysPage = () => {
//   const [returns, setReturns] = useState([]);

//   useEffect(() => {
//     const fetchReturns = async () => {
//       try {
//         const response = await getReturns();
//         setReturns(response.data);
//       } catch (error) {
//         console.error('Error fetching returns:', error);
//       }
//     };

//     fetchReturns();
//   }, []);

//   return (
//     <div>
//       <h2>Gateways Page</h2>
//       <GatewayList />
      
//       <h3 className="mt-4">Returns</h3>
//       {returns.length > 0 ? (
//         <ul className="list-group">
//           {returns.map((returnItem) => (
//             <li key={returnItem._id} className="list-group-item">
//               {returnItem.name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No returns available.</p>
//       )}
//     </div>
//   );
// };

// export default GatewaysPage;

// src/pages/GatewaysPage.js
import React, { useState, useEffect } from 'react';
import GatewayList from '../components/GatewayList';
import { getReturns } from '../api/api'; // Import API call to fetch returns

const GatewaysPage = () => {
  const [returns, setReturns] = useState([]); // State for storing returns

  useEffect(() => {
    // Fetch returns when the component mounts
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

      {/* Display the status of Returns */}
      <div className="mt-5">
        <h3>Current Returns Status</h3>
        {returns.length > 0 ? (
          <ul className="list-group">
            {returns.map((ret) => (
              <li key={ret._id} className="list-group-item">
                <strong>Name:</strong> {ret.name} <br />
                <strong>Status:</strong> {ret.status || 'N/A'}
              </li>
            ))}
          </ul>
        ) : (
          <p>No returns available.</p>
        )}
      </div>
    </div>
  );
};

export default GatewaysPage;
