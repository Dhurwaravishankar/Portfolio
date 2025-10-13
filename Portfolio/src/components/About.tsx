import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Finding creative solutions to complex technical challenges",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with designers, developers, and stakeholders",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always staying up-to-date with the latest technologies and trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-90 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-custom-lg ">
                <img
                  src={profilePhoto}
                  alt="Dhurwa - Frentend Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-spring ju"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi there! I'm Dhurwa Ravishankar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A passionate Frontend Developer with over 1 years of experience
                creating digital solutions that combine beautiful design with robust functionality.
                I specialize in React, and modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of coffee
                while brainstorming the next big idea.
              </p>
            </div>

            {/* Experience Summary */}
            <div className="bg-card rounded-xl p-6 shadow-custom-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">9+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-custom-md transition-smooth hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-spring">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;