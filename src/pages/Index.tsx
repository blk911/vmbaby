
import Hero from "@/components/Hero";
import ProgramPhases from "@/components/ProgramPhases";
import WeeklyBreakdown from "@/components/WeeklyBreakdown";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Hero />
      <div className="container mx-auto px-3 sm:px-4 py-8 space-y-12 md:space-y-16">
        <ProgramPhases />
        <WeeklyBreakdown />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
