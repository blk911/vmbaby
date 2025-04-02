
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Former Gap Year Student",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      quote: "GAP Univ wasn't just a break from college—it was the most important preparation for my future I could have had. I discovered my core values and true interests."
    },
    {
      name: "Maya Williams",
      role: "Program Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      quote: "Before GAP Univ, I was following everyone else's expectations. This program gave me permission to redefine success on my own terms."
    },
    {
      name: "Jamal Richards",
      role: "Current Student",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80", 
      quote: "The self-discovery process here isn't always comfortable, but it's exactly what I needed. I'm building a vision for my life based on who I really am."
    }
  ];

  return (
    <section className="py-10 bg-violet-50 rounded-3xl mx-3">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-2 border-violet-300 text-violet-700 px-3 py-1 rounded-full">
          Testimonials
        </Badge>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Hear From Our Students
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Real stories from real people who transformed their lives through our program.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all rounded-xl h-full flex flex-col">
                  <AspectRatio ratio={1/1} className="w-full bg-gradient-to-br from-violet-100 to-indigo-50">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                  <div className="p-5 flex flex-col flex-grow">
                    <blockquote className="italic text-gray-600 mb-4 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="relative left-0" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext className="relative right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
