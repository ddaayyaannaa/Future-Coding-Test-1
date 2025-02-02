export interface Offer {
    merchant: {
        name: string;
        logo_url: string;
    };
    offer: {
        name: string;
        price: number;
        currency_symbol: string;
        link: string;
    };
}

export async function fetchOffers(): Promise<Offer[]> {
    const url = "https://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air";

    try {
        const response = await fetch(url);
        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        return data.widget?.data?.offers || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
