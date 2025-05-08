import {useState} from "react";
import banner from "../../assets/images/J1/DSC_2184.jpg";
import Banner from "../../components/Banner.tsx";

function Page() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section:any) => {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    };
    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />
            <div className=" flex flex-col">
                {/* Main content */}
                <main className="flex-grow container mx-auto py-8 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms of Use</h1>
                        <p className="text-sm text-gray-600 mb-6">Last Updated: November 17, 2023</p>

                        <div className="prose max-w-none">
                            <p className="mb-4">
                                This document sets forth the Terms of Use ("Terms of Use") describing the terms and conditions under which you may access and use the Susan G.
                                Komen® website and other Susan G. Komen® digital platforms, mobile software applications, products, services, and content that are developed,
                                owned or made available (collectively, our "Services"). These Terms of Use constitute a legal binding agreement between Susan G. Komen® ("Komen"
                                or "we" or "us" or "our") and you.
                            </p>

                            <div className="bg-gray-100 border-l-4 border-pink-500 p-4 mb-6 uppercase text-sm">
                                PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OUR WEBSITE: YOU ACKNOWLEDGE THAT THEY CONSTITUTE BETWEEN US AND YOU
                                BINDING OBLIGATIONS. BEFORE ARBITRATION: YOU SHOULD KNOW THAT BY USING THE WEBSITE YOU AGREE THAT YOU AND KOMEN WAIVE ANY RIGHT TO
                                A TRIAL BY JURY AND WAIVE ANY RIGHT TO BRING OR PARTICIPATE IN A CLASS ACTION IN CONNECTION WITH ANY DISPUTES BETWEEN US. PLEASE BE
                                ADVISED FURTHER: UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT, YOU WILL BE LIMITED TO SEEKING CLAIMS AND ANY RELIEF
                                AGAINST KOMEN ONLY ON AN INDIVIDUAL BASIS AND NOT AS PART OF ANY CLASS, AND THE ARBITRATOR SHALL HAVE NO AUTHORITY TO AWARD
                                RELIEF EITHER REQUESTED BY OR ON YOUR BEHALF TO ANYONE BUT YOU. HOWEVER, YOU MAY SEEK RELIEF IN A COURT OF LAW AND NOT HAVE A JURY TRIAL ON YOUR CLAIMS. PLEASE
                                SEE SECTION 19 FOR MORE INFORMATION REGARDING THE ARBITRATION AGREEMENT, THE WAIVER EFFECTED BY THE ARBITRATION AGREEMENT, AND YOUR
                                OPTION TO OPT OUT OF THE ARBITRATION AGREEMENT.
                            </div>

                            <div className="space-y-2 mb-8">
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('acceptance')}>1. Acceptance</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('mission')}>2. Mission</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('eligibility')}>3. Eligibility to use our services</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('registration')}>4. Registration</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('health')}>5. Health Content</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('ownership')}>6. Ownership</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('intellectual')}>7. Intellectual Property; Licenses</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('website')}>8. Website Functionality</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('acceptable')}>9. Acceptable Use Policy for Services</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('restrictions')}>10. Use Restrictions</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('trademarks')}>11. Trademarks</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('indemnification')}>12. Indemnification</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('links')}>13. Links to Third Party Websites</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('forums')}>14. Forums and Bulletin Boards</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('notice')}>15. DMCA Notice</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('disclaimers')}>16. Disclaimers</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('limitation')}>17. Limitation of Liability</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('governing')}>18. Governing Law</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('dispute')}>19. Dispute Resolution and Binding Arbitration PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('severability')}>20. Severability of Terms of Use</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('entire')}>21. Entire Agreement</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('exclusive')}>22. Exclusive Jurisdiction and Place of Venue</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('waiver')}>23. Non-Waiver of Rights and Remedies of these Terms of Use</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('termination')}>24. Termination</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('privacy')}>25. Privacy</p>
                                <p className="cursor-pointer text-pink-500 hover:underline" onClick={() => toggleSection('contact')}>26. Contact</p>
                            </div>

                            <div className="space-y-6">
                                <div id="acceptance" className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance</h2>
                                    <p className="mb-4">
                                        This Website and our Services may contain various information relating to Komen in the form of text, graphics, data, and other materials
                                        ("Information"), and this Information constitutes copyrightable subject matter which is protected by applicable federal laws. By accessing and
                                        using or otherwise using our Services, including by establishing a Komen account, donating, accessing our website, mobile app or otherwise
                                        interacting with our Privacy Policy is incorporated by reference into these Terms of Use. By accessing browsing, downloading or otherwise using or
                                        interacting with our Services, if you do not agree with these Terms of Use, you should not access, browse, or otherwise use this Website or any of the
                                        Komen Services.
                                    </p>

                                    <p className="mb-4">
                                        You also agree to comply with all applicable local laws, regulations, and rules regarding online conduct and acceptable Content including those of
                                        the United States and the country in which you reside. If you do not meet the foregoing (even if you are under legal entity), then "you" also
                                        represent that you have received permission from a legal guardian to use the Services.
                                    </p>

                                    <p className="mb-4">
                                        Please read these Terms of Use carefully before you start to use our Services. Our Services are all offered by Komen to you on the express condition
                                        that you accept without addition, modification, and abide by these Terms of Use.
                                    </p>
                                </div>

                                <div id="mission" className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Mission</h2>
                                    <p className="mb-4">
                                        Komen is committed to saving lives by end breast cancer forever by empowering people, ensuring quality care for all, and energizing
                                        science to find the cures. Our Services are designed with all uses of our features are intended to be in furtherance of our Mission.
                                    </p>
                                </div>

                                <div id="eligibility" className="mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Eligibility to use our services</h2>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>You must be at least 18 years of age to use our Services and our Services are not intended for individuals under the age of 18
                                            without supervision by a parent or legal guardian.</li>
                                        <li>You may not use the Website or Services if we have banned you from the Website.</li>
                                    </ul>

                                    <p className="mb-4">
                                        By using our Services, you represent and warrant that you meet all of the foregoing eligibility requirements. If you do not meet all of these
                                        requirements, you must not access or use our Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Page;
