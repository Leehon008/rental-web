"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import ImageCarousel from "@/components/carousel";
import CarouselComponent from "@/components/carousel";
import { getServerSideProps } from "@/components/services/apiService";
import PropertyList from "@/components/details/propertyListing";
// import { MyCard } from "@/components/card";

export default async function Home() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  // const data = await getServerSideProps();
  // console.log('...data from api..', data);

  const images = [
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: 'Image 1', legend: 'Image 1 legend' },
    { src: "https://nextui.org/images/card-example-5.jpeg", alt: 'Image 2', legend: 'Image 2 legend' },
    { src: "https://nextui.org/images/card-example-4.jpeg", alt: 'Image 3', legend: 'Image 3 legend' },
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: 'Image 1', legend: 'Image 1 legend' },
    { src: "https://nextui.org/images/card-example-5.jpeg", alt: 'Image 2', legend: 'Image 2 legend' },
    { src: "https://nextui.org/images/card-example-4.jpeg", alt: 'Image 3', legend: 'Image 3 legend' },
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: 'Image 1', legend: 'Image 1 legend' },
    { src: "https://nextui.org/images/card-example-5.jpeg", alt: 'Image 2', legend: 'Image 2 legend' },
    { src: "https://nextui.org/images/card-example-4.jpeg", alt: 'Image 3', legend: 'Image 3 legend' },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2">

      <div className="w-full padding-top:1px col-span-12 sm:col-span-7">
        <h3 className="top-1 flex-col items-start text-black font-medium text-2xl"><strong>Properties For Sale</strong></h3>
      </div>
      <div className="w-full flex flex-col gap-4">
        {/* <PropertyList /> */}
        <CarouselComponent images={images} />
        {/* <CarouselComponent /> */}

        <div className="flex flex-grid flex-direction:horizontal gap-2 items-start">
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
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
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Get App</Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Get App</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>

    </section>
  );
}
