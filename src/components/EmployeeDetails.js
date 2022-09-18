import { useSelector } from 'react-redux';

import { CircularProgress, Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

const TABLE_HEADERS = [
    "FIELD",
    "VALUE"
]

const EmployeeDetails = () => {
    const employee = useSelector(state => state.employeeReducer.employee);
    const loading = useSelector(state => state.employeeReducer.loading);

    const [employeeData, setEmployeeData] = useState({});

    useEffect(() => {
        if (employee.length > 0) {
            setEmployeeData(employee[0]);
        }
    }, [employee])

    console.log(employee);
    return (
        <TableContainer sx={{ padding: '2rem 4rem' }}>
            <Table sx={{ maxWidth: 500 }}>
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
                {
                    loading ?
                        <CircularProgress color="primary" thickness="5" /> :
                        <TableBody>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>{employeeData.first_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Last Name</TableCell>
                                <TableCell>{employeeData.last_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell>{employeeData.address}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>{employeeData.date_of_birth}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Date of Joining</TableCell>
                                <TableCell>{employeeData.date_of_joining}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Designation</TableCell>
                                <TableCell>{employeeData.designation}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Salary</TableCell>
                                <TableCell>{employeeData.salary}</TableCell>
                            </TableRow>
                        </TableBody>
                }
            </Table>
        </TableContainer>
    )
}

export default EmployeeDetails