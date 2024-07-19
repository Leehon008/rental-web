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

function PropertyList() {
    const { data: properties, error } = useSWR('https://fsboafrica.com/api/properties/for-sale?search=for-sale', fetcher);

    if (error) return <div>Error loading properties</div>;
    if (!properties) return <div>Loading...</div>;

    // Check if properties is an array before mapping over it
    if (!Array.isArray(properties)) {
        console.error('Properties data is not an array:', properties);
        return <div>Unexpected data format</div>;
    }

    // Chunk the images array into groups of 3
    const chunkedImages = properties.reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / 3); // 3 items per slide
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div>
            <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
                {chunkedImages.map((chunk: any, index: any) => (
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

export default PropertyList;
