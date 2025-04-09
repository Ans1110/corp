"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const links = [
        { href: "/performance", label: "Performance" },
        { href: "/reliability", label: "Reliability" },
        { href: "/about", label: "About" },
    ];

    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8">
                <Link className="text-3xl font-bold" href="/" key="/">Home</Link>
                <div className="text-xl space-x-4">
                    {links.map((link) => (
                        <Link className={pathname === link.href ? "text-gray-300" : ""} key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
