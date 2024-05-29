import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <Link className="flex items-center text-primary" href="/">
                        <MountainIcon className="h-6 w-6" />
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

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}