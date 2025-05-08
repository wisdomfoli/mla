import Afrikelles from '../../assets/logos/partners/Afrikelles.jpg'
import CL from '../../assets/logos/partners/Commune-des-Lacs-1-1-1.webp'
import oil from '../../assets/logos/partners/T-oil.png'
import Dore from '../../assets/logos/partners/Dore Logo.jpg'
import jbless from '../../assets/logos/partners/jbless corporation logo 1.png'
import Jojophotography from '../../assets/logos/partners/Jojophotography white B.png'
import FRII from '../../assets/logos/partners/L-frii.webp'
import MLA from '../../assets/logos/partners/Logo MLA.png'
import monene from '../../assets/logos/partners/logo monene-01.jpg'
import WGH from '../../assets/logos/partners/Logo WGH TOGO.png'
import kekely from '../../assets/logos/partners/Logo-kekely.png'
import Eden from '../../assets/logos/partners/Logo-Optics-Eden-light.png'
import precyeux from '../../assets/logos/partners/logo-precyeux.svg'
// import Sécurité from '../../assets/logos/partners/M. Sécurité et de la protection civile.png'
import MEPTSA from '../../assets/logos/partners/MEPTSA_.png'
import SOSDrTV from '../../assets/logos/partners/SOS Dr TV_.png'
import Zener from '../../assets/logos/partners/Zener.png'
import PartnerForm from "../../components/PartnerForm.tsx";


const partners = [
    {
        name: 'Afrikelles',
        image: Afrikelles
    },
    {
        name: 'Commune des Lacs',
        image: CL
    },
    {
        name: 'Dore',
        image: Dore
    },
    {
        name: 'Jbless',
        image: jbless
    },
    {
        name: 'Jojophotography',
        image: Jojophotography
    },
    {
        name: 'L-FRII',
        image: FRII
    },
    {
        name: 'MLA',
        image: MLA
    },
    {
        name: 'Monene',
        image: monene
    },
    {
        name: 'WGH',
        image: WGH
    },
    {
        name: 'Kekely',
        image: kekely
    },
    {
        name: 'Eden',
        image: Eden
    },
    {
       name: 'oil Logo',
       image: oil
    },
    {
        name: 'Precyeux',
        image: precyeux
    },
    {
        name: 'SOS Dr TV',
        image: SOSDrTV
    },
    {
        name: 'Zener',
        image: Zener
    },
    {
        name: 'MEPTSA',
        image: MEPTSA
    },
    // {
    //     name: 'Sécurité et de la protection civile',
    //     image: Sécurité
    // }
]
function Page() {
    return (
        <>
            <div
                className={`px-4 py-8 relative h-[80px] overflow-hidden flex flex-col items-center justify-center bg-pink-500`}
            >

                <div className="text-center">
                    <h1 className="text-2xl font-medium text-gray-50">Join our community of corporate partners.</h1>
                </div>
            </div>

            <div
                className={`px-4 py-8 flex items-center justify-center `}
            >

                <div className="text-center w-7xl lg:px-40">
                    <h1 className="text-2xl font-semibold text-black opacity-70">MEET OUR PARTNERS

                    </h1>
                    <p className={'mt-4 text-lg text-black opacity-50'}>This community of bold corporate leaders shares our vision of creating a world without breast cancer. Together, we power innovative breakthrough research, break down inequitable barriers to quality care, provide patients’ direct support, and advocate for patients’ rights. Thanks to their support, we are making a meaningful difference in the lives of the breast cancer community every day.</p>
                    <a href="#partner-form">
                        <button className="bg-pink-500 mt-4 font-bold mb-1 lg:mb-2 text-white px-3 py-2 lg:px-4 lg:py-3 hover:bg-pink-700 transition-all duration-300 cursor-pointer text-xl lg:text-base">
                            DEVENIR UN PARTENAIRE
                        </button>
                    </a>
                </div>
            </div>
            <div className={"py-8 md:px-36 px-1"}>
                <div className={'grid grid-cols-2 lg:grid-cols-4 gap-8'}>
                    {partners.map((partner, index) => (
                        <div key={index} className={'flex items-center justify-center'}>
                            <img src={partner.image} alt={partner.name} width={200} height={200} />
                        </div>
                    ))}
                </div>
            </div>
            <div id='partner-form'>
                <PartnerForm/>
            </div>
        </>
    );
}

export default Page;