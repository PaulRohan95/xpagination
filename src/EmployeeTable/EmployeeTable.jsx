import React from 'react';

function EmployeeTable ({ employees, currentPage, itemsPerPage }) { //displaying the employee data in a table format

    const startIndex = (currentPage - 1) * itemsPerPage; //calculating the starting index of items on the current page. currentPage is initially set to 1 based indexing which is why 1 is subtracted from it to convert it to 0 based indexing. It is then multiplied by the itemsPerPage to get the starting index of the current page
    const endIndex = startIndex + itemsPerPage; //calculating the ending index of items on the current page by adding itemsPerPage to the startIndex
    const currentItems = employees.slice(startIndex, endIndex); //items to display on the current page using slice method which displays the number of items based on endIndex - startIndex

  return (
    <table>
        <thead>
            <tr className='header'>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {currentItems.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default EmployeeTable;