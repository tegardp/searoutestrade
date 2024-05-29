'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form';


export type FormData = {
    name: string;
    email: string;
    message: string;
};

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}

export default function ContactForm() {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=purworejo+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">PT Duit Hasil Rantau</p>
                            <p className="mt-1">Perum Sucen Indah Permai no. 3, Purworejo, Central Java, Indonesia 54224</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed hover:underline" href="mailto:contact@searoutestrade.com?subject=Collaboration%Inquiry%20&body=Dear%20SeaRoutesTrade%20Team">contact@searoutestrade.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed hover:underline"><a href="https://wa.me/+6281315251047?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20products.">+62 813 15251 047</a></p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Use this form to send us an email</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative mb-4">
                            <Label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</Label>
                            <Input
                                type="text"
                                placeholder='Full Name'
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                {...register('name', { required: true })} />
                        </div>
                        <div className="relative mb-4">
                            <Label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</Label>
                            <Input
                                type="email"
                                placeholder='example@domain.com'
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                {...register('email', { required: true })} />
                        </div>
                        <div className="relative mb-4">
                            <Label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</Label>
                            <textarea
                                rows={4}
                                placeholder='Type your message'
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                {...register('message', { required: true })}></textarea>
                        </div>
                        <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg" >Send Message</button>
                    </form>
                </div>
            </div>
        </section >
    )
}