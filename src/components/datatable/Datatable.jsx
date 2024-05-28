import React, { useState } from 'react';
import "./datatable.scss";


import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/datatablesource';
import { Link } from 'react-router-dom';




const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <span className="viewButton">View</span>
                        </Link>
                        <div className="deleteDivButton">
                            <span
                                className="deleteButton"
                                onClick={() => handleDelete(params.row.id)}
                            >
                                Delete
                            </span>
                        </div>

                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            
                <div className="datatableTitle">
                    Add New User
                    <Link to="/users/new" className="link">
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>


    );
};

export default Datatable;