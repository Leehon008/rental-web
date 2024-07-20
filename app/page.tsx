"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, CheckboxGroup, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Tab, Tabs } from "@nextui-org/react";
import ImageCarousel from "@/components/carousel";
import CarouselComponent from "@/components/carousel";
import { getServerSideProps } from "@/components/services/apiService";
import PropertyList from "@/components/details/propertyListing";
import PropertyRental from "@/components/details/propertyRentals";
import { FaBeer, FaBusinessTime, FaChevronDown, FaHouseUser, FaMoneyBill, FaSearch, FaWarehouse } from "react-icons/fa";
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

  const data = [
    {
      title: 'Buy a Property',
      description: 'Find your place with an immersive photo experience and the most listings, including things you won\'t find anywhere else.',
      buttonText: 'Browse Properties For Sale',
      icon: FaHouseUser
    },
    {
      title: 'Sell a House',
      description: 'Discover rental homes with an extensive selection of amenities tailored to your lifestyle.',
      buttonText: 'See your Options',
      icon: FaMoneyBill
    },
    {
      title: 'Rent a Property',
      description: 'Discover rental homes with an extensive selection of amenities tailored to your lifestyle.',
      buttonText: 'See your Options',
      icon: FaWarehouse
    }
  ];

  const CardComponent = ({ title, description, buttonText, Icon }: any) => (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 justify-center">
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-danger text-6xl" />
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-xs">{description}</p>
      </CardBody>
      <CardFooter className="justify-center">
        <div className="col-span-12 mt-1 flex justify-center">
          <button className="text-xs outline text-danger w-full hover:bg-blue-600 border-danger-200 px-2 py-1 rounded">
            {buttonText}
          </button>
        </div>
      </CardFooter>
    </Card>
  );

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

  return (<>
    <div className="flex w-full flex-col background-size: cover; z-34  justify-center" style={{ backgroundImage: `url('https://fsboafrica.com/images/listing-2-2.jpg')` }}>
      <Tabs aria-label="Options" color="danger" style={{ paddingLeft: '30px', paddingRight: '30px' }} className="flex w-600 justify-center">
        <Tab key="sale" title="For Sale" style={{ paddingTop: '10px', }}>
          <Card>
            <CardBody>
              <div className="grid grid-cols-3 gap-2 justify-between">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="text-sm font-normal text-default-600 bg-default-100"
                      href="/"
                      endContent={<FaChevronDown className="text-black" />}
                      variant="flat">Property Type</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">
                      <CheckboxGroup
                        label="Commercial"
                        defaultValue={["commercial", "leisure"]}
                      >
                        <Checkbox value="commercial">Commercial</Checkbox>
                        <Checkbox value="educational">Educational</Checkbox>
                        <Checkbox value="leisure">Leisure/Hospitality</Checkbox>
                      </CheckboxGroup>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Search..."
                // onChange={(e) => handleSearch(e.target.value)}
                // defaultValue={searchParams!.get('query')?.toString()}
                />
                <Button
                  className="text-sm font-normal text-white bg-danger"
                  href="/"
                  startContent={<FaSearch className="text-black" />}
                  variant="flat">Search</Button>
              </div>

            </CardBody>
          </Card>
        </Tab>
        <Tab key="rent" title="To Rent" style={{ paddingTop: '10px', }}>
          <Card>
            <CardBody>
              <div className="grid grid-cols-3 gap-2 justify-between">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="text-sm font-normal text-default-600 bg-default-100"
                      href="/"
                      endContent={<FaChevronDown className="text-black" />}
                      variant="flat">Property Type</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="commercial">
                      <CheckboxGroup
                        label="Commercial"
                        defaultValue={["commercial"]}
                      >
                        <Checkbox value="commercial">Commercial</Checkbox>
                        <Checkbox value="educational">Educational</Checkbox>
                        <Checkbox value="leisure">Leisure/Hospitality</Checkbox>
                      </CheckboxGroup>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Search..."
                // onChange={(e) => handleSearch(e.target.value)}
                // defaultValue={searchParams!.get('query')?.toString()}
                />
                <Button
                  className="text-sm btn-sm font-normal text-white bg-danger"
                  href="/"
                  startContent={<FaSearch className="text-black" />}
                  variant="flat">Search</Button>
              </div>

            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div >

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

      <div className="w-full padding-top:1px col-span-12 sm:col-span-7">
        <h3 className="top-1 flex-col items-start text-black font-medium text-2xl"><strong>Properties For Rent</strong></h3>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-grid flex-direction:horizontal gap-2 items-start">
          <PropertyRental />
        </div>
        <CarouselComponent images={images} />
      </div>

      <div className="gap-6 pt-2 justify-center grid grid-cols-2 sm:grid-cols-4">
        {data.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            Icon={item.icon}
          />
        ))}
      </div>
    </section>
  </>
  );
}
