import { Download, FileText, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const experiences = [
    {
      title: "Frentend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect solutions for enterprise clients.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      achievements: [
        "Built 15+ responsive web apps",
        "Improved user engagement by 60%",
        "Established component library"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2020 - 2021",
      description: "Started my professional journey developing websites for small businesses and learning modern web technologies.",
      achievements: [
        "Delivered 25+ client projects",
        "Maintained 98% client satisfaction",
        "Learned React and Node.js"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "San Francisco, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Advanced Patterns",
    "Node.js Certified Developer"
  ];

  const handleDownloadResume = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/john-doe-resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
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