document.getElementById('courseDropdown').addEventListener('change', function() {
    const dropdown = document.getElementById('courseDropdown');
    const searchButton = document.getElementById('searchButton');
    
    // Show the button if a valid option is selected
    if (dropdown.value !== "") {
        searchButton.style.display = 'block'; // Show the button
    } else {
        searchButton.style.display = 'none'; // Hide the button if no option is selected
    }
});

// Redirect to different pages based on the selected course
document.getElementById('searchButton').addEventListener('click', function() {
    const selectedCourse = document.getElementById('courseDropdown').value;
    
    if (selectedCourse === "1") {
        window.location.href = "after10th.html"; // Redirect to 10th page
    } else if (selectedCourse === "0") {
        window.location.href = "inter.html"; // Redirect to Inter page
    }
});
  