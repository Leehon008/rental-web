"use client"
import CarouselComponent from "@/components/carousel";
import PropertyList from "@/components/details/propertyListing";
import PropertyRental from "@/components/details/propertyRentals";
import { title } from "@/components/primitives";
import Search from "@/components/search";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaHouseUser, FaMoneyBill, FaWarehouse } from "react-icons/fa";
import List from "../listview/page";
import PropertyListView from "../listview/page";
import { Suspense } from "react";
import PropertyGridView from "../grid/page";

export default function RentalsPage() {
  const images = [
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: 'Image 1', legend: 'Image 1 legend' },
    { src: "https://nextui.org/images/card-example-5.jpeg", alt: 'Image 2', legend: 'Image 2 legend' },
    { src: "https://nextui.org/images/card-example-4.jpeg", alt: 'Image 3', legend: 'Image 3 legend' },
  ];


  return (
    <Suspense>
      <Search placeholder="Search properties..." />
      <br />
      <div className="w-full grid padding-top:1px col-span-12 sm:col-span-7">
        <h3 className="top-1 bottom-1 flex-col items-start text-black font-medium text-2xl"><strong>Properties For Sale</strong></h3>
      </div>
      <br />
      <div className="relative grid flex flex-1 flex-shrink-0">
        {/* <PropertyListView /> */}
        <PropertyGridView />
        <CarouselComponent images={images} />
      </div>
    </Suspense>
  );
}
