import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import "./AdminDashboard.css";
{/*import React, { useState, useEffect } from 'react';
  import PieChart from './PieChart';
  import './AdminDashboard.css';
  
  const AdminDashboard = () => {
    const [usersData, setUsersData] = useState({});
    const [error, setError] = useState('');
    
    // Dummy data for users
    const dummyData = {
      users: {
        "John Doe": [
          {
            destination: "New York",
            startDate: "2025-02-01T00:00:00.000Z",
            endDate: "2025-02-10T00:00:00.000Z",
            expenses: 2000,
            },
            {
              destination: "Los Angeles",
              startDate: "2025-03-01T00:00:00.000Z",
              endDate: "2025-03-05T00:00:00.000Z",
              expenses: 1500,
              },
              ],
              "Avinash": [
        {
          destination: "USA",
          startDate: "2025-01-03T00:00:00.000Z",
          endDate: "2025-01-03T00:00:00.000Z",
          expenses: 1200,
          },
          {
            destination: "Paris",
            startDate: "2025-03-01T00:00:00.000Z",
            endDate: "2025-03-10T00:00:00.000Z",
            expenses: 500,
            },
            {
              destination: "London",
              startDate: "2025-04-10T00:00:00.000Z",
              endDate: "2025-04-20T00:00:00.000Z",
              expenses: 2500,
              },
              ],
              "Rushil": [
                {
                  destination: "India",
                  startDate: "2025-01-01T00:00:00.000Z",
                  endDate: "2025-01-05T00:00:00.000Z",
                  expenses: 1000,
                  },
                  {
                    destination: "Australia",
                    startDate: "2025-02-10T00:00:00.000Z",
                    endDate: "2025-02-20T00:00:00.000Z",
                    expenses: 1800,
                    },
                    ],
                    },
                    };
                    
                    useEffect(() => {
                      setUsersData(dummyData.users);
                      }, []);

                      const handleAccept = (userName, travelIndex) => {
                        alert(`Travel details for ${userName}, trip ${travelIndex + 1} accepted!`);
                        // Here you can update the status in your real data, or perform other actions
                        };
                        
                        const handleReject = (userName, travelIndex) => {
                          alert(`Travel details for ${userName}, trip ${travelIndex + 1} rejected!`);
                          // Here you can update the status in your real data, or perform other actions
                          };
                          
                          return (
                            <div className="admin-dashboard">
                            <h1>Admin Dashboard</h1>
                            {error && <p className="error">{error}</p>}

                            {/* Flexbox Layout: PieChart and User Data Cards side by side 
                            <div className="dashboard-content">
                            {/* PieChart Component 
                            <div className="pie-chart-container">
                            <PieChart userData={usersData} />
                            </div>
                            
                            {/* User Data Cards *
                            <div className="user-cards">
                            {Object.keys(usersData).map((userName) => (
                              <div className="user-card" key={userName}>
                              <h3>{userName}</h3>
                              {usersData[userName].map((travel, index) => (
                                <div key={index} className="travel-details">
                                <div className="travel-card">
                    <p><strong>Destination:</strong> {travel.destination}</p>
                    <p><strong>Start Date:</strong> {new Date(travel.startDate).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(travel.endDate).toLocaleDateString()}</p>
                    <p><strong>Expenses:</strong> ${travel.expenses}</p>
                    
                    {/* Accept and Reject Buttons *
                    <div className="action-buttons">
                    <button
                    onClick={() => handleAccept(userName, index)}
                    className="accept-button"
                      >
                        Accept
                        </button>
                        <button
                        onClick={() => handleReject(userName, index)}
                        className="reject-button"
                        >
                        Reject
                        </button>
                        </div>
                        </div>
                        </div>
                        ))}
                        </div>
                        ))}
                        </div>
                        </div>
                        </div>
                        );
                        };
                        
                        export default AdminDashboard;*/}
                        
