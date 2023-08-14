document.addEventListener('DOMContentLoaded', function() {
    // Function to display the summary table data from local storage
    const displaySummaryTableFromLocalStorage = () => {
        // Get the saved summary table data from local storage
        const summaryTableData = localStorage.getItem("summaryTable");
  
        // Check if there is any saved data in local storage
        if (summaryTableData) {
            // Display the saved summary table data in the details summary table
            const detailsSummaryTable = document.querySelector(".detailSummaryTable");
            detailsSummaryTable.innerHTML = summaryTableData;
        }
    };
  
    // Function to handle form submission
    const handleFormSubmission = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the user input from the form
      const fullName = document.getElementById("firstname").value;
      const mobileNumber = document.getElementById("country").value + document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const gender = document.getElementById("gender").value;
  
      // Update the user details in the user details table with the user input
      document.getElementById("userName").textContent = fullName;
      document.getElementById("usermobile").textContent = mobileNumber;
      document.getElementById("useremail").textContent = email;
      document.getElementById("usergender").textContent = gender;
  
      const userDetails = {
          fullName,
          mobileNumber,
          email,
          gender
      };
      console.log("User details saved:", userDetails);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
  
      // Save the summary table data to local storage
      const detailsSummaryTable = document.querySelector(".detailSummaryTable").innerHTML;
      localStorage.setItem("summaryTable", detailsSummaryTable);
  
      // Redirect to the payment.html page
      window.location.href = "payment.html";
  
      // Alert to inform the user that the data is saved (you can customize the message as needed)
      alert("User data and summary table data are saved to local storage.");
  };
  
    // Add event listener to the form submission
    const detailsForm = document.querySelector("form[action='details-form']");
    detailsForm.addEventListener("submit", handleFormSubmission);
  
    // Call the function to display the summary table data when the page is loaded
    displaySummaryTableFromLocalStorage();
  });