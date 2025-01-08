// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './TravelDetailsForm.css'

// const TravelDetailsForm = () => {
//     const [destination, setDestination] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [expenses, setExpenses] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!destination || !startDate || !endDate || !expenses) {
//             alert('Please fill in all fields');
//             return;
//         }

//         const travelDetails = {
//             destination,
//             startDate,
//             endDate,
//             expenses,
//         };

//         const email = localStorage.getItem('email');
//         const password = localStorage.getItem('password');

//         try {
            
//             console.log('Travel Details Payload:', { ...travelDetails, email, password });
//             const response = await axios.post(
//                 `${process.env.REACT_APP_API_URL}/travel/add-travel-details`,
//                 { ...travelDetails, email, password },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
            

//             if (response.status === 201) {
//                 alert('Travel details saved successfully');
//                 //navigate('/some-other-page');
//             }
//         } catch (error) {
//             console.error('Error saving travel details:', error);
//             alert('Failed to save travel details');
//         }
//     };

//     return (
//         <div>
//             <h1>Travel Details Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Destination:</label>
//                 <input
//                     type="text"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Start Date:</label>
//                 <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>End Date:</label>
//                 <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <label>Expenses:</label>
//                 <input
//                     type="number"
//                     value={expenses}
//                     onChange={(e) => setExpenses(e.target.value)}
//                     required
//                 />
//                 <br />
//                 <button type="submit">Save Travel Details</button>
//             </form>
//         </div>
//     );
// };

// export default TravelDetailsForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelDetailsForm.css';

const TravelDetailsForm = () => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [expenses, setExpenses] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!destination || !startDate || !endDate || !expenses) {
            alert('Please fill in all fields');
            return;
        }

        const travelDetails = {
            destination,
            startDate,
            endDate,
            expenses,
        };

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        // Simulate saving travel details
        console.log('Travel Details Payload:', { ...travelDetails, email, password });

        const dummyResponse = {
            status: 201,
            data: {
                message: 'Travel details saved successfully',
            },
        };

        // Simulate handling the response
        if (dummyResponse.status === 201) {
            alert(dummyResponse.data.message);
            // Redirect to another page if needed
            // navigate('/some-other-page');
        } else {
            alert('Failed to save travel details');
        }
    };

    return (
        <div>
            <h1>Travel Details Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Destination:</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <br />
                <label>Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
                <br />
                <label>End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
                <br />
                <label>Expenses:</label>
                <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Save Travel Details</button>
            </form>
        </div>
    );
};

export default TravelDetailsForm;
