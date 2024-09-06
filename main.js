function terminalClock() {
    setInterval(function () {   
      let now = new Date();  // Get the current date and time
  
      let hours = String(now.getHours()).padStart(2, '0'); // Get hours and add leading zero if needed
      let minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and add leading zero
      let seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds and add leading zero
  
      console.clear(); // Clear the terminal to only display the updated time
      console.log(`${hours}:${minutes}:${seconds}`); // Display the time
    }, 1000); // Update every second (1000 milliseconds)
  }
  
  terminalClock(); // Start the clock
  