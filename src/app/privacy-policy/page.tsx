import Navbar from "@/components/Navbar";
import WhatsappFloating from "@/components/WhatsappFloating";
import Footer from "@/components/Footer";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section className="text-gray-600 body-font">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 text-gray-900">Privacy and Policy</h1>
                    </div>
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Your Privacy Matters</h2>
                            <p className="mb-8 leading-relaxed">The use and consultation of the site www.searoutestrade.com implies, without reserve, the full acceptance of the general conditions of use described below. These conditions of use are likely to be modified or completed at any time, the users of the site are thus invited to consult them regularly.</p>
                            <p className="mb-8 leading-relaxed">www.searoutestrade.com has for object to provide information concerning all the activities of the company.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau tries to provide on its website information that is as precise as possible. However, it cannot be held responsible for omissions, inaccuracies and deficiencies in the update, whether they are its own doing or that of third party partners who provide this information.</p>
                            <p className="mb-8 leading-relaxed">All the information indicated on the site www.searoutestrade.com is given as an indication, and is likely to evolve.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Disclaimer of Liability</h2>
                            <p className="mb-8 leading-relaxed">In spite of careful and regular controls, PT Duit Hasil Rantau does not assume any responsibility or guarantee as to the completeness, the accuracy or the relevance of the information provided on this site. They are given subject to modifications that have been made since they were put online.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau expressly reserves the right to modify, add, delete, or correct the content of this site and these legal mentions at any time and this without notice, or to interrupt temporarily or definitively the publication.</p>
                            <p className="mb-8 leading-relaxed">The information that appears on this site is not contractual and does not engage the responsibility of PT Duit Hasil Rantau who remains free, at any time, to enrich or modify the content and presentation of the pages of its site.</p>
                            <p className="mb-8 leading-relaxed">In spite of all the care taken for the constitution and the update of this site, errors, inaccuracies or omissions can remain as well as problems of connection to the site or interruption in the connection. PT Duit Hasil Rantau declines all responsibility for direct or indirect damages that could result from this.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau does not expressly adopt the content of the links and sites to which it could be linked and is not able to regularly verify the content found.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Intellectual Property and Related Rights</h2>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau is the owner of the intellectual property rights or holds the rights of use on all the elements accessible on the site, notably the texts, images, graphics, logo, icons, sounds, software</p>
                            <p className="mb-8 leading-relaxed">Any reproduction, representation, modification, publication, downloading, transmission, diffusion, adaptation in any way, on any support, in whole or in part of all or part of the elements of the site, whatever the means or the process used, is forbidden, except with the prior written authorization of : PT Duit Hasil Rantau</p>
                            <p className="mb-8 leading-relaxed">Any unauthorized use of the site or of any of the elements it contains will be considered as constituting a counterfeit that can engage the civil and penal responsibility of the counterfeiter.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau expressly reserves the right to modify, add, delete, or correct the content of this site and these legal mentions at any time and without prior notice, or to temporarily or permanently interrupt the publication.</p>
                            <p className="mb-8 leading-relaxed">The information that appears on this site is not contractual and does not engage the responsibility of PT Duit Hasil Rantau who remains free, at any time, to enrich or modify the content and presentation of the pages of its site.</p>
                            <p className="mb-8 leading-relaxed">In spite of all the care taken for the constitution and the update of this site, errors, inaccuracies or omissions can remain as well as problems of connection to the site or interruption in the connection. PT Duit Hasil Rantau declines all responsibility for direct or indirect damages that could result from this.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau does not expressly adopt the content of the links and sites to which it could be linked and is not able to regularly verify the content found.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Personal Data Protection</h2>
                            <p className="mb-8 leading-relaxed">The protection and security of personal data is a high priority for us. Therefore, we strictly respect the rules of the Tunisian data protection law.</p>
                            <p className="mb-8 leading-relaxed">In accordance with the law on the protection of personal data, you have the right to access your personal data, as well as the right to correct, complete, rectify, update, modify, clarify or delete these data when they prove to be inaccurate, equivocal, or when their processing is prohibited.</p>
                            <p className="mb-8 leading-relaxed">To exercise these rights, you just have to write to us indicating your name, first name, postal address and email address in order to give you satisfaction as soon as possible.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau takes all necessary precautions, with regards to the nature of the data and the risks of the treatment, to preserve the security, the confidentiality and the integrity of the data collected and, in particular, to prevent their alteration or unauthorized access by third parties.</p>
                            <p className="mb-8 leading-relaxed">However, PT Duit Hasil Rantau reminds the users of the site that it is impossible to guarantee the absolute security of data transmissions on the internet. Consequently, it cannot guarantee the absolute security of the data transmitted on the internet.</p>
                            <p className="mb-8 leading-relaxed">PT Duit Hasil Rantau will not be held towards the user of the site to pay any damages, guarantee, indemnity, penalty, or any other sum whatever its qualification, towards the user for any reason whatsoever.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">User engagement</h2>
                            <p className="mb-8 leading-relaxed">Each visitor of the PT Duit Hasil Rantau website who provides or inserts information consents to the totality of the transferable rights relative to this information and authorizes PT Duit Hasil Rantau to use it. The information thus provided by the visitors will be considered as non-confidential, and will have to be exact, legal and not harm the interests of third parties.</p>
                            <p className="mb-8 leading-relaxed">It is up to the internet users to take all the appropriate measures to protect their material, data or computer software, notably against computer viruses circulating on the internet network. PT Duit Hasil Rantau can in no way be held responsible for damages caused by a virus during the connection to its website.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Competent Jurisdiction</h2>
                            <p className="mb-8 leading-relaxed">Any dispute in connection with the use of the site www.searoutestrade.com is subject to Indonesian law. Exclusive jurisdiction is given to the Court of Indonesia.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Glossary</h2>
                            <p className="mb-8 leading-relaxed">User, visitor: Internet user connecting to the above-mentioned site and using it. Personal information: “information that allows, in any form whatsoever, directly or not, the identification of the natural persons to whom it applies”.</p>

                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Contacts</h2>
                            <p className="mb-8 leading-relaxed">For any question or problem concerning this Site, please contact us at the following email address: contact@searoutestrade.com</p>
                            <p className="mb-8 leading-relaxed">COPYRIGHT © PT Duit Hasil Rantau ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsappFloating />
        </>
    );
}
