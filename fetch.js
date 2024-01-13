// Fetch leopard-related data from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the leopard-related data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });