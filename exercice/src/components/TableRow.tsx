import React from "react";
import { Offer } from "../services/api";

interface TableRowProps {
    offer: Offer;
}

const TableRow: React.FC<TableRowProps> = ({ offer }) => {
    return (
        <tr>
            <td className="merchant-column">
                <div className="merchant-info">
                    <img src={offer.merchant.logo_url} alt={offer.merchant.name} className="merchant-logo" />
                    <span className="merchant-name">{offer.merchant.name}</span>
                </div>
            </td>
            <td>{offer.offer.name}</td>
            <td>
                <span className="price">
                    {offer.offer.price > 0 ? (
                        <>
                            {offer.offer.price}{" "}
                            <span dangerouslySetInnerHTML={{ __html: offer.offer.currency_symbol }} />
                        </>
                    ) : (
                        "Various"
                    )}
                </span>
            </td>
            <td>
                <a href={offer.offer.link} target="_blank" rel="noopener noreferrer" className="product-link">
                    View Deal
                </a>
            </td>
        </tr>
    );
};

export default TableRow;
