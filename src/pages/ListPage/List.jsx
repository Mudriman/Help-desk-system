import Datatable from "../../components/datatable/Datatable";
import "./list.scss";

import React from 'react';

const List = () => {
    return (
        <div className="list">
            <div className="marginer"></div>
            <div className="listContainer">
                <Datatable/>
            </div>
        </div>
    );
};

export default List;