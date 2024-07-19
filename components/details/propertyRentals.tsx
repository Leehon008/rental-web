// components/PropertyList.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import useSWR from 'swr';
import PropertyCard from '../propertyCard';

interface Property {
    id: number;
    title: string;
    description: string;
    // Define other properties as per your API response
}

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data.data; // Assuming 'data' contains the array of properties
};

function PropertyRental() {
    const { data: properties, error } = useSWR('https://fsboafrica.com/api/properties/latest', fetcher);

    if (error) return <div>Error loading properties</div>;
    if (!properties) return <div>Loading...</div>;

    console.log('...rentals..', properties.latestPropertiesToRent);

    let latestPropertiesToRent = properties.latestPropertiesToRent;

    if (!Array.isArray(latestPropertiesToRent)) {
        console.error('Properties data is not an array:', latestPropertiesToRent);
        return <div>Unexpected data format</div>;
    }

    const rentProperties = latestPropertiesToRent.reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / 3);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div>
            <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
                {rentProperties.map((chunk: any, index: any) => (
                    <div key={index} className="flex justify-center">
                        {chunk.map((image: any, i: any) => (
                            <PropertyCard key={i} image={image} />
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default PropertyRental;
