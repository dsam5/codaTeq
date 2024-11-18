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
document.addEventListener("DOMContentLoaded", function () {
    // Modal elements
    const joinNowBtn = document.getElementById("join-now-btn");
    const modal = document.getElementById("join-modal");
    const closeModal = document.querySelector(".close-btn");
    const joinForm = document.getElementById("join-form");

    // Open the modal
    joinNowBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close the modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Handle form submission
    joinForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const newsletter = document.getElementById("newsletter").checked;

        // Log the data (replace with API call or database storage)
        console.log({
            name: name,
            email: email,
            newsletter: newsletter,
        });

        // Close modal and reset form
        modal.style.display = "none";
        joinForm.reset();

        // Confirmation message
        alert("Thank you for joining the codaTeq community!");
    });
});
joinForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const newsletter = document.getElementById("newsletter").checked;

    // Send data to API
    fetch("http://localhost:27017/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, newsletter }),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            alert("Thank you for joining the codaTeq community!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting your form. Please try again.");
        });

    // Close modal and reset form
    modal.style.display = "none";
    joinForm.reset();
});

