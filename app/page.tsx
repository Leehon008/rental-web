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
        <div className="flex flex-grid flex-direction:horizontal gap-2 items-start">
          <PropertyList />
        </div>
        <CarouselComponent images={images} />
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

      </div>

    </section>
  );
}
