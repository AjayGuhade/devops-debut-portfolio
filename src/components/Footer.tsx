import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&lt;</span>
              DevOps Portfolio
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-danger fill-current" /> by Your Name
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
