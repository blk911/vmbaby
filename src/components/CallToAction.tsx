
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
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Break Free and Find Yourself?</h2>
          <p className="text-gray-600 mb-5 text-base">
            Join GAPUniv's transformative 8-week journey to discover who you really are and build 
            something meaningful with others who are on the same path.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
              <div>
                <h4 className="font-medium text-base">Weekly 3-5 hour sessions</h4>
                <p className="text-gray-600 text-sm">Conversation-driven learning in a supportive environment</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
              <div>
                <h4 className="font-medium text-base">Led by experienced mentors</h4>
                <p className="text-gray-600 text-sm">Guided by facilitators who prioritize your personal growth</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
              <div>
                <h4 className="font-medium text-base">Limited spots available</h4>
                <p className="text-gray-600 text-sm">Small cohorts ensure personalized attention and deeper connections</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="p-5 border-0 shadow-md rounded-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-4 text-center">Register Your Interest</h3>
              
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
