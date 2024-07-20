import useSWR from 'swr';

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data; // Assuming 'data' contains the array of properties
};

const PropertyDetailPage = ({ property }: any) => {
    // Example: Fetching property details using SWR
    // const { data: propertyData, error } = useSWR(`https://fsboafrica.com/api/properties/details/14`, fetcher);
    // console.log('....property...', propertyData);

    // if (error) return <div>Error loading property details</div>;
    // if (!propertyData) return <div>Loading...</div>;

    return (
        <p>test</p>
    );
};


export default PropertyDetailPage;
