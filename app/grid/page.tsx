import PropertyCard from '@/components/propertyCard';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
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

  const Grid = ({ items }: any) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {items.map((item: any, index: any) => (
          <div key={index} className="bg-gray-200 p-4">
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="">
      <ul className="">
        {chunkedImages.map((item: any, index: any) => (
          <li key={index} className="">
            {item.map((image: any, i: any) => (
              <>
                <Card shadow='sm' className='p-2' key={i}>
                  <CardHeader className="overflow-visible">
                    <img src={image.images[0].filePath} alt={image.alt} className="w-full h-60 object-cover" />
                  </CardHeader>
                  <CardBody className="overflow-visible p-1">
                    <p className="text-xs text-black">Property Type : {image.status}</p>
                    <h4 className="text-sm font-semibold text-black ">{image.title}</h4>
                    <p className="text-xs text-black justify-start">{image.address}</p>
                    <p className="text-sm text-black justify-start">Beds: {image.bedrooms} &nbsp; Baths: {image.bathrooms} &nbsp; {image.propertySize}</p>
                  </CardBody>
                </Card>
                <br /></>
            ))}
          </li>
        ))}
      </ul>
    </section>

  );
}
export default PropertyGridView;
