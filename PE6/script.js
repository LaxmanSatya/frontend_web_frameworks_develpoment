
const form = document.getElementById("resultForm");
const table = document.getElementById("resultTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    const m1 = Number(document.getElementById("m1").value);
    const m2 = Number(document.getElementById("m2").value);
    const m3 = Number(document.getElementById("m3").value);

    if (!name || !roll ||
        [m1, m2, m3].some(m => m < 0 || m > 100)) {
        alert("Enter valid student details and marks.");
        return;
    }

    const total = m1 + m2 + m3;
    const percentage = total / 3;

    let grade;

    if ([m1, m2, m3].some(m => m < 35)) {
        grade = "Fail";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 35) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    const row = document.createElement("tr");

    [name, roll, `${total}/300`,
     `${percentage.toFixed(2)}%`, grade].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    table.appendChild(row);
    form.reset();
});
