import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const experienceData = [
  {
    company: "IIT Roorkee",
    position: "Research Intern",
    duration: "May 2024 - July 2024",
    description: [
      " Developed the Driver Monitoring System Project to recognize the state of the driver.",
      " Implemented various algorithms and researched to enhance driver safety while driving the vehicle.",
      "Used Python image processing libraries to implement algorithms and develop the project.",
    ],
    logo: "https://iitr.ac.in/space2023/assets/iitr_logo.png",
    tools: ["Python", "OpenCV", "Mediapipe",  "Computer Vision"],
  },
];

export default function ExperienceSection() {
  const [defaultOpen, setDefaultOpen] = useState("item-0");

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue={defaultOpen} className="space-y-6">
            {experienceData.map((exp, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="opacity-0 animate-fade-in border rounded-lg overflow-hidden bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center w-full">
                    <div className="w-12 h-12 mr-4 flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <ul className="mb-4 text-foreground/80 list-disc pl-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-sm">{point}</li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
