// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UserDetails.css';

// const UserDetails = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const email = localStorage.getItem('email'); // Fetch email from localStorage
//       const password = localStorage.getItem('password'); // Fetch password from localStorage

//       if (!email || !password) {
//         setError('User is not logged in');
//         return;
//       }

//       try {
//         console.log(email,password)
//         const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/details`, {
//           email,
//           password,
//         }); // Assuming your backend validates email/password for fetching details

//         setUserDetails(response.data);
//         setError('');
//       } catch (err) {
//         console.error('Error fetching user details:', err);
//         setError('Failed to fetch user details');
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       {userDetails && (
//         <>
//           <h2>User Details</h2>
//           <p>Name: {userDetails.name}</p>
//           <p>Email: {userDetails.email}</p>
//           <h3>Travel Details:</h3>
//           <ul>
//             {userDetails.travelDetails.map((detail, index) => (
//               <li key={index}>
//                 <p>Destination: {detail.destination}</p>
//                 <p>Start Date: {new Date(detail.startDate).toLocaleDateString()}</p>
//                 <p>End Date: {new Date(detail.endDate).toLocaleDateString()}</p>
//                 <p>Expenses: {detail.expenses}</p>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserDetails;

import React, { useEffect, useState } from 'react';
import './UserDetails.css';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = () => {
      const email = localStorage.getItem('email'); // Fetch email from localStorage
      const password = localStorage.getItem('password'); // Fetch password from localStorage

      if (!email || !password) {
        setError('User is not logged in');
        return;
      }

      console.log('Simulated credentials:', email, password);

      // Simulate user details with dummy data
      const dummyResponse = {
        name: 'John Doe',
        email,
        travelDetails: [
          {
            destination: 'Paris',
            startDate: '2023-12-01',
            endDate: '2023-12-10',
            expenses: 1500,
          },
          {
            destination: 'New York',
            startDate: '2024-01-15',
            endDate: '2024-01-25',
            expenses: 2000,
          },
        ],
      };

      setUserDetails(dummyResponse);
      setError('');
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {userDetails && (
        <>
          <h2>User Details</h2>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <h3>Travel Details:</h3>
          <ul>
            {userDetails.travelDetails.map((detail, index) => (
              <li key={index}>
                <p>Destination: {detail.destination}</p>
                <p>Start Date: {new Date(detail.startDate).toLocaleDateString()}</p>
                <p>End Date: {new Date(detail.endDate).toLocaleDateString()}</p>
                <p>Expenses: {detail.expenses}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserDetails;
