import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS","Sass/SCSS", "Responsive Design"
      ],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      title: "Backend",
      skills: [
        // "Node.js", "Express.js", "Python", "PostgreSQL", "Prisma", 
        "REST APIs", "Firebase", "Supabase","MongoDB"
      ],
      color: "bg-green-500/10 text-green-600 border-green-500/20",
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Netlify", 
        "Figma", "Postman", "VS Code", "Linux", "Firebase"
      ],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    },
  ];

  const proficiencyLevels = [
    { skill: "DevOps/Deployment", level: 100 },
    { skill: "UI/UX Design", level: 90 },
    { skill: "React/TypeScript", level: 70 },
    { skill: "Database Design", level: 85 },
    { skill: "Node.js/Express", level: 40 },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
            across the full stack development spectrum
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-custom-md transition-smooth hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-spring cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Proficiency Levels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full hero-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Machine Learning", "GraphQL", "React Native", "Three.js", 
              "Blockchain", "WebAssembly", "Progressive Web Apps", "Microservices"
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20 transition-smooth"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Currently exploring and expanding my knowledge in these emerging technologies
          </p>
        </div>
      </div>

    </section>
  );
};

export default Skills;