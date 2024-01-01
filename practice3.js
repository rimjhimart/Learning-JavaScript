// Example function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation, like fetching data from an API
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        // Resolve the promise with the data
        resolve(data);
        // If something went wrong, reject the promise
        // reject(new Error("Failed to fetch data"));
      }, 2000);
    });
  }
  
  // Consuming the promise
  fetchData()
    .then((result) => {
      console.log(result); // Output the resolved data
    })
    .catch((error) => {
      console.error(error); // Handle any errors that occurred during the process
    });