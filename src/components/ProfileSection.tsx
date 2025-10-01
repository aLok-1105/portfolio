import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const codingProfiles = [
  {
    platform: "CodeForces",
    username: "aloK_11",
    link: "https://codeforces.com/profile/aloK_11",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png",
    problems: 414,
    contests: 28,
    rating: "1403 (Specialist)",
  },
  {
    platform: "CodeChef",
    username: "alokranjan_11",
    link: "https://www.codechef.com/users/alokranjan_11",
    logo: "https://img.icons8.com/fluent/512/codechef.png",
    problems: 171,
    contests: 8,
    rating: "1755",
    stars: 3
  },
  {
    platform: "LeetCode",
    username: "alokranjan11052003",
    link: "https://leetcode.com/u/alokranjan11052003/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    problems: 788,
    contests: 10,
    rating: 1715,
  },
];

const RatingDisplay = ({ rating, stars }: { rating: string | number, stars?: number }) => {
  if (stars) {
    return (
      <div className="flex items-center justify-center gap-1">
        <span>{rating}</span>
        <span className="flex items-center text-yellow-500">
          ({Array.from({ length: stars }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))})
        </span>
      </div>
    );
  }
  return <div>{rating}</div>;
};

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile) => (
            <Card key={profile.platform} className="card-hover opacity-0 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={profile.logo}
                      alt={`${profile.platform} logo`}
                      className="h-6 w-6 object-contain"
                    />
                    <h3 className="text-xl font-semibold">{profile.platform}</h3>
                  </div>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">@{profile.username}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-secondary rounded-md">
                    <p className="font-semibold">{profile.problems}</p>
                    <p className="text-muted-foreground">Problems</p>
                  </div>
                  <div className="text-center p-2 bg-secondary rounded-md">
                    <div className="font-semibold">
                      <RatingDisplay rating={profile.rating} stars={profile.stars} />
                    </div>
                    <p className="text-muted-foreground">Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
