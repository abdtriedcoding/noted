import { Heroes } from "./_components/heroes";
import { Heading } from "./_components/heading";
import { Features } from "./_components/features";
import { OpenSource } from "./_components/open-source";
import { Testimonials } from "./_components/testimonials";
import { GlobeSection } from "./_components/globe-section";
import { WoobleCardGrid } from "./_components/wooble-card-grid";

const MarketingPage = () => {
  return (
    <>
      <Heading />
      <Heroes />
      <WoobleCardGrid />
      <Features />
      <GlobeSection />
      <Testimonials />
      <OpenSource />
    </>
  );
};

export default MarketingPage;
