import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/actions/fetchDetails';

import { Box, CircularProgress, Table, TextField } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';

const TABLE_HEADERS = [
    'ID',
    "MANAGER ID",
    "FIRST NAME",
    "LAST NAME",
    "DATE OF BIRTH",
    "DATE OF JOINING",
    "ADDRESS",
    "DESIGNATION",
    "SALARY"
]

const EmployeeTable = () => {
    const employees = useSelector(state => state.employeeReducer.employeeDetails);
    const loading = useSelector(state => state.employeeReducer.loading);

    const dispatch = useDispatch();

    const [employeeData, setEmployeeData] = useState([]);
    const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
    const [order, setOrder] = useState(true);

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

    const handleSort = (columnName) => {
        setOrder(!order);
        var arr = filteredEmployeeData.slice();
        var sorted = [];
        if (order) {
            if (columnName === "ID") {
                sorted = arr.sort((a, b) => {
                    var textA = a.id.toUpperCase();
                    var textB = b.id.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "MANAGER ID") {
                sorted = arr.sort((a, b) => {
                    var textA = a.manager_id.toUpperCase();
                    var textB = b.manager_id.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "FIRST NAME") {
                sorted = arr.sort((a, b) => {
                    var textA = a.first_name.toUpperCase();
                    var textB = b.first_name.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "LAST NAME") {
                sorted = arr.sort((a, b) => {
                    var textA = a.last_name.toUpperCase();
                    var textB = b.last_name.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "DATE OF BIRTH") {
                sorted = arr.sort((a, b) => {
                    var textA = a.date_of_birth.toUpperCase();
                    var textB = b.date_of_birth.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "DATE OF JOINING") {
                sorted = arr.sort((a, b) => {
                    var textA = a.date_of_joining.toUpperCase();
                    var textB = b.date_of_joining.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "ADDRESS") {
                sorted = arr.sort((a, b) => {
                    var textA = a.address.toUpperCase();
                    var textB = b.address.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "DESIGNATION") {
                sorted = arr.sort((a, b) => {
                    var textA = a.designation.toUpperCase();
                    var textB = b.designation.toUpperCase();
                    if (textA > textB) {
                        return 1;
                    }
                    if (textB > textA) {
                        return -1;
                    }
                    return 0;
                });
            } else if (columnName === "SALARY") {
                sorted = arr.sort((a, b) => {
                    return a.salary - b.salary;
                });
            }
        } else {
            if (columnName === "ID") {
                sorted = arr.sort((a, b) => {
                    var textA = a.id.toUpperCase();
                    var textB = b.id.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "MANAGER ID") {
                sorted = arr.sort((a, b) => {
                    var textA = a.manager_id.toUpperCase();
                    var textB = b.manager_id.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "FIRST NAME") {
                sorted = arr.sort((a, b) => {
                    var textA = a.first_name.toUpperCase();
                    var textB = b.first_name.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "LAST NAME") {
                sorted = arr.sort((a, b) => {
                    var textA = a.last_name.toUpperCase();
                    var textB = b.last_name.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "DATE OF BIRTH") {
                sorted = arr.sort((a, b) => {
                    var textA = a.date_of_birth.toUpperCase();
                    var textB = b.date_of_birth.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "DATE OF JOINING") {
                sorted = arr.sort((a, b) => {
                    var textA = a.date_of_joining.toUpperCase();
                    var textB = b.date_of_joining.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "ADDRESS") {
                sorted = arr.sort((a, b) => {
                    var textA = a.address.toUpperCase();
                    var textB = b.address.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "DESIGNATION") {
                sorted = arr.sort((a, b) => {
                    var textA = a.designation.toUpperCase();
                    var textB = b.designation.toUpperCase();
                    if (textA > textB) {
                        return -1;
                    }
                    if (textB > textA) {
                        return 1;
                    }
                    return 0;
                });
            } else if (columnName === "SALARY") {
                sorted = arr.sort((b, a) => {
                    return a.salary - b.salary;
                });
            }
        }
        setEmployeeData(sorted);
        setFilteredEmployeeData(sorted);
    };

    return (
        <>
            <Box display="flex" justifyContent="flex-end" pt="1rem" pb="0.5rem" pr="0.5rem">
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
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: '#f2f4f5' }}>
                        <TableRow>
                            {
                                TABLE_HEADERS.map(row => {
                                    return (
                                        <TableCell onClick={() => handleSort(row)} style={{ fontWeight: '600' }}>{row}</TableCell>
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
                                            <TableCell style={{ color: "#4087FF", fontWeight: 'bold' }}>{employee.id}</TableCell>
                                            <TableCell>{employee.manager_id}</TableCell>
                                            <TableCell style={{ color: 'teal', fontWeight: '700' }}>{employee.first_name}</TableCell>
                                            <TableCell style={{ color: 'teal', fontWeight: '700' }}>{employee.last_name}</TableCell>
                                            <TableCell>{employee.date_of_birth}</TableCell>
                                            <TableCell>{employee.date_of_joining}</TableCell>
                                            <TableCell>{employee.address}</TableCell>
                                            <TableCell>{employee.designation}</TableCell>
                                            <TableCell>{employee.salary}</TableCell>
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