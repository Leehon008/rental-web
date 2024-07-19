import React from 'react';
import { Card, CardHeader, CardFooter, Button } from '@nextui-org/react';
import Image from 'next/image';

interface Property {
    id: number;
    title: string;
    description: string;
    image: string;
    status: string;
}

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
    <Card isFooterBlurred className="w-full h-[300px] relative flex flex-grid flex-direction:horizontal gap-2 items-start">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{property.status}</p>
            <h4 className="text-black font-medium text-2xl">{property.title}</h4>
        </CardHeader>
        <div className="relative w-full h-full">
            <Image
                alt={property.title}
                src={property.image}
                fill
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            />
        </div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
                <p className="text-black text-tiny">{property.description}</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
            </Button>
        </CardFooter>
    </Card>
);

export default PropertyCard;