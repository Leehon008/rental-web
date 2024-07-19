'use-client'
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export function TabButtons() {
    // const colors: any = [
    //     "default",
    //     "primary",
    //     "secondary",
    //     "success",
    //     "warning",
    //     "danger"
    // ];

    return (
        <div className="flex flex-wrap gap-4">
            <Tabs aria-label="Tabs colors" radius="full">
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
                <Tab key="videos" title="Videos" />
            </Tabs>
        </div>
    );
}
