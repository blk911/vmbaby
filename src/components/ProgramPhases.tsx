
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const ProgramPhases = () => {
  return (
    <section id="program" className="py-10">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2 border-violet-300 text-violet-700 px-3 py-1">Program Structure</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Two-Phase Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A carefully structured program designed to help you discover yourself first, then build something meaningful with others.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Card className="p-6 border-l-4 border-l-violet-500 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
              <span className="text-violet-700 font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold">PHASE 1: DISCOVER YOU</h3>
          </div>
          <p className="text-gray-600 mb-4 italic">
            "You're not lost. You're paused before the pivot."
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-violet-500 font-bold">✦</span>
              <span>Weekly 3–5 hour sessions of deep self-reflection</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500 font-bold">✦</span>
              <span>Conversation-driven learning rather than rigid curriculum</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500 font-bold">✦</span>
              <span>Four themed modules over eight transformative weeks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-500 font-bold">✦</span>
              <span>Progress from identifying blocks to mapping your future</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-emerald-500 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
              <span className="text-emerald-700 font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold">PHASE 2: WHAT'S NEXT</h3>
          </div>
          <p className="text-gray-600 mb-4 italic">
            "You've dug deep. Now it's time to build forward."
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold">✦</span>
              <span>Transform self-discoveries into actionable projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold">✦</span>
              <span>Form teams around shared missions and energies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold">✦</span>
              <span>Create real-world structures, projects, and movements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold">✦</span>
              <span>Receive mentorship as you build something meaningful together</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default ProgramPhases;
