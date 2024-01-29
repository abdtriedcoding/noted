import { Heroes } from "./_components/heroes";
import { Heading } from "./_components/heading";
import { Features } from "./_components/features";
import { OpenSource } from "./_components/open-source";
import { Testimonials } from "./_components/testimonials";
import { GlobeSection } from "./_components/globe-section";

const MarketingPage = () => {
  return (
    <>
      <Heading />
      <Heroes />
      <Features />
      <GlobeSection />
      <Testimonials />
      <OpenSource />
    </>
  );
};

export default MarketingPage;
