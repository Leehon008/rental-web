import PropertyCard from '@/components/propertyCard';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import useSWR from 'swr';

interface Property {
  id: number;
  title: string;
  description: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.data;
};
function PropertyGridView() {
  const { data: properties, error } = useSWR('https://fsboafrica.com/api/properties/latest', fetcher);
  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  if (error) return <div>Error loading properties</div>;
  if (!properties) return <div>Loading...</div>;

  let latestPropertiesForSale = properties.latestPropertiesForSale;

  // Check if properties is an array before mapping over it
  if (!Array.isArray(latestPropertiesForSale)) {
    console.error('Properties data is not an array:', latestPropertiesForSale);
    return <div>Unexpected data format</div>;
  }

  // Chunk the images array into groups of 3
  const chunkedImages = latestPropertiesForSale.reduce((resultArray: any, item: any, index: any) => {
    const chunkIndex = Math.floor(index / 3); // 3 items per slide
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  // Calculate total number of pages
  const totalPages = Math.ceil(chunkedImages.flat().length / itemsPerPage);

  // Calculate starting and ending index of current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, chunkedImages.flat().length);

  // Handle pagination change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {chunkedImages.map((item: any, index: any) => (
        <div key={index} className="">
          {item.slice(startIndex, endIndex).map((image: any, i: any) => (
            <Card shadow='sm' className='p-2' key={i}>
              <CardHeader className="overflow-visible">
                <img src={image.images[0].filePath} alt={image.alt} className="w-full h-60 object-cover" />
              </CardHeader>
              <CardBody className="overflow-visible p-1">
                <p className="text-xs text-black">Property Type: {image.status}</p>
                <h4 className="text-sm font-semibold text-black">{image.title}</h4>
                <p className="text-xs text-black">{image.address}</p>
                <p className="text-sm text-black">Beds: {image.bedrooms} &nbsp; Baths: {image.bathrooms} &nbsp; {image.propertySize}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      ))}
      {/* Pagination controls */}
      <div className="col-span-3 flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mr-2 bg-gray-200 text-gray-700 rounded-md disabled:bg-gray-300 disabled:text-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 ml-2 bg-gray-200 text-gray-700 rounded-md disabled:bg-gray-300 disabled:text-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertyGridView;
