
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required to register",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send the data to an API
    console.log("Form submitted", { name, email });
    
    toast({
      title: "Registration received!",
      description: "We'll be in touch soon with more information.",
    });
    
    setSubmitted(true);
  };

  return (
    <section id="registration" className="py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-violet-900/80 via-purple-800/70 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Ready to Break Free and Find Yourself?</h2>
            <p className="text-white/90 mb-4 text-base">
              Join GAPUniv's transformative 8-week journey to discover who you really are.
            </p>
          </div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover aspect-video"
          >
            <source src="https://cdn.pixabay.com/vimeo/427534039/friends-42431.mp4?width=1280&hash=3cae5e231ed9bf6bb1cd54553c40e62f42cb9e00" type="video/mp4" />
          </video>
        </div>
        
        <Card className="p-5 border-0 shadow-md rounded-xl bg-white">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4 text-center text-violet-800">Thinking? No! Get in the game!</h3>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-md"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">Email Address</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-md"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-violet-700 hover:bg-violet-800 rounded-full">
                  Register Now <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-3">
                  By registering, you agree to receive updates about GAPUniv. 
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Registration Received!</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Thank you for your interest in GAPUniv. We'll be in touch soon with more 
                information about the next steps.
              </p>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="outline"
                className="rounded-full"
              >
                Register Another Person
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
