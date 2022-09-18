import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/actions/fetchDetails';
import { fetchEmployee } from '../redux/actions/fetchEmployee';

import { Box, CircularProgress, Table, Tooltip } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';

import { Link } from 'react-router-dom';

const TABLE_HEADERS = [
    "ID",
    "FIRST NAME",
    "LAST NAME",
    "DATE OF BIRTH",
    "ADDRESS",
    "DATE OF JOINING",
    "SALARY",
    "DESIGNATION"
]

const EmployeeTable = () => {
    const employees = useSelector(state => state.employeeDetailsReducer.employeeDetails);
    const loading = useSelector(state => state.employeeDetailsReducer.loading);

    const dispatch = useDispatch();

    const [employeeData, setEmployeeData] = useState([]);
    const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
    const [order, setOrder] = useState(false);

    useEffect(() => {
        dispatch(fetchDetails());
    }, []);

    useEffect(() => {
        if (employees.length > 0) {
            setEmployeeData(employees);
            setFilteredEmployeeData(employees);
        }
    }, [employees]);

    const filterData = (e) => {
        let newData = employeeData.filter((data) => {
            return (
                data.id.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.manager_id.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.last_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.date_of_birth.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.date_of_joining.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.address.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.designation.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.salary.toLowerCase().includes(e.target.value.toLowerCase())
            );
        });
        if (e.target.value === "") {
            setFilteredEmployeeData(employeeData);
        } else {
            setFilteredEmployeeData(newData);
        }
    };

    const compare = (a, b) => {
        var textA = a.toUpperCase();
        var textB = b.toUpperCase();
        if (textA > textB) {
            return 1;
        }
        if (textB > textA) {
            return -1;
        }
        return 0;
    }

    const handleSort = (columnName) => {
        setOrder(!order);
        var arr = filteredEmployeeData.slice();
        var sorted = [];
        if (order) {
            if (columnName === "ID") {
                sorted = arr.sort((a, b) => {
                    return compare(a.id, b.id);
                });
            } else if (columnName === "FIRST NAME") {
                sorted = arr.sort((a, b) => {
                    return compare(a.first_name, b.first_name);
                });
            } else if (columnName === "LAST NAME") {
                sorted = arr.sort((a, b) => {
                    return compare(a.last_name, b.last_name);
                });
            } else if (columnName === "DATE OF BIRTH") {
                sorted = arr.sort((a, b) => {
                    return compare(a.date_of_birth, b.date_of_birth);
                });
            } else if (columnName === "DATE OF JOINING") {
                sorted = arr.sort((a, b) => {
                    return compare(a.date_of_joining, b.date_of_joining);
                });
            } else if (columnName === "ADDRESS") {
                sorted = arr.sort((a, b) => {
                    return compare(a.address, b.address);
                });
            } else if (columnName === "DESIGNATION") {
                sorted = arr.sort((a, b) => {
                    return compare(a.designation, b.designation);
                });
            } else if (columnName === "SALARY") {
                sorted = arr.sort((a, b) => {
                    return parseInt(a.salary, 10) - parseInt(b.salary, 10);
                });
            }
        } else {
            if (columnName === "ID") {
                sorted = arr.sort((b, a) => {
                    return compare(a.id, b.id);
                });
            } else if (columnName === "FIRST NAME") {
                sorted = arr.sort((b, a) => {
                    return compare(a.first_name, b.first_name);
                });
            } else if (columnName === "LAST NAME") {
                sorted = arr.sort((b, a) => {
                    return compare(a.last_name, b.last_name);
                });
            } else if (columnName === "DATE OF BIRTH") {
                sorted = arr.sort((b, a) => {
                    return compare(a.date_of_birth, b.date_of_birth);
                });
            } else if (columnName === "DATE OF JOINING") {
                sorted = arr.sort((b, a) => {
                    return compare(a.date_of_joining, b.date_of_joining);
                });
            } else if (columnName === "ADDRESS") {
                sorted = arr.sort((b, a) => {
                    return compare(a.address, b.address);
                });
            } else if (columnName === "DESIGNATION") {
                sorted = arr.sort((b, a) => {
                    return compare(a.designation, b.designation);
                });
            } else if (columnName === "SALARY") {
                sorted = arr.sort((b, a) => {
                    return parseInt(a.salary, 10) - parseInt(b.salary, 10);
                });
            }
        }
        setEmployeeData(sorted);
        setFilteredEmployeeData(sorted);
    };

    return (
        <>
            <Box display="flex" justifyContent="flex-end" pt="1rem" pb="0.5rem" pr="0.5rem">
                <Link to='/hierarchy_tree'>
                    Hierarchy Tree
                </Link>
                <Tooltip title="Filter Details" arrow placement={"bottom"}>
                    <input
                        style={{
                            width: "300px",
                            padding: "0.4rem 1rem",
                            border: '1px solid black',
                            borderRadius: "5px",
                            backgroundColor: 'f2f4f5',
                        }}
                        type="text"
                        name="search"
                        onChange={filterData}
                        placeholder="Search Employees"
                    />
                </Tooltip>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: '#f2f4f5' }}>
                        <TableRow>
                            {
                                TABLE_HEADERS.map(row => {
                                    return (
                                        <Tooltip title={`Sort by ${row}`} arrow>
                                            <TableCell onClick={() => handleSort(row)} style={{ fontWeight: '600', cursor: 'pointer' }}>{row}</TableCell>
                                        </Tooltip>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading ?
                                <CircularProgress color="primary" thickness="5" /> :
                                filteredEmployeeData.length > 0 ?
                                    filteredEmployeeData.map((employee) => (
                                        <TableRow key={employee.id}>
                                            {
                                                employee.details ?
                                                    <Link to='/employee' onClick={() => dispatch(fetchEmployee(employee.first_name))}>
                                                        <TableCell style={{ color: "#4087FF", fontWeight: 'bold' }}>{employee.id}</TableCell>
                                                    </Link> : <TableCell style={{ color: "black", fontWeight: 'bold' }}>{employee.id}</TableCell>
                                            }
                                            <TableCell style={{ color: 'teal', fontWeight: '700' }}>{employee.first_name}</TableCell>
                                            <TableCell style={{ color: 'teal', fontWeight: '700' }}>{employee.last_name}</TableCell>
                                            <TableCell>{employee.date_of_birth}</TableCell>
                                            <TableCell>{employee.address}</TableCell>
                                            <TableCell>{employee.date_of_joining}</TableCell>
                                            <TableCell>{employee.salary}</TableCell>
                                            <TableCell>{employee.designation}</TableCell>
                                        </TableRow>
                                    )) :
                                    <Box sx={{ padding: '1rem 4rem' }}>
                                        <span style={{ fontSize: '18px', fontWeight: '600' }}>No Data</span>
                                    </Box>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default EmployeeTable