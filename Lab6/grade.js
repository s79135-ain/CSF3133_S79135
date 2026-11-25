/*
ERROR IDENTIFICATION AND CORRECTION

Error 1 (grade.html, Line 9):
Missing return statement in onsubmit.
Corrected to onsubmit="return checkMark()".

Error 2 (grade.html, Line 17):
Function name showtable() does not match showTable().
Corrected to showTable().

Error 3 (grade.js, Line 5):
Used assignment operator (=) instead of comparison operator (===).
Corrected to name === "".

Error 4 (grade.js, Line 9):
Incorrect spelling of isNaN().
Corrected to isNaN(mark).

Error 5 (grade.js, Line 14):
Used && instead of || for mark range validation.
Corrected to mark < 0 || mark > 100.

Error 6 (grade.js, Line 28):
Incorrect capitalization of getElementById().
Corrected to getElementById().

Error 7 (grade.js, Line 30):
Used colour instead of color.
Corrected to style.color.

Error 8 (grade.js, Line 38):
Loop starts at 1 and skips the first grade.
Corrected to let i = 0.

Error 9 (grade.js, Line 42):
Used innerHtml instead of innerHTML.
Corrected to innerHTML.
*/


// Function to Check Student Mark
function checkMark() {

    // Get student name and mark
    let name = document.forms["gradeForm"]["name"].value.trim();

    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Check if name is empty
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check if mark is empty
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check if mark is not numeric
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark into a number
    mark = Number(mark);

    // Check if mark is within 0 to 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Declare grade variable
    let grade;

    // Determine student grade
    if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 65) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    // Display student result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    }
    else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    }
    else {
        document.getElementById("result").style.color = "red";
    }

    // Display date and time
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

//Change date and time colour to match result
document.getElementById("checkTime").style.color =
    document.getElementById("result").style.color;


    // Prevent page from refreshing
    return false;
}


// Function to Generate Random Mark
function randomMark() {

    // Generate random whole number from 0 to 100
    let random = Math.floor(Math.random() * 101);

    // Display random mark in mark input
    document.getElementById("mark").value = random;

}


// Function to Display Grade Table
function showTable() {

    // Grade and mark range arrays
    let grades = ["A", "B", "C", "F"];

    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create table HTML
    let tableHTML = "<table>";

    // Create table heading
    tableHTML += "<tr>";
    tableHTML += "<th>Grade</th>";
    tableHTML += "<th>Mark Range</th>";
    tableHTML += "</tr>";

    // Loop through all grades
    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr>";

        tableHTML += "<td>" + grades[i] + "</td>";

        tableHTML += "<td>" + ranges[i] + "</td>";

        tableHTML += "</tr>";

    }

    // Close table
    tableHTML += "</table>";

    // Display grade table
    document.getElementById("tableContainer").innerHTML =
        tableHTML;

}