
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProgramPhases = () => {
  return (
    <section id="program" className="py-8">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-2 border-violet-300 text-violet-700 px-3 py-1 rounded-full">Program Structure</Badge>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Two-Phase Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          A carefully structured program designed to help you discover yourself first, then build something meaningful with others.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all rounded-xl">
          <div className="relative">
            <AspectRatio ratio={16/9} className="bg-violet-100">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                alt="Students in a discussion circle" 
                className="object-cover w-full h-full rounded-t-xl"
              />
            </AspectRatio>
            <div className="absolute top-3 left-3 bg-violet-500/90 text-white py-1 px-3 rounded-full text-sm font-medium">
              Phase 1
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex items-center mb-3">
              <div className="h-9 w-9 rounded-full bg-violet-100 flex items-center justify-center mr-3">
                <span className="text-violet-700 font-medium">1</span>
              </div>
              <h3 className="text-xl font-semibold">DISCOVER YOU</h3>
            </div>
            <p className="text-gray-600 mb-3 italic text-sm">
              "You're not lost. You're paused before the pivot."
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-violet-500 font-medium mt-1">✦</span>
                <span>Weekly 3–5 hour sessions of deep self-reflection</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-violet-500 font-medium mt-1">✦</span>
                <span>Conversation-driven learning rather than rigid curriculum</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-violet-500 font-medium mt-1">✦</span>
                <span>Four themed modules over eight transformative weeks</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-violet-500 font-medium mt-1">✦</span>
                <span>Progress from identifying blocks to mapping your future</span>
              </li>
            </ul>
          </div>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all rounded-xl">
          <div className="relative">
            <AspectRatio ratio={16/9} className="bg-emerald-100">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                alt="Team collaboration session" 
                className="object-cover w-full h-full rounded-t-xl"
              />
            </AspectRatio>
            <div className="absolute top-3 left-3 bg-emerald-500/90 text-white py-1 px-3 rounded-full text-sm font-medium">
              Phase 2
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex items-center mb-3">
              <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                <span className="text-emerald-700 font-medium">2</span>
              </div>
              <h3 className="text-xl font-semibold">WHAT'S NEXT</h3>
            </div>
            <p className="text-gray-600 mb-3 italic text-sm">
              "You've dug deep. Now it's time to build forward."
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-medium mt-1">✦</span>
                <span>Transform self-discoveries into actionable projects</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-medium mt-1">✦</span>
                <span>Form teams around shared missions and energies</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-medium mt-1">✦</span>
                <span>Create real-world structures, projects, and movements</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-500 font-medium mt-1">✦</span>
                <span>Receive mentorship as you build something meaningful together</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProgramPhases;
