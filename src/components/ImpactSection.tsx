import { Link } from 'react-router-dom';

const ImpactSection = () => {
    return (
        <section className="impact-section bg-gray-50 md:px-24 px-10 md:py-20">
            <div className="impact-container">
                <div className="text-center">
                    <h2 className="mb-2 text-3xl font-bold text-gray-900">Notre Impact</h2>
                    <p className="mb-10 text-lg font-semibold uppercase tracking-wider text-pink-500">
                        DANS NOTRE MISSION POUR LA SANTÉ COMMUNAUTAIRE
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="group">
                            <div className="h-full rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                                <div className="mb-2 text-lg font-bold uppercase text-pink-500">{stat.category}</div>
                                <div className="mb-2 text-xl font-bold">{stat.title}</div>
                                <div className="mb-4 text-4xl font-extrabold text-gray-900">{stat.value}</div>
                                <div className="text-sm font-medium uppercase text-gray-600">{stat.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                    <Link
                        to="#"
                        className="text-pink-500 outline-pink-500 outline-1 p-4"
                    >
                        EN SAVOIR PLUS
                    </Link>
                    <Link
                        to="#"
                        className="bg-pink-500 p-4 text-white"
                    >
                        FAIRE UN DON
                    </Link>
                </div>
            </div>
        </section>
    );
};

const stats = [
    {
        id: 1,
        category: 'Sensibilisation',
        title: 'Cancer du sein',
        value: '150K+',
        description: 'PERSONNES OUTILLÉES SUR LA PRÉVENTION',
        link: '/prevention-cancer-sein'
    },
    {
        id: 2,
        category: 'Dépistage',
        title: 'Santé générale',
        value: '200K+',
        description: 'PERSONNES DÉPISTÉES (SURPOIDS, HTA...)',
        link: '/depistage-sante'
    },
    {
        id: 3,
        category: 'Don de sang',
        title: 'Collecte',
        value: '3K+',
        description: 'Poches DE SANG COLLECTÉES',
        link: '/don-sang'
    },
    {
        id: 4,
        category: 'Drépanocytose',
        title: 'Prévention',
        value: '15K+',
        description: 'JEUNES CONNAISSANT LEUR STATUT',
        link: '/drepano-prevention'
    }
];

export default ImpactSection;