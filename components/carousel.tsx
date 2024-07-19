import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ images }: any) => {
    return (
        <Carousel infiniteLoop autoPlay>
            {images.map((image: any, index: any) => (
                <>
                    <div key={index}>
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                className="z-0 w-full h-full scale-125 h-300 -translate-y-6 object-cover"
                                src={image.src} alt={image.alt}
                            />
                            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                <div>
                                    <p className="text-black text-tiny">Available soon.</p>
                                    <p className="text-black text-tiny">Get notified.</p>
                                </div>
                                <Button className="text-tiny" color="primary" radius="full" size="sm">
                                    Notify Me
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
