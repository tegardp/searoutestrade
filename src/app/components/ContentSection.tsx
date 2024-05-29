import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export function ContentPictureWithLink() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-orange-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-primary">Our Products</h1>
                        {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">a leading export company based in Indonesia specializing in premium spices and coconut products. We are passionate about connecting the world with the rich flavors and aromas of Indonesia. </p> */}
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" width={500} height={500} src={`/static/images/cloves.jpeg`} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Cloves</h2>
                        <p className="text-base leading-relaxed mt-2">One of the most valuable spices native of Indonesia that has been used for centuries as food preservative and for many medicinal purposes</p>
                        {/* <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">

                            <Image alt="content" className="object-cover object-center h-full w-full" width={500} height={500} src={`/static/images/briquettehex.jpg`} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">BBQ Briquette</h2>
                        <p className="text-base leading-relaxed mt-2"> Made from sustainably sourced Indonesian hardwoods, our BBQ charcoal burns hot and clean, delivering consistent heat for perfect grilling.</p>
                        {/* <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" width={500} height={500} src={`/static/images/cowboy-lump.jpg`} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Hardwood Charcoal</h2>
                        <p className="text-base leading-relaxed mt-2">Our hardwood charcoal is crafted from dense Indonesian hardwoods, resulting in long-lasting, high-heat coals ideal for professional-grade grilling and smoking.</p>
                        {/* <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 justify-center align-center">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" width={500} height={500} src={`/static/images/market.jpg`} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Others</h2>
                        <p className="text-base leading-relaxed mt-2">If you need other supplies not listed on our site dont worry! We will try to contacts our partners to get what you need!</p>
                        {/* <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export function AboutSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-col">
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                </div>
            </div>
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 text-primary">About Us</h1>
            </div>
            <div className="container px-5 pb-20 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <Image
                                    src={`/static/images/tegar.jpeg`}
                                    width={500}
                                    height={500}
                                    alt="Spirces"
                                    className='object-cover object-center rounded-full  w-full'
                                />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg hover:underline"><a href="https://www.linkedin.com/in/tegardp/">TEGAR DANI PRATAMA</a></h2>
                                <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">Director</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="text-gray-700 text-lg mb-4"><span className='text-bold'>SeaRoutesTrade</span> by PT Duit Hasil Rantau is a leading export company based in Indonesia specializing in <span className='text-primary'>premium spices and coconut products</span>. We are passionate about connecting the world with the rich flavors and aromas of Indonesia.
                                <br />
                                <br />
                                We are committed to delivering the <span className='text-primary'>highest quality products</span>, sourced directly from Indonesia&apos;s finest farms and producers.</p>

                            {/* <p className="leading-relaxed text-lg mb-4">Our passion lies in delivering the highest quality ingredients, sourced directly from Indonesia's finest farms and producers. We are committed to:</p>
                                <ul className="list-disc mx-auto mt-4 mb-8 text-left md:text-xl">
                                    <li className="leading-relaxed text-lg mb-4"><strong>Freshness and Flavor:</strong> Minimizing processing time to maximize the authentic taste of Indonesia in every product.</li>
                                    <li className="leading-relaxed text-lg mb-4"><strong>Ethical Sourcing:</strong> Partnering with responsible farmers who prioritize sustainable practices and fair labor.</li>
                                    <li className="leading-relaxed text-lg mb-4"><strong>Wide Variety:</strong> Offering a diverse selection of spices and coconut products to meet your culinary needs.</li>
                                    <li className="leading-relaxed text-lg mb-4"><strong>Strict Quality Control:</strong> Ensuring our products meet the highest standards through rigorous inspections.</li>
                                </ul> */}
                            {/* <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function WhySection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-primary mb-4">Why Choose Us?</h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">Extensive network of trusted Indonesian suppliers</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">Efficient export logistics management</span>
                        </div>
                    </div>
                    {/* <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Quality control and assurance</span>
        </div>
      </div> */}
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">Competitive pricing</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">Excellent customer service</span>
                        </div>
                    </div>
                    <div className='flex justify-center mx-auto mt-16 py-2 px-8 text-lg'>
                        <Link className={buttonVariants({ size: "lg" })} href={"https://wa.me/+6281315251047?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20products."} target="_blank">Get In Touch</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}