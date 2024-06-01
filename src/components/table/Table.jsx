import React, { useState } from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const listTable = ({ columns, rows }) => {

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {rows.map(column => (
                            <TableCell className="tableCell" key={column.id}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {columns.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="tableCell">{item.id}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`priority ${item.priority}`}>{item.priority}</span>
                            </TableCell>
                            <TableCell className="tableCell">{item.type}</TableCell>
                            <TableCell className="tableCell">{item.date}</TableCell>
                            <TableCell className="tableCell">{item.executor}</TableCell>
                            <TableCell className="tableCell"><div className="cellWrapper">
                                <img src={item.img} alt="" className="image" />
                                {item.product}
                            </div></TableCell>
                            <TableCell className="tableCell">
                                <div className="cellAction">
                                    <Link to="/tickets/:newTicketId" style={{ textDecoration: "none" }}>
                                        <span className="viewButton">Посмотреть</span>
                                    </Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default listTable;