const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  },
  {
    title: "Containerization",
    skills: ["Docker", "Kubernetes", "Helm", "Podman"],
  },
  {
    title: "CI/CD Tools",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    title: "Scripting & Languages",
    skills: ["Bash", "Python", "YAML", "Go"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices, from cloud infrastructure 
            to deployment automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl card-glass hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-mono text-primary text-sm mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Code Block */}
        <div className="mt-16 p-6 rounded-xl bg-background border border-border font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-danger" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground ml-2">terminal</span>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p><span className="text-primary">$</span> kubectl get skills --all-namespaces</p>
            <p className="text-success">✓ Cloud Infrastructure: AWS, Azure, GCP</p>
            <p className="text-success">✓ Containerization: Docker, Kubernetes</p>
            <p className="text-success">✓ CI/CD: Jenkins, GitHub Actions</p>
            <p className="text-success">✓ IaC: Terraform, Ansible</p>
            <p><span className="text-primary">$</span> <span className="terminal-cursor">_</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
