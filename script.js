function createTable() {
    //Write your code here
    const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Prompt for rows and columns
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Validate input
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be positive numbers.");
    return;
  }

  // Generate table
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
