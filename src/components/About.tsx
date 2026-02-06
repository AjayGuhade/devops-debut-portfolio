import { Server, Cloud, GitBranch, Shield } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, Azure, GCP expertise",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Jenkins, GitHub Actions, GitLab CI",
  },
  {
    icon: Server,
    title: "Containerization",
    description: "Docker, Kubernetes, Helm",
  },
  {
    icon: Shield,
    title: "Infrastructure as Code",
    description: "Terraform, Ansible, CloudFormation",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="font-mono text-primary text-sm mb-4 block">// About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building <span className="text-gradient">Reliable</span> Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a fresher DevOps Engineer with a strong foundation in cloud technologies, 
              automation, and modern development practices. My journey in tech has equipped me 
              with the skills to bridge the gap between development and operations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm passionate about learning and implementing best practices in CI/CD, 
              container orchestration, and infrastructure automation. I believe in the power 
              of automation to transform how teams build and deploy software.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Certifications</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl md:text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Cloud Platforms</div>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl card-glass hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
