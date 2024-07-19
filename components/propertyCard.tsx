import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from 'react';

const PropertyCard = ({ image, data }: any) => {
    return (
        <div className="w-full sm:w-1/3 px-2">
            <div className="relative">
                {/* Replace Image and Card Footer with your actual implementation */}
                <img src={image.src} alt={image.alt} className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                    <p className="text-sm text-white uppercase font-bold">{image.label}</p>
                    <h4 className="text-xl font-semibold">{image.title}</h4>
                    <div className="mt-2 flex justify-between">
                        <p className="text-xs text-white">Available soon.</p>
                        <button className="text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;