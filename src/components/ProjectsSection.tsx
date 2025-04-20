import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Driver Monitoring System",
    description: "Used MediaPipe Face Mesh to track facial features and eye movements in real time. Detected driver drowsiness using EAR and mapped gaze positions on the windshield. Logged key metrics every 0.04s for analysis.",
    image: "https://www.valeo.com/wp-content/uploads/2022/01/driver-monitoring_05_v2-1_0x0_acf_cropped-scaled.jpg",
    tags: ["Python", "OpenCV", "Mediapipe",  "Computer Vision"],
    github: "https://github.com/aLok-1105/driver-monitoring-system",
    // demo: "https://ecommerce-demo.com",
  },
  {
    title: "Traventure",
    description: "Built a MERN-based travel-sharing platform with user-friendly Material-UI frontend. Enabled full CRUD functionality for profiles and posts, and deployed the app on Vercel.",
    // image: "https://traventure-iota.vercel.app/logo.png",
    image: "./traventure.png",
    tags: ["Web", "JavaScript", "ReactJs", "NodeJS", "MongoDB", "MaterialUI"],
    github: "https://github.com/aLok-1105/traventure",
    demo: "https://traventure-iota.vercel.app/",
  },
  {
    title: "Pokédex",
    description: "Created a virtual Pokédex using PokeAPI, showcasing 1000+ Pokémon with search and smooth navigation via React hooks and Router. Added a Guess the Pokémon game to enhance interactivity and user engagement.",
    image: "./pokedox.png",
    tags: ["Web", "ReactJs", "API"],
    github: "https://github.com/aLok-1105/pokedex",
    demo: "https://alok-1105.github.io/pokedex/",
  },
  // {
  //   title: "PostMitra",
  //   description: "ML-based movie recommendation engine using collaborative filtering algorithms.",
  //   image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop",
  //   tags: ["ReactJs", "NodeJs", "MongoDB"],
  //   github: "https://github.com/aLok-1105/PostMitra",
  // },
];

// Unique tags for filtering
const allTags = ["All", ...new Set(projectsData.flatMap((project) => project.tags))];

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = selectedTag === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Here are some of my recent projects showcasing my technical skills and creativity.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary/80 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  asChild 
                  className={project.demo ? "flex-1" : "w-full"}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