//                         import React, { useState, useEffect } from "react";
//                         import PieChart from "./PieChart";
//                         import "./AdminDashboard.css";
                        
//                         const AdminDashboard = () => {
//   const [usersData, setUsersData] = useState({});
//   const [error, setError] = useState("");
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/detail`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: "admin@gmail.com",
//             password: "123456",
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch data from server");
//         }

//         const data = await response.json();
//         setUsersData(data.users);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAccept = (userName, travelIndex) => {
//     alert(`Travel details for ${userName}, trip ${travelIndex + 1} accepted!`);
//   };

//   const handleReject = (userName, travelIndex) => {
//     alert(`Travel details for ${userName}, trip ${travelIndex + 1} rejected!`);
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       {error && <p className="error">{error}</p>}

//       {/* Flexbox Layout: PieChart and User Data Cards side by side */}
//       <div className="dashboard-content">
//         {/* PieChart Component */}
//         <div className="pie-chart-container">
//           <PieChart userData={usersData} />
//         </div>

//         {/* User Data Cards */}
//         <div className="user-cards">
//           {Object.keys(usersData).map((userName) => (
//             <div className="user-card" key={userName}>
//               <h3>{userName}</h3>
//               {usersData[userName].map((travel, index) => (
//                 <div key={index} className="travel-details">
//                   <div className="travel-card">
//                     <p>
//                       <strong>Destination:</strong> {travel.destination}
//                     </p>
//                     <p>
//                       <strong>Start Date:</strong>{" "}
//                       {new Date(travel.startDate).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <strong>End Date:</strong>{" "}
//                       {new Date(travel.endDate).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <strong>Expenses:</strong> ${travel.expenses}
//                     </p>

//                     {/* Accept and Reject Buttons */}
//                     <div className="action-buttons">
//                       <button
//                         onClick={() => handleAccept(userName, index)}
//                         className="accept-button"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleReject(userName, index)}
//                         className="reject-button"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


const AdminDashboard = () => {
  const [usersData, setUsersData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulated fetchData function with dummy data
    const fetchData = () => {
      const dummyData = {
        "John Doe": [
          {
            destination: "Paris",
            startDate: "2023-12-01",
            endDate: "2023-12-10",
            expenses: 1500,
          },
          {
            destination: "New York",
            startDate: "2024-01-15",
            endDate: "2024-01-25",
            expenses: 2000,
          },
        ],
        "Jane Smith": [
          {
            destination: "Tokyo",
            startDate: "2024-02-01",
            endDate: "2024-02-10",
            expenses: 1800,
          },
        ],
      };

      setUsersData(dummyData);
      setError('');
    };

    fetchData();
  }, []);

  const handleAccept = (userName, travelIndex) => {
    alert(`Travel details for ${userName}, trip ${travelIndex + 1} accepted!`);
  };

  const handleReject = (userName, travelIndex) => {
    alert(`Travel details for ${userName}, trip ${travelIndex + 1} rejected!`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}

      {/* Flexbox Layout: PieChart and User Data Cards side by side */}
      <div className="dashboard-content">
        {/* PieChart Component */}
        <div className="pie-chart-container">
          <PieChart userData={usersData} />
        </div>

        {/* User Data Cards */}
        <div className="user-cards">
          {Object.keys(usersData).map((userName) => (
            <div className="user-card" key={userName}>
              <h3>{userName}</h3>
              {usersData[userName].map((travel, index) => (
                <div key={index} className="travel-details">
                  <div className="travel-card">
                    <p>
                      <strong>Destination:</strong> {travel.destination}
                    </p>
                    <p>
                      <strong>Start Date:</strong>{" "}
                      {new Date(travel.startDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>End Date:</strong>{" "}
                      {new Date(travel.endDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Expenses:</strong> ${travel.expenses}
                    </p>

                    {/* Accept and Reject Buttons */}
                    <div className="action-buttons">
                      <button
                        onClick={() => handleAccept(userName, index)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(userName, index)}
                        className="reject-button"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
