import Banner from "../../components/Banner.tsx";
import banner from "../../../public/assets/images/J1/DSC_2409.jpg";
import Breadcrumbs from "../../components/Breadcrumbs.tsx";
import Fancybox from "../../components/Fancybox.tsx";
import activity1 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
import activity2 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
import activity3 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
import activity4 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
import activity5 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";
import activity6 from "../../../public/assets/images/realisations/WhatsApp Image 2025-04-04 at 5.40.19 AM.jpeg";

function Page() {
    const activities = [
        {
            image: activity1
        },
        {
            image: activity2
        },
        {
            image: activity3
        },
        {
            image: activity4
        },
        {
            image: activity5
        },
        {
            image: activity6
        }
    ];

    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs title={'Nos Activités'}/>
            </div>

            {/* Main Content */}
            <div className="bg-white font-sans py-16 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl font-bold text-pink-600 text-center">
                            Nos Activités et Programmes
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                        <p>
                            La Medstudents Leaders Association met en œuvre divers programmes pour lutter contre les maladies non transmissibles à travers des actions concrètes et innovantes. Nos activités s'articulent autour de trois axes principaux : la prévention, le dépistage et l'accompagnement des patients.
                        </p>
                    </div>

                    {/* Gallery */}
                    <Fancybox
                        options={{
                            Carousel: {infinite: true},
                        }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {activities.map((activity, index) => (
                                <div key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <a
                                        href={activity.image}
                                        data-fancybox="gallery"
                                    >
                                        <img
                                            src={activity.image}
                                            className="w-full h-48 object-cover"
                                         alt={`image ${index}`}/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Fancybox>

                    {/* Programs List */}
                    {/*<div className="mt-16">*/}
                    {/*    <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Programmes Phares</h3>*/}
                    {/*    <div className="space-y-4">*/}
                    {/*        <div className="bg-pink-50 p-4 border-l-4 border-pink-500">*/}
                    {/*            <h4 className="font-bold text-lg text-gray-800">MLA Tour Rose</h4>*/}
                    {/*            <p className="text-gray-600">Mon bilan minimum avec MLA - Dépistages complets dans les communautés</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="bg-pink-50 p-4 border-l-4 border-pink-500">*/}
                    {/*            <h4 className="font-bold text-lg text-gray-800">ML Care</h4>*/}
                    {/*            <p className="text-gray-600">Accompagnement personnalisé des patients atteints de maladies chroniques</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">*/}
                    {/*            <h4 className="font-bold text-lg text-gray-800">MLA Live</h4>*/}
                    {/*            <p className="text-gray-600">Émissions et débats en direct sur la prévention santé</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">*/}
                    {/*            <h4 className="font-bold text-lg text-gray-800">Cagnotte 20M</h4>*/}
                    {/*            <p className="text-gray-600">Levée de fonds pour soutenir 20 millions de FCFA de soins aux patients démunis</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}

export default Page;