
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
        <Card className="p-5 border-l-4 border-l-violet-500 hover:shadow-lg transition-all rounded-xl">
          <div className="flex items-center mb-3">
            <div className="h-9 w-9 rounded-full bg-violet-100 flex items-center justify-center mr-3">
              <span className="text-violet-700 font-medium">1</span>
            </div>
            <h3 className="text-xl font-semibold">PHASE 1: DISCOVER YOU</h3>
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
        </Card>
        
        <Card className="p-5 border-l-4 border-l-emerald-500 hover:shadow-lg transition-all rounded-xl">
          <div className="flex items-center mb-3">
            <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
              <span className="text-emerald-700 font-medium">2</span>
            </div>
            <h3 className="text-xl font-semibold">PHASE 2: WHAT'S NEXT</h3>
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
        </Card>
      </div>
    </section>
  );
};

export default ProgramPhases;
