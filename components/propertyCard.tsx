import React from 'react';
import { FaPhone, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

const PropertyCard = ({ image, data }: any) => {


    // Check if image.images is defined before accessing image.images[0]
    if (!image.images || !Array.isArray(image.images) || image.images.length === 0) {
        return <div>No Data found</div>; // Handle case where images array is empty or undefined
    }

    // Access the first image URL from the images array
    const firstImage = image.images[0].filePath;


    return (
        <div className="w-full sm:w-1/3 px-2">
            <div className="relative">
                {/* Replace Image and Card Footer with your actual implementation */}
                <img src={firstImage} alt={image.alt} className="w-full h-80 object-cover" />
                <div className="absolute bottom-0   left-0 right-0 p-4 bg-white bg-opacity-80 text-white">
                    <p className="text-xs text-black">Property Type: {image.status}</p>
                    <h4 className="text-sm font-semibold text-black ">{image.title}</h4>
                    <p className="text-xs text-black justify-start">{image.address}</p>
                    <p className="text-sm text-black justify-start">Beds: {image.bedrooms} &nbsp; Baths: {image.bathrooms} &nbsp; {image.propertySize}</p>

                    <hr className='width:1.5px bg-black' />
                    <div className="h-8 flex justify-between">
                        <div className="mt-2 flex justify-start">
                            <div className="flex items-center space-x-4">
                                <button className="text-xs text-red-500 hover:bg-blue-600 px-2 py-1 rounded-full border border-danger-300">
                                    <FaWhatsapp className="text-xl" />
                                </button>
                                <button className="text-xs text-red-500 hover:bg-blue-600 px-2 py-1 rounded-full border border-danger-300">
                                    <FaPhone className="text-xl" />
                                </button>
                                <button className="text-xs text-red-500 hover:bg-blue-600 px-2 py-1 rounded-full border border-danger-300">
                                    <FaMailBulk className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-end">
                            <button className="text-xs outline text-danger border-danger-300 hover:bg-blue-600 px-2 py-1 rounded">
                                <a
                                    href={`/propertyDetail/${image.id}/view`} className="text-danger no-underline">
                                    Details
                                </a>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PropertyCard;