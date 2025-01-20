import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Leo Kanton transformed our online presence completely. Their attention to detail and creative solutions exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content: "Working with Leo Kanton was a game-changer for our business. They delivered a website that perfectly represents our brand."
  },
  {
    name: "Emma Williams",
    role: "Director, EduTech",
    content: "The team's expertise and professionalism made the entire development process smooth and enjoyable."
  }
];

export default function Testimonials() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-purple-200">
            What Our Clients Say
          </h1>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 p-8">
                    <blockquote className="text-lg mb-4">"{testimonial.content}"</blockquote>
                    <footer>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-purple-300">{testimonial.role}</p>
                    </footer>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}