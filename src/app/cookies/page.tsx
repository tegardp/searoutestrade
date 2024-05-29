import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Cookies() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section className="text-gray-600 body-font">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 text-gray-900">Cookie</h1>
                    </div>
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <p className="mb-8 leading-relaxed">A cookie is a small piece of data stored on a user’s browser, and contains non-personally identifiable information about the user. When you visit the website, PT Duit Hasil Rantau may place a cookie on your browser in order to improve your experience by recognizing you when you visit the website and in order to allow the company to optimize the information presented based on your demonstrated areas of interest.</p>
                            <p className="mb-8 leading-relaxed">Cookies may also be used to compile information about website usage. This information can be used to enhance the content of the website and make your experience more informative. If you subsequently provide us with personal information such as your email address, we will associate any cookies on your browser with that information such that you will no longer be an anonymous visitor to the site.</p>
                            <p className="mb-8 leading-relaxed">If you’ve set your browser to reject cookies, you can still use this website, but you may need to re-enter information that would normally be obtained from the cookie (for example, your email address). You can also set your browser to warn you before accepting cookies. If you do, you will receive a warning message each time the website attempts to place a cookie on your computer.</p>
                            <p className="mb-8 leading-relaxed">In addition, PT Duit Hasil Rantau employs certain advertising features enabled by Google Analytics in order to optimize the customer’s user experience on our website and provide you with the most relevant content.</p>
                            <p className="mb-8 leading-relaxed">Google Analytics may collect data about our website traffic via Google advertising cookies and anonymous identifiers, in addition to data collected through a standard Google Analytics implementation.</p>
                            <p className="mb-8 leading-relaxed">You may opt-out of the Google Analytics Advertising Features by reviewing your Ads Settings, Ad Settings for mobile apps, or by using the Google Analytics’ currently available opt-outs for the web available here.</p>
                            <p className="mb-8 leading-relaxed">By using our website and you hereby consent to (i) any data collection, sharing and usage that takes place on any site, app, email publication or other property as a consequence of your use of Google Analytics; and (ii) the storing and accessing of cookies or other information on your device where such activity occurs in connection with a product to which this policy applies.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsappFloating />
        </>
    );
}
