import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "CI/CD Pipeline for Microservices",
    description: "Designed and implemented a complete CI/CD pipeline using Jenkins and Docker for a microservices architecture. Includes automated testing, container building, and deployment to Kubernetes.",
    tags: ["Jenkins", "Docker", "Kubernetes", "Helm"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "Infrastructure Automation with Terraform",
    description: "Automated AWS infrastructure provisioning using Terraform. Created reusable modules for VPC, EC2, RDS, and S3 with proper state management and security practices.",
    tags: ["Terraform", "AWS", "IaC", "Python"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "Kubernetes Monitoring Stack",
    description: "Deployed a comprehensive monitoring solution using Prometheus and Grafana on Kubernetes. Custom dashboards for cluster health, application metrics, and alerting.",
    tags: ["Prometheus", "Grafana", "Kubernetes", "AlertManager"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "Ansible Configuration Management",
    description: "Created Ansible playbooks for automated server configuration and application deployment. Includes roles for web servers, databases, and security hardening.",
    tags: ["Ansible", "Linux", "Nginx", "Security"],
    github: "https://github.com",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of DevOps projects showcasing infrastructure automation, 
            CI/CD pipelines, and cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl card-glass hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
