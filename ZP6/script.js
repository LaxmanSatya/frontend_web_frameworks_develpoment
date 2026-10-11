// Get the form
const resultForm = document.getElementById("resultForm");

// Get the clear button
const clearBtn = document.getElementById("clearBtn");

// Get result section
const resultSection = document.getElementById("resultSection");


// When the form is submitted
resultForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get student details
    const studentName =
        document.getElementById("studentName").value.trim();

    const rollNumber =
        document.getElementById("rollNumber").value.trim();


    // Get subject marks
    const maths =
        Number(document.getElementById("maths").value);

    const physics =
        Number(document.getElementById("physics").value);

    const chemistry =
        Number(document.getElementById("chemistry").value);

    const programming =
        Number(document.getElementById("programming").value);

    const english =
        Number(document.getElementById("english").value);


    // Store all marks in an array
    const marks = [
        maths,
        physics,
        chemistry,
        programming,
        english
    ];


    // Validate marks
    for (let mark of marks) {

        if (mark < 0 || mark > 100 || isNaN(mark)) {

            alert("Marks must be between 0 and 100.");

            return;
        }
    }


    // Calculate total
    const total =
        maths +
        physics +
        chemistry +
        programming +
        english;


    // Maximum marks
    const maximumMarks = 500;


    // Calculate percentage
    const percentage =
        (total / maximumMarks) * 100;


    // Check pass/fail
    // Minimum 35 marks required in every subject
    const passed = marks.every(function (mark) {
        return mark >= 35;
    });


    // Calculate grade
    let grade;

    if (!passed) {

        grade = "F";

    } else if (percentage >= 90) {

        grade = "A+";

    } else if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "E";
    }


    // Display student name
    document.getElementById("displayName").textContent =
        studentName;


    // Display roll number
    document.getElementById("displayRoll").textContent =
        rollNumber;


    // Display total
    document.getElementById("displayTotal").textContent =
        total + " / " + maximumMarks;


    // Display percentage
    document.getElementById("displayPercentage").textContent =
        percentage.toFixed(2) + "%";


    // Display grade
    document.getElementById("displayGrade").textContent =
        grade;


    // Display pass/fail
    document.getElementById("displayResult").textContent =
        passed ? "PASS" : "FAIL";


    // Show result section
    resultSection.style.display = "block";

});


// Clear button
clearBtn.addEventListener("click", function () {

    // Clear all form fields
    resultForm.reset();

    // Hide result
    resultSection.style.display = "none";

});

