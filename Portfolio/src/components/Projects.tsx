import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import project images
import weatherApp from "@/assets/weather-app.jpg";
import taskManager from "@/assets/task-manager.jpg";
import portfolioSite from "@/assets/portfolio-site.jpg";
import ecommerceLite from "@/assets/ecommerce-lite.jpg";

const Projects = () => {
  const projects = [
    {
      title: "WeatherNow App",
      description: "A beautiful weather application with real-time weather data, location-based forecasts, and an intuitive user interface.",
      image: weatherApp,
      techStack: ["React", "TypeScript", "Weather API", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/weather-app",
      liveUrl: "https://weather-now-demo.vercel.app",
      featured: true,
    },
    {
      title: "TaskManager Pro",
      description: "A comprehensive task management application with user authentication, team collaboration, and real-time updates.",
      image: taskManager,
      techStack: ["Node.js", "MongoDB", "React", "Socket.io"],
      githubUrl: "https://github.com/johndoe/task-manager",
      liveUrl: "https://taskmanager-pro-demo.vercel.app",
      featured: true,
    },
    {
      title: "MyPortfolio",
      description: "This very portfolio website showcasing my skills, projects, and experience with modern web technologies.",
      image: portfolioSite,
      techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      githubUrl: "https://github.com/johndoe/portfolio",
      liveUrl: "https://johndoe-portfolio.vercel.app",
      featured: false,
    },
    {
      title: "E-Commerce Lite",
      description: "A responsive e-commerce interface demo with product catalogs, shopping cart functionality, and modern UI design.",
      image: ecommerceLite,
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/johndoe/ecommerce-lite",
      liveUrl: "https://ecommerce-lite-demo.vercel.app",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
            in full-stack web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-custom-lg transition-smooth hover:-translate-y-2 overflow-hidden ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-spring"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 hover:bg-primary/10 transition-smooth"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="flex-1 hero-gradient text-white border-0 hover:scale-105 transition-spring"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary/20 hover:bg-primary/10 transition-smooth"
          >
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;