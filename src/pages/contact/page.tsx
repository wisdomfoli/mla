import { useState } from "react";

function Page() {
    const [formData, setFormData] = useState({
        subject: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: '',
        smsSignup: false
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Formulaire soumis :', formData);
    };

    return (
        <div>
            <main className="container mx-auto px-4 py-8 max-w-5xl">
                <h1 className="text-3xl font-bold  mb-6">Nous contacter</h1>

                <div className="space-y-6">
                    <p className="font-medium ">
                        Pour toute information concernant nos actions ou nos projets, vous pouvez nous contacter par téléphone au <a href="https://wa.me/22892888822" className="text-pink-600">+228 92 88 88 22</a> ou par email à <a href="mailto:contact@santejeunes.org" className="text-pink-600">contact@santejeunes.org</a>.
                    </p>

                    <p className="font-medium ">
                        Si vous êtes intéressé par nos programmes dans nos antennes à l'étranger <span className={'text-pink-600'}>(Maroc, France, Allemagne, Italie)</span>, veuillez préciser votre localisation dans le formulaire ci-dessous.
                    </p>

                    <p className="font-medium ">
                        Adresse du siège : <span className={'text-pink-600'}>Lomé, Togo — Quartier administratif, Rue de la Santé</span>
                    </p>

                    <p className="font-medium ">
                        Vous souhaitez collaborer ou en savoir plus ? <a href="#" className="text-pink-600">Écrivez-nous</a>
                    </p>

                    <h2 className="font-bold mt-6 mb-2 text-pink-600">Questions fréquentes</h2>
                    <ol className="list-decimal pl-5 space-y-1 ">
                        <li><a href="#" className="">Rejoindre notre organisation</a></li>
                        <li><a href="#" className="">Participer à un projet local</a></li>
                        <li><a href="#" className="">Devenir partenaire</a></li>
                        <li><a href="#" className="">Faire une demande de collaboration</a></li>
                    </ol>

                    <p className="">Vous avez une question ou souhaitez en savoir plus sur nos initiatives ? Veuillez remplir le formulaire ci-dessous.</p>
                    <p className=" mt-4">Tous les champs sont obligatoires.</p>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label htmlFor="subject" className="block font-medium  mb-1">
                                    Sujet <span className="text-pink-500">*</span>
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                >
                                    <option value="">Veuillez sélectionner une option</option>
                                    <option value="general">Demande générale</option>
                                    <option value="partnership">Partenariat ou collaboration</option>
                                    <option value="volunteering">Devenir membre ou bénévole</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="firstName" className="block font-medium  mb-1">
                                    Prénom <span className="text-pink-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    maxLength={40}
                                    required
                                />
                                <div className="text-xs text-gray-500 mt-1">{formData.firstName.length} sur 40 caractères max</div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block font-medium  mb-1">
                                    Nom <span className="text-pink-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    maxLength={40}
                                    required
                                />
                                <div className="text-xs text-gray-500 mt-1">{formData.lastName.length} sur 40 caractères max</div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium  mb-1">
                                    Email <span className="text-pink-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block font-medium  mb-1">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="comments" className="block font-medium  mb-1">
                                    Message <span className="text-pink-500">*</span>
                                </label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    maxLength={500}
                                    required
                                ></textarea>
                                <div className="text-xs text-gray-500 mt-1">{formData.comments.length} sur 500 caractères max</div>
                            </div>

                            <div className="col-span-2">
                                <h3 className="font-medium mb-2 ">Recevoir des nouvelles</h3>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="smsSignup"
                                            name="smsSignup"
                                            type="checkbox"
                                            checked={formData.smsSignup}
                                            onChange={handleChange}
                                            className="focus:ring-primary h-4 w-4  border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="smsSignup" className="font-medium ">
                                            En cochant cette case, vous acceptez de recevoir nos actualités et invitations à nos événements par SMS (max 4 par mois). Répondez STOP pour vous désinscrire. Consultez notre <a href="#" className="">politique de confidentialité</a>.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Page;
