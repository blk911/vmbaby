
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm font-medium tracking-wide">ENROLLMENT OPEN NOW</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-300">GAP</span>Univ
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">GET AWAY FROM PARENTS</h2>
          <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl mx-auto">
            "You can't build a life if you haven't met yourself."
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              onClick={scrollToRegistration}
              className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 rounded-full"
            >
              Register Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
              onClick={scrollToRegistration}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
};

export default Hero;
