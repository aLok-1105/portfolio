import { Award, Calendar } from "lucide-react";

const achievementsData = [
  {
    title: " Finalist ",
    issuer: "Smart India Hackathon",
    date: "December 2024",
    description: "Top 5 teams among 250+ teams",
    certificateUrl: "https://drive.google.com/file/d/1fxceOATQDqmadxljR7fdpLRGSxzqC4_I/view?usp=drive_link"
  },
  {
    title: "Global Rank 2876",
    issuer: "Meta Hacker Cup",
    date: "October 2024",
    description: "Qualified for Round 2",
    certificateUrl: "https://drive.google.com/file/d/1zJ_HD4CoPXBjfRZ4m2Jmswg7_EL60lhb/view?usp=sharing"
  },
  {
    title: "Global Rank 534",
    issuer: "LeetCode Biweekly Contest 135",
    date: "July 2024",
    description: "All India Rank 95"
  },
  {
    title: "Global Rank 94",
    issuer: "CodeChef Starters 114",
    date: "December 2023",
    // description: "Recognized for senior project developing an innovative healthcare application."
  },
  {
    title: "Finalist of Shark Tank ",
    issuer: "NIT Roukela",
    date: "Feb 2022",
    description: " Top 8 among all participants",
    certificateUrl: "https://drive.google.com/file/d/18BOQMjg2dn4lcYSQJIm37ImHUzscQtHE/view?usp=share_link"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px" />
            
            <div className="space-y-12">
              {achievementsData.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-3 flex items-center justify-center">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                  
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } pl-10 md:pl-0`}>
                    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-3 text-sm mb-3">
                        <span className="text-primary font-medium">{achievement.issuer}</span>
                        <div className="hidden sm:block text-muted-foreground">•</div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={14} className="mr-1" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                      <p className="text-foreground/80 text-sm mb-4">{achievement.description}</p>
                      {achievement.certificateUrl && (
                        <a 
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Award className="w-4 h-4 mr-1" />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
