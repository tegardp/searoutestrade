import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Searoutestrade is a passionate team dedicated to bringing you the best Southeast Asia has to offer. We work directly with farmers, producers and manufacturers across the region, ensuring fair trade practices and supporting local communities. Our commitment to quality extends beyond the products themselves. We prioritize sustainable practices and ethical sourcing, building strong relationships with our partners to bring you peace of mind with every purchase.'
};

export default function About() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section className="text-gray-600 body-font">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 text-gray-900">About Us</h1>
                    </div>
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are</h1>
                            <p className="mb-8 leading-relaxed"><span className="text-bold text-primary">SeaRoutesTrade</span> is a worldwide supplier of B2B products from Indonesia. As an export trading company, SeaRoutesTrade offer a variety of services and solutions to help our clients overcome challenges in international trade.</p>
                            <p className="mb-8 leading-relaxed">SeaRoutesTrade have an experienced team with broad knowledge in quality control, trade, logistics, finance, and international trade regulations.</p>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image
                                src={`/static/images/freight.jpg`}
                                width={500}
                                height={500}
                                alt="Freight"
                                className='object-cover object-center rounded'
                            />
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <HeroCarousel />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What we do</h1>
                            <p className="mb-8 leading-relaxed"><span className="text-bold text-primary">SeaRoutesTrade</span> is an export trading company. We also dealing directly with farmers, suppliers, manufacturers, wholesalers and factories in Indonesia.</p>
                            <p className="mb-8 leading-relaxed">SeaRoutesTrade also have a large network of warehouses for various commodities in Indonesia.</p>
                            <p className="mb-8 leading-relaxed">SeaRoutesTrade are very strict in choosing supplier partners to maintain the quality and trust of our buyers in various countries.</p>
                            <div className="flex w-full md:justify-start justify-center items-end">
                                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 text-gray-900">We Are Registered On</h1>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 flex flex-col justify-center items-center">
                                <div className="rounded-lg w-32 overflow-hidden ">
                                    <Image
                                        src={`/static/images/kemenkumham.png`}
                                        width={500}
                                        height={500}
                                        alt="Freight"
                                        className='object-cover object-center rounded'
                                    />        </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Ministry of Law and Human Rights</h2>
                                <p className="text-base leading-relaxed mt-2 text-center">Republic of Indonesia</p>
                            </div>
                            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 flex flex-col justify-center items-center">
                                <div className="rounded-lg w-32 overflow-hidden">
                                    <Image
                                        src={`/static/images/kemenkeu.png`}
                                        width={500}
                                        height={500}
                                        alt="Freight"
                                        className='object-cover object-center rounded'
                                    />        </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Ministry of Finance</h2>
                                <p className="text-base leading-relaxed mt-2 text-center">Republic of Indonesia</p>
                            </div>
                            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 flex flex-col justify-center items-center">
                                <div className="rounded-lg w-32 overflow-hidden">
                                    <Image
                                        src={`/static/images/kemendag.png`}
                                        width={500}
                                        height={500}
                                        alt="Freight"
                                        className='object-cover object-center rounded'
                                    />        </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Ministry of Trade</h2>
                                <p className="text-base leading-relaxed mt-2 text-center">Republic of Indonesia</p>
                            </div>
                            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 flex flex-col justify-center items-center">
                                <div className="rounded-lg w-32 overflow-hidden">
                                    <Image
                                        src={`/static/images/kemenlu.png`}
                                        width={500}
                                        height={500}
                                        alt="Freight"
                                        className='object-cover object-center rounded'
                                    />        </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Ministry of Foreign Affairs</h2>
                                <p className="text-base leading-relaxed mt-2 text-center">Republic of Indonesia</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsappFloating />
        </>
    );
}
