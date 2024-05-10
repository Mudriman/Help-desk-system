import React from 'react';
import "./datatable.scss";


import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/datatablesource';
import { Link } from 'react-router-dom';



const Datatable = () => {

    const actionColumn = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <Link to="/users/test">
                        <div className='viewButton'>
                            <span className='viewButtonStyle'>View</span>
                        </div>
                        </Link>
                        <div className='deleteButton'>
                            <span className='deleteButtonStyle'>Delete</span>
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
                <Link 
                    to="/users/new" 
                    style={{ textDecotation: "none"}}
                    className="link"
                >
                    Add New
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;