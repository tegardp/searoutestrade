import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";
import ContactForm from "@/components/pages/ContactForm";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <ContactForm />
            </main>
            <Footer />
            <WhatsappFloating />
        </>
    );
}
