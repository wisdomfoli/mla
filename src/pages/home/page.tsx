import HeroSection from "../../components/HeroSection.tsx";
import SupportSection from "../../components/SupportSection.tsx";
import FeatureSection from "../../components/FeaturesSection.tsx";
import ImpactSection from "../../components/ImpactSection.tsx";
import ShareForCuresSection from "../../components/ShareForCuresSection.tsx";

function Home() {
    return (
        <>
            <HeroSection/>
            <SupportSection/>
            <FeatureSection/>
            <ImpactSection/>
            <ShareForCuresSection/>
        </>
    );
}

export default Home;