
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WeeklyBreakdown = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const sections = [
    {
      id: "section1",
      title: "WEEKS 1–2: STUCK IS A LIE",
      subtitle: "You're not lost. You're paused before the pivot.",
      weeks: [
        {
          number: 1,
          title: 'The Myth of "I Don\'t Know"',
          description: '"I don\'t know" = "I haven\'t asked myself hard enough."',
          activity: 'Group reflection + journaling: "What would I do if I wasn\'t scared?"'
        },
        {
          number: 2,
          title: "Begin Uncovering Your Drivers",
          description: "What's pulling you forward? What's holding you back?",
          activity: 'Assignment: Audio journal — "Where am I stuck?"'
        }
      ]
    },
    {
      id: "section2",
      title: "WEEKS 3–4: THE MIRROR AND THE MASK",
      subtitle: "Who you perform vs. who you are when no one's watching.",
      weeks: [
        {
          number: 3,
          title: "Identity Layer Peel-Back",
          description: "Life map through labels, roles, projections.",
          activity: 'Prompt: "What parts of me have I hidden, and why?"'
        },
        {
          number: 4,
          title: "Stories and Reflections",
          description: 'Interview: "How do others describe me?"',
          activity: "Create a self-portrait — written, visual, or spoken — no filters."
        }
      ]
    },
    {
      id: "section3",
      title: "WEEKS 5–7: LOVE YOUR SELF, NO MORE SELLING OUT",
      subtitle: "If you abandon yourself, nothing else works.",
      weeks: [
        {
          number: 5,
          title: "What Is Love (Really)?",
          description: "Love ≠ approval. Love = integrity.",
          activity: 'Prompt: "When did I last betray myself to keep the peace?"'
        },
        {
          number: 6,
          title: "F.A.C.E.D. by Ego",
          description: "These are the moves your ego makes when it feels threatened.",
          activity: "Build your personal ego map, spot your default pattern, and practice interrupting it with awareness."
        },
        {
          number: 7,
          title: "Boundaries & Integrity",
          description: "Define your Non-Negotiables.",
          activity: "Begin writing your Relationship Manifesto and share it in circle."
        }
      ]
    },
    {
      id: "section4",
      title: "WEEK 8: LOVE OR FEAR — LIFE'S CHOICE",
      subtitle: "Every choice is a vote: love or fear.",
      weeks: [
        {
          number: 8,
          title: "Preparing for What's Next",
          description: "Build your Fear Map",
          activity: 'Reflect: "If fear wasn\'t running me, what would I choose now?"'
        }
      ]
    },
    {
      id: "section5",
      title: "PHASE 2: THE IDEA FORUM",
      subtitle: "What Did You Find in YOU?",
      description: "This isn't a brainstorm. This is a truth-storm."
    },
    {
      id: "section6",
      title: "PHASE 2: WELCOME TO THE FIRE",
      subtitle: "Setup for Execute",
      description: "This is life. And at times, all life gives you is LEMON.",
      steps: [
        "The Call to Reality",
        "Winnowing the Wall",
        "Visioning Circles",
        "Team Lock-In + Charter Writing",
        'Mentor Reveal — You as "VC"'
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-8">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-2 border-purple-300 text-purple-700 px-3 py-1 rounded-full">Curriculum</Badge>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Weekly Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Our carefully crafted program takes you through a journey of self-discovery week by week. 
          Each session builds on the previous ones to create a transformative experience.
        </p>
      </div>

      <Tabs defaultValue="section1" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6 rounded-full overflow-hidden">
          {sections.map((section) => (
            <TabsTrigger 
              key={section.id} 
              value={section.id}
              className="text-xs py-1.5"
            >
              {section.id === "section5" || section.id === "section6" 
                ? `Phase 2-${section.id === "section5" ? "1" : "2"}` 
                : `Week ${section.id === "section1" ? "1-2" : 
                     section.id === "section2" ? "3-4" :
                     section.id === "section3" ? "5-7" : "8"}`}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <Card className="p-5 border-t-4 border-t-purple-500 rounded-xl">
              <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">{section.title}</h3>
              <p className="text-gray-600 italic mb-3 text-sm">{section.subtitle}</p>
              
              {section.description && (
                <div className="mb-3">
                  <p className="text-sm">{section.description}</p>
                </div>
              )}
              
              {section.weeks && (
                <div className="space-y-4 mt-4">
                  {section.weeks.map((week) => (
                    <div key={week.number} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="h-7 w-7 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <span className="text-purple-700 font-medium text-sm">{week.number}</span>
                        </div>
                        <h4 className="text-base font-medium">{week.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-2 text-sm">{week.description}</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded-md">
                        <p className="text-xs font-medium text-gray-700">Activity:</p>
                        <p className="text-gray-600 text-sm">{week.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {section.steps && (
                <div className="mt-4">
                  <h4 className="font-medium text-base mb-2">Process Steps:</h4>
                  <ol className="list-decimal pl-5 space-y-1.5 text-sm">
                    {section.steps.map((step, index) => (
                      <li key={index} className="text-gray-700">{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default WeeklyBreakdown;
