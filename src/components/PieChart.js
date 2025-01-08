import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PieChart = ({ userData }) => {
  // Ensure userData is an object before proceeding
  if (!userData || typeof userData !== 'object') {
    return <div>Loading...</div>; // Show loading message if no data is passed
  }

  // Calculate total expenses and total number of travels
  const calculateTotalExpenses = () => {
    let totalExpenses = 0;
    let numberOfTravels = 0;

    // Loop through each user and their travel details to calculate the expenses
    Object.values(userData).forEach((userTravels) => {
      userTravels.forEach((travel) => {
        totalExpenses += travel.expenses;
        numberOfTravels++;
      });
    });

    return { totalExpenses, numberOfTravels };
  };

  const { totalExpenses, numberOfTravels } = calculateTotalExpenses();
  const averageExpense = totalExpenses / numberOfTravels;

  const data = {
    labels: ['Average Expense', 'Remaining Expense'],
    datasets: [
      {
        data: [averageExpense, totalExpenses - averageExpense],
        backgroundColor: ['#4CAF50', '#FFC107'],
        borderColor: ['#4CAF50', '#FFC107'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h3>Average Travel Expenses</h3>
      <div style={{ width: '50%', margin: 'auto' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
