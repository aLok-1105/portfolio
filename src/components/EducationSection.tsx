// import { CalendarIcon, MapPin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const educationData = [
//   {
//     institution: "Visvesvaraya National Institute of Technology",
//     degree: " Bachelor of Technology in Civil Engineering",
//     location: "Nagpur, Maharashtra, India",
//     period: "2021 - 2022",
//     logo: "./VNIT.png",
//     achievements: ["GPA 8.89/10.0", "3rd Rank"],
//   },
//   {
//     institution: " St. Karen's High School",
//     degree: "Intermediate (Grade XII CBSE)",
//     location: "Patna, Bihar, India",
//     period: "2019 - 2021",
//     logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/St_Karen%27s_Logo.png",
//     achievements: ["Percentage- 95.8%"],
//   },
//   {
//     institution: "DAV Public School Walmi Complex",
//     degree: "Matriculation (Grade X CBSE)",
//     location: "Patna, Bihar, India",
//     period: "2019",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/DAV_CMC_Logo.svg/1200px-DAV_CMC_Logo.svg.png",
//     achievements: ["Percentage- 91.8%"],
//   },
// ];

// export default function EducationSection() {
//   return (
//     <section id="education" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
//         <div className="max-w-3xl mx-auto space-y-8">
//           {educationData.map((edu, index) => (
//             <div 
//               key={index} 
//               className="opacity-0 animate-fade-in"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <Card className="overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="flex flex-col md:flex-row">
//                     <div className="md:w-1/3 bg-secondary p-6 flex items-center justify-center">
//                       <img 
//                         src={edu.logo} 
//                         alt={edu.institution} 
//                         className="h-32 w-32 object-contain"
//                       />
//                     </div>
//                     <div className="md:w-2/3 p-6">
//                       <h3 className="text-xl font-semibold">{edu.institution}</h3>
//                       <p className="text-lg text-foreground/80 mb-2">{edu.degree}</p>
//                       <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-4 gap-y-1 sm:gap-x-4">
//                         <div className="flex items-center gap-1">
//                           <CalendarIcon size={16} />
//                           <span>{edu.period}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <MapPin size={16} />
//                           <span>{edu.location}</span>
//                         </div>
//                       </div>
//                       <div className="mt-4">
//                         <h4 className="text-sm font-semibold mb-2">Achievements</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {edu.achievements.map((achievement, i) => (
//                             <span 
//                               key={i} 
//                               className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
//                             >
//                               {achievement}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Card, CardContent } from '@/components/ui/educard';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  logo: string;
  achievements: string[];
}

const educationItems: Education[] = [
  {
    institution: "Visvesvaraya National Institute of Technology",
    degree: "Bachelor of Technology in Civil Engineering",
    location: "Nagpur, Maharashtra, India",
    period: "2021 - Present",
    logo: "./VNIT.png",
    achievements: ["CGPA: 8.89/10.0", "3rd Rank"],
  },
  {
    institution: "St. Karen's High School",
    degree: "Intermediate (Grade XII CBSE)",
    location: "Patna, Bihar, India",
    period: "2019 - 2021",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/St_Karen%27s_Logo.png",
    achievements: ["Percentage: 95.8%"],
  },
  {
    institution: "DAV Public School Walmi Complex",
    degree: "Matriculation (Grade X CBSE)",
    location: "Patna, Bihar, India",
    period: "2019",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/DAV_CMC_Logo.svg/1200px-DAV_CMC_Logo.svg.png",
    achievements: ["Percentage: 91.8%"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border border-slate-200 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="h-12 bg-gradient-to-r from-primary to-primary/60 group-hover:from-primary/80 group-hover:to-primary transition-colors duration-300" />
              
              <CardContent className="pt-6 pb-8 px-6">
                <div className="flex items-start mb-4">
                  <div className="relative bg-white rounded-full p-2 shadow-md -mt-10 mr-4 border-2 border-white group-hover:border-primary/20 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                      <img 
                        src={item.logo} 
                        alt={item.institution}
                        className="w-14 h-14 object-contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{
                          // imageRendering: "high-quality",
                          // WebkitImageSmoothing: "high",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {item.institution}
                    </h3>
                    <p className="text-muted-foreground">{item.degree}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-start">
                      <Award className="h-4 w-4 mr-2 text-primary mt-1" />
                      <div>
                        <h4 className="text-sm font-medium mb-2">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;