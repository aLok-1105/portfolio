import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills?: string[];
  credentialUrl?: string;
  image?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Generative AI for NodeJs: OpenAI, LangChain - TypeScript",
    issuer: "Udemy",
    issueDate: "Sept 2025",
    skills: ["OpenAI", "LangChain", "TypeScript", "NodeJs"],
    credentialUrl: "https://www.udemy.com/certificate/UC-feccf36e-289b-4fdf-a8aa-d6def9ecfd4c/",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-feccf36e-289b-4fdf-a8aa-d6def9ecfd4c.jpg?v=1757161688000",
  },
];

const CertificationsSection: React.FC = () => {
  const isSingle = certifications.length === 1;
	return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>

		<div className={`grid gap-6 ${isSingle ? "grid-cols-1 place-items-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {certifications.map((cert, index) => (
            <Card
              key={index}
			  className={`overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in group ${isSingle ? "w-full max-w-2xl" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cert.image && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.issueDate}</span>
                </div>
                {cert.credentialId && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Credential ID: <span className="font-medium text-foreground/80">{cert.credentialId}</span>
                  </p>
                )}
                {!!cert.skills?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                {cert.credentialUrl && (
                  <Button asChild className="w-full">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Credential</span>
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
};

export default CertificationsSection;


