// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the buttons for Data Analytics Fundamentals and SQL
    var analyticsBtn = document.getElementById("analytics-btn");
    var sqlBtn = document.getElementById("sql-btn");

    // Add click event listeners to show the "Coming Soon" message
    analyticsBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert("Data Analytics Fundamentals course is coming soon! We are currently looking for instructors.");
    });

    sqlBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert("SQL for Data Management course is coming soon! We are currently looking for instructors.");
    });
});
