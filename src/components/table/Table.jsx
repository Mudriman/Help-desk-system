import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id, product, img, customer, date, amount, method, status) {
    return { id, product, img, customer, date, amount, method, status };
}

const rows = [
    createData(1, 'Frozen yoghurt', "https://bfff.co.uk/wp-content/uploads/2016/02/Lakeland-Dairies-Coolicious-Fat-Free-Soft-Serve-Frozen-Yogurt.jpg", 'John Doe', '2024-05-07', '$159', 'Credit Card', 'Pending'),
    createData(2, 'Ice cream sandwich', "http://klublady.ru/uploads/posts/2022-02/1644839117_35-klublady-ru-p-morozhenoe-sendvich-s-pechenem-foto-43.jpg", 'Jane Smith', '2024-05-08', '$237', 'PayPal', 'Shipped'),
    createData(3, 'Eclair', "https://mykaleidoscope.ru/uploads/posts/2020-03/1583189090_8-p-ekleri-22.jpg", 'Bob Johnson', '2024-05-09', '$262', 'Debit Card', 'Delivered'),
    createData(4, 'Cupcake', "https://wallpapers.com/images/hd/red-cupcakes-with-strawberry-desktop-9kutky0b666g1tts.jpg", 'Alice Brown', '2024-05-10', '$305', 'Cash on Delivery', 'Pending'),
    createData(5, 'Gingerbread', "https://stihi.ru/pics/2023/09/13/4765.jpg", 'Eva Green', '2024-05-11', '$356', 'Online Transfer', 'Shipped'),
];

const listTable = () => {
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="tableCell">Tracking ID</TableCell>
                        <TableCell align="tableCell">Product</TableCell>
                        <TableCell align="tableCell">Customer</TableCell>
                        <TableCell align="tableCell">Date</TableCell>
                        <TableCell align="tableCell">Amount</TableCell>
                        <TableCell align="tableCell">Payment Method</TableCell>
                        <TableCell align="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="tableCell"> {row.id} </TableCell>
                            <TableCell align="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell align="tableCell">{row.customer}</TableCell>
                            <TableCell align="tableCell">{row.date}</TableCell>
                            <TableCell align="tableCell">{row.amount}</TableCell>
                            <TableCell align="tableCell">{row.method}</TableCell>
                            <TableCell align="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default listTable;