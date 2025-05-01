function multiplicationTable() {
      var start = parseInt(document.getElementById('startValue').value);
      var end = parseInt(document.getElementById('endValue').value);
      
      if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
      }

      let tableHTML = "<table> <tr> <th> 1 </th>";
      
      for (let i = start; i <= end; i++) {
        tableHTML += "<th>" + i + "</th>";
      }
      tableHTML += "</tr>";
      
      for (let i = start; i <= end; i++) {
        tableHTML += "<tr> <th>" + i + "</th>";
        for (let j = start; j <= end; j++) {
          tableHTML += "<td>" + (i * j) + "</td>";
        }
        tableHTML += "</tr>";
      }

      tableHTML += "</table>";
      document.getElementById('output').innerHTML = tableHTML;
    }
