
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WeeklyBreakdown = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const phases = [
    {
      id: "phase1",
      title: "PHASE 1 – DISCOVER YOU",
      tagline: "\"You can't build a life if you haven't met yourself.\"",
      description: "Weekly 3–5 hour sessions led by instructors. Style: Conversation > Curriculum, Real > Rote, Inquiry > Instruction",
      sections: [
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
          title: "WEEKS 5–7: YOUR SELF, RELATIONSHIPS AND RELATING SKILLS",
          subtitle: "If you abandon yourself, nothing else works.",
          description: "Before you can find your path, you must know Your Self — your loves, your passions, your fears, your conflict resolution patterns, and your core values. With no skills, there can be no success in life.",
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
              description: "These are the moves your ego makes when it feels threatened — and they've been running your life more than you think.",
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
        }
      ]
    },
    {
      id: "phase2",
      title: "PHASE 2 – WHAT'S NEXT",
      tagline: "You've dug deep. Now it's time to build forward.",
      sections: [
        {
          id: "section5",
          title: "PART 1: THE IDEA FORUM",
          subtitle: "What Did You Find in YOU?",
          description: "This isn't a brainstorm. This is a truth-storm. We're not pitching business ideas. We're pulling from real discoveries — passions, themes, frustrations, sparks — all found in Phase 1.",
          steps: [
            {
              title: "Step 1: Personal Revelation",
              content: "Each student shares what they found inside themselves: Passions, Interests, Patterns, Creative desires, Frustrations or pain they want to transform, Something that just won't leave them alone, The role of technology — especially AI — in helping you shape your next chapter."
            },
            {
              title: "Step 2: Group Curiosity",
              content: "No feedback. Only curiosity and inquiry. \"When you said ___, I felt ___.\", \"What if this part is the beginning of something real?\", \"What story lives underneath that?\" This continues until the energy ends. No time limit. No rushing."
            }
          ],
          goals: "Ideas emerge, some gain traction. Students begin gravitating toward shared missions or energies."
        },
        {
          id: "section6",
          title: "PART 2: SETUP FOR EXECUTE",
          subtitle: "Welcome to the Fire",
          description: "This is life. And at times, all life gives you is LEMON. Which means you get to make a zhit ton of lemonade. And every glass is bon appétit.",
          steps: [
            {
              title: "Step 1: The Call to Reality",
              content: "\"You're getting away from your parents. But you don't get away alone and survive. So here's the question — what are the best ideas this group of YOU can actually pull off... together?\" This isn't about dreams. It's about durable systems. Structures. Projects. Movements. That take care of you and the people beside you."
            },
            {
              title: "Step 2: Winnowing the Wall",
              content: "From infinite to intentional. Revisit the Idea Forum board. Each person picks 2–3 ideas they would build for real. No \"maybes\" — only \"hell yes\" or \"nah\". Narrow to 3–5 viable, high-energy ideas."
            },
            {
              title: "Step 3: Visioning Circles",
              content: "Gather around the top ideas. No pitching. Just visioning: \"What could this become?\", \"How would this serve the team?\", \"What's missing?\" Students move between circles — try on projects. By end: choose where they feel most called and needed."
            },
            {
              title: "Step 4: Team Lock-In + Charter Writing",
              content: "Pick your team. Own your outcome. Each team writes a simple Project Charter: What are we building? Why does it matter? What does success look like in 6–8 weeks? What does each member need from this? How will we handle conflict?"
            },
            {
              title: "Step 5: Mentor Reveal — You as \"VC\"",
              content: "\"I don't fund ideas. I fund people.\" You show up in a new role — mentor, connector, and potential \"backer.\" You meet with each group: Offer a resource, connection, or pushback. Ask tough questions. Optional: small seed fund to teams who impress with clarity and heart."
            }
          ]
        }
      ]
    },
    {
      id: "phase3",
      title: "PHASE 3 – EXECUTE",
      tagline: "You've formed your team. You've claimed your mission. Now build something real — together.",
      sections: [
        {
          id: "section7",
          title: "EXECUTION PROCESS",
          subtitle: "From idea to reality",
          executionSteps: [
            {
              title: "1. Product & Service Clarity",
              questions: [
                "What problem are you solving — exactly?",
                "Who are you solving it for, and why does it matter to them now?",
                "What part of the product actually delivers the value? What's noise?",
                "Can you describe your offer in one compelling sentence — in your customer's language?",
                "Have you built and tested the simplest version that delivers the outcome?"
              ]
            },
            {
              title: "2. Target User Discovery",
              questions: [
                "Who is your ideal early adopter? Be specific.",
                "What workaround are they using today?",
                "What pain are they trying to escape, or outcome are they chasing?",
                "What do they already pay for — and how do you become essential?"
              ]
            },
            {
              title: "3. MVP & Assumption Testing",
              questions: [
                "What's your riskiest assumption right now?",
                "Have you tested it with a real person?",
                "What is the smallest experiment that will prove or disprove your current idea?",
                "Can you deliver the value without building the product?"
              ]
            },
            {
              title: "4. Value Proposition & Differentiation",
              questions: [
                "What is the emotional and practical before-during-after journey of your customer?",
                "What is your \"hell yes\" moment — the thing that makes people commit or stay?",
                "What makes your product different in a way that matters?",
                "Why would someone quit using you after two weeks?"
              ]
            },
            {
              title: "5. Revenue Mechanics",
              questions: [
                "Where is the first dollar coming from?",
                "How are you capturing value (one-time, recurring, subscription, usage-based)?",
                "What is the path to profitability?",
                "What pricing and packaging experiments have you tried?"
              ]
            },
            {
              title: "6. Systems & Feedback Loops",
              questions: [
                "What are your 3 key metrics right now?",
                "What system are you using to track progress?",
                "What is the biggest operational bottleneck?",
                "What feedback have you ignored or delayed acting on?"
              ]
            },
            {
              title: "7. The Entrepreneur's REAL Dilemma: Obstacles",
              description: "The 20% you didn't see coming is what will define you.",
              subtopics: [
                {
                  title: "A. Solving for \"X\"",
                  content: "\"X\" is the unpredictable. The uncomfortable. The underestimated: A mental block, fear, or doubt, A market twist you didn't foresee, A broken system you were sure would work, A lack of skill, confidence, or clarity. \"Solving for X\" is where your edge begins."
                },
                {
                  title: "B. Choose Your Path",
                  content: "Every founder reaches a point of friction — and then a fork in the road. \"I don't know how to do this.\" → Will you learn? \"What if I fail here?\" → What if this is your breakout moment? You are always choosing: I CAN or I CANNOT."
                },
                {
                  title: "C. Mentor Prompts",
                  content: "Help them spot and name their current obstacle — and face it directly: What's your \"X\" right now? What's the task or topic that brings up tension or hesitation? What action or conversation are you avoiding? What would you do if this obstacle never went away? Who's already solved this — and what can you learn from them?"
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Generate tab triggers for phases and their sections
  const generateTabs = () => {
    const tabs = [];
    phases.forEach((phase) => {
      phase.sections.forEach((section) => {
        tabs.push({
          id: section.id,
          label: section.id === "section7" ? "Execute" :
                 section.id === "section6" ? "Phase 2-2" :
                 section.id === "section5" ? "Phase 2-1" :
                 section.id === "section4" ? "Week 8" :
                 section.id === "section3" ? "Week 5-7" :
                 section.id === "section2" ? "Week 3-4" :
                 "Week 1-2",
          phaseId: phase.id
        });
      });
    });
    return tabs;
  };

  const tabs = generateTabs();

  return (
    <section id="curriculum" className="py-3">
      <div className="text-center mb-3">
        <Badge variant="outline" className="mb-2 border-purple-300 text-purple-700 px-3 py-1 rounded-full">Curriculum</Badge>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Program Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          GAPUniv: GET A PLAN University — Creating The Life You Want To Live
        </p>
      </div>

      <Tabs defaultValue="section1" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-3 rounded-full overflow-hidden">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="text-xs py-1.5"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {phases.map((phase) => (
          <div key={phase.id} className="mb-3">
            {phase.sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card className="p-3 border-t-4 border-t-purple-500 rounded-xl">
                  <div className="border-b border-gray-200 pb-3 mb-3">
                    <p className="text-sm font-medium text-purple-800">{phase.title}</p>
                    <p className="text-gray-600 italic text-xs">{phase.tagline}</p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 italic mb-3 text-sm">{section.subtitle}</p>
                  
                  {section.description && (
                    <div className="mb-3 bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm">{section.description}</p>
                    </div>
                  )}
                  
                  {section.weeks && (
                    <div className="space-y-3 mt-3">
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
                    <div className="mt-3 space-y-3">
                      {section.steps.map((step, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <h4 className="font-medium text-base mb-2 text-purple-700">{step.title}</h4>
                          <p className="text-sm text-gray-700">{step.content}</p>
                        </div>
                      ))}
                      
                      {section.goals && (
                        <div className="mt-2 p-3 bg-purple-50 rounded-md">
                          <p className="text-xs font-medium text-purple-700">Goals:</p>
                          <p className="text-gray-700 text-sm">{section.goals}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {section.executionSteps && (
                    <div className="mt-3 space-y-3">
                      {section.executionSteps.map((step, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <h4 className="font-medium text-base mb-2 text-purple-700">{step.title}</h4>
                          
                          {step.questions && (
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {step.questions.map((question, qIndex) => (
                                <li key={qIndex} className="text-gray-700">{question}</li>
                              ))}
                            </ul>
                          )}
                          
                          {step.description && (
                            <p className="text-sm text-gray-700 mb-2">{step.description}</p>
                          )}
                          
                          {step.subtopics && (
                            <div className="space-y-3 mt-3 pl-3">
                              {step.subtopics.map((subtopic, sIndex) => (
                                <div key={sIndex} className="border-l-2 border-purple-200 pl-3">
                                  <h5 className="text-sm font-medium text-purple-600 mb-1">{subtopic.title}</h5>
                                  <p className="text-xs text-gray-700">{subtopic.content}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </TabsContent>
            ))}
          </div>
        ))}
      </Tabs>
    </section>
  );
};

export default WeeklyBreakdown;
