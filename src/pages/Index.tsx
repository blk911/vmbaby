
import Hero from "@/components/Hero";
import ProgramPhases from "@/components/ProgramPhases";
import WeeklyBreakdown from "@/components/WeeklyBreakdown";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProgramDescription from "@/components/ProgramDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Navigation />
      <Hero />
      <ProgramDescription />
      <div className="container mx-auto px-3 py-3 space-y-3">
        <div id="program">
          <ProgramPhases />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="schedule">
          <WeeklyBreakdown />
        </div>
        <div id="registration">
          <CallToAction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
