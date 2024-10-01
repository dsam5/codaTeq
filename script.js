// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select the "Enroll Now" buttons by ID
    var enrollAnalytics = document.getElementById("enroll-analytics");
    var enrollSQL = document.getElementById("enroll-sql");

    // Add click event listener for Data Analytics
    if (enrollAnalytics) {
        enrollAnalytics.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert("The Data Analytics Fundamentals course is coming soon! We are currently looking for instructors.");
        });
    }

    // Add click event listener for SQL for Data Management
    if (enrollSQL) {
        enrollSQL.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert("The SQL for Data Management course is coming soon! We are currently looking for instructors.");
        });
    }
});
