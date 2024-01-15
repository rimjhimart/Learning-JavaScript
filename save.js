// Contractor Billing Program

// Function to calculate total cost
function calculateTotalCost(hoursWorked, hourlyRate) {
    const totalCost = hoursWorked * hourlyRate;
    return totalCost;
  }
  
  // Example usage
  const hoursWorked = 40; // Assume 40 hours worked
  const hourlyRate = 25; // Assume an hourly rate of $25
  
  const totalCost = calculateTotalCost(hoursWorked, hourlyRate);
  
  console.log(`Total cost for the contractor: $${totalCost}`);