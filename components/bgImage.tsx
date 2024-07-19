'use-client'
import React from 'react'
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { TabButtons } from './tabButtons';
import { Tabs, Tab } from "@nextui-org/tabs";

export default function BgImage() {
    return (
        <>  <div>
            <Image
                removeWrapper
                alt="Relaxing app background"
                width={300}
                height={350}
                className=" w-full h-400 object-cover"
                src="https://nextui.org/images/card-example-5.jpeg"
            />
        </div>
            {/* <TabButtons /> */}
            {/* <Tabs aria-label="Tabs colors" radius="full">
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
                <Tab key="videos" title="Videos" />
            </Tabs> */}

        </>
    )
}
