import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownload = () => {
    const resumeUrl = "https://drive.google.com/drive/folders/1C_RRgUM9vzZG97ae-i1_AShSVpXBNeUP?usp=sharing";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <div className="w-40 h-40 rounded-full border-4 border-primary mx-auto mb-8 overflow-hidden">
            <img
              src="./alok.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
            Alok Ranjan
          </h1>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          Competitive Coder | Aspiring Developer 
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <Button className="flex items-center gap-2" onClick={handleDownload}>
            <Download size={16} />
            Download Resume
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="#profile">
              Explore Portfolio <ArrowDown size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
