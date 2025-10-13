import { Download, FileText, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "India",
    period: "2023 - Present",
    description:
      "Designing and developing interactive and user-friendly websites for clients using HTML, CSS, JavaScript, and React. Focused on creating clean, responsive interfaces and improving user experience.",
    achievements: [
      "Developed 10+ responsive websites for local businesses and startups",
      "Implemented dynamic features using JavaScript and React",
      "Worked with clients to understand requirements and deliver custom web solutions"
    ]
  },
  {
    title: "Web Development Trainee",
    company: "Navgurukul",
    location: "India",
    period: "2024 - 2025",
    description:
      "Trained in full-stack web development with hands-on projects, collaborative coding, and real-world problem solving.",
    achievements: [
      "Built multiple projects using HTML, CSS, and JavaScript",
      "Collaborated in group projects and hackathons",
      "Gained experience in responsive design and version control (Git)"
    ]
  },
  {
    title: "Project Intern",
    company: "Bastar Craft Startup (Self-Initiated)",
    location: "Bijapur, Chhattisgarh",
    period: "2021 - 2022",
    description:
      "Worked on a startup idea promoting Bastar’s traditional crafts and natural products through digital platforms.",
    achievements: [
      "Created a basic website to showcase local crafts and products",
      "Collaborated with local artisans for product cataloging",
      "Learned fundamentals of entrepreneurship and e-commerce presentation"
    ]
  }
];


  const education = [
    {
       degree: "Software Programming (HTML, CSS, JavaScript, React)",
    school: "Navgurukul",
    location: "India",
    period: "2024-2025 - Present",
      gpa: "3.8/4.0"
    },
    {
    degree: "Higher Secondary (Mathematics Stream)",
    school: "Bijapur Higher Secondary School",
    location: "Bijapur, Chhattisgarh",
    period: "2018 - 2020",
    percentage: "89%"
  },
  ];

  const certifications = [
    "AWS Certified Developer",
    "Version Controle Certified ",
    "Prompt Engineer Certified ",
    "Node.js Certified Developer"
  ];

  const handleDownloadResume = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/Dhurwa.pdf';
    link.download = 'Dhurwa.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey, education, and achievements in web development
          </p>
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="hero-gradient text-white border-0 shadow-glow hover:scale-105 transition-spring"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-medium">{edu.school}</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                      <p>GPA: {edu.gpa}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="w-full justify-center py-2 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-smooth"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Skills Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "React & TypeScript",
                    "Node.js & Express",
                    "Database Design",
                    "Cloud Deployment",
                    "Team Leadership"
                  ].map((skill, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? 'bg-primary' : 'bg-muted'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;