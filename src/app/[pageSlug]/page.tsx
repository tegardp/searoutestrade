
import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";

export default function Page({
    params,
}: {
    params: { pageSlug: string };
}) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1> {params.pageSlug.toUpperCase()} FORM</h1>;
            </main>
            <Footer />
            <WhatsappFloating />
        </>
    );
}