'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* Test */}
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/Courses">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
                        <HoveredLink href="/web-dev">Song Writing</HoveredLink>
                        <HoveredLink href="/web-dev">Music Production</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/Contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us!">
                        {/* Test */}
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default NavBar;