import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Pagination from '../Pagination/Pagination';


function EmployeePagination() {

    const [employees, setEmployees] = useState([]); //setting the state to store employee data
    const [currentPage, setCurrentPage] = useState(1); //setting state to store current page
    const itemsPerPage = 10; //No. of items to display per page

    useEffect(() => { //fetch the data from the API response when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
                setEmployees(response.data); //storing the fetched data
            } catch (error) {
                alert('Failed to fetch data');//alert when data ccanot be fetched
            }
        };
        fetchData();
    }, []);//dependency array is kept empty as the Data will be run once only when the component mounts

    const handlePageChange = (pageNumber) => {// handle page change
        setCurrentPage(pageNumber);
    }

  return (
    <div>
        <EmployeeTable employees={employees} currentPage={currentPage} itemsPerPage={itemsPerPage} /> 
        <Pagination
            currentPage={currentPage}
            totalItems={employees.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
         />
    </div>
  )
}

export default EmployeePagination;