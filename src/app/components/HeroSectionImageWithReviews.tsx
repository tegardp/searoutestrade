import { buttonVariants, Button } from "@/components/ui/button";
import { HeroCarousel } from "./HeroCarousel";
import Link from "next/link";
import Image from "next/image";

export default function HeroSectionImageWithReviews() {
    return (
        <>
            {/* Hero */}
            <div className="container py-24 lg:py-32">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            SeaRoutesTrade: <br />Your Trusted Global Partners
                        </h1>
                        <p className="mt-3 text-xl text-muted-foreground">
                            Find high-quality South East Asia goods for your business. We connect you with trusted suppliers and handle the export process seamlessly.
                        </p>
                        {/* Buttons */}
                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <Link className={buttonVariants({ size: "lg" })} href={"https://wa.me/+6281315251047?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20products."} target="_blank">BUYER</Link>
                            <Link className={buttonVariants({ size: "lg", variant: "outline" })} href={"ttps://wa.me/+6281315251047?text=Hi%2C%20I%20would%20like%20to%supply%our%20products."} target="_blank">SUPPLIER</Link>
                        </div>
                        {/* End Buttons */}

                        <p className="max-sm:hidden mt-10 text-md text-muted-foreground">
                            Partners:
                        </p>
                        <div className="max-sm:hidden grid grid-cols-4 gap-x-5">
                            {/* Review */}
                            <div className="py-5 flex h-full">
                                <div className="mt-auto">
                                    <Image
                                        src={`/static/images/Logo-Nudira-Plain.png`}
                                        width={500}
                                        height={500}
                                        alt="Spirces"
                                        className='object-cover object-center rounded w-20'
                                    />
                                </div>
                            </div>
                            <div className="py-5">
                                <div className="mt-5">
                                    <Image
                                        src={`/static/images/logo-bisaekspor.png`}
                                        width={500}
                                        height={500}
                                        alt="Spirces"
                                        className='object-cover object-center rounded w-20'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Col */}
                    <div className="relative ms-4">
                        <HeroCarousel />
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div >
            {/* End Hero */}
        </>
    );
}

const star = (
    <svg
        className="h-4 w-4"
        width={51}
        height={51}
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
            fill="currentColor"
        />
    </svg>
);
