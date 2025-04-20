import { Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const responsibilitiesData = [
  {
    title: "President",
    organization: "Google Developer Student Club",
    duration: "July 2023 - June 2024",
    description: " Led a team of 14 members in effectively organizing various technical workshops and skill development sessions.",
    impact: ["Increased club membership by 100%", "8x increase in digital reach of social media handles", "Helped 500+ students to gain new technical skills"]
  },
  {
    title: "Technical & Graphic Design Manager",
    organization: "The Entrepreneurship Cell",
    duration: "July 2022 - June 2023",
    description: "Designed and developed the StartUp Conclave website and crafted a visual marketing plan for E-Cell VNIT, including engaging social media posters, banners, standees, and ID cards.",
    impact: ["Led a team of 10 members", "Designed more than 5 posts in 1 day"]
  },
];

export default function ResponsibilitiesSection() {
  // Calculate dynamic grid columns based on number of items
  const itemCount = responsibilitiesData.length;
  const maxColumns = itemCount === 1 ? 1 : itemCount === 2 ? 2 : 3;
  const minCardWidth = itemCount === 1 ? '600px' : itemCount === 2 ? '450px' : '350px';

  return (
    <section id="responsibilities" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">College Responsibilities</h2>
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minCardWidth}), 1fr))`,
              justifyItems: 'center',
              justifyContent: 'center'
            }}
          >
            {responsibilitiesData.map((item, index) => (
              <Card 
                key={index} 
                className="opacity-0 animate-fade-in card-hover w-full"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  maxWidth: minCardWidth
                }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4">{item.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                      <Users size={16} className="mr-2" />
                      Key Contributions
                    </h4>
                    <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                      {item.impact.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
