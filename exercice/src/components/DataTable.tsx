import React, { useEffect, useState } from "react";
import { fetchOffers, Offer } from "../services/api";
import "../styles/table.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import LoadingIndicator from "./LoadingIndicator";
import NoDataMessage from "./NoDataMessage";

const DataTable: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const data = await fetchOffers();
            console.log("Fetched Data:", data);
            setOffers(data);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <div className="table-container">
            <h1>iPad Air Products</h1>
            <p>Compare the best deals available</p>
            {loading ? <LoadingIndicator /> : null}
            <table>
                <TableHeader />
                <tbody>
                    {offers.length > 0 ? (
                        offers.map((offer, index) => (
                            <TableRow key={index} offer={offer} />
                        ))
                    ) : (
                        <NoDataMessage />
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;