import useSWR from 'swr';

const fetcher = async (url: RequestInfo | URL) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const PropertyDetailPage = ({ params }: any) => {
    const id = params.id;
    return (
        <div>
            <h1>property: {id}</h1>
            {/* <p>{property.description}</p> */}
            {/* Render other details as needed */}
        </div>
    );
};


export default PropertyDetailPage;
