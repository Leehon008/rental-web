"use client"
import CarouselComponent from "@/components/carousel";
import PropertyList from "@/components/details/propertyListing";
import PropertyRental from "@/components/details/propertyRentals";
import { title } from "@/components/primitives";
import Search from "@/components/search";
import { Card, CardHeader, CardBody, CardFooter, Image, Tab, Tabs } from "@nextui-org/react";
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
      <main>
        <Search placeholder="Search properties..." />
      </main>
    </Suspense >
  );
}
