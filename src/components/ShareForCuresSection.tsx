import { Link } from 'react-router-dom';
import logo_mission from "../../public/assets/logos/logo_white.png";

const ShareForCuresSection = () => {
    return (
        <section className="bg-pink-600 py-12 text-white px-4 md:px-16 mt-6">
            <div className="komen-container">
                <div className="flex flex-col items-center gap-8 lg:flex-row">
                    <div className="flex-1">
                        <div className="flex items-center">
                            <img src={logo_mission} alt="" width={80} height={80}/>
                            <p className="ps-10 relative inline-block text-4xl text-gray-300 font-bold overflow-hidden">
                                <span className="shine-effect">Medstudents Leaders Association</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="mb-4 text-2xl font-bold lg:text-3xl text-white">
                            Ensemble, nous pouvons améliorer la santé de nos communautés.
                        </h2>
                        <p className="mb-6 text-lg text-white">
                            Depuis 2016, la Medstudents Leaders Association s'engage à prévenir et à lutter contre les maladies,
                            en particulier les maladies non transmissibles qui touchent nos populations. Basée à Lomé, au Togo,
                            et présente dans plusieurs pays, notre organisation regroupe de jeunes professionnels de la santé
                            unis par une même passion : promouvoir la santé et le bien-être des plus vulnérables.
                        </p>
                        <Link
                            to="/a-propos"
                            className="inline-block rounded-md border border-white bg-transparent px-6 py-3 font-bold text-white hover:bg-pink-500 hover:text-white transition-colors"
                        >
                            En savoir plus sur notre mission
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShareForCuresSection;
