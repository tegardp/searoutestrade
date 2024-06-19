import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";
import ContactForm from "@/components/pages/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contacts',
    description: 'We\'d love to hear from you! Whether you have a question about our products, want to discuss sourcing options, or simply want to learn more about Southeast Asian commodities, reach out to our friendly team.'
};

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
