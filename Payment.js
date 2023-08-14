document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the saved summary table data from local storage
  const summaryTableData = localStorage.getItem("summaryTable");

  if (summaryTableData) {
      // Display the saved summary table data in the table
      const table = document.querySelector(".table");
      table.innerHTML = summaryTableData;
  } else {
      // Display a message if no summary table data is available
      const table = document.querySelector(".table");
      table.innerHTML = "<tr><td colspan='2'>No summary table data available.</td></tr>";
  }

  // Retrieve the saved user details from local storage
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  if (userDetails) {
      // Display the saved user details in the user details table
      document.getElementById("user-name").textContent = userDetails.fullName;
      document.getElementById("user-mobile").textContent = userDetails.mobileNumber;
      document.getElementById("user-email").textContent = userDetails.email;
      document.getElementById("user-gender").textContent = userDetails.gender;
  } else {
      console.log("User details not found in local storage.");
  }

  // Disable PAY button until all required inputs are filled
  const paymentForm = document.getElementById('paymentForm');
  const payButton = document.getElementById('payButton');
  const totalPayables = document.getElementById('totalPayables');

  const requiredInputs = paymentForm.querySelectorAll('input[required], select[required]');

  function togglePayButton() {
      const allFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');
      payButton.disabled = !allFilled;
  }

  // Listen for input events on the form fields
  requiredInputs.forEach(input => {
      input.addEventListener('input', togglePayButton);
  });

  // Update PAY button text based on total payables
  const totalPayablesValue = totalPayables.textContent;
  payButton.textContent = `PAY ${totalPayablesValue}`;

  // Add click event listener to the "PAY" button
  payButton.addEventListener("click", function() {
      // Retrieve the summary table data from local storage
      const summaryTableData = localStorage.getItem("summaryTable");

      // Redirect to confirmation.html and pass the summary table data as a query parameter
      window.location.href = `confirmation.html?summaryTable=${encodeURIComponent(summaryTableData)}`;
  });
});