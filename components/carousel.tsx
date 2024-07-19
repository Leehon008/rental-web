import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropertyCard from './propertyCard'; // Import your Card component here
import { Card } from '@nextui-org/react';
import { getServerSideProps } from './services/apiService';
import { Suspense } from 'react';

const CarouselComponent = async ({ images }: any) => {

    // Chunk the images array into groups of 3
    const chunkedImages = images.reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / 3); // 3 items per slide
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <Suspense  >
            <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
                {chunkedImages.map((chunk: any, index: any) => (
                    <div key={index} className="flex justify-center">
                        {chunk.map((image: any, i: any) => (
                            <PropertyCard key={i} image={image} />
                        ))}
                    </div>
                ))}
            </Carousel>
        </Suspense>
    );
};

export default CarouselComponent;
