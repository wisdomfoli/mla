import { Link } from 'react-router-dom';
import { faTiktok, faFacebookF, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-4 md:px-8 lg:px-16 xl:px-32 py-12">
            {/* Section supérieure */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {/* Partenariat */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-white">Devenez partenaire</h3>
                    <Link
                        to="/partenaires"
                        className="inline-block px-6 py-2 border-2 border-white rounded-md text-white hover:bg-pink-600 hover:border-pink-600 transition-colors duration-300"
                    >
                        DEVENIR SPONSOR
                    </Link>
                </div>

                {/* Hommage */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-white">Rendez hommage à un proche</h3>
                    <Link
                        to="#"
                        className="inline-block px-6 py-2 border-2 border-white rounded-md text-white hover:bg-pink-600 hover:border-pink-600 transition-colors duration-300"
                    >
                        CRÉER UNE PAGE D'HOMMAGE
                    </Link>
                </div>

                {/* Réseaux sociaux */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-white">Restez connectés</h3>
                    <div className="flex space-x-4 mb-6">
                        {[
                            { icon: faFacebookF, url: "https://www.facebook.com/medstud.lead" },
                            { icon: faX, url: "https://x.com/medstud_lead" },
                            { icon: faInstagram, url: "https://www.instagram.com/medstud_lead/" },
                            { icon: faYoutube, url: "https://www.youtube.com/@mladoctors" },
                            { icon: faTiktok, url: "https://www.tiktok.com/@doctorsofmla" },
                            { icon: faLinkedinIn, url: "https://www.linkedin.com/company/medstudlead" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-pink-600 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Lien ${social.icon.iconName}`}
                            >
                                <FontAwesomeIcon icon={social.icon} className="text-lg" />
                            </a>
                        ))}
                    </div>

                    {/* Inscription Email */}
                    <div>
                        <h4 className="mb-2 text-lg font-bold text-white">Inscription à la newsletter</h4>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-grow rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white font-bold px-6 py-2 rounded">
                                S'INSCRIRE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Liens du milieu */}
            <div className="grid grid-cols-1 gap-8 border-t border-gray-700 pt-8 md:grid-cols-2 lg:grid-cols-4">
                {/* À propos */}
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">À propos</h3>
                    <ul className="space-y-2">
                        {[
                            { text: "À propos de Nous", to: "/a-propos" },
                            { text: "Direction", to: "#direction" },
                            { text: "Informations financières", to: "#informations-financieres" },
                            { text: "Carrières", to: "#carrieres" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.to} className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Explorer */}
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Explorer</h3>
                    <ul className="space-y-2">
                        {[
                            { text: "Subventions", to: "#subventions" },
                            { text: "Collecter des fonds", to: "#collecter-des-fonds" },
                            { text: "Trouver un événement", to: "#trouver-un-evenement" },
                            { text: "Conditions d'utilisation", to: "/conditions-utilisation/" },
                            { text: "Politique de confidentialité", to: "/politique-confidentialite/" },
                            { text: "Plan du site", to: "#sitemap" }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.to} className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Blog */}
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Blog</h3>
                    <ul className="space-y-2">
                        {[
                            { text: "Blog", to: "/blog/" },
                            { text: "Salle de presse", to: "#salle-de-presse" },
                            { text: "Partagez votre histoire", to: "#partagez-votre-histoire" }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.to} className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
                    <ul className="space-y-4">
                        <li>
                            <p className="font-bold text-white text-xl">Ligne d'aide :</p>
                            <a href="https://wa.me/22892888822" className="flex items-center underline font-bold text-white mb-2 hover:text-pink-400">
                                (+228) 92888822
                            </a>
                            <a href="mailto:eboffice@mladoctors.org" className=" hover:text-pink-400 transition-colors duration-300 underline font-bold text-white">
                                eboffice@mladoctors.org
                            </a>
                        </li>
                        <li>
                            <p className="font-bold text-white text-xl">Service donateurs :</p>
                            <p className="block text-gray-300  transition-colors duration-300 mb-2">
                                Mobile Money : <span className={'hover:text-pink-400 underline font-bold text-white'}>+22892888822 / +22899187254</span>
                            </p>
                            <p className="block text-gray-300  transition-colors duration-300 mb-2">
                                Virement bancaire : <span className={'hover:text-pink-400 underline font-bold text-white'}>141197009001</span>
                            </p>
                            <p className="text-gray-300 transition-colors duration-300">
                                PayPal : <a href="mailto:eboffice@mladoctors.org" className={'hover:text-pink-400 underline font-bold text-white'}>
                                    medstud.leaders@gmail.com
                                </a>
                            </p>
                        </li>
                        <li>
                            <p className="font-bold text-white">Toutes les demandes :</p>
                            <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                                Contactez-nous
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bas de page */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p className="text-sm text-gray-400">
                    © 2025 <span className="text-pink-400">THEPOTENTIALAI.</span> Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
