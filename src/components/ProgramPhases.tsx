
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const ProgramPhases = () => {
  // Program structure items
  const programItems = [
    {
      id: 1,
      title: "Personalized Discovery",
      content: "Uncover your unique passions and drivers through guided reflection and inquiry.",
      bgColor: "bg-violet-50",
      iconBg: "bg-violet-100",
      textColor: "text-violet-700"
    },
    {
      id: 2,
      title: "Authentic Connections",
      content: "Build lasting relationships and enhance relating skills with a deep dive into self-awareness.",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-700"
    },
    {
      id: 3,
      title: "Idea to Action",
      content: "Transform personal insights into tangible projects with team collaboration and mentorship.",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-700"
    },
    {
      id: 4,
      title: "Real-World Execution",
      content: "Develop, test, and refine your ideas with practical strategies and ongoing feedback.",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      textColor: "text-teal-700"
    }
  ];

  return (
    <section id="program" className="py-3">
      <div className="text-center mb-3">
        <Badge variant="outline" className="mb-2 border-violet-300 text-violet-700 px-3 py-1 rounded-full">Program Structure</Badge>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Program Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          A carefully structured program designed to help you discover yourself and build something meaningful.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {programItems.map(item => (
          <Card 
            key={item.id} 
            className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all rounded-xl"
          >
            <div className={`p-3 ${item.bgColor}`}>
              <div className={`h-9 w-9 rounded-full ${item.iconBg} flex items-center justify-center mx-auto`}>
                <span className={`${item.textColor} font-medium`}>{item.id}</span>
              </div>
              
              <div className="text-center p-3">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProgramPhases;
