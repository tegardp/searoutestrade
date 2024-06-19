import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <Link className="flex items-center text-primary" href="/">
                        <Logo className="h-6 w-6" />
                        <span className="">SeaRoutesTrade</span>
                    </Link>
                    <nav className="hidden md:flex gap-4">
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/">
                            Home
                        </Link>
                        {/* <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/products">
                            Products
                        </Link> */}
                        {/* <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
                            Buyer / Supplier
                        </Link> */}
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/about">
                            About
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

function Logo(props: any) {
    return (
        <Image
            src={`/static/images/logo.png`}
            width={75}
            height={75}
            alt="Logo"
            className='object-cover object-center rounded'
        />
    )
}