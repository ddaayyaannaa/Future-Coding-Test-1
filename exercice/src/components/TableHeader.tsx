import React from "react";
import '../styles/table.css';

const TableHeader: React.FC = () => {
    return (
        <thead>
            <tr>
                <th>Merchant</th>
                <th>Product</th>
                <th>Price</th>
                <th>View</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
