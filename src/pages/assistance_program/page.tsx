import banner from "../../assets/images/J1/DSC_2606.jpg";
import Banner from "../../components/Banner.tsx";
import {useState} from "react";

function Page() {
    const [showImportantInfo, setShowImportantInfo] = useState(false);
    const [showDocuments, setShowDocuments] = useState(false);
    return (
        <>
            <Banner backgroundImage={banner} title="" description="" />
            <div className="bg-white font-sans py-8 px-4 md:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold flex items-center text-pink-500 border-b border-gray-200 pb-3 mb-6">
                                <span className="mr-2">Aide Financière</span>
                            </h2>

                            <div className="mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    Les difficultés financières ne devraient pas empêcher les patients d'accéder aux soins dont ils ont besoin. Bien que les traitements médicaux constituent la principale dépense, les frais de la vie quotidienne peuvent aussi devenir un obstacle aux soins médicaux essentiels.
                                </p>
                            </div>

                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="bg-gray-100 p-6">
                                <h3 className="font-bold text-gray-800 mb-4">Contactez-nous pour toute question</h3>
                                <p className="mb-2">
                                    <span className="font-bold">Email :</span>{' '}
                                    <a href="mailto:assistance@mla.tg" className="text-pink-500 hover:underline">
                                        assistance@mla.tg
                                    </a>
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Téléphone :</span> +228 12 34 56 78
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Lundi-Vendredi 8h - 17h</span>
                                </p>
                                <p className="italic">Assistance en français et langues locales</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Aperçu du Programme</h3>

                        <p className="mb-4">
                            Le programme d'aide financière de MLA vise à soutenir les patients en situation de précarité financière pour leur permettre d'accéder aux soins essentiels.
                        </p>

                        <p className="mb-6">
                            Les demandes sont traitées dans un délai de 4 à 6 semaines après soumission d'un dossier complet.
                        </p>

                        <div className="mb-2">
                            <div
                                className="bg-gray-900 text-white p-4 flex justify-between items-center cursor-pointer"
                                onClick={() => setShowImportantInfo(!showImportantInfo)}
                            >
                                <h4 className="font-bold">Informations importantes</h4>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 transform transition-transform ${showImportantInfo ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {showImportantInfo && (
                                <div className="p-4 border border-gray-300">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Le traitement peut prendre jusqu'à 6 semaines après soumission d'un dossier complet</li>
                                        <li>Ce programme est ouvert à tous sans discrimination</li>
                                        <li>Les paiements sont effectués directement au bénéficiaire</li>
                                        <li>Les virements bancaires sont plus sécurisés et plus rapides</li>
                                        <li>Seules les demandes en ligne via notre portail seront acceptées</li>
                                        <li>Les professionnels de santé peuvent faire une demande pour leurs patients</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="mb-2">
                            <div
                                className="bg-pink-600 text-white p-4 flex justify-between items-center cursor-pointer"
                                onClick={() => setShowDocuments(!showDocuments)}
                            >
                                <h4 className="font-bold">Liste des documents requis</h4>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 transform transition-transform ${showDocuments ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {showDocuments && (
                                <div className="p-4 border border-gray-300 rounded-b-lg mt-1">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Pièce d'identité valide</li>
                                        <li>Justificatif de domicile</li>
                                        <li>Ordonnance médicale récente</li>
                                        <li>Relevé d'identité bancaire</li>
                                        <li>Justificatifs de revenus</li>
                                        <li>Dossier médical complet</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;