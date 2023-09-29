function sortTableByColumn(columnIndex) {
    const table = document.getElementById('emissionsTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName('tr'));
    
    rows.sort((rowA, rowB) => {
      const cellA = rowA.getElementsByTagName('td')[columnIndex];
      const cellB = rowB.getElementsByTagName('td')[columnIndex];
      const valueA = cellA.textContent.trim();
      const valueB = cellB.textContent.trim();
  
      if (isNaN(valueA) || isNaN(valueB)) {
        return valueA.localeCompare(valueB);
      } else {
        return parseFloat(valueA) - parseFloat(valueB);
      }
    });
  
    rows.forEach(row => tbody.appendChild(row));
  }
  
  function filterTableByCountry(country) {
    const table = document.getElementById('emissionsTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName('tr'));
  
    const cleanedCountry = sanitizeInput(country);
  
    rows.forEach(row => {
      const cell = row.getElementsByTagName('td')[0];
      const value = cell.textContent.trim().toLowerCase();
  
      if (value.includes(cleanedCountry.toLowerCase())) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  function sanitizeInput(input) {
    const sanitizedInput = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return sanitizedInput;
  }