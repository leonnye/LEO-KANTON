import { useEffect } from 'react';
import { ArrowRight, Code2, Layout, Settings2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';

const services = [
  {
    title: "Website Design",
    description: "Beautiful, user-friendly designs that capture your brand's essence",
    icon: Layout
  },
  {
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    icon: Code2
  },
  {
    title: "Maintenance",
    description: "Ongoing support to keep your website running smoothly",
    icon: Settings2
  }
];

export default function Home() {
  const handleGetQuote = () => {
    const message = encodeURIComponent("Hello, I'm interested in your web development services. Can we discuss this further?");
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-10');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/80 via-purple-900/80 to-blue-950/80" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-on-scroll px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-purple-200 leading-tight">
            Transforming Ideas into Digital Realities
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-purple-200 max-w-2xl mx-auto">
            We craft exceptional web experiences that drive growth and engage users
          </p>
          <Button 
            size="lg"
            onClick={handleGetQuote}
            className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-6 text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Get Quote <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-lg border-purple-300/10 p-6 md:p-8 hover:transform hover:scale-102 transition-all duration-300 animate-on-scroll group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-12 h-12 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-violet-200">{service.title}</h3>
                <p className="text-purple-200/90">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="animate-on-scroll bg-black/40 backdrop-blur-lg">
        <About />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="animate-on-scroll">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="animate-on-scroll bg-black/40 backdrop-blur-lg">
        <Contact />
      </section>
    </div>
  );
}