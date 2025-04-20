
import { useState } from "react";
import { 
  PaintBucket, 
  Map, 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogClose 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Graphic Design Portfolio Data
const designProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    tags: ["Logo", "Branding"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    tags: ["Social Media", "Digital"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Poster Design",
    tags: ["Print", "Advertising"],
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1471&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Packaging Design",
    tags: ["Packaging", "3D"],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Editorial Layout",
    tags: ["Editorial", "Print"],
    image: "https://images.unsplash.com/photo-1633586435536-4722364e1836?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "UI Design Concept",
    tags: ["UI/UX", "Digital"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop",
  },
];

// Travel Data
const travelLocations = [
  {
    id: 1,
    name: "Kerala",
    description: "The beautiful backwaters and lush green landscapes.",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590123600433-7d9561dfa405?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609949217117-0d7b266495f3?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Rajasthan",
    description: "Desert landscapes with rich culture and majestic palaces.",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1472&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617516202907-ff85692a0cc0?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624810514113-166658b3b010?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Himachal Pradesh",
    description: "Breathtaking mountain views and serene valleys.",
    images: [
      "https://images.unsplash.com/photo-1626621474884-13ef507139d3?q=80&w=1476&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590676025937-5f9495897511?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626016144568-58a05bb9446d?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Goa",
    description: "Stunning beaches and vibrant nightlife.",
    images: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1374&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Maharashtra",
    description: "Beautiful caves and forts with rich history.",
    images: [
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588416499018-d8c621fa39d3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629196914168-289932432830?q=80&w=1470&auto=format&fit=crop",
    ],
  },
];

export default function HobbiesSection() {
  const [selectedDesign, setSelectedDesign] = useState<(typeof designProjects)[0] | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<(typeof travelLocations)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (!selectedLocation) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedLocation.images.length);
  };

  const prevImage = () => {
    if (!selectedLocation) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedLocation.images.length) % selectedLocation.images.length);
  };

  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Hobbies</h2>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-10 grid grid-cols-2">
            <TabsTrigger value="design" className="flex items-center gap-2">
              <PaintBucket size={16} />
              <span>Graphic Design</span>
            </TabsTrigger>
            <TabsTrigger value="travel" className="flex items-center gap-2">
              <Map size={16} />
              <span>Travel</span>
            </TabsTrigger>
          </TabsList>

          {/* Graphic Design Content */}
          <TabsContent value="design" className="w-full">
            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {designProjects.map((project, index) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="bg-card rounded-lg overflow-hidden shadow-md cursor-pointer group relative aspect-square"
                        onClick={() => setSelectedDesign(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center p-4 text-white">
                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs bg-primary/60 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>

            {/* Design Modal */}
            <Dialog open={!!selectedDesign} onOpenChange={(open) => !open && setSelectedDesign(null)}>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{selectedDesign?.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={selectedDesign?.image}
                    alt={selectedDesign?.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* Travel Content */}
          <TabsContent value="travel">
            <div className="relative">
              {/* Simple map representation with pin drops */}
              <div className="relative w-full max-w-4xl mx-auto bg-secondary/50 p-4 rounded-lg border border-border shadow-inner">
                <h3 className="text-lg font-semibold mb-4 text-center">Destinations I've Visited in India</h3>
                <div className="aspect-[4/3] bg-accent relative overflow-hidden rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/India_outline_map.svg"
                    alt="India Map"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Location pins */}
                  {travelLocations.map((location, index) => {
                    // Approximate positions (these should be properly calculated based on actual geography)
                    const positions = [
                      { top: "75%", left: "25%" },  // Kerala
                      { top: "45%", left: "30%" },  // Rajasthan
                      { top: "25%", left: "40%" },  // Himachal
                      { top: "60%", left: "20%" },  // Goa
                      { top: "55%", left: "35%" },  // Maharashtra
                    ];
                    
                    return (
                      <div
                        key={location.id}
                        className="absolute opacity-0 animate-fade-in"
                        style={{ 
                          top: positions[index].top, 
                          left: positions[index].left,
                          animationDelay: `${0.5 + index * 0.3}s` 
                        }}
                      >
                        <button
                          onClick={() => {
                            setSelectedLocation(location);
                            setCurrentImageIndex(0);
                          }}
                          className="w-6 h-6 bg-primary rounded-full relative pulse-animation hover:scale-110 transition-transform flex items-center justify-center text-white text-xs font-bold"
                          aria-label={`View photos from ${location.name}`}
                        >
                          {index + 1}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-center text-muted-foreground mt-4">
                  Click on a pin to view photos from that location
                </p>
              </div>
              
              {/* Location photo gallery modal */}
              <Dialog open={!!selectedLocation} onOpenChange={(open) => !open && setSelectedLocation(null)}>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="flex justify-between items-center">
                      <span>{selectedLocation?.name}</span>
                      <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary">
                        <X size={18} />
                      </DialogClose>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="relative">
                      <div className="aspect-[16/9] overflow-hidden rounded-lg">
                        {selectedLocation && (
                          <img
                            src={selectedLocation.images[currentImageIndex]}
                            alt={`${selectedLocation.name} - Photo ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      {/* Navigation arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {selectedLocation && `${currentImageIndex + 1} / ${selectedLocation.images.length}`}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-foreground/80">
                      {selectedLocation?.description}
                    </p>
                    
                    {/* Thumbnail gallery */}
                    <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2">
                      {selectedLocation?.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
                            idx === currentImageIndex ? "ring-2 ring-primary" : "opacity-70"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

